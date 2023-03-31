---
title: "Maybe News Issue #8"
date: 2021-02-04 10:07:06 +0800
tags: [maybe news]
---

> 「Maybe News」是一个定期（或许不定期）分享一些可能是新闻的知识的[系列文章](/blog/tags/maybe-news)，名字来源于我非常喜欢的一个国内的音乐厂牌[「兵马司」](https://en.wikipedia.org/wiki/Maybe_Mars)（Maybe Mars）。你也可以通过[邮件订阅](https://maybe.news)它。

<!--truncate-->

## The Google File System

[[链接]](https://research.google/pubs/pub51)

2003 年的 SOSP 会议上作为一家刚成立 5 年的创业公司，Google 发表了这篇影响深远的论文。论文的第一作者 Sanjay Ghemawat 相比他的同事 Jeff Dean 可能不太为外界所知，但看过他的履历以后就会发现早在 DEC 工作期间他就已经与 Jeff Dean 共事，当 Jeff Dean 在 1999 年加入 Google 后不久 Sanjay Ghemawat 也随即加入，并一起研发了 Google File System（以下简称 GFS）、MapReduce、Bigtable、Spanner、TensorFlow 这些每一个都鼎鼎大名的系统，是当之无愧的 Google 元老。

18 年后的今天再来回顾这篇论文依然能发现很多值得借鉴的地方，作为 GFS 最著名的开源实现，HDFS 近年来虽然已经有了很多自己的改进，但核心架构依然沿用的是这篇论文的思想。让我们回到十几年前，去探求为什么 Google 当时要研发这样一个分布式文件系统。

> GFS shares many of the same goals as previous distributed file systems such as performance, scalability, reliability, and availability. However, its design has been driven by key observations of our application workloads and technological environment, both current and anticipated, that reflect a marked departure from some earlier file system design assumptions.

论文开篇的第一段话已经很好地概括了 GFS 设计的初衷，这是一个完全基于 Google 业务特点设计的系统。回想一下 Google 的业务是什么？搜索引擎。搜索引擎依靠的是爬虫抓取大量数据，通过用户输入的关键词在这个庞大的数据库中检索，最后通过 Google 独有的[排序算法](https://en.wikipedia.org/wiki/PageRank)把搜索结果展示给用户。GFS 面对的业务场景有下面几个特点：

- **组件故障随处可见**：存储集群由成百上千台普通商用机器组成（与之对应的是昂贵的超级计算机），再加上应用程序和操作系统的 bug、人为错误、各种硬件故障，系统随时都面临着很多不稳定的因素。因此持续监控、错误检测、容错以及自动恢复就显得尤为重要。
- **大文件为主**：GB 级文件非常常见，每个文件通常包含很多应用对象（application objects），比如 web 文档。对于数十亿对象的 TB 级数据集来说，把文件切分成 KB 级大小会使得管理变得非常复杂，即使系统能够支撑这样的量级。因此系统设计的假设、文件块的大小都需要重新衡量。
- **大多数文件都只是追加写而不是覆盖**：随机写的场景完全不存在，文件一旦写入，只会涉及读操作，且通常是顺序读。多种类型的数据都具有这样的特征，例如某些数据是被数据分析程序批量扫描、某些数据是由数据流持续生成、某些数据是归档数据、某些数据属于中间结果（由某一台机器生成然后被另一台机器处理）。

Google 当时已经部署了多个 GFS 集群，最大的一个集群有超过 1000 个存储节点以及超过 300TB 的磁盘，同时被数百个客户端访问。

论文的第二章节详细介绍了 GFS 的设计假设，除了前面提到的 3 个以外还包括：

- **业务场景主要包含两种读取模式：大批量的流式读取和小量的随机读取。**对于前一种模式，每次请求一般读取数百 KB 或者 MB 级的数据，同一个客户端的连续请求一般也是读取某个文件的连续区域。而后一种模式通常从文件任意偏移位置读取几 KB 数据，对于那些性能敏感的应用会把多个随机读请求排序后批量发送，避免在单个文件中来来回回。
- **系统需要针对并发追加写同一个文件的场景设计好的语义**：典型的应用场景是把 GFS 作为消息队列，数百个生产者并发追加数据到同一个文件；或者多路合并文件，想象一下 MapReduce 的 reduce 阶段。这个文件有可能是边写边读，也有可能是写完以后再读。因此用最小的同步开销保证原子性是非常有必要的。
- **高吞吐比低延时更重要**：GFS 面对的大多数应用追求的是高速率批量处理数据，只有少部分应用对于点查有严格的延时要求。

像传统的文件系统一样，GFS 提供包括创建、删除、打开、关闭、读取、写入这样的接口，但是 GFS 并不提供 POSIX 这样的标准 API。文件通过目录结构组织，可以通过路径名来标识某一个文件。除此之外，GFS 还提供快照（snapshot）和原子追加写（record append）功能。

在介绍完 GFS 的设计背景以及假设以后，接下来是详细的 GFS 架构讲解。**GFS 服务端由一个 master 和多个 chunkserver 组成，通过特定的 client 库（实现了 GFS 的文件系统 API）与应用集成。**GFS 是非常经典的分布式系统架构，影响了后来很多系统的设计。

Master 负责维护整个文件系统的元数据（metadata），包括命名空间（namespace）、访问控制（access control）信息、文件到 chunk 的映射以及每一个 chunk 的具体位置（location）。命名空间可以理解为目录结构、文件名等信息。除此之外，master 还承担一些系统级的活动，例如 chunk 的租约（lease）管理、垃圾回收无效 chunk、在不同 chunkserver 之间迁移 chunk。Master 会周期性地与每一个 chunkserver 进行心跳通信，心跳信息中同时还会包含 master 下发的指令以及 chunkserver 上报的状态。元数据都是保存在 master 的内存中，因此 master 的操作都非常快。每个 chunk 的元数据大约会占用 64 字节内存空间，每个文件的命名空间信息也是占用 64 字节左右（因为 master 针对文件名进行了前缀压缩），相对来说内存的开销是很小的，随着文件数的增加对 master 节点进行纵向扩展即可。比较重要的元数据信息（比如命名空间、文件到 chunk 的映射）还会同步持久化操作日志（operation log）到 master 的本地磁盘以及复制到远端机器，保证系统的可靠性，避免元数据丢失。当操作日志增长到一定大小，master 会生成一个检查点（checkpoint）用于加快状态恢复，检查点文件是一个类似 B 树的结构，可以不经过解析映射到内存直接查询。每个 chunk 的具体位置不会被持久化，master 每次启动时会通过请求所有 chunkserver 来获取这些信息。最初设计时其实考虑过持久化 chunk 的位置信息，但是后来发现在 chunkserver 拓扑经常变化（比如宕机、扩缩容）的情况下如何保持 master 和 chunkserver 之间的数据同步是一个难题。此外 GFS 还提供仅用于只读场景的影子（shadow）master，影子 master 的数据不是实时同步，因此不保证是最新的数据。

采用单 master 的架构极大地简化了 GFS 的设计（也成为了之后被人诟病的因素），master 作为掌握全局信息的唯一入口，必须确保最小程度影响读写操作，否则就会变成整个系统的瓶颈。**因此 GFS 的设计是 client 读写数据永远不会经过 master。**实现方式很简单，client 请求 master 获取到具体需要通信（不管是读还是写）的 chunkserver 列表，把这个列表缓存在本地，之后就直接请求 chunkserver。

Chunkserver 这个名字的来历其实是因为 GFS 把文件分割成了多个固定大小的 chunk。每个 chunk 的大小是 64MiB，相比传统文件系统的块（block）大小大了很多（比如 ext4 默认的块大小是 4KiB），同时 master 会为每一个 chunk 分配一个全局唯一的 64 位 ID。Chunkserver 除了将 chunk 存储到本地磁盘上，还会复制到其它 chunkserver，GFS 默认会存储 3 个副本，当然用户也可以为不同的目录指定不同的复制等级。为什么 GFS 会选择 64MiB 这么大的 chunk 大小呢？论文中列举了几个原因：

- **减少 client 与 master 的交互**：前面提到 client 不管是读还是写数据都需要首先与 master 通信，GFS 的业务场景通常都是顺序读写大文件，chunk 大小越大 client 就能在 1 次请求中获取到更多的信息。即使是随机读的场景，client 也能更多地缓存 chunk 位置信息。
- **降低 chunkserver 的网络开销**：更大的 chunk，client 越可能执行更多的操作，因此可以降低 client 与 chunkserver 之间的 TCP 长连接的网络开销。
- **减少 master 维护的元数据大小**：chunk 越大，master 就可以在内存中保存更多元数据。

每个 chunk 以及它的副本有两种角色：主副本（primary replica）和从副本（secondary replica），主副本只有 1 个，其它的都是从副本，至于具体哪个是主副本是由 master 决定的。master 会授权一个租约（lease）给主副本，租约的初始超时时间是 60 秒，但是只要 chunk 还在被修改，主副本可以无限续租，master 也可以随时废除租约。基于主从副本和租约的概念，数据写入 GFS 的流程是：

1. Client 请求 master 获取当前 chunk 所有副本所在的 chunkserver 列表，如果目前还没有租约，master 会授权给其中一个副本（也就是说这个副本升级为主副本）。
2. Master 将主副本的 ID 以及从副本的位置回复给 client，client 会将这些信息缓存在本地，只有当主副本无法通信或者租约失效时才会再次请求 master。
3. Client 发送**数据**给主从副本所在的全部 chunkserver。发送顺序无所谓，一般是发送给离 client 最近的一个 chunkserver，然后这个 chunkserver 会传递给离它最近的下一个 chunkserver，依此类推。Chunkserver 之间的距离是通过 IP 地址估算出来的，之所以采用这种线性传递数据的方式，目的是最大化网络吞吐。Chunkserver 不会等到一个 chunk 全部接收完毕才发送出去，而是采用管道（pipeline）的方式，只要接收到一定的数据就立即发送。**值得一提的是，当时 Google 的网络带宽是 100Mbps，而现在（2021 年）AWS 上的机器网络带宽能达到 25Gbps，是当年的 250 倍。**
4. 一旦所有副本都回复收到了数据，client 就发送**写请求**给主副本。这个请求包含了上一步发送的所有数据的标识符，主副本会分配连续的序列号给写请求，并按照序列号的顺序修改它的状态。
5. 主副本转发写请求给其它从副本，从副本也会按照相同的序列号顺序修改状态。
6. 当所有从副本都回复给主副本，即表示这次写请求已经完成。
7. 主副本回复请求给 client。如果任何副本发生了错误也会一并回复，GFS 的客户端会尝试重试。步骤 3~步骤 7 执行时也会有一定的重试机制，避免每次都从头开始。

原子追加写（record append）的流程大体上和上面介绍的一样，区别在于第 4 步时主副本会检查写入以后是否会超过最后一个 chunk 的大小（64MiB），如果没超过就追加到后面，如果超过了会把最后一个 chunk 填充（pad）满，并回复 client 重试。

快照（snapshot）功能基于 copy-on-write 实现，master 通过仅仅复制元数据的方式能够在短时间内完成快照的创建。当 client 需要修改快照数据时，master 会通知所有 chunkserver 本地复制对应的 chunk，新的修改会在复制后的 chunk 上进行。

限于本期的篇幅，还有很多 GFS 的特性没有介绍，例如命名空间管理与锁、副本放置策略（placement policy）、chunk 重新复制（re-replication）、数据均衡（rebalancing）、垃圾回收、高可用等。最后是一个彩蛋，如果你仔细看论文最后的感谢名单，会发现一个熟悉的名字（当然不是 Jeff Dean）。

## Colossus: Successor to the Google File System

[[链接]](https://www.systutorials.com/colossus-successor-to-google-file-system-gfs)

自从 GFS 的论文发布以来，Google 的数据已经增长了好几个数量级，很显然 GFS 的架构已经无法支撑如此大规模的数据存储。那 Google 下一代的文件存储是什么呢？答案就是 Colossus。这个神秘的项目直到目前为止都没有在公开场合被全面正式地介绍过，我们只能通过很多碎片的信息来拼凑出它的模样，上面链接中的内容即是通过这些信息整理出来的。一些有趣的信息是：元数据服务（Curators）基于 Bigtable；相比 GFS 至少可以横向扩展 100 倍；GFS 依然存在，只不过是用来存储文件系统元数据的元数据（metametadata）；Colossus 可以基于另一个 Colossus 构建，就像俄罗斯套娃一样无限嵌套（让我想到了分形）；存储数据的服务叫做 D server；默认使用 Reed-Solomon 编码存储数据，也就是通常所说的纠删码（erasure code）。建议配合这个 2017 年的 [slide](http://www.pdsw.org/pdsw-discs17/slides/PDSW-DISCS-Google-Keynote.pdf) 以及这篇[中文博客](https://levy.at/blog/22)一起阅读。

## Storage Reimagined for a Streaming World

[[链接]](https://blog.pravega.io/2017/04/09/storage-reimagined-for-a-streaming-world)

流式计算这几年应该算是红到发紫？看看 Flink 社区的发展便可知晓。不过本期要介绍的不是流式计算，而是流式存储。说到与流式计算有关的存储，首先想到的可能是 Kafka，作为实时数据流的消息总线，Kafka 承担着非常重要的角色。但是 Kafka 也不是完美的，它的诞生其实比流式计算更早。Kafka 2011 年[开源](https://blog.linkedin.com/2011/01/11/open-source-linkedin-kafka)，Spark [v0.7.0](https://spark.apache.org/news/spark-0-7-0-released.html) 2013 年发布开始支持 streaming，Flink [v0.7.0](https://flink.apache.org/news/2014/11/04/release-0.7.0.html) 2014 年发布开始支持 streaming（跟 Spark 是同一个版本号不知是否是巧合）。因此 Kafka 的很多设计并不是针对流式计算场景优化。比如 topic partition 这个概念，本质上是为了提高读或者写的并发，但是 partition 本身是一个静态配置，并不能做到动态伸缩。再比如 Kafka 的数据存储，目前只支持内存和本地磁盘两种，消费新数据都是从内存，如果是旧数据就可能读磁盘，但是 Kafka 集群的存储容量上限毕竟还是受限于磁盘空间，在流式计算越来越重以及云计算大行其道的今天集群运维是一个难题（某些公司已经自研了 Kafka on HDFS 的方案，比如[快手](https://cloud.tencent.com/developer/news/599446)）。Pravega 便这样应运而生，这是一个来自戴尔的[开源项目](https://github.com/pravega/pravega)，一些设计亮点是动态 partition 以及自动数据分层（Apache BookKeeper + HDFS）。

## Why We Built lakeFS: Atomic and versioned Data Lake Operations

[[链接]](https://lakefs.io/why-we-built-lakefs-atomic-and-versioned-data-lake-operations)

在数据库领域 ACID 和 MVCC 已经不是什么新鲜的概念，但是文件系统领域似乎还是一个属于比较「早期」的阶段，虽然过去已经有类似 [ZFS](https://en.wikipedia.org/wiki/ZFS)、[Btrfs](https://en.wikipedia.org/wiki/Btrfs) 这样创新的设计，但它们并不是广泛被大众了解以及使用的技术。特别是当云计算以及 S3 这样的「傻瓜」方案出现后，人们似乎已经习惯了开箱即用的产品。数据湖（data lake）这个词汇不知道从什么时候开始流行，对象存储的角色变得越来越重（至少云厂商是这样希望的？）。人们对这个「万能」的存储有着越来越多的期望，但是对象存储并不是万能的。为了解决对象存储的各种问题（这里不赘述具体问题）或者说填补它的一些缺失，越来越多基于对象存储的项目诞生。[lakeFS](https://lakefs.io) 即是其中一个，lakeFS 希望通过提供类似 Git 的体验来管理对象存储中的数据，并且保证 ACID。比如创建一个数据的「分支」即可实现多版本管理。lakeFS 的开发团队来自以色列（[公司官网](https://www.treeverse.io)挺有意思），项目使用 Go 语言实现。一些类似的项目还有 [DVC](https://dvc.org)、[Quilt](https://github.com/quiltdata/quilt) 以及 [Hanger](https://github.com/tensorwerk/hangar-py)。

## Magnet: A scalable and performant shuffle architecture for Apache Spark

[[链接]](https://engineering.linkedin.com/blog/2020/introducing-magnet)

在[第 6 期](/blog/2020/09/15/maybe-news-issue-6) Maybe News 曾经介绍过 Facebook 的 Cosco，一个给 Hive/Spark 使用的 remote shuffle service 实现。本期介绍的 Magnet 来自 LinkedIn，也是一个 shuffle service。跟 Cosco 的区别在于 Magnet 不是存算分离架构，不依赖外部存储，核心思想是 mapper 把 shuffle 数据先写到本地的 shuffle 服务，然后这些 shuffle 数据会根据某种负载均衡算法推到远端的 shuffle 服务上，远端 shuffle 服务会定期合并（merge）数据，最后 reducer 从远端 shuffle 服务读取数据。这里的「远端」其实是一个相对的概念，有可能 reducer 跟 shuffle 服务在同一个节点上，那就不需要发送 RPC 请求而是直接读取本地磁盘的数据。更多技术细节可以参考 VLDB 2020 的[论文](http://www.vldb.org/pvldb/vol13/p3382-shen.pdf)，另外 LinkedIn 的工程师也在积极将 Magnet 贡献给 Spark 社区，目前已经合入了几个 PR，具体请参考 [SPARK-30602](https://issues.apache.org/jira/browse/SPARK-30602)。

## 支付宝研究员王益：Go+ 可有效补全 Python 的不足

[[链接]](https://tech.antfin.com/community/articles/993)

[王益](https://github.com/wangkuiyi)目前是蚂蚁集团研究员，同时也是开源项目 [SQLFlow](https://github.com/sql-machine-learning/sqlflow) 和 [ElasticDL](https://github.com/sql-machine-learning/elasticdl) 的负责人（这两个项目也很有意思，有兴趣的同学可以去了解了解）。这里介绍的 [Go+](https://github.com/goplus/gop) 是七牛创始人许式伟发起的开源项目，从 Go+ 的 slogan「the language for data science」就能看出项目的设计初衷。如果说目前什么编程语言在数据科学和机器学习领域最受欢迎，那可能就是 Python 了。但是 Python 的语言特性决定了它可能并不是最适合的，Go+ 依托 Go 语言作为基础，很好地弥补了 Python 的缺失。推荐对机器学习感兴趣的同学看看这篇文章，其中提到的一些八卦历史也很有趣。
