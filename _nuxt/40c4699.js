(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3],{279:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("a34992bc",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";n(279)},284:function(t,e,n){var o=n(22)((function(i){return i[1]}));o.push([t.i,".agile__nav-button{\n  background:transparent;\n  border:none;\n  color:#fff;\n  cursor:pointer;\n  font-size:24px;\n  height:100%;\n  position:absolute;\n  top:0;\n  transition-duration:.3s;\n  width:80px\n}\n.agile__nav-button:hover{\n  background-color:rgba(0,0,0,.5);\n  opacity:1\n}\n.agile__nav-button--prev{\n  left:0\n}\n.agile__nav-button--next{\n  right:0\n}\n.agile__dots{\n  bottom:50px;\n  left:50%;\n  position:absolute;\n  transform:translateX(-50%)\n}\n.agile__dot{\n  margin:0 10px\n}\n.agile__dot button{\n  background-color:transparent;\n  border:1px solid #fff;\n  border-radius:50%;\n  cursor:pointer;\n  display:block;\n  height:10px;\n  font-size:0;\n  line-height:0;\n  margin:0;\n  padding:0;\n  transition-duration:.3s;\n  width:10px\n}\n.agile__dot--current button,.agile__dot:hover button{\n  background-color:#fff\n}\n.slide{\n  display:block;\n  -o-object-fit:cover;\n  object-fit:cover;\n  -o-object-position:center;\n     object-position:center\n}\n.slide,.slide img{\n  width:100%\n}",""]),o.locals={},t.exports=o},317:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("29645968",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";n.r(e);var o={name:"banner",data:function(){return{bannerList:[]}},mounted:function(){var t=this;this.$nextTick((function(){return t.getbanner()}))},methods:{getbanner:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/banner").then((function(e){var n=e.data.result;n&&(t.bannerList=n)}))}}},r=(n(283),n(15)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:[t.$vssWidth<1024?"mt-12":""],attrs:{id:"vue_agile"}},[n("client-only",{attrs:{placeholder:"Loading..."}},[0!=t.bannerList.length?n("agile",{attrs:{autoplay:!0}},[t._l(t.bannerList,(function(t,e){return n("div",{key:e,staticClass:"slide"},[n("a",{attrs:{href:t.url}},[n("img",{attrs:{src:t.img}})])])})),t._v(" "),n("template",{slot:"prevButton"}),t._v(" "),n("template",{slot:"nextButton"})],2):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,n){t.exports=n.p+"img/android.1421bc6.png"},352:function(t,e,n){t.exports=n.p+"img/carFrame.b726b77.jpg"},353:function(t,e,n){t.exports=n.p+"img/blindSpot.2cb9541.png"},354:function(t,e,n){t.exports=n.p+"img/fitting.4bd6103.png"},355:function(t,e,n){"use strict";n(317)},356:function(t,e,n){var o=n(22),r=n(274),l=n(357),c=n(358),d=n(359),m=o((function(i){return i[1]})),v=r(l),f=r(c),h=r(d);m.push([t.i,".banner[data-v-1373c4c7]{\n  background-image:url("+v+");\n  background-attachment:fixed\n}\n.text-shadow[data-v-1373c4c7]{\n  text-shadow:1px 1px 3px rgba(35,24,21,.3)\n}\n.solution[data-v-1373c4c7]{\n  position:relative;\n  height:350px;\n  background-image:url("+f+');\n  background-repeat:no-repeat;\n  background-size:cover;\n  background-attachment:fixed;\n  z-index:4\n}\n.solution[data-v-1373c4c7]:after{\n  content:"00000";\n  position:absolute;\n  inset:0 0 0 0;\n  z-index:5;\n  background-color:rgba(35,24,21,.5)\n}\n@media (max-width:640px){\n.banner[data-v-1373c4c7]{\n    background-image:url('+h+")\n}\n}\n@media (min-width:641px) and (max-width:767px){\n.banner[data-v-1373c4c7]{\n    background-image:url("+v+")\n}\n}",""]),m.locals={},t.exports=m},357:function(t,e,n){t.exports=n.p+"img/banner_homepage.7f908a0.jpg"},358:function(t,e,n){t.exports=n.p+"img/bannerBG.557f741.png"},359:function(t,e,n){t.exports=n.p+"img/banner_phonepage.5dd9f6e.png"},372:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-3 py-5 md:py-10"},[e("div",[e("img",{attrs:{src:n(351),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-3 py-5 md:py-10"},[e("div",[e("img",{attrs:{src:n(352),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-3 py-5 md:py-10"},[e("div",[e("img",{attrs:{src:n(353),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-span-3 py-5 md:py-10"},[e("div",[e("img",{attrs:{src:n(354),alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative z-40 flex items-center solution"},[n("div",{staticClass:"container mx-auto text-white p-5 z-10",attrs:{"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"300","data-aos-once":"true","data-aos-anchor-placement":"bottom-bottom"}},[n("h1",{staticClass:"text-2xl md:text-4xl font-semibold mb-3 uppercase"},[t._v("\n        MEIMAI 美邁車用電子有限公司\n      ")]),t._v(" "),n("p",{staticClass:"text-xl font-medium leading-loose"},[t._v("\n        美邁精選每一樣車用產品，從品質把關到保固認證，只提供最適合的優質產品；"),n("br"),t._v("\n        也在台灣逐漸拓展據點，帶來更專業便利的服務。美邁不只是不錯，而是向更美好的行車體驗邁進。\n      ")])])])}],r=n(86),l=(n(42),n(39),n(28),n(17),n(292),n(29),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(35),n(69),n(70),n(310)),c={name:"home",data:function(){return{carFrame:l.a,brandList:[],car:[],modelList:[],types:[],yearList:[],years:[],brandInputValue:"選擇汽車品牌",modelInputValue:"選擇車款",yearInputValue:"選擇年份",typeSelect:!0,yearSelect:!0,filterData:[],partners:[],counties:[],county:""}},mounted:function(){this.carFrame.map((function(t){return t.bland}));this.getListData(),this.getPartner()},methods:{getListData:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/car").then((function(e){var n=e.data.car_brand,o=e.data.car;n&&(t.brandList=n),o&&(t.car=o)}))},getPartner:function(){var t=this,e={county:this.county};this.$http.get("https://admin.meimai.com.tw/api/partner",{params:e}).then((function(e){var n=e.data.result;n&&(0==t.counties.length&&(t.counties=n.county),t.partners=n.partner)}))},brandChange:function(){var t=this;this.modelInputValue="選擇車款",this.yearInputValue="選擇年份",this.typeSelect=!0,this.yearSelect=!0;var e=this.carFrame.filter((function(e){return e.bland===t.brandInputValue})),n=[];e.forEach((function(t){n.push.apply(n,Object(r.a)(t.model))})),this.types=Object(r.a)(new Set(n)),this.typeSelect=!1,this.modelList=[],this.car.forEach((function(e){t.brandInputValue==e.car_brand_id&&t.modelList.push(e)}))},modelChange:function(){var t=this,e=this.carFrame.filter((function(e){return e.bland===t.brandInputValue&&e.type.includes(t.modelInputValue)})),n=[];e.forEach((function(t){n.push.apply(n,Object(r.a)(t.year))})),this.years=Object(r.a)(new Set(n)),this.yearSelect=!1,this.yearList=[];var o=0,l=0;if("all"==this.modelInputValue){if(this.modelList.forEach((function(t,e){0==e?(o=t.year_start,l=t.year_end):(t.year_start<o&&(o=t.year_start),t.year_end>l&&(l=t.year_end))})),0!=o&&0!=l){var c=+l-+o;this.yearList.push(o);for(var i=1;i<=c;i++)this.yearList.push(+o+i)}}else this.modelList.forEach((function(e){if(t.modelInputValue==e.id){var n=+e.year_end-+e.year_start;t.yearList.push(e.year_start);for(var o=1;o<=n;o++)t.yearList.push(+e.year_start+o)}}))},searchData:function(){"選擇汽車品牌"!=this.brandInputValue?"選擇車款"!=this.modelInputValue?"選擇年份"!=this.yearInputValue?(this.$router.push({name:"searchPage",query:{}}),localStorage.setItem("brand",this.brandInputValue),localStorage.setItem("model",this.modelInputValue),localStorage.setItem("year",this.yearInputValue)):alert("請選擇年份"):alert("請選擇車款"):alert("請選擇汽車品牌")}}},d=(n(355),n(15)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"overflow-hidden"},[n("VueAgile"),t._v(" "),n("div",{staticClass:"container mx-auto my-10 p-3 border-2 border-yellow-300"},[n("div",{staticClass:"md:grid grid-cols-11 gap-8"},[n("div",{staticClass:"col-span-3 mb-3 md:mb-0"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.brandInputValue,expression:"brandInputValue"}],staticClass:"w-full h-12 p-3 text-black border rounded-md bg-white",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.brandInputValue=e.target.multiple?n:n[0]},t.brandChange]}},[n("option",{attrs:{selected:"",disabled:""}},[t._v("選擇汽車品牌")]),t._v(" "),t._l(t.brandList,(function(e,o){return n("option",{key:o,staticClass:"capitalize",domProps:{value:e.id}},[t._v(t._s(e.name))])}))],2)]),t._v(" "),n("div",{staticClass:"col-span-3 mb-3 md:mb-0"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.modelInputValue,expression:"modelInputValue"}],staticClass:"w-full h-12 p-3 text-black border rounded-md bg-white",attrs:{disabled:t.typeSelect},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.modelInputValue=e.target.multiple?n:n[0]},t.modelChange]}},[n("option",{attrs:{selected:"",disabled:""}},[t._v("選擇車款")]),t._v(" "),t._l(t.modelList,(function(e,o){return n("option",{key:o,domProps:{value:e.id}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),t._v(" "),n("option",{attrs:{value:"all"}},[t._v("所有車款")])],2)]),t._v(" "),n("div",{staticClass:"col-span-3 mb-3 md:mb-0"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.yearInputValue,expression:"yearInputValue"}],staticClass:"w-full h-12 p-3 text-black border rounded-md bg-white",attrs:{disabled:t.yearSelect},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.yearInputValue=e.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",disabled:""}},[t._v("選擇年份")]),t._v(" "),t._l(t.yearList,(function(e,o){return n("option",{key:o},[t._v("\n            "+t._s(e)+"\n          ")])})),t._v(" "),n("option",{attrs:{value:"all"}},[t._v("所有年份")])],2)]),t._v(" "),n("div",{staticClass:"col-span-2"},[n("button",{staticClass:"w-full bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3 rounded-md",on:{click:t.searchData}},[t._v("\n          搜尋\n        ")])])])]),t._v(" "),n("div",{attrs:{id:"productList"}},[n("div",{staticClass:"container mx-auto p-5"},[n("div",{staticClass:"md:grid grid-cols-7 gap-8"},[t._m(0),t._v(" "),n("div",{staticClass:"col-span-4 py-5 md:py-10 flex items-center"},[n("div",{attrs:{"data-aos":"fade-left","data-aos-duration":"500","data-aos-delay":"300","data-aos-once":"true","data-aos-anchor-placement":"bottom-bottom"}},[n("h2",{staticClass:"font-semibold text-4xl mb-5"},[t._v("安卓車用多媒體機")]),t._v(" "),n("p",{staticClass:"text-xl mb-5"},[t._v("\n              輕鬆操作智能導航與聯網影音，為車內增添視聽享受與便利結合多功能、挑戰高效能的美邁車用多媒體車機。\n            ")]),t._v(" "),n("nuxt-link",{staticClass:"block w-full md:w-40 text-center text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3",attrs:{to:"/multimedia"}},[t._v("了解更多")])],1)])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"md:grid grid-cols-7 gap-8"},[t._m(1),t._v(" "),n("div",{staticClass:"col-span-4 py-5 md:py-10 flex items-center"},[n("div",{attrs:{"data-aos":"fade-left","data-aos-duration":"500","data-aos-delay":"300","data-aos-once":"true","data-aos-anchor-placement":"bottom-bottom"}},[n("h2",{staticClass:"font-semibold text-4xl mb-5"},[t._v("安卓車框")]),t._v(" "),n("p",{staticClass:"text-xl mb-5"},[t._v("\n              與安卓機完美匹配，美觀專用車框，車款完備。\n            ")]),t._v(" "),n("nuxt-link",{staticClass:"block w-full md:w-40 text-center text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3",attrs:{to:"/carFrame"}},[t._v("了解更多")])],1)])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"md:grid grid-cols-7 gap-8"},[t._m(2),t._v(" "),n("div",{staticClass:"col-span-4 py-5 md:py-10 flex items-center"},[n("div",{attrs:{"data-aos":"fade-left","data-aos-duration":"500","data-aos-delay":"300","data-aos-once":"true","data-aos-anchor-placement":"bottom-bottom"}},[n("h2",{staticClass:"font-semibold text-4xl mb-5"},[t._v("盲點偵測")]),t._v(" "),n("p",{staticClass:"text-xl mb-5"},[t._v("\n              無法看見的區域，讓盲點偵測幫您看見。\n            ")]),t._v(" "),n("nuxt-link",{staticClass:"block w-full md:w-40 text-center text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3",attrs:{to:"/blindSpot"}},[t._v("了解更多")])],1)])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"md:grid grid-cols-7 gap-8"},[t._m(3),t._v(" "),n("div",{staticClass:"col-span-4 py-5 md:py-10 flex items-center"},[n("div",{attrs:{"data-aos":"fade-left","data-aos-duration":"500","data-aos-delay":"300","data-aos-once":"true","data-aos-anchor-placement":"bottom-bottom"}},[n("h2",{staticClass:"font-semibold text-4xl mb-5"},[t._v("車用配件")]),t._v(" "),n("p",{staticClass:"text-xl mb-5"},[t._v("\n              更多全面性的車用電子配件選擇，搭配安卓機使用更升級。\n            ")]),t._v(" "),n("nuxt-link",{staticClass:"block w-full md:w-40 text-center text-white bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 p-3",attrs:{to:"/fitting"}},[t._v("了解更多")])],1)])])])]),t._v(" "),t._m(4),t._v(" "),n("div",{staticClass:"px-5 py-10 md:py-20"},[n("div",{staticClass:"container mx-auto"},[n("h2",{staticClass:"uppercase text-2xl md:text-4xl font-extrabold mb-5"},[t._v("\n        合作經銷\n      ")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.county,expression:"county"}],staticClass:"border px-3 py-2 mb-5 w-full lg:w-1/3",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.county=e.target.multiple?n:n[0]},t.getPartner]}},[n("option",{attrs:{value:""}},[t._v("全區域")]),t._v(" "),t._l(t.counties,(function(e,o){return n("option",{key:o,domProps:{value:o}},[t._v(t._s(e))])}))],2),t._v(" "),n("div",{staticClass:"md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"},t._l(t.partners,(function(e,o){return n("div",{key:o,staticClass:"col-span-1",attrs:{"data-aos":"fade-up","data-aos-duration":"500","data-aos-delay":"300","data-aos-once":"true","data-aos-anchor-placement":"bottom-bottom"}},[n("div",{staticClass:"min-h-full border shadow-md p-5 mb-5"},[n("h4",{staticClass:"text-lg font-semibold mb-3"},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"mb-2"},[n("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","phone-alt"]}}),t._v(t._s(e.tel)+"\n            ")],1),t._v(" "),n("p",[n("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","map-marker-alt"]}}),t._v(t._s(e.address)+"\n            ")],1)])])})),0)])])],1)}),o,!1,null,"1373c4c7",null);e.default=component.exports;installComponents(component,{VueAgile:n(318).default})}}]);