"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9183],{4722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var i=n(3378),a=n(4848),r=n(8453);const s={title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u56db\uff09\uff1a\u7d22\u5f15\u66f4\u65b0",date:"2020-05-13 14:55:43 +0800",tags:["index","distrubted","htdadif","recommendation","machine learning"]},o=void 0,l={authorsImageUrls:[]},d=[];function c(e){const t={a:"a",blockquote:"blockquote",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["\u8fd9\u662f\u4e00\u4e2a",(0,a.jsx)(t.a,{href:"/blog/tags/htdadif",children:"\u7cfb\u5217\u6587\u7ae0"}),"\uff0c\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u6765\u81ea\u6211\u8fc7\u53bb\u5728\u5c0f\u7ea2\u4e66\u53d1\u73b0 Feed \u56e2\u961f\u5de5\u4f5c\u671f\u95f4\u7684\u5b9e\u8df5\u548c\u7ecf\u9a8c\u3002\u5728\u4ecb\u7ecd\u7684\u8fc7\u7a0b\u4e2d\u6211\u4f1a\u5c3d\u91cf\u4e0d\u63ba\u6742\u8fc7\u591a\u7684\u4e1a\u52a1\u7ec6\u8282\uff0c\u800c\u4e13\u6ce8\u4e8e\u8fd9\u80cc\u540e\u6211\u4e2a\u4eba\u4e00\u4e9b\u6d45\u8584\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5e0c\u671b\u4f60\u5728\u9605\u8bfb\u5b8c\u8fd9\u4e9b\u6587\u7ae0\u4ee5\u540e\u80fd\u591f\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u62d3\u5c55\u5230\u4e0d\u540c\u7684\u573a\u666f\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/blog/2020/04/24/how-to-design-a-distributed-index-framework-part-3",children:"\u4e0a\u4e00\u7bc7\u6587\u7ae0"}),"\u4ecb\u7ecd\u4e86\u5982\u4f55\u5b9e\u73b0\u6b63\u6392\u7d22\u5f15\u548c\u4e8c\u7ea7\u7d22\u5f15\uff0c\u4f46\u8981\u521b\u5efa\u7d22\u5f15\u4e5f\u5f97\u5148\u6709\u6570\u636e\u624d\u884c\uff0c\u672c\u7bc7\u5c06\u4f1a\u4ecb\u7ecd\u6570\u636e\u662f\u5982\u4f55\u66f4\u65b0\u7684\u3002"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(6540);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},3378:e=>{e.exports=JSON.parse('{"permalink":"/blog/2020/05/13/how-to-design-a-distributed-index-framework-part-4","source":"@site/blog/2020-05-13-how-to-design-a-distributed-index-framework-part-4.md","title":"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u56db\uff09\uff1a\u7d22\u5f15\u66f4\u65b0","description":"\u8fd9\u662f\u4e00\u4e2a\u7cfb\u5217\u6587\u7ae0\uff0c\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u6765\u81ea\u6211\u8fc7\u53bb\u5728\u5c0f\u7ea2\u4e66\u53d1\u73b0 Feed \u56e2\u961f\u5de5\u4f5c\u671f\u95f4\u7684\u5b9e\u8df5\u548c\u7ecf\u9a8c\u3002\u5728\u4ecb\u7ecd\u7684\u8fc7\u7a0b\u4e2d\u6211\u4f1a\u5c3d\u91cf\u4e0d\u63ba\u6742\u8fc7\u591a\u7684\u4e1a\u52a1\u7ec6\u8282\uff0c\u800c\u4e13\u6ce8\u4e8e\u8fd9\u80cc\u540e\u6211\u4e2a\u4eba\u4e00\u4e9b\u6d45\u8584\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5e0c\u671b\u4f60\u5728\u9605\u8bfb\u5b8c\u8fd9\u4e9b\u6587\u7ae0\u4ee5\u540e\u80fd\u591f\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u62d3\u5c55\u5230\u4e0d\u540c\u7684\u573a\u666f\u3002","date":"2020-05-13T14:55:43.000Z","tags":[{"inline":true,"label":"index","permalink":"/blog/tags/index"},{"inline":true,"label":"distrubted","permalink":"/blog/tags/distrubted"},{"inline":true,"label":"htdadif","permalink":"/blog/tags/htdadif"},{"inline":true,"label":"recommendation","permalink":"/blog/tags/recommendation"},{"inline":true,"label":"machine learning","permalink":"/blog/tags/machine-learning"}],"readingTime":9.77,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u56db\uff09\uff1a\u7d22\u5f15\u66f4\u65b0","date":"2020-05-13 14:55:43 +0800","tags":["index","distrubted","htdadif","recommendation","machine learning"]},"unlisted":false,"prevItem":{"title":"Maybe News Issue #1","permalink":"/blog/2020/05/21/maybe-news-issue-1"},"nextItem":{"title":"Maybe News Issue #0","permalink":"/blog/2020/05/11/maybe-news-issue-0"}}')}}]);