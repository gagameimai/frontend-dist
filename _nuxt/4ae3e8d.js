(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{341:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},361:function(t,e,n){var content=n(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("9d1a7016",content,!0,{sourceMap:!1})},399:function(t,e,n){"use strict";n(361)},400:function(t,e,n){var o=n(26),r=n(341),l=n(401),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,".banner[data-v-aaaf8732]{background-image:url("+d+")}.slide-enter-active[data-v-aaaf8732]{transition-duration:.3s;transition-timing-function:ease-in}.slide-leave-active[data-v-aaaf8732]{transition-duration:.3s;transition-timing-function:cubic-bezier(0,1,.5,1)}.slide-enter-to[data-v-aaaf8732],.slide-leave[data-v-aaaf8732]{max-height:100px;overflow:hidden}.slide-enter[data-v-aaaf8732],.slide-leave-to[data-v-aaaf8732]{max-height:0;overflow:hidden}",""]),c.locals={},t.exports=c},401:function(t,e,n){t.exports=n.p+"img/banner.d63f28d.png"},454:function(t,e,n){"use strict";n.r(e);n(46),n(15),n(33);var o={name:"download",data:function(){return{versionList:[]}},mounted:function(){this.getResource()},methods:{getResource:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/resource").then((function(e){var n=e.data.result;n&&(t.versionList=n,t.versionList.forEach((function(e,n){0==n?t.$set(t.versionList[n],"isShow",!0):t.$set(t.versionList[n],"isShow",!1)})))}))}}},r=(n(399),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"img_box banner"}),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-40 md:py-20"},[e("div",{staticClass:"max-w-5xl mx-auto mb-16"},[e("h2",{staticClass:"text-2xl font-semibold uppercase lg:text-4xl mb-5"},[t._v("\n        資源下載\n      ")]),t._v(" "),t._l(t.versionList,(function(n,o){return e("div",{key:o,staticClass:"mb-10"},[e("h6",{staticClass:"font-medium text-xl cursor-pointer mb-5",on:{click:function(t){t.stopPropagation(),n.isShow=!n.isShow}}},[n.isShow?e("fa",{staticClass:"text-sm text-yellow-400 mr-2",attrs:{icon:["fas","minus"]}}):e("fa",{staticClass:"text-sm text-yellow-400 mr-2",attrs:{icon:["fas","plus"]}}),t._v(" "),e("span",[t._v(t._s(n.name))])],1),t._v(" "),e("transition",{attrs:{name:"slide"}},[n.isShow?e("div",[e("p",{staticClass:"mb-3 whitespace-pre-line"},[t._v(t._s(n.memo))]),t._v(" "),e("ul",t._l(n.resources,(function(n,o){return e("li",{key:o,staticClass:"border rounded px-3 py-2 mb-3"},[e("p",[e("span",{staticClass:"mr-5"},[t._v(t._s(n.name))]),t._v(" "),e("a",{attrs:{href:n.url,target:"_blank"}},[e("fa",{staticClass:"text-sm text-yellow-400 mr-2",attrs:{icon:["fas","download"]}}),e("span",{staticClass:"text-yellow-400"},[t._v("下載")])],1)])])})),0)]):t._e()])],1)}))],2)])])}),[],!1,null,"aaaf8732",null);e.default=component.exports}}]);