import{_ as R}from"./HbAdminDemoCard.fa92e6e1.js";import{b as Q}from"./browser.c0d87af6.js";import{_ as j}from"./index.49999355.js";import{r as S,w as M,o as P,f as H,g as G,h as E,a4 as O,v as $,k as a,i as o,l as e,a_ as V,aZ as y,af as h,ag as u,a9 as T,ak as k,m as I,al as D,b5 as B,ap as d,b1 as J,N as X,z as L,x as C}from"./vendor.e99578e4.js";import"./xml.9e2794d0.js";const Y={class:"hb-admin-qrcode-com"},W=["src"],Z={props:{text:{required:!0,type:String,default:()=>""},options:{required:!1,type:Object,default:()=>({errorCorrectionLevel:"M",margin:1,quality:1,width:360,color:{dark:"#8DD268FF",light:"#FFFFFFFF"},type:"image/png",logoSize:80,logoBorderSize:2,logoUrl:"/src/assets/logo.png",logoBgColor:"#FFFFFFFF",bottomText:"HappyBoot Tiger",bottomFontSize:30,bottomTextColor:"#8DD268FF",bottomTextTopMargin:10,bottomTextBottomMargin:10})}},setup(w){const t=w,m=S("");async function p(A,F,N){const i=JSON.parse(JSON.stringify(F));i.width=i.width*window.devicePixelRatio;const c=await Q.toDataURL(A,i),l=new Image;l.onload=n,l.src=c;function n(){const s=i.width,b=s+i.bottomFontSize+i.bottomTextTopMargin,f=i.margin,v=document.createElement("canvas");if(!v.getContext)return;v.width=s,v.height=b;const r=v.getContext("2d");r.fillStyle=i.color.light,r.fillRect(0,0,s,b);const g=s-f*2;r.drawImage(l,f,f,g,g),r.fillStyle=i.bottomTextColor,r.font=i.bottomFontSize+"px Arial",r.textAlign="center",r.fillText(i.bottomText,s/2,g+i.bottomFontSize+i.bottomTextTopMargin-i.bottomTextBottomMargin,g);const _=f+g/2,z=_;r.arc(_,z,i.logoSize/2+i.logoBorderSize,0,Math.PI*2,!1),r.fillStyle=i.logoBgColor,r.fill();const U=(g-i.logoSize)/2+f,q=U,x=new Image;x.setAttribute("crossOrigin","anonymous"),x.onload=()=>{r.beginPath(),r.arc(_,z,i.logoSize/2,0,Math.PI*2,!1),r.fill(),r.clip(),r.drawImage(x,U,q,i.logoSize,i.logoSize),N(v.toDataURL(i.type))},x.src=i.logoUrl}}return M(t.options,()=>{p(t.text,t.options,A=>{m.value=A})}),M(()=>t.text,()=>{p(t.text,t.options,A=>{m.value=A})}),P(()=>{p(t.text,t.options,A=>{m.value=A})}),(A,F)=>(H(),G("div",Y,[E("img",{style:{zoom:"0.5"},src:m.value},null,8,W)]))}};var K=j(Z,[["__scopeId","data-v-6389e683"]]);const e2={style:{display:"flex",overflow:"auto"}},o2={style:{"margin-bottom":"10px","margin-right":"10px",width:"400px",height:"600px",overflow:"auto"}},t2=C(" image/jpeg "),l2=C(" image/png "),a2=C(" L "),n2=C(" M "),i2=C(" Q "),u2=C(" H "),r2=C(" \u4E0A\u4F20 "),A2={style:{flex:"1",height:"600px"}},m2={style:{display:"flex","justify-content":"center","align-items":"center",height:"100%"}},D2={setup(w){const t=O({errorCorrectionLevel:"M",margin:1,quality:1,width:360,color:{dark:"#8DD268FF",light:"#FFFFFFFF"},type:"image/png",logoSize:80,logoBorderSize:2,logoUrl:"https://happykit.org/h_logo.png",logoBgColor:"#FFFFFFFF",bottomText:"HappyBoot Tiger",bottomFontSize:30,bottomTextColor:"#8DD268FF",bottomTextTopMargin:10,bottomTextBottomMargin:10}),m=S("HappyBoot Tiger"),p=S(null);function A(){setTimeout(()=>{p.value.click()},400)}function F(c){const l=c.target.files[0],n=new FileReader;n.onload=s=>{const b=s.target.result;t.logoUrl=b},n.readAsDataURL(l)}const i=unescape("%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20NInput%2C%20NInputGroup%2C%0A%20%20NRadioGroup%2C%20NRadio%2C%20NSlider%2C%20NButton%2C%0A%20%20NColorPicker%2C%20NForm%2C%20NFormItem%2C%20NSpace%2C%20NCard%2C%20NCollapse%2C%0A%20%20NCollapseItem%0A%7D%20from%20%27naive-ui%27%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20%27vue%27%0Aimport%20HbAdminQrCode%20from%20%27@/components/HbAdminQrCode%27%0A%0A//%20%u4E8C%u7EF4%u7801%u914D%u7F6E%u53C2%u6570%0Aconst%20model%20%3D%20reactive%28%7B%0A%20%20errorCorrectionLevel%3A%20%27M%27%2C%0A%20%20margin%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%201%2C%0A%20%20quality%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%201%2C%0A%20%20width%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20360%2C%0A%20%20color%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%7B%0A%20%20%20%20dark%20%3A%20%27%238DD268FF%27%2C%0A%20%20%20%20light%3A%20%27%23FFFFFFFF%27%0A%20%20%7D%2C%0A%20%20type%3A%20%27image/png%27%2C%0A%0A%20%20//%20%u81EA%u5B9A%u4E49%u53C2%u6570%0A%20%20logoSize%20%20%20%20%20%20%3A%2080%2C%0A%20%20logoBorderSize%3A%202%2C%0A%20%20logoUrl%20%20%20%20%20%20%20%3A%20%27https%3A//happykit.org/h_logo.png%27%2C%0A%20%20logoBgColor%20%20%20%3A%20%27%23FFFFFFFF%27%2C%0A%0A%20%20bottomText%20%20%20%20%20%20%20%20%20%20%20%20%3A%20%27HappyBoot%20Tiger%27%2C%0A%20%20bottomFontSize%20%20%20%20%20%20%20%20%3A%2030%2C%0A%20%20bottomTextColor%20%20%20%20%20%20%20%3A%20%27%238DD268FF%27%2C%0A%20%20bottomTextTopMargin%20%20%20%3A%2010%2C%0A%20%20bottomTextBottomMargin%3A%2010%0A%7D%29%0A%0Aconst%20text%20%3D%20ref%28%27HappyBoot%20Tiger%27%29%0Aconst%20fileInput%20%3D%20ref%28null%29%0A%0Afunction%20chooseFile%20%28%29%20%7B%0A%20%20setTimeout%28%28%29%20%3D%3E%20%7B%0A%20%20%20%20fileInput.value.click%28%29%0A%20%20%7D%2C%20400%29%0A%7D%0A%0Afunction%20handleChange%20%28e%29%20%7B%0A%20%20const%20img%20%3D%20e.target.files%5B0%5D%0A%20%20const%20reader%20%3D%20new%20FileReader%28%29%0A%20%20reader.onload%20%3D%20evt%20%3D%3E%20%7B%0A%20%20%20%20const%20base64%20%3D%20evt.target.result%0A%20%20%20%20model.logoUrl%20%3D%20base64%0A%20%20%7D%0A%20%20reader.readAsDataURL%28img%29%0A%7D%0A%3C/script%3E%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22display%3A%20flex%3Boverflow%3A%20auto%22%3E%0A%20%20%20%20%3Cdiv%20style%3D%22margin-bottom%3A%2010px%3Bmargin-right%3A%2010px%3Bwidth%3A%20400px%3Bheight%3A%20600px%3Boverflow%3A%20auto%22%3E%0A%20%20%20%20%20%20%3Cn-card%20title%3D%22%u4E8C%u7EF4%u7801%u914D%u7F6E%22%3E%0A%20%20%20%20%20%20%20%20%3Cn-collapse%20%3Adefault-expanded-names%3D%22%5B%271%27%2C%272%27%2C%273%27%5D%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-collapse-item%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22%u57FA%u672C%u8BBE%u7F6E%22%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u6587%u672C%u5185%u5BB9%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-input%20v-model%3Avalue%3D%22text%22%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u56FE%u50CF%u7C7B%u578B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-radio-group%20v-model%3Avalue%3D%22model.type%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-space%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-radio%20value%3D%22image/jpeg%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20image/jpeg%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-radio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-radio%20value%3D%22image/png%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20image/png%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-radio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-space%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-radio-group%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u524D%u666F%u8272%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-color-picker%20v-model%3Avalue%3D%22model.color.dark%22%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u80CC%u666F%u8272%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-color-picker%20v-model%3Avalue%3D%22model.color.light%22%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u5BB9%u9519%u7B49%u7EA7%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-radio-group%20v-model%3Avalue%3D%22model.errorCorrectionLevel%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-space%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-radio%20value%3D%22L%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20L%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-radio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-radio%20value%3D%22M%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20M%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-radio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-radio%20value%3D%22Q%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Q%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-radio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-radio%20value%3D%22H%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20H%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-radio%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-space%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-radio-group%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u5BBD%u5EA6%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-slider%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3Avalue%3D%22model.width%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amin%3D%220%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amax%3D%22500%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Astep%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u8D28%u91CF%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-slider%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3Avalue%3D%22model.quality%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amin%3D%220.1%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amax%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Astep%3D%220.01%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u8FB9%u8DDD%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-slider%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3Avalue%3D%22model.margin%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amin%3D%220%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amax%3D%22100%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Astep%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/n-collapse-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-collapse-item%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Logo%u8BBE%u7F6E%22%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%222%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22logo%uFF08%u8BF7%u9009%u62E9%u5C3A%u5BF8%u5C0F%u4E00%u4E9B%u7684%u56FE%u7247%uFF09%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-input-group%20style%3D%22width%3A%20100%25%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-input%20v-model%3Avalue%3D%22model.logoUrl%22%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cinput%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ref%3D%22fileInput%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22file%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%22display%3A%20none%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20@change%3D%22handleChange%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-button%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22primary%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20ghost%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20@click%3D%22chooseFile%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%u4E0A%u4F20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-button%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-input-group%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22logo%u8FB9%u8DDD%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-slider%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3Avalue%3D%22model.logoBorderSize%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amin%3D%220%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amax%3D%22100%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Astep%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22logo%u80CC%u666F%u8272%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-color-picker%20v-model%3Avalue%3D%22model.logoBgColor%22%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22logo%u5BBD%u5EA6%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-slider%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3Avalue%3D%22model.logoSize%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amin%3D%220%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amax%3D%22200%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Astep%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/n-collapse-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cn-collapse-item%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22%u5E95%u90E8%u6587%u6848%u8BBE%u7F6E%22%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%223%22%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u5E95%u90E8%u6587%u6848%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-input%20v-model%3Avalue%3D%22model.bottomText%22%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u5E95%u90E8%u6587%u6848%u5B57%u4F53%u5927%u5C0F%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-slider%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3Avalue%3D%22model.bottomFontSize%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amin%3D%220%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amax%3D%2250%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Astep%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u5E95%u90E8%u6587%u6848%u5B57%u4F53%u989C%u8272%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-color-picker%20v-model%3Avalue%3D%22model.bottomTextColor%22%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u5E95%u90E8%u6587%u6848%u8DDD%u79BB%u4E8C%u7EF4%u7801%u8DDD%u79BB%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-slider%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3Avalue%3D%22model.bottomTextTopMargin%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amin%3D%220%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amax%3D%22100%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Astep%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-form-item%20label%3D%22%u5E95%u90E8%u6587%u6848%u8DDD%u79BB%u4E8C%u7EF4%u7801%u8DDD%u79BB%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-slider%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20v-model%3Avalue%3D%22model.bottomTextBottomMargin%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amin%3D%220%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Amax%3D%22100%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Astep%3D%221%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form-item%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/n-form%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/n-collapse-item%3E%0A%20%20%20%20%20%20%20%20%3C/n-collapse%3E%0A%20%20%20%20%20%20%3C/n-card%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20style%3D%22flex%3A%201%3Bheight%3A%20600px%22%3E%0A%20%20%20%20%20%20%3Cn-card%0A%20%20%20%20%20%20%20%20title%3D%22%u751F%u6210%u7ED3%u679C%22%0A%20%20%20%20%20%20%20%20style%3D%22height%3A%20100%25%22%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22display%3A%20flex%3Bjustify-content%3A%20center%3Balign-items%3Acenter%3Bheight%3A%20100%25%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Chb-admin-qr-code%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Atext%3D%22text%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Aoptions%3D%22model%22%0A%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%3C/n-card%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A");return(c,l)=>(H(),$(e(R),{title:"\u57FA\u672C\u7528\u6CD5",code:e(i)},{default:a(()=>[E("div",e2,[E("div",o2,[o(e(L),{title:"\u4E8C\u7EF4\u7801\u914D\u7F6E"},{default:a(()=>[o(e(V),{"default-expanded-names":["1","2","3"]},{default:a(()=>[o(e(y),{title:"\u57FA\u672C\u8BBE\u7F6E",name:"1"},{default:a(()=>[o(e(h),null,{default:a(()=>[o(e(u),{label:"\u6587\u672C\u5185\u5BB9"},{default:a(()=>[o(e(T),{value:m.value,"onUpdate:value":l[0]||(l[0]=n=>m.value=n)},null,8,["value"])]),_:1}),o(e(u),{label:"\u56FE\u50CF\u7C7B\u578B"},{default:a(()=>[o(e(k),{value:e(t).type,"onUpdate:value":l[1]||(l[1]=n=>e(t).type=n)},{default:a(()=>[o(e(I),null,{default:a(()=>[o(e(D),{value:"image/jpeg"},{default:a(()=>[t2]),_:1}),o(e(D),{value:"image/png"},{default:a(()=>[l2]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),o(e(u),{label:"\u524D\u666F\u8272"},{default:a(()=>[o(e(B),{value:e(t).color.dark,"onUpdate:value":l[2]||(l[2]=n=>e(t).color.dark=n)},null,8,["value"])]),_:1}),o(e(u),{label:"\u80CC\u666F\u8272"},{default:a(()=>[o(e(B),{value:e(t).color.light,"onUpdate:value":l[3]||(l[3]=n=>e(t).color.light=n)},null,8,["value"])]),_:1}),o(e(u),{label:"\u5BB9\u9519\u7B49\u7EA7"},{default:a(()=>[o(e(k),{value:e(t).errorCorrectionLevel,"onUpdate:value":l[4]||(l[4]=n=>e(t).errorCorrectionLevel=n)},{default:a(()=>[o(e(I),null,{default:a(()=>[o(e(D),{value:"L"},{default:a(()=>[a2]),_:1}),o(e(D),{value:"M"},{default:a(()=>[n2]),_:1}),o(e(D),{value:"Q"},{default:a(()=>[i2]),_:1}),o(e(D),{value:"H"},{default:a(()=>[u2]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),o(e(u),{label:"\u5BBD\u5EA6"},{default:a(()=>[o(e(d),{value:e(t).width,"onUpdate:value":l[5]||(l[5]=n=>e(t).width=n),min:0,max:500,step:1},null,8,["value"])]),_:1}),o(e(u),{label:"\u8D28\u91CF"},{default:a(()=>[o(e(d),{value:e(t).quality,"onUpdate:value":l[6]||(l[6]=n=>e(t).quality=n),min:.1,max:1,step:.01},null,8,["value","min","step"])]),_:1}),o(e(u),{label:"\u8FB9\u8DDD"},{default:a(()=>[o(e(d),{value:e(t).margin,"onUpdate:value":l[7]||(l[7]=n=>e(t).margin=n),min:0,max:100,step:1},null,8,["value"])]),_:1})]),_:1})]),_:1}),o(e(y),{title:"Logo\u8BBE\u7F6E",name:"2"},{default:a(()=>[o(e(h),null,{default:a(()=>[o(e(u),{label:"logo\uFF08\u8BF7\u9009\u62E9\u5C3A\u5BF8\u5C0F\u4E00\u4E9B\u7684\u56FE\u7247\uFF09"},{default:a(()=>[o(e(J),{style:{width:"100%"}},{default:a(()=>[o(e(T),{value:e(t).logoUrl,"onUpdate:value":l[8]||(l[8]=n=>e(t).logoUrl=n)},null,8,["value"]),E("input",{ref_key:"fileInput",ref:p,type:"file",style:{display:"none"},onChange:F},null,544),o(e(X),{type:"primary",ghost:"",onClick:A},{default:a(()=>[r2]),_:1})]),_:1})]),_:1}),o(e(u),{label:"logo\u8FB9\u8DDD"},{default:a(()=>[o(e(d),{value:e(t).logoBorderSize,"onUpdate:value":l[9]||(l[9]=n=>e(t).logoBorderSize=n),min:0,max:100,step:1},null,8,["value"])]),_:1}),o(e(u),{label:"logo\u80CC\u666F\u8272"},{default:a(()=>[o(e(B),{value:e(t).logoBgColor,"onUpdate:value":l[10]||(l[10]=n=>e(t).logoBgColor=n)},null,8,["value"])]),_:1}),o(e(u),{label:"logo\u5BBD\u5EA6"},{default:a(()=>[o(e(d),{value:e(t).logoSize,"onUpdate:value":l[11]||(l[11]=n=>e(t).logoSize=n),min:0,max:200,step:1},null,8,["value"])]),_:1})]),_:1})]),_:1}),o(e(y),{title:"\u5E95\u90E8\u6587\u6848\u8BBE\u7F6E",name:"3"},{default:a(()=>[o(e(h),null,{default:a(()=>[o(e(u),{label:"\u5E95\u90E8\u6587\u6848"},{default:a(()=>[o(e(T),{value:e(t).bottomText,"onUpdate:value":l[12]||(l[12]=n=>e(t).bottomText=n)},null,8,["value"])]),_:1}),o(e(u),{label:"\u5E95\u90E8\u6587\u6848\u5B57\u4F53\u5927\u5C0F"},{default:a(()=>[o(e(d),{value:e(t).bottomFontSize,"onUpdate:value":l[13]||(l[13]=n=>e(t).bottomFontSize=n),min:0,max:50,step:1},null,8,["value"])]),_:1}),o(e(u),{label:"\u5E95\u90E8\u6587\u6848\u5B57\u4F53\u989C\u8272"},{default:a(()=>[o(e(B),{value:e(t).bottomTextColor,"onUpdate:value":l[14]||(l[14]=n=>e(t).bottomTextColor=n)},null,8,["value"])]),_:1}),o(e(u),{label:"\u5E95\u90E8\u6587\u6848\u8DDD\u79BB\u4E8C\u7EF4\u7801\u8DDD\u79BB"},{default:a(()=>[o(e(d),{value:e(t).bottomTextTopMargin,"onUpdate:value":l[15]||(l[15]=n=>e(t).bottomTextTopMargin=n),min:0,max:100,step:1},null,8,["value"])]),_:1}),o(e(u),{label:"\u5E95\u90E8\u6587\u6848\u8DDD\u79BB\u4E8C\u7EF4\u7801\u8DDD\u79BB"},{default:a(()=>[o(e(d),{value:e(t).bottomTextBottomMargin,"onUpdate:value":l[16]||(l[16]=n=>e(t).bottomTextBottomMargin=n),min:0,max:100,step:1},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),E("div",A2,[o(e(L),{title:"\u751F\u6210\u7ED3\u679C",style:{height:"100%"}},{default:a(()=>[E("div",m2,[o(e(K),{text:m.value,options:e(t)},null,8,["text","options"])])]),_:1})])])]),_:1},8,["code"]))}};export{D2 as default};
