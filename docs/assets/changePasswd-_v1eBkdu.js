import{r as _,S as u,c as P,e as g,Y as r,w as t,g as o,a1 as b,n as V,l as E,ak as i,$ as x,a0 as k}from"./index-BFIPRRcq.js";import{a as y,E as v}from"./el-form-item-BwKG73FW.js";import"./castArray-DQj9x11r.js";import"./_Uint8Array-DPecK3lH.js";import"./_initCloneObject-DwmNTl8v.js";const B={class:V(["min-w-[180px]","max-w-[70%]"])},F=E("h3",{class:"my-8"},"修改密码",-1),S={__name:"changePasswd",setup(q){const n=_(),s=u({oldPassword:"",newPassword:"",confirmPassword:""}),p=u({oldPassword:[{required:!0,message:"密码必填",trigger:"blur"}],newPassword:[{required:!0,message:"密码必填",trigger:"blur"}],confirmPassword:[{required:!0,message:"密码必填",trigger:"blur"}]}),c=async m=>{await m.validate((e,l)=>{e?(console.log(s),i.success("更新信息成功")):i.error("error submit!",l)})};return(m,e)=>{const l=x,d=y,w=k,f=v;return P(),g("div",B,[F,r(f,{ref_key:"userPasswdFormRef",ref:n,"label-position":"top",rules:o(p),model:o(s)},{default:t(()=>[r(d,{label:"旧密码",prop:"oldPassword"},{default:t(()=>[r(l,{modelValue:o(s).oldPassword,"onUpdate:modelValue":e[0]||(e[0]=a=>o(s).oldPassword=a),placeholder:"请输入旧密码"},null,8,["modelValue"])]),_:1}),r(d,{label:"新密码",prop:"newPassword"},{default:t(()=>[r(l,{modelValue:o(s).newPassword,"onUpdate:modelValue":e[1]||(e[1]=a=>o(s).newPassword=a),placeholder:"请输入新密码",clearable:""},null,8,["modelValue"])]),_:1}),r(d,{label:"确认新密码",prop:"confirmPassword"},{default:t(()=>[r(l,{modelValue:o(s).confirmPassword,"onUpdate:modelValue":e[2]||(e[2]=a=>o(s).confirmPassword=a),placeholder:"请输入新密码",clearable:""},null,8,["modelValue"])]),_:1}),r(w,{type:"primary",onClick:e[3]||(e[3]=a=>c(o(n)))},{default:t(()=>[b(" 更新信息 ")]),_:1})]),_:1},8,["rules","model"])])}}};export{S as default};
