(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{341:function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},365:function(t,n,e){var content=e(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("04a5cbb6",content,!0,{sourceMap:!1})},408:function(t,n,e){"use strict";e(365)},409:function(t,n,e){var o=e(26),c=e(341),r=e(410),d=o((function(i){return i[1]})),l=c(r);d.push([t.i,".banner[data-v-094d5d0c]{background-image:url("+l+")}",""]),d.locals={},t.exports=d},410:function(t,n,e){t.exports=e.p+"img/banner.0d5c729.png"},455:function(t,n,e){"use strict";e.r(n);var o={name:"question",data:function(){return{question:""}},mounted:function(){this.getQuestion()},methods:{getQuestion:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/question").then((function(n){var e=n.data.result;t.question=e.content}))}}},c=(e(408),e(22)),component=Object(c.a)(o,(function(){var t=this,n=t._self._c;return n("section",[n("div",{staticClass:"img_box banner"}),t._v(" "),n("div",{staticClass:"container mx-auto px-5 py-20"},[this.question?n("div",{domProps:{innerHTML:t._s(this.question)}}):t._e()])])}),[],!1,null,"094d5d0c",null);n.default=component.exports}}]);