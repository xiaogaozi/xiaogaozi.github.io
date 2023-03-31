"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7063],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,b=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3447:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"A Little Throught About Microservices",date:"2015-03-22 23:25:05 +0800",tags:["microservices","soa"]},i=void 0,c={permalink:"/blog/2015/03/22/a-little-throught-about-microservices",source:"@site/blog/2015-03-22-a-little-throught-about-microservices.md",title:"A Little Throught About Microservices",description:"\u77e5\u4e4e\u5728 4 \u5e74\u524d\u5df2\u7ecf\u5f00\u59cb\u5c1d\u8bd5\u670d\u52a1\u5316\uff0c\u81f3\u4eca\u4e5f\u7ecf\u5386\u4e86\u597d\u51e0\u4e2a\u67b6\u6784\u7684\u53d8\u8fc1\u6f14\u5316\u3002\u6211\u5927\u7ea6\u662f 2013 \u5e74\u5f00\u59cb\u5728\u77e5\u4e4e\u8d1f\u8d23\u670d\u52a1\u5316\u7684\u5de5\u4f5c\uff0c\u5bf9\u670d\u52a1\u5316\u7684\u7406\u89e3\u4e5f\u4ece\u6700\u521d\u7684\u6a21\u7cca\u9010\u6e10\u53d8\u5f97\u6e05\u6670\uff0c\u524d\u6bb5\u65f6\u95f4\u770b\u4e86\u4e00\u7bc7\u53eb\u505a Microservices - Not A Free Lunch! \u7684\u6587\u7ae0\uff0c\u4e5f\u60f3\u8d81\u7740\u8fd9\u4e2a\u673a\u4f1a\u68b3\u7406\u603b\u7ed3\u76ee\u524d\u4e3a\u6b62\u6211\u7684\u4e00\u4e9b\u611f\u609f\u548c\u60f3\u6cd5\u3002",date:"2015-03-22T23:25:05.000Z",formattedDate:"March 22, 2015",tags:[{label:"microservices",permalink:"/blog/tags/microservices"},{label:"soa",permalink:"/blog/tags/soa"}],readingTime:21.84,hasTruncateMarker:!0,authors:[],frontMatter:{title:"A Little Throught About Microservices",date:"2015-03-22 23:25:05 +0800",tags:["microservices","soa"]},prevItem:{title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u4e00\uff09\uff1a\u6982\u89c8",permalink:"/blog/2020/04/21/how-to-design-a-distributed-index-framework-part-1"},nextItem:{title:"Hadoop Best Practices: Scheduling in YARN",permalink:"/blog/2014/12/27/hadoop-best-practices-scheduling-in-yarn"}},l={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u77e5\u4e4e\u5728 4 \u5e74\u524d\u5df2\u7ecf\u5f00\u59cb\u5c1d\u8bd5\u670d\u52a1\u5316\uff0c\u81f3\u4eca\u4e5f\u7ecf\u5386\u4e86\u597d\u51e0\u4e2a\u67b6\u6784\u7684\u53d8\u8fc1\u6f14\u5316\u3002\u6211\u5927\u7ea6\u662f 2013 \u5e74\u5f00\u59cb\u5728\u77e5\u4e4e\u8d1f\u8d23\u670d\u52a1\u5316\u7684\u5de5\u4f5c\uff0c\u5bf9\u670d\u52a1\u5316\u7684\u7406\u89e3\u4e5f\u4ece\u6700\u521d\u7684\u6a21\u7cca\u9010\u6e10\u53d8\u5f97\u6e05\u6670\uff0c\u524d\u6bb5\u65f6\u95f4\u770b\u4e86\u4e00\u7bc7\u53eb\u505a ","[Microservices - Not A Free Lunch!][]"," \u7684\u6587\u7ae0\uff0c\u4e5f\u60f3\u8d81\u7740\u8fd9\u4e2a\u673a\u4f1a\u68b3\u7406\u603b\u7ed3\u76ee\u524d\u4e3a\u6b62\u6211\u7684\u4e00\u4e9b\u611f\u609f\u548c\u60f3\u6cd5\u3002"))}m.isMDXComponent=!0}}]);