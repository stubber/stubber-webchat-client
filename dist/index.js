var bo=Object.defineProperty;var wo=(r,e,t)=>e in r?bo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var M=(r,e,t)=>(wo(r,typeof e!="symbol"?e+"":e,t),t),yo=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var Wn=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)};var hn=(r,e,t)=>(yo(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function B(){}function _o(r,e){for(const t in e)r[t]=e[t];return r}function ns(r){return r()}function ei(){return Object.create(null)}function nt(r){r.forEach(ns)}function gr(r){return typeof r=="function"}function Te(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let pn;function vo(r,e){return r===e?!0:(pn||(pn=document.createElement("a")),pn.href=e,r===pn.href)}function xo(r){return Object.keys(r).length===0}function rs(r,e,t,n){if(r){const i=is(r,e,t,n);return r[0](i)}}function is(r,e,t,n){return r[1]&&n?_o(t.ctx.slice(),r[1](n(e))):t.ctx}function ss(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function os(r,e,t,n,i,s){if(i){const o=is(e,t,n,s);r.p(o,i)}}function as(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function ls(r){return r&&gr(r.destroy)?r.destroy:B}const ko=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function _(r,e){r.appendChild(e)}function To(r,e,t){const n=Eo(r);if(!n.getElementById(e)){const i=A("style");i.id=e,i.textContent=t,Ao(n,i)}}function Eo(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function Ao(r,e){return _(r.head||r,e),e.sheet}function I(r,e,t){r.insertBefore(e,t||null)}function N(r){r.parentNode&&r.parentNode.removeChild(r)}function Ro(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function A(r){return document.createElement(r)}function oe(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function Ue(r){return document.createTextNode(r)}function H(){return Ue(" ")}function Mn(){return Ue("")}function se(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function g(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Oo(r){return Array.from(r.childNodes)}function et(r,e){e=""+e,r.data!==e&&(r.data=e)}function at(r,e){r.value=e??""}class So{constructor(e=!1){M(this,"is_svg",!1);M(this,"e");M(this,"n");M(this,"t");M(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=oe(t.nodeName):this.e=A(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)I(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}function Co(r){const e={};return r.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let en;function Xt(r){en=r}function cs(){if(!en)throw new Error("Function called outside component initialization");return en}function $o(r){cs().$$.on_mount.push(r)}function us(r){cs().$$.on_destroy.push(r)}const At=[],St=[];let Ot=[];const er=[],Lo=Promise.resolve();let tr=!1;function No(){tr||(tr=!0,Lo.then(te))}function nr(r){Ot.push(r)}function br(r){er.push(r)}const Vn=new Set;let Et=0;function te(){if(Et!==0)return;const r=en;do{try{for(;Et<At.length;){const e=At[Et];Et++,Xt(e),Po(e.$$)}}catch(e){throw At.length=0,Et=0,e}for(Xt(null),At.length=0,Et=0;St.length;)St.pop()();for(let e=0;e<Ot.length;e+=1){const t=Ot[e];Vn.has(t)||(Vn.add(t),t())}Ot.length=0}while(At.length);for(;er.length;)er.pop()();tr=!1,Vn.clear(),Xt(r)}function Po(r){if(r.fragment!==null){r.update(),nt(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(nr)}}function Do(r){const e=[],t=[];Ot.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Ot=e}const Tn=new Set;let pt;function $e(){pt={r:0,c:[],p:pt}}function Le(){pt.r||nt(pt.c),pt=pt.p}function C(r,e){r&&r.i&&(Tn.delete(r),r.i(e))}function z(r,e,t,n){if(r&&r.o){if(Tn.has(r))return;Tn.add(r),pt.c.push(()=>{Tn.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}function ti(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function wr(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function Ce(r){r&&r.c()}function _e(r,e,t){const{fragment:n,after_update:i}=r.$$;n&&n.m(e,t),nr(()=>{const s=r.$$.on_mount.map(ns).filter(gr);r.$$.on_destroy?r.$$.on_destroy.push(...s):nt(s),r.$$.on_mount=[]}),i.forEach(nr)}function ve(r,e){const t=r.$$;t.fragment!==null&&(Do(t.after_update),nt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Mo(r,e){r.$$.dirty[0]===-1&&(At.push(r),No(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function Ee(r,e,t,n,i,s,o=null,a=[-1]){const l=en;Xt(r);const c=r.$$={fragment:null,ctx:[],props:s,update:B,not_equal:i,bound:ei(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ei(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(p,f,...m)=>{const v=m.length?m[0]:f;return c.ctx&&i(c.ctx[p],c.ctx[p]=v)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](v),u&&Mo(r,p)),f}):[],c.update(),u=!0,nt(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const p=Oo(e.target);c.fragment&&c.fragment.l(p),p.forEach(N)}else c.fragment&&c.fragment.c();e.intro&&C(r.$$.fragment),_e(r,e.target,e.anchor),te()}Xt(l)}let fs;typeof HTMLElement=="function"&&(fs=class extends HTMLElement{constructor(e,t,n){super();M(this,"$$ctor");M(this,"$$s");M(this,"$$c");M(this,"$$cn",!1);M(this,"$$d",{});M(this,"$$r",!1);M(this,"$$p_d",{});M(this,"$$l",{});M(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const i=this.$$c.$on(e,t);this.$$l_u.set(t,i)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const i=this.$$l_u.get(t);i&&(i(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let a;return{c:function(){a=A("slot"),o!=="default"&&g(a,"name",o)},m:function(u,p){I(u,a,p)},d:function(u){u&&N(a)}}}};var e=t;if(await Promise.resolve(),!this.$$cn)return;const n={},i=Co(this);for(const o of this.$$s)o in i&&(n[o]=[t(o)]);for(const o of this.attributes){const a=this.$$g_p(o.name);a in this.$$d||(this.$$d[a]=En(a,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const s=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const a=En(o,this.$$d[o],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,a)}this.$$r=!1};this.$$c.$$.after_update.push(s),s();for(const o in this.$$l)for(const a of this.$$l[o]){const l=this.$$c.$on(o,a);this.$$l_u.set(a,l)}this.$$l={}}}attributeChangedCallback(e,t,n){var i;this.$$r||(e=this.$$g_p(e),this.$$d[e]=En(e,n,this.$$p_d,"toProp"),(i=this.$$c)==null||i.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function En(r,e,t,n){var s;const i=(s=t[r])==null?void 0:s.type;if(e=i==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!t[r])return e;if(n==="toAttribute")switch(i){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(i){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function Ae(r,e,t,n,i,s){let o=class extends fs{constructor(){super(r,t,i),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){var c;l=En(a,l,e),this.$$d[a]=l,(c=this.$$c)==null||c.$set({[a]:l})}})}),n.forEach(a=>{Object.defineProperty(o.prototype,a,{get(){var l;return(l=this.$$c)==null?void 0:l[a]}})}),s&&(o=s(o)),r.element=o,o}class Re{constructor(){M(this,"$$");M(this,"$$set")}$destroy(){ve(this,1),this.$destroy=B}$on(e,t){if(!gr(t))return B;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!xo(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Io="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Io);function ni(r){let e,t,n;return{c(){e=A("label"),t=Ue(r[1]),g(e,"for",n="input_$"+r[2]),g(e,"class","block text-label")},m(i,s){I(i,e,s),_(e,t)},p(i,s){s&2&&et(t,i[1]),s&4&&n!==(n="input_$"+i[2])&&g(e,"for",n)},d(i){i&&N(e)}}}function ri(r){return{c:B,m:B,d:B}}function Bo(r){let e,t,n,i,s,o,a,l,c,u,p,f,m,v,b,d=r[1]&&ni(r),w=r[6]&&r[3]&&ri();return{c(){e=A("link"),t=A("script"),t.innerHTML="",i=H(),s=A("div"),d&&d.c(),o=H(),a=A("div"),l=A("input"),p=H(),f=A("input"),m=H(),w&&w.c(),g(e,"rel","stylesheet"),g(e,"href","https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css"),vo(t.src,n="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js")||g(t,"src",n),l.readOnly=r[4],g(l,"type","tel"),g(l,"id",c="input_$"+r[2]),g(l,"class",u="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(r[6]?"ring-danger-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"),g(f,"type","hidden"),g(f,"name",r[2]),g(a,"class","flex flex-col w-full space-y-2 relative mt-2 rounded-md"),g(s,"class","flex flex-col w-full space-y-2 text-surface-900")},m(y,x){_(document.head,e),_(document.head,t),I(y,i,x),I(y,s,x),d&&d.m(s,null),_(s,o),_(s,a),_(a,l),r[10](l),at(l,r[0]),_(a,p),_(a,f),at(f,r[7]),_(s,m),w&&w.m(s,null),v||(b=[se(t,"load",r[9]),se(l,"input",r[8]),se(l,"input",r[11]),se(f,"input",r[12])],v=!0)},p(y,[x]){y[1]?d?d.p(y,x):(d=ni(y),d.c(),d.m(s,o)):d&&(d.d(1),d=null),x&16&&(l.readOnly=y[4]),x&4&&c!==(c="input_$"+y[2])&&g(l,"id",c),x&64&&u!==(u="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(y[6]?"ring-danger-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset")&&g(l,"class",u),x&1&&at(l,y[0]),x&4&&g(f,"name",y[2]),x&128&&at(f,y[7]),y[6]&&y[3]?w||(w=ri(),w.c(),w.m(s,null)):w&&(w.d(1),w=null)},i:B,o:B,d(y){y&&(N(i),N(s)),N(e),N(t),d&&d.d(),r[10](null),w&&w.d(),v=!1,nt(b)}}}function zo(r,e,t){let{label:n}=e,{name:i}=e,{value:s}=e,{validationMessage:o="Invalid Number"}=e,{readonly:a=!1}=e,l,c,u,p;const f=()=>{l.value.trim()&&(u.isValidNumber()?(t(6,c=!1),t(7,p=u.getNumber())):t(6,c=!0))};function m(){u=window.intlTelInput(l,{initialCountry:"auto",geoIpLookup:w=>{fetch("https://ipapi.co/json").then(y=>y.json()).then(y=>w(y.country_code)).catch(()=>w("us"))},utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"})}function v(w){St[w?"unshift":"push"](()=>{l=w,t(5,l)})}function b(){s=this.value,t(0,s)}function d(){p=this.value,t(7,p)}return r.$$set=w=>{"label"in w&&t(1,n=w.label),"name"in w&&t(2,i=w.name),"value"in w&&t(0,s=w.value),"validationMessage"in w&&t(3,o=w.validationMessage),"readonly"in w&&t(4,a=w.readonly)},[s,n,i,o,a,l,c,p,f,m,v,b,d]}class yr extends Re{constructor(e){super(),Ee(this,e,zo,Bo,Te,{label:1,name:2,value:0,validationMessage:3,readonly:4})}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),te()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),te()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),te()}get validationMessage(){return this.$$.ctx[3]}set validationMessage(e){this.$$set({validationMessage:e}),te()}get readonly(){return this.$$.ctx[4]}set readonly(e){this.$$set({readonly:e}),te()}}Ae(yr,{label:{},name:{},value:{},validationMessage:{},readonly:{type:"Boolean"}},[],[],!0);var me="top",Pe="bottom",De="right",ge="left",_r="auto",sn=[me,Pe,De,ge],Ct="start",tn="end",Uo="clippingParents",hs="viewport",Ht="popper",Fo="reference",ii=sn.reduce(function(r,e){return r.concat([e+"-"+Ct,e+"-"+tn])},[]),ps=[].concat(sn,[_r]).reduce(function(r,e){return r.concat([e,e+"-"+Ct,e+"-"+tn])},[]),Ho="beforeRead",qo="read",jo="afterRead",Wo="beforeMain",Vo="main",Yo="afterMain",Go="beforeWrite",Xo="write",Zo="afterWrite",Ko=[Ho,qo,jo,Wo,Vo,Yo,Go,Xo,Zo];function Ge(r){return r?(r.nodeName||"").toLowerCase():null}function xe(r){if(r==null)return window;if(r.toString()!=="[object Window]"){var e=r.ownerDocument;return e&&e.defaultView||window}return r}function mt(r){var e=xe(r).Element;return r instanceof e||r instanceof Element}function Ne(r){var e=xe(r).HTMLElement;return r instanceof e||r instanceof HTMLElement}function vr(r){if(typeof ShadowRoot>"u")return!1;var e=xe(r).ShadowRoot;return r instanceof e||r instanceof ShadowRoot}function Qo(r){var e=r.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},s=e.elements[t];!Ne(s)||!Ge(s)||(Object.assign(s.style,n),Object.keys(i).forEach(function(o){var a=i[o];a===!1?s.removeAttribute(o):s.setAttribute(o,a===!0?"":a)}))})}function Jo(r){var e=r.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var i=e.elements[n],s=e.attributes[n]||{},o=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),a=o.reduce(function(l,c){return l[c]="",l},{});!Ne(i)||!Ge(i)||(Object.assign(i.style,a),Object.keys(s).forEach(function(l){i.removeAttribute(l)}))})}}const ea={name:"applyStyles",enabled:!0,phase:"write",fn:Qo,effect:Jo,requires:["computeStyles"]};function Ve(r){return r.split("-")[0]}var dt=Math.max,$n=Math.min,$t=Math.round;function rr(){var r=navigator.userAgentData;return r!=null&&r.brands&&Array.isArray(r.brands)?r.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function ds(){return!/^((?!chrome|android).)*safari/i.test(rr())}function Lt(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var n=r.getBoundingClientRect(),i=1,s=1;e&&Ne(r)&&(i=r.offsetWidth>0&&$t(n.width)/r.offsetWidth||1,s=r.offsetHeight>0&&$t(n.height)/r.offsetHeight||1);var o=mt(r)?xe(r):window,a=o.visualViewport,l=!ds()&&t,c=(n.left+(l&&a?a.offsetLeft:0))/i,u=(n.top+(l&&a?a.offsetTop:0))/s,p=n.width/i,f=n.height/s;return{width:p,height:f,top:u,right:c+p,bottom:u+f,left:c,x:c,y:u}}function xr(r){var e=Lt(r),t=r.offsetWidth,n=r.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:r.offsetLeft,y:r.offsetTop,width:t,height:n}}function ms(r,e){var t=e.getRootNode&&e.getRootNode();if(r.contains(e))return!0;if(t&&vr(t)){var n=e;do{if(n&&r.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function tt(r){return xe(r).getComputedStyle(r)}function ta(r){return["table","td","th"].indexOf(Ge(r))>=0}function lt(r){return((mt(r)?r.ownerDocument:r.document)||window.document).documentElement}function In(r){return Ge(r)==="html"?r:r.assignedSlot||r.parentNode||(vr(r)?r.host:null)||lt(r)}function si(r){return!Ne(r)||tt(r).position==="fixed"?null:r.offsetParent}function na(r){var e=/firefox/i.test(rr()),t=/Trident/i.test(rr());if(t&&Ne(r)){var n=tt(r);if(n.position==="fixed")return null}var i=In(r);for(vr(i)&&(i=i.host);Ne(i)&&["html","body"].indexOf(Ge(i))<0;){var s=tt(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function on(r){for(var e=xe(r),t=si(r);t&&ta(t)&&tt(t).position==="static";)t=si(t);return t&&(Ge(t)==="html"||Ge(t)==="body"&&tt(t).position==="static")?e:t||na(r)||e}function kr(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function Zt(r,e,t){return dt(r,$n(e,t))}function ra(r,e,t){var n=Zt(r,e,t);return n>t?t:n}function gs(){return{top:0,right:0,bottom:0,left:0}}function bs(r){return Object.assign({},gs(),r)}function ys(r,e){return e.reduce(function(t,n){return t[n]=r,t},{})}var ia=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,bs(typeof e!="number"?e:ys(e,sn))};function sa(r){var e,t=r.state,n=r.name,i=r.options,s=t.elements.arrow,o=t.modifiersData.popperOffsets,a=Ve(t.placement),l=kr(a),c=[ge,De].indexOf(a)>=0,u=c?"height":"width";if(!(!s||!o)){var p=ia(i.padding,t),f=xr(s),m=l==="y"?me:ge,v=l==="y"?Pe:De,b=t.rects.reference[u]+t.rects.reference[l]-o[l]-t.rects.popper[u],d=o[l]-t.rects.reference[l],w=on(s),y=w?l==="y"?w.clientHeight||0:w.clientWidth||0:0,x=b/2-d/2,E=p[m],R=y-f[u]-p[v],D=y/2-f[u]/2+x,j=Zt(E,D,R),G=l;t.modifiersData[n]=(e={},e[G]=j,e.centerOffset=j-D,e)}}function oa(r){var e=r.state,t=r.options,n=t.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||ms(e.elements.popper,i)&&(e.elements.arrow=i))}const aa={name:"arrow",enabled:!0,phase:"main",fn:sa,effect:oa,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Nt(r){return r.split("-")[1]}var la={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ca(r,e){var t=r.x,n=r.y,i=e.devicePixelRatio||1;return{x:$t(t*i)/i||0,y:$t(n*i)/i||0}}function oi(r){var e,t=r.popper,n=r.popperRect,i=r.placement,s=r.variation,o=r.offsets,a=r.position,l=r.gpuAcceleration,c=r.adaptive,u=r.roundOffsets,p=r.isFixed,f=o.x,m=f===void 0?0:f,v=o.y,b=v===void 0?0:v,d=typeof u=="function"?u({x:m,y:b}):{x:m,y:b};m=d.x,b=d.y;var w=o.hasOwnProperty("x"),y=o.hasOwnProperty("y"),x=ge,E=me,R=window;if(c){var D=on(t),j="clientHeight",G="clientWidth";if(D===xe(t)&&(D=lt(t),tt(D).position!=="static"&&a==="absolute"&&(j="scrollHeight",G="scrollWidth")),D=D,i===me||(i===ge||i===De)&&s===tn){E=Pe;var K=p&&D===R&&R.visualViewport?R.visualViewport.height:D[j];b-=K-n.height,b*=l?1:-1}if(i===ge||(i===me||i===Pe)&&s===tn){x=De;var U=p&&D===R&&R.visualViewport?R.visualViewport.width:D[G];m-=U-n.width,m*=l?1:-1}}var Q=Object.assign({position:a},c&&la),V=u===!0?ca({x:m,y:b},xe(t)):{x:m,y:b};if(m=V.x,b=V.y,l){var J;return Object.assign({},Q,(J={},J[E]=y?"0":"",J[x]=w?"0":"",J.transform=(R.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",J))}return Object.assign({},Q,(e={},e[E]=y?b+"px":"",e[x]=w?m+"px":"",e.transform="",e))}function ua(r){var e=r.state,t=r.options,n=t.gpuAcceleration,i=n===void 0?!0:n,s=t.adaptive,o=s===void 0?!0:s,a=t.roundOffsets,l=a===void 0?!0:a,c={placement:Ve(e.placement),variation:Nt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,oi(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,oi(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const fa={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ua,data:{}};var dn={passive:!0};function ha(r){var e=r.state,t=r.instance,n=r.options,i=n.scroll,s=i===void 0?!0:i,o=n.resize,a=o===void 0?!0:o,l=xe(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",t.update,dn)}),a&&l.addEventListener("resize",t.update,dn),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",t.update,dn)}),a&&l.removeEventListener("resize",t.update,dn)}}const pa={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ha,data:{}};var da={left:"right",right:"left",bottom:"top",top:"bottom"};function An(r){return r.replace(/left|right|bottom|top/g,function(e){return da[e]})}var ma={start:"end",end:"start"};function ai(r){return r.replace(/start|end/g,function(e){return ma[e]})}function Tr(r){var e=xe(r),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function Er(r){return Lt(lt(r)).left+Tr(r).scrollLeft}function ga(r,e){var t=xe(r),n=lt(r),i=t.visualViewport,s=n.clientWidth,o=n.clientHeight,a=0,l=0;if(i){s=i.width,o=i.height;var c=ds();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:s,height:o,x:a+Er(r),y:l}}function ba(r){var e,t=lt(r),n=Tr(r),i=(e=r.ownerDocument)==null?void 0:e.body,s=dt(t.scrollWidth,t.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=dt(t.scrollHeight,t.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-n.scrollLeft+Er(r),l=-n.scrollTop;return tt(i||t).direction==="rtl"&&(a+=dt(t.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function Ar(r){var e=tt(r),t=e.overflow,n=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+i+n)}function _s(r){return["html","body","#document"].indexOf(Ge(r))>=0?r.ownerDocument.body:Ne(r)&&Ar(r)?r:_s(In(r))}function Kt(r,e){var t;e===void 0&&(e=[]);var n=_s(r),i=n===((t=r.ownerDocument)==null?void 0:t.body),s=xe(n),o=i?[s].concat(s.visualViewport||[],Ar(n)?n:[]):n,a=e.concat(o);return i?a:a.concat(Kt(In(o)))}function ir(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function wa(r,e){var t=Lt(r,!1,e==="fixed");return t.top=t.top+r.clientTop,t.left=t.left+r.clientLeft,t.bottom=t.top+r.clientHeight,t.right=t.left+r.clientWidth,t.width=r.clientWidth,t.height=r.clientHeight,t.x=t.left,t.y=t.top,t}function li(r,e,t){return e===hs?ir(ga(r,t)):mt(e)?wa(e,t):ir(ba(lt(r)))}function ya(r){var e=Kt(In(r)),t=["absolute","fixed"].indexOf(tt(r).position)>=0,n=t&&Ne(r)?on(r):r;return mt(n)?e.filter(function(i){return mt(i)&&ms(i,n)&&Ge(i)!=="body"}):[]}function _a(r,e,t,n){var i=e==="clippingParents"?ya(r):[].concat(e),s=[].concat(i,[t]),o=s[0],a=s.reduce(function(l,c){var u=li(r,c,n);return l.top=dt(u.top,l.top),l.right=$n(u.right,l.right),l.bottom=$n(u.bottom,l.bottom),l.left=dt(u.left,l.left),l},li(r,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function vs(r){var e=r.reference,t=r.element,n=r.placement,i=n?Ve(n):null,s=n?Nt(n):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,l;switch(i){case me:l={x:o,y:e.y-t.height};break;case Pe:l={x:o,y:e.y+e.height};break;case De:l={x:e.x+e.width,y:a};break;case ge:l={x:e.x-t.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?kr(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case Ct:l[c]=l[c]-(e[u]/2-t[u]/2);break;case tn:l[c]=l[c]+(e[u]/2-t[u]/2);break}}return l}function nn(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=n===void 0?r.placement:n,s=t.strategy,o=s===void 0?r.strategy:s,a=t.boundary,l=a===void 0?Uo:a,c=t.rootBoundary,u=c===void 0?hs:c,p=t.elementContext,f=p===void 0?Ht:p,m=t.altBoundary,v=m===void 0?!1:m,b=t.padding,d=b===void 0?0:b,w=bs(typeof d!="number"?d:ys(d,sn)),y=f===Ht?Fo:Ht,x=r.rects.popper,E=r.elements[v?y:f],R=_a(mt(E)?E:E.contextElement||lt(r.elements.popper),l,u,o),D=Lt(r.elements.reference),j=vs({reference:D,element:x,strategy:"absolute",placement:i}),G=ir(Object.assign({},x,j)),K=f===Ht?G:D,U={top:R.top-K.top+w.top,bottom:K.bottom-R.bottom+w.bottom,left:R.left-K.left+w.left,right:K.right-R.right+w.right},Q=r.modifiersData.offset;if(f===Ht&&Q){var V=Q[i];Object.keys(U).forEach(function(J){var ue=[De,Pe].indexOf(J)>=0?1:-1,he=[me,Pe].indexOf(J)>=0?"y":"x";U[J]+=V[he]*ue})}return U}function va(r,e){e===void 0&&(e={});var t=e,n=t.placement,i=t.boundary,s=t.rootBoundary,o=t.padding,a=t.flipVariations,l=t.allowedAutoPlacements,c=l===void 0?ps:l,u=Nt(n),p=u?a?ii:ii.filter(function(v){return Nt(v)===u}):sn,f=p.filter(function(v){return c.indexOf(v)>=0});f.length===0&&(f=p);var m=f.reduce(function(v,b){return v[b]=nn(r,{placement:b,boundary:i,rootBoundary:s,padding:o})[Ve(b)],v},{});return Object.keys(m).sort(function(v,b){return m[v]-m[b]})}function xa(r){if(Ve(r)===_r)return[];var e=An(r);return[ai(r),e,ai(e)]}function ka(r){var e=r.state,t=r.options,n=r.name;if(!e.modifiersData[n]._skip){for(var i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!0:o,l=t.fallbackPlacements,c=t.padding,u=t.boundary,p=t.rootBoundary,f=t.altBoundary,m=t.flipVariations,v=m===void 0?!0:m,b=t.allowedAutoPlacements,d=e.options.placement,w=Ve(d),y=w===d,x=l||(y||!v?[An(d)]:xa(d)),E=[d].concat(x).reduce(function(re,Oe){return re.concat(Ve(Oe)===_r?va(e,{placement:Oe,boundary:u,rootBoundary:p,padding:c,flipVariations:v,allowedAutoPlacements:b}):Oe)},[]),R=e.rects.reference,D=e.rects.popper,j=new Map,G=!0,K=E[0],U=0;U<E.length;U++){var Q=E[U],V=Ve(Q),J=Nt(Q)===Ct,ue=[me,Pe].indexOf(V)>=0,he=ue?"width":"height",ee=nn(e,{placement:Q,boundary:u,rootBoundary:p,altBoundary:f,padding:c}),ne=ue?J?De:ge:J?Pe:me;R[he]>D[he]&&(ne=An(ne));var be=An(ne),T=[];if(s&&T.push(ee[V]<=0),a&&T.push(ee[ne]<=0,ee[be]<=0),T.every(function(re){return re})){K=Q,G=!1;break}j.set(Q,T)}if(G)for(var P=v?3:1,L=function(Oe){var rt=E.find(function(it){var He=j.get(it);if(He)return He.slice(0,Oe).every(function(wt){return wt})});if(rt)return K=rt,"break"},Y=P;Y>0;Y--){var $=L(Y);if($==="break")break}e.placement!==K&&(e.modifiersData[n]._skip=!0,e.placement=K,e.reset=!0)}}const Ta={name:"flip",enabled:!0,phase:"main",fn:ka,requiresIfExists:["offset"],data:{_skip:!1}};function ci(r,e,t){return t===void 0&&(t={x:0,y:0}),{top:r.top-e.height-t.y,right:r.right-e.width+t.x,bottom:r.bottom-e.height+t.y,left:r.left-e.width-t.x}}function ui(r){return[me,De,Pe,ge].some(function(e){return r[e]>=0})}function Ea(r){var e=r.state,t=r.name,n=e.rects.reference,i=e.rects.popper,s=e.modifiersData.preventOverflow,o=nn(e,{elementContext:"reference"}),a=nn(e,{altBoundary:!0}),l=ci(o,n),c=ci(a,i,s),u=ui(l),p=ui(c);e.modifiersData[t]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}const Aa={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ea};function Ra(r,e,t){var n=Ve(r),i=[ge,me].indexOf(n)>=0?-1:1,s=typeof t=="function"?t(Object.assign({},e,{placement:r})):t,o=s[0],a=s[1];return o=o||0,a=(a||0)*i,[ge,De].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Oa(r){var e=r.state,t=r.options,n=r.name,i=t.offset,s=i===void 0?[0,0]:i,o=ps.reduce(function(u,p){return u[p]=Ra(p,e.rects,s),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=o}const Sa={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Oa};function Ca(r){var e=r.state,t=r.name;e.modifiersData[t]=vs({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const $a={name:"popperOffsets",enabled:!0,phase:"read",fn:Ca,data:{}};function La(r){return r==="x"?"y":"x"}function Na(r){var e=r.state,t=r.options,n=r.name,i=t.mainAxis,s=i===void 0?!0:i,o=t.altAxis,a=o===void 0?!1:o,l=t.boundary,c=t.rootBoundary,u=t.altBoundary,p=t.padding,f=t.tether,m=f===void 0?!0:f,v=t.tetherOffset,b=v===void 0?0:v,d=nn(e,{boundary:l,rootBoundary:c,padding:p,altBoundary:u}),w=Ve(e.placement),y=Nt(e.placement),x=!y,E=kr(w),R=La(E),D=e.modifiersData.popperOffsets,j=e.rects.reference,G=e.rects.popper,K=typeof b=="function"?b(Object.assign({},e.rects,{placement:e.placement})):b,U=typeof K=="number"?{mainAxis:K,altAxis:K}:Object.assign({mainAxis:0,altAxis:0},K),Q=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,V={x:0,y:0};if(D){if(s){var J,ue=E==="y"?me:ge,he=E==="y"?Pe:De,ee=E==="y"?"height":"width",ne=D[E],be=ne+d[ue],T=ne-d[he],P=m?-G[ee]/2:0,L=y===Ct?j[ee]:G[ee],Y=y===Ct?-G[ee]:-j[ee],$=e.elements.arrow,re=m&&$?xr($):{width:0,height:0},Oe=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:gs(),rt=Oe[ue],it=Oe[he],He=Zt(0,j[ee],re[ee]),wt=x?j[ee]/2-P-He-rt-U.mainAxis:L-He-rt-U.mainAxis,st=x?-j[ee]/2+P+He+it+U.mainAxis:Y+He+it+U.mainAxis,Me=e.elements.arrow&&on(e.elements.arrow),Dt=Me?E==="y"?Me.clientTop||0:Me.clientLeft||0:0,yt=(J=Q==null?void 0:Q[E])!=null?J:0,ot=ne+wt-yt-Dt,_t=ne+st-yt,ct=Zt(m?$n(be,ot):be,ne,m?dt(T,_t):T);D[E]=ct,V[E]=ct-ne}if(a){var Mt,cn=E==="x"?me:ge,Un=E==="x"?Pe:De,Ie=D[R],qe=R==="y"?"height":"width",Ze=Ie+d[cn],Ke=Ie-d[Un],vt=[me,ge].indexOf(w)!==-1,It=(Mt=Q==null?void 0:Q[R])!=null?Mt:0,Bt=vt?Ze:Ie-j[qe]-G[qe]-It+U.altAxis,xt=vt?Ie+j[qe]+G[qe]-It-U.altAxis:Ke,zt=m&&vt?ra(Bt,Ie,xt):Zt(m?Bt:Ze,Ie,m?xt:Ke);D[R]=zt,V[R]=zt-Ie}e.modifiersData[n]=V}}const Pa={name:"preventOverflow",enabled:!0,phase:"main",fn:Na,requiresIfExists:["offset"]};function Da(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function Ma(r){return r===xe(r)||!Ne(r)?Tr(r):Da(r)}function Ia(r){var e=r.getBoundingClientRect(),t=$t(e.width)/r.offsetWidth||1,n=$t(e.height)/r.offsetHeight||1;return t!==1||n!==1}function Ba(r,e,t){t===void 0&&(t=!1);var n=Ne(e),i=Ne(e)&&Ia(e),s=lt(e),o=Lt(r,i,t),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!t)&&((Ge(e)!=="body"||Ar(s))&&(a=Ma(e)),Ne(e)?(l=Lt(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=Er(s))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function za(r){var e=new Map,t=new Set,n=[];r.forEach(function(s){e.set(s.name,s)});function i(s){t.add(s.name);var o=[].concat(s.requires||[],s.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var l=e.get(a);l&&i(l)}}),n.push(s)}return r.forEach(function(s){t.has(s.name)||i(s)}),n}function Ua(r){var e=za(r);return Ko.reduce(function(t,n){return t.concat(e.filter(function(i){return i.phase===n}))},[])}function Fa(r){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(r())})})),e}}function Ha(r){var e=r.reduce(function(t,n){var i=t[n.name];return t[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var fi={placement:"bottom",modifiers:[],strategy:"absolute"};function hi(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function qa(r){r===void 0&&(r={});var e=r,t=e.defaultModifiers,n=t===void 0?[]:t,i=e.defaultOptions,s=i===void 0?fi:i;return function(a,l,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},fi,s),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},p=[],f=!1,m={state:u,setOptions:function(w){var y=typeof w=="function"?w(u.options):w;b(),u.options=Object.assign({},s,u.options,y),u.scrollParents={reference:mt(a)?Kt(a):a.contextElement?Kt(a.contextElement):[],popper:Kt(l)};var x=Ua(Ha([].concat(n,u.options.modifiers)));return u.orderedModifiers=x.filter(function(E){return E.enabled}),v(),m.update()},forceUpdate:function(){if(!f){var w=u.elements,y=w.reference,x=w.popper;if(hi(y,x)){u.rects={reference:Ba(y,on(x),u.options.strategy==="fixed"),popper:xr(x)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(U){return u.modifiersData[U.name]=Object.assign({},U.data)});for(var E=0;E<u.orderedModifiers.length;E++){if(u.reset===!0){u.reset=!1,E=-1;continue}var R=u.orderedModifiers[E],D=R.fn,j=R.options,G=j===void 0?{}:j,K=R.name;typeof D=="function"&&(u=D({state:u,options:G,name:K,instance:m})||u)}}}},update:Fa(function(){return new Promise(function(d){m.forceUpdate(),d(u)})}),destroy:function(){b(),f=!0}};if(!hi(a,l))return m;m.setOptions(c).then(function(d){!f&&c.onFirstUpdate&&c.onFirstUpdate(d)});function v(){u.orderedModifiers.forEach(function(d){var w=d.name,y=d.options,x=y===void 0?{}:y,E=d.effect;if(typeof E=="function"){var R=E({state:u,name:w,instance:m,options:x}),D=function(){};p.push(R||D)}})}function b(){p.forEach(function(d){return d()}),p=[]}return m}}var ja=[pa,$a,fa,ea,Sa,Ta,Pa,aa,Aa],Wa=qa({defaultModifiers:ja});function Va(r){let e=null,t,n,i=r;const s=()=>{t!==void 0&&n!==void 0&&(e=Wa(t,n,i))},o=()=>{e!==null&&(e.destroy(),e=null)},a=u=>"subscribe"in u?(l(u),{}):(t=u,s(),{destroy(){o()}}),l=u=>{const p=u.subscribe(f=>{t===void 0?(t=f,s()):(Object.assign(t,f),e==null||e.update())});us(p)};return[a,(u,p)=>(n=u,i={...r,...p},s(),{update(f){i={...r,...f},e==null||e.setOptions(i)},destroy(){o()}}),()=>e]}function Ya(r){To(r,"svelte-q1pe4",'#tooltip[data-popper-placement^="top"].svelte-q1pe4>.arrow.svelte-q1pe4{border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--surface-900);bottom:-5px;left:calc(50% - 5px)}#tooltip[data-popper-placement^="bottom"].svelte-q1pe4>.arrow.svelte-q1pe4{border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid var(--surface-900);top:-5px;left:calc(50% - 5px)}#tooltip[data-popper-placement^="left"].svelte-q1pe4>.arrow.svelte-q1pe4{border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid var(--surface-900);right:-5px;top:calc(50% - 5px)}#tooltip[data-popper-placement^="right"].svelte-q1pe4>.arrow.svelte-q1pe4{border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid var(--surface-900);left:-5px;top:calc(50% - 5px)}')}const Ga=r=>({}),pi=r=>({}),Xa=r=>({}),di=r=>({});function mi(r){let e,t,n,i,s,o,a;const l=r[6].tooltip,c=rs(l,r,r[5],pi);return{c(){e=A("div"),t=A("span"),c&&c.c(),n=H(),i=A("div"),g(t,"class","text-label"),g(i,"id","arrow"),g(i,"class","arrow absolute w-0 h-0 svelte-q1pe4"),g(e,"id","tooltip"),g(e,"class","z-10 bg-surface-900 rounded text-white p-1 px-3 drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)] svelte-q1pe4"),g(e,"data-popper-placement",r[0])},m(u,p){I(u,e,p),_(e,t),c&&c.m(t,null),_(e,n),_(e,i),s=!0,o||(a=ls(r[2].call(null,e,r[4])),o=!0)},p(u,p){c&&c.p&&(!s||p&32)&&os(c,l,u,u[5],s?ss(l,u[5],p,Ga):as(u[5]),pi),(!s||p&1)&&g(e,"data-popper-placement",u[0])},i(u){s||(C(c,u),s=!0)},o(u){z(c,u),s=!1},d(u){u&&N(e),c&&c.d(u),o=!1,a()}}}function Za(r){let e,t,n,i,s,o;const a=r[6].subject,l=rs(a,r,r[5],di);let c=r[3]&&mi(r);return{c(){e=A("div"),l&&l.c(),t=H(),c&&c.c(),n=Mn()},m(u,p){I(u,e,p),l&&l.m(e,null),I(u,t,p),c&&c.m(u,p),I(u,n,p),i=!0,s||(o=[ls(r[1].call(null,e)),se(e,"mouseenter",r[7]),se(e,"mouseleave",r[8]),se(e,"click",r[9])],s=!0)},p(u,[p]){l&&l.p&&(!i||p&32)&&os(l,a,u,u[5],i?ss(a,u[5],p,Xa):as(u[5]),di),u[3]?c?(c.p(u,p),p&8&&C(c,1)):(c=mi(u),c.c(),C(c,1),c.m(n.parentNode,n)):c&&($e(),z(c,1,1,()=>{c=null}),Le())},i(u){i||(C(l,u),C(c),i=!0)},o(u){z(l,u),z(c),i=!1},d(u){u&&(N(e),N(t),N(n)),l&&l.d(u),c&&c.d(u),s=!1,nt(o)}}}function Ka(r,e,t){let{$$slots:n={},$$scope:i}=e,{placement:s="top"}=e,o,a;const l={modifiers:[{name:"offset",options:{offset:[0,8]}}]};let c=!1;const u=()=>t(3,c=!0),p=()=>t(3,c=!1),f=()=>{t(3,c=!1),setTimeout(()=>{t(3,c=!0)},0)};return r.$$set=m=>{"placement"in m&&t(0,s=m.placement),"$$scope"in m&&t(5,i=m.$$scope)},r.$$.update=()=>{r.$$.dirty&1&&t(1,[o,a]=Va({placement:s}),o,(t(2,a),t(0,s)))},[s,o,a,c,l,i,n,u,p,f]}class xs extends Re{constructor(e){super(),Ee(this,e,Ka,Za,Te,{placement:0},Ya)}get placement(){return this.$$.ctx[0]}set placement(e){this.$$set({placement:e}),te()}}Ae(xs,{placement:{}},["subject","tooltip"],[],!0);function gi(r){let e,t,n,i,s,o,a=r[7]&&bi(r);return{c(){e=A("div"),t=A("label"),n=Ue(r[1]),s=H(),a&&a.c(),g(t,"for",i="input_$"+r[3]),g(t,"class","block text-label"),g(e,"class","flex items-center space-x-2")},m(l,c){I(l,e,c),_(e,t),_(t,n),_(e,s),a&&a.m(e,null),o=!0},p(l,c){(!o||c&2)&&et(n,l[1]),(!o||c&8&&i!==(i="input_$"+l[3]))&&g(t,"for",i),l[7]?a?(a.p(l,c),c&128&&C(a,1)):(a=bi(l),a.c(),C(a,1),a.m(e,null)):a&&($e(),z(a,1,1,()=>{a=null}),Le())},i(l){o||(C(a),o=!0)},o(l){z(a),o=!1},d(l){l&&N(e),a&&a.d()}}}function bi(r){let e,t;return e=new xs({props:{$$slots:{tooltip:[Ja],subject:[Qa]},$$scope:{ctx:r}}}),{c(){Ce(e.$$.fragment)},m(n,i){_e(e,n,i),t=!0},p(n,i){const s={};i&8320&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){z(e.$$.fragment,n),t=!1},d(n){ve(e,n)}}}function Qa(r){let e;return{c(){e=A("span"),e.innerHTML='<i class="fa fa-circle-question text-surface-500"></i>',g(e,"slot","subject")},m(t,n){I(t,e,n)},p:B,d(t){t&&N(e)}}}function Ja(r){let e,t;return{c(){e=A("span"),t=Ue(r[7]),g(e,"slot","tooltip")},m(n,i){I(n,e,i),_(e,t)},p(n,i){i&128&&et(t,n[7])},d(n){n&&N(e)}}}function wi(r){let e,t;return{c(){e=A("p"),t=Ue(r[4]),g(e,"class","text-label text-danger-500")},m(n,i){I(n,e,i),_(e,t)},p(n,i){i&16&&et(t,n[4])},d(n){n&&N(e)}}}function el(r){let e,t,n,i,s,o,a,l,c,u,p,f=r[1]&&gi(r),m=r[8]&&r[4]&&wi(r);return{c(){e=A("div"),f&&f.c(),t=H(),n=A("div"),i=A("input"),l=H(),m&&m.c(),i.disabled=r[6],i.readOnly=r[5],g(i,"type","text"),g(i,"id",s="input_$"+r[3]),g(i,"placeholder",o=r[2]||r[1]),g(i,"class",a="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(r[8]?"ring-danger-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"),g(i,"name",r[3]),g(n,"class","relative rounded-md"),g(e,"class","flex flex-col w-full space-y-2 text-surface-900")},m(v,b){I(v,e,b),f&&f.m(e,null),_(e,t),_(e,n),_(n,i),at(i,r[0]),_(e,l),m&&m.m(e,null),c=!0,u||(p=se(i,"input",r[11]),u=!0)},p(v,[b]){v[1]?f?(f.p(v,b),b&2&&C(f,1)):(f=gi(v),f.c(),C(f,1),f.m(e,t)):f&&($e(),z(f,1,1,()=>{f=null}),Le()),(!c||b&64)&&(i.disabled=v[6]),(!c||b&32)&&(i.readOnly=v[5]),(!c||b&8&&s!==(s="input_$"+v[3]))&&g(i,"id",s),(!c||b&6&&o!==(o=v[2]||v[1]))&&g(i,"placeholder",o),(!c||b&256&&a!==(a="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(v[8]?"ring-danger-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"))&&g(i,"class",a),(!c||b&8)&&g(i,"name",v[3]),b&1&&i.value!==v[0]&&at(i,v[0]),v[8]&&v[4]?m?m.p(v,b):(m=wi(v),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i(v){c||(C(f),c=!0)},o(v){z(f),c=!1},d(v){v&&N(e),f&&f.d(),m&&m.d(),u=!1,p()}}}function tl(r,e,t){let n,i,{label:s}=e,{placeholder:o=""}=e,{name:a}=e,{value:l}=e,{regex:c=""}=e,{validationMessage:u=""}=e,{readonly:p=!1}=e,{disabled:f=!1}=e,{tooltipText:m=""}=e;const v=(d,w)=>w?!d.test(w):!1;function b(){l=this.value,t(0,l)}return r.$$set=d=>{"label"in d&&t(1,s=d.label),"placeholder"in d&&t(2,o=d.placeholder),"name"in d&&t(3,a=d.name),"value"in d&&t(0,l=d.value),"regex"in d&&t(9,c=d.regex),"validationMessage"in d&&t(4,u=d.validationMessage),"readonly"in d&&t(5,p=d.readonly),"disabled"in d&&t(6,f=d.disabled),"tooltipText"in d&&t(7,m=d.tooltipText)},r.$$.update=()=>{r.$$.dirty&512&&t(10,n=new RegExp(c)),r.$$.dirty&1025&&t(8,i=v(n,l))},[l,s,o,a,u,p,f,m,i,c,n,b]}class ks extends Re{constructor(e){super(),Ee(this,e,tl,el,Te,{label:1,placeholder:2,name:3,value:0,regex:9,validationMessage:4,readonly:5,disabled:6,tooltipText:7})}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),te()}get placeholder(){return this.$$.ctx[2]}set placeholder(e){this.$$set({placeholder:e}),te()}get name(){return this.$$.ctx[3]}set name(e){this.$$set({name:e}),te()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),te()}get regex(){return this.$$.ctx[9]}set regex(e){this.$$set({regex:e}),te()}get validationMessage(){return this.$$.ctx[4]}set validationMessage(e){this.$$set({validationMessage:e}),te()}get readonly(){return this.$$.ctx[5]}set readonly(e){this.$$set({readonly:e}),te()}get disabled(){return this.$$.ctx[6]}set disabled(e){this.$$set({disabled:e}),te()}get tooltipText(){return this.$$.ctx[7]}set tooltipText(e){this.$$set({tooltipText:e}),te()}}Ae(ks,{label:{},placeholder:{},name:{},value:{},regex:{},validationMessage:{},readonly:{type:"Boolean"},disabled:{type:"Boolean"},tooltipText:{}},[],[],!0);/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */const{entries:Ts,setPrototypeOf:yi,isFrozen:nl,getPrototypeOf:rl,getOwnPropertyDescriptor:il}=Object;let{freeze:fe,seal:Fe,create:Es}=Object,{apply:sr,construct:or}=typeof Reflect<"u"&&Reflect;fe||(fe=function(e){return e});Fe||(Fe=function(e){return e});sr||(sr=function(e,t,n){return e.apply(t,n)});or||(or=function(e,t){return new e(...t)});const mn=ke(Array.prototype.forEach),_i=ke(Array.prototype.pop),qt=ke(Array.prototype.push),Rn=ke(String.prototype.toLowerCase),Yn=ke(String.prototype.toString),sl=ke(String.prototype.match),jt=ke(String.prototype.replace),ol=ke(String.prototype.indexOf),al=ke(String.prototype.trim),Be=ke(Object.prototype.hasOwnProperty),we=ke(RegExp.prototype.test),Wt=ll(TypeError);function ke(r){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return sr(r,e,n)}}function ll(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return or(r,t)}}function F(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Rn;yi&&yi(r,null);let n=e.length;for(;n--;){let i=e[n];if(typeof i=="string"){const s=t(i);s!==i&&(nl(e)||(e[n]=s),i=s)}r[i]=!0}return r}function cl(r){for(let e=0;e<r.length;e++)Be(r,e)||(r[e]=null);return r}function ht(r){const e=Es(null);for(const[t,n]of Ts(r))Be(r,t)&&(Array.isArray(n)?e[t]=cl(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=ht(n):e[t]=n);return e}function gn(r,e){for(;r!==null;){const n=il(r,e);if(n){if(n.get)return ke(n.get);if(typeof n.value=="function")return ke(n.value)}r=rl(r)}function t(){return null}return t}const vi=fe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Gn=fe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Xn=fe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ul=fe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Zn=fe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),fl=fe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),xi=fe(["#text"]),ki=fe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Kn=fe(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ti=fe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),bn=fe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),hl=Fe(/\{\{[\w\W]*|[\w\W]*\}\}/gm),pl=Fe(/<%[\w\W]*|[\w\W]*%>/gm),dl=Fe(/\${[\w\W]*}/gm),ml=Fe(/^data-[\-\w.\u00B7-\uFFFF]/),gl=Fe(/^aria-[\-\w]+$/),As=Fe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),bl=Fe(/^(?:\w+script|data):/i),wl=Fe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Rs=Fe(/^html$/i);var Ei=Object.freeze({__proto__:null,MUSTACHE_EXPR:hl,ERB_EXPR:pl,TMPLIT_EXPR:dl,DATA_ATTR:ml,ARIA_ATTR:gl,IS_ALLOWED_URI:As,IS_SCRIPT_OR_DATA:bl,ATTR_WHITESPACE:wl,DOCTYPE_NAME:Rs});const yl=function(){return typeof window>"u"?null:window},_l=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(n=t.getAttribute(i));const s="dompurify"+(n?"#"+n:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function Os(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:yl();const e=S=>Os(S);if(e.version="3.0.9",e.removed=[],!r||!r.document||r.document.nodeType!==9)return e.isSupported=!1,e;let{document:t}=r;const n=t,i=n.currentScript,{DocumentFragment:s,HTMLTemplateElement:o,Node:a,Element:l,NodeFilter:c,NamedNodeMap:u=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:p,DOMParser:f,trustedTypes:m}=r,v=l.prototype,b=gn(v,"cloneNode"),d=gn(v,"nextSibling"),w=gn(v,"childNodes"),y=gn(v,"parentNode");if(typeof o=="function"){const S=t.createElement("template");S.content&&S.content.ownerDocument&&(t=S.content.ownerDocument)}let x,E="";const{implementation:R,createNodeIterator:D,createDocumentFragment:j,getElementsByTagName:G}=t,{importNode:K}=n;let U={};e.isSupported=typeof Ts=="function"&&typeof y=="function"&&R&&R.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Q,ERB_EXPR:V,TMPLIT_EXPR:J,DATA_ATTR:ue,ARIA_ATTR:he,IS_SCRIPT_OR_DATA:ee,ATTR_WHITESPACE:ne}=Ei;let{IS_ALLOWED_URI:be}=Ei,T=null;const P=F({},[...vi,...Gn,...Xn,...Zn,...xi]);let L=null;const Y=F({},[...ki,...Kn,...Ti,...bn]);let $=Object.seal(Es(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),re=null,Oe=null,rt=!0,it=!0,He=!1,wt=!0,st=!1,Me=!1,Dt=!1,yt=!1,ot=!1,_t=!1,ct=!1,Mt=!0,cn=!1;const Un="user-content-";let Ie=!0,qe=!1,Ze={},Ke=null;const vt=F({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let It=null;const Bt=F({},["audio","video","img","source","image","track"]);let xt=null;const zt=F({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),un="http://www.w3.org/1998/Math/MathML",fn="http://www.w3.org/2000/svg",Qe="http://www.w3.org/1999/xhtml";let kt=Qe,Fn=!1,Hn=null;const lo=F({},[un,fn,Qe],Yn);let Ut=null;const co=["application/xhtml+xml","text/html"],uo="text/html";let ae=null,Tt=null;const fo=t.createElement("form"),Ur=function(h){return h instanceof RegExp||h instanceof Function},qn=function(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Tt&&Tt===h)){if((!h||typeof h!="object")&&(h={}),h=ht(h),Ut=co.indexOf(h.PARSER_MEDIA_TYPE)===-1?uo:h.PARSER_MEDIA_TYPE,ae=Ut==="application/xhtml+xml"?Yn:Rn,T=Be(h,"ALLOWED_TAGS")?F({},h.ALLOWED_TAGS,ae):P,L=Be(h,"ALLOWED_ATTR")?F({},h.ALLOWED_ATTR,ae):Y,Hn=Be(h,"ALLOWED_NAMESPACES")?F({},h.ALLOWED_NAMESPACES,Yn):lo,xt=Be(h,"ADD_URI_SAFE_ATTR")?F(ht(zt),h.ADD_URI_SAFE_ATTR,ae):zt,It=Be(h,"ADD_DATA_URI_TAGS")?F(ht(Bt),h.ADD_DATA_URI_TAGS,ae):Bt,Ke=Be(h,"FORBID_CONTENTS")?F({},h.FORBID_CONTENTS,ae):vt,re=Be(h,"FORBID_TAGS")?F({},h.FORBID_TAGS,ae):{},Oe=Be(h,"FORBID_ATTR")?F({},h.FORBID_ATTR,ae):{},Ze=Be(h,"USE_PROFILES")?h.USE_PROFILES:!1,rt=h.ALLOW_ARIA_ATTR!==!1,it=h.ALLOW_DATA_ATTR!==!1,He=h.ALLOW_UNKNOWN_PROTOCOLS||!1,wt=h.ALLOW_SELF_CLOSE_IN_ATTR!==!1,st=h.SAFE_FOR_TEMPLATES||!1,Me=h.WHOLE_DOCUMENT||!1,ot=h.RETURN_DOM||!1,_t=h.RETURN_DOM_FRAGMENT||!1,ct=h.RETURN_TRUSTED_TYPE||!1,yt=h.FORCE_BODY||!1,Mt=h.SANITIZE_DOM!==!1,cn=h.SANITIZE_NAMED_PROPS||!1,Ie=h.KEEP_CONTENT!==!1,qe=h.IN_PLACE||!1,be=h.ALLOWED_URI_REGEXP||As,kt=h.NAMESPACE||Qe,$=h.CUSTOM_ELEMENT_HANDLING||{},h.CUSTOM_ELEMENT_HANDLING&&Ur(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&($.tagNameCheck=h.CUSTOM_ELEMENT_HANDLING.tagNameCheck),h.CUSTOM_ELEMENT_HANDLING&&Ur(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&($.attributeNameCheck=h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),h.CUSTOM_ELEMENT_HANDLING&&typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&($.allowCustomizedBuiltInElements=h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),st&&(it=!1),_t&&(ot=!0),Ze&&(T=F({},xi),L=[],Ze.html===!0&&(F(T,vi),F(L,ki)),Ze.svg===!0&&(F(T,Gn),F(L,Kn),F(L,bn)),Ze.svgFilters===!0&&(F(T,Xn),F(L,Kn),F(L,bn)),Ze.mathMl===!0&&(F(T,Zn),F(L,Ti),F(L,bn))),h.ADD_TAGS&&(T===P&&(T=ht(T)),F(T,h.ADD_TAGS,ae)),h.ADD_ATTR&&(L===Y&&(L=ht(L)),F(L,h.ADD_ATTR,ae)),h.ADD_URI_SAFE_ATTR&&F(xt,h.ADD_URI_SAFE_ATTR,ae),h.FORBID_CONTENTS&&(Ke===vt&&(Ke=ht(Ke)),F(Ke,h.FORBID_CONTENTS,ae)),Ie&&(T["#text"]=!0),Me&&F(T,["html","head","body"]),T.table&&(F(T,["tbody"]),delete re.tbody),h.TRUSTED_TYPES_POLICY){if(typeof h.TRUSTED_TYPES_POLICY.createHTML!="function")throw Wt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof h.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Wt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');x=h.TRUSTED_TYPES_POLICY,E=x.createHTML("")}else x===void 0&&(x=_l(m,i)),x!==null&&typeof E=="string"&&(E=x.createHTML(""));fe&&fe(h),Tt=h}},Fr=F({},["mi","mo","mn","ms","mtext"]),Hr=F({},["foreignobject","desc","title","annotation-xml"]),ho=F({},["title","style","font","a","script"]),qr=F({},[...Gn,...Xn,...ul]),jr=F({},[...Zn,...fl]),po=function(h){let k=y(h);(!k||!k.tagName)&&(k={namespaceURI:kt,tagName:"template"});const O=Rn(h.tagName),Z=Rn(k.tagName);return Hn[h.namespaceURI]?h.namespaceURI===fn?k.namespaceURI===Qe?O==="svg":k.namespaceURI===un?O==="svg"&&(Z==="annotation-xml"||Fr[Z]):!!qr[O]:h.namespaceURI===un?k.namespaceURI===Qe?O==="math":k.namespaceURI===fn?O==="math"&&Hr[Z]:!!jr[O]:h.namespaceURI===Qe?k.namespaceURI===fn&&!Hr[Z]||k.namespaceURI===un&&!Fr[Z]?!1:!jr[O]&&(ho[O]||!qr[O]):!!(Ut==="application/xhtml+xml"&&Hn[h.namespaceURI]):!1},ut=function(h){qt(e.removed,{element:h});try{h.parentNode.removeChild(h)}catch{h.remove()}},jn=function(h,k){try{qt(e.removed,{attribute:k.getAttributeNode(h),from:k})}catch{qt(e.removed,{attribute:null,from:k})}if(k.removeAttribute(h),h==="is"&&!L[h])if(ot||_t)try{ut(k)}catch{}else try{k.setAttribute(h,"")}catch{}},Wr=function(h){let k=null,O=null;if(yt)h="<remove></remove>"+h;else{const ce=sl(h,/^[\r\n\t ]+/);O=ce&&ce[0]}Ut==="application/xhtml+xml"&&kt===Qe&&(h='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+h+"</body></html>");const Z=x?x.createHTML(h):h;if(kt===Qe)try{k=new f().parseFromString(Z,Ut)}catch{}if(!k||!k.documentElement){k=R.createDocument(kt,"template",null);try{k.documentElement.innerHTML=Fn?E:Z}catch{}}const le=k.body||k.documentElement;return h&&O&&le.insertBefore(t.createTextNode(O),le.childNodes[0]||null),kt===Qe?G.call(k,Me?"html":"body")[0]:Me?k.documentElement:le},Vr=function(h){return D.call(h.ownerDocument||h,h,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT,null)},mo=function(h){return h instanceof p&&(typeof h.nodeName!="string"||typeof h.textContent!="string"||typeof h.removeChild!="function"||!(h.attributes instanceof u)||typeof h.removeAttribute!="function"||typeof h.setAttribute!="function"||typeof h.namespaceURI!="string"||typeof h.insertBefore!="function"||typeof h.hasChildNodes!="function")},Yr=function(h){return typeof a=="function"&&h instanceof a},Je=function(h,k,O){U[h]&&mn(U[h],Z=>{Z.call(e,k,O,Tt)})},Gr=function(h){let k=null;if(Je("beforeSanitizeElements",h,null),mo(h))return ut(h),!0;const O=ae(h.nodeName);if(Je("uponSanitizeElement",h,{tagName:O,allowedTags:T}),h.hasChildNodes()&&!Yr(h.firstElementChild)&&we(/<[/\w]/g,h.innerHTML)&&we(/<[/\w]/g,h.textContent))return ut(h),!0;if(!T[O]||re[O]){if(!re[O]&&Zr(O)&&($.tagNameCheck instanceof RegExp&&we($.tagNameCheck,O)||$.tagNameCheck instanceof Function&&$.tagNameCheck(O)))return!1;if(Ie&&!Ke[O]){const Z=y(h)||h.parentNode,le=w(h)||h.childNodes;if(le&&Z){const ce=le.length;for(let pe=ce-1;pe>=0;--pe)Z.insertBefore(b(le[pe],!0),d(h))}}return ut(h),!0}return h instanceof l&&!po(h)||(O==="noscript"||O==="noembed"||O==="noframes")&&we(/<\/no(script|embed|frames)/i,h.innerHTML)?(ut(h),!0):(st&&h.nodeType===3&&(k=h.textContent,mn([Q,V,J],Z=>{k=jt(k,Z," ")}),h.textContent!==k&&(qt(e.removed,{element:h.cloneNode()}),h.textContent=k)),Je("afterSanitizeElements",h,null),!1)},Xr=function(h,k,O){if(Mt&&(k==="id"||k==="name")&&(O in t||O in fo))return!1;if(!(it&&!Oe[k]&&we(ue,k))){if(!(rt&&we(he,k))){if(!L[k]||Oe[k]){if(!(Zr(h)&&($.tagNameCheck instanceof RegExp&&we($.tagNameCheck,h)||$.tagNameCheck instanceof Function&&$.tagNameCheck(h))&&($.attributeNameCheck instanceof RegExp&&we($.attributeNameCheck,k)||$.attributeNameCheck instanceof Function&&$.attributeNameCheck(k))||k==="is"&&$.allowCustomizedBuiltInElements&&($.tagNameCheck instanceof RegExp&&we($.tagNameCheck,O)||$.tagNameCheck instanceof Function&&$.tagNameCheck(O))))return!1}else if(!xt[k]){if(!we(be,jt(O,ne,""))){if(!((k==="src"||k==="xlink:href"||k==="href")&&h!=="script"&&ol(O,"data:")===0&&It[h])){if(!(He&&!we(ee,jt(O,ne,"")))){if(O)return!1}}}}}}return!0},Zr=function(h){return h!=="annotation-xml"&&h.indexOf("-")>0},Kr=function(h){Je("beforeSanitizeAttributes",h,null);const{attributes:k}=h;if(!k)return;const O={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L};let Z=k.length;for(;Z--;){const le=k[Z],{name:ce,namespaceURI:pe,value:ft}=le,Ft=ae(ce);let de=ce==="value"?ft:al(ft);if(O.attrName=Ft,O.attrValue=de,O.keepAttr=!0,O.forceKeepAttr=void 0,Je("uponSanitizeAttribute",h,O),de=O.attrValue,O.forceKeepAttr||(jn(ce,h),!O.keepAttr))continue;if(!wt&&we(/\/>/i,de)){jn(ce,h);continue}st&&mn([Q,V,J],Jr=>{de=jt(de,Jr," ")});const Qr=ae(h.nodeName);if(Xr(Qr,Ft,de)){if(cn&&(Ft==="id"||Ft==="name")&&(jn(ce,h),de=Un+de),x&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!pe)switch(m.getAttributeType(Qr,Ft)){case"TrustedHTML":{de=x.createHTML(de);break}case"TrustedScriptURL":{de=x.createScriptURL(de);break}}try{pe?h.setAttributeNS(pe,ce,de):h.setAttribute(ce,de),_i(e.removed)}catch{}}}Je("afterSanitizeAttributes",h,null)},go=function S(h){let k=null;const O=Vr(h);for(Je("beforeSanitizeShadowDOM",h,null);k=O.nextNode();)Je("uponSanitizeShadowNode",k,null),!Gr(k)&&(k.content instanceof s&&S(k.content),Kr(k));Je("afterSanitizeShadowDOM",h,null)};return e.sanitize=function(S){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=null,O=null,Z=null,le=null;if(Fn=!S,Fn&&(S="<!-->"),typeof S!="string"&&!Yr(S))if(typeof S.toString=="function"){if(S=S.toString(),typeof S!="string")throw Wt("dirty is not a string, aborting")}else throw Wt("toString is not a function");if(!e.isSupported)return S;if(Dt||qn(h),e.removed=[],typeof S=="string"&&(qe=!1),qe){if(S.nodeName){const ft=ae(S.nodeName);if(!T[ft]||re[ft])throw Wt("root node is forbidden and cannot be sanitized in-place")}}else if(S instanceof a)k=Wr("<!---->"),O=k.ownerDocument.importNode(S,!0),O.nodeType===1&&O.nodeName==="BODY"||O.nodeName==="HTML"?k=O:k.appendChild(O);else{if(!ot&&!st&&!Me&&S.indexOf("<")===-1)return x&&ct?x.createHTML(S):S;if(k=Wr(S),!k)return ot?null:ct?E:""}k&&yt&&ut(k.firstChild);const ce=Vr(qe?S:k);for(;Z=ce.nextNode();)Gr(Z)||(Z.content instanceof s&&go(Z.content),Kr(Z));if(qe)return S;if(ot){if(_t)for(le=j.call(k.ownerDocument);k.firstChild;)le.appendChild(k.firstChild);else le=k;return(L.shadowroot||L.shadowrootmode)&&(le=K.call(n,le,!0)),le}let pe=Me?k.outerHTML:k.innerHTML;return Me&&T["!doctype"]&&k.ownerDocument&&k.ownerDocument.doctype&&k.ownerDocument.doctype.name&&we(Rs,k.ownerDocument.doctype.name)&&(pe="<!DOCTYPE "+k.ownerDocument.doctype.name+`>
`+pe),st&&mn([Q,V,J],ft=>{pe=jt(pe,ft," ")}),x&&ct?x.createHTML(pe):pe},e.setConfig=function(){let S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qn(S),Dt=!0},e.clearConfig=function(){Tt=null,Dt=!1},e.isValidAttribute=function(S,h,k){Tt||qn({});const O=ae(S),Z=ae(h);return Xr(O,Z,k)},e.addHook=function(S,h){typeof h=="function"&&(U[S]=U[S]||[],qt(U[S],h))},e.removeHook=function(S){if(U[S])return _i(U[S])},e.removeHooks=function(S){U[S]&&(U[S]=[])},e.removeAllHooks=function(){U={}},e}var ar=Os();function Rr(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let bt=Rr();function Ss(r){bt=r}const Cs=/[&<>"']/,vl=new RegExp(Cs.source,"g"),$s=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,xl=new RegExp($s.source,"g"),kl={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ai=r=>kl[r];function ye(r,e){if(e){if(Cs.test(r))return r.replace(vl,Ai)}else if($s.test(r))return r.replace(xl,Ai);return r}const Tl=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function El(r){return r.replace(Tl,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Al=/(^|[^\[])\^/g;function X(r,e){let t=typeof r=="string"?r:r.source;e=e||"";const n={replace:(i,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(Al,"$1"),t=t.replace(i,o),n},getRegex:()=>new RegExp(t,e)};return n}function Ri(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const Qt={exec:()=>null};function Oi(r,e){const t=r.replace(/\|/g,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function wn(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return r.slice(0,n-i)}function Rl(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return-1}function Si(r,e,t,n){const i=e.href,s=e.title?ye(e.title):null,o=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:t,href:i,title:s,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,a}return{type:"image",raw:t,href:i,title:s,text:ye(o)}}function Ol(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[o]=s;return o.length>=n.length?i.slice(n.length):i}).join(`
`)}class Ln{constructor(e){M(this,"options");M(this,"rules");M(this,"lexer");this.options=e||bt}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:wn(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Ol(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=wn(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=wn(t[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const i=n.length>1,s={type:"list",raw:"",ordered:i,start:i?+n.slice(0,-1):"",loose:!1,items:[]};n=i?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=i?n:"[*+-]");const o=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",c=!1;for(;e;){let u=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let p=t[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),f=e.split(`
`,1)[0],m=0;this.options.pedantic?(m=2,l=p.trimStart()):(m=t[2].search(/[^ ]/),m=m>4?1:m,l=p.slice(m),m+=t[1].length);let v=!1;if(!p&&/^ *$/.test(f)&&(a+=f+`
`,e=e.substring(f.length+1),u=!0),!u){const w=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),y=new RegExp(`^ {0,${Math.min(3,m-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),x=new RegExp(`^ {0,${Math.min(3,m-1)}}(?:\`\`\`|~~~)`),E=new RegExp(`^ {0,${Math.min(3,m-1)}}#`);for(;e;){const R=e.split(`
`,1)[0];if(f=R,this.options.pedantic&&(f=f.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),x.test(f)||E.test(f)||w.test(f)||y.test(e))break;if(f.search(/[^ ]/)>=m||!f.trim())l+=`
`+f.slice(m);else{if(v||p.search(/[^ ]/)>=4||x.test(p)||E.test(p)||y.test(p))break;l+=`
`+f}!v&&!f.trim()&&(v=!0),a+=R+`
`,e=e.substring(R.length+1),p=f.slice(m)}}s.loose||(c?s.loose=!0:/\n *\n *$/.test(a)&&(c=!0));let b=null,d;this.options.gfm&&(b=/^\[[ xX]\] /.exec(l),b&&(d=b[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:a,task:!!b,checked:d,loose:!1,text:l,tokens:[]}),s.raw+=a}s.items[s.items.length-1].raw=a.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const p=s.items[u].tokens.filter(m=>m.type==="space"),f=p.length>0&&p.some(m=>/\n.*\n/.test(m.raw));s.loose=f}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=Oi(t[1]),i=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===i.length){for(const a of i)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of n)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of s)o.rows.push(Oi(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:ye(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=wn(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Rl(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);o&&(i=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),Si(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const i=(n[2]||n[1]).replace(/\s+/g," "),s=t[i.toLowerCase()];if(!s){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Si(n,s,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...i[0]].length-1;let a,l,c=o,u=0;const p=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,t=t.slice(-1*e.length+o);(i=p.exec(t))!=null;){if(a=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!a)continue;if(l=[...a].length,i[3]||i[4]){c+=l;continue}else if((i[5]||i[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const f=[...i[0]][0].length,m=e.slice(0,o+i.index+f+l);if(Math.min(o,l)%2){const b=m.slice(1,-1);return{type:"em",raw:m,text:b,tokens:this.lexer.inlineTokens(b)}}const v=m.slice(2,-2);return{type:"strong",raw:m,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=ye(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,i;return t[2]==="@"?(n=ye(t[1]),i="mailto:"+n):(n=ye(t[1]),i=n),{type:"link",raw:t[0],text:n,href:i,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let i,s;if(t[2]==="@")i=ye(t[0]),s="mailto:"+i;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);i=ye(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=ye(t[0]),{type:"text",raw:t[0],text:n}}}}const Sl=/^(?: *(?:\n|$))+/,Cl=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,$l=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,an=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ll=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ls=/(?:[*+-]|\d{1,9}[.)])/,Ns=X(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Ls).getRegex(),Or=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Nl=/^[^\n]+/,Sr=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Pl=X(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Sr).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Dl=X(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ls).getRegex(),Bn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Cr=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ml=X("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Cr).replace("tag",Bn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ps=X(Or).replace("hr",an).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bn).getRegex(),Il=X(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ps).getRegex(),$r={blockquote:Il,code:Cl,def:Pl,fences:$l,heading:Ll,hr:an,html:Ml,lheading:Ns,list:Dl,newline:Sl,paragraph:Ps,table:Qt,text:Nl},Ci=X("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",an).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bn).getRegex(),Bl={...$r,table:Ci,paragraph:X(Or).replace("hr",an).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ci).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bn).getRegex()},zl={...$r,html:X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Cr).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Qt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:X(Or).replace("hr",an).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ns).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ds=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ul=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ms=/^( {2,}|\\)\n(?!\s*$)/,Fl=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ln="\\p{P}\\p{S}",Hl=X(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ln).getRegex(),ql=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,jl=X(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ln).getRegex(),Wl=X("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ln).getRegex(),Vl=X("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ln).getRegex(),Yl=X(/\\([punct])/,"gu").replace(/punct/g,ln).getRegex(),Gl=X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Xl=X(Cr).replace("(?:-->|$)","-->").getRegex(),Zl=X("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Xl).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Nn=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Kl=X(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Nn).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Is=X(/^!?\[(label)\]\[(ref)\]/).replace("label",Nn).replace("ref",Sr).getRegex(),Bs=X(/^!?\[(ref)\](?:\[\])?/).replace("ref",Sr).getRegex(),Ql=X("reflink|nolink(?!\\()","g").replace("reflink",Is).replace("nolink",Bs).getRegex(),Lr={_backpedal:Qt,anyPunctuation:Yl,autolink:Gl,blockSkip:ql,br:Ms,code:Ul,del:Qt,emStrongLDelim:jl,emStrongRDelimAst:Wl,emStrongRDelimUnd:Vl,escape:Ds,link:Kl,nolink:Bs,punctuation:Hl,reflink:Is,reflinkSearch:Ql,tag:Zl,text:Fl,url:Qt},Jl={...Lr,link:X(/^!?\[(label)\]\((.*?)\)/).replace("label",Nn).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Nn).getRegex()},lr={...Lr,escape:X(Ds).replace("])","~|])").getRegex(),url:X(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},ec={...lr,br:X(Ms).replace("{2,}","*").getRegex(),text:X(lr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},yn={normal:$r,gfm:Bl,pedantic:zl},Vt={normal:Lr,gfm:lr,breaks:ec,pedantic:Jl};class je{constructor(e){M(this,"tokens");M(this,"options");M(this,"state");M(this,"tokenizer");M(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||bt,this.options.tokenizer=this.options.tokenizer||new Ln,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:yn.normal,inline:Vt.normal};this.options.pedantic?(t.block=yn.pedantic,t.inline=Vt.pedantic):this.options.gfm&&(t.block=yn.gfm,this.options.breaks?t.inline=Vt.breaks:t.inline=Vt.gfm),this.tokenizer.rules=t}static get rules(){return{block:yn,inline:Vt}}static lex(e,t){return new je(t).lex(e)}static lexInline(e,t){return new je(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let n,i,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],o&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),o=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,o,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const p=e.slice(1);let f;this.options.extensions.startInline.forEach(m=>{f=m.call({lexer:this},p),typeof f=="number"&&f>=0&&(u=Math.min(u,f))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(s)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Pn{constructor(e){M(this,"options");this.options=e||bt}code(e,t,n){var s;const i=(s=(t||"").match(/^\S*/))==null?void 0:s[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+ye(i)+'">'+(n?e:ye(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:ye(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const i=Ri(e);if(i===null)return n;e=i;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>",s}image(e,t,n){const i=Ri(e);if(i===null)return n;e=i;let s=`<img src="${e}" alt="${n}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class Nr{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class We{constructor(e){M(this,"options");M(this,"renderer");M(this,"textRenderer");this.options=e||bt,this.options.renderer=this.options.renderer||new Pn,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Nr}static parse(e,t){return new We(t).parse(e)}static parseInline(e,t){return new We(t).parseInline(e)}parse(e,t=!0){let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=s,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){n+=a||"";continue}}switch(s.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const o=s;n+=this.renderer.heading(this.parseInline(o.tokens),o.depth,El(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=s;n+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=s;let a="",l="";for(let u=0;u<o.header.length;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});a+=this.renderer.tablerow(l);let c="";for(let u=0;u<o.rows.length;u++){const p=o.rows[u];l="";for(let f=0;f<p.length;f++)l+=this.renderer.tablecell(this.parseInline(p[f].tokens),{header:!1,align:o.align[f]});c+=this.renderer.tablerow(l)}n+=this.renderer.table(a,c);continue}case"blockquote":{const o=s,a=this.parse(o.tokens);n+=this.renderer.blockquote(a);continue}case"list":{const o=s,a=o.ordered,l=o.start,c=o.loose;let u="";for(let p=0;p<o.items.length;p++){const f=o.items[p],m=f.checked,v=f.task;let b="";if(f.task){const d=this.renderer.checkbox(!!m);c?f.tokens.length>0&&f.tokens[0].type==="paragraph"?(f.tokens[0].text=d+" "+f.tokens[0].text,f.tokens[0].tokens&&f.tokens[0].tokens.length>0&&f.tokens[0].tokens[0].type==="text"&&(f.tokens[0].tokens[0].text=d+" "+f.tokens[0].tokens[0].text)):f.tokens.unshift({type:"text",text:d+" "}):b+=d+" "}b+=this.parse(f.tokens,c),u+=this.renderer.listitem(b,v,!!m)}n+=this.renderer.list(u,a,l);continue}case"html":{const o=s;n+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=s;n+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=s,a=o.tokens?this.parseInline(o.tokens):o.text;for(;i+1<e.length&&e[i+1].type==="text";)o=e[++i],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);n+=t?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let i=0;i<e.length;i++){const s=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){n+=o||"";continue}}switch(s.type){case"escape":{const o=s;n+=t.text(o.text);break}case"html":{const o=s;n+=t.html(o.text);break}case"link":{const o=s;n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=s;n+=t.image(o.href,o.title,o.text);break}case"strong":{const o=s;n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=s;n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=s;n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{const o=s;n+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=s;n+=t.text(o.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}}class Jt{constructor(e){M(this,"options");this.options=e||bt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}M(Jt,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var rn,cr,Dn,zs;class tc{constructor(...e){Wn(this,rn);Wn(this,Dn);M(this,"defaults",Rr());M(this,"options",this.setOptions);M(this,"parse",hn(this,rn,cr).call(this,je.lex,We.parse));M(this,"parseInline",hn(this,rn,cr).call(this,je.lexInline,We.parseInline));M(this,"Parser",We);M(this,"Renderer",Pn);M(this,"TextRenderer",Nr);M(this,"Lexer",je);M(this,"Tokenizer",Ln);M(this,"Hooks",Jt);this.use(...e)}walkTokens(e,t){var i,s;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{const a=o;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=o;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=t.renderers[s.name];o?t.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),i.extensions=t),n.renderer){const s=this.defaults.renderer||new Pn(this.defaults);for(const o in n.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.renderer[a],c=s[a];s[a]=(...u)=>{let p=l.apply(s,u);return p===!1&&(p=c.apply(s,u)),p||""}}i.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new Ln(this.defaults);for(const o in n.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=n.tokenizer[a],c=s[a];s[a]=(...u)=>{let p=l.apply(s,u);return p===!1&&(p=c.apply(s,u)),p}}i.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Jt;for(const o in n.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.hooks[a],c=s[a];Jt.passThroughHooks.has(o)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(f=>c.call(s,f));const p=l.call(s,u);return c.call(s,p)}:s[a]=(...u)=>{let p=l.apply(s,u);return p===!1&&(p=c.apply(s,u)),p}}i.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,o=n.walkTokens;i.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return je.lex(e,t??this.defaults)}parser(e,t){return We.parse(e,t??this.defaults)}}rn=new WeakSet,cr=function(e,t){return(n,i)=>{const s={...i},o={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=hn(this,Dn,zs).call(this,!!o.silent,!!o.async);if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>t(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(n=o.hooks.preprocess(n));let l=e(n,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let c=t(l,o);return o.hooks&&(c=o.hooks.postprocess(c)),c}catch(l){return a(l)}}},Dn=new WeakSet,zs=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+ye(n.message+"",!0)+"</pre>";return t?Promise.resolve(i):i}if(t)return Promise.reject(n);throw n}};const gt=new tc;function W(r,e){return gt.parse(r,e)}W.options=W.setOptions=function(r){return gt.setOptions(r),W.defaults=gt.defaults,Ss(W.defaults),W};W.getDefaults=Rr;W.defaults=bt;W.use=function(...r){return gt.use(...r),W.defaults=gt.defaults,Ss(W.defaults),W};W.walkTokens=function(r,e){return gt.walkTokens(r,e)};W.parseInline=gt.parseInline;W.Parser=We;W.parser=We.parse;W.Renderer=Pn;W.TextRenderer=Nr;W.Lexer=je;W.lexer=je.lex;W.Tokenizer=Ln;W.Hooks=Jt;W.parse=W;W.options;W.setOptions;W.use;W.walkTokens;W.parseInline;We.parse;je.lex;const Xe=Object.create(null);Xe.open="0";Xe.close="1";Xe.ping="2";Xe.pong="3";Xe.message="4";Xe.upgrade="5";Xe.noop="6";const On=Object.create(null);Object.keys(Xe).forEach(r=>{On[Xe[r]]=r});const ur={type:"error",data:"parser error"},Us=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Fs=typeof ArrayBuffer=="function",Hs=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer,Pr=({type:r,data:e},t,n)=>Us&&e instanceof Blob?t?n(e):$i(e,n):Fs&&(e instanceof ArrayBuffer||Hs(e))?t?n(e):$i(new Blob([e]),n):n(Xe[r]+(e||"")),$i=(r,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(r)};function Li(r){return r instanceof Uint8Array?r:r instanceof ArrayBuffer?new Uint8Array(r):new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}let Qn;function nc(r,e){if(Us&&r.data instanceof Blob)return r.data.arrayBuffer().then(Li).then(e);if(Fs&&(r.data instanceof ArrayBuffer||Hs(r.data)))return e(Li(r.data));Pr(r,!1,t=>{Qn||(Qn=new TextEncoder),e(Qn.encode(t))})}const Ni="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Gt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let r=0;r<Ni.length;r++)Gt[Ni.charCodeAt(r)]=r;const rc=r=>{let e=r.length*.75,t=r.length,n,i=0,s,o,a,l;r[r.length-1]==="="&&(e--,r[r.length-2]==="="&&e--);const c=new ArrayBuffer(e),u=new Uint8Array(c);for(n=0;n<t;n+=4)s=Gt[r.charCodeAt(n)],o=Gt[r.charCodeAt(n+1)],a=Gt[r.charCodeAt(n+2)],l=Gt[r.charCodeAt(n+3)],u[i++]=s<<2|o>>4,u[i++]=(o&15)<<4|a>>2,u[i++]=(a&3)<<6|l&63;return c},ic=typeof ArrayBuffer=="function",Dr=(r,e)=>{if(typeof r!="string")return{type:"message",data:qs(r,e)};const t=r.charAt(0);return t==="b"?{type:"message",data:sc(r.substring(1),e)}:On[t]?r.length>1?{type:On[t],data:r.substring(1)}:{type:On[t]}:ur},sc=(r,e)=>{if(ic){const t=rc(r);return qs(t,e)}else return{base64:!0,data:r}},qs=(r,e)=>{switch(e){case"blob":return r instanceof Blob?r:new Blob([r]);case"arraybuffer":default:return r instanceof ArrayBuffer?r:r.buffer}},js="",oc=(r,e)=>{const t=r.length,n=new Array(t);let i=0;r.forEach((s,o)=>{Pr(s,!1,a=>{n[o]=a,++i===t&&e(n.join(js))})})},ac=(r,e)=>{const t=r.split(js),n=[];for(let i=0;i<t.length;i++){const s=Dr(t[i],e);if(n.push(s),s.type==="error")break}return n};function lc(){return new TransformStream({transform(r,e){nc(r,t=>{const n=t.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const s=new DataView(i.buffer);s.setUint8(0,126),s.setUint16(1,n)}else{i=new Uint8Array(9);const s=new DataView(i.buffer);s.setUint8(0,127),s.setBigUint64(1,BigInt(n))}r.data&&typeof r.data!="string"&&(i[0]|=128),e.enqueue(i),e.enqueue(t)})}})}let Jn;function _n(r){return r.reduce((e,t)=>e+t.length,0)}function vn(r,e){if(r[0].length===e)return r.shift();const t=new Uint8Array(e);let n=0;for(let i=0;i<e;i++)t[i]=r[0][n++],n===r[0].length&&(r.shift(),n=0);return r.length&&n<r[0].length&&(r[0]=r[0].slice(n)),t}function cc(r,e){Jn||(Jn=new TextDecoder);const t=[];let n=0,i=-1,s=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(_n(t)<1)break;const l=vn(t,1);s=(l[0]&128)===128,i=l[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(_n(t)<2)break;const l=vn(t,2);i=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(_n(t)<8)break;const l=vn(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),u=c.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(ur);break}i=u*Math.pow(2,32)+c.getUint32(4),n=3}else{if(_n(t)<i)break;const l=vn(t,i);a.enqueue(Dr(s?l:Jn.decode(l),e)),n=0}if(i===0||i>r){a.enqueue(ur);break}}}})}const Ws=4;function ie(r){if(r)return uc(r)}function uc(r){for(var e in ie.prototype)r[e]=ie.prototype[e];return r}ie.prototype.on=ie.prototype.addEventListener=function(r,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+r]=this._callbacks["$"+r]||[]).push(e),this};ie.prototype.once=function(r,e){function t(){this.off(r,t),e.apply(this,arguments)}return t.fn=e,this.on(r,t),this};ie.prototype.off=ie.prototype.removeListener=ie.prototype.removeAllListeners=ie.prototype.removeEventListener=function(r,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+r];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+r],this;for(var n,i=0;i<t.length;i++)if(n=t[i],n===e||n.fn===e){t.splice(i,1);break}return t.length===0&&delete this._callbacks["$"+r],this};ie.prototype.emit=function(r){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+r],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,i=t.length;n<i;++n)t[n].apply(this,e)}return this};ie.prototype.emitReserved=ie.prototype.emit;ie.prototype.listeners=function(r){return this._callbacks=this._callbacks||{},this._callbacks["$"+r]||[]};ie.prototype.hasListeners=function(r){return!!this.listeners(r).length};const Se=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function Vs(r,...e){return e.reduce((t,n)=>(r.hasOwnProperty(n)&&(t[n]=r[n]),t),{})}const fc=Se.setTimeout,hc=Se.clearTimeout;function zn(r,e){e.useNativeTimers?(r.setTimeoutFn=fc.bind(Se),r.clearTimeoutFn=hc.bind(Se)):(r.setTimeoutFn=Se.setTimeout.bind(Se),r.clearTimeoutFn=Se.clearTimeout.bind(Se))}const pc=1.33;function dc(r){return typeof r=="string"?mc(r):Math.ceil((r.byteLength||r.size)*pc)}function mc(r){let e=0,t=0;for(let n=0,i=r.length;n<i;n++)e=r.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function gc(r){let e="";for(let t in r)r.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(r[t]));return e}function bc(r){let e={},t=r.split("&");for(let n=0,i=t.length;n<i;n++){let s=t[n].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}class wc extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class Mr extends ie{constructor(e){super(),this.writable=!1,zn(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new wc(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Dr(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=gc(e);return t.length?"?"+t:""}}const Ys="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),fr=64,yc={};let Pi=0,xn=0,Di;function Mi(r){let e="";do e=Ys[r%fr]+e,r=Math.floor(r/fr);while(r>0);return e}function Gs(){const r=Mi(+new Date);return r!==Di?(Pi=0,Di=r):r+"."+Mi(Pi++)}for(;xn<fr;xn++)yc[Ys[xn]]=xn;let Xs=!1;try{Xs=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const _c=Xs;function Zs(r){const e=r.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||_c))return new XMLHttpRequest}catch{}if(!e)try{return new Se[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function vc(){}const xc=function(){return new Zs({xdomain:!1}).responseType!=null}();class kc extends Mr{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let i=location.port;i||(i=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port}const t=e&&e.forceBase64;this.supportsBinary=xc&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};ac(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,oc(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Gs()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new Ye(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class Ye extends ie{constructor(e,t){super(),zn(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=Vs(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const n=this.xhr=new Zs(t);try{n.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this.opts.extraHeaders[i])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this.opts.cookieJar)===null||i===void 0||i.parseCookies(n)),n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(i){this.setTimeoutFn(()=>{this.onError(i)},0);return}typeof document<"u"&&(this.index=Ye.requestsCount++,Ye.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=vc,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete Ye.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}Ye.requestsCount=0;Ye.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Ii);else if(typeof addEventListener=="function"){const r="onpagehide"in Se?"pagehide":"unload";addEventListener(r,Ii,!1)}}function Ii(){for(let r in Ye.requests)Ye.requests.hasOwnProperty(r)&&Ye.requests[r].abort()}const Ir=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),kn=Se.WebSocket||Se.MozWebSocket,Bi=!0,Tc="arraybuffer",zi=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Ec extends Mr{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=zi?{}:Vs(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=Bi&&!zi?t?new kn(e,t):new kn(e):new kn(e,t,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;Pr(n,this.supportsBinary,s=>{const o={};try{Bi&&this.ws.send(s)}catch{}i&&Ir(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Gs()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!kn}}class Ac extends Mr{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=cc(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),i=lc();i.readable.pipeTo(e.writable),this.writer=i.writable.getWriter();const s=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),s())}).catch(a=>{})};s();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],i=t===e.length-1;this.writer.write(n).then(()=>{i&&Ir(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const Rc={websocket:Ec,webtransport:Ac,polling:kc},Oc=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Sc=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function hr(r){if(r.length>2e3)throw"URI too long";const e=r,t=r.indexOf("["),n=r.indexOf("]");t!=-1&&n!=-1&&(r=r.substring(0,t)+r.substring(t,n).replace(/:/g,";")+r.substring(n,r.length));let i=Oc.exec(r||""),s={},o=14;for(;o--;)s[Sc[o]]=i[o]||"";return t!=-1&&n!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=Cc(s,s.path),s.queryKey=$c(s,s.query),s}function Cc(r,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function $c(r,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,s){i&&(t[i]=s)}),t}let Ks=class Rt extends ie{constructor(e,t={}){super(),this.binaryType=Tc,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=hr(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=hr(t.host).host),zn(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=bc(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Ws,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new Rc[e](n)}open(){let e;if(this.opts.rememberUpgrade&&Rt.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;Rt.priorWebsocketSuccess=!1;const i=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",p=>{if(!n)if(p.type==="pong"&&p.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Rt.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=t.name,this.emitReserved("upgradeError",f)}}))};function s(){n||(n=!0,u(),t.close(),t=null)}const o=p=>{const f=new Error("probe error: "+p);f.transport=t.name,s(),this.emitReserved("upgradeError",f)};function a(){o("transport closed")}function l(){o("socket closed")}function c(p){t&&p.name!==t.name&&s()}const u=()=>{t.removeListener("open",i),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",i),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",Rt.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(t+=dc(i)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,i){if(typeof t=="function"&&(i=t,t=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const s={type:e,data:t,options:n};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){Rt.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const i=e.length;for(;n<i;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};Ks.protocol=Ws;function Lc(r,e="",t){let n=r;t=t||typeof location<"u"&&location,r==null&&(r=t.protocol+"//"+t.host),typeof r=="string"&&(r.charAt(0)==="/"&&(r.charAt(1)==="/"?r=t.protocol+r:r=t.host+r),/^(https?|wss?):\/\//.test(r)||(typeof t<"u"?r=t.protocol+"//"+r:r="https://"+r),n=hr(r)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const s=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port+e,n.href=n.protocol+"://"+s+(t&&t.port===n.port?"":":"+n.port),n}const Nc=typeof ArrayBuffer=="function",Pc=r=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(r):r.buffer instanceof ArrayBuffer,Qs=Object.prototype.toString,Dc=typeof Blob=="function"||typeof Blob<"u"&&Qs.call(Blob)==="[object BlobConstructor]",Mc=typeof File=="function"||typeof File<"u"&&Qs.call(File)==="[object FileConstructor]";function Br(r){return Nc&&(r instanceof ArrayBuffer||Pc(r))||Dc&&r instanceof Blob||Mc&&r instanceof File}function Sn(r,e){if(!r||typeof r!="object")return!1;if(Array.isArray(r)){for(let t=0,n=r.length;t<n;t++)if(Sn(r[t]))return!0;return!1}if(Br(r))return!0;if(r.toJSON&&typeof r.toJSON=="function"&&arguments.length===1)return Sn(r.toJSON(),!0);for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&Sn(r[t]))return!0;return!1}function Ic(r){const e=[],t=r.data,n=r;return n.data=pr(t,e),n.attachments=e.length,{packet:n,buffers:e}}function pr(r,e){if(!r)return r;if(Br(r)){const t={_placeholder:!0,num:e.length};return e.push(r),t}else if(Array.isArray(r)){const t=new Array(r.length);for(let n=0;n<r.length;n++)t[n]=pr(r[n],e);return t}else if(typeof r=="object"&&!(r instanceof Date)){const t={};for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=pr(r[n],e));return t}return r}function Bc(r,e){return r.data=dr(r.data,e),delete r.attachments,r}function dr(r,e){if(!r)return r;if(r&&r._placeholder===!0){if(typeof r.num=="number"&&r.num>=0&&r.num<e.length)return e[r.num];throw new Error("illegal attachments")}else if(Array.isArray(r))for(let t=0;t<r.length;t++)r[t]=dr(r[t],e);else if(typeof r=="object")for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&(r[t]=dr(r[t],e));return r}const zc=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Uc=5;var q;(function(r){r[r.CONNECT=0]="CONNECT",r[r.DISCONNECT=1]="DISCONNECT",r[r.EVENT=2]="EVENT",r[r.ACK=3]="ACK",r[r.CONNECT_ERROR=4]="CONNECT_ERROR",r[r.BINARY_EVENT=5]="BINARY_EVENT",r[r.BINARY_ACK=6]="BINARY_ACK"})(q||(q={}));class Fc{constructor(e){this.replacer=e}encode(e){return(e.type===q.EVENT||e.type===q.ACK)&&Sn(e)?this.encodeAsBinary({type:e.type===q.EVENT?q.BINARY_EVENT:q.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===q.BINARY_EVENT||e.type===q.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Ic(e),n=this.encodeAsString(t.packet),i=t.buffers;return i.unshift(n),i}}function Ui(r){return Object.prototype.toString.call(r)==="[object Object]"}class zr extends ie{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===q.BINARY_EVENT;n||t.type===q.BINARY_ACK?(t.type=n?q.EVENT:q.ACK,this.reconstructor=new Hc(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Br(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(q[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===q.BINARY_EVENT||n.type===q.BINARY_ACK){const s=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(s,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const s=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(s,t)}else n.nsp="/";const i=e.charAt(t+1);if(i!==""&&Number(i)==i){const s=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(s,t+1))}if(e.charAt(++t)){const s=this.tryParse(e.substr(t));if(zr.isPayloadValid(n.type,s))n.data=s;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case q.CONNECT:return Ui(t);case q.DISCONNECT:return t===void 0;case q.CONNECT_ERROR:return typeof t=="string"||Ui(t);case q.EVENT:case q.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&zc.indexOf(t[0])===-1);case q.ACK:case q.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Hc{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Bc(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const qc=Object.freeze(Object.defineProperty({__proto__:null,Decoder:zr,Encoder:Fc,get PacketType(){return q},protocol:Uc},Symbol.toStringTag,{value:"Module"}));function ze(r,e,t){return r.on(e,t),function(){r.off(e,t)}}const jc=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Js extends ie{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[ze(e,"open",this.onopen.bind(this)),ze(e,"packet",this.onpacket.bind(this)),ze(e,"error",this.onerror.bind(this)),ze(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(jc.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const n={type:q.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),n.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[e]=t;return}const s=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},i);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(s),t.apply(this,[null,...o])}}emitWithAck(e,...t){const n=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((i,s)=>{t.push((o,a)=>n?o?s(o):i(a):i(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((i,...s)=>n!==this._queue[0]?void 0:(i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(i)):(this._queue.shift(),t&&t(null,...s)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:q.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case q.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case q.EVENT:case q.BINARY_EVENT:this.onevent(e);break;case q.ACK:case q.BINARY_ACK:this.onack(e);break;case q.DISCONNECT:this.ondisconnect();break;case q.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...i){n||(n=!0,t.packet({type:q.ACK,id:e,data:i}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:q.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Pt(r){r=r||{},this.ms=r.min||100,this.max=r.max||1e4,this.factor=r.factor||2,this.jitter=r.jitter>0&&r.jitter<=1?r.jitter:0,this.attempts=0}Pt.prototype.duration=function(){var r=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*r);r=Math.floor(e*10)&1?r+t:r-t}return Math.min(r,this.max)|0};Pt.prototype.reset=function(){this.attempts=0};Pt.prototype.setMin=function(r){this.ms=r};Pt.prototype.setMax=function(r){this.max=r};Pt.prototype.setJitter=function(r){this.jitter=r};class mr extends ie{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,zn(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Pt({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const i=t.parser||qc;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Ks(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=ze(t,"open",function(){n.onopen(),e&&e()}),s=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=ze(t,"error",s);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{i(),s(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(i),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(ze(e,"ping",this.onping.bind(this)),ze(e,"data",this.ondata.bind(this)),ze(e,"error",this.onerror.bind(this)),ze(e,"close",this.onclose.bind(this)),ze(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Ir(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Js(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Yt={};function Cn(r,e){typeof r=="object"&&(e=r,r=void 0),e=e||{};const t=Lc(r,e.path||"/socket.io"),n=t.source,i=t.id,s=t.path,o=Yt[i]&&s in Yt[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new mr(n,e):(Yt[i]||(Yt[i]=new mr(n,e)),l=Yt[i]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(Cn,{Manager:mr,Socket:Js,io:Cn,connect:Cn});function Wc(r){let e,t;return{c(){e=oe("svg"),t=oe("path"),g(t,"d","M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v28c0 50.8-41.2 92-92 92c-31.1 0-58.7-15.5-75.3-39.2C322.7 360.9 291.1 376 256 376c-66.3 0-120-53.7-120-120s53.7-120 120-120c28.8 0 55.2 10.1 75.8 27c4.3-6.6 11.7-11 20.2-11c13.3 0 24 10.7 24 24v80 28c0 24.3 19.7 44 44 44s44-19.7 44-44V256c0-114.9-93.1-208-208-208zm72 208a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 512 512")},m(n,i){I(n,e,i),_(e,t)},p:B,i:B,o:B,d(n){n&&N(e)}}}class eo extends Re{constructor(e){super(),Ee(this,e,null,Wc,Te,{})}}Ae(eo,{},[],[],!0);function Vc(r){let e,t;return{c(){e=oe("svg"),t=oe("path"),g(t,"d","M337 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-143 143L97 127c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0L337 81zM441 201c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-247 247L41 295c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L143 465c9.4 9.4 24.6 9.4 33.9 0L441 201z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 448 512")},m(n,i){I(n,e,i),_(e,t)},p:B,i:B,o:B,d(n){n&&N(e)}}}class to extends Re{constructor(e){super(),Ee(this,e,null,Vc,Te,{})}}Ae(to,{},[],[],!0);function Yc(r){let e,t;return{c(){e=oe("svg"),t=oe("path"),g(t,"d","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 512 512")},m(n,i){I(n,e,i),_(e,t)},p:B,i:B,o:B,d(n){n&&N(e)}}}class no extends Re{constructor(e){super(),Ee(this,e,null,Yc,Te,{})}}Ae(no,{},[],[],!0);function Gc(r){let e,t;return{c(){e=oe("svg"),t=oe("path"),g(t,"d","M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H448c8.8 0 16 7.2 16 16V352c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432V416zm-.2 76.2l.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h48 48v48 4 .3 6.4V496c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM96 180.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H152c8.8 0 16-7.2 16-16s-7.2-16-16-16H132.8C112.5 144 96 160.5 96 180.8zM372.8 144c-20.3 0-36.8 16.5-36.8 36.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H352c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H392c8.8 0 16-7.2 16-16s-7.2-16-16-16H372.8zm-152 6.4c-4.1-5.5-11.3-7.8-17.9-5.6S192 153.1 192 160v96c0 8.8 7.2 16 16 16s16-7.2 16-16V208l19.2 25.6c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4L288 208v48c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-6.9-4.4-13-10.9-15.2s-13.7 .1-17.9 5.6L256 197.3l-35.2-46.9z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 512 512")},m(n,i){I(n,e,i),_(e,t)},p:B,i:B,o:B,d(n){n&&N(e)}}}class ro extends Re{constructor(e){super(),Ee(this,e,null,Gc,Te,{})}}Ae(ro,{},[],[],!0);function Xc(r){let e,t;return{c(){e=oe("svg"),t=oe("path"),g(t,"d","M133.9 232L65.8 95.9 383.4 232H133.9zm0 48H383.4L65.8 416.1l68-136.1zM44.6 34.6C32.3 29.3 17.9 32.3 8.7 42S-2.6 66.3 3.4 78.3L92.2 256 3.4 433.7c-6 12-3.9 26.5 5.3 36.3s23.5 12.7 35.9 7.5l448-192c11.8-5 19.4-16.6 19.4-29.4s-7.6-24.4-19.4-29.4l-448-192z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 512 512")},m(n,i){I(n,e,i),_(e,t)},p:B,i:B,o:B,d(n){n&&N(e)}}}class io extends Re{constructor(e){super(),Ee(this,e,null,Xc,Te,{})}}Ae(io,{},[],[],!0);function Zc(r){let e,t;return{c(){e=oe("svg"),t=oe("path"),g(t,"d","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 448 512")},m(n,i){I(n,e,i),_(e,t)},p:B,i:B,o:B,d(n){n&&N(e)}}}class so extends Re{constructor(e){super(),Ee(this,e,null,Zc,Te,{})}}Ae(so,{},[],[],!0);function Kc(r){let e,t;return{c(){e=oe("svg"),t=oe("path"),g(t,"d","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 448 512")},m(n,i){I(n,e,i),_(e,t)},p:B,i:B,o:B,d(n){n&&N(e)}}}class oo extends Re{constructor(e){super(),Ee(this,e,null,Kc,Te,{})}}Ae(oo,{},[],[],!0);function Qc(r){let e,t;return{c(){e=oe("svg"),t=oe("path"),g(t,"d","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 384 512")},m(n,i){I(n,e,i),_(e,t)},p:B,i:B,o:B,d(n){n&&N(e)}}}class Jc extends Re{constructor(e){super(),Ee(this,e,null,Qc,Te,{})}}Ae(Jc,{},[],[],!0);function eu(r){let e,t;return{c(){e=oe("svg"),t=oe("path"),g(t,"d","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"viewBox","0 0 448 512")},m(n,i){I(n,e,i),_(e,t)},p:B,i:B,o:B,d(n){n&&N(e)}}}class ao extends Re{constructor(e){super(),Ee(this,e,null,eu,Te,{})}}Ae(ao,{},[],[],!0);const{document:tu}=ko;function Fi(r,e,t){const n=r.slice();return n[33]=e[t],n}function Hi(r){let e,t,n,i,s,o,a,l;return s=new so({}),{c(){e=A("button"),t=A("p"),t.textContent="Chat",n=H(),i=A("span"),Ce(s.$$.fragment),g(t,"class","m-auto mx-2"),g(i,"class","h-6 w-5 mr-2 my-auto fill-white"),g(e,"class","py-2 px-2 rounded-md transition duration-300 flex bg-gray-400 hover:bg-gray-500 text-white")},m(c,u){I(c,e,u),_(e,t),_(e,n),_(e,i),_e(s,i,null),o=!0,a||(l=se(e,"click",r[12]),a=!0)},p:B,i(c){o||(C(s.$$.fragment,c),o=!0)},o(c){z(s.$$.fragment,c),o=!1},d(c){c&&N(e),ve(s),a=!1,l()}}}function qi(r){let e,t,n,i=(r[0]?r[0]:"")+"",s,o,a,l,c,u,p,f,m,v;c=new no({});let b=!r[5]&&ji(r),d=r[5]&&Qi(r);return{c(){e=A("div"),t=A("div"),n=A("p"),s=Ue(i),o=H(),a=A("button"),l=A("span"),Ce(c.$$.fragment),u=H(),b&&b.c(),p=H(),d&&d.c(),g(n,"class","text-lg font-semibold text-white"),g(l,"class","w-5 fill-white rotate-45"),g(a,"class","rounded-md w-5 mx-1"),g(t,"class","pl-4 p-3 border-b text-black rounded-t-lg flex justify-between items-center bg-gray-400 h-15"),g(e,"class","fixed right-0 bottom-0 w-96 h-3/4 flex flex-col justify-end bg-white mr-4 transition duration-300 rounded-t-xl")},m(w,y){I(w,e,y),_(e,t),_(t,n),_(n,s),_(t,o),_(t,a),_(a,l),_e(c,l,null),_(e,u),b&&b.m(e,null),_(e,p),d&&d.m(e,null),f=!0,m||(v=se(a,"click",r[18]),m=!0)},p(w,y){(!f||y[0]&1)&&i!==(i=(w[0]?w[0]:"")+"")&&et(s,i),w[5]?b&&($e(),z(b,1,1,()=>{b=null}),Le()):b?(b.p(w,y),y[0]&32&&C(b,1)):(b=ji(w),b.c(),C(b,1),b.m(e,p)),w[5]?d?(d.p(w,y),y[0]&32&&C(d,1)):(d=Qi(w),d.c(),C(d,1),d.m(e,null)):d&&($e(),z(d,1,1,()=>{d=null}),Le())},i(w){f||(C(c.$$.fragment,w),C(b),C(d),f=!0)},o(w){z(c.$$.fragment,w),z(b),z(d),f=!1},d(w){w&&N(e),ve(c),b&&b.d(),d&&d.d(),m=!1,v()}}}function ji(r){let e,t,n,i,s,o,a,l,c,u,p,f,m,v,b=ti(r[3]),d=[];for(let x=0;x<b.length;x+=1)d[x]=Zi(Fi(r,b,x));const w=x=>z(d[x],1,1,()=>{d[x]=null});c=new io({});let y=r[4]&&Ki(r);return{c(){e=A("div");for(let x=0;x<d.length;x+=1)d[x].c();t=H(),n=A("div"),i=A("div"),s=A("input"),o=H(),a=A("button"),l=A("span"),Ce(c.$$.fragment),p=H(),y&&y.c(),g(e,"class","p-4 overflow-y-auto flex-grow hide-scrollbar"),g(e,"id","stubber_webchat_message_box"),g(s,"type","text"),g(s,"class","w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2"),g(s,"placeholder",ru),g(s,"autocomplete","off"),g(l,"class","fill-gray-400"),g(a,"class","w-7 transition duration-300 pr-2"),a.disabled=u=r[2]==="",g(i,"class","h-10 w-full bg-white flex rounded-lg"),g(n,"class","p-2 flex flex-col bg-gray-300 rounded-t-xl")},m(x,E){I(x,e,E);for(let R=0;R<d.length;R+=1)d[R]&&d[R].m(e,null);I(x,t,E),I(x,n,E),_(n,i),_(i,s),at(s,r[2]),_(i,o),_(i,a),_(a,l),_e(c,l,null),_(n,p),y&&y.m(n,null),f=!0,m||(v=[se(s,"input",r[19]),se(s,"keydown",r[8]),se(a,"click",r[9])],m=!0)},p(x,E){if(E[0]&2056){b=ti(x[3]);let R;for(R=0;R<b.length;R+=1){const D=Fi(x,b,R);d[R]?(d[R].p(D,E),C(d[R],1)):(d[R]=Zi(D),d[R].c(),C(d[R],1),d[R].m(e,null))}for($e(),R=b.length;R<d.length;R+=1)w(R);Le()}E[0]&4&&s.value!==x[2]&&at(s,x[2]),(!f||E[0]&4&&u!==(u=x[2]===""))&&(a.disabled=u),x[4]?y?y.p(x,E):(y=Ki(x),y.c(),y.m(n,null)):y&&(y.d(1),y=null)},i(x){if(!f){for(let E=0;E<b.length;E+=1)C(d[E]);C(c.$$.fragment,x),f=!0}},o(x){d=d.filter(Boolean);for(let E=0;E<d.length;E+=1)z(d[E]);z(c.$$.fragment,x),f=!1},d(x){x&&(N(e),N(t),N(n)),Ro(d,x),ve(c),y&&y.d(),m=!1,nt(v)}}}function Wi(r){let e,t,n,i,s,o,a=r[11](r[33].dateTime)+"",l,c=r[33].previous_direction=="out"&&Vi(),u=r[33].message.type=="markdown"&&Yi(r),p=r[33].message.type=="text"&&Gi(r);return{c(){e=A("div"),c&&c.c(),t=H(),n=A("div"),u&&u.c(),i=H(),p&&p.c(),s=H(),o=A("p"),l=Ue(a),g(o,"class","text-sm ml-auto"),g(n,"class","bg-gray-200 rounded-lg py-2 px-4 flex flex-col"),g(e,"class","mb-2 mr-10 flex flex-col")},m(f,m){I(f,e,m),c&&c.m(e,null),_(e,t),_(e,n),u&&u.m(n,null),_(n,i),p&&p.m(n,null),_(n,s),_(n,o),_(o,l)},p(f,m){f[33].previous_direction=="out"?c||(c=Vi(),c.c(),c.m(e,t)):c&&(c.d(1),c=null),f[33].message.type=="markdown"?u?u.p(f,m):(u=Yi(f),u.c(),u.m(n,i)):u&&(u.d(1),u=null),f[33].message.type=="text"?p?p.p(f,m):(p=Gi(f),p.c(),p.m(n,s)):p&&(p.d(1),p=null),m[0]&8&&a!==(a=f[11](f[33].dateTime)+"")&&et(l,a)},d(f){f&&N(e),c&&c.d(),u&&u.d(),p&&p.d()}}}function Vi(r){let e;return{c(){e=A("p"),e.textContent="Agent",g(e,"class","m-auto mx-2 text-sm")},m(t,n){I(t,e,n)},d(t){t&&N(e)}}}function Yi(r){let e,t=ar.sanitize(W(r[33].message.value.trim()))+"",n;return{c(){e=new So(!1),n=Mn(),e.a=n},m(i,s){e.m(t,i,s),I(i,n,s)},p(i,s){s[0]&8&&t!==(t=ar.sanitize(W(i[33].message.value.trim()))+"")&&e.p(t)},d(i){i&&(N(n),e.d())}}}function Gi(r){let e,t=r[33].message.value+"",n;return{c(){e=A("p"),n=Ue(t),g(e,"class","")},m(i,s){I(i,e,s),_(e,n)},p(i,s){s[0]&8&&t!==(t=i[33].message.value+"")&&et(n,t)},d(i){i&&N(e)}}}function Xi(r){let e,t,n,i,s,o=r[33].message+"",a,l,c,u,p=r[11](r[33].dateTime)+"",f,m,v,b,d,w;return b=new to({}),{c(){e=A("div"),t=A("p"),t.textContent="You",n=H(),i=A("div"),s=A("p"),a=Ue(o),l=H(),c=A("div"),u=A("p"),f=Ue(p),m=H(),v=A("span"),Ce(b.$$.fragment),d=H(),g(t,"class","m-auto mx-2 text-sm"),g(s,"class",""),g(u,"class","text-sm ml-auto mr-2"),g(v,"class","fill-green-400 w-3 my-auto"),g(c,"class","flex w-full"),g(i,"class","bg-gray-200 rounded-lg py-2 px-4 flex flex-col"),g(e,"class","mb-2 ml-10 text-right flex flex-col")},m(y,x){I(y,e,x),_(e,t),_(e,n),_(e,i),_(i,s),_(s,a),_(i,l),_(i,c),_(c,u),_(u,f),_(c,m),_(c,v),_e(b,v,null),_(e,d),w=!0},p(y,x){(!w||x[0]&8)&&o!==(o=y[33].message+"")&&et(a,o),(!w||x[0]&8)&&p!==(p=y[11](y[33].dateTime)+"")&&et(f,p)},i(y){w||(C(b.$$.fragment,y),w=!0)},o(y){z(b.$$.fragment,y),w=!1},d(y){y&&N(e),ve(b)}}}function Zi(r){let e,t,n,i=r[33].direction=="in"&&Wi(r),s=r[33].direction=="out"&&Xi(r);return{c(){i&&i.c(),e=H(),s&&s.c(),t=Mn()},m(o,a){i&&i.m(o,a),I(o,e,a),s&&s.m(o,a),I(o,t,a),n=!0},p(o,a){o[33].direction=="in"?i?i.p(o,a):(i=Wi(o),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),o[33].direction=="out"?s?(s.p(o,a),a[0]&8&&C(s,1)):(s=Xi(o),s.c(),C(s,1),s.m(t.parentNode,t)):s&&($e(),z(s,1,1,()=>{s=null}),Le())},i(o){n||(C(s),n=!0)},o(o){z(s),n=!1},d(o){o&&(N(e),N(t)),i&&i.d(o),s&&s.d(o)}}}function Ki(r){let e,t,n,i;return{c(){e=A("div"),t=A("button"),t.textContent="Switch Chat Channels",g(t,"class","w-25 transition duration-300 my-2 mx-auto"),g(e,"class","w-full flex")},m(s,o){I(s,e,o),_(e,t),n||(i=se(t,"click",r[13]),n=!0)},p:B,d(s){s&&N(e),n=!1,i()}}}function Qi(r){let e,t,n,i,s,o,a,l,c,u,p,f,m,v,b,d,w,y,x,E,R,D,j,G,K,U,Q,V,J,ue,he,ee,ne,be,T;s=new ao({}),f=new oo({}),y=new ro({}),G=new eo({});let P=r[6]=="whatsapp"&&Ji(r),L=r[6]=="sms"&&es(r),Y=r[6]=="email"&&ts(r);return{c(){e=A("div"),t=A("div"),n=A("button"),i=A("span"),Ce(s.$$.fragment),o=H(),a=A("p"),a.textContent="Back to chat",l=H(),c=A("div"),u=A("button"),p=A("span"),Ce(f.$$.fragment),m=H(),v=A("p"),v.textContent="Whatsapp",b=H(),d=A("button"),w=A("span"),Ce(y.$$.fragment),x=H(),E=A("p"),E.textContent="SMS",R=H(),D=A("button"),j=A("span"),Ce(G.$$.fragment),K=H(),U=A("p"),U.textContent="Email",Q=H(),V=A("div"),P&&P.c(),J=H(),L&&L.c(),ue=H(),Y&&Y.c(),he=H(),ee=A("button"),ee.textContent="Submit",g(i,"class","fill-gray-400"),g(n,"class","w-6 h-25 my-auto transition duration-300 rounded-md mx-1"),g(a,"class","h-25 mx-2 my-auto text-gray-400"),g(t,"class","flex w-full pl-2"),g(p,"class","fill-gray-400 w-10 mx-auto my-auto"),g(v,"class","text-gray-400 mx-auto mb-1"),g(u,"class","h-24 w-28 mx-auto rounded-xl fill-gray-400 flex flex-col border"),g(w,"class","fill-gray-400 w-10 mx-auto my-auto"),g(E,"class","text-gray-400 mx-auto mb-1"),g(d,"class","h-24 w-28 mx-auto rounded-xl fill-gray-400 flex flex-col border"),g(j,"class","fill-gray-400 w-10 mx-auto my-auto"),g(U,"class","text-gray-400 mx-auto mb-1"),g(D,"class","h-24 w-28 mx-auto rounded-xl fill-gray-400 flex flex-col border"),g(c,"class","flex flex-row mt-5"),g(V,"class","flex flex-col mt-5 mx-2 "),g(ee,"class","w-32 h-10 transition duration-300 my-2 mx-auto bg-gray-300 rounded-xl"),g(e,"class","p-2 flex flex-col bg-white rounded-t-xl h-full pt-4")},m($,re){I($,e,re),_(e,t),_(t,n),_(n,i),_e(s,i,null),_(t,o),_(t,a),_(e,l),_(e,c),_(c,u),_(u,p),_e(f,p,null),_(u,m),_(u,v),_(c,b),_(c,d),_(d,w),_e(y,w,null),_(d,x),_(d,E),_(c,R),_(c,D),_(D,j),_e(G,j,null),_(D,K),_(D,U),_(e,Q),_(e,V),P&&P.m(V,null),_(V,J),L&&L.m(V,null),_(V,ue),Y&&Y.m(V,null),_(e,he),_(e,ee),ne=!0,be||(T=[se(n,"click",r[20]),se(u,"click",r[21]),se(d,"click",r[22]),se(D,"click",r[23]),se(ee,"click",r[10])],be=!0)},p($,re){$[6]=="whatsapp"?P?(P.p($,re),re[0]&64&&C(P,1)):(P=Ji($),P.c(),C(P,1),P.m(V,J)):P&&($e(),z(P,1,1,()=>{P=null}),Le()),$[6]=="sms"?L?(L.p($,re),re[0]&64&&C(L,1)):(L=es($),L.c(),C(L,1),L.m(V,ue)):L&&($e(),z(L,1,1,()=>{L=null}),Le()),$[6]=="email"?Y?(Y.p($,re),re[0]&64&&C(Y,1)):(Y=ts($),Y.c(),C(Y,1),Y.m(V,null)):Y&&($e(),z(Y,1,1,()=>{Y=null}),Le())},i($){ne||(C(s.$$.fragment,$),C(f.$$.fragment,$),C(y.$$.fragment,$),C(G.$$.fragment,$),C(P),C(L),C(Y),ne=!0)},o($){z(s.$$.fragment,$),z(f.$$.fragment,$),z(y.$$.fragment,$),z(G.$$.fragment,$),z(P),z(L),z(Y),ne=!1},d($){$&&N(e),ve(s),ve(f),ve(y),ve(G),P&&P.d(),L&&L.d(),Y&&Y.d(),be=!1,nt(T)}}}function Ji(r){let e,t,n;function i(o){r[24](o)}let s={name:"contact",label:"Cellphone Number"};return r[7]!==void 0&&(s.value=r[7]),e=new yr({props:s}),St.push(()=>wr(e,"value",i)),{c(){Ce(e.$$.fragment)},m(o,a){_e(e,o,a),n=!0},p(o,a){const l={};!t&&a[0]&128&&(t=!0,l.value=o[7],br(()=>t=!1)),e.$set(l)},i(o){n||(C(e.$$.fragment,o),n=!0)},o(o){z(e.$$.fragment,o),n=!1},d(o){ve(e,o)}}}function es(r){let e,t,n;function i(o){r[25](o)}let s={name:"contact",label:"Cellphone Number"};return r[7]!==void 0&&(s.value=r[7]),e=new yr({props:s}),St.push(()=>wr(e,"value",i)),{c(){Ce(e.$$.fragment)},m(o,a){_e(e,o,a),n=!0},p(o,a){const l={};!t&&a[0]&128&&(t=!0,l.value=o[7],br(()=>t=!1)),e.$set(l)},i(o){n||(C(e.$$.fragment,o),n=!0)},o(o){z(e.$$.fragment,o),n=!1},d(o){ve(e,o)}}}function ts(r){let e,t,n;function i(o){r[26](o)}let s={name:"contact",label:"Email Address",regex:iu,validationMessage:"Invalid Email"};return r[7]!==void 0&&(s.value=r[7]),e=new ks({props:s}),St.push(()=>wr(e,"value",i)),{c(){Ce(e.$$.fragment)},m(o,a){_e(e,o,a),n=!0},p(o,a){const l={};!t&&a[0]&128&&(t=!0,l.value=o[7],br(()=>t=!1)),e.$set(l)},i(o){n||(C(e.$$.fragment,o),n=!0)},o(o){z(e.$$.fragment,o),n=!1},d(o){ve(e,o)}}}function nu(r){let e,t,n,i,s,o,a=!r[1]&&Hi(r),l=r[1]&&qi(r);return{c(){e=A("style"),e.textContent=`/*
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
.pointer-events-none {
  pointer-events: none;
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
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.inset-y-\\[55px\\] {
  top: 55px;
  bottom: 55px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-16 {
  bottom: 4rem;
}
.left-0 {
  left: 0px;
}
.right-0 {
  right: 0px;
}
.right-4 {
  right: 1rem;
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
.ml-2 {
  margin-left: 0.5rem;
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
.inline-block {
  display: inline-block;
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
.h-20 {
  height: 5rem;
}
.h-24 {
  height: 6rem;
}
.h-3\\/4 {
  height: 75%;
}
.h-6 {
  height: 1.5rem;
}
.h-96 {
  height: 24rem;
}
.h-\\[100px\\] {
  height: 100px;
}
.h-full {
  height: 100%;
}
.max-h-\\[200px\\] {
  max-height: 200px;
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
.max-w-lg {
  max-width: 32rem;
}
.flex-grow {
  flex-grow: 1;
}
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.cursor-default {
  cursor: default;
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
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
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
.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.rounded-r-md {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
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
.border-t {
  border-top-width: 1px;
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
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
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
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
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
.pl-9 {
  padding-left: 2.25rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-9 {
  padding-right: 2.25rem;
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
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
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
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
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
.drop-shadow-\\[0_3px_3px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.4\\)\\] {
  --tw-drop-shadow: drop-shadow(0 3px 3px rgba(0,0,0,0.4));
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
/* containers */
.stubber_webchat_container {
  background-color: white;
  color: black;
}
.stubber_webchat_top_container {
  background-color: rgb(97, 97, 97);
}
.stubber_webchat_middle_container {
  overflow-y: auto;
  background-color: rgb(250, 250, 250);
}
.stubber_webchat_middle_container_switching {
  width: 100%;
  height: 75%;
}
.stubber_webchat_bottom_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  height: 100vh;
}
/* containers */
/* chat button */
.stubber_webchat_enable_button,
.stubber_webchat_switch_button {
  background-color: white;
  color: black;
}
.stubber_webchat_enable_button:hover,
.stubber_webchat_switch_button:hover {
  background-color: grey;
  color: white;
}
.stubber_webchat_enable_button_selected,
.stubber_webchat_switch_button_selected {
  background-color: grey;
  color: white;
}
/* chat button */
/* chat switch button */
/* .stubber_webchat_switch_button {
  background-color: white;
  color: black;
} */
/* chat switch button */
/* top container */
.stubber_webchat_top_container_row {
}
.stubber_webchat_minimize_button {
  background-color: #007bff;
  color: white;
}
.stubber_webchat_minimize_button_svg {
  background-color:rgb(97, 97, 97);
}
.stubber_webchat_minimize_button:hover {
  background-color: lightblue;
  color: white;
}
.stubber_webchat_minimize_button_svg {
  color: white;
  width: 20px;
  height: 20px;
}
/* top container */
/* middle container */
.stubber_webchat_message_box {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
/* Webchat message bubbles outgoing */
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
/* Webchat message bubbles outgoing */
/* Webchat message bubbles incoming */
.stubber_webchat_message_in {
  background-color: #0c74f1;
  float: left;
  text-align: left;
  color: white;
}
.stubber_webchat_message_info_time_in {
  color: white;
}
/* Webchat message bubbles outgoing */
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
.stubber_webchat_message_text_box {
  white-space: pre-wrap;
}
/* Webchat message bubbles common */
/* middle container */
/* bottom container */
.stubber_webchat_message_input_box {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 0;
  display: flex;
  border: none;
}
.stubber_webchat_message_input {
  background-color: white;
  width: 90%;
  border: none;
  padding: 10px;
  border-bottom-left-radius: 20px;
}
.stubber_webchat_message_input:focus {
  outline: none;
}
.stubber_webchat_message_send_button {
  background-color: rgb(97, 97, 97);
  color: white;
}
.stubber_webchat_message_send_button:hover {
  background-color: grey;
  color: white;
}
.stubber_webchat_message_send_button_svg {
  color: white;
  width: 20px;
  height: 20px;
}
.stubber_webchat_switch_box {
  background-color: #0c74f1;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 8%;
  height: 10%;
  border-radius: 9px;
  width: 96%;
  left: 2%;
}
.stubber_webchat_switch_label_box {
  width: 100%;
  height: 40%;
}
.stubber_webchat_switch_button_box {
  width: 100%;
  display: flex;
  height: 60%;
}
.stubber_webchat_switch_text {
  border: none;
  text-align: center;
  font-size: 12px;
  color: white;
}
/* .stubber_webchat_switch_button {
  background-color: white;
  color: black;
  flex-grow: 1;
  flex-basis: 0;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 5px;
  border-radius: 5px;
} */
/* bottom container */
.focus-within\\:ring-2:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.hover\\:bg-gray-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}
.focus\\:border-none:focus {
  border-style: none;
}
.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
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
}
.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}
.group:hover .group-hover\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
@media (min-width: 640px) {

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:leading-6 {
    line-height: 1.5rem;
  }
}`,t=H(),n=A("div"),a&&a.c(),i=H(),l&&l.c(),s=Mn(),g(n,"class","fixed bottom-0 right-0 mb-4 mr-4 h-11 w-96 flex justify-end")},m(c,u){_(tu.head,e),I(c,t,u),I(c,n,u),a&&a.m(n,null),I(c,i,u),l&&l.m(c,u),I(c,s,u),o=!0},p(c,u){c[1]?a&&($e(),z(a,1,1,()=>{a=null}),Le()):a?(a.p(c,u),u[0]&2&&C(a,1)):(a=Hi(c),a.c(),C(a,1),a.m(n,null)),c[1]?l?(l.p(c,u),u[0]&2&&C(l,1)):(l=qi(c),l.c(),C(l,1),l.m(s.parentNode,s)):l&&($e(),z(l,1,1,()=>{l=null}),Le())},i(c){o||(C(a),C(l),o=!0)},o(c){z(a),z(l),o=!1},d(c){c&&(N(t),N(n),N(i),N(s)),N(e),a&&a.d(),l&&l.d(c)}}}let ru="Type message...",iu=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,250})+$/;function su(r,e,t){console.log("stubber webchat v1.2");let{orguuid:n}=e,{chatname:i}=e,{chat_display_name:s}=e,{connect_on_load:o}=e,{passthrough_data:a}=e,l=!0,c=!1,u="",p=[],f,m=!0,v=!1,b="whatsapp",d="",w="https://external-portforward.stubber.zone:6026";$o(()=>{console.log("__Mounted"),o&&l&&y()});let y=()=>{f=Cn(w),f.on("connect",async()=>{console.log("___Connected to server"),p.length==0&&await f.emit("initialize",{webchat_configuration:{orguuid:n,chatname:i,initialize:!0,passthrough_data:a}}),u.length>0&&E()}),f.on("disconnect",()=>{console.log("___Disconnected from server")}),f.on("webchat_message",T=>{let P="in";p.length>0&&(P=p[p.length-1].direction);let L={direction:"in",previous_direction:P,sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:T.webchat_message};p.push(L),t(3,p),j()}),f.on("webchat_client_configuration",T=>{Object.keys(T).forEach(L=>{T[L].type=="allow_switching"&&t(4,m=T[L].value)})}),f.on("error",T=>{console.log("__Stubber Webchat : "+(T==null?void 0:T.error))})},x=T=>{T.key==="Enter"&&u!=""&&E()},E=async()=>{if(!f){y();return}let T="in";p.length>0&&(T=p[p.length-1].direction);let P={direction:"out",previous_direction:T,sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:u};p.push(P),t(3,p),t(2,u=""),j(),f.connected&&(await f.emit("message",{webchat_configuration:{orguuid:n,chatname:i,passthrough_data:a},webchat_message:{type:"text",value:P.message,messageuuid:P.messageuuid}}),v&&await f.emit("client_configuration",{webchat_configuration:{orguuid:n,chatname:i,passthrough_data:a},webchat_client_configuration:{platform_switch:{platform_name:b,value:P.message}}}),P.received=!0,t(3,p))},R=async()=>{if(!f){y();return}f.connected&&await f.emit("client_configuration",{webchat_configuration:{orguuid:n,chatname:i,passthrough_data:a},webchat_client_configuration:{platform_switch:{platform_name:b,value:d}}})},D=T=>{let P=T.getHours().toString().padStart(2,"0");const L=T.getMinutes().toString().padStart(2,"0"),Y=P>=12?"pm":"am";return P=P%12,P=P||12,P+":"+L+" "+Y},j=()=>{setTimeout(()=>{let T=document.getElementById("stubber_webchat_message_box");T.scrollTop=T.scrollHeight},100)},G=()=>{t(1,l=!0),o==="true"&&!c&&y(),c=!0},K=()=>{t(5,v=!0)};us(()=>{ws&&ws.close()}),ar.addHook("afterSanitizeAttributes",function(T){"target"in T&&T.setAttribute("target","_blank"),!T.hasAttribute("target")&&(T.hasAttribute("xlink:href")||T.hasAttribute("href"))&&T.setAttribute("xlink:show","new")});const U=()=>{t(1,l=!1)};function Q(){u=this.value,t(2,u)}const V=()=>{t(5,v=!1)},J=()=>{t(6,b="whatsapp")},ue=()=>{t(6,b="sms")},he=()=>{t(6,b="email")};function ee(T){d=T,t(7,d)}function ne(T){d=T,t(7,d)}function be(T){d=T,t(7,d)}return r.$$set=T=>{"orguuid"in T&&t(14,n=T.orguuid),"chatname"in T&&t(15,i=T.chatname),"chat_display_name"in T&&t(0,s=T.chat_display_name),"connect_on_load"in T&&t(16,o=T.connect_on_load),"passthrough_data"in T&&t(17,a=T.passthrough_data)},[s,l,u,p,m,v,b,d,x,E,R,D,G,K,n,i,o,a,U,Q,V,J,ue,he,ee,ne,be]}class ou extends Re{constructor(e){super(),Ee(this,e,su,nu,Te,{orguuid:14,chatname:15,chat_display_name:0,connect_on_load:16,passthrough_data:17},null,[-1,-1])}get orguuid(){return this.$$.ctx[14]}set orguuid(e){this.$$set({orguuid:e}),te()}get chatname(){return this.$$.ctx[15]}set chatname(e){this.$$set({chatname:e}),te()}get chat_display_name(){return this.$$.ctx[0]}set chat_display_name(e){this.$$set({chat_display_name:e}),te()}get connect_on_load(){return this.$$.ctx[16]}set connect_on_load(e){this.$$set({connect_on_load:e}),te()}get passthrough_data(){return this.$$.ctx[17]}set passthrough_data(e){this.$$set({passthrough_data:e}),te()}}customElements.define("stubber-webchat",Ae(ou,{orguuid:{},chatname:{},chat_display_name:{},connect_on_load:{},passthrough_data:{}},[],[],!1));
