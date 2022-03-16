import{c as t,a as b,d,b as n,i as L,D as W,e as q,f as G,u,I as J,h as Q,r as g,n as U,g as m,z as X}from"./Space.cb2e4e91.js";import{b as Y,k as Z}from"./Icon.54169ce7.js";import{c as ee}from"./light.6c7615e5.js";import{z as oe,A as h,p as s}from"./vendor.f9e4f91a.js";var re=t([b("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[d("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),d("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),d("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),d("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),d("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[b("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 font-size: var(--n-close-size);
 transition: color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),b("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),d("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),d("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])])]),L(b("card",{background:"var(--n-color-modal)"})),W(b("card",{background:"var(--n-color-popover)"})),b("card",[q({background:"var(--n-color-modal)"})])]);const x={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},hoverable:Boolean,role:String,onClose:[Function,Array]},ie=Z(x),te=Object.assign(Object.assign({},u.props),x);var le=oe({name:"Card",props:te,setup(e){const v=()=>{const{onClose:c}=e;c&&U(c)},{inlineThemeDisabled:f,mergedClsPrefixRef:o,mergedRtlRef:p}=G(e),l=u("Card","-card",re,ee,e,o),i=J("Card",p,o),r=h(()=>{const{size:c}=e,{self:{color:z,colorModal:C,colorTarget:y,textColor:S,titleTextColor:$,titleFontWeight:k,borderColor:w,actionColor:T,borderRadius:_,closeColor:B,closeColorHover:R,closeColorPressed:P,lineHeight:O,closeSize:E,boxShadow:j,colorPopover:M,colorEmbedded:F,[m("padding",c)]:H,[m("fontSize",c)]:N,[m("titleFontSize",c)]:V},common:{cubicBezierEaseInOut:A}}=l.value,{top:D,left:I,bottom:K}=X(H);return{"--n-bezier":A,"--n-border-radius":_,"--n-color":e.embedded?F:z,"--n-color-modal":C,"--n-color-popover":M,"--n-color-target":y,"--n-text-color":S,"--n-line-height":O,"--n-action-color":T,"--n-title-text-color":$,"--n-title-font-weight":k,"--n-close-color":B,"--n-close-color-hover":R,"--n-close-color-pressed":P,"--n-border-color":w,"--n-box-shadow":j,"--n-padding-top":D,"--n-padding-bottom":K,"--n-padding-left":I,"--n-font-size":N,"--n-title-font-size":V,"--n-close-size":E}}),a=f?Q("card",h(()=>e.size[0]),r,e):void 0;return{rtlEnabled:i,mergedClsPrefix:o,mergedTheme:l,handleCloseClick:v,cssVars:f?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:e,bordered:v,hoverable:f,mergedClsPrefix:o,rtlEnabled:p,onRender:l,$slots:i}=this;return l==null||l(),s("div",{class:[`${o}-card`,this.themeClass,{[`${o}-card--rtl`]:p,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:v,[`${o}-card--hoverable`]:f}],style:this.cssVars,role:this.role},g(i.cover,r=>r&&s("div",{class:`${o}-card-cover`,role:"none"},r)),g(i.header,r=>r||this.title||this.closable?s("div",{class:`${o}-card-header`,style:this.headerStyle},s("div",{class:`${o}-card-header__main`,role:"heading"},r||[this.title]),g(i["header-extra"],a=>a&&s("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},a)),this.closable?s(Y,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick}):null):null),g(i.default,r=>r&&s("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},r)),g(i.footer,r=>r&&[s("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},r)]),g(i.action,r=>r&&s("div",{class:`${o}-card__action`,role:"none"},r)))}});export{le as N,ie as a,x as c};
