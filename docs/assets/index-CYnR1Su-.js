import{r as b,S as V,o as ee,cP as te,c as d,e as le,l as P,Y as e,w as t,g as o,X as ae,a1 as n,W as g,m as p,ab as I,ak as C,av as oe,$ as se,a0 as ne}from"./index-BFIPRRcq.js";import{E as re,a as ie,v as de}from"./el-select-DHDsuN4V.js";import{E as pe}from"./el-dialog-CH0ZejWe.js";import{E as ue,a as me}from"./el-radio-DW_KQhfH.js";import{E as ce}from"./el-input-number-8ZJWsQF2.js";import"./el-tag-P6nLVvE-.js";import"./el-tooltip-CUhuhmaS.js";import"./el-tree-BtTHO7Ro.js";import"./el-checkbox-q3roQbsD.js";import{E as fe}from"./el-tree-select-28QoAnJj.js";/* empty css                */import{E as _e,a as ye}from"./el-table-column-BddfOH4i.js";import{E as F,a as be}from"./el-form-item-BwKG73FW.js";import{_ as ge}from"./index-CrAszETK.js";import{l as ve,g as he,u as ke,a as we,d as Ee,b as Ve}from"./index-BCcwcHUU.js";import{E as Ce}from"./index-Dm81mCYQ.js";import{E as xe}from"./index-YcaNCpNb.js";import"./strings-gRtzzXFx.js";import"./isEqual-C1LNSAfW.js";import"./_Uint8Array-DPecK3lH.js";import"./index-Da2eqh9n.js";import"./castArray-DQj9x11r.js";import"./use-dialog-l7A8RiK6.js";import"./isUndefined-DCTLXrZ8.js";import"./refs-JjLydQ47.js";import"./index-Yh4M9yAX.js";import"./_initCloneObject-DwmNTl8v.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const De={class:"app-container"},Ie={class:"search-container"},Fe={class:"dialog-footer"},st=Object.assign({name:"Dept",inheritAttrs:!1},{__name:"index",setup(Be){const B=b(F),k=b(F),f=b(!1),x=b([]),u=V({title:"",visible:!1}),_=V({}),T=b(),U=b(),s=V({status:1,parentId:0,sort:1}),j=V({parentId:[{required:!0,message:"上级部门不能为空",trigger:"blur"}],name:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],sort:[{required:!0,message:"显示排序不能为空",trigger:"blur"}]});function y(){f.value=!0,ve(_).then(({data:r})=>{T.value=r,f.value=!1})}function q(){B.value.resetFields(),y()}function z(r){x.value=r.map(l=>l.id)}async function K(){Ve().then(r=>{U.value=[{value:0,label:"顶级部门",children:r.data}]})}async function D(r,l){await K(),u.visible=!0,l?(u.title="修改部门",he(l).then(({data:E})=>{Object.assign(s,E)})):(u.title="新增部门",s.parentId=r??0)}function L(){k.value.validate(r=>{if(r){const l=s.id;f.value=!0,l?ke(l,s).then(()=>{C.success("修改成功"),w(),y()}).finally(()=>f.value=!1):we(s).then(()=>{C.success("新增成功"),w(),y()}).finally(()=>f.value=!1)}})}function O(r){const l=[r||x.value].join(",");if(!l){C.warning("请勾选删除项");return}oe.confirm("确认删除已选中的数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{Ee(l).then(()=>{C.success("删除成功"),q()})})}function w(){u.visible=!1,Q()}function Q(){k.value.resetFields(),k.value.clearValidate(),s.id=void 0,s.parentId=0,s.status=1,s.sort=1}return ee(()=>{y()}),(r,l)=>{const E=se,m=be,R=re,A=ie,c=ge,i=ne,S=F,v=_e,$=Ce,G=ye,W=xe,X=fe,Y=ce,M=ue,H=me,J=pe,h=te("hasPerm"),Z=de;return d(),le("div",De,[P("div",Ie,[e(S,{ref_key:"queryFormRef",ref:B,model:o(_),inline:!0},{default:t(()=>[e(m,{label:"关键字",prop:"keywords"},{default:t(()=>[e(E,{modelValue:o(_).keywords,"onUpdate:modelValue":l[0]||(l[0]=a=>o(_).keywords=a),placeholder:"部门名称",onKeyup:ae(y,["enter"])},null,8,["modelValue"])]),_:1}),e(m,{label:"部门状态",prop:"status"},{default:t(()=>[e(A,{modelValue:o(_).status,"onUpdate:modelValue":l[1]||(l[1]=a=>o(_).status=a),placeholder:"全部",clearable:"",class:"!w-[100px]"},{default:t(()=>[e(R,{value:1,label:"正常"}),e(R,{value:0,label:"禁用"})]),_:1},8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(i,{class:"filter-item",type:"primary",onClick:y},{default:t(()=>[e(c,{"icon-class":"search"}),n("搜索")]),_:1}),e(i,{onClick:q},{default:t(()=>[e(c,{"icon-class":"reset"}),n("重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),e(W,{shadow:"never",class:"table-container"},{header:t(()=>[g((d(),p(i,{type:"success",onClick:l[2]||(l[2]=a=>D(0,void 0))},{default:t(()=>[e(c,{"icon-class":"plus"}),n("新增 ")]),_:1})),[[h,["sys:dept:add"]]]),g((d(),p(i,{type:"danger",disabled:o(x).length===0,onClick:l[3]||(l[3]=a=>O())},{default:t(()=>[e(c,{"icon-class":"trash"}),n("删除 ")]),_:1},8,["disabled"])),[[h,["sys:dept:delete"]]])]),default:t(()=>[g((d(),p(G,{data:o(T),"row-key":"id","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"},onSelectionChange:z},{default:t(()=>[e(v,{type:"selection",width:"55",align:"center"}),e(v,{prop:"name",label:"部门名称","min-width":"200"}),e(v,{prop:"status",label:"状态",width:"100"},{default:t(a=>[a.row.status==1?(d(),p($,{key:0,type:"success"},{default:t(()=>[n("正常")]),_:1})):(d(),p($,{key:1,type:"info"},{default:t(()=>[n("禁用")]),_:1}))]),_:1}),e(v,{prop:"sort",label:"排序",width:"100"}),e(v,{label:"操作",fixed:"right",align:"left",width:"200"},{default:t(a=>[g((d(),p(i,{type:"primary",link:"",size:"small",onClick:I(N=>D(a.row.id,void 0),["stop"])},{default:t(()=>[e(c,{"icon-class":"plus"}),n("新增 ")]),_:2},1032,["onClick"])),[[h,["sys:dept:add"]]]),g((d(),p(i,{type:"primary",link:"",size:"small",onClick:I(N=>D(a.row.parentId,a.row.id),["stop"])},{default:t(()=>[e(c,{"icon-class":"edit"}),n("编辑 ")]),_:2},1032,["onClick"])),[[h,["sys:dept:edit"]]]),g((d(),p(i,{type:"primary",link:"",size:"small",onClick:I(N=>O(a.row.id),["stop"])},{default:t(()=>[e(c,{"icon-class":"trash"}),n("删除 ")]),_:2},1032,["onClick"])),[[h,["sys:dept:delete"]]])]),_:1})]),_:1},8,["data"])),[[Z,o(f)]])]),_:1}),e(J,{modelValue:o(u).visible,"onUpdate:modelValue":l[8]||(l[8]=a=>o(u).visible=a),title:o(u).title,width:"600px",onClosed:w},{footer:t(()=>[P("div",Fe,[e(i,{type:"primary",onClick:L},{default:t(()=>[n(" 确 定 ")]),_:1}),e(i,{onClick:w},{default:t(()=>[n(" 取 消 ")]),_:1})])]),default:t(()=>[e(S,{ref_key:"deptFormRef",ref:k,model:o(s),rules:o(j),"label-width":"80px"},{default:t(()=>[e(m,{label:"上级部门",prop:"parentId"},{default:t(()=>[e(X,{modelValue:o(s).parentId,"onUpdate:modelValue":l[4]||(l[4]=a=>o(s).parentId=a),placeholder:"选择上级部门",data:o(U),filterable:"","check-strictly":"","render-after-expand":!1},null,8,["modelValue","data"])]),_:1}),e(m,{label:"部门名称",prop:"name"},{default:t(()=>[e(E,{modelValue:o(s).name,"onUpdate:modelValue":l[5]||(l[5]=a=>o(s).name=a),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1}),e(m,{label:"显示排序",prop:"sort"},{default:t(()=>[e(Y,{modelValue:o(s).sort,"onUpdate:modelValue":l[6]||(l[6]=a=>o(s).sort=a),"controls-position":"right",style:{width:"100px"},min:0},null,8,["modelValue"])]),_:1}),e(m,{label:"部门状态"},{default:t(()=>[e(H,{modelValue:o(s).status,"onUpdate:modelValue":l[7]||(l[7]=a=>o(s).status=a)},{default:t(()=>[e(M,{label:1},{default:t(()=>[n("正常")]),_:1}),e(M,{label:0},{default:t(()=>[n("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});export{st as default};
