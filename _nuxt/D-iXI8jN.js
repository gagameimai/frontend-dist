import{_ as x,c as n,a as t,b as o,w as m,F as f,r as u,e as g,g as w,o as l,d as i,t as d,p as v,f as y}from"./BK700Axc.js";const b={name:"fitting",data(){return{fittingList:[]}},mounted(){this.getFitting()},methods:{getFitting(){this.$axios.get("https://admin.meimai.com.tw/api/fitting").then(e=>{let a=e.data.result;a&&(this.fittingList=a)})}}},r=e=>(v("data-v-ee5f4c24"),e=e(),y(),e),L={class:"overflow-hidden"},k={class:"hidden img_box banner md:flex justify-center items-center"},F={class:"text-white text-2xl font-semibold flex"},I={class:"hover:text-yellow-400 transition-all duration-300"},N=r(()=>t("div",null," / ",-1)),S=r(()=>t("h1",{class:"text-white text-2xl font-semibold"},"車用配件",-1)),$={class:"container mx-auto px-5 py-20"},B={class:"md:grid md:grid-cols-3 lg:grid-cols-4 gap-8"},V=["src","alt"],C={class:"text-lg font-medium mb-5"},D=r(()=>t("hr",{class:"mb-5"},null,-1)),j={class:"px-2 py-1"},E={class:"px-2 py-1"};function T(e,a,q,z,p,A){const _=g,c=w("font-awesome-icon");return l(),n("section",L,[t("div",k,[t("div",F,[t("div",I,[o(_,{to:"/"},{default:m(()=>[i("首頁")]),_:1})]),N,S])]),t("div",$,[t("div",B,[(l(!0),n(f,null,u(p.fittingList,(s,h)=>(l(),n("div",{key:h,class:"col-span-1 py-5"},[o(_,{to:"/fittingDetail/"+s.id},{default:m(()=>[t("img",{src:s.img,alt:s.name},null,8,V),t("h2",C,[o(c,{class:"text-yellow-400 mr-3",icon:["fas","arrow-alt-circle-right"]}),i(d(s.name),1)]),D,t("p",j,[o(c,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),i("材質: "+d(s.material),1)]),t("p",E,[o(c,{class:"text-xs text-yellow-400 mr-3",icon:["fas","dot-circle"]}),i("電源: "+d(s.power),1)])]),_:2},1032,["to"])]))),128))])])])}const H=x(b,[["render",T],["__scopeId","data-v-ee5f4c24"]]);export{H as default};