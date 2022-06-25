import{r as K,c as g,a as p,o as i,b as c,d as n,e as v,F as S,S as j,f as T,M as P,C as E,w as h,v as w,n as y,g as I,t as u,h as k,i as q,p as C,j as A,k as W,l as G,m as Y,q as Q,s as J,u as X,x as L,y as Z,z as ee,A as te}from"./vendor.db03cf4b.js";const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}};oe();const d=K({user:{},account:{},arrangement:null,flowers:[]});var b=(r,e)=>{for(const[t,o]of e)r[t]=o;return r};const ne={name:"App",setup(){return{appState:g(()=>d)}}},re=n("header",null,null,-1),se=n("footer",null,null,-1);function ae(r,e,t,o,a,l){const s=p("router-view");return i(),c(S,null,[re,n("main",null,[v(s)]),se],64)}var le=b(ne,[["render",ae]]);class f{static async confirm(e="Are you sure?",t="You won't be able to revert this!",o="warning",a="Yes, delete it!"){try{return!!(await j.fire({title:e,text:t,icon:o,showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:a})).isConfirmed}catch{return!1}}static toast(e="Warning!",t="warning",o="top-end",a=3e3,l=!0){j.fire({title:e,icon:t,position:o,timer:a,timerProgressBar:l,toast:!0,showConfirmButton:!1})}static error(e){var t;if(e.isAxiosError){const{response:o}=e;this.toast(((t=o.data.error)==null?void 0:t.message)||o.data.message,"error")}else this.toast(e.message||e,"error")}static success(e="Success!"){this.toast(e,"success")}}const M=window.location.origin.includes("localhost"),N=M?"http://localhost:3000":"";function x(r,e){if(M)console[r](`[${r}] :: ${new Date().toLocaleTimeString()} :: `,...e);else{switch(r){case"log":case"assert":return}console[r](`[${r}] :: ${new Date().toLocaleTimeString()} :: `,...e)}}const _={log(){x("log",arguments)},error(){x("error",arguments)},warn(){x("warn",arguments)},assert(){x("assert",arguments)},trace(){x("trace",arguments)}};class ie{createArrangement(e){d.arrangement=e}clear(){d.arrangement=null,d.flowers=[]}}const D=new ie,ce={setup(){const r=T({budget:null,labor:.75});return{editable:r,createArrangement(){try{D.clear(),D.createArrangement(r.value),r.value={budget:null,labor:.75},P.getOrCreateInstance("#arrangement-modal").hide()}catch(e){_.error(e),f.toast(e.message,"error")}},adjustLabor(e){r.value.labor=e,_.log(r.value.labor)},toggleDropdown(e){try{const t=E.getInstance("#budget-input");t&&t.hide();const o=E.getInstance("#labor-input");o&&o.hide(),E.getOrCreateInstance(e).toggle()}catch(t){_.error(t),f.toast(t.message,"error")}}}}},de={class:"modal-body"},ue=n("label",{for:"vase",class:"form-label fst-italic"},"Vase Price...",-1),_e={class:"input-group mb-3"},me=n("span",{class:"input-group-text"},"$",-1),be={class:"d-flex justify-content-between"},fe={class:"collapse",id:"budget-input"},ge={class:"mb-3 input-group"},pe=n("span",{class:"input-group-text"},"$",-1),ve={class:"collapse",id:"labor-input"},he={class:"d-flex justify-content-between mb-3"},we=n("div",{class:"modal-footer"},[n("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close "),n("button",{type:"submit",class:"btn btn-primary"},"Save")],-1);function ye(r,e,t,o,a,l){return i(),c("form",{onSubmit:e[7]||(e[7]=I((...s)=>o.createArrangement&&o.createArrangement(...s),["prevent"]))},[n("div",de,[ue,n("div",_e,[me,h(n("input",{type:"number",class:"form-control",step:"0.01",min:"0.01","aria-label":"Amount (to the nearest dollar)","onUpdate:modelValue":e[0]||(e[0]=s=>o.editable.vasePrice=s),required:"",id:"vase","aria-describedby":"vase-price"},null,512),[[w,o.editable.vasePrice]])]),n("div",be,[n("button",{class:"btn btn-primary mb-3",type:"button",onClick:e[1]||(e[1]=s=>o.toggleDropdown("#budget-input")),"aria-expanded":"false"}," Budget? "),n("button",{class:"btn btn-primary mb-3",type:"button",onClick:e[2]||(e[2]=s=>o.toggleDropdown("#labor-input")),"aria-expanded":"false"}," Adjust Labor? ")]),n("div",fe,[n("div",ge,[pe,h(n("input",{type:"number",step:"0.01",class:"form-control",id:"budget",placeholder:"Budget...","onUpdate:modelValue":e[3]||(e[3]=s=>o.editable.budget=s)},null,512),[[w,o.editable.budget]])])]),n("div",ve,[n("div",he,[n("button",{type:"button",class:y(`btn btn-${o.editable.labor==.8?"success":"outline-dark"}`),onClick:e[4]||(e[4]=s=>o.adjustLabor(.8))}," 20% ",2),n("button",{type:"button",class:y(`btn btn-${o.editable.labor==.75?"success":"outline-dark"}`),onClick:e[5]||(e[5]=s=>o.adjustLabor(.75))}," 25% ",2),n("button",{type:"button",class:y(`btn btn-${o.editable.labor==.7?"success":"outline-dark"}`),onClick:e[6]||(e[6]=s=>o.adjustLabor(.7))}," 30% ",2)])])]),we],32)}var xe=b(ce,[["render",ye]]),$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe});function Se(){return(new Date().getTime()/1e3|0).toString(16)+"xxxxxxxxxxxxxxxx".replace(/[x]/g,()=>(Math.random()*16|0).toString(16)).toLowerCase()}class ke{create(e){e.id=Se(),d.flowers.unshift(e)}remove(e){d.flowers=d.flowers.filter(t=>t.id!==e)}edit(e,t){let o=d.flowers.find(a=>a.id==e);t?o.quantity++:!t&&o.quantity>1&&o.quantity--}}const F=new ke,Ce={props:{flower:{type:Object,required:!0},total:{type:String,required:!0}},setup(r){return{arrangement:g(()=>d.arrangement),editFlower(e){try{F.edit(r.flower.id,e)}catch(t){_.error(t),f.toast(t.message,"error")}},async removeFlower(){if(await f.confirm())try{F.remove(r.flower.id),P.getOrCreateInstance("#edit-flower-modal-"+r.flower.id).hide(),f.toast(`${r.flower.name} removed.`,"warning","bottom-end")}catch(e){_.error(e),f.toast(e.message,"error")}}}}},Ae={class:"modal-body"},Ee={class:"d-flex justify-content-between mb-3"},qe={class:"d-flex justify-content-between align-items-center"},Fe=n("i",{class:"mdi mdi-minus"},null,-1),Oe=[Fe],je={class:"fs-3 mx-3"},Te=n("i",{class:"mdi mdi-plus"},null,-1),Pe=[Te],Ie={class:"modal-footer d-flex justify-content-between"},Le=n("button",{class:"btn btn-success text-light","data-bs-dismiss":"modal"}," Save ",-1);function Me(r,e,t,o,a,l){return i(),c(S,null,[n("div",Ae,[n("div",Ee,[n("span",null,u(o.arrangement.budget?"Budget:":"Total:"),1),n("span",{class:y(["fw-bold",{"text-danger":o.arrangement.budget&&t.total<0}])},"$"+u(t.total),3)]),n("div",qe,[n("span",null,u(t.flower.name)+": $"+u(t.flower.price.toFixed(2))+" each",1),n("span",null,[n("button",{class:"btn btn-warning",onClick:e[0]||(e[0]=s=>o.editFlower(!1))},Oe),n("span",je,u(t.flower.quantity),1),n("button",{class:"btn btn-warning",onClick:e[1]||(e[1]=s=>o.editFlower(!0))},Pe)])])]),n("div",Ie,[n("button",{class:"btn btn-outline-danger",onClick:e[2]||(e[2]=s=>o.removeFlower())}," Delete "),Le])],64)}var Ne=b(Ce,[["render",Me]]),De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ne});const Be={props:{flower:{type:Object,required:!0},total:{type:String,required:!0}},setup(){return{}}},Ve=["data-bs-target"],ze={class:"d-flex align-items-center"},He=q("Edit Flower");function Ue(r,e,t,o,a,l){const s=p("EditFlower"),m=p("Modal");return i(),c(S,null,[n("div",{class:"d-flex justify-content-between align-items-center text-dark mx-1 mb-3 selectable","data-bs-toggle":"modal","data-bs-target":"#edit-flower-modal-"+t.flower.id},[n("span",ze,u(t.flower.quantity)+" "+u(t.flower.name)+":",1),n("span",null,"$ "+u((t.flower.price*t.flower.quantity).toFixed(2)),1)],8,Ve),v(m,{id:"edit-flower-modal-"+t.flower.id},{"modal-header":k(()=>[He]),"modal-body":k(()=>[v(s,{flower:t.flower,total:t.total},null,8,["flower","total"])]),_:1},8,["id"])],64)}var Re=b(Be,[["render",Ue]]),Ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Re});const We={setup(){const r=T({});return{editable:r,createFlower(){try{F.create(r.value),f.toast(`Added ${r.value.name}`,"success","bottom"),r.value={}}catch(e){_.error(e),f.toast(e.message,"error")}}}}},$=r=>(C("data-v-4d7d20ba"),r=r(),A(),r),Ge={class:"mb-3"},Ye=$(()=>n("label",{for:"name",class:"form-label fst-italic text-light"},[n("div",{class:"text-shadow"},"Flower Name...")],-1)),Qe={class:"mb-3 d-flex justify-content-between"},Je={class:"small-input"},Xe=$(()=>n("label",{for:"quantity",class:"form-label fst-italic text-light"},"Quantity...",-1)),Ze={class:"medium-input"},et=$(()=>n("label",{for:"price",class:"form-label fst-italic text-light"},"Price...",-1)),tt={class:"input-group"},ot=$(()=>n("span",{class:"input-group-text"},"$",-1)),nt=$(()=>n("div",{class:"d-flex justify-content-end mt-3"},[n("button",{class:"btn btn-success text-light border border-light fs-3"},[n("i",{class:"mdi mdi-plus"})])],-1));function rt(r,e,t,o,a,l){return i(),c("form",{class:"px-2",onSubmit:e[3]||(e[3]=I(s=>o.createFlower(),["prevent"]))},[n("div",Ge,[Ye,h(n("input",{type:"text",class:"form-control",id:"name","aria-describedby":"flower-name","onUpdate:modelValue":e[0]||(e[0]=s=>o.editable.name=s),required:""},null,512),[[w,o.editable.name]])]),n("div",Qe,[n("div",Je,[Xe,h(n("input",{type:"number",min:"1",class:"form-control",id:"quantity",step:"0.01","aria-describedby":"flower-quantity","onUpdate:modelValue":e[1]||(e[1]=s=>o.editable.quantity=s),required:""},null,512),[[w,o.editable.quantity]])]),n("div",Ze,[et,n("div",tt,[ot,h(n("input",{type:"number",step:"0.01",min:"0.01",class:"form-control",id:"price","aria-describedby":"flower-price","onUpdate:modelValue":e[2]||(e[2]=s=>o.editable.price=s),required:""},null,512),[[w,o.editable.price]])])])]),nt],32)}var st=b(We,[["render",rt],["__scopeId","data-v-4d7d20ba"]]),at=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:st});const lt="modulepreload",B={},it="/",ct=function(e,t){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=`${it}${o}`,o in B)return;B[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${l}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":lt,a||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),a)return new Promise((m,R)=>{s.addEventListener("load",m),s.addEventListener("error",R)})})).then(()=>e())};function dt(r){switch(r){case"./pages/HomePage.vue":return ct(()=>import("./HomePage.78d15e7b.js"),["assets/HomePage.78d15e7b.js","assets/vendor.db03cf4b.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+r)))})}}function O(r){return()=>dt(`./pages/${r}.vue`)}const ut=[{path:"/",name:"Home",component:O("HomePage")},{path:"/about",name:"About",component:O("AboutPage")},{path:"/account",name:"Account",component:O("AccountPage"),beforeEnter:Y}],_t=W({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:G(),routes:ut});Q.create({baseURL:N,timeout:8e3});const mt={connection:"connection",connected:"connected",disconnect:"disconnect",authenticate:"authenticate",authenticated:"authenticated",userConnected:"userConnected",userDisconnected:"userDisconnected",error:"error"};class bt{constructor(e=!1,t=N){}on(e,t){var o;return(o=this.socket)==null||o.on(e,t.bind(this)),this}onConnected(e){_.log("[SOCKET_CONNECTION]",e),this.connected=!0,this.playback()}onAuthenticated(e){_.log("[SOCKET_AUTHENTICATED]",e),this.authenticated=!0,this.playback()}authenticate(e){var t;(t=this.socket)==null||t.emit(mt.authenticate,e)}onError(e){_.error("[SOCKET_ERROR]",e)}enqueue(e,t){_.log("[ENQUEING_ACTION]",{action:e,payload:t}),this.queue.push({action:e,payload:t})}playback(){_.log("[SOCKET_PLAYBACK]");const e=[...this.queue];this.queue=[],e.forEach(t=>{this.emit(t.action,t.payload)})}emit(e,t=void 0){if(this.requiresAuth&&!this.authenticated)return this.enqueue(e,t);if(!this.connected)return this.enqueue(e,t);this.socket.emit(e,t)}}class ft extends bt{constructor(){super();this.on("error",this.onError)}onError(e){f.toast(e.message,"error")}}new ft;const V=J({});const gt={setup(){return{user:g(()=>d.user),account:g(()=>d.account),async login(){V.loginWithPopup()},async logout(){V.logout({returnTo:window.location.origin})}}}},z=r=>(C("data-v-f7b5cf20"),r=r(),A(),r),pt={class:"navbar-text"},vt={key:1,class:"dropdown my-2 my-lg-0"},ht={class:"dropdown-toggle selectable","data-bs-toggle":"dropdown","aria-expanded":"false",id:"authDropdown"},wt={key:0},yt=["src"],xt={class:"mx-3 text-success lighten-30"},$t={class:"dropdown-menu p-0 list-group w-100","aria-labelledby":"authDropdown"},St=z(()=>n("div",{class:"list-group-item list-group-item-action hoverable"}," Manage Account ",-1)),kt=z(()=>n("i",{class:"mdi mdi-logout"},null,-1)),Ct=q(" logout "),At=[kt,Ct];function Et(r,e,t,o,a,l){const s=p("router-link");return i(),c("span",pt,[o.user.isAuthenticated?(i(),c("div",vt,[n("div",ht,[o.account.picture?(i(),c("div",wt,[n("img",{src:o.account.picture,alt:"account photo",height:"40",class:"rounded"},null,8,yt),n("span",xt,u(o.account.name),1)])):X("",!0)]),n("div",$t,[v(s,{to:{name:"Account"}},{default:k(()=>[St]),_:1}),n("div",{class:"list-group-item list-group-item-action hoverable text-danger",onClick:e[1]||(e[1]=(...m)=>o.logout&&o.logout(...m))},At)])])):(i(),c("button",{key:0,class:"btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0",onClick:e[0]||(e[0]=(...m)=>o.login&&o.login(...m))}," Login "))])}var qt=b(gt,[["render",Et],["__scopeId","data-v-f7b5cf20"]]),Ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qt});const Ot={setup(){return{}}},jt={class:"modal fade",tabindex:"-1","aria-hidden":"true"},Tt={class:"modal-dialog modal-dialog-centered"},Pt={class:"modal-content text-dark"},It={class:"modal-header"},Lt=n("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1);function Mt(r,e,t,o,a,l){return i(),c("div",jt,[n("div",Tt,[n("div",Pt,[n("div",It,[L(r.$slots,"modal-header",{class:"modal-title"}),Lt]),L(r.$slots,"modal-body")])])])}var Nt=b(Ot,[["render",Mt]]),Dt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nt});const Bt={setup(){return{}}},Vt=r=>(C("data-v-727d9c5e"),r=r(),A(),r),zt={class:"navbar navbar-expand-lg navbar-dark bg-warning px-3"},Ht=Vt(()=>n("div",{class:"d-flex flex-column align-items-center"},[n("h1",{class:"fw-bold fst-italic"},"Adoral")],-1));function Ut(r,e,t,o,a,l){const s=p("router-link");return i(),c("nav",zt,[v(s,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:k(()=>[Ht]),_:1})])}var Rt=b(Bt,[["render",Ut],["__scopeId","data-v-727d9c5e"]]),Kt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Rt});const Wt={props:{arrangement:{type:Object,required:!0}},setup(r){return{flowers:g(()=>d.flowers.sort((e,t)=>t.price-e.price)),total:g(()=>{let e=0;return r.arrangement.budget?(e=r.arrangement.budget,e-=r.arrangement.vasePrice,e*=r.arrangement.labor,d.flowers.forEach(t=>{e-=t.price*t.quantity})):(e+=r.arrangement.vasePrice,d.flowers.forEach(t=>{e+=t.price*t.quantity/r.arrangement.labor})),e.toFixed(2)})}}},H=r=>(C("data-v-ca03a92c"),r=r(),A(),r),Gt={class:"m-2 bg-glass border border-info rounded p-2 grow"},Yt={class:"d-flex justify-content-between text-dark border-bottom border-dark sticky-top mx-1 mb-3 fs-3"},Qt=H(()=>n("span",null,"Total:",-1)),Jt={key:0},Xt={key:1},Zt={class:"overflow"},eo={class:"d-flex justify-content-between text-dark mb-2 mx-1"},to=H(()=>n("span",null,"Vase:",-1));function oo(r,e,t,o,a,l){const s=p("Flower");return i(),c("div",Gt,[n("div",Yt,[Qt,t.arrangement.budget?(i(),c("span",Xt,[n("span",{class:y({"text-danger":o.total<0})}," $ "+u(o.total),3),q(" / $ "+u(t.arrangement.budget.toFixed(2)),1)])):(i(),c("span",Jt,"$ "+u(o.total),1))]),n("div",Zt,[n("div",eo,[to,n("span",null,"$ "+u(t.arrangement.vasePrice.toFixed(2)),1)]),(i(!0),c(S,null,Z(o.flowers,m=>(i(),ee(s,{key:m.id,flower:m,total:o.total},null,8,["flower","total"]))),128))])])}var no=b(Wt,[["render",oo],["__scopeId","data-v-ca03a92c"]]),ro=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:no});function so(r){Object.entries({"./components/ArrangementForm.vue":$e,"./components/EditFlower.vue":De,"./components/Flower.vue":Ke,"./components/FlowerForm.vue":at,"./components/Login.vue":Ft,"./components/Modal.vue":Dt,"./components/Navbar.vue":Kt,"./components/SaleStub.vue":ro}).forEach(([t,o])=>{const a=o.name||t.substr(t.lastIndexOf("/")+1).replace(/\.\w+$/,"");r.component(a,o.default)})}const U=te(le);so(U);U.use(_t).mount("#app");export{d as A,f as P,b as _,_ as l};
