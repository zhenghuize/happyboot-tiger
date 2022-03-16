import{c as K,u as le,b as se,a as ce}from"./Button.ede6cac8.js";import{p as de,y as ue,a as M,b as t,c as T,d as u,C as P,f as he,u as L,h as be,M as W,r as v,g,s as N,A as l,n as D}from"./Space.cb2e4e91.js";import{u as fe}from"./Icon.54169ce7.js";import{c as ve}from"./_common.c609fc90.js";import{z as ge,h as j,C as me,A as _,p as a}from"./vendor.f9e4f91a.js";const we=e=>{const{primaryColor:s,opacityDisabled:h,borderRadius:n,textColor3:r}=e,m="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},ve),{iconColor:r,textColor:"white",loadingColor:s,opacityDisabled:h,railColor:m,railColorActive:s,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${ue(s,{alpha:.2})}`})},pe={name:"Switch",common:de,self:we};var ye=pe,xe=M("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),t("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),M("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[K({originalTransform:"translateX(-50%) translateY(-50%)"})]),t("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),T("&:focus",[t("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),u("round",[t("rail",{borderRadius:"calc(var(--n-rail-height) / 2)"},[t("button",{borderRadius:"calc(var(--n-button-height) / 2)"})])]),P("disabled",[P("icon",[u("pressed",[t("rail",[t("button",{maxWidth:"var(--n-button-width-pressed)"})])]),t("rail",[T("&:active",[t("button",{maxWidth:"var(--n-button-width-pressed)"})])]),u("active",[u("pressed",[t("rail",[t("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])]),t("rail",[T("&:active",[t("button",{left:"calc(100% - var(--n-offset) - var(--n-button-width-pressed))"})])])])])]),u("active",[t("rail",[t("button",{left:"calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)"})])]),t("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[K()]),t("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),u("active",[t("rail","background-color: var(--n-rail-color-active);")]),u("disabled",[t("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)]),u("loading",[t("rail",`
 pointer-events: none;
 `)])]);const ke=Object.assign(Object.assign({},L.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,onChange:[Function,Array]});var _e=ge({name:"Switch",props:ke,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:h}=he(e),n=L("Switch","-switch",xe,ye,e,s),r=le(e),{mergedSizeRef:m,mergedDisabledRef:b}=r,y=j(e.defaultValue),R=me(e,"value"),f=fe(R,y),x=_(()=>f.value===e.checkedValue),w=j(!1),i=j(!1),c=_(()=>{const{railStyle:o}=e;if(!!o)return o({focused:i.value,checked:x.value})});function d(o){const{"onUpdate:value":S,onChange:B,onUpdateValue:V}=e,{nTriggerFormInput:$,nTriggerFormChange:z}=r;S&&D(S,o),V&&D(V,o),B&&D(B,o),y.value=o,$(),z()}function O(){const{nTriggerFormFocus:o}=r;o()}function U(){const{nTriggerFormBlur:o}=r;o()}function H(){e.loading||b.value||(f.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue))}function I(){i.value=!0,O()}function E(){i.value=!1,U(),w.value=!1}function X(o){e.loading||b.value||o.code==="Space"&&(f.value!==e.checkedValue?d(e.checkedValue):d(e.uncheckedValue),w.value=!1)}function Y(o){e.loading||b.value||o.code==="Space"&&(o.preventDefault(),w.value=!0)}const A=_(()=>{const{value:o}=m,{self:{opacityDisabled:S,railColor:B,railColorActive:V,buttonBoxShadow:$,buttonColor:z,boxShadowFocus:q,loadingColor:G,textColor:J,iconColor:Q,[g("buttonHeight",o)]:k,[g("buttonWidth",o)]:Z,[g("buttonWidthPressed",o)]:ee,[g("railHeight",o)]:C,[g("railWidth",o)]:F,[g("railBorderRadius",o)]:te,[g("buttonBorderRadius",o)]:oe},common:{cubicBezierEaseInOut:ie}}=n.value,ae=N((l(C)-l(k))/2),ne=N(Math.max(l(C),l(k))),re=l(C)>l(k)?F:N(l(F)+l(k)-l(C));return{"--n-bezier":ie,"--n-button-border-radius":oe,"--n-button-box-shadow":$,"--n-button-color":z,"--n-button-width":Z,"--n-button-width-pressed":ee,"--n-button-height":k,"--n-height":ne,"--n-offset":ae,"--n-opacity-disabled":S,"--n-rail-border-radius":te,"--n-rail-color":B,"--n-rail-color-active":V,"--n-rail-height":C,"--n-rail-width":F,"--n-width":re,"--n-box-shadow-focus":q,"--n-loading-color":G,"--n-text-color":J,"--n-icon-color":Q}}),p=h?be("switch",_(()=>m.value[0]),A,e):void 0;return{handleClick:H,handleBlur:E,handleFocus:I,handleKeyup:X,handleKeydown:Y,mergedRailStyle:c,pressed:w,mergedClsPrefix:s,mergedValue:f,checked:x,mergedDisabled:b,cssVars:h?void 0:A,themeClass:p==null?void 0:p.themeClass,onRender:p==null?void 0:p.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:s,checked:h,mergedRailStyle:n,onRender:r,$slots:m}=this;r==null||r();const{checked:b,unchecked:y,icon:R,"checked-icon":f,"unchecked-icon":x}=m,w=!(W(R)&&W(f)&&W(x));return a("div",{role:"switch","aria-checked":h,class:[`${e}-switch`,this.themeClass,w&&`${e}-switch--icon`,h&&`${e}-switch--active`,s&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},v(b,i=>v(y,c=>i||c?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),i),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),c)):null)),a("div",{class:`${e}-switch__button`},v(R,i=>v(f,c=>v(x,d=>a(se,null,{default:()=>this.loading?a(ce,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(c||i)?a("div",{class:`${e}-switch__button-icon`,key:c?"checked-icon":"icon"},c||i):!this.checked&&(d||i)?a("div",{class:`${e}-switch__button-icon`,key:d?"unchecked-icon":"icon"},d||i):null})))),v(b,i=>i&&a("div",{key:"checked",class:`${e}-switch__checked`},i)),v(y,i=>i&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},i)))))}});export{_e as N};
