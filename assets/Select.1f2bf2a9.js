import{z as Y,p as o,i as Ee,P as Vt,A as I,h as S,G as Wt,J as ze,s as jt,D as ft,T as ht,C as q,B as ce,E as et,N as Kt,M as tt,H as Ht,I as Ut}from"./vendor.43ce0c4d.js";import{J as vt,t as Ne,A as Ge,s as Ae,j as qt,a as R,d as X,b as E,c as me,C as Ze,u as ye,h as Xe,r as Gt,k as Zt,g as de,z as nt,f as Jt,m as Yt,n as Q}from"./Space.5f8f31c2.js";import{r as we,f as gt,N as Xt,a as Qt,h as Je,g as en,c as tn}from"./fade-in-scale-up.cssr.94a38d6f.js";import{V as ot,f as nn,u as lt}from"./Icon.5554db87.js";import{a as on,b as ln,u as rn,s as an}from"./light.9ebcab32.js";import{n as bt,o as Le,b as sn,q as Qe,r as un,s as qe,N as it,u as dn,f as Ye,V as cn,j as fn,l as hn,c as rt}from"./Tag.140f16c8.js";import{a as vn,u as gn}from"./Button.e9fe7712.js";import{a as bn}from"./Input.c4c0dd16.js";import{N as pn}from"./ScrollBar.4563dd35.js";var Un=Y({name:"Backward",render(){return o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z",fill:"currentColor"}))}}),mn=Y({name:"Checkmark",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o("g",{fill:"none"},o("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),qn=Y({name:"FastBackward",render(){return o("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"}))))}}),Gn=Y({name:"FastForward",render(){return o("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"}))))}}),Zn=Y({name:"Forward",render(){return o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",fill:"currentColor"}))}}),wn=Y({props:{onFocus:Function,onBlur:Function},setup(e){return()=>o("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function at(e){return e&-e}class yn{constructor(n,l){this.l=n,this.min=l;const r=new Array(n+1);for(let u=0;u<n+1;++u)r[u]=0;this.ft=r}add(n,l){if(l===0)return;const{l:r,ft:u}=this;for(n+=1;n<=r;)u[n]+=l,n+=at(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===0)return 0;const{ft:l,min:r,l:u}=this;if(n===void 0&&(n=u),n>u)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let b=n*r;for(;n>0;)b+=l[n],n-=at(n);return b}getBound(n){let l=0,r=this.l;for(;r>l;){const u=Math.floor((l+r)/2),b=this.sum(u);if(b>n){r=u;continue}else if(b<n){if(l===u)return this.sum(l+1)<=n?l+1:u;l=u}else return u}return l}}const xn=Le(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Le("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Le("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]);var Cn=Y({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=vt();xn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:bt,ssr:n}),Ee(()=>{const{defaultScrollIndex:v,defaultScrollKey:f}=e;v!=null?$({index:v}):f!=null&&$({key:f})}),Vt(()=>{$({top:F.value})});const l=I(()=>{const v=new Map,{keyField:f}=e;return e.items.forEach((M,B)=>{v.set(M[f],B)}),v}),r=S(null),u=S(void 0),b=new Map,g=I(()=>{const{items:v,itemSize:f,keyField:M}=e,B=new yn(v.length,f);return v.forEach((_,y)=>{const z=_[M],U=b.get(z);U!==void 0&&B.add(y,U)}),B}),s=S(0),F=S(0),m=Ne(()=>Math.max(g.value.getBound(F.value-Ge(e.paddingTop))-1,0)),k=I(()=>{const{value:v}=u;if(v===void 0)return[];const{items:f,itemSize:M}=e,B=m.value,_=Math.min(B+Math.ceil(v/M+1),f.length-1),y=[];for(let z=B;z<=_;++z)y.push(f[z]);return y}),$=v=>{const{left:f,top:M,index:B,key:_,position:y,behavior:z,debounce:U=!0}=v;if(f!==void 0||M!==void 0)w(f,M,z);else if(B!==void 0)P(B,z,U);else if(_!==void 0){const G=l.value.get(_);G!==void 0&&P(G,z,U)}else y==="bottom"?w(0,Number.MAX_SAFE_INTEGER,z):y==="top"&&w(0,0,z)};function P(v,f,M){const{value:B}=g,_=B.sum(v)+Ge(e.paddingTop);if(!M)r.value.scrollTo({left:0,top:_,behavior:f});else{const{scrollTop:y,offsetHeight:z}=r.value;if(_>y){const U=B.get(v);_+U<=y+z||r.value.scrollTo({left:0,top:_+U-z,behavior:f})}else r.value.scrollTo({left:0,top:_,behavior:f})}T=v}function w(v,f,M){r.value.scrollTo({left:v,top:f,behavior:M})}function p(v,f){var M;if(e.ignoreItemResize||H(f.target))return;const{value:B}=g,_=l.value.get(v),y=B.get(_),z=f.contentRect.height;if(z===y)return;z-e.itemSize===0?b.delete(v):b.set(v,z-e.itemSize);const G=z-y;G!==0&&(A!==void 0&&_<=A&&((M=r.value)===null||M===void 0||M.scrollBy(0,G)),B.add(_,G),s.value++)}function O(v){sn(K);const{onScroll:f}=e;f!==void 0&&f(v)}function W(v){if(H(v.target)||v.contentRect.height===u.value)return;u.value=v.contentRect.height;const{onResize:f}=e;f!==void 0&&f(v)}let T,A;function K(){const{value:v}=r;v!=null&&(A=T!=null?T:m.value,T=void 0,F.value=r.value.scrollTop)}function H(v){let f=v;for(;f!==null;){if(f.style.display==="none")return!0;f=f.parentElement}return!1}return{listHeight:u,listStyle:{overflow:"auto"},keyToIndex:l,itemsStyle:I(()=>{const{itemResizable:v}=e,f=Ae(g.value.sum());return s.value,[e.itemsStyle,{boxSizing:"content-box",height:v?"":f,minHeight:v?f:"",paddingTop:Ae(e.paddingTop),paddingBottom:Ae(e.paddingBottom)}]}),visibleItemsStyle:I(()=>(s.value,{transform:`translateY(${Ae(g.value.sum(m.value))})`})),viewportItems:k,listElRef:r,itemsElRef:S(null),scrollTo:$,handleListResize:W,handleListScroll:O,handleItemResize:p}},render(){const{itemResizable:e,keyField:n,keyToIndex:l,visibleItemsTag:r}=this;return o(ot,{onResize:this.handleListResize},{default:()=>{var u,b;return o("div",Wt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.onWheel,ref:"listElRef"}),[this.items.length!==0?o("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[o(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(g=>{const s=g[n],F=l.get(s),m=this.$slots.default({item:g,index:F})[0];return e?o(ot,{key:s,onResize:k=>this.handleItemResize(s,k)},{default:()=>m}):(m.key=s,m)})})]):(b=(u=this.$slots).empty)===null||b===void 0?void 0:b.call(u)])}})}});const ue="v-hidden",Sn=Le("[v-hidden]",{display:"none!important"});var st=Y({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const l=S(null),r=S(null);function u(){const{value:g}=l,{getCounter:s,getTail:F}=e;let m;if(s!==void 0?m=s():m=r.value,!g||!m)return;m.hasAttribute(ue)&&m.removeAttribute(ue);const{children:k}=g,$=g.offsetWidth,P=[],w=n.tail?F==null?void 0:F():null;let p=w?w.offsetWidth:0,O=!1;const W=g.children.length-(n.tail?1:0);for(let A=0;A<W-1;++A){if(A<0)continue;const K=k[A];if(O){K.hasAttribute(ue)||K.setAttribute(ue,"");continue}else K.hasAttribute(ue)&&K.removeAttribute(ue);const H=K.offsetWidth;if(p+=H,P[A]=H,p>$){const{updateCounter:v}=e;for(let f=A;f>=0;--f){const M=W-1-f;v!==void 0?v(M):m.textContent=`${M}`;const B=m.offsetWidth;if(p-=P[f],p+B<=$||f===0){O=!0,A=f-1,w&&(A===-1?(w.style.maxWidth=`${$-B}px`,w.style.boxSizing="border-box"):w.style.maxWidth="");break}}}}const{onUpdateOverflow:T}=e;O?T!==void 0&&T(!0):(T!==void 0&&T(!1),m.setAttribute(ue,""))}const b=vt();return Sn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:bt,ssr:b}),Ee(u),{selfRef:l,counterRef:r,sync:u}},render(){const{$slots:e}=this;return ze(this.sync),o("div",{class:"v-overflow",ref:"selfRef"},[jt(e,"default"),e.counter?e.counter():o("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});const On=o(mn);function Tn(e,n){return o(ht,{name:"fade-in-scale-up-transition"},{default:()=>e?o(qt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>On}):null})}var ut=Y({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:l,multipleRef:r,valueSetRef:u,renderLabelRef:b,renderOptionRef:g,handleOptionClick:s,handleOptionMouseEnter:F}=ft(Qe),m=Ne(()=>{const{value:w}=l;return w?e.tmNode.key===w.key:!1});function k(w){const{tmNode:p}=e;p.disabled||s(w,p)}function $(w){const{tmNode:p}=e;p.disabled||F(w,p)}function P(w){const{tmNode:p}=e,{value:O}=m;p.disabled||O||F(w,p)}return{multiple:r,isGrouped:Ne(()=>{const{tmNode:w}=e,{parent:p}=w;return p&&p.rawNode.type==="group"}),isPending:m,isSelected:Ne(()=>{const{value:w}=n,{value:p}=r;if(w===null)return!1;const O=e.tmNode.rawNode.value;if(p){const{value:W}=u;return W.has(O)}else return w===O}),renderLabel:b,renderOption:g,handleMouseMove:P,handleMouseEnter:$,handleClick:k}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:l,isPending:r,isGrouped:u,multiple:b,renderOption:g,renderLabel:s,handleClick:F,handleMouseEnter:m,handleMouseMove:k}=this,P=Tn(b&&l,e),w=s?[s(n,l),P]:[we(n.label,n,l),P],p=o("div",{class:[`${e}-base-select-option`,n.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:l,[`${e}-base-select-option--grouped`]:u,[`${e}-base-select-option--pending`]:r}],style:n.style,onClick:F,onMouseenter:m,onMousemove:k},o("div",{class:`${e}-base-select-option__content`},w));return n.render?n.render({node:p,option:n,selected:l}):g?g({node:p,option:n,selected:l}):p}}),dt=Y({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n}=ft(Qe);return{renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:l,tmNode:{rawNode:r}}=this,u=n?n(r,!1):we(r.label,r,!1),b=o("div",{class:`${e}-base-select-group-header`},u);return r.render?r.render({node:b,option:r}):l?l({node:b,option:r,selected:!1}):b}}),Rn=R("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[X("multiple",[R("base-select-option",`
 padding-right: 28px;
 `)]),R("scrollbar",`
 max-height: var(--n-height);
 `),R("virtual-list",`
 max-height: var(--n-height);
 `),R("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[E("content",`
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),R("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),R("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),E("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),E("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),E("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),R("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),R("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[me("&:active",`
 color: var(--n-option-text-color-pressed);
 `),X("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),X("pending",`
 background-color: var(--n-option-color-pending);
 `),X("selected",`
 color: var(--n-option-text-color-active);
 background-color: var(--n-option-color-active);
 `),X("disabled",`
 cursor: not-allowed;
 `,[Ze("selected",`
 color: var(--n-option-text-color-disabled);
 `),X("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),E("check",`
 font-size: 16px;
 position: absolute;
 right: 8px;
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[gt({enterScale:"0.5"})])])]),Mn=Y({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ye.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=ye("InternalSelectMenu","-internal-select-menu",Rn,on,e,q(e,"clsPrefix")),l=S(null),r=S(null),u=S(null),b=I(()=>e.treeMate.getFlattenedNodes()),g=I(()=>Qt(b.value)),s=S(null);function F(){const{treeMate:a}=e;let d=null;if(e.autoPending){const{value:N}=e;N===null?d=a.getFirstAvailableNode():(e.multiple?d=a.getNode((N||[])[(N||[]).length-1]):d=a.getNode(N),(!d||d.disabled)&&(d=a.getFirstAvailableNode())),d&&y(d)}}let m;ce(q(e,"show"),a=>{a?m=ce(e.resetMenuOnOptionsChange?[q(e,"treeMate"),q(e,"multiple")]:[q(e,"multiple")],()=>{F(),ze(z)},{immediate:!0}):m==null||m()},{immediate:!0});const k=I(()=>Ge(n.value.self[de("optionHeight",e.size)])),$=I(()=>nt(n.value.self[de("padding",e.size)])),P=I(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),w=I(()=>{const a=b.value;return a&&a.length===0});function p(a){const{onToggle:d}=e;d&&d(a)}function O(a){const{onScroll:d}=e;d&&d(a)}function W(a){var d;(d=u.value)===null||d===void 0||d.sync(),O(a)}function T(){var a;(a=u.value)===null||a===void 0||a.sync()}function A(){const{value:a}=s;return a||null}function K(a,d){d.disabled||y(d,!1)}function H(a,d){d.disabled||p(d)}function v(a){var d;Je(a,"action")||(d=e.onKeyup)===null||d===void 0||d.call(e,a)}function f(a){var d;Je(a,"action")||(d=e.onKeydown)===null||d===void 0||d.call(e,a)}function M(a){var d;(d=e.onMousedown)===null||d===void 0||d.call(e,a),!e.focusable&&a.preventDefault()}function B(){const{value:a}=s;a&&y(a.getNext({loop:!0}),!0)}function _(){const{value:a}=s;a&&y(a.getPrev({loop:!0}),!0)}function y(a,d=!1){s.value=a,d&&z()}function z(){var a,d;const N=s.value;if(!N)return;const te=g.value(N.key);te!==null&&(e.virtualScroll?(a=r.value)===null||a===void 0||a.scrollTo({index:te}):(d=u.value)===null||d===void 0||d.scrollTo({index:te,elSize:k.value}))}function U(a){var d,N;!((d=l.value)===null||d===void 0)&&d.contains(a.target)&&((N=e.onFocus)===null||N===void 0||N.call(e,a))}function G(a){var d,N;!((d=l.value)===null||d===void 0)&&d.contains(a.relatedTarget)||(N=e.onBlur)===null||N===void 0||N.call(e,a)}et(Qe,{handleOptionMouseEnter:K,handleOptionClick:H,valueSetRef:P,multipleRef:q(e,"multiple"),valueRef:q(e,"value"),renderLabelRef:q(e,"renderLabel"),renderOptionRef:q(e,"renderOption"),pendingTmNodeRef:s}),et(un,l),Ee(()=>{const{value:a}=u;a&&a.sync()});const ee=I(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:d},self:{height:N,borderRadius:te,color:xe,groupHeaderTextColor:Ce,actionDividerColor:ve,optionTextColorPressed:ge,optionTextColor:oe,optionTextColorDisabled:J,optionTextColorActive:be,optionOpacityDisabled:le,optionCheckColor:Se,actionTextColor:Oe,optionColorPending:Te,optionColorActive:re,loadingColor:ae,loadingSize:Re,[de("optionFontSize",a)]:Me,[de("optionHeight",a)]:Fe,[de("optionPadding",a)]:se}}=n.value;return{"--n-height":N,"--n-action-divider-color":ve,"--n-action-text-color":Oe,"--n-bezier":d,"--n-border-radius":te,"--n-color":xe,"--n-option-font-size":Me,"--n-group-header-text-color":Ce,"--n-option-check-color":Se,"--n-option-color-pending":Te,"--n-option-color-active":re,"--n-option-height":Fe,"--n-option-opacity-disabled":le,"--n-option-text-color":oe,"--n-option-text-color-active":be,"--n-option-text-color-disabled":J,"--n-option-text-color-pressed":ge,"--n-option-padding":se,"--n-option-padding-left":nt(se,"left"),"--n-loading-color":ae,"--n-loading-size":Re}}),{inlineThemeDisabled:fe}=e,Z=fe?Xe("internal-select-menu",I(()=>e.size[0]),ee,e):void 0,he={selfRef:l,next:B,prev:_,getPendingTmNode:A};return Object.assign({mergedTheme:n,virtualListRef:r,scrollbarRef:u,itemSize:k,padding:$,flattenedNodes:b,empty:w,virtualListContainer(){const{value:a}=r;return a==null?void 0:a.listElRef},virtualListContent(){const{value:a}=r;return a==null?void 0:a.itemsElRef},doScroll:O,handleFocusin:U,handleFocusout:G,handleKeyUp:v,handleKeyDown:f,handleMouseDown:M,handleVirtualListResize:T,handleVirtualListScroll:W,cssVars:fe?void 0:ee.value,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender},he)},render(){const{$slots:e,virtualScroll:n,clsPrefix:l,mergedTheme:r,themeClass:u,onRender:b}=this;return b==null||b(),o("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${l}-base-select-menu`,u,this.multiple&&`${l}-base-select-menu--multiple`],style:[{width:nn(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?o("div",{class:`${l}-base-select-menu__loading`},o(vn,{clsPrefix:l,strokeWidth:20})):this.empty?o("div",{class:`${l}-base-select-menu__empty`},Zt(e.empty,()=>[o(Xt,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty})])):o(pn,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?o(Cn,{ref:"virtualListRef",class:`${l}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:g})=>g.isGroup?o(dt,{key:g.key,clsPrefix:l,tmNode:g}):g.ignored?null:o(ut,{clsPrefix:l,key:g.key,tmNode:g})}):o("div",{class:`${l}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(g=>g.isGroup?o(dt,{key:g.key,clsPrefix:l,tmNode:g}):o(ut,{clsPrefix:l,key:g.key,tmNode:g})))}),Gt(e.action,g=>g&&[o("div",{class:`${l}-base-select-menu__action`,"data-action":!0,key:"action"},g),o(wn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Fn=me([R("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[R("base-loading",`
 color: var(--n-loading-color);
 `),R("base-selection-tags","min-height: var(--n-height);"),E("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),E("state-border",`
 z-index: 1;
 border-color: #0000;
 `),R("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[E("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),R("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[E("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),R("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),R("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),R("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[R("base-selection-input",`
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[E("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),E("render-label",`
 color: var(--n-text-color);
 `)]),Ze("disabled",[me("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),X("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),X("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),R("base-selection-label","background-color: var(--n-color-active);"),R("base-selection-tags","background-color: var(--n-color-active);")])]),X("disabled","cursor: not-allowed;",[E("arrow",`
 color: var(--n-arrow-color-disabled);
 `),R("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[R("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),E("render-label",`
 color: var(--n-text-color-disabled);
 `)]),R("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),R("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),R("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[E("input",`
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),E("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>X(`${e}-status`,[E("state-border",`border: var(--n-border-${e});`),Ze("disabled",[me("&:hover",[E("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),X("active",[E("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),R("base-selection-label",`background-color: var(--n-color-active-${e});`),R("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),X("focus",[E("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),R("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 `),R("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[me("&:last-child","padding-right: 0;"),R("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[E("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),kn=Y({name:"InternalSelection",props:Object.assign(Object.assign({},ye.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean}),setup(e){const n=S(null),l=S(null),r=S(null),u=S(null),b=S(null),g=S(null),s=S(null),F=S(null),m=S(null),k=S(null),$=S(!1),P=S(!1),w=S(!1),p=ye("InternalSelection","-internal-selection",Fn,ln,e,q(e,"clsPrefix")),O=I(()=>e.clearable&&!e.disabled&&(w.value||e.active)),W=I(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):we(e.selectedOption.label,e.selectedOption,!0):e.placeholder),T=I(()=>{const i=e.selectedOption;if(!!i)return i.label}),A=I(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function K(){var i;const{value:h}=n;if(h){const{value:j}=l;j&&(j.style.width=`${h.offsetWidth}px`,e.maxTagCount!=="responsive"&&((i=m.value)===null||i===void 0||i.sync()))}}function H(){const{value:i}=k;i&&(i.style.display="none")}function v(){const{value:i}=k;i&&(i.style.display="inline-block")}ce(q(e,"active"),i=>{i||H()}),ce(q(e,"pattern"),()=>{e.multiple&&ze(K)});function f(i){const{onFocus:h}=e;h&&h(i)}function M(i){const{onBlur:h}=e;h&&h(i)}function B(i){const{onDeleteOption:h}=e;h&&h(i)}function _(i){const{onClear:h}=e;h&&h(i)}function y(i){const{onPatternInput:h}=e;h&&h(i)}function z(i){var h;(!i.relatedTarget||!(!((h=r.value)===null||h===void 0)&&h.contains(i.relatedTarget)))&&f(i)}function U(i){var h;!((h=r.value)===null||h===void 0)&&h.contains(i.relatedTarget)||M(i)}function G(i){_(i)}function ee(){w.value=!0}function fe(){w.value=!1}function Z(i){!e.active||!e.filterable||i.target!==l.value&&i.preventDefault()}function he(i){B(i)}function a(i){if(i.code==="Backspace"&&!d.value&&!e.pattern.length){const{selectedOptions:h}=e;h!=null&&h.length&&he(h[h.length-1])}}const d=S(!1);let N=null;function te(i){const{value:h}=n;if(h){const j=i.target.value;h.textContent=j,K()}d.value?N=i:y(i)}function xe(){d.value=!0}function Ce(){d.value=!1,y(N),N=null}function ve(i){var h;P.value=!0,(h=e.onPatternFocus)===null||h===void 0||h.call(e,i)}function ge(i){var h;P.value=!1,(h=e.onPatternBlur)===null||h===void 0||h.call(e,i)}function oe(){var i,h;if(e.filterable)P.value=!1,(i=g.value)===null||i===void 0||i.blur(),(h=l.value)===null||h===void 0||h.blur();else if(e.multiple){const{value:j}=u;j==null||j.blur()}else{const{value:j}=b;j==null||j.blur()}}function J(){var i,h,j;e.filterable?(P.value=!1,(i=g.value)===null||i===void 0||i.focus()):e.multiple?(h=u.value)===null||h===void 0||h.focus():(j=b.value)===null||j===void 0||j.focus()}function be(){const{value:i}=l;i&&(v(),i.focus())}function le(){const{value:i}=l;i&&i.blur()}function Se(i){const{value:h}=s;h&&h.setTextContent(`+${i}`)}function Oe(){const{value:i}=F;return i}function Te(){return l.value}let re=null;function ae(){re!==null&&window.clearTimeout(re)}function Re(){e.disabled||e.active||(ae(),re=window.setTimeout(()=>{$.value=!0},100))}function Me(){ae()}function Fe(i){i||(ae(),$.value=!1)}Ee(()=>{Kt(()=>{const i=g.value;!i||(i.tabIndex=e.disabled||P.value?-1:0)})});const{inlineThemeDisabled:se}=e,Ie=I(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:h},self:{borderRadius:j,color:Ve,placeholderColor:We,textColor:je,paddingSingle:Pe,paddingMultiple:Be,caretColor:Ke,colorDisabled:ke,textColorDisabled:He,placeholderColorDisabled:_e,colorActive:ie,boxShadowFocus:t,boxShadowActive:c,boxShadowHover:x,border:L,borderFocus:C,borderHover:D,borderActive:V,arrowColor:pe,arrowColorDisabled:$e,loadingColor:Ue,colorActiveWarning:mt,boxShadowFocusWarning:wt,boxShadowActiveWarning:yt,boxShadowHoverWarning:xt,borderWarning:Ct,borderFocusWarning:St,borderHoverWarning:Ot,borderActiveWarning:Tt,colorActiveError:Rt,boxShadowFocusError:Mt,boxShadowActiveError:Ft,boxShadowHoverError:kt,borderError:zt,borderFocusError:It,borderHoverError:Pt,borderActiveError:Bt,clearColor:_t,clearColorHover:$t,clearColorPressed:At,clearSize:Nt,arrowSize:Lt,[de("height",i)]:Et,[de("fontSize",i)]:Dt}}=p.value;return{"--n-bezier":h,"--n-border":L,"--n-border-active":V,"--n-border-focus":C,"--n-border-hover":D,"--n-border-radius":j,"--n-box-shadow-active":c,"--n-box-shadow-focus":t,"--n-box-shadow-hover":x,"--n-caret-color":Ke,"--n-color":Ve,"--n-color-active":ie,"--n-color-disabled":ke,"--n-font-size":Dt,"--n-height":Et,"--n-padding-single":Pe,"--n-padding-multiple":Be,"--n-placeholder-color":We,"--n-placeholder-color-disabled":_e,"--n-text-color":je,"--n-text-color-disabled":He,"--n-arrow-color":pe,"--n-arrow-color-disabled":$e,"--n-loading-color":Ue,"--n-color-active-warning":mt,"--n-box-shadow-focus-warning":wt,"--n-box-shadow-active-warning":yt,"--n-box-shadow-hover-warning":xt,"--n-border-warning":Ct,"--n-border-focus-warning":St,"--n-border-hover-warning":Ot,"--n-border-active-warning":Tt,"--n-color-active-error":Rt,"--n-box-shadow-focus-error":Mt,"--n-box-shadow-active-error":Ft,"--n-box-shadow-hover-error":kt,"--n-border-error":zt,"--n-border-focus-error":It,"--n-border-hover-error":Pt,"--n-border-active-error":Bt,"--n-clear-size":Nt,"--n-clear-color":_t,"--n-clear-color-hover":$t,"--n-clear-color-pressed":At,"--n-arrow-size":Lt}}),ne=se?Xe("internal-selection",I(()=>e.size[0]),Ie,e):void 0;return{mergedTheme:p,mergedClearable:O,patternInputFocused:P,filterablePlaceholder:W,label:T,selected:A,showTagsPanel:$,isCompositing:d,counterRef:s,counterWrapperRef:F,patternInputMirrorRef:n,patternInputRef:l,selfRef:r,multipleElRef:u,singleElRef:b,patternInputWrapperRef:g,overflowRef:m,inputTagElRef:k,handleMouseDown:Z,handleFocusin:z,handleClear:G,handleMouseEnter:ee,handleMouseLeave:fe,handleDeleteOption:he,handlePatternKeyDown:a,handlePatternInputInput:te,handlePatternInputBlur:ge,handlePatternInputFocus:ve,handleMouseEnterCounter:Re,handleMouseLeaveCounter:Me,handleFocusout:U,handleCompositionEnd:Ce,handleCompositionStart:xe,onPopoverUpdateShow:Fe,focus:J,focusInput:be,blur:oe,blurInput:le,updateCounter:Se,getCounter:Oe,getTail:Te,renderLabel:e.renderLabel,cssVars:se?void 0:Ie,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender}},render(){const{status:e,multiple:n,size:l,disabled:r,filterable:u,maxTagCount:b,bordered:g,clsPrefix:s,onRender:F,renderTag:m,renderLabel:k}=this;F==null||F();const $=b==="responsive",P=typeof b=="number",w=$||P,p=o(bn,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var W,T;return(T=(W=this.$slots).arrow)===null||T===void 0?void 0:T.call(W)}});let O;if(n){const W=y=>o("div",{class:`${s}-base-selection-tag-wrapper`,key:y.value},m?m({option:y,handleClose:()=>this.handleDeleteOption(y)}):o(qe,{size:l,closable:!y.disabled,disabled:r,internalStopClickPropagation:!0,onClose:()=>this.handleDeleteOption(y)},{default:()=>k?k(y,!0):we(y.label,y,!0)})),T=(P?this.selectedOptions.slice(0,b):this.selectedOptions).map(W),A=u?o("div",{class:`${s}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),o("span",{ref:"patternInputMirrorRef",class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,K=$?()=>o("div",{class:`${s}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},o(qe,{size:l,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0;let H;if(P){const y=this.selectedOptions.length-b;y>0&&(H=o("div",{class:`${s}-base-selection-tag-wrapper`,key:"__counter__"},o(qe,{size:l,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${y}`})))}const v=$?u?o(st,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>T,counter:K,tail:()=>A}):o(st,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>T,counter:K}):P?T.concat(H):T,f=w?()=>o("div",{class:`${s}-base-selection-popover`},$?T:this.selectedOptions.map(W)):void 0,M=w?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,_=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?o("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},this.placeholder):null;if(u){const y=o("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-tags`},v,$?null:A,p);O=o(tt,null,w?o(it,Object.assign({},M),{trigger:()=>y,default:f}):y,_)}else{const y=o("div",{ref:"multipleElRef",class:`${s}-base-selection-tags`,tabindex:r?void 0:0},v,p);O=o(tt,null,w?o(it,Object.assign({},M),{trigger:()=>y,default:f}):y,_)}}else if(u){const W=this.pattern||this.isCompositing,T=this.active?!W:!this.selected,A=this.active?!1:this.selected;O=o("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-label`},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${s}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),A?o("div",{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:"input"},o("div",{class:`${s}-base-selection-overlay__wrapper`},m?m({option:this.selectedOption,handleClose:()=>{}}):k?k(this.selectedOption,!0):we(this.label,this.selectedOption,!0))):null,T?o("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},o("div",{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,p)}else O=o("div",{ref:"singleElRef",class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?o("div",{class:`${s}-base-selection-input`,title:en(this.label),key:"input"},o("div",{class:`${s}-base-selection-input__content`},m?m({option:this.selectedOption,handleClose:()=>{}}):k?k(this.selectedOption,!0):we(this.label,this.selectedOption,!0))):o("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},this.placeholder),p);return o("div",{ref:"selfRef",class:[`${s}-base-selection`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,g?o("div",{class:`${s}-base-selection__border`}):null,g?o("div",{class:`${s}-base-selection__state-border`}):null)}});function zn(e){return De(e)?e.name||e.key||"key-required":e.value}function De(e){return e.type==="group"}function pt(e){return e.type==="ignored"}const In={getKey:zn,getIsGroup:De,getIgnored:pt};function ct(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Pn(e,n,l){if(!n)return e;function r(u){if(!Array.isArray(u))return[];const b=[];for(const g of u)if(De(g)){const s=r(g.children);s.length&&b.push(Object.assign({},g,{children:s}))}else{if(pt(g))continue;n(l,g)&&b.push(g)}return b}return r(e)}function Bn(e){const n=new Map;return e.forEach(l=>{De(l)?l.children.forEach(r=>{n.set(r.value,r)}):n.set(l.value,l)}),n}function _n(e,n){return n?typeof n.label=="string"?ct(e,n.label):n.value!==void 0?ct(e,String(n.value)):!1:!1}var $n=me([R("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),R("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[gt()])]);const An=Object.assign(Object.assign({},ye.props),{to:Ye.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:{type:Function,default:_n},placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:{type:Function,default:e=>({label:e,value:e})},fallbackOption:{type:[Function,Boolean],default:()=>e=>({label:String(e),value:e})},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},onChange:[Function,Array],items:Array});var Jn=Y({name:"Select",props:An,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:l,namespaceRef:r,inlineThemeDisabled:u}=Jt(e),b=ye("Select","-select",$n,an,e,n),g=S(e.defaultValue),s=q(e,"value"),F=lt(s,g),m=S(!1),k=S(""),$=I(()=>tn(y.value,In)),P=I(()=>Bn(_.value)),w=S(!1),p=lt(q(e,"show"),w),O=S(null),W=S(null),T=S(null),{localeRef:A}=rn("Select"),K=I(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:A.value.placeholder}),H=dn(e,["items","options"]),v=S([]),f=S([]),M=S(new Map),B=I(()=>{const{fallbackOption:t}=e;return t?c=>Object.assign(t(c),{value:c}):!1}),_=I(()=>f.value.concat(v.value).concat(H.value)),y=I(()=>{if(e.remote)return H.value;{const{value:t}=_,{value:c}=k;if(!c.length||!e.filterable)return t;{const{filter:x}=e;return Pn(t,x,c)}}});function z(t){const c=e.remote,{value:x}=M,{value:L}=P,{value:C}=B,D=[];return t.forEach(V=>{if(L.has(V))D.push(L.get(V));else if(c&&x.has(V))D.push(x.get(V));else if(C){const pe=C(V);pe&&D.push(pe)}}),D}const U=I(()=>{if(e.multiple){const{value:t}=F;return Array.isArray(t)?z(t):[]}return null}),G=I(()=>{const{value:t}=F;return!e.multiple&&!Array.isArray(t)?t===null?null:z([t])[0]||null:null}),ee=gn(e),{mergedSizeRef:fe,mergedDisabledRef:Z,mergedStatusRef:he}=ee;function a(t,c){const{onChange:x,"onUpdate:value":L,onUpdateValue:C}=e,{nTriggerFormChange:D,nTriggerFormInput:V}=ee;x&&Q(x,t,c),C&&Q(C,t,c),L&&Q(L,t,c),g.value=t,D(),V()}function d(t){const{onBlur:c}=e,{nTriggerFormBlur:x}=ee;c&&Q(c,t),x()}function N(){const{onClear:t}=e;t&&Q(t)}function te(t){const{onFocus:c}=e,{nTriggerFormFocus:x}=ee;c&&Q(c,t),x()}function xe(t){const{onSearch:c}=e;c&&Q(c,t)}function Ce(t){const{onScroll:c}=e;c&&Q(c,t)}function ve(){var t;const{remote:c,multiple:x}=e;if(c){const{value:L}=M;if(x)(t=U.value)===null||t===void 0||t.forEach(C=>{L.set(C.value,C)});else{const C=G.value;C&&L.set(C.value,C)}}}function ge(t){const{onUpdateShow:c,"onUpdate:show":x}=e;c&&Q(c,t),x&&Q(x,t),w.value=t}function oe(){Z.value||(ge(!0),w.value=!0,e.filterable&&Ke())}function J(){ge(!1)}function be(){k.value="",f.value=[]}const le=S(!1);function Se(){e.filterable&&(le.value=!0)}function Oe(){e.filterable&&(le.value=!1,p.value||be())}function Te(){Z.value||(p.value?e.filterable||J():oe())}function re(t){var c,x;!((x=(c=T.value)===null||c===void 0?void 0:c.selfRef)===null||x===void 0)&&x.contains(t.relatedTarget)||(m.value=!1,d(t),J())}function ae(t){te(t),m.value=!0}function Re(t){m.value=!0}function Me(t){var c;!((c=O.value)===null||c===void 0)&&c.$el.contains(t.relatedTarget)||(m.value=!1,d(t),J())}function Fe(){var t;(t=O.value)===null||t===void 0||t.focus(),J()}function se(t){var c;p.value&&(!((c=O.value)===null||c===void 0)&&c.$el.contains(t.target)||J())}function Ie(t){if(!Array.isArray(t))return[];if(B.value)return Array.from(t);{const{remote:c}=e,{value:x}=P;if(c){const{value:L}=M;return t.filter(C=>x.has(C)||L.has(C))}else return t.filter(L=>x.has(L))}}function ne(t){i(t.rawNode)}function i(t){if(Z.value)return;const{tag:c,remote:x,clearFilterAfterSelect:L}=e;if(c&&!x){const{value:C}=f,D=C[0]||null;D&&(v.value.push(D),f.value=[])}if(x&&M.value.set(t.value,t),e.multiple){const C=Ie(F.value),D=C.findIndex(V=>V===t.value);if(~D){if(C.splice(D,1),c&&!x){const V=h(t.value);~V&&(v.value.splice(V,1),L&&(k.value=""))}}else C.push(t.value),L&&(k.value="");a(C,z(C))}else{if(c&&!x){const C=h(t.value);~C?v.value=[v.value[C]]:v.value=[]}Be(),J(),a(t.value,t)}}function h(t){return v.value.findIndex(x=>x.value===t)}function j(t){p.value||oe();const{value:c}=t.target;k.value=c;const{tag:x,remote:L}=e;if(xe(c),x&&!L){if(!c){f.value=[];return}const C=e.onCreate(c);H.value.some(D=>D.value===C.value)||v.value.some(D=>D.value===C.value)?f.value=[]:f.value=[C]}}function Ve(t){t.stopPropagation();const{multiple:c}=e;!c&&e.filterable&&J(),N(),c?a([],[]):a(null,null)}function We(t){Je(t,"action")||t.preventDefault()}function je(t){Ce(t)}function Pe(t){var c,x,L,C,D;switch(t.code){case"Space":if(e.filterable)break;t.preventDefault();case"Enter":case"NumpadEnter":if(!(!((c=O.value)===null||c===void 0)&&c.isCompositing)){if(p.value){const V=(x=T.value)===null||x===void 0?void 0:x.getPendingTmNode();V?ne(V):e.filterable||(J(),Be())}else if(oe(),e.tag&&le.value){const V=f.value[0];if(V){const pe=V.value,{value:$e}=F;e.multiple&&Array.isArray($e)&&$e.some(Ue=>Ue===pe)||i(V)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;p.value&&((L=T.value)===null||L===void 0||L.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;p.value?(C=T.value)===null||C===void 0||C.next():oe();break;case"Escape":J(),(D=O.value)===null||D===void 0||D.focus();break}}function Be(){var t;(t=O.value)===null||t===void 0||t.focus()}function Ke(){var t;(t=O.value)===null||t===void 0||t.focusInput()}function ke(){var t;(t=W.value)===null||t===void 0||t.syncPosition()}ve(),ce(q(e,"options"),ve),ce(y,()=>{!p.value||ze(ke)}),ce(F,()=>{!p.value||ze(ke)});const He={focus:()=>{var t;(t=O.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=O.value)===null||t===void 0||t.blur()}},_e=I(()=>{const{self:{menuBoxShadow:t}}=b.value;return{"--n-menu-box-shadow":t}}),ie=u?Xe("select",void 0,_e,e):void 0;return Object.assign(Object.assign({},He),{mergedStatus:he,mergedClsPrefix:n,mergedBordered:l,namespace:r,treeMate:$,isMounted:Yt(),triggerRef:O,menuRef:T,pattern:k,uncontrolledShow:w,mergedShow:p,adjustedTo:Ye(e),uncontrolledValue:g,mergedValue:F,followerRef:W,localizedPlaceholder:K,selectedOption:G,selectedOptions:U,mergedSize:fe,mergedDisabled:Z,focused:m,activeWithoutMenuOpen:le,inlineThemeDisabled:u,onTriggerInputFocus:Se,onTriggerInputBlur:Oe,handleMenuFocus:Re,handleMenuBlur:Me,handleMenuTabOut:Fe,handleTriggerClick:Te,handleToggle:ne,handleDeleteOption:i,handlePatternInput:j,handleClear:Ve,handleTriggerBlur:re,handleTriggerFocus:ae,handleKeydown:Pe,syncPosition:ke,handleMenuAfterLeave:be,handleMenuClickOutside:se,handleMenuScroll:je,handleMenuKeydown:Pe,handleMenuMousedown:We,mergedTheme:b,cssVars:u?void 0:_e,themeClass:ie==null?void 0:ie.themeClass,onRender:ie==null?void 0:ie.onRender})},render(){return o("div",{class:`${this.mergedClsPrefix}-select`},o(cn,null,{default:()=>[o(fn,null,{default:()=>o(kn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),o(hn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ye.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>o(ht,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,l;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Ht(o(Mn,Object.assign({},this.menuProps,{ref:"menuRef",inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(l=this.menuProps)===null||l===void 0?void 0:l.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var r,u;return[(u=(r=this.$slots).empty)===null||u===void 0?void 0:u.call(r)]},action:()=>{var r,u;return[(u=(r=this.$slots).action)===null||u===void 0?void 0:u.call(r)]}}),this.displayDirective==="show"?[[Ut,this.mergedShow],[rt,this.handleMenuClickOutside]]:[[rt,this.handleMenuClickOutside]])):null}})})]}))}});export{Un as B,Zn as F,Jn as N,Cn as V,qn as a,Gn as b,wn as c};
