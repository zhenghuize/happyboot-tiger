import{_ as b}from"./HbAdminDemoCard.fa92e6e1.js";import{V as E,f as _,g as x,h as u,r as f,w as B,az as D,v as g,k as v,i as p,l as t,U as N,t as S,Z as L,A as $,T as M,B as V,C as H,e as I,N as T,m as X,x as z}from"./vendor.e99578e4.js";import{_ as F,c as U}from"./index.49999355.js";import{A as O}from"./ArrowForward.ece95d74.js";import"./xml.9e2794d0.js";const W={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},q=u("path",{d:"M368 192H192v-80a64 64 0 1 1 128 0a16 16 0 0 0 32 0a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64z",fill:"currentColor"},null,-1),Z=[q];var j=E({name:"LockOpen",render:function(c,n){return _(),x("svg",W,Z)}});const G=a=>(V("data-v-1af97c8a"),a=a(),H(),a),J={key:0,class:"hb-screen-locker"},K={class:"hb-screen-avatar"},P={class:"hb-screen-nickname"},Q=G(()=>u("div",{class:"hb-screen-locker-placeholder"}," \u6ED1\u52A8\u89E3\u9501 ",-1)),R={props:{open:{type:Boolean,required:!1,default:!1}},emits:["update:open","unlock"],setup(a,{emit:c}){const n=a,d=f(null),r=f(null);let m=0,e=0,s=0,l=0;const o=f(!1);function C(i){e=0,s=0,l=0,o.value=!1,r.value.style.transition="",m=i.screenX,s=d.value.clientWidth-r.value.clientWidth-10,document.addEventListener("mousemove",A),document.addEventListener("mouseup",h)}function A(i){e=i.screenX-m,o.value&&(e=s),e<=l&&(e=l),e>=s&&(e=s,o.value||(o.value=!0,setTimeout(()=>{c("update:open",!1),c("unlock")},300))),n.open&&(r.value.style.transform=`translateX(${e}px)`)}function h(i){document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",h),o.value||(e=0,s=0,l=0,o.value=!1,n.open&&(r.value.style.transition="all 0.4s",r.value.style.transform=`translateX(${e}px)`))}B(()=>n.open,()=>{n.open&&(o.value=!1)});const y=D(()=>o.value?j:O),k=U.getUser();return(i,se)=>(_(),g(M,{"enter-active-class":"hb-screen-locker-lock","leave-active-class":"hb-screen-locker-unlock"},{default:v(()=>{var w;return[n.open?(_(),x("div",J,[u("div",K,[p(t(N),{round:"",size:128,src:(w=t(k))==null?void 0:w.avatar},null,8,["src"]),u("div",P,S(t(k).nickname),1)]),u("div",{ref_key:"slider",ref:d,class:"hb-screen-slider"},[Q,u("div",{ref_key:"sliderButton",ref:r,class:"hb-screen-slider-button",onMousedown:C},[p(t(L),{size:25,component:t(y)},null,8,["component"])],544)],512)])):$("v-if",!0)]}),_:1}))}};var Y=F(R,[["__scopeId","data-v-1af97c8a"]]);const ee=z(" \u6253\u5F00\u9501\u5C4F "),re={setup(a){const c=f(!1),n=I();function d(){n.success("\u89E3\u9501\u6210\u529F")}const m=unescape("%3Cscript%20setup%3E%0Aimport%20%7B%20NButton%2C%20NSpace%2C%20useMessage%20%7D%20from%20%27naive-ui%27%0Aimport%20%7B%20ref%20%7D%20from%20%27vue%27%0Aimport%20HbAdminScreenLocker%20from%20%27@/components/HbAdminScreenLocker%27%0A%0Aconst%20show%20%3D%20ref%28false%29%0Aconst%20message%20%3D%20useMessage%28%29%0Afunction%20unlock%20%28%29%20%7B%0A%20%20message.success%28%27%u89E3%u9501%u6210%u529F%27%29%0A%7D%0A%3C/script%3E%0A%3Ctemplate%3E%0A%20%20%3Chb-admin-screen-locker%0A%20%20%20%20v-model%3Aopen%3D%22show%22%0A%20%20%20%20@unlock%3D%22unlock%22%0A%20%20/%3E%0A%20%20%3Cn-space%20style%3D%22margin-top%3A%2010px%22%3E%0A%20%20%20%20%3Cn-button%0A%20%20%20%20%20%20type%3D%22info%22%0A%20%20%20%20%20%20@click%3D%22show%3Dtrue%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%u6253%u5F00%u9501%u5C4F%0A%20%20%20%20%3C/n-button%3E%0A%20%20%3C/n-space%3E%0A%3C/template%3E%0A");return(e,s)=>(_(),g(t(b),{title:"\u57FA\u672C\u7528\u6CD5",code:t(m)},{default:v(()=>[p(t(Y),{open:c.value,"onUpdate:open":s[0]||(s[0]=l=>c.value=l),onUnlock:d},null,8,["open"]),p(t(X),{style:{"margin-top":"10px"}},{default:v(()=>[p(t(T),{type:"info",onClick:s[1]||(s[1]=l=>c.value=!0)},{default:v(()=>[ee]),_:1})]),_:1})]),_:1},8,["code"]))}};export{re as default};
