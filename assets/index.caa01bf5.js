import{H as y}from"./HbAdminPageLayout.50adc41d.js";import{_ as v}from"./index.82b66f9f.js";import{r as u,o as j,f,g,h as m,a0 as x,v as _,k as t,i,l as s,Y as M,m as b,n as E,z as P,s as L,F as S,$ as w,B as C,C as N,x as Y}from"./vendor.3cfbc3e6.js";const k={props:{effect:{type:String,default:"reverse",validator(e){return e==="reverse"||e==="normal"}}},setup(e){class c{constructor({element:a,container:n,tiltEffect:o}){this.element=a,this.container=n,this.size=[300,360],[this.w,this.h]=this.size,this.tiltEffect=o,this.mouseOnComponent=!1,this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseEnter=this.handleMouseEnter.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this),this.defaultStates=this.defaultStates.bind(this),this.setProperty=this.setProperty.bind(this),this.init=this.init.bind(this),this.init()}handleMouseMove(a){const{offsetX:n,offsetY:o}=a;let d,l;this.tiltEffect==="reverse"?(d=(n-this.w/2)/3/3,l=-(o-this.h/2)/3/3):this.tiltEffect==="normal"&&(d=-(n-this.w/2)/3/3,l=(o-this.h/2)/3/3),this.setProperty("--rY",d.toFixed(2)),this.setProperty("--rX",l.toFixed(2)),this.setProperty("--bY",80-(d/4).toFixed(2)+"%"),this.setProperty("--bX",50-(l/4).toFixed(2)+"%")}handleMouseEnter(){this.mouseOnComponent=!0,this.container.classList.add("container--active")}handleMouseLeave(){this.mouseOnComponent=!1,this.defaultStates()}defaultStates(){this.container.classList.remove("container--active"),this.setProperty("--rY",0),this.setProperty("--rX",0),this.setProperty("--bY","80%"),this.setProperty("--bX","50%")}setProperty(a,n){return this.container.style.setProperty(a,n)}init(){this.element.addEventListener("mousemove",this.handleMouseMove),this.element.addEventListener("mouseenter",this.handleMouseEnter),this.element.addEventListener("mouseleave",this.handleMouseLeave)}}const h=u(null),p=u(null);return j(()=>{new c({element:h.value,container:p.value,tiltEffect:"reverse"})}),(r,a)=>(f(),g("div",{class:"hb-admin-ptec wrap--1",ref_key:"wrap",ref:h},[m("div",{class:"container container--1",ref_key:"container",ref:p},[x(r.$slots,"default",{},void 0,!0)],512)],512))}};var F=v(k,[["__scopeId","data-v-28429e86"]]);const X=e=>(C("data-v-ade1d642"),e=e(),N(),e),B=X(()=>m("h2",null,"\u89C6\u5DEE\u5361\u7247",-1)),I=Y(" \u66F4\u52A0\u6709\u7075\u6027\u7684\u5361\u7247 "),A=["src"],H={setup(e){const c=u(["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"]);return(h,p)=>(f(),_(y,null,{default:t(()=>[i(s(w),{style:{padding:"20px"}},{default:t(()=>[i(s(M),null,{default:t(()=>[i(s(b),{vertical:""},{default:t(()=>[B,i(s(E),{type:"info"},{default:t(()=>[I]),_:1}),i(s(P),null,{default:t(()=>[i(s(b),null,{default:t(()=>[(f(!0),g(S,null,L(c.value,r=>(f(),_(s(F),null,{default:t(()=>[m("img",{height:"200",src:r},null,8,A)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};var V=v(H,[["__scopeId","data-v-ade1d642"]]);export{V as default};
