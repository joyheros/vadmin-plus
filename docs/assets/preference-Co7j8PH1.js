import{r as f,c as o,e as c,L as x,M as v,l as t,t as i,Y as l,w as g,a1 as k,n as w,ak as E,af as V,ag as C}from"./index-BFIPRRcq.js";import{E as S}from"./el-divider-CV6n0PUm.js";import{E as y}from"./el-switch-BJxFvpAM.js";import{E as I}from"./el-text-DyyZtHyc.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";const N=s=>(V("data-v-1e0ea5f4"),s=s(),C(),s),D={class:w(["min-w-[180px]","max-w-[70%]"])},L=N(()=>t("h3",{class:"my-8"},"偏好设置",-1)),M={class:"flex items-center"},T={class:"flex-1"},U={class:"wp-4"},z={__name:"preference",setup(s){const d=f([{title:"用户通知",illustrate:"用户通知将以站内信的形式通知",checked:!0},{title:"系统消息",illustrate:"系统消息将以站内信的形式通知",checked:!0},{title:"用户任务",illustrate:"用户任务将以邮件的形式通知",checked:!0}]);function _(n,r){console.log("onChange",n),E.success(`${r.title}设置成功`)}return(n,r)=>{const p=I,u=y,m=S;return o(),c("div",D,[L,(o(!0),c(x,null,v(d.value,(e,h)=>(o(),c("div",{key:h},[t("div",M,[t("div",T,[t("p",null,i(e.title),1),t("p",U,[l(p,{class:"mx-1",type:"info"},{default:g(()=>[k(i(e.illustrate),1)]),_:2},1024)])]),l(u,{modelValue:e.checked,"onUpdate:modelValue":a=>e.checked=a,"inline-prompt":"","active-text":"是","inactive-text":"否",onChange:a=>_(a,e)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),l(m)]))),128))])}}},j=B(z,[["__scopeId","data-v-1e0ea5f4"]]);export{j as default};
