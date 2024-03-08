var Us=Object.defineProperty;var Fs=(i,e,t)=>e in i?Us(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var k=(i,e,t)=>(Fs(i,typeof e!="symbol"?e+"":e,t),t),Hs=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var Jt=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)};var wt=(i,e,t)=>(Hs(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function L(){}function Vi(i){return i()}function ci(){return Object.create(null)}function je(i){i.forEach(Vi)}function Yi(i){return typeof i=="function"}function ye(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function qs(i){return Object.keys(i).length===0}const Ws=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function y(i,e){i.appendChild(e)}function M(i,e,t){i.insertBefore(e,t||null)}function z(i){i.parentNode&&i.parentNode.removeChild(i)}function js(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function R(i){return document.createElement(i)}function X(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function ve(i){return document.createTextNode(i)}function Q(){return ve(" ")}function xn(){return ve("")}function qe(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function m(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Vs(i){return Array.from(i.childNodes)}function ot(i,e){e=""+e,i.data!==e&&(i.data=e)}function hi(i,e){i.value=e??""}class Ys{constructor(e=!1){k(this,"is_svg",!1);k(this,"e");k(this,"n");k(this,"t");k(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=X(t.nodeName):this.e=R(t.nodeType===11?"TEMPLATE":t.nodeName),this.t=t.tagName!=="TEMPLATE"?t:t.content,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)M(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(z)}}function Gs(i){const e={};return i.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let at;function it(i){at=i}function Gi(){if(!at)throw new Error("Function called outside component initialization");return at}function Xs(i){Gi().$$.on_mount.push(i)}function Zs(i){Gi().$$.on_destroy.push(i)}const Fe=[],ui=[];let We=[];const fi=[],Ks=Promise.resolve();let cn=!1;function Qs(){cn||(cn=!0,Ks.then(Ce))}function hn(i){We.push(i)}const en=new Set;let Ue=0;function Ce(){if(Ue!==0)return;const i=at;do{try{for(;Ue<Fe.length;){const e=Fe[Ue];Ue++,it(e),Js(e.$$)}}catch(e){throw Fe.length=0,Ue=0,e}for(it(null),Fe.length=0,Ue=0;ui.length;)ui.pop()();for(let e=0;e<We.length;e+=1){const t=We[e];en.has(t)||(en.add(t),t())}We.length=0}while(Fe.length);for(;fi.length;)fi.pop()();cn=!1,en.clear(),it(i)}function Js(i){if(i.fragment!==null){i.update(),je(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(hn)}}function er(i){const e=[],t=[];We.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),We=e}const Rt=new Set;let Le;function It(){Le={r:0,c:[],p:Le}}function zt(){Le.r||je(Le.c),Le=Le.p}function G(i,e){i&&i.i&&(Rt.delete(i),i.i(e))}function le(i,e,t,n){if(i&&i.o){if(Rt.has(i))return;Rt.add(i),Le.c.push(()=>{Rt.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function pi(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Dt(i){i&&i.c()}function lt(i,e,t){const{fragment:n,after_update:s}=i.$$;n&&n.m(e,t),hn(()=>{const r=i.$$.on_mount.map(Vi).filter(Yi);i.$$.on_destroy?i.$$.on_destroy.push(...r):je(r),i.$$.on_mount=[]}),s.forEach(hn)}function ct(i,e){const t=i.$$;t.fragment!==null&&(er(t.after_update),je(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function tr(i,e){i.$$.dirty[0]===-1&&(Fe.push(i),Qs(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function _e(i,e,t,n,s,r,o=null,a=[-1]){const l=at;it(i);const h=i.$$={fragment:null,ctx:[],props:r,update:L,not_equal:s,bound:ci(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ci(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(h.root);let u=!1;if(h.ctx=t?t(i,e.props||{},(f,p,...b)=>{const $=b.length?b[0]:p;return h.ctx&&s(h.ctx[f],h.ctx[f]=$)&&(!h.skip_bound&&h.bound[f]&&h.bound[f]($),u&&tr(i,f)),p}):[],h.update(),u=!0,je(h.before_update),h.fragment=n?n(h.ctx):!1,e.target){if(e.hydrate){const f=Vs(e.target);h.fragment&&h.fragment.l(f),f.forEach(z)}else h.fragment&&h.fragment.c();e.intro&&G(i.$$.fragment),lt(i,e.target,e.anchor),Ce()}it(l)}let Xi;typeof HTMLElement=="function"&&(Xi=class extends HTMLElement{constructor(e,t,n){super();k(this,"$$ctor");k(this,"$$s");k(this,"$$c");k(this,"$$cn",!1);k(this,"$$d",{});k(this,"$$r",!1);k(this,"$$p_d",{});k(this,"$$l",{});k(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const s=this.$$c.$on(e,t);this.$$l_u.set(t,s)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const s=this.$$l_u.get(t);s&&(s(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let a;return{c:function(){a=R("slot"),o!=="default"&&m(a,"name",o)},m:function(u,f){M(u,a,f)},d:function(u){u&&z(a)}}}};var e=t;if(await Promise.resolve(),!this.$$cn)return;const n={},s=Gs(this);for(const o of this.$$s)o in s&&(n[o]=[t(o)]);for(const o of this.attributes){const a=this.$$g_p(o.name);a in this.$$d||(this.$$d[a]=$t(a,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const a=$t(o,this.$$d[o],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,a)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const o in this.$$l)for(const a of this.$$l[o]){const l=this.$$c.$on(o,a);this.$$l_u.set(a,l)}this.$$l={}}}attributeChangedCallback(e,t,n){var s;this.$$r||(e=this.$$g_p(e),this.$$d[e]=$t(e,n,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function $t(i,e,t,n){var r;const s=(r=t[i])==null?void 0:r.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!t[i])return e;if(n==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function ke(i,e,t,n,s,r){let o=class extends Xi{constructor(){super(i,t,s),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){var h;l=$t(a,l,e),this.$$d[a]=l,(h=this.$$c)==null||h.$set({[a]:l})}})}),n.forEach(a=>{Object.defineProperty(o.prototype,a,{get(){var l;return(l=this.$$c)==null?void 0:l[a]}})}),r&&(o=r(o)),i.element=o,o}class xe{constructor(){k(this,"$$");k(this,"$$set")}$destroy(){ct(this,1),this.$destroy=L}$on(e,t){if(!Yi(t))return L;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!qs(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const nr="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(nr);/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */const{entries:Zi,setPrototypeOf:di,isFrozen:ir,getPrototypeOf:sr,getOwnPropertyDescriptor:rr}=Object;let{freeze:ee,seal:ue,create:Ki}=Object,{apply:un,construct:fn}=typeof Reflect<"u"&&Reflect;ee||(ee=function(e){return e});ue||(ue=function(e){return e});un||(un=function(e,t,n){return e.apply(t,n)});fn||(fn=function(e,t){return new e(...t)});const yt=re(Array.prototype.forEach),gi=re(Array.prototype.pop),Ke=re(Array.prototype.push),Ct=re(String.prototype.toLowerCase),tn=re(String.prototype.toString),or=re(String.prototype.match),Qe=re(String.prototype.replace),ar=re(String.prototype.indexOf),lr=re(String.prototype.trim),ce=re(Object.prototype.hasOwnProperty),ie=re(RegExp.prototype.test),Je=cr(TypeError);function re(i){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return un(i,e,n)}}function cr(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fn(i,t)}}function T(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ct;di&&di(i,null);let n=e.length;for(;n--;){let s=e[n];if(typeof s=="string"){const r=t(s);r!==s&&(ir(e)||(e[n]=r),s=r)}i[s]=!0}return i}function hr(i){for(let e=0;e<i.length;e++)ce(i,e)||(i[e]=null);return i}function $e(i){const e=Ki(null);for(const[t,n]of Zi(i))ce(i,t)&&(Array.isArray(n)?e[t]=hr(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=$e(n):e[t]=n);return e}function _t(i,e){for(;i!==null;){const n=rr(i,e);if(n){if(n.get)return re(n.get);if(typeof n.value=="function")return re(n.value)}i=sr(i)}function t(){return null}return t}const mi=ee(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),nn=ee(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),sn=ee(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ur=ee(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),rn=ee(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),fr=ee(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),bi=ee(["#text"]),wi=ee(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),on=ee(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),yi=ee(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),kt=ee(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),pr=ue(/\{\{[\w\W]*|[\w\W]*\}\}/gm),dr=ue(/<%[\w\W]*|[\w\W]*%>/gm),gr=ue(/\${[\w\W]*}/gm),mr=ue(/^data-[\-\w.\u00B7-\uFFFF]/),br=ue(/^aria-[\-\w]+$/),Qi=ue(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),wr=ue(/^(?:\w+script|data):/i),yr=ue(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ji=ue(/^html$/i);var _i=Object.freeze({__proto__:null,MUSTACHE_EXPR:pr,ERB_EXPR:dr,TMPLIT_EXPR:gr,DATA_ATTR:mr,ARIA_ATTR:br,IS_ALLOWED_URI:Qi,IS_SCRIPT_OR_DATA:wr,ATTR_WHITESPACE:yr,DOCTYPE_NAME:Ji});const _r=function(){return typeof window>"u"?null:window},kr=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(n=t.getAttribute(s));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}};function es(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:_r();const e=w=>es(w);if(e.version="3.0.9",e.removed=[],!i||!i.document||i.document.nodeType!==9)return e.isSupported=!1,e;let{document:t}=i;const n=t,s=n.currentScript,{DocumentFragment:r,HTMLTemplateElement:o,Node:a,Element:l,NodeFilter:h,NamedNodeMap:u=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:f,DOMParser:p,trustedTypes:b}=i,$=l.prototype,E=_t($,"cloneNode"),Y=_t($,"nextSibling"),P=_t($,"childNodes"),D=_t($,"parentNode");if(typeof o=="function"){const w=t.createElement("template");w.content&&w.content.ownerDocument&&(t=w.content.ownerDocument)}let S,J="";const{implementation:oe,createNodeIterator:fe,createDocumentFragment:Te,getElementsByTagName:_}=t,{importNode:N}=n;let x={};e.isSupported=typeof Zi=="function"&&typeof D=="function"&&oe&&oe.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Ee,ERB_EXPR:H,TMPLIT_EXPR:v,DATA_ATTR:q,ARIA_ATTR:B,IS_SCRIPT_OR_DATA:pt,ATTR_WHITESPACE:Dn}=_i;let{IS_ALLOWED_URI:Pn}=_i,W=null;const Mn=T({},[...mi,...nn,...sn,...rn,...bi]);let j=null;const Bn=T({},[...wi,...on,...yi,...kt]);let U=Object.seal(Ki(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ye=null,qt=null,Un=!0,Wt=!0,Fn=!1,Hn=!0,Ie=!1,Ae=!1,jt=!1,Vt=!1,ze=!1,dt=!1,gt=!1,qn=!0,Wn=!1;const Ls="user-content-";let Yt=!0,Ge=!1,De={},Pe=null;const jn=T({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Vn=null;const Yn=T({},["audio","video","img","source","image","track"]);let Gt=null;const Gn=T({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),mt="http://www.w3.org/1998/Math/MathML",bt="http://www.w3.org/2000/svg",be="http://www.w3.org/1999/xhtml";let Me=be,Xt=!1,Zt=null;const Os=T({},[mt,bt,be],tn);let Xe=null;const Ns=["application/xhtml+xml","text/html"],Is="text/html";let V=null,Be=null;const zs=t.createElement("form"),Xn=function(c){return c instanceof RegExp||c instanceof Function},Kt=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Be&&Be===c)){if((!c||typeof c!="object")&&(c={}),c=$e(c),Xe=Ns.indexOf(c.PARSER_MEDIA_TYPE)===-1?Is:c.PARSER_MEDIA_TYPE,V=Xe==="application/xhtml+xml"?tn:Ct,W=ce(c,"ALLOWED_TAGS")?T({},c.ALLOWED_TAGS,V):Mn,j=ce(c,"ALLOWED_ATTR")?T({},c.ALLOWED_ATTR,V):Bn,Zt=ce(c,"ALLOWED_NAMESPACES")?T({},c.ALLOWED_NAMESPACES,tn):Os,Gt=ce(c,"ADD_URI_SAFE_ATTR")?T($e(Gn),c.ADD_URI_SAFE_ATTR,V):Gn,Vn=ce(c,"ADD_DATA_URI_TAGS")?T($e(Yn),c.ADD_DATA_URI_TAGS,V):Yn,Pe=ce(c,"FORBID_CONTENTS")?T({},c.FORBID_CONTENTS,V):jn,Ye=ce(c,"FORBID_TAGS")?T({},c.FORBID_TAGS,V):{},qt=ce(c,"FORBID_ATTR")?T({},c.FORBID_ATTR,V):{},De=ce(c,"USE_PROFILES")?c.USE_PROFILES:!1,Un=c.ALLOW_ARIA_ATTR!==!1,Wt=c.ALLOW_DATA_ATTR!==!1,Fn=c.ALLOW_UNKNOWN_PROTOCOLS||!1,Hn=c.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ie=c.SAFE_FOR_TEMPLATES||!1,Ae=c.WHOLE_DOCUMENT||!1,ze=c.RETURN_DOM||!1,dt=c.RETURN_DOM_FRAGMENT||!1,gt=c.RETURN_TRUSTED_TYPE||!1,Vt=c.FORCE_BODY||!1,qn=c.SANITIZE_DOM!==!1,Wn=c.SANITIZE_NAMED_PROPS||!1,Yt=c.KEEP_CONTENT!==!1,Ge=c.IN_PLACE||!1,Pn=c.ALLOWED_URI_REGEXP||Qi,Me=c.NAMESPACE||be,U=c.CUSTOM_ELEMENT_HANDLING||{},c.CUSTOM_ELEMENT_HANDLING&&Xn(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(U.tagNameCheck=c.CUSTOM_ELEMENT_HANDLING.tagNameCheck),c.CUSTOM_ELEMENT_HANDLING&&Xn(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(U.attributeNameCheck=c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),c.CUSTOM_ELEMENT_HANDLING&&typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(U.allowCustomizedBuiltInElements=c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ie&&(Wt=!1),dt&&(ze=!0),De&&(W=T({},bi),j=[],De.html===!0&&(T(W,mi),T(j,wi)),De.svg===!0&&(T(W,nn),T(j,on),T(j,kt)),De.svgFilters===!0&&(T(W,sn),T(j,on),T(j,kt)),De.mathMl===!0&&(T(W,rn),T(j,yi),T(j,kt))),c.ADD_TAGS&&(W===Mn&&(W=$e(W)),T(W,c.ADD_TAGS,V)),c.ADD_ATTR&&(j===Bn&&(j=$e(j)),T(j,c.ADD_ATTR,V)),c.ADD_URI_SAFE_ATTR&&T(Gt,c.ADD_URI_SAFE_ATTR,V),c.FORBID_CONTENTS&&(Pe===jn&&(Pe=$e(Pe)),T(Pe,c.FORBID_CONTENTS,V)),Yt&&(W["#text"]=!0),Ae&&T(W,["html","head","body"]),W.table&&(T(W,["tbody"]),delete Ye.tbody),c.TRUSTED_TYPES_POLICY){if(typeof c.TRUSTED_TYPES_POLICY.createHTML!="function")throw Je('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof c.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Je('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=c.TRUSTED_TYPES_POLICY,J=S.createHTML("")}else S===void 0&&(S=kr(b,s)),S!==null&&typeof J=="string"&&(J=S.createHTML(""));ee&&ee(c),Be=c}},Zn=T({},["mi","mo","mn","ms","mtext"]),Kn=T({},["foreignobject","desc","title","annotation-xml"]),Ds=T({},["title","style","font","a","script"]),Qn=T({},[...nn,...sn,...ur]),Jn=T({},[...rn,...fr]),Ps=function(c){let d=D(c);(!d||!d.tagName)&&(d={namespaceURI:Me,tagName:"template"});const g=Ct(c.tagName),I=Ct(d.tagName);return Zt[c.namespaceURI]?c.namespaceURI===bt?d.namespaceURI===be?g==="svg":d.namespaceURI===mt?g==="svg"&&(I==="annotation-xml"||Zn[I]):!!Qn[g]:c.namespaceURI===mt?d.namespaceURI===be?g==="math":d.namespaceURI===bt?g==="math"&&Kn[I]:!!Jn[g]:c.namespaceURI===be?d.namespaceURI===bt&&!Kn[I]||d.namespaceURI===mt&&!Zn[I]?!1:!Jn[g]&&(Ds[g]||!Qn[g]):!!(Xe==="application/xhtml+xml"&&Zt[c.namespaceURI]):!1},Se=function(c){Ke(e.removed,{element:c});try{c.parentNode.removeChild(c)}catch{c.remove()}},Qt=function(c,d){try{Ke(e.removed,{attribute:d.getAttributeNode(c),from:d})}catch{Ke(e.removed,{attribute:null,from:d})}if(d.removeAttribute(c),c==="is"&&!j[c])if(ze||dt)try{Se(d)}catch{}else try{d.setAttribute(c,"")}catch{}},ei=function(c){let d=null,g=null;if(Vt)c="<remove></remove>"+c;else{const K=or(c,/^[\r\n\t ]+/);g=K&&K[0]}Xe==="application/xhtml+xml"&&Me===be&&(c='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+c+"</body></html>");const I=S?S.createHTML(c):c;if(Me===be)try{d=new p().parseFromString(I,Xe)}catch{}if(!d||!d.documentElement){d=oe.createDocument(Me,"template",null);try{d.documentElement.innerHTML=Xt?J:I}catch{}}const Z=d.body||d.documentElement;return c&&g&&Z.insertBefore(t.createTextNode(g),Z.childNodes[0]||null),Me===be?_.call(d,Ae?"html":"body")[0]:Ae?d.documentElement:Z},ti=function(c){return fe.call(c.ownerDocument||c,c,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT,null)},Ms=function(c){return c instanceof f&&(typeof c.nodeName!="string"||typeof c.textContent!="string"||typeof c.removeChild!="function"||!(c.attributes instanceof u)||typeof c.removeAttribute!="function"||typeof c.setAttribute!="function"||typeof c.namespaceURI!="string"||typeof c.insertBefore!="function"||typeof c.hasChildNodes!="function")},ni=function(c){return typeof a=="function"&&c instanceof a},we=function(c,d,g){x[c]&&yt(x[c],I=>{I.call(e,d,g,Be)})},ii=function(c){let d=null;if(we("beforeSanitizeElements",c,null),Ms(c))return Se(c),!0;const g=V(c.nodeName);if(we("uponSanitizeElement",c,{tagName:g,allowedTags:W}),c.hasChildNodes()&&!ni(c.firstElementChild)&&ie(/<[/\w]/g,c.innerHTML)&&ie(/<[/\w]/g,c.textContent))return Se(c),!0;if(!W[g]||Ye[g]){if(!Ye[g]&&ri(g)&&(U.tagNameCheck instanceof RegExp&&ie(U.tagNameCheck,g)||U.tagNameCheck instanceof Function&&U.tagNameCheck(g)))return!1;if(Yt&&!Pe[g]){const I=D(c)||c.parentNode,Z=P(c)||c.childNodes;if(Z&&I){const K=Z.length;for(let te=K-1;te>=0;--te)I.insertBefore(E(Z[te],!0),Y(c))}}return Se(c),!0}return c instanceof l&&!Ps(c)||(g==="noscript"||g==="noembed"||g==="noframes")&&ie(/<\/no(script|embed|frames)/i,c.innerHTML)?(Se(c),!0):(Ie&&c.nodeType===3&&(d=c.textContent,yt([Ee,H,v],I=>{d=Qe(d,I," ")}),c.textContent!==d&&(Ke(e.removed,{element:c.cloneNode()}),c.textContent=d)),we("afterSanitizeElements",c,null),!1)},si=function(c,d,g){if(qn&&(d==="id"||d==="name")&&(g in t||g in zs))return!1;if(!(Wt&&!qt[d]&&ie(q,d))){if(!(Un&&ie(B,d))){if(!j[d]||qt[d]){if(!(ri(c)&&(U.tagNameCheck instanceof RegExp&&ie(U.tagNameCheck,c)||U.tagNameCheck instanceof Function&&U.tagNameCheck(c))&&(U.attributeNameCheck instanceof RegExp&&ie(U.attributeNameCheck,d)||U.attributeNameCheck instanceof Function&&U.attributeNameCheck(d))||d==="is"&&U.allowCustomizedBuiltInElements&&(U.tagNameCheck instanceof RegExp&&ie(U.tagNameCheck,g)||U.tagNameCheck instanceof Function&&U.tagNameCheck(g))))return!1}else if(!Gt[d]){if(!ie(Pn,Qe(g,Dn,""))){if(!((d==="src"||d==="xlink:href"||d==="href")&&c!=="script"&&ar(g,"data:")===0&&Vn[c])){if(!(Fn&&!ie(pt,Qe(g,Dn,"")))){if(g)return!1}}}}}}return!0},ri=function(c){return c!=="annotation-xml"&&c.indexOf("-")>0},oi=function(c){we("beforeSanitizeAttributes",c,null);const{attributes:d}=c;if(!d)return;const g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:j};let I=d.length;for(;I--;){const Z=d[I],{name:K,namespaceURI:te,value:Re}=Z,Ze=V(K);let ne=K==="value"?Re:lr(Re);if(g.attrName=Ze,g.attrValue=ne,g.keepAttr=!0,g.forceKeepAttr=void 0,we("uponSanitizeAttribute",c,g),ne=g.attrValue,g.forceKeepAttr||(Qt(K,c),!g.keepAttr))continue;if(!Hn&&ie(/\/>/i,ne)){Qt(K,c);continue}Ie&&yt([Ee,H,v],li=>{ne=Qe(ne,li," ")});const ai=V(c.nodeName);if(si(ai,Ze,ne)){if(Wn&&(Ze==="id"||Ze==="name")&&(Qt(K,c),ne=Ls+ne),S&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!te)switch(b.getAttributeType(ai,Ze)){case"TrustedHTML":{ne=S.createHTML(ne);break}case"TrustedScriptURL":{ne=S.createScriptURL(ne);break}}try{te?c.setAttributeNS(te,K,ne):c.setAttribute(K,ne),gi(e.removed)}catch{}}}we("afterSanitizeAttributes",c,null)},Bs=function w(c){let d=null;const g=ti(c);for(we("beforeSanitizeShadowDOM",c,null);d=g.nextNode();)we("uponSanitizeShadowNode",d,null),!ii(d)&&(d.content instanceof r&&w(d.content),oi(d));we("afterSanitizeShadowDOM",c,null)};return e.sanitize=function(w){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=null,g=null,I=null,Z=null;if(Xt=!w,Xt&&(w="<!-->"),typeof w!="string"&&!ni(w))if(typeof w.toString=="function"){if(w=w.toString(),typeof w!="string")throw Je("dirty is not a string, aborting")}else throw Je("toString is not a function");if(!e.isSupported)return w;if(jt||Kt(c),e.removed=[],typeof w=="string"&&(Ge=!1),Ge){if(w.nodeName){const Re=V(w.nodeName);if(!W[Re]||Ye[Re])throw Je("root node is forbidden and cannot be sanitized in-place")}}else if(w instanceof a)d=ei("<!---->"),g=d.ownerDocument.importNode(w,!0),g.nodeType===1&&g.nodeName==="BODY"||g.nodeName==="HTML"?d=g:d.appendChild(g);else{if(!ze&&!Ie&&!Ae&&w.indexOf("<")===-1)return S&&gt?S.createHTML(w):w;if(d=ei(w),!d)return ze?null:gt?J:""}d&&Vt&&Se(d.firstChild);const K=ti(Ge?w:d);for(;I=K.nextNode();)ii(I)||(I.content instanceof r&&Bs(I.content),oi(I));if(Ge)return w;if(ze){if(dt)for(Z=Te.call(d.ownerDocument);d.firstChild;)Z.appendChild(d.firstChild);else Z=d;return(j.shadowroot||j.shadowrootmode)&&(Z=N.call(n,Z,!0)),Z}let te=Ae?d.outerHTML:d.innerHTML;return Ae&&W["!doctype"]&&d.ownerDocument&&d.ownerDocument.doctype&&d.ownerDocument.doctype.name&&ie(Ji,d.ownerDocument.doctype.name)&&(te="<!DOCTYPE "+d.ownerDocument.doctype.name+`>
`+te),Ie&&yt([Ee,H,v],Re=>{te=Qe(te,Re," ")}),S&&gt?S.createHTML(te):te},e.setConfig=function(){let w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Kt(w),jt=!0},e.clearConfig=function(){Be=null,jt=!1},e.isValidAttribute=function(w,c,d){Be||Kt({});const g=V(w),I=V(c);return si(g,I,d)},e.addHook=function(w,c){typeof c=="function"&&(x[w]=x[w]||[],Ke(x[w],c))},e.removeHook=function(w){if(x[w])return gi(x[w])},e.removeHooks=function(w){x[w]&&(x[w]=[])},e.removeAllHooks=function(){x={}},e}var pn=es();function vn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ne=vn();function ts(i){Ne=i}const ns=/[&<>"']/,xr=new RegExp(ns.source,"g"),is=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,vr=new RegExp(is.source,"g"),Tr={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ki=i=>Tr[i];function se(i,e){if(e){if(ns.test(i))return i.replace(xr,ki)}else if(is.test(i))return i.replace(vr,ki);return i}const Er=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Ar(i){return i.replace(Er,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Sr=/(^|[^\[])\^/g;function O(i,e){let t=typeof i=="string"?i:i.source;e=e||"";const n={replace:(s,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(Sr,"$1"),t=t.replace(s,o),n},getRegex:()=>new RegExp(t,e)};return n}function xi(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const st={exec:()=>null};function vi(i,e){const t=i.replace(/\|/g,(r,o,a)=>{let l=!1,h=o;for(;--h>=0&&a[h]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function xt(i,e,t){const n=i.length;if(n===0)return"";let s=0;for(;s<n;){const r=i.charAt(n-s-1);if(r===e&&!t)s++;else if(r!==e&&t)s++;else break}return i.slice(0,n-s)}function Rr(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<i.length;n++)if(i[n]==="\\")n++;else if(i[n]===e[0])t++;else if(i[n]===e[1]&&(t--,t<0))return n;return-1}function Ti(i,e,t,n){const s=e.href,r=e.title?se(e.title):null,o=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:t,href:s,title:r,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,a}return{type:"image",raw:t,href:s,title:r,text:se(o)}}function $r(i,e){const t=i.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const r=s.match(/^\s+/);if(r===null)return s;const[o]=r;return o.length>=n.length?s.slice(n.length):s}).join(`
`)}class Pt{constructor(e){k(this,"options");k(this,"rules");k(this,"lexer");this.options=e||Ne}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:xt(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=$r(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const s=xt(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=xt(t[0].replace(/^ *>[ \t]?/gm,""),`
`),s=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(n);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:r,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const o=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",h=!1;for(;e;){let u=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let f=t[2].split(`
`,1)[0].replace(/^\t+/,P=>" ".repeat(3*P.length)),p=e.split(`
`,1)[0],b=0;this.options.pedantic?(b=2,l=f.trimStart()):(b=t[2].search(/[^ ]/),b=b>4?1:b,l=f.slice(b),b+=t[1].length);let $=!1;if(!f&&/^ *$/.test(p)&&(a+=p+`
`,e=e.substring(p.length+1),u=!0),!u){const P=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),D=new RegExp(`^ {0,${Math.min(3,b-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),S=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:\`\`\`|~~~)`),J=new RegExp(`^ {0,${Math.min(3,b-1)}}#`);for(;e;){const oe=e.split(`
`,1)[0];if(p=oe,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),S.test(p)||J.test(p)||P.test(p)||D.test(e))break;if(p.search(/[^ ]/)>=b||!p.trim())l+=`
`+p.slice(b);else{if($||f.search(/[^ ]/)>=4||S.test(f)||J.test(f)||D.test(f))break;l+=`
`+p}!$&&!p.trim()&&($=!0),a+=oe+`
`,e=e.substring(oe.length+1),f=p.slice(b)}}r.loose||(h?r.loose=!0:/\n *\n *$/.test(a)&&(h=!0));let E=null,Y;this.options.gfm&&(E=/^\[[ xX]\] /.exec(l),E&&(Y=E[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:a,task:!!E,checked:Y,loose:!1,text:l,tokens:[]}),r.raw+=a}r.items[r.items.length-1].raw=a.trimEnd(),r.items[r.items.length-1].text=l.trimEnd(),r.raw=r.raw.trimEnd();for(let u=0;u<r.items.length;u++)if(this.lexer.state.top=!1,r.items[u].tokens=this.lexer.blockTokens(r.items[u].text,[]),!r.loose){const f=r.items[u].tokens.filter(b=>b.type==="space"),p=f.length>0&&f.some(b=>/\n.*\n/.test(b.raw));r.loose=p}if(r.loose)for(let u=0;u<r.items.length;u++)r.items[u].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=vi(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),r=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const a of s)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of n)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of r)o.rows.push(vi(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:se(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=xt(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Rr(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],r=o[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),Ti(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(/\s+/g," "),r=t[s.toLowerCase()];if(!r){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return Ti(n,r,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...s[0]].length-1;let a,l,h=o,u=0;const f=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+o);(s=f.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){h+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(h-=l,h>0)continue;l=Math.min(l,l+h+u);const p=[...s[0]][0].length,b=e.slice(0,o+s.index+p+l);if(Math.min(o,l)%2){const E=b.slice(1,-1);return{type:"em",raw:b,text:E,tokens:this.lexer.inlineTokens(E)}}const $=b.slice(2,-2);return{type:"strong",raw:b,text:$,tokens:this.lexer.inlineTokens($)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return s&&r&&(n=n.substring(1,n.length-1)),n=se(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=se(t[1]),s="mailto:"+n):(n=se(t[1]),s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=se(t[0]),r="mailto:"+s;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);s=se(t[0]),t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=se(t[0]),{type:"text",raw:t[0],text:n}}}}const Cr=/^(?: *(?:\n|$))+/,Lr=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Or=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ut=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Nr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ss=/(?:[*+-]|\d{1,9}[.)])/,rs=O(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ss).getRegex(),Tn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Ir=/^[^\n]+/,En=/(?!\s*\])(?:\\.|[^\[\]\\])+/,zr=O(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",En).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Dr=O(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ss).getRegex(),Ft="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",An=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pr=O("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",An).replace("tag",Ft).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),os=O(Tn).replace("hr",ut).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ft).getRegex(),Mr=O(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",os).getRegex(),Sn={blockquote:Mr,code:Lr,def:zr,fences:Or,heading:Nr,hr:ut,html:Pr,lheading:rs,list:Dr,newline:Cr,paragraph:os,table:st,text:Ir},Ei=O("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ut).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ft).getRegex(),Br={...Sn,table:Ei,paragraph:O(Tn).replace("hr",ut).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ei).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ft).getRegex()},Ur={...Sn,html:O(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",An).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:st,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:O(Tn).replace("hr",ut).replace("heading",` *#{1,6} *[^
]`).replace("lheading",rs).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},as=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Fr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ls=/^( {2,}|\\)\n(?!\s*$)/,Hr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ft="\\p{P}\\p{S}",qr=O(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,ft).getRegex(),Wr=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,jr=O(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,ft).getRegex(),Vr=O("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,ft).getRegex(),Yr=O("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,ft).getRegex(),Gr=O(/\\([punct])/,"gu").replace(/punct/g,ft).getRegex(),Xr=O(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Zr=O(An).replace("(?:-->|$)","-->").getRegex(),Kr=O("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Zr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Mt=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Qr=O(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Mt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),cs=O(/^!?\[(label)\]\[(ref)\]/).replace("label",Mt).replace("ref",En).getRegex(),hs=O(/^!?\[(ref)\](?:\[\])?/).replace("ref",En).getRegex(),Jr=O("reflink|nolink(?!\\()","g").replace("reflink",cs).replace("nolink",hs).getRegex(),Rn={_backpedal:st,anyPunctuation:Gr,autolink:Xr,blockSkip:Wr,br:ls,code:Fr,del:st,emStrongLDelim:jr,emStrongRDelimAst:Vr,emStrongRDelimUnd:Yr,escape:as,link:Qr,nolink:hs,punctuation:qr,reflink:cs,reflinkSearch:Jr,tag:Kr,text:Hr,url:st},eo={...Rn,link:O(/^!?\[(label)\]\((.*?)\)/).replace("label",Mt).getRegex(),reflink:O(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Mt).getRegex()},dn={...Rn,escape:O(as).replace("])","~|])").getRegex(),url:O(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},to={...dn,br:O(ls).replace("{2,}","*").getRegex(),text:O(dn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},vt={normal:Sn,gfm:Br,pedantic:Ur},et={normal:Rn,gfm:dn,breaks:to,pedantic:eo};class pe{constructor(e){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ne,this.options.tokenizer=this.options.tokenizer||new Pt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:vt.normal,inline:et.normal};this.options.pedantic?(t.block=vt.pedantic,t.inline=et.pedantic):this.options.gfm&&(t.block=vt.gfm,this.options.breaks?t.inline=et.breaks:t.inline=et.gfm),this.tokenizer.rules=t}static get rules(){return{block:vt,inline:et}}static lex(e,t){return new pe(t).lex(e)}static lexInline(e,t){return new pe(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,h)=>l+"    ".repeat(h.length));let n,s,r,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let h;this.options.extensions.startBlock.forEach(u=>{h=u.call({lexer:this},l),typeof h=="number"&&h>=0&&(a=Math.min(a,h))}),a<1/0&&a>=0&&(r=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){s=t[t.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),o=r.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,r,o=e,a,l,h;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(h=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,o,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let p;this.options.extensions.startInline.forEach(b=>{p=b.call({lexer:this},f),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(r)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),l=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Bt{constructor(e){k(this,"options");this.options=e||Ne}code(e,t,n){var r;const s=(r=(t||"").match(/^\S*/))==null?void 0:r[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+se(s)+'">'+(n?e:se(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:se(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){const s=t?"ol":"ul",r=t&&n!==1?' start="'+n+'"':"";return"<"+s+r+`>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const s=xi(e);if(s===null)return n;e=s;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){const s=xi(e);if(s===null)return n;e=s;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=">",r}text(e){return e}}class $n{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class de{constructor(e){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=e||Ne,this.options.renderer=this.options.renderer||new Bt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new $n}static parse(e,t){return new de(t).parse(e)}static parseInline(e,t){return new de(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const o=r,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){n+=a||"";continue}}switch(r.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const o=r;n+=this.renderer.heading(this.parseInline(o.tokens),o.depth,Ar(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=r;n+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=r;let a="",l="";for(let u=0;u<o.header.length;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});a+=this.renderer.tablerow(l);let h="";for(let u=0;u<o.rows.length;u++){const f=o.rows[u];l="";for(let p=0;p<f.length;p++)l+=this.renderer.tablecell(this.parseInline(f[p].tokens),{header:!1,align:o.align[p]});h+=this.renderer.tablerow(l)}n+=this.renderer.table(a,h);continue}case"blockquote":{const o=r,a=this.parse(o.tokens);n+=this.renderer.blockquote(a);continue}case"list":{const o=r,a=o.ordered,l=o.start,h=o.loose;let u="";for(let f=0;f<o.items.length;f++){const p=o.items[f],b=p.checked,$=p.task;let E="";if(p.task){const Y=this.renderer.checkbox(!!b);h?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=Y+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=Y+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:Y+" "}):E+=Y+" "}E+=this.parse(p.tokens,h),u+=this.renderer.listitem(E,$,!!b)}n+=this.renderer.list(u,a,l);continue}case"html":{const o=r;n+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=r;n+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=r,a=o.tokens?this.parseInline(o.tokens):o.text;for(;s+1<e.length&&e[s+1].type==="text";)o=e[++s],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);n+=t?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=o||"";continue}}switch(r.type){case"escape":{const o=r;n+=t.text(o.text);break}case"html":{const o=r;n+=t.html(o.text);break}case"link":{const o=r;n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=r;n+=t.image(o.href,o.title,o.text);break}case"strong":{const o=r;n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=r;n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=r;n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{const o=r;n+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=r;n+=t.text(o.text);break}default:{const o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}}class rt{constructor(e){k(this,"options");this.options=e||Ne}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}k(rt,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var ht,gn,Ut,us;class no{constructor(...e){Jt(this,ht);Jt(this,Ut);k(this,"defaults",vn());k(this,"options",this.setOptions);k(this,"parse",wt(this,ht,gn).call(this,pe.lex,de.parse));k(this,"parseInline",wt(this,ht,gn).call(this,pe.lexInline,de.parseInline));k(this,"Parser",de);k(this,"Renderer",Bt);k(this,"TextRenderer",$n);k(this,"Lexer",pe);k(this,"Tokenizer",Pt);k(this,"Hooks",rt);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const h of l)n=n.concat(this.walkTokens(h.tokens,t));break}case"list":{const a=o;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=o;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const h=a[l].flat(1/0);n=n.concat(this.walkTokens(h,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=t.renderers[r.name];o?t.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[r.level];o?o.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new Bt(this.defaults);for(const o in n.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.renderer[a],h=r[a];r[a]=(...u)=>{let f=l.apply(r,u);return f===!1&&(f=h.apply(r,u)),f||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new Pt(this.defaults);for(const o in n.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=n.tokenizer[a],h=r[a];r[a]=(...u)=>{let f=l.apply(r,u);return f===!1&&(f=h.apply(r,u)),f}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new rt;for(const o in n.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.hooks[a],h=r[a];rt.passThroughHooks.has(o)?r[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(r,u)).then(p=>h.call(r,p));const f=l.call(r,u);return h.call(r,f)}:r[a]=(...u)=>{let f=l.apply(r,u);return f===!1&&(f=h.apply(r,u)),f}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),r&&(l=l.concat(r.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return pe.lex(e,t??this.defaults)}parser(e,t){return de.parse(e,t??this.defaults)}}ht=new WeakSet,gn=function(e,t){return(n,s)=>{const r={...s},o={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=wt(this,Ut,us).call(this,!!o.silent,!!o.async);if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>t(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(n=o.hooks.preprocess(n));let l=e(n,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let h=t(l,o);return o.hooks&&(h=o.hooks.postprocess(h)),h}catch(l){return a(l)}}},Ut=new WeakSet,us=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+se(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}};const Oe=new no;function C(i,e){return Oe.parse(i,e)}C.options=C.setOptions=function(i){return Oe.setOptions(i),C.defaults=Oe.defaults,ts(C.defaults),C};C.getDefaults=vn;C.defaults=Ne;C.use=function(...i){return Oe.use(...i),C.defaults=Oe.defaults,ts(C.defaults),C};C.walkTokens=function(i,e){return Oe.walkTokens(i,e)};C.parseInline=Oe.parseInline;C.Parser=de;C.parser=de.parse;C.Renderer=Bt;C.TextRenderer=$n;C.Lexer=pe;C.lexer=pe.lex;C.Tokenizer=Pt;C.Hooks=rt;C.parse=C;C.options;C.setOptions;C.use;C.walkTokens;C.parseInline;de.parse;pe.lex;function io(i){let e,t;return{c(){e=X("svg"),t=X("path"),m(t,"d","M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v28c0 50.8-41.2 92-92 92c-31.1 0-58.7-15.5-75.3-39.2C322.7 360.9 291.1 376 256 376c-66.3 0-120-53.7-120-120s53.7-120 120-120c28.8 0 55.2 10.1 75.8 27c4.3-6.6 11.7-11 20.2-11c13.3 0 24 10.7 24 24v80 28c0 24.3 19.7 44 44 44s44-19.7 44-44V256c0-114.9-93.1-208-208-208zm72 208a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 512 512")},m(n,s){M(n,e,s),y(e,t)},p:L,i:L,o:L,d(n){n&&z(e)}}}class so extends xe{constructor(e){super(),_e(this,e,null,io,ye,{})}}ke(so,{},[],[],!0);function ro(i){let e,t;return{c(){e=X("svg"),t=X("path"),m(t,"d","M337 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-143 143L97 127c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80c9.4 9.4 24.6 9.4 33.9 0L337 81zM441 201c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-247 247L41 295c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L143 465c9.4 9.4 24.6 9.4 33.9 0L441 201z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 448 512")},m(n,s){M(n,e,s),y(e,t)},p:L,i:L,o:L,d(n){n&&z(e)}}}class fs extends xe{constructor(e){super(),_e(this,e,null,ro,ye,{})}}ke(fs,{},[],[],!0);function oo(i){let e,t;return{c(){e=X("svg"),t=X("path"),m(t,"d","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 512 512")},m(n,s){M(n,e,s),y(e,t)},p:L,i:L,o:L,d(n){n&&z(e)}}}class ps extends xe{constructor(e){super(),_e(this,e,null,oo,ye,{})}}ke(ps,{},[],[],!0);function ao(i){let e,t;return{c(){e=X("svg"),t=X("path"),m(t,"d","M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H448c8.8 0 16 7.2 16 16V352c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432V416zm-.2 76.2l.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h48 48v48 4 .3 6.4V496c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM96 180.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H152c8.8 0 16-7.2 16-16s-7.2-16-16-16H132.8C112.5 144 96 160.5 96 180.8zM372.8 144c-20.3 0-36.8 16.5-36.8 36.8c0 12.3 6.2 23.8 16.4 30.7l29.4 19.6c1.3 .9 2.2 2.4 2.2 4c0 2.7-2.2 4.8-4.8 4.8H352c-8.8 0-16 7.2-16 16s7.2 16 16 16h27.2c20.3 0 36.8-16.5 36.8-36.8c0-12.3-6.2-23.8-16.4-30.7l-29.4-19.6c-1.3-.9-2.2-2.4-2.2-4c0-2.7 2.2-4.8 4.8-4.8H392c8.8 0 16-7.2 16-16s-7.2-16-16-16H372.8zm-152 6.4c-4.1-5.5-11.3-7.8-17.9-5.6S192 153.1 192 160v96c0 8.8 7.2 16 16 16s16-7.2 16-16V208l19.2 25.6c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4L288 208v48c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-6.9-4.4-13-10.9-15.2s-13.7 .1-17.9 5.6L256 197.3l-35.2-46.9z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 512 512")},m(n,s){M(n,e,s),y(e,t)},p:L,i:L,o:L,d(n){n&&z(e)}}}class lo extends xe{constructor(e){super(),_e(this,e,null,ao,ye,{})}}ke(lo,{},[],[],!0);function co(i){let e,t;return{c(){e=X("svg"),t=X("path"),m(t,"d","M133.9 232L65.8 95.9 383.4 232H133.9zm0 48H383.4L65.8 416.1l68-136.1zM44.6 34.6C32.3 29.3 17.9 32.3 8.7 42S-2.6 66.3 3.4 78.3L92.2 256 3.4 433.7c-6 12-3.9 26.5 5.3 36.3s23.5 12.7 35.9 7.5l448-192c11.8-5 19.4-16.6 19.4-29.4s-7.6-24.4-19.4-29.4l-448-192z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 512 512")},m(n,s){M(n,e,s),y(e,t)},p:L,i:L,o:L,d(n){n&&z(e)}}}class ds extends xe{constructor(e){super(),_e(this,e,null,co,ye,{})}}ke(ds,{},[],[],!0);function ho(i){let e,t;return{c(){e=X("svg"),t=X("path"),m(t,"d","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 448 512")},m(n,s){M(n,e,s),y(e,t)},p:L,i:L,o:L,d(n){n&&z(e)}}}class gs extends xe{constructor(e){super(),_e(this,e,null,ho,ye,{})}}ke(gs,{},[],[],!0);function uo(i){let e,t;return{c(){e=X("svg"),t=X("path"),m(t,"d","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 448 512")},m(n,s){M(n,e,s),y(e,t)},p:L,i:L,o:L,d(n){n&&z(e)}}}class fo extends xe{constructor(e){super(),_e(this,e,null,uo,ye,{})}}ke(fo,{},[],[],!0);function po(i){let e,t;return{c(){e=X("svg"),t=X("path"),m(t,"d","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"viewBox","0 0 384 512")},m(n,s){M(n,e,s),y(e,t)},p:L,i:L,o:L,d(n){n&&z(e)}}}class go extends xe{constructor(e){super(),_e(this,e,null,po,ye,{})}}ke(go,{},[],[],!0);const me=Object.create(null);me.open="0";me.close="1";me.ping="2";me.pong="3";me.message="4";me.upgrade="5";me.noop="6";const Lt=Object.create(null);Object.keys(me).forEach(i=>{Lt[me[i]]=i});const mn={type:"error",data:"parser error"},ms=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",bs=typeof ArrayBuffer=="function",ys=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,Cn=({type:i,data:e},t,n)=>ms&&e instanceof Blob?t?n(e):Ai(e,n):bs&&(e instanceof ArrayBuffer||ys(e))?t?n(e):Ai(new Blob([e]),n):n(me[i]+(e||"")),Ai=(i,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function Si(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let an;function mo(i,e){if(ms&&i.data instanceof Blob)return i.data.arrayBuffer().then(Si).then(e);if(bs&&(i.data instanceof ArrayBuffer||ys(i.data)))return e(Si(i.data));Cn(i,!1,t=>{an||(an=new TextEncoder),e(an.encode(t))})}const Ri="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",nt=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<Ri.length;i++)nt[Ri.charCodeAt(i)]=i;const bo=i=>{let e=i.length*.75,t=i.length,n,s=0,r,o,a,l;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const h=new ArrayBuffer(e),u=new Uint8Array(h);for(n=0;n<t;n+=4)r=nt[i.charCodeAt(n)],o=nt[i.charCodeAt(n+1)],a=nt[i.charCodeAt(n+2)],l=nt[i.charCodeAt(n+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return h},wo=typeof ArrayBuffer=="function",Ln=(i,e)=>{if(typeof i!="string")return{type:"message",data:_s(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:yo(i.substring(1),e)}:Lt[t]?i.length>1?{type:Lt[t],data:i.substring(1)}:{type:Lt[t]}:mn},yo=(i,e)=>{if(wo){const t=bo(i);return _s(t,e)}else return{base64:!0,data:i}},_s=(i,e)=>{switch(e){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},ks="",_o=(i,e)=>{const t=i.length,n=new Array(t);let s=0;i.forEach((r,o)=>{Cn(r,!1,a=>{n[o]=a,++s===t&&e(n.join(ks))})})},ko=(i,e)=>{const t=i.split(ks),n=[];for(let s=0;s<t.length;s++){const r=Ln(t[s],e);if(n.push(r),r.type==="error")break}return n};function xo(){return new TransformStream({transform(i,e){mo(i,t=>{const n=t.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let ln;function Tt(i){return i.reduce((e,t)=>e+t.length,0)}function Et(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)t[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function vo(i,e){ln||(ln=new TextDecoder);const t=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(Tt(t)<1)break;const l=Et(t,1);r=(l[0]&128)===128,s=l[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(Tt(t)<2)break;const l=Et(t,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(Tt(t)<8)break;const l=Et(t,8),h=new DataView(l.buffer,l.byteOffset,l.length),u=h.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(mn);break}s=u*Math.pow(2,32)+h.getUint32(4),n=3}else{if(Tt(t)<s)break;const l=Et(t,s);a.enqueue(Ln(r?l:ln.decode(l),e)),n=0}if(s===0||s>i){a.enqueue(mn);break}}}})}const xs=4;function F(i){if(i)return To(i)}function To(i){for(var e in F.prototype)i[e]=F.prototype[e];return i}F.prototype.on=F.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};F.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};F.prototype.off=F.prototype.removeListener=F.prototype.removeAllListeners=F.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};F.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};F.prototype.emitReserved=F.prototype.emit;F.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};F.prototype.hasListeners=function(i){return!!this.listeners(i).length};const ae=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function vs(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}const Eo=ae.setTimeout,Ao=ae.clearTimeout;function Ht(i,e){e.useNativeTimers?(i.setTimeoutFn=Eo.bind(ae),i.clearTimeoutFn=Ao.bind(ae)):(i.setTimeoutFn=ae.setTimeout.bind(ae),i.clearTimeoutFn=ae.clearTimeout.bind(ae))}const So=1.33;function Ro(i){return typeof i=="string"?$o(i):Math.ceil((i.byteLength||i.size)*So)}function $o(i){let e=0,t=0;for(let n=0,s=i.length;n<s;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function Co(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function Lo(i){let e={},t=i.split("&");for(let n=0,s=t.length;n<s;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class Oo extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class On extends F{constructor(e){super(),this.writable=!1,Ht(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new Oo(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=Ln(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Co(e);return t.length?"?"+t:""}}const Ts="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),bn=64,No={};let $i=0,At=0,Ci;function Li(i){let e="";do e=Ts[i%bn]+e,i=Math.floor(i/bn);while(i>0);return e}function Es(){const i=Li(+new Date);return i!==Ci?($i=0,Ci=i):i+"."+Li($i++)}for(;At<bn;At++)No[Ts[At]]=At;let As=!1;try{As=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Io=As;function Ss(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||Io))return new XMLHttpRequest}catch{}if(!e)try{return new ae[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function zo(){}const Do=function(){return new Ss({xdomain:!1}).responseType!=null}();class Po extends On{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}const t=e&&e.forceBase64;this.supportsBinary=Do&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};ko(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,_o(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Es()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new ge(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class ge extends F{constructor(e,t){super(),Ht(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=vs(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const n=this.xhr=new Ss(t);try{n.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this.opts.cookieJar)===null||s===void 0||s.parseCookies(n)),n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=ge.requestsCount++,ge.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=zo,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete ge.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}ge.requestsCount=0;ge.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Oi);else if(typeof addEventListener=="function"){const i="onpagehide"in ae?"pagehide":"unload";addEventListener(i,Oi,!1)}}function Oi(){for(let i in ge.requests)ge.requests.hasOwnProperty(i)&&ge.requests[i].abort()}const Nn=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),St=ae.WebSocket||ae.MozWebSocket,Ni=!0,Mo="arraybuffer",Ii=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Bo extends On{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=Ii?{}:vs(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=Ni&&!Ii?t?new St(e,t):new St(e):new St(e,t,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;Cn(n,this.supportsBinary,r=>{const o={};try{Ni&&this.ws.send(r)}catch{}s&&Nn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Es()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!St}}class Uo extends On{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=vo(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=xo();s.readable.pipeTo(e.writable),this.writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;this.writer.write(n).then(()=>{s&&Nn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const Fo={websocket:Bo,webtransport:Uo,polling:Po},Ho=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,qo=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function wn(i){if(i.length>2e3)throw"URI too long";const e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let s=Ho.exec(i||""),r={},o=14;for(;o--;)r[qo[o]]=s[o]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Wo(r,r.path),r.queryKey=jo(r,r.query),r}function Wo(i,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function jo(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(t[s]=r)}),t}let Rs=class He extends F{constructor(e,t={}){super(),this.binaryType=Mo,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=wn(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=wn(t.host).host),Ht(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Lo(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=xs,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new Fo[e](n)}open(){let e;if(this.opts.rememberUpgrade&&He.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;He.priorWebsocketSuccess=!1;const s=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",f=>{if(!n)if(f.type==="pong"&&f.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;He.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=t.name,this.emitReserved("upgradeError",p)}}))};function r(){n||(n=!0,u(),t.close(),t=null)}const o=f=>{const p=new Error("probe error: "+f);p.transport=t.name,r(),this.emitReserved("upgradeError",p)};function a(){o("transport closed")}function l(){o("socket closed")}function h(f){t&&f.name!==t.name&&r()}const u=()=>{t.removeListener("open",s),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",h)};t.once("open",s),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",h),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",He.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(t+=Ro(s)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,s){if(typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){He.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const s=e.length;for(;n<s;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};Rs.protocol=xs;function Vo(i,e="",t){let n=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),n=wn(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const Yo=typeof ArrayBuffer=="function",Go=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,$s=Object.prototype.toString,Xo=typeof Blob=="function"||typeof Blob<"u"&&$s.call(Blob)==="[object BlobConstructor]",Zo=typeof File=="function"||typeof File<"u"&&$s.call(File)==="[object FileConstructor]";function In(i){return Yo&&(i instanceof ArrayBuffer||Go(i))||Xo&&i instanceof Blob||Zo&&i instanceof File}function Ot(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(Ot(i[t]))return!0;return!1}if(In(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Ot(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&Ot(i[t]))return!0;return!1}function Ko(i){const e=[],t=i.data,n=i;return n.data=yn(t,e),n.attachments=e.length,{packet:n,buffers:e}}function yn(i,e){if(!i)return i;if(In(i)){const t={_placeholder:!0,num:e.length};return e.push(i),t}else if(Array.isArray(i)){const t=new Array(i.length);for(let n=0;n<i.length;n++)t[n]=yn(i[n],e);return t}else if(typeof i=="object"&&!(i instanceof Date)){const t={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=yn(i[n],e));return t}return i}function Qo(i,e){return i.data=_n(i.data,e),delete i.attachments,i}function _n(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=_n(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=_n(i[t],e));return i}const Jo=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],ea=5;var A;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(A||(A={}));class ta{constructor(e){this.replacer=e}encode(e){return(e.type===A.EVENT||e.type===A.ACK)&&Ot(e)?this.encodeAsBinary({type:e.type===A.EVENT?A.BINARY_EVENT:A.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===A.BINARY_EVENT||e.type===A.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Ko(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}}function zi(i){return Object.prototype.toString.call(i)==="[object Object]"}class zn extends F{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===A.BINARY_EVENT;n||t.type===A.BINARY_ACK?(t.type=n?A.EVENT:A.ACK,this.reconstructor=new na(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(In(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(A[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===A.BINARY_EVENT||n.type===A.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(zn.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case A.CONNECT:return zi(t);case A.DISCONNECT:return t===void 0;case A.CONNECT_ERROR:return typeof t=="string"||zi(t);case A.EVENT:case A.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Jo.indexOf(t[0])===-1);case A.ACK:case A.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class na{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Qo(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const ia=Object.freeze(Object.defineProperty({__proto__:null,Decoder:zn,Encoder:ta,get PacketType(){return A},protocol:ea},Symbol.toStringTag,{value:"Module"}));function he(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const sa=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Cs extends F{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[he(e,"open",this.onopen.bind(this)),he(e,"packet",this.onpacket.bind(this)),he(e,"error",this.onerror.bind(this)),he(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(sa.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const n={type:A.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),n.id=o}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...o])}}emitWithAck(e,...t){const n=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((s,r)=>{t.push((o,a)=>n?o?r(o):s(a):s(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>n!==this._queue[0]?void 0:(s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:A.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case A.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case A.EVENT:case A.BINARY_EVENT:this.onevent(e);break;case A.ACK:case A.BINARY_ACK:this.onack(e);break;case A.DISCONNECT:this.ondisconnect();break;case A.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...s){n||(n=!0,t.packet({type:A.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:A.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Ve(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Ve.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=Math.floor(e*10)&1?i+t:i-t}return Math.min(i,this.max)|0};Ve.prototype.reset=function(){this.attempts=0};Ve.prototype.setMin=function(i){this.ms=i};Ve.prototype.setMax=function(i){this.max=i};Ve.prototype.setJitter=function(i){this.jitter=i};class kn extends F{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Ht(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ve({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||ia;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Rs(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=he(t,"open",function(){n.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=he(t,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(he(e,"ping",this.onping.bind(this)),he(e,"data",this.ondata.bind(this)),he(e,"error",this.onerror.bind(this)),he(e,"close",this.onclose.bind(this)),he(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Nn(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Cs(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const tt={};function Nt(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=Vo(i,e.path||"/socket.io"),n=t.source,s=t.id,r=t.path,o=tt[s]&&r in tt[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new kn(n,e):(tt[s]||(tt[s]=new kn(n,e)),l=tt[s]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(Nt,{Manager:kn,Socket:Cs,io:Nt,connect:Nt});const{document:ra}=Ws;function Di(i,e,t){const n=i.slice();return n[22]=e[t],n}function Pi(i){let e,t,n,s,r,o,a,l;return r=new gs({props:{viewBox:"0 0 24 24"}}),{c(){e=R("button"),t=R("p"),t.textContent="Chat",n=Q(),s=R("span"),Dt(r.$$.fragment),m(t,"class","m-auto mx-2"),m(s,"class","h-6 w-5 mr-2 my-auto fill-white"),m(e,"class","py-2 px-2 rounded-md transition duration-300 flex bg-gray-400 hover:bg-gray-500 text-white")},m(h,u){M(h,e,u),y(e,t),y(e,n),y(e,s),lt(r,s,null),o=!0,a||(l=qe(e,"click",i[8]),a=!0)},p:L,i(h){o||(G(r.$$.fragment,h),o=!0)},o(h){le(r.$$.fragment,h),o=!1},d(h){h&&z(e),ct(r),a=!1,l()}}}function Mi(i){let e,t,n,s=(i[0]?i[0]:"")+"",r,o,a,l,h,u,f,p,b,$,E,Y,P,D,S,J,oe,fe,Te,_;h=new ps({props:{viewBox:"0 0 24 24"}});let N=pi(i[3]),x=[];for(let v=0;v<N.length;v+=1)x[v]=Wi(Di(i,N,v));const Ee=v=>le(x[v],1,1,()=>{x[v]=null});S=new ds({props:{viewBox:"0 0 24 24"}});let H=i[4]&&ji(i);return{c(){e=R("div"),t=R("div"),n=R("p"),r=ve(s),o=Q(),a=R("button"),l=R("span"),Dt(h.$$.fragment),u=Q(),f=R("div");for(let v=0;v<x.length;v+=1)x[v].c();p=Q(),b=R("div"),$=R("div"),E=R("input"),Y=Q(),P=R("button"),D=R("span"),Dt(S.$$.fragment),oe=Q(),H&&H.c(),m(n,"class","text-lg font-semibold text-white"),m(l,"class","w-5 fill-white rotate-45"),m(a,"class","rounded-md w-5 mx-1"),m(t,"class","pl-4 p-3 border-b text-black rounded-t-lg flex justify-between items-center bg-gray-400 h-15"),m(f,"class","p-4 overflow-y-auto flex-grow hide-scrollbar"),m(E,"type","text"),m(E,"class","w-full border-none rounded-lg focus:outline-none focus:border-none pl-2 pr-2"),m(E,"placeholder",aa),m(E,"autocomplete","off"),m(D,"class","fill-gray-400"),m(P,"class","w-7 transition duration-300 pr-2"),P.disabled=J=i[2]==="",m($,"class","h-10 w-full bg-white flex rounded-lg"),m(b,"class","p-2 flex flex-col bg-gray-300 rounded-t-xl"),m(e,"class","fixed right-0 bottom-0 w-96 h-3/4 flex flex-col justify-end bg-white mr-4 transition duration-300 rounded-t-xl")},m(v,q){M(v,e,q),y(e,t),y(t,n),y(n,r),y(t,o),y(t,a),y(a,l),lt(h,l,null),y(e,u),y(e,f);for(let B=0;B<x.length;B+=1)x[B]&&x[B].m(f,null);y(e,p),y(e,b),y(b,$),y($,E),hi(E,i[2]),y($,Y),y($,P),y(P,D),lt(S,D,null),y(b,oe),H&&H.m(b,null),fe=!0,Te||(_=[qe(a,"click",i[14]),qe(E,"input",i[15]),qe(E,"keydown",i[5]),qe(P,"click",i[6])],Te=!0)},p(v,q){if((!fe||q&1)&&s!==(s=(v[0]?v[0]:"")+"")&&ot(r,s),q&136){N=pi(v[3]);let B;for(B=0;B<N.length;B+=1){const pt=Di(v,N,B);x[B]?(x[B].p(pt,q),G(x[B],1)):(x[B]=Wi(pt),x[B].c(),G(x[B],1),x[B].m(f,null))}for(It(),B=N.length;B<x.length;B+=1)Ee(B);zt()}q&4&&E.value!==v[2]&&hi(E,v[2]),(!fe||q&4&&J!==(J=v[2]===""))&&(P.disabled=J),v[4]?H?H.p(v,q):(H=ji(v),H.c(),H.m(b,null)):H&&(H.d(1),H=null)},i(v){if(!fe){G(h.$$.fragment,v);for(let q=0;q<N.length;q+=1)G(x[q]);G(S.$$.fragment,v),fe=!0}},o(v){le(h.$$.fragment,v),x=x.filter(Boolean);for(let q=0;q<x.length;q+=1)le(x[q]);le(S.$$.fragment,v),fe=!1},d(v){v&&z(e),ct(h),js(x,v),ct(S),H&&H.d(),Te=!1,je(_)}}}function Bi(i){let e,t,n,s,r,o,a=i[7](i[22].dateTime)+"",l,h=i[22].previous_direction=="out"&&Ui(),u=i[22].message.type=="markdown"&&Fi(i),f=i[22].message.type=="text"&&Hi(i);return{c(){e=R("div"),h&&h.c(),t=Q(),n=R("div"),u&&u.c(),s=Q(),f&&f.c(),r=Q(),o=R("p"),l=ve(a),m(o,"class","text-sm ml-auto"),m(n,"class","bg-gray-200 rounded-lg py-2 px-4 flex flex-col"),m(e,"class","mb-2 mr-10 flex flex-col")},m(p,b){M(p,e,b),h&&h.m(e,null),y(e,t),y(e,n),u&&u.m(n,null),y(n,s),f&&f.m(n,null),y(n,r),y(n,o),y(o,l)},p(p,b){p[22].previous_direction=="out"?h||(h=Ui(),h.c(),h.m(e,t)):h&&(h.d(1),h=null),p[22].message.type=="markdown"?u?u.p(p,b):(u=Fi(p),u.c(),u.m(n,s)):u&&(u.d(1),u=null),p[22].message.type=="text"?f?f.p(p,b):(f=Hi(p),f.c(),f.m(n,r)):f&&(f.d(1),f=null),b&8&&a!==(a=p[7](p[22].dateTime)+"")&&ot(l,a)},d(p){p&&z(e),h&&h.d(),u&&u.d(),f&&f.d()}}}function Ui(i){let e;return{c(){e=R("p"),e.textContent="Agent",m(e,"class","m-auto mx-2 text-sm")},m(t,n){M(t,e,n)},d(t){t&&z(e)}}}function Fi(i){let e,t=pn.sanitize(C(i[22].message.value.trim()))+"",n;return{c(){e=new Ys(!1),n=xn(),e.a=n},m(s,r){e.m(t,s,r),M(s,n,r)},p(s,r){r&8&&t!==(t=pn.sanitize(C(s[22].message.value.trim()))+"")&&e.p(t)},d(s){s&&(z(n),e.d())}}}function Hi(i){let e,t=i[22].message.value+"",n;return{c(){e=R("p"),n=ve(t),m(e,"class","")},m(s,r){M(s,e,r),y(e,n)},p(s,r){r&8&&t!==(t=s[22].message.value+"")&&ot(n,t)},d(s){s&&z(e)}}}function qi(i){let e,t,n,s,r,o=i[22].message+"",a,l,h,u,f=i[7](i[22].dateTime)+"",p,b,$,E,Y,P;return E=new fs({props:{viewBox:"0 0 24 24"}}),{c(){e=R("div"),t=R("p"),t.textContent="You",n=Q(),s=R("div"),r=R("p"),a=ve(o),l=Q(),h=R("div"),u=R("p"),p=ve(f),b=Q(),$=R("span"),Dt(E.$$.fragment),Y=Q(),m(t,"class","m-auto mx-2 text-sm"),m(r,"class",""),m(u,"class","text-sm ml-auto mr-2"),m($,"class","fill-green-400 w-3 my-auto"),m(h,"class","flex w-full"),m(s,"class","bg-gray-200 rounded-lg py-2 px-4 flex flex-col"),m(e,"class","mb-2 ml-10 text-right flex flex-col")},m(D,S){M(D,e,S),y(e,t),y(e,n),y(e,s),y(s,r),y(r,a),y(s,l),y(s,h),y(h,u),y(u,p),y(h,b),y(h,$),lt(E,$,null),y(e,Y),P=!0},p(D,S){(!P||S&8)&&o!==(o=D[22].message+"")&&ot(a,o),(!P||S&8)&&f!==(f=D[7](D[22].dateTime)+"")&&ot(p,f)},i(D){P||(G(E.$$.fragment,D),P=!0)},o(D){le(E.$$.fragment,D),P=!1},d(D){D&&z(e),ct(E)}}}function Wi(i){let e,t,n,s=i[22].direction=="in"&&Bi(i),r=i[22].direction=="out"&&qi(i);return{c(){s&&s.c(),e=Q(),r&&r.c(),t=xn()},m(o,a){s&&s.m(o,a),M(o,e,a),r&&r.m(o,a),M(o,t,a),n=!0},p(o,a){o[22].direction=="in"?s?s.p(o,a):(s=Bi(o),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),o[22].direction=="out"?r?(r.p(o,a),a&8&&G(r,1)):(r=qi(o),r.c(),G(r,1),r.m(t.parentNode,t)):r&&(It(),le(r,1,1,()=>{r=null}),zt())},i(o){n||(G(r),n=!0)},o(o){le(r),n=!1},d(o){o&&(z(e),z(t)),s&&s.d(o),r&&r.d(o)}}}function ji(i){let e,t,n,s,r,o;return{c(){e=R("div"),t=R("button"),n=ve("Switch Chat Channels"),m(t,"class","w-25 transition duration-300 my-2 mx-auto"),t.disabled=s=i[2]==="",m(e,"class","w-full flex")},m(a,l){M(a,e,l),y(e,t),y(t,n),r||(o=qe(t,"click",i[9]),r=!0)},p(a,l){l&4&&s!==(s=a[2]==="")&&(t.disabled=s)},d(a){a&&z(e),r=!1,o()}}}function oa(i){let e,t,n,s,r,o,a=!i[1]&&Pi(i),l=i[1]&&Mi(i);return{c(){e=R("style"),e.textContent=`/*
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
.w-3 {
  width: 0.75rem;
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
}`,t=Q(),n=R("div"),a&&a.c(),s=Q(),l&&l.c(),r=xn(),m(n,"class","fixed bottom-0 right-0 mb-4 mr-4 h-11 w-96 flex justify-end")},m(h,u){y(ra.head,e),M(h,t,u),M(h,n,u),a&&a.m(n,null),M(h,s,u),l&&l.m(h,u),M(h,r,u),o=!0},p(h,[u]){h[1]?a&&(It(),le(a,1,1,()=>{a=null}),zt()):a?(a.p(h,u),u&2&&G(a,1)):(a=Pi(h),a.c(),G(a,1),a.m(n,null)),h[1]?l?(l.p(h,u),u&2&&G(l,1)):(l=Mi(h),l.c(),G(l,1),l.m(r.parentNode,r)):l&&(It(),le(l,1,1,()=>{l=null}),zt())},i(h){o||(G(a),G(l),o=!0)},o(h){le(a),le(l),o=!1},d(h){h&&(z(t),z(n),z(s),z(r)),z(e),a&&a.d(),l&&l.d(h)}}}let aa="Type message...";function la(i,e,t){console.log("stubber webchat v1.2");let{orguuid:n}=e,{chatname:s}=e,{chat_display_name:r}=e,{connect_on_load:o}=e,{passthrough_data:a}=e,l=!0,h=!1,u="ski skjdh askdh kasjdh kah skjh d skjdha sjdh kas hkas j  askj dhkasjhdiaushdi uqwhidu qi wdwi ",f=[],p,b=!0,$="https://external-portforward.stubber.zone:6026";Xs(()=>{console.log("__Mounted"),o&&l&&E()});let E=()=>{p=Nt($),p.on("connect",async()=>{console.log("___Connected to server"),f.length==0&&await p.emit("initialize",{webchat_configuration:{orguuid:n,chatname:s,initialize:!0,passthrough_data:a}}),u.length>0&&P()}),p.on("disconnect",()=>{console.log("___Disconnected from server")}),p.on("webchat_message",_=>{let N="in";f.length>0&&(N=f[f.length-1].direction);let x={direction:"in",previous_direction:N,sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:_.webchat_message};f.push(x),t(3,f),S()}),p.on("webchat_client_configuration",_=>{Object.keys(_).forEach(x=>{_[x].type=="allow_switching"&&t(4,b=_[x].value)})}),p.on("error",_=>{console.log("__Stubber Webchat : "+(_==null?void 0:_.error))})},Y=_=>{_.key==="Enter"&&u!=""&&P()},P=async()=>{if(!p){E();return}let _="in";f.length>0&&(_=f[f.length-1].direction);let N={direction:"out",previous_direction:_,sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:u};f.push(N),t(3,f),t(2,u=""),S(),p.connected&&(await p.emit("message",{webchat_configuration:{orguuid:n,chatname:s,passthrough_data:a},webchat_message:{type:"text",value:N.message,messageuuid:N.messageuuid}}),N.received=!0,t(3,f))},D=_=>{let N=_.getHours().toString().padStart(2,"0");const x=_.getMinutes().toString().padStart(2,"0"),Ee=N>=12?"pm":"am";return N=N%12,N=N||12,N+":"+x+" "+Ee},S=()=>{setTimeout(()=>{let _=document.getElementById("stubber_webchat_message_box");_.scrollTop=_.scrollHeight},100)},J=()=>{t(1,l=!0),o==="true"&&!h&&E(),h=!0},oe=()=>{};Zs(()=>{ws&&ws.close()}),pn.addHook("afterSanitizeAttributes",function(_){"target"in _&&_.setAttribute("target","_blank"),!_.hasAttribute("target")&&(_.hasAttribute("xlink:href")||_.hasAttribute("href"))&&_.setAttribute("xlink:show","new")});const fe=()=>{t(1,l=!1)};function Te(){u=this.value,t(2,u)}return i.$$set=_=>{"orguuid"in _&&t(10,n=_.orguuid),"chatname"in _&&t(11,s=_.chatname),"chat_display_name"in _&&t(0,r=_.chat_display_name),"connect_on_load"in _&&t(12,o=_.connect_on_load),"passthrough_data"in _&&t(13,a=_.passthrough_data)},[r,l,u,f,b,Y,P,D,J,oe,n,s,o,a,fe,Te]}class ca extends xe{constructor(e){super(),_e(this,e,la,oa,ye,{orguuid:10,chatname:11,chat_display_name:0,connect_on_load:12,passthrough_data:13})}get orguuid(){return this.$$.ctx[10]}set orguuid(e){this.$$set({orguuid:e}),Ce()}get chatname(){return this.$$.ctx[11]}set chatname(e){this.$$set({chatname:e}),Ce()}get chat_display_name(){return this.$$.ctx[0]}set chat_display_name(e){this.$$set({chat_display_name:e}),Ce()}get connect_on_load(){return this.$$.ctx[12]}set connect_on_load(e){this.$$set({connect_on_load:e}),Ce()}get passthrough_data(){return this.$$.ctx[13]}set passthrough_data(e){this.$$set({passthrough_data:e}),Ce()}}customElements.define("stubber-webchat",ke(ca,{orguuid:{},chatname:{},chat_display_name:{},connect_on_load:{},passthrough_data:{}},[],[],!1));
