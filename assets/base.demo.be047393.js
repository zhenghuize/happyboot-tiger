import{_ as C}from"./HbAdminDemoCard.d2318ff1.js";import{_ as E}from"./index.18a81aa8.js";import{r as u,w as H,ax as y,o as D,aD as L,f as r,g as d,F as x,s as B,Z as k,v as w,k as _,i as I,h as R,l as b}from"./vendor.f2dad3e6.js";import"./xml.9e2794d0.js";const S={props:{list:{type:Array,default:()=>[]},animation:{type:Number,default:300},interval:{type:Number,default:500}},setup(g){const s=g,l=u(),p=[];function A(e){p.push(e)}const a=u([]);let n=0,o=[],c=null,i=0,m=0;H(s.list,()=>{c&&clearInterval(c),h()});function h(){a.value=[],o=[];for(let e=0;e<s.list.length;e++)a.value.push(s.list[e]);y(()=>{n=l.value.offsetHeight;for(let t=0;t<s.list.length;t++)o.push(p[t].offsetHeight);let e=0;for(let t=0;t<s.list.length;t++)e+=o[t];if(e>n){for(let t=0;t<s.list.length;t++)a.value.push(s.list[t]);j()}})}function j(){c=setInterval(()=>{let t=0;for(let f=0;f<=s.animation;f++)t++,i=i+o[m]/s.animation,e(i,t);m++,m===s.list.length&&(m=0,i=0,e(0,1))},s.interval+s.animation);function e(t,f){setTimeout(()=>{l.value&&(l.value.scrollTop=t)},f)}}return D(()=>{h(),l.value.addEventListener("mousewheel",e=>{e.preventDefault()}),l.value.addEventListener("mouseenter",e=>{clearInterval(c)}),l.value.addEventListener("mouseleave",e=>{j()})}),L(()=>{clearInterval(c)}),(e,t)=>(r(),d("div",{ref_key:"HbRollWrap",ref:l,class:"hb-roll-wrap"},[(r(!0),d(x,null,B(a.value,(f,v)=>(r(),d("div",{ref_for:!0,ref:A,key:v},[k(e.$slots,"default",{data:f},void 0,!0)]))),128))],512))}};var N=E(S,[["__scopeId","data-v-4177033c"]]);const T=["src"],M={setup(g){const s=u(["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"]),p=unescape("%3Cscript%20setup%3E%0Aimport%20HbAdminScrollList%20from%20%27@/components/HbAdminScrollList%27%0Aimport%20%7B%20ref%20%7D%20from%20%27vue%27%0A%0Aconst%20list%20%3D%20ref%28%5B%0A%20%20%27https%3A//fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg%27%0A%5D%29%0A%0A%3C/script%3E%0A%3Ctemplate%3E%0A%20%20%3Chb-admin-scroll-list%0A%20%20%20%20style%3D%22height%3A%20600px%22%0A%20%20%20%20%3Alist%3D%22list%22%0A%20%20%20%20%3Aanimation%3D%22500%22%0A%20%20%20%20%3Ainterval%3D%221000%22%0A%20%20%3E%0A%20%20%20%20%3Ctemplate%20%23default%3D%22scope%22%3E%0A%20%20%20%20%20%20%3Cimg%0A%20%20%20%20%20%20%20%20%3Asrc%3D%22scope.data%22%0A%20%20%20%20%20%20%20%20style%3D%22height%3A%20100px%3B%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C/template%3E%0A%20%20%3C/hb-admin-scroll-list%3E%0A%3C/template%3E%0A");return(A,a)=>(r(),w(b(C),{title:"\u57FA\u672C\u7528\u6CD5",code:b(p)},{default:_(()=>[I(b(N),{style:{height:"600px"},list:s.value,animation:500,interval:1e3},{default:_(n=>[R("img",{src:n.data,style:{height:"100px"}},null,8,T)]),_:1},8,["list"])]),_:1},8,["code"]))}};export{M as default};
