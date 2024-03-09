import{b as F,E as H}from"./el-overlay.3a158f75.js";import{az as K,a as W,r as _,o as X,$ as f,b as j,c as z,l as i,m as r,C as a,t as g,D as d,q as c,s as p,ah as w,ai as E,I,T as G,ak as Q,ay as Z,K as ee,k as o,ax as te,v as ae,W as V,aA as $,aB as le,aC as oe,aD as ie,X as se,x as ne,y as ce}from"./entry.3d29806f.js";import{_ as re}from"./RichEditor.44575774.js";import{c as de,E as ue}from"./addTopic.0df72023.js";/* empty css                */import{u as D}from"./upload.aee39f4c.js";import{_ as pe}from"./_plugin-vue_export-helper.c27b6911.js";import{E as _e}from"./index.0c464fb0.js";import"./index.df728e16.js";import"./index.38034195.js";import"./_commonjsHelpers.725317a4.js";import"./el-form.41378309.js";import"./debounce.1aac7b3c.js";import"./index.1bf93ed5.js";import"./vnode.54aebfc6.js";import"./aria.bc8e8b0f.js";const N=m=>(ne("data-v-ed081a34"),m=m(),ce(),m),me={class:"new-article"},he={class:"actions"},ve={key:0,class:"time"},fe={class:"container"},ge={class:"form-item"},ye=N(()=>r("div",{class:"label"},"类型",-1)),ke={class:"topics"},Ce=["onClick"],xe={key:0,class:"cover"},we=["src"],Ee={class:"form-item"},Ie=N(()=>r("div",{class:"label"},"标签",-1)),be={class:"topics"},Te=["onClick"],Me={class:"topic"},Se={key:1,class:"title"},Be={class:"content"},ze={key:0},Ve={key:2,class:"imgs"},$e={class:"item"},De={key:0,class:"loading"},Ne={key:0,class:"item"},qe={__name:"new",setup(m){const b=K(),q=W();let y=_(null),k=_(!1),e=_({cover:"",title:"",htmlContent:"",textContent:"",topics:[],type:"moment",imgs:[]}),h=_(),T=_([]),Y=[{label:"动态",key:"moment"},{label:"文章",key:"article"}];S();let C;X(()=>{if(b.query.id)f.get(`/api/article/${b.query.id}`).then(t=>{e.value=t.data});else{let t=window.localStorage["cache-article"]||"";if(t)try{e.value=JSON.parse(t),window.localStorage["cache-article"]=""}catch{}}C=setInterval(()=>{let t=B();t.textContent&&(h.value=new Date,t.cacheTime=h.value,window.localStorage["cache-article"]=JSON.stringify(t))},1e4)}),j(()=>{clearInterval(C)});let L=z(()=>{let t={};return e.value.topics.forEach(l=>{t[l._id]=!0}),t}),M=z(()=>e.value.type=="photo"?99:9);function S(){f.get("/api/topic").then(t=>{T.value=t==null?void 0:t.data})}function R(t){let l=e.value.topics.findIndex(n=>n._id==t._id);l>=0?e.value.topics.splice(l,1):e.value.topics.push(t)}function U(t){let l=t.target.files;l.length&&D(l[0],"article/cover").then(n=>{e.value.cover=n}),t.value=""}async function A(t){console.log(t);let l="photo";e.value.type=="photo"&&(l+=`/${e.value.title}`);for(let n=0;n<t.target.files.length&&!(e.value.imgs.length>M.value);n++){const u=t.target.files[n];await D(u,l).then(x=>{e.value.imgs.push(x)})}t.target.value=""}function B(){let t={...e.value,topics:e.value.topics.map(l=>l._id)};return e.value.type=="article"?(t.textContent=y.value.getPureText(),t.htmlContent=y.value.getHtmlContent()):t.textContent=e.value.htmlContent,t}function J(){k.value=!0;let t=B(),l;e.value._id?l=f.put("/api/admin/article",t):l=f.post("/api/admin/article",t),l.then(n=>{_e.alert("操作成功","提示",{confirmButtonText:"确定",callback:()=>{q.back()}})}).catch(n=>{Z.error((n==null?void 0:n.msg)||"未知错误")}).finally(()=>{clearInterval(C),window.localStorage["cache-article"]=null,k.value=!1})}return(t,l)=>{const n=F,u=ee,x=H,O=re,P=ue;return o(),i("div",me,[r("div",he,[a(h)?(o(),i("div",ve,g(a(te)(a(h)).format("YYYY MMMM Do, hh:mm:ss"))+"已缓存",1)):d("",!0),c(n,{class:"btn confirm",type:"primary",onClick:J,loading:a(k)},{default:p(()=>[ae(g(a(e)._id?"保存":"发布"),1)]),_:1},8,["loading"])]),r("div",fe,[r("div",ge,[ye,r("div",ke,[(o(!0),i(w,null,E(a(Y),s=>(o(),i("div",{class:V(["topic type",`${a(e).type==s.key&&"active"}`]),onClick:v=>a(e).type=s.key},g(s.label),11,Ce))),256))])]),a(e).type=="article"?(o(),i("div",xe,[a(e).cover?d("",!0):(o(),I(u,{key:0,size:"35"},{default:p(()=>[c(a($))]),_:1})),a(e).cover?(o(),i("img",{key:1,src:a(e).cover},null,8,we)):d("",!0),r("input",{type:"file",accept:"image/*",onChange:U,style:{position:"absolute",width:"100%",height:"100%",opacity:"0"}},null,32)])):d("",!0),r("div",Ee,[Ie,r("div",be,[(o(!0),i(w,null,E(a(T),s=>(o(),i("div",{class:V(["topic",a(L)[s._id]&&"active"]),onClick:v=>R(s)},g(s.name),11,Te))),256)),c(a(de),{onConfirm:S},{default:p(()=>[r("div",Me,[c(u,{size:"15"},{default:p(()=>[c(a(le))]),_:1})])]),_:1})])]),a(e).type=="article"?(o(),i("div",Se,[c(x,{class:"input",placeholder:"请输入文章标题",modelValue:a(e).title,"onUpdate:modelValue":l[0]||(l[0]=s=>a(e).title=s),maxlength:100,"show-word-limit":""},null,8,["modelValue"])])):d("",!0),r("div",Be,[a(e).type=="article"?(o(),i("div",ze,[c(O,{ref_key:"richEditorEl",ref:y,value:a(e).htmlContent},null,8,["value"])])):d("",!0),a(e).type=="moment"?G((o(),i("textarea",{key:1,class:"textarea","onUpdate:modelValue":l[1]||(l[1]=s=>a(e).htmlContent=s),placeholder:"内容",maxlength:"800"},null,512)),[[Q,a(e).htmlContent]]):d("",!0)]),a(e).type!="article"?(o(),i("div",Ve,[(o(!0),i(w,null,E(a(e).imgs,(s,v)=>(o(),i("div",$e,[s?(o(),I(P,{key:1,"preview-teleported":!0,"initial-index":v,style:{width:"100%",height:"100%"},fit:"cover",src:s+"?x-oss-process=image/resize,m_fill,w_400","preview-src-list":a(e).imgs},null,8,["initial-index","src","preview-src-list"])):(o(),i("div",De,[c(u,{class:"icon",size:"25"},{default:p(()=>[c(a(oe))]),_:1})])),s?(o(),I(u,{key:2,class:"clear",size:30,onClick:se(Ye=>a(e).imgs.splice(v,1),["stop"])},{default:p(()=>[c(a(ie))]),_:2},1032,["onClick"])):d("",!0)]))),256)),a(e).imgs.length<a(M)?(o(),i("div",Ne,[r("input",{class:"input",type:"file",multiple:"",accept:"image/*",onChange:A},null,32),c(u,{size:"20"},{default:p(()=>[c(a($))]),_:1})])):d("",!0)])):d("",!0)])])}}},et=pe(qe,[["__scopeId","data-v-ed081a34"]]);export{et as default};
