import{r as b,u as ce,w as V,d as ue,c as de,a as C,b as pe,H as A,j as _e,e as te,o as me,f as g,g as k,h as l,i as c,k as p,l as s,N as L,m as S,n as O,p as H,q as ve,F as M,s as he,t as D,v as N,x as f,y as W,z as fe,A as ie,B,C as q,D as se,E as ne,G as ye,I as ge,T as xe,J as we,K as be,L as Ee,M as ke,O as Te,P as Re,Q as Ie,R as Le,S as Pe}from"./vendor.3dbe2827.js";const Ae=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const _ of r)if(_.type==="childList")for(const m of _.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function t(r){const _={};return r.integrity&&(_.integrity=r.integrity),r.referrerpolicy&&(_.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?_.credentials="include":r.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function o(r){if(r.ep)return;r.ep=!0;const _=t(r);fetch(r.href,_)}};Ae();const Rt=b(!1),re=ce(),$=b(null),Q=b(!1),U=b(!1);V(U,e=>{e?($.value=ue,Q.value=!0):($.value=null,Q.value=!1)});V(re,e=>{U.value=e==="dark"});U.value=re.value==="dark";function Z(){const e=[],i="0123456789abcdef";for(let t=0;t<36;t++)e[t]=i.substr(Math.floor(Math.random()*16),1);return e[14]="4",e[19]=i.substr(e[19]&3|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}function ae(e){if(!e&&typeof e!="object")throw new Error("error arguments shallowClone");const i=e.constructor===Array?[]:{};for(const t in e)e.hasOwnProperty(t)&&(e[t]&&typeof e[t]=="object"?(i[t]=e[t].constructor===Array?[]:{},i[t]=ae(e[t])):i[t]=e[t]);return i}function Oe(){return{convert(e){var T;const i=[],t=new Map,o=[],r={menu:"menu",point:"point"},_={_tab:"tab",_self:"self",_blank:"blank"},m=(d,y)=>{for(let u=0;u<d.length;u++){const n=C();n.menuId=Z(),n.name=d[u].name||"",n.path=d[u].path||"",n.icon=d[u].icon||"",n.view=d[u].view||"",n.isRouter=d[u].isRouter||!1,n.isKeepalive=d[u].isKeepalive||!1,n.type=d[u].type||"menu",n.externalLink=d[u].externalLink||!1,n.linkTarget=_[d[u].externalLink]||"tab",n.externalLinkAddress=d[u].externalLinkAddress||"",n.hide=d[u].hide||!1,n.isHome=d[u].isHome||!1,n.permissionKey=d[u].permissionKey||"",n.budge=d[u].budge||null,y||(y=C(),o.push(y)),y.children.push(n),n.routerPath=y.routerPath+n.path;const R=ae(n);R.children=[],R.menuPath=[],R.breadcrumb=[],n.menuPath=[...y.menuPath,R],n.breadcrumb=[...y.breadcrumb,R],t.set(n.menuId,n),n.type==="menu"&&(n.isRouter?(d[u].children.forEach(h=>{const v=C();v.menuId=Z(),v.name=h.name||"",v.path=h.path||"",v.view=h.view||"",v.isRouter=h.isRouter||!1,v.isKeepalive=h.isKeepalive||!1,v.type=r[h.type]||"point",v.externalLink=h.externalLink||!1,v.linkTarget=_[h.externalLink]||"tab",v.externalLinkAddress=h.externalLinkAddress||"",v.hide=h.hide||!1,v.isHome=h.isHome||!1,v.permissionKey=h.permissionKey||"",n.pointList.push(v),n.pointsMap.set(v.permissionKey,v)}),(!n.externalLink||n.externalLink&&n.linkTarget==="tab")&&i.push(n)):m(d[u].children,n))}};return m(e),{routeMappingList:i,menuTreeConverted:((T=o[0])==null?void 0:T.children)||[],menuIdMappingMap:t}}}}const E=de({menuAdapter:Oe()}),P=pe();var F=(e,i)=>{const t=e.__vccOpts||e;for(const[o,r]of i)t[o]=r;return t};const De=e=>(B("data-v-5b5b6784"),e=e(),q(),e),je={class:"hb-admin-dev-tool"},Ve={style:{position:"fixed",right:"10px",bottom:"10px",opacity:"0.6"}},Ke=f("DEV TOOL"),Ce={key:0,class:"hb-dev-panel animate__animated animate__slideInUp"},Se=f("\u5237\u65B0\u5168\u90E8\u6570\u636E"),He=f("ClientId"),Ne=f("Token"),$e=f("User Data"),Me={style:{width:"100%",overflow:"auto"}},Be=f("\u5BFC\u822A\u6807\u9898\u7F13\u5B58&\u83DC\u5355"),qe=f("\u8F93\u51FA\u83DC\u5355\u6570\u636E"),Ue=f("\u8F93\u51FA\u5BFC\u822A\u6570\u636E"),Fe=f("\u91CD\u65B0\u83B7\u53D6\u6807\u9898\u7F13\u5B58\u5217\u8868"),Ge=f("\u6E05\u7A7A\u6807\u9898\u7F13\u5B58"),Je=De(()=>l("thead",null,[l("tr",null,[l("th",null,"\u9875\u9762ID"),l("th",null,"\u6807\u9898"),l("th",null,"\u6E38\u79BB\u6001")])],-1)),ze={setup(e){A.registerLanguage("javascript",_e);const i=b(E.getTracker().clientId),t=te();function o(){console.log(E.getMenuTree()),t.info("\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u83DC\u5355\u6570\u636E\u7ED3\u6784")}const r=E.getNavList();function _(){console.log(r),t.info("\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u5BFC\u822A\u6570\u636E\u7ED3\u6784")}const m=b(P.getToken()),T=b(JSON.stringify(P.getUser().value,null,2)),d=b([]);function y(){d.value=[];for(let I=0;I<localStorage.length;I++){let x=localStorage.key(I);if(x.indexOf("HAPPYKIT_STORAGE/NAV_TITLE")>-1){const w=localStorage.getItem(x),z=x.replace("HAPPYKIT_STORAGE/NAV_TITLE/","");let Y=!1;r.value.forEach(le=>{le.pageId===z&&(Y=!0)}),d.value.push({title:w,isExist:Y,pageId:z})}}}const u=b(!1);function n(){u.value=!1}function R(){u.value=!0}function h(){let I=[];for(let x=0;x<localStorage.length;x++){let w=localStorage.key(x);w.indexOf("HAPPYKIT_STORAGE/NAV_TITLE")>-1&&I.push(w)}I.forEach(x=>localStorage.removeItem(x)),y(),t.info("\u6E05\u7A7A\u6807\u9898\u7F13\u5B58\u5B8C\u6210")}function v(){y(),t.info("\u91CD\u65B0\u83B7\u53D6\u6807\u9898\u7F13\u5B58\u5217\u8868\u5B8C\u6210")}const oe=E.getCurrentMenuRoute();V(oe,()=>{y()});function K(){i.value=E.getTracker().clientId,m.value=P.getToken(),T.value=JSON.stringify(P.getUser().value,null,2),y()}return me(K),V(u,()=>{u.value&&K()}),(I,x)=>(g(),k("div",je,[l("div",Ve,[c(s(L),{onClick:R,type:"info",size:"small"},{default:p(()=>[Ke]),_:1})]),u.value?(g(),k("div",Ce,[c(s(fe),{closable:"",onClose:n,hoverable:"",style:{height:"100%"},"content-style":"overflow:auto",title:"HAPPYBOOT DEV TOOL"},{default:p(()=>[c(s(S),{vertical:""},{default:p(()=>[c(s(L),{onClick:K},{default:p(()=>[Se]),_:1}),c(s(S),{vertical:""},{default:p(()=>[c(s(O),{type:"info"},{default:p(()=>[He]),_:1}),c(s(H),{code:i.value,hljs:s(A)},null,8,["code","hljs"]),c(s(O),{type:"info"},{default:p(()=>[Ne]),_:1}),c(s(H),{code:m.value,hljs:s(A)},null,8,["code","hljs"]),c(s(O),{type:"info"},{default:p(()=>[$e]),_:1}),l("div",Me,[c(s(H),{code:T.value,hljs:s(A),language:"JavaScript"},null,8,["code","hljs"])])]),_:1}),c(s(O),{type:"info"},{default:p(()=>[Be]),_:1}),c(s(S),{align:"center"},{default:p(()=>[c(s(L),{type:"info",onClick:o},{default:p(()=>[qe]),_:1}),c(s(L),{type:"info",onClick:_},{default:p(()=>[Ue]),_:1}),c(s(L),{type:"info",onClick:v},{default:p(()=>[Fe]),_:1}),c(s(L),{type:"warning",onClick:h},{default:p(()=>[Ge]),_:1})]),_:1}),c(s(ve),{bordered:!1,"single-line":!1},{default:p(()=>[Je,l("tbody",null,[(g(!0),k(M,null,he(d.value,w=>(g(),k("tr",null,[l("td",null,D(w.pageId),1),l("td",null,D(w.title),1),l("td",null,[w.isExist?(g(),N(s(W),{key:0,type:"success"},{default:p(()=>[f(D(w.isExist?"\u5426":"\u662F"),1)]),_:2},1024)):(g(),N(s(W),{key:1,type:"warning"},{default:p(()=>[f(D(w.isExist?"\u5426":"\u662F"),1)]),_:2},1024))])]))),256))])]),_:1})]),_:1})]),_:1})])):ie("",!0)]))}};var Ye=F(ze,[["__scopeId","data-v-5b5b6784"]]),We="/assets/logo.ff50f9c9.png";const Qe=e=>(B("data-v-21b9aa6c"),e=e(),q(),e),Ze={class:"hb-admin-copyright-com"},Xe=f(" HappyBoot Tiger Powered By\xA0"),et=Qe(()=>l("a",{class:"power-by",href:"https://happykit.org"},"HappyKit",-1)),tt=[Xe,et],it={setup(e){se(t=>({d45747f8:s(i).textColor1,"63afb78a":s(i).primaryColor}));const i=ne();return(t,o)=>(g(),k("div",Ze,tt))}};var st=F(it,[["__scopeId","data-v-21b9aa6c"]]);const nt="modulepreload",X={},rt="/",a=function(i,t){return!t||t.length===0?i():Promise.all(t.map(o=>{if(o=`${rt}${o}`,o in X)return;X[o]=!0;const r=o.endsWith(".css"),_=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${_}`))return;const m=document.createElement("link");if(m.rel=r?"stylesheet":nt,r||(m.as="script",m.crossOrigin=""),m.href=o,document.head.appendChild(m),r)return new Promise((T,d)=>{m.addEventListener("load",T),m.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>i())},at=[{name:"\u4E3B\u63A7\u53F0",path:"/dashboard",view:"/dashboard/index.vue",isRouter:!0,isKeepalive:!0,icon:"ri-dashboard-line",type:"menu",children:[]},{name:"\u5DE5\u4F5C\u53F0",path:"/work-desk",view:"/work-desk/index.vue",isRouter:!0,isKeepalive:!0,icon:"ri-shape-line",type:"menu",children:[]},{name:"\u9519\u8BEF\u9875\u9762",path:"/error",view:"/security/index.vue",isRouter:!1,isKeepalive:!1,type:"menu",icon:"ri-error-warning-line",children:[{name:"404",path:"/404",view:"/error404/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-window-line",children:[]},{name:"500",path:"/500",view:"/error500/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-window-line",children:[]},{name:"403",path:"/403",view:"/error403/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-window-line",children:[]}]},{name:"\u57FA\u7840\u5217\u8868",path:"/base-list",view:"/base-list/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-bank-card-2-line",children:[]},{name:"\u57FA\u7840\u5361\u7247",path:"/card-list",view:"/card-list/index.vue",isRouter:!0,isKeepalive:!0,type:"menu",icon:"ri-table-line",children:[]},{name:"\u7CFB\u7EDF\u8BBE\u7F6E",path:"/setting",view:"",isRouter:!1,isKeepalive:!1,icon:"ri-tools-line",type:"menu",children:[{name:"\u83DC\u5355\u8BBE\u7F6E",path:"/menu",view:"/permission/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-menu-line",type:"menu",children:[]},{name:"\u7528\u6237\u7BA1\u7406",path:"/user",view:"/user/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-user-line",type:"menu",children:[]},{name:"\u89D2\u8272\u7BA1\u7406",path:"/role",view:"/role/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-file-user-line",type:"menu",children:[]}]},{name:"\u793A\u4F8B",path:"/demo",view:"",isRouter:!1,isKeepalive:!1,icon:"ri-collage-fill",type:"menu",budge:{value:"11",type:"info"},children:[{name:"\u6743\u9650\u70B9",path:"/point",view:"/point-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[{name:"\u65B0\u589E",permissionKey:"add",path:"",view:"",isRouter:!1,isKeepalive:!1,type:"point",children:[]},{name:"\u7F16\u8F91\u5F39\u51FA\u6846\u53D6\u6D88",permissionKey:"cancel",path:"",view:"",isRouter:!1,isKeepalive:!1,type:"point",children:[]}]},{name:"\u81EA\u5B9A\u4E49\u5BFC\u822A\u6807\u9898",path:"/custom-tab-title",view:"/custom-tab-title-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[]},{name:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668",path:"/editor",view:"/editor-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[],budge:{value:"\u65B0",type:"info"}},{name:"\u56FE\u7247\u9884\u89C8\u7EC4\u4EF6",path:"/image-preview",view:"/image-preview-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[]},{name:"\u56FE\u7247\u4E0A\u4F20\u7EC4\u4EF6",path:"/uploader",view:"/uploader-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[],budge:{value:"\u65B0",type:"info"}},{name:"\u5934\u50CF\u88C1\u526A\u7EC4\u4EF6",path:"/avatar",view:"/avatar-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[]},{name:"\u9501\u5C4F\u7EC4\u4EF6",path:"/lock",view:"/avatar-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[],budge:{value:"\u65B0",type:"info"}},{name:"\u56FE\u6807\u9009\u62E9\u5668",path:"/icon-select",view:"/avatar-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[],budge:{value:"\u65B0",type:"info"}},{name:"\u6253\u5370",path:"/print",view:"/avatar-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[],budge:{value:"\u65B0",type:"info"}},{name:"\u526A\u8D34\u677F",path:"/copy",view:"/copy-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[]},{name:"\u4E8C\u7EF4\u7801\u751F\u6210",path:"/qrcode",view:"/qrcode-demo/index.vue",isRouter:!0,isKeepalive:!1,icon:"ri-command-line",type:"menu",children:[]}]},{name:"\u9690\u85CF\u9875\u9762",path:"/hide",view:"/hide/index.vue",isRouter:!0,isKeepalive:!1,hide:!0,icon:"ri-send-plane-2-line",type:"menu",children:[]}],ot={"/src/views/avatar-demo/index.vue":()=>a(()=>import("./index.62f95739.js"),["assets/index.62f95739.js","assets/index.a043fee5.css","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js"]),"/src/views/base-list/index.vue":()=>a(()=>import("./index.24a41970.js"),["assets/index.24a41970.js","assets/index.3433a44e.css","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js","assets/Create.777d01ea.js","assets/CloseSharp.630685ee.js","assets/TrashSharp.e35588b3.js","assets/DocumentOutline.de26e5ae.js"]),"/src/views/card-list/index.vue":()=>a(()=>import("./index.22ebbc9d.js"),["assets/index.22ebbc9d.js","assets/index.9380d9b3.css","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js","assets/TrashSharp.e35588b3.js","assets/DocumentOutline.de26e5ae.js"]),"/src/views/copy-demo/index.vue":()=>a(()=>import("./index.4ee02843.js"),["assets/index.4ee02843.js","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js"]),"/src/views/custom-tab-title-demo/index.vue":()=>a(()=>import("./index.5cedb2aa.js"),["assets/index.5cedb2aa.js","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js"]),"/src/views/dashboard/index.vue":()=>a(()=>import("./index.5332f225.js"),["assets/index.5332f225.js","assets/index.ea232b97.css","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js"]),"/src/views/editor-demo/index.vue":()=>a(()=>import("./index.cb1350e6.js"),["assets/index.cb1350e6.js","assets/index.db66d5eb.css","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js","assets/xml.9e2794d0.js"]),"/src/views/error/index.vue":()=>a(()=>import("./index.aae06989.js"),["assets/index.aae06989.js","assets/index.1021635c.css","assets/vendor.3dbe2827.js"]),"/src/views/error403/index.vue":()=>a(()=>import("./index.84e6e938.js"),["assets/index.84e6e938.js","assets/vendor.3dbe2827.js"]),"/src/views/error404/index.vue":()=>a(()=>import("./index.d4168d38.js"),["assets/index.d4168d38.js","assets/vendor.3dbe2827.js"]),"/src/views/error500/index.vue":()=>a(()=>import("./index.4da71ef8.js"),["assets/index.4da71ef8.js","assets/vendor.3dbe2827.js"]),"/src/views/hide/index.vue":()=>a(()=>import("./index.e29c5e3e.js"),["assets/index.e29c5e3e.js","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js"]),"/src/views/home/index.vue":()=>a(()=>import("./index.a11856d7.js"),["assets/index.a11856d7.js","assets/index.d505c421.css","assets/vendor.3dbe2827.js","assets/CubeOutline.6d05d633.js","assets/CloseSharp.630685ee.js"]),"/src/views/image-preview-demo/index.vue":()=>a(()=>import("./index.cc0c2af0.js"),["assets/index.cc0c2af0.js","assets/index.db25912c.css","assets/vendor.3dbe2827.js","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css"]),"/src/views/login/index.vue":()=>a(()=>import("./index.f737b8f1.js"),["assets/index.f737b8f1.js","assets/index.3316ecc4.css","assets/vendor.3dbe2827.js","assets/browser.c0d87af6.js","assets/Person.1c329d64.js"]),"/src/views/permission/index.vue":()=>a(()=>import("./index.e0ec30d4.js"),["assets/index.e0ec30d4.js","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js","assets/TrashSharp.e35588b3.js","assets/CubeOutline.6d05d633.js"]),"/src/views/point-demo/index.vue":()=>a(()=>import("./index.99d39bc1.js"),["assets/index.99d39bc1.js","assets/index.db66d5eb.css","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js","assets/xml.9e2794d0.js"]),"/src/views/qrcode-demo/index.vue":()=>a(()=>import("./index.87877b98.js"),["assets/index.87877b98.js","assets/index.db66d5eb.css","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js","assets/browser.c0d87af6.js"]),"/src/views/quick-login/index.vue":()=>a(()=>import("./index.20be4c07.js"),["assets/index.20be4c07.js","assets/index.1bbc796f.css","assets/vendor.3dbe2827.js"]),"/src/views/recover/index.vue":()=>a(()=>import("./index.97f391e1.js"),["assets/index.97f391e1.js","assets/index.f7e97c8a.css","assets/MailOutline.dbfd00a7.js","assets/vendor.3dbe2827.js"]),"/src/views/role/index.vue":()=>a(()=>import("./index.15c91dc6.js"),["assets/index.15c91dc6.js","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js","assets/TrashSharp.e35588b3.js","assets/DocumentOutline.de26e5ae.js"]),"/src/views/signup/index.vue":()=>a(()=>import("./index.e07114b6.js"),["assets/index.e07114b6.js","assets/index.21fc7503.css","assets/vendor.3dbe2827.js","assets/MailOutline.dbfd00a7.js","assets/Person.1c329d64.js"]),"/src/views/uploader-demo/index.vue":()=>a(()=>import("./index.181d72fb.js"),["assets/index.181d72fb.js","assets/index.db66d5eb.css","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js","assets/xml.9e2794d0.js"]),"/src/views/user/index.vue":()=>a(()=>import("./index.2e7d78e0.js"),["assets/index.2e7d78e0.js","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js","assets/TrashSharp.e35588b3.js","assets/DocumentOutline.de26e5ae.js"]),"/src/views/work-desk/index.vue":()=>a(()=>import("./index.440fad2f.js"),["assets/index.440fad2f.js","assets/HbAdminPageLayout.d9382f10.js","assets/HbAdminPageLayout.171f9b46.css","assets/vendor.3dbe2827.js"]),"/src/views/base-list/dialog/Create.vue":()=>a(()=>import("./Create.777d01ea.js"),["assets/Create.777d01ea.js","assets/CloseSharp.630685ee.js","assets/vendor.3dbe2827.js"])},lt=ye({interceptorType:"before",framework:E,async dataLoader(e,i,t){const o={rawData:null,message:""};try{const r=await new Promise((_,m)=>{setTimeout(()=>{_({code:0,data:at,message:"success"})},1e3)});o.rawData=r.data,o.message=r.message}catch(r){o.rawData=null,o.message=r.message}return o},dataLoadFailureHandler(e,i,t,o){console.log("\u83DC\u5355\u6570\u636E\u52A0\u8F7D\u5931\u8D25",e),window.$message.error(e.message),o("/error")},routerInjectOption:{randomName:!0,parentRoute:{name:"home",path:"/",component:()=>a(()=>import("./index.a11856d7.js"),["assets/index.a11856d7.js","assets/index.d505c421.css","assets/vendor.3dbe2827.js","assets/CubeOutline.6d05d633.js","assets/CloseSharp.630685ee.js"])},routes:[],viewLoader(e){return ot[`/src/views${e}`]}}}),ct=[{name:"login",path:"/login",component:()=>a(()=>import("./index.f737b8f1.js"),["assets/index.f737b8f1.js","assets/index.3316ecc4.css","assets/vendor.3dbe2827.js","assets/browser.c0d87af6.js","assets/Person.1c329d64.js"])},{name:"quick-login",path:"/quick-login",component:()=>a(()=>import("./index.20be4c07.js"),["assets/index.20be4c07.js","assets/index.1bbc796f.css","assets/vendor.3dbe2827.js"])},{name:"signup",path:"/signup",component:()=>a(()=>import("./index.e07114b6.js"),["assets/index.e07114b6.js","assets/index.21fc7503.css","assets/vendor.3dbe2827.js","assets/MailOutline.dbfd00a7.js","assets/Person.1c329d64.js"])},{name:"recover",path:"/recover",component:()=>a(()=>import("./index.97f391e1.js"),["assets/index.97f391e1.js","assets/index.f7e97c8a.css","assets/MailOutline.dbfd00a7.js","assets/vendor.3dbe2827.js"])},{name:"error",path:"/:pathMatch(.*)*",component:()=>a(()=>import("./index.aae06989.js"),["assets/index.aae06989.js","assets/index.1021635c.css","assets/vendor.3dbe2827.js"])}],ee=["/login","/quick-login","/recover","/signup","/error"],j=b(!1),ut=(e,i,t)=>{if(!P.getToken()){if(!ee.includes(e.path)){j.value=!1,t("/login");return}j.value=!1,t();return}ee.includes(e.path)?t():(j.value=!E.routerInitiated,lt.filter(e,i,t))},dt=(e,i)=>{};const G=e=>(B("data-v-53ac83be"),e=e(),q(),e),pt=G(()=>l("div",{class:"hb-admin-loading-mask"},null,-1)),_t={key:0,class:"hb-admin-loading-com"},mt=G(()=>l("div",{class:"sk-cube-grid"},[l("div",{class:"sk-cube sk-cube1"}),l("div",{class:"sk-cube sk-cube2"}),l("div",{class:"sk-cube sk-cube3"}),l("div",{class:"sk-cube sk-cube4"}),l("div",{class:"sk-cube sk-cube5"}),l("div",{class:"sk-cube sk-cube6"}),l("div",{class:"sk-cube sk-cube7"}),l("div",{class:"sk-cube sk-cube8"}),l("div",{class:"sk-cube sk-cube9"})],-1)),vt={class:"hb-admin-logo animate__animated animate__fadeInUpBig animate__faster"},ht=G(()=>l("img",{class:"logo-image",src:We},null,-1)),ft={class:"logo-text"},yt=f(" HappyBoot Tiger "),gt={class:"hb-admin-copyright-box"},xt={setup(e){se(t=>({d0cbd75a:s(i).bodyColor,"22490862":s(i).primaryColor}));const i=ne();return(t,o)=>(g(),k(M,null,[pt,c(xe,{"leave-active-class":"animate__animated animate__bounceOut"},{default:p(()=>[s(j)?(g(),k("div",_t,[l("div",null,[mt,l("div",vt,[ht,l("div",ft,[c(s(ge),{type:"success",size:"36"},{default:p(()=>[yt]),_:1})])])]),l("div",gt,[c(s(st))])])):ie("",!0)]),_:1})],64))}};var wt=F(xt,[["__scopeId","data-v-53ac83be"]]);const bt={setup(e){return window.$message=te(),(i,t)=>{const o=we("router-view");return g(),k(M,null,[c(o),c(Ye),c(wt)],64)}}},Et={setup(e){return(i,t)=>(g(),N(s(ke),{theme:s($),locale:s(be),"date-locale":s(Ee)},{default:p(()=>[c(s(Te),null,{default:p(()=>[c(bt)]),_:1})]),_:1},8,["theme","locale","date-locale"]))}};const J=Re({history:Ie(),routes:ct}),kt=Le(E,J);J.beforeEach(ut);J.afterEach(dt);Object.keys({VITE_APP_OSS:"https://oss.injs.jsxww.cn",VITE_APP_API:"https://api.op.injs.jsxww.cn",BASE_URL:"/",MODE:"test",DEV:!1,PROD:!0}).forEach((e,i)=>{console.log("[happyboot]",e,{VITE_APP_OSS:"https://oss.injs.jsxww.cn",VITE_APP_API:"https://api.op.injs.jsxww.cn",BASE_URL:"/",MODE:"test",DEV:!1,PROD:!0}[e])});Pe(Et).use(kt).use(E).use(P).mount("#app");export{st as H,F as _,Rt as a,U as b,P as c,We as d,E as h,Q as i,$ as t};
