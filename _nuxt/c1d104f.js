(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{274:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},281:function(t,e,n){t.exports=n.p+"img/banner.4fffefa.png"},288:function(t,e,n){var content=n(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2ffb48d3",content,!0,{sourceMap:!1})},325:function(t,e,n){"use strict";n(288)},326:function(t,e,n){var l=n(22),c=n(274),o=n(281),r=l((function(i){return i[1]})),f=c(o);r.push([t.i,".banner[data-v-18377bcb]{\n  background-image:url("+f+")\n}",""]),r.locals={},t.exports=r},362:function(t,e,n){"use strict";n.r(e);var l={name:"fitting",data:function(){return{fittingList:[]}},mounted:function(){this.getFitting()},methods:{getFitting:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/fitting").then((function(e){var n=e.data.result;n&&(t.fittingList=n)}))}}},c=(n(325),n(15)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"overflow-hidden"},[n("div",{staticClass:"hidden img_box banner md:flex justify-center items-center"},[n("div",{staticClass:"text-white text-2xl font-semibold flex"},[n("div",{staticClass:"hover:text-yellow-400 transition-all duration-300"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("首頁")])],1),t._v(" "),n("div",[t._v(" / ")]),t._v(" "),n("h1",{staticClass:"text-white text-2xl font-semibold"},[t._v("車用配件")])])]),t._v(" "),n("div",{staticClass:"container mx-auto px-5 py-20"},[n("div",{staticClass:"md:grid md:grid-cols-3 lg:grid-cols-4 gap-8"},t._l(t.fittingList,(function(e,l){return n("div",{key:l,staticClass:"col-span-1 py-5"},[n("nuxt-link",{attrs:{to:{name:"fittingDetail-id",query:{id:e.id}}}},[n("img",{attrs:{src:e.img,alt:e.name}}),t._v(" "),n("h2",{staticClass:"text-lg font-medium mb-5"},[n("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","arrow-alt-circle-right"]}}),t._v(t._s(e.name)+"\n          ")],1),t._v(" "),n("hr",{staticClass:"mb-5"}),t._v(" "),n("p",{staticClass:"px-2 py-1"},[n("fa",{staticClass:"text-xs text-yellow-400 mr-3",attrs:{icon:["fas","dot-circle"]}}),t._v("材質: "+t._s(e.material)+"\n          ")],1),t._v(" "),n("p",{staticClass:"px-2 py-1"},[n("fa",{staticClass:"text-xs text-yellow-400 mr-3",attrs:{icon:["fas","dot-circle"]}}),t._v("電源: "+t._s(e.power)+"\n          ")],1)])],1)})),0)])])}),[],!1,null,"18377bcb",null);e.default=component.exports}}]);