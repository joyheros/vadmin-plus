import{r as b,S as F,z as Ue,dp as xe,o as Ce,cP as Ie,c,e as $,Y as e,w as t,g as a,l as h,X as Re,aB as X,a1 as p,W as x,m as v,t as Te,Z as H,L as J,M as ee,dq as Le,av as le,ak as w,dr as Fe,ds as Be,dt as Ne,du as De,dv as Oe,dw as Se,dx as ze,dy as Pe,$ as $e,a0 as je,E as qe}from"./index-BFIPRRcq.js";import{E as Me,a as Ae,v as Ye}from"./el-select-DHDsuN4V.js";import{E as Ze}from"./el-dialog-CH0ZejWe.js";import{g as Ke,E as Qe}from"./el-progress-CdxvY8k2.js";import{E as Ge,a as We}from"./el-radio-DW_KQhfH.js";import"./el-tag-P6nLVvE-.js";import"./el-tooltip-CUhuhmaS.js";import"./el-tree-BtTHO7Ro.js";import"./el-checkbox-q3roQbsD.js";import{E as Xe}from"./el-tree-select-28QoAnJj.js";import{E as He}from"./el-row-BFRDF-h9.js";/* empty css                */import{_ as Je}from"./index-CChkbfOT.js";import{E as el,a as ll}from"./el-table-column-BddfOH4i.js";import{E as tl,a as ol,b as al}from"./el-dropdown-item-Dl48_47Q.js";import{E as j,a as nl}from"./el-form-item-BwKG73FW.js";import{_ as sl}from"./index-CrAszETK.js";import{E as dl}from"./el-date-picker-DAAYwn7R.js";import{E as il}from"./el-col-DZfkGYCd.js";import rl from"./dept-tree-khpXBo1H.js";import{b as ul}from"./index-BCcwcHUU.js";import{f as pl}from"./index-CfN5lD49.js";import{E as ml}from"./index-Dm81mCYQ.js";import{E as cl}from"./index-YcaNCpNb.js";import"./strings-gRtzzXFx.js";import"./isEqual-C1LNSAfW.js";import"./_Uint8Array-DPecK3lH.js";import"./index-Da2eqh9n.js";import"./castArray-DQj9x11r.js";import"./use-dialog-l7A8RiK6.js";import"./isUndefined-DCTLXrZ8.js";import"./refs-JjLydQ47.js";import"./index-Yh4M9yAX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_initCloneObject-DwmNTl8v.js";import"./dropdown-Tg6c2GmH.js";const fl={class:"app-container"},_l={class:"search-container"},gl={class:"flex justify-between"},bl=h("div",{class:"el-upload__text"},[p(" 将文件拖到此处，或 "),h("em",null,"点击上传")],-1),vl=h("div",null,"xls/xlsx files",-1),yl={class:"dialog-footer"},ot=Object.assign({name:"User",inheritAttrs:!1},{__name:"index",setup(wl){const q=b(j),B=b(j),N=b(),E=b(!1),D=b([]),r=F({pageNum:1,pageSize:10}),C=b(""),I=b(0),M=b(),O=b(),A=b(),te=[{value:"1",label:"君子"},{value:"2",label:"淑女"}];Ue(C,n=>{n&&(r.startTime=n[0],r.endTime=n[1])});const u=F({visible:!1,type:"user-form",width:800,title:""}),s=F({status:1}),d=F({deptId:void 0,file:void 0,fileList:[]}),oe=F({username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],nickname:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],deptId:[{required:!0,message:"所属部门不能为空",trigger:"blur"}],roleIds:[{required:!0,message:"用户角色不能为空",trigger:"blur"}],email:[{pattern:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,message:"请输入正确的邮箱地址",trigger:"blur"}],mobile:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]});function V(){E.value=!0,Le(r).then(({data:n})=>{M.value=n.list,I.value=n.total}).finally(()=>{E.value=!1})}function R(){q.value.resetFields(),C.value="",r.pageNum=1,r.deptId=void 0,r.startTime=void 0,r.endTime=void 0,V()}function ae(n){D.value=n.map(l=>l.id)}function ne(n){le.prompt("请输入用户「"+n.username+"」的新密码","重置密码",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(({value:l})=>{if(!l)return w.warning("请输入新密码"),!1;Fe(n.id,l).then(()=>{w.success("密码重置成功，新密码是："+l)})})}async function se(){pl().then(n=>{A.value=n.data})}async function Y(){ul().then(n=>{O.value=n.data})}async function S(n,l){u.visible=!0,u.type=n,u.type==="user-form"?(await Y(),await se(),l?(u.title="修改用户",Be(l).then(({data:k})=>{Object.assign(s,{...k})})):u.title="新增用户"):u.type==="user-import"&&(u.title="导入用户",u.width=600,Y())}function T(){u.visible=!1,u.type==="user-form"?(B.value.resetFields(),B.value.clearValidate(),s.id=void 0,s.status=1):u.type==="user-import"&&(d.file=void 0,d.fileList=[])}const de=xe(()=>{if(u.type==="user-form")B.value.validate(n=>{if(n){const l=s.id;E.value=!0,l?Ne(l,s).then(()=>{w.success("修改用户成功"),T(),R()}).finally(()=>E.value=!1):De(s).then(()=>{w.success("新增用户成功"),T(),R()}).finally(()=>E.value=!1)}});else if(u.type==="user-import"){if(!(d!=null&&d.deptId))return w.warning("请选择部门"),!1;if(!(d!=null&&d.file))return w.warning("上传Excel文件不能为空"),!1;Oe(d==null?void 0:d.deptId,d==null?void 0:d.file).then(n=>{w.success(n.data),T(),R()})}},3e3);function Z(n){const l=[n||D.value].join(",");if(!l){w.warning("请勾选删除项");return}le.confirm("确认删除用户?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Se(l).then(()=>{w.success("删除成功"),R()})})}function ie(){ze().then(n=>{const l=n.data,k=decodeURI(n.headers["content-disposition"].split(";")[1].split("=")[1]),U="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",y=new Blob([l],{type:U}),i=window.URL.createObjectURL(y),m=document.createElement("a");m.href=i,m.download=k,document.body.appendChild(m),m.click(),document.body.removeChild(m),window.URL.revokeObjectURL(i)})}function re(n){d.file=n.raw}function ue(n){N.value.clearFiles();const l=n[0];l.uid=Ke(),N.value.handleStart(l),d.file=l}function pe(){Pe(r).then(n=>{const l=n.data,k=decodeURI(n.headers["content-disposition"].split(";")[1].split("=")[1]),U="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8",y=new Blob([l],{type:U}),i=window.URL.createObjectURL(y),m=document.createElement("a");m.href=i,m.download=k,document.body.appendChild(m),m.click(),document.body.removeChild(m),window.URL.revokeObjectURL(i)})}return Ce(()=>{V()}),(n,l)=>{const k=rl,U=il,y=$e,i=nl,m=Me,z=Ae,me=dl,f=sl,g=je,P=j,K=tl,ce=ol,fe=al,_=el,_e=ml,ge=ll,be=Je,ve=cl,ye=He,Q=Xe,G=Ge,we=We,he=qe,ke=Qe,Ee=Ze,L=Ie("hasPerm"),Ve=Ye;return c(),$("div",fl,[e(ye,{gutter:20},{default:t(()=>[e(U,{lg:4,xs:24,class:"mb-[12px]"},{default:t(()=>[e(k,{modelValue:a(r).deptId,"onUpdate:modelValue":l[0]||(l[0]=o=>a(r).deptId=o),onNodeClick:V},null,8,["modelValue"])]),_:1}),e(U,{lg:20,xs:24},{default:t(()=>[h("div",_l,[e(P,{ref_key:"queryFormRef",ref:q,model:a(r),inline:!0},{default:t(()=>[e(i,{label:"关键字",prop:"keywords"},{default:t(()=>[e(y,{modelValue:a(r).keywords,"onUpdate:modelValue":l[1]||(l[1]=o=>a(r).keywords=o),placeholder:"用户名/昵称/手机号",clearable:"",style:{width:"200px"},onKeyup:Re(V,["enter"])},null,8,["modelValue"])]),_:1}),e(i,{label:"状态",prop:"status"},{default:t(()=>[e(z,{modelValue:a(r).status,"onUpdate:modelValue":l[2]||(l[2]=o=>a(r).status=o),placeholder:"全部",clearable:"",class:"!w-[100px]"},{default:t(()=>[e(m,{label:"启用",value:"1"}),e(m,{label:"禁用",value:"0"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"创建时间"},{default:t(()=>[e(me,{class:"!w-[240px]",modelValue:a(C),"onUpdate:modelValue":l[3]||(l[3]=o=>X(C)?C.value=o:null),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"截止时间","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(i,null,{default:t(()=>[e(g,{type:"primary",onClick:V},{default:t(()=>[e(f,{"icon-class":"search"}),p("搜索")]),_:1}),e(g,{onClick:R},{default:t(()=>[e(f,{"icon-class":"reset"}),p("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),e(ve,{shadow:"never",class:"table-container"},{header:t(()=>[h("div",gl,[h("div",null,[x((c(),v(g,{type:"success",onClick:l[4]||(l[4]=o=>S("user-form"))},{default:t(()=>[e(f,{"icon-class":"plus"}),p("新增 ")]),_:1})),[[L,["sys:user:add"]]]),x((c(),v(g,{type:"danger",disabled:a(D).length===0,onClick:l[5]||(l[5]=o=>Z())},{default:t(()=>[e(f,{"icon-class":"trash"}),p("删除 ")]),_:1},8,["disabled"])),[[L,["sys:user:delete"]]])]),h("div",null,[e(fe,{"split-button":""},{dropdown:t(()=>[e(ce,null,{default:t(()=>[e(K,{onClick:ie},{default:t(()=>[e(f,{"icon-class":"download"}),p("下载模板 ")]),_:1}),e(K,{onClick:l[6]||(l[6]=o=>S("user-import"))},{default:t(()=>[e(f,{"icon-class":"merge"}),p("导入数据 ")]),_:1})]),_:1})]),default:t(()=>[p(" 导入 ")]),_:1}),e(g,{class:"ml-3",onClick:pe},{icon:t(()=>[e(f,{"icon-class":"saveas"})]),default:t(()=>[p("导出")]),_:1})])])]),default:t(()=>[x((c(),v(ge,{data:a(M),onSelectionChange:ae},{default:t(()=>[e(_,{type:"selection",width:"50",align:"center"}),e(_,{key:"id",label:"编号",align:"center",prop:"id",width:"60"}),e(_,{key:"username",label:"用户名",width:"120",align:"center",prop:"username"}),e(_,{label:"用户昵称",width:"150",align:"center",prop:"nickname"}),e(_,{label:"职务",width:"120",align:"center",prop:"roleName"}),e(_,{label:"性别",width:"60",align:"center",prop:"genderLabel"}),e(_,{label:"部门",width:"120",align:"center",prop:"deptName"}),e(_,{label:"手机号码",width:"120",align:"center",prop:"mobile"}),e(_,{label:"状态",align:"center",prop:"status"},{default:t(o=>[e(_e,{type:o.row.status==1?"success":"info"},{default:t(()=>[p(Te(o.row.status==1?"启用":"禁用"),1)]),_:2},1032,["type"])]),_:1}),e(_,{label:"创建时间",align:"center",prop:"createTime",width:"180"}),e(_,{label:"操作",fixed:"right",width:"220"},{default:t(o=>[x((c(),v(g,{type:"primary",size:"small",link:"",onClick:W=>ne(o.row)},{default:t(()=>[e(f,{"icon-class":"refresh"}),p("重置密码")]),_:2},1032,["onClick"])),[[L,["sys:user:reset_pwd"]]]),x((c(),v(g,{type:"primary",link:"",size:"small",onClick:W=>S("user-form",o.row.id)},{default:t(()=>[e(f,{"icon-class":"edit"}),p("编辑")]),_:2},1032,["onClick"])),[[L,["sys:user:edit"]]]),x((c(),v(g,{type:"primary",link:"",size:"small",onClick:W=>Z(o.row.id)},{default:t(()=>[e(f,{"icon-class":"trash"}),p("删除")]),_:2},1032,["onClick"])),[[L,["sys:user:delete"]]])]),_:1})]),_:1},8,["data"])),[[Ve,a(E)]]),a(I)>0?(c(),v(be,{key:0,total:a(I),"onUpdate:total":l[7]||(l[7]=o=>X(I)?I.value=o:null),page:a(r).pageNum,"onUpdate:page":l[8]||(l[8]=o=>a(r).pageNum=o),limit:a(r).pageSize,"onUpdate:limit":l[9]||(l[9]=o=>a(r).pageSize=o),onPagination:V},null,8,["total","page","limit"])):H("",!0)]),_:1})]),_:1})]),_:1}),e(Ee,{modelValue:a(u).visible,"onUpdate:modelValue":l[19]||(l[19]=o=>a(u).visible=o),title:a(u).title,width:a(u).width,"append-to-body":"",onClose:T},{footer:t(()=>[h("div",yl,[e(g,{type:"primary",onClick:a(de)},{default:t(()=>[p("确 定")]),_:1},8,["onClick"]),e(g,{onClick:T},{default:t(()=>[p("取 消")]),_:1})])]),default:t(()=>[a(u).type==="user-form"?(c(),v(P,{key:0,ref_key:"userFormRef",ref:B,model:a(s),rules:a(oe),"label-width":"80px"},{default:t(()=>[e(i,{label:"用户名",prop:"username"},{default:t(()=>[e(y,{modelValue:a(s).username,"onUpdate:modelValue":l[10]||(l[10]=o=>a(s).username=o),readonly:!!a(s).id,placeholder:"请输入用户名"},null,8,["modelValue","readonly"])]),_:1}),e(i,{label:"用户昵称",prop:"nickname"},{default:t(()=>[e(y,{modelValue:a(s).nickname,"onUpdate:modelValue":l[11]||(l[11]=o=>a(s).nickname=o),placeholder:"请输入用户昵称"},null,8,["modelValue"])]),_:1}),e(i,{label:"所属部门",prop:"deptId"},{default:t(()=>[e(Q,{modelValue:a(s).deptId,"onUpdate:modelValue":l[12]||(l[12]=o=>a(s).deptId=o),placeholder:"请选择所属部门",data:a(O),filterable:"","check-strictly":"","render-after-expand":!1},null,8,["modelValue","data"])]),_:1}),e(i,{label:"性别",prop:"gender"},{default:t(()=>[e(z,{modelValue:a(s).gender,"onUpdate:modelValue":l[13]||(l[13]=o=>a(s).gender=o),placeholder:"请选择"},{default:t(()=>[(c(),$(J,null,ee(te,o=>e(m,{key:o.value,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"角色",prop:"roleIds"},{default:t(()=>[e(z,{modelValue:a(s).roleIds,"onUpdate:modelValue":l[14]||(l[14]=o=>a(s).roleIds=o),multiple:"",placeholder:"请选择"},{default:t(()=>[(c(!0),$(J,null,ee(a(A),o=>(c(),v(m,{key:o.value,label:o.label,value:o.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"手机号码",prop:"mobile"},{default:t(()=>[e(y,{modelValue:a(s).mobile,"onUpdate:modelValue":l[15]||(l[15]=o=>a(s).mobile=o),placeholder:"请输入手机号码",maxlength:"11"},null,8,["modelValue"])]),_:1}),e(i,{label:"邮箱",prop:"email"},{default:t(()=>[e(y,{modelValue:a(s).email,"onUpdate:modelValue":l[16]||(l[16]=o=>a(s).email=o),placeholder:"请输入邮箱",maxlength:"50"},null,8,["modelValue"])]),_:1}),e(i,{label:"状态",prop:"status"},{default:t(()=>[e(we,{modelValue:a(s).status,"onUpdate:modelValue":l[17]||(l[17]=o=>a(s).status=o)},{default:t(()=>[e(G,{value:1},{default:t(()=>[p("正常")]),_:1}),e(G,{value:0},{default:t(()=>[p("禁用")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])):a(u).type==="user-import"?(c(),v(P,{key:1,model:a(d),"label-width":"100px"},{default:t(()=>[e(i,{label:"部门"},{default:t(()=>[e(Q,{modelValue:a(d).deptId,"onUpdate:modelValue":l[18]||(l[18]=o=>a(d).deptId=o),placeholder:"请选择部门",data:a(O),filterable:"","check-strictly":""},null,8,["modelValue","data"])]),_:1}),e(i,{label:"Excel文件"},{default:t(()=>[e(ke,{ref_key:"uploadRef",ref:N,action:"",drag:"",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",limit:1,"auto-upload":!1,"file-list":a(d).fileList,"on-change":re,"on-exceed":ue},{tip:t(()=>[vl]),default:t(()=>[e(he,{class:"el-icon--upload"},{default:t(()=>[e(f,{"icon-class":"upload"})]),_:1}),bl]),_:1},8,["file-list"])]),_:1})]),_:1},8,["model"])):H("",!0)]),_:1},8,["modelValue","title","width"])])}}});export{ot as default};
