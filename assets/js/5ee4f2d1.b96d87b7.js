"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6647],{5667:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(4848),r=n(8453);const s={title:"Maybe News Issue #5",date:"2020-07-21 14:08:28 +0800",tags:["maybe news"]},t=void 0,a={permalink:"/blog/2020/07/21/maybe-news-issue-5",source:"@site/blog/2020-07-21-maybe-news-issue-5.md",title:"Maybe News Issue #5",description:"\u300cMaybe News\u300d\u662f\u4e00\u4e2a\u5b9a\u671f\uff08\u6216\u8bb8\u4e0d\u5b9a\u671f\uff09\u5206\u4eab\u4e00\u4e9b\u53ef\u80fd\u662f\u65b0\u95fb\u7684\u77e5\u8bc6\u7684\u7cfb\u5217\u6587\u7ae0\uff0c\u540d\u5b57\u6765\u6e90\u4e8e\u6211\u975e\u5e38\u559c\u6b22\u7684\u4e00\u4e2a\u56fd\u5185\u7684\u97f3\u4e50\u5382\u724c\u300c\u5175\u9a6c\u53f8\u300d\uff08Maybe Mars\uff09\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u90ae\u4ef6\u8ba2\u9605\u5b83\u3002",date:"2020-07-21T14:08:28.000Z",tags:[{inline:!0,label:"maybe news",permalink:"/blog/tags/maybe-news"}],readingTime:14.35,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Maybe News Issue #5",date:"2020-07-21 14:08:28 +0800",tags:["maybe news"]},unlisted:!1,prevItem:{title:"Introduction to DL Platform",permalink:"/blog/2020/08/17/introduction-to-dl-platform"},nextItem:{title:"Maybe News Issue #4",permalink:"/blog/2020/06/17/maybe-news-issue-4"}},l={authorsImageUrls:[]},d=[{value:"DynamicEmbedding: Extending TensorFlow for Colossal-Scale Applications",id:"dynamicembedding-extending-tensorflow-for-colossal-scale-applications",level:2},{value:"The Next Step for Generics",id:"the-next-step-for-generics",level:2},{value:"Fiber: Distributed Computing for AI Made Simple",id:"fiber-distributed-computing-for-ai-made-simple",level:2},{value:"The impact of slow NFS on data systems",id:"the-impact-of-slow-nfs-on-data-systems",level:2},{value:"Kubeflow &amp; Kale simplify building better ML Pipelines with automatic hyperparameter tuning",id:"kubeflow--kale-simplify-building-better-ml-pipelines-with-automatic-hyperparameter-tuning",level:2},{value:"GoogleCloudPlatform/spark-on-k8s-operator #976: Add support for dynamic allocation via shuffle tracking",id:"googlecloudplatformspark-on-k8s-operator-976-add-support-for-dynamic-allocation-via-shuffle-tracking",level:2},{value:"Boiled Hippo",id:"boiled-hippo",level:2}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsxs)(i.p,{children:["\u300cMaybe News\u300d\u662f\u4e00\u4e2a\u5b9a\u671f\uff08\u6216\u8bb8\u4e0d\u5b9a\u671f\uff09\u5206\u4eab\u4e00\u4e9b\u53ef\u80fd\u662f\u65b0\u95fb\u7684\u77e5\u8bc6\u7684",(0,o.jsx)(i.a,{href:"/blog/tags/maybe-news",children:"\u7cfb\u5217\u6587\u7ae0"}),"\uff0c\u540d\u5b57\u6765\u6e90\u4e8e\u6211\u975e\u5e38\u559c\u6b22\u7684\u4e00\u4e2a\u56fd\u5185\u7684\u97f3\u4e50\u5382\u724c",(0,o.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Maybe_Mars",children:"\u300c\u5175\u9a6c\u53f8\u300d"}),"\uff08Maybe Mars\uff09\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,o.jsx)(i.a,{href:"https://maybe.news",children:"\u90ae\u4ef6\u8ba2\u9605"}),"\u5b83\u3002"]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"dynamicembedding-extending-tensorflow-for-colossal-scale-applications",children:"DynamicEmbedding: Extending TensorFlow for Colossal-Scale Applications"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://arxiv.org/abs/2004.08366",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsxs)(i.p,{children:["\u5728",(0,o.jsx)(i.a,{href:"/blog/2020/05/21/maybe-news-issue-1",children:"\u7b2c\u4e00\u671f"})," Maybe News \u4e2d\u4ecb\u7ecd\u4e86\u817e\u8baf\u63d0\u51fa\u7684\u89e3\u51b3 TensorFlow \u4e2d\u5927\u89c4\u6a21\u7a00\u758f\u7279\u5f81\u6a21\u578b\u8bad\u7ec3\u7684\u65b9\u6848\uff0c\u672c\u671f\u7684\u8fd9\u7bc7\u8bba\u6587\u6765\u81ea Google\uff08\u51c6\u786e\u8bf4\u662f Google Smart Campaigns \u56e2\u961f\uff09\u3002\u4f5c\u4e3a\u53d1\u660e TensorFlow \u7684\u516c\u53f8\uff0cGoogle \u5185\u90e8\u56e2\u961f\u7684\u8bbe\u8ba1\u601d\u60f3\u503c\u5f97\u501f\u9274\u3002"]}),"\n",(0,o.jsxs)(i.p,{children:["\u8fd9\u4e2a\u7cfb\u7edf\u88ab\u79f0\u4e4b\u4e3a DynamicEmbedding\uff08DE\uff09\uff0c\u540d\u5b57\u7b80\u5355\u76f4\u89c2\uff0c\u8981\u89e3\u51b3\u7684\u573a\u666f\u4e5f\u662f\u5f88\u591a\u516c\u53f8\u90fd\u9047\u5230\u7684\u5982\u4f55\u52a8\u6001\u7ef4\u62a4 embedding\u3002\u7cfb\u7edf\u5185\u90e8\u5206\u4e3a\u4e24\u4e2a\u7ec4\u4ef6\uff1aDynamicEmbedding Master\uff08DEM\uff09\u548c DynamicEmbedding Worker\uff08DEW\uff09\uff0c\u5408\u8d77\u6765\u53eb\u505a DynamicEmbedding Service\uff08DES\uff09\u3002DEM \u8d1f\u8d23\u5904\u7406\u6240\u6709\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u5305\u62ec embedding \u67e5\u627e\uff08lookup\uff09\u3001\u66f4\u65b0\uff08update\uff09\u7b49\u3002DEW \u8d1f\u8d23 embedding \u5b58\u50a8\u3001\u68af\u5ea6\u66f4\u65b0\u7b49\uff0c\u6240\u6709\u8bf7\u6c42\u90fd\u6765\u81ea DEM\u3002\u540c\u65f6\u65b0\u589e\u4e86\u51e0\u4e2a TensorFlow API\uff0c\u5982 ",(0,o.jsx)(i.code,{children:"dynamic_embedding_lookup()"}),"\u3001",(0,o.jsx)(i.code,{children:"compute_sampled_logits()"}),"\uff0c\u8fd9\u4e9b API \u662f\u6574\u4e2a\u7cfb\u7edf\u7684\u5173\u952e\u5165\u53e3\uff0c\u4efb\u4f55\u6a21\u578b\u5728\u63a5\u5165 DES \u7684\u65f6\u5019\u90fd\u9700\u8981\u5728\u7279\u5b9a\u7684\u5730\u65b9\u8c03\u7528\u8fd9\u4e9b API\u3002\u4ee5\u4e0a\u8bbe\u8ba1\u770b\u8d77\u6765\u8ddf\u5927\u90e8\u5206\u516c\u53f8\u7684\u65b9\u6848\u6ca1\u6709\u592a\u5927\u5dee\u522b\u3002"]}),"\n",(0,o.jsx)(i.p,{children:"\u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a\u53eb\u505a EmbeddingStore \u7684\u901a\u7528\u63a5\u53e3\uff0cDEW \u540e\u7aef\u652f\u6301\u5bf9\u63a5\u591a\u79cd\u7c7b\u578b\u7684\u5b58\u50a8\uff0c\u4f8b\u5982 Protocol Buffers\u3001GFS\u3001Bigtable\uff0c\u6bd4\u8f83\u5de7\u5999\u5730\u5c06\u5927\u89c4\u6a21 embedding \u5b58\u50a8\u65f6\u9762\u4e34\u7684\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\u95ee\u9898\u8f6c\u79fb\u5230\u4e86\u5916\u90e8\u5b58\u50a8\u7cfb\u7edf\u3002\u5f53\u7136\u56e0\u4e3a\u591a\u4e86\u4e00\u6b21\u7f51\u7edc\u8bf7\u6c42\u662f\u5426\u4f1a\u5f71\u54cd\u6574\u4f53\u7684\u8bad\u7ec3\u6548\u7387\u8fd9\u70b9\u6709\u5f85\u5546\u69b7\uff0c\u8bba\u6587\u4e2d\u4ecb\u7ecd BigtableEmbedding \u65f6\u63d0\u5230\u4f1a\u5c06\u6570\u636e\u540c\u65f6\u5b58\u50a8\u5230\u672c\u5730\u7f13\u5b58\u548c\u8fdc\u7aef\uff0c\u731c\u6d4b\u8fd9\u91cc\u672c\u5730\u7f13\u5b58\u7684\u76ee\u7684\u4fbf\u662f\u4e3a\u4e86\u52a0\u901f\u5b58\u50a8\u64cd\u4f5c\u3002"}),"\n",(0,o.jsx)(i.p,{children:"Embedding \u66f4\u65b0\u8fd9\u4e00\u6b65\u6d89\u53ca\u5230\u4e00\u4e9b\u5e38\u7528\u7684\u68af\u5ea6\u4e0b\u964d\uff08gradient descent\uff09\u7b97\u6cd5\uff0c\u4e3a\u4e86\u4fdd\u6301\u4e00\u81f4\uff0cDEW \u5185\u90e8\u5b9e\u73b0\u4e86\u8ddf TensorFlow \u539f\u751f\u63d0\u4f9b\u7684\u4f18\u5316\u5668\uff08optimizer\uff09\u540c\u6837\u7684\u903b\u8f91\uff0c\u5e76\u4e14\u5927\u90e8\u5206\u4ee3\u7801\u662f\u53ef\u4ee5\u590d\u7528\u7684\u3002\u5f53\u8bad\u7ec3\u6570\u636e\u65f6\u95f4\u8de8\u5ea6\u5f88\u5927\u65f6\uff08\u5982\u6570\u6708\u6216\u8005\u6570\u5e74\uff09\uff0c\u53ef\u80fd\u5b58\u5728\u5f88\u591a\u65e0\u6548\u7684\u7279\u5f81\u6216\u8005\u4e00\u4e9b\u9700\u8981\u7279\u6b8a\u5904\u7406\u7684\u7279\u5f81\u3002\u56e0\u6b64 DEW \u5728\u6bcf\u6b21 embedding \u66f4\u65b0\u7684\u65f6\u5019\u4f1a\u540c\u65f6\u7edf\u8ba1\u8fd9\u4e2a embedding \u7684\u66f4\u65b0\u9891\u7387\uff0c\u901a\u8fc7\u8bbe\u5b9a\u4e00\u4e2a\u6070\u5f53\u7684\u9608\u503c\u6765\u4fdd\u8bc1\u53ea\u6709\u90e8\u5206 embedding \u4f1a\u6301\u4e45\u5316\u5230\u5b58\u50a8\u7cfb\u7edf\u91cc\uff0c\u90a3\u4e9b\u4f4e\u9891\u7684\u6570\u636e\u4fbf\u4e0d\u4f1a\u7ee7\u7eed\u4fdd\u5b58\u3002\u9664\u4e86\u7edf\u8ba1\u9891\u7387\u8fd9\u79cd\u65b9\u6cd5\uff0c\u901a\u8fc7 bloom filter \u4e5f\u53ef\u4ee5\u5b9e\u73b0\u7c7b\u4f3c\u7684\u6548\u679c\u3002"}),"\n",(0,o.jsx)(i.p,{children:"Serving \u7684\u65f6\u5019\u56e0\u4e3a embedding \u90fd\u5df2\u7ecf\u5b58\u50a8\u5230\u4e86\u5916\u90e8\u7cfb\u7edf\uff0c\u6240\u4ee5 DEW \u5c31\u6ca1\u6709\u5fc5\u8981\u5b58\u5728\u4e86\uff0c\u53ea\u9700\u8981\u5728\u672c\u5730\u90e8\u7f72 DEM \u8d1f\u8d23\u5904\u7406\u8bfb\u8bf7\u6c42\u3002\u4e3a\u4e86\u63d0\u5347\u63a8\u7406\u7684\u6027\u80fd\uff0c\u672c\u5730\u7f13\u5b58\u80af\u5b9a\u662f\u5c11\u4e0d\u4e86\u7684\uff0c\u540c\u65f6\u6279\u91cf\u5904\u7406\u67e5\u8be2\u8bf7\u6c42\u4e5f\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u5b9e\u9a8c\u8bc4\u4f30\u9636\u6bb5\u9996\u5148\u6bd4\u8f83\u4e86\u548c\u539f\u751f TensorFlow \u8bad\u7ec3\u540c\u6837\u7684\u6a21\u578b\u3001\u540c\u6837\u7684\u8d85\u53c2\u662f\u5426\u4f1a\u6709\u6307\u6807\u4e0a\u7684\u5dee\u5f02\uff0c\u6a21\u578b\u9009\u62e9\u7684\u662f Word2Vec\uff0c\u68af\u5ea6\u4e0b\u964d\u7b97\u6cd5\u9009\u62e9\u7684\u662f SGD\u3001Adagrad \u548c Momentum\u3002\u4ece\u6700\u7ec8\u8bad\u7ec3\u7684 loss \u4e0a\u770b\u51e0\u4e4e\u6ca1\u6709\u5dee\u522b\uff0c\u8bf4\u660e DE \u7cfb\u7edf\u4e0d\u4f1a\u5bf9\u6a21\u578b\u8d28\u91cf\u6709\u5f71\u54cd\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u63a5\u7740\u6d4b\u8bd5\u4e86\u5b57\u5178\uff08dictionary\uff09\u5927\u5c0f\u5bf9\u6a21\u578b\u7cbe\u5ea6\uff08accuracy\uff09\u7684\u5f71\u54cd\uff0c\u7406\u8bba\u4e0a DE \u7cfb\u7edf\u5176\u5b9e\u662f\u4e0d\u9650\u5b9a\u5b57\u5178\u5927\u5c0f\u7684\uff0c\u4ece\u5b9e\u9a8c\u7684\u4e24\u4e2a\u6a21\u578b Word2Vec \u548c Sparse2Seq \u4e0a\u6765\u770b\u4e5f\u7684\u786e\u662f\u5b57\u5178\u5927\u5c0f\u8d8a\u5927\u6a21\u578b\u7cbe\u5ea6\u8d8a\u9ad8\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u7136\u540e\u662f\u8bc4\u6d4b\u6a21\u578b\u8bad\u7ec3\u65f6\u4e24\u4e2a\u91cd\u8981\u7684\u7cfb\u7edf\u6307\u6807\uff1a\u96c6\u7fa4\u603b\u7684\u5185\u5b58\u5360\u7528\u548c\u6bcf\u79d2\u8bad\u7ec3\u7684 global steps\uff08GSS\uff09\u3002\u5206\u522b\u6d4b\u8bd5\u4e86\u4e09\u4e2a\u6a21\u578b\uff1aWord2Vec\uff0cImage2Lable \u548c Seq2Seq\u3002\u5728\u4f7f\u7528\u539f\u751f\u7684 TensorFlow \u65f6\u96c6\u7fa4\u5185\u5b58\u5360\u7528\u4f1a\u968f\u7740 worker \u6570\u91cf\u7684\u589e\u5927\u800c\u663e\u8457\u589e\u957f\uff08\u5728 Word2Vec \u6a21\u578b\u4e2d\u5c24\u4e3a\u660e\u663e\uff09\uff0c\u76f8\u6bd4\u4e4b\u4e0b DE \u7cfb\u7edf\u7684\u5185\u5b58\u5360\u7528\u53ea\u8ddf embedding \u7684\u603b\u5927\u5c0f\u6709\u5173\uff0c\u4e0e DEW \u7684\u6570\u91cf\u65e0\u5173\u3002\u4e4b\u6240\u4ee5\u6709\u8fd9\u6837\u7684\u5dee\u5f02\u4e5f\u662f\u56e0\u4e3a\u539f\u751f\u7684 TensorFlow \u4f1a\u5728\u4e0d\u540c worker \u95f4\u91cd\u590d\u5b58\u50a8 embedding \u6570\u636e\u3002GSS \u7684\u5bf9\u6bd4\u4e0a\u4e24\u8005\u7684\u52a0\u901f\u6bd4\u90fd\u5dee\u4e0d\u591a\uff0c\u4f46\u662f\u603b\u4f53\u4e0a DE \u8fd8\u662f\u4f1a\u66f4\u4f18\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u6700\u540e\u8bba\u6587\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u4e86 DE \u5728 Google Smart Campaigns \u4ea7\u54c1\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u5e94\u7528\uff1a\u7ed9\u5e7f\u544a\u4e3b\u81ea\u52a8\u63a8\u8350\u6295\u653e\u7684\u5173\u952e\u8bcd\u3002\u8fd9\u662f\u4e00\u4e2a\u53eb\u505a Sparse2Label \u7684\u6a21\u578b\uff0c\u8f93\u51fa\u5373\u662f\u63a8\u8350\u7684\u5173\u952e\u8bcd\uff08label\uff09\u3002\u8fd9\u4e2a\u6a21\u578b\u5e26\u6765\u7684\u6700\u5927\u53d8\u5316\u662f\u4ee5\u524d\u9700\u8981\u9488\u5bf9\u6bcf\u4e00\u79cd\u8bed\u8a00\u8bad\u7ec3\u4e00\u4e2a\u5355\u72ec\u7684\u6a21\u578b\uff0c\u800c\u73b0\u5728\u53ea\u9700\u8981\u4e00\u4e2a\u6a21\u578b\u5373\u53ef\u3002\u901a\u8fc7\u5bf9\u6bd4\u4e00\u4e9b\u6838\u5fc3\u6307\u6807\uff08\u5982 CTR\uff09\uff0cDE \u63a8\u8350\u7684\u5173\u952e\u8bcd\u90fd\u660e\u663e\u66f4\u597d\u3002\u6574\u4e2a\u6a21\u578b\u4e5f\u662f\u968f\u7740\u65f6\u95f4\u4e0d\u65ad\u589e\u957f\u7684\uff0c\u622a\u6b62 2020 \u5e74 2 \u6708\u8fd9\u4e2a\u6a21\u578b\u7684\u53c2\u6570\u91cf\u5df2\u7ecf\u8fbe\u5230\u4e86 1249 \u4ebf\u4e2a\uff0c\u5982\u679c\u6bcf\u4e2a\u53c2\u6570\u6309 4 \u5b57\u8282\u7b97\u7684\u8bdd\u6a21\u578b\u5927\u5c0f\u5dee\u4e0d\u591a\u4e3a 465 GiB\uff08\u5176\u5b9e\u6bd4\u60f3\u8c61\u4e2d\u5c0f\uff09\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u53e6\u4e00\u4e2a\u66f4\u96be\u8bc4\u4f30\u7684\u6307\u6807\u662f\u7528\u6237\u641c\u7d22\u7684\u5173\u952e\u8bcd\uff08query\uff09\u4e0e\u5e7f\u544a\u6295\u653e\u7684\u5173\u952e\u8bcd\u4e4b\u95f4\u7684\u5173\u8054\u5ea6\uff0c\u5f88\u591a\u65f6\u5019\u4e24\u8005\u4e4b\u95f4\u5e76\u4e0d\u662f\u5b8c\u5168\u5339\u914d\u7684\u3002\u4f5c\u8005\u662f\u901a\u8fc7\u4eba\u5de5\u8bc4\u4f30 38 \u4e07\u4e2a\u6837\u672c\u7684\u65b9\u5f0f\u6765\u89e3\u51b3\u7684\uff0c\u6bcf\u4e2a\u6837\u672c\u90fd\u4f1a\u6709 5 \u4e2a\u4eba\u7c7b\u8fdb\u884c\u6253\u5206\uff0c\u5206\u6570\u533a\u95f4\u4ece -100 \u5230 100\uff0c\u8d8a\u9ad8\u8d8a\u5339\u914d\uff0c\u7136\u540e\u8ba1\u7b97\u8fd9 5 \u4e2a\u5206\u6570\u7684\u5e73\u5747\u503c\u4f5c\u4e3a\u8fd9\u4e2a\u6837\u672c\u7684\u6700\u7ec8\u5206\u6570\u3002\u5927\u4e8e\u7b49\u4e8e 50 \u5206\u7684\u6837\u672c\u8ba4\u4e3a\u662f\u597d\uff08good\uff09\u7684\u6837\u672c\uff0c\u5c0f\u4e8e\u7b49\u4e8e 0 \u5206\u7684\u5219\u8ba4\u4e3a\u662f\u4e0d\u597d\uff08bad\uff09\u7684\u6837\u672c\uff0c\u524d\u8005\u9664\u4ee5\u540e\u8005\u88ab\u79f0\u4f5c GB ratio\uff0c\u8fd9\u4e2a\u6bd4\u7387\u8d8a\u5927\u8d8a\u597d\u3002\u6bcf\u4e2a\u63a8\u8350\u7684\u5173\u952e\u8bcd\u90fd\u4f1a\u540c\u65f6\u6709\u4e00\u4e2a\u7f6e\u4fe1\u503c\uff08\u4e5f\u5c31\u662f\u7f51\u9875\u548c\u5173\u952e\u8bcd embedding \u4e4b\u95f4\u7684 cosine \u8ddd\u79bb\uff09\uff0c\u4ece\u8bc4\u6d4b\u7ed3\u679c\u4e0a\u6765\u770b\u5f53\u8fd9\u4e2a\u7f6e\u4fe1\u503c\u5927\u4e8e 0.7 \u65f6\uff0c\u4e0d\u597d\u7684\u6837\u672c\u91cf\u5c06\u4f1a\u663e\u8457\u51cf\u5c11\u3002\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u6536\u96c6\u7684\u6570\u636e\u4e5f\u5370\u8bc1\u4e86 DE \u7cfb\u7edf\u63a8\u8350\u7684\u5173\u952e\u8bcd\u662f GB ratio \u6700\u9ad8\u7684\u3002"}),"\n",(0,o.jsxs)(i.p,{children:["\u603b\u7ed3\u4e00\u4e0b DE \u7cfb\u7edf\u89e3\u51b3\u4e86\u539f\u751f TensorFlow \u5728\u5927\u89c4\u6a21 embedding \u6a21\u578b\u8bad\u7ec3\u65f6\u6548\u7387\u4f4e\u4e0b\uff08\u751a\u81f3\u4e0d\u53ef\u7528\uff09\u7684\u95ee\u9898\uff0c\u77ed\u671f\u5185\u8fd9\u4e2a\u7cfb\u7edf\u4f30\u8ba1\u4e5f\u4e0d\u4f1a\u5f00\u6e90\u6216\u8005\u5408\u5e76\u5230\u4e0a\u6e38\u3002\u76ee\u524d\u53ef\u4ee5\u671f\u5f85\u7684\u8fd8\u662f\u817e\u8baf\u7684\u65b9\u6848\uff0c\u4ed6\u4eec\u5df2\u7ecf\u63d0\u4ea4\u4e86",(0,o.jsx)(i.a,{href:"https://github.com/tensorflow/tensorflow/pull/41371",children:"\u4ee3\u7801"}),"\u5230 TensorFlow \u793e\u533a\u3002"]}),"\n",(0,o.jsx)(i.h2,{id:"the-next-step-for-generics",children:"The Next Step for Generics"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://blog.golang.org/generics-next-step",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsxs)(i.p,{children:["\u5728",(0,o.jsx)(i.a,{href:"/blog/2020/06/02/maybe-news-issue-2",children:"\u7b2c\u4e8c\u671f"})," Maybe News \u4e2d\u66fe\u7ecf\u4ecb\u7ecd\u8fc7 Go \u8bed\u8a00\u5f00\u53d1\u8005\u5173\u4e8e\u6cdb\u578b\u8bbe\u8ba1\u7684\u4e00\u4e9b\u601d\u8003\uff0c\u8fd1\u671f Ian Lance Taylor \u53c8\u548c\u793e\u533a\u540c\u6b65\u4e86\u4e00\u4e0b\u6700\u65b0\u8fdb\u5c55\u3002\u6700\u5927\u7684\u53d8\u5316\u5c31\u662f\u53bb\u6389\u4e86 contract \u8fd9\u4e2a\u65b0\u589e\u7684\u6982\u5ff5\uff0c\u6539\u4e3a\u590d\u7528 interface\u3002\u540c\u65f6\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684 ",(0,o.jsx)(i.a,{href:"https://go2goplay.golang.org",children:"playground"}),"\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5927\u5bb6\u8bd5\u9a8c\u6cdb\u578b\u4ee3\u7801\u3002\u5982\u679c\u6700\u65b0\u7684\u8fd9\u4e00\u7248\u8bbe\u8ba1\u793e\u533a\u6ca1\u6709\u592a\u5927\u5f02\u8bae\u7684\u8bdd\uff0c\u4e50\u89c2\u4f30\u8ba1\u5c06\u4f1a\u5728 Go 1.17 \u52a0\u5165\u6cdb\u578b\u7279\u6027\uff0c\u4e5f\u5c31\u662f\u5728 2021 \u5e74 8 \u6708\u5de6\u53f3\u3002\u5f53\u7136\u6700\u7ec8\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u6807\u8fd8\u662f\u6709\u5f88\u591a\u7684\u4e0d\u786e\u5b9a\u6027\uff0c\u7279\u522b\u662f\u5f53\u524d\u75ab\u60c5\u5bf9\u4e8e\u5168\u7403\u5f71\u54cd\u7684\u60c5\u51b5\u4e0b\u3002"]}),"\n",(0,o.jsx)(i.h2,{id:"fiber-distributed-computing-for-ai-made-simple",children:"Fiber: Distributed Computing for AI Made Simple"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://eng.uber.com/fiberdistributed",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsxs)(i.p,{children:["\u5206\u5e03\u5f0f\u8ba1\u7b97\u5728 AI \u9886\u57df\u7684\u9700\u6c42\u4e00\u76f4\u90fd\u5f88\u5f3a\u70c8\uff0c\u4f46\u5206\u5e03\u5f0f\u8ba1\u7b97\u4e0d\u4ec5\u4ec5\u662f\u5c06\u5355\u673a\u8fc1\u79fb\u5230\u591a\u673a\u8fd9\u6837\u5c31\u8db3\u591f\u4e86\uff0c\u8fd8\u9700\u8981\u8003\u8651\u5982\uff1a\u6613\u7528\u6027\uff08\u964d\u4f4e\u7528\u6237\u4ece\u5355\u673a\u8fc1\u79fb\u7684\u6210\u672c\uff09\u3001\u7a33\u5b9a\u6027\uff08\u81ea\u52a8\u5bb9\u9519\uff09\u3001\u5f39\u6027\u4f38\u7f29\uff08\u548c\u5e95\u5c42\u8d44\u6e90\u8c03\u5ea6\u5c42\u914d\u5408\uff09\u3001\u7ebf\u6027\u52a0\u901f\uff08\u6a2a\u5411\u6269\u5c55\u591a\u5c11\u673a\u5668\u5c31\u80fd\u5e26\u6765\u591a\u5c11\u6027\u80fd\u63d0\u5347\uff09\u3002Uber \u548c OpenAI \u5171\u540c\u5f00\u53d1\u7684 Fiber \u6846\u67b6\u4fbf\u662f\u5c1d\u8bd5\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898\u7684\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4ece Fiber \u7684",(0,o.jsx)(i.a,{href:"https://arxiv.org/abs/2003.11164",children:"\u8bba\u6587"}),"\u80fd\u770b\u5230\u8fd9\u4e2a\u6846\u67b6\u6700\u521d\u8bbe\u8ba1\u9762\u5411\u7684\u662f\u5f3a\u5316\u5b66\u4e60\uff08Reinforcement Learning\uff09\u573a\u666f\uff0c\u5728\u8fd9\u4e2a\u9886\u57df\u6709\u5f88\u591a\u7c7b\u4f3c\u7684\u6846\u67b6\uff0c\u6bd4\u5982 Google \u7684 ",(0,o.jsx)(i.a,{href:"https://github.com/google/dopamine",children:"Dopamine"}),"\u3001Facebook \u7684 ",(0,o.jsx)(i.a,{href:"https://github.com/facebookresearch/ReAgent",children:"ReAgent"}),"\u3001UC Berkeley \u7684 ",(0,o.jsx)(i.a,{href:"https://github.com/ray-project/ray",children:"Ray"}),"\u3002\u81ea\u52a8\u5bb9\u9519\u548c\u5f39\u6027\u4f38\u7f29\u8fd9\u4e24\u4e2a\u7279\u6027\u53c8\u8ba9\u6211\u8054\u60f3\u5230\u8682\u8681\u91d1\u670d\u7684 ",(0,o.jsx)(i.a,{href:"https://github.com/sql-machine-learning/elasticdl",children:"ElasticDL"})," \u548c\u624d\u4e91\u7684 ",(0,o.jsx)(i.a,{href:"https://github.com/caicloud/ftlib",children:"FTLib"}),"\u3002"]}),"\n",(0,o.jsx)(i.h2,{id:"the-impact-of-slow-nfs-on-data-systems",children:"The impact of slow NFS on data systems"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://engineering.linkedin.com/blog/2020/the-impact-of-slow-nfs-on-data-systems",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsx)(i.p,{children:"LinkedIn \u5206\u4eab\u4e86\u4ed6\u4eec\u4f7f\u7528 NFS \u8fdb\u884c\u6570\u636e\u5e93\u5907\u4efd\u65f6\u9047\u5230\u7684\u6027\u80fd\u95ee\u9898\uff0c\u56e0\u4e3a\u5907\u4efd\u8fdb\u7a0b\u548c\u6570\u636e\u5e93\u8fdb\u7a0b\u662f\u4e00\u8d77\u90e8\u7f72\u7684\uff0c\u56e0\u6b64\u8fd9\u4e2a\u95ee\u9898\u8fd8\u95f4\u63a5\u5f71\u54cd\u5230\u4e86\u5728\u7ebf\u4e1a\u52a1\u7684\u7a33\u5b9a\u6027\u3002\u6574\u4e2a\u95ee\u9898\u5206\u6790\u8fc7\u7a0b\u6e05\u6670\u6613\u61c2\uff0c\u8fd8\u80fd\u987a\u4fbf\u590d\u4e60\u4e00\u4e0b\u5927\u5b66\u91cc\u5b66\u4e60\u7684\u8ba1\u7b97\u673a\u7f51\u7edc\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u4e00\u4e9b\u77e5\u8bc6\u3002\u4f46\u95ee\u9898\u7684\u6839\u6e90 NFS \u670d\u52a1\u7684\u6027\u80fd\u4e3a\u4ec0\u4e48\u8fd9\u4e48\u5dee\u8fd8\u662f\u6ca1\u6709\u7279\u522b\u597d\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u80fd\u5728\u8fd9\u4e2a\u573a\u666f\u91cc NFS \u5c31\u4e0d\u662f\u7279\u522b\u597d\u7684\u9009\u62e9\u5427\u3002"}),"\n",(0,o.jsx)(i.h2,{id:"kubeflow--kale-simplify-building-better-ml-pipelines-with-automatic-hyperparameter-tuning",children:"Kubeflow & Kale simplify building better ML Pipelines with automatic hyperparameter tuning"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://medium.com/kubeflow/kubeflow-kale-simplify-building-better-ml-pipelines-with-automatic-hyperparameter-tuning-5821747f4fcb",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsxs)(i.p,{children:["Jupyter Notebooks \u662f\u5f53\u4e0b\u6570\u636e\u79d1\u5b66\u5bb6\u6216\u8005\u7b97\u6cd5\u5de5\u7a0b\u5e08\u65e5\u5e38\u5de5\u4f5c\u975e\u5e38\u91cd\u8981\u7684\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u4ea4\u4e92\u5f0f\u7684\u754c\u9762\u52a0\u4e0a\u5373\u65f6\u7684\u4ee3\u7801\u8fd0\u884c\u53cd\u9988\u6781\u5927\u5730\u63d0\u5347\u4e86\u5f00\u53d1\u6548\u7387\u3002\u4f46\u662f\u5982\u679c\u8981\u5c06\u673a\u5668\u5b66\u4e60\u4efb\u52a1\u63d0\u4ea4\u5230\u96c6\u7fa4\u4e2d\u8fd0\u884c\u5f80\u5f80\u8fd8\u5f97\u4f9d\u9760\u7c7b\u4f3c Kubeflow Pipelines \u8fd9\u79cd DAG \u7ba1\u7406\u53ca\u8c03\u5ea6\u7ec4\u4ef6\uff0cKubeflow Pipelines \u6709\u4e00\u5957\u57fa\u4e8e Python API \u7684\u8bed\u6cd5\uff0c\u56e0\u6b64\u7528\u6237\u9700\u8981\u518d\u91cd\u65b0\u5b9a\u4e49\u4e00\u4e2a\u72ec\u7acb\u7684 pipeline\u3002\u6709\u6ca1\u6709\u529e\u6cd5\u76f4\u63a5\u5c06 notebook \u4e2d\u5df2\u7ecf\u9a8c\u8bc1\u8fc7\u7684\u4ee3\u7801\u81ea\u52a8\u8f6c\u6362\u6210 pipeline \u5e76\u63d0\u4ea4\u5230\u96c6\u7fa4\u5462\uff1f",(0,o.jsx)(i.a,{href:"https://kubeflow-kale.github.io",children:"Kale"}),"\uff08",(0,o.jsx)(i.strong,{children:"K"}),"ubeflow ",(0,o.jsx)(i.strong,{children:"A"}),"utomated Pipe",(0,o.jsx)(i.strong,{children:"L"}),"ines ",(0,o.jsx)(i.strong,{children:"E"}),"ngine\uff09\u5373\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u800c\u8bde\u751f\uff0c\u5b83\u662f\u4e00\u4e2a\u80fd\u591f\u5c06 Jupyter Notebooks \u81ea\u52a8\u8f6c\u6362\u4e3a Kubeflow Pipelines \u7684\u5de5\u5177\u3002\u5728\u6700\u65b0\u7684 0.5 \u7248\u672c\u4e2d Kale \u65b0\u589e\u4e86\u5bf9 ",(0,o.jsx)(i.a,{href:"https://github.com/kubeflow/katib",children:"Katib"})," \u7684\u96c6\u6210\uff0c\u540e\u8005\u662f\u8fdb\u884c\u81ea\u52a8\u8d85\u53c2\u8c03\u4f18\uff08Hyperparameter Tuning\uff09\u548c\u795e\u7ecf\u7f51\u7edc\u67b6\u6784\u641c\u7d22\uff08Neural Architecture Search\uff09\u7684\u7ec4\u4ef6\u3002"]}),"\n",(0,o.jsx)(i.h2,{id:"googlecloudplatformspark-on-k8s-operator-976-add-support-for-dynamic-allocation-via-shuffle-tracking",children:"GoogleCloudPlatform/spark-on-k8s-operator #976: Add support for dynamic allocation via shuffle tracking"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.a,{href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/pull/976",children:"[\u94fe\u63a5]"})}),"\n",(0,o.jsxs)(i.p,{children:["Spark 3.0 \u4e3a",(0,o.jsx)(i.a,{href:"http://spark.apache.org/docs/latest/job-scheduling.html#dynamic-resource-allocation",children:"\u52a8\u6001\u8d44\u6e90\u5206\u914d"}),"\uff08dynamic resource allocation\uff09\u65b0\u589e\u4e86 shuffle tracking \u7279\u6027\uff08\u9ed8\u8ba4\u5173\u95ed\uff09\uff0c\u5177\u4f53\u5b9e\u73b0\u53ef\u4ee5\u67e5\u770b ",(0,o.jsx)(i.a,{href:"https://issues.apache.org/jira/browse/SPARK-27963",children:"SPARK-27963"}),"\u3002\u5f53\u4f7f\u7528\u52a8\u6001\u8d44\u6e90\u5206\u914d\u65f6\u7528\u6237\u9700\u8981\u9884\u5148\u8bbe\u5b9a\u8bf8\u5982\u521d\u59cb\u3001\u6700\u5c0f\u548c\u6700\u5927 executor \u6570\u91cf\u8fd9\u6837\u7684\u53c2\u6570\uff0c\u4e4b\u540e Spark \u8fd0\u884c\u65f6\u4f1a\u6839\u636e\u5f53\u524d\u4efb\u52a1\u6392\u961f\u65f6\u95f4\u548c executor \u7a7a\u95f2\u65f6\u95f4\u8fd9\u4e9b\u6307\u6807\u53bb\u521b\u5efa\u6216\u8005\u9500\u6bc1 executor\u3002\u5bf9\u4e8e\u6709\u72b6\u6001\u7684 executor\uff08\u5982 shuffle \u65f6\u5b58\u50a8\u5230\u78c1\u76d8\u7684\u6570\u636e\u3001cache \u5230\u5185\u5b58\u548c\u78c1\u76d8\u7684\u6570\u636e\uff09\u4f1a\u6709\u4e00\u4e9b\u7279\u6b8a\u7684\u7b56\u7565\u9632\u6b62\u9519\u8bef\u56de\u6536\u8d44\u6e90\uff0c\u8fc7\u53bb\u7684\u505a\u6cd5\u662f\u4f7f\u7528\u5916\u90e8 shuffle \u670d\u52a1\u3002\u5f00\u542f shuffle tracking \u4ee5\u540e\u5c31\u4e0d\u518d\u4f9d\u8d56\u5916\u90e8 shuffle \u670d\u52a1\uff0c\u800c\u662f\u8bbe\u7f6e\u4e00\u4e2a executor \u6301\u6709 shuffle \u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u8fc7\u53bb Spark \u7684 K8s \u6a21\u5f0f\u4e0d\u652f\u6301\u5916\u90e8 shuffle \u670d\u52a1\uff0c\u6709\u4e86\u8fd9\u4e2a\u65b0\u7684\u7279\u6027\u4ee5\u540e\u4f7f\u5f97\u52a8\u6001\u8d44\u6e90\u5206\u914d\u5728 K8s \u6a21\u5f0f\u4e0a\u6210\u4e3a\u53ef\u80fd\u3002spark-on-k8s-operator \u9879\u76ee\u8fd1\u671f\u4e5f\u652f\u6301\u4e86\u8fd9\u4e2a\u7279\u6027\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,o.jsx)(i.a,{href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/docs/user-guide.md#dynamic-allocation",children:"YAML \u914d\u7f6e"}),"\u6765\u5f00\u542f\u3002"]}),"\n",(0,o.jsx)(i.h2,{id:"boiled-hippo",children:"Boiled Hippo"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"https://spacefruityrecords.bandcamp.com/album/boiled-hippo-2",children:"[Bandcamp]"})," ",(0,o.jsx)(i.a,{href:"https://music.163.com/#/album?id=91278378",children:"[\u7f51\u6613\u4e91\u97f3\u4e50]"})," ",(0,o.jsx)(i.a,{href:"https://www.xiami.com/album/1ttwrEdcce1",children:"[\u867e\u7c73]"})]}),"\n",(0,o.jsx)(i.p,{children:"\u672c\u671f\u6700\u540e\u63a8\u8350\u4e00\u5f20\u6765\u81ea\u6211\u7684\u4e00\u4e2a\u597d\u670b\u53cb\u7684\u5531\u7247\uff0cBoiled Hippo \u662f\u4e00\u652f\u5317\u4eac\u7684\u8ff7\u5e7b\u6447\u6eda\u4e50\u961f\uff0c\u7ecf\u8fc7\u591a\u5e74\u7684\u6f14\u51fa\u79ef\u7d2f\u7ec8\u4e8e\u5728\u4eca\u5e74\u53d1\u884c\u4e86\u4e50\u961f\u7684\u7b2c\u4e00\u5f20\u540c\u540d\u4e13\u8f91\u3002\u867d\u8bf4\u662f\u8ff7\u5e7b\u6447\u6eda\uff0c\u4f46\u5982\u679c\u4ece\u65cb\u5f8b\u4e0a\u8bb2\u7edd\u5bf9\u662f\u975e\u5e38\u300c\u597d\u542c\u300d\u7684\u3002\u5982\u679c\u4f60\u6709\u5174\u8da3\u8d2d\u4e70\u5b9e\u4f53\u5531\u7247\uff08\u9ed1\u80f6\u3001\u78c1\u5e26\u3001CD \u90fd\u6709\uff09\uff0c\u76ee\u524d\u53ef\u4ee5\u5728\u5317\u4eac\u7684 fRUITYSPACE\u3001fRUITYSHOP\u3001\u72ec\u97f3\u5531\u7247\uff0c\u4e0a\u6d77\u7684 Daily Vinyl\uff0c\u91d1\u534e\u7684 Wave \u8fd9\u51e0\u4e2a\u5730\u65b9\u8d2d\u4e70\u3002"})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>t,x:()=>a});var o=n(6540);const r={},s=o.createContext(r);function t(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);