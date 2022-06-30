import{H as g}from"./HbAdminPageLayout.61e67735.js";import d from"./cropper.demo.3bcad2bd.js";import p from"./watermark.demo.f355e502.js";import{H as l,j as h,f,v as b,k as t,i as e,l as a,a1 as _,m as N,n as j,z as n,aZ as i,aY as r,p as s,a2 as k,h as y,x}from"./vendor.e1dacb25.js";import{x as v}from"./xml.9e2794d0.js";import"./index.fcc672dc.js";import"./HbAdminDemoCard.0a54c8a5.js";import"./index.0d9478da.js";import"./CloudUploadOutline.d609e3c1.js";const H=y("h2",null,"\u56FE\u7247\u5DE5\u5382",-1),w=x(" \u56FE\u7247\u5DE5\u5382\u662F\u4E00\u4E2A\u7C7B\u5E93\uFF0C\u53EF\u4EE5\u4E0A\u4F20\u6216\u8005\u4F20\u5165\u4E00\u4E2A\u56FE\u7247\u5730\u5740\u8FDB\u884C\u5BF9\u56FE\u7247\u7684\u4E00\u4E9B\u4E8C\u6B21\u52A0\u5DE5\u5904\u7406\u3002\u4F8B\u5982\uFF1A\u6DFB\u52A0\u56FE\u7247\u6C34\u5370\u3001\u56FE\u7247\u88C1\u526A\u3001\u8C03\u6574\u56FE\u7247\u5C3A\u5BF8\u3001\u8BBE\u7F6E\u56FE\u7247\u8D28\u91CF\u7B49\u3002 "),J={setup(C){l.registerLanguage("javascript",h),l.registerLanguage("xml",v);const u=`1.\u9996\u5148\u5F15\u5165 
import { watermark } from '@/utils/imageFactory' 
2.\u7136\u540E\u8C03\u7528 
/**
 * \u56FE\u7247\u6DFB\u52A0\u6C34\u5370
 *  callback  //\u56DE\u8C03\u65B9\u6CD5\uFF0C\u8FD4\u56DEbase64\u7684\u56FE\u7247\u3010{success: true, data: "base64\u6570\u636E"}\u3011
 *  image: Image()  //\u5E95\u56FE\u5BF9\u8C61
 *  sign: Image()  //\u6C34\u5370\u5BF9\u8C61
 *  left: Number  //\u6C34\u5370\u5DE6\u4FA7\u4F4D\u7F6E
 *  top: Number  //\u6C34\u5370\u9876\u90E8\u4F4D\u7F6E
 *  imageWidth: Number  //\u5E95\u56FE\u5BBD\u5EA6
 *  imageHeight: Number  //\u5E95\u56FE\u9AD8\u5EA6
 *  signWidth: Number  //\u6C34\u5370\u5BBD\u5EA6
 *  signHeight: Number  //\u6C34\u5370\u9AD8\u5EA6
 * */
watermark(callback, image, sign, left, top, imageWidth, imageHeight, signWidth, signHeight)`,m=`1.\u9996\u5148\u5F15\u5165 
import { cropper } from '@/utils/imageFactory' 
2.\u7136\u540E\u8C03\u7528 
/**
 * \u56FE\u7247\u88C1\u526A
 * callback  //\u56DE\u8C03\u65B9\u6CD5\uFF0C\u8FD4\u56DEbase64\u7684\u56FE\u7247
 * image: Image()  //\u5E95\u56FE\u5BF9\u8C61
 * left: Number  //\u88C1\u526A\u5DE6\u4FA7\u8DDD\u79BB
 * right: Number  //\u88C1\u526A\u53F3\u4FA7\u8DDD\u79BB
 * top: Number  //\u88C1\u526A\u9876\u90E8\u8DDD\u79BB
 * bottom: Number  //\u88C1\u526A\u5E95\u90E8\u8DDD\u79BB
 * width: Number  //\u5E95\u56FE\u5BBD\u5EA6
 * height: Number  //\u5E95\u56FE\u9AD8\u5EA6
 * */
cropper(callback, image, left, right, top, bottom, width, height)`,o=`1.\u9996\u5148\u5F15\u5165 
import { resize } from '@/utils/imageFactory' 
2.\u7136\u540E\u8C03\u7528 
/**
 * \u8C03\u6574\u56FE\u7247\u5C3A\u5BF8
 * callback  //\u56DE\u8C03\u65B9\u6CD5\uFF0C\u8FD4\u56DEbase64\u7684\u56FE\u7247
 * image: Image()  //\u5E95\u56FE\u5BF9\u8C61
 * width: Number  //\u8C03\u6574\u7684\u5BBD\u5EA6
 * height: Number  //\u8C03\u6574\u7684\u9AD8\u5EA6
 * */
resize(callback, image, width, height)`,c=`1.\u9996\u5148\u5F15\u5165 
import { quality } from '@/utils/imageFactory' 
2.\u7136\u540E\u8C03\u7528 
/**
 * \u8C03\u6574\u56FE\u7247\u8D28\u91CF
 * callback  //\u56DE\u8C03\u65B9\u6CD5\uFF0C\u8FD4\u56DEbase64\u7684\u56FE\u7247
 * image: Image()  //\u5E95\u56FE\u5BF9\u8C61
 * quality: Number  //\u56FE\u7247\u8D28\u91CF 0 - 1
 * */
quality(callback, image, quality)`;return(I,L)=>(f(),b(g,null,{default:t(()=>[e(a(k),{style:{padding:"20px"}},{default:t(()=>[e(a(_),null,{default:t(()=>[e(a(N),{vertical:""},{default:t(()=>[H,e(a(j),{type:"info"},{default:t(()=>[w]),_:1}),e(a(n),null,{default:t(()=>[e(a(i),null,{default:t(()=>[e(a(r),{title:"\u6C34\u5370\u6DFB\u52A0"},{default:t(()=>[e(a(s),{code:u,language:"javascript",hljs:a(l)},null,8,["hljs"])]),_:1})]),_:1})]),_:1}),e(a(n),null,{default:t(()=>[e(a(i),null,{default:t(()=>[e(a(r),{title:"\u56FE\u7247\u88C1\u526A"},{default:t(()=>[e(a(s),{code:m,language:"javascript",hljs:a(l)},null,8,["hljs"])]),_:1})]),_:1})]),_:1}),e(a(n),null,{default:t(()=>[e(a(i),null,{default:t(()=>[e(a(r),{title:"\u8C03\u6574\u56FE\u7247\u5C3A\u5BF8"},{default:t(()=>[e(a(s),{code:o,language:"javascript",hljs:a(l)},null,8,["hljs"])]),_:1})]),_:1})]),_:1}),e(a(n),null,{default:t(()=>[e(a(i),null,{default:t(()=>[e(a(r),{title:"\u8C03\u6574\u56FE\u7247\u8D28\u91CF"},{default:t(()=>[e(a(s),{code:c,language:"javascript",hljs:a(l)},null,8,["hljs"])]),_:1})]),_:1})]),_:1}),e(d),e(p)]),_:1})]),_:1})]),_:1})]),_:1}))}};export{J as default};
