import{l as I,a as T,i as M,c as y,D as W,b as F,f as K,u as B,h as N,r as O,g as D,L as G}from"./Space.5f8f31c2.js";import{v as _}from"./Tag.140f16c8.js";import{V as X}from"./Icon.5554db87.js";import{a as Y}from"./light.fe167247.js";import{z as q,h as x,D as H,A as u,B as J,p as v}from"./vendor.43ce0c4d.js";let P=!1;function ae(){if(typeof window!="undefined"&&!!window.CSS&&!P&&(P=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const Q=I("n-avatar-group");var U=T("avatar",`
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
`,[M(y("&","--n-merged-color: var(--n-color-modal);")),W(y("&","--n-merged-color: var(--n-color-popover);")),y("img",`
 width: 100%;
 height: 100%;
 `),F("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),T("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),F("text","line-height: 1.25")]);const Z=Object.assign(Object.assign({},B.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var ie=q({name:"Avatar",props:Z,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=K(t),a=x(!1);let i=null;const d=x(null),R=x(null),L=()=>{const{value:e}=d;if(e&&(i===null||i!==e.innerHTML)){i=e.innerHTML;const{value:r}=R;if(r){const{offsetWidth:f,offsetHeight:n}=r,{offsetWidth:o,offsetHeight:b}=e,m=.9,p=Math.min(f/o*m,n/b*m,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${p})`}}},h=H(Q,null),S=u(()=>{const{size:e}=t;if(e)return e;const{size:r}=h||{};return r||"medium"}),w=B("Avatar","-avatar",U,Y,t,l),C=H(_,null),g=u(()=>{if(h)return!0;const{round:e,circle:r}=t;return e!==void 0||r!==void 0?e||r:C?C.roundRef.value:!1}),j=u(()=>h?!0:t.bordered||!1),V=e=>{a.value=!0;const{onError:r}=t;r&&r(e)};J(()=>t.src,()=>a.value=!1);const E=u(()=>{const e=S.value,r=g.value,f=j.value,{color:n}=t,{self:{borderRadius:o,fontSize:b,color:m,border:p,colorModal:$,colorPopover:k},common:{cubicBezierEaseInOut:A}}=w.value;let z;return typeof e=="number"?z=`${e}px`:z=w.value.self[D("height",e)],{"--n-font-size":b,"--n-border":f?p:"none","--n-border-radius":r?"50%":o,"--n-color":n||m,"--n-color-modal":n||$,"--n-color-popover":n||k,"--n-bezier":A,"--n-merged-size":`var(--n-avatar-size-override, ${z})`}}),s=c?N("avatar",u(()=>{const e=S.value,r=g.value,f=j.value,{color:n}=t;let o="";return e&&(typeof e=="number"?o+=`a${e}`:o+=e[0]),r&&(o+="b"),f&&(o+="c"),n&&(o+=G(n)),o}),E,t):void 0;return{textRef:d,selfRef:R,mergedRoundRef:g,mergedClsPrefix:l,fitTextTransform:L,cssVars:c?void 0:E,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender,hasLoadError:a,handleError:V}},render(){const{$slots:t,src:l,mergedClsPrefix:c,onRender:a}=this;a==null||a();let i;return this.hasLoadError?i=v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):i=O(t.default,d=>{if(d)return v(X,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${c}-avatar__text`},d)});if(l)return v("img",{src:l,onError:this.handleError,style:{objectFit:this.objectFit}})}),v("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},i)}});export{ie as N,Q as a,ae as u};
