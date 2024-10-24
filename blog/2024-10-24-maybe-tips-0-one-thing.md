---
title: "Maybe Tips #0 One Thing"
date: 2024-10-24 08:00:00 +0800
tags: ["maybe tips"]
---

> 「Maybe Tips」是一档以「我不知道对你们是否有用，反正对我来说很有用」为宗旨的栏目，每一期只会围绕一个主题，可能是一个我觉得好用的 app，也可能是某个奇怪的使用技巧。篇幅不求长短，反正写长了也没人看。以下是正文。

{/* truncate */}

![One Thing icon](/img/blog/maybe-tips/0/one-thing-icon.png)

本期介绍的是一个叫做 [One Thing](https://sindresorhus.com/one-thing) 的 app，知道这个 app 其实是因为先了解到了同一个作者的另一个 app——[Hyperduck](https://sindresorhus.com/hyperduck)（一个可以从 iOS 共享信息给 macOS 的工具，有点类似于 AirDrop 和 Handoff，不过我最终并没有用 Hyperduck，我还是更习惯于原生的功能）。这个作者厉害的地方在于他独立开发了非常多的 app，你可以去他的[主页](https://sindresorhus.com/apps)查看，而 One Thing 就是其中一个。

之所以要介绍 One Thing 是因为它解决了一个长久困扰我的问题。话说从头，基于众所周知的原因，在中国大陆访问互联网除了需要梯子以外，还有一件非常重要的事情就是「DNS 服务器」。并不是说你需要自己部署一个 DNS 服务器，而是需要使用那些没有被「污染」过、可信任的 DNS 服务器。所以我在日常的网上冲浪过程中会特别关注当前使用的 DNS 服务器是什么，因为你的电脑可能会由于各种奇怪的原因重置回默认的 DNS 服务器。为了快速查看和切换到正确的 DNS 服务器，我使用了 Alfred 的 [atop](https://alfred.app/workflows/chrisgrieser/atop) workflow。这个 workflow 大大简化了确认和设置 DNS 服务器的流程，不过我还是觉得每天反复 N 次去人肉检查是一个很蠢的行为，基于职业习惯我希望把整个流程变成一个自动化的操作（比如定期把当前的 DNS 服务器显示在右上角的菜单栏里）。经过一番网络搜索，我并没有找到这样一个可以解决我问题的 app 或者方法，于是只能继续人肉检查。直到有一天我发现了 One Thing 这个 app。

One Thing 的功能其实非常简单，它有且只有一个功能，就是在右上角的菜单栏里显示一个你自定义的内容。也许你会想这个功能和前面提到的 DNS 服务器有什么关联吗，不要着急，One Thing 强大的地方不在于此，而在于它可以和 Shortcuts（快捷指令）集成！感谢阿库，让我们可以在 macOS 上使用 Shortcuts，一旦某个应用支持了 Shortcuts，那它就有了丰富的使用场景。于是我要做的事情就非常简单了，你可以点击[这里](https://www.icloud.com/shortcuts/daa6fca9a1b447abab2724f23c5549a8)查看我制作的 shortcut（截图如下）。这个 shortcut 其实只有两个步骤，首先使用脚本获取当前的 DNS 服务器，然后通过 One Thing 把这个服务器显示在菜单栏里，大功告成！

![Show DNS server shortcut](/img/blog/maybe-tips/0/show-dns-server-shortcut.png)

不过还有一件事情没有实现，shortcut 通常都是由人来手动触发执行的，但是我的需求是定期执行 shortcut，这个功能在原生的 macOS 里并不支持，于是需要借助一些第三方的工具来完成。在 One Thing 官网里推荐的是 [Shortery](https://www.numberfive.co/detail_shortery.html)（如果想要基于时间触发执行 shortcut 需要花 $9.99 升级为 PRO 版本），而我用的是已经使用了很多年的 [BetterTouchTool](https://folivora.ai)。不管你用哪个工具，最终效果都差不多，只要能基于时间定期执行 shortcut 就行。

至此所有需求就已经都满足了，从想到这个点子到最终实现出来其实花不了太多时间，很多时候可能只是因为缺少了某些关键信息而不能往前推进。如果我没有因为看到 Hyperduck 而恰好发现 One Thing 的话，我估计我还得每天重复着相同的检查工作。
