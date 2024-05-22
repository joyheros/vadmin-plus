import{d as R,u as Q,k as P,bV as W,A as m,cQ as Z,c as f,e as T,l as k,f as r,n as t,g as e,t as _,Y as w,w as n,m as F,q as G,E as H,Z as L,C as N,_ as z,cR as X,a7 as x,T as ee,a as oe,r as S,p as se,W as ae,a8 as le,a9 as te,aa as ne,bU as re,a3 as ie,ac as de,ad as ce,cS as fe,s as ue}from"./index-BFIPRRcq.js";import{b as pe,c as ge,d as ve,a as me,u as be}from"./use-dialog-l7A8RiK6.js";import{c as ye}from"./refs-JjLydQ47.js";const q=Symbol("dialogInjectionKey"),Ce=["aria-level"],he=["aria-label"],ke=["id"],we=R({name:"ElDialogContent"}),Re=R({...we,props:pe,emits:ge,setup(E){const l=E,{t:u}=Q(),{Close:$}=X,{dialogRef:i,headerRef:p,bodyId:A,ns:s,style:g}=P(q),{focusTrapRef:b}=P(W),y=m(()=>[s.b(),s.is("fullscreen",l.fullscreen),s.is("draggable",l.draggable),s.is("align-center",l.alignCenter),{[s.m("center")]:l.center}]),D=ye(b,i),I=m(()=>l.draggable),C=m(()=>l.overflow);return Z(i,p,I,C),(a,h)=>(f(),T("div",{ref:e(D),class:t(e(y)),style:N(e(g)),tabindex:"-1"},[k("header",{ref_key:"headerRef",ref:p,class:t([e(s).e("header"),{"show-close":a.showClose}])},[r(a.$slots,"header",{},()=>[k("span",{role:"heading","aria-level":a.ariaLevel,class:t(e(s).e("title"))},_(a.title),11,Ce)]),a.showClose?(f(),T("button",{key:0,"aria-label":e(u)("el.dialog.close"),class:t(e(s).e("headerbtn")),type:"button",onClick:h[0]||(h[0]=B=>a.$emit("close"))},[w(e(H),{class:t(e(s).e("close"))},{default:n(()=>[(f(),F(G(a.closeIcon||e($))))]),_:1},8,["class"])],10,he)):L("v-if",!0)],2),k("div",{id:e(A),class:t(e(s).e("body"))},[r(a.$slots,"default")],10,ke),a.$slots.footer?(f(),T("footer",{key:0,class:t(e(s).e("footer"))},[r(a.$slots,"footer")],2)):L("v-if",!0)],6))}});var Ee=z(Re,[["__file","dialog-content.vue"]]);const $e=["aria-label","aria-labelledby","aria-describedby"],Ae=R({name:"ElDialog",inheritAttrs:!1}),De=R({...Ae,props:ve,emits:me,setup(E,{expose:l}){const u=E,$=x();ee({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},m(()=>!!$.title));const i=oe("dialog"),p=S(),A=S(),s=S(),{visible:g,titleId:b,bodyId:y,style:D,overlayDialogStyle:I,rendered:C,zIndex:a,afterEnter:h,afterLeave:B,beforeLeave:K,handleClose:M,onModalClick:O,onOpenAutoFocus:V,onCloseAutoFocus:j,onCloseRequested:U,onFocusoutPrevented:Y}=be(u,p);se(q,{dialogRef:p,headerRef:A,bodyId:y,ns:i,rendered:C,style:D});const d=fe(O),J=m(()=>u.draggable&&!u.fullscreen);return l({visible:g,dialogContentRef:s}),(o,c)=>(f(),F(ce,{to:o.appendTo,disabled:o.appendTo!=="body"?!1:!o.appendToBody},[w(de,{name:"dialog-fade",onAfterEnter:e(h),onAfterLeave:e(B),onBeforeLeave:e(K),persisted:""},{default:n(()=>[ae(w(e(le),{"custom-mask-event":"",mask:o.modal,"overlay-class":o.modalClass,"z-index":e(a)},{default:n(()=>[k("div",{role:"dialog","aria-modal":"true","aria-label":o.title||void 0,"aria-labelledby":o.title?void 0:e(b),"aria-describedby":e(y),class:t(`${e(i).namespace.value}-overlay-dialog`),style:N(e(I)),onClick:c[0]||(c[0]=(...v)=>e(d).onClick&&e(d).onClick(...v)),onMousedown:c[1]||(c[1]=(...v)=>e(d).onMousedown&&e(d).onMousedown(...v)),onMouseup:c[2]||(c[2]=(...v)=>e(d).onMouseup&&e(d).onMouseup(...v))},[w(e(te),{loop:"",trapped:e(g),"focus-start-el":"container",onFocusAfterTrapped:e(V),onFocusAfterReleased:e(j),onFocusoutPrevented:e(Y),onReleaseRequested:e(U)},{default:n(()=>[e(C)?(f(),F(Ee,ne({key:0,ref_key:"dialogContentRef",ref:s},o.$attrs,{center:o.center,"align-center":o.alignCenter,"close-icon":o.closeIcon,draggable:e(J),overflow:o.overflow,fullscreen:o.fullscreen,"show-close":o.showClose,title:o.title,"aria-level":o.headerAriaLevel,onClose:e(M)}),re({header:n(()=>[o.$slots.title?r(o.$slots,"title",{key:1}):r(o.$slots,"header",{key:0,close:e(M),titleId:e(b),titleClass:e(i).e("title")})]),default:n(()=>[r(o.$slots,"default")]),_:2},[o.$slots.footer?{name:"footer",fn:n(()=>[r(o.$slots,"footer")])}:void 0]),1040,["center","align-center","close-icon","draggable","overflow","fullscreen","show-close","title","aria-level","onClose"])):L("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,$e)]),_:3},8,["mask","overlay-class","z-index"]),[[ie,e(g)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["to","disabled"]))}});var Ie=z(De,[["__file","dialog.vue"]]);const Le=ue(Ie);export{Le as E};
