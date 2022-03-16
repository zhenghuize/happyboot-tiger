import{l as I,a as F,i as M,c as x,D as V,b as H,f as W,u as L,h as K,r as N,g as O,L as D}from"./Space.cb2e4e91.js";import{t as G}from"./Tag.4a645221.js";import{V as _}from"./Icon.54169ce7.js";import{a as X}from"./light.9d147ac5.js";import{z as Y,h as R,D as B,A as u,B as q,p as v}from"./vendor.f9e4f91a.js";const J=I("n-avatar-group");var Q=F("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[M(x("&","--n-merged-color: var(--n-color-modal);")),V(x("&","--n-merged-color: var(--n-color-popover);")),x("img",`
 width: 100%;
 height: 100%;
 `),H("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),F("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),H("text","line-height: 1.25")]);const U=Object.assign(Object.assign({},L.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var ne=Y({name:"Avatar",props:U,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=W(t),a=R(!1);let s=null;const d=R(null),y=R(null),$=()=>{const{value:e}=d;if(e&&(s===null||s!==e.innerHTML)){s=e.innerHTML;const{value:r}=y;if(r){const{offsetWidth:f,offsetHeight:n}=r,{offsetWidth:o,offsetHeight:b}=e,m=.9,p=Math.min(f/o*m,n/b*m,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${p})`}}},h=B(J,null),j=u(()=>{const{size:e}=t;if(e)return e;const{size:r}=h||{};return r||"medium"}),C=L("Avatar","-avatar",Q,X,t,l),E=B(G,null),g=u(()=>{if(h)return!0;const{round:e,circle:r}=t;return e!==void 0||r!==void 0?e||r:E?E.roundRef.value:!1}),S=u(()=>h?!0:t.bordered||!1),w=e=>{a.value=!0;const{onError:r}=t;r&&r(e)};q(()=>t.src,()=>a.value=!1);const T=u(()=>{const e=j.value,r=g.value,f=S.value,{color:n}=t,{self:{borderRadius:o,fontSize:b,color:m,border:p,colorModal:P,colorPopover:k},common:{cubicBezierEaseInOut:A}}=C.value;let z;return typeof e=="number"?z=`${e}px`:z=C.value.self[O("height",e)],{"--n-font-size":b,"--n-border":f?p:"none","--n-border-radius":r?"50%":o,"--n-color":n||m,"--n-color-modal":n||P,"--n-color-popover":n||k,"--n-bezier":A,"--n-merged-size":`var(--n-avatar-size-override, ${z})`}}),i=c?K("avatar",u(()=>{const e=j.value,r=g.value,f=S.value,{color:n}=t;let o="";return e&&(typeof e=="number"?o+=`a${e}`:o+=e[0]),r&&(o+="b"),f&&(o+="c"),n&&(o+=D(n)),o}),T,t):void 0;return{textRef:d,selfRef:y,mergedRoundRef:g,mergedClsPrefix:l,fitTextTransform:$,cssVars:c?void 0:T,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender,hasLoadError:a,handleError:w}},render(){const{$slots:t,src:l,mergedClsPrefix:c,onRender:a}=this;a==null||a();let s;return this.hasLoadError?s=v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):s=N(t.default,d=>{if(d)return v(_,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${c}-avatar__text`},d)});if(l)return v("img",{src:l,onError:this.handleError,style:{objectFit:this.objectFit}})}),v("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},s)}});export{ne as N,J as a};
