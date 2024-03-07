var zs=Object.defineProperty;var Ds=(i,e,t)=>e in i?zs(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _=(i,e,t)=>(Ds(i,typeof e!="symbol"?e+"":e,t),t),Ps=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var Ft=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)};var ot=(i,e,t)=>(Ps(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function L(){}function Ii(i){return i()}function Qn(){return Object.create(null)}function Je(i){i.forEach(Ii)}function zi(i){return typeof i=="function"}function fe(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function Ms(i){return Object.keys(i).length===0}const Bs=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function k(i,e){i.appendChild(e)}function D(i,e,t){i.insertBefore(e,t||null)}function N(i){i.parentNode&&i.parentNode.removeChild(i)}function Us(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function O(i){return document.createElement(i)}function q(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ue(i){return document.createTextNode(i)}function X(){return ue(" ")}function Di(){return ue("")}function Pi(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function y(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Fs(i){return Array.from(i.childNodes)}function De(i,e){e=""+e,i.data!==e&&(i.data=e)}class Hs{constructor(e=!1){_(this,"is_svg",!1);_(this,"e");_(this,"n");_(this,"t");_(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=q(t.nodeName):this.e=O(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)D(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}function qs(i){const e={};return i.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let Ke;function Ye(i){Ke=i}function Mi(){if(!Ke)throw new Error("Function called outside component initialization");return Ke}function Ws(i){Mi().$$.on_mount.push(i)}function Vs(i){Mi().$$.on_destroy.push(i)}const Le=[],Jn=[];let ze=[];const ei=[],js=Promise.resolve();let Xt=!1;function Gs(){Xt||(Xt=!0,js.then(_e))}function Kt(i){ze.push(i)}const Ht=new Set;let Oe=0;function _e(){if(Oe!==0)return;const i=Ke;do{try{for(;Oe<Le.length;){const e=Le[Oe];Oe++,Ye(e),Ys(e.$$)}}catch(e){throw Le.length=0,Oe=0,e}for(Ye(null),Le.length=0,Oe=0;Jn.length;)Jn.pop()();for(let e=0;e<ze.length;e+=1){const t=ze[e];Ht.has(t)||(Ht.add(t),t())}ze.length=0}while(Le.length);for(;ei.length;)ei.pop()();Xt=!1,Ht.clear(),Ye(i)}function Ys(i){if(i.fragment!==null){i.update(),Je(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Kt)}}function Zs(i){const e=[],t=[];ze.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),ze=e}const mt=new Set;let ke;function ti(){ke={r:0,c:[],p:ke}}function ni(){ke.r||Je(ke.c),ke=ke.p}function he(i,e){i&&i.i&&(mt.delete(i),i.i(e))}function Ie(i,e,t,n){if(i&&i.o){if(mt.has(i))return;mt.add(i),ke.c.push(()=>{mt.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function ii(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Bi(i){i&&i.c()}function hn(i,e,t){const{fragment:n,after_update:s}=i.$$;n&&n.m(e,t),Kt(()=>{const o=i.$$.on_mount.map(Ii).filter(zi);i.$$.on_destroy?i.$$.on_destroy.push(...o):Je(o),i.$$.on_mount=[]}),s.forEach(Kt)}function un(i,e){const t=i.$$;t.fragment!==null&&(Zs(t.after_update),Je(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Xs(i,e){i.$$.dirty[0]===-1&&(Le.push(i),Gs(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function pe(i,e,t,n,s,o,r=null,a=[-1]){const l=Ke;Ye(i);const h=i.$$={fragment:null,ctx:[],props:o,update:L,not_equal:s,bound:Qn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Qn(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};r&&r(h.root);let u=!1;if(h.ctx=t?t(i,e.props||{},(d,p,...b)=>{const R=b.length?b[0]:p;return h.ctx&&s(h.ctx[d],h.ctx[d]=R)&&(!h.skip_bound&&h.bound[d]&&h.bound[d](R),u&&Xs(i,d)),p}):[],h.update(),u=!0,Je(h.before_update),h.fragment=n?n(h.ctx):!1,e.target){if(e.hydrate){const d=Fs(e.target);h.fragment&&h.fragment.l(d),d.forEach(N)}else h.fragment&&h.fragment.c();e.intro&&he(i.$$.fragment),hn(i,e.target,e.anchor),_e()}Ye(l)}let Ui;typeof HTMLElement=="function"&&(Ui=class extends HTMLElement{constructor(e,t,n){super();_(this,"$$ctor");_(this,"$$s");_(this,"$$c");_(this,"$$cn",!1);_(this,"$$d",{});_(this,"$$r",!1);_(this,"$$p_d",{});_(this,"$$l",{});_(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const s=this.$$c.$on(e,t);this.$$l_u.set(t,s)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const s=this.$$l_u.get(t);s&&(s(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(r){return()=>{let a;return{c:function(){a=O("slot"),r!=="default"&&y(a,"name",r)},m:function(u,d){D(u,a,d)},d:function(u){u&&N(a)}}}};var e=t;if(await Promise.resolve(),!this.$$cn)return;const n={},s=qs(this);for(const r of this.$$s)r in s&&(n[r]=[t(r)]);for(const r of this.attributes){const a=this.$$g_p(r.name);a in this.$$d||(this.$$d[a]=bt(a,r.value,this.$$p_d,"toProp"))}for(const r in this.$$p_d)!(r in this.$$d)&&this[r]!==void 0&&(this.$$d[r]=this[r],delete this[r]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const o=()=>{this.$$r=!0;for(const r in this.$$p_d)if(this.$$d[r]=this.$$c.$$.ctx[this.$$c.$$.props[r]],this.$$p_d[r].reflect){const a=bt(r,this.$$d[r],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[r].attribute||r):this.setAttribute(this.$$p_d[r].attribute||r,a)}this.$$r=!1};this.$$c.$$.after_update.push(o),o();for(const r in this.$$l)for(const a of this.$$l[r]){const l=this.$$c.$on(r,a);this.$$l_u.set(a,l)}this.$$l={}}}attributeChangedCallback(e,t,n){var s;this.$$r||(e=this.$$g_p(e),this.$$d[e]=bt(e,n,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function bt(i,e,t,n){var o;const s=(o=t[i])==null?void 0:o.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!t[i])return e;if(n==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function de(i,e,t,n,s,o){let r=class extends Ui{constructor(){super(i,t,s),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(r.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){var h;l=bt(a,l,e),this.$$d[a]=l,(h=this.$$c)==null||h.$set({[a]:l})}})}),n.forEach(a=>{Object.defineProperty(r.prototype,a,{get(){var l;return(l=this.$$c)==null?void 0:l[a]}})}),o&&(r=o(r)),i.element=r,r}class ge{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){un(this,1),this.$destroy=L}$on(e,t){if(!zi(t))return L;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Ms(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ks="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ks);/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */const{entries:Fi,setPrototypeOf:si,isFrozen:Qs,getPrototypeOf:Js,getOwnPropertyDescriptor:er}=Object;let{freeze:W,seal:ne,create:Hi}=Object,{apply:Qt,construct:Jt}=typeof Reflect<"u"&&Reflect;W||(W=function(e){return e});ne||(ne=function(e){return e});Qt||(Qt=function(e,t,n){return e.apply(t,n)});Jt||(Jt=function(e,t){return new e(...t)});const at=K(Array.prototype.forEach),ri=K(Array.prototype.pop),He=K(Array.prototype.push),wt=K(String.prototype.toLowerCase),qt=K(String.prototype.toString),tr=K(String.prototype.match),qe=K(String.prototype.replace),nr=K(String.prototype.indexOf),ir=K(String.prototype.trim),ee=K(Object.prototype.hasOwnProperty),Y=K(RegExp.prototype.test),We=sr(TypeError);function K(i){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return Qt(i,e,n)}}function sr(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Jt(i,t)}}function T(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:wt;si&&si(i,null);let n=e.length;for(;n--;){let s=e[n];if(typeof s=="string"){const o=t(s);o!==s&&(Qs(e)||(e[n]=o),s=o)}i[s]=!0}return i}function rr(i){for(let e=0;e<i.length;e++)ee(i,e)||(i[e]=null);return i}function ye(i){const e=Hi(null);for(const[t,n]of Fi(i))ee(i,t)&&(Array.isArray(n)?e[t]=rr(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=ye(n):e[t]=n);return e}function lt(i,e){for(;i!==null;){const n=er(i,e);if(n){if(n.get)return K(n.get);if(typeof n.value=="function")return K(n.value)}i=Js(i)}function t(){return null}return t}const oi=W(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Wt=W(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Vt=W(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),or=W(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),jt=W(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ar=W(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ai=W(["#text"]),li=W(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Gt=W(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ci=W(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ct=W(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),lr=ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm),cr=ne(/<%[\w\W]*|[\w\W]*%>/gm),hr=ne(/\${[\w\W]*}/gm),ur=ne(/^data-[\-\w.\u00B7-\uFFFF]/),fr=ne(/^aria-[\-\w]+$/),qi=ne(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),pr=ne(/^(?:\w+script|data):/i),dr=ne(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Wi=ne(/^html$/i);var hi=Object.freeze({__proto__:null,MUSTACHE_EXPR:lr,ERB_EXPR:cr,TMPLIT_EXPR:hr,DATA_ATTR:ur,ARIA_ATTR:fr,IS_ALLOWED_URI:qi,IS_SCRIPT_OR_DATA:pr,ATTR_WHITESPACE:dr,DOCTYPE_NAME:Wi});const gr=function(){return typeof window>"u"?null:window},mr=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(n=t.getAttribute(s));const o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML(r){return r},createScriptURL(r){return r}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function Vi(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gr();const e=m=>Vi(m);if(e.version="3.0.9",e.removed=[],!i||!i.document||i.document.nodeType!==9)return e.isSupported=!1,e;let{document:t}=i;const n=t,s=n.currentScript,{DocumentFragment:o,HTMLTemplateElement:r,Node:a,Element:l,NodeFilter:h,NamedNodeMap:u=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:d,DOMParser:p,trustedTypes:b}=i,R=l.prototype,I=lt(R,"cloneNode"),$=lt(R,"nextSibling"),E=lt(R,"childNodes"),V=lt(R,"parentNode");if(typeof r=="function"){const m=t.createElement("template");m.content&&m.content.ownerDocument&&(t=m.content.ownerDocument)}let x,w="";const{implementation:Q,createNodeIterator:ve,createDocumentFragment:_s,getElementsByTagName:ks}=t,{importNode:xs}=n;let ie={};e.isSupported=typeof Fi=="function"&&typeof V=="function"&&Q&&Q.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:St,ERB_EXPR:$t,TMPLIT_EXPR:Ct,DATA_ATTR:Ts,ARIA_ATTR:vs,IS_SCRIPT_OR_DATA:Es,ATTR_WHITESPACE:En}=hi;let{IS_ALLOWED_URI:An}=hi,M=null;const Rn=T({},[...oi,...Wt,...Vt,...jt,...ai]);let B=null;const Sn=T({},[...li,...Gt,...ci,...ct]);let z=Object.seal(Hi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Me=null,Ot=null,$n=!0,Lt=!0,Cn=!1,On=!0,Ee=!1,me=!1,Nt=!1,It=!1,Ae=!1,nt=!1,it=!1,Ln=!0,Nn=!1;const As="user-content-";let zt=!0,Be=!1,Re={},Se=null;const In=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let zn=null;const Dn=T({},["audio","video","img","source","image","track"]);let Dt=null;const Pn=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),st="http://www.w3.org/1998/Math/MathML",rt="http://www.w3.org/2000/svg",le="http://www.w3.org/1999/xhtml";let $e=le,Pt=!1,Mt=null;const Rs=T({},[st,rt,le],qt);let Ue=null;const Ss=["application/xhtml+xml","text/html"],$s="text/html";let U=null,Ce=null;const Cs=t.createElement("form"),Mn=function(c){return c instanceof RegExp||c instanceof Function},Bt=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ce&&Ce===c)){if((!c||typeof c!="object")&&(c={}),c=ye(c),Ue=Ss.indexOf(c.PARSER_MEDIA_TYPE)===-1?$s:c.PARSER_MEDIA_TYPE,U=Ue==="application/xhtml+xml"?qt:wt,M=ee(c,"ALLOWED_TAGS")?T({},c.ALLOWED_TAGS,U):Rn,B=ee(c,"ALLOWED_ATTR")?T({},c.ALLOWED_ATTR,U):Sn,Mt=ee(c,"ALLOWED_NAMESPACES")?T({},c.ALLOWED_NAMESPACES,qt):Rs,Dt=ee(c,"ADD_URI_SAFE_ATTR")?T(ye(Pn),c.ADD_URI_SAFE_ATTR,U):Pn,zn=ee(c,"ADD_DATA_URI_TAGS")?T(ye(Dn),c.ADD_DATA_URI_TAGS,U):Dn,Se=ee(c,"FORBID_CONTENTS")?T({},c.FORBID_CONTENTS,U):In,Me=ee(c,"FORBID_TAGS")?T({},c.FORBID_TAGS,U):{},Ot=ee(c,"FORBID_ATTR")?T({},c.FORBID_ATTR,U):{},Re=ee(c,"USE_PROFILES")?c.USE_PROFILES:!1,$n=c.ALLOW_ARIA_ATTR!==!1,Lt=c.ALLOW_DATA_ATTR!==!1,Cn=c.ALLOW_UNKNOWN_PROTOCOLS||!1,On=c.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ee=c.SAFE_FOR_TEMPLATES||!1,me=c.WHOLE_DOCUMENT||!1,Ae=c.RETURN_DOM||!1,nt=c.RETURN_DOM_FRAGMENT||!1,it=c.RETURN_TRUSTED_TYPE||!1,It=c.FORCE_BODY||!1,Ln=c.SANITIZE_DOM!==!1,Nn=c.SANITIZE_NAMED_PROPS||!1,zt=c.KEEP_CONTENT!==!1,Be=c.IN_PLACE||!1,An=c.ALLOWED_URI_REGEXP||qi,$e=c.NAMESPACE||le,z=c.CUSTOM_ELEMENT_HANDLING||{},c.CUSTOM_ELEMENT_HANDLING&&Mn(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(z.tagNameCheck=c.CUSTOM_ELEMENT_HANDLING.tagNameCheck),c.CUSTOM_ELEMENT_HANDLING&&Mn(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(z.attributeNameCheck=c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),c.CUSTOM_ELEMENT_HANDLING&&typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(z.allowCustomizedBuiltInElements=c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ee&&(Lt=!1),nt&&(Ae=!0),Re&&(M=T({},ai),B=[],Re.html===!0&&(T(M,oi),T(B,li)),Re.svg===!0&&(T(M,Wt),T(B,Gt),T(B,ct)),Re.svgFilters===!0&&(T(M,Vt),T(B,Gt),T(B,ct)),Re.mathMl===!0&&(T(M,jt),T(B,ci),T(B,ct))),c.ADD_TAGS&&(M===Rn&&(M=ye(M)),T(M,c.ADD_TAGS,U)),c.ADD_ATTR&&(B===Sn&&(B=ye(B)),T(B,c.ADD_ATTR,U)),c.ADD_URI_SAFE_ATTR&&T(Dt,c.ADD_URI_SAFE_ATTR,U),c.FORBID_CONTENTS&&(Se===In&&(Se=ye(Se)),T(Se,c.FORBID_CONTENTS,U)),zt&&(M["#text"]=!0),me&&T(M,["html","head","body"]),M.table&&(T(M,["tbody"]),delete Me.tbody),c.TRUSTED_TYPES_POLICY){if(typeof c.TRUSTED_TYPES_POLICY.createHTML!="function")throw We('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof c.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw We('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');x=c.TRUSTED_TYPES_POLICY,w=x.createHTML("")}else x===void 0&&(x=mr(b,s)),x!==null&&typeof w=="string"&&(w=x.createHTML(""));W&&W(c),Ce=c}},Bn=T({},["mi","mo","mn","ms","mtext"]),Un=T({},["foreignobject","desc","title","annotation-xml"]),Os=T({},["title","style","font","a","script"]),Fn=T({},[...Wt,...Vt,...or]),Hn=T({},[...jt,...ar]),Ls=function(c){let f=V(c);(!f||!f.tagName)&&(f={namespaceURI:$e,tagName:"template"});const g=wt(c.tagName),C=wt(f.tagName);return Mt[c.namespaceURI]?c.namespaceURI===rt?f.namespaceURI===le?g==="svg":f.namespaceURI===st?g==="svg"&&(C==="annotation-xml"||Bn[C]):!!Fn[g]:c.namespaceURI===st?f.namespaceURI===le?g==="math":f.namespaceURI===rt?g==="math"&&Un[C]:!!Hn[g]:c.namespaceURI===le?f.namespaceURI===rt&&!Un[C]||f.namespaceURI===st&&!Bn[C]?!1:!Hn[g]&&(Os[g]||!Fn[g]):!!(Ue==="application/xhtml+xml"&&Mt[c.namespaceURI]):!1},be=function(c){He(e.removed,{element:c});try{c.parentNode.removeChild(c)}catch{c.remove()}},Ut=function(c,f){try{He(e.removed,{attribute:f.getAttributeNode(c),from:f})}catch{He(e.removed,{attribute:null,from:f})}if(f.removeAttribute(c),c==="is"&&!B[c])if(Ae||nt)try{be(f)}catch{}else try{f.setAttribute(c,"")}catch{}},qn=function(c){let f=null,g=null;if(It)c="<remove></remove>"+c;else{const H=tr(c,/^[\r\n\t ]+/);g=H&&H[0]}Ue==="application/xhtml+xml"&&$e===le&&(c='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+c+"</body></html>");const C=x?x.createHTML(c):c;if($e===le)try{f=new p().parseFromString(C,Ue)}catch{}if(!f||!f.documentElement){f=Q.createDocument($e,"template",null);try{f.documentElement.innerHTML=Pt?w:C}catch{}}const F=f.body||f.documentElement;return c&&g&&F.insertBefore(t.createTextNode(g),F.childNodes[0]||null),$e===le?ks.call(f,me?"html":"body")[0]:me?f.documentElement:F},Wn=function(c){return ve.call(c.ownerDocument||c,c,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT,null)},Ns=function(c){return c instanceof d&&(typeof c.nodeName!="string"||typeof c.textContent!="string"||typeof c.removeChild!="function"||!(c.attributes instanceof u)||typeof c.removeAttribute!="function"||typeof c.setAttribute!="function"||typeof c.namespaceURI!="string"||typeof c.insertBefore!="function"||typeof c.hasChildNodes!="function")},Vn=function(c){return typeof a=="function"&&c instanceof a},ce=function(c,f,g){ie[c]&&at(ie[c],C=>{C.call(e,f,g,Ce)})},jn=function(c){let f=null;if(ce("beforeSanitizeElements",c,null),Ns(c))return be(c),!0;const g=U(c.nodeName);if(ce("uponSanitizeElement",c,{tagName:g,allowedTags:M}),c.hasChildNodes()&&!Vn(c.firstElementChild)&&Y(/<[/\w]/g,c.innerHTML)&&Y(/<[/\w]/g,c.textContent))return be(c),!0;if(!M[g]||Me[g]){if(!Me[g]&&Yn(g)&&(z.tagNameCheck instanceof RegExp&&Y(z.tagNameCheck,g)||z.tagNameCheck instanceof Function&&z.tagNameCheck(g)))return!1;if(zt&&!Se[g]){const C=V(c)||c.parentNode,F=E(c)||c.childNodes;if(F&&C){const H=F.length;for(let j=H-1;j>=0;--j)C.insertBefore(I(F[j],!0),$(c))}}return be(c),!0}return c instanceof l&&!Ls(c)||(g==="noscript"||g==="noembed"||g==="noframes")&&Y(/<\/no(script|embed|frames)/i,c.innerHTML)?(be(c),!0):(Ee&&c.nodeType===3&&(f=c.textContent,at([St,$t,Ct],C=>{f=qe(f,C," ")}),c.textContent!==f&&(He(e.removed,{element:c.cloneNode()}),c.textContent=f)),ce("afterSanitizeElements",c,null),!1)},Gn=function(c,f,g){if(Ln&&(f==="id"||f==="name")&&(g in t||g in Cs))return!1;if(!(Lt&&!Ot[f]&&Y(Ts,f))){if(!($n&&Y(vs,f))){if(!B[f]||Ot[f]){if(!(Yn(c)&&(z.tagNameCheck instanceof RegExp&&Y(z.tagNameCheck,c)||z.tagNameCheck instanceof Function&&z.tagNameCheck(c))&&(z.attributeNameCheck instanceof RegExp&&Y(z.attributeNameCheck,f)||z.attributeNameCheck instanceof Function&&z.attributeNameCheck(f))||f==="is"&&z.allowCustomizedBuiltInElements&&(z.tagNameCheck instanceof RegExp&&Y(z.tagNameCheck,g)||z.tagNameCheck instanceof Function&&z.tagNameCheck(g))))return!1}else if(!Dt[f]){if(!Y(An,qe(g,En,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&c!=="script"&&nr(g,"data:")===0&&zn[c])){if(!(Cn&&!Y(Es,qe(g,En,"")))){if(g)return!1}}}}}}return!0},Yn=function(c){return c!=="annotation-xml"&&c.indexOf("-")>0},Zn=function(c){ce("beforeSanitizeAttributes",c,null);const{attributes:f}=c;if(!f)return;const g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:B};let C=f.length;for(;C--;){const F=f[C],{name:H,namespaceURI:j,value:we}=F,Fe=U(H);let G=H==="value"?we:ir(we);if(g.attrName=Fe,g.attrValue=G,g.keepAttr=!0,g.forceKeepAttr=void 0,ce("uponSanitizeAttribute",c,g),G=g.attrValue,g.forceKeepAttr||(Ut(H,c),!g.keepAttr))continue;if(!On&&Y(/\/>/i,G)){Ut(H,c);continue}Ee&&at([St,$t,Ct],Kn=>{G=qe(G,Kn," ")});const Xn=U(c.nodeName);if(Gn(Xn,Fe,G)){if(Nn&&(Fe==="id"||Fe==="name")&&(Ut(H,c),G=As+G),x&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!j)switch(b.getAttributeType(Xn,Fe)){case"TrustedHTML":{G=x.createHTML(G);break}case"TrustedScriptURL":{G=x.createScriptURL(G);break}}try{j?c.setAttributeNS(j,H,G):c.setAttribute(H,G),ri(e.removed)}catch{}}}ce("afterSanitizeAttributes",c,null)},Is=function m(c){let f=null;const g=Wn(c);for(ce("beforeSanitizeShadowDOM",c,null);f=g.nextNode();)ce("uponSanitizeShadowNode",f,null),!jn(f)&&(f.content instanceof o&&m(f.content),Zn(f));ce("afterSanitizeShadowDOM",c,null)};return e.sanitize=function(m){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=null,g=null,C=null,F=null;if(Pt=!m,Pt&&(m="<!-->"),typeof m!="string"&&!Vn(m))if(typeof m.toString=="function"){if(m=m.toString(),typeof m!="string")throw We("dirty is not a string, aborting")}else throw We("toString is not a function");if(!e.isSupported)return m;if(Nt||Bt(c),e.removed=[],typeof m=="string"&&(Be=!1),Be){if(m.nodeName){const we=U(m.nodeName);if(!M[we]||Me[we])throw We("root node is forbidden and cannot be sanitized in-place")}}else if(m instanceof a)f=qn("<!---->"),g=f.ownerDocument.importNode(m,!0),g.nodeType===1&&g.nodeName==="BODY"||g.nodeName==="HTML"?f=g:f.appendChild(g);else{if(!Ae&&!Ee&&!me&&m.indexOf("<")===-1)return x&&it?x.createHTML(m):m;if(f=qn(m),!f)return Ae?null:it?w:""}f&&It&&be(f.firstChild);const H=Wn(Be?m:f);for(;C=H.nextNode();)jn(C)||(C.content instanceof o&&Is(C.content),Zn(C));if(Be)return m;if(Ae){if(nt)for(F=_s.call(f.ownerDocument);f.firstChild;)F.appendChild(f.firstChild);else F=f;return(B.shadowroot||B.shadowrootmode)&&(F=xs.call(n,F,!0)),F}let j=me?f.outerHTML:f.innerHTML;return me&&M["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&Y(Wi,f.ownerDocument.doctype.name)&&(j="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+j),Ee&&at([St,$t,Ct],we=>{j=qe(j,we," ")}),x&&it?x.createHTML(j):j},e.setConfig=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Bt(m),Nt=!0},e.clearConfig=function(){Ce=null,Nt=!1},e.isValidAttribute=function(m,c,f){Ce||Bt({});const g=U(m),C=U(c);return Gn(g,C,f)},e.addHook=function(m,c){typeof c=="function"&&(ie[m]=ie[m]||[],He(ie[m],c))},e.removeHook=function(m){if(ie[m])return ri(ie[m])},e.removeHooks=function(m){ie[m]&&(ie[m]=[])},e.removeAllHooks=function(){ie={}},e}var en=Vi();function fn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Te=fn();function ji(i){Te=i}const Gi=/[&<>"']/,br=new RegExp(Gi.source,"g"),Yi=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,wr=new RegExp(Yi.source,"g"),yr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ui=i=>yr[i];function Z(i,e){if(e){if(Gi.test(i))return i.replace(br,ui)}else if(Yi.test(i))return i.replace(wr,ui);return i}const _r=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function kr(i){return i.replace(_r,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const xr=/(^|[^\[])\^/g;function S(i,e){let t=typeof i=="string"?i:i.source;e=e||"";const n={replace:(s,o)=>{let r=typeof o=="string"?o:o.source;return r=r.replace(xr,"$1"),t=t.replace(s,r),n},getRegex:()=>new RegExp(t,e)};return n}function fi(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const Ze={exec:()=>null};function pi(i,e){const t=i.replace(/\|/g,(o,r,a)=>{let l=!1,h=r;for(;--h>=0&&a[h]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function ht(i,e,t){const n=i.length;if(n===0)return"";let s=0;for(;s<n;){const o=i.charAt(n-s-1);if(o===e&&!t)s++;else if(o!==e&&t)s++;else break}return i.slice(0,n-s)}function Tr(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<i.length;n++)if(i[n]==="\\")n++;else if(i[n]===e[0])t++;else if(i[n]===e[1]&&(t--,t<0))return n;return-1}function di(i,e,t,n){const s=e.href,o=e.title?Z(e.title):null,r=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:t,href:s,title:o,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,a}return{type:"image",raw:t,href:s,title:o,text:Z(r)}}function vr(i,e){const t=i.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const o=s.match(/^\s+/);if(o===null)return s;const[r]=o;return r.length>=n.length?s.slice(n.length):s}).join(`
`)}class xt{constructor(e){_(this,"options");_(this,"rules");_(this,"lexer");this.options=e||Te}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ht(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=vr(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const s=ht(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=ht(t[0].replace(/^ *>[ \t]?/gm,""),`
`),s=this.lexer.state.top;this.lexer.state.top=!0;const o=this.lexer.blockTokens(n);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,o={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const r=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",h=!1;for(;e;){let u=!1;if(!(t=r.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let d=t[2].split(`
`,1)[0].replace(/^\t+/,E=>" ".repeat(3*E.length)),p=e.split(`
`,1)[0],b=0;this.options.pedantic?(b=2,l=d.trimStart()):(b=t[2].search(/[^ ]/),b=b>4?1:b,l=d.slice(b),b+=t[1].length);let R=!1;if(!d&&/^ *$/.test(p)&&(a+=p+`
`,e=e.substring(p.length+1),u=!0),!u){const E=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),V=new RegExp(`^ {0,${Math.min(3,b-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),x=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:\`\`\`|~~~)`),w=new RegExp(`^ {0,${Math.min(3,b-1)}}#`);for(;e;){const Q=e.split(`
`,1)[0];if(p=Q,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),x.test(p)||w.test(p)||E.test(p)||V.test(e))break;if(p.search(/[^ ]/)>=b||!p.trim())l+=`
`+p.slice(b);else{if(R||d.search(/[^ ]/)>=4||x.test(d)||w.test(d)||V.test(d))break;l+=`
`+p}!R&&!p.trim()&&(R=!0),a+=Q+`
`,e=e.substring(Q.length+1),d=p.slice(b)}}o.loose||(h?o.loose=!0:/\n *\n *$/.test(a)&&(h=!0));let I=null,$;this.options.gfm&&(I=/^\[[ xX]\] /.exec(l),I&&($=I[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:a,task:!!I,checked:$,loose:!1,text:l,tokens:[]}),o.raw+=a}o.items[o.items.length-1].raw=a.trimEnd(),o.items[o.items.length-1].text=l.trimEnd(),o.raw=o.raw.trimEnd();for(let u=0;u<o.items.length;u++)if(this.lexer.state.top=!1,o.items[u].tokens=this.lexer.blockTokens(o.items[u].text,[]),!o.loose){const d=o.items[u].tokens.filter(b=>b.type==="space"),p=d.length>0&&d.some(b=>/\n.*\n/.test(b.raw));o.loose=p}if(o.loose)for(let u=0;u<o.items.length;u++)o.items[u].loose=!0;return o}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:o}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=pi(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],r={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const a of s)/^ *-+: *$/.test(a)?r.align.push("right"):/^ *:-+: *$/.test(a)?r.align.push("center"):/^ *:-+ *$/.test(a)?r.align.push("left"):r.align.push(null);for(const a of n)r.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of o)r.rows.push(pi(a,r.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return r}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Z(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=ht(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=Tr(t[2],"()");if(r>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],o="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);r&&(s=r[1],o=r[3])}else o=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),di(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(/\s+/g," "),o=t[s.toLowerCase()];if(!o){const r=n[0].charAt(0);return{type:"text",raw:r,text:r}}return di(n,o,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=[...s[0]].length-1;let a,l,h=r,u=0;const d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+r);(s=d.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){h+=l;continue}else if((s[5]||s[6])&&r%3&&!((r+l)%3)){u+=l;continue}if(h-=l,h>0)continue;l=Math.min(l,l+h+u);const p=[...s[0]][0].length,b=e.slice(0,r+s.index+p+l);if(Math.min(r,l)%2){const I=b.slice(1,-1);return{type:"em",raw:b,text:I,tokens:this.lexer.inlineTokens(I)}}const R=b.slice(2,-2);return{type:"strong",raw:b,text:R,tokens:this.lexer.inlineTokens(R)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return s&&o&&(n=n.substring(1,n.length-1)),n=Z(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=Z(t[1]),s="mailto:"+n):(n=Z(t[1]),s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,o;if(t[2]==="@")s=Z(t[0]),o="mailto:"+s;else{let r;do r=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(r!==t[0]);s=Z(t[0]),t[1]==="www."?o="http://"+t[0]:o=t[0]}return{type:"link",raw:t[0],text:s,href:o,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=Z(t[0]),{type:"text",raw:t[0],text:n}}}}const Er=/^(?: *(?:\n|$))+/,Ar=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Rr=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,et=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Sr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Zi=/(?:[*+-]|\d{1,9}[.)])/,Xi=S(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Zi).getRegex(),pn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,$r=/^[^\n]+/,dn=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Cr=S(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",dn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Or=S(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Zi).getRegex(),At="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Lr=S("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",gn).replace("tag",At).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ki=S(pn).replace("hr",et).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",At).getRegex(),Nr=S(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ki).getRegex(),mn={blockquote:Nr,code:Ar,def:Cr,fences:Rr,heading:Sr,hr:et,html:Lr,lheading:Xi,list:Or,newline:Er,paragraph:Ki,table:Ze,text:$r},gi=S("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",et).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",At).getRegex(),Ir={...mn,table:gi,paragraph:S(pn).replace("hr",et).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",gi).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",At).getRegex()},zr={...mn,html:S(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gn).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ze,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:S(pn).replace("hr",et).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Xi).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Qi=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Dr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ji=/^( {2,}|\\)\n(?!\s*$)/,Pr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,tt="\\p{P}\\p{S}",Mr=S(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,tt).getRegex(),Br=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Ur=S(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,tt).getRegex(),Fr=S("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,tt).getRegex(),Hr=S("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,tt).getRegex(),qr=S(/\\([punct])/,"gu").replace(/punct/g,tt).getRegex(),Wr=S(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vr=S(gn).replace("(?:-->|$)","-->").getRegex(),jr=S("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Tt=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Gr=S(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Tt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),es=S(/^!?\[(label)\]\[(ref)\]/).replace("label",Tt).replace("ref",dn).getRegex(),ts=S(/^!?\[(ref)\](?:\[\])?/).replace("ref",dn).getRegex(),Yr=S("reflink|nolink(?!\\()","g").replace("reflink",es).replace("nolink",ts).getRegex(),bn={_backpedal:Ze,anyPunctuation:qr,autolink:Wr,blockSkip:Br,br:Ji,code:Dr,del:Ze,emStrongLDelim:Ur,emStrongRDelimAst:Fr,emStrongRDelimUnd:Hr,escape:Qi,link:Gr,nolink:ts,punctuation:Mr,reflink:es,reflinkSearch:Yr,tag:jr,text:Pr,url:Ze},Zr={...bn,link:S(/^!?\[(label)\]\((.*?)\)/).replace("label",Tt).getRegex(),reflink:S(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Tt).getRegex()},tn={...bn,escape:S(Qi).replace("])","~|])").getRegex(),url:S(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Xr={...tn,br:S(Ji).replace("{2,}","*").getRegex(),text:S(tn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ut={normal:mn,gfm:Ir,pedantic:zr},Ve={normal:bn,gfm:tn,breaks:Xr,pedantic:Zr};class se{constructor(e){_(this,"tokens");_(this,"options");_(this,"state");_(this,"tokenizer");_(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Te,this.options.tokenizer=this.options.tokenizer||new xt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ut.normal,inline:Ve.normal};this.options.pedantic?(t.block=ut.pedantic,t.inline=Ve.pedantic):this.options.gfm&&(t.block=ut.gfm,this.options.breaks?t.inline=Ve.breaks:t.inline=Ve.gfm),this.tokenizer.rules=t}static get rules(){return{block:ut,inline:Ve}}static lex(e,t){return new se(t).lex(e)}static lexInline(e,t){return new se(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,h)=>l+"    ".repeat(h.length));let n,s,o,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let h;this.options.extensions.startBlock.forEach(u=>{h=u.call({lexer:this},l),typeof h=="number"&&h>=0&&(a=Math.min(a,h))}),a<1/0&&a>=0&&(o=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){s=t[t.length-1],r&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),r=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,o,r=e,a,l,h;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,a.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(h=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const d=e.slice(1);let p;this.options.extensions.startInline.forEach(b=>{p=b.call({lexer:this},d),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(o=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(o)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),l=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class vt{constructor(e){_(this,"options");this.options=e||Te}code(e,t,n){var o;const s=(o=(t||"").match(/^\S*/))==null?void 0:o[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+Z(s)+'">'+(n?e:Z(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:Z(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const s=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+s+o+`>
`+e+"</"+s+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const s=fi(e);if(s===null)return n;e=s;let o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+n+"</a>",o}image(e,t,n){const s=fi(e);if(s===null)return n;e=s;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(e){return e}}class wn{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class re{constructor(e){_(this,"options");_(this,"renderer");_(this,"textRenderer");this.options=e||Te,this.options.renderer=this.options.renderer||new vt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new wn}static parse(e,t){return new re(t).parse(e)}static parseInline(e,t){return new re(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const o=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const r=o,a=this.options.extensions.renderers[r.type].call({parser:this},r);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){n+=a||"";continue}}switch(o.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const r=o;n+=this.renderer.heading(this.parseInline(r.tokens),r.depth,kr(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=o;n+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=o;let a="",l="";for(let u=0;u<r.header.length;u++)l+=this.renderer.tablecell(this.parseInline(r.header[u].tokens),{header:!0,align:r.align[u]});a+=this.renderer.tablerow(l);let h="";for(let u=0;u<r.rows.length;u++){const d=r.rows[u];l="";for(let p=0;p<d.length;p++)l+=this.renderer.tablecell(this.parseInline(d[p].tokens),{header:!1,align:r.align[p]});h+=this.renderer.tablerow(l)}n+=this.renderer.table(a,h);continue}case"blockquote":{const r=o,a=this.parse(r.tokens);n+=this.renderer.blockquote(a);continue}case"list":{const r=o,a=r.ordered,l=r.start,h=r.loose;let u="";for(let d=0;d<r.items.length;d++){const p=r.items[d],b=p.checked,R=p.task;let I="";if(p.task){const $=this.renderer.checkbox(!!b);h?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=$+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=$+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:$+" "}):I+=$+" "}I+=this.parse(p.tokens,h),u+=this.renderer.listitem(I,R,!!b)}n+=this.renderer.list(u,a,l);continue}case"html":{const r=o;n+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=o;n+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=o,a=r.tokens?this.parseInline(r.tokens):r.text;for(;s+1<e.length&&e[s+1].type==="text";)r=e[++s],a+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);n+=t?this.renderer.paragraph(a):a;continue}default:{const r='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){const o=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){const r=this.options.extensions.renderers[o.type].call({parser:this},o);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=r||"";continue}}switch(o.type){case"escape":{const r=o;n+=t.text(r.text);break}case"html":{const r=o;n+=t.html(r.text);break}case"link":{const r=o;n+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{const r=o;n+=t.image(r.href,r.title,r.text);break}case"strong":{const r=o;n+=t.strong(this.parseInline(r.tokens,t));break}case"em":{const r=o;n+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{const r=o;n+=t.codespan(r.text);break}case"br":{n+=t.br();break}case"del":{const r=o;n+=t.del(this.parseInline(r.tokens,t));break}case"text":{const r=o;n+=t.text(r.text);break}default:{const r='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return n}}class Xe{constructor(e){_(this,"options");this.options=e||Te}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}_(Xe,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Qe,nn,Et,ns;class Kr{constructor(...e){Ft(this,Qe);Ft(this,Et);_(this,"defaults",fn());_(this,"options",this.setOptions);_(this,"parse",ot(this,Qe,nn).call(this,se.lex,re.parse));_(this,"parseInline",ot(this,Qe,nn).call(this,se.lexInline,re.parseInline));_(this,"Parser",re);_(this,"Renderer",vt);_(this,"TextRenderer",wn);_(this,"Lexer",se);_(this,"Tokenizer",xt);_(this,"Hooks",Xe);this.use(...e)}walkTokens(e,t){var s,o;let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const a=r;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const h of l)n=n.concat(this.walkTokens(h.tokens,t));break}case"list":{const a=r;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=r;(o=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&o[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const h=a[l].flat(1/0);n=n.concat(this.walkTokens(h,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){const r=t.renderers[o.name];r?t.renderers[o.name]=function(...a){let l=o.renderer.apply(this,a);return l===!1&&(l=r.apply(this,a)),l}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=t[o.level];r?r.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),s.extensions=t),n.renderer){const o=this.defaults.renderer||new vt(this.defaults);for(const r in n.renderer){if(!(r in o))throw new Error(`renderer '${r}' does not exist`);if(r==="options")continue;const a=r,l=n.renderer[a],h=o[a];o[a]=(...u)=>{let d=l.apply(o,u);return d===!1&&(d=h.apply(o,u)),d||""}}s.renderer=o}if(n.tokenizer){const o=this.defaults.tokenizer||new xt(this.defaults);for(const r in n.tokenizer){if(!(r in o))throw new Error(`tokenizer '${r}' does not exist`);if(["options","rules","lexer"].includes(r))continue;const a=r,l=n.tokenizer[a],h=o[a];o[a]=(...u)=>{let d=l.apply(o,u);return d===!1&&(d=h.apply(o,u)),d}}s.tokenizer=o}if(n.hooks){const o=this.defaults.hooks||new Xe;for(const r in n.hooks){if(!(r in o))throw new Error(`hook '${r}' does not exist`);if(r==="options")continue;const a=r,l=n.hooks[a],h=o[a];Xe.passThroughHooks.has(r)?o[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(o,u)).then(p=>h.call(o,p));const d=l.call(o,u);return h.call(o,d)}:o[a]=(...u)=>{let d=l.apply(o,u);return d===!1&&(d=h.apply(o,u)),d}}s.hooks=o}if(n.walkTokens){const o=this.defaults.walkTokens,r=n.walkTokens;s.walkTokens=function(a){let l=[];return l.push(r.call(this,a)),o&&(l=l.concat(o.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return se.lex(e,t??this.defaults)}parser(e,t){return re.parse(e,t??this.defaults)}}Qe=new WeakSet,nn=function(e,t){return(n,s)=>{const o={...s},r={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const a=ot(this,Et,ns).call(this,!!r.silent,!!r.async);if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(n):n).then(l=>e(l,r)).then(l=>r.hooks?r.hooks.processAllTokens(l):l).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>t(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(a);try{r.hooks&&(n=r.hooks.preprocess(n));let l=e(n,r);r.hooks&&(l=r.hooks.processAllTokens(l)),r.walkTokens&&this.walkTokens(l,r.walkTokens);let h=t(l,r);return r.hooks&&(h=r.hooks.postprocess(h)),h}catch(l){return a(l)}}},Et=new WeakSet,ns=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+Z(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}};const xe=new Kr;function A(i,e){return xe.parse(i,e)}A.options=A.setOptions=function(i){return xe.setOptions(i),A.defaults=xe.defaults,ji(A.defaults),A};A.getDefaults=fn;A.defaults=Te;A.use=function(...i){return xe.use(...i),A.defaults=xe.defaults,ji(A.defaults),A};A.walkTokens=function(i,e){return xe.walkTokens(i,e)};A.parseInline=xe.parseInline;A.Parser=re;A.parser=re.parse;A.Renderer=vt;A.TextRenderer=wn;A.Lexer=se;A.lexer=se.lex;A.Tokenizer=xt;A.Hooks=Xe;A.parse=A;A.options;A.setOptions;A.use;A.walkTokens;A.parseInline;re.parse;se.lex;function Qr(i){let e,t;return{c(){e=q("svg"),t=q("path"),y(t,"d","M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v28c0 50.8-41.2 92-92 92c-31.1 0-58.7-15.5-75.3-39.2C322.7 360.9 291.1 376 256 376c-66.3 0-120-53.7-120-120s53.7-120 120-120c28.8 0 55.2 10.1 75.8 27c4.3-6.6 11.7-11 20.2-11c13.3 0 24 10.7 24 24v80 28c0 24.3 19.7 44 44 44s44-19.7 44-44V256c0-114.9-93.1-208-208-208zm72 208a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"viewBox","0 0 512 512")},m(n,s){D(n,e,s),k(e,t)},p:L,i:L,o:L,d(n){n&&N(e)}}}class Jr extends ge{constructor(e){super(),pe(this,e,null,Qr,fe,{})}}de(Jr,{},[],[],!0);function eo(i){let e,t;return{c(){e=q("svg"),t=q("path"),y(t,"d","M337 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-143 143L97 127c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0L337 81zM441 201c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-247 247L41 295c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L143 465c9.4 9.4 24.6 9.4 33.9 0L441 201z"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"viewBox","0 0 448 512")},m(n,s){D(n,e,s),k(e,t)},p:L,i:L,o:L,d(n){n&&N(e)}}}class to extends ge{constructor(e){super(),pe(this,e,null,eo,fe,{})}}de(to,{},[],[],!0);function no(i){let e,t;return{c(){e=q("svg"),t=q("path"),y(t,"d","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"viewBox","0 0 512 512")},m(n,s){D(n,e,s),k(e,t)},p:L,i:L,o:L,d(n){n&&N(e)}}}class is extends ge{constructor(e){super(),pe(this,e,null,no,fe,{})}}de(is,{},[],[],!0);function io(i){let e,t;return{c(){e=q("svg"),t=q("path"),y(t,"d","M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H448c8.8 0 16 7.2 16 16V352c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432V416zm-.2 76.2l.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h48 48v48 4 .3 6.4V496c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM96 180.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H152c8.8 0 16-7.2 16-16s-7.2-16-16-16H132.8C112.5 144 96 160.5 96 180.8zM372.8 144c-20.3 0-36.8 16.5-36.8 36.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H352c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H392c8.8 0 16-7.2 16-16s-7.2-16-16-16H372.8zm-152 6.4c-4.1-5.5-11.3-7.8-17.9-5.6S192 153.1 192 160v96c0 8.8 7.2 16 16 16s16-7.2 16-16V208l19.2 25.6c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4L288 208v48c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-6.9-4.4-13-10.9-15.2s-13.7 .1-17.9 5.6L256 197.3l-35.2-46.9z"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"viewBox","0 0 512 512")},m(n,s){D(n,e,s),k(e,t)},p:L,i:L,o:L,d(n){n&&N(e)}}}class so extends ge{constructor(e){super(),pe(this,e,null,io,fe,{})}}de(so,{},[],[],!0);function ro(i){let e,t;return{c(){e=q("svg"),t=q("path"),y(t,"d","M133.9 232L65.8 95.9 383.4 232H133.9zm0 48H383.4L65.8 416.1l68-136.1zM44.6 34.6C32.3 29.3 17.9 32.3 8.7 42S-2.6 66.3 3.4 78.3L92.2 256 3.4 433.7c-6 12-3.9 26.5 5.3 36.3s23.5 12.7 35.9 7.5l448-192c11.8-5 19.4-16.6 19.4-29.4s-7.6-24.4-19.4-29.4l-448-192z"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"viewBox","0 0 512 512")},m(n,s){D(n,e,s),k(e,t)},p:L,i:L,o:L,d(n){n&&N(e)}}}class oo extends ge{constructor(e){super(),pe(this,e,null,ro,fe,{})}}de(oo,{},[],[],!0);function ao(i){let e,t;return{c(){e=q("svg"),t=q("path"),y(t,"d","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"viewBox","0 0 448 512")},m(n,s){D(n,e,s),k(e,t)},p:L,i:L,o:L,d(n){n&&N(e)}}}class ss extends ge{constructor(e){super(),pe(this,e,null,ao,fe,{})}}de(ss,{},[],[],!0);function lo(i){let e,t;return{c(){e=q("svg"),t=q("path"),y(t,"d","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"),y(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"viewBox","0 0 448 512")},m(n,s){D(n,e,s),k(e,t)},p:L,i:L,o:L,d(n){n&&N(e)}}}class co extends ge{constructor(e){super(),pe(this,e,null,lo,fe,{})}}de(co,{},[],[],!0);const ae=Object.create(null);ae.open="0";ae.close="1";ae.ping="2";ae.pong="3";ae.message="4";ae.upgrade="5";ae.noop="6";const yt=Object.create(null);Object.keys(ae).forEach(i=>{yt[ae[i]]=i});const sn={type:"error",data:"parser error"},rs=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",os=typeof ArrayBuffer=="function",as=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,yn=({type:i,data:e},t,n)=>rs&&e instanceof Blob?t?n(e):mi(e,n):os&&(e instanceof ArrayBuffer||as(e))?t?n(e):mi(new Blob([e]),n):n(ae[i]+(e||"")),mi=(i,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function bi(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let Yt;function ho(i,e){if(rs&&i.data instanceof Blob)return i.data.arrayBuffer().then(bi).then(e);if(os&&(i.data instanceof ArrayBuffer||as(i.data)))return e(bi(i.data));yn(i,!1,t=>{Yt||(Yt=new TextEncoder),e(Yt.encode(t))})}const wi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ge=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<wi.length;i++)Ge[wi.charCodeAt(i)]=i;const uo=i=>{let e=i.length*.75,t=i.length,n,s=0,o,r,a,l;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const h=new ArrayBuffer(e),u=new Uint8Array(h);for(n=0;n<t;n+=4)o=Ge[i.charCodeAt(n)],r=Ge[i.charCodeAt(n+1)],a=Ge[i.charCodeAt(n+2)],l=Ge[i.charCodeAt(n+3)],u[s++]=o<<2|r>>4,u[s++]=(r&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return h},fo=typeof ArrayBuffer=="function",_n=(i,e)=>{if(typeof i!="string")return{type:"message",data:ls(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:po(i.substring(1),e)}:yt[t]?i.length>1?{type:yt[t],data:i.substring(1)}:{type:yt[t]}:sn},po=(i,e)=>{if(fo){const t=uo(i);return ls(t,e)}else return{base64:!0,data:i}},ls=(i,e)=>{switch(e){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},cs="",go=(i,e)=>{const t=i.length,n=new Array(t);let s=0;i.forEach((o,r)=>{yn(o,!1,a=>{n[r]=a,++s===t&&e(n.join(cs))})})},mo=(i,e)=>{const t=i.split(cs),n=[];for(let s=0;s<t.length;s++){const o=_n(t[s],e);if(n.push(o),o.type==="error")break}return n};function bo(){return new TransformStream({transform(i,e){ho(i,t=>{const n=t.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const o=new DataView(s.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{s=new Uint8Array(9);const o=new DataView(s.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let Zt;function ft(i){return i.reduce((e,t)=>e+t.length,0)}function pt(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)t[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function wo(i,e){Zt||(Zt=new TextDecoder);const t=[];let n=0,s=-1,o=!1;return new TransformStream({transform(r,a){for(t.push(r);;){if(n===0){if(ft(t)<1)break;const l=pt(t,1);o=(l[0]&128)===128,s=l[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(ft(t)<2)break;const l=pt(t,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(ft(t)<8)break;const l=pt(t,8),h=new DataView(l.buffer,l.byteOffset,l.length),u=h.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(sn);break}s=u*Math.pow(2,32)+h.getUint32(4),n=3}else{if(ft(t)<s)break;const l=pt(t,s);a.enqueue(_n(o?l:Zt.decode(l),e)),n=0}if(s===0||s>i){a.enqueue(sn);break}}}})}const hs=4;function P(i){if(i)return yo(i)}function yo(i){for(var e in P.prototype)i[e]=P.prototype[e];return i}P.prototype.on=P.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};P.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};P.prototype.off=P.prototype.removeListener=P.prototype.removeAllListeners=P.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};P.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};P.prototype.emitReserved=P.prototype.emit;P.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};P.prototype.hasListeners=function(i){return!!this.listeners(i).length};const J=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function us(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}const _o=J.setTimeout,ko=J.clearTimeout;function Rt(i,e){e.useNativeTimers?(i.setTimeoutFn=_o.bind(J),i.clearTimeoutFn=ko.bind(J)):(i.setTimeoutFn=J.setTimeout.bind(J),i.clearTimeoutFn=J.clearTimeout.bind(J))}const xo=1.33;function To(i){return typeof i=="string"?vo(i):Math.ceil((i.byteLength||i.size)*xo)}function vo(i){let e=0,t=0;for(let n=0,s=i.length;n<s;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function Eo(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function Ao(i){let e={},t=i.split("&");for(let n=0,s=t.length;n<s;n++){let o=t[n].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}class Ro extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class kn extends P{constructor(e){super(),this.writable=!1,Rt(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new Ro(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=_n(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Eo(e);return t.length?"?"+t:""}}const fs="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),rn=64,So={};let yi=0,dt=0,_i;function ki(i){let e="";do e=fs[i%rn]+e,i=Math.floor(i/rn);while(i>0);return e}function ps(){const i=ki(+new Date);return i!==_i?(yi=0,_i=i):i+"."+ki(yi++)}for(;dt<rn;dt++)So[fs[dt]]=dt;let ds=!1;try{ds=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const $o=ds;function gs(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||$o))return new XMLHttpRequest}catch{}if(!e)try{return new J[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function Co(){}const Oo=function(){return new gs({xdomain:!1}).responseType!=null}();class Lo extends kn{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}const t=e&&e.forceBase64;this.supportsBinary=Oo&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};mo(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,go(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=ps()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new oe(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(s,o)=>{this.onError("xhr post error",s,o)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class oe extends P{constructor(e,t){super(),Rt(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=us(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const n=this.xhr=new gs(t);try{n.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this.opts.cookieJar)===null||s===void 0||s.parseCookies(n)),n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=oe.requestsCount++,oe.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=Co,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete oe.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}oe.requestsCount=0;oe.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",xi);else if(typeof addEventListener=="function"){const i="onpagehide"in J?"pagehide":"unload";addEventListener(i,xi,!1)}}function xi(){for(let i in oe.requests)oe.requests.hasOwnProperty(i)&&oe.requests[i].abort()}const xn=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),gt=J.WebSocket||J.MozWebSocket,Ti=!0,No="arraybuffer",vi=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Io extends kn{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=vi?{}:us(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=Ti&&!vi?t?new gt(e,t):new gt(e):new gt(e,t,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;yn(n,this.supportsBinary,o=>{const r={};try{Ti&&this.ws.send(o)}catch{}s&&xn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=ps()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!gt}}class zo extends kn{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=wo(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=bo();s.readable.pipeTo(e.writable),this.writer=s.writable.getWriter();const o=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),o())}).catch(a=>{})};o();const r={type:"open"};this.query.sid&&(r.data=`{"sid":"${this.query.sid}"}`),this.writer.write(r).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;this.writer.write(n).then(()=>{s&&xn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const Do={websocket:Io,webtransport:zo,polling:Lo},Po=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Mo=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function on(i){if(i.length>2e3)throw"URI too long";const e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let s=Po.exec(i||""),o={},r=14;for(;r--;)o[Mo[r]]=s[r]||"";return t!=-1&&n!=-1&&(o.source=e,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,":"),o.authority=o.authority.replace("[","").replace("]","").replace(/;/g,":"),o.ipv6uri=!0),o.pathNames=Bo(o,o.path),o.queryKey=Uo(o,o.query),o}function Bo(i,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Uo(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,o){s&&(t[s]=o)}),t}let ms=class Ne extends P{constructor(e,t={}){super(),this.binaryType=No,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=on(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=on(t.host).host),Rt(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Ao(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=hs,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new Do[e](n)}open(){let e;if(this.opts.rememberUpgrade&&Ne.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;Ne.priorWebsocketSuccess=!1;const s=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Ne.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=t.name,this.emitReserved("upgradeError",p)}}))};function o(){n||(n=!0,u(),t.close(),t=null)}const r=d=>{const p=new Error("probe error: "+d);p.transport=t.name,o(),this.emitReserved("upgradeError",p)};function a(){r("transport closed")}function l(){r("socket closed")}function h(d){t&&d.name!==t.name&&o()}const u=()=>{t.removeListener("open",s),t.removeListener("error",r),t.removeListener("close",a),this.off("close",l),this.off("upgrading",h)};t.once("open",s),t.once("error",r),t.once("close",a),this.once("close",l),this.once("upgrading",h),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",Ne.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(t+=To(s)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,s){if(typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const o={type:e,data:t,options:n};this.emitReserved("packetCreate",o),this.writeBuffer.push(o),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){Ne.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const s=e.length;for(;n<s;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};ms.protocol=hs;function Fo(i,e="",t){let n=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),n=on(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const o=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+o+":"+n.port+e,n.href=n.protocol+"://"+o+(t&&t.port===n.port?"":":"+n.port),n}const Ho=typeof ArrayBuffer=="function",qo=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,bs=Object.prototype.toString,Wo=typeof Blob=="function"||typeof Blob<"u"&&bs.call(Blob)==="[object BlobConstructor]",Vo=typeof File=="function"||typeof File<"u"&&bs.call(File)==="[object FileConstructor]";function Tn(i){return Ho&&(i instanceof ArrayBuffer||qo(i))||Wo&&i instanceof Blob||Vo&&i instanceof File}function _t(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(_t(i[t]))return!0;return!1}if(Tn(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return _t(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&_t(i[t]))return!0;return!1}function jo(i){const e=[],t=i.data,n=i;return n.data=an(t,e),n.attachments=e.length,{packet:n,buffers:e}}function an(i,e){if(!i)return i;if(Tn(i)){const t={_placeholder:!0,num:e.length};return e.push(i),t}else if(Array.isArray(i)){const t=new Array(i.length);for(let n=0;n<i.length;n++)t[n]=an(i[n],e);return t}else if(typeof i=="object"&&!(i instanceof Date)){const t={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=an(i[n],e));return t}return i}function Go(i,e){return i.data=ln(i.data,e),delete i.attachments,i}function ln(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=ln(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=ln(i[t],e));return i}const Yo=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Zo=5;var v;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(v||(v={}));class Xo{constructor(e){this.replacer=e}encode(e){return(e.type===v.EVENT||e.type===v.ACK)&&_t(e)?this.encodeAsBinary({type:e.type===v.EVENT?v.BINARY_EVENT:v.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===v.BINARY_EVENT||e.type===v.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=jo(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}}function Ei(i){return Object.prototype.toString.call(i)==="[object Object]"}class vn extends P{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===v.BINARY_EVENT;n||t.type===v.BINARY_ACK?(t.type=n?v.EVENT:v.ACK,this.reconstructor=new Ko(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(Tn(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(v[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===v.BINARY_EVENT||n.type===v.BINARY_ACK){const o=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const r=e.substring(o,t);if(r!=Number(r)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(r)}if(e.charAt(t+1)==="/"){const o=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(o,t)}else n.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const o=t+1;for(;++t;){const r=e.charAt(t);if(r==null||Number(r)!=r){--t;break}if(t===e.length)break}n.id=Number(e.substring(o,t+1))}if(e.charAt(++t)){const o=this.tryParse(e.substr(t));if(vn.isPayloadValid(n.type,o))n.data=o;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case v.CONNECT:return Ei(t);case v.DISCONNECT:return t===void 0;case v.CONNECT_ERROR:return typeof t=="string"||Ei(t);case v.EVENT:case v.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Yo.indexOf(t[0])===-1);case v.ACK:case v.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Ko{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Go(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Qo=Object.freeze(Object.defineProperty({__proto__:null,Decoder:vn,Encoder:Xo,get PacketType(){return v},protocol:Zo},Symbol.toStringTag,{value:"Module"}));function te(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const Jo=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class ys extends P{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[te(e,"open",this.onopen.bind(this)),te(e,"packet",this.onpacket.bind(this)),te(e,"error",this.onerror.bind(this)),te(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(Jo.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const n={type:v.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const r=this.ids++,a=t.pop();this._registerAckCallback(r,a),n.id=r}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const o=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let r=0;r<this.sendBuffer.length;r++)this.sendBuffer[r].id===e&&this.sendBuffer.splice(r,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...r)=>{this.io.clearTimeoutFn(o),t.apply(this,[null,...r])}}emitWithAck(e,...t){const n=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((s,o)=>{t.push((r,a)=>n?r?o(r):s(a):s(r)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...o)=>n!==this._queue[0]?void 0:(s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:v.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case v.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case v.EVENT:case v.BINARY_EVENT:this.onevent(e);break;case v.ACK:case v.BINARY_ACK:this.onack(e);break;case v.DISCONNECT:this.ondisconnect();break;case v.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...s){n||(n=!0,t.packet({type:v.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:v.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Pe(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Pe.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=Math.floor(e*10)&1?i+t:i-t}return Math.min(i,this.max)|0};Pe.prototype.reset=function(){this.attempts=0};Pe.prototype.setMin=function(i){this.ms=i};Pe.prototype.setMax=function(i){this.max=i};Pe.prototype.setJitter=function(i){this.jitter=i};class cn extends P{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Rt(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Pe({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||Qo;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new ms(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=te(t,"open",function(){n.onopen(),e&&e()}),o=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},r=te(t,"error",o);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),o(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(r),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(te(e,"ping",this.onping.bind(this)),te(e,"data",this.ondata.bind(this)),te(e,"error",this.onerror.bind(this)),te(e,"close",this.onclose.bind(this)),te(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){xn(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new ys(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const je={};function kt(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=Fo(i,e.path||"/socket.io"),n=t.source,s=t.id,o=t.path,r=je[s]&&o in je[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||r;let l;return a?l=new cn(n,e):(je[s]||(je[s]=new cn(n,e)),l=je[s]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(kt,{Manager:cn,Socket:ys,io:kt,connect:kt});const{document:ea}=Bs;function Ai(i,e,t){const n=i.slice();return n[25]=e[t],n}function Ri(i){let e,t,n,s,o,r,a,l;return o=new ss({props:{viewBox:"0 0 24 24"}}),{c(){e=O("button"),t=O("p"),t.textContent="Chat",n=X(),s=O("span"),Bi(o.$$.fragment),y(t,"class","m-auto mx-2"),y(s,"class","h-6 w-5 mr-2 my-auto fill-white"),y(e,"class","py-2 px-2 rounded-md transition duration-300 flex bg-gray-400 hover:bg-gray-500 text-white")},m(h,u){D(h,e,u),k(e,t),k(e,n),k(e,s),hn(o,s,null),r=!0,a||(l=Pi(e,"click",i[4]),a=!0)},p:L,i(h){r||(he(o.$$.fragment,h),r=!0)},o(h){Ie(o.$$.fragment,h),r=!1},d(h){h&&N(e),un(o),a=!1,l()}}}function Si(i){let e,t,n,s=(i[0]?i[0]:"")+"",o,r,a,l,h,u,d,p,b,R;h=new is({props:{viewBox:"0 0 24 24"}});let I=ii(i[2]),$=[];for(let E=0;E<I.length;E+=1)$[E]=Ni(Ai(i,I,E));return{c(){e=O("div"),t=O("div"),n=O("p"),o=ue(s),r=X(),a=O("button"),l=O("span"),Bi(h.$$.fragment),u=X(),d=O("div");for(let E=0;E<$.length;E+=1)$[E].c();y(n,"class","text-lg font-semibold text-white"),y(l,"class","w-5 fill-white"),y(a,"class","rounded-md w-5 mx-1"),y(t,"class","pl-4 p-3 border-b text-black rounded-t-lg flex justify-between items-center bg-gray-400"),y(d,"class","p-4 overflow-y-auto stubber_webchat_message_box"),y(e,"class","fixed bottom-0 right-0 w-96 h-3/4 flex-col justify-end bg-white mr-4 transition duration-300 rounded-t-xl")},m(E,V){D(E,e,V),k(e,t),k(t,n),k(n,o),k(t,r),k(t,a),k(a,l),hn(h,l,null),k(e,u),k(e,d);for(let x=0;x<$.length;x+=1)$[x]&&$[x].m(d,null);p=!0,b||(R=Pi(a,"click",i[9]),b=!0)},p(E,V){if((!p||V&1)&&s!==(s=(E[0]?E[0]:"")+"")&&De(o,s),V&12){I=ii(E[2]);let x;for(x=0;x<I.length;x+=1){const w=Ai(E,I,x);$[x]?$[x].p(w,V):($[x]=Ni(w),$[x].c(),$[x].m(d,null))}for(;x<$.length;x+=1)$[x].d(1);$.length=I.length}},i(E){p||(he(h.$$.fragment,E),p=!0)},o(E){Ie(h.$$.fragment,E),p=!1},d(E){E&&N(e),un(h),Us($,E),b=!1,R()}}}function $i(i){let e,t,n,s,o=i[25].message.type=="markdown"&&Ci(i),r=i[25].message.type=="text"&&Oi(i);return{c(){e=O("div"),t=O("p"),t.textContent="Agent",n=X(),o&&o.c(),s=X(),r&&r.c(),y(t,"class","m-auto mx-2 text-sm"),y(e,"class","mb-2 mr-2")},m(a,l){D(a,e,l),k(e,t),k(e,n),o&&o.m(e,null),k(e,s),r&&r.m(e,null)},p(a,l){a[25].message.type=="markdown"?o?o.p(a,l):(o=Ci(a),o.c(),o.m(e,s)):o&&(o.d(1),o=null),a[25].message.type=="text"?r?r.p(a,l):(r=Oi(a),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(a){a&&N(e),o&&o.d(),r&&r.d()}}}function Ci(i){let e,t,n=en.sanitize(A(i[25].message.value.trim()))+"",s,o,r=i[3](i[25].dateTime)+"",a;return{c(){e=O("div"),t=new Hs(!1),s=X(),o=O("p"),a=ue(r),t.a=s,y(o,"class","ml-auto mx-2 text-sm"),y(e,"class","bg-gray-200 rounded-lg py-2 px-4 inline-block")},m(l,h){D(l,e,h),t.m(n,e),k(e,s),k(e,o),k(o,a)},p(l,h){h&4&&n!==(n=en.sanitize(A(l[25].message.value.trim()))+"")&&t.p(n),h&4&&r!==(r=l[3](l[25].dateTime)+"")&&De(a,r)},d(l){l&&N(e)}}}function Oi(i){let e,t,n=i[25].message.value+"",s,o,r,a=i[3](i[25].dateTime)+"",l;return{c(){e=O("div"),t=O("p"),s=ue(n),o=X(),r=O("p"),l=ue(a),y(t,"class",""),y(r,"class","ml-auto mx-2 text-sm"),y(e,"class","bg-gray-200 rounded-lg py-2 px-4 inline-block")},m(h,u){D(h,e,u),k(e,t),k(t,s),k(e,o),k(e,r),k(r,l)},p(h,u){u&4&&n!==(n=h[25].message.value+"")&&De(s,n),u&4&&a!==(a=h[3](h[25].dateTime)+"")&&De(l,a)},d(h){h&&N(e)}}}function Li(i){let e,t,n,s,o,r=i[25].message.value+"",a,l,h,u=i[3](i[25].dateTime)+"",d,p;return{c(){e=O("div"),t=O("p"),t.textContent="You",n=X(),s=O("div"),o=O("p"),a=ue(r),l=X(),h=O("p"),d=ue(u),p=X(),y(t,"class","ml-auto mx-2"),y(o,"class",""),y(h,"class","ml-auto mx-2 text-sm"),y(s,"class","bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block"),y(e,"class","mb-2 ml-2 text-right")},m(b,R){D(b,e,R),k(e,t),k(e,n),k(e,s),k(s,o),k(o,a),k(s,l),k(s,h),k(h,d),k(e,p)},p(b,R){R&4&&r!==(r=b[25].message.value+"")&&De(a,r),R&4&&u!==(u=b[3](b[25].dateTime)+"")&&De(d,u)},d(b){b&&N(e)}}}function Ni(i){let e,t,n=i[25].direction=="in"&&$i(i),s=i[25].direction=="out"&&Li(i);return{c(){n&&n.c(),e=X(),s&&s.c(),t=Di()},m(o,r){n&&n.m(o,r),D(o,e,r),s&&s.m(o,r),D(o,t,r)},p(o,r){o[25].direction=="in"?n?n.p(o,r):(n=$i(o),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),o[25].direction=="out"?s?s.p(o,r):(s=Li(o),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(o){o&&(N(e),N(t)),n&&n.d(o),s&&s.d(o)}}}function ta(i){let e,t,n,s,o,r,a=!i[1]&&Ri(i),l=i[1]&&Si(i);return{c(){e=O("style"),e.textContent=`/*
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
.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-auto {
  margin-left: auto;
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
.h-11 {
  height: 2.75rem;
}
.h-20 {
  height: 5rem;
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
.max-h-\\[200px\\] {
  max-height: 200px;
}
.w-0 {
  width: 0px;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
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
.cursor-default {
  cursor: default;
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
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
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
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.fill-white {
  fill: #fff;
}
.p-1 {
  padding: 0.25rem;
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
}`,t=X(),n=O("div"),a&&a.c(),s=X(),l&&l.c(),o=Di(),y(n,"class","fixed bottom-0 right-0 mb-4 mr-4 h-11 w-96 flex justify-end")},m(h,u){k(ea.head,e),D(h,t,u),D(h,n,u),a&&a.m(n,null),D(h,s,u),l&&l.m(h,u),D(h,o,u),r=!0},p(h,[u]){h[1]?a&&(ti(),Ie(a,1,1,()=>{a=null}),ni()):a?(a.p(h,u),u&2&&he(a,1)):(a=Ri(h),a.c(),he(a,1),a.m(n,null)),h[1]?l?(l.p(h,u),u&2&&he(l,1)):(l=Si(h),l.c(),he(l,1),l.m(o.parentNode,o)):l&&(ti(),Ie(l,1,1,()=>{l=null}),ni())},i(h){r||(he(a),he(l),r=!0)},o(h){Ie(a),Ie(l),r=!1},d(h){h&&(N(t),N(n),N(s),N(o)),N(e),a&&a.d(),l&&l.d(h)}}}function na(i,e,t){let{orguuid:n}=e,{chatname:s}=e,{chat_display_name:o}=e,{connect_on_load:r}=e,{passthrough_data:a}=e,l=!0,h=!1;console.log("stubber webchat v1.2");let u="",d=[],p,b="https://external-portforward.stubber.zone:6026";Ws(()=>{console.log("__Mounted"),r&&l&&R()});let R=()=>{p=kt(b),p.on("connect",async()=>{console.log("___Connected to server"),d.length==0&&await p.emit("initialize",{webchat_configuration:{orguuid:n,chatname:s,initialize:!0,passthrough_data:a}}),u.length>0&&I()}),p.on("disconnect",()=>{console.log("___Disconnected from server")}),p.on("webchat_message",w=>{let Q={direction:"in",sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:w.webchat_message};d.push(Q),t(2,d),E()}),p.on("webchat_client_configuration",w=>{Object.keys(w).forEach(ve=>{w[ve].type=="allow_switching"&&w[ve].value})}),p.on("error",w=>{console.log("__Stubber Webchat : "+(w==null?void 0:w.error))})},I=async()=>{if(!p){R();return}let w={direction:"out",sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:u};d.push(w),t(2,d),u="",E(),p.connected&&(await p.emit("message",{webchat_configuration:{orguuid:n,chatname:s,passthrough_data:a},webchat_message:{type:"text",value:w.message,messageuuid:w.messageuuid}}),w.received=!0,t(2,d))},$=w=>{const Q=w.getHours().toString().padStart(2,"0"),ve=w.getMinutes().toString().padStart(2,"0");return Q+":"+ve},E=()=>{setTimeout(()=>{let w=document.getElementById("stubber_webchat_message_box");w.scrollTop=w.scrollHeight},100)},V=()=>{t(1,l=!0),r==="true"&&!h&&R(),h=!0};Vs(()=>{ws&&ws.close()}),en.addHook("afterSanitizeAttributes",function(w){"target"in w&&w.setAttribute("target","_blank"),!w.hasAttribute("target")&&(w.hasAttribute("xlink:href")||w.hasAttribute("href"))&&w.setAttribute("xlink:show","new")});const x=()=>{t(1,l=!1)};return i.$$set=w=>{"orguuid"in w&&t(5,n=w.orguuid),"chatname"in w&&t(6,s=w.chatname),"chat_display_name"in w&&t(0,o=w.chat_display_name),"connect_on_load"in w&&t(7,r=w.connect_on_load),"passthrough_data"in w&&t(8,a=w.passthrough_data)},[o,l,d,$,V,n,s,r,a,x]}class ia extends ge{constructor(e){super(),pe(this,e,na,ta,fe,{orguuid:5,chatname:6,chat_display_name:0,connect_on_load:7,passthrough_data:8})}get orguuid(){return this.$$.ctx[5]}set orguuid(e){this.$$set({orguuid:e}),_e()}get chatname(){return this.$$.ctx[6]}set chatname(e){this.$$set({chatname:e}),_e()}get chat_display_name(){return this.$$.ctx[0]}set chat_display_name(e){this.$$set({chat_display_name:e}),_e()}get connect_on_load(){return this.$$.ctx[7]}set connect_on_load(e){this.$$set({connect_on_load:e}),_e()}get passthrough_data(){return this.$$.ctx[8]}set passthrough_data(e){this.$$set({passthrough_data:e}),_e()}}customElements.define("stubber-webchat",de(ia,{orguuid:{},chatname:{},chat_display_name:{},connect_on_load:{},passthrough_data:{}},[],[],!1));
