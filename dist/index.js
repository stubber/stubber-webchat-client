var Cs=Object.defineProperty;var Os=(i,e,t)=>e in i?Cs(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var R=(i,e,t)=>(Os(i,typeof e!="symbol"?e+"":e,t),t),$s=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)};var zt=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)};var ot=(i,e,t)=>($s(i,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function oe(){}function $i(i){return i()}function Yn(){return Object.create(null)}function Pe(i){i.forEach($i)}function Li(i){return typeof i=="function"}function Ni(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let at;function Ls(i,e){return i===e?!0:(at||(at=document.createElement("a")),at.href=e,i===at.href)}function Ns(i){return Object.keys(i).length===0}const Is=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function C(i,e){i.appendChild(e)}function W(i,e,t){i.insertBefore(e,t||null)}function M(i){i.parentNode&&i.parentNode.removeChild(i)}function Ds(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function $(i){return document.createElement(i)}function be(i){return document.createTextNode(i)}function Y(){return be(" ")}function Ii(){return be("")}function ue(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function _(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Ps(i){return Array.from(i.childNodes)}function Je(i,e){e=""+e,i.data!==e&&(i.data=e)}function Ie(i,e){i.value=e??""}function Ms(i){const e={};return i.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let Ke;function Ye(i){Ke=i}function Di(){if(!Ke)throw new Error("Function called outside component initialization");return Ke}function zs(i){Di().$$.on_mount.push(i)}function Bs(i){Di().$$.on_destroy.push(i)}const Le=[],Gt=[];let De=[];const Zn=[],Us=Promise.resolve();let Yt=!1;function Fs(){Yt||(Yt=!0,Us.then(re))}function Zt(i){De.push(i)}const Bt=new Set;let $e=0;function re(){if($e!==0)return;const i=Ke;do{try{for(;$e<Le.length;){const e=Le[$e];$e++,Ye(e),qs(e.$$)}}catch(e){throw Le.length=0,$e=0,e}for(Ye(null),Le.length=0,$e=0;Gt.length;)Gt.pop()();for(let e=0;e<De.length;e+=1){const t=De[e];Bt.has(t)||(Bt.add(t),t())}De.length=0}while(Le.length);for(;Zn.length;)Zn.pop()();Yt=!1,Bt.clear(),Ye(i)}function qs(i){if(i.fragment!==null){i.update(),Pe(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Zt)}}function Hs(i){const e=[],t=[];De.forEach(n=>i.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),De=e}const js=new Set;function Ws(i,e){i&&i.i&&(js.delete(i),i.i(e))}function Xn(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Vs(i,e,t){const{fragment:n,after_update:s}=i.$$;n&&n.m(e,t),Zt(()=>{const r=i.$$.on_mount.map($i).filter(Li);i.$$.on_destroy?i.$$.on_destroy.push(...r):Pe(r),i.$$.on_mount=[]}),s.forEach(Zt)}function Gs(i,e){const t=i.$$;t.fragment!==null&&(Hs(t.after_update),Pe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ys(i,e){i.$$.dirty[0]===-1&&(Le.push(i),Fs(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Pi(i,e,t,n,s,r,o=null,a=[-1]){const l=Ke;Ye(i);const h=i.$$={fragment:null,ctx:[],props:r,update:oe,not_equal:s,bound:Yn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Yn(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(h.root);let u=!1;if(h.ctx=t?t(i,e.props||{},(d,p,...b)=>{const x=b.length?b[0]:p;return h.ctx&&s(h.ctx[d],h.ctx[d]=x)&&(!h.skip_bound&&h.bound[d]&&h.bound[d](x),u&&Ys(i,d)),p}):[],h.update(),u=!0,Pe(h.before_update),h.fragment=n?n(h.ctx):!1,e.target){if(e.hydrate){const d=Ps(e.target);h.fragment&&h.fragment.l(d),d.forEach(M)}else h.fragment&&h.fragment.c();e.intro&&Ws(i.$$.fragment),Vs(i,e.target,e.anchor),re()}Ye(l)}let Mi;typeof HTMLElement=="function"&&(Mi=class extends HTMLElement{constructor(e,t,n){super();R(this,"$$ctor");R(this,"$$s");R(this,"$$c");R(this,"$$cn",!1);R(this,"$$d",{});R(this,"$$r",!1);R(this,"$$p_d",{});R(this,"$$l",{});R(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const s=this.$$c.$on(e,t);this.$$l_u.set(t,s)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){const s=this.$$l_u.get(t);s&&(s(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(o){return()=>{let a;return{c:function(){a=$("slot"),o!=="default"&&_(a,"name",o)},m:function(u,d){W(u,a,d)},d:function(u){u&&M(a)}}}};var e=t;if(await Promise.resolve(),!this.$$cn)return;const n={},s=Ms(this);for(const o of this.$$s)o in s&&(n[o]=[t(o)]);for(const o of this.attributes){const a=this.$$g_p(o.name);a in this.$$d||(this.$$d[a]=bt(a,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$scope:{ctx:[]}}});const r=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const a=bt(o,this.$$d[o],this.$$p_d,"toAttribute");a==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,a)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(const o in this.$$l)for(const a of this.$$l[o]){const l=this.$$c.$on(o,a);this.$$l_u.set(a,l)}this.$$l={}}}attributeChangedCallback(e,t,n){var s;this.$$r||(e=this.$$g_p(e),this.$$d[e]=bt(e,n,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function bt(i,e,t,n){var r;const s=(r=t[i])==null?void 0:r.type;if(e=s==="Boolean"&&typeof e!="boolean"?e!=null:e,!n||!t[i])return e;if(n==="toAttribute")switch(s){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(s){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function zi(i,e,t,n,s,r){let o=class extends Mi{constructor(){super(i,t,s),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(a=>(e[a].attribute||a).toLowerCase())}};return Object.keys(e).forEach(a=>{Object.defineProperty(o.prototype,a,{get(){return this.$$c&&a in this.$$c?this.$$c[a]:this.$$d[a]},set(l){var h;l=bt(a,l,e),this.$$d[a]=l,(h=this.$$c)==null||h.$set({[a]:l})}})}),n.forEach(a=>{Object.defineProperty(o.prototype,a,{get(){var l;return(l=this.$$c)==null?void 0:l[a]}})}),r&&(o=r(o)),i.element=o,o}class Bi{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){Gs(this,1),this.$destroy=oe}$on(e,t){if(!Li(t))return oe;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!Ns(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Zs="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Zs);function Kn(i){let e,t,n;return{c(){e=$("label"),t=be(i[1]),_(e,"for",n="input_$"+i[2]),_(e,"class","block text-label")},m(s,r){W(s,e,r),C(e,t)},p(s,r){r&2&&Je(t,s[1]),r&4&&n!==(n="input_$"+s[2])&&_(e,"for",n)},d(s){s&&M(e)}}}function Qn(i){let e,t;return{c(){e=$("p"),t=be(i[3]),_(e,"class","text-label text-danger-500")},m(n,s){W(n,e,s),C(e,t)},p(n,s){s&8&&Je(t,n[3])},d(n){n&&M(e)}}}function Xs(i){let e,t,n,s,r,o,a,l,h,u,d,p,b,x,I,T=i[1]&&Kn(i),y=i[6]&&i[3]&&Qn(i);return{c(){e=$("link"),t=$("script"),t.innerHTML="",s=Y(),r=$("div"),T&&T.c(),o=Y(),a=$("div"),l=$("input"),d=Y(),p=$("input"),b=Y(),y&&y.c(),_(e,"rel","stylesheet"),_(e,"href","https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css"),Ls(t.src,n="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js")||_(t,"src",n),l.readOnly=i[4],_(l,"type","tel"),_(l,"id",h="input_$"+i[2]),_(l,"class",u="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(i[6]?"ring-danger-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset"),_(p,"type","hidden"),_(p,"name",i[2]),_(a,"class","w-full flex space-x-4 relative mt-2 rounded-md"),_(r,"class","flex flex-col w-full space-y-2 text-surface-900")},m(k,A){C(document.head,e),C(document.head,t),W(k,s,A),W(k,r,A),T&&T.m(r,null),C(r,o),C(r,a),C(a,l),i[10](l),Ie(l,i[0]),C(a,d),C(a,p),Ie(p,i[7]),C(r,b),y&&y.m(r,null),x||(I=[ue(t,"load",i[9]),ue(l,"input",i[8]),ue(l,"input",i[11]),ue(p,"input",i[12])],x=!0)},p(k,[A]){k[1]?T?T.p(k,A):(T=Kn(k),T.c(),T.m(r,o)):T&&(T.d(1),T=null),A&16&&(l.readOnly=k[4]),A&4&&h!==(h="input_$"+k[2])&&_(l,"id",h),A&64&&u!==(u="block w-full text-field rounded-md border-0 py-2 pl-3 text-surface-900 ring-1 ring-inset "+(k[6]?"ring-danger-500":"ring-surface-300 focus:ring-primary-400")+" focus:outline-none placeholder:text-surface-400 focus:ring-2 focus:ring-inset")&&_(l,"class",u),A&1&&Ie(l,k[0]),A&4&&_(p,"name",k[2]),A&128&&Ie(p,k[7]),k[6]&&k[3]?y?y.p(k,A):(y=Qn(k),y.c(),y.m(r,null)):y&&(y.d(1),y=null)},i:oe,o:oe,d(k){k&&(M(s),M(r)),M(e),M(t),T&&T.d(),i[10](null),y&&y.d(),x=!1,Pe(I)}}}function Ks(i,e,t){let{label:n}=e,{name:s}=e,{value:r}=e,{validationMessage:o="Invalid Number"}=e,{readonly:a=!1}=e,l,h,u,d;const p=()=>{l.value.trim()&&(u.isValidNumber()?(t(6,h=!1),t(7,d=u.getNumber())):t(6,h=!0))};function b(){u=window.intlTelInput(l,{initialCountry:"auto",geoIpLookup:y=>{fetch("https://ipapi.co/json").then(k=>k.json()).then(k=>y(k.country_code)).catch(()=>y("us"))},utilsScript:"https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js"})}function x(y){Gt[y?"unshift":"push"](()=>{l=y,t(5,l)})}function I(){r=this.value,t(0,r)}function T(){d=this.value,t(7,d)}return i.$$set=y=>{"label"in y&&t(1,n=y.label),"name"in y&&t(2,s=y.name),"value"in y&&t(0,r=y.value),"validationMessage"in y&&t(3,o=y.validationMessage),"readonly"in y&&t(4,a=y.readonly)},[r,n,s,o,a,l,h,d,p,b,x,I,T]}class Qs extends Bi{constructor(e){super(),Pi(this,e,Ks,Xs,Ni,{label:1,name:2,value:0,validationMessage:3,readonly:4})}get label(){return this.$$.ctx[1]}set label(e){this.$$set({label:e}),re()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),re()}get value(){return this.$$.ctx[0]}set value(e){this.$$set({value:e}),re()}get validationMessage(){return this.$$.ctx[3]}set validationMessage(e){this.$$set({validationMessage:e}),re()}get readonly(){return this.$$.ctx[4]}set readonly(e){this.$$set({readonly:e}),re()}}zi(Qs,{label:{},name:{},value:{},validationMessage:{},readonly:{type:"Boolean"}},[],[],!0);/*! @license DOMPurify 3.0.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.9/LICENSE */const{entries:Ui,setPrototypeOf:Jn,isFrozen:Js,getPrototypeOf:er,getOwnPropertyDescriptor:tr}=Object;let{freeze:Z,seal:ce,create:Fi}=Object,{apply:Xt,construct:Kt}=typeof Reflect<"u"&&Reflect;Z||(Z=function(e){return e});ce||(ce=function(e){return e});Xt||(Xt=function(e,t,n){return e.apply(t,n)});Kt||(Kt=function(e,t){return new e(...t)});const lt=ne(Array.prototype.forEach),ei=ne(Array.prototype.pop),qe=ne(Array.prototype.push),wt=ne(String.prototype.toLowerCase),Ut=ne(String.prototype.toString),nr=ne(String.prototype.match),He=ne(String.prototype.replace),ir=ne(String.prototype.indexOf),sr=ne(String.prototype.trim),ae=ne(Object.prototype.hasOwnProperty),ee=ne(RegExp.prototype.test),je=rr(TypeError);function ne(i){return function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return Xt(i,e,n)}}function rr(i){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Kt(i,t)}}function v(i,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:wt;Jn&&Jn(i,null);let n=e.length;for(;n--;){let s=e[n];if(typeof s=="string"){const r=t(s);r!==s&&(Js(e)||(e[n]=r),s=r)}i[s]=!0}return i}function or(i){for(let e=0;e<i.length;e++)ae(i,e)||(i[e]=null);return i}function ke(i){const e=Fi(null);for(const[t,n]of Ui(i))ae(i,t)&&(Array.isArray(n)?e[t]=or(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=ke(n):e[t]=n);return e}function ct(i,e){for(;i!==null;){const n=tr(i,e);if(n){if(n.get)return ne(n.get);if(typeof n.value=="function")return ne(n.value)}i=er(i)}function t(){return null}return t}const ti=Z(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ft=Z(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),qt=Z(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ar=Z(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ht=Z(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),lr=Z(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ni=Z(["#text"]),ii=Z(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),jt=Z(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),si=Z(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ut=Z(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),cr=ce(/\{\{[\w\W]*|[\w\W]*\}\}/gm),ur=ce(/<%[\w\W]*|[\w\W]*%>/gm),hr=ce(/\${[\w\W]*}/gm),fr=ce(/^data-[\-\w.\u00B7-\uFFFF]/),pr=ce(/^aria-[\-\w]+$/),qi=ce(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),dr=ce(/^(?:\w+script|data):/i),gr=ce(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Hi=ce(/^html$/i);var ri=Object.freeze({__proto__:null,MUSTACHE_EXPR:cr,ERB_EXPR:ur,TMPLIT_EXPR:hr,DATA_ATTR:fr,ARIA_ATTR:pr,IS_ALLOWED_URI:qi,IS_SCRIPT_OR_DATA:dr,ATTR_WHITESPACE:gr,DOCTYPE_NAME:Hi});const mr=function(){return typeof window>"u"?null:window},br=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null;const s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(n=t.getAttribute(s));const r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}};function ji(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mr();const e=m=>ji(m);if(e.version="3.0.9",e.removed=[],!i||!i.document||i.document.nodeType!==9)return e.isSupported=!1,e;let{document:t}=i;const n=t,s=n.currentScript,{DocumentFragment:r,HTMLTemplateElement:o,Node:a,Element:l,NodeFilter:h,NamedNodeMap:u=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:d,DOMParser:p,trustedTypes:b}=i,x=l.prototype,I=ct(x,"cloneNode"),T=ct(x,"nextSibling"),y=ct(x,"childNodes"),k=ct(x,"parentNode");if(typeof o=="function"){const m=t.createElement("template");m.content&&m.content.ownerDocument&&(t=m.content.ownerDocument)}let A,X="";const{implementation:ie,createNodeIterator:U,createDocumentFragment:w,getElementsByTagName:z}=t,{importNode:F}=n;let E={};e.isSupported=typeof Ui=="function"&&typeof k=="function"&&ie&&ie.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:J,ERB_EXPR:D,TMPLIT_EXPR:Ee,DATA_ATTR:ms,ARIA_ATTR:bs,IS_SCRIPT_OR_DATA:ys,ATTR_WHITESPACE:kn}=ri;let{IS_ALLOWED_URI:xn}=ri,q=null;const Tn=v({},[...ti,...Ft,...qt,...Ht,...ni]);let H=null;const En=v({},[...ii,...jt,...si,...ut]);let P=Object.seal(Fi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ze=null,St=null,vn=!0,Ct=!0,An=!1,Rn=!0,ve=!1,we=!1,Ot=!1,$t=!1,Ae=!1,nt=!1,it=!1,Sn=!0,Cn=!1;const _s="user-content-";let Lt=!0,Be=!1,Re={},Se=null;const On=v({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let $n=null;const Ln=v({},["audio","video","img","source","image","track"]);let Nt=null;const Nn=v({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),st="http://www.w3.org/1998/Math/MathML",rt="http://www.w3.org/2000/svg",ge="http://www.w3.org/1999/xhtml";let Ce=ge,It=!1,Dt=null;const ks=v({},[st,rt,ge],Ut);let Ue=null;const xs=["application/xhtml+xml","text/html"],Ts="text/html";let j=null,Oe=null;const Es=t.createElement("form"),In=function(c){return c instanceof RegExp||c instanceof Function},Pt=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Oe&&Oe===c)){if((!c||typeof c!="object")&&(c={}),c=ke(c),Ue=xs.indexOf(c.PARSER_MEDIA_TYPE)===-1?Ts:c.PARSER_MEDIA_TYPE,j=Ue==="application/xhtml+xml"?Ut:wt,q=ae(c,"ALLOWED_TAGS")?v({},c.ALLOWED_TAGS,j):Tn,H=ae(c,"ALLOWED_ATTR")?v({},c.ALLOWED_ATTR,j):En,Dt=ae(c,"ALLOWED_NAMESPACES")?v({},c.ALLOWED_NAMESPACES,Ut):ks,Nt=ae(c,"ADD_URI_SAFE_ATTR")?v(ke(Nn),c.ADD_URI_SAFE_ATTR,j):Nn,$n=ae(c,"ADD_DATA_URI_TAGS")?v(ke(Ln),c.ADD_DATA_URI_TAGS,j):Ln,Se=ae(c,"FORBID_CONTENTS")?v({},c.FORBID_CONTENTS,j):On,ze=ae(c,"FORBID_TAGS")?v({},c.FORBID_TAGS,j):{},St=ae(c,"FORBID_ATTR")?v({},c.FORBID_ATTR,j):{},Re=ae(c,"USE_PROFILES")?c.USE_PROFILES:!1,vn=c.ALLOW_ARIA_ATTR!==!1,Ct=c.ALLOW_DATA_ATTR!==!1,An=c.ALLOW_UNKNOWN_PROTOCOLS||!1,Rn=c.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ve=c.SAFE_FOR_TEMPLATES||!1,we=c.WHOLE_DOCUMENT||!1,Ae=c.RETURN_DOM||!1,nt=c.RETURN_DOM_FRAGMENT||!1,it=c.RETURN_TRUSTED_TYPE||!1,$t=c.FORCE_BODY||!1,Sn=c.SANITIZE_DOM!==!1,Cn=c.SANITIZE_NAMED_PROPS||!1,Lt=c.KEEP_CONTENT!==!1,Be=c.IN_PLACE||!1,xn=c.ALLOWED_URI_REGEXP||qi,Ce=c.NAMESPACE||ge,P=c.CUSTOM_ELEMENT_HANDLING||{},c.CUSTOM_ELEMENT_HANDLING&&In(c.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(P.tagNameCheck=c.CUSTOM_ELEMENT_HANDLING.tagNameCheck),c.CUSTOM_ELEMENT_HANDLING&&In(c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(P.attributeNameCheck=c.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),c.CUSTOM_ELEMENT_HANDLING&&typeof c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(P.allowCustomizedBuiltInElements=c.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ve&&(Ct=!1),nt&&(Ae=!0),Re&&(q=v({},ni),H=[],Re.html===!0&&(v(q,ti),v(H,ii)),Re.svg===!0&&(v(q,Ft),v(H,jt),v(H,ut)),Re.svgFilters===!0&&(v(q,qt),v(H,jt),v(H,ut)),Re.mathMl===!0&&(v(q,Ht),v(H,si),v(H,ut))),c.ADD_TAGS&&(q===Tn&&(q=ke(q)),v(q,c.ADD_TAGS,j)),c.ADD_ATTR&&(H===En&&(H=ke(H)),v(H,c.ADD_ATTR,j)),c.ADD_URI_SAFE_ATTR&&v(Nt,c.ADD_URI_SAFE_ATTR,j),c.FORBID_CONTENTS&&(Se===On&&(Se=ke(Se)),v(Se,c.FORBID_CONTENTS,j)),Lt&&(q["#text"]=!0),we&&v(q,["html","head","body"]),q.table&&(v(q,["tbody"]),delete ze.tbody),c.TRUSTED_TYPES_POLICY){if(typeof c.TRUSTED_TYPES_POLICY.createHTML!="function")throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof c.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=c.TRUSTED_TYPES_POLICY,X=A.createHTML("")}else A===void 0&&(A=br(b,s)),A!==null&&typeof X=="string"&&(X=A.createHTML(""));Z&&Z(c),Oe=c}},Dn=v({},["mi","mo","mn","ms","mtext"]),Pn=v({},["foreignobject","desc","title","annotation-xml"]),vs=v({},["title","style","font","a","script"]),Mn=v({},[...Ft,...qt,...ar]),zn=v({},[...Ht,...lr]),As=function(c){let f=k(c);(!f||!f.tagName)&&(f={namespaceURI:Ce,tagName:"template"});const g=wt(c.tagName),N=wt(f.tagName);return Dt[c.namespaceURI]?c.namespaceURI===rt?f.namespaceURI===ge?g==="svg":f.namespaceURI===st?g==="svg"&&(N==="annotation-xml"||Dn[N]):!!Mn[g]:c.namespaceURI===st?f.namespaceURI===ge?g==="math":f.namespaceURI===rt?g==="math"&&Pn[N]:!!zn[g]:c.namespaceURI===ge?f.namespaceURI===rt&&!Pn[N]||f.namespaceURI===st&&!Dn[N]?!1:!zn[g]&&(vs[g]||!Mn[g]):!!(Ue==="application/xhtml+xml"&&Dt[c.namespaceURI]):!1},ye=function(c){qe(e.removed,{element:c});try{c.parentNode.removeChild(c)}catch{c.remove()}},Mt=function(c,f){try{qe(e.removed,{attribute:f.getAttributeNode(c),from:f})}catch{qe(e.removed,{attribute:null,from:f})}if(f.removeAttribute(c),c==="is"&&!H[c])if(Ae||nt)try{ye(f)}catch{}else try{f.setAttribute(c,"")}catch{}},Bn=function(c){let f=null,g=null;if($t)c="<remove></remove>"+c;else{const G=nr(c,/^[\r\n\t ]+/);g=G&&G[0]}Ue==="application/xhtml+xml"&&Ce===ge&&(c='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+c+"</body></html>");const N=A?A.createHTML(c):c;if(Ce===ge)try{f=new p().parseFromString(N,Ue)}catch{}if(!f||!f.documentElement){f=ie.createDocument(Ce,"template",null);try{f.documentElement.innerHTML=It?X:N}catch{}}const V=f.body||f.documentElement;return c&&g&&V.insertBefore(t.createTextNode(g),V.childNodes[0]||null),Ce===ge?z.call(f,we?"html":"body")[0]:we?f.documentElement:V},Un=function(c){return U.call(c.ownerDocument||c,c,h.SHOW_ELEMENT|h.SHOW_COMMENT|h.SHOW_TEXT,null)},Rs=function(c){return c instanceof d&&(typeof c.nodeName!="string"||typeof c.textContent!="string"||typeof c.removeChild!="function"||!(c.attributes instanceof u)||typeof c.removeAttribute!="function"||typeof c.setAttribute!="function"||typeof c.namespaceURI!="string"||typeof c.insertBefore!="function"||typeof c.hasChildNodes!="function")},Fn=function(c){return typeof a=="function"&&c instanceof a},me=function(c,f,g){E[c]&&lt(E[c],N=>{N.call(e,f,g,Oe)})},qn=function(c){let f=null;if(me("beforeSanitizeElements",c,null),Rs(c))return ye(c),!0;const g=j(c.nodeName);if(me("uponSanitizeElement",c,{tagName:g,allowedTags:q}),c.hasChildNodes()&&!Fn(c.firstElementChild)&&ee(/<[/\w]/g,c.innerHTML)&&ee(/<[/\w]/g,c.textContent))return ye(c),!0;if(!q[g]||ze[g]){if(!ze[g]&&jn(g)&&(P.tagNameCheck instanceof RegExp&&ee(P.tagNameCheck,g)||P.tagNameCheck instanceof Function&&P.tagNameCheck(g)))return!1;if(Lt&&!Se[g]){const N=k(c)||c.parentNode,V=y(c)||c.childNodes;if(V&&N){const G=V.length;for(let K=G-1;K>=0;--K)N.insertBefore(I(V[K],!0),T(c))}}return ye(c),!0}return c instanceof l&&!As(c)||(g==="noscript"||g==="noembed"||g==="noframes")&&ee(/<\/no(script|embed|frames)/i,c.innerHTML)?(ye(c),!0):(ve&&c.nodeType===3&&(f=c.textContent,lt([J,D,Ee],N=>{f=He(f,N," ")}),c.textContent!==f&&(qe(e.removed,{element:c.cloneNode()}),c.textContent=f)),me("afterSanitizeElements",c,null),!1)},Hn=function(c,f,g){if(Sn&&(f==="id"||f==="name")&&(g in t||g in Es))return!1;if(!(Ct&&!St[f]&&ee(ms,f))){if(!(vn&&ee(bs,f))){if(!H[f]||St[f]){if(!(jn(c)&&(P.tagNameCheck instanceof RegExp&&ee(P.tagNameCheck,c)||P.tagNameCheck instanceof Function&&P.tagNameCheck(c))&&(P.attributeNameCheck instanceof RegExp&&ee(P.attributeNameCheck,f)||P.attributeNameCheck instanceof Function&&P.attributeNameCheck(f))||f==="is"&&P.allowCustomizedBuiltInElements&&(P.tagNameCheck instanceof RegExp&&ee(P.tagNameCheck,g)||P.tagNameCheck instanceof Function&&P.tagNameCheck(g))))return!1}else if(!Nt[f]){if(!ee(xn,He(g,kn,""))){if(!((f==="src"||f==="xlink:href"||f==="href")&&c!=="script"&&ir(g,"data:")===0&&$n[c])){if(!(An&&!ee(ys,He(g,kn,"")))){if(g)return!1}}}}}}return!0},jn=function(c){return c!=="annotation-xml"&&c.indexOf("-")>0},Wn=function(c){me("beforeSanitizeAttributes",c,null);const{attributes:f}=c;if(!f)return;const g={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:H};let N=f.length;for(;N--;){const V=f[N],{name:G,namespaceURI:K,value:_e}=V,Fe=j(G);let Q=G==="value"?_e:sr(_e);if(g.attrName=Fe,g.attrValue=Q,g.keepAttr=!0,g.forceKeepAttr=void 0,me("uponSanitizeAttribute",c,g),Q=g.attrValue,g.forceKeepAttr||(Mt(G,c),!g.keepAttr))continue;if(!Rn&&ee(/\/>/i,Q)){Mt(G,c);continue}ve&&lt([J,D,Ee],Gn=>{Q=He(Q,Gn," ")});const Vn=j(c.nodeName);if(Hn(Vn,Fe,Q)){if(Cn&&(Fe==="id"||Fe==="name")&&(Mt(G,c),Q=_s+Q),A&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!K)switch(b.getAttributeType(Vn,Fe)){case"TrustedHTML":{Q=A.createHTML(Q);break}case"TrustedScriptURL":{Q=A.createScriptURL(Q);break}}try{K?c.setAttributeNS(K,G,Q):c.setAttribute(G,Q),ei(e.removed)}catch{}}}me("afterSanitizeAttributes",c,null)},Ss=function m(c){let f=null;const g=Un(c);for(me("beforeSanitizeShadowDOM",c,null);f=g.nextNode();)me("uponSanitizeShadowNode",f,null),!qn(f)&&(f.content instanceof r&&m(f.content),Wn(f));me("afterSanitizeShadowDOM",c,null)};return e.sanitize=function(m){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=null,g=null,N=null,V=null;if(It=!m,It&&(m="<!-->"),typeof m!="string"&&!Fn(m))if(typeof m.toString=="function"){if(m=m.toString(),typeof m!="string")throw je("dirty is not a string, aborting")}else throw je("toString is not a function");if(!e.isSupported)return m;if(Ot||Pt(c),e.removed=[],typeof m=="string"&&(Be=!1),Be){if(m.nodeName){const _e=j(m.nodeName);if(!q[_e]||ze[_e])throw je("root node is forbidden and cannot be sanitized in-place")}}else if(m instanceof a)f=Bn("<!---->"),g=f.ownerDocument.importNode(m,!0),g.nodeType===1&&g.nodeName==="BODY"||g.nodeName==="HTML"?f=g:f.appendChild(g);else{if(!Ae&&!ve&&!we&&m.indexOf("<")===-1)return A&&it?A.createHTML(m):m;if(f=Bn(m),!f)return Ae?null:it?X:""}f&&$t&&ye(f.firstChild);const G=Un(Be?m:f);for(;N=G.nextNode();)qn(N)||(N.content instanceof r&&Ss(N.content),Wn(N));if(Be)return m;if(Ae){if(nt)for(V=w.call(f.ownerDocument);f.firstChild;)V.appendChild(f.firstChild);else V=f;return(H.shadowroot||H.shadowrootmode)&&(V=F.call(n,V,!0)),V}let K=we?f.outerHTML:f.innerHTML;return we&&q["!doctype"]&&f.ownerDocument&&f.ownerDocument.doctype&&f.ownerDocument.doctype.name&&ee(Hi,f.ownerDocument.doctype.name)&&(K="<!DOCTYPE "+f.ownerDocument.doctype.name+`>
`+K),ve&&lt([J,D,Ee],_e=>{K=He(K,_e," ")}),A&&it?A.createHTML(K):K},e.setConfig=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Pt(m),Ot=!0},e.clearConfig=function(){Oe=null,Ot=!1},e.isValidAttribute=function(m,c,f){Oe||Pt({});const g=j(m),N=j(c);return Hn(g,N,f)},e.addHook=function(m,c){typeof c=="function"&&(E[m]=E[m]||[],qe(E[m],c))},e.removeHook=function(m){if(E[m])return ei(E[m])},e.removeHooks=function(m){E[m]&&(E[m]=[])},e.removeAllHooks=function(){E={}},e}var Qt=ji();function ln(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Te=ln();function Wi(i){Te=i}const Vi=/[&<>"']/,wr=new RegExp(Vi.source,"g"),Gi=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,yr=new RegExp(Gi.source,"g"),_r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},oi=i=>_r[i];function te(i,e){if(e){if(Vi.test(i))return i.replace(wr,oi)}else if(Gi.test(i))return i.replace(yr,oi);return i}const kr=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function xr(i){return i.replace(kr,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Tr=/(^|[^\[])\^/g;function L(i,e){let t=typeof i=="string"?i:i.source;e=e||"";const n={replace:(s,r)=>{let o=typeof r=="string"?r:r.source;return o=o.replace(Tr,"$1"),t=t.replace(s,o),n},getRegex:()=>new RegExp(t,e)};return n}function ai(i){try{i=encodeURI(i).replace(/%25/g,"%")}catch{return null}return i}const Ze={exec:()=>null};function li(i,e){const t=i.replace(/\|/g,(r,o,a)=>{let l=!1,h=o;for(;--h>=0&&a[h]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function ht(i,e,t){const n=i.length;if(n===0)return"";let s=0;for(;s<n;){const r=i.charAt(n-s-1);if(r===e&&!t)s++;else if(r!==e&&t)s++;else break}return i.slice(0,n-s)}function Er(i,e){if(i.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<i.length;n++)if(i[n]==="\\")n++;else if(i[n]===e[0])t++;else if(i[n]===e[1]&&(t--,t<0))return n;return-1}function ci(i,e,t,n){const s=e.href,r=e.title?te(e.title):null,o=i[1].replace(/\\([\[\]])/g,"$1");if(i[0].charAt(0)!=="!"){n.state.inLink=!0;const a={type:"link",raw:t,href:s,title:r,text:o,tokens:n.inlineTokens(o)};return n.state.inLink=!1,a}return{type:"image",raw:t,href:s,title:r,text:te(o)}}function vr(i,e){const t=i.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(s=>{const r=s.match(/^\s+/);if(r===null)return s;const[o]=r;return o.length>=n.length?s.slice(n.length):s}).join(`
`)}class xt{constructor(e){R(this,"options");R(this,"rules");R(this,"lexer");this.options=e||Te}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ht(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],s=vr(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const s=ht(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=ht(t[0].replace(/^ *>[ \t]?/gm,""),`
`),s=this.lexer.state.top;this.lexer.state.top=!0;const r=this.lexer.blockTokens(n);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:r,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const o=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",h=!1;for(;e;){let u=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let d=t[2].split(`
`,1)[0].replace(/^\t+/,y=>" ".repeat(3*y.length)),p=e.split(`
`,1)[0],b=0;this.options.pedantic?(b=2,l=d.trimStart()):(b=t[2].search(/[^ ]/),b=b>4?1:b,l=d.slice(b),b+=t[1].length);let x=!1;if(!d&&/^ *$/.test(p)&&(a+=p+`
`,e=e.substring(p.length+1),u=!0),!u){const y=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),k=new RegExp(`^ {0,${Math.min(3,b-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),A=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:\`\`\`|~~~)`),X=new RegExp(`^ {0,${Math.min(3,b-1)}}#`);for(;e;){const ie=e.split(`
`,1)[0];if(p=ie,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),A.test(p)||X.test(p)||y.test(p)||k.test(e))break;if(p.search(/[^ ]/)>=b||!p.trim())l+=`
`+p.slice(b);else{if(x||d.search(/[^ ]/)>=4||A.test(d)||X.test(d)||k.test(d))break;l+=`
`+p}!x&&!p.trim()&&(x=!0),a+=ie+`
`,e=e.substring(ie.length+1),d=p.slice(b)}}r.loose||(h?r.loose=!0:/\n *\n *$/.test(a)&&(h=!0));let I=null,T;this.options.gfm&&(I=/^\[[ xX]\] /.exec(l),I&&(T=I[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),r.items.push({type:"list_item",raw:a,task:!!I,checked:T,loose:!1,text:l,tokens:[]}),r.raw+=a}r.items[r.items.length-1].raw=a.trimEnd(),r.items[r.items.length-1].text=l.trimEnd(),r.raw=r.raw.trimEnd();for(let u=0;u<r.items.length;u++)if(this.lexer.state.top=!1,r.items[u].tokens=this.lexer.blockTokens(r.items[u].text,[]),!r.loose){const d=r.items[u].tokens.filter(b=>b.type==="space"),p=d.length>0&&d.some(b=>/\n.*\n/.test(b.raw));r.loose=p}if(r.loose)for(let u=0;u<r.items.length;u++)r.items[u].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:r}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const n=li(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),r=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const a of s)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of n)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of r)o.rows.push(li(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:te(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const o=ht(n.slice(0,-1),"\\");if((n.length-o.length)%2===0)return}else{const o=Er(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],r=o[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),ci(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const s=(n[2]||n[1]).replace(/\s+/g," "),r=t[s.toLowerCase()];if(!r){const o=n[0].charAt(0);return{type:"text",raw:o,text:o}}return ci(n,r,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const o=[...s[0]].length-1;let a,l,h=o,u=0;const d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+o);(s=d.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=[...a].length,s[3]||s[4]){h+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(h-=l,h>0)continue;l=Math.min(l,l+h+u);const p=[...s[0]][0].length,b=e.slice(0,o+s.index+p+l);if(Math.min(o,l)%2){const I=b.slice(1,-1);return{type:"em",raw:b,text:I,tokens:this.lexer.inlineTokens(I)}}const x=b.slice(2,-2);return{type:"strong",raw:b,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const s=/[^ ]/.test(n),r=/^ /.test(n)&&/ $/.test(n);return s&&r&&(n=n.substring(1,n.length-1)),n=te(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=te(t[1]),s="mailto:"+n):(n=te(t[1]),s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){var n;let t;if(t=this.rules.inline.url.exec(e)){let s,r;if(t[2]==="@")s=te(t[0]),r="mailto:"+s;else{let o;do o=t[0],t[0]=((n=this.rules.inline._backpedal.exec(t[0]))==null?void 0:n[0])??"";while(o!==t[0]);s=te(t[0]),t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=te(t[0]),{type:"text",raw:t[0],text:n}}}}const Ar=/^(?: *(?:\n|$))+/,Rr=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Sr=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,et=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Cr=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Yi=/(?:[*+-]|\d{1,9}[.)])/,Zi=L(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Yi).getRegex(),cn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Or=/^[^\n]+/,un=/(?!\s*\])(?:\\.|[^\[\]\\])+/,$r=L(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",un).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Lr=L(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Yi).getRegex(),At="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",hn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Nr=L("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",hn).replace("tag",At).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Xi=L(cn).replace("hr",et).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",At).getRegex(),Ir=L(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Xi).getRegex(),fn={blockquote:Ir,code:Rr,def:$r,fences:Sr,heading:Cr,hr:et,html:Nr,lheading:Zi,list:Lr,newline:Ar,paragraph:Xi,table:Ze,text:Or},ui=L("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",et).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",At).getRegex(),Dr={...fn,table:ui,paragraph:L(cn).replace("hr",et).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ui).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",At).getRegex()},Pr={...fn,html:L(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",hn).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ze,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:L(cn).replace("hr",et).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Zi).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Ki=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Mr=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Qi=/^( {2,}|\\)\n(?!\s*$)/,zr=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,tt="\\p{P}\\p{S}",Br=L(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,tt).getRegex(),Ur=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Fr=L(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,tt).getRegex(),qr=L("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,tt).getRegex(),Hr=L("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,tt).getRegex(),jr=L(/\\([punct])/,"gu").replace(/punct/g,tt).getRegex(),Wr=L(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vr=L(hn).replace("(?:-->|$)","-->").getRegex(),Gr=L("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Tt=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Yr=L(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Tt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ji=L(/^!?\[(label)\]\[(ref)\]/).replace("label",Tt).replace("ref",un).getRegex(),es=L(/^!?\[(ref)\](?:\[\])?/).replace("ref",un).getRegex(),Zr=L("reflink|nolink(?!\\()","g").replace("reflink",Ji).replace("nolink",es).getRegex(),pn={_backpedal:Ze,anyPunctuation:jr,autolink:Wr,blockSkip:Ur,br:Qi,code:Mr,del:Ze,emStrongLDelim:Fr,emStrongRDelimAst:qr,emStrongRDelimUnd:Hr,escape:Ki,link:Yr,nolink:es,punctuation:Br,reflink:Ji,reflinkSearch:Zr,tag:Gr,text:zr,url:Ze},Xr={...pn,link:L(/^!?\[(label)\]\((.*?)\)/).replace("label",Tt).getRegex(),reflink:L(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Tt).getRegex()},Jt={...pn,escape:L(Ki).replace("])","~|])").getRegex(),url:L(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Kr={...Jt,br:L(Qi).replace("{2,}","*").getRegex(),text:L(Jt.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ft={normal:fn,gfm:Dr,pedantic:Pr},We={normal:pn,gfm:Jt,breaks:Kr,pedantic:Xr};class he{constructor(e){R(this,"tokens");R(this,"options");R(this,"state");R(this,"tokenizer");R(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Te,this.options.tokenizer=this.options.tokenizer||new xt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ft.normal,inline:We.normal};this.options.pedantic?(t.block=ft.pedantic,t.inline=We.pedantic):this.options.gfm&&(t.block=ft.gfm,this.options.breaks?t.inline=We.breaks:t.inline=We.gfm),this.tokenizer.rules=t}static get rules(){return{block:ft,inline:We}}static lex(e,t){return new he(t).lex(e)}static lexInline(e,t){return new he(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,h)=>l+"    ".repeat(h.length));let n,s,r,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(n=a.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let h;this.options.extensions.startBlock.forEach(u=>{h=u.call({lexer:this},l),typeof h=="number"&&h>=0&&(a=Math.min(a,h))}),a<1/0&&a>=0&&(r=e.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(r))){s=t[t.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),o=r.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,r,o=e,a,l,h;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(h=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,o,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const d=e.slice(1);let p;this.options.extensions.startInline.forEach(b=>{p=b.call({lexer:this},d),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(r)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),l=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Et{constructor(e){R(this,"options");this.options=e||Te}code(e,t,n){var r;const s=(r=(t||"").match(/^\S*/))==null?void 0:r[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+te(s)+'">'+(n?e:te(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:te(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){const s=ai(e);if(s===null)return n;e=s;let r='<a href="'+e+'"';return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){const s=ai(e);if(s===null)return n;e=s;let r=`<img src="${e}" alt="${n}"`;return t&&(r+=` title="${t}"`),r+=">",r}text(e){return e}}class dn{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class fe{constructor(e){R(this,"options");R(this,"renderer");R(this,"textRenderer");this.options=e||Te,this.options.renderer=this.options.renderer||new Et,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new dn}static parse(e,t){return new fe(t).parse(e)}static parseInline(e,t){return new fe(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const o=r,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){n+=a||"";continue}}switch(r.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{const o=r;n+=this.renderer.heading(this.parseInline(o.tokens),o.depth,xr(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=r;n+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=r;let a="",l="";for(let u=0;u<o.header.length;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});a+=this.renderer.tablerow(l);let h="";for(let u=0;u<o.rows.length;u++){const d=o.rows[u];l="";for(let p=0;p<d.length;p++)l+=this.renderer.tablecell(this.parseInline(d[p].tokens),{header:!1,align:o.align[p]});h+=this.renderer.tablerow(l)}n+=this.renderer.table(a,h);continue}case"blockquote":{const o=r,a=this.parse(o.tokens);n+=this.renderer.blockquote(a);continue}case"list":{const o=r,a=o.ordered,l=o.start,h=o.loose;let u="";for(let d=0;d<o.items.length;d++){const p=o.items[d],b=p.checked,x=p.task;let I="";if(p.task){const T=this.renderer.checkbox(!!b);h?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=T+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=T+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:T+" "}):I+=T+" "}I+=this.parse(p.tokens,h),u+=this.renderer.listitem(I,x,!!b)}n+=this.renderer.list(u,a,l);continue}case"html":{const o=r;n+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=r;n+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=r,a=o.tokens?this.parseInline(o.tokens):o.text;for(;s+1<e.length&&e[s+1].type==="text";)o=e[++s],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);n+=t?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]){const o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=o||"";continue}}switch(r.type){case"escape":{const o=r;n+=t.text(o.text);break}case"html":{const o=r;n+=t.html(o.text);break}case"link":{const o=r;n+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=r;n+=t.image(o.href,o.title,o.text);break}case"strong":{const o=r;n+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=r;n+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=r;n+=t.codespan(o.text);break}case"br":{n+=t.br();break}case"del":{const o=r;n+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=r;n+=t.text(o.text);break}default:{const o='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return n}}class Xe{constructor(e){R(this,"options");this.options=e||Te}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}R(Xe,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Qe,en,vt,ts;class Qr{constructor(...e){zt(this,Qe);zt(this,vt);R(this,"defaults",ln());R(this,"options",this.setOptions);R(this,"parse",ot(this,Qe,en).call(this,he.lex,fe.parse));R(this,"parseInline",ot(this,Qe,en).call(this,he.lexInline,fe.parseInline));R(this,"Parser",fe);R(this,"Renderer",Et);R(this,"TextRenderer",dn);R(this,"Lexer",he);R(this,"Tokenizer",xt);R(this,"Hooks",Xe);this.use(...e)}walkTokens(e,t){var s,r;let n=[];for(const o of e)switch(n=n.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const h of l)n=n.concat(this.walkTokens(h.tokens,t));break}case"list":{const a=o;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=o;(r=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&r[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const h=a[l].flat(1/0);n=n.concat(this.walkTokens(h,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){const o=t.renderers[r.name];o?t.renderers[r.name]=function(...a){let l=r.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[r.level];o?o.unshift(r.tokenizer):t[r.level]=[r.tokenizer],r.start&&(r.level==="block"?t.startBlock?t.startBlock.push(r.start):t.startBlock=[r.start]:r.level==="inline"&&(t.startInline?t.startInline.push(r.start):t.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(t.childTokens[r.name]=r.childTokens)}),s.extensions=t),n.renderer){const r=this.defaults.renderer||new Et(this.defaults);for(const o in n.renderer){if(!(o in r))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.renderer[a],h=r[a];r[a]=(...u)=>{let d=l.apply(r,u);return d===!1&&(d=h.apply(r,u)),d||""}}s.renderer=r}if(n.tokenizer){const r=this.defaults.tokenizer||new xt(this.defaults);for(const o in n.tokenizer){if(!(o in r))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=n.tokenizer[a],h=r[a];r[a]=(...u)=>{let d=l.apply(r,u);return d===!1&&(d=h.apply(r,u)),d}}s.tokenizer=r}if(n.hooks){const r=this.defaults.hooks||new Xe;for(const o in n.hooks){if(!(o in r))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=n.hooks[a],h=r[a];Xe.passThroughHooks.has(o)?r[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(r,u)).then(p=>h.call(r,p));const d=l.call(r,u);return h.call(r,d)}:r[a]=(...u)=>{let d=l.apply(r,u);return d===!1&&(d=h.apply(r,u)),d}}s.hooks=r}if(n.walkTokens){const r=this.defaults.walkTokens,o=n.walkTokens;s.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),r&&(l=l.concat(r.call(this,a))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return he.lex(e,t??this.defaults)}parser(e,t){return fe.parse(e,t??this.defaults)}}Qe=new WeakSet,en=function(e,t){return(n,s)=>{const r={...s},o={...this.defaults,...r};this.defaults.async===!0&&r.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=ot(this,vt,ts).call(this,!!o.silent,!!o.async);if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(n):n).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>t(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(n=o.hooks.preprocess(n));let l=e(n,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let h=t(l,o);return o.hooks&&(h=o.hooks.postprocess(h)),h}catch(l){return a(l)}}},vt=new WeakSet,ts=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+te(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}};const xe=new Qr;function O(i,e){return xe.parse(i,e)}O.options=O.setOptions=function(i){return xe.setOptions(i),O.defaults=xe.defaults,Wi(O.defaults),O};O.getDefaults=ln;O.defaults=Te;O.use=function(...i){return xe.use(...i),O.defaults=xe.defaults,Wi(O.defaults),O};O.walkTokens=function(i,e){return xe.walkTokens(i,e)};O.parseInline=xe.parseInline;O.Parser=fe;O.parser=fe.parse;O.Renderer=Et;O.TextRenderer=dn;O.Lexer=he;O.lexer=he.lex;O.Tokenizer=xt;O.Hooks=Xe;O.parse=O;O.options;O.setOptions;O.use;O.walkTokens;O.parseInline;fe.parse;he.lex;const de=Object.create(null);de.open="0";de.close="1";de.ping="2";de.pong="3";de.message="4";de.upgrade="5";de.noop="6";const yt=Object.create(null);Object.keys(de).forEach(i=>{yt[de[i]]=i});const tn={type:"error",data:"parser error"},ns=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",is=typeof ArrayBuffer=="function",ss=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,gn=({type:i,data:e},t,n)=>ns&&e instanceof Blob?t?n(e):hi(e,n):is&&(e instanceof ArrayBuffer||ss(e))?t?n(e):hi(new Blob([e]),n):n(de[i]+(e||"")),hi=(i,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function fi(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let Wt;function Jr(i,e){if(ns&&i.data instanceof Blob)return i.data.arrayBuffer().then(fi).then(e);if(is&&(i.data instanceof ArrayBuffer||ss(i.data)))return e(fi(i.data));gn(i,!1,t=>{Wt||(Wt=new TextEncoder),e(Wt.encode(t))})}const pi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ge=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<pi.length;i++)Ge[pi.charCodeAt(i)]=i;const eo=i=>{let e=i.length*.75,t=i.length,n,s=0,r,o,a,l;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const h=new ArrayBuffer(e),u=new Uint8Array(h);for(n=0;n<t;n+=4)r=Ge[i.charCodeAt(n)],o=Ge[i.charCodeAt(n+1)],a=Ge[i.charCodeAt(n+2)],l=Ge[i.charCodeAt(n+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|l&63;return h},to=typeof ArrayBuffer=="function",mn=(i,e)=>{if(typeof i!="string")return{type:"message",data:rs(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:no(i.substring(1),e)}:yt[t]?i.length>1?{type:yt[t],data:i.substring(1)}:{type:yt[t]}:tn},no=(i,e)=>{if(to){const t=eo(i);return rs(t,e)}else return{base64:!0,data:i}},rs=(i,e)=>{switch(e){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},os="",io=(i,e)=>{const t=i.length,n=new Array(t);let s=0;i.forEach((r,o)=>{gn(r,!1,a=>{n[o]=a,++s===t&&e(n.join(os))})})},so=(i,e)=>{const t=i.split(os),n=[];for(let s=0;s<t.length;s++){const r=mn(t[s],e);if(n.push(r),r.type==="error")break}return n};function ro(){return new TransformStream({transform(i,e){Jr(i,t=>{const n=t.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let Vt;function pt(i){return i.reduce((e,t)=>e+t.length,0)}function dt(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)t[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function oo(i,e){Vt||(Vt=new TextDecoder);const t=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(pt(t)<1)break;const l=dt(t,1);r=(l[0]&128)===128,s=l[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(pt(t)<2)break;const l=dt(t,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(pt(t)<8)break;const l=dt(t,8),h=new DataView(l.buffer,l.byteOffset,l.length),u=h.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(tn);break}s=u*Math.pow(2,32)+h.getUint32(4),n=3}else{if(pt(t)<s)break;const l=dt(t,s);a.enqueue(mn(r?l:Vt.decode(l),e)),n=0}if(s===0||s>i){a.enqueue(tn);break}}}})}const as=4;function B(i){if(i)return ao(i)}function ao(i){for(var e in B.prototype)i[e]=B.prototype[e];return i}B.prototype.on=B.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};B.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};B.prototype.off=B.prototype.removeListener=B.prototype.removeAllListeners=B.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};B.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};B.prototype.emitReserved=B.prototype.emit;B.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};B.prototype.hasListeners=function(i){return!!this.listeners(i).length};const se=typeof self<"u"?self:typeof window<"u"?window:Function("return this")();function ls(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}const lo=se.setTimeout,co=se.clearTimeout;function Rt(i,e){e.useNativeTimers?(i.setTimeoutFn=lo.bind(se),i.clearTimeoutFn=co.bind(se)):(i.setTimeoutFn=se.setTimeout.bind(se),i.clearTimeoutFn=se.clearTimeout.bind(se))}const uo=1.33;function ho(i){return typeof i=="string"?fo(i):Math.ceil((i.byteLength||i.size)*uo)}function fo(i){let e=0,t=0;for(let n=0,s=i.length;n<s;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function po(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function go(i){let e={},t=i.split("&");for(let n=0,s=t.length;n<s;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class mo extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class bn extends B{constructor(e){super(),this.writable=!1,Rt(this,e),this.opts=e,this.query=e.query,this.socket=e.socket}onError(e,t,n){return super.emitReserved("error",new mo(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=mn(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&+(this.opts.port!==443)||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=po(e);return t.length?"?"+t:""}}const cs="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),nn=64,bo={};let di=0,gt=0,gi;function mi(i){let e="";do e=cs[i%nn]+e,i=Math.floor(i/nn);while(i>0);return e}function us(){const i=mi(+new Date);return i!==gi?(di=0,gi=i):i+"."+mi(di++)}for(;gt<nn;gt++)bo[cs[gt]]=gt;let hs=!1;try{hs=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const wo=hs;function fs(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||wo))return new XMLHttpRequest}catch{}if(!e)try{return new se[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function yo(){}const _o=function(){return new fs({xdomain:!1}).responseType!=null}();class ko extends bn{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const n=location.protocol==="https:";let s=location.port;s||(s=n?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||s!==e.port}const t=e&&e.forceBase64;this.supportsBinary=_o&&!t,this.opts.withCredentials&&(this.cookieJar=void 0)}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let n=0;this.polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};so(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,io(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=us()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}request(e={}){return Object.assign(e,{xd:this.xd,cookieJar:this.cookieJar},this.opts),new pe(this.uri(),e)}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class pe extends B{constructor(e,t){super(),Rt(this,t),this.opts=t,this.method=t.method||"GET",this.uri=e,this.data=t.data!==void 0?t.data:null,this.create()}create(){var e;const t=ls(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd;const n=this.xhr=new fs(t);try{n.open(this.method,this.uri,!0);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this.opts.extraHeaders[s])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this.opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this.opts.cookieJar)===null||s===void 0||s.parseCookies(n)),n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(s){this.setTimeoutFn(()=>{this.onError(s)},0);return}typeof document<"u"&&(this.index=pe.requestsCount++,pe.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=yo,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete pe.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}pe.requestsCount=0;pe.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",bi);else if(typeof addEventListener=="function"){const i="onpagehide"in se?"pagehide":"unload";addEventListener(i,bi,!1)}}function bi(){for(let i in pe.requests)pe.requests.hasOwnProperty(i)&&pe.requests[i].abort()}const wn=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),mt=se.WebSocket||se.MozWebSocket,wi=!0,xo="arraybuffer",yi=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class To extends bn{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),t=this.opts.protocols,n=yi?{}:ls(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=wi&&!yi?t?new mt(e,t):new mt(e):new mt(e,t,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;gn(n,this.supportsBinary,r=>{const o={};try{wi&&this.ws.send(r)}catch{}s&&wn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=us()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}check(){return!!mt}}class Eo extends bn{get name(){return"webtransport"}doOpen(){typeof WebTransport=="function"&&(this.transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name]),this.transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this.transport.ready.then(()=>{this.transport.createBidirectionalStream().then(e=>{const t=oo(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=ro();s.readable.pipeTo(e.writable),this.writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this.writer.write(o).then(()=>this.onOpen())})}))}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;this.writer.write(n).then(()=>{s&&wn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this.transport)===null||e===void 0||e.close()}}const vo={websocket:To,webtransport:Eo,polling:ko},Ao=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Ro=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function sn(i){if(i.length>2e3)throw"URI too long";const e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let s=Ao.exec(i||""),r={},o=14;for(;o--;)r[Ro[o]]=s[o]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=So(r,r.path),r.queryKey=Co(r,r.query),r}function So(i,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Co(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(t[s]=r)}),t}let ps=class Ne extends B{constructor(e,t={}){super(),this.binaryType=xo,this.writeBuffer=[],e&&typeof e=="object"&&(t=e,e=null),e?(e=sn(e),t.hostname=e.host,t.secure=e.protocol==="https"||e.protocol==="wss",t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=sn(t.host).host),Rt(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=t.transports||["polling","websocket","webtransport"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=go(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=as,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new vo[e](n)}open(){let e;if(this.opts.rememberUpgrade&&Ne.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(e){let t=this.createTransport(e),n=!1;Ne.priorWebsocketSuccess=!1;const s=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;Ne.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const p=new Error("probe error");p.transport=t.name,this.emitReserved("upgradeError",p)}}))};function r(){n||(n=!0,u(),t.close(),t=null)}const o=d=>{const p=new Error("probe error: "+d);p.transport=t.name,r(),this.emitReserved("upgradeError",p)};function a(){o("transport closed")}function l(){o("socket closed")}function h(d){t&&d.name!==t.name&&r()}const u=()=>{t.removeListener("open",s),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",h)};t.once("open",s),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",h),this.upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",Ne.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade){let e=0;const t=this.upgrades.length;for(;e<t;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),this.resetPingTimeout(),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(t+=ho(s)),n>0&&t>this.maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}write(e,t,n){return this.sendPacket("message",e,t,n),this}send(e,t,n){return this.sendPacket("message",e,t,n),this}sendPacket(e,t,n,s){if(typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}onError(e){Ne.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,t){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const t=[];let n=0;const s=e.length;for(;n<s;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};ps.protocol=as;function Oo(i,e="",t){let n=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),n=sn(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const $o=typeof ArrayBuffer=="function",Lo=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,ds=Object.prototype.toString,No=typeof Blob=="function"||typeof Blob<"u"&&ds.call(Blob)==="[object BlobConstructor]",Io=typeof File=="function"||typeof File<"u"&&ds.call(File)==="[object FileConstructor]";function yn(i){return $o&&(i instanceof ArrayBuffer||Lo(i))||No&&i instanceof Blob||Io&&i instanceof File}function _t(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(_t(i[t]))return!0;return!1}if(yn(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return _t(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&_t(i[t]))return!0;return!1}function Do(i){const e=[],t=i.data,n=i;return n.data=rn(t,e),n.attachments=e.length,{packet:n,buffers:e}}function rn(i,e){if(!i)return i;if(yn(i)){const t={_placeholder:!0,num:e.length};return e.push(i),t}else if(Array.isArray(i)){const t=new Array(i.length);for(let n=0;n<i.length;n++)t[n]=rn(i[n],e);return t}else if(typeof i=="object"&&!(i instanceof Date)){const t={};for(const n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=rn(i[n],e));return t}return i}function Po(i,e){return i.data=on(i.data,e),delete i.attachments,i}function on(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=on(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=on(i[t],e));return i}const Mo=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],zo=5;var S;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(S||(S={}));class Bo{constructor(e){this.replacer=e}encode(e){return(e.type===S.EVENT||e.type===S.ACK)&&_t(e)?this.encodeAsBinary({type:e.type===S.EVENT?S.BINARY_EVENT:S.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===S.BINARY_EVENT||e.type===S.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=Do(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}}function _i(i){return Object.prototype.toString.call(i)==="[object Object]"}class _n extends B{constructor(e){super(),this.reviver=e}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===S.BINARY_EVENT;n||t.type===S.BINARY_ACK?(t.type=n?S.EVENT:S.ACK,this.reconstructor=new Uo(t),t.attachments===0&&super.emitReserved("decoded",t)):super.emitReserved("decoded",t)}else if(yn(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(S[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===S.BINARY_EVENT||n.type===S.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");n.attachments=Number(o)}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(_n.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case S.CONNECT:return _i(t);case S.DISCONNECT:return t===void 0;case S.CONNECT_ERROR:return typeof t=="string"||_i(t);case S.EVENT:case S.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Mo.indexOf(t[0])===-1);case S.ACK:case S.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Uo{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=Po(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Fo=Object.freeze(Object.defineProperty({__proto__:null,Decoder:_n,Encoder:Bo,get PacketType(){return S},protocol:zo},Symbol.toStringTag,{value:"Module"}));function le(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const qo=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class gs extends B{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[le(e,"open",this.onopen.bind(this)),le(e,"packet",this.onpacket.bind(this)),le(e,"error",this.onerror.bind(this)),le(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){if(qo.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const n={type:S.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const o=this.ids++,a=t.pop();this._registerAckCallback(o,a),n.id=o}const s=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!s||!this.connected)||(this.connected?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let o=0;o<this.sendBuffer.length;o++)this.sendBuffer[o].id===e&&this.sendBuffer.splice(o,1);t.call(this,new Error("operation has timed out"))},s);this.acks[e]=(...o)=>{this.io.clearTimeoutFn(r),t.apply(this,[null,...o])}}emitWithAck(e,...t){const n=this.flags.timeout!==void 0||this._opts.ackTimeout!==void 0;return new Promise((s,r)=>{t.push((o,a)=>n?o?r(o):s(a):s(o)),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>n!==this._queue[0]?void 0:(s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:S.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case S.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case S.EVENT:case S.BINARY_EVENT:this.onevent(e);break;case S.ACK:case S.BINARY_ACK:this.onack(e);break;case S.DISCONNECT:this.ondisconnect();break;case S.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...s){n||(n=!0,t.packet({type:S.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(t.apply(this,e.data),delete this.acks[e.id])}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:S.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function Me(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Me.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=Math.floor(e*10)&1?i+t:i-t}return Math.min(i,this.max)|0};Me.prototype.reset=function(){this.attempts=0};Me.prototype.setMin=function(i){this.ms=i};Me.prototype.setMax=function(i){this.max=i};Me.prototype.setJitter=function(i){this.jitter=i};class an extends B{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,Rt(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Me({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||Fo;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new ps(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=le(t,"open",function(){n.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=le(t,"error",r);if(this._timeout!==!1){const a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(le(e,"ping",this.onping.bind(this)),le(e,"data",this.ondata.bind(this)),le(e,"error",this.onerror.bind(this)),le(e,"close",this.onclose.bind(this)),le(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){wn(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new gs(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ve={};function kt(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=Oo(i,e.path||"/socket.io"),n=t.source,s=t.id,r=t.path,o=Ve[s]&&r in Ve[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let l;return a?l=new an(n,e):(Ve[s]||(Ve[s]=new an(n,e)),l=Ve[s]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(kt,{Manager:an,Socket:gs,io:kt,connect:kt});const{document:Ho}=Is;function ki(i,e,t){const n=i.slice();return n[24]=e[t],n}function xi(i){let e,t,n,s;return{c(){e=$("div"),t=$("button"),t.textContent="Chat",_(t,"class","stubber_webchat_enable_button ml-2 py-2 px-4 rounded-md transition duration-300 flex items-center"),_(e,"class","fixed bottom-0 right-0 mb-4 mr-4 w-96 flex justify-end")},m(r,o){W(r,e,o),C(e,t),n||(s=ue(t,"click",i[8]),n=!0)},p:oe,d(r){r&&M(e),n=!1,s()}}}function Ti(i){let e,t,n,s,r=(i[0]?i[0]:"")+"",o,a,l,h,u,d,p,b,x,I,T,y,k,A,X,ie,U=i[4]&&Ei(i),w=Xn(i[3]),z=[];for(let E=0;E<w.length;E+=1)z[E]=Ci(ki(i,w,E));let F=i[4]&&Oi();return{c(){e=$("div"),t=$("div"),n=$("div"),s=$("p"),o=be(r),a=Y(),l=$("button"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>',h=Y(),U&&U.c(),u=Y(),d=$("div");for(let E=0;E<z.length;E+=1)z[E].c();p=Y(),b=$("div"),x=$("input"),I=Y(),T=$("button"),y=be("Send"),A=Y(),F&&F.c(),_(s,"class","text-lg font-semibold"),_(l,"id","close-chat"),_(l,"class","stubber_webchat_minimize_button text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"),_(n,"class","stubber_webchat_top_container_row p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center"),_(d,"class","p-4 h-80 overflow-y-auto stubber_webchat_message_box"),_(x,"type","text"),_(x,"class","w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"),_(x,"placeholder",i[5]),_(x,"autocomplete","off"),_(T,"class","bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"),T.disabled=k=i[2]==="",_(b,"class","p-4 border-t flex"),_(t,"class","bg-white shadow-md rounded-lg max-w-lg w-full"),_(e,"class","stubber_webchat_container fixed bottom-16 right-4 w-96 rounded-lg")},m(E,J){W(E,e,J),C(e,t),C(t,n),C(n,s),C(s,o),C(n,a),C(n,l),C(t,h),U&&U.m(t,null),C(t,u),C(t,d);for(let D=0;D<z.length;D+=1)z[D]&&z[D].m(d,null);C(t,p),C(t,b),C(b,x),Ie(x,i[2]),C(b,I),C(b,T),C(T,y),C(t,A),F&&F.m(t,null),X||(ie=[ue(l,"click",i[13]),ue(x,"input",i[14]),ue(x,"keydown",i[6]),ue(T,"click",i[7])],X=!0)},p(E,J){if(J&1&&r!==(r=(E[0]?E[0]:"")+"")&&Je(o,r),E[4]?U?U.p(E,J):(U=Ei(E),U.c(),U.m(t,u)):U&&(U.d(1),U=null),J&8){w=Xn(E[3]);let D;for(D=0;D<w.length;D+=1){const Ee=ki(E,w,D);z[D]?z[D].p(Ee,J):(z[D]=Ci(Ee),z[D].c(),z[D].m(d,null))}for(;D<z.length;D+=1)z[D].d(1);z.length=w.length}J&32&&_(x,"placeholder",E[5]),J&4&&x.value!==E[2]&&Ie(x,E[2]),J&4&&k!==(k=E[2]==="")&&(T.disabled=k),E[4]?F||(F=Oi(),F.c(),F.m(t,null)):F&&(F.d(1),F=null)},d(E){E&&M(e),U&&U.d(),Ds(z,E),F&&F.d(),X=!1,Pe(ie)}}}function Ei(i){let e,t,n,s;return{c(){e=$("div"),t=$("button"),t.textContent="Switch platforms",_(t,"class","stubber_webchat_switch_button bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md transition duration-300 flex items-center m-auto"),_(e,"class","stubber_webchat_top_container_row p-1 text-white justify-between flex items-center w-full")},m(r,o){W(r,e,o),C(e,t),n||(s=ue(t,"click",i[8]),n=!0)},p:oe,d(r){r&&M(e),n=!1,s()}}}function vi(i){let e,t,n=i[24].message.type=="markdown"&&Ai(i),s=i[24].message.type=="text"&&Ri(i);return{c(){e=$("div"),n&&n.c(),t=Y(),s&&s.c(),_(e,"class","mb-2")},m(r,o){W(r,e,o),n&&n.m(e,null),C(e,t),s&&s.m(e,null)},p(r,o){r[24].message.type=="markdown"?n?n.p(r,o):(n=Ai(r),n.c(),n.m(e,t)):n&&(n.d(1),n=null),r[24].message.type=="text"?s?s.p(r,o):(s=Ri(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&M(e),n&&n.d(),s&&s.d()}}}function Ai(i){let e,t=Qt.sanitize(O(i[24].message.value.trim()))+"";return{c(){e=$("div"),_(e,"class","bg-gray-200 rounded-lg py-2 px-4 inline-block")},m(n,s){W(n,e,s),e.innerHTML=t},p(n,s){s&8&&t!==(t=Qt.sanitize(O(n[24].message.value.trim()))+"")&&(e.innerHTML=t)},d(n){n&&M(e)}}}function Ri(i){let e,t=i[24].message.value+"",n;return{c(){e=$("p"),n=be(t),_(e,"class","bg-gray-200 rounded-lg py-2 px-4 inline-block")},m(s,r){W(s,e,r),C(e,n)},p(s,r){r&8&&t!==(t=s[24].message.value+"")&&Je(n,t)},d(s){s&&M(e)}}}function Si(i){let e,t,n=i[24].message+"",s,r;return{c(){e=$("div"),t=$("p"),s=be(n),r=Y(),_(t,"class","bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block"),_(e,"class","mb-2 text-right")},m(o,a){W(o,e,a),C(e,t),C(t,s),C(e,r)},p(o,a){a&8&&n!==(n=o[24].message+"")&&Je(s,n)},d(o){o&&M(e)}}}function Ci(i){let e,t,n=i[24].direction=="in"&&vi(i),s=i[24].direction=="out"&&Si(i);return{c(){n&&n.c(),e=Y(),s&&s.c(),t=Ii()},m(r,o){n&&n.m(r,o),W(r,e,o),s&&s.m(r,o),W(r,t,o)},p(r,o){r[24].direction=="in"?n?n.p(r,o):(n=vi(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),r[24].direction=="out"?s?s.p(r,o):(s=Si(r),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(r){r&&(M(e),M(t)),n&&n.d(r),s&&s.d(r)}}}function Oi(i){return{c:oe,m:oe,d:oe}}function jo(i){let e,t,n,s,r=!i[1]&&xi(i),o=i[1]&&Ti(i);return{c(){e=$("style"),e.textContent=`/*
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
.h-6 {
  height: 1.5rem;
}
.h-80 {
  height: 20rem;
}
.h-\\[100px\\] {
  height: 100px;
}
.max-h-\\[200px\\] {
  max-height: 200px;
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
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.p-1 {
  padding: 0.25rem;
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
.font-semibold {
  font-weight: 600;
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
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
.stubber_webchat_enable_button {
  background-color: white;
  color: black;
}
.stubber_webchat_enable_button:hover {
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
  background-color: #007bff;
  color: white;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 18px;
  border: none;
}
.stubber_webchat_message_send_button:hover {
  background-color: lightblue;
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
.stubber_webchat_switch_button_selected {
  background-color: lightblue;
  color: black;
}
/* bottom container */
.focus-within\\:ring-2:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}
.hover\\:text-gray-400:hover {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}
.focus\\:text-gray-400:focus {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
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
}`,t=Y(),r&&r.c(),n=Y(),o&&o.c(),s=Ii()},m(a,l){C(Ho.head,e),W(a,t,l),r&&r.m(a,l),W(a,n,l),o&&o.m(a,l),W(a,s,l)},p(a,[l]){a[1]?r&&(r.d(1),r=null):r?r.p(a,l):(r=xi(a),r.c(),r.m(n.parentNode,n)),a[1]?o?o.p(a,l):(o=Ti(a),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i:oe,o:oe,d(a){a&&(M(t),M(n),M(s)),M(e),r&&r.d(a),o&&o.d(a)}}}function Wo(i,e,t){let{orguuid:n}=e,{chatname:s}=e,{chat_display_name:r}=e,{connect_on_load:o}=e,{passthrough_data:a}=e,l=!1,h=!1;console.log("stubber webchat v1.1.2");let u="",d=[],p,b=!1,x="Type message...",I="https://external-portforward.stubber.zone:6026";zs(()=>{console.log("__Mounted")});let T=()=>{p=kt(I),console.log(I),p.on("connect",async()=>{console.log("___Connected to server"),d.length==0&&await p.emit("initialize",{webchat_configuration:{orguuid:n,chatname:s,initialize:!0,passthrough_data:a}}),u.length>0&&k()}),p.on("disconnect",()=>{console.log("___Disconnected from server")}),p.on("webchat_message",w=>{let z={direction:"in",sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:w.webchat_message};d.push(z),t(3,d),A()}),p.on("webchat_client_configuration",w=>{Object.keys(w).forEach(F=>{w[F].type=="switching"&&t(4,b=w[F].value)})}),p.on("error",w=>{console.log("__Stubber Webchat : "+(w==null?void 0:w.error))})},y=w=>{w.key==="Enter"&&u!=""&&k()},k=async()=>{if(!p){T();return}let w={direction:"out",sent:!1,received:!1,dateTime:new Date,messageuuid:crypto.randomUUID(),message:u};d.push(w),t(3,d),t(2,u=""),A(),p.connected&&(await p.emit("message",{webchat_configuration:{orguuid:n,chatname:s,passthrough_data:a},webchat_message:{type:"text",value:w.message,messageuuid:w.messageuuid}}),w.received=!0,t(3,d))},A=()=>{setTimeout(()=>{let w=document.getElementById("stubber_webchat_message_box");w.scrollTop=w.scrollHeight},100)},X=()=>{t(1,l=!0),o==="true"&&!h&&T(),h=!0};Bs(()=>{ws&&ws.close()}),Qt.addHook("afterSanitizeAttributes",function(w){"target"in w&&w.setAttribute("target","_blank"),!w.hasAttribute("target")&&(w.hasAttribute("xlink:href")||w.hasAttribute("href"))&&w.setAttribute("xlink:show","new")});const ie=()=>{t(1,l=!1)};function U(){u=this.value,t(2,u)}return i.$$set=w=>{"orguuid"in w&&t(9,n=w.orguuid),"chatname"in w&&t(10,s=w.chatname),"chat_display_name"in w&&t(0,r=w.chat_display_name),"connect_on_load"in w&&t(11,o=w.connect_on_load),"passthrough_data"in w&&t(12,a=w.passthrough_data)},[r,l,u,d,b,x,y,k,X,n,s,o,a,ie,U]}class Vo extends Bi{constructor(e){super(),Pi(this,e,Wo,jo,Ni,{orguuid:9,chatname:10,chat_display_name:0,connect_on_load:11,passthrough_data:12})}get orguuid(){return this.$$.ctx[9]}set orguuid(e){this.$$set({orguuid:e}),re()}get chatname(){return this.$$.ctx[10]}set chatname(e){this.$$set({chatname:e}),re()}get chat_display_name(){return this.$$.ctx[0]}set chat_display_name(e){this.$$set({chat_display_name:e}),re()}get connect_on_load(){return this.$$.ctx[11]}set connect_on_load(e){this.$$set({connect_on_load:e}),re()}get passthrough_data(){return this.$$.ctx[12]}set passthrough_data(e){this.$$set({passthrough_data:e}),re()}}customElements.define("stubber-webchat",zi(Vo,{orguuid:{},chatname:{},chat_display_name:{},connect_on_load:{},passthrough_data:{}},[],[],!1));
