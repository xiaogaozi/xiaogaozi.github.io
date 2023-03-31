"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,y=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"\u6d45\u6790\u4e09\u6b3e\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u67b6\u6784\u8bbe\u8ba1",date:"2023-03-11 10:00:00 +0800",tags:["file system","architecture"]},i=void 0,c={permalink:"/blog/2023/03/11/large-scale-distributed-file-system-comparison",source:"@site/blog/2023-03-11-large-scale-distributed-file-system-comparison.md",title:"\u6d45\u6790\u4e09\u6b3e\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u67b6\u6784\u8bbe\u8ba1",description:"\u8fd9\u7bc7\u6587\u7ae0\u6700\u521d\u53d1\u8868\u5728 JuiceFS \u5b98\u65b9\u535a\u5ba2\uff0c\u70b9\u51fb\u8fd9\u91cc\u67e5\u770b\u539f\u6587\u3002",date:"2023-03-11T10:00:00.000Z",formattedDate:"March 11, 2023",tags:[{label:"file system",permalink:"/blog/tags/file-system"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:30.03,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u6d45\u6790\u4e09\u6b3e\u5927\u89c4\u6a21\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u67b6\u6784\u8bbe\u8ba1",date:"2023-03-11 10:00:00 +0800",tags:["file system","architecture"]},nextItem:{title:"\u63a8\u8350\u7cfb\u7edf\uff1a\u4ece\u5165\u95e8\u5230\u653e\u5f03",permalink:"/blog/2022/08/14/introduction-to-recommendation-system"}},l={authorsImageUrls:[]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u7bc7\u6587\u7ae0\u6700\u521d\u53d1\u8868\u5728 JuiceFS \u5b98\u65b9\u535a\u5ba2\uff0c\u70b9\u51fb",(0,a.kt)("a",{parentName:"p",href:"https://juicefs.com/zh-cn/blog/engineering/large-scale-distributed-filesystem-comparison"},"\u8fd9\u91cc"),"\u67e5\u770b\u539f\u6587\u3002")))}m.isMDXComponent=!0}}]);