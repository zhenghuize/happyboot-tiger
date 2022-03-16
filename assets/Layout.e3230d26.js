import{o as S,p as x,q as v,a as C,d as B,l as p,u as y,f as I,h as T}from"./Space.5f8f31c2.js";import{N as L}from"./ScrollBar.4563dd35.js";import{s as R}from"./Icon.5554db87.js";import{z as j,h as g,E as z,A as O,p as f}from"./vendor.43ce0c4d.js";const $=u=>{const{baseColor:o,textColor2:e,bodyColor:t,cardColor:l,dividerColor:r,actionColor:d,scrollbarColor:h,scrollbarColorHover:b,invertedColor:s}=u;return{textColor:e,textColorInverted:"#FFF",color:t,colorEmbedded:d,headerColor:l,headerColorInverted:s,footerColor:d,footerColorInverted:s,headerBorderColor:r,headerBorderColorInverted:s,footerBorderColor:r,footerBorderColorInverted:s,siderBorderColor:r,siderBorderColorInverted:s,siderColor:l,siderColorInverted:s,siderToggleButtonBorder:`1px solid ${r}`,siderToggleButtonColor:o,siderToggleButtonIconColor:e,siderToggleButtonIconColorInverted:e,siderToggleBarColor:v(t,h),siderToggleBarColorHover:v(t,b),__invertScrollbar:"true"}},P=S({name:"Layout",common:x,peers:{Scrollbar:R},self:$});var E=P,w=C("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[C("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),B("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]);const M=p("n-layout-sider"),F={type:String,default:"static"},N={embedded:Boolean,position:F,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},H=p("n-layout");function K(u){return j({name:u?"LayoutContent":"Layout",props:Object.assign(Object.assign({},y.props),N),setup(o){const e=g(null),t=g(null),{mergedClsPrefixRef:l,inlineThemeDisabled:r}=I(o),d=y("Layout","-layout",w,E,o,l);function h(c,n){if(o.nativeScrollbar){const{value:i}=e;i&&(n===void 0?i.scrollTo(c):i.scrollTo(c,n))}else{const{value:i}=t;i&&i.scrollTo(c,n)}}z(H,o);const b={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},s={scrollTo:h},m=O(()=>{const{common:{cubicBezierEaseInOut:c},self:n}=d.value;return{"--n-bezier":c,"--n-color":o.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),a=r?T("layout",void 0,m,o):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:e,scrollbarInstRef:t,hasSiderStyle:b,mergedTheme:d,cssVars:r?void 0:m,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender},s)},render(){var o;const{mergedClsPrefix:e,hasSider:t}=this;(o=this.onRender)===null||o===void 0||o.call(this);const l=t?this.hasSiderStyle:void 0,r=[this.themeClass,u&&`${e}-layout-content`,`${e}-layout`,`${e}-layout--${this.position}-positioned`];return f("div",{class:r,style:this.cssVars},this.nativeScrollbar?f("div",{ref:"scrollableElRef",class:`${e}-layout-scroll-container`,style:[this.contentStyle,l],onScroll:this.onScroll},this.$slots):f(L,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,l]}),this.$slots))}})}var q=K(!1);export{q as N,M as a,H as b,K as c,E as l,F as p};
