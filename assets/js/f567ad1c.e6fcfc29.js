"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7174],{7980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var r=t(3378),a=t(4848),s=t(8453);const i={title:"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u56db\uff09\uff1a\u7d22\u5f15\u66f4\u65b0",date:"2020-05-13 14:55:43 +0800",tags:["index","distrubted","htdadif","recommendation","machine learning"]},o=void 0,l={authorsImageUrls:[]},d=[{value:"\u5168\u91cf\u7d22\u5f15",id:"\u5168\u91cf\u7d22\u5f15",level:2},{value:"\u589e\u91cf\u7d22\u5f15",id:"\u589e\u91cf\u7d22\u5f15",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u662f\u4e00\u4e2a",(0,a.jsx)(n.a,{href:"/blog/tags/htdadif",children:"\u7cfb\u5217\u6587\u7ae0"}),"\uff0c\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u6765\u81ea\u6211\u8fc7\u53bb\u5728\u5c0f\u7ea2\u4e66\u53d1\u73b0 Feed \u56e2\u961f\u5de5\u4f5c\u671f\u95f4\u7684\u5b9e\u8df5\u548c\u7ecf\u9a8c\u3002\u5728\u4ecb\u7ecd\u7684\u8fc7\u7a0b\u4e2d\u6211\u4f1a\u5c3d\u91cf\u4e0d\u63ba\u6742\u8fc7\u591a\u7684\u4e1a\u52a1\u7ec6\u8282\uff0c\u800c\u4e13\u6ce8\u4e8e\u8fd9\u80cc\u540e\u6211\u4e2a\u4eba\u4e00\u4e9b\u6d45\u8584\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5e0c\u671b\u4f60\u5728\u9605\u8bfb\u5b8c\u8fd9\u4e9b\u6587\u7ae0\u4ee5\u540e\u80fd\u591f\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u62d3\u5c55\u5230\u4e0d\u540c\u7684\u573a\u666f\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/blog/2020/04/24/how-to-design-a-distributed-index-framework-part-3",children:"\u4e0a\u4e00\u7bc7\u6587\u7ae0"}),"\u4ecb\u7ecd\u4e86\u5982\u4f55\u5b9e\u73b0\u6b63\u6392\u7d22\u5f15\u548c\u4e8c\u7ea7\u7d22\u5f15\uff0c\u4f46\u8981\u521b\u5efa\u7d22\u5f15\u4e5f\u5f97\u5148\u6709\u6570\u636e\u624d\u884c\uff0c\u672c\u7bc7\u5c06\u4f1a\u4ecb\u7ecd\u6570\u636e\u662f\u5982\u4f55\u66f4\u65b0\u7684\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5168\u91cf\u7d22\u5f15",children:"\u5168\u91cf\u7d22\u5f15"}),"\n",(0,a.jsxs)(n.p,{children:["\u6240\u8c13\u300c\u5168\u91cf\u7d22\u5f15\uff08full index\uff09\u300d\u5c31\u662f\u6307\u9700\u8981\u7d22\u5f15\u7684\u6570\u636e\u7684\u5168\u96c6\uff0c\u901a\u5e38\u5168\u91cf\u7d22\u5f15\u7684\u6570\u636e\u91cf\u90fd\u662f\u4e00\u4e2a\u6bd4\u8f83\u5927\u7684\u91cf\u7ea7",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-1-081a7b",id:"user-content-fnref-1-081a7b","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"\uff0c\u79bb\u7ebf\u6784\u5efa\u4e00\u6b21\u5168\u91cf\u7d22\u5f15\u7684\u65f6\u95f4\u6210\u672c\u4e5f\u6bd4\u8f83\u9ad8\uff0c\u56e0\u6b64\u66f4\u65b0\u9891\u7387\u4e0d\u4f1a\u7279\u522b\u9891\u7e41",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-2-081a7b",id:"user-content-fnref-2-081a7b","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"\u3002\u5168\u91cf\u7d22\u5f15\u7684\u66f4\u65b0\u5f88\u7b80\u5355\uff0c\u4e00\u822c\u5c31\u662f\u8986\u76d6\u7ebf\u4e0a\u5df2\u7ecf\u5b58\u5728\u7684\u90a3\u4efd\u65e7\u7684\u5168\u91cf\u7d22\u5f15\uff0c\u5f53\u7136\u8fd9\u4e2a\u66f4\u65b0\u6d41\u7a0b\u4e0d\u4f1a\u662f\u76f4\u63a5\u66ff\u6362\uff0c\u800c\u662f\u5148\u628a\u65b0\u7684\u6570\u636e\u52a0\u8f7d\u597d\u518d\u8fdb\u884c\u66ff\u6362\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728\u66f4\u65b0\u7684\u8fc7\u7a0b\u4e2d\u9700\u8981\u4fdd\u8bc1\u5185\u5b58\u4e2d\u80fd\u591f\u540c\u65f6\u5b58\u653e\u4e24\u4efd\u6570\u636e\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5168\u91cf\u7d22\u5f15\u6709\u51e0\u4e2a\u6bd4\u8f83\u4e25\u91cd\u7684\u95ee\u9898\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u7d22\u5f15\u7684\u6570\u636e\u91cf\u51b3\u5b9a\u4e86\u5b83\u7684\u66f4\u65b0\u9891\u7387\u4e0d\u4f1a\u5f88\u5feb\uff0c\u800c\u4e14\u6709\u53d8\u5316\u7684\u6570\u636e\u5728\u8fd9\u4e2a\u5168\u96c6\u4e2d\u5fc5\u5b9a\u662f\u5c11\u6570\uff0c\u6bcf\u6b21\u90fd\u66f4\u65b0\u5168\u90e8\u6570\u636e\u6709\u70b9\u6d6a\u8d39\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u7d22\u5f15\u66f4\u65b0\u8fc7\u7a0b\u4e2d\u9700\u8981\u4e34\u65f6\u5b58\u50a8\u53cc\u4efd\u6570\u636e\uff0c\u4f1a\u6709\u5927\u91cf\u65b0\u5bf9\u8c61\u4ea7\u751f\uff0c\u5bf9 GC \u7684\u538b\u529b\u4e5f\u4f1a\u5f88\u5927\u3002\u5f88\u591a\u65f6\u5019\u6211\u4eec\u9009\u62e9\u4e0d\u9891\u7e41\u66f4\u65b0\u5168\u91cf\u7d22\u5f15\u4e5f\u662f\u8fd9\u4e2a\u539f\u56e0\uff0c\u8fd9\u5c31\u8fdb\u4e00\u6b65\u52a0\u5267\u4e86\u4e0a\u4e00\u4e2a\u95ee\u9898\u7684\u5f71\u54cd\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u89e3\u51b3\u601d\u8def\u5176\u5b9e\u4e5f\u5f88\u76f4\u63a5\uff0c\u65e2\u7136\u9700\u8981\u66f4\u65b0\u7684\u6570\u636e\u662f\u5c11\u6570\uff0c\u90a3\u6bcf\u6b21\u7d22\u5f15\u66f4\u65b0\u5c31\u53ea\u66f4\u65b0\u8fd9\u90e8\u5206\u6570\u636e\u597d\u4e86\uff0c\u8fd9\u4e5f\u5c31\u662f\u4e0b\u4e00\u7ae0\u8282\u8981\u7740\u91cd\u4ecb\u7ecd\u7684\u5185\u5bb9\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u589e\u91cf\u7d22\u5f15",children:"\u589e\u91cf\u7d22\u5f15"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0e\u300c\u5168\u91cf\u7d22\u5f15\u300d\u4e00\u8d77\u7ecf\u5e38\u88ab\u63d0\u53ca\u7684\u53e6\u4e00\u4e2a\u8bcd\u5c31\u662f\u300c\u589e\u91cf\u7d22\u5f15\uff08incremental index\uff09\u300d\uff0c\u987e\u540d\u601d\u4e49\u589e\u91cf\u7d22\u5f15\u662f\u53ea\u9488\u5bf9\u589e\u91cf\u6570\u636e\u6784\u5efa\u7684\u96c6\u5408\uff0c\u56e0\u6b64\u7d22\u5f15\u7684\u6570\u636e\u91cf\u4e5f\u4f1a\u5c0f\u975e\u5e38\u591a\uff0c\u81ea\u7136\u66f4\u65b0\u9891\u7387\u5c31\u53ef\u4ee5\u5f88\u5feb\u4e86\u3002\u6784\u5efa\u589e\u91cf\u7d22\u5f15\u5e76\u4e0d\u662f\u4e00\u4ef6\u7279\u522b\u590d\u6742\u7684\u4e8b\u60c5\uff0c\u53ea\u9700\u8981\u6709\u529e\u6cd5\u83b7\u53d6\u5230\u6700\u8fd1\u4e00\u6bb5\u65f6\u95f4\u6709\u53d8\u5316\u7684\u5185\u5bb9\u5c31\u884c",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-3-081a7b",id:"user-content-fnref-3-081a7b","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),"\u3002\u4f46\u662f\u6784\u5efa\u597d\u7684\u589e\u91cf\u7d22\u5f15\u8981\u5982\u4f55\u66f4\u65b0\u5230\u7ebf\u4e0a\u662f\u4e00\u4e2a\u503c\u5f97\u8ba4\u771f\u601d\u8003\u7684\u95ee\u9898\uff0c\u6709\u4e24\u79cd\u65b9\u6848\u53ef\u4ee5\u9009\u62e9\uff1a"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u76f4\u63a5\u4fee\u6539\u5168\u91cf\u6570\u636e\u7684\u5012\u6392\u7d22\u5f15\u548c\u6b63\u6392\u7d22\u5f15"}),"\n",(0,a.jsx)(n.li,{children:"\u5355\u72ec\u4e3a\u589e\u91cf\u6570\u636e\u521b\u5efa\u5012\u6392\u7d22\u5f15\u548c\u6b63\u6392\u7d22\u5f15"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u7b2c 1 \u79cd\u65b9\u6848\u5982\u679c\u662f\u65b0\u589e\u7684\u5185\u5bb9\u6bd4\u8f83\u7b80\u5355\uff0c\u5728\u5012\u6392\u7d22\u5f15\u548c\u6b63\u6392\u7d22\u5f15\u4e2d\u63d2\u5165\u65b0\u7684\u6761\u76ee\u5373\u53ef\u3002\u4f46\u5982\u679c\u662f\u65e7\u7684\u5185\u5bb9\u88ab\u66f4\u65b0\u6216\u8005\u5220\u9664\uff0c\u90a3\u5c31\u9700\u8981\u5728\u8fd9\u4e24\u79cd\u7d22\u5f15\u4e2d\u627e\u5230\u5bf9\u5e94\u7684\u6761\u76ee\u5e76\u5168\u90e8\u66f4\u65b0\u6216\u8005\u5220\u9664\u3002\u76f4\u63a5\u539f\u5730\u66f4\u65b0\u6216\u8005\u5220\u9664\u5bf9\u4e8e\u5012\u6392\u7d22\u5f15\u6765\u8bf4\u56e0\u4e3a\u9700\u8981\u626b\u63cf\u6574\u4e2a\u7d22\u5f15\u6761\u76ee\u5217\u8868\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4f1a\u968f\u7740\u5217\u8868\u957f\u5ea6\u4ee5\u53ca\u589e\u91cf\u66f4\u65b0\u7684\u6570\u636e\u91cf\u7ebf\u6027\u589e\u957f\uff1b\u5bf9\u4e8e\u6b63\u6392\u7d22\u5f15\u6765\u8bf4\u5806\u5916\u5185\u5b58\u4e0d\u53ef\u907f\u514d\u4f1a\u4ea7\u751f\u7a7a\u95f4\u788e\u7247\uff0c\u5fc5\u987b\u5b9a\u671f\u6e05\u7406\u788e\u7247\u4ee5\u514d\u9020\u6210\u7a7a\u95f4\u6d6a\u8d39\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u7b2c 2 \u79cd\u65b9\u6848\u521b\u5efa\u7d22\u5f15\u7684\u903b\u8f91\u8ddf\u5168\u91cf\u7d22\u5f15\u662f\u4e00\u6837\u7684\uff0c\u53ea\u4e0d\u8fc7\u662f\u9488\u5bf9\u589e\u91cf\u6570\u636e\u3002\u4f46\u662f\u6b64\u65f6\u76f8\u5f53\u4e8e\u5c31\u5b58\u5728\u4e86\u591a\u4e2a\u5012\u6392\u7d22\u5f15\u548c\u6b63\u6392\u7d22\u5f15\uff0c\u67e5\u8be2\u903b\u8f91\u5e94\u8be5\u600e\u6837\u5b9e\u73b0\u5462\uff1f\u7531\u4e8e\u6b63\u6392\u7d22\u5f15\u662f\u4e00\u4e00\u6620\u5c04\uff0c\u56e0\u6b64\u5982\u679c\u6709\u591a\u4e2a\u76f8\u540c primary key \u7684\u7d22\u5f15\uff0c\u90a3\u5728\u67e5\u8be2\u65f6\u9009\u62e9\u6700\u65b0\u7684\u90a3\u4e2a\u7d22\u5f15\u5373\u53ef\u3002\u67e5\u8be2\u5012\u6392\u7d22\u5f15\u7a0d\u5fae\u590d\u6742\u4e00\u70b9\uff0c\u540c\u4e00\u4e2a\u5012\u6392\u7d22\u5f15 key \u53ef\u80fd\u5728\u591a\u4e2a\u7d22\u5f15\u4e2d\u90fd\u5b58\u5728\uff0c\u67e5\u8be2\u65f6\u9700\u8981\u540c\u65f6\u4ece\u8fd9\u4e9b\u7d22\u5f15\u4e2d\u904d\u5386\uff0c\u6700\u7ec8\u9009\u53d6\u51fa top N \u7684\u6761\u76ee",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-4-081a7b",id:"user-content-fnref-4-081a7b","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),"\u3002\u904d\u5386\u65f6\u9664\u4e86\u7528\u6237\u63d0\u4f9b\u7684\u8fc7\u6ee4\u5668\u4ee5\u5916\uff0c\u8fd8\u9700\u8981\u8fc7\u6ee4\u90a3\u4e9b\u5df2\u7ecf\u88ab\u5220\u9664\u7684\u6761\u76ee\uff0c\u8fd9\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u5168\u5c40\u7684\u5df2\u5220\u9664\u6761\u76ee\u96c6\u5408\u6765\u5b9e\u73b0\u3002\u968f\u7740\u589e\u91cf\u7d22\u5f15\u6570\u91cf\u7684\u589e\u591a\uff0c\u4e0d\u540c\u7d22\u5f15\u95f4\u5197\u4f59\u7684\u6570\u636e\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u591a\uff0c\u6d6a\u8d39\u5b58\u50a8\u7a7a\u95f4\u7684\u540c\u65f6\u4e5f\u4f1a\u589e\u52a0\u67e5\u8be2\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u3002\u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e0d\u5b9a\u671f\u5408\u5e76\u8fd9\u4e9b\u7d22\u5f15\uff0c\u53bb\u9664\u90a3\u4e9b\u91cd\u590d\u6216\u8005\u88ab\u5220\u9664\u7684\u6761\u76ee\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6211\u4eec\u6700\u7ec8\u9009\u62e9\u4e86\u65b9\u6848 2\uff0c\u56e0\u4e3a\u6574\u4f53\u4e0a\u66f4\u503e\u5411\u4e8e\u628a\u5b58\u50a8\u7684\u6570\u636e\u7ed3\u6784\u8bbe\u8ba1\u6210 append-only \u7684\u6a21\u5f0f\uff0c\u7b80\u5316\u5e95\u5c42\u5b58\u50a8\u7684\u5b9e\u73b0",(0,a.jsx)(n.sup,{children:(0,a.jsx)(n.a,{href:"#user-content-fn-5-081a7b",id:"user-content-fnref-5-081a7b","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})}),"\u3002\u719f\u6089\u6570\u636e\u5e93\u7cfb\u7edf\u8bbe\u8ba1\u7684\u670b\u53cb\u53ef\u80fd\u5df2\u7ecf\u53d1\u73b0\u65b9\u6848 2 \u540c\u73b0\u5728\u6d41\u884c\u7684 ",(0,a.jsx)(n.a,{href:"https://github.com/google/leveldb",children:"LevelDB"}),"\u3001",(0,a.jsx)(n.a,{href:"https://rocksdb.org",children:"RocksDB"})," \u6709\u4e00\u4e9b\u76f8\u4f3c\u7684\u5730\u65b9\uff0c\u4e8b\u5b9e\u4e0a\u6211\u4eec\u5728\u8bbe\u8ba1\u65f6\u4e5f\u7684\u786e\u501f\u9274\u4e86\u5b83\u4eec\u7684\u90e8\u5206\u601d\u60f3\u3002\u8fd9\u4e24\u8005\u5e95\u5c42\u90fd\u662f ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Log-structured_merge-tree",children:"LSM tree"})," \u7684\u6570\u636e\u7ed3\u6784\uff0c\u7b80\u5355\u4ecb\u7ecd LSM tree \u5c31\u662f\u5c06\u6570\u636e\u5206\u4e3a\u591a\u4e2a level\uff0c\u6bcf\u4e2a level \u7684\u6570\u636e\u90fd\u662f\u53ea\u8bfb\u7684\u4e14\u53ef\u80fd\u5b58\u5728\u5197\u4f59\uff0c\u4e0d\u540c level \u4e4b\u95f4\u4f1a\u901a\u8fc7\u538b\u7f29\uff08compaction\uff09\u6765\u53bb\u6389\u8fd9\u4e9b\u5197\u4f59\u3002\u4e0b\u56fe\u662f\u589e\u91cf\u7d22\u5f15\u7684\u8bbe\u8ba1\u793a\u610f\u56fe\u3002"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"incremental index design",src:t(2542).A+"",width:"1192",height:"652"})}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u9650\u5b9a\u6700\u5927\u7684 level \u6570\uff08\u5373\u589e\u91cf\u7d22\u5f15\u6570\uff09\uff0c\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u9650\u5b9a\u503c\u5c31\u4f1a\u89e6\u53d1\u5408\u5e76\u3002\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u90fd\u4f1a\u662f\u589e\u91cf\u7d22\u5f15\u4e4b\u95f4\u8fdb\u884c\u5408\u5e76\uff0c\u4f46\u5982\u679c\u5408\u5e76\u4e4b\u540e\u7684\u5927\u5c0f\u5df2\u7ecf\u8d85\u8fc7\u5168\u91cf\u7d22\u5f15\u5927\u5c0f\u7684\u67d0\u4e2a\u6bd4\u4f8b\uff0c\u5c31\u4f1a\u89e6\u53d1 1 \u6b21\u540c\u5168\u91cf\u7d22\u5f15\u7684\u5408\u5e76\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6709\u4e86\u589e\u91cf\u7d22\u5f15\u4e4b\u540e\u7d22\u5f15\u7684\u66f4\u65b0\u9891\u7387\u6700\u5feb\u53ef\u4ee5\u63a7\u5236\u5728\u5206\u949f\u7ea7\uff0c\u76f8\u6bd4\u5168\u91cf\u7d22\u5f15\u52a8\u8f84\u5c0f\u65f6\u7ea7\u751a\u81f3\u5929\u7ea7\u7684\u9891\u7387\u5df2\u7ecf\u5feb\u4e86\u4e0d\u5c11\u3002\u7d22\u5f15\u66f4\u65b0\u66f4\u5feb\u4e5f\u610f\u5473\u7740\u5185\u5bb9\u53ef\u4ee5\u66f4\u5feb\u5730\u88ab\u7528\u6237\u6d88\u8d39\uff0c\u4fc3\u8fdb\u4e86\u6574\u4e2a\u793e\u533a\u7684\u4fe1\u606f\u6d41\u52a8\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4ee5\u4e0a\u5c31\u662f\u672c\u7bc7\u8981\u4ecb\u7ecd\u7684\u5168\u90e8\u5185\u5bb9\uff0c\u7b80\u5355\u56de\u987e\u4e00\u4e0b\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u5168\u91cf\u7d22\u5f15\u867d\u7136\u6784\u5efa\u6210\u672c\u5f88\u9ad8\u4f46\u4e5f\u662f\u4e0d\u53ef\u6216\u7f3a\u7684\uff0c\u5b83\u6709\u7740\u6700\u5168\u7684\u4e1a\u52a1\u6570\u636e\u3002"}),"\n",(0,a.jsx)(n.li,{children:"\u589e\u91cf\u7d22\u5f15\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u52a0\u5feb\u7d22\u5f15\u66f4\u65b0\u9891\u7387\uff0c\u8bbe\u8ba1\u4e0a\u501f\u9274\u4e86\u90e8\u5206 LSM tree \u7684\u601d\u60f3\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6ce8\u610f\u8fc7\u8fd9\u4e2a\u7cfb\u5217\u6587\u7ae0\u6807\u9898\u7684\u670b\u53cb\u53ef\u80fd\u5f88\u597d\u5947\u8bb2\u4e86\u8fd9\u4e48\u4e45\u4e3a\u5565\u611f\u89c9\u8ddf\u5206\u5e03\u5f0f\u4e00\u70b9\u513f\u5173\u7cfb\u90fd\u6ca1\u6709\uff0c\u7684\u786e\u524d\u9762\u51e0\u7bc7\u6587\u7ae0\u90fd\u662f\u5728\u91cd\u70b9\u4ecb\u7ecd\u7d22\u5f15\u76f8\u5173\u7684\u6280\u672f\uff0c\u4e0b\u4e00\u7bc7\u6587\u7ae0\u5c06\u4f1a\u5f00\u59cb\u804a\u804a\u5206\u5e03\u5f0f\u8fd9\u4e2a\u8bdd\u9898\uff0c\u656c\u8bf7\u671f\u5f85\u3002"}),"\n","\n",(0,a.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{id:"user-content-fn-1-081a7b",children:["\n",(0,a.jsxs)(n.p,{children:["\u5f53\u7136\u6570\u636e\u91cf\u6709\u591a\u5927\u53d6\u51b3\u4e8e\u4f60\u7684\u4e1a\u52a1\u6570\u636e\u6709\u591a\u5c11 ",(0,a.jsx)(n.a,{href:"#user-content-fnref-1-081a7b","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{id:"user-content-fn-2-081a7b",children:["\n",(0,a.jsxs)(n.p,{children:["\u5c0f\u65f6\u7ea7\u3001\u5929\u7ea7\u3001\u5468\u7ea7\u90fd\u6709\u53ef\u80fd ",(0,a.jsx)(n.a,{href:"#user-content-fnref-2-081a7b","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{id:"user-content-fn-3-081a7b",children:["\n",(0,a.jsxs)(n.p,{children:["\u5982\u4f55\u83b7\u53d6\u6709\u975e\u5e38\u591a\u7684\u65b9\u6848\uff0c\u6bd4\u5982 MySQL \u7684 binlog\uff0cMongoDB \u7684 oplog\u3002\u57fa\u7840\u670d\u52a1\u505a\u5f97\u6bd4\u8f83\u597d\u7684\u516c\u53f8\u8fd8\u4f1a\u5c06\u4e0d\u540c\u5b58\u50a8\u7684\u66f4\u65b0\u6d88\u606f\u805a\u5408\u5230\u7c7b\u4f3c\u6d88\u606f\u961f\u5217\u7684\u7cfb\u7edf\u4e2d\uff0c\u65b9\u4fbf\u4e0b\u6e38\u4e1a\u52a1\u6d88\u8d39\u3002 ",(0,a.jsx)(n.a,{href:"#user-content-fnref-3-081a7b","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{id:"user-content-fn-4-081a7b",children:["\n",(0,a.jsxs)(n.p,{children:["\u5047\u8bbe\u73b0\u5728\u6709 3 \u4e2a\u5012\u6392\u7d22\u5f15\uff0c\u90a3\u662f\u4e0d\u662f\u5f97\u4ece\u8fd9 3 \u4e2a\u5012\u6392\u7d22\u5f15\u4e2d\u90fd\u9009\u51fa top N \u4ee5\u540e\u624d\u80fd\u5f97\u5230\u6700\u7ec8\u7684\u7ed3\u679c\u5462\uff08\u5373\u603b\u5171\u9700\u8981\u67e5\u8be2 3 x N \u4e2a\u6761\u76ee\uff09\uff1f\u7b54\u6848\u662f\u4e0d\u7528\uff0c\u4e00\u79cd\u4f18\u5316\u7684\u5b9e\u73b0\u65b9\u6848\u662f\u540c\u65f6\u6bd4\u8f83 3 \u4e2a\u5012\u6392\u7d22\u5f15\u7684\u5934\u90e8\uff0c\u6311\u9009\u6700\u5927\u7684\u90a3\u4e2a\u6761\u76ee\uff0c\u7136\u540e\u4e00\u76f4\u91cd\u590d\u8fd9\u4e2a\u6b65\u9aa4\u76f4\u5230\u6ee1\u8db3\u9009\u51fa N \u4e2a\u6761\u76ee\uff0c\u8fd9\u6837\u603b\u5171\u9700\u8981\u67e5\u8be2\u7684\u6761\u76ee\u6570\u4ecd\u7136\u662f N\u3002 ",(0,a.jsx)(n.a,{href:"#user-content-fnref-4-081a7b","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{id:"user-content-fn-5-081a7b",children:["\n",(0,a.jsxs)(n.p,{children:["\u6bd4\u5982\u5806\u5916\u5185\u5b58\u4ece\u8bbe\u8ba1\u4e0a\u5c31\u4e0d\u7528\u8003\u8651\u66f4\u65b0\u548c\u5220\u9664\u64cd\u4f5c ",(0,a.jsx)(n.a,{href:"#user-content-fnref-5-081a7b","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2542:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/incremental_index_design-0885f4e261e40eb0a129d971d031c27f.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}},3378:e=>{e.exports=JSON.parse('{"permalink":"/blog/2020/05/13/how-to-design-a-distributed-index-framework-part-4","source":"@site/blog/2020-05-13-how-to-design-a-distributed-index-framework-part-4.md","title":"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u56db\uff09\uff1a\u7d22\u5f15\u66f4\u65b0","description":"\u8fd9\u662f\u4e00\u4e2a\u7cfb\u5217\u6587\u7ae0\uff0c\u5927\u90e8\u5206\u5185\u5bb9\u90fd\u6765\u81ea\u6211\u8fc7\u53bb\u5728\u5c0f\u7ea2\u4e66\u53d1\u73b0 Feed \u56e2\u961f\u5de5\u4f5c\u671f\u95f4\u7684\u5b9e\u8df5\u548c\u7ecf\u9a8c\u3002\u5728\u4ecb\u7ecd\u7684\u8fc7\u7a0b\u4e2d\u6211\u4f1a\u5c3d\u91cf\u4e0d\u63ba\u6742\u8fc7\u591a\u7684\u4e1a\u52a1\u7ec6\u8282\uff0c\u800c\u4e13\u6ce8\u4e8e\u8fd9\u80cc\u540e\u6211\u4e2a\u4eba\u4e00\u4e9b\u6d45\u8584\u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u5e0c\u671b\u4f60\u5728\u9605\u8bfb\u5b8c\u8fd9\u4e9b\u6587\u7ae0\u4ee5\u540e\u80fd\u591f\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u62d3\u5c55\u5230\u4e0d\u540c\u7684\u573a\u666f\u3002","date":"2020-05-13T14:55:43.000Z","tags":[{"inline":true,"label":"index","permalink":"/blog/tags/index"},{"inline":true,"label":"distrubted","permalink":"/blog/tags/distrubted"},{"inline":true,"label":"htdadif","permalink":"/blog/tags/htdadif"},{"inline":true,"label":"recommendation","permalink":"/blog/tags/recommendation"},{"inline":true,"label":"machine learning","permalink":"/blog/tags/machine-learning"}],"readingTime":9.77,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u56db\uff09\uff1a\u7d22\u5f15\u66f4\u65b0","date":"2020-05-13 14:55:43 +0800","tags":["index","distrubted","htdadif","recommendation","machine learning"]},"unlisted":false,"prevItem":{"title":"Maybe News Issue #1","permalink":"/blog/2020/05/21/maybe-news-issue-1"},"nextItem":{"title":"Maybe News Issue #0","permalink":"/blog/2020/05/11/maybe-news-issue-0"}}')}}]);