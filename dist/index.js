var vo=Object.defineProperty;var xo=(r,e,t)=>e in r?vo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var M=(r,e,t)=>(xo(r,typeof e!="symbol"?e+"":e,t),t),ko=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var Xn=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};var gn=(r,e,t)=>(ko(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function D(){}function To(r,e){for(const t in e)r[t]=e[t];return r}function ls(r){return r()}function ai(){return Object.create(null)}function Xe(r){r.forEach(ls)}function _r(r){return typeof r=="function"}function de(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let bn;function Eo(r,e){return r===e?!0:(bn||(bn=document.createElement("a")),bn.href=e,r===bn.href)}function Ao(r){return Object.keys(r).length===0}function vr(r,e,t,n){if(r){const i=cs(r,e,t,n);return r[0](i)}}function cs(r,e,t,n){return r[1]&&n?To(t.ctx.slice(),r[1](n(e))):t.ctx}function xr(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function kr(r,e,t,n,i,s){if(i){const o=cs(e,t,n,s);r.p(o,i)}}function Tr(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Er(r){return r&&_r(r.destroy)?r.destroy:D}const $o=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function x(r,e){r.appendChild(e)}function Ro(r,e,t){const n=Oo(r);if(!n.getElementById(e)){const i=E("style");i.id=e,i.textContent=t,So(n,i)}}function Oo(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function So(r,e){return x(r.head||r,e),e.sheet}function L(r,e,t){r.insertBefore(e,t||null)}function S(r){r.parentNode&&r.parentNode.removeChild(r)}function Co(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function E(r){return document.createElement(r)}function ce(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function je(r){return document.createTextNode(r)}function B(){return je(" ")}function Un(){return je("")}function se(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function Lo(r){return function(e){return e.preventDefault(),r.call(this,e)}}function b(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function No(r){return Array.from(r.childNodes)}function ct(r,e){e=""+e,r.data!==e&&(r.data=e)}function lt(r,e){r.value=e??""}function $t(r,e,t){r.classList.toggle(e,!!t)}class Po{constructor(e=!1){M(this,"is_svg",!1);M(this,"e");M(this,"n");M(this,"t");M(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=ce(t.nodeName):this.e=E(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)L(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}function Do(r){const e={};return r.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let sn;function Jt(r){sn=r}function us(){if(!sn)throw new Error("Function called outside component initialization");return sn}function Io(r){us().$$.on_mount.push(r)}function fs(r){us().$$.on_destroy.push(r)}function li(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Ot=[],et=[];let Ct=[];const ir=[],hs=Promise.resolve();let sr=!1;function ps(){sr||(sr=!0,hs.then(K))}function Mo(){return ps(),hs}function or(r){Ct.push(r)}function Lt(r){ir.push(r)}const Zn=new Set;let Rt=0;function K(){if(Rt!==0)return;const r=sn;do{try{for(;Rt<Ot.length;){const e=Ot[Rt];Rt++,Jt(e),Bo(e.$$)}}catch(e){throw Ot.length=0,Rt=0,e}for(Jt(null),Ot.length=0,Rt=0;et.length;)et.pop()();for(let e=0;e<Ct.length;e+=1){const t=Ct[e];Zn.has(t)||(Zn.add(t),t())}Ct.length=0}while(Ot.length);for(;ir.length;)ir.pop()();sr=!1,Zn.clear(),Jt(r)}function Bo(r){if(r.fragment!==null){r.update(),Xe(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(or)}}function zo(r){const e=[],t=[];Ct.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ct=e}const Rn=new Set;let mt;function We(){mt={r:0,c:[],p:mt}}function Ve(){mt.r||Xe(mt.c),mt=mt.p}function C(r,e){r&&r.i&&(Rn.delete(r),r.i(e))}function I(r,e,t,n){if(r&&r.o){if(Rn.has(r))return;Rn.add(r),mt.c.push(()=>{Rn.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function ci(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Nt(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function ie(r){r&&r.c()}function te(r,e,t){const{fragment:n,after_update:i}=r.$$;n&&n.m(e,t),or(()=>{const s=r.$$.on_mount.map(ls).filter(_r);r.$$.on_destroy?r.$$.on_destroy.push(...s):Xe(s),r.$$.on_mount=[]}),i.forEach(or)}function ne(r,e){const t=r.$$;t.fragment!==null&&(zo(t.after_update),Xe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Uo(r,e){r.$$.dirty[0]===-1&&(Ot.push(r),ps(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function me(r,e,t,n,i,s,o=null,a=[-1]){const l=sn;Jt(r);const c=r.$$={fragment:null,ctx:[],props:s,update:D,not_equal:i,bound:ai(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ai(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(h,f,...m)=>{const y=m.length?m[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=y)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](y),u&&Uo(r,h)),f}):[],c.update(),u=!0,Xe(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const h=No(e.target);c.fragment&&c.fragment.l(h),h.forEach(S)}else c.fragment&&c.fragment.c();e.intro&&C(r.$$.fragment),te(r,e.target,e.anchor),K()}Jt(l)}let ds;typeof HTMLElement=="function"&&(ds=class extends HTMLElement{constructor(e,t,n){super();M(this,"$$ctor");M(this,"$$s");M(this,"$$c");M(this,"$$cn",!1);M(this,"$$d",{});M(this,"$$r",!1);M(this,"$$p_d",{});M(this,"$$l",{});M(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const i=this.$$c.$on(e,t);this.$$l_u.set(t,i)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const i=this.$$l_u.get(t);i&&(i(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let a;return{c:function(){a=E("slot"),o!=="default"&&b(a,"name",o)},m:function(u,h){L(u,a,h)},d:function(u){u&&S(a)}}}};var e=t;if(await Promise.resolve(),!this.$$cn)return;const n={},i=Do(this);for(const o of this.$$s)o in i&&(n[o]=[t(o)]);for(const o of this.attributes){const a=this.$$g_p(o.name);a in this.$$d||(this.$$d[a]=On(a,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const a=On(o,this.$$d[o],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,a)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const o in this.$$l)for(const a of this.$$l[o]){const l=this.$$c.$on(o,a);this.$$l_u.set(a,l)}this.$$l={}}}attributeChangedCallback(e,t,n){var i;this.$$r||(e=this.$$g_p(e),this.$$d[e]=On(e,n,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function On(r,e,t,n){var s;const i=(s=t[r])==null?void 0:s.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!t[r])return e;if(n==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function ge(r,e,t,n,i,s){let o=class extends ds{constructor(){super(r,t,i),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){var c;l=On(a,l,e),this.$$d[a]=l,(c=this.$$c)==null||c.$set({[a]:l})}})}),n.forEach(a=>{Object.defineProperty(o.prototype,a,{get(){var l;return(l=this.$$c)==null?void 0:l[a]}})}),s&&(o=s(o)),r.element=o,o}class be{constructor(){M(this,"$$");M(this,"$$set")}$destroy(){ne(this,1),this.$destroy=D}$on(e,t){if(!_r(t))return D;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Ao(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Fo="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Fo);function Ho(r){let e,t,n,i;const s=r[3].default,o=vr(s,r,r[2],null);return{c(){e=E("form"),o&&o.c()},m(a,l){L(a,e,l),o&&o.m(e,null),t=!0,n||(i=[se(e,"submit",Lo(r[4])),se(e,"focusout",r[5]),Er(r[0].call(null,e))],n=!0)},p(a,[l]){o&&o.p&&(!t||l&4)&&kr(o,s,a,a[2],t?xr(s,a[2],l,null):Tr(a[2]),null)},i(a){t||(C(o,a),t=!0)},o(a){I(o,a),t=!1},d(a){a&&S(e),o&&o.d(a),n=!1,Xe(i)}}}function qo(r){var t;(t=Array.from(r.elements).filter(n=>(n.tagName==="INPUT"||n.tagName==="TEXTAREA")&&n.type!=="hidden"&&!n.disabled&&!n.readOnly)[0])==null||t.focus()}function jo(r,e,t){let{$$slots:n={},$$scope:i}=e,{autoFocus:s=!0}=e;async function o(c){await Mo(),s&&qo(c)}function a(c){li.call(this,r,c)}function l(c){li.call(this,r,c)}return r.$$set=c=>{"autoFocus"in c&&t(1,s=c.autoFocus),"$$scope"in c&&t(2,i=c.$$scope)},[o,s,i,n,a,l]}class ms extends be{constructor(e){super(),me(this,e,jo,Ho,de,{autoFocus:1})}get autoFocus(){return this.$$.ctx[1]}set autoFocus(e){this.$$set({autoFocus:e}),K()}}ge(ms,{autoFocus:{type:"Boolean"}},["default"],[],!0);function ui(r){let e,t,n;return{c(){e=E("label"),t=je(r[1]),b(e,"for",n="input_$"+r[2]),b(e,"class","block text-label")},m(i,s){L(i,e,s),x(e,t)},p(i,s){s&2&&ct(t,i[1]),s&4&&n!==(n="input_$"+i[2])&&b(e,"for",n)},d(i){i&&S(e)}}}function fi(r){return{c:D,m:D,d:D}}function Wo(r){let e,t,n,i,s,o,a,l,c,u,h,f,m,y,v,d=r[1]&&ui(r),_=r[6]&&r[3]&&fi();return{c(){e=E("link"),t=E("script"),t.innerHTML="",i=B(),s=E("div"),d&&d.c(),o=B(),a=E("div"),l=E("input"),h=B(),f=E("input"),m=B(),_&&_.c(),b(e,"rel","stylesheet"),b(e,"href","https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css"),Eo(t.src,n="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js")||b(t,"src",n),l.readOnly=r[4],b(l,"type","tel"),b(l,"id",c="input_$"+r[2]),b(l,"class",u="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(r[6]?"ring-red-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"),b(f,"type","hidden"),b(f,"name",r[2]),b(a,"class","flex flex-col w-full space-y-2 relative mt-2 rounded-md"),b(s,"class","flex flex-col w-full space-y-2 text-surface-900")},m(w,g){x(document.head,e),x(document.head,t),L(w,i,g),L(w,s,g),d&&d.m(s,null),x(s,o),x(s,a),x(a,l),r[10](l),lt(l,r[0]),x(a,h),x(a,f),lt(f,r[7]),x(s,m),_&&_.m(s,null),y||(v=[se(t,"load",r[9]),se(l,"input",r[8]),se(l,"input",r[11]),se(f,"input",r[12])],y=!0)},p(w,[g]){w[1]?d?d.p(w,g):(d=ui(w),d.c(),d.m(s,o)):d&&(d.d(1),d=null),g&16&&(l.readOnly=w[4]),g&4&&c!==(c="input_$"+w[2])&&b(l,"id",c),g&64&&u!==(u="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(w[6]?"ring-red-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset")&&b(l,"class",u),g&1&&lt(l,w[0]),g&4&&b(f,"name",w[2]),g&128&&lt(f,w[7]),w[6]&&w[3]?_||(_=fi(),_.c(),_.m(s,null)):_&&(_.d(1),_=null)},i:D,o:D,d(w){w&&(S(i),S(s)),S(e),S(t),d&&d.d(),r[10](null),_&&_.d(),y=!1,Xe(v)}}}function Vo(r,e,t){let{label:n}=e,{name:i}=e,{value:s}=e,{validationMessage:o="Invalid Number"}=e,{readonly:a=!1}=e,l,c,u,h;const f=()=>{l.value.trim()&&(u.isValidNumber()?(t(6,c=!1),t(7,h=u.getNumber()),console.log({intVal:h,isError:c,isValid:u.isValidNumber(),dialCode:u.getSelectedCountryData().dialCode})):t(6,c=!0))};function m(){u=window.intlTelInput(l,{initialCountry:"auto",geoIpLookup:_=>{fetch("https://ipapi.co/json").then(w=>w.json()).then(w=>_(w.country_code)).catch(()=>_("us"))},utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"})}function y(_){et[_?"unshift":"push"](()=>{l=_,t(5,l)})}function v(){s=this.value,t(0,s)}function d(){h=this.value,t(7,h)}return r.$$set=_=>{"label"in _&&t(1,n=_.label),"name"in _&&t(2,i=_.name),"value"in _&&t(0,s=_.value),"validationMessage"in _&&t(3,o=_.validationMessage),"readonly"in _&&t(4,a=_.readonly)},[s,n,i,o,a,l,c,h,f,m,y,v,d]}class Ar extends be{constructor(e){super(),me(this,e,Vo,Wo,de,{label:1,name:2,value:0,validationMessage:3,readonly:4})}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),K()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),K()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),K()}get validationMessage(){return this.$$.ctx[3]}set validationMessage(e){this.$$set({validationMessage:e}),K()}get readonly(){return this.$$.ctx[4]}set readonly(e){this.$$set({readonly:e}),K()}}ge(Ar,{label:{},name:{},value:{},validationMessage:{},readonly:{type:"Boolean"}},[],[],!0);var _e="top",Ce="bottom",Le="right",ve="left",$r="auto",cn=[_e,Ce,Le,ve],Pt="start",on="end",Yo="clippingParents",gs="viewport",Vt="popper",Go="reference",hi=cn.reduce(function(r,e){return r.concat([e+"-"+Pt,e+"-"+on])},[]),bs=[].concat(cn,[$r]).reduce(function(r,e){return r.concat([e,e+"-"+Pt,e+"-"+on])},[]),Xo="beforeRead",Zo="read",Ko="afterRead",Qo="beforeMain",Jo="main",ea="afterMain",ta="beforeWrite",na="write",ra="afterWrite",ia=[Xo,Zo,Ko,Qo,Jo,ea,ta,na,ra];function Ye(r){return r?(r.nodeName||"").toLowerCase():null}function Te(r){if(r==null)return window;if(r.toString()!=="[object Window]"){var e=r.ownerDocument;return e&&e.defaultView||window}return r}function bt(r){var e=Te(r).Element;return r instanceof e||r instanceof Element}function Se(r){var e=Te(r).HTMLElement;return r instanceof e||r instanceof HTMLElement}function Rr(r){if(typeof ShadowRoot>"u")return!1;var e=Te(r).ShadowRoot;return r instanceof e||r instanceof ShadowRoot}function sa(r){var e=r.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},s=e.elements[t];!Se(s)||!Ye(s)||(Object.assign(s.style,n),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function oa(r){var e=r.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var i=e.elements[n],s=e.attributes[n]||{},o=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),a=o.reduce(function(l,c){return l[c]="",l},{});!Se(i)||!Ye(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(l){i.removeAttribute(l)}))})}}const aa={name:"applyStyles",enabled:!0,phase:"write",fn:sa,effect:oa,requires:["computeStyles"]};function He(r){return r.split("-")[0]}var gt=Math.max,Dn=Math.min,Dt=Math.round;function ar(){var r=navigator.userAgentData;return r!=null&&r.brands&&Array.isArray(r.brands)?r.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ys(){return!/^((?!chrome|android).)*safari/i.test(ar())}function It(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var n=r.getBoundingClientRect(),i=1,s=1;e&&Se(r)&&(i=r.offsetWidth>0&&Dt(n.width)/r.offsetWidth||1,s=r.offsetHeight>0&&Dt(n.height)/r.offsetHeight||1);var o=bt(r)?Te(r):window,a=o.visualViewport,l=!ys()&&t,c=(n.left+(l&&a?a.offsetLeft:0))/i,u=(n.top+(l&&a?a.offsetTop:0))/s,h=n.width/i,f=n.height/s;return{width:h,height:f,top:u,right:c+h,bottom:u+f,left:c,x:c,y:u}}function Or(r){var e=It(r),t=r.offsetWidth,n=r.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:r.offsetLeft,y:r.offsetTop,width:t,height:n}}function _s(r,e){var t=e.getRootNode&&e.getRootNode();if(r.contains(e))return!0;if(t&&Rr(t)){var n=e;do{if(n&&r.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function nt(r){return Te(r).getComputedStyle(r)}function la(r){return["table","td","th"].indexOf(Ye(r))>=0}function ut(r){return((bt(r)?r.ownerDocument:r.document)||window.document).documentElement}function Fn(r){return Ye(r)==="html"?r:r.assignedSlot||r.parentNode||(Rr(r)?r.host:null)||ut(r)}function pi(r){return!Se(r)||nt(r).position==="fixed"?null:r.offsetParent}function ca(r){var e=/firefox/i.test(ar()),t=/Trident/i.test(ar());if(t&&Se(r)){var n=nt(r);if(n.position==="fixed")return null}var i=Fn(r);for(Rr(i)&&(i=i.host);Se(i)&&["html","body"].indexOf(Ye(i))<0;){var s=nt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function un(r){for(var e=Te(r),t=pi(r);t&&la(t)&&nt(t).position==="static";)t=pi(t);return t&&(Ye(t)==="html"||Ye(t)==="body"&&nt(t).position==="static")?e:t||ca(r)||e}function Sr(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function en(r,e,t){return gt(r,Dn(e,t))}function ua(r,e,t){var n=en(r,e,t);return n>t?t:n}function vs(){return{top:0,right:0,bottom:0,left:0}}function xs(r){return Object.assign({},vs(),r)}function ks(r,e){return e.reduce(function(t,n){return t[n]=r,t},{})}var fa=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,xs(typeof e!="number"?e:ks(e,cn))};function ha(r){var e,t=r.state,n=r.name,i=r.options,s=t.elements.arrow,o=t.modifiersData.popperOffsets,a=He(t.placement),l=Sr(a),c=[ve,Le].indexOf(a)>=0,u=c?"height":"width";if(!(!s||!o)){var h=fa(i.padding,t),f=Or(s),m=l==="y"?_e:ve,y=l==="y"?Ce:Le,v=t.rects.reference[u]+t.rects.reference[l]-o[l]-t.rects.popper[u],d=o[l]-t.rects.reference[l],_=un(s),w=_?l==="y"?_.clientHeight||0:_.clientWidth||0:0,g=v/2-d/2,T=h[m],A=w-f[u]-h[y],N=w/2-f[u]/2+g,q=en(T,N,A),W=l;t.modifiersData[n]=(e={},e[W]=q,e.centerOffset=q-N,e)}}function pa(r){var e=r.state,t=r.options,n=t.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||_s(e.elements.popper,i)&&(e.elements.arrow=i))}const da={name:"arrow",enabled:!0,phase:"main",fn:ha,effect:pa,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Mt(r){return r.split("-")[1]}var ma={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ga(r,e){var t=r.x,n=r.y,i=e.devicePixelRatio||1;return{x:Dt(t*i)/i||0,y:Dt(n*i)/i||0}}function di(r){var e,t=r.popper,n=r.popperRect,i=r.placement,s=r.variation,o=r.offsets,a=r.position,l=r.gpuAcceleration,c=r.adaptive,u=r.roundOffsets,h=r.isFixed,f=o.x,m=f===void 0?0:f,y=o.y,v=y===void 0?0:y,d=typeof u=="function"?u({x:m,y:v}):{x:m,y:v};m=d.x,v=d.y;var _=o.hasOwnProperty("x"),w=o.hasOwnProperty("y"),g=ve,T=_e,A=window;if(c){var N=un(t),q="clientHeight",W="clientWidth";if(N===Te(t)&&(N=ut(t),nt(N).position!=="static"&&a==="absolute"&&(q="scrollHeight",W="scrollWidth")),N=N,i===_e||(i===ve||i===Le)&&s===on){T=Ce;var Y=h&&N===A&&A.visualViewport?A.visualViewport.height:N[q];v-=Y-n.height,v*=l?1:-1}if(i===ve||(i===_e||i===Ce)&&s===on){g=Le;var U=h&&N===A&&A.visualViewport?A.visualViewport.width:N[W];m-=U-n.width,m*=l?1:-1}}var Q=Object.assign({position:a},c&&ma),J=u===!0?ga({x:m,y:v},Te(t)):{x:m,y:v};if(m=J.x,v=J.y,l){var G;return Object.assign({},Q,(G={},G[T]=w?"0":"",G[g]=_?"0":"",G.transform=(A.devicePixelRatio||1)<=1?"translate("+m+"px, "+v+"px)":"translate3d("+m+"px, "+v+"px, 0)",G))}return Object.assign({},Q,(e={},e[T]=w?v+"px":"",e[g]=_?m+"px":"",e.transform="",e))}function ba(r){var e=r.state,t=r.options,n=t.gpuAcceleration,i=n===void 0?!0:n,s=t.adaptive,o=s===void 0?!0:s,a=t.roundOffsets,l=a===void 0?!0:a,c={placement:He(e.placement),variation:Mt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,di(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,di(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const wa={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ba,data:{}};var wn={passive:!0};function ya(r){var e=r.state,t=r.instance,n=r.options,i=n.scroll,s=i===void 0?!0:i,o=n.resize,a=o===void 0?!0:o,l=Te(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",t.update,wn)}),a&&l.addEventListener("resize",t.update,wn),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",t.update,wn)}),a&&l.removeEventListener("resize",t.update,wn)}}const _a={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ya,data:{}};var va={left:"right",right:"left",bottom:"top",top:"bottom"};function Sn(r){return r.replace(/left|right|bottom|top/g,function(e){return va[e]})}var xa={start:"end",end:"start"};function mi(r){return r.replace(/start|end/g,function(e){return xa[e]})}function Cr(r){var e=Te(r),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function Lr(r){return It(ut(r)).left+Cr(r).scrollLeft}function ka(r,e){var t=Te(r),n=ut(r),i=t.visualViewport,s=n.clientWidth,o=n.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;var c=ys();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a+Lr(r),y:l}}function Ta(r){var e,t=ut(r),n=Cr(r),i=(e=r.ownerDocument)==null?void 0:e.body,s=gt(t.scrollWidth,t.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=gt(t.scrollHeight,t.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+Lr(r),l=-n.scrollTop;return nt(i||t).direction==="rtl"&&(a+=gt(t.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function Nr(r){var e=nt(r),t=e.overflow,n=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+i+n)}function Ts(r){return["html","body","#document"].indexOf(Ye(r))>=0?r.ownerDocument.body:Se(r)&&Nr(r)?r:Ts(Fn(r))}function tn(r,e){var t;e===void 0&&(e=[]);var n=Ts(r),i=n===((t=r.ownerDocument)==null?void 0:t.body),s=Te(n),o=i?[s].concat(s.visualViewport||[],Nr(n)?n:[]):n,a=e.concat(o);return i?a:a.concat(tn(Fn(o)))}function lr(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function Ea(r,e){var t=It(r,!1,e==="fixed");return t.top=t.top+r.clientTop,t.left=t.left+r.clientLeft,t.bottom=t.top+r.clientHeight,t.right=t.left+r.clientWidth,t.width=r.clientWidth,t.height=r.clientHeight,t.x=t.left,t.y=t.top,t}function gi(r,e,t){return e===gs?lr(ka(r,t)):bt(e)?Ea(e,t):lr(Ta(ut(r)))}function Aa(r){var e=tn(Fn(r)),t=["absolute","fixed"].indexOf(nt(r).position)>=0,n=t&&Se(r)?un(r):r;return bt(n)?e.filter(function(i){return bt(i)&&_s(i,n)&&Ye(i)!=="body"}):[]}function $a(r,e,t,n){var i=e==="clippingParents"?Aa(r):[].concat(e),s=[].concat(i,[t]),o=s[0],a=s.reduce(function(l,c){var u=gi(r,c,n);return l.top=gt(u.top,l.top),l.right=Dn(u.right,l.right),l.bottom=Dn(u.bottom,l.bottom),l.left=gt(u.left,l.left),l},gi(r,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Es(r){var e=r.reference,t=r.element,n=r.placement,i=n?He(n):null,s=n?Mt(n):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,l;switch(i){case _e:l={x:o,y:e.y-t.height};break;case Ce:l={x:o,y:e.y+e.height};break;case Le:l={x:e.x+e.width,y:a};break;case ve:l={x:e.x-t.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?Sr(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case Pt:l[c]=l[c]-(e[u]/2-t[u]/2);break;case on:l[c]=l[c]+(e[u]/2-t[u]/2);break}}return l}function an(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=n===void 0?r.placement:n,s=t.strategy,o=s===void 0?r.strategy:s,a=t.boundary,l=a===void 0?Yo:a,c=t.rootBoundary,u=c===void 0?gs:c,h=t.elementContext,f=h===void 0?Vt:h,m=t.altBoundary,y=m===void 0?!1:m,v=t.padding,d=v===void 0?0:v,_=xs(typeof d!="number"?d:ks(d,cn)),w=f===Vt?Go:Vt,g=r.rects.popper,T=r.elements[y?w:f],A=$a(bt(T)?T:T.contextElement||ut(r.elements.popper),l,u,o),N=It(r.elements.reference),q=Es({reference:N,element:g,strategy:"absolute",placement:i}),W=lr(Object.assign({},g,q)),Y=f===Vt?W:N,U={top:A.top-Y.top+_.top,bottom:Y.bottom-A.bottom+_.bottom,left:A.left-Y.left+_.left,right:Y.right-A.right+_.right},Q=r.modifiersData.offset;if(f===Vt&&Q){var J=Q[i];Object.keys(U).forEach(function(G){var ae=[Le,Ce].indexOf(G)>=0?1:-1,le=[_e,Ce].indexOf(G)>=0?"y":"x";U[G]+=J[le]*ae})}return U}function Ra(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=t.boundary,s=t.rootBoundary,o=t.padding,a=t.flipVariations,l=t.allowedAutoPlacements,c=l===void 0?bs:l,u=Mt(n),h=u?a?hi:hi.filter(function(y){return Mt(y)===u}):cn,f=h.filter(function(y){return c.indexOf(y)>=0});f.length===0&&(f=h);var m=f.reduce(function(y,v){return y[v]=an(r,{placement:v,boundary:i,rootBoundary:s,padding:o})[He(v)],y},{});return Object.keys(m).sort(function(y,v){return m[y]-m[v]})}function Oa(r){if(He(r)===$r)return[];var e=Sn(r);return[mi(r),e,mi(e)]}function Sa(r){var e=r.state,t=r.options,n=r.name;if(!e.modifiersData[n]._skip){for(var i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!0:o,l=t.fallbackPlacements,c=t.padding,u=t.boundary,h=t.rootBoundary,f=t.altBoundary,m=t.flipVariations,y=m===void 0?!0:m,v=t.allowedAutoPlacements,d=e.options.placement,_=He(d),w=_===d,g=l||(w||!y?[Sn(d)]:Oa(d)),T=[d].concat(g).reduce(function($e,Re){return $e.concat(He(Re)===$r?Ra(e,{placement:Re,boundary:u,rootBoundary:h,padding:c,flipVariations:y,allowedAutoPlacements:v}):Re)},[]),A=e.rects.reference,N=e.rects.popper,q=new Map,W=!0,Y=T[0],U=0;U<T.length;U++){var Q=T[U],J=He(Q),G=Mt(Q)===Pt,ae=[_e,Ce].indexOf(J)>=0,le=ae?"width":"height",re=an(e,{placement:Q,boundary:u,rootBoundary:h,altBoundary:f,padding:c}),$=ae?G?Le:ve:G?Ce:_e;A[le]>N[le]&&($=Sn($));var P=Sn($),z=[];if(s&&z.push(re[J]<=0),a&&z.push(re[$]<=0,re[P]<=0),z.every(function($e){return $e})){Y=Q,W=!1;break}q.set(Q,z)}if(W)for(var Ae=y?3:1,ee=function(Re){var it=T.find(function(st){var Be=q.get(st);if(Be)return Be.slice(0,Re).every(function(_t){return _t})});if(it)return Y=it,"break"},rt=Ae;rt>0;rt--){var X=ee(rt);if(X==="break")break}e.placement!==Y&&(e.modifiersData[n]._skip=!0,e.placement=Y,e.reset=!0)}}const Ca={name:"flip",enabled:!0,phase:"main",fn:Sa,requiresIfExists:["offset"],data:{_skip:!1}};function bi(r,e,t){return t===void 0&&(t={x:0,y:0}),{top:r.top-e.height-t.y,right:r.right-e.width+t.x,bottom:r.bottom-e.height+t.y,left:r.left-e.width-t.x}}function wi(r){return[_e,Le,Ce,ve].some(function(e){return r[e]>=0})}function La(r){var e=r.state,t=r.name,n=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=an(e,{elementContext:"reference"}),a=an(e,{altBoundary:!0}),l=bi(o,n),c=bi(a,i,s),u=wi(l),h=wi(c);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const Na={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:La};function Pa(r,e,t){var n=He(r),i=[ve,_e].indexOf(n)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:r})):t,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[ve,Le].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Da(r){var e=r.state,t=r.options,n=r.name,i=t.offset,s=i===void 0?[0,0]:i,o=bs.reduce(function(u,h){return u[h]=Pa(h,e.rects,s),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=o}const Ia={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Da};function Ma(r){var e=r.state,t=r.name;e.modifiersData[t]=Es({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Ba={name:"popperOffsets",enabled:!0,phase:"read",fn:Ma,data:{}};function za(r){return r==="x"?"y":"x"}function Ua(r){var e=r.state,t=r.options,n=r.name,i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!1:o,l=t.boundary,c=t.rootBoundary,u=t.altBoundary,h=t.padding,f=t.tether,m=f===void 0?!0:f,y=t.tetherOffset,v=y===void 0?0:y,d=an(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),_=He(e.placement),w=Mt(e.placement),g=!w,T=Sr(_),A=za(T),N=e.modifiersData.popperOffsets,q=e.rects.reference,W=e.rects.popper,Y=typeof v=="function"?v(Object.assign({},e.rects,{placement:e.placement})):v,U=typeof Y=="number"?{mainAxis:Y,altAxis:Y}:Object.assign({mainAxis:0,altAxis:0},Y),Q=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,J={x:0,y:0};if(N){if(s){var G,ae=T==="y"?_e:ve,le=T==="y"?Ce:Le,re=T==="y"?"height":"width",$=N[T],P=$+d[ae],z=$-d[le],Ae=m?-W[re]/2:0,ee=w===Pt?q[re]:W[re],rt=w===Pt?-W[re]:-q[re],X=e.elements.arrow,$e=m&&X?Or(X):{width:0,height:0},Re=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:vs(),it=Re[ae],st=Re[le],Be=en(0,q[re],$e[re]),_t=g?q[re]/2-Ae-Be-it-U.mainAxis:ee-Be-it-U.mainAxis,ot=g?-q[re]/2+Ae+Be+st+U.mainAxis:rt+Be+st+U.mainAxis,Ne=e.elements.arrow&&un(e.elements.arrow),zt=Ne?T==="y"?Ne.clientTop||0:Ne.clientLeft||0:0,vt=(G=Q==null?void 0:Q[T])!=null?G:0,at=$+_t-vt-zt,xt=$+ot-vt,ft=en(m?Dn(P,at):P,$,m?gt(z,xt):z);N[T]=ft,J[T]=ft-$}if(a){var Ut,pn=T==="x"?_e:ve,jn=T==="x"?Ce:Le,Pe=N[A],ze=A==="y"?"height":"width",Ze=Pe+d[pn],Ke=Pe-d[jn],kt=[_e,ve].indexOf(_)!==-1,Ft=(Ut=Q==null?void 0:Q[A])!=null?Ut:0,Ht=kt?Ze:Pe-q[ze]-W[ze]-Ft+U.altAxis,Tt=kt?Pe+q[ze]+W[ze]-Ft-U.altAxis:Ke,qt=m&&kt?ua(Ht,Pe,Tt):en(m?Ht:Ze,Pe,m?Tt:Ke);N[A]=qt,J[A]=qt-Pe}e.modifiersData[n]=J}}const Fa={name:"preventOverflow",enabled:!0,phase:"main",fn:Ua,requiresIfExists:["offset"]};function Ha(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function qa(r){return r===Te(r)||!Se(r)?Cr(r):Ha(r)}function ja(r){var e=r.getBoundingClientRect(),t=Dt(e.width)/r.offsetWidth||1,n=Dt(e.height)/r.offsetHeight||1;return t!==1||n!==1}function Wa(r,e,t){t===void 0&&(t=!1);var n=Se(e),i=Se(e)&&ja(e),s=ut(e),o=It(r,i,t),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!t)&&((Ye(e)!=="body"||Nr(s))&&(a=qa(e)),Se(e)?(l=It(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=Lr(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function Va(r){var e=new Map,t=new Set,n=[];r.forEach(function(s){e.set(s.name,s)});function i(s){t.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var l=e.get(a);l&&i(l)}}),n.push(s)}return r.forEach(function(s){t.has(s.name)||i(s)}),n}function Ya(r){var e=Va(r);return ia.reduce(function(t,n){return t.concat(e.filter(function(i){return i.phase===n}))},[])}function Ga(r){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(r())})})),e}}function Xa(r){var e=r.reduce(function(t,n){var i=t[n.name];return t[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var yi={placement:"bottom",modifiers:[],strategy:"absolute"};function _i(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Za(r){r===void 0&&(r={});var e=r,t=e.defaultModifiers,n=t===void 0?[]:t,i=e.defaultOptions,s=i===void 0?yi:i;return function(a,l,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},yi,s),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],f=!1,m={state:u,setOptions:function(_){var w=typeof _=="function"?_(u.options):_;v(),u.options=Object.assign({},s,u.options,w),u.scrollParents={reference:bt(a)?tn(a):a.contextElement?tn(a.contextElement):[],popper:tn(l)};var g=Ya(Xa([].concat(n,u.options.modifiers)));return u.orderedModifiers=g.filter(function(T){return T.enabled}),y(),m.update()},forceUpdate:function(){if(!f){var _=u.elements,w=_.reference,g=_.popper;if(_i(w,g)){u.rects={reference:Wa(w,un(g),u.options.strategy==="fixed"),popper:Or(g)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(U){return u.modifiersData[U.name]=Object.assign({},U.data)});for(var T=0;T<u.orderedModifiers.length;T++){if(u.reset===!0){u.reset=!1,T=-1;continue}var A=u.orderedModifiers[T],N=A.fn,q=A.options,W=q===void 0?{}:q,Y=A.name;typeof N=="function"&&(u=N({state:u,options:W,name:Y,instance:m})||u)}}}},update:Ga(function(){return new Promise(function(d){m.forceUpdate(),d(u)})}),destroy:function(){v(),f=!0}};if(!_i(a,l))return m;m.setOptions(c).then(function(d){!f&&c.onFirstUpdate&&c.onFirstUpdate(d)});function y(){u.orderedModifiers.forEach(function(d){var _=d.name,w=d.options,g=w===void 0?{}:w,T=d.effect;if(typeof T=="function"){var A=T({state:u,name:_,instance:m,options:g}),N=function(){};h.push(A||N)}})}function v(){h.forEach(function(d){return d()}),h=[]}return m}}var Ka=[_a,Ba,wa,aa,Ia,Ca,Fa,da,Na],Qa=Za({defaultModifiers:Ka});function Ja(r){let e=null,t,n,i=r;const s=()=>{t!==void 0&&n!==void 0&&(e=Qa(t,n,i))},o=()=>{e!==null&&(e.destroy(),e=null)},a=u=>"subscribe"in u?(l(u),{}):(t=u,s(),{destroy(){o()}}),l=u=>{const h=u.subscribe(f=>{t===void 0?(t=f,s()):(Object.assign(t,f),e==null||e.update())});fs(h)};return[a,(u,h)=>(n=u,i={...r,...h},s(),{update(f){i={...r,...f},e==null||e.setOptions(i)},destroy(){o()}}),()=>e]}function el(r){Ro(r,"svelte-q1pe4",'#tooltip[data-popper-placement^="top"].svelte-q1pe4>.arrow.svelte-q1pe4{border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--surface-900);bottom:-5px;left:calc(50% - 5px)}#tooltip[data-popper-placement^="bottom"].svelte-q1pe4>.arrow.svelte-q1pe4{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid var(--surface-900);top:-5px;left:calc(50% - 5px)}#tooltip[data-popper-placement^="left"].svelte-q1pe4>.arrow.svelte-q1pe4{border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid var(--surface-900);right:-5px;top:calc(50% - 5px)}#tooltip[data-popper-placement^="right"].svelte-q1pe4>.arrow.svelte-q1pe4{border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid var(--surface-900);left:-5px;top:calc(50% - 5px)}')}const tl=r=>({}),vi=r=>({}),nl=r=>({}),xi=r=>({});function ki(r){let e,t,n,i,s,o,a;const l=r[6].tooltip,c=vr(l,r,r[5],vi);return{c(){e=E("div"),t=E("span"),c&&c.c(),n=B(),i=E("div"),b(t,"class","text-label"),b(i,"id","arrow"),b(i,"class","arrow absolute w-0 h-0 svelte-q1pe4"),b(e,"id","tooltip"),b(e,"class","z-10 bg-surface-900 rounded text-white p-1 px-3 drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] svelte-q1pe4"),b(e,"data-popper-placement",r[0])},m(u,h){L(u,e,h),x(e,t),c&&c.m(t,null),x(e,n),x(e,i),s=!0,o||(a=Er(r[2].call(null,e,r[4])),o=!0)},p(u,h){c&&c.p&&(!s||h&32)&&kr(c,l,u,u[5],s?xr(l,u[5],h,tl):Tr(u[5]),vi),(!s||h&1)&&b(e,"data-popper-placement",u[0])},i(u){s||(C(c,u),s=!0)},o(u){I(c,u),s=!1},d(u){u&&S(e),c&&c.d(u),o=!1,a()}}}function rl(r){let e,t,n,i,s,o;const a=r[6].subject,l=vr(a,r,r[5],xi);let c=r[3]&&ki(r);return{c(){e=E("div"),l&&l.c(),t=B(),c&&c.c(),n=Un()},m(u,h){L(u,e,h),l&&l.m(e,null),L(u,t,h),c&&c.m(u,h),L(u,n,h),i=!0,s||(o=[Er(r[1].call(null,e)),se(e,"mouseenter",r[7]),se(e,"mouseleave",r[8]),se(e,"click",r[9])],s=!0)},p(u,[h]){l&&l.p&&(!i||h&32)&&kr(l,a,u,u[5],i?xr(a,u[5],h,nl):Tr(u[5]),xi),u[3]?c?(c.p(u,h),h&8&&C(c,1)):(c=ki(u),c.c(),C(c,1),c.m(n.parentNode,n)):c&&(We(),I(c,1,1,()=>{c=null}),Ve())},i(u){i||(C(l,u),C(c),i=!0)},o(u){I(l,u),I(c),i=!1},d(u){u&&(S(e),S(t),S(n)),l&&l.d(u),c&&c.d(u),s=!1,Xe(o)}}}function il(r,e,t){let{$$slots:n={},$$scope:i}=e,{placement:s="top"}=e,o,a;const l={modifiers:[{name:"offset",options:{offset:[0,8]}}]};let c=!1;const u=()=>t(3,c=!0),h=()=>t(3,c=!1),f=()=>{t(3,c=!1),setTimeout(()=>{t(3,c=!0)},0)};return r.$$set=m=>{"placement"in m&&t(0,s=m.placement),"$$scope"in m&&t(5,i=m.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&t(1,[o,a]=Ja({placement:s}),o,(t(2,a),t(0,s)))},[s,o,a,c,l,i,n,u,h,f]}class As extends be{constructor(e){super(),me(this,e,il,rl,de,{placement:0},el)}get placement(){return this.$$.ctx[0]}set placement(e){this.$$set({placement:e}),K()}}ge(As,{placement:{}},["subject","tooltip"],[],!0);function Ti(r){let e,t,n,i,s,o,a=r[7]&&Ei(r);return{c(){e=E("div"),t=E("label"),n=je(r[1]),s=B(),a&&a.c(),b(t,"for",i="input_$"+r[3]),b(t,"class","block text-label"),b(e,"class","flex items-center space-x-2")},m(l,c){L(l,e,c),x(e,t),x(t,n),x(e,s),a&&a.m(e,null),o=!0},p(l,c){(!o||c&2)&&ct(n,l[1]),(!o||c&8&&i!==(i="input_$"+l[3]))&&b(t,"for",i),l[7]?a?(a.p(l,c),c&128&&C(a,1)):(a=Ei(l),a.c(),C(a,1),a.m(e,null)):a&&(We(),I(a,1,1,()=>{a=null}),Ve())},i(l){o||(C(a),o=!0)},o(l){I(a),o=!1},d(l){l&&S(e),a&&a.d()}}}function Ei(r){let e,t;return e=new As({props:{$$slots:{tooltip:[ol],subject:[sl]},$$scope:{ctx:r}}}),{c(){ie(e.$$.fragment)},m(n,i){te(e,n,i),t=!0},p(n,i){const s={};i&8320&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function sl(r){let e;return{c(){e=E("span"),e.innerHTML='<i class="fa fa-circle-question text-surface-500"></i>',b(e,"slot","subject")},m(t,n){L(t,e,n)},p:D,d(t){t&&S(e)}}}function ol(r){let e,t;return{c(){e=E("span"),t=je(r[7]),b(e,"slot","tooltip")},m(n,i){L(n,e,i),x(e,t)},p(n,i){i&128&&ct(t,n[7])},d(n){n&&S(e)}}}function Ai(r){return{c:D,m:D,d:D}}function al(r){let e,t,n,i,s,o,a,l,c,u,h,f=r[1]&&Ti(r),m=r[8]&&r[4]&&Ai();return{c(){e=E("div"),f&&f.c(),t=B(),n=E("div"),i=E("input"),l=B(),m&&m.c(),i.disabled=r[6],i.readOnly=r[5],b(i,"type","text"),b(i,"id",s="input_$"+r[3]),b(i,"placeholder",o=r[2]||r[1]),b(i,"class",a="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(r[8]?"ring-red-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"),b(i,"name",r[3]),b(n,"class","relative rounded-md"),b(e,"class","flex flex-col w-full space-y-2 text-surface-900")},m(y,v){L(y,e,v),f&&f.m(e,null),x(e,t),x(e,n),x(n,i),lt(i,r[0]),x(e,l),m&&m.m(e,null),c=!0,u||(h=se(i,"input",r[11]),u=!0)},p(y,[v]){y[1]?f?(f.p(y,v),v&2&&C(f,1)):(f=Ti(y),f.c(),C(f,1),f.m(e,t)):f&&(We(),I(f,1,1,()=>{f=null}),Ve()),(!c||v&64)&&(i.disabled=y[6]),(!c||v&32)&&(i.readOnly=y[5]),(!c||v&8&&s!==(s="input_$"+y[3]))&&b(i,"id",s),(!c||v&6&&o!==(o=y[2]||y[1]))&&b(i,"placeholder",o),(!c||v&256&&a!==(a="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(y[8]?"ring-red-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"))&&b(i,"class",a),(!c||v&8)&&b(i,"name",y[3]),v&1&&i.value!==y[0]&&lt(i,y[0]),y[8]&&y[4]?m||(m=Ai(),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i(y){c||(C(f),c=!0)},o(y){I(f),c=!1},d(y){y&&S(e),f&&f.d(),m&&m.d(),u=!1,h()}}}function ll(r,e,t){let n,i,{label:s}=e,{placeholder:o=""}=e,{name:a}=e,{value:l}=e,{regex:c=""}=e,{validationMessage:u=""}=e,{readonly:h=!1}=e,{disabled:f=!1}=e,{tooltipText:m=""}=e;const y=(d,_)=>_?!d.test(_):!1;function v(){l=this.value,t(0,l)}return r.$$set=d=>{"label"in d&&t(1,s=d.label),"placeholder"in d&&t(2,o=d.placeholder),"name"in d&&t(3,a=d.name),"value"in d&&t(0,l=d.value),"regex"in d&&t(9,c=d.regex),"validationMessage"in d&&t(4,u=d.validationMessage),"readonly"in d&&t(5,h=d.readonly),"disabled"in d&&t(6,f=d.disabled),"tooltipText"in d&&t(7,m=d.tooltipText)},r.$$.update=()=>{r.$$.dirty&512&&t(10,n=new RegExp(c)),r.$$.dirty&1025&&t(8,i=y(n,l))},[l,s,o,a,u,h,f,m,i,c,n,v]}class tt extends be{constructor(e){super(),me(this,e,ll,al,de,{label:1,placeholder:2,name:3,value:0,regex:9,validationMessage:4,readonly:5,disabled:6,tooltipText:7})}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),K()}get placeholder(){return this.$$.ctx[2]}set placeholder(e){this.$$set({placeholder:e}),K()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),K()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),K()}get regex(){return this.$$.ctx[9]}set regex(e){this.$$set({regex:e}),K()}get validationMessage(){return this.$$.ctx[4]}set validationMessage(e){this.$$set({validationMessage:e}),K()}get readonly(){return this.$$.ctx[5]}set readonly(e){this.$$set({readonly:e}),K()}get disabled(){return this.$$.ctx[6]}set disabled(e){this.$$set({disabled:e}),K()}get tooltipText(){return this.$$.ctx[7]}set tooltipText(e){this.$$set({tooltipText:e}),K()}}ge(tt,{label:{},placeholder:{},name:{},value:{},regex:{},validationMessage:{},readonly:{type:"Boolean"},disabled:{type:"Boolean"},tooltipText:{}},[],[],!0);function cl(r){let e,t,n,i,s,o;function a(c){r[14](c)}let l={label:"Channel ID",regex:_l};return r[6]!==void 0&&(l.value=r[6]),e=new tt({props:l}),et.push(()=>Nt(e,"value",a)),{c(){ie(e.$$.fragment),n=B(),i=E("input"),b(i,"type","hidden"),b(i,"name","contact"),i.value=s=`${r[6]}`},m(c,u){te(e,c,u),L(c,n,u),L(c,i,u),o=!0},p(c,u){const h={};!t&&u&64&&(t=!0,h.value=c[6],Lt(()=>t=!1)),e.$set(h),(!o||u&64&&s!==(s=`${c[6]}`))&&(i.value=s)},i(c){o||(C(e.$$.fragment,c),o=!0)},o(c){I(e.$$.fragment,c),o=!1},d(c){c&&(S(n),S(i)),ne(e,c)}}}function ul(r){let e,t,n,i,s,o,a,l,c;function u(y){r[12](y)}let h={label:"Slack workspace name",tooltipText:"Your workspace name is displayed in menus and headings throughout Slack"};r[4]!==void 0&&(h.value=r[4]),e=new tt({props:h}),et.push(()=>Nt(e,"value",u));function f(y){r[13](y)}let m={label:"Channel ID or User ID",regex:yl,validationMessage:"Invalid Id"};return r[5]!==void 0&&(m.value=r[5]),i=new tt({props:m}),et.push(()=>Nt(i,"value",f)),{c(){ie(e.$$.fragment),n=B(),ie(i.$$.fragment),o=B(),a=E("input"),b(a,"type","hidden"),b(a,"name","contact"),a.value=l=`${r[4]}:${r[5]}`},m(y,v){te(e,y,v),L(y,n,v),te(i,y,v),L(y,o,v),L(y,a,v),c=!0},p(y,v){const d={};!t&&v&16&&(t=!0,d.value=y[4],Lt(()=>t=!1)),e.$set(d);const _={};!s&&v&32&&(s=!0,_.value=y[5],Lt(()=>s=!1)),i.$set(_),(!c||v&48&&l!==(l=`${y[4]}:${y[5]}`))&&(a.value=l)},i(y){c||(C(e.$$.fragment,y),C(i.$$.fragment,y),c=!0)},o(y){I(e.$$.fragment,y),I(i.$$.fragment,y),c=!1},d(y){y&&(S(n),S(o),S(a)),ne(e,y),ne(i,y)}}}function fl(r){let e,t;return e=new tt({props:{name:"contact",label:"PBX Extension"}}),{c(){ie(e.$$.fragment)},m(n,i){te(e,n,i),t=!0},p:D,i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function hl(r){let e,t,n,i,s,o,a,l,c,u,h,f;function m(g){r[9](g)}let y={label:"PBX Extension"};r[1]!==void 0&&(y.value=r[1]),e=new tt({props:y}),et.push(()=>Nt(e,"value",m));function v(g){r[10](g)}let d={label:"PBX Name"};r[2]!==void 0&&(d.value=r[2]),i=new tt({props:d}),et.push(()=>Nt(i,"value",v));function _(g){r[11](g)}let w={label:"PBX UUID"};return r[3]!==void 0&&(w.value=r[3]),a=new tt({props:w}),et.push(()=>Nt(a,"value",_)),{c(){ie(e.$$.fragment),n=B(),ie(i.$$.fragment),o=B(),ie(a.$$.fragment),c=B(),u=E("input"),b(u,"type","hidden"),b(u,"name","contact"),u.value=h=`${r[1]}:${r[2]}|${r[3]}`},m(g,T){te(e,g,T),L(g,n,T),te(i,g,T),L(g,o,T),te(a,g,T),L(g,c,T),L(g,u,T),f=!0},p(g,T){const A={};!t&&T&2&&(t=!0,A.value=g[1],Lt(()=>t=!1)),e.$set(A);const N={};!s&&T&4&&(s=!0,N.value=g[2],Lt(()=>s=!1)),i.$set(N);const q={};!l&&T&8&&(l=!0,q.value=g[3],Lt(()=>l=!1)),a.$set(q),(!f||T&14&&h!==(h=`${g[1]}:${g[2]}|${g[3]}`))&&(u.value=h)},i(g){f||(C(e.$$.fragment,g),C(i.$$.fragment,g),C(a.$$.fragment,g),f=!0)},o(g){I(e.$$.fragment,g),I(i.$$.fragment,g),I(a.$$.fragment,g),f=!1},d(g){g&&(S(n),S(o),S(c),S(u)),ne(e,g),ne(i,g),ne(a,g)}}}function pl(r){let e,t;return e=new Ar({props:{name:"contact",label:"Office Telephone Number"}}),{c(){ie(e.$$.fragment)},m(n,i){te(e,n,i),t=!0},p:D,i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function dl(r){let e,t;return e=new Ar({props:{name:"contact",label:"Cellphone Number"}}),{c(){ie(e.$$.fragment)},m(n,i){te(e,n,i),t=!0},p:D,i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function ml(r){let e,t;return e=new tt({props:{name:"contact",label:"Email Address",regex:wl,validationMessage:"Invalid Email"}}),{c(){ie(e.$$.fragment)},m(n,i){te(e,n,i),t=!0},p:D,i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function $i(r){let e;return{c(){e=E("div"),e.innerHTML='<button type="submit" class="w-32 h-10 transition duration-300 my-2 mx-auto bg-gray-300 rounded-xl stubber_webchat_chat_button">Submit</button>',b(e,"class","flex flex-row space-x-2 items-center")},m(t,n){L(t,e,n)},d(t){t&&S(e)}}}function gl(r){let e,t,n,i,s;const o=[ml,dl,pl,hl,fl,ul,cl],a=[];function l(u,h){return u[0]=="email"?0:u[0]=="mobile"?1:u[0]=="office"?2:u[0]=="stubber_pbx_ext"?3:u[0]=="pbx_ext"?4:u[0]=="slack"?5:u[0]=="microsoft_teams"?6:-1}~(t=l(r))&&(n=a[t]=o[t](r));let c=r[0]&&$i();return{c(){e=E("div"),n&&n.c(),i=B(),c&&c.c(),b(e,"class","w-full md:w-110 space-y-5")},m(u,h){L(u,e,h),~t&&a[t].m(e,null),x(e,i),c&&c.m(e,null),s=!0},p(u,h){let f=t;t=l(u),t===f?~t&&a[t].p(u,h):(n&&(We(),I(a[f],1,1,()=>{a[f]=null}),Ve()),~t?(n=a[t],n?n.p(u,h):(n=a[t]=o[t](u),n.c()),C(n,1),n.m(e,i)):n=null),u[0]?c||(c=$i(),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i(u){s||(C(n),s=!0)},o(u){I(n),s=!1},d(u){u&&S(e),~t&&a[t].d(),c&&c.d()}}}function bl(r){let e,t;return e=new ms({props:{$$slots:{default:[gl]},$$scope:{ctx:r}}}),e.$on("submit",r[7]),{c(){ie(e.$$.fragment)},m(n,i){te(e,n,i),t=!0},p(n,[i]){const s={};i&131199&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){I(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}let wl=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,250})+$/,yl=/^[A-Z0-9]{11,11}$/,_l=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function vl(r,e,t){let{submit:n}=e,{contactPointType:i}=e,s,o,a,l,c,u;async function h(){let g={contact:new FormData(this).get("contact").trim(),type:i};await n(g)}function f(w){s=w,t(1,s)}function m(w){o=w,t(2,o)}function y(w){a=w,t(3,a)}function v(w){l=w,t(4,l)}function d(w){c=w,t(5,c)}function _(w){u=w,t(6,u)}return r.$$set=w=>{"submit"in w&&t(8,n=w.submit),"contactPointType"in w&&t(0,i=w.contactPointType)},[i,s,o,a,l,c,u,h,n,f,m,y,v,d,_]}class $s extends be{constructor(e){super(),me(this,e,vl,bl,de,{submit:8,contactPointType:0})}get submit(){return this.$$.ctx[8]}set submit(e){this.$$set({submit:e}),K()}get contactPointType(){return this.$$.ctx[0]}set contactPointType(e){this.$$set({contactPointType:e}),K()}}ge($s,{submit:{},contactPointType:{}},[],[],!0);/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */const{entries:Rs,setPrototypeOf:Ri,isFrozen:xl,getPrototypeOf:kl,getOwnPropertyDescriptor:Tl}=Object;let{freeze:pe,seal:Me,create:Os}=Object,{apply:cr,construct:ur}=typeof Reflect<"u"&&Reflect;pe||(pe=function(e){return e});Me||(Me=function(e){return e});cr||(cr=function(e,t,n){return e.apply(t,n)});ur||(ur=function(e,t){return new e(...t)});const yn=Ee(Array.prototype.forEach),Oi=Ee(Array.prototype.pop),Yt=Ee(Array.prototype.push),Cn=Ee(String.prototype.toLowerCase),Kn=Ee(String.prototype.toString),El=Ee(String.prototype.match),Gt=Ee(String.prototype.replace),Al=Ee(String.prototype.indexOf),$l=Ee(String.prototype.trim),De=Ee(Object.prototype.hasOwnProperty),xe=Ee(RegExp.prototype.test),Xt=Rl(TypeError);function Ee(r){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return cr(r,e,n)}}function Rl(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return ur(r,t)}}function F(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Cn;Ri&&Ri(r,null);let n=e.length;for(;n--;){let i=e[n];if(typeof i=="string"){const s=t(i);s!==i&&(xl(e)||(e[n]=s),i=s)}r[i]=!0}return r}function Ol(r){for(let e=0;e<r.length;e++)De(r,e)||(r[e]=null);return r}function dt(r){const e=Os(null);for(const[t,n]of Rs(r))De(r,t)&&(Array.isArray(n)?e[t]=Ol(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=dt(n):e[t]=n);return e}function _n(r,e){for(;r!==null;){const n=Tl(r,e);if(n){if(n.get)return Ee(n.get);if(typeof n.value=="function")return Ee(n.value)}r=kl(r)}function t(){return null}return t}const Si=pe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Qn=pe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Jn=pe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Sl=pe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),er=pe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Cl=pe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ci=pe(["#text"]),Li=pe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),tr=pe(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ni=pe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),vn=pe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ll=Me(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Nl=Me(/<%[\w\W]*|[\w\W]*%>/gm),Pl=Me(/\${[\w\W]*}/gm),Dl=Me(/^data-[\-\w.\u00B7-\uFFFF]/),Il=Me(/^aria-[\-\w]+$/),Ss=Me(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ml=Me(/^(?:\w+script|data):/i),Bl=Me(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Cs=Me(/^html$/i);var Pi=Object.freeze({__proto__:null,MUSTACHE_EXPR:Ll,ERB_EXPR:Nl,TMPLIT_EXPR:Pl,DATA_ATTR:Dl,ARIA_ATTR:Il,IS_ALLOWED_URI:Ss,IS_SCRIPT_OR_DATA:Ml,ATTR_WHITESPACE:Bl,DOCTYPE_NAME:Cs});const zl=function(){return typeof window>"u"?null:window},Ul=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(n=t.getAttribute(i));const s="dompurify"+(n?"#"+n:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function Ls(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zl();const e=O=>Ls(O);if(e.version="3.0.9",e.removed=[],!r||!r.document||r.document.nodeType!==9)return e.isSupported=!1,e;let{document:t}=r;const n=t,i=n.currentScript,{DocumentFragment:s,HTMLTemplateElement:o,Node:a,Element:l,NodeFilter:c,NamedNodeMap:u=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:h,DOMParser:f,trustedTypes:m}=r,y=l.prototype,v=_n(y,"cloneNode"),d=_n(y,"nextSibling"),_=_n(y,"childNodes"),w=_n(y,"parentNode");if(typeof o=="function"){const O=t.createElement("template");O.content&&O.content.ownerDocument&&(t=O.content.ownerDocument)}let g,T="";const{implementation:A,createNodeIterator:N,createDocumentFragment:q,getElementsByTagName:W}=t,{importNode:Y}=n;let U={};e.isSupported=typeof Rs=="function"&&typeof w=="function"&&A&&A.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Q,ERB_EXPR:J,TMPLIT_EXPR:G,DATA_ATTR:ae,ARIA_ATTR:le,IS_SCRIPT_OR_DATA:re,ATTR_WHITESPACE:$}=Pi;let{IS_ALLOWED_URI:P}=Pi,z=null;const Ae=F({},[...Si,...Qn,...Jn,...er,...Ci]);let ee=null;const rt=F({},[...Li,...tr,...Ni,...vn]);let X=Object.seal(Os(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$e=null,Re=null,it=!0,st=!0,Be=!1,_t=!0,ot=!1,Ne=!1,zt=!1,vt=!1,at=!1,xt=!1,ft=!1,Ut=!0,pn=!1;const jn="user-content-";let Pe=!0,ze=!1,Ze={},Ke=null;const kt=F({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Ft=null;const Ht=F({},["audio","video","img","source","image","track"]);let Tt=null;const qt=F({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),dn="http://www.w3.org/1998/Math/MathML",mn="http://www.w3.org/2000/svg",Qe="http://www.w3.org/1999/xhtml";let Et=Qe,Wn=!1,Vn=null;const ho=F({},[dn,mn,Qe],Kn);let jt=null;const po=["application/xhtml+xml","text/html"],mo="text/html";let ue=null,At=null;const go=t.createElement("form"),Yr=function(p){return p instanceof RegExp||p instanceof Function},Yn=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(At&&At===p)){if((!p||typeof p!="object")&&(p={}),p=dt(p),jt=po.indexOf(p.PARSER_MEDIA_TYPE)===-1?mo:p.PARSER_MEDIA_TYPE,ue=jt==="application/xhtml+xml"?Kn:Cn,z=De(p,"ALLOWED_TAGS")?F({},p.ALLOWED_TAGS,ue):Ae,ee=De(p,"ALLOWED_ATTR")?F({},p.ALLOWED_ATTR,ue):rt,Vn=De(p,"ALLOWED_NAMESPACES")?F({},p.ALLOWED_NAMESPACES,Kn):ho,Tt=De(p,"ADD_URI_SAFE_ATTR")?F(dt(qt),p.ADD_URI_SAFE_ATTR,ue):qt,Ft=De(p,"ADD_DATA_URI_TAGS")?F(dt(Ht),p.ADD_DATA_URI_TAGS,ue):Ht,Ke=De(p,"FORBID_CONTENTS")?F({},p.FORBID_CONTENTS,ue):kt,$e=De(p,"FORBID_TAGS")?F({},p.FORBID_TAGS,ue):{},Re=De(p,"FORBID_ATTR")?F({},p.FORBID_ATTR,ue):{},Ze=De(p,"USE_PROFILES")?p.USE_PROFILES:!1,it=p.ALLOW_ARIA_ATTR!==!1,st=p.ALLOW_DATA_ATTR!==!1,Be=p.ALLOW_UNKNOWN_PROTOCOLS||!1,_t=p.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ot=p.SAFE_FOR_TEMPLATES||!1,Ne=p.WHOLE_DOCUMENT||!1,at=p.RETURN_DOM||!1,xt=p.RETURN_DOM_FRAGMENT||!1,ft=p.RETURN_TRUSTED_TYPE||!1,vt=p.FORCE_BODY||!1,Ut=p.SANITIZE_DOM!==!1,pn=p.SANITIZE_NAMED_PROPS||!1,Pe=p.KEEP_CONTENT!==!1,ze=p.IN_PLACE||!1,P=p.ALLOWED_URI_REGEXP||Ss,Et=p.NAMESPACE||Qe,X=p.CUSTOM_ELEMENT_HANDLING||{},p.CUSTOM_ELEMENT_HANDLING&&Yr(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(X.tagNameCheck=p.CUSTOM_ELEMENT_HANDLING.tagNameCheck),p.CUSTOM_ELEMENT_HANDLING&&Yr(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(X.attributeNameCheck=p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),p.CUSTOM_ELEMENT_HANDLING&&typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(X.allowCustomizedBuiltInElements=p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ot&&(st=!1),xt&&(at=!0),Ze&&(z=F({},Ci),ee=[],Ze.html===!0&&(F(z,Si),F(ee,Li)),Ze.svg===!0&&(F(z,Qn),F(ee,tr),F(ee,vn)),Ze.svgFilters===!0&&(F(z,Jn),F(ee,tr),F(ee,vn)),Ze.mathMl===!0&&(F(z,er),F(ee,Ni),F(ee,vn))),p.ADD_TAGS&&(z===Ae&&(z=dt(z)),F(z,p.ADD_TAGS,ue)),p.ADD_ATTR&&(ee===rt&&(ee=dt(ee)),F(ee,p.ADD_ATTR,ue)),p.ADD_URI_SAFE_ATTR&&F(Tt,p.ADD_URI_SAFE_ATTR,ue),p.FORBID_CONTENTS&&(Ke===kt&&(Ke=dt(Ke)),F(Ke,p.FORBID_CONTENTS,ue)),Pe&&(z["#text"]=!0),Ne&&F(z,["html","head","body"]),z.table&&(F(z,["tbody"]),delete $e.tbody),p.TRUSTED_TYPES_POLICY){if(typeof p.TRUSTED_TYPES_POLICY.createHTML!="function")throw Xt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof p.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Xt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');g=p.TRUSTED_TYPES_POLICY,T=g.createHTML("")}else g===void 0&&(g=Ul(m,i)),g!==null&&typeof T=="string"&&(T=g.createHTML(""));pe&&pe(p),At=p}},Gr=F({},["mi","mo","mn","ms","mtext"]),Xr=F({},["foreignobject","desc","title","annotation-xml"]),bo=F({},["title","style","font","a","script"]),Zr=F({},[...Qn,...Jn,...Sl]),Kr=F({},[...er,...Cl]),wo=function(p){let k=w(p);(!k||!k.tagName)&&(k={namespaceURI:Et,tagName:"template"});const R=Cn(p.tagName),Z=Cn(k.tagName);return Vn[p.namespaceURI]?p.namespaceURI===mn?k.namespaceURI===Qe?R==="svg":k.namespaceURI===dn?R==="svg"&&(Z==="annotation-xml"||Gr[Z]):!!Zr[R]:p.namespaceURI===dn?k.namespaceURI===Qe?R==="math":k.namespaceURI===mn?R==="math"&&Xr[Z]:!!Kr[R]:p.namespaceURI===Qe?k.namespaceURI===mn&&!Xr[Z]||k.namespaceURI===dn&&!Gr[Z]?!1:!Kr[R]&&(bo[R]||!Zr[R]):!!(jt==="application/xhtml+xml"&&Vn[p.namespaceURI]):!1},ht=function(p){Yt(e.removed,{element:p});try{p.parentNode.removeChild(p)}catch{p.remove()}},Gn=function(p,k){try{Yt(e.removed,{attribute:k.getAttributeNode(p),from:k})}catch{Yt(e.removed,{attribute:null,from:k})}if(k.removeAttribute(p),p==="is"&&!ee[p])if(at||xt)try{ht(k)}catch{}else try{k.setAttribute(p,"")}catch{}},Qr=function(p){let k=null,R=null;if(vt)p="<remove></remove>"+p;else{const he=El(p,/^[\r\n\t ]+/);R=he&&he[0]}jt==="application/xhtml+xml"&&Et===Qe&&(p='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+p+"</body></html>");const Z=g?g.createHTML(p):p;if(Et===Qe)try{k=new f().parseFromString(Z,jt)}catch{}if(!k||!k.documentElement){k=A.createDocument(Et,"template",null);try{k.documentElement.innerHTML=Wn?T:Z}catch{}}const fe=k.body||k.documentElement;return p&&R&&fe.insertBefore(t.createTextNode(R),fe.childNodes[0]||null),Et===Qe?W.call(k,Ne?"html":"body")[0]:Ne?k.documentElement:fe},Jr=function(p){return N.call(p.ownerDocument||p,p,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null)},yo=function(p){return p instanceof h&&(typeof p.nodeName!="string"||typeof p.textContent!="string"||typeof p.removeChild!="function"||!(p.attributes instanceof u)||typeof p.removeAttribute!="function"||typeof p.setAttribute!="function"||typeof p.namespaceURI!="string"||typeof p.insertBefore!="function"||typeof p.hasChildNodes!="function")},ei=function(p){return typeof a=="function"&&p instanceof a},Je=function(p,k,R){U[p]&&yn(U[p],Z=>{Z.call(e,k,R,At)})},ti=function(p){let k=null;if(Je("beforeSanitizeElements",p,null),yo(p))return ht(p),!0;const R=ue(p.nodeName);if(Je("uponSanitizeElement",p,{tagName:R,allowedTags:z}),p.hasChildNodes()&&!ei(p.firstElementChild)&&xe(/<[/\w]/g,p.innerHTML)&&xe(/<[/\w]/g,p.textContent))return ht(p),!0;if(!z[R]||$e[R]){if(!$e[R]&&ri(R)&&(X.tagNameCheck instanceof RegExp&&xe(X.tagNameCheck,R)||X.tagNameCheck instanceof Function&&X.tagNameCheck(R)))return!1;if(Pe&&!Ke[R]){const Z=w(p)||p.parentNode,fe=_(p)||p.childNodes;if(fe&&Z){const he=fe.length;for(let we=he-1;we>=0;--we)Z.insertBefore(v(fe[we],!0),d(p))}}return ht(p),!0}return p instanceof l&&!wo(p)||(R==="noscript"||R==="noembed"||R==="noframes")&&xe(/<\/no(script|embed|frames)/i,p.innerHTML)?(ht(p),!0):(ot&&p.nodeType===3&&(k=p.textContent,yn([Q,J,G],Z=>{k=Gt(k,Z," ")}),p.textContent!==k&&(Yt(e.removed,{element:p.cloneNode()}),p.textContent=k)),Je("afterSanitizeElements",p,null),!1)},ni=function(p,k,R){if(Ut&&(k==="id"||k==="name")&&(R in t||R in go))return!1;if(!(st&&!Re[k]&&xe(ae,k))){if(!(it&&xe(le,k))){if(!ee[k]||Re[k]){if(!(ri(p)&&(X.tagNameCheck instanceof RegExp&&xe(X.tagNameCheck,p)||X.tagNameCheck instanceof Function&&X.tagNameCheck(p))&&(X.attributeNameCheck instanceof RegExp&&xe(X.attributeNameCheck,k)||X.attributeNameCheck instanceof Function&&X.attributeNameCheck(k))||k==="is"&&X.allowCustomizedBuiltInElements&&(X.tagNameCheck instanceof RegExp&&xe(X.tagNameCheck,R)||X.tagNameCheck instanceof Function&&X.tagNameCheck(R))))return!1}else if(!Tt[k]){if(!xe(P,Gt(R,$,""))){if(!((k==="src"||k==="xlink:href"||k==="href")&&p!=="script"&&Al(R,"data:")===0&&Ft[p])){if(!(Be&&!xe(re,Gt(R,$,"")))){if(R)return!1}}}}}}return!0},ri=function(p){return p!=="annotation-xml"&&p.indexOf("-")>0},ii=function(p){Je("beforeSanitizeAttributes",p,null);const{attributes:k}=p;if(!k)return;const R={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee};let Z=k.length;for(;Z--;){const fe=k[Z],{name:he,namespaceURI:we,value:pt}=fe,Wt=ue(he);let ye=he==="value"?pt:$l(pt);if(R.attrName=Wt,R.attrValue=ye,R.keepAttr=!0,R.forceKeepAttr=void 0,Je("uponSanitizeAttribute",p,R),ye=R.attrValue,R.forceKeepAttr||(Gn(he,p),!R.keepAttr))continue;if(!_t&&xe(/\/>/i,ye)){Gn(he,p);continue}ot&&yn([Q,J,G],oi=>{ye=Gt(ye,oi," ")});const si=ue(p.nodeName);if(ni(si,Wt,ye)){if(pn&&(Wt==="id"||Wt==="name")&&(Gn(he,p),ye=jn+ye),g&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!we)switch(m.getAttributeType(si,Wt)){case"TrustedHTML":{ye=g.createHTML(ye);break}case"TrustedScriptURL":{ye=g.createScriptURL(ye);break}}try{we?p.setAttributeNS(we,he,ye):p.setAttribute(he,ye),Oi(e.removed)}catch{}}}Je("afterSanitizeAttributes",p,null)},_o=function O(p){let k=null;const R=Jr(p);for(Je("beforeSanitizeShadowDOM",p,null);k=R.nextNode();)Je("uponSanitizeShadowNode",k,null),!ti(k)&&(k.content instanceof s&&O(k.content),ii(k));Je("afterSanitizeShadowDOM",p,null)};return e.sanitize=function(O){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=null,R=null,Z=null,fe=null;if(Wn=!O,Wn&&(O="<!-->"),typeof O!="string"&&!ei(O))if(typeof O.toString=="function"){if(O=O.toString(),typeof O!="string")throw Xt("dirty is not a string, aborting")}else throw Xt("toString is not a function");if(!e.isSupported)return O;if(zt||Yn(p),e.removed=[],typeof O=="string"&&(ze=!1),ze){if(O.nodeName){const pt=ue(O.nodeName);if(!z[pt]||$e[pt])throw Xt("root node is forbidden and cannot be sanitized in-place")}}else if(O instanceof a)k=Qr("<!---->"),R=k.ownerDocument.importNode(O,!0),R.nodeType===1&&R.nodeName==="BODY"||R.nodeName==="HTML"?k=R:k.appendChild(R);else{if(!at&&!ot&&!Ne&&O.indexOf("<")===-1)return g&&ft?g.createHTML(O):O;if(k=Qr(O),!k)return at?null:ft?T:""}k&&vt&&ht(k.firstChild);const he=Jr(ze?O:k);for(;Z=he.nextNode();)ti(Z)||(Z.content instanceof s&&_o(Z.content),ii(Z));if(ze)return O;if(at){if(xt)for(fe=q.call(k.ownerDocument);k.firstChild;)fe.appendChild(k.firstChild);else fe=k;return(ee.shadowroot||ee.shadowrootmode)&&(fe=Y.call(n,fe,!0)),fe}let we=Ne?k.outerHTML:k.innerHTML;return Ne&&z["!doctype"]&&k.ownerDocument&&k.ownerDocument.doctype&&k.ownerDocument.doctype.name&&xe(Cs,k.ownerDocument.doctype.name)&&(we="<!DOCTYPE "+k.ownerDocument.doctype.name+`>
`+we),ot&&yn([Q,J,G],pt=>{we=Gt(we,pt," ")}),g&&ft?g.createHTML(we):we},e.setConfig=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Yn(O),zt=!0},e.clearConfig=function(){At=null,zt=!1},e.isValidAttribute=function(O,p,k){At||Yn({});const R=ue(O),Z=ue(p);return ni(R,Z,k)},e.addHook=function(O,p){typeof p=="function"&&(U[O]=U[O]||[],Yt(U[O],p))},e.removeHook=function(O){if(U[O])return Oi(U[O])},e.removeHooks=function(O){U[O]&&(U[O]=[])},e.removeAllHooks=function(){U={}},e}var fr=Ls();function Pr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let yt=Pr();function Ns(r){yt=r}const Ps=/[&<>"']/,Fl=new RegExp(Ps.source,"g"),Ds=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Hl=new RegExp(Ds.source,"g"),ql={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Di=r=>ql[r];function ke(r,e){if(e){if(Ps.test(r))return r.replace(Fl,Di)}else if(Ds.test(r))return r.replace(Hl,Di);return r}const jl=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Wl(r){return r.replace(jl,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Vl=/(^|[^\[])\^/g;function V(r,e){let t=typeof r=="string"?r:r.source;e=e||"";const n={replace:(i,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(Vl,"$1"),t=t.replace(i,o),n},getRegex:()=>new RegExp(t,e)};return n}function Ii(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const nn={exec:()=>null};function Mi(r,e){const t=r.replace(/\|/g,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function xn(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return r.slice(0,n-i)}function Yl(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return-1}function Bi(r,e,t,n){const i=e.href,s=e.title?ke(e.title):null,o=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:t,href:i,title:s,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,a}return{type:"image",raw:t,href:i,title:s,text:ke(o)}}function Gl(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[o]=s;return o.length>=n.length?i.slice(n.length):i}).join(`
`)}class In{constructor(e){M(this,"options");M(this,"rules");M(this,"lexer");this.options=e||yt}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:xn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Gl(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=xn(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=xn(t[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const o=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",c=!1;for(;e;){let u=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let h=t[2].split(`
`,1)[0].replace(/^\t+/,_=>" ".repeat(3*_.length)),f=e.split(`
`,1)[0],m=0;this.options.pedantic?(m=2,l=h.trimStart()):(m=t[2].search(/[^ ]/),m=m>4?1:m,l=h.slice(m),m+=t[1].length);let y=!1;if(!h&&/^ *$/.test(f)&&(a+=f+`
`,e=e.substring(f.length+1),u=!0),!u){const _=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),w=new RegExp(`^ {0,${Math.min(3,m-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),g=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:\`\`\`|~~~)`),T=new RegExp(`^ {0,${Math.min(3,m-1)}}#`);for(;e;){const A=e.split(`
`,1)[0];if(f=A,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),g.test(f)||T.test(f)||_.test(f)||w.test(e))break;if(f.search(/[^ ]/)>=m||!f.trim())l+=`
`+f.slice(m);else{if(y||h.search(/[^ ]/)>=4||g.test(h)||T.test(h)||w.test(h))break;l+=`
`+f}!y&&!f.trim()&&(y=!0),a+=A+`
`,e=e.substring(A.length+1),h=f.slice(m)}}s.loose||(c?s.loose=!0:/\n *\n *$/.test(a)&&(c=!0));let v=null,d;this.options.gfm&&(v=/^\[[ xX]\] /.exec(l),v&&(d=v[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:a,task:!!v,checked:d,loose:!1,text:l,tokens:[]}),s.raw+=a}s.items[s.items.length-1].raw=a.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const h=s.items[u].tokens.filter(m=>m.type==="space"),f=h.length>0&&h.some(m=>/\n.*\n/.test(m.raw));s.loose=f}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=Mi(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const a of i)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of n)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of s)o.rows.push(Mi(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:ke(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=xn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Yl(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);o&&(i=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),Bi(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const i=(n[2]||n[1]).replace(/\s+/g," "),s=t[i.toLowerCase()];if(!s){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Bi(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...i[0]].length-1;let a,l,c=o,u=0;const h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+o);(i=h.exec(t))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(l=[...a].length,i[3]||i[4]){c+=l;continue}else if((i[5]||i[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const f=[...i[0]][0].length,m=e.slice(0,o+i.index+f+l);if(Math.min(o,l)%2){const v=m.slice(1,-1);return{type:"em",raw:m,text:v,tokens:this.lexer.inlineTokens(v)}}const y=m.slice(2,-2);return{type:"strong",raw:m,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=ke(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=ke(t[1]),i="mailto:"+n):(n=ke(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=ke(t[0]),s="mailto:"+i;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);i=ke(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=ke(t[0]),{type:"text",raw:t[0],text:n}}}}const Xl=/^(?: *(?:\n|$))+/,Zl=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Kl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,fn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ql=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Is=/(?:[*+-]|\d{1,9}[.)])/,Ms=V(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Is).getRegex(),Dr=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Jl=/^[^\n]+/,Ir=/(?!\s*\])(?:\\.|[^\[\]\\])+/,ec=V(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Ir).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),tc=V(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Is).getRegex(),Hn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Mr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,nc=V("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Mr).replace("tag",Hn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bs=V(Dr).replace("hr",fn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hn).getRegex(),rc=V(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Bs).getRegex(),Br={blockquote:rc,code:Zl,def:ec,fences:Kl,heading:Ql,hr:fn,html:nc,lheading:Ms,list:tc,newline:Xl,paragraph:Bs,table:nn,text:Jl},zi=V("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",fn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hn).getRegex(),ic={...Br,table:zi,paragraph:V(Dr).replace("hr",fn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",zi).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Hn).getRegex()},sc={...Br,html:V(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Mr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:nn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:V(Dr).replace("hr",fn).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ms).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},zs=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,oc=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Us=/^( {2,}|\\)\n(?!\s*$)/,ac=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,hn="\\p{P}\\p{S}",lc=V(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,hn).getRegex(),cc=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,uc=V(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,hn).getRegex(),fc=V("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,hn).getRegex(),hc=V("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,hn).getRegex(),pc=V(/\\([punct])/,"gu").replace(/punct/g,hn).getRegex(),dc=V(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),mc=V(Mr).replace("(?:-->|$)","-->").getRegex(),gc=V("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",mc).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Mn=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,bc=V(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Mn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Fs=V(/^!?\[(label)\]\[(ref)\]/).replace("label",Mn).replace("ref",Ir).getRegex(),Hs=V(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ir).getRegex(),wc=V("reflink|nolink(?!\\()","g").replace("reflink",Fs).replace("nolink",Hs).getRegex(),zr={_backpedal:nn,anyPunctuation:pc,autolink:dc,blockSkip:cc,br:Us,code:oc,del:nn,emStrongLDelim:uc,emStrongRDelimAst:fc,emStrongRDelimUnd:hc,escape:zs,link:bc,nolink:Hs,punctuation:lc,reflink:Fs,reflinkSearch:wc,tag:gc,text:ac,url:nn},yc={...zr,link:V(/^!?\[(label)\]\((.*?)\)/).replace("label",Mn).getRegex(),reflink:V(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Mn).getRegex()},hr={...zr,escape:V(zs).replace("])","~|])").getRegex(),url:V(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},_c={...hr,br:V(Us).replace("{2,}","*").getRegex(),text:V(hr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},kn={normal:Br,gfm:ic,pedantic:sc},Zt={normal:zr,gfm:hr,breaks:_c,pedantic:yc};class Ue{constructor(e){M(this,"tokens");M(this,"options");M(this,"state");M(this,"tokenizer");M(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||yt,this.options.tokenizer=this.options.tokenizer||new In,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:kn.normal,inline:Zt.normal};this.options.pedantic?(t.block=kn.pedantic,t.inline=Zt.pedantic):this.options.gfm&&(t.block=kn.gfm,this.options.breaks?t.inline=Zt.breaks:t.inline=Zt.gfm),this.tokenizer.rules=t}static get rules(){return{block:kn,inline:Zt}}static lex(e,t){return new Ue(t).lex(e)}static lexInline(e,t){return new Ue(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let n,i,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],o&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),o=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,o,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let f;this.options.extensions.startInline.forEach(m=>{f=m.call({lexer:this},h),typeof f=="number"&&f>=0&&(u=Math.min(u,f))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Bn{constructor(e){M(this,"options");this.options=e||yt}code(e,t,n){var s;const i=(s=(t||"").match(/^\S*/))==null?void 0:s[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+ke(i)+'">'+(n?e:ke(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:ke(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const i=Ii(e);if(i===null)return n;e=i;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){const i=Ii(e);if(i===null)return n;e=i;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class Ur{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class Fe{constructor(e){M(this,"options");M(this,"renderer");M(this,"textRenderer");this.options=e||yt,this.options.renderer=this.options.renderer||new Bn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ur}static parse(e,t){return new Fe(t).parse(e)}static parseInline(e,t){return new Fe(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=s,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){n+=a||"";continue}}switch(s.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const o=s;n+=this.renderer.heading(this.parseInline(o.tokens),o.depth,Wl(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=s;n+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=s;let a="",l="";for(let u=0;u<o.header.length;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});a+=this.renderer.tablerow(l);let c="";for(let u=0;u<o.rows.length;u++){const h=o.rows[u];l="";for(let f=0;f<h.length;f++)l+=this.renderer.tablecell(this.parseInline(h[f].tokens),{header:!1,align:o.align[f]});c+=this.renderer.tablerow(l)}n+=this.renderer.table(a,c);continue}case"blockquote":{const o=s,a=this.parse(o.tokens);n+=this.renderer.blockquote(a);continue}case"list":{const o=s,a=o.ordered,l=o.start,c=o.loose;let u="";for(let h=0;h<o.items.length;h++){const f=o.items[h],m=f.checked,y=f.task;let v="";if(f.task){const d=this.renderer.checkbox(!!m);c?f.tokens.length>0&&f.tokens[0].type==="paragraph"?(f.tokens[0].text=d+" "+f.tokens[0].text,f.tokens[0].tokens&&f.tokens[0].tokens.length>0&&f.tokens[0].tokens[0].type==="text"&&(f.tokens[0].tokens[0].text=d+" "+f.tokens[0].tokens[0].text)):f.tokens.unshift({type:"text",text:d+" "}):v+=d+" "}v+=this.parse(f.tokens,c),u+=this.renderer.listitem(v,y,!!m)}n+=this.renderer.list(u,a,l);continue}case"html":{const o=s;n+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=s;n+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=s,a=o.tokens?this.parseInline(o.tokens):o.text;for(;i+1<e.length&&e[i+1].type==="text";)o=e[++i],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);n+=t?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=o||"";continue}}switch(s.type){case"escape":{const o=s;n+=t.text(o.text);break}case"html":{const o=s;n+=t.html(o.text);break}case"link":{const o=s;n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=s;n+=t.image(o.href,o.title,o.text);break}case"strong":{const o=s;n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=s;n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=s;n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{const o=s;n+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=s;n+=t.text(o.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}}class rn{constructor(e){M(this,"options");this.options=e||yt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}M(rn,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var ln,pr,zn,qs;class vc{constructor(...e){Xn(this,ln);Xn(this,zn);M(this,"defaults",Pr());M(this,"options",this.setOptions);M(this,"parse",gn(this,ln,pr).call(this,Ue.lex,Fe.parse));M(this,"parseInline",gn(this,ln,pr).call(this,Ue.lexInline,Fe.parseInline));M(this,"Parser",Fe);M(this,"Renderer",Bn);M(this,"TextRenderer",Ur);M(this,"Lexer",Ue);M(this,"Tokenizer",In);M(this,"Hooks",rn);this.use(...e)}walkTokens(e,t){var i,s;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{const a=o;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=o;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=t.renderers[s.name];o?t.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),i.extensions=t),n.renderer){const s=this.defaults.renderer||new Bn(this.defaults);for(const o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.renderer[a],c=s[a];s[a]=(...u)=>{let h=l.apply(s,u);return h===!1&&(h=c.apply(s,u)),h||""}}i.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new In(this.defaults);for(const o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=n.tokenizer[a],c=s[a];s[a]=(...u)=>{let h=l.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}i.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new rn;for(const o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.hooks[a],c=s[a];rn.passThroughHooks.has(o)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(f=>c.call(s,f));const h=l.call(s,u);return c.call(s,h)}:s[a]=(...u)=>{let h=l.apply(s,u);return h===!1&&(h=c.apply(s,u)),h}}i.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,o=n.walkTokens;i.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ue.lex(e,t??this.defaults)}parser(e,t){return Fe.parse(e,t??this.defaults)}}ln=new WeakSet,pr=function(e,t){return(n,i)=>{const s={...i},o={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=gn(this,zn,qs).call(this,!!o.silent,!!o.async);if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>t(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(n=o.hooks.preprocess(n));let l=e(n,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let c=t(l,o);return o.hooks&&(c=o.hooks.postprocess(c)),c}catch(l){return a(l)}}},zn=new WeakSet,qs=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+ke(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const wt=new vc;function j(r,e){return wt.parse(r,e)}j.options=j.setOptions=function(r){return wt.setOptions(r),j.defaults=wt.defaults,Ns(j.defaults),j};j.getDefaults=Pr;j.defaults=yt;j.use=function(...r){return wt.use(...r),j.defaults=wt.defaults,Ns(j.defaults),j};j.walkTokens=function(r,e){return wt.walkTokens(r,e)};j.parseInline=wt.parseInline;j.Parser=Fe;j.parser=Fe.parse;j.Renderer=Bn;j.TextRenderer=Ur;j.Lexer=Ue;j.lexer=Ue.lex;j.Tokenizer=In;j.Hooks=rn;j.parse=j;j.options;j.setOptions;j.use;j.walkTokens;j.parseInline;Fe.parse;Ue.lex;const Ge=Object.create(null);Ge.open="0";Ge.close="1";Ge.ping="2";Ge.pong="3";Ge.message="4";Ge.upgrade="5";Ge.noop="6";const Ln=Object.create(null);Object.keys(Ge).forEach(r=>{Ln[Ge[r]]=r});const dr={type:"error",data:"parser error"},js=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Ws=typeof ArrayBuffer=="function",Vs=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,Fr=({type:r,data:e},t,n)=>js&&e instanceof Blob?t?n(e):Ui(e,n):Ws&&(e instanceof ArrayBuffer||Vs(e))?t?n(e):Ui(new Blob([e]),n):n(Ge[r]+(e||"")),Ui=(r,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(r)};function Fi(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let nr;function xc(r,e){if(js&&r.data instanceof Blob)return r.data.arrayBuffer().then(Fi).then(e);if(Ws&&(r.data instanceof ArrayBuffer||Vs(r.data)))return e(Fi(r.data));Fr(r,!1,t=>{nr||(nr=new TextEncoder),e(nr.encode(t))})}const Hi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Qt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<Hi.length;r++)Qt[Hi.charCodeAt(r)]=r;const kc=r=>{let e=r.length*.75,t=r.length,n,i=0,s,o,a,l;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);const c=new ArrayBuffer(e),u=new Uint8Array(c);for(n=0;n<t;n+=4)s=Qt[r.charCodeAt(n)],o=Qt[r.charCodeAt(n+1)],a=Qt[r.charCodeAt(n+2)],l=Qt[r.charCodeAt(n+3)],u[i++]=s<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|l&63;return c},Tc=typeof ArrayBuffer=="function",Hr=(r,e)=>{if(typeof r!="string")return{type:"message",data:Ys(r,e)};const t=r.charAt(0);return t==="b"?{type:"message",data:Ec(r.substring(1),e)}:Ln[t]?r.length>1?{type:Ln[t],data:r.substring(1)}:{type:Ln[t]}:dr},Ec=(r,e)=>{if(Tc){const t=kc(r);return Ys(t,e)}else return{base64:!0,data:r}},Ys=(r,e)=>{switch(e){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},Gs="",Ac=(r,e)=>{const t=r.length,n=new Array(t);let i=0;r.forEach((s,o)=>{Fr(s,!1,a=>{n[o]=a,++i===t&&e(n.join(Gs))})})},$c=(r,e)=>{const t=r.split(Gs),n=[];for(let i=0;i<t.length;i++){const s=Hr(t[i],e);if(n.push(s),s.type==="error")break}return n};function Rc(){return new TransformStream({transform(r,e){xc(r,t=>{const n=t.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}r.data&&typeof r.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let rr;function Tn(r){return r.reduce((e,t)=>e+t.length,0)}function En(r,e){if(r[0].length===e)return r.shift();const t=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)t[i]=r[0][n++],n===r[0].length&&(r.shift(),n=0);return r.length&&n<r[0].length&&(r[0]=r[0].slice(n)),t}function Oc(r,e){rr||(rr=new TextDecoder);const t=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(Tn(t)<1)break;const l=En(t,1);s=(l[0]&128)===128,i=l[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(Tn(t)<2)break;const l=En(t,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(Tn(t)<8)break;const l=En(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(dr);break}i=u*Math.pow(2,32)+c.getUint32(4),n=3}else{if(Tn(t)<i)break;const l=En(t,i);a.enqueue(Hr(s?l:rr.decode(l),e)),n=0}if(i===0||i>r){a.enqueue(dr);break}}}})}const Xs=4;function oe(r){if(r)return Sc(r)}function Sc(r){for(var e in oe.prototype)r[e]=oe.prototype[e];return r}oe.prototype.on=oe.prototype.addEventListener=function(r,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(e),this};oe.prototype.once=function(r,e){function t(){this.off(r,t),e.apply(this,arguments)}return t.fn=e,this.on(r,t),this};oe.prototype.off=oe.prototype.removeListener=oe.prototype.removeAllListeners=oe.prototype.removeEventListener=function(r,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+r];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+r],this};oe.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+r],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};oe.prototype.emitReserved=oe.prototype.emit;oe.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};oe.prototype.hasListeners=function(r){return!!this.listeners(r).length};const Oe=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function Zs(r,...e){return e.reduce((t,n)=>(r.hasOwnProperty(n)&&(t[n]=r[n]),t),{})}const Cc=Oe.setTimeout,Lc=Oe.clearTimeout;function qn(r,e){e.useNativeTimers?(r.setTimeoutFn=Cc.bind(Oe),r.clearTimeoutFn=Lc.bind(Oe)):(r.setTimeoutFn=Oe.setTimeout.bind(Oe),r.clearTimeoutFn=Oe.clearTimeout.bind(Oe))}const Nc=1.33;function Pc(r){return typeof r=="string"?Dc(r):Math.ceil((r.byteLength||r.size)*Nc)}function Dc(r){let e=0,t=0;for(let n=0,i=r.length;n<i;n++)e=r.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function Ic(r){let e="";for(let t in r)r.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(r[t]));return e}function Mc(r){let e={},t=r.split("&");for(let n=0,i=t.length;n<i;n++){let s=t[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class Bc extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class qr extends oe{constructor(e){super(),this.writable=!1,qn(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new Bc(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Hr(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Ic(e);return t.length?"?"+t:""}}const Ks="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),mr=64,zc={};let qi=0,An=0,ji;function Wi(r){let e="";do e=Ks[r%mr]+e,r=Math.floor(r/mr);while(r>0);return e}function Qs(){const r=Wi(+new Date);return r!==ji?(qi=0,ji=r):r+"."+Wi(qi++)}for(;An<mr;An++)zc[Ks[An]]=An;let Js=!1;try{Js=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Uc=Js;function eo(r){const e=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Uc))return new XMLHttpRequest}catch{}if(!e)try{return new Oe[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Fc(){}const Hc=function(){return new eo({xdomain:!1}).responseType!=null}();class qc extends qr{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let i=location.port;i||(i=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}const t=e&&e.forceBase64;this.supportsBinary=Hc&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};$c(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Ac(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Qs()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new qe(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class qe extends oe{constructor(e,t){super(),qn(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=Zs(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const n=this.xhr=new eo(t);try{n.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(n)),n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=qe.requestsCount++,qe.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Fc,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete qe.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}qe.requestsCount=0;qe.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Vi);else if(typeof addEventListener=="function"){const r="onpagehide"in Oe?"pagehide":"unload";addEventListener(r,Vi,!1)}}function Vi(){for(let r in qe.requests)qe.requests.hasOwnProperty(r)&&qe.requests[r].abort()}const jr=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),$n=Oe.WebSocket||Oe.MozWebSocket,Yi=!0,jc="arraybuffer",Gi=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Wc extends qr{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=Gi?{}:Zs(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=Yi&&!Gi?t?new $n(e,t):new $n(e):new $n(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;Fr(n,this.supportsBinary,s=>{const o={};try{Yi&&this.ws.send(s)}catch{}i&&jr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Qs()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!$n}}class Vc extends qr{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=Oc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),i=Rc();i.readable.pipeTo(e.writable),this.writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;this.writer.write(n).then(()=>{i&&jr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const Yc={websocket:Wc,webtransport:Vc,polling:qc},Gc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Xc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function gr(r){if(r.length>2e3)throw"URI too long";const e=r,t=r.indexOf("["),n=r.indexOf("]");t!=-1&&n!=-1&&(r=r.substring(0,t)+r.substring(t,n).replace(/:/g,";")+r.substring(n,r.length));let i=Gc.exec(r||""),s={},o=14;for(;o--;)s[Xc[o]]=i[o]||"";return t!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Zc(s,s.path),s.queryKey=Kc(s,s.query),s}function Zc(r,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Kc(r,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(t[i]=s)}),t}let to=class St extends oe{constructor(e,t={}){super(),this.binaryType=jc,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=gr(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=gr(t.host).host),qn(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Mc(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Xs,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new Yc[e](n)}open(){let e;if(this.opts.rememberUpgrade&&St.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;St.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",h=>{if(!n)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;St.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=t.name,this.emitReserved("upgradeError",f)}}))};function s(){n||(n=!0,u(),t.close(),t=null)}const o=h=>{const f=new Error("probe error: "+h);f.transport=t.name,s(),this.emitReserved("upgradeError",f)};function a(){o("transport closed")}function l(){o("socket closed")}function c(h){t&&h.name!==t.name&&s()}const u=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",St.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=Pc(i)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:t,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){St.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const i=e.length;for(;n<i;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};to.protocol=Xs;function Qc(r,e="",t){let n=r;t=t||typeof location<"u"&&location,r==null&&(r=t.protocol+"//"+t.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=t.protocol+r:r=t.host+r),/^(https?|wss?):\/\//.test(r)||(typeof t<"u"?r=t.protocol+"//"+r:r="https://"+r),n=gr(r)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(t&&t.port===n.port?"":":"+n.port),n}const Jc=typeof ArrayBuffer=="function",eu=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,no=Object.prototype.toString,tu=typeof Blob=="function"||typeof Blob<"u"&&no.call(Blob)==="[object BlobConstructor]",nu=typeof File=="function"||typeof File<"u"&&no.call(File)==="[object FileConstructor]";function Wr(r){return Jc&&(r instanceof ArrayBuffer||eu(r))||tu&&r instanceof Blob||nu&&r instanceof File}function Nn(r,e){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let t=0,n=r.length;t<n;t++)if(Nn(r[t]))return!0;return!1}if(Wr(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return Nn(r.toJSON(),!0);for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&Nn(r[t]))return!0;return!1}function ru(r){const e=[],t=r.data,n=r;return n.data=br(t,e),n.attachments=e.length,{packet:n,buffers:e}}function br(r,e){if(!r)return r;if(Wr(r)){const t={_placeholder:!0,num:e.length};return e.push(r),t}else if(Array.isArray(r)){const t=new Array(r.length);for(let n=0;n<r.length;n++)t[n]=br(r[n],e);return t}else if(typeof r=="object"&&!(r instanceof Date)){const t={};for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=br(r[n],e));return t}return r}function iu(r,e){return r.data=wr(r.data,e),delete r.attachments,r}function wr(r,e){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<e.length)return e[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let t=0;t<r.length;t++)r[t]=wr(r[t],e);else if(typeof r=="object")for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&(r[t]=wr(r[t],e));return r}const su=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ou=5;var H;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(H||(H={}));class au{constructor(e){this.replacer=e}encode(e){return(e.type===H.EVENT||e.type===H.ACK)&&Nn(e)?this.encodeAsBinary({type:e.type===H.EVENT?H.BINARY_EVENT:H.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===H.BINARY_EVENT||e.type===H.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=ru(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}function Xi(r){return Object.prototype.toString.call(r)==="[object Object]"}class Vr extends oe{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===H.BINARY_EVENT;n||t.type===H.BINARY_ACK?(t.type=n?H.EVENT:H.ACK,this.reconstructor=new lu(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Wr(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(H[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===H.BINARY_EVENT||n.type===H.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(s,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(s,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const s=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(Vr.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case H.CONNECT:return Xi(t);case H.DISCONNECT:return t===void 0;case H.CONNECT_ERROR:return typeof t=="string"||Xi(t);case H.EVENT:case H.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&su.indexOf(t[0])===-1);case H.ACK:case H.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class lu{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=iu(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const cu=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Vr,Encoder:au,get PacketType(){return H},protocol:ou},Symbol.toStringTag,{value:"Module"}));function Ie(r,e,t){return r.on(e,t),function(){r.off(e,t)}}const uu=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ro extends oe{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ie(e,"open",this.onopen.bind(this)),Ie(e,"packet",this.onpacket.bind(this)),Ie(e,"error",this.onerror.bind(this)),Ie(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(uu.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const n={type:H.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),n.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},i);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(s),t.apply(this,[null,...o])}}emitWithAck(e,...t){const n=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((i,s)=>{t.push((o,a)=>n?o?s(o):i(a):i(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>n!==this._queue[0]?void 0:(i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:H.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case H.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case H.EVENT:case H.BINARY_EVENT:this.onevent(e);break;case H.ACK:case H.BINARY_ACK:this.onack(e);break;case H.DISCONNECT:this.ondisconnect();break;case H.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:H.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:H.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Bt(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}Bt.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*r);r=Math.floor(e*10)&1?r+t:r-t}return Math.min(r,this.max)|0};Bt.prototype.reset=function(){this.attempts=0};Bt.prototype.setMin=function(r){this.ms=r};Bt.prototype.setMax=function(r){this.max=r};Bt.prototype.setJitter=function(r){this.jitter=r};class yr extends oe{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,qn(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Bt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||cu;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new to(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=Ie(t,"open",function(){n.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Ie(t,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ie(e,"ping",this.onping.bind(this)),Ie(e,"data",this.ondata.bind(this)),Ie(e,"error",this.onerror.bind(this)),Ie(e,"close",this.onclose.bind(this)),Ie(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){jr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new ro(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Kt={};function Pn(r,e){typeof r=="object"&&(e=r,r=void 0),e=e||{};const t=Qc(r,e.path||"/socket.io"),n=t.source,i=t.id,s=t.path,o=Kt[i]&&s in Kt[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new yr(n,e):(Kt[i]||(Kt[i]=new yr(n,e)),l=Kt[i]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(Pn,{Manager:yr,Socket:ro,io:Pn,connect:Pn});function fu(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),b(t,"d","M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v28c0 50.8-41.2 92-92 92c-31.1 0-58.7-15.5-75.3-39.2C322.7 360.9 291.1 376 256 376c-66.3 0-120-53.7-120-120s53.7-120 120-120c28.8 0 55.2 10.1 75.8 27c4.3-6.6 11.7-11 20.2-11c13.3 0 24 10.7 24 24v80 28c0 24.3 19.7 44 44 44s44-19.7 44-44V256c0-114.9-93.1-208-208-208zm72 208a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 512 512")},m(n,i){L(n,e,i),x(e,t)},p:D,i:D,o:D,d(n){n&&S(e)}}}class io extends be{constructor(e){super(),me(this,e,null,fu,de,{})}}ge(io,{},[],[],!0);function hu(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),b(t,"d","M337 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-143 143L97 127c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0L337 81zM441 201c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-247 247L41 295c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L143 465c9.4 9.4 24.6 9.4 33.9 0L441 201z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 448 512")},m(n,i){L(n,e,i),x(e,t)},p:D,i:D,o:D,d(n){n&&S(e)}}}class so extends be{constructor(e){super(),me(this,e,null,hu,de,{})}}ge(so,{},[],[],!0);function pu(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),b(t,"d","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 512 512")},m(n,i){L(n,e,i),x(e,t)},p:D,i:D,o:D,d(n){n&&S(e)}}}class oo extends be{constructor(e){super(),me(this,e,null,pu,de,{})}}ge(oo,{},[],[],!0);function du(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),b(t,"d","M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H448c8.8 0 16 7.2 16 16V352c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432V416zm-.2 76.2l.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h48 48v48 4 .3 6.4V496c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM96 180.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H152c8.8 0 16-7.2 16-16s-7.2-16-16-16H132.8C112.5 144 96 160.5 96 180.8zM372.8 144c-20.3 0-36.8 16.5-36.8 36.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H352c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H392c8.8 0 16-7.2 16-16s-7.2-16-16-16H372.8zm-152 6.4c-4.1-5.5-11.3-7.8-17.9-5.6S192 153.1 192 160v96c0 8.8 7.2 16 16 16s16-7.2 16-16V208l19.2 25.6c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4L288 208v48c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-6.9-4.4-13-10.9-15.2s-13.7 .1-17.9 5.6L256 197.3l-35.2-46.9z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 512 512")},m(n,i){L(n,e,i),x(e,t)},p:D,i:D,o:D,d(n){n&&S(e)}}}class ao extends be{constructor(e){super(),me(this,e,null,du,de,{})}}ge(ao,{},[],[],!0);function mu(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),b(t,"d","M133.9 232L65.8 95.9 383.4 232H133.9zm0 48H383.4L65.8 416.1l68-136.1zM44.6 34.6C32.3 29.3 17.9 32.3 8.7 42S-2.6 66.3 3.4 78.3L92.2 256 3.4 433.7c-6 12-3.9 26.5 5.3 36.3s23.5 12.7 35.9 7.5l448-192c11.8-5 19.4-16.6 19.4-29.4s-7.6-24.4-19.4-29.4l-448-192z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 512 512")},m(n,i){L(n,e,i),x(e,t)},p:D,i:D,o:D,d(n){n&&S(e)}}}class lo extends be{constructor(e){super(),me(this,e,null,mu,de,{})}}ge(lo,{},[],[],!0);function gu(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),b(t,"d","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 448 512")},m(n,i){L(n,e,i),x(e,t)},p:D,i:D,o:D,d(n){n&&S(e)}}}class co extends be{constructor(e){super(),me(this,e,null,gu,de,{})}}ge(co,{},[],[],!0);function bu(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),b(t,"d","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 448 512")},m(n,i){L(n,e,i),x(e,t)},p:D,i:D,o:D,d(n){n&&S(e)}}}class uo extends be{constructor(e){super(),me(this,e,null,bu,de,{})}}ge(uo,{},[],[],!0);function wu(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),b(t,"d","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 384 512")},m(n,i){L(n,e,i),x(e,t)},p:D,i:D,o:D,d(n){n&&S(e)}}}class yu extends be{constructor(e){super(),me(this,e,null,wu,de,{})}}ge(yu,{},[],[],!0);function _u(r){let e,t;return{c(){e=ce("svg"),t=ce("path"),b(t,"d","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"),b(e,"xmlns","http://www.w3.org/2000/svg"),b(e,"viewBox","0 0 448 512")},m(n,i){L(n,e,i),x(e,t)},p:D,i:D,o:D,d(n){n&&S(e)}}}class fo extends be{constructor(e){super(),me(this,e,null,_u,de,{})}}ge(fo,{},[],[],!0);const{document:vu}=$o;function Zi(r,e,t){const n=r.slice();return n[32]=e[t],n}function Ki(r){let e,t,n,i,s,o,a,l;return s=new co({}),{c(){e=E("button"),t=E("p"),t.textContent="Chat",n=B(),i=E("span"),ie(s.$$.fragment),b(t,"class","m-auto mx-2"),b(i,"class","h-6 w-5 mr-2 my-auto fill-white"),b(e,"class","py-2 px-2 rounded-md transition duration-300 flex stubber_webchat_chat_button")},m(c,u){L(c,e,u),x(e,t),x(e,n),x(e,i),te(s,i,null),o=!0,a||(l=se(e,"click",r[12]),a=!0)},p:D,i(c){o||(C(s.$$.fragment,c),o=!0)},o(c){I(s.$$.fragment,c),o=!1},d(c){c&&S(e),ne(s),a=!1,l()}}}function Qi(r){let e,t,n,i,s=(r[0]?r[0]:"")+"",o,a,l,c,u,h,f,m,y,v;u=new oo({});let d=!r[5]&&Ji(r),_=r[5]&&as(r);return{c(){e=E("div"),t=E("div"),n=E("div"),i=E("p"),o=je(s),a=B(),l=E("button"),c=E("span"),ie(u.$$.fragment),h=B(),d&&d.c(),f=B(),_&&_.c(),b(i,"class","text-lg font-semibold"),b(c,"class","w-5 fill-white rotate-45"),b(l,"class","rounded-md w-5 mx-1"),b(n,"class","pl-4 p-3 border-b text-black rounded-t-lg flex justify-between items-center h-15 stubber_webchat_top_box"),b(t,"class","flex flex-col flex-grow justify-end mx-4 transition duration-300 rounded-t-xl stubber_webchat_message_box"),b(e,"class","stubber_webchat_theme fixed right-0 bottom-0 flex w-full min-w-[250px] max-w-[500px] min-h-[200px] max-h-[1000px] h-full pt-4")},m(w,g){L(w,e,g),x(e,t),x(t,n),x(n,i),x(i,o),x(n,a),x(n,l),x(l,c),te(u,c,null),x(t,h),d&&d.m(t,null),x(t,f),_&&_.m(t,null),m=!0,y||(v=se(l,"click",r[19]),y=!0)},p(w,g){(!m||g[0]&1)&&s!==(s=(w[0]?w[0]:"")+"")&&ct(o,s),w[5]?d&&(We(),I(d,1,1,()=>{d=null}),Ve()):d?(d.p(w,g),g[0]&32&&C(d,1)):(d=Ji(w),d.c(),C(d,1),d.m(t,f)),w[5]?_?(_.p(w,g),g[0]&32&&C(_,1)):(_=as(w),_.c(),C(_,1),_.m(t,null)):_&&(We(),I(_,1,1,()=>{_=null}),Ve())},i(w){m||(C(u.$$.fragment,w),C(d),C(_),m=!0)},o(w){I(u.$$.fragment,w),I(d),I(_),m=!1},d(w){w&&S(e),ne(u),d&&d.d(),_&&_.d(),y=!1,v()}}}function Ji(r){let e,t,n,i,s,o,a,l,c,u,h,f,m,y,v=ci(r[3]),d=[];for(let g=0;g<v.length;g+=1)d[g]=ss(Zi(r,v,g));const _=g=>I(d[g],1,1,()=>{d[g]=null});c=new lo({});let w=r[4]&&os(r);return{c(){e=E("div");for(let g=0;g<d.length;g+=1)d[g].c();t=B(),n=E("div"),i=E("div"),s=E("input"),o=B(),a=E("button"),l=E("span"),ie(c.$$.fragment),h=B(),w&&w.c(),b(e,"class","p-4 overflow-y-auto flex-grow hide-scrollbar"),b(e,"id","stubber_webchat_message_box"),b(s,"type","text"),b(s,"class","w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2"),b(s,"placeholder",ku),b(s,"autocomplete","off"),b(l,"class","fill-gray-400"),b(a,"class","w-7 transition duration-300 pr-2"),a.disabled=u=r[2]==="",b(i,"class","h-10 w-full bg-white flex rounded-lg text-black"),b(n,"class","p-2 flex flex-col bg-gray-300 rounded-t-xl stubber_webchat_input_box")},m(g,T){L(g,e,T);for(let A=0;A<d.length;A+=1)d[A]&&d[A].m(e,null);L(g,t,T),L(g,n,T),x(n,i),x(i,s),lt(s,r[2]),x(i,o),x(i,a),x(a,l),te(c,l,null),x(n,h),w&&w.m(n,null),f=!0,m||(y=[se(s,"input",r[20]),se(s,"keydown",r[8]),se(a,"click",r[9])],m=!0)},p(g,T){if(T[0]&2056){v=ci(g[3]);let A;for(A=0;A<v.length;A+=1){const N=Zi(g,v,A);d[A]?(d[A].p(N,T),C(d[A],1)):(d[A]=ss(N),d[A].c(),C(d[A],1),d[A].m(e,null))}for(We(),A=v.length;A<d.length;A+=1)_(A);Ve()}T[0]&4&&s.value!==g[2]&&lt(s,g[2]),(!f||T[0]&4&&u!==(u=g[2]===""))&&(a.disabled=u),g[4]?w?w.p(g,T):(w=os(g),w.c(),w.m(n,null)):w&&(w.d(1),w=null)},i(g){if(!f){for(let T=0;T<v.length;T+=1)C(d[T]);C(c.$$.fragment,g),f=!0}},o(g){d=d.filter(Boolean);for(let T=0;T<d.length;T+=1)I(d[T]);I(c.$$.fragment,g),f=!1},d(g){g&&(S(e),S(t),S(n)),Co(d,g),ne(c),w&&w.d(),m=!1,Xe(y)}}}function es(r){let e,t,n,i,s,o,a=r[11](r[32].dateTime)+"",l,c=(r[32].previous_direction=="out"||!r[32].previous_direction)&&ts(),u=r[32].message.type=="markdown"&&ns(r),h=r[32].message.type=="text"&&rs(r);return{c(){e=E("div"),c&&c.c(),t=B(),n=E("div"),u&&u.c(),i=B(),h&&h.c(),s=B(),o=E("p"),l=je(a),b(o,"class","text-sm ml-auto"),b(n,"class","bg-gray-200 rounded-lg py-2 px-4 flex flex-col"),b(e,"class","mb-2 mr-10 flex flex-col")},m(f,m){L(f,e,m),c&&c.m(e,null),x(e,t),x(e,n),u&&u.m(n,null),x(n,i),h&&h.m(n,null),x(n,s),x(n,o),x(o,l)},p(f,m){f[32].previous_direction=="out"||!f[32].previous_direction?c||(c=ts(),c.c(),c.m(e,t)):c&&(c.d(1),c=null),f[32].message.type=="markdown"?u?u.p(f,m):(u=ns(f),u.c(),u.m(n,i)):u&&(u.d(1),u=null),f[32].message.type=="text"?h?h.p(f,m):(h=rs(f),h.c(),h.m(n,s)):h&&(h.d(1),h=null),m[0]&8&&a!==(a=f[11](f[32].dateTime)+"")&&ct(l,a)},d(f){f&&S(e),c&&c.d(),u&&u.d(),h&&h.d()}}}function ts(r){let e;return{c(){e=E("p"),e.textContent="Agent",b(e,"class","m-auto mx-2 text-sm")},m(t,n){L(t,e,n)},d(t){t&&S(e)}}}function ns(r){let e,t=fr.sanitize(j(r[32].message.value.trim()))+"",n;return{c(){e=new Po(!1),n=Un(),e.a=n},m(i,s){e.m(t,i,s),L(i,n,s)},p(i,s){s[0]&8&&t!==(t=fr.sanitize(j(i[32].message.value.trim()))+"")&&e.p(t)},d(i){i&&(S(n),e.d())}}}function rs(r){let e,t=r[32].message.value+"",n;return{c(){e=E("p"),n=je(t),b(e,"class","")},m(i,s){L(i,e,s),x(e,n)},p(i,s){s[0]&8&&t!==(t=i[32].message.value+"")&&ct(n,t)},d(i){i&&S(e)}}}function is(r){let e,t,n,i,s,o=r[32].message+"",a,l,c,u,h=r[11](r[32].dateTime)+"",f,m,y,v,d,_;return v=new so({}),{c(){e=E("div"),t=E("p"),t.textContent="You",n=B(),i=E("div"),s=E("p"),a=je(o),l=B(),c=E("div"),u=E("p"),f=je(h),m=B(),y=E("span"),ie(v.$$.fragment),d=B(),b(t,"class","m-auto mx-2 text-sm"),b(s,"class",""),b(u,"class","text-sm ml-auto mr-2"),b(y,"class","fill-green-400 w-3 my-auto bg-red"),b(c,"class","flex w-full"),b(i,"class","bg-gray-200 rounded-lg py-2 px-4 flex flex-col"),b(e,"class","mb-2 ml-10 text-right flex flex-col")},m(w,g){L(w,e,g),x(e,t),x(e,n),x(e,i),x(i,s),x(s,a),x(i,l),x(i,c),x(c,u),x(u,f),x(c,m),x(c,y),te(v,y,null),x(e,d),_=!0},p(w,g){(!_||g[0]&8)&&o!==(o=w[32].message+"")&&ct(a,o),(!_||g[0]&8)&&h!==(h=w[11](w[32].dateTime)+"")&&ct(f,h)},i(w){_||(C(v.$$.fragment,w),_=!0)},o(w){I(v.$$.fragment,w),_=!1},d(w){w&&S(e),ne(v)}}}function ss(r){let e,t,n,i=r[32].direction=="in"&&es(r),s=r[32].direction=="out"&&is(r);return{c(){i&&i.c(),e=B(),s&&s.c(),t=Un()},m(o,a){i&&i.m(o,a),L(o,e,a),s&&s.m(o,a),L(o,t,a),n=!0},p(o,a){o[32].direction=="in"?i?i.p(o,a):(i=es(o),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),o[32].direction=="out"?s?(s.p(o,a),a[0]&8&&C(s,1)):(s=is(o),s.c(),C(s,1),s.m(t.parentNode,t)):s&&(We(),I(s,1,1,()=>{s=null}),Ve())},i(o){n||(C(s),n=!0)},o(o){I(s),n=!1},d(o){o&&(S(e),S(t)),i&&i.d(o),s&&s.d(o)}}}function os(r){let e,t,n,i;return{c(){e=E("div"),t=E("button"),t.textContent="Switch Chat Channels",b(t,"class","w-25 transition duration-300 my-2 mx-auto"),b(e,"class","w-full flex")},m(s,o){L(s,e,o),x(e,t),n||(i=se(t,"click",r[13]),n=!0)},p:D,d(s){s&&S(e),n=!1,i()}}}function as(r){let e,t,n,i,s,o,a,l,c,u,h,f,m,y,v,d,_,w,g,T,A,N,q,W,Y,U,Q,J,G,ae,le,re,$;return s=new fo({}),f=new uo({}),w=new ao({}),W=new io({}),ae=new $s({props:{contactPointType:r[7],submit:r[10]}}),{c(){e=E("div"),t=E("div"),n=E("button"),i=E("span"),ie(s.$$.fragment),o=B(),a=E("p"),a.textContent="Back to chat",l=B(),c=E("div"),u=E("button"),h=E("span"),ie(f.$$.fragment),m=B(),y=E("p"),y.textContent="Whatsapp",v=B(),d=E("button"),_=E("span"),ie(w.$$.fragment),g=B(),T=E("p"),T.textContent="SMS",A=B(),N=E("button"),q=E("span"),ie(W.$$.fragment),Y=B(),U=E("p"),U.textContent="Email",Q=B(),J=E("div"),G=E("div"),ie(ae.$$.fragment),b(i,"class","stubber_webchat_text_neutral"),b(n,"class","w-6 h-25 my-auto transition duration-300 rounded-md mx-1"),b(a,"class","h-25 mx-2 my-auto stubber_webchat_text_neutral"),b(t,"class","flex w-full pl-2"),b(h,"class","w-10 mx-auto my-auto"),b(y,"class","mx-auto mb-1"),b(u,"class","h-24 w-28 mx-auto rounded-xl fill-gray-400 flex flex-col border stubber_webchat_chat_button_border_fill"),$t(u,"stubber_webchat_chat_button_border_fill_selected",r[6]=="whatsapp"),b(_,"class","w-10 mx-auto my-auto"),b(T,"class","mx-auto mb-1"),b(d,"class","h-24 w-28 mx-auto rounded-xl fill-gray-400 flex flex-col border stubber_webchat_chat_button_border_fill"),$t(d,"stubber_webchat_chat_button_border_fill_selected",r[6]=="sms"),b(q,"class","w-10 mx-auto my-auto"),b(U,"class","mx-auto mb-1"),b(N,"class","h-24 w-28 mx-auto rounded-xl flex flex-col border stubber_webchat_chat_button_border_fill"),$t(N,"stubber_webchat_chat_button_border_fill_selected",r[6]=="email"),b(c,"class","flex flex-row mt-5"),b(G,"class","flex flex-col mt-5 mx-2"),b(J,"class","flex flex-col"),b(e,"class","p-2 flex flex-col bg-white rounded-t-xl h-full pt-4 stubber_webchat_switch_box")},m(P,z){L(P,e,z),x(e,t),x(t,n),x(n,i),te(s,i,null),x(t,o),x(t,a),x(e,l),x(e,c),x(c,u),x(u,h),te(f,h,null),x(u,m),x(u,y),x(c,v),x(c,d),x(d,_),te(w,_,null),x(d,g),x(d,T),x(c,A),x(c,N),x(N,q),te(W,q,null),x(N,Y),x(N,U),x(e,Q),x(e,J),x(J,G),te(ae,G,null),le=!0,re||($=[se(n,"click",r[21]),se(u,"click",r[22]),se(d,"click",r[23]),se(N,"click",r[24])],re=!0)},p(P,z){(!le||z[0]&64)&&$t(u,"stubber_webchat_chat_button_border_fill_selected",P[6]=="whatsapp"),(!le||z[0]&64)&&$t(d,"stubber_webchat_chat_button_border_fill_selected",P[6]=="sms"),(!le||z[0]&64)&&$t(N,"stubber_webchat_chat_button_border_fill_selected",P[6]=="email");const Ae={};z[0]&128&&(Ae.contactPointType=P[7]),ae.$set(Ae)},i(P){le||(C(s.$$.fragment,P),C(f.$$.fragment,P),C(w.$$.fragment,P),C(W.$$.fragment,P),C(ae.$$.fragment,P),le=!0)},o(P){I(s.$$.fragment,P),I(f.$$.fragment,P),I(w.$$.fragment,P),I(W.$$.fragment,P),I(ae.$$.fragment,P),le=!1},d(P){P&&S(e),ne(s),ne(f),ne(w),ne(W),ne(ae),re=!1,Xe($)}}}function xu(r){let e,t,n,i,s,o,a=!r[1]&&Ki(r),l=r[1]&&Qi(r);return{c(){e=E("style"),e.textContent=`/*
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
.h-24 {
  height: 6rem;
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
.w-28 {
  width: 7rem;
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
.border {
  border-width: 1px;
}
.border-0 {
  border-width: 0px;
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
.fill-green-400 {
  fill: #4ade80;
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
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-inset {
  --tw-ring-inset: inset;
}
.ring-red-500 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(239 68 68 / var(--tw-ring-opacity));
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
  --secondary-color: #00ffdd;
  --neutral-color: #ffffff;
}
.stubber_webchat_input_box {
  background-color: var(--primary-color);
  color: var(--neutral-color);
}
.stubber_webchat_top_box {
  background-color: var(--primary-color);
  color: var(--neutral-color);
}
.stubber_webchat_outer_box {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  border-width: 1px;
}
.stubber_webchat_message_box {
  background-color: var(--neutral-color);
  border: 1px solid var(--primary-color);
}
.stubber_webchat_switch_box {
  background-color: var(--neutral-color);
}
.stubber_webchat_chat_button {
  background-color: var(--primary-color);
  color: var(--neutral-color);
}
.stubber_webchat_chat_button_selected {
  background-color: var(--secondary-color);
  color: var(--neutral-color);
}
.stubber_webchat_chat_button_border_fill {
  background-color: var(--neutral-color);
  fill: var(--primary-color);
}
.stubber_webchat_chat_button_border_fill_selected {
  fill: var(--secondary-color);
  border-color: var(--secondary-color);
}
.stubber_webchat_chat_button:hover {
  background-color: var(--secondary-color);
  color: var(--neutral-color);
}
.stubber_webchat_text_neutral {
  color: var(--primary-color);
  fill: var(--primary-color);
}
.stubber_webchat_fill {
  fill: var(--primary-color);
}
.focus\\:border-none:focus {
  border-style: none;
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-inset:focus {
  --tw-ring-inset: inset;
}`,t=B(),n=E("div"),a&&a.c(),i=B(),l&&l.c(),s=Un(),b(n,"class","stubber_webchat_theme fixed bottom-0 right-0 mb-4 mr-4 h-11 w-96 flex justify-end")},m(c,u){x(vu.head,e),L(c,t,u),L(c,n,u),a&&a.m(n,null),L(c,i,u),l&&l.m(c,u),L(c,s,u),o=!0},p(c,u){c[1]?a&&(We(),I(a,1,1,()=>{a=null}),Ve()):a?(a.p(c,u),u[0]&2&&C(a,1)):(a=Ki(c),a.c(),C(a,1),a.m(n,null)),c[1]?l?(l.p(c,u),u[0]&2&&C(l,1)):(l=Qi(c),l.c(),C(l,1),l.m(s.parentNode,s)):l&&(We(),I(l,1,1,()=>{l=null}),Ve())},i(c){o||(C(a),C(l),o=!0)},o(c){I(a),I(l),o=!1},d(c){c&&(S(t),S(n),S(i),S(s)),S(e),a&&a.d(),l&&l.d(c)}}}let ku="Type message...";function Tu(r,e,t){console.log("stubber webchat v1.2");let{orguuid:n}=e,{chatname:i}=e,{chat_display_name:s}=e,{connect_on_open:o}=e,{open_on_load:a}=e,{passthrough_data:l}=e,c=!1,u=!1,h="",f=[],m,y=!0,v=!0,d="whatsapp",_="",w="https://external-portforward.stubber.zone:6026";Io(()=>{if(console.log("__Mounted"),a==="true"){Y();return}o&&c&&g()});let g=()=>{m=Pn(w),m.on("connect",async()=>{console.log("___Connected to server"),f.length==0&&await m.emit("initialize",{webchat_configuration:{orguuid:n,chatname:i,initialize:!0,passthrough_data:l}}),h.length>0&&A()}),m.on("disconnect",()=>{console.log("___Disconnected from server")}),m.on("webchat_message",$=>{let P=null;f.length>0&&(P=f[f.length-1].direction);let z={direction:"in",previous_direction:P,sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:$.webchat_message};f.push(z),t(3,f),W()}),m.on("webchat_client_configuration",$=>{Object.keys($).forEach(z=>{$[z].type=="allow_switching"&&t(4,y=$[z].value)})}),m.on("error",$=>{console.log("__Stubber Webchat : "+($==null?void 0:$.error))})},T=$=>{$.key==="Enter"&&h!=""&&A()},A=async()=>{if(!m){g();return}let $="in";f.length>0&&($=f[f.length-1].direction);let P={direction:"out",previous_direction:$,sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:h};f.push(P),t(3,f),t(2,h=""),W(),m.connected&&(await m.emit("message",{webchat_configuration:{orguuid:n,chatname:i,passthrough_data:l},webchat_message:{type:"text",value:P.message,messageuuid:P.messageuuid}}),v&&await m.emit("client_configuration",{webchat_configuration:{orguuid:n,chatname:i,passthrough_data:l},webchat_client_configuration:{platform_switch:{platform_name:d,value:P.message}}}),P.received=!0,t(3,f))},N=async $=>{m||g(),console.log("sent config"),m.connected&&await m.emit("client_configuration",{webchat_configuration:{orguuid:n,chatname:i,passthrough_data:l},webchat_client_configuration:{platform_switch:{platform_name:d,value:$}}})},q=$=>{let P=$.getHours().toString().padStart(2,"0");const z=$.getMinutes().toString().padStart(2,"0"),Ae=P>=12?"pm":"am";return P=P%12,P=P||12,P+":"+z+" "+Ae},W=()=>{setTimeout(()=>{let $=document.getElementById("stubber_webchat_message_box");$.scrollTop=$.scrollHeight},100)},Y=()=>{t(1,c=!0),o==="true"&&!u&&g(),u=!0},U=()=>{t(5,v=!0)};fs(()=>{ws&&ws.close()}),fr.addHook("afterSanitizeAttributes",function($){"target"in $&&$.setAttribute("target","_blank"),!$.hasAttribute("target")&&($.hasAttribute("xlink:href")||$.hasAttribute("href"))&&$.setAttribute("xlink:show","new")});const Q=()=>{t(1,c=!1)};function J(){h=this.value,t(2,h)}const G=()=>{t(5,v=!1)},ae=()=>{t(6,d="whatsapp"),t(7,_="mobile")},le=()=>{t(6,d="sms"),t(7,_="mobile")},re=()=>{t(6,d="email"),t(7,_="email")};return r.$$set=$=>{"orguuid"in $&&t(14,n=$.orguuid),"chatname"in $&&t(15,i=$.chatname),"chat_display_name"in $&&t(0,s=$.chat_display_name),"connect_on_open"in $&&t(16,o=$.connect_on_open),"open_on_load"in $&&t(17,a=$.open_on_load),"passthrough_data"in $&&t(18,l=$.passthrough_data)},[s,c,h,f,y,v,d,_,T,A,N,q,Y,U,n,i,o,a,l,Q,J,G,ae,le,re]}class Eu extends be{constructor(e){super(),me(this,e,Tu,xu,de,{orguuid:14,chatname:15,chat_display_name:0,connect_on_open:16,open_on_load:17,passthrough_data:18},null,[-1,-1])}get orguuid(){return this.$$.ctx[14]}set orguuid(e){this.$$set({orguuid:e}),K()}get chatname(){return this.$$.ctx[15]}set chatname(e){this.$$set({chatname:e}),K()}get chat_display_name(){return this.$$.ctx[0]}set chat_display_name(e){this.$$set({chat_display_name:e}),K()}get connect_on_open(){return this.$$.ctx[16]}set connect_on_open(e){this.$$set({connect_on_open:e}),K()}get open_on_load(){return this.$$.ctx[17]}set open_on_load(e){this.$$set({open_on_load:e}),K()}get passthrough_data(){return this.$$.ctx[18]}set passthrough_data(e){this.$$set({passthrough_data:e}),K()}}customElements.define("stubber-webchat",ge(Eu,{orguuid:{},chatname:{},chat_display_name:{},connect_on_open:{},open_on_load:{},passthrough_data:{}},[],[],!1));
