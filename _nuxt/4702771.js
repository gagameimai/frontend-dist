(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{274:function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},291:function(t,n,e){var content=e(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(23).default)("5a0f74e8",content,!0,{sourceMap:!1})},333:function(t,n,e){"use strict";e(291)},334:function(t,n,e){var o=e(22),c=e(274),r=e(335),d=o((function(i){return i[1]})),l=c(r);d.push([t.i,".banner[data-v-094d5d0c]{\n  background-image:url("+l+")\n}",""]),d.locals={},t.exports=d},335:function(t,n,e){t.exports=e.p+"img/banner.0d5c729.png"},366:function(t,n,e){"use strict";e.r(n);var o={name:"question",data:function(){return{question:""}},mounted:function(){this.getQuestion()},methods:{getQuestion:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/question").then((function(n){var e=n.data.result;t.question=e.content}))}}},c=(e(333),e(15)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{staticClass:"img_box banner"}),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-20"},[this.question?e("div",{domProps:{innerHTML:t._s(this.question)}}):t._e()])])}),[],!1,null,"094d5d0c",null);n.default=component.exports}}]);