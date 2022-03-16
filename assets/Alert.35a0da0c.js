import{p as H,q as d,y as f,a as y,b as a,d as L,c as _,f as R,u as P,h as j,k,j as B,r as F,z as N,g as u}from"./Space.cb2e4e91.js";import{f as O}from"./fade-in-height-expand.cssr.4d4702e5.js";import{b as M}from"./Icon.54169ce7.js";import{E as V,W as q,I as D,S as G}from"./Warning.97fcb637.js";import{N as K}from"./FadeInExpandTransition.0a3e7cfe.js";import{c as J}from"./_common.81364e7f.js";import{z as Q,A as S,h as U,p as s,G as X}from"./vendor.f9e4f91a.js";const Y=o=>{const{lineHeight:r,borderRadius:i,fontWeightStrong:v,baseColor:t,dividerColor:l,actionColor:z,textColor1:h,textColor2:g,closeColor:C,closeColorHover:n,closeColorPressed:e,infoColor:m,successColor:p,warningColor:b,errorColor:x,fontSize:I}=o;return Object.assign(Object.assign({},J),{fontSize:I,lineHeight:r,titleFontWeight:v,borderRadius:i,border:`1px solid ${l}`,color:z,titleTextColor:h,iconColor:g,contentTextColor:g,closeColor:C,closeColorHover:n,closeColorPressed:e,borderInfo:`1px solid ${d(t,f(m,{alpha:.25}))}`,colorInfo:d(t,f(m,{alpha:.08})),titleTextColorInfo:h,iconColorInfo:m,contentTextColorInfo:g,closeColorInfo:C,closeColorHoverInfo:n,closeColorPressedInfo:e,borderSuccess:`1px solid ${d(t,f(p,{alpha:.25}))}`,colorSuccess:d(t,f(p,{alpha:.08})),titleTextColorSuccess:h,iconColorSuccess:p,contentTextColorSuccess:g,closeColorSuccess:C,closeColorHoverSuccess:n,closeColorPressedSuccess:e,borderWarning:`1px solid ${d(t,f(b,{alpha:.33}))}`,colorWarning:d(t,f(b,{alpha:.08})),titleTextColorWarning:h,iconColorWarning:b,contentTextColorWarning:g,closeColorWarning:C,closeColorHoverWarning:n,closeColorPressedWarning:e,borderError:`1px solid ${d(t,f(x,{alpha:.25}))}`,colorError:d(t,f(x,{alpha:.08})),titleTextColorError:h,iconColorError:x,contentTextColorError:g,closeColorError:C,closeColorHoverError:n,closeColorPressedError:e})},Z={name:"Alert",common:H,self:Y};var ee=Z,oe=y("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
`,[a("icon",{color:"var(--n-icon-color)"}),y("alert-body",{border:"var(--n-border)",padding:"var(--n-padding)"},[a("title",{color:"var(--n-title-text-color)"}),a("content",{color:"var(--n-content-text-color)"})]),O({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),a("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),a("close",`
 transition: color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 font-size: var(--n-close-size);
 `),L("show-icon",[y("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),y("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[a("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[_("& +",[a("content",{marginTop:"9px"})])]),a("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),a("icon",{transition:"color .3s var(--n-bezier)"})]);const re=Object.assign(Object.assign({},P.props),{title:{type:String,default:void 0},showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:{type:Boolean,default:!1},onClose:Function,onAfterLeave:{type:Function,default:void 0},onAfterHide:{type:Function,validator:()=>!0,default:void 0}});var de=Q({name:"Alert",inheritAttrs:!1,props:re,setup(o){const{mergedClsPrefixRef:r,inlineThemeDisabled:i}=R(o),v=P("Alert","-alert",oe,ee,o,r),t=S(()=>{const{common:{cubicBezierEaseInOut:n},self:e}=v.value,{fontSize:m,borderRadius:p,titleFontWeight:b,lineHeight:x,iconSize:I,iconMargin:T,closeSize:A,closeMargin:$,padding:E}=e,{type:c}=o,{left:W,right:w}=N(T);return{"--n-bezier":n,"--n-color":e[u("color",c)],"--n-close-color":e[u("closeColor",c)],"--n-close-color-hover":e[u("closeColorHover",c)],"--n-close-color-pressed":e[u("closeColorPressed",c)],"--n-icon-color":e[u("iconColor",c)],"--n-border":e[u("border",c)],"--n-title-text-color":e[u("titleTextColor",c)],"--n-content-text-color":e[u("contentTextColor",c)],"--n-line-height":x,"--n-border-radius":p,"--n-font-size":m,"--n-title-font-weight":b,"--n-icon-size":I,"--n-icon-margin":T,"--n-close-size":A,"--n-close-margin":$,"--n-padding":E,"--n-icon-margin-left":W,"--n-icon-margin-right":w}}),l=i?j("alert",S(()=>o.type[0]),t,o):void 0,z=U(!0),h=()=>{const{onAfterLeave:n,onAfterHide:e}=o;n&&n(),e&&e()};return{mergedClsPrefix:r,visible:z,handleCloseClick:()=>{var n;Promise.resolve((n=o.onClose)===null||n===void 0?void 0:n.call(o)).then(e=>{e!==!1&&(z.value=!1)})},handleAfterLeave:()=>{h()},mergedTheme:v,cssVars:i?void 0:t,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var o;return(o=this.onRender)===null||o===void 0||o.call(this),s(K,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:r,$slots:i}=this,v={class:[`${r}-alert`,this.themeClass,this.showIcon&&`${r}-alert--show-icon`],style:this.cssVars,role:"alert"};return this.visible?s("div",Object.assign({},X(this.$attrs,v)),this.closable&&s(M,{clsPrefix:r,class:`${r}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&s("div",{class:`${r}-alert__icon`,"aria-hidden":"true"},k(i.icon,()=>[s(B,{clsPrefix:r},{default:()=>{switch(this.type){case"success":return s(G,null);case"info":return s(D,null);case"warning":return s(q,null);case"error":return s(V,null);default:return null}}})])),s("div",{class:`${r}-alert-body`},F(i.header,t=>{const l=t||this.title;return l?s("div",{class:`${r}-alert-body__title`},l):null}),i.default&&s("div",{class:`${r}-alert-body__content`},i))):null}})}});export{de as N};
