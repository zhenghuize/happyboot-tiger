import{H as S}from"./HbAdminPageLayout.4558f7d4.js";import{A as z,T as g,R as C,S as M}from"./TrashSharp.59972c1e.js";import{D as P,C as T}from"./DocumentOutline.0dc10119.js";import{u as W,r as y,O as A,d as h,q as _,h as t,g as a,i as e,Q as D,R as c,S as r,U as m,k as p,N as o,W as d,l as I,s,t as L,y as G,X as H,Y as R,P as B,_ as n,$ as E}from"./vendor.43ba9716.js";import"./index.0f8fe434.js";const O=s(" \u63CF\u8FF0 "),V=s(" \u89D2\u8272 "),Y=s(" \u65B0\u589E "),$=s(" \u5220\u9664 "),K=s(" \u5237\u65B0\u6570\u636E "),Q=s(" \u67E5\u8BE2 "),U=s("\u91CD\u7F6E"),ee={setup(j){const f=W();function b(l){f.info("\u4F60\u70B9\u51FB\u4E86\u786E\u5B9A")}function k(l){f.info("\u4F60\u70B9\u51FB\u4E86\u53D6\u6D88")}const x=[{type:"selection",disabled(l,i){return l.name==="Edward King 3"}},{title:"\u89D2\u8272",key:"role"},{title:"\u63CF\u8FF0",key:"desc"},{title:"\u5907\u6CE8",key:"remark"},{title:"\u64CD\u4F5C",key:"actions",width:"270",render(l){return n(p,null,{default:()=>[n(o,{tertiary:!0,size:"small"},{default:()=>"\u8BE6\u60C5",icon:()=>n(P)}),n(o,{tertiary:!0,size:"small"},{default:()=>"\u7F16\u8F91",icon:()=>n(T)}),n(E,{onPositiveClick:()=>b(),onNegativeClick:()=>k()},{default:()=>"\u4F60\u786E\u5B9A\u4EE5\u53CA\u80AF\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F",trigger:()=>n(o,{tertiary:!0,size:"small",type:"error"},{default:()=>"\u5220\u9664",icon:()=>n(g)})})]})}}],u=y([]),v=Array.apply(null,{length:200}).map((l,i)=>({key:i,role:`\u89D2\u8272 - ${i}`,desc:"\u6211\u662F\u63CF\u8FF0",remark:"\u5907\u6CE8"+i})),N=A({pageSize:20,showQuickJumper:!0,showSizePicker:!0,pageSizes:[20,50,100],prefix({itemCount:l}){return`\u603B\u6570 ${l}`}});return y([{label:"Everybody's Got Something to Hide Except Me and My Monkey",value:"song0",disabled:!0},{label:"Drive My Car",value:"song1"},{label:"Norwegian Wood",value:"song2"},{label:"You Won't See",value:"song3",disabled:!0},{label:"Nowhere Man",value:"song4"},{label:"Think For Yourself",value:"song5"},{label:"The Word",value:"song6"},{label:"Michelle",value:"song7",disabled:!0},{label:"What goes on",value:"song8"},{label:"Girl",value:"song9"},{label:"I'm looking through you",value:"song10"},{label:"In My Life",value:"song11"},{label:"Wait",value:"song12"}]),(l,i)=>(h(),_(S,null,{default:t(()=>[a(e(B),{style:{height:"100%"},"content-style":"display:flex;flex-direction: column"},{default:t(()=>[a(e(D),null,{default:t(()=>[a(e(c),{"x-gap":"12",cols:4,style:{padding:"5px","box-sizing":"border-box"}},{default:t(()=>[a(e(r),null,{default:t(()=>[a(e(m),null,{prefix:t(()=>[O]),_:1})]),_:1}),a(e(r),null,{default:t(()=>[a(e(m),null,{prefix:t(()=>[V]),_:1})]),_:1})]),_:1}),a(e(c),{"x-gap":"12",cols:2,style:{padding:"5px","box-sizing":"border-box"}},{default:t(()=>[a(e(r),null,{default:t(()=>[a(e(p),null,{default:t(()=>[a(e(o),{type:"info"},{icon:t(()=>[a(e(d),{component:e(z)},null,8,["component"])]),default:t(()=>[Y]),_:1}),a(e(o),{type:"error"},{icon:t(()=>[a(e(d),{component:e(g)},null,8,["component"])]),default:t(()=>[$]),_:1})]),_:1})]),_:1}),a(e(r),null,{default:t(()=>[a(e(p),{justify:"end"},{default:t(()=>[a(e(o),{type:"info"},{icon:t(()=>[a(e(d),{component:e(C)},null,8,["component"])]),default:t(()=>[K]),_:1}),a(e(o),{type:"info"},{icon:t(()=>[a(e(d),{component:e(M)},null,8,["component"])]),default:t(()=>[Q]),_:1}),a(e(o),null,{default:t(()=>[U]),_:1})]),_:1})]),_:1})]),_:1}),u.value.length>0?(h(),_(e(c),{key:0,"x-gap":"12",cols:1,style:{padding:"5px","box-sizing":"border-box"}},{default:t(()=>[a(e(r),null,{default:t(()=>[a(e(I),{type:"info"},{default:t(()=>[s(" \u4F60\u9009\u4E2D\u4E86 "+L(u.value.length)+" \u884C ",1)]),_:1})]),_:1})]),_:1})):G("",!0)]),_:1}),a(e(H),null,{default:t(()=>[a(e(R),{"checked-row-keys":u.value,"onUpdate:checked-row-keys":i[0]||(i[0]=w=>u.value=w),"flex-height":"",columns:x,striped:"",data:e(v),style:{height:"100%",padding:"5px","box-sizing":"border-box"},pagination:e(N)},null,8,["checked-row-keys","data","pagination"])]),_:1})]),_:1})]),_:1}))}};export{ee as default};