---
title: "Maybe News Issue #9"
date: 2021-03-23 12:30:00 +0800
tags: [maybe news]
---

> 「Maybe News」是一个定期（或许不定期）分享一些可能是新闻的知识的[系列文章](/blog/tags/maybe-news)，名字来源于我非常喜欢的一个国内的音乐厂牌[「兵马司」](https://en.wikipedia.org/wiki/Maybe_Mars)（Maybe Mars）。你也可以通过[邮件订阅](https://maybe.news)它。

<!--truncate-->

## Virtual Consensus in Delos

[[链接]](https://www.usenix.org/conference/osdi20/presentation/balakrishnan)

一致性协议是分布式系统领域的核心概念，在之前介绍如何设计一个分布式索引框架的[一篇文章](/blog/2020/05/25/how-to-design-a-distributed-index-framework-part-5)中已经简单梳理了一致性协议的不同类别以及一些经典的共识算法。今天要介绍的这篇论文并不是发明了一种新的一致性协议，而是对一致性协议进行了拆解和抽象（即论文标题中 Virtual Consensus 的含义），这个抽象可以简化分布式系统的开发和加快迭代速度。Delos 目前已经作为 Facebook 集群调度管理系统 [Twine](https://www.usenix.org/conference/osdi20/presentation/tang) 的控制平面（control plane）在生产环境中稳定运行数年（Delos 是希腊 Cyclades 群岛中一个岛屿的名称，离 Paxos 岛不远）。本篇论文发表在 2020 年的 OSDI 会议，并获得了当年的最佳论文。

在介绍 Delos 系统之前先讲讲为什么要有 Virtual Consensus 这个概念。现有的分布式系统通常都是基于某一种一致性协议来开发的，比如 ZooKeeper 是基于 Zab、etcd 是基于 Raft、Chubby 是基于 Paxos。同时学术界对于一致性协议的研究并没有中止，不断会有新的协议出现（[大部分](https://vadosware.io/post/paxosmon-gotta-concensus-them-all)可能都是基于 Paxos 进行改良）。因为这些系统的分布式协议层和状态复制层是紧耦合的，如果想要从一种一致性协议切换到另一种，基本上是需要重写系统的（当然很多人也喜欢重复造轮子）。时间回溯到 2017 年，当时的 Facebook 需要一个保证一致性、可用性、持久性的分布式系统作为他们的核心控制平面来存储元数据，这个系统要在 6-9 个月之内上线，并且支持持续的迭代。虽然当时已经有一些现成的系统可以选择，比如 ZooKeeper、[ZippyDB](https://www.usenix.org/conference/osdi18/presentation/annamalai)、[UDB](https://www.usenix.org/conference/fast20/presentation/cao-zhichao)（分布式 MySQL）、[LogDevice](https://logdevice.io)，但这些系统要么不支持复杂的 API（比如 get、put、multi-get、multi-put、scan 等），要么可用性达不到要求。更重要的是每个系统都和某种一致性协议绑定，没法平滑过渡到新的协议。

为了解决上述问题， Delos 提出了 Virtual Consensus 这个概念（以下简称 VC），VC 的目标是可以平滑切换一致性协议（甚至同时使用多种协议），并把一致性协议中很多可以复用的逻辑抽出来，从而降低实现新协议的成本。 VC 把一致性协议分解为了控制平面和数据平面两部分，控制平面负责 leader 选举、配置参数、成员管理等，数据平面负责保证数据的顺序（ordering）以及持久性。在 VC 中控制平面称作「VirtualLog」，这是可以复用的部分；数据平面称作「Loglet」，Loglet 可以用不同的一致性协议（比如 Raft、Paxos）实现，也可以是对其它分布式系统（比如 ZooKeeper、HDFS）的封装。如同虚拟内存一样，VirtualLog 把多个物理的 Logets 映射到一个连续的虚拟的 VirtualLog 地址空间中。对 VirtualLog 的用户来说，这些 Loglets 的细节被 VirtualLog 隐藏了起来 ，看起来就像是一个连续的 log。

VirtualLog 由两部分组成：一个客户端层暴露访问 log 的 API，以及一个管理元数据的 MetaStore。这里的元数据是指从 VirtualLog 地址到 Loglet 的映射关系，多个 Loglets 组成了一个链（chain），类似一个单向链表。随着时间推移，链可能会发生变动（比如从 1 个 Loglet 变成 2 个），MetaStore 在保存每个链时也会有一个对应的版本号，每当需要更新链时需要提供一个更大的版本号，这个更新操作是一个类似 CAS（compare-and-swap）的过程，会和当前版本号进行比较，保证原子性，避免并发冲突。当需要修改链时就会触发「重新配置（reconfiguration）」流程，这个流程分为 3 步：密封（sealing）当前链、把 MetaStore 中的链修改为新的链、从 MetaStore 获取新的链。MetaStore 需要保证容错一致性（fault-tolerant consensus），也就是说得通过类似 Paxos 这样的一致性协议去实现，后面会讲到具体如何实现。

因为 VirtualLog 已经负责了控制平面的工作，Loglet 的职责就比较简单了，只需要保证数据的全局顺序性（total order）以及持久性，不需要承担 leader 选举、成员变更管理等工作，也不需要实现容错一致性，因此实现一个 Loglet 的成本非常低（相比实现一个完整的一致性协议）。但有一个要求必须满足，前面提到在重新配置时需要密封链，这个密封操作是通过发送 `seal` 命令给 Loglet 实现的，Loglet 负责更新本地的 seal 状态，seal 状态是一个布尔值，也就是说只会有两种取值。为了保证后续不会错误地把新数据添加到已经密封的链，Loglet 需要保证 `seal` 命令是高可用的（highly available），也就是说确保大多数（quorum）的 Loglet 都更新完成。

在了解完 VC 的概念以后来看看 Delos 是如何实现的。Delos 是一个基于 VC 思想实现的分布式存储系统，可以简单把它理解成类似 etcd、ZooKeeper 的系统。Delos 分为 3 层：API、Core 和 Loglet。API 层提供多种类型的接口，例如 table API、ZooKeeper API；Core 层除了包含 VirtualLog 以外，还有 Delos 自己的 runtime，以及基于 RocksDB 的本地存储；Loglet 层就是各种不同的 Loglet 实现。当 Delos 接收到读写事务（read-write transaction）时会先将数据追加（append）到 VirtualLog，VirtualLog 负责把数据发送给底层的 Loglet（具体 Loglet 怎么处理 append 请求后面会讲），然后 Delos 开始从 VirtualLog 同步（synchronize）日志，每当读到一个事务（这个事务既可能是当前 Delos 节点也可能是其它节点写的）就会执行这个操作并保存到本地的 RocksDB 中，最后当把当前 Delos 节点自己写入的最后一个事务执行完毕后就返回请求。对应的，Delos 接收到只读事务（read-only transaction）时，首先通过 VirtualLog 检查全局日志的末尾（tail）位置是多少，然后与 VirtualLog 同步日志直到达到上一步得到的位置（同步过程中如果遇到写事务就需要更新 RocksDB），最后在本地的 RocksDB 中执行这个读请求并返回结果。可以看到，当处理只读事务时 Delos 节点可能需要与底层 Loglet 同步日志，这显然会对读性能造成影响，为了优化这一步 Delos 会在与 VirtualLog 的一次同步请求中包含多个只读事务，而不是一次同步请求只处理一个事务，极端情况下如果需要同步的日志中不包含任何写事务那其实可以跳过这一步。

前面提到 VirtualLog 需要一个 MetaStore 来保存当前的链状态，Delos 最初是通过外部的 ZooKeeper 服务来作为 MetaStore。后来为了去掉对外部系统的依赖改为了在 Delos 服务中内嵌一个 MetaStore，多个 Delos 服务便构成了一个 MetaStore 集群，并通过 Paxos 来保证容错一致性。

Delos 目前已经实现了 5 种 Loglet：ZKLoglet 基于 ZooKeeper 实现，这是 Delos 最初上线时使用的 Loglet；LogDeviceLoglet 基于 LogDevice 实现；BackupLoglet 基于类似 HDFS 的系统实现，目的是作为日志的冷存；NativeLoglet 顾名思义是最原生的 Loglet，只包含最必要的功能，不依赖任何外部系统，也是目前 Delos 在使用的 Loglet（替代 ZKLoglet）；最后是 StripedLoglet，这个 Loglet 其实是多个其它 Loglet 的组合，可以有多种组合方式。论文中详细介绍了后两种 Loglet。

NativeLoglet 由两个组件组成：LogServer 和 Sequencer，这些组件都是独立的服务，并且和 Delos 服务部署在一起（当然也可以分开）。LogServer 负责处理有关日志的各种请求，并将日志持久化到本地磁盘，LogServer 可以有多个，且需要为奇数个（因为涉及到类似投多数票的场景）；Sequencer 只有 1 个，职责也只有一个，就是处理 `append` 请求，后面会详细介绍处理流程。

这里有几个概念需要先介绍一下。当说到一个命令被「本地提交（locally committed）」时表示的是一个 LogServer 已经将这个命令同步到了它的本地日志中。当说到一个命令被「全局提交（globally committed）」时表示这个命令已经被大多数的 LogServer 本地提交，并且这个命令之前的所有命令也都已经全局提交。「全局末尾（global tail）」表示最近一个还没有被全局提交的日志位置，NativeLoglet 的日志是没有空隙的，也就是说从位置 0 开始到全局末尾结束中间的每一个位置都有日志数据。同时每个组件（LogServer、Sequencer、Delos 服务等）都维护了一个 `knownTail` 变量，这个变量保存的是当前这个组件获取到的全局末尾的值，这些组件之间在交互时都会带上各自的 `knownTail`，如果发现自己本地的值更小就更新到最新的值。

接下来讲一下 NativeLoglet 支持的几种请求。首先是 `append` 请求，Delos 服务会将请求发送给 Sequencer，Sequencer 会给每个命令分配一个位置（类似一个计数器），然后 Sequencer 负责转发命令给所有 LogServer，当大多数 LogServer 都正常返回时即表示请求成功。如果大多数 LogServer 都返回说已经密封了，请求会失败。除此之外的其它情况（比如超时、LogServer 请求失败等）Sequencer 都会不断重试直到请求成功或者 NativeLoglet 被密封，重试是幂等的，也就是说同样的命令一定会写入同样的位置。Sequencer 维护了一个请求队列，当收到大多数 LogServer 的返回时即认为这个命令已经全局提交，那些发送给还没有返回结果的 LogServer 的请求就可以忽略了，这样处理可以防止某些特别慢的 LogServer 影响整体性能，同时从这里也能看到每个 LogServer 保存的命令可能是不一样的，对于那些缺失的命令也不需要补上。

然后是 `seal` 请求。正如前面所介绍的，这个请求是用于密封 Loglet。任何客户端都可以发送这个请求给 LogServer，当大多数 LogServer 都正常返回时即表示请求成功，后续的 `append` 请求也会失败。需要注意的是当 LogServer 被密封以后，每个 LogServer 本地日志的末尾（tail）可能是不同的。

接着是 `checkTail` 请求。这个请求会返回全局末尾以及当前 NativeLoglet 的密封状态。任何客户端都可以发送这个请求给 LogServer，并等待大多数 LogServer 返回。一旦大多数 LogServer 返回，`checkTail` 请求会根据返回结果进行不同的后续处理，这些返回结果会有 3 种可能：全部密封、部分密封、全部未密封。「全部密封」即所有 LogServer 都已经处于密封状态，返回结果中同时也会包含每个 LogServer 的末尾位置，前面介绍 `seal` 请求已经提到不同 LogServer 密封后的末尾可能是不同的，当 `checkTail` 发现这种情况时会触发一个修复（repair）操作，对那些有漏掉命令的 LogServer 进行补全（通过从其它 LogServer 拷贝数据过来）。「部分密封」即返回结果中同时存在密封和未密封两种状态，针对这种情况客户端会先发送 `seal` 请求给 LogServer，然后再次发送 `checkTail`，一般情况下都会得到全部密封的结果。「全部未密封」即所有 LogServer 都处于未密封状态，此时客户端会从所有 LogServer 返回的末尾位置中挑选最大的那个值，然后等待它自己的 `knownTail` 达到这个值（论文中并没有具体介绍客户端的 `knownTail` 是如何更新），如果等待过程中有 LogServer 被密封了就会变成「部分密封」的状态，此时就会按照刚才描述的流程进行处理。

最后是 `readNext` 请求。客户端已经可以通过 `checkTail` 获取到全局末尾，因此它会根据这个末尾位置首先请求本地的 LogServer（前面提到过 LogServer 和 Delos 服务是部署在一起的），如果本地的 LogServer 没有这个位置的数据，就会再发送请求给其它 LogServer。

以上就是 NativeLoglet 的设计，因为它不需要具备类似容错一致性这样的特性，Facebook 仅仅用了 4 个月就实现完成并部署到生产环境。当然 LogServer、Sequencer 都有可能出问题，这些错误的检测既有一些内部机制来保证，也有一些外部监控系统来触发。一旦发现问题就会进入重新配置流程，即密封现有 Loglet，创建新的 Loglet 并更新链。

StripedLoglet 是多个 Loglet 的组合，实际上只用了 300 行左右的代码就实现完成。Loglet 的组合可以有多种方式，比如为了避免单个 Sequencer 成为瓶颈，可以把相同的一组 LogServer 看作不同的 NativeLoglet 集群，区别在于不同集群的 Sequencer 不一样；再比如为了对 Loglet 进行分片，达到横向扩展的目的，可以用多组 LogServer，每组只存储部分日志。StripedLoglet 目前并没有在实际生产中使用，更多是作为评估阶段的一个方案。

到这里本篇论文中关于 VC 和 Delos 的介绍就差不多讲完了，但其实还有很多细节没有提到，例如 leader 如何选举、如果处理网络分区、集群成员如何变更、为什么要有密封操作、具体什么时候触发重新配置、如何实现一个 RaftLoglet。Delos 其实是建立在论文第一作者 Mahesh Balakrishnan 多年的研究之上，在来到 Facebook 之前他曾经在微软硅谷研究院以及 VMware 研究院工作，Delos 的很多思想来源于 2012 年的「From Paxos to CORFU: A Flash-Speed Shared Log」这篇论文（一个小八卦，这篇论文的第一作者 Dahlia Malkhi 也是学术界大牛，目前是 Diem Association 的 CTO），以及[后续多篇论文](https://github.com/CorfuDB/CorfuDB/wiki/White-papers)。有兴趣的同学可以继续阅读这些论文，另外 OSDI 每篇论文都会有一个来自论文作者的演讲，可以点击[这里](https://www.youtube.com/watch?v=wd-GC_XhA2g)查看视频。

最后特别感谢 Delos 作者之一 Chen Shen 对本文提出的细致及宝贵的修改意见。

## Virtualizing Consensus in Delos for Rapid Upgrades and Happy Engineers

[[链接]](https://atscaleconference.com/2021/03/15/virtualizing-consensus)

在支持 table API 并成功在 Twine 上应用之后，Delos 的下一个目标是提供 ZooKeeper API，并替代 Facebook 内部使用 ZooKeeper 的场景。Delos 目前已经成为了一个构建分布式数据库的「平台」，基于这个平台实现不同的 API 即可满足不同的场景需求，大部分逻辑都可以复用，比如支持 table API 的数据库 DelosTable，支持 ZooKeeper API 的数据库 Zelos。把 Delos 平台化以后也能让不同团队更加专注于各自的目标，提高开发效率（软件工程第一准则「高内聚低耦合」）。不过理想归理想，现实归现实，在 Zelos 的开发过程中逐渐发现组件的边界并没有那么清晰，很多时候 Zelos 需要依赖对 Delos 平台核心进行修改，使得开发流程受到了很大阻碍。为了解决这个问题，Delos 团队发明了一个新的抽象叫做「log-structured protocol」（LSP？），一层叠加在 VirtualLog 之上的协议，每个协议都会包含一个引擎（engine），且可以像网络栈一样把不同协议进行组合。当应用在请求时，会自上而下经过不同的协议，每一层协议也能带上自己的协议头（header），最终到达 VirtualLog。这个设计有点类似于把 Delos runtime 插件化，不同团队可以根据自己的需求开发不同的插件，这些插件也可以同时被不同团队共享。

## RFC: Elastic Horovod

[[链接]](https://docs.google.com/document/d/15ZoHA5AeSI_boeyIBapg9WPXKrYXMRvPytPzQWTCTn4/edit?usp=sharing)

在[第 7 期](/blog/2020/11/15/maybe-news-issue-7)介绍过 Horovod 背后的 Ring Allreduce 算法，从 [v0.20.0](https://github.com/horovod/horovod/releases/tag/v0.20.0) 开始 Horovod 从框架上原生支持了模型训练弹性伸缩。不管是基于 PS 还是 Ring Allreduce 架构，弹性伸缩一直是分布式模型训练领域的热门问题，特别是对于一个 AI 平台来说，弹性伸缩能最大程度提高集群的资源利用率。当然为了实现弹性并不是说能够动态扩缩容就好了，框架也要做到足够好的容错性，才能不对训练效果造成影响。这篇 RFC 详细介绍了 Elastic Horovod 的设计背景及架构。目前阿里云容器团队开源的 [et-operator](https://github.com/AliyunContainerService/et-operator) 已经支持在 K8s 中使用 Elastic Horovod，通过 `TrainingJob`、`ScaleIn` 和 `ScaleOut` 这 3 个 CRD 来动态控制训练集群的规模，不过 et-operator 暂时还不支持自动伸缩，社区有[一个 PR](https://github.com/AliyunContainerService/et-operator/pull/6) 正在解决这个问题。

## Scaling Kubernetes to 7,500 Nodes

[[链接]](https://openai.com/blog/scaling-kubernetes-to-7500-nodes)

OpenAI 团队在这篇文章中分享了他们是如何将 K8s 扩展到 7500 个节点，在 2018 年其实他们已经[分享](https://openai.com/blog/scaling-kubernetes-to-2500-nodes)过扩展到 2500 个节点的经验。需要注意的是，OpenAI 的 K8s 集群主要服务于 AI 任务，每个 pod 会独占一个 node 的所有资源，类似资源碎片、bin-packing 这样的问题都不存在，调度器并不会成为瓶颈，因此他们的经验不一定适用于所有场景。几个有趣的地方：当集群规模到达 7500 节点时，API server 占用大约 70GB 的内存；尽量避免任何 DaemonSet 与 API server 进行交互，如果有需要可以借助一个中间的缓存服务；[kube-prometheus](https://github.com/prometheus-operator/kube-prometheus) 收集了很多有用的数据，但是其中有很多对于 OpenAI 来说都是没用的，因此他们选择通过 [P8s rules](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config) 来丢弃一些指标；P8s 经常性出现 OOM，最终定位到问题出在 Grafana 和 P8s 之间的交互，解决方法是 [patch P8s](https://github.com/openai/prometheus/pull/1)；Gang scheduling 用到了 K8s 1.15 以后支持的 scheduling framework 以及其中由阿里云和腾讯贡献的 [coscheduling 插件](https://github.com/kubernetes-sigs/scheduler-plugins/tree/master/pkg/coscheduling)（[第 2 期](/blog/2020/06/02/maybe-news-issue-2)也有做介绍）。

## 播客文字回顾 | Late Troubles 是陈曦的“中年朋克辛酸”吗？

[[上集]](https://mp.weixin.qq.com/s/ZS5GjlskTBH1DS52iss9yQ) [[下集]](https://mp.weixin.qq.com/s/KiuoI6NfCHbTeuceHBggyQ)

本篇又名「微软产品经理教你如何上班摸鱼做音乐」，Late Troubles 是 Snapline 乐队主唱陈曦的个人计划，相比 Snapline 的音乐风格，Late Troubles 更加温和。目前陈曦已经移居西雅图，作为一个音乐人、一个父亲、一个上班族，他在这个访谈中表达了自己作为异乡异客的思考、关于家庭的思考、关于音乐制作的思考、疫情对生活的影响等等内容，可能就像 Late Troubles 的音乐一样，这篇访谈让我觉得平实及坦诚，任何光鲜的外表下都会有不尽相同的故事，希望有一天能在国内看到 Late Troubles 的现场演出。
