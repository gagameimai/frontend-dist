import{j as R,k as b,l as V,s as T,m as j,n as M,q as $,x as q,y as F,z as K,A as o,B as G,C as U,_ as J,D as Q,E as H,G as W,c as u,a as c,b as x,w as k,t as f,i as h,F as S,r as I,e as L,g as X,o as _,d as v,p as Y,f as Z}from"./BXL3-WBY.js";const A=a=>a==="defer"||a===!1;function z(...a){var E;const n=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(n);let[t,w,e={}]=a;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof w!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=R(),r=w,N=()=>b.value,O=()=>s.isHydrating?s.payload.data[t]:s.static.data[t];e.server=e.server??!0,e.default=e.default??N,e.getCachedData=e.getCachedData??O,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??b.deep,e.dedupe=e.dedupe??"cancel";const D=()=>e.getCachedData(t,s)!=null;if(!s._asyncData[t]||!e.immediate){(E=s.payload._errors)[t]??(E[t]=b.errorValue);const m=e.deep?V:T;s._asyncData[t]={data:m(e.getCachedData(t,s)??e.default()),pending:V(!D()),error:j(s.payload._errors,t),status:V("idle"),_default:e.default}}const l={...s._asyncData[t]};delete l._default,l.refresh=l.execute=(m={})=>{if(s._asyncDataPromises[t]){if(A(m.dedupe??e.dedupe))return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if((m._initial||s.isHydrating&&m._initial!==!1)&&D())return Promise.resolve(e.getCachedData(t,s));l.pending.value=!0,l.status.value="pending";const g=new Promise((p,d)=>{try{p(r(s))}catch(B){d(B)}}).then(async p=>{if(g.cancelled)return s._asyncDataPromises[t];let d=p;e.transform&&(d=await e.transform(p)),e.pick&&(d=te(d,e.pick)),s.payload.data[t]=d,l.data.value=d,l.error.value=b.errorValue,l.status.value="success"}).catch(p=>{if(g.cancelled)return s._asyncDataPromises[t];l.error.value=K(p),l.data.value=o(e.default()),l.status.value="error"}).finally(()=>{g.cancelled||(l.pending.value=!1,delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=g,s._asyncDataPromises[t]},l.clear=()=>ee(s,t);const y=()=>l.refresh({_initial:!0}),i=e.server!==!1&&s.payload.serverRendered;{const m=G();if(m&&!m._nuxtOnBeforeMountCbs){m._nuxtOnBeforeMountCbs=[];const d=m._nuxtOnBeforeMountCbs;M(()=>{d.forEach(B=>{B()}),d.splice(0,d.length)}),$(()=>d.splice(0,d.length))}i&&s.isHydrating&&(l.error.value||D())?(l.pending.value=!1,l.status.value=l.error.value?"error":"success"):m&&(s.payload.serverRendered&&s.isHydrating||e.lazy)&&e.immediate?m._nuxtOnBeforeMountCbs.push(y):e.immediate&&y();const g=U();if(e.watch){const d=q(e.watch,()=>l.refresh());g&&F(d)}const p=s.hook("app:data:refresh",async d=>{(!d||d.includes(t))&&await l.refresh()});g&&F(p)}const C=Promise.resolve(s._asyncDataPromises[t]).then(()=>l);return Object.assign(C,l),C}function ee(a,n){n in a.payload.data&&(a.payload.data[n]=void 0),n in a.payload._errors&&(a.payload._errors[n]=b.errorValue),a._asyncData[n]&&(a._asyncData[n].data.value=void 0,a._asyncData[n].error.value=b.errorValue,a._asyncData[n].pending.value=!1,a._asyncData[n].status.value="idle"),n in a._asyncDataPromises&&(a._asyncDataPromises[n]&&(a._asyncDataPromises[n].cancelled=!0),a._asyncDataPromises[n]=void 0)}function te(a,n){const t={};for(const w of n)t[w]=a[w];return t}const P=a=>(Y("data-v-578418ec"),a=a(),Z(),a),se={class:"hidden img_box banner md:flex justify-center items-center"},ae={class:"text-white text-2xl font-semibold"},re={class:"hover:text-yellow-400 transition-all duration-300"},ne=P(()=>c("span",null," / ",-1)),oe={class:"hover:text-yellow-400 transition-all duration-300"},le=P(()=>c("span",null," / ",-1)),ce={class:"container mx-auto px-5 py-20"},ie={class:"max-w-5xl mx-auto text-center"},de={class:"text-center text-2xl lg:text-3xl font-semibold mb-5"},ue={class:"text-xl font-medium mb-5"},_e=["src","alt"],me={key:0,class:"text-center text-3xl font-semibold mb-5"},fe={key:1,class:"max-w-5xl mx-auto text-center"},he=["src"],ye={key:2,class:"text-center text-3xl font-semibold mb-5"},pe={key:3},xe=["src"],ge={key:4,class:"text-center text-3xl font-semibold mb-5"},ve={key:5},we=["src"],De={key:6,class:"text-center text-3xl font-semibold mb-5"},be=["innerHTML"],Ce={class:"container mx-auto px-5 py-10 md:py-20"},Pe=P(()=>c("h2",{class:"text-center text-3xl font-semibold mb-8"},"推廌搭配安卓機",-1)),Be={class:"lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8"},Ve=["src","alt"],ke={class:"text-lg font-medium mb-5"},Se=P(()=>c("hr",{class:"mb-5"},null,-1)),Ie={class:"px-2 py-1"},Ne={class:"px-2 py-1"},Oe={class:"px-2 py-1"},Ee={class:"px-2 py-1"},Fe={__name:"[id]",async setup(a){let n,t;const e=Q().params.id,{data:s}=([n,t]=H(()=>z("multiMediasList",()=>$fetch("https://admin.meimai.com.tw/api/multimedia"))),n=await n,t(),n),{data:r}=([n,t]=H(()=>z("carFrameInfo",()=>$fetch(`https://admin.meimai.com.tw/api/carframe/${e}`))),n=await n,t(),n);return W({ogImage:r._rawValue.result.img?r._rawValue.result.img:"/new_panel.png"}),(N,O)=>{const D=L,l=L,y=X("font-awesome-icon");return _(),u("section",null,[c("div",se,[c("p",ae,[c("span",re,[x(D,{to:"/"},{default:k(()=>[v("首頁")]),_:1})]),ne,c("span",oe,[x(D,{to:"/carFrame"},{default:k(()=>[v("安卓車框")]),_:1})]),le,c("span",null,f(o(r).result.brand_name),1)])]),c("div",ce,[c("div",ie,[c("h2",de,f(o(r).result.brand_name)+" "+f(o(r).result.car_name)+f(o(r).result.name),1),c("p",ue," 年份 / "+f(o(r).result.year_start)+"~"+f(o(r).result.year_end)+" 、 尺寸 / "+f(o(r).result.size)+"吋 ",1),c("img",{src:o(r).result.img,alt:o(r).result.name,class:"w-full mb-10"},null,8,_e)]),o(r).result.img3?(_(),u("h2",me," 車框概觀 ")):h("",!0),o(r).result.img3?(_(),u("div",fe,[c("img",{src:o(r).result.img3,class:"w-full mb-10"},null,8,he)])):h("",!0),o(r).result.img1&&o(r).result.img1[0]!=""?(_(),u("h2",ye," 車框配件 ")):h("",!0),o(r).result.img1&&Array.isArray(o(r).result.img1)?(_(),u("span",pe,[(_(!0),u(S,null,I(o(r).result.img1,i=>(_(),u("div",{key:i,class:"max-w-5xl mx-auto text-center"},[i?(_(),u("img",{key:0,src:i,class:"w-full mb-10"},null,8,xe)):h("",!0)]))),128))])):h("",!0),o(r).result.img2&&o(r).result.img2[0]!=""?(_(),u("h2",ge," 實際安裝 ")):h("",!0),o(r).result.img2&&Array.isArray(o(r).result.img2)?(_(),u("span",ve,[(_(!0),u(S,null,I(o(r).result.img2,i=>(_(),u("div",{key:i,class:"max-w-5xl mx-auto text-center"},[i?(_(),u("img",{key:0,src:i,class:"w-full mb-10"},null,8,we)):h("",!0)]))),128))])):h("",!0),o(r).result.content?(_(),u("h2",De," 產品說明 ")):h("",!0),c("div",{innerHTML:o(r).result.content},null,8,be)]),c("div",Ce,[Pe,c("div",Be,[(_(!0),u(S,null,I(o(s).result,(i,C)=>(_(),u("div",{key:C,class:"col-span-1 py-5"},[x(l,{to:{name:"multimediaDetail-id",query:{id:i.id}}},{default:k(()=>[c("img",{src:i.img,alt:i.name,class:"w-full"},null,8,Ve)]),_:2},1032,["to"]),c("h2",ke,[x(y,{class:"text-yellow-400 mr-3",icon:["fas","arrow-alt-circle-right"]}),v(f(i.name),1)]),Se,c("p",Ie,[x(y,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),v("硬體："+f(i.hard_drive),1)]),c("p",Ne,[x(y,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),v("記憶體："+f(i.ram),1)]),c("p",Oe,[x(y,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),v("解析度："+f(i.resolution),1)]),c("p",Ee,[x(y,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),v("建議售價："+f(i.price),1)])]))),128))])])])}}},Le=J(Fe,[["__scopeId","data-v-578418ec"]]);export{Le as default};
