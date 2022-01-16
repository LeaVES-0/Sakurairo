/*! For license information please see 413.js.LICENSE.txt */
(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[413],{7413:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});r(5306);var n=r(19),o=r(3415),i=r(1470),s=r(4004),a=r(6680),l=r(5530),c=r(8708),u=r(8188),d=r(5406),h=r(8048),p=r(4865),f=r.n(p);class m{constructor(e){this.key=e,this.pull()}pull(){let e=window.history.state,t=null==e?void 0:e[this.key];if(void 0===t||this.index!==t){var r=window.sessionStorage.getItem(this.key),n=r?JSON.parse(r):[];n[this.index]=this.state,window.sessionStorage.setItem(this.key,JSON.stringify(n)),void 0===t?(this.index=n.length,this.state=null,window.history.replaceState({...e,[this.key]:this.index},document.title)):(this.index=t,this.state=r?n[t]:null)}}}let g=(e,t)=>{e.replaceWith(t)},v={default:g,innerHTML:(e,t)=>{e.innerHTML=t.innerHTML},textContent:(e,t)=>{e.textContent=t.textContent},innerText:(e,t)=>{e.innerText=t.innerText},attributes:(e,t)=>{let r=e.getAttributeNames();t.getAttributeNames().forEach((n=>{e.setAttribute(n,t.getAttribute(n)||""),r=r.filter((e=>e!==n))})),r.forEach((t=>{e.removeAttribute(t)}))},replaceWith:g};class w{constructor(e,t){this.form=e,this.submitButton=t}getAttribute(e){let{submitButton:t,form:r}=this;if(t&&t.hasAttribute(`form${e}`)){var n=`${e.charAt(0).toUpperCase()}${e.slice(1)}`;if(n=t[`form${n}`])return n}return r[e]}getEntryList(){let{form:e,submitButton:t}=this,r=new FormData(e);return t&&!t.disabled&&t.name&&r.append(t.name,t.value),r}getNameValuePairs(){return Array.from(this.getEntryList(),(([e,t])=>[e,t instanceof File?t.name:t]))}getURLSearchParams(){return new URLSearchParams(this.getNameValuePairs())}getTextPlain(){return this.getNameValuePairs().reduce(((e,[t,r])=>`${e}${t}=${r}\r\n`),"")}getRequestInfo(){let e=this.getAttribute("action");var t=new URL(e,document.baseURI);if(!/^https?:$/.test(t.protocol))return null;switch(this.getAttribute("method")){case"get":return t.search=this.getURLSearchParams().toString(),t.href;case"post":switch(this.getAttribute("enctype")){case"application/x-www-form-urlencoded":t=this.getURLSearchParams();break;case"multipart/form-data":t=this.getEntryList();break;case"text/plain":t=this.getTextPlain();break;default:return null}return new Request(e,{method:"POST",body:t});default:return null}}}let y=e=>{if(e===window.name)return window;switch(e.toLowerCase()){case"":case"_self":return window;case"_parent":return window.parent;case"_top":return window.top}};class b{constructor(e){this.pjax=e}test(e){let{defaultTrigger:t}=this.pjax.options;if("boolean"==typeof t)return t;let{enable:r,exclude:n}=t;return!(!1===r||n&&e.matches(n))}load(e,t){var r,n;let o={},i=null==(r=t.getAttribute("referrerpolicy"))?void 0:r.toLowerCase();void 0!==i&&(o.referrerPolicy=i),null!=(n=t.getAttribute("rel"))&&n.split(/\s+/).some((e=>"noreferrer"===e.toLowerCase()))&&(o.referrer=""),this.pjax.load(new Request(e,o)).catch((()=>{}))}onLinkOpen(e){if(!e.defaultPrevented){var{target:t}=e;if(t instanceof Element&&(t=t.closest("a[href], area[href]"))&&this.test(t)){if((e instanceof MouseEvent||e instanceof KeyboardEvent)&&(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey))return;y(t.target)===window&&t.origin===window.location.origin&&(e.preventDefault(),this.load(t.href,t))}}}onFormSubmit(e){if(!e.defaultPrevented){var{target:t,submitter:r}=e;if(t instanceof HTMLFormElement&&this.test(t)){var n=new w(t,r);y(n.getAttribute("target"))===window&&(n=n.getRequestInfo())&&new URL("string"==typeof n?n:n.url).origin===window.location.origin&&(e.preventDefault(),this.load(n,t))}}}register(){document.addEventListener("click",(e=>{this.onLinkOpen(e)})),document.addEventListener("keyup",(e=>{"Enter"===e.key&&this.onLinkOpen(e)})),"SubmitEvent"in window&&document.addEventListener("submit",(e=>{this.onFormSubmit(e)}))}}async function x(e,t={}){var r,n;let o,{selectors:i,switches:s,cache:a,timeout:l,hooks:c}={...this.options,...t},u={},d=(null==(r=this.abortController)?void 0:r.signal)||null;u.signal=d,r={cache:a,signal:d},e instanceof Request&&(r.referrer=e.referrer,r.referrerPolicy=e.referrerPolicy),(e=new Request(e,r)).headers.set("X-Requested-With","Fetch"),e.headers.set("X-Pjax","true"),e.headers.set("X-Pjax-Selectors",JSON.stringify(i)),e=await(null==(n=c.request)?void 0:n.call(c,e))||e,u.request=e,u.timeout=l,0<l&&(o=window.setTimeout((()=>{var e;null==(e=this.abortController)||e.abort()}),l),u.timeoutID=o),this.fire("send",u);try{var h,p,f;let r=await fetch(e).finally((()=>{window.clearTimeout(o)})),n=await(null==(h=c.response)?void 0:h.call(c,r))||r;u.response=n,this.fire("receive",u);let a=new URL(n.url);a.hash=new URL(e.url).hash,window.location.href!==a.href&&window.history.pushState(null,"",a.href);let l=(new DOMParser).parseFromString(await n.text(),"text/html"),m=await(null==(p=c.document)?void 0:p.call(c,l))||l;u.switches=s;let g=await async function(e,{selectors:t,switches:r,signal:n=null}){if(null!=n&&n.aborted)throw new DOMException("Aborted switches","AbortError");let o=!1,i=[];return t.forEach((t=>{let n=e.querySelectorAll(t),s=document.querySelectorAll(t);if(n.length!==s.length)throw new DOMException(`Selector '${t}' does not select the same amount of nodes`,"IndexSizeError");let{activeElement:a}=document;s.forEach(((e,s)=>{!o&&a&&e.contains(a)&&((a instanceof HTMLElement||a instanceof SVGElement)&&a.blur(),o=!0);let l=(null==r?void 0:r[t])||v.default,c=Promise.resolve().then((()=>l(e,n[s]))).catch((()=>{}));i.push(c)}))})),await Promise.race([Promise.all(i),new Promise(((e,t)=>{null==n||n.addEventListener("abort",(()=>{t(new DOMException("Aborted switches","AbortError"))}))}))]),{focusCleared:o}}(m,{selectors:i,switches:s,signal:d}),w=await(null==(f=c.switchesResult)?void 0:f.call(c,g))||g;u.switchesResult=w,await this.preparePage(w,t)}catch(e){throw u.error=e,this.fire("error",u),e}finally{this.fire("complete",u)}this.fire("success",u)}let E=/^((application|text)\/(x-)?(ecma|java)script|text\/(javascript1\.[0-5]|(j|live)script))$/;class S{constructor(e){if(this.evaluable=this.blocking=this.external=!1,this.target=e,e.hasAttribute("src")||e.text){var t=e.type?e.type.trim().toLowerCase():"text/javascript";if(E.test(t))this.type="classic";else{if("module"!==t)return;this.type="module"}e.noModule&&"classic"===this.type||(e.src&&(this.external=!0),this.blocking=!0,("classic"!==this.type||this.external&&(e.hasAttribute("async")||e.defer))&&(this.blocking=!1),this.evaluable=!0)}}eval(){return new Promise(((e,t)=>{let r=this.target,n=document.createElement("script");n.addEventListener("error",t),n.async=!1,r.getAttributeNames().forEach((e=>{n.setAttribute(e,r.getAttribute(e)||"")})),n.text=r.text,document.contains(r)?r.replaceWith(n):(document.head.append(n),this.external?n.addEventListener("load",(()=>n.remove())):n.remove()),this.external?n.addEventListener("load",(()=>e())):e()}))}}class L{constructor(e){this.signal=e}async exec(e){var t;if(null!=(t=this.signal)&&t.aborted)throw new DOMException("Execution aborted","AbortError");t=e.eval().catch((()=>{})),e.blocking&&await t}}async function P(e,t={}){if(t={...this.options,...t},e){var r;if(e.focusCleared){let e=document.querySelectorAll("[autofocus]")[0];(e instanceof HTMLElement||e instanceof SVGElement)&&e.focus()}let n=[];t.scripts&&document.querySelectorAll(t.scripts).forEach((e=>{e instanceof HTMLScriptElement&&n.push(e)})),t.selectors.forEach((e=>{document.querySelectorAll(e).forEach((e=>{e instanceof HTMLScriptElement?n.push(e):e.querySelectorAll("script").forEach((e=>{n.includes(e)||n.push(e)}))}))})),n.sort(((e,t)=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING||-1)),await async function(e,{signal:t=null}={}){if(null!=t&&t.aborted)throw new DOMException("Aborted execution","AbortError");e=Array.from(e,(e=>new S(e))).filter((e=>e.evaluable));let r=new L(t);e=e.reduce(((e,t)=>t.external?Promise.all([e,r.exec(t)]):e.then((()=>r.exec(t)))),Promise.resolve()),await Promise.race([e,new Promise(((e,r)=>{null==t||t.addEventListener("abort",(()=>{r(new DOMException("Aborted execution","AbortError"))}))}))])}(n,{signal:(null==(r=this.abortController)?void 0:r.signal)||null})}({scrollTo:r}=t),!1!==r&&(e=!!e&&[0,0],Array.isArray(r)?e=r:"number"==typeof r?e=[window.scrollX,r]:(r=(()=>{let e=null;const t=decodeURIComponent(window.location.hash.slice(1));return t&&(e=document.getElementById(t)||document.getElementsByName(t)[0]),e||t&&"top"!==t.toLowerCase()||(e=document.scrollingElement),e})())&&(r.scrollIntoView(),e=!1),e&&window.scrollTo(e[0],e[1]))}async function R(e,t={}){var r;this.storeHistory();let n=new AbortController;null==(r=this.abortController)||r.abort(),this.abortController=n,(r=new URL("string"==typeof e?e:e.url,document.baseURI)).pathname+r.search===this.location.pathname+this.location.search&&r.href.includes("#")?(window.location.hash!==r.hash&&window.history.pushState(null,"",r.href),await this.preparePage(null,t)):await this.switchDOM(e,t),this.history.pull(),this.location.href=window.location.href,this.abortController=null}class k{static reload(){window.location.reload()}constructor(e={}){this.options={defaultTrigger:!0,selectors:["title",".pjax"],switches:{},scripts:"script[data-pjax]",scrollTo:!0,scrollRestoration:!0,cache:"default",timeout:0,hooks:{}},this.history=new m("pjax"),this.location=new URL(window.location.href),this.abortController=null,this.switchDOM=x,this.preparePage=P,this.weakLoad=R,Object.assign(this.options,e),this.options.scrollRestoration&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(()=>{window.history.scrollRestoration="auto"}))),({defaultTrigger:e}=this.options),(!0===e||!1!==e&&!1!==e.enable)&&new b(this).register(),window.addEventListener("popstate",(e=>{this.storeHistory(),this.history.pull(),null!==e.state&&(e={},this.options.scrollRestoration&&this.history.state&&(e.scrollTo=this.history.state.scrollPos),this.load(window.location.href,e).catch((()=>{})))}))}storeHistory(){this.history.state={scrollPos:[window.scrollX,window.scrollY]}}fire(e,t){e=new CustomEvent(`pjax:${e}`,{bubbles:!0,cancelable:!1,detail:{abortController:this.abortController,...t}}),document.dispatchEvent(e)}async load(e,t={}){try{await this.weakLoad(e,t)}catch(t){if(t instanceof DOMException&&"AbortError"===t.name)throw t;window.location.assign("string"==typeof e?e:e.url)}}}k.switches=v;const A=k;function T(){new A({selectors:["#page","title",".footer-device","#app-js-before","#login-link","#entry-content-css"],scripts:"#app-js-before",timeout:8e3,defaultTrigger:{exclude:"a[data-no-pjax]"}}),document.addEventListener("pjax:send",(()=>{for(const e of document.getElementsByClassName("normal-cover-video"))e.pause(),e.src="",e.load="";document.getElementById("bar").style.width="0%",mashiro_option.NProgressON&&f().start(),(0,l.LP)()})),document.addEventListener("pjax:complete",(function(){(0,l.RD)(),(0,l.PE)(),(0,l.CE)(),mashiro_option.land_at_home&&(0,h.A)(),mashiro_option.NProgressON&&f().done(),(0,l.rE)(),(0,a.y)();let e=document.getElementsByTagName("p");for(let t=0;t<e.length;t++)e[t].classList.remove("head-copyright");let t=document.getElementsByTagName("div"),r=document.getElementById("to-load-aplayer");r&&r.addEventListener("click",(()=>{for(let e=0;e<t.length;e++)t[e].classList.remove("load-aplayer")}));let o=document.getElementsByClassName("iconflat");0!=o.length&&(o[0].style.width="50px",o[0].style.height="50px");let i=document.getElementsByClassName("openNav");0!=i.length&&(i[0].style.height="50px"),(0,l.D9)(),(0,l.j6)(),(0,s.Z)(),(0,h.O)(),(0,d.k)(),(0,u.ze)(),(0,l.nO)(),(0,l.po)();let p=document.getElementById("loading");p&&(p.classList.add("hide"),p.classList.remove("show")),document.querySelector(".js-search.is-visible")&&(document.getElementsByClassName("js-toggle-search")[0].classList.toggle("is-active"),document.getElementsByClassName("js-search")[0].classList.toggle("is-visible"),document.documentElement.style.overflowY="unset"),(0,c.Z)(),(0,n.m)()})),document.addEventListener("pjax:success",(function(){if(!mashiro_option.land_at_home&&!document.getElementById("app-page-js")){const e=document.getElementById("app-js"),t=document.createElement("script");t.src=e.src.replace("/app.js","/page.js"),t.id="app-page-js",document.body.appendChild(t)}window.gtag&&gtag("config",Poi.google_analytics_id,{page_path:window.location.pathname}),window._hmt&&_hmt.push(["_trackPageview",pageURL])})),document.addEventListener("pjax:error",(e=>{(0,o.f)((0,i._$)("页面加载出错了 HTTP {0}",e.request.status))})),window.addEventListener("popstate",(function(e){(0,l.RD)(),(0,c.Z)(),(0,l.PE)(),(0,l.CE)(),(0,l.j6)(!0),(0,h.O)()}),!1)}},1530:(e,t,r)=>{var n=r(8710).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},7007:(e,t,r)=>{r(4916);var n=r(1702),o=r(1320),i=r(2261),s=r(7293),a=r(5112),l=r(8880),c=a("species"),u=RegExp.prototype;e.exports=function(e,t,r,d){var h=a(e),p=!s((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),f=p&&!s((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[c]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return t=!0,null},r[h](""),!t}));if(!p||!f||r){var m=n(/./[h]),g=t(h,""[e],(function(e,t,r,o,s){var a=n(e),l=t.exec;return l===i||l===u.exec?p&&!s?{done:!0,value:m(t,r,o)}:{done:!0,value:a(r,t,o)}:{done:!1}}));o(String.prototype,e,g[0]),o(u,h,g[1])}d&&l(u[h],"sham",!0)}},647:(e,t,r)=>{var n=r(1702),o=r(7908),i=Math.floor,s=n("".charAt),a=n("".replace),l=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,d,h){var p=r+e.length,f=n.length,m=u;return void 0!==d&&(d=o(d),m=c),a(h,m,(function(o,a){var c;switch(s(a,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,r);case"'":return l(t,p);case"<":c=d[l(a,1,-1)];break;default:var u=+a;if(0===u)return o;if(u>f){var h=i(u/10);return 0===h?o:h<=f?void 0===n[h-1]?s(a,1):n[h-1]+s(a,1):o}c=n[u-1]}return void 0===c?"":c}))}},7651:(e,t,r)=>{var n=r(7854),o=r(6916),i=r(9670),s=r(614),a=r(4326),l=r(2261),c=n.TypeError;e.exports=function(e,t){var r=e.exec;if(s(r)){var n=o(r,e,t);return null!==n&&i(n),n}if("RegExp"===a(e))return o(l,e,t);throw c("RegExp#exec called on incompatible receiver")}},2261:(e,t,r)=>{var n,o,i=r(6916),s=r(1702),a=r(1340),l=r(7066),c=r(2999),u=r(2309),d=r(30),h=r(9909).get,p=r(9441),f=r(7168),m=u("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,v=g,w=s("".charAt),y=s("".indexOf),b=s("".replace),x=s("".slice),E=(o=/b*/g,i(g,n=/a/,"a"),i(g,o,"a"),0!==n.lastIndex||0!==o.lastIndex),S=c.BROKEN_CARET,L=void 0!==/()??/.exec("")[1];(E||L||S||p||f)&&(v=function(e){var t,r,n,o,s,c,u,p=this,f=h(p),P=a(e),R=f.raw;if(R)return R.lastIndex=p.lastIndex,t=i(v,R,P),p.lastIndex=R.lastIndex,t;var k=f.groups,A=S&&p.sticky,T=i(l,p),C=p.source,I=0,O=P;if(A&&(T=b(T,"y",""),-1===y(T,"g")&&(T+="g"),O=x(P,p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==w(P,p.lastIndex-1))&&(C="(?: "+C+")",O=" "+O,I++),r=new RegExp("^(?:"+C+")",T)),L&&(r=new RegExp("^"+C+"$(?!\\s)",T)),E&&(n=p.lastIndex),o=i(g,A?r:p,O),A?o?(o.input=x(o.input,I),o[0]=x(o[0],I),o.index=p.lastIndex,p.lastIndex+=o[0].length):p.lastIndex=0:E&&o&&(p.lastIndex=p.global?o.index+o[0].length:n),L&&o&&o.length>1&&i(m,o[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(o[s]=void 0)})),o&&k)for(o.groups=c=d(null),s=0;s<k.length;s++)c[(u=k[s])[0]]=o[u[1]];return o}),e.exports=v},7066:(e,t,r)=>{var n=r(9670);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:(e,t,r)=>{var n=r(7293),o=r(7854).RegExp,i=n((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),s=i||n((function(){return!o("a","y").sticky})),a=i||n((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:a,MISSED_STICKY:s,UNSUPPORTED_Y:i}},9441:(e,t,r)=>{var n=r(7293),o=r(7854).RegExp;e.exports=n((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var n=r(7293),o=r(7854).RegExp;e.exports=n((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},4916:(e,t,r)=>{var n=r(2109),o=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},5306:(e,t,r)=>{var n=r(2104),o=r(6916),i=r(1702),s=r(7007),a=r(7293),l=r(9670),c=r(614),u=r(9303),d=r(7466),h=r(1340),p=r(4488),f=r(1530),m=r(8173),g=r(647),v=r(7651),w=r(5112)("replace"),y=Math.max,b=Math.min,x=i([].concat),E=i([].push),S=i("".indexOf),L=i("".slice),P="$0"==="a".replace(/./,"$0"),R=!!/./[w]&&""===/./[w]("a","$0");s("replace",(function(e,t,r){var i=R?"$":"$0";return[function(e,r){var n=p(this),i=null==e?void 0:m(e,w);return i?o(i,e,n,r):o(t,h(n),e,r)},function(e,o){var s=l(this),a=h(e);if("string"==typeof o&&-1===S(o,i)&&-1===S(o,"$<")){var p=r(t,s,a,o);if(p.done)return p.value}var m=c(o);m||(o=h(o));var w=s.global;if(w){var P=s.unicode;s.lastIndex=0}for(var R=[];;){var k=v(s,a);if(null===k)break;if(E(R,k),!w)break;""===h(k[0])&&(s.lastIndex=f(a,d(s.lastIndex),P))}for(var A,T="",C=0,I=0;I<R.length;I++){for(var O=h((k=R[I])[0]),N=y(b(u(k.index),a.length),0),M=[],j=1;j<k.length;j++)E(M,void 0===(A=k[j])?A:String(A));var $=k.groups;if(m){var _=x([O],M,N,a);void 0!==$&&E(_,$);var U=h(n(o,void 0,_))}else U=g(O,a,N,M,$,o);N>=C&&(T+=L(a,C,N)+U,C=N+O.length)}return T+L(a,C)}]}),!!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!P||R)},4865:function(e,t,r){var n,o;n=function(){var e,t,r={version:"0.2.0"},n=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(e,t,r){return e<t?t:e>r?r:e}function i(e){return 100*(-1+e)}function s(e,t,r){var o;return(o="translate3d"===n.positionUsing?{transform:"translate3d("+i(e)+"%,0,0)"}:"translate"===n.positionUsing?{transform:"translate("+i(e)+"%,0)"}:{"margin-left":i(e)+"%"}).transition="all "+t+"ms "+r,o}r.configure=function(e){var t,r;for(t in e)void 0!==(r=e[t])&&e.hasOwnProperty(t)&&(n[t]=r);return this},r.status=null,r.set=function(e){var t=r.isStarted();e=o(e,n.minimum,1),r.status=1===e?null:e;var i=r.render(!t),c=i.querySelector(n.barSelector),u=n.speed,d=n.easing;return i.offsetWidth,a((function(t){""===n.positionUsing&&(n.positionUsing=r.getPositioningCSS()),l(c,s(e,u,d)),1===e?(l(i,{transition:"none",opacity:1}),i.offsetWidth,setTimeout((function(){l(i,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){r.remove(),t()}),u)}),u)):setTimeout(t,u)})),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout((function(){r.status&&(r.trickle(),e())}),n.trickleSpeed)};return n.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var t=r.status;return t?("number"!=typeof e&&(e=(1-t)*o(Math.random()*t,.1,.95)),t=o(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*n.trickleRate)},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()?(0===t&&r.start(),e++,t++,n.always((function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this):this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=n.template;var o,s=t.querySelector(n.barSelector),a=e?"-100":i(r.status||0),c=document.querySelector(n.parent);return l(s,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),n.showSpinner||(o=t.querySelector(n.spinnerSelector))&&p(o),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(t),t},r.remove=function(){d(document.documentElement,"nprogress-busy"),d(document.querySelector(n.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var a=function(){var e=[];function t(){var r=e.shift();r&&r(t)}return function(r){e.push(r),1==e.length&&t()}}(),l=function(){var e=["Webkit","O","Moz","ms"],t={};function r(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function n(t){var r=document.body.style;if(t in r)return t;for(var n,o=e.length,i=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((n=e[o]+i)in r)return n;return t}function o(e){return e=r(e),t[e]||(t[e]=n(e))}function i(e,t,r){t=o(t),e.style[t]=r}return function(e,t){var r,n,o=arguments;if(2==o.length)for(r in t)void 0!==(n=t[r])&&t.hasOwnProperty(r)&&i(e,r,n);else i(e,o[1],o[2])}}();function c(e,t){return("string"==typeof e?e:h(e)).indexOf(" "+t+" ")>=0}function u(e,t){var r=h(e),n=r+t;c(r,t)||(e.className=n.substring(1))}function d(e,t){var r,n=h(e);c(e,t)&&(r=n.replace(" "+t+" "," "),e.className=r.substring(1,r.length-1))}function h(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r},void 0===(o="function"==typeof n?n.call(t,r,t,e):n)||(e.exports=o)}}]);
//# sourceMappingURL=413.js.map