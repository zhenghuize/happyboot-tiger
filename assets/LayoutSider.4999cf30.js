import{a as l,d,b as t,c as h,j as Y,u as B,f as A,h as F,n as v}from"./Space.cb2e4e91.js";import{C as L}from"./ChevronRight.fb8aca55.js";import{z as C,p as a,D as N,h as y,A as p,C as P,E as W}from"./vendor.f9e4f91a.js";import{b as U,a as V,p as D,l as H}from"./Layout.851e249c.js";import{u as q,f as x}from"./Icon.54169ce7.js";import{N as K}from"./ScrollBar.244c3ed8.js";var X=l("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[d("bordered",[t("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),t("left-placement",[d("bordered",[t("border",`
 right: 0;
 `)])]),d("right-placement",`
 justify-content: flex-start;
 `,[d("bordered",[t("border",`
 left: 0;
 `)]),d("collapsed",[l("layout-toggle-button",[l("base-icon",`
 transform: rotate(180deg);
 `)]),l("layout-toggle-bar",[h("&:hover",[t("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),l("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[l("base-icon",`
 transform: rotate(0);
 `)]),l("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[h("&:hover",[t("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),d("collapsed",[l("layout-toggle-bar",[h("&:hover",[t("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),l("layout-toggle-button",[l("base-icon",`
 transform: rotate(0);
 `)])]),l("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[l("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),l("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[t("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),t("bottom",`
 position: absolute;
 top: 34px;
 `),h("&:hover",[t("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),t("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),t("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),h("&:hover",[t("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),t("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),l("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),d("show-content",[l("layout-sider-scroll-container",{opacity:1})]),d("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),G=C({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},a(Y,{clsPrefix:e},{default:()=>a(L,null)}))}}),J=C({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return a("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},a("div",{class:`${e}-layout-toggle-bar__top`}),a("div",{class:`${e}-layout-toggle-bar__bottom`}))}});const Q={position:D,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function};var ne=C({name:"LayoutSider",props:Object.assign(Object.assign({},B.props),Q),setup(e){const n=N(U),c=y(null),b=y(null),R=p(()=>x(f.value?e.collapsedWidth:e.width)),_=p(()=>e.collapseMode!=="transform"?{}:{minWidth:x(e.width)}),$=p(()=>n?n.siderPlacement:"left"),S=y(e.defaultCollapsed),f=q(P(e,"collapsed"),S);function j(s,o){if(e.nativeScrollbar){const{value:r}=c;r&&(o===void 0?r.scrollTo(s):r.scrollTo(s,o))}else{const{value:r}=b;r&&r.scrollTo(s,o)}}function I(){const{"onUpdate:collapsed":s,onUpdateCollapsed:o,onExpand:r,onCollapse:m}=e,{value:g}=f;o&&v(o,!g),s&&v(s,!g),S.value=!g,g?r&&v(r):m&&v(m)}W(V,{collapsedRef:f,collapseModeRef:P(e,"collapseMode")});const{mergedClsPrefixRef:T,inlineThemeDisabled:z}=A(e),k=B("Layout","-layout-sider",X,H,e,T);function O(s){var o,r;s.propertyName==="max-width"&&(f.value?(o=e.onAfterLeave)===null||o===void 0||o.call(e):(r=e.onAfterEnter)===null||r===void 0||r.call(e))}const E={scrollTo:j},w=p(()=>{const{common:{cubicBezierEaseInOut:s},self:o}=k.value,{siderToggleButtonColor:r,siderToggleButtonBorder:m,siderToggleBarColor:g,siderToggleBarColorHover:M}=o,i={"--n-bezier":s,"--n-toggle-button-color":r,"--n-toggle-button-border":m,"--n-toggle-bar-color":g,"--n-toggle-bar-color-hover":M};return e.inverted?(i["--n-color"]=o.siderColorInverted,i["--n-text-color"]=o.textColorInverted,i["--n-border-color"]=o.siderBorderColorInverted,i["--n-toggle-button-icon-color"]=o.siderToggleButtonIconColorInverted,i.__invertScrollbar=o.__invertScrollbar):(i["--n-color"]=o.siderColor,i["--n-text-color"]=o.textColor,i["--n-border-color"]=o.siderBorderColor,i["--n-toggle-button-icon-color"]=o.siderToggleButtonIconColor),i}),u=z?F("layout-sider",p(()=>e.inverted?"a":"b"),w,e):void 0;return Object.assign({scrollableElRef:c,scrollbarInstRef:b,mergedClsPrefix:T,mergedTheme:k,styleMaxWidth:R,mergedCollapsed:f,scrollContainerStyle:_,siderPlacement:$,handleTransitionend:O,handleTriggerClick:I,inlineThemeDisabled:z,cssVars:w,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender},E)},render(){var e;const{mergedClsPrefix:n,mergedCollapsed:c,showTrigger:b}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("aside",{class:[`${n}-layout-sider`,this.themeClass,`${n}-layout-sider--${this.position}-positioned`,`${n}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${n}-layout-sider--bordered`,c&&`${n}-layout-sider--collapsed`,(!c||this.showCollapsedContent)&&`${n}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:x(this.width)}]},this.nativeScrollbar?a("div",{class:`${n}-layout-sider-scroll-container`,onScroll:this.onScroll,style:[this.scrollContainerStyle,this.contentStyle,{overflow:"auto"}],ref:"scrollableElRef"},this.$slots):a(K,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),b?b==="bar"?a(J,{clsPrefix:n,style:c?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):a(G,{clsPrefix:n,style:c?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?a("div",{class:`${n}-layout-sider__border`}):null)}});export{ne as N};
