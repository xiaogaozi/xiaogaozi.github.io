"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6860],{2409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var r=n(9519),p=n(4848),a=n(8453);const l={title:"Auto Open Browser After Copy URL",date:"2014-01-31 05:07:36 +0800",tags:["AppleScript","Productivity"]},i=void 0,o={authorsImageUrls:[]},s=[{value:"AppleScript \u7a0b\u5e8f",id:"applescript-\u7a0b\u5e8f",level:2},{value:"\u8bbe\u7f6e\u540e\u53f0\u8fd0\u884c",id:"\u8bbe\u7f6e\u540e\u53f0\u8fd0\u884c",level:2},{value:"\u8bbe\u7f6e\u767b\u5f55\u81ea\u52a8\u542f\u52a8",id:"\u8bbe\u7f6e\u767b\u5f55\u81ea\u52a8\u542f\u52a8",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(t.p,{children:["\u524d\u6bb5\u65f6\u95f4\u770b\u8fc7\u4e00\u7bc7\u53eb ",(0,p.jsx)(t.a,{href:"http://sc5.io/blog/2014/01/automate-everyday-tasks",children:"Automate Everyday Tasks"})," \u7684\u535a\u5ba2\uff0c\u5176\u4e2d\u7684\u4e00\u4e9b\u89c1\u89e3\u5f88\u6709\u610f\u601d\uff0c\u6211\u4eec\u65e5\u5e38\u5de5\u4f5c\u4e2d\u6709\u5f88\u591a\u7ec6\u5c0f\u4f46\u662f\u91cd\u590d\u7684\u4e8b\u60c5\uff0c\u5982\u679c\u80fd\u591f\u5c06\u67d0\u4e9b\u5de5\u4f5c\u81ea\u52a8\u5b8c\u6210\uff0c\u4f1a\u8ba9\u751f\u6d3b\u66f4\u52a0\u8212\u9002\u3002\u6211\u5f88\u559c\u6b22 Mac \u4e0a\u4e00\u4e2a\u53eb ",(0,p.jsx)(t.a,{href:"http://pilotmoon.com/popclip",children:"PopClip"})," \u7684\u5c0f app\uff0c\u53ef\u4ee5\u5927\u5927\u51cf\u5c11\u5f88\u591a\u91cd\u590d\u7684\u64cd\u4f5c\u3002\u8fd9\u7bc7\u535a\u5ba2\u5c31\u662f\u4ecb\u7ecd\u5982\u4f55\u5236\u4f5c\u4e00\u4e2a app\uff0c\u5f53\u590d\u5236 URL \u65f6\u81ea\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u3002"]}),"\n",(0,p.jsxs)(t.p,{children:["\u6709\u4e86\u8fd9\u4e2a\u60f3\u6cd5\u4e4b\u540e\u6211\u5148\u53bb",(0,p.jsx)(t.a,{href:"https://www.google.com/search?q=os+x+clipboard+manager",children:"\u627e\u627e\u770b"}),"\u662f\u5426\u6709\u7c7b\u4f3c\u7684\u8f6f\u4ef6\uff0c\u4f46\u5df2\u6709\u7684\u526a\u8d34\u677f\u7ba1\u7406\u5de5\u5177\u90fd\u6ca1\u6709\u8fd9\u6837\u7684\u529f\u80fd\u3002\u4e8e\u662f\u51b3\u5b9a\u81ea\u5df1\u52a8\u624b\u505a\uff0c\u56e0\u4e3a\u6ca1\u6709\u5f00\u53d1 Mac app \u7684\u7ecf\u9a8c\uff0c\u9996\u5148\u60f3\u5230\u7684\u5c31\u662f\u5229\u7528 Automator \u6765\u5b9e\u73b0\uff0c\u53ef\u60dc Automator \u4e0d\u652f\u6301\u540e\u53f0\u8fd0\u884c\u3002\u7ecf\u8fc7\u641c\u7d22 StackExchange \u4e0a\u7684\u4e00\u4e2a",(0,p.jsx)(t.a,{href:"http://apple.stackexchange.com/questions/96214/creating-a-resident-workflow-with-automator",children:"\u95ee\u9898"}),"\u7ed9\u4e86\u6211\u601d\u8def\uff1a\u7528 AppleScript \u6765\u505a\u3002"]}),"\n",(0,p.jsx)(t.h2,{id:"applescript-\u7a0b\u5e8f",children:"AppleScript \u7a0b\u5e8f"}),"\n",(0,p.jsx)(t.p,{children:"\u6253\u5f00 AppleScript Editor\uff0c\u8f93\u5165\u4ee5\u4e0b\u4ee3\u7801\uff0c\u4ee3\u7801\u5927\u610f\u662f\u6bcf\u9694 1 \u79d2\u5224\u65ad\u526a\u8d34\u677f\u5185\u5bb9\u662f\u5426\u4e3a URL\uff0c\u5982\u679c\u662f\u5c31\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u3002"}),"\n",(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:"language-applescript",children:'property oldValue : missing value\n\non idle\n    local newValue\n    set newValue to the clipboard\n    if oldValue is not equal to newValue then\n        try\n            if newValue starts with "http://" or newValue starts with "https://" then\n                do shell script "open " & newValue\n            end if\n        end try\n        set oldValue to newValue\n    end if\n    return 1\nend idle\n'})}),"\n",(0,p.jsx)(t.p,{children:"\u4fdd\u5b58\uff0c\u300cFile Format\u300d\u9009\u300cApplication\u300d\uff0c\u52fe\u9009\u300cStay open after run handler\u300d\u3002"}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.img,{src:"http://f.cl.ly/items/3s0D1g2D2h2U1R273i1b/Screen%20Shot%202014-01-30%20at%2017.31.56.png",alt:""})}),"\n",(0,p.jsx)(t.h2,{id:"\u8bbe\u7f6e\u540e\u53f0\u8fd0\u884c",children:"\u8bbe\u7f6e\u540e\u53f0\u8fd0\u884c"}),"\n",(0,p.jsx)(t.p,{children:"AppleScript \u7a0b\u5e8f\u8fd0\u884c\u65f6\u4f1a\u5728 Dock \u4e0a\u663e\u793a\u4e00\u4e2a\u56fe\u6807\uff0c\u6211\u4eec\u9700\u8981\u9690\u85cf\u8fd9\u4e2a\u56fe\u6807\u3002"}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.img,{src:"http://f.cl.ly/items/343f2V1S2D3E1O102h0t/Screen%20Shot%202014-01-31%20at%200.57.07.png",alt:""})}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.img,{src:"http://cl.ly/image/2O0v2O23341w/Screen%20Shot%202014-01-31%20at%204.49.28.png",alt:""})}),"\n",(0,p.jsx)(t.p,{children:"\u589e\u52a0\u4e00\u4e2a\u65b0\u7684 key\u300cApplication is background only\u300d\uff0cvalue \u4e3a\u300cYES\u300d\u3002"}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.img,{src:"http://f.cl.ly/items/0L3c0u1R47213D2b2F3N/Screen%20Shot%202014-01-30%20at%2017.58.09.png",alt:""})}),"\n",(0,p.jsx)(t.h2,{id:"\u8bbe\u7f6e\u767b\u5f55\u81ea\u52a8\u542f\u52a8",children:"\u8bbe\u7f6e\u767b\u5f55\u81ea\u52a8\u542f\u52a8"}),"\n",(0,p.jsx)(t.p,{children:"\u5728 System Preferences \u2192 Users & Groups \u2192 Login Items \u4e2d\u6dfb\u52a0\u521a\u624d\u521b\u5efa\u7684 app\uff0c\u5e76\u8bbe\u7f6e\u4e3a hide \u6a21\u5f0f\u3002"}),"\n",(0,p.jsx)(t.p,{children:(0,p.jsx)(t.img,{src:"http://f.cl.ly/items/1t461t21143M1s1J1L1o/Screen%20Shot%202014-01-30%20at%2018.02.57.png",alt:""})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(6540);const p={},a=r.createContext(p);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:l(e.components),r.createElement(a.Provider,{value:t},e.children)}},9519:e=>{e.exports=JSON.parse('{"permalink":"/blog/2014/01/31/auto-open-browser-after-copy-url","source":"@site/blog/2014-01-31-auto-open-browser-after-copy-url.md","title":"Auto Open Browser After Copy URL","description":"\u524d\u6bb5\u65f6\u95f4\u770b\u8fc7\u4e00\u7bc7\u53eb Automate Everyday Tasks \u7684\u535a\u5ba2\uff0c\u5176\u4e2d\u7684\u4e00\u4e9b\u89c1\u89e3\u5f88\u6709\u610f\u601d\uff0c\u6211\u4eec\u65e5\u5e38\u5de5\u4f5c\u4e2d\u6709\u5f88\u591a\u7ec6\u5c0f\u4f46\u662f\u91cd\u590d\u7684\u4e8b\u60c5\uff0c\u5982\u679c\u80fd\u591f\u5c06\u67d0\u4e9b\u5de5\u4f5c\u81ea\u52a8\u5b8c\u6210\uff0c\u4f1a\u8ba9\u751f\u6d3b\u66f4\u52a0\u8212\u9002\u3002\u6211\u5f88\u559c\u6b22 Mac \u4e0a\u4e00\u4e2a\u53eb PopClip \u7684\u5c0f app\uff0c\u53ef\u4ee5\u5927\u5927\u51cf\u5c11\u5f88\u591a\u91cd\u590d\u7684\u64cd\u4f5c\u3002\u8fd9\u7bc7\u535a\u5ba2\u5c31\u662f\u4ecb\u7ecd\u5982\u4f55\u5236\u4f5c\u4e00\u4e2a app\uff0c\u5f53\u590d\u5236 URL \u65f6\u81ea\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u3002","date":"2014-01-31T05:07:36.000Z","tags":[{"inline":true,"label":"AppleScript","permalink":"/blog/tags/apple-script"},{"inline":true,"label":"Productivity","permalink":"/blog/tags/productivity"}],"readingTime":2.135,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Auto Open Browser After Copy URL","date":"2014-01-31 05:07:36 +0800","tags":["AppleScript","Productivity"]},"unlisted":false,"prevItem":{"title":"\u9999\u6e2f\u5e06\u8239\u57f9\u8bad\u8bb0\u5f55","permalink":"/blog/2014/12/15/saling-in-hk"},"nextItem":{"title":"\u6d41\u6d6a\u6c49\uff0c\u6728\u5076\u548c\u53a8\u5b50","permalink":"/blog/2013/03/21/vagrant-puppet-and-chef"}}')}}]);