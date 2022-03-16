import{p as u,l as b}from"./Layout.851e249c.js";import{a as v,d,u as i,f as m,h as f}from"./Space.cb2e4e91.js";import{z as p,A as l,p as C}from"./vendor.f9e4f91a.js";var x=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[d("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),d("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]);const y={position:u,inverted:Boolean,bordered:{type:Boolean,default:!1}};var R=p({name:"LayoutHeader",props:Object.assign(Object.assign({},i.props),y),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:a}=m(e),c=i("Layout","-layout-header",x,b,e,r),n=l(()=>{const{common:{cubicBezierEaseInOut:h},self:t}=c.value,o={"--n-bezier":h};return e.inverted?(o["--n-color"]=t.headerColorInverted,o["--n-text-color"]=t.textColorInverted,o["--n-border-color"]=t.headerBorderColorInverted):(o["--n-color"]=t.headerColor,o["--n-text-color"]=t.textColor,o["--n-border-color"]=t.headerBorderColor),o}),s=a?f("layout-header",l(()=>e.inverted?"a":"b"),n,e):void 0;return{mergedClsPrefix:r,cssVars:a?void 0:n,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),C("div",{class:[`${r}-layout-header`,this.themeClass,this.position&&`${r}-layout-header--${this.position}-positioned`,this.bordered&&`${r}-layout-header--bordered`],style:this.cssVars},this.$slots)}});export{R as N};
