import{az as r,a as u,r as f,$ as h,l as o,m as c,ah as v,ai as m,C as _,k as a,W as S,t as b,x as g,y as k}from"./entry.3d29806f.js";import{_ as x}from"./_plugin-vue_export-helper.c27b6911.js";const y=e=>(g("data-v-258bfb7c"),e=e(),k(),e),C={class:"left-side"},I={class:"other-topics"},B=y(()=>c("div",{class:"title"},"主题列表",-1)),$={class:"list"},z=["onClick"],L={__name:"leftSide",setup(e){const n=r(),p=u();let i=f([]);d();function d(){h.get("/api/topic").then(t=>{i.value=t==null?void 0:t.data})}function l(t){p.replace("/topic/"+t)}return(t,R)=>(a(),o("div",C,[c("div",I,[B,c("div",$,[(a(!0),o(v,null,m(_(i),s=>(a(),o("div",{class:S(["topic",s._id==_(n).params.id&&"active"]),onClick:T=>l(s._id)},b(s.name),11,z))),256))])])]))}},D=x(L,[["__scopeId","data-v-258bfb7c"]]);export{D as default};
