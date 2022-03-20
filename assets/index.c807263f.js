import{H as T}from"./HbAdminPageLayout.4558f7d4.js";import{b as d,j as M,aP as S,d as _,q as u,h as a,g as s,i as e,X as w,k as y,aQ as m,N as v,f as l,l as x,x as E,m as A,P as L,z as R,A as I,s as o}from"./vendor.43ba9716.js";import{_ as k}from"./index.0f8fe434.js";function O(n){const t=n.regex,c=t.concat(/[A-Z_]/,t.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),b=/[A-Za-z0-9._:-]+/,r={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},i={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},N=n.inherit(i,{begin:/\(/,end:/\)/}),h=n.inherit(n.APOS_STRING_MODE,{className:"string"}),f=n.inherit(n.QUOTE_STRING_MODE,{className:"string"}),g={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:b,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[r]},{begin:/'/,end:/'/,contains:[r]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[i,f,h,N,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[i,N,f,h]}]}]},n.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},r,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[g],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[g],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:t.concat(/</,t.lookahead(t.concat(c,t.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:c,relevance:0,starts:g}]},{className:"tag",begin:t.concat(/<\//,t.lookahead(t.concat(c,/>/))),contains:[{className:"name",begin:c,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const p=n=>(R("data-v-4c4472e0"),n=n(),I(),n),D=p(()=>l("h2",null,"\u6743\u9650\u70B9\u7684\u6F14\u793A",-1)),P=o("\u88AB\u63A7\u5236\u7684\u6309\u94AE1"),K=o("\u88AB\u63A7\u5236\u7684\u6309\u94AE2"),z=p(()=>l("div",{class:"no-key-btn"},"\u63A7\u5236\u70B9\u672A\u88AB\u5BF9\u5E94\u7684\u6309\u94AE",-1)),C=o("\u8FD9\u91CC\u7684\u6309\u94AE\u88AB\u9690\u85CF\u4E86"),G=o(" Vue\u6A21\u677F\u4E2D\u4F7F\u7528`v-point`\uFF0C\u8DEF\u7531\u8282\u70B9\u4E2D\u7684`permissionKey`\u5C5E\u6027\u548C\u6307\u4EE4\u4E2D\u914D\u7F6E\u7684\u503C\u76F8\u540C\uFF0C\u5219\u663E\u793A\uFF0C\u5426\u5219\u4E0D\u663E\u793A"),X=p(()=>l("br",null,null,-1)),B=o("\u5982\u4EE5\u4E0B\u4EE3\u7801 "),V=o(" \u6743\u9650\u70B9\u914D\u7F6E\u5728\u8DEF\u7531\u8282\u70B9\u7684\u5B50\u8282\u70B9\u4E2D\uFF0C"),Z=p(()=>l("br",null,null,-1)),j=o("\u5982\u4EE5\u4E0B\u4EE3\u7801 "),H={setup(n){d.registerLanguage("javascript",M),d.registerLanguage("xml",O);const t=`{
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
}`,c=`
<n-button type="info" v-point="'add'">\u88AB\u63A7\u5236\u7684\u6309\u94AE1</n-button>
<n-button type="warning" v-point="'cancel'">\u88AB\u63A7\u5236\u7684\u6309\u94AE2</n-button>
<n-button type="warning" v-point="'no-key'">\u63A7\u5236\u70B9\u672A\u88AB\u5BF9\u5E94\u7684\u6309\u94AE</n-button>`;return(b,r)=>{const i=S("point");return _(),u(T,null,{default:a(()=>[s(e(L),{style:{padding:"20px"}},{default:a(()=>[s(e(w),null,{default:a(()=>[s(e(y),{vertical:""},{default:a(()=>[D,s(e(y),{align:"center"},{default:a(()=>[m((_(),u(e(v),{type:"info"},{default:a(()=>[P]),_:1})),[[i,"add"]]),m((_(),u(e(v),{type:"warning"},{default:a(()=>[K]),_:1})),[[i,"cancel"]]),l("div",null,[z,m((_(),u(e(v),{type:"warning"},{default:a(()=>[C]),_:1})),[[i,"no-key"]])])]),_:1}),s(e(x),{type:"info"},{default:a(()=>[G,X,B]),_:1}),s(e(E),null,{default:a(()=>[s(e(A),{code:c,language:"xml",hljs:e(d)},null,8,["hljs"])]),_:1}),s(e(x),{type:"info"},{default:a(()=>[V,Z,j]),_:1}),s(e(E),null,{default:a(()=>[s(e(A),{code:t,language:"JavaScript",hljs:e(d)},null,8,["hljs"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}};var Y=k(H,[["__scopeId","data-v-4c4472e0"]]);export{Y as default};
