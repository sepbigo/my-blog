import{z as h,r as m,c as u,b as f,l as d,m as s,v as o,t as i,A as e,ag as I,ah as b,B as y,k as _,V as g,x,y as S}from"./entry.68178e43.js";import{_ as B}from"./_plugin-vue_export-helper.c27b6911.js";const t=l=>(x("data-v-78121d0d"),l=l(),S(),l),D={class:"life-page"},k=t(()=>s("div",{class:"title"},"人生不过30000天，如白驹过隙，请及时行乐",-1)),T={class:"title"},V={class:"num"},w=t(()=>s("span",null,"岁了",-1)),N=t(()=>s("div",{class:"text"},"存在于世界上",-1)),z={class:"detail"},C={class:"item"},F=t(()=>s("div",{class:"label"},"年",-1)),A={class:"item"},E=t(()=>s("div",{class:"label"},"月",-1)),L={class:"item"},U=t(()=>s("div",{class:"label"},"天",-1)),j={class:"item"},q=t(()=>s("div",{class:"label"},"小时",-1)),G={class:"item"},H=t(()=>s("div",{class:"label"},"分钟",-1)),J={class:"item"},K=t(()=>s("div",{class:"label"},"秒",-1)),M={key:0,class:"table"},O=365*80,P={__name:"life",setup(l){const n=h(),r=new Date(n.globalSetting.profile.birthday);let a=m(0),v=setInterval(()=>{a.value=(new Date().getTime()-r.getTime())/1e3},1e3),c=u(()=>a.value/86400);return f(()=>{clearInterval(v)}),(Q,R)=>(_(),d("div",D,[k,s("div",T,[o("现在已经"),s("div",V,i((e(c)/365).toFixed(8)),1),w]),N,s("div",z,[s("div",C,[o(i(parseInt(e(a)/(86400*365)))+" ",1),F]),s("div",A,[o(i(parseInt(e(a)/86400/30))+" ",1),E]),s("div",L,[o(i(parseInt(e(a)/86400))+" ",1),U]),s("div",j,[o(i(parseInt(e(a)/3600))+" ",1),q]),s("div",G,[o(i(parseInt(e(a)/60))+" ",1),H]),s("div",J,[o(i(parseInt(e(a)))+" ",1),K])]),e(c)?(_(),d("div",M,[(_(),d(I,null,b(O,p=>s("div",{class:g(["cell",p<e(c)&&"gone"])},null,2)),64))])):y("",!0)]))}},Y=B(P,[["__scopeId","data-v-78121d0d"]]);export{Y as default};
