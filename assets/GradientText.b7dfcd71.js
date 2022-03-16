import{p as b,y as i,a as v,f as x,u as p,h as C,g as h}from"./Space.5f8f31c2.js";import{u as z}from"./Avatar.b45c3e96.js";import{f as T}from"./Icon.5554db87.js";import{z as E,A as s,p as R}from"./vendor.43ce0c4d.js";const $=t=>{const{primaryColor:r,successColor:a,warningColor:n,errorColor:l,infoColor:c,fontWeightStrong:d}=t;return{fontWeight:d,rotate:"252deg",colorStartPrimary:i(r,{alpha:.6}),colorEndPrimary:r,colorStartInfo:i(c,{alpha:.6}),colorEndInfo:c,colorStartWarning:i(n,{alpha:.6}),colorEndWarning:n,colorStartError:i(l,{alpha:.6}),colorEndError:l,colorStartSuccess:i(a,{alpha:.6}),colorEndSuccess:a}},w={name:"GradientText",common:b,self:$};var I=w,k=v("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`);const P=Object.assign(Object.assign({},p.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]});var G=E({name:"GradientText",props:P,setup(t){z();const{mergedClsPrefixRef:r,inlineThemeDisabled:a}=x(t),n=s(()=>{const{type:e}=t;return e==="danger"?"error":e}),l=s(()=>{let e=t.size||t.fontSize;return e&&(e=T(e)),e||void 0}),c=s(()=>{const e=t.color||t.gradient;if(typeof e=="string")return e;if(e){const g=e.deg||0,m=e.from,f=e.to;return`linear-gradient(${g}deg, ${m} 0%, ${f} 100%)`}}),d=p("GradientText","-gradient-text",k,I,t,r),u=s(()=>{const{value:e}=n,{common:{cubicBezierEaseInOut:g},self:{rotate:m,[h("colorStart",e)]:f,[h("colorEnd",e)]:y,fontWeight:S}}=d.value;return{"--n-bezier":g,"--n-rotate":m,"--n-color-start":f,"--n-color-end":y,"--n-font-weight":S}}),o=a?C("gradient-text",s(()=>n.value[0]),u,t):void 0;return{mergedClsPrefix:r,compatibleType:n,styleFontSize:l,styleBgImage:c,cssVars:a?void 0:u,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:t,onRender:r}=this;return r==null||r(),R("span",{class:[`${t}-gradient-text`,`${t}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}});export{G as N};
