var r=Object.defineProperty;var f=(t,a,e)=>a in t?r(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e;var l=(t,a,e)=>(f(t,typeof a!="symbol"?a+"":a,e),e);import{r as o,$ as p}from"./entry.68178e43.js";function z(t){let a=o(new d),e=o([]);function u(g={}){return a.value.loading=!0,p.get(t,{...g,page:a.value.page,size:a.value.size}).then(i=>{var n,s;e.value=(n=i.data)==null?void 0:n.list,a.value.total=(s=i.data)==null?void 0:s.total}).finally(()=>{a.value.loading=!1})}return{pagation:a,list:e,getList:u}}class d{constructor(){l(this,"page",1);l(this,"size",10);l(this,"total",0);l(this,"loading",!1)}}export{z as default};
