"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[420],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):f(f({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return a?r.createElement(k,f(f({ref:t},s),{},{components:a})):r.createElement(k,f({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,f=new Array(o);f[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,f[1]=i;for(var p=2;p<o;p++)f[p]=a[p];return r.createElement.apply(null,f)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>f,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u4e00\uff09\uff1a\u6982\u89c8",date:"2020-04-21 17:08:24 +0800",tags:["index","distrubted","htdadif","recommendation","machine learning"]},f=void 0,i={permalink:"/blog/2020/04/21/how-to-design-a-distributed-index-framework-part-1",source:"@site/blog/2020-04-21-how-to-design-a-distributed-index-framework-part-1.md",title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u4e00\uff09\uff1a\u6982\u89c8",description:"\u8fd9\u662f\u4e00\u4e2a\u7cfb\u5217\u6587\u7ae0\uff0c\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u6765\u81ea\u6211\u8fc7\u53bb\u5728\u5c0f\u7ea2\u4e66\u53d1\u73b0 Feed \u56e2\u961f\u5de5\u4f5c\u671f\u95f4\u7684\u5b9e\u8df5\u548c\u7ecf\u9a8c\u3002\u5728\u4ecb\u7ecd\u7684\u8fc7\u7a0b\u4e2d\u6211\u4f1a\u5c3d\u91cf\u4e0d\u63ba\u6742\u8fc7\u591a\u7684\u4e1a\u52a1\u7ec6\u8282\uff0c\u800c\u4e13\u6ce8\u4e8e\u8fd9\u80cc\u540e\u6211\u4e2a\u4eba\u4e00\u4e9b\u6d45\u8584\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5e0c\u671b\u4f60\u5728\u9605\u8bfb\u5b8c\u8fd9\u4e9b\u6587\u7ae0\u4ee5\u540e\u80fd\u591f\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u62d3\u5c55\u5230\u4e0d\u540c\u7684\u573a\u666f\u3002",date:"2020-04-21T17:08:24.000Z",formattedDate:"April 21, 2020",tags:[{label:"index",permalink:"/blog/tags/index"},{label:"distrubted",permalink:"/blog/tags/distrubted"},{label:"htdadif",permalink:"/blog/tags/htdadif"},{label:"recommendation",permalink:"/blog/tags/recommendation"},{label:"machine learning",permalink:"/blog/tags/machine-learning"}],readingTime:7.75,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u4e00\uff09\uff1a\u6982\u89c8",date:"2020-04-21 17:08:24 +0800",tags:["index","distrubted","htdadif","recommendation","machine learning"]},prevItem:{title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u4e8c\uff09\uff1aSchema\u3001API \u53ca\u5012\u6392\u7d22\u5f15",permalink:"/blog/2020/04/22/how-to-design-a-distributed-index-framework-part-2"},nextItem:{title:"A Little Throught About Microservices",permalink:"/blog/2015/03/22/a-little-throught-about-microservices"}},l={authorsImageUrls:[]},p=[],s={toc:p},m="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u8fd9\u662f\u4e00\u4e2a",(0,n.kt)("a",{parentName:"p",href:"/blog/tags/htdadif"},"\u7cfb\u5217\u6587\u7ae0"),"\uff0c\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u6765\u81ea\u6211\u8fc7\u53bb\u5728\u5c0f\u7ea2\u4e66\u53d1\u73b0 Feed \u56e2\u961f\u5de5\u4f5c\u671f\u95f4\u7684\u5b9e\u8df5\u548c\u7ecf\u9a8c\u3002\u5728\u4ecb\u7ecd\u7684\u8fc7\u7a0b\u4e2d\u6211\u4f1a\u5c3d\u91cf\u4e0d\u63ba\u6742\u8fc7\u591a\u7684\u4e1a\u52a1\u7ec6\u8282",(0,n.kt)("sup",{parentName:"p",id:"fnref-1-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1-38e799",className:"footnote-ref"},"1")),"\uff0c\u800c\u4e13\u6ce8\u4e8e\u8fd9\u80cc\u540e\u6211\u4e2a\u4eba\u4e00\u4e9b\u6d45\u8584\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5e0c\u671b\u4f60\u5728\u9605\u8bfb\u5b8c\u8fd9\u4e9b\u6587\u7ae0\u4ee5\u540e\u80fd\u591f\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u62d3\u5c55\u5230\u4e0d\u540c\u7684\u573a\u666f\u3002")),(0,n.kt)("p",null,"\u5728\u4ecb\u7ecd\u4ec0\u4e48\u662f\u7d22\u5f15\u6846\u67b6\u4e4b\u524d\u5148\u4e86\u89e3\u4e00\u4e0b\u6211\u4eec\u5f53\u65f6\u9762\u4e34\u7684\u4e1a\u52a1\u573a\u666f",(0,n.kt)("sup",{parentName:"p",id:"fnref-2-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2-38e799",className:"footnote-ref"},"2")),"\uff0c\u4e1a\u754c\u73b0\u5728\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Activity_stream"},"feed \u6d41"),"\u4ea7\u54c1\u5df2\u7ecf\u9010\u6b65\u4ece\u975e\u4e2a\u6027\u5316\u5168\u9762\u8fc7\u6e21\u5230\u4e2a\u6027\u5316\uff0c\u6240\u8c13\u7684\u4e2a\u6027\u5316 feed \u5176\u5b9e\u5c31\u662f",(0,n.kt)("strong",{parentName:"p"},"\u57fa\u4e8e\u673a\u5668\u5b66\u4e60\u7684\u63a8\u8350\u7cfb\u7edf"),"\u3002"),(0,n.kt)("p",null,"\u5148\u8bb2\u8bb2\u4ec0\u4e48\u662f\u63a8\u8350\u7cfb\u7edf\uff0c\u7528\u4e00\u4e2a\u8bcd\u6982\u62ec\u5c31\u662f\u300c\u6295\u5176\u6240\u597d\u300d\u3002\u5f53\u4f60\u9047\u5230\u4e00\u4e2a\u8ddf\u4f60\u5fd7\u8da3\u76f8\u6295\u7684\u4eba\u65f6\uff0c\u90a3\u8fd9\u4e2a\u4eba\u611f\u5174\u8da3\u7684\u4e1c\u897f\u5f88\u6709\u53ef\u80fd\u4e5f\u662f\u4f60\u611f\u5174\u8da3\u7684\uff0c\u8fd9\u662f\u300c\u57fa\u4e8e\u4eba\u300d\u7684\u7ef4\u5ea6\u8fdb\u884c\u63a8\u8350\uff0c\u5fae\u4fe1\u7684\u300c\u670b\u53cb\u5708\u300d\u5c31\u662f\u8fd9\u4e48\u4e00\u4e2a\u7b80\u5355\u7684\u601d\u8def",(0,n.kt)("sup",{parentName:"p",id:"fnref-3-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-3-38e799",className:"footnote-ref"},"3")),"\u3002\u4e5f\u6709\u53ef\u80fd\u4e00\u4e2a\u4eba\u4ed6\u4ece\u6765\u6ca1\u89c1\u8fc7\u4f60\uff0c\u4f60\u4eec\u4e5f\u4e0d\u4e92\u76f8\u8ba4\u8bc6\uff0c\u4f46\u662f\u5982\u679c\u4ed6\u80fd\u591f\u77e5\u9053\u4f60\u8fc7\u53bb\u770b\u8fc7\u3001\u559c\u6b22\u8fc7\u7684\u4e1c\u897f\uff0c\u90a3\u4ed6\u4e5f\u5f88\u6709\u53ef\u80fd\u53ef\u4ee5\u63a8\u65ad\u51fa\u4f60\u672a\u6765\u611f\u5174\u8da3\u7684\u4e1c\u897f\uff0c\u8fd9\u662f\u300c\u57fa\u4e8e\u5386\u53f2\u884c\u4e3a\u300d\u7684\u7ef4\u5ea6\u8fdb\u884c\u63a8\u8350\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5236\u5b9a\u4e00\u4e9b\u4eba\u5de5\u7684\u89c4\u5219\u6765\u5b9e\u73b0\u63a8\u8350\uff0c\u4f46\u662f\u7528\u6237\u7684\u559c\u597d\u662f\u5343\u5947\u767e\u602a\u7684",(0,n.kt)("sup",{parentName:"p",id:"fnref-4-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-4-38e799",className:"footnote-ref"},"4")),"\uff0c\u6709\u5927\u91cf\u957f\u5c3e\u7684\u9700\u6c42\u662f\u4eba\u5de5\u89c4\u5219\u65e0\u6cd5\u8986\u76d6\u7684",(0,n.kt)("sup",{parentName:"p",id:"fnref-5-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-5-38e799",className:"footnote-ref"},"5")),"\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u8ba9\u8ba1\u7b97\u673a\u5b66\u4e60\u5982\u4f55\u5236\u5b9a\u8fd9\u4e9b\u89c4\u5219\uff0c\u8fd9\u662f\u5bf9\u300c\u673a\u5668\u5b66\u4e60\u300d\u8fd9\u4e2a\u6982\u5ff5\u975e\u5e38\u6d45\u663e\u7684\u89e3\u91ca\u3002\u4e00\u4e2a\u5b8c\u6574\u7684\u673a\u5668\u5b66\u4e60\u6d41\u7a0b\u7b80\u5355\u6982\u62ec\u5305\u542b\u300c\u79bb\u7ebf\u300d\u548c\u300c\u5728\u7ebf\u300d\u4e24\u90e8\u5206\uff0c\u79bb\u7ebf\u90e8\u5206\u662f\u901a\u8fc7\u5927\u91cf\u7684\u7528\u6237\u6570\u636e\u6765\u8ba9\u8ba1\u7b97\u673a\u627e\u5bfb\u5176\u4e2d\u7684\u89c4\u5f8b\u548c\u5171\u6027\uff0c\u6700\u7ec8\u4ea7\u51fa\u300c\u6a21\u578b\u300d\uff1b\u5728\u7ebf\u90e8\u5206\u662f\u901a\u8fc7\u8f93\u5165\u5f53\u524d\u7528\u6237\u7684\u6570\u636e\u7ed9\u6a21\u578b\uff0c\u8ba9\u6a21\u578b\u8ba1\u7b97\u51fa\u4e00\u4e2a\u9884\u6d4b\u503c\uff0c\u8fd9\u4e2a\u9884\u6d4b\u503c\u7528\u6765\u8861\u91cf\u6211\u4eec\u60f3\u8981\u63a8\u8350\u7684\u5185\u5bb9\u662f\u5426\u7b26\u5408\u8fd9\u4e2a\u7528\u6237\u7684\u5174\u8da3\u3002\u8fd9\u4e2a\u7cfb\u5217\u7684\u6587\u7ae0\u5c06\u4f1a\u4e3b\u8981\u56f4\u7ed5\u5728\u7ebf\u90e8\u5206\uff0c\u79bb\u7ebf\u90e8\u5206\u5982\u679c\u6709\u673a\u4f1a\u4f1a\u5728\u4ee5\u540e\u7684\u6587\u7ae0\u4e2d\u4ecb\u7ecd\u3002"),(0,n.kt)("p",null,"\u524d\u9762\u63d0\u5230\u5728\u7ebf\u90e8\u5206\u7684\u6838\u5fc3\u903b\u8f91\u662f\u6a21\u578b\u8ba1\u7b97",(0,n.kt)("sup",{parentName:"p",id:"fnref-6-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-6-38e799",className:"footnote-ref"},"6")),"\uff0c\u4f46\u5728\u8ba1\u7b97\u4e4b\u524d\u8fd8\u6709\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u5de5\u4f5c\u662f\u7b5b\u9009\u5019\u9009\u96c6\uff0c\u901a\u5e38\u53eb\u505a\u300c\u53ec\u56de\uff08recall\uff09\u300d\u3002\u6240\u8c13\u53ec\u56de\u5c31\u662f\u4ece\u4e00\u4e2a\u5f88\u5927\u7684\u96c6\u5408\u4e2d\u901a\u8fc7\u4e00\u5b9a\u7684\u6761\u4ef6\u9009\u53d6\u4e00\u4e2a\u5b50\u96c6\uff0c\u4e3a\u4ec0\u4e48\u8981\u6709\u53ec\u56de\u8fd9\u4e00\u6b65\u5462\uff1f\u672c\u8d28\u4e0a\u662f\u56e0\u4e3a\u6a21\u578b\u8ba1\u7b97\u662f\u4e00\u4e2a\u975e\u5e38\u8017\u8d39\u65f6\u95f4\u53ca\u8d44\u6e90\u7684\u8fc7\u7a0b\uff0c\u5982\u679c\u6bcf\u6b21\u7528\u6237\u8bf7\u6c42\u90fd\u5bf9\u6574\u4e2a\u96c6\u5408\u4e2d\u7684\u6761\u76ee\u8fdb\u884c\u8ba1\u7b97\uff0c\u4e0d\u4ec5\u6d6a\u8d39\u8d44\u6e90\uff0c\u6240\u9700\u7684\u65f6\u95f4\u5bf9\u4e8e\u7528\u6237\u6765\u8bf4\u4e5f\u662f\u65e0\u6cd5\u63a5\u53d7\u7684",(0,n.kt)("sup",{parentName:"p",id:"fnref-7-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-7-38e799",className:"footnote-ref"},"7")),"\u3002\u5927\u90e8\u5206\u60c5\u51b5",(0,n.kt)("sup",{parentName:"p",id:"fnref-8-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-8-38e799",className:"footnote-ref"},"8")),"\u4e0b\u6211\u4eec\u5bf9\u4e8e\u63a8\u8350\u7cfb\u7edf\u4e00\u6b21\u8bf7\u6c42\u7684\u65f6\u95f4\u8981\u6c42\u662f\u63a7\u5236\u5728 100~200ms \u5de6\u53f3\uff0c\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\u5bf9\u4e1a\u52a1\u6307\u6807\u4e00\u5b9a\u4f1a\u6709\u8d1f\u9762\u5f71\u54cd\u3002\u56e0\u6b64\u6709\u9488\u5bf9\u6027\u5730\u8fdb\u884c\u53ec\u56de\u5c31\u975e\u5e38\u5173\u952e\u4e86\uff0c\u53ec\u56de\u9700\u8981\u5c3d\u91cf\u786e\u4fdd\u7b5b\u9009\u51fa\u6765\u7684\u5019\u9009\u96c6\u662f\u7b26\u5408\u5f53\u524d\u7528\u6237\u5174\u8da3\u7684\uff0c\u4f46\u540c\u65f6\u8017\u65f6\u53c8\u662f\u975e\u5e38\u77ed\u7684",(0,n.kt)("sup",{parentName:"p",id:"fnref-9-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-9-38e799",className:"footnote-ref"},"9")),"\u3002\u603b\u7ed3\u4e00\u4e0b\u4e00\u6b21\u63a8\u8350\u8bf7\u6c42\u7684\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"recommendation system architecture",src:a(7327).Z,width:"1130",height:"604"})),(0,n.kt)("p",null,"\u5b9e\u73b0\u5feb\u901f\u53ec\u56de\u7684\u5173\u952e\u662f\u300c\u7d22\u5f15\uff08index\uff09\u300d\uff0c\u6b63\u5982\u5927\u90e8\u5206\u6570\u636e\u5e93\u7cfb\u7edf\u4e00\u6837\uff0c\u7d22\u5f15\u662f\u4e3a\u4e86\u5b9e\u73b0\u5feb\u901f\u67e5\u627e\u7684\u91cd\u8981\u7ec4\u4ef6\u3002\u5728\u63a8\u8350\u7cfb\u7edf\u4e2d\u4e3b\u8981\u6709\u4e24\u7c7b\u7d22\u5f15\uff1a\u6b63\u6392\u7d22\u5f15\uff08forward index\uff09\u548c\u5012\u6392\u7d22\u5f15\uff08inverted index\uff09",(0,n.kt)("sup",{parentName:"p",id:"fnref-10-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-10-38e799",className:"footnote-ref"},"10")),"\u3002\u6b63\u6392\u7d22\u5f15\u901a\u5e38\u662f\u7528\u6765\u901a\u8fc7\u4e00\u4e2a\u4e3b\u952e\uff08primary key\uff09\u67e5\u8be2\u4e00\u4e2a\u6761\u76ee\uff0c\u662f\u300c\u4e00\u5bf9\u4e00\u7684\u6620\u5c04\u300d\uff1b\u5012\u6392\u7d22\u5f15\u662f\u7528\u6765\u901a\u8fc7\u8ddf\u6761\u76ee\u5173\u8054\u7684\u67d0\u4e9b\u5c5e\u6027\u67e5\u8be2\u591a\u4e2a\u6761\u76ee\uff0c\u662f\u300c\u4e00\u5bf9\u591a\u7684\u6620\u5c04\u300d\u3002\u4e3e\u4e2a\u5b9e\u9645\u7684\u4f8b\u5b50\uff0c\u5c0f\u7ea2\u4e66\u4e0a\u7528\u6237\u53d1\u5e03\u7684\u5185\u5bb9\u53eb\u505a\u300c\u7b14\u8bb0\u300d\uff0c\u6bcf\u4e00\u7bc7\u7b14\u8bb0\u90fd\u4f1a\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684 ID\uff0c\u8fd9\u4e2a ID \u5c31\u662f\u8fd9\u7bc7\u7b14\u8bb0\u7684\u4e3b\u952e\uff0c\u6b63\u6392\u7d22\u5f15\u5373\u662f\u4e00\u4e2a\u4ece\u7b14\u8bb0 ID \u5230\u7b14\u8bb0\u7684\u6620\u5c04\u3002\u800c\u6bcf\u7bc7\u7b14\u8bb0\u90fd\u4f1a\u6709\u4e00\u4e9b\u540c\u7b14\u8bb0\u672c\u8eab\u76f8\u5173\u7684\u5c5e\u6027\uff0c\u6bd4\u5982\u5206\u7c7b\uff08category\uff09\uff0c\u4e00\u4e9b\u5e38\u89c1\u7684\u5206\u7c7b\u6709\uff1a\u65c5\u884c\u3001\u7f8e\u5986\u3001\u6444\u5f71\u3001\u7f8e\u98df\u7b49\u3002\u5012\u6392\u7d22\u5f15\u5373\u662f\u4e00\u4e2a\u4ece\u591a\u4e2a\u5c5e\u6027\u5230\u591a\u7bc7\u7b14\u8bb0\u7684\u6620\u5c04\uff0c\u5982\u300c\u65c5\u884c\u300d\u5206\u7c7b\u53ef\u4ee5\u6620\u5c04\u5230\u6240\u6709\u5c5e\u4e8e\u8fd9\u4e2a\u7c7b\u522b\u7684\u7b14\u8bb0\u5217\u8868\u3002\u5bf9\u4e8e\u53ec\u56de\u6765\u8bf4\u4e3b\u8981\u4f9d\u8d56\u5012\u6392\u7d22\u5f15\uff0c\u800c\u6b63\u6392\u7d22\u5f15\u5c06\u4f1a\u5728\u6a21\u578b\u8ba1\u7b97\u7684\u524d\u7f6e\u6b65\u9aa4\u7279\u5f81\u63d0\u53d6\u4e2d\u7528\u5230",(0,n.kt)("sup",{parentName:"p",id:"fnref-11-38e799"},(0,n.kt)("a",{parentName:"sup",href:"#fn-11-38e799",className:"footnote-ref"},"11")),"\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"recommendation system index",src:a(7141).Z,width:"1948",height:"626"})),(0,n.kt)("p",null,"\u8bb2\u5230\u8fd9\u91cc\u4e5f\u57fa\u672c\u4e0a\u628a\u7d22\u5f15\u6846\u67b6\u9700\u8981\u5b9e\u73b0\u7684\u529f\u80fd\u4ecb\u7ecd\u5f97\u5dee\u4e0d\u591a\u4e86\uff0c\u5176\u5b9e\u9700\u6c42\u5f88\u7b80\u5355\uff1a\u7ed9\u5b9a\u4e00\u4e2a\u96c6\u5408\u7136\u540e\u5728\u8fd9\u4e2a\u96c6\u5408\u4e0a\u521b\u5efa\u6b63\u6392\u548c\u5012\u6392\u7d22\u5f15\uff0c\u5e76\u66b4\u9732\u76f8\u5e94\u7684\u67e5\u8be2\u63a5\u53e3\u3002\u4e0b\u4e00\u7bc7\u5c06\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5b9a\u4e49\u7d22\u5f15\u3001\u6846\u67b6\u7684 API \u5e94\u8be5\u6709\u54ea\u4e9b\u4ee5\u53ca\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684\u5012\u6392\u7d22\u5f15\u3002"),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1-38e799"},"\u4f46\u5176\u5b9e\u80fd\u771f\u6b63\u5e94\u7528\u5230\u4e1a\u52a1\u4e2d\u624d\u662f\u68c0\u9a8c\u8bbe\u8ba1\u7684\u552f\u4e00\u6807\u51c6",(0,n.kt)("a",{parentName:"li",href:"#fnref-1-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2-38e799"},(0,n.kt)("del",{parentName:"li"},"\u521a\u8bf4\u5b8c\u4e0d\u804a\u4e1a\u52a1\u5c31\u6253\u8138"),(0,n.kt)("a",{parentName:"li",href:"#fnref-2-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-3-38e799"},"\u5f53\u7136\u524d\u63d0\u662f\u4f60\u7684\u597d\u53cb\u6570\u5f97\u50cf",(0,n.kt)("a",{parentName:"li",href:"https://baike.baidu.com/item/%E5%BD%AD%E7%A3%8A/6238051"},"\u5f6d\u78ca"),"\u4e00\u6837\u5c11",(0,n.kt)("a",{parentName:"li",href:"#fnref-3-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-4-38e799"},"\u8fd9\u51e0\u5e74\u6709\u4e00\u4e2a\u5f88\u6076\u5fc3\u7684\u8bcd\u53eb\u300c\u5343\u4eba\u5343\u9762\u300d\u4e5f\u662f\u540c\u6837\u7684\u610f\u601d",(0,n.kt)("a",{parentName:"li",href:"#fnref-4-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-5-38e799"},"\u6ee1\u8db3\u597d\u957f\u5c3e\u9700\u6c42\u4e5f\u662f\u63a8\u8350\u7cfb\u7edf\u9762\u4e34\u7684\u4e00\u5927\u6311\u6218",(0,n.kt)("a",{parentName:"li",href:"#fnref-5-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-6-38e799"},"\u4f60\u53ef\u80fd\u770b\u5230\u7684\u8868\u793a\u6a21\u578b\u8ba1\u7b97\u7684\u672f\u8bed\u6709\uff1a\u63a8\u7406\uff08inference\uff09\u3001\u9884\u6d4b\uff08prediction\uff09",(0,n.kt)("a",{parentName:"li",href:"#fnref-6-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-7-38e799"},"\u60f3\u8c61\u4e00\u4e0b\u4f60\u6253\u5f00\u67d0\u4e2a app \u7684\u9996\u9875\u9700\u8981\u7b49\u5f85\u6570\u5206\u949f\u624d\u80fd\u663e\u793a\u51fa\u6765",(0,n.kt)("a",{parentName:"li",href:"#fnref-7-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-8-38e799"},"\u5927\u90e8\u5206\u60c5\u51b5 = P95/P99",(0,n.kt)("a",{parentName:"li",href:"#fnref-8-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-9-38e799"},"\u53ec\u56de\u7684\u8017\u65f6\u901a\u5e38\u6bd4\u6a21\u578b\u8ba1\u7b97\u5c0f\u4e00\u5230\u4e24\u4e2a\u6570\u91cf\u7ea7",(0,n.kt)("a",{parentName:"li",href:"#fnref-9-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-10-38e799"},"\u5982\u679c\u4f60\u63a5\u89e6\u8fc7\u641c\u7d22\u5f15\u64ce\uff0c\u5bf9\u4e8e\u8fd9\u4e24\u7c7b\u7d22\u5f15\u4e5f\u4e0d\u4f1a\u611f\u5230\u964c\u751f\u3002",(0,n.kt)("a",{parentName:"li",href:"#fnref-10-38e799",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-11-38e799"},"\u7279\u5f81\u63d0\u53d6\uff08feature extraction\uff09\u662f\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6b65\u9aa4\uff0c\u8fd9\u91cc\u6682\u65f6\u4e0d\u4f1a\u8fc7\u591a\u4ecb\u7ecd\u3002",(0,n.kt)("a",{parentName:"li",href:"#fnref-11-38e799",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0},7141:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rec_sys_index-49cc8171f3ecff93a0eb7645e811fa1f.png"},7327:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/recommendation_system_arch-77fa8d7337c72870ca7ad85a460e6a4e.png"}}]);