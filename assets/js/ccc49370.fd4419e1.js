"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3249],{294:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var i=t(4164),s=t(2960),a=t(811),r=t(9856),l=t(4848);function o(e){let{className:n}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,i.A)(n,a.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},807:(e,n,t)=>{t.d(n,{A:()=>d});t(6540);var i=t(4164),s=t(2960),a=t(811),r=t(9856),l=t(4848);function o(e){let{className:n}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Yh,{}),className:(0,i.A)(n,a.G.common.draftBanner),children:(0,l.jsx)(s.TT,{})})}var c=t(294);function d(e){let{metadata:n}=e;const{unlisted:t,frontMatter:i}=n;return(0,l.jsxs)(l.Fragment,{children:[(t||i.unlisted)&&(0,l.jsx)(c.A,{}),i.draft&&(0,l.jsx)(o,{})]})}},4496:(e,n,t)=>{t.d(n,{A:()=>j});var i=t(6540),s=t(4164),a=t(9762);function r(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):i.push(s)})),i}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>o(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function d(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,i.useRef)(void 0),t=d();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:s,minHeadingLevel:a,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let s=n;s<=t;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:r}),o=c(l,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(7634),h=t(4848);function g(e){let{toc:n,className:t,linkClassName:i,isChild:s}=e;return n.length?(0,h.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,h.jsxs)("li",{children:[(0,h.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const p=i.memo(g);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...u}=e;const g=(0,a.p)(),x=c??g.tableOfContents.minHeadingLevel,f=d??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,i.useMemo)((()=>l({toc:r(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:x,maxHeadingLevel:f});return m((0,i.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:x,maxHeadingLevel:f}}),[s,o,x,f])),(0,h.jsx)(p,{toc:v,className:t,linkClassName:s,...u})}const f={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},v="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function j(e){let{className:n,...t}=e;return(0,h.jsx)("div",{className:(0,s.A)(f.tableOfContents,"thin-scrollbar",n),children:(0,h.jsx)(x,{...t,linkClassName:v,linkActiveClassName:b})})}},2960:(e,n,t)=>{t.d(n,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});t(6540);var i=t(9979),s=t(344),a=t(4848);function r(){return(0,a.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,a.jsx)(s.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,a.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,a.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},1937:(e,n,t)=>{t.r(n),t.d(n,{default:()=>_});var i=t(4848),s=t(6540);function a({id:e,host:n,repo:a,repoId:r,category:l,categoryId:o,mapping:c,term:d,strict:m,reactionsEnabled:u,emitMetadata:h,inputPosition:g,theme:p,lang:x,loading:f}){const[v,b]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{v||t.e(416).then(t.bind(t,416)).then((()=>b(!0)))}),[]),v?(0,i.jsx)("giscus-widget",{id:e,host:n,repo:a,repoid:r,category:l,categoryid:o,mapping:c,term:d,strict:m,reactionsenabled:u,emitmetadata:h,inputposition:g,theme:p,lang:x,loading:f}):null}var r=t(4164),l=t(509),o=t(7918),c=t(811),d=t(8612),m=t(6831);function u(){const{assets:e,metadata:n}=(0,l.e7)(),{title:t,description:s,date:a,tags:r,authors:c,frontMatter:d}=n,{keywords:m}=d,u=e.image??d.image;return(0,i.jsxs)(o.be,{title:t,description:s,keywords:m,image:u,children:[(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"article:published_time",content:a}),c.some((e=>e.url))&&(0,i.jsx)("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,i.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var h=t(344);function g(){const e=(0,l.J_)();return(0,i.jsx)(h.A,{children:(0,i.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var p=t(9979),x=t(9002);function f(e){const{nextItem:n,prevItem:t}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,i.jsx)(x.A,{...t,subLabel:(0,i.jsx)(p.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),n&&(0,i.jsx)(x.A,{...n,subLabel:(0,i.jsx)(p.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}var v=t(807),b=t(4496),j=t(502);const N={commentContainer:"commentContainer_NL3Q"};function A(e){let{sidebar:n,children:t}=e;const{siteConfig:s}=(0,j.A)(),{metadata:r,toc:o}=(0,l.e7)(),{title:c,permalink:u,nextItem:h,prevItem:g,frontMatter:p}=r,{hide_table_of_contents:x,toc_min_heading_level:A,toc_max_heading_level:_}=p;return(0,i.jsxs)(d.A,{sidebar:n,toc:!x&&o.length>0?(0,i.jsx)(b.A,{toc:o,minHeadingLevel:A,maxHeadingLevel:_}):void 0,children:[(0,i.jsx)(v.A,{metadata:r}),(0,i.jsx)(m.A,{children:t}),(h||g)&&(0,i.jsx)(f,{nextItem:h,prevItem:g}),(0,i.jsx)("div",{className:N.commentContainer,children:(0,i.jsx)(a,{id:"comments",repo:"xiaogaozi/xiaogaozi.github.io",repoId:"R_kgDOJJi8hA",category:"Announcements",categoryId:"DIC_kwDOJJi8hM4CoW4g",mapping:"pathname",strict:"1",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"dark",lang:"en",loading:"lazy"})})]})}function _(e){const n=e.content;return(0,i.jsx)(l.in,{content:e.content,isBlogPostPage:!0,children:(0,i.jsxs)(o.e3,{className:(0,r.A)(c.G.wrapper.blogPages,c.G.page.blogPostPage),children:[(0,i.jsx)(u,{}),(0,i.jsx)(g,{}),(0,i.jsx)(A,{sidebar:e.sidebar,children:(0,i.jsx)(n,{})})]})})}},9305:(e,n,t)=>{t.d(n,{A:()=>E});var i=t(6540),s=t(5873),a=t(4164),r=t(9979),l=t(6347),o=t(509),c=t(9762),d=t(4861),m=t(4848);function u(e){let{year:n,yearGroupHeadingClassName:t,children:i}=e;return(0,m.jsxs)("div",{role:"group",children:[(0,m.jsx)(d.A,{as:"h3",className:t,children:n}),i]})}function h(e){let{items:n,yearGroupHeadingClassName:t,ListComponent:i}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(n);return(0,m.jsx)(m.Fragment,{children:e.map((e=>{let[n,s]=e;return(0,m.jsx)(u,{year:n,yearGroupHeadingClassName:t,children:(0,m.jsx)(i,{items:s})},n)}))})}return(0,m.jsx)(i,{items:n})}const g=(0,i.memo)(h);var p=t(7634);const x="sidebar_brwN",f="sidebarItemTitle_r4Q1",v="sidebarItemList_QwSx",b="sidebarItem_lnhn",j="sidebarItemLink_yNGZ",N="sidebarItemLinkActive_oSRm",A="yearGroupHeading_hiiw";function _(e){let{blogId:n}=e;return"blog"===n?(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:(0,a.A)(f,"margin-bottom--md"),children:"Feed"}),(0,m.jsxs)("ul",{className:(0,a.A)(v,"clean-list"),children:[(0,m.jsx)("li",{className:b,children:(0,m.jsx)("a",{href:`/${n}/atom.xml`,className:j,children:"Atom"})},"atom"),(0,m.jsx)("li",{className:b,children:(0,m.jsx)("a",{href:`/${n}/rss.xml`,className:j,children:"RSS"})},"rss"),(0,m.jsx)("li",{className:b,children:(0,m.jsx)("a",{href:`/${n}/feed.json`,className:j,children:"JSON"})},"json")]})]}):null}const C=e=>{let{items:n}=e;return(0,m.jsx)(o.OU,{items:n,ulClassName:(0,a.A)(v,"clean-list"),liClassName:b,linkClassName:j,linkActiveClassName:N})};function y(e){let{sidebar:n}=e;const t=(0,l.zy)().pathname.split("/")[1],i=(0,o.Gx)(n.items);return(0,m.jsx)("aside",{className:"col col--3",children:(0,m.jsxs)("nav",{className:(0,a.A)(x,"thin-scrollbar"),"aria-label":(0,r.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,m.jsx)("div",{className:(0,a.A)(f,"margin-bottom--md"),children:n.title}),(0,m.jsx)(g,{items:i,ListComponent:C,yearGroupHeadingClassName:A}),(0,m.jsx)("div",{className:(0,a.A)(f,"margin-bottom--md"),children:(0,m.jsx)(p.A,{isNavLink:!0,to:`/${t}/archive`,className:j,activeClassName:N,children:"Archive"})}),(0,m.jsx)(_,{blogId:t})]})})}const L=(0,i.memo)(y);var k=t(3828);const H="yearGroupHeading_fvTq",I=e=>{let{items:n}=e;return(0,m.jsx)(o.OU,{items:n,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function T(e){let{sidebar:n}=e;const t=(0,l.zy)().pathname.split("/")[1],i=(0,o.Gx)(n.items);return(0,m.jsxs)("div",{children:[(0,m.jsx)(g,{items:i,ListComponent:I,yearGroupHeadingClassName:H}),(0,m.jsx)("ul",{className:"menu__list",children:(0,m.jsx)("li",{className:"menu__list-item",children:(0,m.jsx)(p.A,{isNavLink:!0,to:`/${t}/archive`,className:"menu__link",activeClassName:"menu__link--active",children:"Archive"})},"archive")})]})}function w(e){return(0,m.jsx)(k.GX,{component:T,props:e})}const O=(0,i.memo)(w);function E(e){let{sidebar:n}=e;const t=(0,s.l)();return n?.items.length?"mobile"===t?(0,m.jsx)(O,{sidebar:n}):(0,m.jsx)(L,{sidebar:n}):null}}}]);