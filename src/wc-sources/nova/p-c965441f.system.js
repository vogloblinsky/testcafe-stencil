var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function s(e){try{o(n.next(e))}catch(e){i(e)}}function l(e){try{o(n["throw"](e))}catch(e){i(e)}}function o(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(s,l)}o((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(t){return o([e,t])}}function o(s){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;a=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(s[0]===6&&r.label<i[1]){r.label=i[1];i=s;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(s);break}if(i[2])r.ops.pop();r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n={allRenderFn:true,cmpDidLoad:false,cmpDidUnload:false,cmpDidUpdate:false,cmpDidRender:false,cmpWillLoad:true,cmpWillUpdate:false,cmpWillRender:false,connectedCallback:false,disconnectedCallback:false,element:false,event:false,hasRenderFn:true,lifecycle:true,hostListener:false,hostListenerTargetWindow:false,hostListenerTargetDocument:false,hostListenerTargetBody:false,hostListenerTargetParent:false,hostListenerTarget:false,member:true,method:false,mode:false,noVdomRender:false,observeAttribute:true,prop:true,propBoolean:false,propNumber:false,propString:true,propMutable:true,reflect:false,scoped:false,shadowDom:true,slot:false,slotRelocation:false,state:false,style:true,svg:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,watchCallback:true,taskQueue:true,lazyLoad:true,hydrateServerSide:false,cssVarShim:true,hydrateClientSide:false,isDebug:false,isDev:false,lifecycleDOMEvents:false,profile:false,hotModuleReplacement:false,constructableCSS:true,initializeNextTick:true,cssAnnotations:true};var a="nova";var i=0;var s=false;var l;var o;var f=false;var u=window;var c=document;var $={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var v=!!c.documentElement.attachShadow;var d=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var h=new WeakMap;var m=function(e){return h.get(e)};var p=e("r",function(e,t){return h.set(t.$lazyInstance$=e,t)});var g=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return h.set(e,t)}};var y=function(e,t){return t in e};var b=function(e){return console.error(e)};var w=new Map;var S=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=w.get(i);if(s){return s[a]}return t.import("./"+i+".entry.js"+"").then(function(e){{w.set(i,e)}return e[a]},b)};var _=new Map;var R=u.__stencil_cssshim;var x=[];var k=[];var L=[];var C=function(e,t){return function(r){e.push(r);if(!s){s=true;if(t&&$.$flags$&4){N(U)}else{$.raf(U)}}}};var E=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){b(e)}}e.length=0};var j=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){b(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var U=function(){i++;E(x);var e=($.$flags$&6)===2?performance.now()+10*Math.ceil(i*(1/22)):Infinity;j(k,e);j(L,e);if(k.length>0){L.push.apply(L,k);k.length=0}if(s=x.length+k.length+L.length>0){$.raf(U)}else{i=0}};var N=function(e){return Promise.resolve().then(e)};var P=C(k,true);var T={};var A=function(e){return e!=null};var M=function(e){return e.toLowerCase()};var O=function(e){e=(typeof e)[0];return e==="o"||e==="f"};var z=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var B=e("a",function(){if(!(u.CSS&&u.CSS.supports&&u.CSS.supports("color","var(--c)"))){return t.import("./p-aaf72d6b.system.js")}return Promise.resolve()});var I=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,n,i,s;return __generator(this,function(l){switch(l.label){case 0:e=t.meta.url;r=new RegExp("/"+a+"(\\.esm)?\\.js($|\\?|#)");n=Array.from(c.querySelectorAll("script")).find(function(e){return r.test(e.src)||e.getAttribute("data-namespace")===a});i=n["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign({},i,{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,u.location.href));D(s.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-9725f31b.system.js")];case 2:l.sent();l.label=3;case 3:return[2,Object.assign({},i,{resourcesUrl:s.href})]}})})});var D=function(e){var t=z(a);try{u[t]=new Function("w","return import(w);//"+Math.random())}catch(n){var r=new Map;u[t]=function(n){var a=new URL(n,e).href;var i=r.get(a);if(!i){var s=c.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+t+".m = m;"],{type:"application/javascript"}));i=new Promise(function(e){s.onload=function(){e(u[t].m);s.remove()}});r.set(a,i);c.head.appendChild(s)}return i}}};var W=function(e,t){if(e!=null&&!O(e)){if(t&1){return String(e)}return e}return e};var H="hydrated";var V=new WeakMap;var F=function(e,t,r){var n=_.get(e);if(d&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}_.set(e,n)};var q=function(e,t,r,n){var a=G(t.$tagName$);var i=_.get(a);e=e.nodeType===11?e:c;if(i){if(typeof i==="string"){e=e.head||e;var s=V.get(e);var l=void 0;if(!s){V.set(e,s=new Set)}if(!s.has(a)){{if(R){l=R.createHostStyle(n,a,i,!!(t.$flags$&10));var o=l["s-sc"];if(o){a=o;s=null}}else{l=c.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=e.adoptedStyleSheets.concat([i])}}return a};var Q=function(e,t,r){var n=q(v&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t,r,e);if(t.$flags$&10){e["s-sc"]=n;e.classList.add(n+"-h")}};var G=function(e,t){return"sc-"+e};var K=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var s=false;var l;var o=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!O(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?{$flags$:0,$text$:a}:a)}s=i}}};f(r);if(t){{l=t.key||undefined}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,o,Y)}var c={$flags$:0,$tag$:e,$children$:o.length>0?o:null,$elm$:undefined,$attrs$:t};{c.$key$=l}return c});var J={};var X=function(e){return e&&e.$tag$===J};var Y={forEach:function(e,t){return e.map(Z).forEach(t)},map:function(e,t){return e.map(Z).map(t).map(ee)}};var Z=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var ee=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var te=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"){var s=e.classList;re(r).forEach(function(e){return s.remove(e)});re(n).forEach(function(e){return s.add(e)})}else if(t==="style"){{for(var l in r){if(!n||n[l]==null){if(l.includes("-")){e.style.removeProperty(l)}else{e.style[l]=""}}}}for(var l in n){if(!r||n[l]!==r[l]){if(l.includes("-")){e.style.setProperty(l,n[l])}else{e.style[l]=n[l]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!y(e,t)){if(y(e,M(t))){t=M(t.substring(2))}else{t=M(t[2])+t.substring(3)}if(r){$.rel(e,t,r,false)}if(n){$.ael(e,t,n,false)}}else{var o=y(e,t);var f=O(n);if((o||f&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var u=n==null?"":n;if(e[t]!==u){e[t]=u}}else{e[t]=n}}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!o||i&4||a)&&!f){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var re=function(e){return!e?[]:e.split(/\s+/).filter(function(e){return e})};var ne=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||T;var s=t.$attrs$||T;{for(n in i){if(!(n in s)){te(a,n,i[n],undefined,r,t.$flags$)}}}for(n in s){te(a,n,i[n],s[n],r,t.$flags$)}};var ae=function(e,t,r,n){var a=t.$children$[r];var i=0;var s;var o;if(A(a.$text$)){a.$elm$=c.createTextNode(a.$text$)}else{s=a.$elm$=c.createElement(a.$tag$);{ne(null,a,f)}if(A(l)&&s["s-si"]!==l){s.classList.add(s["s-si"]=l)}if(a.$children$){for(i=0;i<a.$children$.length;++i){o=ae(e,a,i);if(o){s.appendChild(o)}}}}return a.$elm$};var ie=function(e,t,r,n,a,i){var s=e;var l;if(s.shadowRoot&&M(s.tagName)===o){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){l=ae(null,r,a);if(l){n[a].$elm$=l;s.insertBefore(l,t)}}}};var se=function(e,t,r,n){for(;t<=r;++t){if(A(e[t])){n=e[t].$elm$;ue(e[t],true);n.remove()}}};var le=function(e,t,r,n){var a=0;var i=0;var s=0;var l=0;var o=t.length-1;var f=t[0];var u=t[o];var c=n.length-1;var $=n[0];var v=n[c];var d;var h;while(a<=o&&i<=c){if(f==null){f=t[++a]}else if(u==null){u=t[--o]}else if($==null){$=n[++i]}else if(v==null){v=n[--c]}else if(oe(f,$)){fe(f,$);f=t[++a];$=n[++i]}else if(oe(u,v)){fe(u,v);u=t[--o];v=n[--c]}else if(oe(f,v)){fe(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--c]}else if(oe(u,$)){fe(u,$);e.insertBefore(u.$elm$,f.$elm$);u=t[--o];$=n[++i]}else{s=-1;{for(l=a;l<=o;++l){if(t[l]&&A(t[l].$key$)&&t[l].$key$===$.$key$){s=l;break}}}if(s>=0){h=t[s];if(h.$tag$!==$.$tag$){d=ae(t&&t[i],r,s)}else{fe(h,$);t[s]=undefined;d=h.$elm$}$=n[++i]}else{d=ae(t&&t[i],r,i);$=n[++i]}if(d){{f.$elm$.parentNode.insertBefore(d,f.$elm$)}}}}if(a>o){ie(e,n[c+1]==null?null:n[c+1].$elm$,r,n,i,c)}else if(i>c){se(t,a,o)}};var oe=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}return true}return false};var fe=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!A(t.$text$)){{{ne(e,t,f)}}if(A(n)&&A(a)){le(r,n,t,a)}else if(A(a)){if(A(e.$text$)){r.textContent=""}ie(r,null,t,a,0,a.length-1)}else if(A(n)){se(n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var ue=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){ue(e,t)})}};var ce=function(e,t,r,n){o=M(e.tagName);var a=t.$vnode$||{$flags$:0};var i=X(n)?n:K(null,null,n);i.$tag$=null;i.$flags$|=4;t.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{l=e["s-sc"]}fe(a,i)};var $e=function(e,t,r,n){{t.$flags$|=16}var a=t.$lazyInstance$;var i;if(n){{i=pe(a,"componentWillLoad")}}var s=function(){return ve(e,t,r,a,n)};return ge(i,function(){return P(s)})};var ve=function(e,t,r,n,a){{t.$flags$&=~16}{e["s-lr"]=false}if(a){Q(e,r,t.$modeName$)}{{t.$flags$|=4;try{ce(e,t,r,n.render())}catch(e){b(e)}t.$flags$&=~4}}if(R){R.updateHost(e)}{e["s-lr"]=true}{t.$flags$|=2}if(e["s-rc"].length>0){e["s-rc"].forEach(function(e){return e()});e["s-rc"].length=0}de(e,t)};var de=function(e,t,r){if(!e["s-al"]){var n=t.$ancestorComponent$;if(!(t.$flags$&64)){t.$flags$|=64;{e.classList.add(H)}{t.$onReadyResolve$(e)}if(!n){me()}}if(n){if(r=n["s-al"]){r.delete(e);if(r.size===0){n["s-al"]=undefined;n["s-init"]()}}t.$ancestorComponent$=undefined}}};var he=function(e,t){{var r=m(e);if(r.$flags$&2){$e(e,r,t,false)}}};var me=function(){{c.documentElement.classList.add(H)}{$.$flags$|=2}};var pe=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){b(e)}}return undefined};var ge=function(e,t){return e&&e.then?e.then(t):t()};var ye=function(e,t){return m(e).$instanceValues$.get(t)};var be=function(e,t,r,n){var a=m(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(t);var l=a.$flags$;r=W(r,n.$members$[t][0]);if(r!==s&&(!(l&8)||s===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if(n.$watchers$&&l&128){var o=n.$watchers$[t];if(o){o.forEach(function(e){try{a.$lazyInstance$[e].call(a.$lazyInstance$,r,s,t)}catch(e){b(e)}})}}if((l&(4|2|16))===2){$e(i,a,n,false)}}}};var we=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return ye(this,n)},set:function(e){be(this,n,e,t)},configurable:true,enumerable:true})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;$.jmp(function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r})};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var Se=function(e,a,i,s,l){return __awaiter(r,void 0,void 0,function(){var r,s,o,f,u,c;return __generator(this,function($){switch($.label){case 0:if(!((a.$flags$&32)===0))return[3,5];a.$flags$|=32;l=S(i);if(!l.then)return[3,2];return[4,l];case 1:l=$.sent();$.label=2;case 2:if(!l.isProxied){{i.$watchers$=l.watchers}we(l,i,2);l.isProxied=true}{a.$flags$|=8}try{new l(a)}catch(e){b(e)}{a.$flags$&=~8}{a.$flags$|=128}if(!(!l.$isStyleRegistered$&&l.style))return[3,5];r=l.style;s=G(i.$tagName$);o=i.$flags$&8;f=n.runtimeScopeCss;if(!(o||f))return[3,4];return[4,t.import("./p-6183697c.system.js").then(function(e){return e.scopeCss(r,s,false)})];case 3:r=$.sent();$.label=4;case 4:F(s,r,!!(i.$flags$&1));l.$isStyleRegistered$=true;$.label=5;case 5:u=a.$ancestorComponent$;c=function(){return $e(e,a,i,true)};if(u&&u["s-lr"]===false&&u["s-rc"]){u["s-rc"].push(c)}else{c()}return[2]}})})};var _e=function(e,t){if(($.$flags$&1)===0){var r=m(e);if(!(r.$flags$&1)){r.$flags$|=1;{var n=e;while(n=n.parentNode||n.host){if(n["s-init"]&&n["s-lr"]===false){r.$ancestorComponent$=n;(n["s-al"]=n["s-al"]||new Set).add(e);break}}}if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{N(function(){return Se(e,r,t)})}}}};var Re=function(e){if(($.$flags$&1)===0){var t=m(e);if(R){R.removeHost(e)}}};var xe=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var a=c.head;var i=u.customElements;var s=a.querySelector("meta[charset]");var l=c.createElement("style");var o;Object.assign($,t);$.$resourcesUrl$=new URL(t.resourcesUrl||"./",c.baseURI).href;if(t.syncQueue){$.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{a.$watchers$={}}if(!v&&a.$flags$&1){a.$flags$|=8}var s=a.$tagName$;var l=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;{r["s-lr"]=false;r["s-rc"]=[]}g(t);if(a.$flags$&1){if(v){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(o){clearTimeout(o);o=null}$.jmp(function(){return _e(e,a)})};t.prototype.disconnectedCallback=function(){var e=this;$.jmp(function(){return Re(e)})};t.prototype["s-init"]=function(){var e=m(this);if(e.$lazyInstance$){de(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){he(this,a)};t.prototype.componentOnReady=function(){return m(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(s)&&!i.get(s)){r.push(s);i.define(s,we(l,a,1))}})});l.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");a.insertBefore(l,s?s.nextSibling:a.firstChild);$.jmp(function(){return o=setTimeout(me,30)})})}}});