import{r as p,o as u,aR as y,bB as g,c as w,m as _,w as n,l as c,a1 as S,Y as d,n as x,C as v}from"./index-BFIPRRcq.js";/* empty css                */import{E as b}from"./el-tooltip-CUhuhmaS.js";import{_ as k}from"./index-CrAszETK.js";import{L as l,g as C,i as E}from"./index-BhUbKimU.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as I}from"./index-YcaNCpNb.js";import"./isUndefined-DCTLXrZ8.js";const A={class:"title"},L=["id"],T={__name:"AreaChart",props:{id:{type:String,default:"areaChart"},className:{type:String,default:""},width:{type:String,default:"200px",required:!0},height:{type:String,default:"300px",required:!0}},setup(a){const r=a,m={grid:{left:"3%",right:"4%",bottom:"8%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}},feature:{saveAsImage:{}}},legend:{x:"center",y:"bottom",data:["诸子百家","律诗","词牌","药典"],textStyle:{color:"#999"}},xAxis:[{type:"category",data:["商周","秦汉","魏晋","唐朝","宋朝","元朝","明朝","清朝"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value"}],series:[{name:"诸子百家",type:"line",stack:"Total",smooth:!0,data:[128,31,99,33,30,21,81,36],lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new l(0,0,0,1,[{offset:0,color:"#ee3f4d"},{offset:1,color:"#f0a1a8"}])},emphasis:{focus:"series"}},{name:"律诗",type:"line",stack:"Total",smooth:!0,data:[180,112,190,360,270,55,136,98],lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new l(0,0,0,1,[{offset:0,color:"#2486b9"},{offset:1,color:"#2f90b9"}])},emphasis:{focus:"series"}},{name:"词牌",type:"line",stack:"Total",smooth:!0,data:[60,45,81,280,381,70,128,90],lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new l(0,0,0,1,[{offset:0,color:"#1ba784"},{offset:1,color:"#1a6840"}])},emphasis:{focus:"series"}},{name:"药典",type:"line",stack:"Total",smooth:!0,data:[33,55,66,99,108,80,96,72],lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new l(0,0,0,1,[{offset:0,color:"#d6a01d"},{offset:1,color:"#f28e16"}])},emphasis:{focus:"series"}}]},f=()=>{const e=new Image;e.src=o.value.getDataURL({type:"png",pixelRatio:1,backgroundColor:"#fff"}),e.onload=()=>{const s=document.createElement("canvas");s.width=e.width,s.height=e.height;const i=s.getContext("2d");if(i){i.drawImage(e,0,0,e.width,e.height);const t=document.createElement("a");t.download="作品趋势图.png",t.href=s.toDataURL("image/png",.9),document.body.appendChild(t),t.click(),t.remove()}}},o=p("");return u(()=>{let e=C(document.getElementById(r.id));e==null&&(e=y(E(document.getElementById(r.id)))),o.value=e,o.value.setOption(m),window.addEventListener("resize",()=>{o.value.resize()})}),g(()=>{o.value&&o.value.resize()}),(e,s)=>{const i=k,t=b,h=I;return w(),_(h,null,{header:n(()=>[c("div",A,[S(" 作品趋势图 "),d(t,{effect:"dark",content:"点击试试下载",placement:"bottom"},{default:n(()=>[d(i,{"icon-class":"download",onClick:f})]),_:1})])]),default:n(()=>[c("div",{id:a.id,class:x(a.className),style:v({height:a.height,width:a.width})},null,14,L)]),_:1})}}},G=B(T,[["__scopeId","data-v-300ece49"]]);export{G as default};
