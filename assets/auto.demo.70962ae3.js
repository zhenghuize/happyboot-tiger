import{_ as n}from"./HbAdminDemoCard.d2318ff1.js";import{H as m}from"./HbAdminVirtualList.dd31817b.js";import{_ as r}from"./index.18a81aa8.js";import{r as b,o as u,f as g,v as C,k as A,h as e,i as s,l as t,N as h,t as o,a2 as v,b7 as i,x as _}from"./vendor.f2dad3e6.js";import"./xml.9e2794d0.js";import"./index.390bc4bc.js";const D={style:{"margin-bottom":"10px"}},j=_(" \u6DFB\u52A0\u6570\u636E "),E={style:{"margin-bottom":"10px"}},B={class:"list-demo"},x={class:"user-card"},y={class:"avatar"},k={class:"text"},N={class:"user-card"},F={class:"avatar"},M={class:"text"},w={setup(V){const p=["https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg","https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg","https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg","https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg","https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg","https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg","https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"],c=b([]);function f(){for(let a=0;a<100;a++)c.value.push({avatar:p[a%p.length],name:"\u5F20\u4E09------"+a,age:(Math.random()*100+1).toFixed(0),score:(Math.random()*10+1).toFixed(2)})}u(f);const l=unescape("%3Cscript%20setup%3E%0Aimport%20%7B%20NSkeleton%2C%20NButton%2C%20NAvatar%20%7D%20from%20%27naive-ui%27%0Aimport%20%7B%20onMounted%2C%20ref%20%7D%20from%20%27vue%27%0Aimport%20HbAdminVirtualList%20from%20%27@/components/HbAdminVirtualList%27%0A%0Aconst%20pics%20%3D%20%5B%0A%20%20%27https%3A//fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg%27%2C%0A%20%20%27https%3A//fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg%27%0A%5D%0Aconst%20list%20%3D%20ref%28%5B%5D%29%0A%0Afunction%20addData%20%28%29%20%7B%0A%20%20for%20%28let%20i%20%3D%200%3B%20i%20%3C%20100%3B%20i++%29%20%7B%0A%20%20%20%20list.value.push%28%7B%0A%20%20%20%20%20%20avatar%3A%20pics%5Bi%20%25%20pics.length%5D%2C%0A%20%20%20%20%20%20name%20%20%3A%20%27%u5F20%u4E09------%27%20+%20i%2C%0A%20%20%20%20%20%20age%20%20%20%3A%20%28Math.random%28%29%20*%20100%20+%201%29.toFixed%280%29%2C%0A%20%20%20%20%20%20score%20%3A%20%28Math.random%28%29%20*%2010%20+%201%29.toFixed%282%29%0A%20%20%20%20%7D%29%0A%20%20%7D%0A%7D%0A%0AonMounted%28addData%29%0A%0A%3C/script%3E%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22margin-bottom%3A%2010px%22%3E%0A%20%20%20%20%3Cn-button%0A%20%20%20%20%20%20type%3D%22info%22%0A%20%20%20%20%20%20@click%3D%22addData%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%u6DFB%u52A0%u6570%u636E%0A%20%20%20%20%3C/n-button%3E%0A%20%20%3C/div%3E%0A%20%20%3Cdiv%20style%3D%22margin-bottom%3A%2010px%22%3E%0A%20%20%20%20%u5217%u8868%u957F%u5EA6%20%7B%7B%20list.length%20%7D%7D%0A%20%20%3C/div%3E%0A%20%20%3Cdiv%20class%3D%22list-demo%22%3E%0A%20%20%20%20%3Chb-admin-virtual-list%0A%20%20%20%20%20%20%3Adata%3D%22list%22%0A%20%20%20%20%20%20item-height-mode%3D%22auto%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7Bitem%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22user-card%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22avatar%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-avatar%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22large%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Asrc%3D%22item.avatar%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20round%0A%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22text%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%7B%7B%20item.name%20%7D%7D%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%7B%7B%20item.age%20%7D%7D%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%7B%7B%20item.score%20%7D%7D%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%3C/template%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23loading%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22user-card%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22avatar%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-skeleton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20circle%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3D%22large%22%0A%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22text%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-skeleton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Arepeat%3D%222%22%0A%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cn-skeleton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%22width%3A%2060%25%22%0A%20%20%20%20%20%20%20%20%20%20%20%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%3C/template%3E%0A%20%20%20%20%3C/hb-admin-virtual-list%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%3Cstyle%20scoped%3E%0A.list-demo%20%7B%0A%20%20height%3A%20500px%3B%0A%20%20width%3A%20300px%3B%0A%20%20border%3A%201px%20solid%20rgba%28128%2C%20128%2C%20128%2C%200.22%29%3B%0A%20%20border-radius%3A%203px%3B%0A%7D%0A%0A.avatar%20%7B%0A%20%20width%3A%2060px%3B%0A%20%20display%3A%20flex%3B%0A%20%20justify-content%3A%20center%3B%0A%20%20align-items%3A%20center%3B%0A%7D%0A%0A.text%20%7B%0A%20%20flex%3A%201%3B%0A%7D%0A%0A.user-card%20%7B%0A%20%20padding%3A%2010px%3B%0A%20%20box-sizing%3A%20border-box%3B%0A%20%20height%3A%2080px%3B%0A%20%20display%3A%20flex%3B%0A%20%20width%3A%20100%25%3B%0A%20%20border-bottom%3A%201px%20solid%20rgba%28128%2C%20128%2C%20128%2C%200.22%29%3B%0A%7D%0A%3C/style%3E%0A");return(a,H)=>(g(),C(t(n),{title:"\u4E0D\u5B9A\u9AD8Item\uFF0C\u521D\u59CB\u5316\u8017\u65F6\u6BD4\u8F83\u5927",code:t(l)},{default:A(()=>[e("div",D,[s(t(h),{type:"info",onClick:f},{default:A(()=>[j]),_:1})]),e("div",E," \u5217\u8868\u957F\u5EA6 "+o(c.value.length),1),e("div",B,[s(t(m),{data:c.value,"item-height-mode":"auto"},{default:A(({item:d})=>[e("div",x,[e("div",y,[s(t(v),{size:"large",src:d.avatar,round:""},null,8,["src"])]),e("div",k,[e("div",null,o(d.name),1),e("div",null,o(d.age),1),e("div",null,o(d.score),1)])])]),loading:A(()=>[e("div",N,[e("div",F,[s(t(i),{circle:"",size:"large"})]),e("div",M,[s(t(i),{text:"",repeat:2}),s(t(i),{text:"",style:{width:"60%"}})])])]),_:1},8,["data"])])]),_:1},8,["code"]))}};var G=r(w,[["__scopeId","data-v-50556786"]]);export{G as default};
