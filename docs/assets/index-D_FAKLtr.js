import{r as c,S as V,o as ie,c as d,e as re,l as F,Y as e,w as t,g as a,X as ue,a1 as i,W as K,m as f,aB as Q,Z as de,t as me,ak as w,av as pe,dj as ce,$ as fe,a0 as _e}from"./index-BFIPRRcq.js";import{E as ge,a as ve,v as be}from"./el-select-DHDsuN4V.js";import{E as ye}from"./el-tag-P6nLVvE-.js";import{E as A}from"./el-tree-BtTHO7Ro.js";import"./el-checkbox-q3roQbsD.js";import{E as ke}from"./el-dialog-CH0ZejWe.js";import{E as he}from"./el-input-number-8ZJWsQF2.js";import{E as Ee,a as Ve}from"./el-radio-DW_KQhfH.js";import"./el-tooltip-CUhuhmaS.js";/* empty css                */import{_ as we}from"./index-CChkbfOT.js";import{E as Ce,a as Re}from"./el-table-column-BddfOH4i.js";import{E as I,a as xe}from"./el-form-item-BwKG73FW.js";import{_ as Se}from"./index-CrAszETK.js";import{g as Me,a as Ue,u as Fe,b as Ie,d as Ne,c as Be,e as De}from"./index-CfN5lD49.js";import{E as Te}from"./index-Dm81mCYQ.js";import{E as qe}from"./index-YcaNCpNb.js";import"./strings-gRtzzXFx.js";import"./isEqual-C1LNSAfW.js";import"./_Uint8Array-DPecK3lH.js";import"./index-Da2eqh9n.js";import"./castArray-DQj9x11r.js";import"./index-Yh4M9yAX.js";import"./use-dialog-l7A8RiK6.js";import"./isUndefined-DCTLXrZ8.js";import"./refs-JjLydQ47.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_initCloneObject-DwmNTl8v.js";const $e={class:"app-container"},ze={class:"search-container"},je={class:"dialog-footer"},Oe={class:"dialog-footer"},vl=Object.assign({name:"Role",inheritAttrs:!1},{__name:"index",setup(Le){const N=c(I),C=c(I),S=c(A),r=c(!1),M=c([]),k=c(0),m=V({pageNum:1,pageSize:10}),B=c(),g=V({title:"",visible:!1}),n=V({sort:1,status:1,code:"",name:""}),G=V({name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],code:[{required:!0,message:"请输入角色编码",trigger:"blur"}],dataScope:[{required:!0,message:"请选择数据权限",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}]}),b=c(!1),D=c([]);let U=V({});function h(){r.value=!0,Me(m).then(({data:s})=>{B.value=s.list,k.value=s.total}).finally(()=>{r.value=!1})}function E(){N.value.resetFields(),m.pageNum=1,h()}function W(s){M.value=s.map(l=>l.id)}function T(s){g.visible=!0,s?(g.title="修改角色",Ue(s).then(({data:l})=>{Object.assign(n,l)})):g.title="新增角色"}function X(){C.value.validate(s=>{if(s){r.value=!0;const l=n.id;l?Fe(l,n).then(()=>{w.success("修改成功"),R(),E()}).finally(()=>r.value=!1):Ie(n).then(()=>{w.success("新增成功"),R(),E()}).finally(()=>r.value=!1)}})}function R(){g.visible=!1,Y()}function Y(){C.value.resetFields(),C.value.clearValidate(),n.id=void 0,n.sort=1,n.status=1}function q(s){const l=[s||M.value].join(",");if(!l){w.warning("请勾选删除项");return}pe.confirm("确认删除已选中的数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{r.value=!0,Ne(l).then(()=>{w.success("删除成功"),E()}).finally(()=>r.value=!1)})}function Z(s){const l=s.id;l&&(U={id:l,name:s.name},b.value=!0,r.value=!0,ce().then(v=>{D.value=v.data,Be(l).then(({data:p})=>{p.forEach(u=>S.value.setChecked(u,!0,!1))}).finally(()=>{r.value=!1})}))}function H(){const s=U.id;if(s){const l=S.value.getCheckedNodes(!1,!0).map(v=>v.value);r.value=!0,De(s,l).then(()=>{w.success("分配权限成功"),b.value=!1,E()}).finally(()=>{r.value=!1})}}return ie(()=>{h()}),(s,l)=>{const v=fe,p=xe,_=Se,u=_e,$=I,y=Ce,z=Te,J=Re,ee=we,le=qe,x=ge,te=ve,j=Ee,oe=Ve,ae=he,O=ke,ne=A,se=ye,L=be;return d(),re("div",$e,[F("div",ze,[e($,{ref_key:"queryFormRef",ref:N,model:a(m),inline:!0},{default:t(()=>[e(p,{prop:"keywords",label:"关键字"},{default:t(()=>[e(v,{modelValue:a(m).keywords,"onUpdate:modelValue":l[0]||(l[0]=o=>a(m).keywords=o),placeholder:"角色名称",clearable:"",onKeyup:ue(h,["enter"])},null,8,["modelValue"])]),_:1}),e(p,null,{default:t(()=>[e(u,{type:"primary",onClick:h},{default:t(()=>[e(_,{"icon-class":"search"}),i("搜索")]),_:1}),e(u,{onClick:E},{default:t(()=>[e(_,{"icon-class":"reset"}),i("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),e(le,{shadow:"never",class:"table-container"},{header:t(()=>[e(u,{type:"success",onClick:l[1]||(l[1]=o=>T())},{default:t(()=>[e(_,{"icon-class":"plus"}),i("新增")]),_:1}),e(u,{type:"danger",disabled:a(M).length===0,onClick:l[2]||(l[2]=o=>q())},{default:t(()=>[e(_,{"icon-class":"trash"}),i("删除 ")]),_:1},8,["disabled"])]),default:t(()=>[K((d(),f(J,{ref:"dataTableRef",data:a(B),"highlight-current-row":"",border:"",onSelectionChange:W},{default:t(()=>[e(y,{type:"selection",width:"55",align:"center"}),e(y,{label:"角色名称",prop:"name","min-width":"100"}),e(y,{label:"角色编码",prop:"code",width:"150"}),e(y,{label:"状态",align:"center",width:"100"},{default:t(o=>[o.row.status===1?(d(),f(z,{key:0,type:"success"},{default:t(()=>[i("正常")]),_:1})):(d(),f(z,{key:1,type:"info"},{default:t(()=>[i("禁用")]),_:1}))]),_:1}),e(y,{label:"排序",align:"center",width:"80",prop:"sort"}),e(y,{fixed:"right",label:"操作",width:"220"},{default:t(o=>[e(u,{type:"primary",size:"small",link:"",onClick:P=>Z(o.row)},{default:t(()=>[e(_,{"icon-class":"assign"}),i("分配权限 ")]),_:2},1032,["onClick"]),e(u,{type:"primary",size:"small",link:"",onClick:P=>T(o.row.id)},{default:t(()=>[e(_,{"icon-class":"edit"}),i("编辑 ")]),_:2},1032,["onClick"]),e(u,{type:"primary",size:"small",link:"",onClick:P=>q(o.row.id)},{default:t(()=>[e(_,{"icon-class":"trash"}),i("删除 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[L,a(r)]]),a(k)>0?(d(),f(ee,{key:0,total:a(k),"onUpdate:total":l[3]||(l[3]=o=>Q(k)?k.value=o:null),page:a(m).pageNum,"onUpdate:page":l[4]||(l[4]=o=>a(m).pageNum=o),limit:a(m).pageSize,"onUpdate:limit":l[5]||(l[5]=o=>a(m).pageSize=o),onPagination:h},null,8,["total","page","limit"])):de("",!0)]),_:1}),e(O,{modelValue:a(g).visible,"onUpdate:modelValue":l[11]||(l[11]=o=>a(g).visible=o),title:a(g).title,width:"500px",onClose:R},{footer:t(()=>[F("div",je,[e(u,{type:"primary",onClick:X},{default:t(()=>[i("确 定")]),_:1}),e(u,{onClick:R},{default:t(()=>[i("取 消")]),_:1})])]),default:t(()=>[e($,{ref_key:"roleFormRef",ref:C,model:a(n),rules:a(G),"label-width":"100px"},{default:t(()=>[e(p,{label:"角色名称",prop:"name"},{default:t(()=>[e(v,{modelValue:a(n).name,"onUpdate:modelValue":l[6]||(l[6]=o=>a(n).name=o),placeholder:"请输入角色名称"},null,8,["modelValue"])]),_:1}),e(p,{label:"角色编码",prop:"code"},{default:t(()=>[e(v,{modelValue:a(n).code,"onUpdate:modelValue":l[7]||(l[7]=o=>a(n).code=o),placeholder:"请输入角色编码"},null,8,["modelValue"])]),_:1}),e(p,{label:"数据权限",prop:"dataScope"},{default:t(()=>[e(te,{modelValue:a(n).dataScope,"onUpdate:modelValue":l[8]||(l[8]=o=>a(n).dataScope=o)},{default:t(()=>[(d(),f(x,{key:0,label:"全部数据",value:0})),(d(),f(x,{key:1,label:"部门及子部门数据",value:1})),(d(),f(x,{key:2,label:"本部门数据",value:2})),(d(),f(x,{key:3,label:"本人数据",value:3}))]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"状态",prop:"status"},{default:t(()=>[e(oe,{modelValue:a(n).status,"onUpdate:modelValue":l[9]||(l[9]=o=>a(n).status=o)},{default:t(()=>[e(j,{label:1},{default:t(()=>[i("正常")]),_:1}),e(j,{label:0},{default:t(()=>[i("停用")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"排序",prop:"sort"},{default:t(()=>[e(ae,{modelValue:a(n).sort,"onUpdate:modelValue":l[10]||(l[10]=o=>a(n).sort=o),"controls-position":"right",min:0,style:{width:"100px"}},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(O,{modelValue:a(b),"onUpdate:modelValue":l[13]||(l[13]=o=>Q(b)?b.value=o:null),title:"【"+a(U).name+"】权限分配",width:"800px"},{footer:t(()=>[F("div",Oe,[e(u,{type:"primary",onClick:H},{default:t(()=>[i("确 定")]),_:1}),e(u,{onClick:l[12]||(l[12]=o=>b.value=!1)},{default:t(()=>[i("取 消")]),_:1})])]),default:t(()=>[K((d(),f(se,{"max-height":"600px"},{default:t(()=>[e(ne,{ref_key:"menuRef",ref:S,"node-key":"value","show-checkbox":"",data:a(D),"default-expand-all":!0},{default:t(({data:o})=>[i(me(o.label),1)]),_:1},8,["data"])]),_:1})),[[L,a(r)]])]),_:1},8,["modelValue","title"])])}}});export{vl as default};
