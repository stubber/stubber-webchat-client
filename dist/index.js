var vo=Object.defineProperty;var ko=(r,e,t)=>e in r?vo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var D=(r,e,t)=>(ko(r,typeof e!="symbol"?e+"":e,t),t),xo=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var Gn=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};var pn=(r,e,t)=>(xo(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function M(){}function Eo(r,e){for(const t in e)r[t]=e[t];return r}function os(r){return r()}function si(){return Object.create(null)}function Ze(r){r.forEach(os)}function yr(r){return typeof r=="function"}function we(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let dn;function To(r,e){return r===e?!0:(dn||(dn=document.createElement("a")),dn.href=e,r===dn.href)}function Ao(r){return Object.keys(r).length===0}function _r(r,e,t,n){if(r){const i=as(r,e,t,n);return r[0](i)}}function as(r,e,t,n){return r[1]&&n?Eo(t.ctx.slice(),r[1](n(e))):t.ctx}function vr(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function kr(r,e,t,n,i,s){if(i){const o=as(e,t,n,s);r.p(o,i)}}function xr(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Er(r){return r&&yr(r.destroy)?r.destroy:M}const Ro=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function y(r,e){r.appendChild(e)}function Oo(r,e,t){const n=So(r);if(!n.getElementById(e)){const i=E("style");i.id=e,i.textContent=t,Co(n,i)}}function So(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function Co(r,e){return y(r.head||r,e),e.sheet}function P(r,e,t){r.insertBefore(e,t||null)}function L(r){r.parentNode&&r.parentNode.removeChild(r)}function $o(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function E(r){return document.createElement(r)}function ae(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function Be(r){return document.createTextNode(r)}function H(){return Be(" ")}function zn(){return Be("")}function ne(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function Lo(r){return function(e){return e.preventDefault(),r.call(this,e)}}function g(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function No(r){return Array.from(r.childNodes)}function lt(r,e){e=""+e,r.data!==e&&(r.data=e)}function at(r,e){r.value=e??""}function pe(r,e,t){r.classList.toggle(e,!!t)}class Po{constructor(e=!1){D(this,"is_svg",!1);D(this,"e");D(this,"n");D(this,"t");D(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=ae(t.nodeName):this.e=E(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)P(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(L)}}function Do(r){const e={};return r.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let tn;function Zt(r){tn=r}function ls(){if(!tn)throw new Error("Function called outside component initialization");return tn}function Io(r){ls().$$.on_mount.push(r)}function cs(r){ls().$$.on_destroy.push(r)}function oi(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Ot=[],gt=[];let Ct=[];const rr=[],us=Promise.resolve();let ir=!1;function fs(){ir||(ir=!0,us.then(V))}function Mo(){return fs(),us}function sr(r){Ct.push(r)}function Ln(r){rr.push(r)}const Xn=new Set;let Rt=0;function V(){if(Rt!==0)return;const r=tn;do{try{for(;Rt<Ot.length;){const e=Ot[Rt];Rt++,Zt(e),Bo(e.$$)}}catch(e){throw Ot.length=0,Rt=0,e}for(Zt(null),Ot.length=0,Rt=0;gt.length;)gt.pop()();for(let e=0;e<Ct.length;e+=1){const t=Ct[e];Xn.has(t)||(Xn.add(t),t())}Ct.length=0}while(Ot.length);for(;rr.length;)rr.pop()();ir=!1,Xn.clear(),Zt(r)}function Bo(r){if(r.fragment!==null){r.update(),Ze(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(sr)}}function zo(r){const e=[],t=[];Ct.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ct=e}const Tn=new Set;let dt;function Ve(){dt={r:0,c:[],p:dt}}function Ye(){dt.r||Ze(dt.c),dt=dt.p}function $(r,e){r&&r.i&&(Tn.delete(r),r.i(e))}function U(r,e,t,n){if(r&&r.o){if(Tn.has(r))return;Tn.add(r),dt.c.push(()=>{Tn.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function ai(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Nn(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function Ee(r){r&&r.c()}function de(r,e,t){const{fragment:n,after_update:i}=r.$$;n&&n.m(e,t),sr(()=>{const s=r.$$.on_mount.map(os).filter(yr);r.$$.on_destroy?r.$$.on_destroy.push(...s):Ze(s),r.$$.on_mount=[]}),i.forEach(sr)}function me(r,e){const t=r.$$;t.fragment!==null&&(zo(t.after_update),Ze(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Uo(r,e){r.$$.dirty[0]===-1&&(Ot.push(r),fs(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function ye(r,e,t,n,i,s,o=null,a=[-1]){const l=tn;Zt(r);const c=r.$$={fragment:null,ctx:[],props:s,update:M,not_equal:i,bound:si(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:si(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(f,h,...d)=>{const x=d.length?d[0]:h;return c.ctx&&i(c.ctx[f],c.ctx[f]=x)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](x),u&&Uo(r,f)),h}):[],c.update(),u=!0,Ze(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=No(e.target);c.fragment&&c.fragment.l(f),f.forEach(L)}else c.fragment&&c.fragment.c();e.intro&&$(r.$$.fragment),de(r,e.target,e.anchor),V()}Zt(l)}let hs;typeof HTMLElement=="function"&&(hs=class extends HTMLElement{constructor(e,t,n){super();D(this,"$$ctor");D(this,"$$s");D(this,"$$c");D(this,"$$cn",!1);D(this,"$$d",{});D(this,"$$r",!1);D(this,"$$p_d",{});D(this,"$$l",{});D(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const i=this.$$c.$on(e,t);this.$$l_u.set(t,i)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const i=this.$$l_u.get(t);i&&(i(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let a;return{c:function(){a=E("slot"),o!=="default"&&g(a,"name",o)},m:function(u,f){P(u,a,f)},d:function(u){u&&L(a)}}}};var e=t;if(await Promise.resolve(),!this.$$cn)return;const n={},i=Do(this);for(const o of this.$$s)o in i&&(n[o]=[t(o)]);for(const o of this.attributes){const a=this.$$g_p(o.name);a in this.$$d||(this.$$d[a]=An(a,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const a=An(o,this.$$d[o],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,a)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const o in this.$$l)for(const a of this.$$l[o]){const l=this.$$c.$on(o,a);this.$$l_u.set(a,l)}this.$$l={}}}attributeChangedCallback(e,t,n){var i;this.$$r||(e=this.$$g_p(e),this.$$d[e]=An(e,n,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function An(r,e,t,n){var s;const i=(s=t[r])==null?void 0:s.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!t[r])return e;if(n==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function _e(r,e,t,n,i,s){let o=class extends hs{constructor(){super(r,t,i),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){var c;l=An(a,l,e),this.$$d[a]=l,(c=this.$$c)==null||c.$set({[a]:l})}})}),n.forEach(a=>{Object.defineProperty(o.prototype,a,{get(){var l;return(l=this.$$c)==null?void 0:l[a]}})}),s&&(o=s(o)),r.element=o,o}class ve{constructor(){D(this,"$$");D(this,"$$set")}$destroy(){me(this,1),this.$destroy=M}$on(e,t){if(!yr(t))return M;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Ao(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Fo="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Fo);function Ho(r){let e,t,n,i;const s=r[3].default,o=_r(s,r,r[2],null);return{c(){e=E("form"),o&&o.c()},m(a,l){P(a,e,l),o&&o.m(e,null),t=!0,n||(i=[ne(e,"submit",Lo(r[4])),ne(e,"focusout",r[5]),Er(r[0].call(null,e))],n=!0)},p(a,[l]){o&&o.p&&(!t||l&4)&&kr(o,s,a,a[2],t?vr(s,a[2],l,null):xr(a[2]),null)},i(a){t||($(o,a),t=!0)},o(a){U(o,a),t=!1},d(a){a&&L(e),o&&o.d(a),n=!1,Ze(i)}}}function qo(r){var t;(t=Array.from(r.elements).filter(n=>(n.tagName==="INPUT"||n.tagName==="TEXTAREA")&&n.type!=="hidden"&&!n.disabled&&!n.readOnly)[0])==null||t.focus()}function jo(r,e,t){let{$$slots:n={},$$scope:i}=e,{autoFocus:s=!0}=e;async function o(c){await Mo(),s&&qo(c)}function a(c){oi.call(this,r,c)}function l(c){oi.call(this,r,c)}return r.$$set=c=>{"autoFocus"in c&&t(1,s=c.autoFocus),"$$scope"in c&&t(2,i=c.$$scope)},[o,s,i,n,a,l]}class ps extends ve{constructor(e){super(),ye(this,e,jo,Ho,we,{autoFocus:1})}get autoFocus(){return this.$$.ctx[1]}set autoFocus(e){this.$$set({autoFocus:e}),V()}}_e(ps,{autoFocus:{type:"Boolean"}},["default"],[],!0);function li(r){let e,t,n;return{c(){e=E("label"),t=Be(r[2]),g(e,"for",n="input_$"+r[3]),g(e,"class","block text-label")},m(i,s){P(i,e,s),y(e,t)},p(i,s){s&4&&lt(t,i[2]),s&8&&n!==(n="input_$"+i[3])&&g(e,"for",n)},d(i){i&&L(e)}}}function ci(r){return{c:M,m:M,d:M}}function Wo(r){let e,t,n,i,s,o,a,l,c,u,f,h,d,x,v=r[2]&&li(r),m=r[1]&&r[4]&&ci();return{c(){e=E("link"),t=E("script"),t.innerHTML="",i=H(),s=E("div"),v&&v.c(),o=H(),a=E("div"),l=E("input"),u=H(),f=E("input"),h=H(),m&&m.c(),g(e,"rel","stylesheet"),g(e,"href","https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css"),To(t.src,n="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js")||g(t,"src",n),l.readOnly=r[5],g(l,"type","tel"),g(l,"id",c="input_$"+r[3]),g(l,"class","block w-full text-field rounded-md py-2 pl-3 text-surface-900 focus:outline-none placeholder:text-surface-400"),pe(l,"stubber_webchat_general_input",!r[1]),pe(l,"stubber_webchat_general_input_error",r[1]),g(f,"type","hidden"),g(f,"name",r[3]),g(a,"class","flex flex-col w-full space-y-2 relative mt-2 rounded-md"),g(s,"class","flex flex-col w-full space-y-2 text-surface-900")},m(b,w){y(document.head,e),y(document.head,t),P(b,i,w),P(b,s,w),v&&v.m(s,null),y(s,o),y(s,a),y(a,l),r[10](l),at(l,r[0]),y(a,u),y(a,f),at(f,r[7]),y(s,h),m&&m.m(s,null),d||(x=[ne(t,"load",r[9]),ne(l,"input",r[8]),ne(l,"input",r[11]),ne(f,"input",r[12])],d=!0)},p(b,[w]){b[2]?v?v.p(b,w):(v=li(b),v.c(),v.m(s,o)):v&&(v.d(1),v=null),w&32&&(l.readOnly=b[5]),w&8&&c!==(c="input_$"+b[3])&&g(l,"id",c),w&1&&at(l,b[0]),w&2&&pe(l,"stubber_webchat_general_input",!b[1]),w&2&&pe(l,"stubber_webchat_general_input_error",b[1]),w&8&&g(f,"name",b[3]),w&128&&at(f,b[7]),b[1]&&b[4]?m||(m=ci(),m.c(),m.m(s,null)):m&&(m.d(1),m=null)},i:M,o:M,d(b){b&&(L(i),L(s)),L(e),L(t),v&&v.d(),r[10](null),m&&m.d(),d=!1,Ze(x)}}}function Vo(r,e,t){let{label:n}=e,{name:i}=e,{value:s}=e,{validationMessage:o="Invalid Number"}=e,{readonly:a=!1}=e,{isError:l}=e,c,u,f;const h=()=>{c.value.trim()&&(u.isValidNumber()?(t(1,l=!1),t(7,f=u.getNumber()),console.log({intVal:f,isError:l,isValid:u.isValidNumber(),dialCode:u.getSelectedCountryData().dialCode})):t(1,l=!0))};function d(){u=window.intlTelInput(c,{initialCountry:"auto",geoIpLookup:b=>{fetch("https://ipapi.co/json").then(w=>w.json()).then(w=>b(w.country_code)).catch(()=>b("us"))},utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"})}function x(b){gt[b?"unshift":"push"](()=>{c=b,t(6,c)})}function v(){s=this.value,t(0,s)}function m(){f=this.value,t(7,f)}return r.$$set=b=>{"label"in b&&t(2,n=b.label),"name"in b&&t(3,i=b.name),"value"in b&&t(0,s=b.value),"validationMessage"in b&&t(4,o=b.validationMessage),"readonly"in b&&t(5,a=b.readonly),"isError"in b&&t(1,l=b.isError)},[s,l,n,i,o,a,c,f,h,d,x,v,m]}class ds extends ve{constructor(e){super(),ye(this,e,Vo,Wo,we,{label:2,name:3,value:0,validationMessage:4,readonly:5,isError:1})}get label(){return this.$$.ctx[2]}set label(e){this.$$set({label:e}),V()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),V()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),V()}get validationMessage(){return this.$$.ctx[4]}set validationMessage(e){this.$$set({validationMessage:e}),V()}get readonly(){return this.$$.ctx[5]}set readonly(e){this.$$set({readonly:e}),V()}get isError(){return this.$$.ctx[1]}set isError(e){this.$$set({isError:e}),V()}}_e(ds,{label:{},name:{},value:{},validationMessage:{},readonly:{type:"Boolean"},isError:{}},[],[],!0);var ge="top",Le="bottom",Ne="right",be="left",Tr="auto",on=[ge,Le,Ne,be],$t="start",nn="end",Yo="clippingParents",ms="viewport",qt="popper",Go="reference",ui=on.reduce(function(r,e){return r.concat([e+"-"+$t,e+"-"+nn])},[]),gs=[].concat(on,[Tr]).reduce(function(r,e){return r.concat([e,e+"-"+$t,e+"-"+nn])},[]),Xo="beforeRead",Zo="read",Ko="afterRead",Qo="beforeMain",Jo="main",ea="afterMain",ta="beforeWrite",na="write",ra="afterWrite",ia=[Xo,Zo,Ko,Qo,Jo,ea,ta,na,ra];function Ge(r){return r?(r.nodeName||"").toLowerCase():null}function Te(r){if(r==null)return window;if(r.toString()!=="[object Window]"){var e=r.ownerDocument;return e&&e.defaultView||window}return r}function bt(r){var e=Te(r).Element;return r instanceof e||r instanceof Element}function $e(r){var e=Te(r).HTMLElement;return r instanceof e||r instanceof HTMLElement}function Ar(r){if(typeof ShadowRoot>"u")return!1;var e=Te(r).ShadowRoot;return r instanceof e||r instanceof ShadowRoot}function sa(r){var e=r.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},s=e.elements[t];!$e(s)||!Ge(s)||(Object.assign(s.style,n),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function oa(r){var e=r.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var i=e.elements[n],s=e.attributes[n]||{},o=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),a=o.reduce(function(l,c){return l[c]="",l},{});!$e(i)||!Ge(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(l){i.removeAttribute(l)}))})}}const aa={name:"applyStyles",enabled:!0,phase:"write",fn:sa,effect:oa,requires:["computeStyles"]};function je(r){return r.split("-")[0]}var mt=Math.max,Pn=Math.min,Lt=Math.round;function or(){var r=navigator.userAgentData;return r!=null&&r.brands&&Array.isArray(r.brands)?r.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function bs(){return!/^((?!chrome|android).)*safari/i.test(or())}function Nt(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var n=r.getBoundingClientRect(),i=1,s=1;e&&$e(r)&&(i=r.offsetWidth>0&&Lt(n.width)/r.offsetWidth||1,s=r.offsetHeight>0&&Lt(n.height)/r.offsetHeight||1);var o=bt(r)?Te(r):window,a=o.visualViewport,l=!bs()&&t,c=(n.left+(l&&a?a.offsetLeft:0))/i,u=(n.top+(l&&a?a.offsetTop:0))/s,f=n.width/i,h=n.height/s;return{width:f,height:h,top:u,right:c+f,bottom:u+h,left:c,x:c,y:u}}function Rr(r){var e=Nt(r),t=r.offsetWidth,n=r.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:r.offsetLeft,y:r.offsetTop,width:t,height:n}}function ys(r,e){var t=e.getRootNode&&e.getRootNode();if(r.contains(e))return!0;if(t&&Ar(t)){var n=e;do{if(n&&r.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function tt(r){return Te(r).getComputedStyle(r)}function la(r){return["table","td","th"].indexOf(Ge(r))>=0}function ct(r){return((bt(r)?r.ownerDocument:r.document)||window.document).documentElement}function Un(r){return Ge(r)==="html"?r:r.assignedSlot||r.parentNode||(Ar(r)?r.host:null)||ct(r)}function fi(r){return!$e(r)||tt(r).position==="fixed"?null:r.offsetParent}function ca(r){var e=/firefox/i.test(or()),t=/Trident/i.test(or());if(t&&$e(r)){var n=tt(r);if(n.position==="fixed")return null}var i=Un(r);for(Ar(i)&&(i=i.host);$e(i)&&["html","body"].indexOf(Ge(i))<0;){var s=tt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function an(r){for(var e=Te(r),t=fi(r);t&&la(t)&&tt(t).position==="static";)t=fi(t);return t&&(Ge(t)==="html"||Ge(t)==="body"&&tt(t).position==="static")?e:t||ca(r)||e}function Or(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function Kt(r,e,t){return mt(r,Pn(e,t))}function ua(r,e,t){var n=Kt(r,e,t);return n>t?t:n}function _s(){return{top:0,right:0,bottom:0,left:0}}function vs(r){return Object.assign({},_s(),r)}function ks(r,e){return e.reduce(function(t,n){return t[n]=r,t},{})}var fa=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,vs(typeof e!="number"?e:ks(e,on))};function ha(r){var e,t=r.state,n=r.name,i=r.options,s=t.elements.arrow,o=t.modifiersData.popperOffsets,a=je(t.placement),l=Or(a),c=[be,Ne].indexOf(a)>=0,u=c?"height":"width";if(!(!s||!o)){var f=fa(i.padding,t),h=Rr(s),d=l==="y"?ge:be,x=l==="y"?Le:Ne,v=t.rects.reference[u]+t.rects.reference[l]-o[l]-t.rects.popper[u],m=o[l]-t.rects.reference[l],b=an(s),w=b?l==="y"?b.clientHeight||0:b.clientWidth||0:0,_=v/2-m/2,T=f[d],A=w-h[u]-f[x],N=w/2-h[u]/2+_,q=Kt(T,N,A),W=l;t.modifiersData[n]=(e={},e[W]=q,e.centerOffset=q-N,e)}}function pa(r){var e=r.state,t=r.options,n=t.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||ys(e.elements.popper,i)&&(e.elements.arrow=i))}const da={name:"arrow",enabled:!0,phase:"main",fn:ha,effect:pa,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Pt(r){return r.split("-")[1]}var ma={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ga(r,e){var t=r.x,n=r.y,i=e.devicePixelRatio||1;return{x:Lt(t*i)/i||0,y:Lt(n*i)/i||0}}function hi(r){var e,t=r.popper,n=r.popperRect,i=r.placement,s=r.variation,o=r.offsets,a=r.position,l=r.gpuAcceleration,c=r.adaptive,u=r.roundOffsets,f=r.isFixed,h=o.x,d=h===void 0?0:h,x=o.y,v=x===void 0?0:x,m=typeof u=="function"?u({x:d,y:v}):{x:d,y:v};d=m.x,v=m.y;var b=o.hasOwnProperty("x"),w=o.hasOwnProperty("y"),_=be,T=ge,A=window;if(c){var N=an(t),q="clientHeight",W="clientWidth";if(N===Te(t)&&(N=ct(t),tt(N).position!=="static"&&a==="absolute"&&(q="scrollHeight",W="scrollWidth")),N=N,i===ge||(i===be||i===Ne)&&s===nn){T=Le;var G=f&&N===A&&A.visualViewport?A.visualViewport.height:N[q];v-=G-n.height,v*=l?1:-1}if(i===be||(i===ge||i===Le)&&s===nn){_=Ne;var B=f&&N===A&&A.visualViewport?A.visualViewport.width:N[W];d-=B-n.width,d*=l?1:-1}}var Q=Object.assign({position:a},c&&ma),J=u===!0?ga({x:d,y:v},Te(t)):{x:d,y:v};if(d=J.x,v=J.y,l){var X;return Object.assign({},Q,(X={},X[T]=w?"0":"",X[_]=b?"0":"",X.transform=(A.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",X))}return Object.assign({},Q,(e={},e[T]=w?v+"px":"",e[_]=b?d+"px":"",e.transform="",e))}function ba(r){var e=r.state,t=r.options,n=t.gpuAcceleration,i=n===void 0?!0:n,s=t.adaptive,o=s===void 0?!0:s,a=t.roundOffsets,l=a===void 0?!0:a,c={placement:je(e.placement),variation:Pt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,hi(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,hi(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const wa={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ba,data:{}};var mn={passive:!0};function ya(r){var e=r.state,t=r.instance,n=r.options,i=n.scroll,s=i===void 0?!0:i,o=n.resize,a=o===void 0?!0:o,l=Te(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",t.update,mn)}),a&&l.addEventListener("resize",t.update,mn),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",t.update,mn)}),a&&l.removeEventListener("resize",t.update,mn)}}const _a={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ya,data:{}};var va={left:"right",right:"left",bottom:"top",top:"bottom"};function Rn(r){return r.replace(/left|right|bottom|top/g,function(e){return va[e]})}var ka={start:"end",end:"start"};function pi(r){return r.replace(/start|end/g,function(e){return ka[e]})}function Sr(r){var e=Te(r),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function Cr(r){return Nt(ct(r)).left+Sr(r).scrollLeft}function xa(r,e){var t=Te(r),n=ct(r),i=t.visualViewport,s=n.clientWidth,o=n.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;var c=bs();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a+Cr(r),y:l}}function Ea(r){var e,t=ct(r),n=Sr(r),i=(e=r.ownerDocument)==null?void 0:e.body,s=mt(t.scrollWidth,t.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=mt(t.scrollHeight,t.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+Cr(r),l=-n.scrollTop;return tt(i||t).direction==="rtl"&&(a+=mt(t.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function $r(r){var e=tt(r),t=e.overflow,n=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+i+n)}function xs(r){return["html","body","#document"].indexOf(Ge(r))>=0?r.ownerDocument.body:$e(r)&&$r(r)?r:xs(Un(r))}function Qt(r,e){var t;e===void 0&&(e=[]);var n=xs(r),i=n===((t=r.ownerDocument)==null?void 0:t.body),s=Te(n),o=i?[s].concat(s.visualViewport||[],$r(n)?n:[]):n,a=e.concat(o);return i?a:a.concat(Qt(Un(o)))}function ar(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function Ta(r,e){var t=Nt(r,!1,e==="fixed");return t.top=t.top+r.clientTop,t.left=t.left+r.clientLeft,t.bottom=t.top+r.clientHeight,t.right=t.left+r.clientWidth,t.width=r.clientWidth,t.height=r.clientHeight,t.x=t.left,t.y=t.top,t}function di(r,e,t){return e===ms?ar(xa(r,t)):bt(e)?Ta(e,t):ar(Ea(ct(r)))}function Aa(r){var e=Qt(Un(r)),t=["absolute","fixed"].indexOf(tt(r).position)>=0,n=t&&$e(r)?an(r):r;return bt(n)?e.filter(function(i){return bt(i)&&ys(i,n)&&Ge(i)!=="body"}):[]}function Ra(r,e,t,n){var i=e==="clippingParents"?Aa(r):[].concat(e),s=[].concat(i,[t]),o=s[0],a=s.reduce(function(l,c){var u=di(r,c,n);return l.top=mt(u.top,l.top),l.right=Pn(u.right,l.right),l.bottom=Pn(u.bottom,l.bottom),l.left=mt(u.left,l.left),l},di(r,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Es(r){var e=r.reference,t=r.element,n=r.placement,i=n?je(n):null,s=n?Pt(n):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,l;switch(i){case ge:l={x:o,y:e.y-t.height};break;case Le:l={x:o,y:e.y+e.height};break;case Ne:l={x:e.x+e.width,y:a};break;case be:l={x:e.x-t.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Or(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case $t:l[c]=l[c]-(e[u]/2-t[u]/2);break;case nn:l[c]=l[c]+(e[u]/2-t[u]/2);break}}return l}function rn(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=n===void 0?r.placement:n,s=t.strategy,o=s===void 0?r.strategy:s,a=t.boundary,l=a===void 0?Yo:a,c=t.rootBoundary,u=c===void 0?ms:c,f=t.elementContext,h=f===void 0?qt:f,d=t.altBoundary,x=d===void 0?!1:d,v=t.padding,m=v===void 0?0:v,b=vs(typeof m!="number"?m:ks(m,on)),w=h===qt?Go:qt,_=r.rects.popper,T=r.elements[x?w:h],A=Ra(bt(T)?T:T.contextElement||ct(r.elements.popper),l,u,o),N=Nt(r.elements.reference),q=Es({reference:N,element:_,strategy:"absolute",placement:i}),W=ar(Object.assign({},_,q)),G=h===qt?W:N,B={top:A.top-G.top+b.top,bottom:G.bottom-A.bottom+b.bottom,left:A.left-G.left+b.left,right:G.right-A.right+b.right},Q=r.modifiersData.offset;if(h===qt&&Q){var J=Q[i];Object.keys(B).forEach(function(X){var ie=[Ne,Le].indexOf(X)>=0?1:-1,se=[ge,Le].indexOf(X)>=0?"y":"x";B[X]+=J[se]*ie})}return B}function Oa(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=t.boundary,s=t.rootBoundary,o=t.padding,a=t.flipVariations,l=t.allowedAutoPlacements,c=l===void 0?gs:l,u=Pt(n),f=u?a?ui:ui.filter(function(x){return Pt(x)===u}):on,h=f.filter(function(x){return c.indexOf(x)>=0});h.length===0&&(h=f);var d=h.reduce(function(x,v){return x[v]=rn(r,{placement:v,boundary:i,rootBoundary:s,padding:o})[je(v)],x},{});return Object.keys(d).sort(function(x,v){return d[x]-d[v]})}function Sa(r){if(je(r)===Tr)return[];var e=Rn(r);return[pi(r),e,pi(e)]}function Ca(r){var e=r.state,t=r.options,n=r.name;if(!e.modifiersData[n]._skip){for(var i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!0:o,l=t.fallbackPlacements,c=t.padding,u=t.boundary,f=t.rootBoundary,h=t.altBoundary,d=t.flipVariations,x=d===void 0?!0:d,v=t.allowedAutoPlacements,m=e.options.placement,b=je(m),w=b===m,_=l||(w||!x?[Rn(m)]:Sa(m)),T=[m].concat(_).reduce(function(Oe,Se){return Oe.concat(je(Se)===Tr?Oa(e,{placement:Se,boundary:u,rootBoundary:f,padding:c,flipVariations:x,allowedAutoPlacements:v}):Se)},[]),A=e.rects.reference,N=e.rects.popper,q=new Map,W=!0,G=T[0],B=0;B<T.length;B++){var Q=T[B],J=je(Q),X=Pt(Q)===$t,ie=[ge,Le].indexOf(J)>=0,se=ie?"width":"height",te=rn(e,{placement:Q,boundary:u,rootBoundary:f,altBoundary:h,padding:c}),R=ie?X?Ne:be:X?Le:ge;A[se]>N[se]&&(R=Rn(R));var C=Rn(R),I=[];if(s&&I.push(te[J]<=0),a&&I.push(te[R]<=0,te[C]<=0),I.every(function(Oe){return Oe})){G=Q,W=!1;break}q.set(Q,I)}if(W)for(var Re=x?3:1,ee=function(Se){var rt=T.find(function(it){var Ue=q.get(it);if(Ue)return Ue.slice(0,Se).every(function(_t){return _t})});if(rt)return G=rt,"break"},nt=Re;nt>0;nt--){var Z=ee(nt);if(Z==="break")break}e.placement!==G&&(e.modifiersData[n]._skip=!0,e.placement=G,e.reset=!0)}}const $a={name:"flip",enabled:!0,phase:"main",fn:Ca,requiresIfExists:["offset"],data:{_skip:!1}};function mi(r,e,t){return t===void 0&&(t={x:0,y:0}),{top:r.top-e.height-t.y,right:r.right-e.width+t.x,bottom:r.bottom-e.height+t.y,left:r.left-e.width-t.x}}function gi(r){return[ge,Ne,Le,be].some(function(e){return r[e]>=0})}function La(r){var e=r.state,t=r.name,n=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=rn(e,{elementContext:"reference"}),a=rn(e,{altBoundary:!0}),l=mi(o,n),c=mi(a,i,s),u=gi(l),f=gi(c);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}const Na={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:La};function Pa(r,e,t){var n=je(r),i=[be,ge].indexOf(n)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:r})):t,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[be,Ne].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Da(r){var e=r.state,t=r.options,n=r.name,i=t.offset,s=i===void 0?[0,0]:i,o=gs.reduce(function(u,f){return u[f]=Pa(f,e.rects,s),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=o}const Ia={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Da};function Ma(r){var e=r.state,t=r.name;e.modifiersData[t]=Es({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Ba={name:"popperOffsets",enabled:!0,phase:"read",fn:Ma,data:{}};function za(r){return r==="x"?"y":"x"}function Ua(r){var e=r.state,t=r.options,n=r.name,i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!1:o,l=t.boundary,c=t.rootBoundary,u=t.altBoundary,f=t.padding,h=t.tether,d=h===void 0?!0:h,x=t.tetherOffset,v=x===void 0?0:x,m=rn(e,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),b=je(e.placement),w=Pt(e.placement),_=!w,T=Or(b),A=za(T),N=e.modifiersData.popperOffsets,q=e.rects.reference,W=e.rects.popper,G=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,B=typeof G=="number"?{mainAxis:G,altAxis:G}:Object.assign({mainAxis:0,altAxis:0},G),Q=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,J={x:0,y:0};if(N){if(s){var X,ie=T==="y"?ge:be,se=T==="y"?Le:Ne,te=T==="y"?"height":"width",R=N[T],C=R+m[ie],I=R-m[se],Re=d?-W[te]/2:0,ee=w===$t?q[te]:W[te],nt=w===$t?-W[te]:-q[te],Z=e.elements.arrow,Oe=d&&Z?Rr(Z):{width:0,height:0},Se=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:_s(),rt=Se[ie],it=Se[se],Ue=Kt(0,q[te],Oe[te]),_t=_?q[te]/2-Re-Ue-rt-B.mainAxis:ee-Ue-rt-B.mainAxis,st=_?-q[te]/2+Re+Ue+it+B.mainAxis:nt+Ue+it+B.mainAxis,Pe=e.elements.arrow&&an(e.elements.arrow),It=Pe?T==="y"?Pe.clientTop||0:Pe.clientLeft||0:0,vt=(X=Q==null?void 0:Q[T])!=null?X:0,ot=R+_t-vt-It,kt=R+st-vt,ut=Kt(d?Pn(C,ot):C,R,d?mt(I,kt):I);N[T]=ut,J[T]=ut-R}if(a){var Mt,un=T==="x"?ge:be,qn=T==="x"?Le:Ne,De=N[A],Fe=A==="y"?"height":"width",Ke=De+m[un],Qe=De-m[qn],xt=[ge,be].indexOf(b)!==-1,Bt=(Mt=Q==null?void 0:Q[A])!=null?Mt:0,zt=xt?Ke:De-q[Fe]-W[Fe]-Bt+B.altAxis,Et=xt?De+q[Fe]+W[Fe]-Bt-B.altAxis:Qe,Ut=d&&xt?ua(zt,De,Et):Kt(d?zt:Ke,De,d?Et:Qe);N[A]=Ut,J[A]=Ut-De}e.modifiersData[n]=J}}const Fa={name:"preventOverflow",enabled:!0,phase:"main",fn:Ua,requiresIfExists:["offset"]};function Ha(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function qa(r){return r===Te(r)||!$e(r)?Sr(r):Ha(r)}function ja(r){var e=r.getBoundingClientRect(),t=Lt(e.width)/r.offsetWidth||1,n=Lt(e.height)/r.offsetHeight||1;return t!==1||n!==1}function Wa(r,e,t){t===void 0&&(t=!1);var n=$e(e),i=$e(e)&&ja(e),s=ct(e),o=Nt(r,i,t),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!t)&&((Ge(e)!=="body"||$r(s))&&(a=qa(e)),$e(e)?(l=Nt(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=Cr(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Va(r){var e=new Map,t=new Set,n=[];r.forEach(function(s){e.set(s.name,s)});function i(s){t.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var l=e.get(a);l&&i(l)}}),n.push(s)}return r.forEach(function(s){t.has(s.name)||i(s)}),n}function Ya(r){var e=Va(r);return ia.reduce(function(t,n){return t.concat(e.filter(function(i){return i.phase===n}))},[])}function Ga(r){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(r())})})),e}}function Xa(r){var e=r.reduce(function(t,n){var i=t[n.name];return t[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var bi={placement:"bottom",modifiers:[],strategy:"absolute"};function wi(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Za(r){r===void 0&&(r={});var e=r,t=e.defaultModifiers,n=t===void 0?[]:t,i=e.defaultOptions,s=i===void 0?bi:i;return function(a,l,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},bi,s),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},f=[],h=!1,d={state:u,setOptions:function(b){var w=typeof b=="function"?b(u.options):b;v(),u.options=Object.assign({},s,u.options,w),u.scrollParents={reference:bt(a)?Qt(a):a.contextElement?Qt(a.contextElement):[],popper:Qt(l)};var _=Ya(Xa([].concat(n,u.options.modifiers)));return u.orderedModifiers=_.filter(function(T){return T.enabled}),x(),d.update()},forceUpdate:function(){if(!h){var b=u.elements,w=b.reference,_=b.popper;if(wi(w,_)){u.rects={reference:Wa(w,an(_),u.options.strategy==="fixed"),popper:Rr(_)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(B){return u.modifiersData[B.name]=Object.assign({},B.data)});for(var T=0;T<u.orderedModifiers.length;T++){if(u.reset===!0){u.reset=!1,T=-1;continue}var A=u.orderedModifiers[T],N=A.fn,q=A.options,W=q===void 0?{}:q,G=A.name;typeof N=="function"&&(u=N({state:u,options:W,name:G,instance:d})||u)}}}},update:Ga(function(){return new Promise(function(m){d.forceUpdate(),m(u)})}),destroy:function(){v(),h=!0}};if(!wi(a,l))return d;d.setOptions(c).then(function(m){!h&&c.onFirstUpdate&&c.onFirstUpdate(m)});function x(){u.orderedModifiers.forEach(function(m){var b=m.name,w=m.options,_=w===void 0?{}:w,T=m.effect;if(typeof T=="function"){var A=T({state:u,name:b,instance:d,options:_}),N=function(){};f.push(A||N)}})}function v(){f.forEach(function(m){return m()}),f=[]}return d}}var Ka=[_a,Ba,wa,aa,Ia,$a,Fa,da,Na],Qa=Za({defaultModifiers:Ka});function Ja(r){let e=null,t,n,i=r;const s=()=>{t!==void 0&&n!==void 0&&(e=Qa(t,n,i))},o=()=>{e!==null&&(e.destroy(),e=null)},a=u=>"subscribe"in u?(l(u),{}):(t=u,s(),{destroy(){o()}}),l=u=>{const f=u.subscribe(h=>{t===void 0?(t=h,s()):(Object.assign(t,h),e==null||e.update())});cs(f)};return[a,(u,f)=>(n=u,i={...r,...f},s(),{update(h){i={...r,...h},e==null||e.setOptions(i)},destroy(){o()}}),()=>e]}function el(r){Oo(r,"svelte-q1pe4",'#tooltip[data-popper-placement^="top"].svelte-q1pe4>.arrow.svelte-q1pe4{border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--surface-900);bottom:-5px;left:calc(50% - 5px)}#tooltip[data-popper-placement^="bottom"].svelte-q1pe4>.arrow.svelte-q1pe4{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid var(--surface-900);top:-5px;left:calc(50% - 5px)}#tooltip[data-popper-placement^="left"].svelte-q1pe4>.arrow.svelte-q1pe4{border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid var(--surface-900);right:-5px;top:calc(50% - 5px)}#tooltip[data-popper-placement^="right"].svelte-q1pe4>.arrow.svelte-q1pe4{border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid var(--surface-900);left:-5px;top:calc(50% - 5px)}')}const tl=r=>({}),yi=r=>({}),nl=r=>({}),_i=r=>({});function vi(r){let e,t,n,i,s,o,a;const l=r[6].tooltip,c=_r(l,r,r[5],yi);return{c(){e=E("div"),t=E("span"),c&&c.c(),n=H(),i=E("div"),g(t,"class","text-label"),g(i,"id","arrow"),g(i,"class","arrow absolute w-0 h-0 svelte-q1pe4"),g(e,"id","tooltip"),g(e,"class","z-10 bg-surface-900 rounded text-white p-1 px-3 drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] svelte-q1pe4"),g(e,"data-popper-placement",r[0])},m(u,f){P(u,e,f),y(e,t),c&&c.m(t,null),y(e,n),y(e,i),s=!0,o||(a=Er(r[2].call(null,e,r[4])),o=!0)},p(u,f){c&&c.p&&(!s||f&32)&&kr(c,l,u,u[5],s?vr(l,u[5],f,tl):xr(u[5]),yi),(!s||f&1)&&g(e,"data-popper-placement",u[0])},i(u){s||($(c,u),s=!0)},o(u){U(c,u),s=!1},d(u){u&&L(e),c&&c.d(u),o=!1,a()}}}function rl(r){let e,t,n,i,s,o;const a=r[6].subject,l=_r(a,r,r[5],_i);let c=r[3]&&vi(r);return{c(){e=E("div"),l&&l.c(),t=H(),c&&c.c(),n=zn()},m(u,f){P(u,e,f),l&&l.m(e,null),P(u,t,f),c&&c.m(u,f),P(u,n,f),i=!0,s||(o=[Er(r[1].call(null,e)),ne(e,"mouseenter",r[7]),ne(e,"mouseleave",r[8]),ne(e,"click",r[9])],s=!0)},p(u,[f]){l&&l.p&&(!i||f&32)&&kr(l,a,u,u[5],i?vr(a,u[5],f,nl):xr(u[5]),_i),u[3]?c?(c.p(u,f),f&8&&$(c,1)):(c=vi(u),c.c(),$(c,1),c.m(n.parentNode,n)):c&&(Ve(),U(c,1,1,()=>{c=null}),Ye())},i(u){i||($(l,u),$(c),i=!0)},o(u){U(l,u),U(c),i=!1},d(u){u&&(L(e),L(t),L(n)),l&&l.d(u),c&&c.d(u),s=!1,Ze(o)}}}function il(r,e,t){let{$$slots:n={},$$scope:i}=e,{placement:s="top"}=e,o,a;const l={modifiers:[{name:"offset",options:{offset:[0,8]}}]};let c=!1;const u=()=>t(3,c=!0),f=()=>t(3,c=!1),h=()=>{t(3,c=!1),setTimeout(()=>{t(3,c=!0)},0)};return r.$$set=d=>{"placement"in d&&t(0,s=d.placement),"$$scope"in d&&t(5,i=d.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&t(1,[o,a]=Ja({placement:s}),o,(t(2,a),t(0,s)))},[s,o,a,c,l,i,n,u,f,h]}class Ts extends ve{constructor(e){super(),ye(this,e,il,rl,we,{placement:0},el)}get placement(){return this.$$.ctx[0]}set placement(e){this.$$set({placement:e}),V()}}_e(Ts,{placement:{}},["subject","tooltip"],[],!0);function ki(r){let e,t,n,i,s,o,a=r[8]&&xi(r);return{c(){e=E("div"),t=E("label"),n=Be(r[2]),s=H(),a&&a.c(),g(t,"for",i="input_$"+r[4]),g(t,"class","block text-label"),g(e,"class","flex items-center space-x-2")},m(l,c){P(l,e,c),y(e,t),y(t,n),y(e,s),a&&a.m(e,null),o=!0},p(l,c){(!o||c&4)&&lt(n,l[2]),(!o||c&16&&i!==(i="input_$"+l[4]))&&g(t,"for",i),l[8]?a?(a.p(l,c),c&256&&$(a,1)):(a=xi(l),a.c(),$(a,1),a.m(e,null)):a&&(Ve(),U(a,1,1,()=>{a=null}),Ye())},i(l){o||($(a),o=!0)},o(l){U(a),o=!1},d(l){l&&L(e),a&&a.d()}}}function xi(r){let e,t;return e=new Ts({props:{$$slots:{tooltip:[ol],subject:[sl]},$$scope:{ctx:r}}}),{c(){Ee(e.$$.fragment)},m(n,i){de(e,n,i),t=!0},p(n,i){const s={};i&8448&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){U(e.$$.fragment,n),t=!1},d(n){me(e,n)}}}function sl(r){let e;return{c(){e=E("span"),e.innerHTML='<i class="fa fa-circle-question text-surface-500"></i>',g(e,"slot","subject")},m(t,n){P(t,e,n)},p:M,d(t){t&&L(e)}}}function ol(r){let e,t;return{c(){e=E("span"),t=Be(r[8]),g(e,"slot","tooltip")},m(n,i){P(n,e,i),y(e,t)},p(n,i){i&256&&lt(t,n[8])},d(n){n&&L(e)}}}function Ei(r){return{c:M,m:M,d:M}}function al(r){let e,t,n,i,s,o,a,l,c,u,f=r[2]&&ki(r),h=r[1]&&r[5]&&Ei();return{c(){e=E("div"),f&&f.c(),t=H(),n=E("div"),i=E("input"),a=H(),h&&h.c(),i.disabled=r[7],i.readOnly=r[6],g(i,"type","text"),g(i,"id",s="input_$"+r[4]),g(i,"placeholder",o=r[3]||r[2]),g(i,"class","block w-full text-field rounded-md py-2 pl-3 text-surface-900 focus:outline-none placeholder:text-surface-400"),g(i,"name",r[4]),pe(i,"stubber_webchat_general_input",!r[1]),pe(i,"stubber_webchat_general_input_error",r[1]),g(n,"class","relative rounded-md"),g(e,"class","flex flex-col w-full space-y-2 text-surface-900")},m(d,x){P(d,e,x),f&&f.m(e,null),y(e,t),y(e,n),y(n,i),at(i,r[0]),y(e,a),h&&h.m(e,null),l=!0,c||(u=ne(i,"input",r[11]),c=!0)},p(d,[x]){d[2]?f?(f.p(d,x),x&4&&$(f,1)):(f=ki(d),f.c(),$(f,1),f.m(e,t)):f&&(Ve(),U(f,1,1,()=>{f=null}),Ye()),(!l||x&128)&&(i.disabled=d[7]),(!l||x&64)&&(i.readOnly=d[6]),(!l||x&16&&s!==(s="input_$"+d[4]))&&g(i,"id",s),(!l||x&12&&o!==(o=d[3]||d[2]))&&g(i,"placeholder",o),(!l||x&16)&&g(i,"name",d[4]),x&1&&i.value!==d[0]&&at(i,d[0]),(!l||x&2)&&pe(i,"stubber_webchat_general_input",!d[1]),(!l||x&2)&&pe(i,"stubber_webchat_general_input_error",d[1]),d[1]&&d[5]?h||(h=Ei(),h.c(),h.m(e,null)):h&&(h.d(1),h=null)},i(d){l||($(f),l=!0)},o(d){U(f),l=!1},d(d){d&&L(e),f&&f.d(),h&&h.d(),c=!1,u()}}}function ll(r,e,t){let n,{label:i}=e,{placeholder:s=""}=e,{name:o}=e,{value:a}=e,{regex:l=""}=e,{validationMessage:c=""}=e,{readonly:u=!1}=e,{disabled:f=!1}=e,{tooltipText:h=""}=e,{isError:d=!1}=e;const x=(m,b)=>b?!m.test(b):!1;function v(){a=this.value,t(0,a)}return r.$$set=m=>{"label"in m&&t(2,i=m.label),"placeholder"in m&&t(3,s=m.placeholder),"name"in m&&t(4,o=m.name),"value"in m&&t(0,a=m.value),"regex"in m&&t(9,l=m.regex),"validationMessage"in m&&t(5,c=m.validationMessage),"readonly"in m&&t(6,u=m.readonly),"disabled"in m&&t(7,f=m.disabled),"tooltipText"in m&&t(8,h=m.tooltipText),"isError"in m&&t(1,d=m.isError)},r.$$.update=()=>{r.$$.dirty&512&&t(10,n=new RegExp(l)),r.$$.dirty&1025&&t(1,d=x(n,a))},[a,d,i,s,o,c,u,f,h,l,n,v]}class As extends ve{constructor(e){super(),ye(this,e,ll,al,we,{label:2,placeholder:3,name:4,value:0,regex:9,validationMessage:5,readonly:6,disabled:7,tooltipText:8,isError:1})}get label(){return this.$$.ctx[2]}set label(e){this.$$set({label:e}),V()}get placeholder(){return this.$$.ctx[3]}set placeholder(e){this.$$set({placeholder:e}),V()}get name(){return this.$$.ctx[4]}set name(e){this.$$set({name:e}),V()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),V()}get regex(){return this.$$.ctx[9]}set regex(e){this.$$set({regex:e}),V()}get validationMessage(){return this.$$.ctx[5]}set validationMessage(e){this.$$set({validationMessage:e}),V()}get readonly(){return this.$$.ctx[6]}set readonly(e){this.$$set({readonly:e}),V()}get disabled(){return this.$$.ctx[7]}set disabled(e){this.$$set({disabled:e}),V()}get tooltipText(){return this.$$.ctx[8]}set tooltipText(e){this.$$set({tooltipText:e}),V()}get isError(){return this.$$.ctx[1]}set isError(e){this.$$set({isError:e}),V()}}_e(As,{label:{},placeholder:{},name:{},value:{},regex:{},validationMessage:{},readonly:{type:"Boolean"},disabled:{type:"Boolean"},tooltipText:{},isError:{type:"Boolean"}},[],[],!0);function cl(r){let e,t,n,i;function s(l){r[7](l)}function o(l){r[8](l)}let a={name:"contact",label:"Cellphone Number"};return r[1]!==void 0&&(a.isError=r[1]),r[2]!==void 0&&(a.value=r[2]),e=new ds({props:a}),gt.push(()=>Nn(e,"isError",s)),gt.push(()=>Nn(e,"value",o)),{c(){Ee(e.$$.fragment)},m(l,c){de(e,l,c),i=!0},p(l,c){const u={};!t&&c&2&&(t=!0,u.isError=l[1],Ln(()=>t=!1)),!n&&c&4&&(n=!0,u.value=l[2],Ln(()=>n=!1)),e.$set(u)},i(l){i||($(e.$$.fragment,l),i=!0)},o(l){U(e.$$.fragment,l),i=!1},d(l){me(e,l)}}}function ul(r){let e,t,n,i;function s(l){r[5](l)}function o(l){r[6](l)}let a={name:"contact",label:"Email Address",regex:pl,validationMessage:"Invalid Email"};return r[1]!==void 0&&(a.isError=r[1]),r[2]!==void 0&&(a.value=r[2]),e=new As({props:a}),gt.push(()=>Nn(e,"isError",s)),gt.push(()=>Nn(e,"value",o)),{c(){Ee(e.$$.fragment)},m(l,c){de(e,l,c),i=!0},p(l,c){const u={};!t&&c&2&&(t=!0,u.isError=l[1],Ln(()=>t=!1)),!n&&c&4&&(n=!0,u.value=l[2],Ln(()=>n=!1)),e.$set(u)},i(l){i||($(e.$$.fragment,l),i=!0)},o(l){U(e.$$.fragment,l),i=!1},d(l){me(e,l)}}}function Ti(r){let e,t,n,i;return{c(){e=E("div"),t=E("button"),n=Be("Submit"),g(t,"type","submit"),g(t,"class","w-32 h-10 transition duration-300 my-2 mx-auto bg-gray-300 rounded-xl stubber_webchat_chat_button"),t.disabled=i=r[1]||!r[2],g(e,"class","flex flex-row space-x-2 items-center")},m(s,o){P(s,e,o),y(e,t),y(t,n)},p(s,o){o&6&&i!==(i=s[1]||!s[2])&&(t.disabled=i)},d(s){s&&L(e)}}}function fl(r){let e,t,n,i,s;const o=[ul,cl],a=[];function l(u,f){return u[0]=="email"?0:u[0]=="mobile"?1:-1}~(t=l(r))&&(n=a[t]=o[t](r));let c=r[0]&&Ti(r);return{c(){e=E("div"),n&&n.c(),i=H(),c&&c.c(),g(e,"class","w-full md:w-110 space-y-5")},m(u,f){P(u,e,f),~t&&a[t].m(e,null),y(e,i),c&&c.m(e,null),s=!0},p(u,f){let h=t;t=l(u),t===h?~t&&a[t].p(u,f):(n&&(Ve(),U(a[h],1,1,()=>{a[h]=null}),Ye()),~t?(n=a[t],n?n.p(u,f):(n=a[t]=o[t](u),n.c()),$(n,1),n.m(e,i)):n=null),u[0]?c?c.p(u,f):(c=Ti(u),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i(u){s||($(n),s=!0)},o(u){U(n),s=!1},d(u){u&&L(e),~t&&a[t].d(),c&&c.d()}}}function hl(r){let e,t;return e=new ps({props:{$$slots:{default:[fl]},$$scope:{ctx:r}}}),e.$on("submit",r[3]),{c(){Ee(e.$$.fragment)},m(n,i){de(e,n,i),t=!0},p(n,[i]){const s={};i&519&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){U(e.$$.fragment,n),t=!1},d(n){me(e,n)}}}let pl=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,250})+$/;function dl(r,e,t){let{submit:n}=e,{contactPointType:i}=e,s,o;async function a(){let d={contact:new FormData(this).get("contact").trim(),type:i};await n(d)}function l(h){s=h,t(1,s)}function c(h){o=h,t(2,o)}function u(h){s=h,t(1,s)}function f(h){o=h,t(2,o)}return r.$$set=h=>{"submit"in h&&t(4,n=h.submit),"contactPointType"in h&&t(0,i=h.contactPointType)},[i,s,o,a,n,l,c,u,f]}class Rs extends ve{constructor(e){super(),ye(this,e,dl,hl,we,{submit:4,contactPointType:0})}get submit(){return this.$$.ctx[4]}set submit(e){this.$$set({submit:e}),V()}get contactPointType(){return this.$$.ctx[0]}set contactPointType(e){this.$$set({contactPointType:e}),V()}}_e(Rs,{submit:{},contactPointType:{}},[],[],!0);/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */const{entries:Os,setPrototypeOf:Ai,isFrozen:ml,getPrototypeOf:gl,getOwnPropertyDescriptor:bl}=Object;let{freeze:ue,seal:ze,create:Ss}=Object,{apply:lr,construct:cr}=typeof Reflect<"u"&&Reflect;ue||(ue=function(e){return e});ze||(ze=function(e){return e});lr||(lr=function(e,t,n){return e.apply(t,n)});cr||(cr=function(e,t){return new e(...t)});const gn=Ae(Array.prototype.forEach),Ri=Ae(Array.prototype.pop),jt=Ae(Array.prototype.push),On=Ae(String.prototype.toLowerCase),Zn=Ae(String.prototype.toString),wl=Ae(String.prototype.match),Wt=Ae(String.prototype.replace),yl=Ae(String.prototype.indexOf),_l=Ae(String.prototype.trim),Ie=Ae(Object.prototype.hasOwnProperty),ke=Ae(RegExp.prototype.test),Vt=vl(TypeError);function Ae(r){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return lr(r,e,n)}}function vl(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return cr(r,t)}}function z(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:On;Ai&&Ai(r,null);let n=e.length;for(;n--;){let i=e[n];if(typeof i=="string"){const s=t(i);s!==i&&(ml(e)||(e[n]=s),i=s)}r[i]=!0}return r}function kl(r){for(let e=0;e<r.length;e++)Ie(r,e)||(r[e]=null);return r}function pt(r){const e=Ss(null);for(const[t,n]of Os(r))Ie(r,t)&&(Array.isArray(n)?e[t]=kl(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=pt(n):e[t]=n);return e}function bn(r,e){for(;r!==null;){const n=bl(r,e);if(n){if(n.get)return Ae(n.get);if(typeof n.value=="function")return Ae(n.value)}r=gl(r)}function t(){return null}return t}const Oi=ue(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Kn=ue(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Qn=ue(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),xl=ue(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Jn=ue(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),El=ue(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Si=ue(["#text"]),Ci=ue(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),er=ue(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),$i=ue(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),wn=ue(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Tl=ze(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Al=ze(/<%[\w\W]*|[\w\W]*%>/gm),Rl=ze(/\${[\w\W]*}/gm),Ol=ze(/^data-[\-\w.\u00B7-\uFFFF]/),Sl=ze(/^aria-[\-\w]+$/),Cs=ze(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Cl=ze(/^(?:\w+script|data):/i),$l=ze(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),$s=ze(/^html$/i);var Li=Object.freeze({__proto__:null,MUSTACHE_EXPR:Tl,ERB_EXPR:Al,TMPLIT_EXPR:Rl,DATA_ATTR:Ol,ARIA_ATTR:Sl,IS_ALLOWED_URI:Cs,IS_SCRIPT_OR_DATA:Cl,ATTR_WHITESPACE:$l,DOCTYPE_NAME:$s});const Ll=function(){return typeof window>"u"?null:window},Nl=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(n=t.getAttribute(i));const s="dompurify"+(n?"#"+n:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function Ls(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ll();const e=S=>Ls(S);if(e.version="3.0.9",e.removed=[],!r||!r.document||r.document.nodeType!==9)return e.isSupported=!1,e;let{document:t}=r;const n=t,i=n.currentScript,{DocumentFragment:s,HTMLTemplateElement:o,Node:a,Element:l,NodeFilter:c,NamedNodeMap:u=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:f,DOMParser:h,trustedTypes:d}=r,x=l.prototype,v=bn(x,"cloneNode"),m=bn(x,"nextSibling"),b=bn(x,"childNodes"),w=bn(x,"parentNode");if(typeof o=="function"){const S=t.createElement("template");S.content&&S.content.ownerDocument&&(t=S.content.ownerDocument)}let _,T="";const{implementation:A,createNodeIterator:N,createDocumentFragment:q,getElementsByTagName:W}=t,{importNode:G}=n;let B={};e.isSupported=typeof Os=="function"&&typeof w=="function"&&A&&A.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Q,ERB_EXPR:J,TMPLIT_EXPR:X,DATA_ATTR:ie,ARIA_ATTR:se,IS_SCRIPT_OR_DATA:te,ATTR_WHITESPACE:R}=Li;let{IS_ALLOWED_URI:C}=Li,I=null;const Re=z({},[...Oi,...Kn,...Qn,...Jn,...Si]);let ee=null;const nt=z({},[...Ci,...er,...$i,...wn]);let Z=Object.seal(Ss(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,Se=null,rt=!0,it=!0,Ue=!1,_t=!0,st=!1,Pe=!1,It=!1,vt=!1,ot=!1,kt=!1,ut=!1,Mt=!0,un=!1;const qn="user-content-";let De=!0,Fe=!1,Ke={},Qe=null;const xt=z({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Bt=null;const zt=z({},["audio","video","img","source","image","track"]);let Et=null;const Ut=z({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),fn="http://www.w3.org/1998/Math/MathML",hn="http://www.w3.org/2000/svg",Je="http://www.w3.org/1999/xhtml";let Tt=Je,jn=!1,Wn=null;const ho=z({},[fn,hn,Je],Zn);let Ft=null;const po=["application/xhtml+xml","text/html"],mo="text/html";let oe=null,At=null;const go=t.createElement("form"),Wr=function(p){return p instanceof RegExp||p instanceof Function},Vn=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(At&&At===p)){if((!p||typeof p!="object")&&(p={}),p=pt(p),Ft=po.indexOf(p.PARSER_MEDIA_TYPE)===-1?mo:p.PARSER_MEDIA_TYPE,oe=Ft==="application/xhtml+xml"?Zn:On,I=Ie(p,"ALLOWED_TAGS")?z({},p.ALLOWED_TAGS,oe):Re,ee=Ie(p,"ALLOWED_ATTR")?z({},p.ALLOWED_ATTR,oe):nt,Wn=Ie(p,"ALLOWED_NAMESPACES")?z({},p.ALLOWED_NAMESPACES,Zn):ho,Et=Ie(p,"ADD_URI_SAFE_ATTR")?z(pt(Ut),p.ADD_URI_SAFE_ATTR,oe):Ut,Bt=Ie(p,"ADD_DATA_URI_TAGS")?z(pt(zt),p.ADD_DATA_URI_TAGS,oe):zt,Qe=Ie(p,"FORBID_CONTENTS")?z({},p.FORBID_CONTENTS,oe):xt,Oe=Ie(p,"FORBID_TAGS")?z({},p.FORBID_TAGS,oe):{},Se=Ie(p,"FORBID_ATTR")?z({},p.FORBID_ATTR,oe):{},Ke=Ie(p,"USE_PROFILES")?p.USE_PROFILES:!1,rt=p.ALLOW_ARIA_ATTR!==!1,it=p.ALLOW_DATA_ATTR!==!1,Ue=p.ALLOW_UNKNOWN_PROTOCOLS||!1,_t=p.ALLOW_SELF_CLOSE_IN_ATTR!==!1,st=p.SAFE_FOR_TEMPLATES||!1,Pe=p.WHOLE_DOCUMENT||!1,ot=p.RETURN_DOM||!1,kt=p.RETURN_DOM_FRAGMENT||!1,ut=p.RETURN_TRUSTED_TYPE||!1,vt=p.FORCE_BODY||!1,Mt=p.SANITIZE_DOM!==!1,un=p.SANITIZE_NAMED_PROPS||!1,De=p.KEEP_CONTENT!==!1,Fe=p.IN_PLACE||!1,C=p.ALLOWED_URI_REGEXP||Cs,Tt=p.NAMESPACE||Je,Z=p.CUSTOM_ELEMENT_HANDLING||{},p.CUSTOM_ELEMENT_HANDLING&&Wr(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Z.tagNameCheck=p.CUSTOM_ELEMENT_HANDLING.tagNameCheck),p.CUSTOM_ELEMENT_HANDLING&&Wr(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Z.attributeNameCheck=p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),p.CUSTOM_ELEMENT_HANDLING&&typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Z.allowCustomizedBuiltInElements=p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),st&&(it=!1),kt&&(ot=!0),Ke&&(I=z({},Si),ee=[],Ke.html===!0&&(z(I,Oi),z(ee,Ci)),Ke.svg===!0&&(z(I,Kn),z(ee,er),z(ee,wn)),Ke.svgFilters===!0&&(z(I,Qn),z(ee,er),z(ee,wn)),Ke.mathMl===!0&&(z(I,Jn),z(ee,$i),z(ee,wn))),p.ADD_TAGS&&(I===Re&&(I=pt(I)),z(I,p.ADD_TAGS,oe)),p.ADD_ATTR&&(ee===nt&&(ee=pt(ee)),z(ee,p.ADD_ATTR,oe)),p.ADD_URI_SAFE_ATTR&&z(Et,p.ADD_URI_SAFE_ATTR,oe),p.FORBID_CONTENTS&&(Qe===xt&&(Qe=pt(Qe)),z(Qe,p.FORBID_CONTENTS,oe)),De&&(I["#text"]=!0),Pe&&z(I,["html","head","body"]),I.table&&(z(I,["tbody"]),delete Oe.tbody),p.TRUSTED_TYPES_POLICY){if(typeof p.TRUSTED_TYPES_POLICY.createHTML!="function")throw Vt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof p.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Vt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');_=p.TRUSTED_TYPES_POLICY,T=_.createHTML("")}else _===void 0&&(_=Nl(d,i)),_!==null&&typeof T=="string"&&(T=_.createHTML(""));ue&&ue(p),At=p}},Vr=z({},["mi","mo","mn","ms","mtext"]),Yr=z({},["foreignobject","desc","title","annotation-xml"]),bo=z({},["title","style","font","a","script"]),Gr=z({},[...Kn,...Qn,...xl]),Xr=z({},[...Jn,...El]),wo=function(p){let k=w(p);(!k||!k.tagName)&&(k={namespaceURI:Tt,tagName:"template"});const O=On(p.tagName),K=On(k.tagName);return Wn[p.namespaceURI]?p.namespaceURI===hn?k.namespaceURI===Je?O==="svg":k.namespaceURI===fn?O==="svg"&&(K==="annotation-xml"||Vr[K]):!!Gr[O]:p.namespaceURI===fn?k.namespaceURI===Je?O==="math":k.namespaceURI===hn?O==="math"&&Yr[K]:!!Xr[O]:p.namespaceURI===Je?k.namespaceURI===hn&&!Yr[K]||k.namespaceURI===fn&&!Vr[K]?!1:!Xr[O]&&(bo[O]||!Gr[O]):!!(Ft==="application/xhtml+xml"&&Wn[p.namespaceURI]):!1},ft=function(p){jt(e.removed,{element:p});try{p.parentNode.removeChild(p)}catch{p.remove()}},Yn=function(p,k){try{jt(e.removed,{attribute:k.getAttributeNode(p),from:k})}catch{jt(e.removed,{attribute:null,from:k})}if(k.removeAttribute(p),p==="is"&&!ee[p])if(ot||kt)try{ft(k)}catch{}else try{k.setAttribute(p,"")}catch{}},Zr=function(p){let k=null,O=null;if(vt)p="<remove></remove>"+p;else{const ce=wl(p,/^[\r\n\t ]+/);O=ce&&ce[0]}Ft==="application/xhtml+xml"&&Tt===Je&&(p='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+p+"</body></html>");const K=_?_.createHTML(p):p;if(Tt===Je)try{k=new h().parseFromString(K,Ft)}catch{}if(!k||!k.documentElement){k=A.createDocument(Tt,"template",null);try{k.documentElement.innerHTML=jn?T:K}catch{}}const le=k.body||k.documentElement;return p&&O&&le.insertBefore(t.createTextNode(O),le.childNodes[0]||null),Tt===Je?W.call(k,Pe?"html":"body")[0]:Pe?k.documentElement:le},Kr=function(p){return N.call(p.ownerDocument||p,p,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null)},yo=function(p){return p instanceof f&&(typeof p.nodeName!="string"||typeof p.textContent!="string"||typeof p.removeChild!="function"||!(p.attributes instanceof u)||typeof p.removeAttribute!="function"||typeof p.setAttribute!="function"||typeof p.namespaceURI!="string"||typeof p.insertBefore!="function"||typeof p.hasChildNodes!="function")},Qr=function(p){return typeof a=="function"&&p instanceof a},et=function(p,k,O){B[p]&&gn(B[p],K=>{K.call(e,k,O,At)})},Jr=function(p){let k=null;if(et("beforeSanitizeElements",p,null),yo(p))return ft(p),!0;const O=oe(p.nodeName);if(et("uponSanitizeElement",p,{tagName:O,allowedTags:I}),p.hasChildNodes()&&!Qr(p.firstElementChild)&&ke(/<[/\w]/g,p.innerHTML)&&ke(/<[/\w]/g,p.textContent))return ft(p),!0;if(!I[O]||Oe[O]){if(!Oe[O]&&ti(O)&&(Z.tagNameCheck instanceof RegExp&&ke(Z.tagNameCheck,O)||Z.tagNameCheck instanceof Function&&Z.tagNameCheck(O)))return!1;if(De&&!Qe[O]){const K=w(p)||p.parentNode,le=b(p)||p.childNodes;if(le&&K){const ce=le.length;for(let fe=ce-1;fe>=0;--fe)K.insertBefore(v(le[fe],!0),m(p))}}return ft(p),!0}return p instanceof l&&!wo(p)||(O==="noscript"||O==="noembed"||O==="noframes")&&ke(/<\/no(script|embed|frames)/i,p.innerHTML)?(ft(p),!0):(st&&p.nodeType===3&&(k=p.textContent,gn([Q,J,X],K=>{k=Wt(k,K," ")}),p.textContent!==k&&(jt(e.removed,{element:p.cloneNode()}),p.textContent=k)),et("afterSanitizeElements",p,null),!1)},ei=function(p,k,O){if(Mt&&(k==="id"||k==="name")&&(O in t||O in go))return!1;if(!(it&&!Se[k]&&ke(ie,k))){if(!(rt&&ke(se,k))){if(!ee[k]||Se[k]){if(!(ti(p)&&(Z.tagNameCheck instanceof RegExp&&ke(Z.tagNameCheck,p)||Z.tagNameCheck instanceof Function&&Z.tagNameCheck(p))&&(Z.attributeNameCheck instanceof RegExp&&ke(Z.attributeNameCheck,k)||Z.attributeNameCheck instanceof Function&&Z.attributeNameCheck(k))||k==="is"&&Z.allowCustomizedBuiltInElements&&(Z.tagNameCheck instanceof RegExp&&ke(Z.tagNameCheck,O)||Z.tagNameCheck instanceof Function&&Z.tagNameCheck(O))))return!1}else if(!Et[k]){if(!ke(C,Wt(O,R,""))){if(!((k==="src"||k==="xlink:href"||k==="href")&&p!=="script"&&yl(O,"data:")===0&&Bt[p])){if(!(Ue&&!ke(te,Wt(O,R,"")))){if(O)return!1}}}}}}return!0},ti=function(p){return p!=="annotation-xml"&&p.indexOf("-")>0},ni=function(p){et("beforeSanitizeAttributes",p,null);const{attributes:k}=p;if(!k)return;const O={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee};let K=k.length;for(;K--;){const le=k[K],{name:ce,namespaceURI:fe,value:ht}=le,Ht=oe(ce);let he=ce==="value"?ht:_l(ht);if(O.attrName=Ht,O.attrValue=he,O.keepAttr=!0,O.forceKeepAttr=void 0,et("uponSanitizeAttribute",p,O),he=O.attrValue,O.forceKeepAttr||(Yn(ce,p),!O.keepAttr))continue;if(!_t&&ke(/\/>/i,he)){Yn(ce,p);continue}st&&gn([Q,J,X],ii=>{he=Wt(he,ii," ")});const ri=oe(p.nodeName);if(ei(ri,Ht,he)){if(un&&(Ht==="id"||Ht==="name")&&(Yn(ce,p),he=qn+he),_&&typeof d=="object"&&typeof d.getAttributeType=="function"&&!fe)switch(d.getAttributeType(ri,Ht)){case"TrustedHTML":{he=_.createHTML(he);break}case"TrustedScriptURL":{he=_.createScriptURL(he);break}}try{fe?p.setAttributeNS(fe,ce,he):p.setAttribute(ce,he),Ri(e.removed)}catch{}}}et("afterSanitizeAttributes",p,null)},_o=function S(p){let k=null;const O=Kr(p);for(et("beforeSanitizeShadowDOM",p,null);k=O.nextNode();)et("uponSanitizeShadowNode",k,null),!Jr(k)&&(k.content instanceof s&&S(k.content),ni(k));et("afterSanitizeShadowDOM",p,null)};return e.sanitize=function(S){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=null,O=null,K=null,le=null;if(jn=!S,jn&&(S="<!-->"),typeof S!="string"&&!Qr(S))if(typeof S.toString=="function"){if(S=S.toString(),typeof S!="string")throw Vt("dirty is not a string, aborting")}else throw Vt("toString is not a function");if(!e.isSupported)return S;if(It||Vn(p),e.removed=[],typeof S=="string"&&(Fe=!1),Fe){if(S.nodeName){const ht=oe(S.nodeName);if(!I[ht]||Oe[ht])throw Vt("root node is forbidden and cannot be sanitized in-place")}}else if(S instanceof a)k=Zr("<!---->"),O=k.ownerDocument.importNode(S,!0),O.nodeType===1&&O.nodeName==="BODY"||O.nodeName==="HTML"?k=O:k.appendChild(O);else{if(!ot&&!st&&!Pe&&S.indexOf("<")===-1)return _&&ut?_.createHTML(S):S;if(k=Zr(S),!k)return ot?null:ut?T:""}k&&vt&&ft(k.firstChild);const ce=Kr(Fe?S:k);for(;K=ce.nextNode();)Jr(K)||(K.content instanceof s&&_o(K.content),ni(K));if(Fe)return S;if(ot){if(kt)for(le=q.call(k.ownerDocument);k.firstChild;)le.appendChild(k.firstChild);else le=k;return(ee.shadowroot||ee.shadowrootmode)&&(le=G.call(n,le,!0)),le}let fe=Pe?k.outerHTML:k.innerHTML;return Pe&&I["!doctype"]&&k.ownerDocument&&k.ownerDocument.doctype&&k.ownerDocument.doctype.name&&ke($s,k.ownerDocument.doctype.name)&&(fe="<!DOCTYPE "+k.ownerDocument.doctype.name+`>
`+fe),st&&gn([Q,J,X],ht=>{fe=Wt(fe,ht," ")}),_&&ut?_.createHTML(fe):fe},e.setConfig=function(){let S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Vn(S),It=!0},e.clearConfig=function(){At=null,It=!1},e.isValidAttribute=function(S,p,k){At||Vn({});const O=oe(S),K=oe(p);return ei(O,K,k)},e.addHook=function(S,p){typeof p=="function"&&(B[S]=B[S]||[],jt(B[S],p))},e.removeHook=function(S){if(B[S])return Ri(B[S])},e.removeHooks=function(S){B[S]&&(B[S]=[])},e.removeAllHooks=function(){B={}},e}var ur=Ls();function Lr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let yt=Lr();function Ns(r){yt=r}const Ps=/[&<>"']/,Pl=new RegExp(Ps.source,"g"),Ds=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Dl=new RegExp(Ds.source,"g"),Il={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ni=r=>Il[r];function xe(r,e){if(e){if(Ps.test(r))return r.replace(Pl,Ni)}else if(Ds.test(r))return r.replace(Dl,Ni);return r}const Ml=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Bl(r){return r.replace(Ml,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const zl=/(^|[^\[])\^/g;function Y(r,e){let t=typeof r=="string"?r:r.source;e=e||"";const n={replace:(i,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(zl,"$1"),t=t.replace(i,o),n},getRegex:()=>new RegExp(t,e)};return n}function Pi(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const Jt={exec:()=>null};function Di(r,e){const t=r.replace(/\|/g,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function yn(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return r.slice(0,n-i)}function Ul(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return-1}function Ii(r,e,t,n){const i=e.href,s=e.title?xe(e.title):null,o=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:t,href:i,title:s,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,a}return{type:"image",raw:t,href:i,title:s,text:xe(o)}}function Fl(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[o]=s;return o.length>=n.length?i.slice(n.length):i}).join(`
`)}class Dn{constructor(e){D(this,"options");D(this,"rules");D(this,"lexer");this.options=e||yt}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:yn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Fl(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=yn(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=yn(t[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const o=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",c=!1;for(;e;){let u=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let f=t[2].split(`
`,1)[0].replace(/^\t+/,b=>" ".repeat(3*b.length)),h=e.split(`
`,1)[0],d=0;this.options.pedantic?(d=2,l=f.trimStart()):(d=t[2].search(/[^ ]/),d=d>4?1:d,l=f.slice(d),d+=t[1].length);let x=!1;if(!f&&/^ *$/.test(h)&&(a+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const b=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),w=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),_=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:\`\`\`|~~~)`),T=new RegExp(`^ {0,${Math.min(3,d-1)}}#`);for(;e;){const A=e.split(`
`,1)[0];if(h=A,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),_.test(h)||T.test(h)||b.test(h)||w.test(e))break;if(h.search(/[^ ]/)>=d||!h.trim())l+=`
`+h.slice(d);else{if(x||f.search(/[^ ]/)>=4||_.test(f)||T.test(f)||w.test(f))break;l+=`
`+h}!x&&!h.trim()&&(x=!0),a+=A+`
`,e=e.substring(A.length+1),f=h.slice(d)}}s.loose||(c?s.loose=!0:/\n *\n *$/.test(a)&&(c=!0));let v=null,m;this.options.gfm&&(v=/^\[[ xX]\] /.exec(l),v&&(m=v[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:a,task:!!v,checked:m,loose:!1,text:l,tokens:[]}),s.raw+=a}s.items[s.items.length-1].raw=a.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const f=s.items[u].tokens.filter(d=>d.type==="space"),h=f.length>0&&f.some(d=>/\n.*\n/.test(d.raw));s.loose=h}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=Di(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const a of i)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of n)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of s)o.rows.push(Di(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:xe(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=yn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Ul(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);o&&(i=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),Ii(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const i=(n[2]||n[1]).replace(/\s+/g," "),s=t[i.toLowerCase()];if(!s){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Ii(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...i[0]].length-1;let a,l,c=o,u=0;const f=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+o);(i=f.exec(t))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(l=[...a].length,i[3]||i[4]){c+=l;continue}else if((i[5]||i[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const h=[...i[0]][0].length,d=e.slice(0,o+i.index+h+l);if(Math.min(o,l)%2){const v=d.slice(1,-1);return{type:"em",raw:d,text:v,tokens:this.lexer.inlineTokens(v)}}const x=d.slice(2,-2);return{type:"strong",raw:d,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=xe(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=xe(t[1]),i="mailto:"+n):(n=xe(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=xe(t[0]),s="mailto:"+i;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);i=xe(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=xe(t[0]),{type:"text",raw:t[0],text:n}}}}const Hl=/^(?: *(?:\n|$))+/,ql=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,jl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ln=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Wl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Is=/(?:[*+-]|\d{1,9}[.)])/,Ms=Y(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Is).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Nr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Vl=/^[^\n]+/,Pr=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Yl=Y(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Pr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Gl=Y(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Is).getRegex(),Fn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Dr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Xl=Y("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Dr).replace("tag",Fn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bs=Y(Nr).replace("hr",ln).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex(),Zl=Y(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Bs).getRegex(),Ir={blockquote:Zl,code:ql,def:Yl,fences:jl,heading:Wl,hr:ln,html:Xl,lheading:Ms,list:Gl,newline:Hl,paragraph:Bs,table:Jt,text:Vl},Mi=Y("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ln).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex(),Kl={...Ir,table:Mi,paragraph:Y(Nr).replace("hr",ln).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Mi).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Fn).getRegex()},Ql={...Ir,html:Y(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Dr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Jt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Y(Nr).replace("hr",ln).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ms).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},zs=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Jl=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Us=/^( {2,}|\\)\n(?!\s*$)/,ec=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,cn="\\p{P}\\p{S}",tc=Y(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,cn).getRegex(),nc=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,rc=Y(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,cn).getRegex(),ic=Y("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,cn).getRegex(),sc=Y("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,cn).getRegex(),oc=Y(/\\([punct])/,"gu").replace(/punct/g,cn).getRegex(),ac=Y(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),lc=Y(Dr).replace("(?:-->|$)","-->").getRegex(),cc=Y("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",lc).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),In=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,uc=Y(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",In).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Fs=Y(/^!?\[(label)\]\[(ref)\]/).replace("label",In).replace("ref",Pr).getRegex(),Hs=Y(/^!?\[(ref)\](?:\[\])?/).replace("ref",Pr).getRegex(),fc=Y("reflink|nolink(?!\\()","g").replace("reflink",Fs).replace("nolink",Hs).getRegex(),Mr={_backpedal:Jt,anyPunctuation:oc,autolink:ac,blockSkip:nc,br:Us,code:Jl,del:Jt,emStrongLDelim:rc,emStrongRDelimAst:ic,emStrongRDelimUnd:sc,escape:zs,link:uc,nolink:Hs,punctuation:tc,reflink:Fs,reflinkSearch:fc,tag:cc,text:ec,url:Jt},hc={...Mr,link:Y(/^!?\[(label)\]\((.*?)\)/).replace("label",In).getRegex(),reflink:Y(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",In).getRegex()},fr={...Mr,escape:Y(zs).replace("])","~|])").getRegex(),url:Y(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},pc={...fr,br:Y(Us).replace("{2,}","*").getRegex(),text:Y(fr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},_n={normal:Ir,gfm:Kl,pedantic:Ql},Yt={normal:Mr,gfm:fr,breaks:pc,pedantic:hc};class He{constructor(e){D(this,"tokens");D(this,"options");D(this,"state");D(this,"tokenizer");D(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||yt,this.options.tokenizer=this.options.tokenizer||new Dn,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:_n.normal,inline:Yt.normal};this.options.pedantic?(t.block=_n.pedantic,t.inline=Yt.pedantic):this.options.gfm&&(t.block=_n.gfm,this.options.breaks?t.inline=Yt.breaks:t.inline=Yt.gfm),this.tokenizer.rules=t}static get rules(){return{block:_n,inline:Yt}}static lex(e,t){return new He(t).lex(e)}static lexInline(e,t){return new He(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let n,i,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],o&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),o=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,o,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let h;this.options.extensions.startInline.forEach(d=>{h=d.call({lexer:this},f),typeof h=="number"&&h>=0&&(u=Math.min(u,h))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Mn{constructor(e){D(this,"options");this.options=e||yt}code(e,t,n){var s;const i=(s=(t||"").match(/^\S*/))==null?void 0:s[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+xe(i)+'">'+(n?e:xe(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:xe(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const i=t?"ol":"ul",s=t&&n!==1?' start="'+n+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const i=Pi(e);if(i===null)return n;e=i;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){const i=Pi(e);if(i===null)return n;e=i;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class Br{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class qe{constructor(e){D(this,"options");D(this,"renderer");D(this,"textRenderer");this.options=e||yt,this.options.renderer=this.options.renderer||new Mn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Br}static parse(e,t){return new qe(t).parse(e)}static parseInline(e,t){return new qe(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=s,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){n+=a||"";continue}}switch(s.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const o=s;n+=this.renderer.heading(this.parseInline(o.tokens),o.depth,Bl(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=s;n+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=s;let a="",l="";for(let u=0;u<o.header.length;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});a+=this.renderer.tablerow(l);let c="";for(let u=0;u<o.rows.length;u++){const f=o.rows[u];l="";for(let h=0;h<f.length;h++)l+=this.renderer.tablecell(this.parseInline(f[h].tokens),{header:!1,align:o.align[h]});c+=this.renderer.tablerow(l)}n+=this.renderer.table(a,c);continue}case"blockquote":{const o=s,a=this.parse(o.tokens);n+=this.renderer.blockquote(a);continue}case"list":{const o=s,a=o.ordered,l=o.start,c=o.loose;let u="";for(let f=0;f<o.items.length;f++){const h=o.items[f],d=h.checked,x=h.task;let v="";if(h.task){const m=this.renderer.checkbox(!!d);c?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=m+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=m+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:m+" "}):v+=m+" "}v+=this.parse(h.tokens,c),u+=this.renderer.listitem(v,x,!!d)}n+=this.renderer.list(u,a,l);continue}case"html":{const o=s;n+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=s;n+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=s,a=o.tokens?this.parseInline(o.tokens):o.text;for(;i+1<e.length&&e[i+1].type==="text";)o=e[++i],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);n+=t?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=o||"";continue}}switch(s.type){case"escape":{const o=s;n+=t.text(o.text);break}case"html":{const o=s;n+=t.html(o.text);break}case"link":{const o=s;n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=s;n+=t.image(o.href,o.title,o.text);break}case"strong":{const o=s;n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=s;n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=s;n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{const o=s;n+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=s;n+=t.text(o.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}}class en{constructor(e){D(this,"options");this.options=e||yt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}D(en,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var sn,hr,Bn,qs;class dc{constructor(...e){Gn(this,sn);Gn(this,Bn);D(this,"defaults",Lr());D(this,"options",this.setOptions);D(this,"parse",pn(this,sn,hr).call(this,He.lex,qe.parse));D(this,"parseInline",pn(this,sn,hr).call(this,He.lexInline,qe.parseInline));D(this,"Parser",qe);D(this,"Renderer",Mn);D(this,"TextRenderer",Br);D(this,"Lexer",He);D(this,"Tokenizer",Dn);D(this,"Hooks",en);this.use(...e)}walkTokens(e,t){var i,s;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{const a=o;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=o;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=t.renderers[s.name];o?t.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),i.extensions=t),n.renderer){const s=this.defaults.renderer||new Mn(this.defaults);for(const o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.renderer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f||""}}i.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new Dn(this.defaults);for(const o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=n.tokenizer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}i.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new en;for(const o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.hooks[a],c=s[a];en.passThroughHooks.has(o)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(h=>c.call(s,h));const f=l.call(s,u);return c.call(s,f)}:s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}i.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,o=n.walkTokens;i.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return He.lex(e,t??this.defaults)}parser(e,t){return qe.parse(e,t??this.defaults)}}sn=new WeakSet,hr=function(e,t){return(n,i)=>{const s={...i},o={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=pn(this,Bn,qs).call(this,!!o.silent,!!o.async);if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>t(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(n=o.hooks.preprocess(n));let l=e(n,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let c=t(l,o);return o.hooks&&(c=o.hooks.postprocess(c)),c}catch(l){return a(l)}}},Bn=new WeakSet,qs=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+xe(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const wt=new dc;function j(r,e){return wt.parse(r,e)}j.options=j.setOptions=function(r){return wt.setOptions(r),j.defaults=wt.defaults,Ns(j.defaults),j};j.getDefaults=Lr;j.defaults=yt;j.use=function(...r){return wt.use(...r),j.defaults=wt.defaults,Ns(j.defaults),j};j.walkTokens=function(r,e){return wt.walkTokens(r,e)};j.parseInline=wt.parseInline;j.Parser=qe;j.parser=qe.parse;j.Renderer=Mn;j.TextRenderer=Br;j.Lexer=He;j.lexer=He.lex;j.Tokenizer=Dn;j.Hooks=en;j.parse=j;j.options;j.setOptions;j.use;j.walkTokens;j.parseInline;qe.parse;He.lex;const Xe=Object.create(null);Xe.open="0";Xe.close="1";Xe.ping="2";Xe.pong="3";Xe.message="4";Xe.upgrade="5";Xe.noop="6";const Sn=Object.create(null);Object.keys(Xe).forEach(r=>{Sn[Xe[r]]=r});const pr={type:"error",data:"parser error"},js=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ws=typeof ArrayBuffer=="function",Vs=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,zr=({type:r,data:e},t,n)=>js&&e instanceof Blob?t?n(e):Bi(e,n):Ws&&(e instanceof ArrayBuffer||Vs(e))?t?n(e):Bi(new Blob([e]),n):n(Xe[r]+(e||"")),Bi=(r,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(r)};function zi(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let tr;function mc(r,e){if(js&&r.data instanceof Blob)return r.data.arrayBuffer().then(zi).then(e);if(Ws&&(r.data instanceof ArrayBuffer||Vs(r.data)))return e(zi(r.data));zr(r,!1,t=>{tr||(tr=new TextEncoder),e(tr.encode(t))})}const Ui="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<Ui.length;r++)Xt[Ui.charCodeAt(r)]=r;const gc=r=>{let e=r.length*.75,t=r.length,n,i=0,s,o,a,l;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);const c=new ArrayBuffer(e),u=new Uint8Array(c);for(n=0;n<t;n+=4)s=Xt[r.charCodeAt(n)],o=Xt[r.charCodeAt(n+1)],a=Xt[r.charCodeAt(n+2)],l=Xt[r.charCodeAt(n+3)],u[i++]=s<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|l&63;return c},bc=typeof ArrayBuffer=="function",Ur=(r,e)=>{if(typeof r!="string")return{type:"message",data:Ys(r,e)};const t=r.charAt(0);return t==="b"?{type:"message",data:wc(r.substring(1),e)}:Sn[t]?r.length>1?{type:Sn[t],data:r.substring(1)}:{type:Sn[t]}:pr},wc=(r,e)=>{if(bc){const t=gc(r);return Ys(t,e)}else return{base64:!0,data:r}},Ys=(r,e)=>{switch(e){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},Gs="",yc=(r,e)=>{const t=r.length,n=new Array(t);let i=0;r.forEach((s,o)=>{zr(s,!1,a=>{n[o]=a,++i===t&&e(n.join(Gs))})})},_c=(r,e)=>{const t=r.split(Gs),n=[];for(let i=0;i<t.length;i++){const s=Ur(t[i],e);if(n.push(s),s.type==="error")break}return n};function vc(){return new TransformStream({transform(r,e){mc(r,t=>{const n=t.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}r.data&&typeof r.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let nr;function vn(r){return r.reduce((e,t)=>e+t.length,0)}function kn(r,e){if(r[0].length===e)return r.shift();const t=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)t[i]=r[0][n++],n===r[0].length&&(r.shift(),n=0);return r.length&&n<r[0].length&&(r[0]=r[0].slice(n)),t}function kc(r,e){nr||(nr=new TextDecoder);const t=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(vn(t)<1)break;const l=kn(t,1);s=(l[0]&128)===128,i=l[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(vn(t)<2)break;const l=kn(t,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(vn(t)<8)break;const l=kn(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(pr);break}i=u*Math.pow(2,32)+c.getUint32(4),n=3}else{if(vn(t)<i)break;const l=kn(t,i);a.enqueue(Ur(s?l:nr.decode(l),e)),n=0}if(i===0||i>r){a.enqueue(pr);break}}}})}const Xs=4;function re(r){if(r)return xc(r)}function xc(r){for(var e in re.prototype)r[e]=re.prototype[e];return r}re.prototype.on=re.prototype.addEventListener=function(r,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(e),this};re.prototype.once=function(r,e){function t(){this.off(r,t),e.apply(this,arguments)}return t.fn=e,this.on(r,t),this};re.prototype.off=re.prototype.removeListener=re.prototype.removeAllListeners=re.prototype.removeEventListener=function(r,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+r];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+r],this};re.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+r],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};re.prototype.emitReserved=re.prototype.emit;re.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};re.prototype.hasListeners=function(r){return!!this.listeners(r).length};const Ce=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function Zs(r,...e){return e.reduce((t,n)=>(r.hasOwnProperty(n)&&(t[n]=r[n]),t),{})}const Ec=Ce.setTimeout,Tc=Ce.clearTimeout;function Hn(r,e){e.useNativeTimers?(r.setTimeoutFn=Ec.bind(Ce),r.clearTimeoutFn=Tc.bind(Ce)):(r.setTimeoutFn=Ce.setTimeout.bind(Ce),r.clearTimeoutFn=Ce.clearTimeout.bind(Ce))}const Ac=1.33;function Rc(r){return typeof r=="string"?Oc(r):Math.ceil((r.byteLength||r.size)*Ac)}function Oc(r){let e=0,t=0;for(let n=0,i=r.length;n<i;n++)e=r.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function Sc(r){let e="";for(let t in r)r.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(r[t]));return e}function Cc(r){let e={},t=r.split("&");for(let n=0,i=t.length;n<i;n++){let s=t[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class $c extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class Fr extends re{constructor(e){super(),this.writable=!1,Hn(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new $c(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Ur(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Sc(e);return t.length?"?"+t:""}}const Ks="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),dr=64,Lc={};let Fi=0,xn=0,Hi;function qi(r){let e="";do e=Ks[r%dr]+e,r=Math.floor(r/dr);while(r>0);return e}function Qs(){const r=qi(+new Date);return r!==Hi?(Fi=0,Hi=r):r+"."+qi(Fi++)}for(;xn<dr;xn++)Lc[Ks[xn]]=xn;let Js=!1;try{Js=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Nc=Js;function eo(r){const e=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Nc))return new XMLHttpRequest}catch{}if(!e)try{return new Ce[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Pc(){}const Dc=function(){return new eo({xdomain:!1}).responseType!=null}();class Ic extends Fr{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let i=location.port;i||(i=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}const t=e&&e.forceBase64;this.supportsBinary=Dc&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};_c(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,yc(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Qs()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new We(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class We extends re{constructor(e,t){super(),Hn(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=Zs(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const n=this.xhr=new eo(t);try{n.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(n)),n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=We.requestsCount++,We.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Pc,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete We.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}We.requestsCount=0;We.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ji);else if(typeof addEventListener=="function"){const r="onpagehide"in Ce?"pagehide":"unload";addEventListener(r,ji,!1)}}function ji(){for(let r in We.requests)We.requests.hasOwnProperty(r)&&We.requests[r].abort()}const Hr=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),En=Ce.WebSocket||Ce.MozWebSocket,Wi=!0,Mc="arraybuffer",Vi=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Bc extends Fr{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=Vi?{}:Zs(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=Wi&&!Vi?t?new En(e,t):new En(e):new En(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;zr(n,this.supportsBinary,s=>{const o={};try{Wi&&this.ws.send(s)}catch{}i&&Hr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Qs()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!En}}class zc extends Fr{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=kc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),i=vc();i.readable.pipeTo(e.writable),this.writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;this.writer.write(n).then(()=>{i&&Hr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const Uc={websocket:Bc,webtransport:zc,polling:Ic},Fc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Hc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function mr(r){if(r.length>2e3)throw"URI too long";const e=r,t=r.indexOf("["),n=r.indexOf("]");t!=-1&&n!=-1&&(r=r.substring(0,t)+r.substring(t,n).replace(/:/g,";")+r.substring(n,r.length));let i=Fc.exec(r||""),s={},o=14;for(;o--;)s[Hc[o]]=i[o]||"";return t!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=qc(s,s.path),s.queryKey=jc(s,s.query),s}function qc(r,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function jc(r,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(t[i]=s)}),t}let to=class St extends re{constructor(e,t={}){super(),this.binaryType=Mc,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=mr(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=mr(t.host).host),Hn(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Cc(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Xs,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new Uc[e](n)}open(){let e;if(this.opts.rememberUpgrade&&St.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;St.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",f=>{if(!n)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;St.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const h=new Error("probe error");h.transport=t.name,this.emitReserved("upgradeError",h)}}))};function s(){n||(n=!0,u(),t.close(),t=null)}const o=f=>{const h=new Error("probe error: "+f);h.transport=t.name,s(),this.emitReserved("upgradeError",h)};function a(){o("transport closed")}function l(){o("socket closed")}function c(f){t&&f.name!==t.name&&s()}const u=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",St.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=Rc(i)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:t,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){St.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const i=e.length;for(;n<i;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};to.protocol=Xs;function Wc(r,e="",t){let n=r;t=t||typeof location<"u"&&location,r==null&&(r=t.protocol+"//"+t.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=t.protocol+r:r=t.host+r),/^(https?|wss?):\/\//.test(r)||(typeof t<"u"?r=t.protocol+"//"+r:r="https://"+r),n=mr(r)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(t&&t.port===n.port?"":":"+n.port),n}const Vc=typeof ArrayBuffer=="function",Yc=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,no=Object.prototype.toString,Gc=typeof Blob=="function"||typeof Blob<"u"&&no.call(Blob)==="[object BlobConstructor]",Xc=typeof File=="function"||typeof File<"u"&&no.call(File)==="[object FileConstructor]";function qr(r){return Vc&&(r instanceof ArrayBuffer||Yc(r))||Gc&&r instanceof Blob||Xc&&r instanceof File}function Cn(r,e){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let t=0,n=r.length;t<n;t++)if(Cn(r[t]))return!0;return!1}if(qr(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return Cn(r.toJSON(),!0);for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&Cn(r[t]))return!0;return!1}function Zc(r){const e=[],t=r.data,n=r;return n.data=gr(t,e),n.attachments=e.length,{packet:n,buffers:e}}function gr(r,e){if(!r)return r;if(qr(r)){const t={_placeholder:!0,num:e.length};return e.push(r),t}else if(Array.isArray(r)){const t=new Array(r.length);for(let n=0;n<r.length;n++)t[n]=gr(r[n],e);return t}else if(typeof r=="object"&&!(r instanceof Date)){const t={};for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=gr(r[n],e));return t}return r}function Kc(r,e){return r.data=br(r.data,e),delete r.attachments,r}function br(r,e){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<e.length)return e[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let t=0;t<r.length;t++)r[t]=br(r[t],e);else if(typeof r=="object")for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&(r[t]=br(r[t],e));return r}const Qc=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Jc=5;var F;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(F||(F={}));class eu{constructor(e){this.replacer=e}encode(e){return(e.type===F.EVENT||e.type===F.ACK)&&Cn(e)?this.encodeAsBinary({type:e.type===F.EVENT?F.BINARY_EVENT:F.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===F.BINARY_EVENT||e.type===F.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Zc(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}function Yi(r){return Object.prototype.toString.call(r)==="[object Object]"}class jr extends re{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===F.BINARY_EVENT;n||t.type===F.BINARY_ACK?(t.type=n?F.EVENT:F.ACK,this.reconstructor=new tu(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(qr(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(F[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===F.BINARY_EVENT||n.type===F.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(s,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(s,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const s=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(jr.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case F.CONNECT:return Yi(t);case F.DISCONNECT:return t===void 0;case F.CONNECT_ERROR:return typeof t=="string"||Yi(t);case F.EVENT:case F.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Qc.indexOf(t[0])===-1);case F.ACK:case F.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class tu{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Kc(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const nu=Object.freeze(Object.defineProperty({__proto__:null,Decoder:jr,Encoder:eu,get PacketType(){return F},protocol:Jc},Symbol.toStringTag,{value:"Module"}));function Me(r,e,t){return r.on(e,t),function(){r.off(e,t)}}const ru=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ro extends re{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Me(e,"open",this.onopen.bind(this)),Me(e,"packet",this.onpacket.bind(this)),Me(e,"error",this.onerror.bind(this)),Me(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(ru.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const n={type:F.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),n.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},i);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(s),t.apply(this,[null,...o])}}emitWithAck(e,...t){const n=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((i,s)=>{t.push((o,a)=>n?o?s(o):i(a):i(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>n!==this._queue[0]?void 0:(i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:F.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case F.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case F.EVENT:case F.BINARY_EVENT:this.onevent(e);break;case F.ACK:case F.BINARY_ACK:this.onack(e);break;case F.DISCONNECT:this.ondisconnect();break;case F.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:F.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:F.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Dt(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}Dt.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*r);r=Math.floor(e*10)&1?r+t:r-t}return Math.min(r,this.max)|0};Dt.prototype.reset=function(){this.attempts=0};Dt.prototype.setMin=function(r){this.ms=r};Dt.prototype.setMax=function(r){this.max=r};Dt.prototype.setJitter=function(r){this.jitter=r};class wr extends re{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Hn(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Dt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||nu;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new to(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=Me(t,"open",function(){n.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Me(t,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Me(e,"ping",this.onping.bind(this)),Me(e,"data",this.ondata.bind(this)),Me(e,"error",this.onerror.bind(this)),Me(e,"close",this.onclose.bind(this)),Me(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Hr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new ro(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Gt={};function $n(r,e){typeof r=="object"&&(e=r,r=void 0),e=e||{};const t=Wc(r,e.path||"/socket.io"),n=t.source,i=t.id,s=t.path,o=Gt[i]&&s in Gt[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new wr(n,e):(Gt[i]||(Gt[i]=new wr(n,e)),l=Gt[i]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign($n,{Manager:wr,Socket:ro,io:$n,connect:$n});function iu(r){let e,t;return{c(){e=ae("svg"),t=ae("path"),g(t,"d","M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v28c0 50.8-41.2 92-92 92c-31.1 0-58.7-15.5-75.3-39.2C322.7 360.9 291.1 376 256 376c-66.3 0-120-53.7-120-120s53.7-120 120-120c28.8 0 55.2 10.1 75.8 27c4.3-6.6 11.7-11 20.2-11c13.3 0 24 10.7 24 24v80 28c0 24.3 19.7 44 44 44s44-19.7 44-44V256c0-114.9-93.1-208-208-208zm72 208a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 512 512")},m(n,i){P(n,e,i),y(e,t)},p:M,i:M,o:M,d(n){n&&L(e)}}}class io extends ve{constructor(e){super(),ye(this,e,null,iu,we,{})}}_e(io,{},[],[],!0);function su(r){let e,t;return{c(){e=ae("svg"),t=ae("path"),g(t,"d","M337 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-143 143L97 127c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0L337 81zM441 201c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-247 247L41 295c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L143 465c9.4 9.4 24.6 9.4 33.9 0L441 201z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 448 512")},m(n,i){P(n,e,i),y(e,t)},p:M,i:M,o:M,d(n){n&&L(e)}}}class so extends ve{constructor(e){super(),ye(this,e,null,su,we,{})}}_e(so,{},[],[],!0);function ou(r){let e,t;return{c(){e=ae("svg"),t=ae("path"),g(t,"d","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 512 512")},m(n,i){P(n,e,i),y(e,t)},p:M,i:M,o:M,d(n){n&&L(e)}}}class oo extends ve{constructor(e){super(),ye(this,e,null,ou,we,{})}}_e(oo,{},[],[],!0);function au(r){let e,t;return{c(){e=ae("svg"),t=ae("path"),g(t,"d","M133.9 232L65.8 95.9 383.4 232H133.9zm0 48H383.4L65.8 416.1l68-136.1zM44.6 34.6C32.3 29.3 17.9 32.3 8.7 42S-2.6 66.3 3.4 78.3L92.2 256 3.4 433.7c-6 12-3.9 26.5 5.3 36.3s23.5 12.7 35.9 7.5l448-192c11.8-5 19.4-16.6 19.4-29.4s-7.6-24.4-19.4-29.4l-448-192z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 512 512")},m(n,i){P(n,e,i),y(e,t)},p:M,i:M,o:M,d(n){n&&L(e)}}}class ao extends ve{constructor(e){super(),ye(this,e,null,au,we,{})}}_e(ao,{},[],[],!0);function lu(r){let e,t;return{c(){e=ae("svg"),t=ae("path"),g(t,"d","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 448 512")},m(n,i){P(n,e,i),y(e,t)},p:M,i:M,o:M,d(n){n&&L(e)}}}class lo extends ve{constructor(e){super(),ye(this,e,null,lu,we,{})}}_e(lo,{},[],[],!0);function cu(r){let e,t;return{c(){e=ae("svg"),t=ae("path"),g(t,"d","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 448 512")},m(n,i){P(n,e,i),y(e,t)},p:M,i:M,o:M,d(n){n&&L(e)}}}class co extends ve{constructor(e){super(),ye(this,e,null,cu,we,{})}}_e(co,{},[],[],!0);function uu(r){let e,t;return{c(){e=ae("svg"),t=ae("path"),g(t,"d","M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H448c8.8 0 16 7.2 16 16V352c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432V416zm-.2 76.2l.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h48 48v48 4 .3 6.4V496c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM96 180.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H152c8.8 0 16-7.2 16-16s-7.2-16-16-16H132.8C112.5 144 96 160.5 96 180.8zM372.8 144c-20.3 0-36.8 16.5-36.8 36.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H352c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H392c8.8 0 16-7.2 16-16s-7.2-16-16-16H372.8zm-152 6.4c-4.1-5.5-11.3-7.8-17.9-5.6S192 153.1 192 160v96c0 8.8 7.2 16 16 16s16-7.2 16-16V208l19.2 25.6c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4L288 208v48c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-6.9-4.4-13-10.9-15.2s-13.7 .1-17.9 5.6L256 197.3l-35.2-46.9z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 512 512")},m(n,i){P(n,e,i),y(e,t)},p:M,i:M,o:M,d(n){n&&L(e)}}}class uo extends ve{constructor(e){super(),ye(this,e,null,uu,we,{})}}_e(uo,{},[],[],!0);function fu(r){let e,t;return{c(){e=ae("svg"),t=ae("path"),g(t,"d","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 448 512")},m(n,i){P(n,e,i),y(e,t)},p:M,i:M,o:M,d(n){n&&L(e)}}}class fo extends ve{constructor(e){super(),ye(this,e,null,fu,we,{})}}_e(fo,{},[],[],!0);const{document:hu}=Ro;function Gi(r,e,t){const n=r.slice();return n[31]=e[t],n}function Xi(r){let e,t,n,i,s,o,a,l;return s=new lo({}),{c(){e=E("button"),t=E("p"),t.textContent="Chat",n=H(),i=E("span"),Ee(s.$$.fragment),g(t,"class","m-auto mx-2"),g(i,"class","h-6 w-5 mr-2 my-auto fill-white"),g(e,"class","py-2 px-2 rounded-md transition duration-300 flex stubber_webchat_chat_button")},m(c,u){P(c,e,u),y(e,t),y(e,n),y(e,i),de(s,i,null),o=!0,a||(l=ne(e,"click",r[12]),a=!0)},p:M,i(c){o||($(s.$$.fragment,c),o=!0)},o(c){U(s.$$.fragment,c),o=!1},d(c){c&&L(e),me(s),a=!1,l()}}}function Zi(r){let e,t,n,i,s=(r[0]?r[0]:"")+"",o,a,l,c,u,f,h,d,x,v;u=new oo({});let m=!r[5]&&Ki(r),b=r[5]&&ss(r);return{c(){e=E("div"),t=E("div"),n=E("div"),i=E("p"),o=Be(s),a=H(),l=E("button"),c=E("span"),Ee(u.$$.fragment),f=H(),m&&m.c(),h=H(),b&&b.c(),g(i,"class","text-lg font-semibold"),g(c,"class","w-5 fill-white rotate-45"),g(l,"class","rounded-md w-5 mx-1"),g(n,"class","pl-4 p-3 border-b text-black rounded-t-lg flex justify-between items-center h-15 stubber_webchat_top_box"),g(t,"class","flex flex-col flex-grow justify-end mx-4 transition duration-300 rounded-t-xl stubber_webchat_message_box"),g(e,"class","stubber_webchat_theme fixed right-0 bottom-0 flex w-full min-w-[250px] max-w-[500px] min-h-[200px] max-h-[1000px] h-full pt-4")},m(w,_){P(w,e,_),y(e,t),y(t,n),y(n,i),y(i,o),y(n,a),y(n,l),y(l,c),de(u,c,null),y(t,f),m&&m.m(t,null),y(t,h),b&&b.m(t,null),d=!0,x||(v=ne(l,"click",r[19]),x=!0)},p(w,_){(!d||_[0]&1)&&s!==(s=(w[0]?w[0]:"")+"")&&lt(o,s),w[5]?m&&(Ve(),U(m,1,1,()=>{m=null}),Ye()):m?(m.p(w,_),_[0]&32&&$(m,1)):(m=Ki(w),m.c(),$(m,1),m.m(t,h)),w[5]?b?(b.p(w,_),_[0]&32&&$(b,1)):(b=ss(w),b.c(),$(b,1),b.m(t,null)):b&&(Ve(),U(b,1,1,()=>{b=null}),Ye())},i(w){d||($(u.$$.fragment,w),$(m),$(b),d=!0)},o(w){U(u.$$.fragment,w),U(m),U(b),d=!1},d(w){w&&L(e),me(u),m&&m.d(),b&&b.d(),x=!1,v()}}}function Ki(r){let e,t,n,i,s,o,a,l,c,u,f,h,d,x,v=ai(r[3]),m=[];for(let _=0;_<v.length;_+=1)m[_]=rs(Gi(r,v,_));const b=_=>U(m[_],1,1,()=>{m[_]=null});c=new ao({});let w=r[4]&&is(r);return{c(){e=E("div");for(let _=0;_<m.length;_+=1)m[_].c();t=H(),n=E("div"),i=E("div"),s=E("input"),o=H(),a=E("button"),l=E("span"),Ee(c.$$.fragment),f=H(),w&&w.c(),g(e,"class","p-4 overflow-y-auto flex-grow hide-scrollbar"),g(e,"id","stubber_webchat_message_box"),g(s,"type","text"),g(s,"class","w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2"),g(s,"placeholder",du),g(s,"autocomplete","off"),g(l,"class","fill-gray-400"),g(a,"class","w-7 transition duration-300 pr-2"),a.disabled=u=r[2]==="",g(i,"class","h-10 w-full bg-white flex rounded-lg text-black"),g(n,"class","p-2 flex flex-col bg-gray-300 rounded-t-xl stubber_webchat_input_box")},m(_,T){P(_,e,T);for(let A=0;A<m.length;A+=1)m[A]&&m[A].m(e,null);P(_,t,T),P(_,n,T),y(n,i),y(i,s),at(s,r[2]),y(i,o),y(i,a),y(a,l),de(c,l,null),y(n,f),w&&w.m(n,null),h=!0,d||(x=[ne(s,"input",r[20]),ne(s,"keydown",r[8]),ne(a,"click",r[9])],d=!0)},p(_,T){if(T[0]&2056){v=ai(_[3]);let A;for(A=0;A<v.length;A+=1){const N=Gi(_,v,A);m[A]?(m[A].p(N,T),$(m[A],1)):(m[A]=rs(N),m[A].c(),$(m[A],1),m[A].m(e,null))}for(Ve(),A=v.length;A<m.length;A+=1)b(A);Ye()}T[0]&4&&s.value!==_[2]&&at(s,_[2]),(!h||T[0]&4&&u!==(u=_[2]===""))&&(a.disabled=u),_[4]?w?w.p(_,T):(w=is(_),w.c(),w.m(n,null)):w&&(w.d(1),w=null)},i(_){if(!h){for(let T=0;T<v.length;T+=1)$(m[T]);$(c.$$.fragment,_),h=!0}},o(_){m=m.filter(Boolean);for(let T=0;T<m.length;T+=1)U(m[T]);U(c.$$.fragment,_),h=!1},d(_){_&&(L(e),L(t),L(n)),$o(m,_),me(c),w&&w.d(),d=!1,Ze(x)}}}function Qi(r){let e,t,n,i,s,o,a=r[11](r[31].dateTime)+"",l,c=(r[31].previous_direction=="out"||!r[31].previous_direction)&&Ji(),u=r[31].message.type=="markdown"&&es(r),f=r[31].message.type=="text"&&ts(r);return{c(){e=E("div"),c&&c.c(),t=H(),n=E("div"),u&&u.c(),i=H(),f&&f.c(),s=H(),o=E("p"),l=Be(a),g(o,"class","text-sm ml-auto"),g(n,"class","bg-gray-200 rounded-lg py-2 px-4 flex flex-col"),g(e,"class","mb-2 mr-10 flex flex-col")},m(h,d){P(h,e,d),c&&c.m(e,null),y(e,t),y(e,n),u&&u.m(n,null),y(n,i),f&&f.m(n,null),y(n,s),y(n,o),y(o,l)},p(h,d){h[31].previous_direction=="out"||!h[31].previous_direction?c||(c=Ji(),c.c(),c.m(e,t)):c&&(c.d(1),c=null),h[31].message.type=="markdown"?u?u.p(h,d):(u=es(h),u.c(),u.m(n,i)):u&&(u.d(1),u=null),h[31].message.type=="text"?f?f.p(h,d):(f=ts(h),f.c(),f.m(n,s)):f&&(f.d(1),f=null),d[0]&8&&a!==(a=h[11](h[31].dateTime)+"")&&lt(l,a)},d(h){h&&L(e),c&&c.d(),u&&u.d(),f&&f.d()}}}function Ji(r){let e;return{c(){e=E("p"),e.textContent="Agent",g(e,"class","m-auto mx-2 text-sm")},m(t,n){P(t,e,n)},d(t){t&&L(e)}}}function es(r){let e,t=ur.sanitize(j(r[31].message.value.trim()))+"",n;return{c(){e=new Po(!1),n=zn(),e.a=n},m(i,s){e.m(t,i,s),P(i,n,s)},p(i,s){s[0]&8&&t!==(t=ur.sanitize(j(i[31].message.value.trim()))+"")&&e.p(t)},d(i){i&&(L(n),e.d())}}}function ts(r){let e,t=r[31].message.value+"",n;return{c(){e=E("p"),n=Be(t),g(e,"class","")},m(i,s){P(i,e,s),y(e,n)},p(i,s){s[0]&8&&t!==(t=i[31].message.value+"")&&lt(n,t)},d(i){i&&L(e)}}}function ns(r){let e,t,n,i,s,o=r[31].message+"",a,l,c,u,f=r[11](r[31].dateTime)+"",h,d,x,v,m,b;return v=new so({}),{c(){e=E("div"),t=E("p"),t.textContent="You",n=H(),i=E("div"),s=E("p"),a=Be(o),l=H(),c=E("div"),u=E("p"),h=Be(f),d=H(),x=E("span"),Ee(v.$$.fragment),m=H(),g(t,"class","m-auto mx-2 text-sm"),g(s,"class",""),g(u,"class","text-sm ml-auto mr-2"),g(x,"class","stubber_webchat_message_tick w-3 my-auto bg-red"),g(c,"class","flex w-full"),g(i,"class","bg-gray-200 rounded-lg py-2 px-4 flex flex-col"),g(e,"class","mb-2 ml-10 text-right flex flex-col")},m(w,_){P(w,e,_),y(e,t),y(e,n),y(e,i),y(i,s),y(s,a),y(i,l),y(i,c),y(c,u),y(u,h),y(c,d),y(c,x),de(v,x,null),y(e,m),b=!0},p(w,_){(!b||_[0]&8)&&o!==(o=w[31].message+"")&&lt(a,o),(!b||_[0]&8)&&f!==(f=w[11](w[31].dateTime)+"")&&lt(h,f)},i(w){b||($(v.$$.fragment,w),b=!0)},o(w){U(v.$$.fragment,w),b=!1},d(w){w&&L(e),me(v)}}}function rs(r){let e,t,n,i=r[31].direction=="in"&&Qi(r),s=r[31].direction=="out"&&ns(r);return{c(){i&&i.c(),e=H(),s&&s.c(),t=zn()},m(o,a){i&&i.m(o,a),P(o,e,a),s&&s.m(o,a),P(o,t,a),n=!0},p(o,a){o[31].direction=="in"?i?i.p(o,a):(i=Qi(o),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),o[31].direction=="out"?s?(s.p(o,a),a[0]&8&&$(s,1)):(s=ns(o),s.c(),$(s,1),s.m(t.parentNode,t)):s&&(Ve(),U(s,1,1,()=>{s=null}),Ye())},i(o){n||($(s),n=!0)},o(o){U(s),n=!1},d(o){o&&(L(e),L(t)),i&&i.d(o),s&&s.d(o)}}}function is(r){let e,t,n,i;return{c(){e=E("div"),t=E("button"),t.textContent="Switch Chat Channels",g(t,"class","w-25 transition duration-300 my-2 mx-auto"),g(e,"class","w-full flex")},m(s,o){P(s,e,o),y(e,t),n||(i=ne(t,"click",r[13]),n=!0)},p:M,d(s){s&&L(e),n=!1,i()}}}function ss(r){let e,t,n,i,s,o,a,l,c,u,f,h,d,x,v,m,b,w,_,T,A,N,q,W,G,B,Q,J,X,ie,se,te,R;return s=new co({}),h=new fo({}),w=new uo({}),W=new io({}),ie=new Rs({props:{contactPointType:r[7],submit:r[10]}}),{c(){e=E("div"),t=E("div"),n=E("button"),i=E("span"),Ee(s.$$.fragment),o=H(),a=E("p"),a.textContent="Back to chat",l=H(),c=E("div"),u=E("button"),f=E("span"),Ee(h.$$.fragment),d=H(),x=E("p"),x.textContent="Whatsapp",v=H(),m=E("button"),b=E("span"),Ee(w.$$.fragment),_=H(),T=E("p"),T.textContent="SMS",A=H(),N=E("button"),q=E("span"),Ee(W.$$.fragment),G=H(),B=E("p"),B.textContent="Email",Q=H(),J=E("div"),X=E("div"),Ee(ie.$$.fragment),g(i,"class","stubber_webchat_breadcrumb_fill"),g(n,"class","w-6 h-25 my-auto transition duration-300 rounded-md mx-1"),g(a,"class","h-25 mx-2 my-auto stubber_webchat_breadcrumb_fill"),g(t,"class","flex w-full pl-2"),g(f,"class","w-10 mx-auto my-auto"),g(x,"class","mx-auto mb-1"),g(u,"class","w-15 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"),pe(u,"stubber_webchat_chat_button_border_fill_selected",r[6]=="whatsapp"),g(b,"class","w-10 mx-auto my-auto"),g(T,"class","mx-auto mb-1"),g(m,"class","w-15 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"),pe(m,"stubber_webchat_chat_button_border_fill_selected",r[6]=="sms"),g(q,"class","w-10 mx-auto my-auto"),g(B,"class","mx-auto mb-1"),g(N,"class","w-15 mx-auto rounded-xl flex flex-col stubber_webchat_chat_button_border_fill"),pe(N,"stubber_webchat_chat_button_border_fill_selected",r[6]=="email"),g(c,"class","flex flex-row mt-5"),g(X,"class","flex flex-col mt-5 mx-2"),g(J,"class","flex flex-col"),g(e,"class","p-2 flex flex-col bg-white h-full stubber_webchat_switch_box")},m(C,I){P(C,e,I),y(e,t),y(t,n),y(n,i),de(s,i,null),y(t,o),y(t,a),y(e,l),y(e,c),y(c,u),y(u,f),de(h,f,null),y(u,d),y(u,x),y(c,v),y(c,m),y(m,b),de(w,b,null),y(m,_),y(m,T),y(c,A),y(c,N),y(N,q),de(W,q,null),y(N,G),y(N,B),y(e,Q),y(e,J),y(J,X),de(ie,X,null),se=!0,te||(R=[ne(n,"click",r[21]),ne(u,"click",r[22]),ne(m,"click",r[23]),ne(N,"click",r[24])],te=!0)},p(C,I){(!se||I[0]&64)&&pe(u,"stubber_webchat_chat_button_border_fill_selected",C[6]=="whatsapp"),(!se||I[0]&64)&&pe(m,"stubber_webchat_chat_button_border_fill_selected",C[6]=="sms"),(!se||I[0]&64)&&pe(N,"stubber_webchat_chat_button_border_fill_selected",C[6]=="email");const Re={};I[0]&128&&(Re.contactPointType=C[7]),ie.$set(Re)},i(C){se||($(s.$$.fragment,C),$(h.$$.fragment,C),$(w.$$.fragment,C),$(W.$$.fragment,C),$(ie.$$.fragment,C),se=!0)},o(C){U(s.$$.fragment,C),U(h.$$.fragment,C),U(w.$$.fragment,C),U(W.$$.fragment,C),U(ie.$$.fragment,C),se=!1},d(C){C&&L(e),me(s),me(h),me(w),me(W),me(ie),te=!1,Ze(R)}}}function pu(r){let e,t,n,i,s,o,a=!r[1]&&Xi(r),l=r[1]&&Zi(r);return{c(){e=E("style"),e.textContent=`/*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.bottom-0 {
  bottom: 0px;
}
.right-0 {
  right: 0px;
}
.z-10 {
  z-index: 10;
}
.m-auto {
  margin: auto;
}
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.ml-10 {
  margin-left: 2.5rem;
}
.ml-auto {
  margin-left: auto;
}
.mr-10 {
  margin-right: 2.5rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mr-4 {
  margin-right: 1rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
}
.h-0 {
  height: 0px;
}
.h-10 {
  height: 2.5rem;
}
.h-11 {
  height: 2.75rem;
}
.h-6 {
  height: 1.5rem;
}
.h-full {
  height: 100%;
}
.max-h-\\[1000px\\] {
  max-height: 1000px;
}
.min-h-\\[200px\\] {
  min-height: 200px;
}
.w-0 {
  width: 0px;
}
.w-10 {
  width: 2.5rem;
}
.w-3 {
  width: 0.75rem;
}
.w-32 {
  width: 8rem;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-7 {
  width: 1.75rem;
}
.w-96 {
  width: 24rem;
}
.w-full {
  width: 100%;
}
.min-w-\\[250px\\] {
  min-width: 250px;
}
.max-w-\\[500px\\] {
  max-width: 500px;
}
.flex-grow {
  flex-grow: 1;
}
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.justify-end {
  justify-content: flex-end;
}
.justify-between {
  justify-content: space-between;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
}
.overflow-y-auto {
  overflow-y: auto;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}
.border-b {
  border-bottom-width: 1px;
}
.border-none {
  border-style: none;
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.fill-gray-400 {
  fill: #9ca3af;
}
.fill-white {
  fill: #fff;
}
.p-1 {
  padding: 0.25rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pl-3 {
  padding-left: 0.75rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pt-4 {
  padding-top: 1rem;
}
.text-right {
  text-align: right;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.font-semibold {
  font-weight: 600;
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.drop-shadow-\\[0_3px_3px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.4\\)\\] {
  --tw-drop-shadow: drop-shadow(0 3px 3px rgba(0,0,0,0.4));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300 {
  transition-duration: 300ms;
}
/* Tailwind CSS with @apply */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.stubber_webchat_message_box {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
/* Theme */
.stubber_webchat_theme {
  --primary-color: rgb(34, 0, 255);
  --background-color: white;
  --neutral-color: #909090;
}
.stubber_webchat_input_box,
.stubber_webchat_top_box,
.stubber_webchat_outer_box,
.stubber_webchat_chat_button {
  background-color: var(--primary-color);
  color: var(--background-color);
}
.stubber_webchat_message_box,
.stubber_webchat_outer_box,
.stubber_webchat_switch_box {
  background-color: var(--background-color);
  border: 1px solid var(--primary-color);
}
.stubber_webchat_switch_box {
  border: none
}
.stubber_webchat_chat_button_border_fill {
  background-color: var(--background-color);
  border: var(--neutral-color);
  fill: var(--neutral-color);
}
.stubber_webchat_chat_button_border_fill_selected {
  border-color: var(--primary-color);
  fill: var(--primary-color);
}
.stubber_webchat_chat_button:hover {
  opacity: 0.5
}
.stubber_webchat_chat_button:disabled {
  background-color: var(--neutral-color);
  color: var(--background-color);
}
.stubber_webchat_breadcrumb_fill {
  color: var(--primary-color);
  fill: var(--primary-color);
}
.stubber_webchat_message_tick {
  fill: var(--primary-color);
}
.stubber_webchat_general_input {
  border:1px solid var(--primary-color);
}
.stubber_webchat_general_input_error {
  border:1px solid red
}
.focus\\:border-none:focus {
  border-style: none;
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}`,t=H(),n=E("div"),a&&a.c(),i=H(),l&&l.c(),s=zn(),g(n,"class","stubber_webchat_theme fixed bottom-0 right-0 mb-4 mr-4 h-11 w-96 flex justify-end")},m(c,u){y(hu.head,e),P(c,t,u),P(c,n,u),a&&a.m(n,null),P(c,i,u),l&&l.m(c,u),P(c,s,u),o=!0},p(c,u){c[1]?a&&(Ve(),U(a,1,1,()=>{a=null}),Ye()):a?(a.p(c,u),u[0]&2&&$(a,1)):(a=Xi(c),a.c(),$(a,1),a.m(n,null)),c[1]?l?(l.p(c,u),u[0]&2&&$(l,1)):(l=Zi(c),l.c(),$(l,1),l.m(s.parentNode,s)):l&&(Ve(),U(l,1,1,()=>{l=null}),Ye())},i(c){o||($(a),$(l),o=!0)},o(c){U(a),U(l),o=!1},d(c){c&&(L(t),L(n),L(i),L(s)),L(e),a&&a.d(),l&&l.d(c)}}}let du="Type message...";function mu(r,e,t){console.log("stubber webchat v1.2");let{orguuid:n}=e,{chatname:i}=e,{chat_display_name:s}=e,{connect_on_open:o}=e,{open_on_load:a}=e,{passthrough_data:l}=e,c=!1,u=!1,f="",h=[],d,x=!0,v=!1,m="",b="",w="http://api.dev.stubber.zone:6026";Io(()=>{if(console.log("__Mounted"),a==="true"){G();return}o&&c&&_()});let _=()=>{d=$n(w),d.on("connect",async()=>{console.log("___Connected to server"),h.length==0&&await d.emit("initialize",{webchat_configuration:{orguuid:n,chatname:i,initialize:!0,passthrough_data:l}}),f.length>0&&A()}),d.on("disconnect",()=>{console.log("___Disconnected from server")}),d.on("webchat_message",R=>{let C=null;h.length>0&&(C=h[h.length-1].direction);let I={direction:"in",previous_direction:C,sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:R.webchat_message};h.push(I),t(3,h),W()}),d.on("webchat_client_configuration",R=>{Object.keys(R).forEach(I=>{R[I].type=="allow_switching"&&t(4,x=R[I].value)})}),d.on("error",R=>{console.log("__Stubber Webchat : "+(R==null?void 0:R.error))})},T=R=>{R.key==="Enter"&&f!=""&&A()},A=async()=>{if(!d){_();return}let R="in";h.length>0&&(R=h[h.length-1].direction);let C={direction:"out",previous_direction:R,sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:f};h.push(C),t(3,h),t(2,f=""),W(),d.connected&&(await d.emit("message",{webchat_configuration:{orguuid:n,chatname:i,passthrough_data:l},webchat_message:{type:"text",value:C.message,messageuuid:C.messageuuid}}),v&&await d.emit("client_configuration",{webchat_configuration:{orguuid:n,chatname:i,passthrough_data:l},webchat_client_configuration:{platform_switch:{platform_name:m,value:C.message}}}),C.received=!0,t(3,h))},N=async R=>{d||_(),console.log("sent config"),d.connected&&await d.emit("client_configuration",{webchat_configuration:{orguuid:n,chatname:i,passthrough_data:l},webchat_client_configuration:{platform_switch:{platform_name:m,value:R}}})},q=R=>{let C=R.getHours().toString().padStart(2,"0");const I=R.getMinutes().toString().padStart(2,"0"),Re=C>=12?"pm":"am";return C=C%12,C=C||12,C+":"+I+" "+Re},W=()=>{setTimeout(()=>{let R=document.getElementById("stubber_webchat_message_box");R.scrollTop=R.scrollHeight},100)},G=()=>{t(1,c=!0),o==="true"&&!u&&_(),u=!0},B=()=>{t(5,v=!0)};cs(()=>{ws&&ws.close()}),ur.addHook("afterSanitizeAttributes",function(R){"target"in R&&R.setAttribute("target","_blank"),!R.hasAttribute("target")&&(R.hasAttribute("xlink:href")||R.hasAttribute("href"))&&R.setAttribute("xlink:show","new")});const Q=()=>{t(1,c=!1)};function J(){f=this.value,t(2,f)}const X=()=>{t(5,v=!1)},ie=()=>{t(6,m="whatsapp"),t(7,b="mobile")},se=()=>{t(6,m="sms"),t(7,b="mobile")},te=()=>{t(6,m="email"),t(7,b="email")};return r.$$set=R=>{"orguuid"in R&&t(14,n=R.orguuid),"chatname"in R&&t(15,i=R.chatname),"chat_display_name"in R&&t(0,s=R.chat_display_name),"connect_on_open"in R&&t(16,o=R.connect_on_open),"open_on_load"in R&&t(17,a=R.open_on_load),"passthrough_data"in R&&t(18,l=R.passthrough_data)},[s,c,f,h,x,v,m,b,T,A,N,q,G,B,n,i,o,a,l,Q,J,X,ie,se,te]}class gu extends ve{constructor(e){super(),ye(this,e,mu,pu,we,{orguuid:14,chatname:15,chat_display_name:0,connect_on_open:16,open_on_load:17,passthrough_data:18},null,[-1,-1])}get orguuid(){return this.$$.ctx[14]}set orguuid(e){this.$$set({orguuid:e}),V()}get chatname(){return this.$$.ctx[15]}set chatname(e){this.$$set({chatname:e}),V()}get chat_display_name(){return this.$$.ctx[0]}set chat_display_name(e){this.$$set({chat_display_name:e}),V()}get connect_on_open(){return this.$$.ctx[16]}set connect_on_open(e){this.$$set({connect_on_open:e}),V()}get open_on_load(){return this.$$.ctx[17]}set open_on_load(e){this.$$set({open_on_load:e}),V()}get passthrough_data(){return this.$$.ctx[18]}set passthrough_data(e){this.$$set({passthrough_data:e}),V()}}customElements.define("stubber-webchat",_e(gu,{orguuid:{},chatname:{},chat_display_name:{},connect_on_open:{},open_on_load:{},passthrough_data:{}},[],[],!1));
