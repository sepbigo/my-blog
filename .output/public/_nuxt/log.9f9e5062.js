import{r as v,$ as h,b as m,l as c,m as s,ah as g,ai as f,C as _,k as i,v as r,t as a,ax as p,x,y as I}from"./entry.3d29806f.js";import{_ as k}from"./_plugin-vue_export-helper.c27b6911.js";const y=e=>(x("data-v-a71d3889"),e=e(),I(),e),B={class:"log-page"},S=y(()=>s("div",{class:"title"},"访问日志",-1)),Y={class:"list"},D={class:"item"},H={class:"ip"},L={class:"url"},M={class:"time"},N={class:"ua"},V={__name:"log",setup(e){let n=v([]);d();let u=setInterval(()=>{d()},5e3);function d(){h.get("/api/log",{size:100}).then(o=>{var l;n.value=(l=o==null?void 0:o.data)==null?void 0:l.list})}return m(()=>{clearInterval(u)}),(o,l)=>(i(),c("div",B,[S,s("div",Y,[(i(!0),c(g,null,f(_(n),t=>(i(),c("div",D,[s("div",H,[r(a(t.ip),1),s("div",null,a(t.location),1)]),s("div",L,a(t.url),1),s("div",M,[r(a(_(p)(t.time).calendar()),1),s("div",null,a(_(p)(t.time).format("YYYY-MM-DD HH:mm:ss")),1)]),s("div",N,a(t.ua),1)]))),256))])]))}},w=k(V,[["__scopeId","data-v-a71d3889"]]);export{w as default};
