"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[288],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,b=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9366:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Introduction to DL Platform",date:"2020-08-17 16:25:32 +0800",tags:["deep learning","k8s","kubeflow"]},l=void 0,i={permalink:"/blog/2020/08/17/introduction-to-dl-platform",source:"@site/blog/2020-08-17-introduction-to-dl-platform.md",title:"Introduction to DL Platform",description:"\u6700\u8fd1\u5728\u56e2\u961f\u5185\u90e8\u505a\u4e86\u4e00\u6b21\u5173\u4e8e\u6df1\u5ea6\u5b66\u4e60\u5e73\u53f0\u7684\u5206\u4eab\uff0c\u5185\u5bb9\u4e0a\u4e00\u65b9\u9762\u6765\u81ea\u8fc7\u53bb\u7684\u5de5\u4f5c\u7ecf\u9a8c\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u6709\u5f88\u591a\u8fc7\u53bb\u60f3\u505a\u4f46\u662f\u7531\u4e8e\u5404\u79cd\u539f\u56e0\u6ca1\u6765\u5f97\u53ca\u5b9e\u73b0\u7684\u60f3\u6cd5\u3002",date:"2020-08-17T16:25:32.000Z",formattedDate:"August 17, 2020",tags:[{label:"deep learning",permalink:"/blog/tags/deep-learning"},{label:"k8s",permalink:"/blog/tags/k-8-s"},{label:"kubeflow",permalink:"/blog/tags/kubeflow"}],readingTime:.43,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Introduction to DL Platform",date:"2020-08-17 16:25:32 +0800",tags:["deep learning","k8s","kubeflow"]},prevItem:{title:"Maybe News Issue #6",permalink:"/blog/2020/09/15/maybe-news-issue-6"},nextItem:{title:"Maybe News Issue #5",permalink:"/blog/2020/07/21/maybe-news-issue-5"}},c={authorsImageUrls:[]},p=[],u={toc:p},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6700\u8fd1\u5728\u56e2\u961f\u5185\u90e8\u505a\u4e86\u4e00\u6b21\u5173\u4e8e\u6df1\u5ea6\u5b66\u4e60\u5e73\u53f0\u7684\u5206\u4eab\uff0c\u5185\u5bb9\u4e0a\u4e00\u65b9\u9762\u6765\u81ea\u8fc7\u53bb\u7684\u5de5\u4f5c\u7ecf\u9a8c\uff0c\u53e6\u4e00\u65b9\u9762\u4e5f\u6709\u5f88\u591a\u8fc7\u53bb\u60f3\u505a\u4f46\u662f\u7531\u4e8e\u5404\u79cd\u539f\u56e0\u6ca1\u6765\u5f97\u53ca\u5b9e\u73b0\u7684\u60f3\u6cd5\u3002"))}f.isMDXComponent=!0}}]);