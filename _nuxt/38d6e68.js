(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{343:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},350:function(t,e,r){t.exports=r.p+"img/banner.3d01cc7.png"},391:function(t,e,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("e7fa8e2c",content,!0,{sourceMap:!1})},392:function(t,e,r){var content=r(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("676961c7",content,!0,{sourceMap:!1})},445:function(t,e,r){"use strict";r(391)},446:function(t,e,r){var n=r(26)((function(i){return i[1]}));n.push([t.i,"@media(max-width:768px){.ck-table[data-v-43ad3f7d]{width:100%!important}}.ck-table tr[data-v-43ad3f7d]{border:3px solid #fff}.ck-table tr[data-v-43ad3f7d]:nth-child(2n){background-color:#f9f9f9}.ck-table tr[data-v-43ad3f7d]:nth-child(odd){background-color:#dedede}.ck-table tr td[data-v-43ad3f7d]{padding:5px 15px;vertical-align:middle}.ck-table tr td[data-v-43ad3f7d]:first-child{border-right:5px solid #fff;font-weight:700;text-align:center;width:30%}@media(max-width:768px){.ck-icon-table[data-v-43ad3f7d]{width:100%!important}}.ck-icon-table img[data-v-43ad3f7d]{display:inline}.ck-icon-table tr td[data-v-43ad3f7d]{width:33%}",""]),n.locals={},t.exports=n},447:function(t,e,r){"use strict";r(392)},448:function(t,e,r){var n=r(26),c=r(343),o=r(350),l=n((function(i){return i[1]})),m=c(o);l.push([t.i,".banner[data-v-43ad3f7d]{background-image:url("+m+")}",""]),l.locals={},t.exports=l},467:function(t,e,r){"use strict";r.r(e);r(46);var n=r(12),c=(r(71),r(205)),o=r.n(c),l={name:"multimediaDetail-id",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,e.next=3,o.a.get("https://admin.meimai.com.tw/api/carframe/"+r.query.id);case 3:return n=e.sent,(c=n.data.result).name=c.name?c.name:"",e.abrupt("return",{carFrameInfo:c});case 7:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"MEIMAI "+this.carFrameInfo.brand_name+this.carFrameInfo.name+" 車框",meta:[{property:"og:image",content:this.carFrameInfo.img},{name:"keywords",content:this.carFrameInfo.brand_name+this.carFrameInfo.car_name+this.carFrameInfo.name}]}},data:function(){return{multiMediasList:[]}},mounted:function(){this.getMultiMedias()},methods:{getMultiMedias:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/multimedia").then((function(e){var r=e.data.result;r&&(t.multiMediasList=r)}))},getCarFrame:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/carframe/"+this.$route.query.id).then((function(e){var r=e.data.result;r&&(t.carFrameInfo=r)}))}}},m=(r(445),r(447),r(22)),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"hidden img_box banner md:flex justify-center items-center"},[e("p",{staticClass:"text-white text-2xl font-semibold"},[e("span",{staticClass:"hover:text-yellow-400 transition-all duration-300"}),t._v(" "),e("span",[t._v("首頁 / ")]),t._v(" "),e("span",[t._v("安卓車框")]),t._v(" "),e("span",[t._v(" / ")]),t._v(" "),e("span",[t._v(t._s(t.carFrameInfo.brand_name))])])]),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-20"},[e("div",{staticClass:"max-w-5xl mx-auto text-center"},[e("h2",{staticClass:"text-center text-2xl lg:text-3xl font-semibold mb-5"},[t._v("\n        "+t._s(t.carFrameInfo.brand_name)+" "+t._s(t.carFrameInfo.car_name)+t._s(t.carFrameInfo.name)+"\n      ")]),t._v(" "),e("p",{staticClass:"text-xl font-medium mb-5"},[t._v("\n        年份 / "+t._s(t.carFrameInfo.year_start)+"~"+t._s(t.carFrameInfo.year_end)+" 、 尺寸 / "+t._s(t.carFrameInfo.size)+"吋\n      ")]),t._v(" "),e("img",{staticClass:"w-full mb-10",attrs:{src:t.carFrameInfo.img,alt:t.carFrameInfo.name}})]),t._v(" "),t.carFrameInfo.img3?e("h2",{staticClass:"text-center text-3xl font-semibold mb-5"},[t._v("\n      車框概觀\n    ")]):t._e(),t._v(" "),t.carFrameInfo.img3?e("div",{staticClass:"max-w-5xl mx-auto text-center"},[e("img",{staticClass:"w-full mb-10",attrs:{src:t.carFrameInfo.img3}})]):t._e(),t._v(" "),t.carFrameInfo.img1&&""!=t.carFrameInfo.img1[0]?e("h2",{staticClass:"text-center text-3xl font-semibold mb-5"},[t._v("\n      車框配件\n    ")]):t._e(),t._v(" "),t.carFrameInfo.img1&&Array.isArray(t.carFrameInfo.img1)?e("span",t._l(t.carFrameInfo.img1,(function(image){return e("div",{key:image,staticClass:"max-w-5xl mx-auto text-center"},[image?e("img",{staticClass:"w-full mb-10",attrs:{src:image}}):t._e()])})),0):t._e(),t._v(" "),t.carFrameInfo.img2&&""!=t.carFrameInfo.img2[0]?e("h2",{staticClass:"text-center text-3xl font-semibold mb-5"},[t._v("\n      實際安裝\n    ")]):t._e(),t._v(" "),t.carFrameInfo.img2&&Array.isArray(t.carFrameInfo.img2)?e("span",t._l(t.carFrameInfo.img2,(function(image){return e("div",{key:image,staticClass:"max-w-5xl mx-auto text-center"},[image?e("img",{staticClass:"w-full mb-10",attrs:{src:image}}):t._e()])})),0):t._e(),t._v(" "),t.carFrameInfo.content?e("h2",{staticClass:"text-center text-3xl font-semibold mb-5"},[t._v("\n      產品說明\n    ")]):t._e(),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.carFrameInfo.content)}})]),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-10 md:py-20"},[e("h2",{staticClass:"text-center text-3xl font-semibold mb-8"},[t._v("推廌搭配安卓機")]),t._v(" "),e("div",{staticClass:"lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8"},t._l(t.multiMediasList,(function(r,n){return e("div",{key:n,staticClass:"col-span-1 py-5"},[e("nuxt-link",{attrs:{to:{name:"multimediaDetail-id",query:{id:r.id}}}},[e("img",{staticClass:"w-full",attrs:{src:r.img,alt:r.name}})]),t._v(" "),e("h2",{staticClass:"text-lg font-medium mb-5"},[e("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","arrow-alt-circle-right"]}}),t._v(t._s(r.name)+"\n        ")],1),t._v(" "),e("hr",{staticClass:"mb-5"}),t._v(" "),e("p",{staticClass:"px-2 py-1"},[e("fa",{staticClass:"text-xs text-yellow-400 mr-3",attrs:{icon:["fas","dot-circle"]}}),t._v("硬體："+t._s(r.hard_drive)+"\n        ")],1),t._v(" "),e("p",{staticClass:"px-2 py-1"},[e("fa",{staticClass:"text-xs text-yellow-400 mr-3",attrs:{icon:["fas","dot-circle"]}}),t._v("記憶體："+t._s(r.ram)+"\n        ")],1),t._v(" "),e("p",{staticClass:"px-2 py-1"},[e("fa",{staticClass:"text-xs text-yellow-400 mr-3",attrs:{icon:["fas","dot-circle"]}}),t._v("解析度："+t._s(r.resolution)+"\n        ")],1),t._v(" "),e("p",{staticClass:"px-2 py-1"},[e("fa",{staticClass:"text-xs text-yellow-400 mr-3",attrs:{icon:["fas","dot-circle"]}}),t._v("建議售價："+t._s(r.price)+"\n        ")],1)],1)})),0)])])}),[],!1,null,"43ad3f7d",null);e.default=component.exports}}]);