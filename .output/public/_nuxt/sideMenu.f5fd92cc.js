import{a as _,aQ as m,c as y,l as o,m as a,W as h,F as d,ad as f,ae as v,k as n,T as k,t as b,x as g,y as x}from"./entry.01da0e6f.js";import{_ as S}from"./_plugin-vue_export-helper.c27b6911.js";const I=s=>(g("data-v-139d09ba"),s=s(),x(),s),V={class:"side-menu"},C=["onClick"],M={class:"label"},B=I(()=>a("div",{class:"website-info"},[a("a",{href:"https://github.com/DingHui-Li/my-blog",target:"_blank"},"github")],-1)),L={__name:"sideMenu",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(s,{emit:i}){const u=s,l=_(),c=m().sideMenu;let r=y(()=>c.findIndex(e=>e.key==u.modelValue));function p(e){i("update:modelValue",e.key),e.path?l.push("/"+e.path+"#"+e.key):l.replace("/#"+e.key)}return(e,z)=>(n(),o("div",V,[a("div",{class:"active-box",style:h(`transform:translateY(${d(r)*50}px)`)},null,4),(n(!0),o(f,null,v(d(c),t=>(n(),o("div",{class:k(["item",t.key==s.modelValue&&"active"]),onClick:D=>p(t)},[a("div",M,b(t.label),1)],10,C))),256)),B]))}},E=S(L,[["__scopeId","data-v-139d09ba"]]);export{E as default};
