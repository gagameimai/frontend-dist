(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{279:function(n,t,e){var content=e(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(23).default)("a34992bc",content,!0,{sourceMap:!1})},283:function(n,t,e){"use strict";e(279)},284:function(n,t,e){var o=e(22)((function(i){return i[1]}));o.push([n.i,".agile__nav-button{\n  background:transparent;\n  border:none;\n  color:#fff;\n  cursor:pointer;\n  font-size:24px;\n  height:100%;\n  position:absolute;\n  top:0;\n  transition-duration:.3s;\n  width:80px\n}\n.agile__nav-button:hover{\n  background-color:rgba(0,0,0,.5);\n  opacity:1\n}\n.agile__nav-button--prev{\n  left:0\n}\n.agile__nav-button--next{\n  right:0\n}\n.agile__dots{\n  bottom:50px;\n  left:50%;\n  position:absolute;\n  transform:translateX(-50%)\n}\n.agile__dot{\n  margin:0 10px\n}\n.agile__dot button{\n  background-color:transparent;\n  border:1px solid #fff;\n  border-radius:50%;\n  cursor:pointer;\n  display:block;\n  height:10px;\n  font-size:0;\n  line-height:0;\n  margin:0;\n  padding:0;\n  transition-duration:.3s;\n  width:10px\n}\n.agile__dot--current button,.agile__dot:hover button{\n  background-color:#fff\n}\n.slide{\n  display:block;\n  -o-object-fit:cover;\n  object-fit:cover;\n  -o-object-position:center;\n     object-position:center\n}\n.slide,.slide img{\n  width:100%\n}",""]),o.locals={},n.exports=o},318:function(n,t,e){"use strict";e.r(t);var o={name:"banner",data:function(){return{bannerList:[]}},mounted:function(){var n=this;this.$nextTick((function(){return n.getbanner()}))},methods:{getbanner:function(){var n=this;this.$http.get("https://admin.meimai.com.tw/api/banner").then((function(t){var e=t.data.result;e&&(n.bannerList=e)}))}}},r=(e(283),e(15)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{class:[n.$vssWidth<1024?"mt-12":""],attrs:{id:"vue_agile"}},[e("client-only",{attrs:{placeholder:"Loading..."}},[0!=n.bannerList.length?e("agile",{attrs:{autoplay:!0}},[n._l(n.bannerList,(function(n,t){return e("div",{key:t,staticClass:"slide"},[e("a",{attrs:{href:n.url}},[e("img",{attrs:{src:n.img}})])])})),n._v(" "),e("template",{slot:"prevButton"}),n._v(" "),e("template",{slot:"nextButton"})],2):n._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);