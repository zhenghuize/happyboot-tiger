import{l as de,m as je,c as s,K as ce,a as $,b as a,G as ee,q as ue,C as U,d as p,f as fe,u as be,t as Ge,I as Ke,g as t,y as G,h as We,L as ae,r as se,M as Ve,n as qe}from"./Space.cb2e4e91.js";import{D as he,E as ge,A as P,y as me,z as F,p as c,T as Le,C as ve,h as N,J as Qe,i as Ae}from"./vendor.f9e4f91a.js";import{b as Xe}from"./light.076f84b5.js";import{N as Ye}from"./FadeInExpandTransition.0a3e7cfe.js";const le=de("n-form-item");function Je(e,{defaultSize:n="medium",mergedSize:d,mergedDisabled:u}={}){const i=he(le,null);ge(le,null);const y=P(d?()=>d(i):()=>{const{size:x}=e;if(x)return x;if(i){const{mergedSize:O}=i;if(O.value!==void 0)return O.value}return n}),E=P(u?()=>u(i):()=>{const{disabled:x}=e;return x!==void 0?x:i?i.disabled.value:!1}),H=P(()=>{const{status:x}=e;return x||(i==null?void 0:i.mergedValidationStatus.value)});return me(()=>{i&&i.restoreValidation()}),{mergedSizeRef:y,mergedDisabledRef:E,mergedStatusRef:H,nTriggerFormBlur(){i&&i.handleContentBlur()},nTriggerFormChange(){i&&i.handleContentChange()},nTriggerFormFocus(){i&&i.handleContentFocus()},nTriggerFormInput(){i&&i.handleContentInput()}}}var pe=F({name:"BaseIconSwitchTransition",setup(e,{slots:n}){const d=je();return()=>c(Le,{name:"icon-switch-transition",appear:d.value},n)}});const{cubicBezierEaseInOut:Ue,transformDebounceScale:Ze}=ce;function Z({originalTransform:e="",left:n=0,top:d=0,transition:u=`all .3s ${Ue} !important`}={}){return[s("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:n,top:d,opacity:0}),s("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`${Ze} ${e}`,left:n,top:d,opacity:1}),s("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:n,top:d,transition:u})]}var eo=s([s("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),s("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),s("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),s("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),$("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[a("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 position: absolute;
 width: 100%;
 height: 100%;
 `,[a("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),a("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[a("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[a("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),a("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[a("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),a("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[a("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),a("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Z({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),a("icon",`
 height: 1em;
 width: 1em;
 `,[Z()])])]),oo=F({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(e){ee("-base-loading",eo,ve(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:n,strokeWidth:d,stroke:u,scale:i}=this,y=n/i;return c("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},c(pe,null,{default:()=>this.show?c("div",{class:`${e}-base-loading__container`,role:"loading-container"},c("div",{class:`${e}-base-loading__container-layer`},c("div",{class:`${e}-base-loading__container-layer-left`},c("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*y} ${2*y}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},c("circle",{fill:"none",stroke:"currentColor","stroke-width":d,"stroke-linecap":"round",cx:y,cy:y,r:n-d/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),c("div",{class:`${e}-base-loading__container-layer-patch`},c("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*y} ${2*y}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},c("circle",{fill:"none",stroke:"currentColor","stroke-width":d,"stroke-linecap":"round",cx:y,cy:y,r:n-d/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))),c("div",{class:`${e}-base-loading__container-layer-right`},c("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*y} ${2*y}`,xmlns:"http://www.w3.org/2000/svg",style:{color:u}},c("circle",{fill:"none",stroke:"currentColor","stroke-width":d,"stroke-linecap":"round",cx:y,cy:y,r:n-d/2,"stroke-dasharray":4.91*n,"stroke-dashoffset":2.46*n}))))):c("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),ro=$("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),to=F({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){ee("-base-wave",ro,ve(e,"clsPrefix"));const n=N(null),d=N(!1);let u=null;return me(()=>{u!==null&&window.clearTimeout(u)}),{active:d,selfRef:n,play(){u!==null&&(window.clearTimeout(u),d.value=!1,u=null),Qe(()=>{var i;(i=n.value)===null||i===void 0||i.offsetHeight,d.value=!0,u=window.setTimeout(()=>{d.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:e}=this;return c("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});const{cubicBezierEaseInOut:z}=ce;function no({duration:e=".2s",delay:n=".1s"}={}){return[s("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),s("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),s("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${z},
 max-width ${e} ${z} ${n},
 margin-left ${e} ${z} ${n},
 margin-right ${e} ${z} ${n};
 `),s("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${z} ${n},
 max-width ${e} ${z},
 margin-left ${e} ${z},
 margin-right ${e} ${z};
 `)]}function T(e){return ue(e,[255,255,255,.16])}function K(e){return ue(e,[0,0,0,.12])}const f="0!important",ye="-1px!important";function _(e){return p(e+"-type",[s("& +",[$("button",{},[p(e+"-type",[a("border",{borderLeftWidth:f}),a("state-border",{left:ye})])])])])}function I(e){return p(e+"-type",[s("& +",[$("button",[p(e+"-type",[a("border",{borderTopWidth:f}),a("state-border",{top:ye})])])])])}var io=$("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[U("vertical",{flexDirection:"row"},[$("button",[s("&:first-child:not(:last-child)",`
 margin-right: ${f};
 border-top-right-radius: ${f};
 border-bottom-right-radius: ${f};
 `),s("&:last-child:not(:first-child)",`
 margin-left: ${f};
 border-top-left-radius: ${f};
 border-bottom-left-radius: ${f};
 `),s("&:not(:first-child):not(:last-child)",`
 margin-left: ${f};
 margin-right: ${f};
 border-radius: ${f};
 `),_("default"),p("ghost",[_("primary"),_("info"),_("success"),_("warning"),_("error")])])]),p("vertical",{flexDirection:"column"},[$("button",[s("&:first-child:not(:last-child)",`
 margin-bottom: ${f};
 margin-left: ${f};
 margin-right: ${f};
 border-bottom-left-radius: ${f};
 border-bottom-right-radius: ${f};
 `),s("&:last-child:not(:first-child)",`
 margin-top: ${f};
 margin-left: ${f};
 margin-right: ${f};
 border-top-left-radius: ${f};
 border-top-right-radius: ${f};
 `),s("&:not(:first-child):not(:last-child)",`
 margin: ${f};
 border-radius: ${f};
 `),I("default"),p("ghost",[I("primary"),I("info"),I("success"),I("warning"),I("error")])])])]);const xe=de("n-button-group"),ao={size:{type:String,default:void 0},vertical:Boolean};F({name:"ButtonGroup",props:ao,setup(e){const{mergedClsPrefixRef:n}=fe(e);return ee("-button-group",io,n),ge(xe,e),{mergedClsPrefix:n}},render(){const{mergedClsPrefix:e}=this;return c("div",{class:[`${e}-button-group`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}});var so=s([$("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p("color",[a("border",{borderColor:"var(--n-border-color)"}),p("disabled",[a("border",{borderColor:"var(--n-border-color-disabled)"})]),U("disabled",[s("&:focus",[a("state-border",{borderColor:"var(--n-border-color-focus)"})]),s("&:hover",[a("state-border",{borderColor:"var(--n-border-color-hover)"})]),s("&:active",[a("state-border",{borderColor:"var(--n-border-color-pressed)"})]),p("pressed",[a("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),p("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[a("border",{border:"var(--n-border-disabled)"})]),U("disabled",[s("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[a("state-border",{border:"var(--n-border-focus)"})]),s("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[a("state-border",{border:"var(--n-border-hover)"})]),s("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[a("state-border",{border:"var(--n-border-pressed)"})]),p("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[a("state-border",{border:"var(--n-border-pressed)"})])]),p("loading",{"pointer-events":"none"}),$("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[p("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),typeof window!="undefined"&&"MozBoxSizing"in document.createElement("div").style?s("&::moz-focus-inner",{border:0}):null,a("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),a("border",{border:"var(--n-border)"}),a("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),a("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[$("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[Z({top:"50%",originalTransform:"translateY(-50%)"})]),no()]),a("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[s("~",[a("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),p("block",`
 display: flex;
 width: 100%;
 `),p("dashed",[a("border, state-border",{borderStyle:"dashed !important"})]),p("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),s("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),s("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const lo=Object.assign(Object.assign({},be.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],internalAutoFocus:Boolean}),we=F({name:"Button",props:lo,setup(e){const n=N(null),d=N(null),u=N(!1);Ae(()=>{const{value:r}=n;r&&!e.disabled&&e.focusable&&e.internalAutoFocus&&r.focus({preventScroll:!0})});const i=Ge(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),y=he(xe,{}),{mergedSizeRef:E}=Je({},{defaultSize:"medium",mergedSize:r=>{const{size:m}=e;if(m)return m;const{size:C}=y;if(C)return C;const{mergedSize:o}=r||{};return o?o.value:"medium"}}),H=P(()=>e.focusable&&!e.disabled),x=r=>{var m;r.preventDefault(),!e.disabled&&H.value&&((m=n.value)===null||m===void 0||m.focus({preventScroll:!0}))},O=r=>{var m;if(!e.disabled&&!e.loading){const{onClick:C}=e;C&&qe(C,r),e.text||(m=d.value)===null||m===void 0||m.play()}},$e=r=>{switch(r.code){case"Enter":case"NumpadEnter":if(!e.keyboard)return;u.value=!1}},Ce=r=>{switch(r.code){case"Enter":case"NumpadEnter":if(!e.keyboard||e.loading){r.preventDefault();return}u.value=!0}},ke=()=>{u.value=!1},{inlineThemeDisabled:oe,mergedClsPrefixRef:W,mergedRtlRef:ze}=fe(e),Be=be("Button","-button",so,Xe,e,W),Se=Ke("Button",ze,W),re=P(()=>{const r=Be.value,{common:{cubicBezierEaseInOut:m,cubicBezierEaseOut:C},self:o}=r,{rippleDuration:V,opacityDisabled:D,fontWeight:q,fontWeightStrong:L}=o,w=E.value,{dashed:Q,type:B,ghost:A,text:k,color:b,round:te,circle:X,textColor:S,secondary:Te,tertiary:ne,quaternary:Pe,strong:Re}=e,_e={"font-weight":Re?L:q};let h={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const M=B==="tertiary",ie=B==="default",l=M?"default":B;if(k){const g=S||b,v=g||o[t("textColorText",l)];h={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":v,"--n-text-color-hover":g?T(g):o[t("textColorTextHover",l)],"--n-text-color-pressed":g?K(g):o[t("textColorTextPressed",l)],"--n-text-color-focus":g?T(g):o[t("textColorTextHover",l)],"--n-text-color-disabled":g||o[t("textColorTextDisabled",l)]}}else if(A||Q){const g=S||b;h={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":b||o[t("rippleColor",l)],"--n-text-color":g||o[t("textColorGhost",l)],"--n-text-color-hover":g?T(g):o[t("textColorGhostHover",l)],"--n-text-color-pressed":g?K(g):o[t("textColorGhostPressed",l)],"--n-text-color-focus":g?T(g):o[t("textColorGhostHover",l)],"--n-text-color-disabled":g||o[t("textColorGhostDisabled",l)]}}else if(Te){const g=ie?o.textColor:M?o.textColorTertiary:o[t("color",l)],v=b||g,j=B!=="default"&&B!=="tertiary";h={"--n-color":j?G(v,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":j?G(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":j?G(v,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":j?G(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":v,"--n-text-color-hover":v,"--n-text-color-pressed":v,"--n-text-color-focus":v,"--n-text-color-disabled":v}}else if(ne||Pe){const g=ie?o.textColor:M?o.textColorTertiary:o[t("color",l)],v=b||g;ne?(h["--n-color"]=o.colorTertiary,h["--n-color-hover"]=o.colorTertiaryHover,h["--n-color-pressed"]=o.colorTertiaryPressed,h["--n-color-focus"]=o.colorSecondaryHover,h["--n-color-disabled"]=o.colorTertiary):(h["--n-color"]=o.colorQuaternary,h["--n-color-hover"]=o.colorQuaternaryHover,h["--n-color-pressed"]=o.colorQuaternaryPressed,h["--n-color-focus"]=o.colorQuaternaryHover,h["--n-color-disabled"]=o.colorQuaternary),h["--n-ripple-color"]="#0000",h["--n-text-color"]=v,h["--n-text-color-hover"]=v,h["--n-text-color-pressed"]=v,h["--n-text-color-focus"]=v,h["--n-text-color-disabled"]=v}else h={"--n-color":b||o[t("color",l)],"--n-color-hover":b?T(b):o[t("colorHover",l)],"--n-color-pressed":b?K(b):o[t("colorPressed",l)],"--n-color-focus":b?T(b):o[t("colorFocus",l)],"--n-color-disabled":b||o[t("colorDisabled",l)],"--n-ripple-color":b||o[t("rippleColor",l)],"--n-text-color":S||(b?o.textColorPrimary:M?o.textColorTertiary:o[t("textColor",l)]),"--n-text-color-hover":S||(b?o.textColorHoverPrimary:o[t("textColorHover",l)]),"--n-text-color-pressed":S||(b?o.textColorPressedPrimary:o[t("textColorPressed",l)]),"--n-text-color-focus":S||(b?o.textColorFocusPrimary:o[t("textColorFocus",l)]),"--n-text-color-disabled":S||(b?o.textColorDisabledPrimary:o[t("textColorDisabled",l)])};let Y={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};k?Y={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Y={"--n-border":o[t("border",l)],"--n-border-hover":o[t("borderHover",l)],"--n-border-pressed":o[t("borderPressed",l)],"--n-border-focus":o[t("borderFocus",l)],"--n-border-disabled":o[t("borderDisabled",l)]};const{[t("height",w)]:J,[t("fontSize",w)]:Ie,[t("padding",w)]:Ee,[t("paddingRound",w)]:Ne,[t("iconSize",w)]:Fe,[t("borderRadius",w)]:He,[t("iconMargin",w)]:Oe,waveOpacity:De}=o,Me={"--n-width":X&&!k?J:"initial","--n-height":k?"initial":J,"--n-font-size":Ie,"--n-padding":X||k?"initial":te?Ne:Ee,"--n-icon-size":Fe,"--n-icon-margin":Oe,"--n-border-radius":k?"initial":X||te?J:He};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":m,"--n-bezier-ease-out":C,"--n-ripple-duration":V,"--n-opacity-disabled":D,"--n-wave-opacity":De},_e),h),Y),Me)}),R=oe?We("button",P(()=>{let r="";const{dashed:m,type:C,ghost:o,text:V,color:D,round:q,circle:L,textColor:w,secondary:Q,tertiary:B,quaternary:A,strong:k}=e;m&&(r+="a"),o&&(r+="b"),V&&(r+="c"),q&&(r+="d"),L&&(r+="e"),Q&&(r+="f"),B&&(r+="g"),A&&(r+="h"),k&&(r+="i"),D&&(r+="j"+ae(D)),w&&(r+="k"+ae(w));const{value:b}=E;return r+="l"+b[0],r+="m"+C[0],r}),re,e):void 0;return{selfElRef:n,waveElRef:d,mergedClsPrefix:W,mergedFocusable:H,mergedSize:E,showBorder:i,enterPressed:u,rtlEnabled:Se,handleMousedown:x,handleKeydown:Ce,handleBlur:ke,handleKeyup:$e,handleClick:O,customColorCssVars:P(()=>{const{color:r}=e;if(!r)return null;const m=T(r);return{"--n-border-color":r,"--n-border-color-hover":m,"--n-border-color-pressed":K(r),"--n-border-color-focus":m,"--n-border-color-disabled":r}}),cssVars:oe?void 0:re,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const{mergedClsPrefix:e,tag:n,onRender:d}=this;d==null||d();const u=se(this.$slots.default,i=>i&&c("span",{class:`${e}-button__content`},i));return c(n,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,c(Ye,{width:!0},{default:()=>se(this.$slots.icon,i=>(this.loading||i)&&c("span",{class:`${e}-button__icon`,style:{margin:Ve(this.$slots.default)?"0":""}},c(pe,null,{default:()=>this.loading?c(oo,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):c("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},i)})))}),this.iconPlacement==="left"&&u,this.text?null:c(to,{ref:"waveElRef",clsPrefix:e}),this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});var ho=we;const go=we;export{ho as N,go as X,oo as a,pe as b,Z as c,no as d,to as e,le as f,Je as u};
