"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[780],{5493:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>c});var n=t(2625),r=t(4848),i=t(8453);const a={title:"Maybe News Issue #1",date:"2020-05-21 17:34:22 +0800",tags:["maybe news"]},o=void 0,l={authorsImageUrls:[]},c=[{value:"CFS: A Distributed File System for Large Scale Container Platforms",id:"cfs-a-distributed-file-system-for-large-scale-container-platforms",level:2},{value:"tensorflow/community #237: RFC: Sparse Domain Isolation for Supporting large-scale Sparse Weights Training",id:"tensorflowcommunity-237-rfc-sparse-domain-isolation-for-supporting-large-scale-sparse-weights-training",level:2},{value:"\u6df1\u5165\u4e91\u539f\u751f AI\uff1a\u57fa\u4e8e Alluxio \u6570\u636e\u7f13\u5b58\u7684\u5927\u89c4\u6a21\u6df1\u5ea6\u5b66\u4e60\u8bad\u7ec3\u6027\u80fd\u4f18\u5316",id:"\u6df1\u5165\u4e91\u539f\u751f-ai\u57fa\u4e8e-alluxio-\u6570\u636e\u7f13\u5b58\u7684\u5927\u89c4\u6a21\u6df1\u5ea6\u5b66\u4e60\u8bad\u7ec3\u6027\u80fd\u4f18\u5316",level:2},{value:"Rob Pike interview: \u201cGo has indeed become the language of cloud infrastructure\u201d",id:"rob-pike-interview-go-has-indeed-become-the-language-of-cloud-infrastructure",level:2},{value:"\u5b64\u82b3\u300c\u81ea\u8d4f\u300d\uff1a\u76ef\u978b\u97f3\u4e50\u7684\u524d\u4e16\u4e0e\u4eca\u751f",id:"\u5b64\u82b3\u81ea\u8d4f\u76ef\u978b\u97f3\u4e50\u7684\u524d\u4e16\u4e0e\u4eca\u751f",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u300cMaybe News\u300d\u662f\u4e00\u4e2a\u5b9a\u671f\uff08\u6216\u8bb8\u4e0d\u5b9a\u671f\uff09\u5206\u4eab\u4e00\u4e9b\u53ef\u80fd\u662f\u65b0\u95fb\u7684\u77e5\u8bc6\u7684",(0,r.jsx)(s.a,{href:"/blog/tags/maybe-news",children:"\u7cfb\u5217\u6587\u7ae0"}),"\uff0c\u540d\u5b57\u6765\u6e90\u4e8e\u6211\u975e\u5e38\u559c\u6b22\u7684\u4e00\u4e2a\u56fd\u5185\u7684\u97f3\u4e50\u5382\u724c",(0,r.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Maybe_Mars",children:"\u300c\u5175\u9a6c\u53f8\u300d"}),"\uff08Maybe Mars\uff09\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(s.a,{href:"https://maybe.news",children:"\u90ae\u4ef6\u8ba2\u9605"}),"\u5b83\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"cfs-a-distributed-file-system-for-large-scale-container-platforms",children:"CFS: A Distributed File System for Large Scale Container Platforms"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://dl.acm.org/doi/10.1145/3299869.3314046",children:"[\u94fe\u63a5]"})}),"\n",(0,r.jsxs)(s.p,{children:["\u8ddf",(0,r.jsx)(s.a,{href:"https://blog.xiaogaozi.org/2020/04/26/weekly-reading-list-issue-1/",children:"\u4e0a\u6b21\u4ecb\u7ecd"}),"\u7684 FoundationDB Record Layer \u4e00\u6837\uff0c\u8fd9\u7bc7\u6765\u81ea\u4eac\u4e1c\u56e2\u961f\u7684\u8bba\u6587\u4e5f\u662f\u53d1\u8868\u5728 SIGMOD 2019\uff0c\u4ecb\u7ecd\u4e86\u4e00\u4e2a\u4e3a\u5927\u89c4\u6a21\u5bb9\u5668\u5e73\u53f0\u8bbe\u8ba1\u7684\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"\u7cfb\u7edf\u6574\u4f53\u7531 3 \u90e8\u5206\u7ec4\u6210\uff1a\u5143\u6570\u636e\u5b50\u7cfb\u7edf\uff08metadata subsystem\uff09\u3001\u6570\u636e\u5b50\u7cfb\u7edf\uff08data subsystem\uff09\u3001\u8d44\u6e90\u7ba1\u7406\u5668\uff08resource manager\uff09\u3002\u5143\u6570\u636e\u5b50\u7cfb\u7edf\u8d1f\u8d23\u7ef4\u62a4 inode \u548c dentry\uff08directory entry\uff09\uff0c\u6570\u636e\u5b50\u7cfb\u7edf\u8d1f\u8d23\u5b58\u50a8\u6570\u636e\u5757\uff0c\u8d44\u6e90\u7ba1\u7406\u5668\u8d1f\u8d23\u5904\u7406\u5ba2\u6237\u7aef\u7684\u5404\u79cd\u6587\u4ef6\u64cd\u4f5c\u8bf7\u6c42\u4ee5\u53ca\u7ef4\u62a4\u524d\u9762\u4e24\u4e2a\u5b50\u7cfb\u7edf\u7684\u72b6\u6001\u3002\u5143\u6570\u636e\u5b50\u7cfb\u7edf\u548c\u6570\u636e\u5b50\u7cfb\u7edf\u90fd\u662f\u591a partition \u7684\u5206\u5e03\u5f0f\u7cfb\u7edf\uff0c\u591a\u4e2a\u5143\u6570\u636e\u548c\u6570\u636e\u7684 partition \u903b\u8f91\u4e0a\u5171\u540c\u7ec4\u6210\u4e00\u4e2a\u5377\uff08volume\uff09\uff0c\u8fd9\u4e2a\u5377\u5373\u662f\u5bf9\u5ba2\u6237\u7aef\uff08\u5bb9\u5668\uff09\u53ef\u89c1\u7684\u5b58\u50a8\u5355\u5143\u5e76\u4e14\u53ef\u4ee5\u88ab\u6302\u8f7d\uff0c\u901a\u8fc7\u4f20\u7edf\u7684 POSIX \u63a5\u53e3\u8bbf\u95ee\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u56e0\u4e3a\u4e0a\u8ff0 3 \u90e8\u5206\u7ec4\u4ef6\u5185\u90e8\u5176\u5b9e\u90fd\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7cfb\u7edf\uff0c\u56e0\u6b64\u90fd\u7528\u5230\u4e86 Raft \u4f5c\u4e3a\u4e00\u81f4\u6027\u534f\u8bae\uff0c\u8d44\u6e90\u7ba1\u7406\u5668\u8fd8\u7528\u5230\u4e86 RocksDB \u4f5c\u4e3a\u672c\u5730\u6301\u4e45\u5316\u5b58\u50a8\u3002\u7a0d\u5fae\u7279\u6b8a\u7684\u662f\u6570\u636e\u5b50\u7cfb\u7edf\u6839\u636e\u4e0d\u540c\u7c7b\u578b\u7684\u5199\u64cd\u4f5c\u9009\u62e9\u4e86\u4e0d\u540c\u7684\u590d\u5236\u65b9\u6848\uff0c\u8bba\u6587\u91cc\u628a\u8fd9\u4e2a\u53eb\u505a Scenario-Aware Replication\uff0c\u5177\u4f53\u8bb2\u5c31\u662f\u987a\u5e8f\u5199\u64cd\u4f5c\uff08\u6bd4\u5982 append\uff09\u7528\u7684\u662f primary-backup\uff0c\u800c\u8986\u76d6\uff08overwrite\uff09\u64cd\u4f5c\u7528\u7684\u662f Raft\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u7cfb\u7edf\u7684\u53e6\u4e00\u4e2a\u4eae\u70b9\u662f\u57fa\u4e8e\u8d44\u6e90\u5229\u7528\u7387\u7684 partition \u5206\u914d\u7b56\u7565\uff0c\u8bba\u6587\u4e2d\u53eb\u505a Utilization-Based Placement\u3002\u4f20\u7edf\u7684 partition \u5206\u914d\u7b56\u7565\u901a\u5e38\u662f\u54c8\u5e0c\uff0c\u8fd9\u79cd\u7b56\u7565\u7684\u4f18\u70b9\u662f\u7b80\u5355\u4f46\u662f\u5f53\u6269\u7f29\u5bb9\u65f6\u5fc5\u987b\u8fdb\u884c rebalance\u3002CFS \u7684\u505a\u6cd5\u662f\u5143\u6570\u636e\u548c\u6570\u636e\u5b50\u7cfb\u7edf\u5b9a\u671f\u4e0a\u62a5\u5185\u5b58\u3001\u78c1\u76d8\u4f7f\u7528\u7387\u5230\u8d44\u6e90\u7ba1\u7406\u5668\uff0c\u5f53\u9700\u8981\u521b\u5efa\u65b0\u7684 partition \u65f6\u6839\u636e\u8d44\u6e90\u5229\u7528\u7387\u9009\u62e9\u6700\u4f4e\u7684\u90a3\u4e2a\u8282\u70b9\uff0c\u8fd9\u6837\u8bbe\u8ba1\u7684\u597d\u5904\u662f\u4e0d\u518d\u9700\u8981 rebalance\u3002\u4f46\u662f\u5bf9\u4e8e\u8fd9\u79cd\u8bbe\u8ba1\u65b9\u6848\u662f\u5426\u4f1a\u9020\u6210\u6570\u636e\u4e0d\u5747\u8861\u8868\u793a\u5b58\u7591\uff0c\u8bba\u6587\u4e2d\u4e5f\u6ca1\u6709\u505a\u8fc7\u591a\u8bba\u8ff0\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u4e3a\u4e86\u5c3d\u91cf\u51cf\u5c11\u5ba2\u6237\u7aef\u7684\u7f51\u7edc\u4ea4\u4e92\uff0c\u4e0d\u8ba9\u67d0\u4e2a\u7cfb\u7edf\u7ec4\u4ef6\u6210\u4e3a\u74f6\u9888\uff0c\u5ba2\u6237\u7aef\u4f1a\u7f13\u5b58\u5143\u6570\u636e\u5b50\u7cfb\u7edf\u3001\u6570\u636e\u5b50\u7cfb\u7edf\u548c\u8d44\u6e90\u7ba1\u7406\u5668\u7684\u4fe1\u606f\u5230\u672c\u5730\uff0c\u5f53\u6267\u884c\u6587\u4ef6\u64cd\u4f5c\u65f6\u4f1a\u4f18\u5148\u8bfb\u53d6\u672c\u5730\u7f13\u5b58\u3002\u5f53\u7136\u67d0\u4e9b\u7ec4\u4ef6\uff08\u6bd4\u5982\u8d44\u6e90\u7ba1\u7406\u5668\uff09\u8fd8\u662f\u6709\u53ef\u80fd\u5728\u67d0\u4e00\u5929\u6210\u4e3a\u74f6\u9888\uff0c\u4f46\u662f\u57fa\u4e8e\u4eac\u4e1c\u7684\u7ecf\u9a8c\u8fd9\u4ef6\u4e8b\u60c5\u57fa\u672c\u4e0a\u4e0d\u4f1a\u53d1\u751f\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u5728\u4e0e Ceph \u7684\u8bc4\u6d4b\u4e2d\uff0cCFS \u5e73\u5747\u6709 3 \u500d\u7684 IOPS \u63d0\u5347\uff0c\u7279\u522b\u662f\u591a\u5ba2\u6237\u7aef\u548c\u968f\u673a\u8bfb\u5199\u7684\u573a\u666f\u3002\u8fd9\u5f88\u5927\u7a0b\u5ea6\u4e0a\u5f97\u76ca\u4e8e\u5143\u6570\u636e\u548c\u6570\u636e\u8282\u70b9\u5206\u79bb\u7684\u8bbe\u8ba1\uff0c\u4e14 CFS \u7684\u5143\u6570\u636e\u662f\u5168\u5185\u5b58\u5b58\u50a8\uff0c\u800c Ceph \u5e76\u4e0d\u662f\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u4e00\u76f4\u90fd\u662f\u6bd4\u8f83\u91cd\u8981\u7684\u57fa\u7840\u7ec4\u4ef6\uff0c\u5728\u5206\u5e03\u5f0f\u6570\u636e\u5e93\u3001\u5927\u6570\u636e\u3001\u673a\u5668\u5b66\u4e60\u9886\u57df\u6709\u5e7f\u6cdb\u5e94\u7528\u3002\u5e38\u89c1\u7684\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u5982 HDFS\u3001Ceph\uff0c\u5728\u5982\u4eca\u8fd9\u4e2a\u5168\u9762\u63a8\u884c\u5bb9\u5668\u5316\u7684\u65f6\u4ee3\u8d8a\u6765\u8d8a\u663e\u5f97\u6349\u895f\u89c1\u8098\u3002\u5bb9\u5668\u5316\u4e00\u4e2a\u5f88\u5927\u7684\u7279\u70b9\u662f\u5feb\u901f\u6269\u7f29\u5bb9\uff0c\u4f20\u7edf\u7684\u5b58\u50a8\u7cfb\u7edf\u5728\u8fd9\u4e00\u70b9\u4e0a\u662f\u975e\u5e38\u4e0d\u53cb\u597d\u7684\uff0c\u56e0\u6b64\u624d\u4f1a\u6709\u8d8a\u6765\u8d8a\u591a\u9488\u5bf9\u5bb9\u5668\u5316\u573a\u666f\u7684\u57fa\u7840\u7ec4\u4ef6\u8bde\u751f\uff08\u5177\u4f53\u53ef\u4ee5\u8bbf\u95ee ",(0,r.jsx)(s.a,{href:"https://www.cncf.io",children:"CNCF"})," \u67e5\u770b\uff09\uff0c\u8fd9\u91cc\u4ecb\u7ecd\u7684 CFS \u662f\u4e00\u4e2a\u4f8b\u5b50\uff0c\u53e6\u4e00\u4e2a\u7c7b\u4f3c\u7684\u662f ",(0,r.jsx)(s.a,{href:"https://juicefs.com",children:"JuiceFS"}),"\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["CFS \u76ee\u524d\u5c5e\u4e8e CNCF \u4e0b\u7684 ",(0,r.jsx)(s.a,{href:"https://www.cncf.io/sandbox-projects",children:"sandbox \u9879\u76ee"}),"\uff0c\u4e14\u5df2\u7ecf",(0,r.jsx)(s.a,{href:"https://github.com/chubaofs/chubaofs",children:"\u5f00\u6e90"}),"\uff0c\u4f7f\u7528 Go \u8bed\u8a00\u7f16\u5199\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"tensorflowcommunity-237-rfc-sparse-domain-isolation-for-supporting-large-scale-sparse-weights-training",children:"tensorflow/community #237: RFC: Sparse Domain Isolation for Supporting large-scale Sparse Weights Training"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/tensorflow/community/pull/237",children:"[\u94fe\u63a5]"})}),"\n",(0,r.jsxs)(s.p,{children:["\u63a8\u8350\u7cfb\u7edf\u5927\u89c4\u6a21\u7a00\u758f\u7279\u5f81\u5206\u5e03\u5f0f\u8bad\u7ec3\u4e00\u76f4\u662f\u5de5\u4e1a\u754c\u4e00\u4ef6\u6709\u6311\u6218\u7684\u4e8b\u60c5\uff0c\u5927\u516c\u53f8\u5185\u90e8\u81ea\u7814\u7684\u8bad\u7ec3\u6846\u67b6\u5927\u591a\u5df2\u7ecf\u89e3\u51b3\u4e86\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u662f\u5728\u5f00\u6e90\u793e\u533a\u95ee\u9898\u4ecd\u7136\u5b58\u5728\u3002TensorFlow \u4f5c\u4e3a\u4e5f\u8bb8\u76ee\u524d\u6700\u6d41\u884c\u7684\u6df1\u5ea6\u5b66\u4e60\u8bad\u7ec3\u6846\u67b6\uff0c\u793e\u533a\u91cc\u4e5f\u65e9\u6709\u76f8\u5173\u7684\u8ba8\u8bba\uff08\u6bd4\u5982 ",(0,r.jsx)(s.a,{href:"https://github.com/tensorflow/tensorflow/issues/19324",children:"#19324"}),"\u3001",(0,r.jsx)(s.a,{href:"https://github.com/tensorflow/tensorflow/issues/24539",children:"#24539"}),"\u3001",(0,r.jsx)(s.a,{href:"https://github.com/tensorflow/tensorflow/pull/24915",children:"#24915"}),"\uff09\uff0c\u4f46\u57fa\u672c\u90fd\u4ee5\u70c2\u5c3e\u544a\u7ec8\u3002\u6700\u65b0\u7684 RFC #237 \u6765\u81ea\u817e\u8baf\uff0c\u533a\u522b\u4e8e\u73b0\u6709\u7684\u4e00\u4e9b\u5f00\u6e90\u5b9e\u73b0\uff08\u6bd4\u5982\u963f\u91cc\u5df4\u5df4\u7684 ",(0,r.jsx)(s.a,{href:"https://github.com/alibaba/x-deeplearning",children:"XDL"}),"\u3001\u5b57\u8282\u8df3\u52a8\u7684 ",(0,r.jsx)(s.a,{href:"https://github.com/bytedance/byteps",children:"BytePS"}),"\u3001\u8682\u8681\u91d1\u670d\u7684 ",(0,r.jsx)(s.a,{href:"https://github.com/sql-machine-learning/elasticdl",children:"ElasticDL"}),"\uff09\u5b8c\u5168\u81ea\u5df1\u91cd\u65b0\u9020\u4e86\u4e00\u4e2a parameter server\uff0c\u817e\u8baf\u7684\u65b9\u6848\u6700\u5927\u9650\u5ea6\u590d\u7528\u4e86 TensorFlow \u73b0\u6709\u7684\u7ec4\u4ef6\uff0c\u5bf9\u7528\u6237\u7684\u4ee3\u7801\u4fb5\u5165\u4e5f\u6700\u5c0f\u3002\u76ee\u524d\u8fd9\u4e2a RFC \u8fd8\u5728\u8ba8\u8bba\u4e2d\uff0c\u6709\u5174\u8da3\u53ef\u4ee5\u8ba2\u9605 PR\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u6df1\u5165\u4e91\u539f\u751f-ai\u57fa\u4e8e-alluxio-\u6570\u636e\u7f13\u5b58\u7684\u5927\u89c4\u6a21\u6df1\u5ea6\u5b66\u4e60\u8bad\u7ec3\u6027\u80fd\u4f18\u5316",children:"\u6df1\u5165\u4e91\u539f\u751f AI\uff1a\u57fa\u4e8e Alluxio \u6570\u636e\u7f13\u5b58\u7684\u5927\u89c4\u6a21\u6df1\u5ea6\u5b66\u4e60\u8bad\u7ec3\u6027\u80fd\u4f18\u5316"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://mp.weixin.qq.com/s/2Pj8erPbYuMo7mBJvweJgQ",children:"[\u94fe\u63a5]"})}),"\n",(0,r.jsx)(s.p,{children:"\u673a\u5668\u5b66\u4e60\u6a21\u578b\u8bad\u7ec3\u7531\u4e8e\u4f9d\u8d56\u5927\u91cf\u7684\u6570\u636e\u4f5c\u4e3a\u8f93\u5165\uff0c\u56e0\u6b64\u6570\u636e I/O \u7684\u6027\u80fd\u4f1a\u76f4\u63a5\u5f71\u54cd\u6a21\u578b\u8bad\u7ec3\u7684\u6548\u7387\u3002\u6709\u65f6\u95f4\u4f1a\u53d1\u73b0\u8ba1\u7b97\u8bbe\u5907\u7684\u7b97\u529b\u5347\u7ea7\u4e86\uff0c\u4f46\u662f\u6570\u636e I/O \u8ddf\u4e0d\u4e0a\u4e86\uff0c\u53cd\u800c\u62d6\u6162\u4e86\u6574\u4e2a\u8bad\u7ec3\u6d41\u7a0b\u3002\u963f\u91cc\u4e91\u56e2\u961f\u5206\u4eab\u7684\u8fd9\u7bc7\u6587\u7ae0\u4fbf\u662f\u4ed6\u4eec\u5728\u4f7f\u7528 Alluxio\uff08\u8bd5\u56fe\uff09\u52a0\u901f\u6570\u636e I/O \u7684\u8fc7\u7a0b\u4e2d\u7684\u7ecf\u9a8c\uff0c\u867d\u7136\u6700\u540e\u7684\u4f18\u5316\u7ed3\u679c\u6027\u80fd\u6307\u6807\u5176\u5b9e\u4e5f\u53ea\u662f\u57fa\u672c\u8ddf\u672c\u5730\u8bfb\u53d6\u6301\u5e73\u3002"}),"\n",(0,r.jsx)(s.h2,{id:"rob-pike-interview-go-has-indeed-become-the-language-of-cloud-infrastructure",children:"Rob Pike interview: \u201cGo has indeed become the language of cloud infrastructure\u201d"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://evrone.com/rob-pike-interview",children:"[\u94fe\u63a5]"})}),"\n",(0,r.jsx)(s.p,{children:"\u6ca1\u5565\u597d\u4ecb\u7ecd\u7684\u4e86\uff0c\u503c\u5f97\u4e00\u8bfb\u7684\u4e00\u7bc7\u91c7\u8bbf\u3002\u6587\u4e2d\u6709\u4e24\u4e2a\u6709\u8da3\u7684\u95ee\u9898\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u5bf9\u4e8e Rust \u5ba3\u79f0\u7684\u300c\u6ca1\u6709 GC\u300d\u7684\u8bbe\u8ba1\u6709\u4ec0\u4e48\u770b\u6cd5"}),"\uff1aRob Pike \u53ea\u662f\u8868\u793a\u4e86\u4ed6\u5bf9 Rust \u5f88\u611f\u5174\u8da3\uff0c\u5176\u5b83\u610f\u89c1\u4e0d\u4fbf\u53d1\u8868\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"\u5982\u679c\u53ef\u4ee5\u65f6\u95f4\u65c5\u884c\u5230\u6700\u521d\u8bbe\u8ba1 Go \u7684\u65f6\u5019\u60f3\u7ed9\u81ea\u5df1\u4e00\u4e2a\u4ec0\u4e48\u5fe0\u544a"}),"\uff1a\u65e0\u89c6\u90a3\u4e9b\u4ec7\u6068\u8005\uff08haters\uff09\uff0c\u53ea\u9700\u8981\u8046\u542c\u90a3\u4e9b\u7406\u89e3\u4ee5\u53ca\u548c\u4f60\u6709\u5171\u540c\u76ee\u6807\u7684\u4eba\u7684\u58f0\u97f3\u3002\u4e0d\u53ef\u80fd\u6bcf\u4e00\u4e2a\u4eba\u90fd\u8ba4\u540c\u4f60\u6b63\u5728\u505a\u7684\u4e8b\u60c5\uff0c\u4f46\u662f\u90a3\u4e9b\u9f13\u52b1\u4f60\u524d\u8fdb\u7684\u4eba\u4f1a\u662f\u63d0\u4f9b\u7ed9\u4f60\u975e\u5e38\u68d2\uff08fantastic\uff09\u7684\u60f3\u6cd5\u3001\u80fd\u91cf\u548c\u7075\u611f\u7684\u6e90\u6cc9\u3002"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5b64\u82b3\u81ea\u8d4f\u76ef\u978b\u97f3\u4e50\u7684\u524d\u4e16\u4e0e\u4eca\u751f",children:"\u5b64\u82b3\u300c\u81ea\u8d4f\u300d\uff1a\u76ef\u978b\u97f3\u4e50\u7684\u524d\u4e16\u4e0e\u4eca\u751f"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://www.gcores.com/articles/121368",children:"[\u4e0a]"})," ",(0,r.jsx)(s.a,{href:"https://www.gcores.com/articles/123770",children:"[\u4e0b]"})]}),"\n",(0,r.jsx)(s.p,{children:"\u8fd9\u4e24\u7bc7\u6587\u7ae0\u6765\u81ea\u300c\u7adf\u7136\u8fd8\u80fd\u804a\u6e38\u620f\u300d\u7684\u673a\u6838\uff0c\u76f8\u5bf9\u7cfb\u7edf\u5730\u4ecb\u7ecd\u4e86\u300c\u76ef\u978b\uff08shoegaze\uff09\u300d\u8fd9\u79cd\u97f3\u4e50\u98ce\u683c\uff0c\u4f5c\u4e3a\u76ee\u524d\u53ef\u80fd\u662f\u9664\u4e86\u540e\u670b\u514b\u4ee5\u5916\u6211\u6700\u559c\u6b22\u7684\u97f3\u4e50\u98ce\u683c\u975e\u5e38\u9ad8\u5174\u80fd\u591f\u6709\u4eba\u79d1\u666e\uff0c\u7a0d\u5fae\u6b20\u7f3a\u7684\u662f\u6587\u4e2d\u6ca1\u6709\u63d0\u5230\u4efb\u4f55\u4e2d\u56fd\u7684\u4e50\u961f\u3002"})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var n=t(6540);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}},2625:e=>{e.exports=JSON.parse('{"permalink":"/blog/2020/05/21/maybe-news-issue-1","source":"@site/blog/2020-05-21-maybe-news-issue-1.md","title":"Maybe News Issue #1","description":"\u300cMaybe News\u300d\u662f\u4e00\u4e2a\u5b9a\u671f\uff08\u6216\u8bb8\u4e0d\u5b9a\u671f\uff09\u5206\u4eab\u4e00\u4e9b\u53ef\u80fd\u662f\u65b0\u95fb\u7684\u77e5\u8bc6\u7684\u7cfb\u5217\u6587\u7ae0\uff0c\u540d\u5b57\u6765\u6e90\u4e8e\u6211\u975e\u5e38\u559c\u6b22\u7684\u4e00\u4e2a\u56fd\u5185\u7684\u97f3\u4e50\u5382\u724c\u300c\u5175\u9a6c\u53f8\u300d\uff08Maybe Mars\uff09\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u90ae\u4ef6\u8ba2\u9605\u5b83\u3002","date":"2020-05-21T17:34:22.000Z","tags":[{"inline":true,"label":"maybe news","permalink":"/blog/tags/maybe-news"}],"readingTime":8.305,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Maybe News Issue #1","date":"2020-05-21 17:34:22 +0800","tags":["maybe news"]},"unlisted":false,"prevItem":{"title":"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u4e94\uff09\uff1a\u5206\u5e03\u5f0f","permalink":"/blog/2020/05/25/how-to-design-a-distributed-index-framework-part-5"},"nextItem":{"title":"\u5982\u4f55\u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u4e00\u4e2a\u5206\u5e03\u5f0f\u7d22\u5f15\u6846\u67b6\uff08\u56db\uff09\uff1a\u7d22\u5f15\u66f4\u65b0","permalink":"/blog/2020/05/13/how-to-design-a-distributed-index-framework-part-4"}}')}}]);