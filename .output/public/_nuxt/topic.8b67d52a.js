import{b as C}from"./el-message-box.611fb610.js";import{a as D,E as M,c as Y}from"./el-table.d8333751.js";import{c as w,E as F}from"./addTopic.447d344c.js";import{r as y,av as k,l as r,m as N,q as n,s as o,F as m,k as s,v as c,ad as V,ae as $,t as _,au as H,D as g,aw as I}from"./entry.01da0e6f.js";import"./el-tooltip.4ed993c7.js";import"./el-popper.a3907c73.js";import"./el-scrollbar.ce6aeb7f.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";import{E as q}from"./index.9dcb58fd.js";import"./index.70bb6539.js";import"./index.38034195.js";import"./_commonjsHelpers.725317a4.js";import"./el-form.9aef1c32.js";import"./vnode.0b279902.js";/* empty css                */import"./upload.db3d762e.js";import"./aria.bc8e8b0f.js";const A={class:"topic-list-page"},S={class:"actions"},W={key:0},j={key:3},z={__name:"topic",setup(G){let d=y();const v=[{label:"主题",key:"name"},{label:"封面",key:"cover"},{label:"创建时间",key:"createTime"}];let u=y([]);p();function p(){k.get("/api/topic").then(t=>{u.value=t==null?void 0:t.data})}function E(t,l){d.value.open(t)}function b(t,l){q.confirm("是否删除","Warning",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(()=>{k.delete("/api/admin/topic/"+t._id).then(i=>{I({message:"删除成功",type:"success"}),p()})})}return(t,l)=>{const i=C,h=M,x=F,f=Y,T=D;return s(),r("div",A,[N("div",S,[n(m(w),{ref_key:"addDialogEl",ref:d,onConfirm:p},{default:o(()=>[n(i,{class:"btn",type:"primary",onClick:l[0]||(l[0]=e=>t.addFormDialog.show=!0)},{default:o(()=>[c("添加")]),_:1})]),_:1},512)]),n(T,{data:m(u),stripe:""},{default:o(()=>[(s(),r(V,null,$(v,e=>n(f,{prop:e.key,label:e.label},{default:o(({row:a})=>[e.key=="createTime"?(s(),r("span",W,_(m(H)(a.createTime).format("YYYY-MM-DD HH:mm")),1)):e.key=="name"?(s(),g(h,{key:1},{default:o(()=>[c(_(a.name),1)]),_:2},1024)):e.key=="cover"?(s(),g(x,{key:2,style:{width:"30px"},"preview-teleported":!0,src:a.cover,"preview-src-list":[a.cover]},null,8,["src","preview-src-list"])):(s(),r("span",j,_(a[e.key]),1))]),_:2},1032,["prop","label"])),64)),n(f,null,{default:o(({row:e,$index:a})=>[n(i,{type:"danger",text:"",onClick:B=>b(e,a)},{default:o(()=>[c("删除")]),_:2},1032,["onClick"]),n(i,{type:"primary",text:"",onClick:B=>E(e,a)},{default:o(()=>[c("编辑")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}}},re=L(z,[["__scopeId","data-v-555aa7e6"]]);export{re as default};
