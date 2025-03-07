---
title: "「时髦」的 OpenAI 与「过时」的软件工程"
date: 2024-12-23 20:00:00 +0800
tags: ["software engineering"]
---

这篇文章的起源是 OpenAI 这个月发布的一篇[故障报告](https://status.openai.com/incidents/ctrsv3lwd797)，事故发生时间为 2024 年 12 月 11 日太平洋标准时间（PST）15:16 至 19:38，故障持续了将近 4 个半小时，影响范围是 ChatGPT、Sora 以及 OpenAI 的所有 API。这篇故障报告写得非常清晰，把故障时间线、影响范围、故障分析、如何一步一步处理以及后续改进措施都详细记录了下来，通篇基本没什么废话，也没有什么「遮遮掩掩」，值得作为一篇好的故障报告范例传阅给中国各大云厂商或者做 To B 服务的公司学习（说的就是你，阿里云，要写故障报告就写得认真一点，否则干脆别写）。

{/* truncate */}

而我看完这篇故障报告以后的最大感受就是：软件工程领域真的没有什么新鲜事，OpenAI 这次遇到的所有问题在无数的公司里都曾经遇到过，就算你是一家估值达到了 [1570 亿美金](https://openai.com/index/scale-the-benefits-of-ai)的公司也不例外。不过在详细分析这篇故障报告之前，我想先讲讲「算法」与「工程」的关系。

在很多中型或者大型公司里，「算法科学家」和「软件工程师」似乎是两个泾渭分明的岗位，或许大家已经默认了算法科学家就是一群只会研究算法，对工程一窍不通的「傻子」（或者反之）。这个认知倒不一定没有一点根据，在我过往工作过的公司里的确存在一些对软件工程知之甚少的所谓算法科学家，举个最简单的例子，这些人写的 Python 代码可能连 [PEP8](https://peps.python.org/pep-0008) 都过不了，一个连代码都写得乱七八糟的人，你又该如何信任他的技术实力呢？很多在软件工程师看来「天经地义」的工程实践，在算法科学家眼里似乎「一文不值」。此时或许会存在「只要算法牛逼就行了」这种极端的论调，但在我浅薄的认知里，我认为：**一个优秀的算法科学家，也一定是一个合格的软件工程师**。这并不是一个既要又要的苛刻要求，而是因为在一个实际的工程项目中，模型算法必然只是其中一个组成部分，甚至是很小的一部分。如果没有良好的工程实现，你上到生产环境结果推理服务的 QPS 只有个位数有啥意义？你是在浪费 GPU 算力吗？当然在大型项目中肯定也还是需要分工，并不是说所有事情都必须让算法科学家一个人干，但我觉得你得对整个 pipeline 都有了解，否则就真的成了只会「炼丹」的法师了。虽说在大公司工作很容易变成一颗螺丝，但如果连你自己也甘愿做一颗螺丝，那就真的不仅仅是公司的错了。

下面是针对这篇故障报告我的一些具体体会，如果你还没有完整看过强烈建议你先看一遍（就别让 AI 帮你总结了），然后带着你的思考看我后面的内容。

首先所有人最关心的问题我想可能是事故是由什么原因造成的。关于事故原因原文写得很清楚：

> As part of a push to improve reliability across the organization, we’ve been working to improve our cluster-wide observability tooling to strengthen visibility into the state of our systems. At 3:12 PM PST, we deployed a new telemetry service to collect detailed Kubernetes control plane metrics.
>
> …
>
> With thousands of nodes performing these operations simultaneously, the Kubernetes API servers became overwhelmed, taking down the Kubernetes control plane in most of our large clusters.
>
> …
>
> In short, the root cause was a new telemetry service configuration that unexpectedly generated massive Kubernetes API load across large clusters, overwhelming the control plane and breaking DNS-based service discovery.

简单讲就是 OpenAI 技术团队为了提升整体系统的可靠性和可观测性，部署了一个新的监控服务到生产环境里，但是意料之外的是这个监控服务使得 K8s 集群里的所有节点发送了大量请求给 K8s API server，导致 K8s API server「过载」，最终造成所有服务不可用。

对于有经验的架构师来说看完这段事故原因必然会产生几个疑问：

- 为什么监控服务作为一个旁路组件会对 K8s API server 产生大量请求？
- K8s API server 有做高可用吗？
- 为什么线上服务要强依赖 K8s API server？
- 为什么要一次性全量上线这个新组件？

上面这几个问题通过这篇报告并不能完全解答（例如前两个问题），但我相信 OpenAI 的工程师一定足够专业，因此 K8s API server 也一定做了高可用部署（可以参考 [K8s 官方文档](https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/high-availability)）。但即便 K8s API server 是高可用的，线上服务强依赖它依然是一个「死穴」。线上服务之所以要依赖 K8s API server 其实是为了实现「服务发现」，在我 2015 年写的[「关于微服务的一些实践与思考」](/blog/2015/03/22/a-little-throught-about-microservices)文章中已经提到过服务发现可以有多种实现方式，在 OpenAI 的架构里他们是通过 DNS 来实现。DNS 这个看起来「去中心化」的实现方式在 K8s 的设计里却依然依赖 API server 作为一个「中心化」的配置中心（本质上是依赖背后的 etcd），相当于把「服务发现」这个非常核心的功能耦合在了一个「单点」上。这里讲的「单点」并不是说 API server 背后的 etcd 无法实现高可用，而是说如果像 OpenAI 这次事故一样出现了无法承载的流量，即便 etcd 是高可用的也无济于事（leader 会挂，follower 也必然挂）。常规意义上的「高可用」都是建立在服务至少还能正常工作的假设下的，如果连服务都无法正常工作了那又何谈高可用？

那该如何处理这种异常情况呢？OpenAI 介绍了他们当时的临时解决方案：

> 1. Scaling down cluster size: Reduced the aggregate Kubernetes API load.
> 2. Blocking network access to Kubernetes admin APIs: Prevented new expensive requests, giving the API servers time to recover.
> 3. Scaling up Kubernetes API servers: Increased available resources to handle pending requests, allowing us to apply the fix.

翻译一下就是：集群缩容（减少 API server 的请求量，降低 API server 负载）、从网络层拦截 API 请求（同样是为了降低 API server 的负载）、给 API server 机器扩容（至少能正常处理一些请求，不至于死得太快）。这几个措施的确是有效果的，也可以说是此次事故处理的关键点，如果没有这样的有效处理，事故持续时间只会更长。但如果回过头来冷静审视，是否有更好的应对措施呢？

「服务过载」是任何一个软件工程师都要面临的问题，大家往往会觉得这个问题可能会更多发生在直接面向外部用户的业务服务中（比如淘宝双 11、12306 抢票、微信春晚红包），因此也就容易忽视「内部服务」也可能面临同样的问题，这次 OpenAI 的事故就很好说明了这一点。很多时候威胁并不来自外部，而是由内部造成的。某些过载是可以提前预防和规划的（比如特定的活动），但往往都无法提前预估。如果真的出现了服务无法承载的流量该如何处理呢？「服务降级」其实是一个实践了很多年的应对措施，服务降级的本质是通过主动「牺牲」一些服务质量，来换取整体系统的可靠，简单讲就是「可以挂，但不能全挂」。

我之前在小红书工作时也在首页的「发现 Feed」服务中有过相关实践。「发现 Feed」是每个小红书用户打开 app 的第一个页面，承载了绝大多数的流量，并且有明显的业务波峰波谷（例如晚上是其中一个业务高峰期）。「发现 Feed」本质上是一个推荐系统，因此这个服务的计算量比普通的业务会大很多，但是为了保证用户体验，服务的响应时间必须控制在几十毫秒到百毫秒这个量级。当业务高峰期时，很容易就因为处理不过来请求而导致请求超时，对于用户来说的体验就是打开小红书首页结果发现「白屏」了。为了应对高峰期的突发流量，受微信后端团队的一篇论文[「Overload Control for Scaling WeChat Microservices」](https://arxiv.org/abs/1806.04075)启发，我实现了一个根据流量变化动态调整服务质量的框架。你可以简单理解为一个自动化的服务降级框架，当业务高峰期时，如果服务发现自己已经无法承载更多流量，会主动舍弃一些请求，来换取整体服务的可用性。当然舍弃用户请求并不是说给用户看「白屏」，整个「发现 Feed」服务还有多个维度的降级策略，如果无法给用户推荐高质量的内容，那就算返回一些相对「低质量」的内容也是可以接受的，总比整个服务都挂了导致用户啥都看不见强。

因此我也在想 K8s API server 是否可以有类似的自动降级策略呢？当然我并不是 K8s 专家，或许 K8s 社区已经有了好的解决方案。如果 K8s 架构里依赖 API server 这个「单点」在所难免，那就得准备好 API server 随时不可用的预案。

前面我提的第 4 个问题是「为什么要一次性全量上线这个新组件？」，在这篇事故报告的时间线里有提到：

> OpenAI operates hundreds of Kubernetes clusters globally.
>
> …
>
> * **December 11th, 2024 at 2:23pm**: The change to introduce the new service was merged and the deployment pipeline triggered
> * **2:51pm to 3:20pm**: The change was applied to all clusters

14:23 开始触发 CD，14:51-15:20 完成部署，在短短 30 分钟内就完成了全球数百个 K8s 集群的部署让人不得不赞叹 OpenAI 部署系统的高效。但是我的疑问其实是为什么一开始就要全量上线呢？如果是我来选择的话，我一定不会冒风险一次性全量上线，特别是在涉及全球几百个集群的情况下。这并不是说我「胆子小」，一个系统从来不是靠谁胆子大而变得稳定可靠的。在多年的工作经验中，我发现了一个有趣的现象，就是：**软件工程师不论技术高低，都会存在一种「侥幸心理」，会有一种莫名的「自信」认为自己的代码上线以后「应该」没有问题**。这种自信的来源可能有很多种，比如觉得自己技术牛逼代码肯定没问题、我已经写了单元测试（并且跑通了！）、我甚至连集成测试都写了、单纯就是懒得测试上线了再说。但是，软件必然存在 bug，也必然存在意外。为了防止意外发生或者尽量减少意外的影响范围，软件工程领域其实已经有了很多最佳实践，比如灰度发布、蓝绿部署、特性开关、A/B 实验。既然前人已经积累了这么多好的实践，为什么不在实际项目中合理运用呢？我实在想不到有什么理由必须在上线第一天就全量生效（尤其考虑到事故的影响范围），很多时候其实都是因为「懒得弄」所以干脆全量上线得了，反正出了事故可以回滚不是？的确，及时发现问题及时回滚也是一种好的实践，但是看看 OpenAI 这次事故遇到的窘境：

> Monitoring a deployment and reverting an offending change is generally straightforward, and we have tools to detect and roll back bad deployments. In this case, our detection tools worked and we detected the issue a few minutes before customers started seeing impact. But the fix for this issue required us to remove the offending service. In order to make that fix, we needed to access the Kubernetes control plane – which we could not do due to the increased load to the Kubernetes API servers.

OpenAI 的检测工具甚至在用户发现问题的几分钟前就已经提前预警，但是由于 K8s API server 过载导致连回滚都无法正常进行，陷入了一种「进退两难」的困境。所以，任何时候都不要假设出了问题可以及时回滚。

这里再次分享一个之前在小红书的实践经验。「发现 Feed」服务一开始是一个「大而全」的服务，随着业务变得复杂，什么功能都往里塞，逐渐使得服务的性能和可维护性都面临了挑战。因此和很多公司一样，我们选择把「发现 Feed」服务进行微服务改造，其中我负责的就是把核心的笔记召回服务拆分出来（关于什么是「召回」可以阅读我写的[「如何设计与实现一个分布式索引框架（一）」](/blog/2020/04/21/how-to-design-a-distributed-index-framework-part-1)这篇文章）。服务拆分以后带来的好处自然不必说，但是也可能带来一些负面影响，比如响应时间变长、用户体验变差等。在实际上线以前谁都不敢保证最终的效果如何，因此我们选择了把这次架构改造变成一个 A/B 实验来进行。也就是把用户分成两个组，实验组访问新架构的服务，对照组还是访问旧的服务，然后观察这两个组的用户行为指标（比如曝光、点击、互动等）。采用 A/B 实验来上线除了可以对比不同用户的行为以外，另一个好处就是可以灵活控制实验的影响范围。对于这种大的架构改造，我们通常在最开始上线的时候都会比较保守（例如只圈定 1% 的用户加入实验），随着时间推移以及效果评估，会逐步增大用户比例，最终 100% 全量上线。实验过程中新服务可能会发生一些严重故障，此时就可以迅速把实验流量全部切回旧服务。最终这个实验在线上跑了几个月以后新服务才正式替代旧服务，并且实验结果也非常不错，在多个用户行为指标上有显著提升。

随着这几年 AGI 的热潮，技术圈的关注焦点都围绕在了 AI 上，而传统的软件工程技术反而较少提及。诚然，像[「Attention is All You Need」](https://research.google/pubs/attention-is-all-you-need)这样具有划时代意义的革新一定会载入史册，但就像我在文章开头所说的，一个工程项目绝不仅仅只有模型和算法，还有大量看起来不够「炫酷」、甚至「无聊」的工作需要完成。我相信很多软件工程的最佳实践在 AGI 时代依然存在它的价值，至少目前 AI 还不能取代一个优秀的架构师。看到当下的很多讨论都在说 AGI 时代的到来对于学生未来的学习方向有什么影响，我想说的是不要忽视那些看似「过时」的技术或者所谓的「基本功」，更不要让自己仅仅成为一个「提示词工程师」。

最后是彩蛋时间，我问了 GPT-4o mini 以下问题，从目前的回答来看，只能说我们离 AGI 的距离还挺远的。

![GPT-4o mini dealing incident](/img/blog/openai-will-die-long-live-software-engineering/gpt-4o-mini-dealing-incident.png)
