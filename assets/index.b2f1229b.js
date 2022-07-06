import{H as g}from"./HbAdminPageLayout.36d6a576.js";import{H as i,j as x,aK as N,f as l,v as d,k as t,i as a,l as e,a0 as b,m as u,aL as c,N as r,h as o,n as h,z as f,p as v,a1 as w,B as j,C as K,x as n}from"./vendor.9a5280d9.js";import{x as k}from"./xml.9e2794d0.js";import{_ as C}from"./index.43a1497f.js";const _=s=>(j("data-v-728ad661"),s=s(),K(),s),L=_(()=>o("h2",null,"\u6743\u9650\u70B9\u7684\u6F14\u793A",-1)),S=n("\u88AB\u63A7\u5236\u7684\u6309\u94AE1"),B=n("\u88AB\u63A7\u5236\u7684\u6309\u94AE2"),H=_(()=>o("div",{class:"no-key-btn"},"\u63A7\u5236\u70B9\u672A\u88AB\u5BF9\u5E94\u7684\u6309\u94AE",-1)),I=n("\u8FD9\u91CC\u7684\u6309\u94AE\u88AB\u9690\u85CF\u4E86"),V=n(" Vue\u6A21\u677F\u4E2D\u4F7F\u7528`v-point`\uFF0C\u8DEF\u7531\u8282\u70B9\u4E2D\u7684`permissionKey`\u5C5E\u6027\u548C\u6307\u4EE4\u4E2D\u914D\u7F6E\u7684\u503C\u76F8\u540C\uFF0C\u5219\u663E\u793A\uFF0C\u5426\u5219\u4E0D\u663E\u793A"),R=_(()=>o("br",null,null,-1)),A=n("\u5982\u4EE5\u4E0B\u4EE3\u7801 "),D=n(" \u6743\u9650\u70B9\u914D\u7F6E\u5728\u8DEF\u7531\u8282\u70B9\u7684\u5B50\u8282\u70B9\u4E2D\uFF0C"),J=_(()=>o("br",null,null,-1)),z=n("\u5982\u4EE5\u4E0B\u4EE3\u7801 "),P={setup(s){i.registerLanguage("javascript",x),i.registerLanguage("xml",k);const m=`{
  name: '\u6743\u9650\u70B9',
  path: '/point',
  view: '/point-demo/index.vue',
  isRouter: true,
  isKeepalive: false,
  icon:'ri-command-line',
  type: 'menu',
  children: [
    {
      name: '\u65B0\u589E',
      permissionKey: 'add',
      path: '',
      view: '',
      isRouter: false,
      isKeepalive: false,
      type: 'point',
      children: []
    },
    {
      name: '\u7F16\u8F91\u5F39\u51FA\u6846\u53D6\u6D88',
      permissionKey: 'cancel',
      path: '',
      view: '',
      isRouter: false,
      isKeepalive: false,
      type: 'point',
      children: []
    }
  ]
}`,y=`
<n-button type="info" v-point="'add'">\u88AB\u63A7\u5236\u7684\u6309\u94AE1</n-button>
<n-button type="warning" v-point="'cancel'">\u88AB\u63A7\u5236\u7684\u6309\u94AE2</n-button>
<n-button type="warning" v-point="'no-key'">\u63A7\u5236\u70B9\u672A\u88AB\u5BF9\u5E94\u7684\u6309\u94AE</n-button>`;return(T,q)=>{const p=N("point");return l(),d(g,null,{default:t(()=>[a(e(w),{style:{padding:"20px"}},{default:t(()=>[a(e(b),null,{default:t(()=>[a(e(u),{vertical:""},{default:t(()=>[L,a(e(u),{align:"center"},{default:t(()=>[c((l(),d(e(r),{type:"info"},{default:t(()=>[S]),_:1})),[[p,"add"]]),c((l(),d(e(r),{type:"warning"},{default:t(()=>[B]),_:1})),[[p,"cancel"]]),o("div",null,[H,c((l(),d(e(r),{type:"warning"},{default:t(()=>[I]),_:1})),[[p,"no-key"]])])]),_:1}),a(e(h),{type:"info"},{default:t(()=>[V,R,A]),_:1}),a(e(f),null,{default:t(()=>[a(e(v),{code:y,language:"xml",hljs:e(i)},null,8,["hljs"])]),_:1}),a(e(h),{type:"info"},{default:t(()=>[D,J,z]),_:1}),a(e(f),null,{default:t(()=>[a(e(v),{code:m,language:"JavaScript",hljs:e(i)},null,8,["hljs"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};var O=C(P,[["__scopeId","data-v-728ad661"]]);export{O as default};
