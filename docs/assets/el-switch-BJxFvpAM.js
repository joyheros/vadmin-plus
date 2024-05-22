import{b as Z,bp as j,i as k,h as J,F as x,U as N,bq as w,G as V,aQ as S,I as P,br as B,d as U,N as ee,O as ae,a as ie,Q as te,P as ne,A as d,r as T,B as se,z as K,a5 as le,o as oe,T as ce,c as i,e as v,l as E,g as a,n as u,X as re,m as c,w as p,q as b,E as h,Z as r,t as C,Y as ue,bs as de,f as O,C as ve,ab as fe,_ as pe,V as he,bt as M,bf as me,s as be}from"./index-BFIPRRcq.js";const ye=Z({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:j},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:k},activeActionIcon:{type:k},activeIcon:{type:k},inactiveIcon:{type:k},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:J(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0},...x(["ariaLabel"])}),Ie={[N]:l=>w(l)||V(l)||S(l),[P]:l=>w(l)||V(l)||S(l),[B]:l=>w(l)||V(l)||S(l)},ge=["onClick"],ke=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],we=["aria-hidden"],Ve=["aria-hidden"],Se=["aria-hidden"],L="ElSwitch",Te=U({name:L}),Ee=U({...Te,props:ye,emits:Ie,setup(l,{expose:q,emit:f}){const t=l,{formItem:y}=ee(),G=ae(),n=ie("switch"),{inputId:Q}=te(t,{formItemContext:y}),I=ne(d(()=>t.loading)),A=T(t.modelValue!==!1),m=T(),_=T(),$=d(()=>[n.b(),n.m(G.value),n.is("disabled",I.value),n.is("checked",s.value)]),H=d(()=>[n.e("label"),n.em("label","left"),n.is("active",!s.value)]),R=d(()=>[n.e("label"),n.em("label","right"),n.is("active",s.value)]),W=d(()=>({width:se(t.width)}));K(()=>t.modelValue,()=>{A.value=!0});const z=d(()=>A.value?t.modelValue:!1),s=d(()=>z.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(z.value)||(f(N,t.inactiveValue),f(P,t.inactiveValue),f(B,t.inactiveValue)),K(s,e=>{var o;m.value.checked=e,t.validateEvent&&((o=y==null?void 0:y.validate)==null||o.call(y,"change").catch(Y=>le()))});const g=()=>{const e=s.value?t.inactiveValue:t.activeValue;f(N,e),f(P,e),f(B,e),he(()=>{m.value.checked=s.value})},D=()=>{if(I.value)return;const{beforeChange:e}=t;if(!e){g();return}const o=e();[M(o),w(o)].includes(!0)||me(L,"beforeChange must return type `Promise<boolean>` or `boolean`"),M(o)?o.then(F=>{F&&g()}).catch(F=>{}):o&&g()},X=()=>{var e,o;(o=(e=m.value)==null?void 0:e.focus)==null||o.call(e)};return oe(()=>{m.value.checked=s.value}),ce({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-switch",ref:"https://element-plus.org/en-US/component/switch.html"},d(()=>!!t.label)),q({focus:X,checked:s}),(e,o)=>(i(),v("div",{class:u(a($)),onClick:fe(D,["prevent"])},[E("input",{id:a(Q),ref_key:"input",ref:m,class:u(a(n).e("input")),type:"checkbox",role:"switch","aria-checked":a(s),"aria-disabled":a(I),"aria-label":e.label||e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(I),tabindex:e.tabindex,onChange:g,onKeydown:re(D,["enter"])},null,42,ke),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(i(),v("span",{key:0,class:u(a(H))},[e.inactiveIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(b(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(i(),v("span",{key:1,"aria-hidden":a(s)},C(e.inactiveText),9,we)):r("v-if",!0)],2)):r("v-if",!0),E("span",{ref_key:"core",ref:_,class:u(a(n).e("core")),style:ve(a(W))},[e.inlinePrompt?(i(),v("div",{key:0,class:u(a(n).e("inner"))},[e.activeIcon||e.inactiveIcon?(i(),c(a(h),{key:0,class:u(a(n).is("icon"))},{default:p(()=>[(i(),c(b(a(s)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(i(),v("span",{key:1,class:u(a(n).is("text")),"aria-hidden":!a(s)},C(a(s)?e.activeText:e.inactiveText),11,Ve)):r("v-if",!0)],2)):r("v-if",!0),E("div",{class:u(a(n).e("action"))},[e.loading?(i(),c(a(h),{key:0,class:u(a(n).is("loading"))},{default:p(()=>[ue(a(de))]),_:1},8,["class"])):a(s)?O(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(b(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(s)?r("v-if",!0):O(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(b(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(i(),v("span",{key:1,class:u(a(R))},[e.activeIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(b(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(i(),v("span",{key:1,"aria-hidden":!a(s)},C(e.activeText),9,Se)):r("v-if",!0)],2)):r("v-if",!0)],10,ge))}});var Ce=pe(Ee,[["__file","switch.vue"]]);const Pe=be(Ce);export{Pe as E};
