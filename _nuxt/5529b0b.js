(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{341:function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},353:function(t,n,e){t.exports=e.p+"img/banner.3f09044.png"},359:function(t,n,e){var content=e(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("fdf107ae",content,!0,{sourceMap:!1})},394:function(t,n,e){"use strict";e(359)},395:function(t,n,e){var o=e(26),l=e(341),r=e(353),c=o((function(i){return i[1]})),d=l(r);c.push([t.i,".banner[data-v-59451602]{background-image:url("+d+")}",""]),c.locals={},t.exports=c},449:function(t,n,e){"use strict";e.r(n);e(46);var o={name:"blindSpot",data:function(){return{blindSpotList:[]}},mounted:function(){this.getBlindSpot()},methods:{getBlindSpot:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/blindspot").then((function(n){var e=n.data.result;e&&(t.blindSpotList=e)}))}}},l=(e(394),e(22)),component=Object(l.a)(o,(function(){var t=this,n=t._self._c;return n("section",[n("div",{staticClass:"img_box banner flex justify-center items-center"},[n("div",{staticClass:"text-white text-2xl font-semibold flex"},[n("div",{staticClass:"hover:text-yellow-400 transition-all duration-300"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("首頁")])],1),t._v(" "),n("div",[t._v(" / ")]),t._v(" "),n("h1",{staticClass:"text-white text-2xl font-semibold"},[t._v("盲點偵測")])])]),t._v(" "),n("div",{staticClass:"container mx-auto px-5 py-10 md:py-20"},[n("div",{staticClass:"md:grid md:grid-cols-3 lg:grid-cols-4 gap-8"},t._l(t.blindSpotList,(function(e,o){return n("div",{key:o,staticClass:"col-span-1 py-5"},[n("nuxt-link",{attrs:{to:{name:"blindSpotDetail-id",query:{id:e.id}}}},[n("img",{attrs:{src:e.img,alt:e.name}}),t._v(" "),n("hr",{staticClass:"mb-5"}),t._v(" "),n("h2",{staticClass:"text-lg font-medium mb-5"},[n("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","arrow-alt-circle-right"]}}),t._v(t._s(e.name)+"\n          ")],1)])],1)})),0)])])}),[],!1,null,"59451602",null);n.default=component.exports}}]);