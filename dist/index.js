var Mt=Object.defineProperty;var It=(n,e,t)=>e in n?Mt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var S=(n,e,t)=>(It(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function R(){}function ft(n){return n()}function De(){return Object.create(null)}function P(n){n.forEach(ft)}function dt(n){return typeof n=="function"}function G(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Ut(n){return Object.keys(n).length===0}const Vt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function g(n,e){n.appendChild(e)}function zt(n,e,t){const s=Ft(n);if(!s.getElementById(e)){const i=y("style");i.id=e,i.textContent=t,jt(s,i)}}function Ft(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function jt(n,e){return g(n.head||n,e),e.sheet}function m(n,e,t){n.insertBefore(e,t||null)}function b(n){n.parentNode&&n.parentNode.removeChild(n)}function Ht(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function y(n){return document.createElement(n)}function z(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function F(n){return document.createTextNode(n)}function k(){return F(" ")}function bt(){return F("")}function C(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function l(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Kt(n){return Array.from(n.childNodes)}function pe(n,e){e=""+e,n.data!==e&&(n.data=e)}function W(n,e){n.value=e??""}function _e(n,e,t){n.classList.toggle(e,!!t)}function Yt(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let Q;function Y(n){Q=n}function pt(){if(!Q)throw new Error("Function called outside component initialization");return Q}function Jt(n){pt().$$.on_mount.push(n)}function Xt(n){pt().$$.on_destroy.push(n)}const I=[],Me=[];let V=[];const Ie=[],Qt=Promise.resolve();let ke=!1;function Gt(){ke||(ke=!0,Qt.then(E))}function ve(n){V.push(n)}const we=new Set;let M=0;function E(){if(M!==0)return;const n=Q;do{try{for(;M<I.length;){const e=I[M];M++,Y(e),Zt(e.$$)}}catch(e){throw I.length=0,M=0,e}for(Y(null),I.length=0,M=0;Me.length;)Me.pop()();for(let e=0;e<V.length;e+=1){const t=V[e];we.has(t)||(we.add(t),t())}V.length=0}while(I.length);for(;Ie.length;)Ie.pop()();ke=!1,we.clear(),Y(n)}function Zt(n){if(n.fragment!==null){n.update(),P(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(ve)}}function en(n){const e=[],t=[];V.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),V=e}const he=new Set;let q;function J(){q={r:0,c:[],p:q}}function X(){q.r||P(q.c),q=q.p}function v(n,e){n&&n.i&&(he.delete(n),n.i(e))}function A(n,e,t,s){if(n&&n.o){if(he.has(n))return;he.add(n),q.c.push(()=>{he.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}function Ue(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function ge(n){n&&n.c()}function Z(n,e,t){const{fragment:s,after_update:i}=n.$$;s&&s.m(e,t),ve(()=>{const r=n.$$.on_mount.map(ft).filter(dt);n.$$.on_destroy?n.$$.on_destroy.push(...r):P(r),n.$$.on_mount=[]}),i.forEach(ve)}function ee(n,e){const t=n.$$;t.fragment!==null&&(en(t.after_update),P(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function tn(n,e){n.$$.dirty[0]===-1&&(I.push(n),Gt(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function te(n,e,t,s,i,r,o=null,a=[-1]){const c=Q;Y(n);const u=n.$$={fragment:null,ctx:[],props:r,update:R,not_equal:i,bound:De(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:De(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let h=!1;if(u.ctx=t?t(n,e.props||{},(f,d,...x)=>{const p=x.length?x[0]:d;return u.ctx&&i(u.ctx[f],u.ctx[f]=p)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](p),h&&tn(n,f)),d}):[],u.update(),h=!0,P(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const f=Kt(e.target);u.fragment&&u.fragment.l(f),f.forEach(b)}else u.fragment&&u.fragment.c();e.intro&&v(n.$$.fragment),Z(n,e.target,e.anchor),E()}Y(c)}let _t;typeof HTMLElement=="function"&&(_t=class extends HTMLElement{constructor(e,t,s){super();S(this,"$$ctor");S(this,"$$s");S(this,"$$c");S(this,"$$cn",!1);S(this,"$$d",{});S(this,"$$r",!1);S(this,"$$p_d",{});S(this,"$$l",{});S(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,s&&this.attachShadow({mode:"open"})}addEventListener(e,t,s){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const i=this.$$c.$on(e,t);this.$$l_u.set(t,i)}super.addEventListener(e,t,s)}removeEventListener(e,t,s){if(super.removeEventListener(e,t,s),this.$$c){const i=this.$$l_u.get(t);i&&(i(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let a;return{c:function(){a=y("slot"),o!=="default"&&l(a,"name",o)},m:function(h,f){m(h,a,f)},d:function(h){h&&b(a)}}}};var e=t;if(await Promise.resolve(),!this.$$cn)return;const s={},i=Yt(this);for(const o of this.$$s)o in i&&(s[o]=[t(o)]);for(const o of this.attributes){const a=this.$$g_p(o.name);a in this.$$d||(this.$$d[a]=le(a,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:s,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const a=le(o,this.$$d[o],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,a)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const o in this.$$l)for(const a of this.$$l[o]){const c=this.$$c.$on(o,a);this.$$l_u.set(a,c)}this.$$l={}}}attributeChangedCallback(e,t,s){var i;this.$$r||(e=this.$$g_p(e),this.$$d[e]=le(e,s,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function le(n,e,t,s){var r;const i=(r=t[n])==null?void 0:r.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!s||!t[n])return e;if(s==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function ne(n,e,t,s,i,r){let o=class extends _t{constructor(){super(n,t,i),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(c){var u;c=le(a,c,e),this.$$d[a]=c,(u=this.$$c)==null||u.$set({[a]:c})}})}),s.forEach(a=>{Object.defineProperty(o.prototype,a,{get(){var c;return(c=this.$$c)==null?void 0:c[a]}})}),r&&(o=r(o)),n.element=o,o}class se{constructor(){S(this,"$$");S(this,"$$set")}$destroy(){ee(this,1),this.$destroy=R}$on(e,t){if(!dt(t))return R;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const i=s.indexOf(t);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!Ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nn);function sn(n){let e,t,s,i,r,o,a;return{c(){e=y("input"),t=k(),s=y("button"),s.innerHTML='<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stubber_message_send_button_svg" id="stubber_message_send_button_svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>',i=k(),r=y("style"),r.textContent=`/* Start Chat Button */

.stubber_webchat_enable_button {
  background-color: gray;
  border: none;
  color: white;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
  z-index: 1000;
  border-radius: 20px;
  width: 60px;
  height: 40px;
  align-items: center;
}

.stubber_webchat_enable_button:hover {
  background-color: rgb(96, 96, 96);
  color: white;
}

.stubber_webchat_primary_color {
  background-color: #007bff;
  color: white;
}

/* Start Chat Button */

/* WebChat box */

.stubber_webchat_box {
  font-family: "Arial", sans-serif;
  background-color: white;
  color: black;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 400px;
  height: 600px;
  z-index: 1000;
}

/* WebChat box */

/* Webchat message box */

.stubber_message_box {
  font-family: "Arial", sans-serif;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 93%;
  background-color: rgb(215, 215, 215);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.stubber_message_box_switching {
  height: 86%;
}

/* Webchat message box */

/* Webchat input box */

.stubber_message_input_box {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 0;
  display: flex;
  border: none;
}

.stubber_message_input {
  background-color: rgb(215, 215, 215);
  width: 90%;
  border: none;
  padding: 10px;
  border-bottom-left-radius: 20px;
}

.stubber_message_input:focus {
  outline: none;
}

.stubber_message_send_button {
  background-color: gray;
  color: white;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center; 
  border-bottom-right-radius: 20px;
}

.stubber_message_send_button:hover {
  background-color: rgb(96, 96, 96);
  color: white;
}

.stubber_message_send_button_svg {
  color: white;
  width: 20px;
  height: 20px;
}

/* Webchat input box */

/* Webchat messsage bubbles outgoing */

.stubber_webchat_message_out {
  background-color: #f0f0f0;
  float: right;
  text-align: left;
}

.stubber_webchat_message_info_sent,
.stubber_webchat_message_info_sent_delivered {
  background-size: contain;
  width: 20px;
  height: 20px;
}

.stubber_webchat_message_info_sent {
  color: grey;
}

.stubber_webchat_message_info_sent_delivered {
  color: blue;
}

.stubber_webchat_message_info_time_out {
  color: black;
}

/* Webchat messsage bubbles outgoing */

/* Webchat messsage bubbles incoming */

.stubber_webchat_message_in {
  background-color: #0c74f1;
  float: left;
  text-align: left;
  color: white;
}

.stubber_webchat_message_info_time_in {
  color: white;
}

/* Webchat messsage bubbles outgoing */

/* Webchat message bubbles common */

@media (max-width: 600px) {
  .stubber_webchat_message_out,
  .stubber_webchat_message_in {
    max-width: 70%;
  }
}

@media (min-width: 1200px) {
  .stubber_webchat_message_out,
  .stubber_webchat_message_in {
    max-width: 50%;
  }
}

.stubber_webchat_message_out,
.stubber_webchat_message_in {
  margin: 10px;
  padding: 15px;
  border-radius: 9px;
  clear: both;
  min-width: 300px;
  min-height: 50px;
  max-width: 80%;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stubber_webchat_message_info_box {
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.stubber_webchat_message_info_time_in,
.stubber_webchat_message_info_time_out {
  font-size: 0.75rem;
}

/* Webchat message bubbles common */

/* Webchat switch box */

.stubber_chat_switch_box {
  background-color: rgb(215, 215, 215);
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 7%;
  display: flex;
}

.stubber_chat_switch_box_details {
  bottom: 0;
}

.stubber_chat_switch_text {
  width: 40%;
  border: none;
  text-align: center;
  font-size: 15px
}

.stubber_chat_switch_button {
  background-color: gray;
  color: white;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 5px;
  border-radius: 5px;
}

/* Webchat switch box */`,l(e,"type","text"),l(e,"class","stubber_message_input"),l(e,"id","stubber_message_input"),l(e,"placeholder","Enter Details"),l(s,"class","stubber_message_send_button"),l(s,"id","stubber_message_send_buttons")},m(c,u){m(c,e,u),W(e,n[0]),m(c,t,u),m(c,s,u),m(c,i,u),g(document.head,r),o||(a=[C(e,"input",n[6]),C(e,"keydown",n[2]),C(s,"click",n[1])],o=!0)},p(c,[u]){u&1&&e.value!==c[0]&&W(e,c[0])},i:R,o:R,d(c){c&&(b(e),b(t),b(s),b(i)),b(r),o=!1,P(a)}}}function rn(n,e,t){let{socket:s}=e,{orguuid:i}=e,{chatname:r}=e,o="",a=h=>{s.emit("configuration",{webchat_configuration:{orguuid:i,chatname:r},webchat_client_configuration:{platform_switch:{platform_name:"Whatsapp",params:{number:o}}}})},c=h=>{h.key==="Enter"&&o!=""&&a()};function u(){o=this.value,t(0,o)}return n.$$set=h=>{"socket"in h&&t(3,s=h.socket),"orguuid"in h&&t(4,i=h.orguuid),"chatname"in h&&t(5,r=h.chatname)},[o,a,c,s,i,r,u]}class gt extends se{constructor(e){super(),te(this,e,rn,sn,G,{socket:3,orguuid:4,chatname:5})}get socket(){return this.$$.ctx[3]}set socket(e){this.$$set({socket:e}),E()}get orguuid(){return this.$$.ctx[4]}set orguuid(e){this.$$set({orguuid:e}),E()}get chatname(){return this.$$.ctx[5]}set chatname(e){this.$$set({chatname:e}),E()}}ne(gt,{socket:{},orguuid:{},chatname:{}},[],[],!0);function on(n){let e,t,s,i,r,o,a;return{c(){e=y("input"),t=k(),s=y("button"),s.innerHTML='<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stubber_message_send_button_svg" id="stubber_message_send_button_svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>',i=k(),r=y("style"),r.textContent=`/* Start Chat Button */

.stubber_webchat_enable_button {
  background-color: gray;
  border: none;
  color: white;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
  z-index: 1000;
  border-radius: 20px;
  width: 60px;
  height: 40px;
  align-items: center;
}

.stubber_webchat_enable_button:hover {
  background-color: rgb(96, 96, 96);
  color: white;
}

.stubber_webchat_primary_color {
  background-color: #007bff;
  color: white;
}

/* Start Chat Button */

/* WebChat box */

.stubber_webchat_box {
  font-family: "Arial", sans-serif;
  background-color: white;
  color: black;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 400px;
  height: 600px;
  z-index: 1000;
}

/* WebChat box */

/* Webchat message box */

.stubber_message_box {
  font-family: "Arial", sans-serif;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 93%;
  background-color: rgb(215, 215, 215);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.stubber_message_box_switching {
  height: 86%;
}

/* Webchat message box */

/* Webchat input box */

.stubber_message_input_box {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 0;
  display: flex;
  border: none;
}

.stubber_message_input {
  background-color: rgb(215, 215, 215);
  width: 90%;
  border: none;
  padding: 10px;
  border-bottom-left-radius: 20px;
}

.stubber_message_input:focus {
  outline: none;
}

.stubber_message_send_button {
  background-color: gray;
  color: white;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center; 
  border-bottom-right-radius: 20px;
}

.stubber_message_send_button:hover {
  background-color: rgb(96, 96, 96);
  color: white;
}

.stubber_message_send_button_svg {
  color: white;
  width: 20px;
  height: 20px;
}

/* Webchat input box */

/* Webchat messsage bubbles outgoing */

.stubber_webchat_message_out {
  background-color: #f0f0f0;
  float: right;
  text-align: left;
}

.stubber_webchat_message_info_sent,
.stubber_webchat_message_info_sent_delivered {
  background-size: contain;
  width: 20px;
  height: 20px;
}

.stubber_webchat_message_info_sent {
  color: grey;
}

.stubber_webchat_message_info_sent_delivered {
  color: blue;
}

.stubber_webchat_message_info_time_out {
  color: black;
}

/* Webchat messsage bubbles outgoing */

/* Webchat messsage bubbles incoming */

.stubber_webchat_message_in {
  background-color: #0c74f1;
  float: left;
  text-align: left;
  color: white;
}

.stubber_webchat_message_info_time_in {
  color: white;
}

/* Webchat messsage bubbles outgoing */

/* Webchat message bubbles common */

@media (max-width: 600px) {
  .stubber_webchat_message_out,
  .stubber_webchat_message_in {
    max-width: 70%;
  }
}

@media (min-width: 1200px) {
  .stubber_webchat_message_out,
  .stubber_webchat_message_in {
    max-width: 50%;
  }
}

.stubber_webchat_message_out,
.stubber_webchat_message_in {
  margin: 10px;
  padding: 15px;
  border-radius: 9px;
  clear: both;
  min-width: 300px;
  min-height: 50px;
  max-width: 80%;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stubber_webchat_message_info_box {
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.stubber_webchat_message_info_time_in,
.stubber_webchat_message_info_time_out {
  font-size: 0.75rem;
}

/* Webchat message bubbles common */

/* Webchat switch box */

.stubber_chat_switch_box {
  background-color: rgb(215, 215, 215);
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 7%;
  display: flex;
}

.stubber_chat_switch_box_details {
  bottom: 0;
}

.stubber_chat_switch_text {
  width: 40%;
  border: none;
  text-align: center;
  font-size: 15px
}

.stubber_chat_switch_button {
  background-color: gray;
  color: white;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 5px;
  border-radius: 5px;
}

/* Webchat switch box */`,l(e,"type","text"),l(e,"class","stubber_message_input"),l(e,"id","stubber_message_input"),l(e,"placeholder","Enter Details"),l(s,"class","stubber_message_send_button"),l(s,"id","stubber_message_send_button")},m(c,u){m(c,e,u),W(e,n[0]),m(c,t,u),m(c,s,u),m(c,i,u),g(document.head,r),o||(a=[C(e,"input",n[6]),C(e,"keydown",n[2]),C(s,"click",n[1])],o=!0)},p(c,[u]){u&1&&e.value!==c[0]&&W(e,c[0])},i:R,o:R,d(c){c&&(b(e),b(t),b(s),b(i)),b(r),o=!1,P(a)}}}function an(n,e,t){let{socket:s}=e,{orguuid:i}=e,{chatname:r}=e,o="",a=h=>{console.log(h),s.emit("params",{orguuid:i,chatname:r,params:h})},c=h=>{h.key==="Enter"&&o!=""&&a()};function u(){o=this.value,t(0,o)}return n.$$set=h=>{"socket"in h&&t(3,s=h.socket),"orguuid"in h&&t(4,i=h.orguuid),"chatname"in h&&t(5,r=h.chatname)},[o,a,c,s,i,r,u]}class mt extends se{constructor(e){super(),te(this,e,an,on,G,{socket:3,orguuid:4,chatname:5})}get socket(){return this.$$.ctx[3]}set socket(e){this.$$set({socket:e}),E()}get orguuid(){return this.$$.ctx[4]}set orguuid(e){this.$$set({orguuid:e}),E()}get chatname(){return this.$$.ctx[5]}set chatname(e){this.$$set({chatname:e}),E()}}ne(mt,{socket:{},orguuid:{},chatname:{}},[],[],!0);function cn(n){let e,t,s,i,r,o,a;return{c(){e=y("input"),t=k(),s=y("button"),s.innerHTML='<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stubber_message_send_button_svg" id="stubber_message_send_button_svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>',i=k(),r=y("style"),r.textContent=`/* Start Chat Button */

.stubber_webchat_enable_button {
  background-color: gray;
  border: none;
  color: white;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
  z-index: 1000;
  border-radius: 20px;
  width: 60px;
  height: 40px;
  align-items: center;
}

.stubber_webchat_enable_button:hover {
  background-color: rgb(96, 96, 96);
  color: white;
}

.stubber_webchat_primary_color {
  background-color: #007bff;
  color: white;
}

/* Start Chat Button */

/* WebChat box */

.stubber_webchat_box {
  font-family: "Arial", sans-serif;
  background-color: white;
  color: black;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 400px;
  height: 600px;
  z-index: 1000;
}

/* WebChat box */

/* Webchat message box */

.stubber_message_box {
  font-family: "Arial", sans-serif;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 93%;
  background-color: rgb(215, 215, 215);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.stubber_message_box_switching {
  height: 86%;
}

/* Webchat message box */

/* Webchat input box */

.stubber_message_input_box {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 0;
  display: flex;
  border: none;
}

.stubber_message_input {
  background-color: rgb(215, 215, 215);
  width: 90%;
  border: none;
  padding: 10px;
  border-bottom-left-radius: 20px;
}

.stubber_message_input:focus {
  outline: none;
}

.stubber_message_send_button {
  background-color: gray;
  color: white;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center; 
  border-bottom-right-radius: 20px;
}

.stubber_message_send_button:hover {
  background-color: rgb(96, 96, 96);
  color: white;
}

.stubber_message_send_button_svg {
  color: white;
  width: 20px;
  height: 20px;
}

/* Webchat input box */

/* Webchat messsage bubbles outgoing */

.stubber_webchat_message_out {
  background-color: #f0f0f0;
  float: right;
  text-align: left;
}

.stubber_webchat_message_info_sent,
.stubber_webchat_message_info_sent_delivered {
  background-size: contain;
  width: 20px;
  height: 20px;
}

.stubber_webchat_message_info_sent {
  color: grey;
}

.stubber_webchat_message_info_sent_delivered {
  color: blue;
}

.stubber_webchat_message_info_time_out {
  color: black;
}

/* Webchat messsage bubbles outgoing */

/* Webchat messsage bubbles incoming */

.stubber_webchat_message_in {
  background-color: #0c74f1;
  float: left;
  text-align: left;
  color: white;
}

.stubber_webchat_message_info_time_in {
  color: white;
}

/* Webchat messsage bubbles outgoing */

/* Webchat message bubbles common */

@media (max-width: 600px) {
  .stubber_webchat_message_out,
  .stubber_webchat_message_in {
    max-width: 70%;
  }
}

@media (min-width: 1200px) {
  .stubber_webchat_message_out,
  .stubber_webchat_message_in {
    max-width: 50%;
  }
}

.stubber_webchat_message_out,
.stubber_webchat_message_in {
  margin: 10px;
  padding: 15px;
  border-radius: 9px;
  clear: both;
  min-width: 300px;
  min-height: 50px;
  max-width: 80%;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stubber_webchat_message_info_box {
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.stubber_webchat_message_info_time_in,
.stubber_webchat_message_info_time_out {
  font-size: 0.75rem;
}

/* Webchat message bubbles common */

/* Webchat switch box */

.stubber_chat_switch_box {
  background-color: rgb(215, 215, 215);
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 7%;
  display: flex;
}

.stubber_chat_switch_box_details {
  bottom: 0;
}

.stubber_chat_switch_text {
  width: 40%;
  border: none;
  text-align: center;
  font-size: 15px
}

.stubber_chat_switch_button {
  background-color: gray;
  color: white;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 5px;
  border-radius: 5px;
}

/* Webchat switch box */`,l(e,"type","text"),l(e,"class","stubber_message_input"),l(e,"id","stubber_message_input"),l(e,"placeholder","Enter Details"),l(s,"class","stubber_message_send_button"),l(s,"id","stubber_message_send_button")},m(c,u){m(c,e,u),W(e,n[0]),m(c,t,u),m(c,s,u),m(c,i,u),g(document.head,r),o||(a=[C(e,"input",n[6]),C(e,"keydown",n[2]),C(s,"click",n[1])],o=!0)},p(c,[u]){u&1&&e.value!==c[0]&&W(e,c[0])},i:R,o:R,d(c){c&&(b(e),b(t),b(s),b(i)),b(r),o=!1,P(a)}}}function un(n,e,t){let{socket:s}=e,{orguuid:i}=e,{chatname:r}=e,o="",a=h=>{console.log(h),s.emit("params",{orguuid:i,chatname:r,params:h})},c=h=>{h.key==="Enter"&&o!=""&&a()};function u(){o=this.value,t(0,o)}return n.$$set=h=>{"socket"in h&&t(3,s=h.socket),"orguuid"in h&&t(4,i=h.orguuid),"chatname"in h&&t(5,r=h.chatname)},[o,a,c,s,i,r,u]}class wt extends se{constructor(e){super(),te(this,e,un,cn,G,{socket:3,orguuid:4,chatname:5})}get socket(){return this.$$.ctx[3]}set socket(e){this.$$set({socket:e}),E()}get orguuid(){return this.$$.ctx[4]}set orguuid(e){this.$$set({orguuid:e}),E()}get chatname(){return this.$$.ctx[5]}set chatname(e){this.$$set({chatname:e}),E()}}ne(wt,{socket:{},orguuid:{},chatname:{}},[],[],!0);const N=Object.create(null);N.open="0";N.close="1";N.ping="2";N.pong="3";N.message="4";N.upgrade="5";N.noop="6";const fe=Object.create(null);Object.keys(N).forEach(n=>{fe[N[n]]=n});const $e={type:"error",data:"parser error"},yt=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",xt=typeof ArrayBuffer=="function",kt=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n&&n.buffer instanceof ArrayBuffer,Te=({type:n,data:e},t,s)=>yt&&e instanceof Blob?t?s(e):Ve(e,s):xt&&(e instanceof ArrayBuffer||kt(e))?t?s(e):Ve(new Blob([e]),s):s(N[n]+(e||"")),Ve=(n,e)=>{const t=new FileReader;return t.onload=function(){const s=t.result.split(",")[1];e("b"+(s||""))},t.readAsDataURL(n)};function ze(n){return n instanceof Uint8Array?n:n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}let ye;function hn(n,e){if(yt&&n.data instanceof Blob)return n.data.arrayBuffer().then(ze).then(e);if(xt&&(n.data instanceof ArrayBuffer||kt(n.data)))return e(ze(n.data));Te(n,!1,t=>{ye||(ye=new TextEncoder),e(ye.encode(t))})}const Fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",K=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let n=0;n<Fe.length;n++)K[Fe.charCodeAt(n)]=n;const ln=n=>{let e=n.length*.75,t=n.length,s,i=0,r,o,a,c;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);const u=new ArrayBuffer(e),h=new Uint8Array(u);for(s=0;s<t;s+=4)r=K[n.charCodeAt(s)],o=K[n.charCodeAt(s+1)],a=K[n.charCodeAt(s+2)],c=K[n.charCodeAt(s+3)],h[i++]=r<<2|o>>4,h[i++]=(o&15)<<4|a>>2,h[i++]=(a&3)<<6|c&63;return u},fn=typeof ArrayBuffer=="function",Be=(n,e)=>{if(typeof n!="string")return{type:"message",data:vt(n,e)};const t=n.charAt(0);return t==="b"?{type:"message",data:dn(n.substring(1),e)}:fe[t]?n.length>1?{type:fe[t],data:n.substring(1)}:{type:fe[t]}:$e},dn=(n,e)=>{if(fn){const t=ln(n);return vt(t,e)}else return{base64:!0,data:n}},vt=(n,e)=>{switch(e){case"blob":return n instanceof Blob?n:new Blob([n]);case"arraybuffer":default:return n instanceof ArrayBuffer?n:n.buffer}},$t="",bn=(n,e)=>{const t=n.length,s=new Array(t);let i=0;n.forEach((r,o)=>{Te(r,!1,a=>{s[o]=a,++i===t&&e(s.join($t))})})},pn=(n,e)=>{const t=n.split($t),s=[];for(let i=0;i<t.length;i++){const r=Be(t[i],e);if(s.push(r),r.type==="error")break}return s};function _n(){return new TransformStream({transform(n,e){hn(n,t=>{const s=t.length;let i;if(s<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,s);else if(s<65536){i=new Uint8Array(3);const r=new DataView(i.buffer);r.setUint8(0,126),r.setUint16(1,s)}else{i=new Uint8Array(9);const r=new DataView(i.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(s))}n.data&&typeof n.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let xe;function oe(n){return n.reduce((e,t)=>e+t.length,0)}function ae(n,e){if(n[0].length===e)return n.shift();const t=new Uint8Array(e);let s=0;for(let i=0;i<e;i++)t[i]=n[0][s++],s===n[0].length&&(n.shift(),s=0);return n.length&&s<n[0].length&&(n[0]=n[0].slice(s)),t}function gn(n,e){xe||(xe=new TextDecoder);const t=[];let s=0,i=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(s===0){if(oe(t)<1)break;const c=ae(t,1);r=(c[0]&128)===128,i=c[0]&127,i<126?s=3:i===126?s=1:s=2}else if(s===1){if(oe(t)<2)break;const c=ae(t,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),s=3}else if(s===2){if(oe(t)<8)break;const c=ae(t,8),u=new DataView(c.buffer,c.byteOffset,c.length),h=u.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue($e);break}i=h*Math.pow(2,32)+u.getUint32(4),s=3}else{if(oe(t)<i)break;const c=ae(t,i);a.enqueue(Be(r?c:xe.decode(c),e)),s=0}if(i===0||i>n){a.enqueue($e);break}}}})}const Et=4;function $(n){if(n)return mn(n)}function mn(n){for(var e in $.prototype)n[e]=$.prototype[e];return n}$.prototype.on=$.prototype.addEventListener=function(n,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+n]=this._callbacks["$"+n]||[]).push(e),this};$.prototype.once=function(n,e){function t(){this.off(n,t),e.apply(this,arguments)}return t.fn=e,this.on(n,t),this};$.prototype.off=$.prototype.removeListener=$.prototype.removeAllListeners=$.prototype.removeEventListener=function(n,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+n];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+n],this;for(var s,i=0;i<t.length;i++)if(s=t[i],s===e||s.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+n],this};$.prototype.emit=function(n){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+n],s=1;s<arguments.length;s++)e[s-1]=arguments[s];if(t){t=t.slice(0);for(var s=0,i=t.length;s<i;++s)t[s].apply(this,e)}return this};$.prototype.emitReserved=$.prototype.emit;$.prototype.listeners=function(n){return this._callbacks=this._callbacks||{},this._callbacks["$"+n]||[]};$.prototype.hasListeners=function(n){return!!this.listeners(n).length};const T=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function Ct(n,...e){return e.reduce((t,s)=>(n.hasOwnProperty(s)&&(t[s]=n[s]),t),{})}const wn=T.setTimeout,yn=T.clearTimeout;function me(n,e){e.useNativeTimers?(n.setTimeoutFn=wn.bind(T),n.clearTimeoutFn=yn.bind(T)):(n.setTimeoutFn=T.setTimeout.bind(T),n.clearTimeoutFn=T.clearTimeout.bind(T))}const xn=1.33;function kn(n){return typeof n=="string"?vn(n):Math.ceil((n.byteLength||n.size)*xn)}function vn(n){let e=0,t=0;for(let s=0,i=n.length;s<i;s++)e=n.charCodeAt(s),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(s++,t+=4);return t}function $n(n){let e="";for(let t in n)n.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(n[t]));return e}function En(n){let e={},t=n.split("&");for(let s=0,i=t.length;s<i;s++){let r=t[s].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class Cn extends Error{constructor(e,t,s){super(e),this.description=t,this.context=s,this.type="TransportError"}}class Re extends ${constructor(e){super(),this.writable=!1,me(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,s){return super.emitReserved("error",new Cn(e,t,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Be(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=$n(e);return t.length?"?"+t:""}}const Ot="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Ee=64,On={};let je=0,ce=0,He;function Ke(n){let e="";do e=Ot[n%Ee]+e,n=Math.floor(n/Ee);while(n>0);return e}function At(){const n=Ke(+new Date);return n!==He?(je=0,He=n):n+"."+Ke(je++)}for(;ce<Ee;ce++)On[Ot[ce]]=ce;let St=!1;try{St=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const An=St;function Tt(n){const e=n.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||An))return new XMLHttpRequest}catch{}if(!e)try{return new T[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Sn(){}const Tn=function(){return new Tt({xdomain:!1}).responseType!=null}();class Bn extends Re{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const s=location.protocol==="https:";let i=location.port;i||(i=s?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}const t=e&&e.forceBase64;this.supportsBinary=Tn&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let s=0;this.polling&&(s++,this.once("pollComplete",function(){--s||t()})),this.writable||(s++,this.once("drain",function(){--s||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=s=>{if(this.readyState==="opening"&&s.type==="open"&&this.onOpen(),s.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(s)};pn(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,bn(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=At()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new L(this.uri(),e)}doWrite(e,t){const s=this.request({method:"POST",data:e});s.on("success",t),s.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,s)=>{this.onError("xhr poll error",t,s)}),this.pollXhr=e}}class L extends ${constructor(e,t){super(),me(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=Ct(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const s=this.xhr=new Tt(t);try{s.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){s.setDisableHeaderCheck&&s.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&s.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{s.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{s.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(s),"withCredentials"in s&&(s.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(s.timeout=this.opts.requestTimeout),s.onreadystatechange=()=>{var i;s.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(s)),s.readyState===4&&(s.status===200||s.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof s.status=="number"?s.status:0)},0))},s.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=L.requestsCount++,L.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Sn,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete L.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}L.requestsCount=0;L.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Ye);else if(typeof addEventListener=="function"){const n="onpagehide"in T?"pagehide":"unload";addEventListener(n,Ye,!1)}}function Ye(){for(let n in L.requests)L.requests.hasOwnProperty(n)&&L.requests[n].abort()}const Le=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),ue=T.WebSocket||T.MozWebSocket,Je=!0,Rn="arraybuffer",Xe=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ln extends Re{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,s=Xe?{}:Ct(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=Je&&!Xe?t?new ue(e,t):new ue(e):new ue(e,t,s)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const s=e[t],i=t===e.length-1;Te(s,this.supportsBinary,r=>{const o={};try{Je&&this.ws.send(r)}catch{}i&&Le(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=At()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!ue}}class Nn extends Re{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=gn(Number.MAX_SAFE_INTEGER,this.socket.binaryType),s=e.readable.pipeThrough(t).getReader(),i=_n();i.readable.pipeTo(e.writable),this.writer=i.writable.getWriter();const r=()=>{s.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const s=e[t],i=t===e.length-1;this.writer.write(s).then(()=>{i&&Le(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const Pn={websocket:Ln,webtransport:Nn,polling:Bn},Wn=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,qn=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Ce(n){if(n.length>2e3)throw"URI too long";const e=n,t=n.indexOf("["),s=n.indexOf("]");t!=-1&&s!=-1&&(n=n.substring(0,t)+n.substring(t,s).replace(/:/g,";")+n.substring(s,n.length));let i=Wn.exec(n||""),r={},o=14;for(;o--;)r[qn[o]]=i[o]||"";return t!=-1&&s!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Dn(r,r.path),r.queryKey=Mn(r,r.query),r}function Dn(n,e){const t=/\/{2,9}/g,s=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&s.splice(0,1),e.slice(-1)=="/"&&s.splice(s.length-1,1),s}function Mn(n,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(s,i,r){i&&(t[i]=r)}),t}let Bt=class U extends ${constructor(e,t={}){super(),this.binaryType=Rn,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=Ce(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=Ce(t.host).host),me(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=En(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Et,t.transport=e,this.id&&(t.sid=this.id);const s=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new Pn[e](s)}open(){let e;if(this.opts.rememberUpgrade&&U.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),s=!1;U.priorWebsocketSuccess=!1;const i=()=>{s||(t.send([{type:"ping",data:"probe"}]),t.once("packet",f=>{if(!s)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;U.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{s||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function r(){s||(s=!0,h(),t.close(),t=null)}const o=f=>{const d=new Error("probe error: "+f);d.transport=t.name,r(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function c(){o("socket closed")}function u(f){t&&f.name!==t.name&&r()}const h=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",c),this.off("upgrading",u)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",c),this.once("upgrading",u),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{s||t.open()},200):t.open()}onOpen(){if(this.readyState="open",U.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let s=0;s<this.writeBuffer.length;s++){const i=this.writeBuffer[s].data;if(i&&(t+=kn(i)),s>0&&t>this.maxPayload)return this.writeBuffer.slice(0,s);t+=2}return this.writeBuffer}write(e,t,s){return this.sendPacket("message",e,t,s),this}send(e,t,s){return this.sendPacket("message",e,t,s),this}sendPacket(e,t,s,i){if(typeof t=="function"&&(i=t,t=void 0),typeof s=="function"&&(i=s,s=null),this.readyState==="closing"||this.readyState==="closed")return;s=s||{},s.compress=s.compress!==!1;const r={type:e,data:t,options:s};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},s=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():e()}):this.upgrading?s():e()),this}onError(e){U.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let s=0;const i=e.length;for(;s<i;s++)~this.transports.indexOf(e[s])&&t.push(e[s]);return t}};Bt.protocol=Et;function In(n,e="",t){let s=n;t=t||typeof location<"u"&&location,n==null&&(n=t.protocol+"//"+t.host),typeof n=="string"&&(n.charAt(0)==="/"&&(n.charAt(1)==="/"?n=t.protocol+n:n=t.host+n),/^(https?|wss?):\/\//.test(n)||(typeof t<"u"?n=t.protocol+"//"+n:n="https://"+n),s=Ce(n)),s.port||(/^(http|ws)$/.test(s.protocol)?s.port="80":/^(http|ws)s$/.test(s.protocol)&&(s.port="443")),s.path=s.path||"/";const r=s.host.indexOf(":")!==-1?"["+s.host+"]":s.host;return s.id=s.protocol+"://"+r+":"+s.port+e,s.href=s.protocol+"://"+r+(t&&t.port===s.port?"":":"+s.port),s}const Un=typeof ArrayBuffer=="function",Vn=n=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(n):n.buffer instanceof ArrayBuffer,Rt=Object.prototype.toString,zn=typeof Blob=="function"||typeof Blob<"u"&&Rt.call(Blob)==="[object BlobConstructor]",Fn=typeof File=="function"||typeof File<"u"&&Rt.call(File)==="[object FileConstructor]";function Ne(n){return Un&&(n instanceof ArrayBuffer||Vn(n))||zn&&n instanceof Blob||Fn&&n instanceof File}function de(n,e){if(!n||typeof n!="object")return!1;if(Array.isArray(n)){for(let t=0,s=n.length;t<s;t++)if(de(n[t]))return!0;return!1}if(Ne(n))return!0;if(n.toJSON&&typeof n.toJSON=="function"&&arguments.length===1)return de(n.toJSON(),!0);for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&de(n[t]))return!0;return!1}function jn(n){const e=[],t=n.data,s=n;return s.data=Oe(t,e),s.attachments=e.length,{packet:s,buffers:e}}function Oe(n,e){if(!n)return n;if(Ne(n)){const t={_placeholder:!0,num:e.length};return e.push(n),t}else if(Array.isArray(n)){const t=new Array(n.length);for(let s=0;s<n.length;s++)t[s]=Oe(n[s],e);return t}else if(typeof n=="object"&&!(n instanceof Date)){const t={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=Oe(n[s],e));return t}return n}function Hn(n,e){return n.data=Ae(n.data,e),delete n.attachments,n}function Ae(n,e){if(!n)return n;if(n&&n._placeholder===!0){if(typeof n.num=="number"&&n.num>=0&&n.num<e.length)return e[n.num];throw new Error("illegal attachments")}else if(Array.isArray(n))for(let t=0;t<n.length;t++)n[t]=Ae(n[t],e);else if(typeof n=="object")for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(n[t]=Ae(n[t],e));return n}const Kn=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Yn=5;var _;(function(n){n[n.CONNECT=0]="CONNECT",n[n.DISCONNECT=1]="DISCONNECT",n[n.EVENT=2]="EVENT",n[n.ACK=3]="ACK",n[n.CONNECT_ERROR=4]="CONNECT_ERROR",n[n.BINARY_EVENT=5]="BINARY_EVENT",n[n.BINARY_ACK=6]="BINARY_ACK"})(_||(_={}));class Jn{constructor(e){this.replacer=e}encode(e){return(e.type===_.EVENT||e.type===_.ACK)&&de(e)?this.encodeAsBinary({type:e.type===_.EVENT?_.BINARY_EVENT:_.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===_.BINARY_EVENT||e.type===_.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=jn(e),s=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(s),i}}function Qe(n){return Object.prototype.toString.call(n)==="[object Object]"}class Pe extends ${constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const s=t.type===_.BINARY_EVENT;s||t.type===_.BINARY_ACK?(t.type=s?_.EVENT:_.ACK,this.reconstructor=new Xn(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Ne(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const s={type:Number(e.charAt(0))};if(_[s.type]===void 0)throw new Error("unknown packet type "+s.type);if(s.type===_.BINARY_EVENT||s.type===_.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");s.attachments=Number(o)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););s.nsp=e.substring(r,t)}else s.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}s.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(Pe.isPayloadValid(s.type,r))s.data=r;else throw new Error("invalid payload")}return s}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case _.CONNECT:return Qe(t);case _.DISCONNECT:return t===void 0;case _.CONNECT_ERROR:return typeof t=="string"||Qe(t);case _.EVENT:case _.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Kn.indexOf(t[0])===-1);case _.ACK:case _.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Xn{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Hn(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Qn=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Pe,Encoder:Jn,get PacketType(){return _},protocol:Yn},Symbol.toStringTag,{value:"Module"}));function B(n,e,t){return n.on(e,t),function(){n.off(e,t)}}const Gn=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Lt extends ${constructor(e,t,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[B(e,"open",this.onopen.bind(this)),B(e,"packet",this.onpacket.bind(this)),B(e,"error",this.onerror.bind(this)),B(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Gn.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const s={type:_.EVENT,data:t};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),s.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(e,t){var s;const i=(s=this.flags.timeout)!==null&&s!==void 0?s:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},i);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...o])}}emitWithAck(e,...t){const s=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((i,r)=>{t.push((o,a)=>s?o?r(o):i(a):i(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const s={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...r)=>s!==this._queue[0]?void 0:(i!==null?s.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...r)),s.pending=!1,this._drainQueue())),this._queue.push(s),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:_.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case _.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case _.EVENT:case _.BINARY_EVENT:this.onevent(e);break;case _.ACK:case _.BINARY_ACK:this.onack(e);break;case _.DISCONNECT:this.ondisconnect();break;case _.CONNECT_ERROR:this.destroy();const s=new Error(e.data.message);s.data=e.data.data,this.emitReserved("connect_error",s);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const s of t)s.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let s=!1;return function(...i){s||(s=!0,t.packet({type:_.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:_.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let s=0;s<t.length;s++)if(e===t[s])return t.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const s of t)s.apply(this,e.data)}}}function j(n){n=n||{},this.ms=n.min||100,this.max=n.max||1e4,this.factor=n.factor||2,this.jitter=n.jitter>0&&n.jitter<=1?n.jitter:0,this.attempts=0}j.prototype.duration=function(){var n=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*n);n=Math.floor(e*10)&1?n+t:n-t}return Math.min(n,this.max)|0};j.prototype.reset=function(){this.attempts=0};j.prototype.setMin=function(n){this.ms=n};j.prototype.setMax=function(n){this.max=n};j.prototype.setJitter=function(n){this.jitter=n};class Se extends ${constructor(e,t){var s;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,me(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((s=t.randomizationFactor)!==null&&s!==void 0?s:.5),this.backoff=new j({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||Qn;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Bt(this.uri,this.opts);const t=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const i=B(t,"open",function(){s.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=B(t,"error",r);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{i(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(B(e,"ping",this.onping.bind(this)),B(e,"data",this.ondata.bind(this)),B(e,"error",this.onerror.bind(this)),B(e,"close",this.onclose.bind(this)),B(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Le(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let s=this.nsps[e];return s?this._autoConnect&&!s.active&&s.connect():(s=new Lt(this,e,t),this.nsps[e]=s),s}_destroy(e){const t=Object.keys(this.nsps);for(const s of t)if(this.nsps[s].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let s=0;s<t.length;s++)this.engine.write(t[s],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&s.unref(),this.subs.push(()=>{this.clearTimeoutFn(s)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const H={};function be(n,e){typeof n=="object"&&(e=n,n=void 0),e=e||{};const t=In(n,e.path||"/socket.io"),s=t.source,i=t.id,r=t.path,o=H[i]&&r in H[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new Se(s,e):(H[i]||(H[i]=new Se(s,e)),c=H[i]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(be,{Manager:Se,Socket:Lt,io:be,connect:be});const{document:Zn}=Vt;function Ge(n,e,t){const s=n.slice();return s[20]=e[t],s}function Ze(n){let e,t,s=n[20].message+"",i,r,o,a,c=n[10](n[20].dateTime)+"",u;return{c(){e=y("div"),t=y("div"),i=F(s),r=k(),o=y("div"),a=y("small"),u=F(c),l(t,"class","stubber_webchat_message_text_box"),l(t,"id","stubber_webchat_message_text_box"),l(a,"class","stubber_webchat_message_info_time_in"),l(a,"id","stubber_webchat_message_info_time_in"),l(o,"class","stubber_webchat_message_info_box"),l(o,"id","stubber_webchat_message_info_box"),l(e,"class","stubber_webchat_message_in"),l(e,"id","stubber_webchat_message_in")},m(h,f){m(h,e,f),g(e,t),g(t,i),g(e,r),g(e,o),g(o,a),g(a,u)},p(h,f){f&8&&s!==(s=h[20].message+"")&&pe(i,s),f&8&&c!==(c=h[10](h[20].dateTime)+"")&&pe(u,c)},d(h){h&&b(e)}}}function et(n){let e,t,s=n[20].message+"",i,r,o,a,c=n[10](n[20].dateTime)+"",u,h,f,d,x=n[20].recieved==!1&&tt(),p=n[20].recieved==!0&&nt();return{c(){e=y("div"),t=y("div"),i=F(s),r=k(),o=y("div"),a=y("small"),u=F(c),h=k(),x&&x.c(),f=k(),p&&p.c(),d=k(),l(t,"class","stubber_webchat_message_text_box"),l(t,"id","stubber_webchat_message_text_box"),l(a,"class","stubber_webchat_message_info_time_out"),l(a,"id","stubber_webchat_message_info_time_out"),l(o,"class","stubber_webchat_message_info_box"),l(o,"id","stubber_webchat_message_info_box"),l(e,"class","stubber_webchat_message_out"),l(e,"id","stubber_webchat_message_out")},m(O,D){m(O,e,D),g(e,t),g(t,i),g(e,r),g(e,o),g(o,a),g(a,u),g(o,h),x&&x.m(o,null),g(o,f),p&&p.m(o,null),g(e,d)},p(O,D){D&8&&s!==(s=O[20].message+"")&&pe(i,s),D&8&&c!==(c=O[10](O[20].dateTime)+"")&&pe(u,c),O[20].recieved==!1?x||(x=tt(),x.c(),x.m(o,f)):x&&(x.d(1),x=null),O[20].recieved==!0?p||(p=nt(),p.c(),p.m(o,null)):p&&(p.d(1),p=null)},d(O){O&&b(e),x&&x.d(),p&&p.d()}}}function tt(n){let e,t;return{c(){e=z("svg"),t=z("path"),l(t,"stroke-linecap","round"),l(t,"stroke-linejoin","round"),l(t,"stroke-width","2"),l(t,"d","M5 13l4 4L19 7"),l(e,"class","stubber_webchat_message_info_sent"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke","currentColor"),l(e,"id","stubber_webchat_message_info_sent")},m(s,i){m(s,e,i),g(e,t)},d(s){s&&b(e)}}}function nt(n){let e,t;return{c(){e=z("svg"),t=z("path"),l(t,"stroke-linecap","round"),l(t,"stroke-linejoin","round"),l(t,"stroke-width","2"),l(t,"d","M5 13l4 4L19 7"),l(e,"class","stubber_webchat_message_info_sent_delivered"),l(e,"fill","none"),l(e,"viewBox","0 0 24 24"),l(e,"stroke","currentColor"),l(e,"id","stubber_webchat_message_info_sent_delivered")},m(s,i){m(s,e,i),g(e,t)},d(s){s&&b(e)}}}function st(n){let e,t,s=n[20].direction=="in"&&Ze(n),i=n[20].direction=="out"&&et(n);return{c(){s&&s.c(),e=k(),i&&i.c(),t=bt()},m(r,o){s&&s.m(r,o),m(r,e,o),i&&i.m(r,o),m(r,t,o)},p(r,o){r[20].direction=="in"?s?s.p(r,o):(s=Ze(r),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),r[20].direction=="out"?i?i.p(r,o):(i=et(r),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},d(r){r&&(b(e),b(t)),s&&s.d(r),i&&i.d(r)}}}function it(n){let e,t,s,i,r,o,a,c,u,h;return{c(){e=y("div"),t=y("input"),i=k(),r=y("button"),o=z("svg"),a=z("path"),l(t,"type","text"),l(t,"class","stubber_message_input"),l(t,"id","stubber_message_input"),l(t,"placeholder",s=n[6]?"":"Type something..."),t.disabled=n[6],l(a,"stroke-linecap","round"),l(a,"stroke-linejoin","round"),l(a,"stroke-width","2"),l(a,"d","M5 12h14M12 5l7 7-7 7"),l(o,"fill","none"),l(o,"viewBox","0 0 24 24"),l(o,"stroke","currentColor"),l(o,"class","stubber_message_send_button_svg"),l(o,"id","stubber_message_send_button_svg"),l(r,"class","stubber_message_send_button"),l(r,"id","stubber_message_send_button"),r.disabled=c=n[2]===""||n[6],l(e,"class","stubber_message_input_box"),l(e,"id","stubber_message_input_box")},m(f,d){m(f,e,d),g(e,t),W(t,n[2]),g(e,i),g(e,r),g(r,o),g(o,a),u||(h=[C(t,"input",n[13]),C(t,"keydown",n[8]),C(r,"click",n[9])],u=!0)},p(f,d){d&64&&s!==(s=f[6]?"":"Type something...")&&l(t,"placeholder",s),d&64&&(t.disabled=f[6]),d&4&&t.value!==f[2]&&W(t,f[2]),d&68&&c!==(c=f[2]===""||f[6])&&(r.disabled=c)},d(f){f&&b(e),u=!1,P(h)}}}function rt(n){let e,t,s,i,r,o=!n[6]&&ot(n),a=n[7]=="Whatsapp"&&at(n),c=n[7]=="SMS"&&ct(n),u=n[7]=="Email"&&ut(n);return{c(){e=y("div"),o&&o.c(),t=k(),a&&a.c(),s=k(),c&&c.c(),i=k(),u&&u.c(),l(e,"class","stubber_chat_switch_box"),l(e,"id","stubber_chat_switch_box"),_e(e,"stubber_chat_switch_box_details",n[6])},m(h,f){m(h,e,f),o&&o.m(e,null),g(e,t),a&&a.m(e,null),g(e,s),c&&c.m(e,null),g(e,i),u&&u.m(e,null),r=!0},p(h,f){h[6]?o&&(o.d(1),o=null):o?o.p(h,f):(o=ot(h),o.c(),o.m(e,t)),h[7]=="Whatsapp"?a?(a.p(h,f),f&128&&v(a,1)):(a=at(h),a.c(),v(a,1),a.m(e,s)):a&&(J(),A(a,1,1,()=>{a=null}),X()),h[7]=="SMS"?c?(c.p(h,f),f&128&&v(c,1)):(c=ct(h),c.c(),v(c,1),c.m(e,i)):c&&(J(),A(c,1,1,()=>{c=null}),X()),h[7]=="Email"?u?(u.p(h,f),f&128&&v(u,1)):(u=ut(h),u.c(),v(u,1),u.m(e,null)):u&&(J(),A(u,1,1,()=>{u=null}),X()),(!r||f&64)&&_e(e,"stubber_chat_switch_box_details",h[6])},i(h){r||(v(a),v(c),v(u),r=!0)},o(h){A(a),A(c),A(u),r=!1},d(h){h&&b(e),o&&o.d(),a&&a.d(),c&&c.d(),u&&u.d()}}}function ot(n){let e,t,s,i,r,o,a,c,u;return{c(){e=y("p"),e.textContent="Continue Chat On",t=k(),s=y("button"),s.textContent="Whatsapp",i=k(),r=y("button"),r.textContent="SMS",o=k(),a=y("button"),a.textContent="Email",l(e,"class","stubber_chat_switch_text"),l(s,"class","stubber_chat_switch_button primary_colors"),l(r,"class","stubber_chat_switch_button"),l(a,"class","stubber_chat_switch_button")},m(h,f){m(h,e,f),m(h,t,f),m(h,s,f),m(h,i,f),m(h,r,f),m(h,o,f),m(h,a,f),c||(u=[C(s,"click",n[14]),C(r,"click",n[15]),C(a,"click",n[16])],c=!0)},p:R,d(h){h&&(b(e),b(t),b(s),b(i),b(r),b(o),b(a)),c=!1,P(u)}}}function at(n){let e,t;return e=new gt({props:{socket:n[4],orguuid:n[0],chatname:n[1]}}),{c(){ge(e.$$.fragment)},m(s,i){Z(e,s,i),t=!0},p(s,i){const r={};i&16&&(r.socket=s[4]),i&1&&(r.orguuid=s[0]),i&2&&(r.chatname=s[1]),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){ee(e,s)}}}function ct(n){let e,t;return e=new wt({props:{socket:n[4],orguuid:n[0],chatname:n[1]}}),{c(){ge(e.$$.fragment)},m(s,i){Z(e,s,i),t=!0},p(s,i){const r={};i&16&&(r.socket=s[4]),i&1&&(r.orguuid=s[0]),i&2&&(r.chatname=s[1]),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){ee(e,s)}}}function ut(n){let e,t;return e=new mt({props:{socket:n[4],orguuid:n[0],chatname:n[1]}}),{c(){ge(e.$$.fragment)},m(s,i){Z(e,s,i),t=!0},p(s,i){const r={};i&16&&(r.socket=s[4]),i&1&&(r.orguuid=s[0]),i&2&&(r.chatname=s[1]),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){ee(e,s)}}}function es(n){let e,t,s,i,r,o,a,c=Ue(n[3]),u=[];for(let d=0;d<c.length;d+=1)u[d]=st(Ge(n,c,d));let h=!n[6]&&it(n),f=n[5]&&rt(n);return{c(){e=y("div"),t=y("div");for(let d=0;d<u.length;d+=1)u[d].c();s=k(),h&&h.c(),i=k(),f&&f.c(),r=k(),o=y("style"),o.textContent=`/* Start Chat Button */

.stubber_webchat_enable_button {
  background-color: gray;
  border: none;
  color: white;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
  z-index: 1000;
  border-radius: 20px;
  width: 60px;
  height: 40px;
  align-items: center;
}

.stubber_webchat_enable_button:hover {
  background-color: rgb(96, 96, 96);
  color: white;
}

.stubber_webchat_primary_color {
  background-color: #007bff;
  color: white;
}

/* Start Chat Button */

/* WebChat box */

.stubber_webchat_box {
  font-family: "Arial", sans-serif;
  background-color: white;
  color: black;
  position: fixed;
  bottom: 10vh;
  right: 5vh;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 400px;
  height: 600px;
  z-index: 1000;
}

/* WebChat box */

/* Webchat message box */

.stubber_message_box {
  font-family: "Arial", sans-serif;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 93%;
  background-color: rgb(215, 215, 215);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.stubber_message_box_switching {
  height: 86%;
}

/* Webchat message box */

/* Webchat input box */

.stubber_message_input_box {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 0;
  display: flex;
  border: none;
}

.stubber_message_input {
  background-color: rgb(215, 215, 215);
  width: 90%;
  border: none;
  padding: 10px;
  border-bottom-left-radius: 20px;
}

.stubber_message_input:focus {
  outline: none;
}

.stubber_message_send_button {
  background-color: gray;
  color: white;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center; 
  border-bottom-right-radius: 20px;
}

.stubber_message_send_button:hover {
  background-color: rgb(96, 96, 96);
  color: white;
}

.stubber_message_send_button_svg {
  color: white;
  width: 20px;
  height: 20px;
}

/* Webchat input box */

/* Webchat messsage bubbles outgoing */

.stubber_webchat_message_out {
  background-color: #f0f0f0;
  float: right;
  text-align: left;
}

.stubber_webchat_message_info_sent,
.stubber_webchat_message_info_sent_delivered {
  background-size: contain;
  width: 20px;
  height: 20px;
}

.stubber_webchat_message_info_sent {
  color: grey;
}

.stubber_webchat_message_info_sent_delivered {
  color: blue;
}

.stubber_webchat_message_info_time_out {
  color: black;
}

/* Webchat messsage bubbles outgoing */

/* Webchat messsage bubbles incoming */

.stubber_webchat_message_in {
  background-color: #0c74f1;
  float: left;
  text-align: left;
  color: white;
}

.stubber_webchat_message_info_time_in {
  color: white;
}

/* Webchat messsage bubbles outgoing */

/* Webchat message bubbles common */

@media (max-width: 600px) {
  .stubber_webchat_message_out,
  .stubber_webchat_message_in {
    max-width: 70%;
  }
}

@media (min-width: 1200px) {
  .stubber_webchat_message_out,
  .stubber_webchat_message_in {
    max-width: 50%;
  }
}

.stubber_webchat_message_out,
.stubber_webchat_message_in {
  margin: 10px;
  padding: 15px;
  border-radius: 9px;
  clear: both;
  min-width: 300px;
  min-height: 50px;
  max-width: 80%;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.stubber_webchat_message_info_box {
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.stubber_webchat_message_info_time_in,
.stubber_webchat_message_info_time_out {
  font-size: 0.75rem;
}

/* Webchat message bubbles common */

/* Webchat switch box */

.stubber_chat_switch_box {
  background-color: rgb(215, 215, 215);
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 7%;
  display: flex;
}

.stubber_chat_switch_box_details {
  bottom: 0;
}

.stubber_chat_switch_text {
  width: 40%;
  border: none;
  text-align: center;
  font-size: 15px
}

.stubber_chat_switch_button {
  background-color: gray;
  color: white;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 5px;
  border-radius: 5px;
}

/* Webchat switch box */`,l(t,"class","stubber_message_box"),l(t,"id","stubber_message_box"),_e(t,"stubber_message_box_switching",n[5]),l(e,"class","stubber_webchat_box"),l(e,"id","stubber_webchat_box")},m(d,x){m(d,e,x),g(e,t);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(t,null);g(e,s),h&&h.m(e,null),g(e,i),f&&f.m(e,null),m(d,r,x),g(Zn.head,o),a=!0},p(d,[x]){if(x&1032){c=Ue(d[3]);let p;for(p=0;p<c.length;p+=1){const O=Ge(d,c,p);u[p]?u[p].p(O,x):(u[p]=st(O),u[p].c(),u[p].m(t,null))}for(;p<u.length;p+=1)u[p].d(1);u.length=c.length}(!a||x&32)&&_e(t,"stubber_message_box_switching",d[5]),d[6]?h&&(h.d(1),h=null):h?h.p(d,x):(h=it(d),h.c(),h.m(e,i)),d[5]?f?(f.p(d,x),x&32&&v(f,1)):(f=rt(d),f.c(),v(f,1),f.m(e,null)):f&&(J(),A(f,1,1,()=>{f=null}),X())},i(d){a||(v(f),a=!0)},o(d){A(f),a=!1},d(d){d&&(b(e),b(r)),Ht(u,d),h&&h.d(),f&&f.d(),b(o)}}}function ts(n,e,t){let{orguuid:s}=e,{chatname:i}=e,{connectOnLoad:r}=e,o="",a=[],c,u=!1,h=!1,f="",d="http://api.stubber.zone:6026";Jt(()=>{console.log("__Mounted"),r==="true"&&x()});let x=()=>{t(4,c=be(d)),c.on("connect",async()=>{console.log("___Connected to server"),a.length==0&&await c.emit("initialize",{webchat_configuration:{orguuid:s,chatname:i,initialize:!0}})}),c.on("disconnect",()=>{console.log("___Disconnected from server")}),c.on("webchat_message",w=>{a.push({direction:"in",sent:!1,recieved:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:w.webchat_message.value}),t(3,a),We()}),c.on("webchat_client_configuration",w=>{Object.keys(w).forEach(re=>{w[re].type=="switching"&&t(5,u=w[re].value)})}),c.on("error",w=>{console.log("__Stubber Webchat : "+(w==null?void 0:w.error))})},p=w=>{w.key==="Enter"&&o!=""&&O()},O=async()=>{let w={direction:"out",sent:!1,recieved:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:o};a.push(w),t(3,a),t(2,o=""),We(),c.connected&&(await c.emit("message",{webchat_configuration:{orguuid:s,chatname:i},webchat_message:{type:"text",message:w.message,messageuuid:w.messageuuid}}),w.recieved=!0,t(3,a))},D=w=>{const qe=w.getHours().toString().padStart(2,"0"),re=w.getMinutes().toString().padStart(2,"0");return qe+":"+re},ie=w=>{t(7,f=w),t(6,h=!0),t(5,u=!1)},We=()=>{setTimeout(()=>{let w=document.getElementById("stubber_message_box");w.scrollTop=w.scrollHeight},100)};Xt(()=>{ws&&ws.close()});function Pt(){o=this.value,t(2,o)}const Wt=()=>ie("Whatsapp"),qt=()=>ie("SMS"),Dt=()=>ie("Email");return n.$$set=w=>{"orguuid"in w&&t(0,s=w.orguuid),"chatname"in w&&t(1,i=w.chatname),"connectOnLoad"in w&&t(12,r=w.connectOnLoad)},[s,i,o,a,c,u,h,f,p,O,D,ie,r,Pt,Wt,qt,Dt]}class Nt extends se{constructor(e){super(),te(this,e,ts,es,G,{orguuid:0,chatname:1,connectOnLoad:12})}get orguuid(){return this.$$.ctx[0]}set orguuid(e){this.$$set({orguuid:e}),E()}get chatname(){return this.$$.ctx[1]}set chatname(e){this.$$set({chatname:e}),E()}get connectOnLoad(){return this.$$.ctx[12]}set connectOnLoad(e){this.$$set({connectOnLoad:e}),E()}}ne(Nt,{orguuid:{},chatname:{},connectOnLoad:{}},[],[],!0);function ns(n){zt(n,"svelte-7vw7xp",".stubber_webchat_enable_button.svelte-7vw7xp{background-color:gray;border:none;color:white;position:fixed;bottom:10vh;right:5vh;z-index:1000;border-radius:20px;width:60px;height:40px;align-items:center}.stubber_webchat_enable_button.svelte-7vw7xp:hover{background-color:rgb(96, 96, 96);color:white}@media(max-width: 600px){}@media(min-width: 1200px){}")}function ht(n){let e,t,s;return{c(){e=y("button"),e.textContent="Chat",l(e,"class","stubber_webchat_enable_button svelte-7vw7xp"),l(e,"id","stubber_webchat_enable_button")},m(i,r){m(i,e,r),t||(s=C(e,"click",n[4]),t=!0)},p:R,d(i){i&&b(e),t=!1,s()}}}function lt(n){let e,t;return e=new Nt({props:{orguuid:n[0],chatname:n[1],connectOnLoad:n[2]}}),{c(){ge(e.$$.fragment)},m(s,i){Z(e,s,i),t=!0},p(s,i){const r={};i&1&&(r.orguuid=s[0]),i&2&&(r.chatname=s[1]),i&4&&(r.connectOnLoad=s[2]),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){ee(e,s)}}}function ss(n){let e,t,s,i=!n[3]&&ht(n),r=n[3]&&lt(n);return{c(){i&&i.c(),e=k(),r&&r.c(),t=bt()},m(o,a){i&&i.m(o,a),m(o,e,a),r&&r.m(o,a),m(o,t,a),s=!0},p(o,[a]){o[3]?i&&(i.d(1),i=null):i?i.p(o,a):(i=ht(o),i.c(),i.m(e.parentNode,e)),o[3]?r?(r.p(o,a),a&8&&v(r,1)):(r=lt(o),r.c(),v(r,1),r.m(t.parentNode,t)):r&&(J(),A(r,1,1,()=>{r=null}),X())},i(o){s||(v(r),s=!0)},o(o){A(r),s=!1},d(o){o&&(b(e),b(t)),i&&i.d(o),r&&r.d(o)}}}function is(n,e,t){let{orguuid:s}=e,{chatname:i}=e,{connectOnLoad:r}=e,o=!1;const a=()=>t(3,o=!0);return n.$$set=c=>{"orguuid"in c&&t(0,s=c.orguuid),"chatname"in c&&t(1,i=c.chatname),"connectOnLoad"in c&&t(2,r=c.connectOnLoad)},[s,i,r,o,a]}class rs extends se{constructor(e){super(),te(this,e,is,ss,G,{orguuid:0,chatname:1,connectOnLoad:2},ns)}get orguuid(){return this.$$.ctx[0]}set orguuid(e){this.$$set({orguuid:e}),E()}get chatname(){return this.$$.ctx[1]}set chatname(e){this.$$set({chatname:e}),E()}get connectOnLoad(){return this.$$.ctx[2]}set connectOnLoad(e){this.$$set({connectOnLoad:e}),E()}}customElements.define("stubber-webchat",ne(rs,{orguuid:{},chatname:{},connectOnLoad:{}},[],[],!1));
