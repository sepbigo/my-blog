import{$ as o}from"./entry.3d29806f.js";function e(p,n){let a=new FormData;return a.append("image",p),a.append("dir",n),o.post("/api/admin/file/upload",a).then(t=>t==null?void 0:t.data)}export{e as u};
