import{j as R,k as b,l as k,s as T,m as j,n as $,q as M,x as q,y as E,z as K,A as o,B as G,C as U,_ as J,D as Q,E as H,G as W,c as u,a as l,b as g,w as S,t as f,i as h,F as I,r as V,e as L,g as X,o as _,d as D,p as Y,f as Z}from"./BK700Axc.js";const A=a=>a==="defer"||a===!1;function z(...a){var O;const n=typeof a[a.length-1]=="string"?a.pop():void 0;typeof a[0]!="string"&&a.unshift(n);let[t,y,e={}]=a;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof y!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=R(),r=y,F=()=>b.value,N=()=>s.isHydrating?s.payload.data[t]:s.static.data[t];e.server=e.server??!0,e.default=e.default??F,e.getCachedData=e.getCachedData??N,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??b.deep,e.dedupe=e.dedupe??"cancel";const w=()=>e.getCachedData(t,s)!=null;if(!s._asyncData[t]||!e.immediate){(O=s.payload._errors)[t]??(O[t]=b.errorValue);const m=e.deep?k:T;s._asyncData[t]={data:m(e.getCachedData(t,s)??e.default()),pending:k(!w()),error:j(s.payload._errors,t),status:k("idle"),_default:e.default}}const c={...s._asyncData[t]};delete c._default,c.refresh=c.execute=(m={})=>{if(s._asyncDataPromises[t]){if(A(m.dedupe??e.dedupe))return s._asyncDataPromises[t];s._asyncDataPromises[t].cancelled=!0}if((m._initial||s.isHydrating&&m._initial!==!1)&&w())return Promise.resolve(e.getCachedData(t,s));c.pending.value=!0,c.status.value="pending";const v=new Promise((x,d)=>{try{x(r(s))}catch(B){d(B)}}).then(async x=>{if(v.cancelled)return s._asyncDataPromises[t];let d=x;e.transform&&(d=await e.transform(x)),e.pick&&(d=te(d,e.pick)),s.payload.data[t]=d,c.data.value=d,c.error.value=b.errorValue,c.status.value="success"}).catch(x=>{if(v.cancelled)return s._asyncDataPromises[t];c.error.value=K(x),c.data.value=o(e.default()),c.status.value="error"}).finally(()=>{v.cancelled||(c.pending.value=!1,delete s._asyncDataPromises[t])});return s._asyncDataPromises[t]=v,s._asyncDataPromises[t]},c.clear=()=>ee(s,t);const p=()=>c.refresh({_initial:!0}),i=e.server!==!1&&s.payload.serverRendered;{const m=G();if(m&&!m._nuxtOnBeforeMountCbs){m._nuxtOnBeforeMountCbs=[];const d=m._nuxtOnBeforeMountCbs;$(()=>{d.forEach(B=>{B()}),d.splice(0,d.length)}),M(()=>d.splice(0,d.length))}i&&s.isHydrating&&(c.error.value||w())?(c.pending.value=!1,c.status.value=c.error.value?"error":"success"):m&&(s.payload.serverRendered&&s.isHydrating||e.lazy)&&e.immediate?m._nuxtOnBeforeMountCbs.push(p):e.immediate&&p();const v=U();if(e.watch){const d=q(e.watch,()=>c.refresh());v&&E(d)}const x=s.hook("app:data:refresh",async d=>{(!d||d.includes(t))&&await c.refresh()});v&&E(x)}const C=Promise.resolve(s._asyncDataPromises[t]).then(()=>c);return Object.assign(C,c),C}function ee(a,n){n in a.payload.data&&(a.payload.data[n]=void 0),n in a.payload._errors&&(a.payload._errors[n]=b.errorValue),a._asyncData[n]&&(a._asyncData[n].data.value=void 0,a._asyncData[n].error.value=b.errorValue,a._asyncData[n].pending.value=!1,a._asyncData[n].status.value="idle"),n in a._asyncDataPromises&&(a._asyncDataPromises[n]&&(a._asyncDataPromises[n].cancelled=!0),a._asyncDataPromises[n]=void 0)}function te(a,n){const t={};for(const y of n)t[y]=a[y];return t}const P=a=>(Y("data-v-d06c14b6"),a=a(),Z(),a),se={class:"hidden img_box banner md:flex justify-center items-center"},ae={class:"text-white text-2xl font-semibold"},re={class:"hover:text-yellow-400 transition-all duration-300"},ne=P(()=>l("span",null," / ",-1)),oe={class:"hover:text-yellow-400 transition-all duration-300"},ce=P(()=>l("span",null," / ",-1)),le={class:"container mx-auto px-5 py-20"},ie={class:"max-w-5xl mx-auto text-center"},de={class:"text-center text-2xl lg:text-3xl font-semibold mb-5"},ue={class:"text-xl font-medium mb-5"},_e=["src","alt"],me={key:0,class:"text-center text-3xl font-semibold mb-5"},fe={key:1,class:"max-w-5xl mx-auto text-center"},he=["src"],ye={key:2,class:"text-center text-3xl font-semibold mb-5"},pe={key:3},xe=["src"],ge={key:4,class:"text-center text-3xl font-semibold mb-5"},ve={key:5},De=["src"],we={key:6,class:"text-center text-3xl font-semibold mb-5"},be=["innerHTML"],Ce={class:"container mx-auto px-5 py-10 md:py-20"},Pe=P(()=>l("h2",{class:"text-center text-3xl font-semibold mb-8"},"推廌搭配安卓機",-1)),Be={class:"lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8"},ke=["src","alt"],Se={class:"text-lg font-medium mb-5"},Ie=P(()=>l("hr",{class:"mb-5"},null,-1)),Ve={class:"px-2 py-1"},Fe={class:"px-2 py-1"},Ne={class:"px-2 py-1"},Oe={class:"px-2 py-1"},Ee={__name:"[id]",async setup(a){let n,t;const y=Q(),e=y.params.id,{data:s}=([n,t]=H(()=>z("multiMediasList",()=>$fetch("https://admin.meimai.com.tw/api/multimedia"))),n=await n,t(),n),{data:r}=([n,t]=H(()=>z("carFrameInfo",()=>$fetch(`https://admin.meimai.com.tw/api/carframe/${e}`))),n=await n,t(),n);return W({ogImage:`/carFrame/${y.params.id}.png`}),console.log(r),(F,N)=>{const w=L,c=L,p=X("font-awesome-icon");return _(),u("section",null,[l("div",se,[l("p",ae,[l("span",re,[g(w,{to:"/"},{default:S(()=>[D("首頁")]),_:1})]),ne,l("span",oe,[g(w,{to:"/carFrame"},{default:S(()=>[D("安卓車框")]),_:1})]),ce,l("span",null,f(o(r).result.brand_name),1)])]),l("div",le,[l("div",ie,[l("h2",de,f(o(r).result.brand_name)+" "+f(o(r).result.car_name)+f(o(r).result.name),1),l("p",ue," 年份 / "+f(o(r).result.year_start)+"~"+f(o(r).result.year_end)+" 、 尺寸 / "+f(o(r).result.size)+"吋 ",1),l("img",{src:o(r).result.img,alt:o(r).result.name,class:"w-full mb-10"},null,8,_e)]),o(r).result.img3?(_(),u("h2",me," 車框概觀 ")):h("",!0),o(r).result.img3?(_(),u("div",fe,[l("img",{src:o(r).result.img3,class:"w-full mb-10"},null,8,he)])):h("",!0),o(r).result.img1&&o(r).result.img1[0]!=""?(_(),u("h2",ye," 車框配件 ")):h("",!0),o(r).result.img1&&Array.isArray(o(r).result.img1)?(_(),u("span",pe,[(_(!0),u(I,null,V(o(r).result.img1,i=>(_(),u("div",{key:i,class:"max-w-5xl mx-auto text-center"},[i?(_(),u("img",{key:0,src:i,class:"w-full mb-10"},null,8,xe)):h("",!0)]))),128))])):h("",!0),o(r).result.img2&&o(r).result.img2[0]!=""?(_(),u("h2",ge," 實際安裝 ")):h("",!0),o(r).result.img2&&Array.isArray(o(r).result.img2)?(_(),u("span",ve,[(_(!0),u(I,null,V(o(r).result.img2,i=>(_(),u("div",{key:i,class:"max-w-5xl mx-auto text-center"},[i?(_(),u("img",{key:0,src:i,class:"w-full mb-10"},null,8,De)):h("",!0)]))),128))])):h("",!0),o(r).result.content?(_(),u("h2",we," 產品說明 ")):h("",!0),l("div",{innerHTML:o(r).result.content},null,8,be)]),l("div",Ce,[Pe,l("div",Be,[(_(!0),u(I,null,V(o(s).result,(i,C)=>(_(),u("div",{key:C,class:"col-span-1 py-5"},[g(c,{to:{name:"multimediaDetail-id",query:{id:i.id}}},{default:S(()=>[l("img",{src:i.img,alt:i.name,class:"w-full"},null,8,ke)]),_:2},1032,["to"]),l("h2",Se,[g(p,{class:"text-yellow-400 mr-3",icon:["fas","arrow-alt-circle-right"]}),D(f(i.name),1)]),Ie,l("p",Ve,[g(p,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),D("硬體："+f(i.hard_drive),1)]),l("p",Fe,[g(p,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),D("記憶體："+f(i.ram),1)]),l("p",Ne,[g(p,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),D("解析度："+f(i.resolution),1)]),l("p",Oe,[g(p,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),D("建議售價："+f(i.price),1)])]))),128))])])])}}},Le=J(Ee,[["__scopeId","data-v-d06c14b6"]]);export{Le as default};
