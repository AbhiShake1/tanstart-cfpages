import{H3Event as J,getRequestURL as De,getResponseHeaders as Pe,getCookie as Fe,setCookie as Ie,getRequestWebStream as Le,getRequestHeaders as Oe,getResponseStatus as ze,eventHandler as Be}from"h3";import{AsyncLocalStorage as Ne}from"node:async_hooks";import{isPlainArray as We,isPlainObject as ie,defer as Ue,useRouter as $,pick as Je,ScriptOnce as Q,TSR_DEFERRED_PROMISE as Y,createControlledPromise as Qe,RouterProvider as Ge,createMemoryHistory as Ke,useRouterState as M,createRootRoute as Ve,Outlet as Ze,ScrollRestoration as Xe,createFileRoute as Ye,lazyRouteComponent as et,lazyFn as tt,createRouter as rt}from"@tanstack/react-router";import{jsxs as A,Fragment as R,jsx as d}from"react/jsx-runtime";import*as q from"react";import{createContext as nt,createElement as ce}from"react";import{Transform as st,PassThrough as at}from"node:stream";import z from"react-dom/server";class H{constructor(){this.cache=new Map}static create(){return H.instance||(H.instance=new H),H.instance}createContext(t,r){const n=nt(r);return this.cache.set(t,n),n}get(t,r){return this.cache.get(t)||this.createContext(t,r)}}const ue=H.create();function ot(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var U,ee;function it(){if(ee)return U;ee=1;const e={},t=e.hasOwnProperty,r=(i,u)=>{for(const _ in i)t.call(i,_)&&u(_,i[_])},n=(i,u)=>(u&&r(u,(_,w)=>{i[_]=w}),i),o=(i,u)=>{const _=i.length;let w=-1;for(;++w<_;)u(i[w])},a=i=>"\\u"+("0000"+i).slice(-4),s=(i,u)=>{let _=i.toString(16);return u?_:_.toUpperCase()},c=e.toString,l=Array.isArray,f=i=>typeof Buffer=="function"&&Buffer.isBuffer(i),h=i=>c.call(i)=="[object Object]",g=i=>typeof i=="string"||c.call(i)=="[object String]",S=i=>typeof i=="number"||c.call(i)=="[object Number]",v=i=>typeof i=="bigint",ge=i=>typeof i=="function",ye=i=>c.call(i)=="[object Map]",Se=i=>c.call(i)=="[object Set]",be={"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},we=/[\\\b\f\n\r\t]/,xe=/[0-9]/,Re=/[\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,ve=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^]/g,Ce=/([\uD800-\uDBFF][\uDC00-\uDFFF])|([\uD800-\uDFFF])|(['"`])|[^ !#-&\(-\[\]-_a-~]/g,b=(i,u)=>{const _=()=>{N=F,++u.indentLevel,F=u.indent.repeat(u.indentLevel)},w={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"	",indentLevel:0,__inline1__:!1,__inline2__:!1},x=u&&u.json;x&&(w.quotes="double",w.wrap=!0),u=n(w,u),u.quotes!="single"&&u.quotes!="double"&&u.quotes!="backtick"&&(u.quotes="single");const P=u.quotes=="double"?'"':u.quotes=="backtick"?"`":"'",C=u.compact,T=u.lowercaseHex;let F=u.indent.repeat(u.indentLevel),N="";const Ee=u.__inline1__,I=u.__inline2__,k=C?"":`
`;let m,L=!0;const Te=u.numbers=="binary",ke=u.numbers=="octal",He=u.numbers=="decimal",Ae=u.numbers=="hexadecimal";if(x&&i&&ge(i.toJSON)&&(i=i.toJSON()),!g(i)){if(ye(i))return i.size==0?"new Map()":(C||(u.__inline1__=!0,u.__inline2__=!1),"new Map("+b(Array.from(i),u)+")");if(Se(i))return i.size==0?"new Set()":"new Set("+b(Array.from(i),u)+")";if(f(i))return i.length==0?"Buffer.from([])":"Buffer.from("+b(Array.from(i),u)+")";if(l(i))return m=[],u.wrap=!0,Ee&&(u.__inline1__=!1,u.__inline2__=!0),I||_(),o(i,p=>{L=!1,I&&(u.__inline2__=!1),m.push((C||I?"":F)+b(p,u))}),L?"[]":I?"["+m.join(", ")+"]":"["+k+m.join(","+k)+k+(C?"":N)+"]";if(S(i)||v(i)){if(x)return JSON.stringify(Number(i));let p;if(He)p=String(i);else if(Ae){let y=i.toString(16);T||(y=y.toUpperCase()),p="0x"+y}else Te?p="0b"+i.toString(2):ke&&(p="0o"+i.toString(8));return v(i)?p+"n":p}else return v(i)?x?JSON.stringify(Number(i)):i+"n":h(i)?(m=[],u.wrap=!0,_(),r(i,(p,y)=>{L=!1,m.push((C?"":F)+b(p,u)+":"+(C?"":" ")+b(y,u))}),L?"{}":"{"+k+m.join(","+k)+k+(C?"":N)+"}"):x?JSON.stringify(i)||"null":String(i)}const $e=u.escapeEverything?ve:Ce;return m=i.replace($e,(p,y,V,O,je,Me)=>{if(y){if(u.minimal)return y;const Z=y.charCodeAt(0),X=y.charCodeAt(1);if(u.es6){const qe=(Z-55296)*1024+X-56320+65536;return"\\u{"+s(qe,T)+"}"}return a(s(Z,T))+a(s(X,T))}if(V)return a(s(V.charCodeAt(0),T));if(p=="\0"&&!x&&!xe.test(Me.charAt(je+1)))return"\\0";if(O)return O==P||u.escapeEverything?"\\"+O:O;if(we.test(p))return be[p];if(u.minimal&&!Re.test(p))return p;const W=s(p.charCodeAt(0),T);return x||W.length>2?a(W):"\\x"+("00"+W).slice(-2)}),P=="`"&&(m=m.replace(/\$\{/g,"\\${")),u.isScriptContext&&(m=m.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,x?"\\u003C!--":"\\x3C!--")),u.wrap&&(m=P+m+P),m};return b.version="3.0.2",U=b,U}var ct=it();const D=ot(ct);var ut="Invariant failed";function lt(e,t){if(!e)throw new Error(ut)}function dt(e,t,r){if(!r.router.isServer)return t;r.match.extracted=r.match.extracted||[];const n=r.match.extracted;return G(t,(a,s)=>{const c=a instanceof ReadableStream?"stream":a instanceof Promise?"promise":void 0;if(c==="stream"){const[l,f]=a.tee(),h={dataType:e,type:c,path:s,id:n.length,matchIndex:r.match.index,streamState:_t({stream:f})};return n.push(h),l}else if(c==="promise"){Ue(a);const l={dataType:e,type:c,path:s,id:n.length,matchIndex:r.match.index,promiseState:a};n.push(l)}return a})}function ft(e){const t=$(),r=t.state.matches[e.matchIndex];if(!t.isServer)return null;const n=r.extracted,[o,a]=["__beforeLoadContext","loaderData"].map(s=>n?n.reduce((c,l)=>l.dataType!==s?K(c,["temp",...l.path],void 0):c,{temp:r[s]}).temp:r[s]);if(o!==void 0||a!==void 0||n?.length){const s=`__TSR__.initMatch(${D({index:e.matchIndex,__beforeLoadContext:t.options.transformer.stringify(o),loaderData:t.options.transformer.stringify(a),extracted:n?Object.fromEntries(n.map(c=>[c.id,Je(c,["type","path"])])):{}},{isScriptContext:!0,wrap:!0,json:!0})})`;return A(R,{children:[d(Q,{children:s}),n?n.map(c=>c.type==="stream"?d(mt,{entry:c},c.id):d(ht,{entry:c},c.id)):null]})}return null}function G(e,t,r=[]){if(We(e))return e.map((o,a)=>G(o,t,[...r,`${a}`]));if(ie(e)){const o={};for(const a in e)o[a]=G(e[a],t,[...r,a]);return o}const n=t(e,r);return n!==e?n:e}function ht({entry:e}){return d("div",{className:"tsr-once",children:d(q.Suspense,{fallback:null,children:d(pt,{entry:e})})})}function pt({entry:e}){const t=$();if(e.promiseState[Y].status==="pending")throw e.promiseState;const r=`__TSR__.resolvePromise(${D({...e,value:e.promiseState[Y]},{isScriptContext:!0,wrap:!0,json:!0})})`;return t.injectScript(r),d(R,{})}function mt({entry:e}){lt(e.streamState);const t=$();return d(le,{streamState:e.streamState,children:r=>{const n=r?`__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.enqueue(new TextEncoder().encode(${D(r.toString(),{isScriptContext:!0,wrap:!0,json:!0})}))`:`__TSR__.matches[${e.matchIndex}].extracted[${e.id}].value.controller.close()`;return t.injectScript(n),d(R,{})}})}function _t({stream:e}){const t={promises:[]},r=e.getReader(),n=o=>(t.promises[o]=Qe(),r.read().then(({done:a,value:s})=>{if(a){t.promises[o].resolve(null),r.releaseLock();return}return t.promises[o].resolve(s),n(o+1)}));return n(0).catch(o=>{console.error("stream read error",o)}),t}function le({streamState:e,children:t,__index:r=0}){const n=e.promises[r];if(!n)return null;if(n.status==="pending")throw n;const o=n.value;return A(R,{children:[t(o),d("div",{className:"tsr-once",children:d(q.Suspense,{fallback:null,children:d(le,{streamState:e,__index:r+1,children:t})})})]})}function K(e,t,r){if(t.length===0)return r;const[n,...o]=t;return Array.isArray(e)?e.map((a,s)=>s===Number(n)?K(a,o,r):a):ie(e)?{...e,[n]:K(e[n],o,r)}:e}function te(e){e.router.AfterEachMatch=ft,e.router.serializer=n=>D(n,{isScriptContext:!0,wrap:!0,json:!0});const t=ue.get("TanStackRouterHydrationContext",{}),r=q.useMemo(()=>{var n,o;return{router:e.router.dehydrate(),payload:(o=(n=e.router.options).dehydrate)==null?void 0:o.call(n)}},[e.router]);return d(t.Provider,{value:r,children:d(Ge,{router:e.router})})}function gt(e={}){let t,r=!1;const n=s=>{if(t&&t!==s)throw new Error("Context conflict")};let o;if(e.asyncContext){const s=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;s?o=new s:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const a=()=>{if(o){const s=o.getStore();if(s!==void 0)return s}return t};return{use:()=>{const s=a();if(s===void 0)throw new Error("Context is not available");return s},tryUse:()=>a(),set:(s,c)=>{c||n(s),t=s,r=!0},unset:()=>{t=void 0,r=!1},call:(s,c)=>{n(s),t=s;try{return o?o.run(s,c):c()}finally{r||(t=void 0)}},async callAsync(s,c){t=s;const l=()=>{t=s},f=()=>t===s?l:void 0;se.add(f);try{const h=o?o.run(s,c):c();return r||(t=void 0),await h}finally{se.delete(f)}}}}function yt(e={}){const t={};return{get(r,n={}){return t[r]||(t[r]=gt({...e,...n})),t[r]}}}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},re="__unctx__",St=B[re]||(B[re]=yt()),bt=(e,t={})=>St.get(e,t),ne="__unctx_async_handlers__",se=B[ne]||(B[ne]=new Set);function wt(e){let t;const r=fe(e),n={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(r,{...n,body:e.node.req.body}):new Request(r,{...n,get body(){return t||(t=Et(e),t)}})}function xt(e){return e.web??={request:wt(e),url:fe(e)},e.web.request}function Rt(){return kt()}const de=Symbol("$HTTPEvent");function vt(e){return typeof e=="object"&&(e instanceof J||e?.[de]instanceof J||e?.__is_event__===!0)}function E(e){return function(...t){let r=t[0];if(vt(r))t[0]=r instanceof J||r.__is_event__?r:r[de];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(r=Rt(),!r)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");t.unshift(r)}return e(...t)}}const pr=E(Oe),fe=E(De),mr=E(ze),Ct=E(Pe),_r=E(Fe),gr=E(Ie),Et=E(Le);function Tt(){return bt("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:Ne})}function kt(){return Tt().use().event}function Ht(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function ae(...e){return e.reduce((t,r)=>{const n=Ht(r);for(const[o,a]of n.entries())t.set(o,a);return t},new Headers)}function At({createRouter:e,getRouterManifest:t}){return r=>Be(async n=>{const o=xt(n),a=new URL(o.url),s=a.href.replace(a.origin,""),c=Ke({initialEntries:[s]}),l=e();l.serializeLoaderData=dt,t&&(l.manifest=t()),l.update({history:c}),await l.load();const f=$t({event:n,router:l});return await r({request:o,router:l,responseHeaders:f})})}function $t(e){e.event.__tsrHeadersSent=!0;let t=ae(Ct(e.event),{"Content-Type":"text/html; charset=UTF-8"},...e.router.state.matches.map(n=>n.headers));const{redirect:r}=e.router.state;return r&&(t=ae(t,r.headers,{Location:r.href})),t}var jt=" daum[ /]| deusu/| yadirectfetcher|(?:^|[^g])news(?!sapphire)|(?<! (?:channel/|google/))google(?!(app|/google| pixel))|(?<! cu)bots?(?:\\b|_)|(?<!(?:lib))http|(?<![hg]m)score|@[a-z][\\w-]+\\.|\\(\\)|\\.com\\b|\\btime/|^<|^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)|^[^ ]{50,}$|^\\d+\\b|^\\w*search\\b|^\\w+/[\\w\\(\\)]*$|^active|^ad muncher|^amaya|^avsdevicesdk/|^biglotron|^bot|^bw/|^clamav[ /]|^client/|^cobweb/|^custom|^ddg[_-]android|^discourse|^dispatch/\\d|^downcast/|^duckduckgo|^email|^facebook|^getright/|^gozilla/|^hobbit|^hotzonu|^hwcdn/|^igetter/|^jeode/|^jetty/|^jigsaw|^microsoft bits|^movabletype|^mozilla/5\\.0\\s[a-z\\.-]+$|^mozilla/\\d\\.\\d \\(compatible;?\\)$|^mozilla/\\d\\.\\d \\w*$|^navermailapp|^netsurf|^offline|^openai/|^owler|^php|^postman|^python|^rank|^read|^reed|^rest|^rss|^snapchat|^space bison|^svn|^swcd |^taringa|^thumbor/|^track|^w3c|^webbandit/|^webcopier|^wget|^whatsapp|^wordpress|^xenu link sleuth|^yahoo|^yandex|^zdm/\\d|^zoom marketplace/|^{{.*}}$|adscanner/|analyzer|archive|ask jeeves/teoma|audit|bit\\.ly/|bluecoat drtr|browsex|burpcollaborator|capture|catch|check\\b|checker|chrome-lighthouse|chromeframe|classifier|cloudflare|convertify|cookiehubscan|crawl|cypress/|dareboost|datanyze|dejaclick|detect|dmbrowser|download|evc-batch/|exaleadcloudview|feed|firephp|functionize|gomezagent|headless|httrack|hubspot marketing grader|hydra|ibisbrowser|images|infrawatch|insight|inspect|iplabel|ips-agent|java(?!;)|jsjcw_scanner|library|linkcheck|mail\\.ru/|manager|measure|neustar wpm|node|nutch|offbyone|optimize|pageburst|pagespeed|parser|perl|phantomjs|pingdom|powermarks|preview|proxy|ptst[ /]\\d|reputation|resolver|retriever|rexx;|rigor|rss\\b|scanner\\.|scrape|server|sogou|sparkler/|speedcurve|spider|splash|statuscake|supercleaner|synapse|synthetic|tools|torrent|trace|transcoder|url|validator|virtuoso|wappalyzer|webglance|webkit2png|whatcms/|zgrab",Mt=/bot|crawl|http|lighthouse|scan|search|spider/i,j;function qt(){if(j instanceof RegExp)return j;try{j=new RegExp(jt,"i")}catch{j=Mt}return j}function oe(e){return!!e&&qt().test(e)}function Dt(e){const t=he(()=>e.injectedHtml.map(r=>r()).join(""));return new st({transform(r,n,o){t.transform(r,this.push.bind(this)).then(()=>o()).catch(a=>o(a))},flush(r){t.flush(this.push.bind(this)).then(()=>r()).catch(n=>r(n))}})}function Pt(e){const t=he(()=>e.injectedHtml.map(n=>n()).join("")),r=new TextEncoder;return new TransformStream({transform(n,o){return t.transform(n,a=>(o.enqueue(r.encode(a)),!0))},flush(n){return t.flush(o=>(n.enqueue(o),!0))}})}const Ft=/(<body)/,It=/(<\/body>)/,Lt=/(<\/html>)/,Ot=/(<\/[a-zA-Z][\w:.-]*?>)/g,zt=new TextDecoder;function he(e){let t=!1,r="",n="";return{async transform(o,a){const s=r+zt.decode(o),c=s.match(Ft),l=s.match(It),f=s.match(Lt);try{if(c&&(t=!0),!t){a(s),r="";return}const h=e();if(l&&f&&l.index<f.index){const g=l.index+l[0].length,S=f.index+f[0].length,v=s.slice(0,g)+h+s.slice(g,S)+s.slice(S);a(v),r=""}else{let g,S=0;for(;(g=Ot.exec(s))!==null;)S=g.index+g[0].length;if(S>0){const v=s.slice(0,S)+h+n;a(v),r=s.slice(S)}else r=s,n+=h}}catch(h){throw console.error("Error transforming HTML:",h),h}},async flush(o){r&&o(r)}}}const Bt=async({request:e,router:t,responseHeaders:r})=>{if(typeof z.renderToReadableStream=="function"){const n=await z.renderToReadableStream(d(te,{router:t}),{signal:e.signal});oe(e.headers.get("User-Agent"))&&await n.allReady;const a=[Pt(t)].reduce((s,c)=>s.pipeThrough(c),n);return new Response(a,{status:t.state.statusCode,headers:r})}if(typeof z.renderToPipeableStream=="function"){const n=new at;try{const s=z.renderToPipeableStream(d(te,{router:t}),{...oe(e.headers.get("User-Agent"))?{onAllReady(){s.pipe(n)}}:{onShellReady(){s.pipe(n)}},onError:(c,l)=>{console.log("Error in renderToPipeableStream:",c,l)}})}catch(s){console.log("Error in renderToPipeableStream:",s)}const a=[Dt(t)].reduce((s,c)=>s.pipe(c),n);return new Response(a,{status:t.state.statusCode,headers:r})}throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.")},Nt=()=>({routes:{__root__:{filePath:"__root.tsx",children:["/"],preloads:["/_build/assets/client-DUenbMxy.js","/_build/assets/client-BZlGFGjv.js"]},"/":{filePath:"index.tsx"}}});function Wt(e){return globalThis.MANIFEST[e]}function Ut(){const e=Nt(),t=e.routes.__root__=e.routes.__root__||{};t.assets=t.assets||[];const r=Wt("client");return t.assets.push({tag:"script",attrs:{src:r.inputs[r.handler]?.output.path,type:"module",async:!0,suppressHydrationWarning:!0}}),e}function Jt(){const e=Ut();return{...e,routes:Object.fromEntries(Object.entries(e.routes).map(([t,r])=>{const{preloads:n,assets:o}=r;return[t,{preloads:n,assets:o}]}))}}function pe({tag:e,attrs:t,children:r}){switch(e){case"title":return d("title",{...t,suppressHydrationWarning:!0,children:r});case"meta":return d("meta",{...t,suppressHydrationWarning:!0});case"link":return d("link",{...t,suppressHydrationWarning:!0});case"style":return d("style",{...t,dangerouslySetInnerHTML:{__html:r}});case"script":return t&&t.src?d("script",{...t,suppressHydrationWarning:!0}):typeof r=="string"?d("script",{...t,dangerouslySetInnerHTML:{__html:r},suppressHydrationWarning:!0}):null;default:return null}}const Qt=()=>{const e=$(),t=M({select:a=>a.matches.map(s=>s.meta).filter(Boolean)}),r=q.useMemo(()=>{const a=[],s={};let c;return[...t].reverse().forEach(l=>{[...l].reverse().forEach(f=>{if(f)if(f.title)c||(c={tag:"title",children:f.title});else{const h=f.name??f.property;if(h){if(s[h])return;s[h]=!0}a.push({tag:"meta",attrs:{...f}})}})}),c&&a.push(c),a.reverse(),a},[t]),n=M({select:a=>a.matches.map(s=>s.links).filter(Boolean).flat(1).map(s=>({tag:"link",attrs:{...s}})),structuralSharing:!0}),o=M({select:a=>{const s=[];return a.matches.map(c=>e.looseRoutesById[c.routeId]).forEach(c=>{var l,f,h;return(h=(f=(l=e.manifest)==null?void 0:l.routes[c.id])==null?void 0:f.preloads)==null?void 0:h.filter(Boolean).forEach(g=>{s.push({tag:"link",attrs:{rel:"modulepreload",href:g}})})}),s},structuralSharing:!0});return Vt([...r,...o,...n],a=>JSON.stringify(a))},Gt=()=>{const e=$(),t=Qt(),r=q.useContext(ue.get("TanStackRouterHydrationContext",{}));return A(R,{children:[t.map((n,o)=>ce(pe,{...n,key:`tsr-meta-${JSON.stringify(n)}`})),A(R,{children:[d(Q,{log:!1,children:'__TSR__={matches:[],streamedValues:{},queue:[],runQueue:()=>{let e=!1;__TSR__.queue=__TSR__.queue.filter((_=>!_()||(e=!0,!1))),e&&__TSR__.runQueue()},initMatch:e=>{__TSR__.queue.push((()=>(__TSR__.matches[e.index]||(__TSR__.matches[e.index]=e,Object.entries(e.extracted).forEach((([e,_])=>{if("stream"===_.type){let e;_.value=new ReadableStream({start(_){e=_}}),_.value.controller=e}else if("promise"===_.type){let e,t;_.value=new Promise(((_,u)=>{e=_,t=u})),_.resolve=e,_.reject=t}}))),!0))),__TSR__.runQueue()},resolvePromise:e=>{__TSR__.queue.push((()=>{const _=__TSR__.matches[e.matchIndex];if(_){const t=_.extracted[e.id];if(t)return t.resolve(e.value.data),!0}return!1})),__TSR__.runQueue()},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach((e=>{e.remove()}))}};'}),d(Q,{children:`__TSR__.dehydrated = ${D(e.options.transformer.stringify(r),{isScriptContext:!0,wrap:!0,json:!0})}`})]})]})},Kt=()=>d(R,{children:Gt()});function Vt(e,t){const r=new Set;return e.filter(n=>{const o=t(n);return r.has(o)?!1:(r.add(o),!0)})}const Zt=()=>{const e=$(),t=M({select:o=>{const a=[];return o.matches.map(s=>e.looseRoutesById[s.routeId]).forEach(s=>{var c,l,f;return(f=(l=(c=e.manifest)==null?void 0:c.routes[s.id])==null?void 0:l.assets)==null?void 0:f.filter(h=>h.tag==="script").forEach(h=>{a.push({tag:"script",attrs:h.attrs,children:h.children})})}),a},structuralSharing:!0}),{scripts:r}=M({select:o=>({scripts:o.matches.map(a=>a.scripts).flat(1).filter(Boolean).map(({children:a,...s})=>({tag:"script",attrs:{...s,suppressHydrationWarning:!0},children:a}))})}),n=[...r,...t];return d(R,{children:n.map((o,a)=>ce(pe,{...o,key:`tsr-scripts-${o.tag}-${a}`}))})},me=Ve({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"TanStack Start Starter"}]}),component:Xt});function Xt(){return d(Yt,{children:d(Ze,{})})}function Yt({children:e}){return A("html",{children:[d("head",{children:d(Kt,{})}),A("body",{children:[e,d(Xe,{}),d(Zt,{})]})]})}const er=()=>import("./index-BfnCCfuH.js"),tr=()=>import("./index-BfnCCfuH.js"),_e=Ye("/")({component:et(tr,"component",()=>_e.ssr),loader:tt(er,"loader")}),rr=_e.update({id:"/",path:"/",getParentRoute:()=>me}),nr={IndexRoute:rr},sr=me._addFileChildren(nr)._addFileTypes();function ar(){return rt({routeTree:sr})}const yr=At({createRouter:ar,getRouterManifest:Jt})(Bt);export{_e as R,mr as a,kt as b,pr as c,_r as d,Wt as g,yr as h,lt as i,ae as m,gr as s,xt as t};