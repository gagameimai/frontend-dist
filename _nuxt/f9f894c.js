(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{359:function(t,e,r){t.exports=r.p+"img/banner.3d01cc7.png"},395:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("45fcc786",content,!0,{sourceMap:!1})},434:function(t,e,r){"use strict";r(395)},435:function(t,e,r){var n=r(27),l=r(352),c=r(359),o=n((function(i){return i[1]})),d=l(c);o.push([t.i,".banner[data-v-382030ef]{background-image:url("+d+")}",""]),o.locals={},t.exports=o},468:function(t,e,r){"use strict";r.r(e);r(47),r(48),r(46),r(51),r(16),r(30),r(153);var n,l=r(111),c=r(13),o=(r(74),r(93),r(50),r(377),r(94),r(41),r(378),r(379),r(380),r(381),r(382),r(383),r(384),r(385),r(386),r(387),r(388),r(389),r(390),r(391),r(392),r(393),r(36),r(42),r(394)),d={name:"carFrame",data:function(){return{carFrame:o.a,breadcrumbBlands:this.$route.query.brand,breadcrumbModel:this.$route.query.model,brandList:[],car:[],types:[],modelList:[],years:[],yearList:[],brandInputValue:"",modelInputValue:"",yearInputValue:"",totalPage:5,currentPage:1,filterData:[],fiterCarFrames:[],carFrameList:[],carMediaList:[],carBlindSpotList:[],carFittingList:[]}},mounted:(n=Object(c.a)(regeneratorRuntime.mark((function t(){var e,r,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getListData();case 2:e=this.$route.query.brand,r=this.$route.query.model,n=this.$route.query.year,e&&(this.brandInputValue=e,this.modelInputValue=r,this.yearInputValue=n),this.brandChange(),this.modelChange(),this.search(),l=Math.ceil(this.carFrame.length/20),this.totalPage=l;case 9:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),methods:{getListData:function(){var t=this;return new Promise((function(e){t.$http.get("https://admin.meimai.com.tw/api/car").then((function(r){var n=r.data.car_brand,l=r.data.car;n&&(t.brandList=n),l&&(t.car=l),e()}))}))},increasePage:function(){this.currentPage>=this.totalPage||(this.currentPage++,this.changePage())},decreasePage:function(){this.currentPage<=1||(this.currentPage--,this.changePage())},changePage:function(){this.filterData=this.carFrame.slice(20*(this.currentPage-1),20*this.currentPage),window.scrollTo(0,0)},brandChange:function(t){var e=this;t&&(this.modelInputValue="",this.yearInputValue=""),this.typeSelect=!0,this.yearSelect=!0;var r=this.carFrame.filter((function(t){return t.brand===e.brandInputValue})),n=[];r.forEach((function(t){n.push.apply(n,Object(l.a)(t.model))})),this.types=Object(l.a)(new Set(n)),this.typeSelect=!1,this.breadcrumbBlands=this.brandInputValue,this.breadcrumbModel="",this.modelList=[],this.car.forEach((function(t){e.brandInputValue==t.car_brand_id&&e.modelList.push(t)}))},modelChange:function(){var t=this,e=this.carFrame.filter((function(e){return e.brand===t.brandInputValue&&e.type.includes(t.modelInputValue)})),r=[];e.forEach((function(t){r.push.apply(r,Object(l.a)(t.year))})),this.years=Object(l.a)(new Set(r)),this.yearSelect=!1,this.breadcrumbModel=this.modelInputValue,this.yearList=[];var n=0,c=0;if(""==this.modelInputValue){if(this.modelList.forEach((function(t,e){0==e?(n=t.year_start,c=t.year_end):(t.year_start<n&&(n=t.year_start),t.year_end>c&&(c=t.year_end))})),0!=n&&0!=c){var o=+c-+n;this.yearList.push(n);for(var i=1;i<=o;i++)this.yearList.push(+n+i)}}else this.modelList.forEach((function(e){if(t.modelInputValue==e.id){var r=+e.year_end-+e.year_start;t.yearList.push(e.year_start);for(var n=1;n<=r;n++)t.yearList.push(+e.year_start+n)}}))},search:function(){var t=this;this.carFrameList=[],this.carMediaList=[],this.carBlindSpotList=[],this.carFittingList=[];var e={car_brand_id:this.brandInputValue,car_id:this.modelInputValue?this.modelInputValue:"",year:this.yearInputValue?this.yearInputValue:""};this.$http.get("https://admin.meimai.com.tw/api/search",{params:e}).then((function(e){var r=e.data.result;r&&(r.car_frame.length>0&&(t.carFrameList=r.car_frame),r.car_media.length>0&&(t.carMediaList=r.car_media),r.car_blind_spot.length>0&&(t.carBlindSpotList=r.car_blind_spot),r.car_fitting.length>0&&(t.carFittingList=r.car_fitting),t.$router.push({path:"/searchPage",query:{brand:t.brandInputValue,model:t.modelInputValue,year:t.yearInputValue}}))}))},storeLocalStorage:function(){localStorage.setItem("brand",this.brandInputValue),localStorage.setItem("model",this.modelInputValue),localStorage.setItem("year",this.yearInputValue)}}},m=d,h=(r(434),r(22)),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"img_box banner"},[e("div",{staticClass:"text-center pt-28 pb-20 md:py-14 lg:pt-44"},[e("p",{staticClass:"hidden lg:block text-white text-2xl font-semibold mb-10"}),t._v(" "),e("div",{staticClass:"container mx-auto px-5"},[e("div",{staticClass:"lg:grid grid-cols-10 gap-5"},[e("div",{staticClass:"col-span-3 mb-3 lg:mb-0"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.brandInputValue,expression:"brandInputValue"}],staticClass:"w-full h-12 p-3 text-black",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.brandInputValue=e.target.multiple?r:r[0]},function(e){return t.brandChange(!0)}]}},[e("option",{attrs:{value:"",selected:""}},[t._v("選擇汽車品牌")]),t._v(" "),t._l(t.brandList,(function(r,n){return e("option",{key:n,domProps:{value:r.id}},[t._v("\n                "+t._s(r.name)+"\n              ")])}))],2)]),t._v(" "),e("div",{staticClass:"col-span-3 mb-3 lg:mb-0"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.modelInputValue,expression:"modelInputValue"}],staticClass:"w-full h-12 p-3 text-black",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.modelInputValue=e.target.multiple?r:r[0]},t.modelChange]}},[e("option",{attrs:{value:"",selected:""}},[t._v("選擇車款")]),t._v(" "),t._l(t.modelList,(function(r,n){return e("option",{key:n,domProps:{value:r.id}},[t._v("\n                "+t._s(r.name)+"\n              ")])}))],2)]),t._v(" "),e("div",{staticClass:"col-span-3 mb-3 lg:mb-0"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.yearInputValue,expression:"yearInputValue"}],staticClass:"w-full h-12 p-3 text-black",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.yearInputValue=e.target.multiple?r:r[0]}}},[e("option",{attrs:{disabled:""}},[t._v("選擇年份")]),t._v(" "),t._l(t.yearList,(function(r,n){return e("option",{key:n},[t._v("\n                "+t._s(r)+"\n              ")])})),t._v(" "),e("option",{attrs:{selected:"",value:""}},[t._v("所有年份")])],2)]),t._v(" "),e("div",{staticClass:"col-span-1"},[e("button",{staticClass:"w-full h-full text-white font-medium bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 py-2",on:{click:t.search}},[e("fa",{staticClass:"text-sm mr-2",attrs:{icon:["fas","search"]}}),t._v("搜尋\n            ")],1)])])])])]),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-20"},[e("div",{staticClass:"py-10 lg:py-14"},[e("h2",{staticClass:"text-2xl lg:text-3xl font-semibold py-5"},[t._v("多媒體機車框")]),t._v(" "),e("div",{staticClass:"md:grid md:grid-cols-3 xl:grid-cols-4 gap-8"},t._l(t.carFrameList,(function(r,n){return e("div",{key:n,staticClass:"col-span-1 py-5"},[e("nuxt-link",{attrs:{to:{name:"carFrameDetail-id",query:{id:r.id}}}},[e("img",{staticClass:"mb-3",attrs:{src:JSON.parse(r.img)[0],alt:r.name}}),t._v(" "),e("hr",{staticClass:"mb-2"}),t._v(" "),e("h3",{staticClass:"text-xl font-semibold"},[e("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","arrow-alt-circle-right"]}}),e("i",[t._v(t._s(r.brand_name)+" "+t._s(r.car_name)+" "+t._s(r.name))])],1),t._v(" "),e("p",{staticClass:"text-xl flex items-center"},[e("span",{staticClass:"mr-2"},[t._v(t._s(r.year_start)+" ~ "+t._s(r.year_end))]),t._v(" "),e("span",{staticClass:"text-sm font-medium border rounded-sm border-yellow-400 px-1"},[t._v("\n                "+t._s(r.size)+"吋\n              ")])])])],1)})),0)]),t._v(" "),e("div",{staticClass:"py-10 lg:py-14"},[e("h2",{staticClass:"text-2xl lg:text-3xl font-semibold py-5"},[t._v("\n        安卓車用多媒體機\n      ")]),t._v(" "),e("div",{staticClass:"md:grid md:grid-cols-3 xl:grid-cols-4 gap-8"},t._l(t.carMediaList,(function(r,n){return e("div",{key:n,staticClass:"col-span-1 py-5"},[e("nuxt-link",{attrs:{to:{name:"multimediaDetail-id",query:{id:r.id}}}},[e("img",{staticClass:"mb-3",attrs:{src:r.img,alt:r.name}}),t._v(" "),e("hr",{staticClass:"mb-2"}),t._v(" "),e("h3",{staticClass:"text-xl font-semibold"},[e("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","arrow-alt-circle-right"]}}),e("i",[t._v(t._s(r.name))])],1)])],1)})),0)]),t._v(" "),e("div",{staticClass:"py-10 md:py-14 lg:py-20"},[e("h2",{staticClass:"text-2xl lg:text-3xl font-semibold py-5"},[t._v("盲點偵測")]),t._v(" "),e("div",{staticClass:"md:grid md:grid-cols-3 xl:grid-cols-4 gap-8"},t._l(t.carBlindSpotList,(function(r,n){return e("div",{key:n,staticClass:"col-span-1 py-5"},[e("nuxt-link",{attrs:{to:{name:"carBlindSpotDetail-id",query:{id:r.id}}}},[e("img",{staticClass:"mb-3",attrs:{src:r.img,alt:r.name}}),t._v(" "),e("hr",{staticClass:"mb-2"}),t._v(" "),e("h3",{staticClass:"text-xl font-semibold"},[e("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","arrow-alt-circle-right"]}}),e("i",[t._v(t._s(r.name))])],1)])],1)})),0)]),t._v(" "),e("div",{staticClass:"py-10 lg:py-14"},[e("h2",{staticClass:"text-2xl lg:text-3xl font-semibold py-5"},[t._v("車用配件")]),t._v(" "),e("div",{staticClass:"md:grid md:grid-cols-3 xl:grid-cols-4 gap-8"},t._l(t.carFittingList,(function(r,n){return e("div",{key:n,staticClass:"col-span-1 py-5"},[e("nuxt-link",{attrs:{to:{name:"fittingDetail-id",query:{id:r.id}}}},[e("img",{staticClass:"mb-3",attrs:{src:r.img,alt:r.name}}),t._v(" "),e("hr",{staticClass:"mb-2"}),t._v(" "),e("h3",{staticClass:"text-xl font-semibold"},[e("fa",{staticClass:"text-yellow-400 mr-3",attrs:{icon:["fas","arrow-alt-circle-right"]}}),e("i",[t._v(t._s(r.name))])],1)])],1)})),0)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.filterData.length>=20,expression:"filterData.length >= 20"}],staticClass:"container mx-auto px-5 py-20"},[e("div",{staticClass:"flex justify-center"},[e("ul",{staticClass:"flex"},[e("li",{directives:[{name:"show",rawName:"v-show",value:t.currentPage>1,expression:"currentPage > 1"}],staticClass:"bg-gray-50 hover:bg-yellow-400 text-2xl text-yellow-400 hover:text-white transition-all duration-300 cursor-pointer border px-5 py-2 mr-4",on:{click:t.decreasePage}},[e("fa",{attrs:{icon:["fas","caret-left"]}})],1),t._v(" "),e("li",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentPage,expression:"currentPage"}],staticClass:"w-20 h-12 p-3 text-black border mr-4",attrs:{name:"",id:""},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentPage=e.target.multiple?r:r[0]},function(e){return t.changePage()}]}},t._l(t.totalPage,(function(r,n){return e("option",{key:n},[t._v("\n              "+t._s(r)+"\n            ")])})),0)]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.currentPage<5,expression:"currentPage < 5"}],staticClass:"bg-gray-50 hover:bg-yellow-400 text-2xl text-yellow-400 hover:text-white transition-all duration-300 cursor-pointer border px-5 py-2",on:{click:t.increasePage}},[e("fa",{attrs:{icon:["fas","caret-right"]}})],1)])])])])}),[],!1,null,"382030ef",null);e.default=component.exports}}]);