import{_ as ee,h as F}from"./index.bc30e61a.js";import{z as N,p as l,h as B,A as y,B as we,J as ye,C as Q,U as at,i as Ce,T as lt,E as U,O as st,D as V,M as ne,N as Le,V as ct,j as dt,o as z,q as M,L as w,a1 as Ve,a2 as ke,c as E,l as d,a3 as ut,k as b,w as I,W as Ke,a4 as De,m as de,t as Ue,a5 as mt,X as ze,Y as $e,n as J,r as ht,a6 as ft}from"./vendor.43ce0c4d.js";import{c as k,K as pt,a as g,d as x,b as $,G as vt,p as gt,f as q,u as L,g as D,h as Y,L as bt,l as ue,C as Z,j as qe,t as We,n as W,N as xt}from"./Space.5f8f31c2.js";import{f as je,g as yt,r as G,c as _t,N as Ge}from"./fade-in-scale-up.cssr.7f254498.js";import{N as Ie}from"./FadeInExpandTransition.dc8aaca6.js";import{N as Ne,o as wt}from"./Dropdown.3993183c.js";import{N as Ct}from"./Tooltip.9d67ccb4.js";import{k as Se,u as Te,b as kt,c as zt,N as j}from"./Icon.5554db87.js";import{k as ge,u as Ye}from"./Popover.2d9bbfec.js";import{f as Xe}from"./fade-in-height-expand.cssr.a2d3add7.js";import{p as $t,l as It,a as Nt,N as se}from"./Layout.e3230d26.js";import{b as St,d as Rt,m as Pt,c as Mt,t as At,e as be,a as oe,f as Ot}from"./config.b8ec806f.js";import{C as Re}from"./CubeOutline.e4af2170.js";import{d as Bt,e as Lt,c as jt,b as Tt,a as Et,N as le}from"./Button.e9fe7712.js";import{m as Je,a as Ft,u as Ht}from"./use-message.f2128f06.js";import{N as Vt}from"./Carousel.120cfda6.js";import{N as Kt}from"./Switch.288aacc0.js";import{N as _e}from"./Avatar.1e121d60.js";import{C as Dt}from"./CloseSharp.9188dba7.js";import{N as Ut}from"./Tag.2d1e4bdb.js";import{N as qt}from"./GradientText.8c9616e7.js";import{N as ce}from"./LayoutHeader.15a77ac6.js";import{z as Wt,d as Gt,N as Yt}from"./ConfigProvider.a168d6b7.js";import{I as Xt,S as Jt,W as Zt,E as Qt}from"./Warning.31316bfd.js";import{N as eo}from"./LayoutSider.b2c0f293.js";import{N as to}from"./LayoutContent.6e93978a.js";import"./light.9ebcab32.js";import"./index.eadd8604.js";import"./ChevronRight.ef1e123d.js";import"./light.a0e740d6.js";import"./light.ebb53e7b.js";import"./light.6037d8ef.js";import"./light.07102f53.js";import"./light.c1efdb8c.js";import"./ScrollBar.4563dd35.js";import"./_common.81364e7f.js";import"./light.fe167247.js";import"./light.87dd3328.js";import"./light.f09ff53e.js";import"./light.8d0afc31.js";import"./light.230ebd3c.js";import"./_common.d5feac41.js";import"./light.da11d2b9.js";import"./light.399f191c.js";import"./light.4bce455d.js";import"./use-houdini.7dfba0ae.js";import"./index.7d569ca2.js";const oo=typeof window!="undefined";var no=N({name:"ChevronDownFilled",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ee=N({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const t=B(null),o=B(e.value),i=B(e.value),n=B("up"),r=B(!1),c=y(()=>r.value?`${e.clsPrefix}-base-slot-machine-current-number--${n.value}-scroll`:null),u=y(()=>r.value?`${e.clsPrefix}-base-slot-machine-old-number--${n.value}-scroll`:null);we(Q(e,"value"),(a,f)=>{o.value=f,i.value=a,ye(s)});function s(){const a=e.newOriginalNumber,f=e.oldOriginalNumber;f===void 0||a===void 0||(a>f?m("up"):f>a&&m("down"))}function m(a){n.value=a,r.value=!1,ye(()=>{var f;(f=t.value)===null||f===void 0||f.offsetWidth,r.value=!0})}return()=>{const{clsPrefix:a}=e;return l("span",{ref:t,class:`${a}-base-slot-machine-number`},o.value!==null?l("span",{class:[`${a}-base-slot-machine-old-number ${a}-base-slot-machine-old-number--top`,u.value]},o.value):null,l("span",{class:[`${a}-base-slot-machine-current-number`,c.value]},l("span",{ref:"numberWrapper",class:[`${a}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${a}-base-slot-machine-current-number__inner--not-number`]},i.value)),o.value!==null?l("span",{class:[`${a}-base-slot-machine-old-number ${a}-base-slot-machine-old-number--bottom`,u.value]},o.value):null)}}});const{cubicBezierEaseOut:X}=pt;function ro({duration:e=".2s"}={}){return[k("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${X},
 max-width ${e} ${X},
 transform ${e} ${X}
 `}),k("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${X},
 max-width ${e} ${X},
 transform ${e} ${X}
 `}),k("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),k("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),k("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),k("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}var io=k([k("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),k("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),k("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),k("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),g("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[g("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[ro({duration:".2s"}),Bt({duration:".2s",delay:"0s"}),g("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[x("top",{transform:"translateY(-100%)"}),x("bottom",{transform:"translateY(100%)"}),x("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),x("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),g("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[x("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),x("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),$("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[x("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),ao=N({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){vt("-base-slot-machine",io,Q(e,"clsPrefix"));const t=B(),o=B(),i=y(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const n=[];let r=e.value;for(e.max!==void 0&&(r=Math.min(e.max,r));r>=1;)n.push(r%10),r/=10,r=Math.floor(r);return n.reverse(),n});return we(Q(e,"value"),(n,r)=>{typeof n=="string"?(o.value=void 0,t.value=void 0):typeof r=="string"?(o.value=n,t.value=void 0):(o.value=n,t.value=r)}),()=>{const{value:n,clsPrefix:r}=e;return typeof n=="number"?l("span",{class:`${r}-base-slot-machine`},l(at,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>i.value.map((c,u)=>l(Ee,{clsPrefix:r,key:i.value.length-u-1,oldOriginalNumber:t.value,newOriginalNumber:o.value,value:c}))}),l(Ie,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<n?l(Ee,{clsPrefix:r,value:"+"}):null})):l("span",{class:`${r}-base-slot-machine`},n)}}});const lo=e=>{const{errorColor:t,infoColor:o,successColor:i,warningColor:n,fontFamily:r}=e;return{color:t,colorInfo:o,colorSuccess:i,colorError:t,colorWarning:n,fontSize:"12px",fontFamily:r}},so={name:"Badge",common:gt,self:lo};var co=so,uo=k([k("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),g("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[x("as-is",[g("badge-sup",{position:"static",transform:"translateX(0)"},[je({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),x("dot",[g("badge-sup",{height:"8px",width:"8px",padding:0,minWidth:"8px",left:"100%",bottom:"calc(100% - 4px)"},[k("::before",{borderRadius:"4px"})])]),g("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 `,[je({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),g("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),k("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]);const mo=Object.assign(Object.assign({},L.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String});var Ze=N({name:"Badge",props:mo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=q(e),i=L("Badge","-badge",uo,co,e,t),n=B(!1),r=()=>{n.value=!0},c=()=>{n.value=!1},u=y(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&e.value<=0)));Ce(()=>{u.value&&(n.value=!0)});const s=y(()=>{const{type:a,color:f}=e,{common:{cubicBezierEaseInOut:h,cubicBezierEaseOut:v},self:{[D("color",a)]:_,fontFamily:S,fontSize:O}}=i.value;return{"--n-font-size":O,"--n-font-family":S,"--n-color":f||_,"--n-ripple-color":f||_,"--n-bezier":h,"--n-ripple-bezier":v}}),m=o?Y("badge",y(()=>{let a="";const{type:f,color:h}=e;return f&&(a+=f[0]),h&&(a+=bt(h)),a}),s,e):void 0;return{mergedClsPrefix:t,appeared:n,showBadge:u,handleAfterEnter:r,handleAfterLeave:c,cssVars:o?void 0:s,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var e;const{mergedClsPrefix:t,onRender:o,themeClass:i,$slots:n}=this;o==null||o();const r=(e=n.default)===null||e===void 0?void 0:e.call(n);return l("div",{class:[`${t}-badge`,i,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!r}],style:this.cssVars},r,l(lt,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?l("sup",{class:`${t}-badge-sup`,title:yt(this.value)},this.dot?null:l(ao,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value}),this.processing?l(Lt,{clsPrefix:t}):null):null}))}}),ho=g("breadcrumb",`
 white-space: nowrap;
`,[k("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),k("a",`
 color: inherit;
 text-decoration: inherit;
 `),g("breadcrumb-item",{fontSize:"var(--n-font-size)",transition:"color .3s var(--n-bezier)",display:"inline-block"},[g("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),$("link",{cursor:"pointer",transition:"color .3s var(--n-bezier)",color:"var(--n-item-text-color)"}),$("separator",{margin:"0 8px",color:"var(--n-separator-color)",transition:"color .3s var(--n-bezier)"}),k("&:hover",[g("icon",{color:"var(--n-item-text-color-hover)"}),$("link",{color:"var(--n-item-text-color-hover)"})]),k("&:active",[g("icon",{color:"var(--n-item-text-color-pressed)"}),$("link",{color:"var(--n-item-text-color-pressed)"})]),k("&:last-child",[$("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `),g("icon",{color:"var(--n-item-text-color-active)"}),$("separator",{display:"none"})])])]);const Qe=ue("n-breadcrumb"),fo=Object.assign(Object.assign({},L.props),{separator:{type:String,default:"/"}});var po=N({name:"Breadcrumb",props:fo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=q(e),i=L("Breadcrumb","-breadcrumb",ho,St,e,t);U(Qe,{separatorRef:Q(e,"separator"),mergedClsPrefixRef:t});const n=y(()=>{const{common:{cubicBezierEaseInOut:c},self:{separatorColor:u,itemTextColor:s,itemTextColorHover:m,itemTextColorPressed:a,itemTextColorActive:f,fontSize:h,fontWeightActive:v}}=i.value;return{"--n-font-size":h,"--n-bezier":c,"--n-item-text-color":s,"--n-item-text-color-hover":m,"--n-item-text-color-pressed":a,"--n-item-text-color-active":f,"--n-separator-color":u,"--n-font-weight-active":v}}),r=o?Y("breadcrumb",void 0,n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),l("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},l("ul",null,this.$slots))}});const vo=oo?window:null,go=(e=vo)=>{const t=()=>{const{hash:n,host:r,hostname:c,href:u,origin:s,pathname:m,port:a,protocol:f,search:h}=(e==null?void 0:e.location)||{};return{hash:n,host:r,hostname:c,href:u,origin:s,pathname:m,port:a,protocol:f,search:h}},o=()=>{i.value=t()},i=B(t());return Ce(()=>{e&&(e.addEventListener("popstate",o),e.addEventListener("hashchange",o))}),st(()=>{e&&(e.removeEventListener("popstate",o),e.removeEventListener("hashchange",o))}),i},bo={separator:String,href:String};var xo=N({name:"BreadcrumbItem",props:bo,setup(e,{slots:t}){const o=V(Qe,null);if(!o)return()=>null;const{separatorRef:i,mergedClsPrefixRef:n}=o,r=go(),c=y(()=>e.href?"a":"span"),u=y(()=>r.value.href===e.href?"location":null);return()=>{var s;const{value:m}=n;return l("li",{class:`${m}-breadcrumb-item`},l(c.value,{class:`${m}-breadcrumb-item__link`,"aria-current":u.value,href:e.href},t),l("span",{class:`${m}-breadcrumb-item__separator`,"aria-hidden":"true"},t.separator?t.separator():(s=e.separator)!==null&&s!==void 0?s:i.value))}}}),yo=g("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[Z("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[Z("no-title",`
 display: flex;
 align-items: center;
 `)]),$("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),x("title-position-left",[$("line",[x("left",{width:"28px"})])]),x("title-position-right",[$("line",[x("right",{width:"28px"})])]),x("dashed",[$("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),x("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),$("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),Z("dashed",[$("line",{backgroundColor:"var(--n-color)"})]),x("dashed",[$("line",{borderColor:"var(--n-color)"})]),x("vertical",{backgroundColor:"var(--n-color)"})]);const _o=Object.assign(Object.assign({},L.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean});var xe=N({name:"Divider",props:_o,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=q(e),i=L("Divider","-divider",yo,Rt,e,t),n=y(()=>{const{common:{cubicBezierEaseInOut:c},self:{color:u,textColor:s,fontWeight:m}}=i.value;return{"--n-bezier":c,"--n-color":u,"--n-text-color":s,"--n-font-weight":m}}),r=o?Y("divider",void 0,n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{$slots:t,titlePlacement:o,vertical:i,dashed:n,cssVars:r,mergedClsPrefix:c}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{role:"separator",class:[`${c}-divider`,this.themeClass,{[`${c}-divider--vertical`]:i,[`${c}-divider--no-title`]:!t.default,[`${c}-divider--dashed`]:n,[`${c}-divider--title-position-${o}`]:t.default&&o}],style:r},i?null:l("div",{class:`${c}-divider__line ${c}-divider__line--left`}),!i&&t.default?l(ne,null,l("div",{class:`${c}-divider__title`},this.$slots),l("div",{class:`${c}-divider__line ${c}-divider__line--right`})):null)}}),wo=g("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),x("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]);const Co=Object.assign(Object.assign({},L.props),{inverted:Boolean,position:$t,bordered:Boolean});var ko=N({name:"LayoutFooter",props:Co,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=q(e),i=L("Layout","-layout-footer",wo,It,e,t),n=y(()=>{const{common:{cubicBezierEaseInOut:c},self:u}=i.value,s={"--n-bezier":c};return e.inverted?(s["--n-color"]=u.footerColorInverted,s["--n-text-color"]=u.textColorInverted,s["--n-border-color"]=u.footerBorderColorInverted):(s["--n-color"]=u.footerColor,s["--n-text-color"]=u.textColor,s["--n-border-color"]=u.footerBorderColor),s}),r=o?Y("layout-footer",y(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{class:[`${t}-layout-footer`,this.themeClass,this.position&&`${t}-layout-footer--${this.position}-positioned`,this.bordered&&`${t}-layout-footer--bordered`],style:this.cssVars},this.$slots)}});const re=ue("n-menu"),Pe=ue("n-submenu"),Me=ue("n-menu-item-group"),ae=8;function Ae(e){const t=V(re),{props:o,mergedCollapsedRef:i}=t,n=V(Pe,null),r=V(Me,null),c=y(()=>o.mode==="horizontal"),u=y(()=>c.value?o.dropdownPlacement:"tmNodes"in e?"right-start":"right"),s=y(()=>{var h;return Math.max((h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize,o.iconSize)}),m=y(()=>{var h;return!c.value&&e.root&&i.value&&(h=o.collapsedIconSize)!==null&&h!==void 0?h:o.iconSize}),a=y(()=>{if(c.value)return;const{collapsedWidth:h,indent:v,rootIndent:_}=o,{root:S,isGroup:O}=e,H=_===void 0?v:_;if(S)return i.value?h/2-s.value/2:H;if(r)return v/2+r.paddingLeftRef.value;if(n)return(O?v/2:v)+n.paddingLeftRef.value}),f=y(()=>{const{collapsedWidth:h,indent:v,rootIndent:_}=o,{value:S}=s,{root:O}=e;return c.value||!O||!i.value?ae:(_===void 0?v:_)+S+ae-(h+S)/2});return{dropdownPlacement:u,activeIconSize:m,maxIconSize:s,paddingLeft:a,iconMarginRight:f,NMenu:t,NSubmenu:n}}const Oe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},et=Object.assign(Object.assign({},Oe),{tmNodes:{type:Array,required:!0}}),zo=N({name:"MenuOptionGroup",props:et,setup(e){U(Pe,null);const t=Ae(e);U(Me,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:o,props:i}=V(re);return function(){const{value:n}=o,r=t.paddingLeft.value;return l("div",{class:`${n}-menu-item-group`,role:"group"},l("span",{class:`${n}-menu-item-group-title`,style:r!==void 0?`padding-left: ${r}px;`:void 0},G(e.title),e.extra?l(ne,null," ",G(e.extra)):null),l("div",null,e.tmNodes.map(c=>Be(c,i))))}}});var tt=N({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=V(re);return{menuProps:t,style:y(()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}}),iconStyle:y(()=>{const{maxIconSize:o,activeIconSize:i,iconMarginRight:n}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${i}px`,marginRight:`${n}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:o,renderLabel:i,renderExtra:n,expandIcon:r}}=this,c=o?o(t.rawNode):G(this.icon);return l("div",{onClick:this.onClick,role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},c&&l("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[c]),l("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(t.rawNode):G(this.title),this.extra||n?l("span",{class:`${e}-menu-item-content-header__extra`}," ",n?n(t.rawNode):G(this.extra)):null),this.showArrow?l(qe,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>r?r(t.rawNode):l(no,null)}):null)}});const ot=Object.assign(Object.assign({},Oe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),$o=N({name:"Submenu",props:ot,setup(e){const t=Ae(e),{NMenu:o,NSubmenu:i}=t,{props:n,mergedCollapsedRef:r}=o,c=y(()=>{const{disabled:f}=e;return i!=null&&i.mergedDisabledRef.value||n.disabled?!0:f}),u=B(!1);U(Pe,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:c}),U(Me,null);function s(){const{onClick:f}=e;f&&f()}function m(){c.value||(r.value||o.toggleExpand(e.internalKey),s())}function a(f){u.value=f}return{menuProps:n,doSelect:o.doSelect,inverted:o.invertedRef,isHorizontal:o.isHorizontalRef,mergedClsPrefix:o.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:u,paddingLeft:t.paddingLeft,mergedDisabled:c,mergedValue:o.mergedValueRef,childActive:We(()=>o.activePathRef.value.includes(e.internalKey)),collapsed:y(()=>n.mode==="horizontal"?!1:r.value?!0:!o.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!c.value&&(n.mode==="horizontal"||r.value)),handlePopoverShowChange:a,handleClick:m}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:o,renderLabel:i}}=this,n=()=>{const{isHorizontal:c,paddingLeft:u,collapsed:s,mergedDisabled:m,maxIconSize:a,activeIconSize:f,title:h,childActive:v,icon:_,handleClick:S,dropdownShow:O,iconMarginRight:H,tmNode:te}=this;return l(tt,{tmNode:te,paddingLeft:u,collapsed:s,disabled:m,iconMarginRight:H,maxIconSize:a,activeIconSize:f,title:h,showArrow:!c,childActive:v,clsPrefix:t,icon:_,hover:O,onClick:S})},r=()=>l(Ie,null,{default:()=>{const{tmNodes:c,collapsed:u}=this;return u?null:l("div",{class:`${t}-submenu-children`,role:"menu"},c.map(s=>Be(s,this.menuProps)))}});return this.root?l(Ne,Object.assign({},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,size:"large",trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:o,renderLabel:i}),{default:()=>l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),this.isHorizontal?null:r())}):l("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},n(),r())}}),nt=Object.assign(Object.assign({},Oe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Io=N({name:"MenuOption",props:nt,setup(e){const t=Ae(e),{NSubmenu:o,NMenu:i}=t,{props:n,mergedClsPrefixRef:r,mergedCollapsedRef:c}=i,u=o?o.mergedDisabledRef:{value:!1},s=y(()=>u.value||e.disabled);function m(f){const{onClick:h}=e;h&&h(f)}function a(f){s.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),m(f))}return{mergedClsPrefix:r,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:n,dropdownEnabled:We(()=>e.root&&c.value&&n.mode!=="horizontal"&&!s.value),selected:y(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:s,handleClick:a}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:o,menuProps:{renderLabel:i}}=this;return l("div",{role:"menuitem",class:[`${e}-menu-item`,this.selected&&`${e}-menu-item--selected`,this.mergedDisabled&&`${e}-menu-item--disabled`]},l(Ct,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(o.rawNode):G(this.title),trigger:()=>l(tt,{tmNode:o,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}});var No=N({name:"MenuDivider",setup(){const e=V(re),{mergedClsPrefixRef:t,isHorizontalRef:o}=e;return()=>o.value?null:l("div",{class:`${t.value}-menu-divider`})}});const So=Se(et),Ro=Se(nt),Po=Se(ot);function Mo(e){return e.type==="divider"||e.type==="render"}function Ao(e){return e.type==="divider"}function Be(e,t){const{rawNode:o}=e;if(Mo(o))return Ao(o)?l(No,Object.assign({key:e.key},o.props)):void 0;const{labelField:i}=t,{key:n,level:r,isGroup:c}=e,u=Object.assign(Object.assign({},o),{title:o.title||o[i],extra:o.titleExtra||o.extra,key:n,internalKey:n,level:r,root:r===0,isGroup:c});return e.children?e.isGroup?l(zo,ge(u,So,{tmNodes:e.children,key:n})):l($o,ge(u,Po,{key:n,rawNodes:o[t.childrenField],tmNodes:e.children,tmNode:e})):l(Io,ge(u,Ro,{key:n,tmNode:e}))}var Oo=k([g("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[x("horizontal",{display:"inline-flex",paddingBottom:0},[g("submenu",{margin:0}),g("menu-item",{margin:0},[k("&::before",{backgroundColor:"#0000 !important"}),x("selected",[g("menu-item-content",{borderBottom:"2px solid var(--n-border-color-horizontal)"})])]),g("menu-item-content",{padding:"0 20px",borderBottom:"2px solid #0000"},[x("child-active",{borderBottom:"2px solid var(--n-border-color-horizontal)"}),Z("disabled",[Fe({borderBottom:"2px solid var(--n-border-color-horizontal)"},null)])])]),x("collapsed",[g("menu-item",[x("selected",[k("&::before",{backgroundColor:"var(--n-item-color-active-collapsed) !important"})])]),g("menu-item-content",[g("menu-item-content-header",{opacity:0}),$("arrow",{opacity:0}),$("icon",{color:"var(--n-item-icon-color-collapsed)"})])]),g("menu-item",`
 transition: background-color .3s var(--n-bezier);
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `,[k("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Z("disabled",[k("&:active::before",{backgroundColor:"var(--n-item-color-active)"})]),x("selected",[k("&::before",{backgroundColor:"var(--n-item-color-active)"}),g("menu-item-content",[$("arrow",{color:"var(--n-arrow-color-active)"}),$("icon",{color:"var(--n-item-icon-color-active)"}),g("menu-item-content-header",{color:"var(--n-item-text-color-active)"},[$("extra",{color:"var(--n-item-text-color-active)"})])])])]),g("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 z-index: auto;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("disabled",{opacity:".45",cursor:"not-allowed"}),x("collapsed",[$("arrow",{transform:"rotate(0)"})]),x("child-active",[g("menu-item-content-header",{color:"var(--n-item-text-color-child-active)"},[$("extra",{color:"var(--n-item-text-color-child-active)"})]),$("arrow",{color:"var(--n-arrow-color-child-active)"}),$("icon",{color:"var(--n-item-icon-color-child-active)"})]),Z("disabled",[Fe(null,[$("arrow",{color:"var(--n-arrow-color-hover)"}),$("icon",{color:"var(--n-item-icon-color-hover)"}),g("menu-item-content-header",{color:"var(--n-item-text-color-hover)"},[$("extra",{color:"var(--n-item-text-color-hover)"})])])]),$("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),$("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),g("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[k("a",`
 text-decoration: none;
 color: inherit;
 `,[k("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),$("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),g("submenu",{cursor:"pointer",position:"relative",marginTop:"6px"},[g("menu-item-content",`
 height: var(--n-item-height);
 `),g("submenu-children",{overflow:"hidden",padding:0},[Xe({duration:".2s"})])]),g("menu-item-group",[g("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),g("menu-tooltip",[k("a",`
 color: inherit;
 text-decoration: none;
 `)]),g("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function Fe(e,t){return[x("hover",e,t),k("&:hover",e,t)]}const Bo=Object.assign(Object.assign({},L.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownPlacement:{type:String,default:"bottom"},dropdownProps:Object,accordion:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array});var Lo=N({name:"Menu",props:Bo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=q(e),i=L("Menu","-menu",Oo,Pt,e,t),n=V(Nt,null),r=y(()=>{var R;const{collapsed:P}=e;if(P!==void 0)return P;if(n){const{collapseModeRef:p,collapsedRef:A}=n;if(p.value==="width")return(R=A.value)!==null&&R!==void 0?R:!1}return!1}),c=y(()=>{const{keyField:R,childrenField:P}=e;return _t(e.items||e.options,{getChildren(p){return p[P]},getKey(p){var A;return(A=p[R])!==null&&A!==void 0?A:p.name}})}),u=y(()=>new Set(c.value.treeNodes.map(R=>R.key))),{watchProps:s}=e,m=B(null);s!=null&&s.includes("defaultValue")?Le(()=>{m.value=e.defaultValue}):m.value=e.defaultValue;const a=Q(e,"value"),f=Te(a,m),h=B([]),v=()=>{h.value=e.defaultExpandAll?c.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||c.value.getPath(f.value,{includeSelf:!1}).keyPath};s!=null&&s.includes("defaultExpandedKeys")?Le(v):v();const _=Ye(e,["expandedNames","expandedKeys"]),S=Te(_,h),O=y(()=>c.value.treeNodes),H=y(()=>c.value.getPath(f.value).keyPath);U(re,{props:e,mergedCollapsedRef:r,mergedThemeRef:i,mergedValueRef:f,mergedExpandedKeysRef:S,activePathRef:H,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:Q(e,"inverted"),doSelect:te,toggleExpand:fe});function te(R,P){const{"onUpdate:value":p,onUpdateValue:A,onSelect:T}=e;A&&W(A,R,P),p&&W(p,R,P),T&&W(T,R,P),m.value=R}function he(R){const{"onUpdate:expandedKeys":P,onUpdateExpandedKeys:p,onExpandedNamesChange:A,onOpenNamesChange:T}=e;P&&W(P,R),p&&W(p,R),A&&W(A,R),T&&W(T,R),h.value=R}function fe(R){const P=Array.from(S.value),p=P.findIndex(A=>A===R);if(~p)P.splice(p,1);else{if(e.accordion&&u.value.has(R)){const A=P.findIndex(T=>u.value.has(T));A>-1&&P.splice(A,1)}P.push(R)}he(P)}const ie=y(()=>{const{inverted:R}=e,{common:{cubicBezierEaseInOut:P},self:p}=i.value,{borderRadius:A,borderColorHorizontal:T,fontSize:pe,itemHeight:ve,dividerColor:it}=p,C={"--n-divider-color":it,"--n-bezier":P,"--n-font-size":pe,"--n-border-color-horizontal":T,"--n-border-radius":A,"--n-item-height":ve};return R?(C["--n-group-text-color"]=p.groupTextColorInverted,C["--n-color"]=p.colorInverted,C["--n-item-text-color"]=p.itemTextColorInverted,C["--n-arrow-color"]=p.arrowColorInverted,C["--n-arrow-color-hover"]=p.arrowColorHoverInverted,C["--n-arrow-color-active"]=p.arrowColorActiveInverted,C["--n-arrow-color-child-active"]=p.arrowColorChildActiveInverted,C["--n-item-icon-color"]=p.itemIconColorInverted,C["--n-item-text-color-hover"]=p.itemTextColorHoverInverted,C["--n-item-icon-color-hover"]=p.itemIconColorHoverInverted,C["--n-item-text-color-active"]=p.itemTextColorActiveInverted,C["--n-item-icon-color-active"]=p.itemIconColorActiveInverted,C["--n-item-icon-color-collapsed"]=p.itemIconColorCollapsedInverted,C["--n-item-color-active"]=p.itemColorActiveInverted,C["--n-item-color-active-collapsed"]=p.itemColorActiveCollapsedInverted,C["--n-item-text-color-child-active"]=p.itemTextColorChildActiveInverted,C["--n-item-icon-color-child-active"]=p.itemIconColorChildActiveInverted):(C["--n-group-text-color"]=p.groupTextColor,C["--n-color"]=p.color,C["--n-item-text-color"]=p.itemTextColor,C["--n-arrow-color"]=p.arrowColor,C["--n-arrow-color-hover"]=p.arrowColorHover,C["--n-arrow-color-active"]=p.arrowColorActive,C["--n-arrow-color-child-active"]=p.arrowColorChildActive,C["--n-item-icon-color"]=p.itemIconColor,C["--n-item-text-color-hover"]=p.itemTextColorHover,C["--n-item-icon-color-hover"]=p.itemIconColorHover,C["--n-item-text-color-active"]=p.itemTextColorActive,C["--n-item-icon-color-active"]=p.itemIconColorActive,C["--n-item-icon-color-collapsed"]=p.itemIconColorCollapsed,C["--n-item-color-active"]=p.itemColorActive,C["--n-item-color-active-collapsed"]=p.itemColorActiveCollapsed,C["--n-item-text-color-child-active"]=p.itemTextColorChildActive,C["--n-item-icon-color-child-active"]=p.itemIconColorChildActive),C}),K=o?Y("menu",y(()=>e.inverted?"a":"b"),ie,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:_,uncontrolledExpanededKeys:h,mergedExpandedKeys:S,uncontrolledValue:m,mergedValue:f,activePath:H,tmNodes:O,mergedTheme:i,mergedCollapsed:r,cssVars:o?void 0:ie,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender}},render(){const{mergedClsPrefix:e,mode:t,themeClass:o,onRender:i}=this;return i==null||i(),l("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,o,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(n=>Be(n,this.$props)))}});const rt={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function};var jo=k([g("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[Xe({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),g("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[$("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),$("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>x(`${e}-type`,[k("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),k("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[jt()])]),$("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[k("&:hover",`
 color: var(--n-close-color-hover);
 `),k("&:active",`
 color: var(--n-close-color-pressed);
 `)])]),g("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[x("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),x("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),x("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),x("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),x("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),x("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]);const To={info:l(Xt,null),success:l(Jt,null),warning:l(Zt,null),error:l(Qt,null),default:null};var Eo=N({name:"Message",props:Object.assign(Object.assign({},rt),{render:Function}),setup(e){const{inlineThemeDisabled:t}=q(),{props:o,mergedClsPrefixRef:i}=V(Je),n=L("Message","-message",jo,Mt,o,i),r=y(()=>{const{type:u}=e,{common:{cubicBezierEaseInOut:s},self:{padding:m,margin:a,maxWidth:f,iconMargin:h,closeMargin:v,closeSize:_,iconSize:S,fontSize:O,lineHeight:H,borderRadius:te,iconColorInfo:he,iconColorSuccess:fe,iconColorWarning:ie,iconColorError:K,iconColorLoading:R,[D("textColor",u)]:P,[D("boxShadow",u)]:p,[D("color",u)]:A,[D("closeColor",u)]:T,[D("closeColorPressed",u)]:pe,[D("closeColorHover",u)]:ve}}=n.value;return{"--n-bezier":s,"--n-margin":a,"--n-padding":m,"--n-max-width":f,"--n-font-size":O,"--n-icon-margin":h,"--n-icon-size":S,"--n-close-size":_,"--n-close-margin":v,"--n-text-color":P,"--n-color":A,"--n-box-shadow":p,"--n-icon-color-info":he,"--n-icon-color-success":fe,"--n-icon-color-warning":ie,"--n-icon-color-error":K,"--n-icon-color-loading":R,"--n-close-color":T,"--n-close-color-pressed":pe,"--n-close-color-hover":ve,"--n-line-height":H,"--n-border-radius":te}}),c=t?Y("message",y(()=>e.type[0]),r,{}):void 0;return{mergedClsPrefix:i,messageProviderProps:o,handleClose(){var u;(u=e.onClose)===null||u===void 0||u.call(e)},cssVars:t?void 0:r,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,placement:o.placement}},render(){const{render:e,type:t,closable:o,content:i,mergedClsPrefix:n,cssVars:r,themeClass:c,onRender:u,icon:s,handleClose:m,showIcon:a}=this;u==null||u();let f;return l("div",{class:[`${n}-message-wrapper`,c],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},r]},e?e(this.$props):l("div",{class:`${n}-message ${n}-message--${t}-type`},(f=Fo(s,t,n))&&a?l("div",{class:`${n}-message__icon ${n}-message__icon--${t}-type`},l(Tt,null,{default:()=>f})):null,l("div",{class:`${n}-message__content`},G(i)),o?l(kt,{clsPrefix:n,class:`${n}-message__close`,onClick:m}):null))}});function Fo(e,t,o){if(typeof e=="function")return e();{const i=t==="loading"?l(Et,{clsPrefix:o,strokeWidth:24,scale:.85}):To[t];return i?l(qe,{clsPrefix:o,key:t},{default:()=>i}):null}}var Ho=N({name:"MessageEnvironment",props:Object.assign(Object.assign({},rt),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const o=B(!0);Ce(()=>{i()});function i(){const{duration:a}=e;a&&(t=window.setTimeout(c,a))}function n(a){a.currentTarget===a.target&&t!==null&&(window.clearTimeout(t),t=null)}function r(a){a.currentTarget===a.target&&i()}function c(){const{onHide:a}=e;o.value=!1,t&&(window.clearTimeout(t),t=null),a&&a()}function u(){const{onClose:a}=e;a&&a(),c()}function s(){const{onAfterLeave:a,onInternalAfterLeave:f,onAfterHide:h,internalKey:v}=e;a&&a(),f&&f(v),h&&h()}function m(){c()}return{show:o,hide:c,handleClose:u,handleAfterLeave:s,handleMouseleave:r,handleMouseenter:n,deactivate:m}},render(){return l(Ie,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?l(Eo,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}});const Vo=Object.assign(Object.assign({},L.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerStyle:[String,Object]});var Ko=N({name:"MessageProvider",props:Vo,setup(e){const{mergedClsPrefixRef:t}=q(e),o=B([]),i=B({}),n={create(s,m){return r(s,Object.assign({type:"default"},m))},info(s,m){return r(s,Object.assign(Object.assign({},m),{type:"info"}))},success(s,m){return r(s,Object.assign(Object.assign({},m),{type:"success"}))},warning(s,m){return r(s,Object.assign(Object.assign({},m),{type:"warning"}))},error(s,m){return r(s,Object.assign(Object.assign({},m),{type:"error"}))},loading(s,m){return r(s,Object.assign(Object.assign({},m),{type:"loading"}))},destroyAll:u};U(Je,{props:e,mergedClsPrefixRef:t}),U(Ft,n);function r(s,m){const a=zt(),f=dt(Object.assign(Object.assign({},m),{content:s,key:a,destroy:()=>{i.value[a].hide()}})),{max:h}=e;return h&&o.value.length>=h&&o.value.shift(),o.value.push(f),f}function c(s){o.value.splice(o.value.findIndex(m=>m.key===s),1),delete i.value[s]}function u(){Object.values(i.value).forEach(s=>{s.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:i,messageList:o,handleAfterLeave:c},n)},render(){var e,t,o;return l(ne,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?l(ct,{to:(o=this.to)!==null&&o!==void 0?o:"body"},l("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`],key:"message-container",style:this.containerStyle},this.messageList.map(i=>l(Ho,Object.assign({ref:n=>{n&&(this.messageRefs[i.key]=n)},internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave},wt(i,["destroy"],void 0),{duration:i.duration===void 0?this.duration:i.duration,keepAliveOnHover:i.keepAliveOnHover===void 0?this.keepAliveOnHover:i.keepAliveOnHover,closable:i.closable===void 0?this.closable:i.closable}))))):null)}}),Do=g("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[x("strong",`
 font-weight: var(--n-font-weight-strong);
 `),x("italic",{fontStyle:"italic"}),x("underline",{textDecoration:"underline"}),x("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);const Uo=Object.assign(Object.assign({},L.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}});var He=N({name:"Text",props:Uo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=q(e),i=L("Typography","-text",Do,At,e,t),n=y(()=>{const{depth:c,type:u}=e,s=u==="default"?c===void 0?"textColor":`textColor${c}Depth`:D("textColor",u),{common:{fontWeightStrong:m,fontFamilyMono:a,cubicBezierEaseInOut:f},self:{codeTextColor:h,codeBorderRadius:v,codeColor:_,codeBorder:S,[s]:O}}=i.value;return{"--n-bezier":f,"--n-text-color":O,"--n-font-weight-strong":m,"--n-font-famliy-mono":a,"--n-code-border-radius":v,"--n-code-text-color":h,"--n-code-color":_,"--n-code-border":S}}),r=o?Y("text",y(()=>`${e.type[0]}${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:t,compitableTag:Ye(e,["as","tag"]),cssVars:o?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e,t,o;const{mergedClsPrefix:i}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=[`${i}-text`,this.themeClass,{[`${i}-text--code`]:this.code,[`${i}-text--delete`]:this.delete,[`${i}-text--strong`]:this.strong,[`${i}-text--italic`]:this.italic,[`${i}-text--underline`]:this.underline}],r=(o=(t=this.$slots).default)===null||o===void 0?void 0:o.call(t);return this.code?l("code",{class:n,style:this.cssVars},this.delete?l("del",null,r):r):this.delete?l("del",{class:n,style:this.cssVars},r):l(this.compitableTag||"span",{class:n,style:this.cssVars},r)}});const qo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Wo=w("rect",{x:"64",y:"176",width:"384",height:"256",rx:"28.87",ry:"28.87",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),Go=w("path",{stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M144 80h224",fill:"currentColor"},null,-1),Yo=w("path",{stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M112 128h288",fill:"currentColor"},null,-1),Xo=[Wo,Go,Yo];var Jo=N({name:"AlbumsOutline",render:function(t,o){return z(),M("svg",qo,Xo)}});const Zo={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Qo=w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M244 400L100 256l144-144"},null,-1),en=w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M120 256h292"},null,-1),tn=[Qo,en];var on=N({name:"ArrowBack",render:function(t,o){return z(),M("svg",Zo,tn)}});const nn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},rn=w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"48",d:"M244 400L100 256l144-144"},null,-1),an=w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"48",d:"M120 256h292"},null,-1),ln=[rn,an];var sn=N({name:"ArrowBackSharp",render:function(t,o){return z(),M("svg",nn,ln)}});const cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},dn=w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M268 112l144 144l-144 144"},null,-1),un=w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48",d:"M392 256H100"},null,-1),mn=[dn,un];var hn=N({name:"ArrowForward",render:function(t,o){return z(),M("svg",cn,mn)}});const fn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},pn=w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"48",d:"M268 112l144 144l-144 144"},null,-1),vn=w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"48",d:"M392 256H100"},null,-1),gn=[pn,vn];var bn=N({name:"ArrowForwardSharp",render:function(t,o){return z(),M("svg",fn,gn)}});const xn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},yn=w("path",{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64l-64 64L169.37 320l64-64l-64-64L192 169.37l64 64l64-64L342.63 192l-64 64z",fill:"currentColor"},null,-1),_n=[yn];var wn=N({name:"CloseCircleSharp",render:function(t,o){return z(),M("svg",xn,_n)}});const Cn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},kn=Ve('<path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208s208-93.13 208-208z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75c-7.43-5.18-12-12.71-21.33-15c-8.15-2-16.5.08-24.55 1.47c-9.15 1.58-20 2.29-26.94 9.22c-6.71 6.67-10.26 15.62-17.4 22.33c-13.81 13-19.64 27.19-10.7 45.57c8.6 17.67 26.59 27.26 46 26c19.07-1.27 38.88-12.33 38.33 15.38c-.2 9.8 1.85 16.6 4.86 25.71c2.79 8.4 2.6 16.54 3.24 25.21c1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38c1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13c-1.29-15.81 1.6-28.43-10.58-41.65c-11.76-12.75-29-15.81-45.47-13.22c-8.3 1.3-41.71 6.64-28.3-12.33c2.65-3.73 7.28-6.79 10.26-10.34c2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95s8.17 7 11.64 9.56a49.89 49.89 0 0 0 21.81 9.36c13.66 2 42.22-5.94 42-23.46c-.04-8.4-7.84-20.1-10.92-27.96z" fill="currentColor"></path><path d="M287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11c-9.45-7-17.86-17.81-30.27-18.69c-5.72-.41-10.51.83-16.18-.64c-5.2-1.34-9.28-4.14-14.82-3.41c-10.35 1.36-16.88 12.42-28 10.92c-10.55-1.42-21.42-13.76-23.82-23.81c-3.08-12.92 7.14-17.11 18.09-18.26c4.57-.48 9.7-1 14.09.67c5.78 2.15 8.51 7.81 13.7 10.67c9.73 5.33 11.7-3.19 10.21-11.83c-2.23-12.94-4.83-18.22 6.71-27.12c8-6.14 14.84-10.58 13.56-21.61c-.76-6.48-4.31-9.41-1-15.86c2.51-4.91 9.4-9.34 13.89-12.27c11.59-7.56 49.65-7 34.1-28.16c-4.57-6.21-13-17.31-21-18.83c-10-1.89-14.44 9.27-21.41 14.19c-7.2 5.09-21.22 10.87-28.43 3c-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 0 0 8.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5c.42 10-1.14 15.12-7.68 22.15c-2.83 3-4.83 7.26-7.71 10.07c-3.53 3.43-2.22 2.38-7.73 3.32c-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13c6.83 20.57 20.61 36.48 29.51 56.16c9.37 20.84 34.53 15.06 45.64 33.32c9.86 16.2-.67 36.71 6.71 53.67c5.36 12.31 18 15 26.72 24c8.91 9.09 8.72 21.53 10.08 33.36a305.22 305.22 0 0 0 7.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76c2.2 2.66 9.75 4.95 6.7 5.83c4.26.7 11.85 4.68 15.4 1.76c4.68-3.84 3.43-15.66 4.24-21c2.43-15.9 10.39-31.45 21.13-43.35c10.61-11.74 25.15-19.69 34.11-33c8.73-12.98 11.36-30.49 7.74-45.68zm-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39c-2.33 2.31-7.29 10.31-10.21 8.58c-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 0 0-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7c-2-3.53-.2-11.86-.13-15.7c.11-5.6-2.44-14.91-1.06-20c1.6-5.87-1.48-2.33 3.77-3.49c2.77-.62 14.21 1.39 17.66 2.11c5.48 1.14 8.5 4.55 12.82 8c11.36 9.11 23.87 16.16 36.6 23.14c9.86 5.46 12.76 12.37 6.46 23.62z" fill="currentColor"></path><path d="M184.46 67.09c4.74 4.63 9.2 10.11 16.27 10.57c6.69.45 13-3.17 18.84 1.38c6.48 5 11.15 11.33 19.75 12.89c8.32 1.51 17.13-3.35 19.19-11.86c2-8.11-2.31-16.93-2.57-25.07c0-1.13.61-6.15-.17-7c-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 0 0-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22z" fill="currentColor"></path><path d="M356.4 123.27c8.49 0 17.11-3.8 14.37-13.62c-2.3-8.23-6.22-17.16-15.76-12.72c-6.07 2.82-14.67 10-15.38 17.12c-.81 8.08 11.11 9.22 16.77 9.22z" fill="currentColor"></path><path d="M349.62 166.24c8.67 5.19 21.53 2.75 28.07-4.66c5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54c1.81 11.05 13.66.63 16.75-3.65c2-2.79 4.71-6.93 3.8-10.56c-.84-3.39-4.8-7-6.56-10.11c-5.14-9-9.37-19.47-17.07-26.74c-7.41-7-16.52-6.19-23.55 1.08c-5.76 6-12.45 10.75-16.39 18.05c-2.78 5.13-5.91 7.58-11.54 8.91c-3.1.73-6.64 1-9.24 3.08c-7.24 5.7-3.12 19.39 3.74 23.51z" fill="currentColor"></path>',6),zn=[kn];var $n=N({name:"EarthOutline",render:function(t,o){return z(),M("svg",Cn,zn)}});const In={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Nn=w("circle",{cx:"256",cy:"256",r:"48",fill:"currentColor"},null,-1),Sn=w("circle",{cx:"256",cy:"416",r:"48",fill:"currentColor"},null,-1),Rn=w("circle",{cx:"256",cy:"96",r:"48",fill:"currentColor"},null,-1),Pn=[Nn,Sn,Rn];var Mn=N({name:"EllipsisVertical",render:function(t,o){return z(),M("svg",In,Pn)}});const An={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},On=w("path",{d:"M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200c31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z",fill:"currentColor"},null,-1),Bn=[On];var Ln=N({name:"Moon",render:function(t,o){return z(),M("svg",An,Bn)}});const jn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Tn=w("path",{d:"M440.08 341.31c-1.66-2-3.29-4-4.89-5.93c-22-26.61-35.31-42.67-35.31-118c0-39-9.33-71-27.72-95c-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14c0 75.36-13.29 91.42-35.31 118c-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66z",fill:"currentColor"},null,-1),En=w("path",{d:"M256 480a80.06 80.06 0 0 0 70.44-42.13a4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480z",fill:"currentColor"},null,-1),Fn=[Tn,En];var Hn=N({name:"Notifications",render:function(t,o){return z(),M("svg",jn,Fn)}});const Vn={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Kn=Ve('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>',9),Dn=[Kn];var Un=N({name:"SunnyOutline",render:function(t,o){return z(),M("svg",Vn,Dn)}});const qn={setup(e){const t=ke(),o=F.getMenuTree(),i=F.getCurrentMenuRoute();function n(s){return s?()=>l("i",{class:s}):()=>l(j,null,{default:()=>l(Re)})}function r(s){function m(a){const f=[];for(let h=0;h<a.length;h++){if(a[h].hide)continue;const v={name:a[h].name,menuId:a[h].menuId,icon:n(a[h].icon),original:ut(a[h])};a[h].children.length>0&&(v.children=m(a[h].children)),f.push(v)}return f}return m(s)}const c=y(()=>r(o.value));function u(s,m){F.clickMenuItem(s,a=>{t.push(a[0].routerPath)})}return(s,m)=>{var a;return z(),E(d(Lo),{class:"hb-admin-menu-com",options:d(c),"show-trigger":"","collapsed-width":64,"collapsed-icon-size":22,"key-field":"menuId","label-field":"name","onUpdate:value":u,value:((a=d(i))==null?void 0:a.menuItem.menuId)||null},null,8,["options","value"])}}};var Wn=ee(qn,[["__scopeId","data-v-45d5db1e"]]);const me=e=>(ze("data-v-1ef306a5"),e=e(),$e(),e),Gn={class:"hb-admin-head-com"},Yn={class:"head-left-area head-item-center"},Xn={class:"head-center-area head-item-center"},Jn={class:"carousel-box"},Zn=me(()=>w("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"},null,-1)),Qn=me(()=>w("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"},null,-1)),er=me(()=>w("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"},null,-1)),tr=me(()=>w("img",{class:"carousel-img",src:"https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"},null,-1)),or={class:"head-right-area head-item-center"},nr={setup(e){const t=ke();function o(){return l("div",{style:"display: flex; align-items: center; padding: 8px 12px;"},[l(_e,{round:!0,style:"margin-right: 12px;",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG"}),l("div",null,[l("div",null,[l(He,{depth:2},{default:()=>"\u6253\u5DE5\u4ED4"})]),l("div",{style:"font-size: 12px;"},[l(He,{depth:3},{default:()=>"\u6BEB\u65E0\u7591\u95EE\uFF0C\u4F60\u662F\u529E\u516C\u5BA4\u91CC\u6700\u4EAE\u7684\u661F"})])])])}const i=Ht(),n=[{key:"header",type:"render",render:o},{key:"header-divider",type:"divider"},{label:"\u5904\u7406\u7FA4\u6D88\u606F 342 \u6761",key:"stmt1"},{label:"\u88AB @ 58 \u6B21",key:"stmt2"},{label:"\u52A0\u5165\u7FA4 17 \u4E2A",key:"stmt3"},{type:"render",key:"bottom",render:()=>l(xe,{style:"margin:0"})},{label:"\u9000\u51FA\u767B\u5F55",key:"logout"}];function r(s){switch(i.info(String(s)),s){case"logout":t.push("/login")}}const c=F.getCurrentMenuRoute(),u=y(()=>{var s;return(s=c.value)==null?void 0:s.menuItem.breadcrumb});return(s,m)=>(z(),M("div",Gn,[w("div",Yn,[b(d(po),null,{default:I(()=>[(z(!0),M(ne,null,Ke(d(u),a=>(z(),E(d(xo),{key:a.menuId},{default:I(()=>[b(d(j),null,{default:I(()=>[a.icon?(z(),M("i",{key:0,class:De(a.icon)},null,2)):(z(),E(d(Re),{key:1}))]),_:2},1024),de(" "+Ue(a.name),1)]),_:2},1024))),128))]),_:1})]),w("div",Xn,[w("div",Jn,[b(d(Vt),{"show-arrow":""},{default:I(()=>[Zn,Qn,er,tr]),_:1})])]),w("div",or,[b(d(Kt),{value:d(be),"onUpdate:value":m[0]||(m[0]=a=>mt(be)?be.value=a:null)},{"checked-icon":I(()=>[b(d(j),{component:d(Ln)},null,8,["component"])]),"unchecked-icon":I(()=>[b(d(j),{component:d(Un)},null,8,["component"])]),_:1},8,["value"]),b(d(xe),{vertical:""}),b(d(j),{size:"25",color:"#CFCFCF",component:d(Hn)},null,8,["component"]),b(d(Ze),{value:"99+"}),b(d(xe),{vertical:""}),b(d(Ne),{trigger:"hover",options:n,onSelect:r},{default:I(()=>[b(d(_e),{round:"",bordered:"",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG"})]),_:1})])]))}};var rr=ee(nr,[["__scopeId","data-v-1ef306a5"]]);const ir={class:"hb-admin-nav-com"},ar={class:"nav-item-icon"},lr={class:"nav-action-box"},sr={setup(e){const t=F.getNavList(),o=F.getCurrentMenuRoute(),i=ke(),n=(h,v)=>()=>l(j,null,{default:()=>l(h,{color:v})}),r=[{label:"\u5173\u95ED\u5DE6\u4FA7",key:"left",icon:n(sn)},{label:"\u5173\u95ED\u53F3\u4FA7",key:"right",icon:n(bn)},{label:"\u5173\u95ED\u5176\u4ED6",key:"other",icon:n(Dt)},{label:"\u5173\u95ED\u5168\u90E8",key:"all",icon:n(wn,"#C03F53")}];function c(h){var v;F.closeNav(h,(v=o.value)==null?void 0:v.pageId,(_,S)=>{S.length>0&&i.push(S[0].to),t.value.length===0&&i.push("/")})}function u(h){F.closeNav("self",h.pageId,(v,_)=>{_.length>0&&i.push(_[0].to),t.value.length===0&&i.push("/")})}function s(h,v){F.clickNavItem(h,(_,S)=>{S.length>0&&(i.push(S[0].to),m(h))})}function m(h){const v=a.value.scrollLeft,_=document.getElementById(h);if(!_)return;const S=_.offsetLeft+_.clientWidth-v-a.value.clientWidth,O=_.offsetLeft-v;S>0?a.value.scrollTo({top:0,left:v+S+100,behavior:"smooth"}):O<0&&a.value.scrollTo({top:0,left:v+O-100,behavior:"smooth"})}const a=B(null);function f(h){const v=a.value.scrollLeft;h==="left"&&a.value.scrollTo({top:0,left:v-200,behavior:"smooth"}),h==="right"&&a.value.scrollTo({top:0,left:v+200,behavior:"smooth"})}return we(o,h=>{ye(()=>{h&&m(h.pageId)})}),(h,v)=>(z(),M("div",ir,[b(d(le),{strong:"",secondary:"",circle:"",onClick:v[0]||(v[0]=_=>f("left"))},{icon:I(()=>[b(d(j),{component:d(on)},null,8,["component"])]),_:1}),w("div",{class:"inline-box",ref_key:"navDom",ref:a},[d(t).length<=0?(z(),E(d(Ge),{key:0,"show-icon":!1,description:"\u4ECE\u5DE6\u4FA7\u83DC\u5355\u6253\u5F00\u9875\u9762"})):J("",!0),(z(!0),M(ne,null,Ke(d(t),_=>(z(),E(d(Ut),{closable:"",key:_.pageId,round:"",onClose:()=>{u(_)},type:_.pageId===d(o).pageId?"success":"",onClick:S=>{s(_.pageId)},id:_.pageId,class:"nav-tag"},{avatar:I(()=>[w("div",ar,[_.menuItem.icon?(z(),M("i",{key:0,class:De(["n-base-icon",_.menuItem.icon])},null,2)):(z(),E(d(j),{key:1,component:d(Re)},null,8,["component"]))])]),default:I(()=>[de(Ue(_.title)+" ",1)]),_:2},1032,["onClose","type","onClick","id"]))),128))],512),w("div",lr,[b(d(le),{strong:"",secondary:"",circle:"",onClick:v[1]||(v[1]=_=>f("right"))},{icon:I(()=>[b(d(j),{component:d(hn)},null,8,["component"])]),_:1}),b(d(Ne),{options:r,onSelect:c},{default:I(()=>[b(d(le),{text:""},{icon:I(()=>[b(d(j),{component:d(Mn)},null,8,["component"])]),_:1})]),_:1})])]))}};var cr=ee(sr,[["__scopeId","data-v-9430fa78"]]),dr="/assets/logo.ff50f9c9.png";const ur=e=>(ze("data-v-37a03ebe"),e=e(),$e(),e),mr={class:"logo-box"},hr=ur(()=>w("img",{class:"logo-image",src:dr},null,-1)),fr={key:0,class:"logo-text"},pr=de(" HappyBoot Tiger "),vr={setup(e){return(t,o)=>(z(),E(d(se),null,{default:I(()=>[b(d(ce),{class:"hb-admin-logo-com",bordered:""},{default:I(()=>[w("div",mr,[hr,d(oe)?J("",!0):(z(),M("div",fr,[b(d(qt),{type:"success"},{default:I(()=>[pr]),_:1})]))])]),_:1})]),_:1}))}};var gr=ee(vr,[["__scopeId","data-v-37a03ebe"]]);const br={},xr=e=>(ze("data-v-791c3142"),e=e(),$e(),e),yr={class:"hb-admin-copyright-com"},_r=de("HappyBoot Tiger Powered By\xA0"),wr=xr(()=>w("a",{class:"power-by",href:"https://happykit.org"},"HappyKit",-1)),Cr=[_r,wr];function kr(e,t){return z(),M("div",yr,Cr)}var zr=ee(br,[["render",kr],["__scopeId","data-v-791c3142"]]);const $r={class:"hb-admin-user-card-com"},Ir={key:0,class:"nickname"},Nr={key:1,style:{flex:"1"}},Sr={setup(e){return(t,o)=>(z(),E(d(se),null,{default:I(()=>[b(d(ce),{style:{"border-top":"solid 1px var(--n-border-color)"}},{default:I(()=>[w("div",$r,[b(d(_e),{size:"large",round:"",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG"}),d(oe)?J("",!0):(z(),M("span",Ir,"\u5343\u9633")),d(oe)?J("",!0):(z(),M("span",Nr)),d(oe)?J("",!0):(z(),E(d(xt),{key:2,align:"center",justify:"end"},{default:I(()=>[b(d(Ze),{type:"success",value:20,processing:""}),b(d(le),{round:"",text:"",style:{"align-items":"center",display:"flex"}},{default:I(()=>[b(d(j),{size:"24",component:d($n)},null,8,["component"])]),_:1})]),_:1}))])]),_:1})]),_:1}))}};var Rr=ee(Sr,[["__scopeId","data-v-5f525de6"]]);const Pr={style:{flex:"1",overflow:"auto"}},Mr={key:0,class:"empty-route-body"},$i={setup(e){function t(i){oe.value=i}const o=F.getCurrentMenuRoute();return(i,n)=>{const r=ht("router-view");return z(),E(d(Yt),{theme:d(Ot),locale:d(Wt),"date-locale":d(Gt)},{default:I(()=>[b(d(Ko),null,{default:I(()=>[b(d(se),{"has-sider":"",class:"main-layout"},{default:I(()=>[b(d(eo),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,"show-trigger":"","content-style":"display: flex;flex-direction: column;","onUpdate:collapsed":t},{default:I(()=>[w("div",null,[b(gr)]),w("div",Pr,[b(Wn)]),w("div",null,[b(Rr)])]),_:1}),b(d(se),{"content-style":"display: flex;flex-direction: column;"},{default:I(()=>[b(d(ce),{class:"main-head",bordered:""},{default:I(()=>[b(rr)]),_:1}),b(d(ce),{class:"main-nav",bordered:""},{default:I(()=>[b(cr)]),_:1}),b(d(to),{class:"main-content",embedded:""},{default:I(()=>[b(r,null,{default:I(({Component:c})=>[(z(),E(ft(c)))]),_:1}),d(o)?J("",!0):(z(),M("div",Mr,[b(d(Ge),{size:"huge",description:"\u8FD8\u6CA1\u6253\u5F00\u9875\u9762\u5450 ~"},{icon:I(()=>[b(d(j),{component:d(Jo)},null,8,["component"])]),_:1})]))]),_:1}),b(d(ko),{class:"main-foot"},{default:I(()=>[b(zr)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme","locale","date-locale"])}}};export{$i as default};
