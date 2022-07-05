import{H as L}from"./HbAdminPageLayout.bee563ad.js";import{L as m,_ as S}from"./HbAdminSimpleChart.8142f3d3.js";import{f as y,v as x,k as s,i as e,l as t,a8 as w,a9 as i,z as n,y as u,m as r,h as o,aF as c,Y as d,aG as j,aH as v,g as A,s as N,F as T,aI as I,aJ as C,a2 as B,x as l,t as F,B as G,C as V}from"./vendor.f2dad3e6.js";import{_ as D}from"./index.30dcad89.js";import"./index.390bc4bc.js";const P={setup(f){const _={color:["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"],title:{text:"Gradient Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Line 1","Line 2","Line 3","Line 4","Line 5"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Line 1",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new m(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])},emphasis:{focus:"series"},data:[140,232,101,264,90,340,250]},{name:"Line 2",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new m(0,0,0,1,[{offset:0,color:"rgb(0, 221, 255)"},{offset:1,color:"rgb(77, 119, 255)"}])},emphasis:{focus:"series"},data:[120,282,111,234,220,340,310]},{name:"Line 3",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new m(0,0,0,1,[{offset:0,color:"rgb(55, 162, 255)"},{offset:1,color:"rgb(116, 21, 219)"}])},emphasis:{focus:"series"},data:[320,132,201,334,190,130,220]},{name:"Line 4",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new m(0,0,0,1,[{offset:0,color:"rgb(255, 0, 135)"},{offset:1,color:"rgb(135, 0, 157)"}])},emphasis:{focus:"series"},data:[220,402,231,134,190,230,120]},{name:"Line 5",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,label:{show:!0,position:"top"},areaStyle:{opacity:.8,color:new m(0,0,0,1,[{offset:0,color:"rgb(255, 191, 0)"},{offset:1,color:"rgb(224, 62, 76)"}])},emphasis:{focus:"series"},data:[220,302,181,234,210,290,150]}]};return(g,b)=>(y(),x(S,{options:_}))}},M={setup(f){const _={title:{text:"Referer of a Website",subtext:"Fake Data"},tooltip:{trigger:"item"},series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return(g,b)=>(y(),x(S,{options:_}))}},$={setup(f){let _=["\u70B9","\u51FB","\u67F1","\u5B50","\u6216","\u8005","\u4E24","\u6307","\u5728","\u89E6","\u5C4F","\u4E0A","\u6ED1","\u52A8","\u80FD","\u591F","\u81EA","\u52A8","\u7F29","\u653E"],g=[220,182,191,234,290,330,310,123,442,321,90,149,210,122,133,334,198,123,125,220];for(let p=0;p<g.length;p++);const b={title:{text:"\u7279\u6027\u793A\u4F8B\uFF1A\u6E10\u53D8\u8272 \u9634\u5F71 \u70B9\u51FB\u7F29\u653E",subtext:"Feature Sample: Gradient Color, Shadow, Click Zoom"},xAxis:{data:_,axisLabel:{inside:!0,color:"#fff"},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#999"}},dataZoom:[{type:"inside"}],series:[{type:"bar",showBackground:!0,itemStyle:{color:new m(0,0,0,1,[{offset:0,color:"#83bff6"},{offset:.5,color:"#188df0"},{offset:1,color:"#188df0"}])},emphasis:{itemStyle:{color:new m(0,0,0,1,[{offset:0,color:"#2378f7"},{offset:.7,color:"#2378f7"},{offset:1,color:"#83bff6"}])}},data:g}]},h=6;function z(p,k){console.log(_[Math.max(p.dataIndex-h/2,0)]),k.dispatchAction({type:"dataZoom",startValue:_[Math.max(p.dataIndex-h/2,0)],endValue:_[Math.min(p.dataIndex+h/2,g.length-1)]})}return(p,k)=>(y(),x(S,{options:b,onChartClick:z}))}};const a=f=>(G("data-v-3a456d8f"),f=f(),V(),f),E=l(" \u672C\u5468"),H={class:"number-big"},Z={class:"v-center"},W=l(" \u65E5\u540C\u6BD4 "),J=l(" %"),O=a(()=>o("i",{class:"ri-arrow-up-s-fill"},null,-1)),R={class:"v-center"},U=l(" \u5468\u540C\u6BD4 "),X=l(" % "),Y=a(()=>o("i",{class:"ri-arrow-down-s-fill"},null,-1)),q=a(()=>o("span",null,"\u7D2F\u8BA1\uFF1A",-1)),K=l(" \u672C\u6708"),Q={class:"number-big"},ee={class:"v-center"},te=l(" \u65E5\u540C\u6BD4 "),se=l(" %"),oe=a(()=>o("i",{class:"ri-arrow-up-s-fill"},null,-1)),ae={class:"v-center"},le=l(" \u5468\u540C\u6BD4 "),ie=l(" % "),ne=a(()=>o("i",{class:"ri-arrow-down-s-fill"},null,-1)),re=a(()=>o("span",null,"\u7D2F\u8BA1\uFF1A",-1)),ce=l(" \u5F53\u5929"),de={class:"number-big"},_e={class:"v-center"},ue=l(" \u65E5\u540C\u6BD4 "),fe=l(" %"),he=a(()=>o("i",{class:"ri-arrow-up-s-fill"},null,-1)),pe={class:"v-center"},me=l(" \u5468\u540C\u6BD4 "),ge=l(" % "),ve=a(()=>o("i",{class:"ri-arrow-down-s-fill"},null,-1)),we=a(()=>o("span",null,"\u8BC4\u8BBA\u91CF\uFF1A",-1)),ye=l(" \u5F53\u5929"),be={class:"number-big"},xe={class:"v-center"},ze=l(" \u65E5\u540C\u6BD4 "),Se=l(" %"),ke=a(()=>o("i",{class:"ri-arrow-up-s-fill"},null,-1)),Fe={class:"v-center"},Le=l(" \u5468\u540C\u6BD4 "),je=l(" % "),Ae=a(()=>o("i",{class:"ri-arrow-down-s-fill"},null,-1)),Ne=a(()=>o("span",null,"\u9605\u8BFB\u91CF\uFF1A",-1)),Te=a(()=>o("i",{class:"ri-mail-line"},null,-1)),Ie=a(()=>o("div",null,"\u7206\u6599",-1)),Ce=a(()=>o("i",{class:"ri-tv-line"},null,-1)),Be=a(()=>o("div",null,"\u89C6\u9891",-1)),Ge=a(()=>o("i",{class:"ri-newspaper-line"},null,-1)),Ve=a(()=>o("div",null,"\u65B0\u95FB",-1)),De=a(()=>o("i",{class:"ri-music-2-line"},null,-1)),Pe=a(()=>o("div",null,"\u97F3\u9891",-1)),Me=a(()=>o("i",{class:"ri-price-tag-3-line"},null,-1)),$e=a(()=>o("div",null,"\u6807\u7B7E",-1)),Ee=a(()=>o("i",{class:"ri-message-3-line"},null,-1)),He=a(()=>o("div",null," \u6D88\u606F ",-1)),Ze=a(()=>o("i",{class:"ri-line-chart-line"},null,-1)),We=a(()=>o("div",null,"\u5206\u6790",-1)),Je=a(()=>o("i",{class:"ri-settings-line"},null,-1)),Oe=a(()=>o("div",null,"\u8BBE\u7F6E",-1)),Re={style:{overflow:"auto"}},Ue=l(" \u4E0D\u8BE5 (10000) "),Xe=l(" \u8D85\u4EBA\u4E0D\u4F1A\u98DE (2000) "),Ye=l(" \u624B\u5199\u7684\u4ECE\u524D (300) "),qe={setup(f){const _=[{name:"\u5F20\u4E09",src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"},{name:"\u674E\u56DB",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{name:"\u738B\u4E94",src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"},{name:"\u8D75\u516D",src:"https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"},{name:"\u4E03\u4ED4",src:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"}];return(g,b)=>(y(),x(L,null,{default:s(()=>[e(t(r),{vertical:"",style:{padding:"5px"}},{default:s(()=>[e(t(w),{cols:"4","y-gap":"10","x-gap":"10"},{default:s(()=>[e(t(i),null,{default:s(()=>[e(t(n),{title:"\u7206\u6599",size:"small",segmented:{content:!0,footer:"hard"},hoverable:""},{"header-extra":s(()=>[e(t(u),{type:"success"},{default:s(()=>[E]),_:1})]),footer:s(()=>[e(t(r),{justify:"space-between"},{default:s(()=>[q,o("span",null,[e(t(c),{from:0,to:4655,"show-separator":""})])]),_:1})]),default:s(()=>[o("div",H,[e(t(c),{from:0,to:4655,"show-separator":""})]),o("div",null,[e(t(r),{justify:"space-between",align:"center"},{default:s(()=>[o("span",Z,[W,e(t(c),{from:0,to:4655,"show-separator":""}),J,e(t(d),{color:"red"},{default:s(()=>[O]),_:1})]),o("span",R,[U,e(t(c),{from:0,to:4655,"show-separator":""}),X,e(t(d),{color:"green"},{default:s(()=>[Y]),_:1})])]),_:1})])]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{title:"\u65B0\u95FB",size:"small",segmented:{content:!0,footer:"hard"},hoverable:""},{"header-extra":s(()=>[e(t(u),{type:"info"},{default:s(()=>[K]),_:1})]),footer:s(()=>[e(t(r),{justify:"space-between"},{default:s(()=>[re,o("span",null,[e(t(c),{from:0,to:4655,"show-separator":""})])]),_:1})]),default:s(()=>[o("div",Q,[e(t(c),{from:0,to:4655,"show-separator":""})]),o("div",null,[e(t(r),{justify:"space-between",align:"center"},{default:s(()=>[o("span",ee,[te,e(t(c),{from:0,to:4655,"show-separator":""}),se,e(t(d),{color:"red"},{default:s(()=>[oe]),_:1})]),o("span",ae,[le,e(t(c),{from:0,to:4655,"show-separator":""}),ie,e(t(d),{color:"green"},{default:s(()=>[ne]),_:1})])]),_:1})])]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{title:"\u8BC4\u8BBA",size:"small",segmented:{content:!0,footer:"hard"},hoverable:""},{"header-extra":s(()=>[e(t(u),{type:"warning"},{default:s(()=>[ce]),_:1})]),footer:s(()=>[e(t(r),{justify:"space-between"},{default:s(()=>[we,o("span",null,[e(t(c),{from:0,to:4655,"show-separator":""})])]),_:1})]),default:s(()=>[o("div",de,[e(t(c),{from:0,to:4655,"show-separator":""})]),o("div",null,[e(t(r),{justify:"space-between",align:"center"},{default:s(()=>[o("span",_e,[ue,e(t(c),{from:0,to:4655,"show-separator":""}),fe,e(t(d),{color:"red"},{default:s(()=>[he]),_:1})]),o("span",pe,[me,e(t(c),{from:0,to:4655,"show-separator":""}),ge,e(t(d),{color:"green"},{default:s(()=>[ve]),_:1})])]),_:1})])]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{title:"\u9605\u8BFB",size:"small",segmented:{content:!0,footer:"hard"},hoverable:""},{"header-extra":s(()=>[e(t(u),{type:"error"},{default:s(()=>[ye]),_:1})]),footer:s(()=>[e(t(r),{justify:"space-between"},{default:s(()=>[Ne,o("span",null,[e(t(c),{from:0,to:1135116,"show-separator":""})])]),_:1})]),default:s(()=>[o("div",be,[e(t(c),{from:0,to:4655,"show-separator":""})]),o("div",null,[e(t(r),{justify:"space-between",align:"center"},{default:s(()=>[o("span",xe,[ze,e(t(c),{from:0,to:4655,"show-separator":""}),Se,e(t(d),{color:"red"},{default:s(()=>[ke]),_:1})]),o("span",Fe,[Le,e(t(c),{from:0,to:4655,"show-separator":""}),je,e(t(d),{color:"green"},{default:s(()=>[Ae]),_:1})])]),_:1})])]),_:1})]),_:1})]),_:1}),e(t(w),{cols:"8","y-gap":"10","x-gap":"10"},{default:s(()=>[e(t(i),null,{default:s(()=>[e(t(n),{hoverable:""},{default:s(()=>[e(t(r),{vertical:"",align:"center",size:"small"},{default:s(()=>[o("div",null,[e(t(d),{size:"28",color:"rgb(105, 192, 255)"},{default:s(()=>[Te]),_:1})]),Ie]),_:1})]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{hoverable:""},{default:s(()=>[e(t(r),{vertical:"",align:"center",size:"small"},{default:s(()=>[o("div",null,[e(t(d),{size:"28",color:"rgb(179, 127, 235)"},{default:s(()=>[Ce]),_:1})]),Be]),_:1})]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{hoverable:""},{default:s(()=>[e(t(r),{vertical:"",align:"center",size:"small"},{default:s(()=>[o("div",null,[e(t(d),{size:"28",color:"rgb(255, 156, 110)"},{default:s(()=>[Ge]),_:1})]),Ve]),_:1})]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{hoverable:""},{default:s(()=>[e(t(r),{vertical:"",align:"center",size:"small"},{default:s(()=>[o("div",null,[e(t(d),{size:"28",color:"rgb(255, 214, 102)"},{default:s(()=>[De]),_:1})]),Pe]),_:1})]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{hoverable:""},{default:s(()=>[e(t(r),{vertical:"",align:"center",size:"small"},{default:s(()=>[o("div",null,[e(t(d),{size:"28",color:"rgb(255, 133, 192)"},{default:s(()=>[Me]),_:1})]),$e]),_:1})]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{hoverable:""},{default:s(()=>[e(t(r),{vertical:"",align:"center",size:"small"},{default:s(()=>[o("div",null,[e(t(d),{size:"28",color:"rgb(255, 192, 105)"},{default:s(()=>[Ee]),_:1})]),He]),_:1})]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{hoverable:""},{default:s(()=>[e(t(r),{vertical:"",align:"center",size:"small"},{default:s(()=>[o("div",null,[e(t(d),{size:"28",color:"rgb(98, 116, 217)"},{default:s(()=>[Ze]),_:1})]),We]),_:1})]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{hoverable:""},{default:s(()=>[e(t(r),{vertical:"",align:"center",size:"small"},{default:s(()=>[o("div",null,[e(t(d),{size:"28",color:"rgb(158, 158, 158)"},{default:s(()=>[Je]),_:1})]),Oe]),_:1})]),_:1})]),_:1})]),_:1}),e(t(w),{cols:"2","y-gap":"10","x-gap":"10"},{default:s(()=>[e(t(i),{span:"2"},{default:s(()=>[e(t(n),{title:"\u6700\u65B0\u901A\u77E5",size:"small",hoverable:""},{default:s(()=>[o("div",Re,[e(t(j),{horizontal:""},{default:s(()=>[e(t(v),{type:"success",title:"\u76F4\u64AD",content:"\u690D\u6811\u8282\u76F4\u64AD",time:"2022\u5E7403\u670813\u65E5"}),e(t(v),{title:"\u66F4\u65B0",type:"error",content:"\u66F4\u65B0\u5F00\u673A\u753B\u9762\u56FE",time:"2022\u5E7403\u670813\u65E5"}),e(t(v),{type:"warning",title:"\u63A8\u9001",content:"\u75AB\u60C5\u516C\u544A",time:"2022\u5E7403\u670813\u65E5"}),e(t(v),{type:"warning",title:"\u63A8\u9001",content:"\u75AB\u60C5\u6587\u7AE01",time:"2022\u5E7403\u670813\u65E5"}),e(t(v),{type:"warning",title:"\u63A8\u9001",content:"\u75AB\u60C5\u6587\u7AE02",time:"2022\u5E7403\u670813\u65E5"}),e(t(v),{type:"info",title:"\u5F00\u4F1A",content:"\u4E0B\u53482\u70B9304\u4F1A\u8BAE\u5BA4",time:"2022\u5E7403\u670813\u65E5"})]),_:1})])]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{title:"\u70ED\u95E8\u6587\u7AE0",size:"small",hoverable:""},{default:s(()=>[e(t(r),null,{default:s(()=>[e(t(u),{type:"error"},{default:s(()=>[Ue]),_:1}),e(t(u),{type:"warning"},{default:s(()=>[Xe]),_:1}),e(t(u),{type:"success"},{default:s(()=>[Ye]),_:1}),(y(),A(T,null,N(7,h=>e(t(u),{type:"info"},{default:s(()=>[l(" \u54EA\u91CC\u90FD\u662F\u4F60 ("+F(h)+") ",1)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1}),e(t(i),null,{default:s(()=>[e(t(n),{title:"\u6D3B\u8DC3\u7528\u6237",size:"small",hoverable:""},{default:s(()=>[e(t(I),{options:_,size:40,max:50},{avatar:s(({option:{name:h,src:z}})=>[e(t(C),null,{trigger:s(()=>[e(t(B),{src:z},null,8,["src"])]),default:s(()=>[l(" "+F(h),1)]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1}),e(t(w),{cols:"4","y-gap":"10","x-gap":"10"},{default:s(()=>[e(t(i),{span:"1"},{default:s(()=>[e(t(n),{size:"small"},{default:s(()=>[e(M)]),_:1})]),_:1}),e(t(i),{span:"3"},{default:s(()=>[e(t(n),{size:"small"},{default:s(()=>[e($)]),_:1})]),_:1})]),_:1}),e(t(w),{cols:"2","y-gap":"10","x-gap":"10"},{default:s(()=>[e(t(i),{span:"2"},{default:s(()=>[e(t(n),{size:"small"},{default:s(()=>[e(P)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};var ot=D(qe,[["__scopeId","data-v-3a456d8f"]]);export{ot as default};
