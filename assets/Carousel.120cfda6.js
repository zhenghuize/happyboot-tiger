import{z as re,h as M,D as me,S as rt,p as b,A as m,i as Oe,y as Xe,E as st,N as it,J as Ne,Z as ut,B as le,C as ct,F as Ue,H as dt,I as ft,T as vt}from"./vendor.43ce0c4d.js";import{l as ht,f as se,E as pt,a as gt,b as c,c as E,d as f,u as Ye,h as mt,v as xt,H as Ee}from"./Space.5f8f31c2.js";import{j as wt,V as Ve,o as H,a as J}from"./Icon.5554db87.js";import{k as _e}from"./Popover.2d9bbfec.js";import{c as bt}from"./light.f09ff53e.js";function $e(t){return window.TouchEvent&&t instanceof window.TouchEvent}function Ae(t,l){let o=t.clientWidth,r=t.clientHeight;if(l){const p=getComputedStyle(t);return o=o-parseFloat(p.getPropertyValue("padding-left"))-parseFloat(p.getPropertyValue("padding-right")),r=r-parseFloat(p.getPropertyValue("padding-top"))-parseFloat(p.getPropertyValue("padding-bottom")),{width:o,height:r}}return{width:o,height:r}}function Be(t,l,o){return t<l?l:t>o?o:t}function yt(t){if(t===void 0)return 0;if(typeof t=="number")return t;const l=/^((\d+)?\.?\d+?)(ms|s)?$/,o=t.match(l);if(o){const[,r,,p="ms"]=o;return Number(r)*(p==="ms"?1:1e3)}return 0}function Me(t,l,o){return o?t===0?l-3:t===l-1?0:t-1:t}function je(t,l){return l?t+1:t}function St(t,l,o){return t<0?null:t===0?o?l-1:null:t-1}function Ct(t,l,o){return t>l-1?null:t===l-1?o?0:null:t+1}const Pt=(...t)=>t,ie=ht("n-carousel-methods"),Rt={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean};var It=re({name:"CarouselDots",props:Rt,setup(t){const{mergedClsPrefixRef:l}=se(t),o=M([]),r=me(ie,null);function p(d,v){switch(d.code){case"Enter":case"NumpadEnter":case"Space":r.to(v);return}t.keyboard&&C(d)}function P(d){t.trigger==="hover"&&r.to(d)}function y(d){t.trigger==="click"&&r.to(d)}function C(d){var v;const{code:S}=d,D=r.isVertical(),j=S==="PageUp"||S==="ArrowUp",L=S==="PageDown"||S==="ArrowDown",I=S==="PageUp"||S==="ArrowRight",x=S==="PageDown"||S==="ArrowLeft";if(D&&(j&&r.isNextDisabled()||L&&r.isPrevDisabled())||!D&&(I&&r.isNextDisabled()||x&&r.isPrevDisabled())||d.shiftKey||d.altKey||d.ctrlKey||d.metaKey)return;const R=(v=document.activeElement)===null||v===void 0?void 0:v.nodeName.toLowerCase();R==="input"||R==="textarea"||((D?j:I)?(d.preventDefault(),r.next(),z(r.getCurrentIndex())):(D?L:x)&&(d.preventDefault(),r.prev(),z(r.getCurrentIndex())))}function z(d=t.currentIndex){const{value:v}=o;d>=0&&d<v.length&&v[d].focus()}return rt(()=>o.value.length=0),{mergedClsPrefix:l,dotEls:o,handleKeydown:p,handleMouseenter:P,handleClick:y}},render(){const{mergedClsPrefix:t,dotEls:l}=this;return b("div",{class:[`${t}-carousel__dots`,`${t}-carousel__dots--${this.dotType}`],role:"tablist"},wt(this.total,o=>{const r=o===this.currentIndex;return b("div",{"aria-selected":r,ref:p=>l.push(p),role:"button",tabindex:"0",class:[`${t}-carousel__dot`,r&&`${t}-carousel__dot--active`],key:o,onClick:()=>this.handleClick(o),onMouseenter:()=>this.handleMouseenter(o),onKeydown:p=>this.handleKeydown(p,o)})}))}});const zt=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),kt=b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},b("g",{fill:"none"},b("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})));var Dt=re({name:"CarouselArrow",setup(t){const{mergedClsPrefixRef:l}=se(t),{isVertical:o,isPrevDisabled:r,isNextDisabled:p,prev:P,next:y}=me(ie,null);return{mergedClsPrefix:l,isVertical:o,isPrevDisabled:r,isNextDisabled:p,prev:P,next:y}},render(){const{mergedClsPrefix:t}=this;return b("div",{class:`${t}-carousel__arrow-group`},b("div",{class:[`${t}-carousel__arrow`,this.isPrevDisabled()&&`${t}-carousel__arrow--disabled`],role:"button",onClick:this.prev},zt),b("div",{class:[`${t}-carousel__arrow`,this.isNextDisabled()&&`${t}-carousel__arrow--disabled`],role:"button",onClick:this.next},kt))}}),Tt=re({name:"CarouselItem",setup(t){const{mergedClsPrefixRef:l}=se(t),o=me(ie,null);o||pt("carousel-item","`n-carousel-item` must be placed inside `n-carousel`.");const r=M(),p=m(()=>{const{value:v}=r;return Boolean(v&&o.isPrev(v))}),P=m(()=>{const{value:v}=r;return Boolean(v&&o.isNext(v))}),y=m(()=>{const{value:v}=r;return Boolean(v&&o.isActive(v))}),C=m(()=>{const{value:v}=r;return v&&o.getSlideStyle(v)}),z=m(()=>{const{value:v}=r;return v&&o.getSlideIndex(v)});function d(v){const{value:S}=z;S!==void 0&&(o==null||o.onCarouselItemClick(S,v))}return Oe(()=>o.addSlide(r.value)),Xe(()=>{o.removeSlide(r.value)}),{mergedClsPrefix:l,selfElRef:r,isPrev:p,isNext:P,isActive:y,index:z,style:C,handleClick:d}},render(){var t;const{$slots:l,mergedClsPrefix:o,isPrev:r,isNext:p,isActive:P,index:y,style:C}=this,z=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:P,[`${o}-carousel__slide--prev`]:r,[`${o}-carousel__slide--next`]:p}];return b("div",{ref:"selfElRef",class:z,role:"option",tabindex:"-1","data-index":y,"aria-hidden":!P,style:C,onClickCapture:this.handleClick},(t=l.default)===null||t===void 0?void 0:t.call(l,{isPrev:r,isNext:p,isActive:P,index:y}))}}),Nt=gt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 touch-action: pan-y;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[E("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[E("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[E("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 font-size: 18px;
 `,[E("svg",`
 height: 1em;
 width: 1em;
 `),E("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",[c("slides",`
 flex-direction: column;
 touch-action: pan-x;
 `),f("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[c("slides",[E(">",[E("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[E("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[E("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[E("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[E("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%);
 transition-property: opacity;
 `,[f("current",`
 opacity: 1;
 `)])]),f("card",[c("slides",`
 perspective: 1200px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);const Et=Pt("transitionDuration","transitionTimingFunction"),Vt=Object.assign(Object.assign({},Ye.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let ge=!1;var Lt=re({name:"Carousel",props:Vt,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:o}=se(t),r=M(null),p=M([]),P={value:[]},y=m(()=>t.effect==="custom"),C=m(()=>!y.value&&t.effect==="slide"),z=m(()=>t.loop&&t.slidesPerView===1),d=m(()=>C.value&&z.value),v=m(()=>y.value||t.centeredSlides||t.effect!=="slide"?1:t.slidesPerView),S=m(()=>y.value?1:t.slidesPerView),D=m(()=>v.value==="auto"||t.slidesPerView==="auto"&&t.centeredSlides),j=m(()=>t.transitionStyle?_e(t.transitionStyle,Et):{}),L=m(()=>y.value?0:yt(j.value.transitionDuration)),I=m(()=>t.direction==="vertical"),x=m(()=>I.value?"height":"width"),R=M({width:0,height:0}),k=m(()=>{const{value:e}=p,{length:n}=e;if(!n)return[];if(D.value)return e.map(h=>Ae(h));const{value:a}=S,{value:u}=R,{value:i}=x;let s=u[i];if(a!=="auto"){const{spaceBetween:h}=t,w=s-(a-1)*h,g=1/Math.max(1,a);s=w*g}return e.map(()=>Object.assign(Object.assign({},u),{[i]:s}))}),V=m(()=>{const{value:e}=k,{length:n}=e;if(!n)return[];const{centeredSlides:a,spaceBetween:u}=t,{value:i}=x,{[i]:s}=R.value;let h=0;return e.map(({[i]:w})=>{let g=h;return a&&(g+=(w-s)/2),h+=w+u,g})});let xe=!1;const we=m(()=>{const{value:e}=k,{length:n}=e;if(!n)return[];const{value:a}=x;if(y.value)return e.map(g=>({[a]:`${g[a]}px`}));const{effect:u,spaceBetween:i}=t,{value:s}=I,h=s?"bottom":"right",w=[];for(let g=0;g<n;g++){const X=e[g][a],Te={[a]:`${X}px`,[`margin-${h}`]:`${i}px`};xe&&(u==="fade"||u==="card")&&Object.assign(Te,j.value),w.push(Te)}return w}),A=m(()=>{const{value:e}=v,{length:n}=p.value;if(e!=="auto")return n-e+1;{const{value:a}=k,{length:u}=a;if(!u)return n;const{value:i}=V,{value:s}=x,h=R.value[s];let w=a[a.length-1][s],g=u;for(;g>1&&w<h;)g--,w+=i[g]-i[g-1];return g!==u&&g++,g<1&&(g=1),g}}),U=m(()=>{const{value:e}=A;return d.value&&e>3?e-2:e}),ue=t.defaultIndex+(d.value?1:0),_=M(Me(ue,A.value,d.value)),be=M(ue),T=M(ue);let O=0;function q(e,n=L.value){var a,u;const{value:i}=A;if((e=Be(e,0,i-1))!==T.value){const{value:s}=_;d.value&&U.value>2&&(s===0&&e===U.value?e=0:s===U.value-1&&e===1&&(e=i-1));const h=_.value=Me(e,A.value,d.value);be.value=e,T.value=je(h,d.value),C.value?fe(e,n):(!y.value&&n>0&&($=!0),ne()),h!==s&&((a=t["onUpdate:currentIndex"])===null||a===void 0||a.call(t,h,s),(u=t.onUpdateCurrentIndex)===null||u===void 0||u.call(t,h,s))}}function G(e=T.value){return St(e,A.value,t.loop)}function Q(e=T.value){return Ct(e,A.value,t.loop)}function Ke(e){const n=K(e);return n!==null&&G()===n}function Fe(e){const n=K(e);return n!==null&&Q()===n}function ye(e){return T.value===K(e)}function Ze(e){return _.value===e}function Se(){return G()===null}function Ce(){return Q()===null}function Y(e){const n=je(e,d.value);(e!==_.value||n!==T.value)&&q(n)}function ce(){const e=G();e!==null&&q(e)}function ee(){const e=Q();e!==null&&q(e)}const de=M({});let $=!1;function te(e,n=0){const a=t.direction==="vertical";de.value=Object.assign({},j.value,{transform:a?`translateY(${-e}px)`:`translateX(${-e}px)`,transitionDuration:`${n}ms`})}function ne(e=0){C.value?fe(T.value,e):O!==0&&te(O=0,e)}function fe(e,n=L.value){const a=Pe(e);a!==O&&n>0&&($=!0),te(a,n),O=Pe(T.value)}function Pe(e){let n;return e>=A.value-1?n=Re():n=V.value[e]||0,n}function Re(){if(v.value==="auto"){const{value:e}=x,{[e]:n}=R.value,{value:a}=V,u=a[a.length-1];let i;if(u===void 0)i=n;else{const{value:s}=k;i=u+s[s.length-1][e]}return i-n}else{const{value:e}=V;return e[A.value-1]||0}}function We(e){!e||p.value.push(e)}function He(e){if(!e)return;const n=K(e);n!==-1&&p.value.splice(n,1)}function K(e){return typeof e=="number"?e:p.value.indexOf(e)}function Je(e){const n=K(e);if(n!==-1)return we.value[n]}function qe(e,n){let u=!$&&!(N&28);t.effect==="card"&&!y.value&&!(N&8)&&!ye(e)&&(Y(e),u=!1),u||(n.preventDefault(),n.stopPropagation())}const Ie={to:Y,prev:()=>{(!$||!d.value)&&ce()},next:()=>{(!$||!d.value)&&ee()},isVertical:()=>I.value,isHorizontal:()=>!I.value,isPrev:Ke,isNext:Fe,isActive:ye,isPrevDisabled:Se,isNextDisabled:Ce,getCurrentIndex:()=>_.value,getSlideIndex:K,getSlideStyle:Je,addSlide:We,removeSlide:He,onCarouselItemClick:qe};st(ie,Ie);let oe=null;function F(e){oe&&(clearInterval(oe),oe=null);const{autoplay:n,interval:a}=t;n&&a&&!e&&(oe=setInterval(ee,a))}function ze(){const{autoplay:e}=t;e?F():U.value<2&&F(!0)}let ve=0,he=0,B=0,pe=0,N=1;function Ge(e){if(ge)return;pe=Date.now(),N=2,ge=!0,F(!0),e.type!=="touchstart"&&!e.target.isContentEditable&&e.preventDefault();const n=$e(e)?e.touches[0]:e;I.value?he=n.clientY:ve=n.clientX,t.touchable&&(H("touchmove",document,ae),H("touchend",document,Z),H("touchcancel",document,Z)),t.draggable&&(H("mousemove",document,ae),H("mouseup",document,Z))}function ae(e){const{value:n}=I,a=n?"height":"width",u=R.value[a],i=$e(e)?e.touches[0]:e,s=n?i.clientY-he:i.clientX-ve;B=Be(s,-u,u),N=4,C.value&&te(O-B,0)}function Z(){const e=Date.now()-pe,{value:n}=x,{value:a}=T,{value:u}=C;let i=a;if(!$&&u&&B!==0){const s=O-B,h=[...V.value.slice(0,A.value-1),Re()];let w=null;for(let g=0;g<h.length;g++){const X=Math.abs(h[g]-s);if(w!==null&&w<X)break;w=X,i=g}}if(i===a){const s=R.value[n];B>s/2||B/e>.4?i=G(a):(B<-s/2||B/e<-.4)&&(i=Q(a))}i!==null&&i!==a?(N=8,q(i)):(N&4?N=16:N=32,ne(L.value)),ze(),ke()}function ke(){N&1||(ge=!1,N&6&&(N=1)),ve=0,he=0,B=0,pe=0,J("touchmove",document,ae),J("touchend",document,Z),J("touchcancel",document,Z),J("mousemove",document,ae),J("mouseup",document,Z)}function Qe(){const{value:e}=be,{value:n}=T;$&&e!==n?fe(n,0):F(),C.value&&(de.value.transitionDuration="0ms"),$=!1}function et(e){if(e.preventDefault(),$)return;const{value:n}=I;let{deltaX:a,deltaY:u}=e;e.shiftKey&&!a&&(a=u);const i=-1,s=1,h=(a||u)>0?s:i;let w=0,g=0;n?g=h:w=h;const X=10;(g*u>=X||w*a>=X)&&(h===s&&!Ce()?ee():h===i&&!Se()&&ce())}function tt(){R.value=Ae(r.value,!0),F()}function nt(){var e,n;D.value&&((n=(e=k.effect).scheduler)===null||n===void 0||n.call(e),k.effect.run())}Oe(()=>{it(ze),Ne(()=>xe=!0)}),Xe(()=>{ke(),F(!0)}),ut(()=>{const{value:e}=p,{value:n}=P,a=new Map,u=s=>a.has(s)?a.get(s):-1;let i=!1;for(let s=0;s<e.length;s++){const h=n.findIndex(w=>w.el===e[s]);h!==s&&(i=!0),a.set(e[s],h)}i&&e.sort((s,h)=>u(s)-u(h))}),le(ct(t,"currentIndex"),e=>e!==void 0&&Y(e)),le(d,()=>void Ne(()=>Y(_.value))),le(V,()=>C.value&&ne(),{deep:!0}),le(C,e=>{e?ne():($=!1,te(O=0))});const ot={arrowSlotProps:m(()=>Object.assign({total:U.value,currentIndex:_.value},_e(Ie,["to","prev","next","isPrevDisabled","isNextDisabled"]))),dotSlotProps:m(()=>({total:U.value,currentIndex:_.value,to:Y}))},at={getCurrentIndex:()=>_.value,to:Y,prev:ce,next:ee},lt=Ye("Carousel","-carousel",Nt,bt,t,l),De=m(()=>{const{common:{cubicBezierEaseInOut:e},self:{dotSize:n,dotColor:a,dotColorActive:u,dotColorFocus:i,dotLineWidth:s,dotLineWidthActive:h,arrowColor:w}}=lt.value;return{"--n-bezier":e,"--n-dot-color":a,"--n-dot-color-focus":i,"--n-dot-color-active":u,"--n-dot-size":n,"--n-dot-line-width":s,"--n-dot-line-width-active":h,"--n-arrow-color":w}}),W=o?mt("carousel",void 0,De,t):void 0;return Object.assign(Object.assign(Object.assign({mergedClsPrefix:l,selfElRef:r,slideVNodes:P,duplicatedable:d,userWantsControl:y,autoSlideSize:D,displayIndex:_,realIndex:T,slideStyles:we,translateStyle:de,handleTouchstart:Ge,handleTransitionEnd:Qe,handleMousewheel:et,handleResize:tt,handleSlideResize:nt,isActive:Ze},ot),at),{cssVars:o?void 0:De,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender})},render(){var t;const{mergedClsPrefix:l,showArrow:o,userWantsControl:r,draggable:p,touchable:P,slideStyles:y,dotType:C,dotPlacement:z,transitionProps:d={},arrowSlotProps:v,dotSlotProps:S,$slots:{default:D,dots:j,arrow:L}}=this,I=D&&xt(D())||[];let x=_t(I);x.length||(x=I.map(k=>b(Tt,null,{default:()=>Ue(k)})));const{length:R}=x;return R>1&&this.duplicatedable&&(x.push(Le(x[0],0,"append")),x.unshift(Le(x[R-1],R-1,"prepend"))),this.slideVNodes.value=x,this.autoSlideSize&&(x=x.map(k=>b(Ve,{onResize:this.handleSlideResize},{default:()=>k}))),(t=this.onRender)===null||t===void 0||t.call(this),b("div",{ref:"selfElRef",class:[this.themeClass,`${l}-carousel`,this.direction==="vertical"&&`${l}-carousel--vertical`,this.showArrow&&`${l}-carousel--show-arrow`,`${l}-carousel--${z}`,`${l}-carousel--${this.direction}`,`${l}-carousel--${this.effect}`,r&&`${l}-carousel--usercontrol`],style:this.cssVars},b(Ve,{onResize:this.handleResize},{default:()=>b("div",{class:`${l}-carousel__slides`,role:"listbox",style:this.translateStyle,onMousedown:p?this.handleTouchstart:void 0,onTouchstart:P?this.handleTouchstart:void 0,onWheel:this.mousewheel?this.handleMousewheel:void 0,onTransitionend:this.handleTransitionEnd},r?x.map((k,V)=>b("div",{style:y[V],key:V},dt(b(vt,Object.assign({},d),{default:()=>k}),[[ft,this.isActive(V)]]))):x)}),this.showDots&&Ee(j,S,()=>[S.total>1&&b(It,{key:C+z,total:S.total,currentIndex:S.currentIndex,dotType:C,trigger:this.trigger,keyboard:this.keyboard})]),o&&Ee(L,v,()=>[b(Dt,null)]))}});function _t(t,l=[]){return Array.isArray(t)&&t.forEach(o=>{o.type&&o.type.name==="CarouselItem"&&l.push(o)}),l}function Le(t,l,o){return Ue(t,{key:`carousel-item-duplicate-${l}-${o}`})}export{Lt as N};
