import{aq as be,S as V,a9 as ye,_ as Ce,d as Ee,K as he,bQ as Be,bR as we,c as w,r as M,Q as Me,bS as Y,bm as x,B as _,o as ke,b as Se,R as Te,f as k,k as c,I as g,s as m,T as H,q as C,m as p,W as r,Z as ee,X as L,l as K,J as P,D as S,t as R,aj as D,V as Ie,v as N,U as q,ag as Ae,a4 as Re,aa as le,bT as re,bU as ie,ba as ne,a8 as Ve,a5 as $e,a2 as se,bf as oe}from"./entry.3d29806f.js";import{b as Oe,E as ze}from"./el-overlay.3a158f75.js";import{E as Le,u as Pe,a as De,b as Ue}from"./index.1bf93ed5.js";import{o as te}from"./aria.bc8e8b0f.js";import{E as Fe}from"./index.df728e16.js";const He=e=>["",...be].includes(e),j="_trap-focus-children",E=[],ae=e=>{if(E.length===0)return;const n=E[E.length-1][j];if(n.length>0&&e.code===ye.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const a=e.shiftKey,i=e.target===n[0],l=e.target===n[n.length-1];i&&a&&(e.preventDefault(),n[n.length-1].focus()),l&&!a&&(e.preventDefault(),n[0].focus())}},Ke={beforeMount(e){e[j]=te(e),E.push(e),E.length<=1&&document.addEventListener("keydown",ae)},updated(e){V(()=>{e[j]=te(e)})},unmounted(){E.shift(),E.length===0&&document.removeEventListener("keydown",ae)}},Ne=Ee({name:"ElMessageBox",directives:{TrapFocus:Ke},components:{ElButton:Oe,ElFocusTrap:Fe,ElInput:ze,ElOverlay:Le,ElIcon:he,...Be},inheritAttrs:!1,props:{buttonSize:{type:String,validator:He},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:a,zIndex:i,ns:l,size:o}=we("message-box",w(()=>e.buttonSize)),{t:d}=a,{nextZIndex:f}=i,y=M(!1),s=Me({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:f()}),U=w(()=>{const t=s.type;return{[l.bm("icon",t)]:t&&Y[t]}}),F=x(),u=x(),ue=w(()=>s.icon||Y[s.type]||""),de=w(()=>!!s.message),h=M(),G=M(),I=M(),O=M(),X=M(),ce=w(()=>s.confirmButtonClass);_(()=>s.inputValue,async t=>{await V(),e.boxType==="prompt"&&t!==null&&W()},{immediate:!0}),_(()=>y.value,t=>{var v,B;t&&(e.boxType!=="prompt"&&(s.autofocus?I.value=(B=(v=X.value)==null?void 0:v.$el)!=null?B:h.value:I.value=h.value),s.zIndex=f()),e.boxType==="prompt"&&(t?V().then(()=>{var J;O.value&&O.value.$el&&(s.autofocus?I.value=(J=ve())!=null?J:h.value:I.value=h.value)}):(s.editorErrorMessage="",s.validateError=!1))});const fe=w(()=>e.draggable);Pe(h,G,fe),ke(async()=>{await V(),e.closeOnHashChange&&window.addEventListener("hashchange",A)}),Se(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",A)});function A(){y.value&&(y.value=!1,V(()=>{s.action&&n("action",s.action)}))}const Q=()=>{e.closeOnClickModal&&z(s.distinguishCancelAndClose?"close":"cancel")},me=Ue(Q),pe=t=>{if(s.inputType!=="textarea")return t.preventDefault(),z("confirm")},z=t=>{var v;e.boxType==="prompt"&&t==="confirm"&&!W()||(s.action=t,s.beforeClose?(v=s.beforeClose)==null||v.call(s,t,s,A):A())},W=()=>{if(e.boxType==="prompt"){const t=s.inputPattern;if(t&&!t.test(s.inputValue||""))return s.editorErrorMessage=s.inputErrorMessage||d("el.messagebox.error"),s.validateError=!0,!1;const v=s.inputValidator;if(typeof v=="function"){const B=v(s.inputValue);if(B===!1)return s.editorErrorMessage=s.inputErrorMessage||d("el.messagebox.error"),s.validateError=!0,!1;if(typeof B=="string")return s.editorErrorMessage=B,s.validateError=!0,!1}}return s.editorErrorMessage="",s.validateError=!1,!0},ve=()=>{const t=O.value.$refs;return t.input||t.textarea},Z=()=>{z("close")},ge=()=>{e.closeOnPressEscape&&Z()};return e.lockScroll&&De(y),{...Te(s),ns:l,overlayEvent:me,visible:y,hasMessage:de,typeClass:U,contentId:F,inputId:u,btnSize:o,iconComponent:ue,confirmButtonClasses:ce,rootRef:h,focusStartRef:I,headerRef:G,inputRef:O,confirmRef:X,doClose:A,handleClose:Z,onCloseRequested:ge,handleWrapperClick:Q,handleInputEnter:pe,handleAction:z,t:d}}}),qe=["aria-label","aria-describedby"],je=["aria-label"],Ge=["id"];function Xe(e,n,a,i,l,o){const d=k("el-icon"),f=k("close"),y=k("el-input"),s=k("el-button"),U=k("el-focus-trap"),F=k("el-overlay");return c(),g(Ae,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=u=>e.$emit("vanish")),persisted:""},{default:m(()=>[H(C(F,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:m(()=>[p("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:r(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...u)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...u)),onMousedown:n[9]||(n[9]=(...u)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...u)),onMouseup:n[10]||(n[10]=(...u)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...u))},[C(U,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:m(()=>[p("div",{ref:"rootRef",class:r([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:ee(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=L(()=>{},["stop"]))},[e.title!==null&&e.title!==void 0?(c(),K("div",{key:0,ref:"headerRef",class:r(e.ns.e("header"))},[p("div",{class:r(e.ns.e("title"))},[e.iconComponent&&e.center?(c(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(c(),g(P(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),p("span",null,R(e.title),1)],2),e.showClose?(c(),K("button",{key:0,type:"button",class:r(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=D(L(u=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"]))},[C(d,{class:r(e.ns.e("close"))},{default:m(()=>[C(f)]),_:1},8,["class"])],42,je)):S("v-if",!0)],2)):S("v-if",!0),p("div",{id:e.contentId,class:r(e.ns.e("content"))},[p("div",{class:r(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(c(),g(d,{key:0,class:r([e.ns.e("status"),e.typeClass])},{default:m(()=>[(c(),g(P(e.iconComponent)))]),_:1},8,["class"])):S("v-if",!0),e.hasMessage?(c(),K("div",{key:1,class:r(e.ns.e("message"))},[Ie(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(c(),g(P(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(c(),g(P(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:m(()=>[N(R(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):S("v-if",!0)],2),H(p("div",{class:r(e.ns.e("input"))},[C(y,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=u=>e.inputValue=u),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:r({invalid:e.validateError}),onKeydown:D(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),p("div",{class:r(e.ns.e("errormsg")),style:ee({visibility:e.editorErrorMessage?"visible":"hidden"})},R(e.editorErrorMessage),7)],2),[[q,e.showInput]])],10,Ge),p("div",{class:r(e.ns.e("btns"))},[e.showCancelButton?(c(),g(s,{key:0,loading:e.cancelButtonLoading,class:r([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=u=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=D(L(u=>e.handleAction("cancel"),["prevent"]),["enter"]))},{default:m(()=>[N(R(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","class","round","size"])):S("v-if",!0),H(C(s,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:r([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=u=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=D(L(u=>e.handleAction("confirm"),["prevent"]),["enter"]))},{default:m(()=>[N(R(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","class","round","disabled","size"]),[[q,e.showConfirmButton]])],2)],6)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,qe)]),_:3},8,["z-index","overlay-class","mask"]),[[q,e.visible]])]),_:3})}var Qe=Ce(Ne,[["render",Xe],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const $=new Map,We=e=>{let n=document.body;return e.appendTo&&(le(e.appendTo)&&(n=document.querySelector(e.appendTo)),oe(e.appendTo)&&(n=e.appendTo),oe(n)||(n=document.body)),n},Ze=(e,n,a=null)=>{const i=C(Qe,e,se(e.message)||re(e.message)?{default:se(e.message)?e.message:()=>e.message}:null);return i.appContext=a,ie(i,n),We(e).appendChild(n.firstElementChild),i.component},Je=()=>document.createElement("div"),Ye=(e,n)=>{const a=Je();e.onVanish=()=>{ie(null,a),$.delete(l)},e.onAction=o=>{const d=$.get(l);let f;e.showInput?f={value:l.inputValue,action:o}:f=o,e.callback?e.callback(f,i.proxy):o==="cancel"||o==="close"?e.distinguishCancelAndClose&&o!=="cancel"?d.reject("close"):d.reject("cancel"):d.resolve(f)};const i=Ze(e,a,n),l=i.proxy;for(const o in e)ne(e,o)&&!ne(l.$props,o)&&(l[o]=e[o]);return l.visible=!0,l};function T(e,n=null){if(!Re)return Promise.reject();let a;return le(e)||re(e)?e={message:e}:a=e.callback,new Promise((i,l)=>{const o=Ye(e,n??T._context);$.set(o,{options:e,callback:a,resolve:i,reject:l})})}const xe=["alert","confirm","prompt"],_e={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};xe.forEach(e=>{T[e]=en(e)});function en(e){return(n,a,i,l)=>{let o="";return Ve(a)?(i=a,o=""):$e(a)?o="":o=a,T(Object.assign({title:o,message:n,type:"",..._e[e]},i,{boxType:e}),l)}}T.close=()=>{$.forEach((e,n)=>{n.doClose()}),$.clear()};T._context=null;const b=T;b.install=e=>{b._context=e._context,e.config.globalProperties.$msgbox=b,e.config.globalProperties.$messageBox=b,e.config.globalProperties.$alert=b.alert,e.config.globalProperties.$confirm=b.confirm,e.config.globalProperties.$prompt=b.prompt};const ln=b;export{ln as E,He as i};
