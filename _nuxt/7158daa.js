(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{352:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},365:function(t,e,n){t.exports=n.p+"img/banner.4fffefa.png"},373:function(t,e,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("430afeda",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";n(373)},414:function(t,e,n){var l=n(27),o=n(352),c=n(365),r=l((function(i){return i[1]})),f=o(c);r.push([t.i,".banner[data-v-18377bcb]{background-image:url("+f+")}",""]),r.locals={},t.exports=r},464:function(t,e,n){"use strict";n.r(e);n(46);var l={name:"fitting",data:function(){return{fittingList:[]}},mounted:function(){this.getFitting()},methods:{getFitting:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/fitting").then((function(e){var n=e.data.result;n&&(t.fittingList=n)}))}}},o=(n(413),n(22)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"overflow-hidden"},[e("div",{staticClass:"hidden img_box banner md:flex justify-center items-center"},[e("div",{staticClass:"text-white text-2xl font-semibold flex"},[e("div",{staticClass:"hover:text-yellow-400 transition-all duration-300"},[e("nuxt-link",{attrs:{to:"/"}},[t._v("首頁")])],1),t._v(" "),e("div",[t._v(" / ")]),t._v(" "),e("h1",{staticClass:"text-white text-2xl font-semibold"},[t._v("車用配件")])])]),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-20"},[e("div",{staticClass:"md:grid md:grid-cols-3 lg:grid-cols-4 gap-8"},t._l(t.fittingList,(function(n,l){return e("div",{key:l,staticClass:"col-span-1 py-5"},[e("nuxt-link",{attrs:{to:{name:"fittingDetail-id",query:{id:n.id}}}},[e("img",{attrs:{src:n.img,alt:n.name}}),t._v(" "),e("h2",{staticClass:"text-lg font-medium mb-5"},[e("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","arrow-alt-circle-right"]}}),t._v(t._s(n.name)+"\n          ")],1),t._v(" "),e("hr",{staticClass:"mb-5"}),t._v(" "),e("p",{staticClass:"px-2 py-1"},[e("fa",{staticClass:"text-xs text-yellow-400 mr-3",attrs:{icon:["fas","dot-circle"]}}),t._v("材質: "+t._s(n.material)+"\n          ")],1),t._v(" "),e("p",{staticClass:"px-2 py-1"},[e("fa",{staticClass:"text-xs text-yellow-400 mr-3",attrs:{icon:["fas","dot-circle"]}}),t._v("電源: "+t._s(n.power)+"\n          ")],1)])],1)})),0)])])}),[],!1,null,"18377bcb",null);e.default=component.exports}}]);