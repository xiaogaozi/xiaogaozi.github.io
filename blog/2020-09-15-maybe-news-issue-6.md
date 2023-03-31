---
title: "Maybe News Issue #6"
date: 2020-09-15 18:54:00 +0800
tags: [maybe news]
---

> 「Maybe News」是一个定期（或许不定期）分享一些可能是新闻的知识的[系列文章](/blog/tags/maybe-news)，名字来源于我非常喜欢的一个国内的音乐厂牌[「兵马司」](https://en.wikipedia.org/wiki/Maybe_Mars)（Maybe Mars）。你也可以通过[邮件订阅](https://maybe.news)它。

<!--truncate-->

## Presto: SQL on Everything

[[链接]](https://prestosql.io/Presto_SQL_on_Everything.pdf)

Presto 是 Facebook 2012 年开始开发并于 2013 年开源的分布式查询引擎。和[第 3 期](/blog/2020/06/10/maybe-news-issue-3)介绍的 Kudu 一样，主要应用在 OLAP 场景，但跟 Kudu 不一样的地方是，Presto 仅仅是一个查询引擎，并不负责数据存储。这也是论文标题「SQL on Everything」的含义，这里的「Everything」指代的即是任意类型的存储，比如 HDFS、MySQL 等。

论文开篇先总结了 Presto 几个值得关注的特点：

- Presto 是一个自适应的多租户系统（adaptive multi-tenant system），可以很容易扩展到上千节点的同时，还能有效利用集群资源。这里的「自适应」很重要，是将 Presto 和其它系统进行比较的要点之一。
- Presto 可以很方便地和多种数据源进行集成，甚至在 1 条查询语句里就可以同时查询多个数据源。Presto 通过连接器（connector）的概念统一底层存储的访问。
- 通过不同的配置可以让 Presto 同时适配不同的场景。关于这一点在后续介绍 Facebook 的查询场景时也有体现。
- Presto 通过很多关键特性实现了一个高性能的查询引擎。多个并行的查询在同一个 JVM 中运行，虽然可以降低响应时间，但同时也需要在调度、资源管理、隔离这些方面特别注意。

接下来介绍 Facebook 目前使用 Presto 的几个主要场景：

- **交互式分析（Interactive Analytics）**：这是将 Facebook 数据仓库作为数据源的查询场景。这个场景通常查询的数据量较小，压缩后大概 50GB-3TB 左右。单集群需要支持的并发查询量在 50-100 左右，秒级或者分钟级返回结果。用户对于查询时间非常敏感，但同时对于查询所需的资源量没有特别精确的判断。在进行探索式分析时，用户通常不需要返回所有结果集，只要有初步的结果或者满足 `LIMIT` 的限制整个查询就可以提前终止。
- **批量 ETL（Batch ETL）**：这个场景的用户一般是数据工程师，目前已经是 Facebook 内部一个很大的 Presto 应用场景。相比交互式查询，ETL 需要的资源也更多，不管是 CPU 还是内存，特别是当涉及到聚合或者 join 很多大表的时候。在这个场景查询时间反而没有那么重要，更加重要的是资源利用率和整体集群的吞吐。
- **A/B 测试（A/B Testing）**：为了满足用户对产品验证越来越快的需求，A/B 测试的结果需要在小时级（而不是天级）内得到，并保证数据完整且精确。当用户需要进行更深层次的分析时，查询结果需要在 5-30 秒左右返回。很难通过预聚合（pre-aggregating）的方式满足这些查询需求，因此必须通过在线计算来解决。查询会涉及到 join 多个大的数据集，同时查询语句的特征是相对固定的。
- **开发者／广告主分析（Developer/Advertiser Analytics）**：这是面向外部开发者或者广告主的分析场景，比如 [Facebook Analytics](https://analytics.facebook.com)。同 A/B 测试场景一样，这个场景的查询语句特征也是相对固定的。虽然总的数据规模很大，但是用户查询时因为会限制在他自己的数据里相对来说查询量会小很多。数据接入（data ingestion）的时延大概是分钟级，查询时延需要严格限定在 50 毫秒到 5 秒左右。因为应用在外部商业产品，Presto 集群的可用性需要保证在 99.999%，并且支持上百并发查询。

以上这些场景可能除了 ETL 以外，也是目前很多公司使用 Presto 的主要场景，总的来说主要还是应用在交互式查询上。

然后是 Presto 整体的架构介绍，集群分为两种类型的节点：coordinator 和 worker。Coordinator 节点负责解析、规划以及优化查询，通常只会有 1 个。Worker 节点负责处理查询请求，根据集群规模可以横向扩展。

当客户端通过 HTTP 请求将 SQL 发送给 coordinator 时，经过解析和分析，coordinator 会生成一个分布式执行计划（distributed execution plan）。这个执行计划由多个 stage 连接而成，类似一个 DAG 的形式。因为这是一个分布式执行计划，stage 会被分发到不同的 worker，因此 stage 之间需要通过 shuffle 来交换数据。每个 stage 内部由多个 task 组成，一个 task 可以被看作一个处理单元（processing unit）。Task 内又由多个 pipeline 构成，一个 pipeline 内包含一系列的 operator。到这里，operator 已经是最小的处理单位，通常只负责某一类单一计算任务。

Coordinator 很大一部分工作是负责调度，调度分为三个维度：stage、task 和 split。Stage 调度决定 stage 的执行顺序；task 调度决定多少任务需要被调度以及应该分配给哪些 worker；split 调度决定 split 会被分配给哪些任务（关于 split 这个概念后面会详细介绍）。

调度 stage 分为两种策略：all-at-once 和 phased。All-at-once 很好理解就是所有 stage 并行执行，这个策略可以最大化执行效率，适合时延敏感的场景（如交互式分析）。而 phased 策略就是只并行执行那些强关联的组件，整体任务分阶段执行，这个策略可以有效降低内存占用，适合 ETL 场景。

当 stage 调度成功，coordinator 即会开始分配 task。任务调度器将 stage 分为两类：leaf 和 intermediate。Leaf stage 负责从连接器中读取数据，intermediate stage 负责处理来自其它 stage 的中间结果。对于 leaf stage，任务调度器会根据如网络拓扑、数据本地性这些因素来决定应该把 task 分配给哪些 worker 节点，这个过程依赖连接器实现的 Data Layout API。如果没有任何限制，Presto 倾向于把 leaf stage 的任务分散到整个集群，以加快数据读取效率。Intermediate stage 的任务可以被分配到任意节点上，但是调度器仍然需要决定当前每个 stage 有多少任务需要被调度，且这个任务数是可以在运行时动态调整的。

当 leaf stage 的任务分配好以后，这个 worker 节点便可以开始接收来自 coordinator 分配的 split。Split 是对底层数据的逻辑封装，例如底层存储是 HDFS，那一个 split 通常包含的信息有文件路径、文件偏移等。Leaf stage 的任务必须至少分配一个 split 才能开始运行，而 intermediate stage 的任务是一直可运行的。Split 的创建由连接器负责，并且懒分配给 leaf stage 的任务，也就是说并不会等到所有 split 都创建完毕。这样做有几个好处：

- 将连接器创建 split 的时间从查询中解耦。某些连接器（如 Hive）可能需要花费很长时间去遍历分区和 list 文件。
- 查询可以尽快开始执行而不用等到所有数据处理完毕。在交互式分析场景很有可能查询会被提前中断。
- 每个 worker 维护了一个 split 的队列，coordinator 分配 split 时会优先选择队列长度最短的节点。
- 不用一次保存所有 split 的元信息。对于 Hive 连接器来说很有可能会产生上百万个 split，这会直接导致 coordinator 内存不足。

介绍完了 coordinator 的工作接下来就是 worker。前面已经提到最小的执行单位是 operator，operator 负责处理输入数据，同时输出处理完的数据。Operator 输入输出的数据单元叫做 page，一个 page 是连接器将 split 中的多行数据转为列式存储以后产生的数据结构。Shuffle 也是 worker 的主要工作之一，区别于传统的 Hadoop 组件，Presto 是基于全内存的 shuffle 实现，这也是 Presto 性能更优的原因之一。Shuffle 的数据会暂存在内存缓冲区（buffer）中，简单理解 map 端的缓冲区为输出缓冲区，reduce 端的为输入缓冲区。这两个缓冲区都是有容量限制的，会根据数据消费的速率动态调整生产速率，确保整体任务的稳定性以及多租户之间的公平性。当输出缓冲区容量持续偏高时，Presto 会减少可消费的 split 数量。输入缓冲区这端会有一个类似 TCP 滑动窗口的策略动态控制上游的生产速率。

回顾开篇总结的 Presto 特点，其中很重要的一个是**自适应的多租户场景**，上一段落介绍 shuffle 缓冲区的时候其实已经涉及到部分针对性的优化。本质上资源管理需要考虑的就是 CPU 和内存这两种资源，Presto 分别都有不同的解决方案。

CPU 调度场景每个 split 都会有一个允许在一个线程上一秒内执行的最大 quanta，当 quanta 超出时这个 split 将会被放回队列释放线程给其它 split。当输出缓冲区满（下游消费慢）、输入缓冲区空（上游生产慢）或者集群内存紧张时，即使 quanta 没使用完调度器也会强行切换任务。这个基于 quanta 的调度策略使得 Presto 能够最大化 CPU 资源的利用率。当线程被释放应该如何挑选下一个运行的任务呢？Presto 建立了一个 5 级的反馈队列（feedback queue），每个等级都分配了一个可配置的 CPU 时间比例。随着一个任务使用的 CPU 时间不断累积，这个任务会移动到更高等级的队列。也就是说 Presto 倾向于优先执行那些「快」的任务，因为用户期望轻的查询尽快完成，而对于那些重的查询所需的时间不太敏感。

内存管理是一个比 CPU 更复杂的场景。Presto 将内存分为两种类别：用户（user）和系统（system），并分别维护不同的内存池。引擎对用户内存和总内存（用户 + 系统）都有不同的限制，超过全局（所有 worker 聚合以后）或者单节点内存限制的任务将会被强行杀掉。虽然有全局的内存限制，但是为了满足并行执行多个任务的需求通常还是会超卖（overcommit）内存，即使真的出现部分节点内存耗尽的情况，Presto 也提供了两种机制去确保整体集群的稳定性。这两种机制分别是：spilling 和预留内存池（reserved pool）。Spilling 其实就是在节点内存耗尽时按照任务的执行时间升序排列，依次把内存中的状态写到本地磁盘。不过 Facebook 内部并没有开启这个特性，因为集群资源（TB 级的内存）足够支撑用户的使用场景，全内存计算也更加能保证查询的执行时间。如果没有开启 spilling 特性，那 Presto 将会采用预留内存池的策略。这个策略的大意是把内存池分为通用（general）和预留（reserved）两种，当一个 worker 节点的通用内存池耗尽时将会把这个节点上占用最多内存的查询「晋升」到预留内存池，整个集群同一时间只允许一个查询晋升。后续的内存申请会优先满足这个晋升的查询，直到它执行完毕。这个策略当然会影响整体集群的效率，因此用户也可以选择直接杀掉查询。

最后是容错（fault tolerance）。作为一个多租户的分布式系统，优良的容错性是一个必不可少的需求。但是遗憾的是在这一点上 Presto 做得并不好，coordinator 依然是单点（一个题外话，Starburst Data 这家提供商业 Presto 版本的公司[支持 coordinator HA](https://docs.starburstdata.com/latest/aws/high-availability.html)），worker 宕机将会导致所有运行在这个节点上的查询失败（社区有[一](https://github.com/prestodb/presto/issues/9855)[些](https://github.com/prestosql/presto/issues/455) issue 但是目前没有进展），Presto 非常依赖客户端自己去重试。Facebook 内部是通过外部的编排系统来确保集群的可用性，对于交互式分析和 ETL 场景有 standby 的 coordinator，A/B 测试和开发者／广告主分析场景部署了多活（multiple active）集群。监控系统将会识别不可用的节点自动从集群中移除，并在之后再重新加入集群。

在开发 Presto 的过程中，作者也总结了一些工程上的经验：

- **自适应胜过手动调优（Adaptiveness over configurability）**：前面已经介绍了很多 Presto 自适应的特性，作者认为当面对一个多租户场景，且查询的特征千变万化的时候，自适应显得尤为重要。否则就需要人工去针对性地手动调优，这种方式在面对大规模的查询场景时是没法扩展的。
- **非常轻松地监控（Effortless instrumentation）**：Presto 作者相信可观察（observable）的系统设计是非常重要的，要允许工程师去了解和优化自己代码的性能。Presto 每个 worker 平均导出了约 10000 个监控指标，粒度细到了 operator 级别，并会聚合到 task 和 stage 级别。
- **静态配置（Static configuration）**：错误的配置可能会对系统性能造成非常大的影响，为了保证时刻对系统整体状态有一个清晰的了解，Presto 作者选择使用静态配置的方案而不是动态配置。
- **垂直集成（Vertical integration）**：这其实是一个要不要重复造轮子的问题，对于一个大型项目来说肯定会依赖很多基础库，那什么时候选择用开源实现，什么时候选择自研是一个需要认真思考的问题（当然类似 Google 这种只考虑自研的公司就没有这个困扰了）。Presto 作者倾向于在那些对性能和效率要求比较高的场景选择自研。

最后是一个八卦。Presto 最早是由一批 Facebook 的员工开发，2018 年这批员工中的部分核心离职，全职建设 Presto 开源社区。2019 年 1 月 31 日[成立](http://www.prweb.com/releases/presto_software_foundation_launches_to_advance_presto_open_source_community/prweb16070792.htm)「Presto Software Foundation」，并在 GitHub 上创建了新的组织 [PrestoSQL](https://github.com/prestosql)。有趣的是在 2019 年 9 月 23 日 Facebook 联合多家公司[成立](https://www.linuxfoundation.org/press-release/2019/09/facebook-uber-twitter-and-alibaba-form-presto-foundation-to-tackle-distributed-data-processing-at-scale)了一个新的基金会叫「Presto Foundation」，在 GitHub 上的组织叫 [PrestoDB](https://github.com/prestodb)。按照 Presto 作者的[说法](https://github.com/prestosql/presto/issues/380)，他们在成立 Presto Software Foundation 之后其实是有邀请过 Facebook 加入的，但是显然对方拒绝了这个邀请。于是你会发现目前在开源社区有两个版本的 Presto，并且项目名是一样的，不过为了便于区分一般还是分别叫做 PrestoSQL 和 PrestoDB。前者背后的商业公司主要是 Starburst Data，这家公司的 3 个 CTO 同时也是 Presto 的原始作者（是的，这家公司有 3 个 CTO）；后者背后的商业公司有 Facebook、Uber、Twitter、阿里巴巴、Alluxio 和 Ahana。为了不至于让用户混淆，Starburst Data 还在官网[比较](https://www.starburstdata.com/prestosql-and-prestodb)了这两个版本的 Presto。目前公有云厂商提供的产品中，[AWS Athena](https://docs.aws.amazon.com/athena/latest/ug/presto-functions.html)、[阿里云 DLA](https://help.aliyun.com/document_detail/169871.html) 都是基于 PrestoDB 开发的 serverless 产品，[AWS EMR](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html) 两种 Presto 都支持，[Google Dataproc 1.5](https://cloud.google.com/dataproc/docs/concepts/versioning/dataproc-release-1.5)、[阿里云 EMR 3.25.0](https://help.aliyun.com/document_detail/132036.html?#title-fm0-jq8-sog) 以后默认集成的是 PrestoSQL，[腾讯云 EMR](https://cloud.tencent.com/document/product/589/20279) 默认集成的是 PrestoDB。

## Spark Architecture: Shuffle

[[链接]](https://0x0fff.com/spark-architecture-shuffle)

要理解什么是 shuffle 就得先了解什么是 MapReduce，自从 2004 年 Google 那篇惊世骇俗的介绍 MapReduce 的[论文](https://research.google/pubs/pub62)发表以来，大数据的生态就被彻底改变了（并沿用至今）。基于这样一个简单的编程模型实现了各种复杂的计算逻辑，但也存在一些「问题」，shuffle 就是其中一个。当 map 任务完成以后，数据需要根据 partition 策略重新分配到不同的 reduce 任务中，这个过程即称为 shuffle。这篇文章详细介绍了 Spark 历史上各种 shuffle 方案是怎么实现的。

## Cosco: An Efficient Facebook-Scale Shuffle Service

[[链接]](https://databricks.com/session/cosco-an-efficient-facebook-scale-shuffle-service)

接上一篇文章，这是 Facebook 在 2018 年的 Spark+AI Summit 上的一个分享，介绍了他们实现的一个外部 shuffle 服务 Cosco，可以同时用于 Hive 和 Spark 任务。当时已经在 90%+ 的 Hive 任务上使用，并在生产环境运行 1 年以上，Spark 任务也在逐渐推广中。为什么要开发一个外部 shuffle 服务呢？Facebook 列举了一些他们当时面临的问题，比如单次 shuffle 需要交换的数据量级是 PiB 级，总共有 10 万个 mapper、1 万个 reducer，3 倍的写放大（shuffle 1 PiB 的数据实际要写 3 PiB 到磁盘），平均 IO 大小只有 200 KiB。这些都是促使他们开发 Cosco 的原因（当然不是所有公司都会遇到），另一个好处是 executor 变成了无状态，对于动态伸缩更加友好。如果对 Cosco 有兴趣还可以继续看一看他们在 2019 年的 Spark+AI Summit 上做的[后续分享](https://databricks.com/session_na20/flash-for-apache-spark-shuffle-with-cosco)。

## Federated Learning: Collaborative Machine Learning without Centralized Training Data

[[链接]](https://ai.googleblog.com/2017/04/federated-learning-collaborative.html)

传统机器学习中的优化算法（例如 [SGD](https://en.wikipedia.org/wiki/Stochastic_gradient_descent)）是将大规模数据集分布式运行在多个节点上，这需要低延时、高吞吐地读取训练数据，因此数据一般都是提前收集到一个中心化存储里。但是在某些场景并不适合这样做，不管是因为数据量太大不易收集，还是出于数据隐私的考虑。因此 Google 提出了联邦学习（Federated Learning）的概念，这个词源于发表在 2017 年 AISTATS 会议上的一篇论文 [Communication-Efficient Learning of Deep Networks from Decentralized Data](https://arxiv.org/abs/1602.05629)。联邦学习的大体思想就是在数据的生产端（例如你的手机）直接进行模型训练，经过汇总以后把对模型的更新数据发送到服务端，服务端再把其它客户端上传的更新数据一起汇总生成一个新的模型，最后下发这个新模型到所有客户端。可以看到整个过程中训练数据依然保留在客户端，并不需要上传。如果你在 Android 系统中使用 Gboard 这个 app，那其实你已经参与到联邦学习的过程中了，当然只会在当你的手机空闲并且连接电源和 Wi-Fi 的时候才会进行。

## 分布式文件系统架构对比

[[链接]](https://juicefs.com/zh-cn/blog/engineering/distributed-filesystem-comparison)

2003 年 Google 发表了 [The Google File System](https://research.google/pubs/pub51) 论文，就像前面提到的 MapReduce 一样，从此对业界产生了非常深远的影响。这篇博客梳理了 GlusterFS、CephFS、GFS、HDFS、MooseFS 和 [JuiceFS](https://juicefs.com) 这几个分布式文件系统的架构设计。随着网络带宽的发展，在云计算和云原生的大趋势下，总的来说正逐步朝着存储计算分离的方向演进，这对于基础设施的架构也有着一定的要求。
