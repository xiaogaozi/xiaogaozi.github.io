---
title: "Maybe News Issue #7"
date: 2020-11-15 16:37:20 +0800
tags: [maybe news]
---

> 「Maybe News」是一个定期（或许不定期）分享一些可能是新闻的知识的[系列文章](/blog/tags/maybe-news)，名字来源于我非常喜欢的一个国内的音乐厂牌[「兵马司」](https://en.wikipedia.org/wiki/Maybe_Mars)（Maybe Mars）。你也可以通过[邮件订阅](https://maybe.news)它。

<!--truncate-->

## Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores

[[链接]](https://databricks.com/research/delta-lake-high-performance-acid-table-storage-overcloud-object-stores)

14 年前，Amazon 发布了 EC2（Elastic Compute Cloud）和 S3（Simple Storage Service）这两个划时代的产品，从此「云计算」这个词开始进入大众的视野，经过十几年的发展已经逐渐被大众所认知与接受。「云」意味着近乎无限的资源，EC2 为用户提供了计算资源，S3 为用户提供了存储资源。传统基于 Hadoop 的大数据平台是将这两种资源绑定在一起的，而迁移到云端以后非常自然地会想到将存储资源转到类似 S3 的对象存储中，从而真正实现存储计算分离的架构，能够更加弹性地管理计算和存储这两种天生异构的资源，既大幅节约了成本还省去了运维 HDFS 集群的各种烦恼。

作为 Spark 的发明者，Databricks 这家商业公司的很多客户同时也是 AWS 的客户，因此有着非常丰富的在大数据场景使用 S3 的经验。这些经验暴露了 S3（或者类似的对象存储）作为 HDFS 替代者的种种缺陷。

对象存储（object store）的用户可以创建很多 bucket，每个 bucket 中存储了很多对象（object），每个对象都会有一个唯一的 key 作为标识。因此对象存储本质上是一个 K/V 存储，这一点非常重要，因为通常的认知都会将对象存储等同于文件系统（file system）。对象存储中的「目录」其实是通过 key 的前缀模拟出来的，虽然对象存储提供类似 LIST 目录这样的 API，底层实现却是遍历相同前缀的对象，这个操作在文件系统中是 O(1) 的时间复杂度，但在对象存储中是 O(n)。更加严重的情况是，S3 的 LIST API 每次请求最多返回 1000 个 key，单次请求延时通常为几十到几百毫秒，因此当处理超大规模的数据集时单单花在遍历上的时间就可能是分钟级。重命名对象或者目录也是一样，文件系统是一个原子操作，对象存储是先拷贝到新路径，再删除原路径的对象，代价非常高。

另一个对象存储严重的问题是一致性模型，S3 的一致性模型是[最终一致性](https://docs.aws.amazon.com/AmazonS3/latest/dev/Introduction.html#ConsistencyModel)。当某个客户端上传了一个新的对象以后，其它客户端并不一定保证能立即 LIST 或者读取这个对象。当一个对象被更新或者删除以后也会发生同样的现象，即使是负责写入的这个客户端自己也有可能遇到。S3 能确保的一致性是 read-after-write，也就是说 PUT 请求产生以后的 GET 请求是保证一定能返回正确数据的。

论文概述了目前大数据存储的 3 种方案：分区目录、自定义存储引擎、元数据在对象存储中，下面分别介绍。

**分区目录**顾名思义就是将数据按照某些属性进行分区，比如日期。这是大数据领域非常普遍的做法，好处是可以根据分区过滤不需要的数据，也就能减少 LIST 请求的数量。这个方案并没有解决前面提到的对象存储的问题，因此缺点也很明显：不支持跨多个对象的原子操作、最终一致性、低性能、不支持多版本和审计日志。

**自定义存储引擎**的意思是在云上实现一个独立的元数据服务，类似 Snowflake、[JuiceFS](https://juicefs.com) 的做法。对象存储只是被当作一个无限容量的块存储，一切元数据操作都依赖这个单独的元数据服务。这个方案的挑战是：

- 所有 I/O 操作都需要经过元数据服务，这会带来额外的请求开销，降低性能和可用性。
- 实现一个与现有计算引擎互通的连接器（connector）需要更高的工程成本
- 用户会因为元数据服务而绑定在某一个特定的服务供应商上，没法直接访问对象存储中的数据。

**元数据在对象存储中**是 Databricks 提倡的方案，即今天介绍的 Delta Lake。这个方案和前一个的本质区别是不存在一个中心化的元数据服务，元数据是通过「日志」的形式直接存放在对象存储中。从目录结构上来看，Delta Lake 定义了一种特殊的存储格式，例如对于更新或者删除的数据会产生很多小的 delta 文件。这一点上其实跟 [Hive 实现 ACID](https://issues.apache.org/jira/browse/HIVE-5317) 的设计很像，后者在 2013 年就已经开始开发，而 Delta Lake 项目是 2016 年启动，很难说有没有借鉴的成分。更加类似 Delta Lake 的是另外两个项目：[Apache Hudi](https://hudi.apache.org) 和 [Apache Iceberg](https://iceberg.apache.org)，关于这几个项目的异同后面会有一个更详细的介绍，Databricks 目前宣传的一些 Delta Lake 独有的特性（比如 Z-order clustering）其实并没有开源。

Delta Lake 的思想其实很好理解，本质上是把所有操作都通过日志的形式记录下来，当读取时需要重放这些日志来得到最新的数据状态，最终实现 ACID 的语义。优化的点在于怎么加速整个流程，比如定期合并日志为一个 checkpoint、索引最新的 checkpoint 等。这种把日志作为元数据的设计解决了前面提到的对象存储最终一致性的问题，即只依赖日志来确定具体读取的文件，而不是简单通过 LIST 一个目录。但是从论文描述的场景来看还是有可能因为最终一致性踩坑（因为依然会用到 LIST API），至于这个概率有多大就不知道了，因此我对于是否能根本性解决一致性问题存疑。

写数据的时候有一个地方需要特别注意，日志文件的文件名是递增且全局唯一的 ID，因为写入存在并发，所以需要在这一步保证操作的原子性。根据不同的对象存储有不同的解决方案：

- Google Cloud Storage 和 Azure Blob Store 因为支持原子 put-if-absent 操作，因此可以通过这个 API 实现。
- 对于支持原子 rename 的文件系统（比如 HDFS、Azure Data Lake Storage），可以通过这种方式实现。
- 如果以上功能都不支持（比如 S3），在 Databricks 的企业版本里是通过一个独立的轻量级协调服务（coordination service）来确保 ID 递增的原子性。在开源版本的 Spark 连接器里是通过 Spark driver 来统一分配 ID，这样也能保证在 1 个 Spark 任务里可以并发写。你也可以通过 `LogStore` 这个接口实现一个类似 Databricks 提供的协调服务。因为依赖了一个中心化的服务（虽然只是在写数据时），也一定程度上破坏了 Delta Lake 宣扬的去中心化思想。

由于日志中记录了所有的历史操作，并且数据和日志都是不可变的（immutable），因此 Delta Lake 可以很轻松实现时间旅行（Time Travel）功能，也就是重现某个历史时刻的数据状态。Delta Lake 通过类似 `TIMESTAMP AS OF` 这种语法的 SQL 可以让用户指定读取某个时间的数据，不过这个 SQL 语法目前在开源版本中还[不支持](https://github.com/delta-io/delta/issues/128)。

Delta Lake 也可以很好地跟流式计算进行结合，不管是生产者还是消费者都可以利用 Delta Lake 的 API 来实现流式写和读数据。当然毕竟因为是 Databricks 开发的产品，目前结合得最好的肯定是 Spark Structured Streaming。你问支持 Flink 吗？至少 Databricks 员工的[回答](https://github.com/delta-io/delta/issues/156#issuecomment-552503730)是还在计划中，短期内估计没戏。

最后是性能评测部分。首先评测的是 LIST 大量文件的场景，通过对同一张表进行不同程度地分区来模拟不同量级的文件，评测的引擎是 Hive、Presto、Databricks Runtime（企业版 Spark，以下简称 DR），其中 Hive 和 Presto 读取的数据格式是 Parquet，DR 读取的格式是 Parquet 和 Delta Lake。Hive 在有 1 万个分区时总时间已经超过 1 小时；Presto 稍好一些在 10 万个分区时才超过 1 小时；DR + Parquet 在 10 万个分区时的耗时是 450 秒（得益于并发执行 LIST 请求）；DR + Delta Lake 在 1 百万分区时的耗时才 108 秒，如果启用了本地缓存可以进一步缩短到 17 秒，可以看出来优化效果非常明显。这个结果也基本符合预期，毕竟 Delta Lake 主要目标之一就是优化 list 的性能（以及一致性），对象存储在元数据性能上肯定没有优势。

接下来是更接近真实场景的 TPC-DS 测试，数据集大小是 1 TB，测试结果取的是 3 次运行时间的平均值。最后的数据是 Presto + Parquet 耗时 3.76 小时，社区版 Spark + Parquet 耗时 1.44 小时，DR + Parquet 耗时 0.99 小时，DR + Delta Lake 耗时 0.93 小时。DR + Parquet 相比社区版 Spark 快的主要原因是 DR 做了很多运行时和执行计划的优化，相比之下 DR + Delta Lake 并没有比直接读取 Parquet 提升太多，论文中的解释是 TPC-DS 的表分区都不大，不能完全体现 Delta Lake 的优势。

总结一下，Delta Lake 的思想其实并不复杂，也是工业界为了解决对象存储诸多问题的一种尝试，虽然并不能完全解决（比如原子重命名和删除）。在大数据存储上实现 ACID 这一点对于构建实时数仓至关重要，Delta Lake 通过一种简单统一的方式实现了这个需求，而不用像传统的 [Lambda 架构](https://en.wikipedia.org/wiki/Lambda_architecture)一样再单独部署一套存储系统（比如 HBase、Kudu）。但现在流式计算领域的风头已经从 Spark 逐渐转向了 Flink，像 Delta Lake 这种只对 Spark 支持的技术在某种程度上也会限制它的普及，相比之下 Iceberg 和 Hudi 似乎更有竞争力。

## Delta Engine: High Performance Query Engine for Delta Lake

[[链接]](https://www.youtube.com/watch?v=o54YMz8zvCY)

前面介绍了 Delta Lake，算是 Databricks 今年一个重量级的开源产品，但其实真正的杀手锏并没有开放出来，也就是这里要介绍的 Delta Engine。简单介绍这是一个在 Delta Lake 之上，基于 Spark 3.0 的计算引擎。Delta Engine 主要包含 3 部分：原生执行引擎（Native Execution Engine），查询优化器（Query Optimizer）以及缓存（Caching）。这个视频重点介绍了原生执行引擎，这个引擎的代号是 Photon，它使用 C++ 编写，并且实现了目前在 OLAP 领域很火的向量化（vectorization）功能，感兴趣的同学强烈建议阅读 [MonetDB/X100: Hyper-Pipelining Query Execution](http://cidrdb.org/cidr2005/papers/P19.pdf) 这篇论文，Databricks 厉害的地方在于是跟论文作者 Peter Boncz 一起合作设计。在 30 TB 的 TPC-DS 测试中，Photon 带来了 3.3 倍的性能提升。关于查询优化器以及缓存功能的介绍可以参考 Delta Engine 的[文档](https://docs.databricks.com/delta/optimizations/index.html)。

## A Thorough Comparison of Delta Lake, Iceberg and Hudi

[[链接]](https://databricks.com/session_na20/a-thorough-comparison-of-delta-lake-iceberg-and-hudi)

Iceberg 和 Hudi 是另外两个会经常拿来跟 Delta Lake 做比较的对象，Iceberg 是 Netflix 开源，而 Hudi 是 Uber 开源。它们之间有着诸多相似之处，又有着很多截然不同的设计思想。这个视频来自腾讯云数据湖团队的陈俊杰，比较系统地对比了这 3 种技术。相对来说 Iceberg 的设计是这 3 个里面最中立的，不跟某种特定的格式和引擎绑定，这也是腾讯选择 Iceberg 的原因之一，具体可以看[「为什么腾讯看好 Apache Iceberg？」](https://www.infoq.cn/article/59lbbuvcrzlusmdowjbb)这篇文章。

## Bringing HPC Techniques to Deep Learning

[[链接]](https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce)

深度学习的核心之一是 [SGD](https://en.wikipedia.org/wiki/Stochastic_gradient_descent)（Stochastic Gradient Descent），通过把数据集拆分成若干小的集合（mini-batch），再基于这些小集合反复进行前向传播（forward propagation）和反向传播（backpropagation）计算，不断获取新的梯度（gradient）和权重（weight）。分布式训练本质上要解决的问题就是怎么让多机计算的效率线性提升，即所谓的「线性加速比」，理论值当然是 100%，但是实际情况往往差了很多。传统的同步 SGD 在每一轮计算完以后需要把所有梯度汇总，再重新计算新的权重，类似一个 MapReduce 的过程，此时 reducer 需要等待所有 mapper 计算完成，计算性能会随着 mapper 数量的增加而线性下降。怎么解决这个问题呢？这篇 2017 年的旧文介绍的便是影响至今的 Ring Allreduce 算法，作者 Andrew Gibiansky 之前在百度硅谷 AI 实验室工作，后来联合创办了语音合成公司 [Voicery](https://www.voicery.com)（不过悲剧地发现这家公司今年 10 月份已经关了）。基于 Andrew Gibiansky 的成果，Uber 开源了目前公认的 Ring Allreduce 标准框架 [Horovod](https://github.com/uber/horovod)。

## Introducing TensorFlow Recommenders

[[链接]](https://blog.tensorflow.org/2020/09/introducing-tensorflow-recommenders.html)

推荐系统是一直都是机器学习一个重要的应用领域，如果你不了解什么是推荐系统可以看我之前写的[一篇简介](/blog/2020/04/21/how-to-design-a-distributed-index-framework-part-1)。使用 TensorFlow 可以很方便地训练一个推荐系统模型，不管是召回模型还是排序模型。现在 TensorFlow 官方将这个流程进一步简化，推出了 TensorFlow Recommenders（TFRS）库，旨在让训练、评估、serving 推荐系统模型更加容易，并且融合一些 Google 自己的经验，对于初学者来说会是一个好的入门指南。
