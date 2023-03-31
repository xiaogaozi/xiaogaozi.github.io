"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5430],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u4e94\uff09\uff1a\u5206\u5e03\u5f0f",date:"2020-05-25 11:21:49 +0800",tags:["index","distrubted","htdadif","recommendation","machine learning"]},i=void 0,l={permalink:"/blog/2020/05/25/how-to-design-a-distributed-index-framework-part-5",source:"@site/blog/2020-05-25-how-to-design-a-distributed-index-framework-part-5.md",title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u4e94\uff09\uff1a\u5206\u5e03\u5f0f",description:"\u8fd9\u662f\u4e00\u4e2a\u7cfb\u5217\u6587\u7ae0\uff0c\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u6765\u81ea\u6211\u8fc7\u53bb\u5728\u5c0f\u7ea2\u4e66\u53d1\u73b0 Feed \u56e2\u961f\u5de5\u4f5c\u671f\u95f4\u7684\u5b9e\u8df5\u548c\u7ecf\u9a8c\u3002\u5728\u4ecb\u7ecd\u7684\u8fc7\u7a0b\u4e2d\u6211\u4f1a\u5c3d\u91cf\u4e0d\u63ba\u6742\u8fc7\u591a\u7684\u4e1a\u52a1\u7ec6\u8282\uff0c\u800c\u4e13\u6ce8\u4e8e\u8fd9\u80cc\u540e\u6211\u4e2a\u4eba\u4e00\u4e9b\u6d45\u8584\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5e0c\u671b\u4f60\u5728\u9605\u8bfb\u5b8c\u8fd9\u4e9b\u6587\u7ae0\u4ee5\u540e\u80fd\u591f\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u62d3\u5c55\u5230\u4e0d\u540c\u7684\u573a\u666f\u3002",date:"2020-05-25T11:21:49.000Z",formattedDate:"May 25, 2020",tags:[{label:"index",permalink:"/blog/tags/index"},{label:"distrubted",permalink:"/blog/tags/distrubted"},{label:"htdadif",permalink:"/blog/tags/htdadif"},{label:"recommendation",permalink:"/blog/tags/recommendation"},{label:"machine learning",permalink:"/blog/tags/machine-learning"}],readingTime:15.05,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u4e94\uff09\uff1a\u5206\u5e03\u5f0f",date:"2020-05-25 11:21:49 +0800",tags:["index","distrubted","htdadif","recommendation","machine learning"]},prevItem:{title:"Maybe News Issue #2",permalink:"/blog/2020/06/02/maybe-news-issue-2"},nextItem:{title:"Maybe News Issue #1",permalink:"/blog/2020/05/21/maybe-news-issue-1"}},c={authorsImageUrls:[]},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/blog/tags/htdadif"},"\u7cfb\u5217\u6587\u7ae0"),"\uff0c\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u6765\u81ea\u6211\u8fc7\u53bb\u5728\u5c0f\u7ea2\u4e66\u53d1\u73b0 Feed \u56e2\u961f\u5de5\u4f5c\u671f\u95f4\u7684\u5b9e\u8df5\u548c\u7ecf\u9a8c\u3002\u5728\u4ecb\u7ecd\u7684\u8fc7\u7a0b\u4e2d\u6211\u4f1a\u5c3d\u91cf\u4e0d\u63ba\u6742\u8fc7\u591a\u7684\u4e1a\u52a1\u7ec6\u8282\uff0c\u800c\u4e13\u6ce8\u4e8e\u8fd9\u80cc\u540e\u6211\u4e2a\u4eba\u4e00\u4e9b\u6d45\u8584\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5e0c\u671b\u4f60\u5728\u9605\u8bfb\u5b8c\u8fd9\u4e9b\u6587\u7ae0\u4ee5\u540e\u80fd\u591f\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u62d3\u5c55\u5230\u4e0d\u540c\u7684\u573a\u666f\u3002")),(0,a.kt)("p",null,"\u524d\u9762\u51e0\u7bc7\u6587\u7ae0\u4ecb\u7ecd\u7684\u6280\u672f\u90fd\u662f\u5728\u5355\u673a\u4e0a\u5b9e\u73b0\u7684\uff0c\u4f46\u5982\u679c\u505a\u4e0d\u5230\u5206\u5e03\u5f0f\u90a3\u6574\u4e2a\u7cfb\u7edf\u7684\u6269\u5c55\u6027\u5c06\u4f1a\u53d7\u5230\u975e\u5e38\u5927\u7684\u9650\u5236\u3002\u672c\u7bc7\u6587\u7ae0\u5c06\u4f1a\u56f4\u7ed5\u5206\u5e03\u5f0f\u8fd9\u4e2a\u8bdd\u9898\u8ba8\u8bba\u3002"))}d.isMDXComponent=!0}}]);