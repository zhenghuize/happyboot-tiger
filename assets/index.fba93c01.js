import{H as B}from"./HbAdminPageLayout.84c3df19.js";import{h as C}from"./index.da1caa80.js";import{k as c,ag as O,o as F,c as A,w as l,a,u as e,aI as L,M as k,y as s,v as f,aL as M,F as z,O as D,P as o,x as g,t as j,Q as H,R as W,S as h,T as G,U as b,V as _,W as Q,X,Y,Z,q as E,_ as S,B as J,z as p,A as m,n as K,C as n,at as $,I as N}from"./vendor.5b890536.js";import{A as ee,T as ae,R as le,S as ue}from"./TrashSharp.b573e700.js";import{C as te}from"./CubeOutline.8b94bf7c.js";import"./plugin-vue_export-helper.21dcd24c.js";const re=n("\u4FEE\u6539\u83DC\u5355\u8BF7\u5148\u4ECE\u5DE6\u4FA7\u83DC\u5355\u6811\u4E2D\u9009\u62E9\u4E00\u4E2A\u8282\u70B9"),ne=n(" \u65B0\u589E "),oe=n(" \u5220\u9664 "),ie=n(" \u5237\u65B0\u6570\u636E "),de=n(" \u67E5\u8BE2 "),se=n("\u91CD\u7F6E"),pe=n(" Option 1 "),me=n(" Option 2 "),ve=n(" Option 3 "),fe=n(" Radio 1 "),Ve=n(" Radio 2 "),ce=n(" Radio 3 "),ge=n(" Radio 1 "),he=n(" Radio 2 "),be=n(" Radio 3 "),Re={setup(_e){const R=C.getMenuTree();function U(i){return i?()=>N("i",{class:i}):()=>N(m,null,{default:()=>N(te)})}function q(i){function t(u){const x=[];for(let d=0;d<u.length;d++){if(u[d].hide)continue;const y={name:u[d].name,menuId:u[d].menuId,icon:U(u[d].icon),original:$(u[d])};u[d].children.length>0&&(y.children=t(u[d].children)),x.push(y)}return x}return t(i)}function w(i){return i.option.icon()}const V=c(""),P=O(()=>q(R.value)),I=c(null),r=c({inputValue:null,textareaValue:null,selectValue:null,multipleSelectValue:null,datetimeValue:null,nestedValue:{path1:null,path2:null},switchValue:!1,checkboxGroupValue:null,radioGroupValue:null,radioButtonGroupValue:null,inputNumberValue:null,timePickerValue:null,sliderValue:0,transferValue:null}),v=["groode","veli good","emazing","lidiculous"].map(i=>({label:i,value:i})),T={inputValue:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165 inputValue"},textareaValue:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165 textareaValue"},selectValue:{required:!0,trigger:["blur","change"],message:"\u8BF7\u9009\u62E9 selectValue"},multipleSelectValue:{type:"array",required:!0,trigger:["blur","change"],message:"\u8BF7\u9009\u62E9 multipleSelectValue"},datetimeValue:{type:"number",required:!0,trigger:["blur","change"],message:"\u8BF7\u8F93\u5165 datetimeValue"},nestedValue:{path1:{required:!0,trigger:["blur","input"],message:"\u8BF7\u8F93\u5165 nestedValue.path1"},path2:{required:!0,trigger:["blur","change"],message:"\u8BF7\u8F93\u5165 nestedValue.path2"}},checkboxGroupValue:{type:"array",required:!0,trigger:"change",message:"\u8BF7\u9009\u62E9 checkboxGroupValue"},radioGroupValue:{required:!0,trigger:"change",message:"\u8BF7\u9009\u62E9 radioGroupValue"},radioButtonGroupValue:{required:!0,trigger:"change",message:"\u8BF7\u9009\u62E9 radioButtonGroupValue"},inputNumberValue:{type:"number",required:!0,trigger:["blur","change"],message:"\u8BF7\u8F93\u5165 inputNumberValue"},timePickerValue:{type:"number",required:!0,trigger:["blur","change"],message:"\u8BF7\u8F93\u5165 timePickerValue"},sliderValue:{validator(i,t){return t>50},trigger:["blur","change"],message:"sliderValue \u9700\u8981\u5927\u4E8E 50"},transferValue:{type:"array",required:!0,trigger:"change",message:"\u8BF7\u8F93\u5165 transferValue"}};return(i,t)=>(F(),A(B,null,{default:l(()=>[a(e(K),{"has-sider":"",embedded:"",style:{height:"100%","z-index":"0"}},{default:l(()=>[a(e(L),{style:{background:"transparent"}},{default:l(()=>[a(e(k),{title:"\u83DC\u5355\u6811"},{default:l(()=>[a(e(s),{vertical:""},{default:l(()=>[a(e(f),{value:V.value,"onUpdate:value":t[0]||(t[0]=u=>V.value=u),placeholder:"\u641C\u7D22"},null,8,["value"]),a(e(M),{pattern:V.value,data:e(P),"render-prefix":w,"key-field":"menuId","label-field":"name","block-line":""},null,8,["pattern","data"])]),_:1})]),_:1})]),_:1}),a(e(z),{embedded:"",style:{"padding-left":"5px"}},{default:l(()=>[a(e(k),{segmented:{content:!0,footer:"soft"}},{footer:l(()=>[a(e(D),{ref_key:"refForm",ref:I,model:r.value,rules:T,"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",style:{maxWidth:"640px"}},{default:l(()=>[a(e(o),{label:"Input",path:"inputValue"},{default:l(()=>[a(e(f),{value:r.value.inputValue,"onUpdate:value":t[1]||(t[1]=u=>r.value.inputValue=u),placeholder:"Input"},null,8,["value"])]),_:1}),a(e(o),{label:"Textarea",path:"textareaValue"},{default:l(()=>[a(e(f),{value:r.value.textareaValue,"onUpdate:value":t[2]||(t[2]=u=>r.value.textareaValue=u),placeholder:"Textarea",type:"textarea",autosize:{minRows:3,maxRows:5}},null,8,["value"])]),_:1}),a(e(o),{label:"Select",path:"selectValue"},{default:l(()=>[a(e(g),{value:r.value.selectValue,"onUpdate:value":t[3]||(t[3]=u=>r.value.selectValue=u),placeholder:"Select",options:e(v)},null,8,["value","options"])]),_:1}),a(e(o),{label:"Multiple Select",path:"multipleSelectValue"},{default:l(()=>[a(e(g),{value:r.value.multipleSelectValue,"onUpdate:value":t[4]||(t[4]=u=>r.value.multipleSelectValue=u),placeholder:"Select",options:e(v),multiple:""},null,8,["value","options"])]),_:1}),a(e(o),{label:"Datetime",path:"datetimeValue"},{default:l(()=>[a(e(j),{value:r.value.datetimeValue,"onUpdate:value":t[5]||(t[5]=u=>r.value.datetimeValue=u),type:"datetime"},null,8,["value"])]),_:1}),a(e(o),{label:"Switch",path:"switchValue"},{default:l(()=>[a(e(H),{value:r.value.switchValue,"onUpdate:value":t[6]||(t[6]=u=>r.value.switchValue=u)},null,8,["value"])]),_:1}),a(e(o),{label:"Checkbox Group",path:"checkboxGroupValue"},{default:l(()=>[a(e(W),{value:r.value.checkboxGroupValue,"onUpdate:value":t[7]||(t[7]=u=>r.value.checkboxGroupValue=u)},{default:l(()=>[a(e(s),null,{default:l(()=>[a(e(h),{value:"Option 1"},{default:l(()=>[pe]),_:1}),a(e(h),{value:"Option 2"},{default:l(()=>[me]),_:1}),a(e(h),{value:"Option 3"},{default:l(()=>[ve]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),a(e(o),{label:"Radio Group",path:"radioGroupValue"},{default:l(()=>[a(e(G),{value:r.value.radioGroupValue,"onUpdate:value":t[8]||(t[8]=u=>r.value.radioGroupValue=u),name:"radiogroup1"},{default:l(()=>[a(e(s),null,{default:l(()=>[a(e(b),{value:"Radio 1"},{default:l(()=>[fe]),_:1}),a(e(b),{value:"Radio 2"},{default:l(()=>[Ve]),_:1}),a(e(b),{value:"Radio 3"},{default:l(()=>[ce]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),a(e(o),{label:"Radio Button Group",path:"radioGroupValue"},{default:l(()=>[a(e(G),{value:r.value.radioGroupValue,"onUpdate:value":t[9]||(t[9]=u=>r.value.radioGroupValue=u),name:"radiogroup2"},{default:l(()=>[a(e(_),{value:"Radio 1"},{default:l(()=>[ge]),_:1}),a(e(_),{value:"Radio 2"},{default:l(()=>[he]),_:1}),a(e(_),{value:"Radio 3"},{default:l(()=>[be]),_:1})]),_:1},8,["value"])]),_:1}),a(e(o),{label:"Input Number",path:"inputNumberValue"},{default:l(()=>[a(e(Q),{value:r.value.inputNumberValue,"onUpdate:value":t[10]||(t[10]=u=>r.value.inputNumberValue=u)},null,8,["value"])]),_:1}),a(e(o),{label:"Time Picker",path:"timePickerValue"},{default:l(()=>[a(e(X),{value:r.value.timePickerValue,"onUpdate:value":t[11]||(t[11]=u=>r.value.timePickerValue=u)},null,8,["value"])]),_:1}),a(e(o),{label:"Slider",path:"sliderValue"},{default:l(()=>[a(e(Y),{value:r.value.sliderValue,"onUpdate:value":t[12]||(t[12]=u=>r.value.sliderValue=u),step:5},null,8,["value"])]),_:1}),a(e(o),{label:"Transfer",path:"transferValue"},{default:l(()=>[a(e(Z),{value:r.value.transferValue,"onUpdate:value":t[13]||(t[13]=u=>r.value.transferValue=u),options:e(v)},null,8,["value","options"])]),_:1}),a(e(o),{label:"Nested Path","show-feedback":!1},{default:l(()=>[a(e(E),{cols:2,"x-gap":24},{default:l(()=>[a(e(S),{path:"nestedValue.path1"},{default:l(()=>[a(e(f),{value:r.value.nestedValue.path1,"onUpdate:value":t[14]||(t[14]=u=>r.value.nestedValue.path1=u),placeholder:"Nested Path 1"},null,8,["value"])]),_:1}),a(e(S),{path:"nestedValue.path2"},{default:l(()=>[a(e(g),{value:r.value.nestedValue.path2,"onUpdate:value":t[15]||(t[15]=u=>r.value.nestedValue.path2=u),placeholder:"Nested Path 2",options:e(v)},null,8,["value","options"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),default:l(()=>[a(e(s),{vertical:""},{default:l(()=>[a(e(J),{type:"info"},{default:l(()=>[re]),_:1}),a(e(s),{justify:"space-between"},{default:l(()=>[a(e(s),null,{default:l(()=>[a(e(p),{type:"info"},{icon:l(()=>[a(e(m),{component:e(ee)},null,8,["component"])]),default:l(()=>[ne]),_:1}),a(e(p),{type:"error"},{icon:l(()=>[a(e(m),{component:e(ae)},null,8,["component"])]),default:l(()=>[oe]),_:1})]),_:1}),a(e(s),{justify:"end"},{default:l(()=>[a(e(p),{type:"info"},{icon:l(()=>[a(e(m),{component:e(le)},null,8,["component"])]),default:l(()=>[ie]),_:1}),a(e(p),{type:"info"},{icon:l(()=>[a(e(m),{component:e(ue)},null,8,["component"])]),default:l(()=>[de]),_:1}),a(e(p),null,{default:l(()=>[se]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Re as default};
