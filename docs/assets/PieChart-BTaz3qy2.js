import{r as s,o as d,aR as c,bB as u,c as m,m as h,w as r,a1 as f,l as p,n as g,C as y}from"./index-BFIPRRcq.js";/* empty css                */import{g as v,i as w}from"./index-BhUbKimU.js";import{E as x}from"./index-YcaNCpNb.js";const b=["id"],E={__name:"PieChart",props:{id:{type:String,default:"pieChart"},className:{type:String,default:""},width:{type:String,default:"150px",required:!0},height:{type:String,default:"150px",required:!0}},setup(t){const i=t,n={grid:{left:"2%",right:"2%",bottom:"10%",containLabel:!0},legend:{top:"bottom",textStyle:{color:"#999"}},series:[{name:"Pie Chart",type:"pie",radius:[60,120],center:["50%","50%"],itemStyle:{borderRadius:1,color:function(e){return["#ee3f4d","#2486b9","#1ba784","#d6a01d"][e.dataIndex]}},data:[{value:328,name:"稷下学宫"},{value:919,name:"唐诗阁"},{value:929,name:"宋词阁"},{value:99,name:"国医堂"}]}]},a=s("");return d(()=>{let e=v(document.getElementById(i.id));e==null&&(e=c(w(document.getElementById(i.id)))),a.value=e,a.value.setOption(n),window.addEventListener("resize",()=>{a.value.resize()})}),u(()=>{a.value&&a.value.resize()}),(e,o)=>{const l=x;return m(),h(l,null,{header:r(()=>[f("作品分布图")]),default:r(()=>[p("div",{id:t.id,class:g(t.className),style:y({height:t.height,width:t.width})},null,14,b)]),_:1})}}};export{E as default};
