---
title: "Hadoop Best Practices: Scheduling in YARN"
date: 2014-12-27 19:01:55 +0800
tags: [hadoop, yarn]
---

> 这篇文章基本上是对[《Hadoop: The Definitive Guide, 4th Edition》第 4 章](https://www.safaribooksonline.com/library/view/hadoop-the-definitive/9781491901687/ch04.html#YARNScheduling)的转述，版权归作者所有。

YARN 提供了三种任务调度策略：FIFO Scheduler，Capacity Scheduler 和 Fair Scheduler，下面会分别详细介绍。

<!--truncate-->

## FIFO Scheduler

顾名思义，FIFO Scheduler 就是将所有 application 按照提交顺序来执行，这些 application 都放在一个队列里，只有在执行完一个之后，才会继续执行下一个。

这种调度策略很容易理解，但缺点也很明显。耗时的长任务会导致后提交的任务一直处于等待状态，如果这个集群是多人共享的，显然不太合理。因此 YARN 提供了另外两种调度策略，更加适合共享集群。下图是 FIFO Scheduler 执行过程的示意图：

![FIFO Scheduler](https://farm8.staticflickr.com/7562/16118318715_13c5427d15_o.png)

## Capacity Scheduler

既然需要多人共享，那 Capacity Scheduler 就为每个人分配一个队列，每个队列占用的集群资源是固定的，但是可以不同，队列内部还是采用 FIFO 调度的策略。下图是 Capacity Scheduler 执行过程的示意图：

![Capacity Scheduler](https://farm8.staticflickr.com/7559/15495992404_c03bc4d9a8_o.png)

可以看到，队列 A 和 B 享有独立的资源，但是 A 所占的资源比重更多。如果任务在被执行的时候，集群恰好有空闲资源，比如队列 B 为空，那么调度器就可能分配更多的资源给队列 A，以更好地利用空闲资源。这种处理方式被叫做「queue elasticity」（弹性队列）。

但是弹性队列也有一些副作用，如果此时队列 B 有了新任务，之前被队列 A 占用的资源并不会立即释放，只能等到队列 A 的任务执行完。为了防止某个队列过多占用集群资源，YARN 提供了一个设置可以控制某个队列能够占用的最大资源。但这其实又是跟弹性队列冲突的，因此这里有一个权衡的问题，这个最大值设为多少需要不断试验和尝试。

Capacity Scheduler 的队列是支持层级关系的，即有子队列的概念。下面是一个示例配置文件：

```xml
<?xml version="1.0"?>
<configuration>
  <property>
    <name>yarn.scheduler.capacity.root.queues</name>
    <value>prod,dev</value>
  </property>
  <property>
    <name>yarn.scheduler.capacity.root.dev.queues</name>
    <value>eng,science</value>
  </property>
  <property>
    <name>yarn.scheduler.capacity.root.prod.capacity</name>
    <value>40</value>
  </property>
  <property>
    <name>yarn.scheduler.capacity.root.dev.capacity</name>
    <value>60</value>
  </property>
  <property>
    <name>yarn.scheduler.capacity.root.dev.maximum-capacity</name>
    <value>75</value>
  </property>
  <property>
    <name>yarn.scheduler.capacity.root.dev.eng.capacity</name>
    <value>50</value>
  </property>
  <property>
    <name>yarn.scheduler.capacity.root.dev.science.capacity</name>
    <value>50</value>
  </property>
</configuration>
```

所有队列的根队列叫做 `root`，这里一共有两个队列：`dev` 和 `prod`，`dev` 队列之下又有两个子队列：`eng` 和 `science`。`dev` 和 `prod` 分别占用了 60% 和 40% 的资源比重，同时限制了 `dev` 队列能够伸缩到的最大资源比重是 75%，换句话说，`prod` 队列至少能有 25% 的资源分配。`eng` 和 `science` 队列各占 50%，但因为没有设置最大值，所以有可能出现某个队列占用整个父队列资源的情况。

除了设置队列层级关系和资源分配比重之外，Capacity Scheduler 还提供了诸如控制每个用户或者任务最大占用资源、同时执行的最大任务数，以及队列的 ACL 等配置，详细请参考[官方文档](http://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/CapacityScheduler.html)。

### 队列放置

分配好了队列，要怎么控制任务在指定队列执行呢？如果是 MapReduce 程序，那么可以通过 `mapreduce.job.queuename` 来设置执行队列，默认情况是在 `default` 队列执行。注意指定的队列名不需要包含父队列，即不能写成 `root.dev.eng`，而应该写 `eng`。

## Fair Scheduler

Fair Scheduler 试图为每个任务均匀分配资源，比如当前只有任务 1 在执行，那么它拥有整个集群资源，此时任务 2 被提交，那任务 1 和任务 2 将平分集群资源，以此类推。

当然 Fair Scheduler 也支持队列的概念，下图是执行过程的示意图：

![Fair Scheduler](https://www.safaribooksonline.com/library/view/hadoop-the-definitive/9781491901687/images/yarn_fair_scheduling.png)

队列 A 首先执行任务，任务 1 拥有整个集群资源，随后队列 B 增加任务 2，这两个队列均分资源，接着任务 3 被提交到队列 B，但这并不会影响队列 A，任务 3 将会跟任务 2 一起均分资源。

### 开启 Fair Scheduler

设置 `yarn.resourcemanager.scheduler.class` 为 `org.apache.hadoop.yarn.server.resourcemanager.scheduler.fair.FairScheduler`（在 `yarn-site.xml`），如果你使用的是 CDH，那默认就是 Fair Scheduler（事实上，CDH 也[不支持 Capacity Scheduler](http://www.cloudera.com/content/cloudera/en/documentation/cdh5/v5-1-x/CDH5-Installation-Guide/cdh5ig_mapreduce_to_yarn_migrate.html#concept_nqs_pmy_xl_unique_3)）。

### 队列设置

Fair Scheduler 通过 `fair-scheduler.xml` 文件来进行各种设置，这个文件的位置可以通过 `yarn.scheduler.fair.allocation.file` 属性来控制（在 `yarn-site.xml`）。如果没有这个文件，Fair Scheduler 采取的策略将是：每个任务都放在以当前用户命名的队列中，如果这个队列不存在，将会自动创建。

Fair Scheduler 也支持显式定义队列，就像 Capacity Scheduler 那样，下面是示例文件：

```xml
<?xml version="1.0"?>
<allocations>
  <defaultQueueSchedulingPolicy>fair</defaultQueueSchedulingPolicy>

  <queue name="prod">
    <weight>40</weight>
    <schedulingPolicy>fifo</schedulingPolicy>
  </queue>

  <queue name="dev">
    <weight>60</weight>
    <queue name="eng" />
    <queue name="science" />
  </queue>

  <queuePlacementPolicy>
    <rule name="specified" create="false" />
    <rule name="primaryGroup" create="false" />
    <rule name="default" queue="dev.eng" />
  </queuePlacementPolicy>
</allocations>
```

这里自定义了两个队列：`prod` 和 `dev`，权重比是 40:60，也就是说不采用均分的策略。每个队列可以有不同的调度策略，默认都是 `fair`，此外还有 FIFO、Dominant Resource Fairness（`drf`，后面会讲到）。详细的配置信息可以查看[官方文档](http://hadoop.apache.org/docs/current/hadoop-yarn/hadoop-yarn-site/FairScheduler.html)。

### 队列放置

不同于 Capacity Scheduler，Fair Scheduler 是通过规则来决定放置的队列，即前面配置文件中的 `queuePlacementPolicy` 设置。第一个规则 `specified` 代表如果任务自己指定了队列，就放置到这个队列，如果没有指定，或者指定的队列不存在，就采用下一条规则。`primaryGroup` 规则的意思是试图将任务放置到当前用户的主要 Unix 组，如果这个队列不存在则继续下一条规则。`default` 规则会匹配所有任务，示例文件的意思是放置到 `dev.eng` 队列中。

`queuePlacementPolicy` 可以省略，如果不设置，那么默认的规则如下：

```xml
<queuePlacementPolicy>
  <rule name="specified" />
  <rule name="user" />
</queuePlacementPolicy>
```

也就是说除非显式指定队列，那么将会使用当前用户名作为队列，并且如果队列不存在将会自动创建。

### 中断（Preempt）

当一个任务被提交到一个空队列，但是集群不太空闲的时候，这个任务不会被立即执行，需要等待其它任务执行完毕让出资源。为了等待时间更加可控，Fair Scheduler 支持「中断」（preemption）。

中断的意思是调度器会通过强行结束 container 执行的方式来释放资源，在满足某些条件的情况下。注意中断是以牺牲集群性能为代价的一种做法，因为被强行结束的 container 需要重新执行。

通过设置 `yarn.scheduler.fair.preemption` 为 `true` 来开启中断（在 `yarn-site.xml`），同时还需要设置另外两个超时属性中的至少一个（在 `fair-scheduler.xml`），超时的单位都是秒。

- `defaultMinSharePreemptionTimeout` 或 `minSharePreemptionTimeout`：如果一个队列等待当前设置的超时时间之后还是没有分配到应该分配的最小资源，那么调度器就会去中断其它 container。
- `defaultFairSharePreemptionTimeout` 或 `fairSharePreemptionTimeout`：如果一个队列等待当前设置的超时时间之后还是没有分配到应该分配的资源的一半以上，那么调度器就会去中断其它 container。`defaultFairSharePreemptionThreshold` 或 `fairSharePreemptionThreshold` 可以用来调节阈值，默认是 0.5。

## 延迟调度

以上三种调度都遵从 locality 原则。在一个繁忙的集群里，当一个任务请求一个节点的时候有很大概率这个节点正被其它 container 占用，比较显而易见的做法可能是立即寻找同一机柜里的其它节点。但是经过实际观察，如果稍微等待一段时间（秒级），分配到当前请求节点的概率将显著增加。这种策略叫做「延迟调度」（delay scheduling），Capacity Scheduler 和 Fair Scheduler 都支持这种策略。

每一个 node manager 会定期发送心跳给 resource manager，这其中就包含了该 node manager 正在运行的 container 数量以及可以分配给新 container 的资源。当采用延迟调度策略时，调度器并不会立即使用收集到的信息，而会等待一段时间，以达到遵从 locality 的目的。

Capacity Scheduler 的延迟调度通过 `yarn.scheduler.capacity.node-locality-delay` 来配置，这是一个正整数，假设是 n，表示调度器将会放弃前 n 条心跳信息。

Fair Scheduler 的延迟调度通过 `yarn.scheduler.fair.locality.threshold.node` 来设置，这是一个 0~1 之间的浮点数，例如是 0.5，表示调度器将会等待超过一半的节点发送心跳信息之后再决定。

## Dominant Resource Fairness (DRF)

如果只有一种资源类型需要调度，例如内存，那资源容量的概念将会很简单，比如均分资源，就代表均分内存。但是如果有多种资源类型，例如再加上 CPU，事情就变得复杂了。如果一个任务需要很多的 CPU，但是很少的内存，而另一个任务需要很少的 CPU，很多的内存，这两个任务要如何比较呢？

Dominant Resource Fairness（DRF）就是用来干这种事情的，下面举例说明是什么意思。

假设一个集群总共有 100 个 CPU，10 TB 内存。任务 A 需要 2 个 CPU，300 GB 内存。任务 B 需要 6 个 CPU，100 GB 内存。那么 A 所需资源占集群的比重是 2% 和 3%，因为内存的比重更大，那么就可以以 3% 这个比重来整体衡量 A。同理，比较之后 B 的最终比重是 6%。因此任务 B 需要两倍于任务 A 的资源（6% 比 3%），如果是均分（fair）策略，那么 B 的 container 数量将会是 A 的一半。

DRF 没有默认使用，因此在计算资源的时候只考虑了内存，而忽略了 CPU。Capacity Scheduler 需要设置 `yarn.scheduler.capacity.resource-calculator` 为 `org.apache.hadoop.yarn.util.resource.DominantResourceCalculator`（在 `capacity-scheduler.xml`）；Fair Scheduler 需要设置 `defaultQueueSchedulingPolicy` 为 `drf`。

## 总结

FIFO Scheduler 显然不适用于生产环境；Capacity Scheduler 概念简单，但缺乏灵活性；Fair Scheduler 最复杂，但具有足够的灵活性以及更好的资源利用率。
