(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{341:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},351:function(t,e,n){"use strict";n(352)},352:function(t,e,n){"use strict";var l=n(2),o=n(8),r=n(4),c=n(28),d=n(6),f=n(48),m=n(145),v=n(13),_=n(55),h=n(144),x=n(228),S=n(7),y=n(17),C=S("replace"),w=TypeError,I=r("".indexOf),B=r("".replace),L=r("".slice),V=Math.max,k=function(t,e,n){return n>t.length?-1:""===e?n:I(t,e,n)};l({target:"String",proto:!0},{replaceAll:function(t,e){var n,l,r,S,A,M,j,$,D,E=c(this),J=0,O=0,P="";if(!f(t)){if((n=m(t))&&(l=v(c(h(t))),!~I(l,"g")))throw new w("`.replaceAll` does not allow non-global regexes");if(r=_(t,C))return o(r,t,E,e);if(y&&n)return B(v(E),t,e)}for(S=v(E),A=v(t),(M=d(e))||(e=v(e)),j=A.length,$=V(1,j),J=k(S,A,0);-1!==J;)D=M?v(e(A,J,S)):x(A,S,J,[],void 0,e),P+=L(S,O,J)+D,O=J+j,J=k(S,A,J+$);return O<S.length&&(P+=L(S,O)),P}})},353:function(t,e,n){t.exports=n.p+"img/banner.3f09044.png"},387:function(t,e,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("33deb1fa",content,!0,{sourceMap:!1})},437:function(t,e,n){"use strict";n(387)},438:function(t,e,n){var l=n(26),o=n(341),r=n(353),c=l((function(i){return i[1]})),d=o(r);c.push([t.i,".banner[data-v-455fde57]{background-image:url("+d+")}",""]),c.locals={},t.exports=c},458:function(t,e,n){"use strict";n.r(e);n(46),n(49),n(47),n(15),n(30),n(72),n(351),n(33);var l={name:"blindSpotDetail-id",data:function(){return{blindSpotInfo:{},selectBrandValue:{id:1,name:"AUDI"},brandList:[],blindSpotList:[]}},mounted:function(){this.getBlindSpot()},methods:{getBlindSpot:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/blindspot/"+this.$route.query.id).then((function(e){var n=e.data.result;n&&(t.blindSpotInfo=n,t.blindSpotInfo.content=t.blindSpotInfo.content.replaceAll("<img",'<img class="mx-auto" style="hight: auto"'),t.blindSpotInfo.content=t.blindSpotInfo.content.replaceAll("<table",'<table class="mx-auto"'),t.brandList=n.car_brand,t.selectBrandValue&&t.brandChange())}))},brandChange:function(){var t=this;this.selectBrandValue&&(this.blindSpotList=[],this.blindSpotInfo.depend.forEach((function(e){t.selectBrandValue.id==e.car_brand_id&&t.blindSpotList.push(e)})))}}},o=(n(437),n(22)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"hidden img_box banner md:flex justify-center items-center"},[e("p",{staticClass:"text-white text-2xl font-semibold"},[e("span",{staticClass:"hover:text-yellow-400 transition-all duration-300"}),t._v(" "),e("span",[t._v("首頁 / ")]),t._v(" "),e("span",[t._v("盲點偵測")]),t._v(" "),e("span",[t._v(" / ")]),t._v(" "),e("span",[t._v(t._s(t.blindSpotInfo.name))])])]),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-20"},[e("div",{staticClass:"max-w-5xl mx-auto text-center"},[e("h2",{staticClass:"text-center text-2xl lg:text-3xl font-semibold mb-5"},[t._v("\n        "+t._s(t.blindSpotInfo.name)+"\n      ")]),t._v(" "),e("p",{staticClass:"mb-5"},[t._v(t._s(t.blindSpotInfo.memo_in))]),t._v(" "),e("img",{staticClass:"w-full mb-10",attrs:{src:t.blindSpotInfo.img,alt:t.blindSpotInfo.name}})]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.blindSpotInfo.content)}})]),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-10 md:py-20"},[e("h2",{staticClass:"text-center text-2xl lg:text-3xl font-semibold mb-5"},[t._v("\n      適用車款\n    ")]),t._v(" "),e("div",{staticClass:"flex justify-center items-center"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectBrandValue,expression:"selectBrandValue"}],staticClass:"block w-56 border rounded px-3 py-1 mx-auto mb-10",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectBrandValue=e.target.multiple?n:n[0]},t.brandChange]}},t._l(t.brandList,(function(n,l){return e("option",{key:l,domProps:{value:n}},[t._v("\n          "+t._s(n.name)+"\n        ")])})),0)]),t._v(" "),e("h3",{staticClass:"text-2xl font-semibold mb-5"},[t._v(t._s(t.selectBrandValue.name))]),t._v(" "),t.blindSpotList.length>0?e("div",{staticClass:"md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 mb-14"},t._l(t.blindSpotList,(function(n,l){return e("div",{key:l,staticClass:"col-span-1 mb-5 md:mb-0"},[e("div",{staticClass:"border border-gray-300 rounded px-5 py-3"},[e("h4",{staticClass:"font-semibold"},[t._v("車款："+t._s(n.style))]),t._v(" "),e("p",[t._v("年份："+t._s(n.year))]),t._v(" "),e("p",[t._v("規格："+t._s(n.spc))])])])})),0):t._e()])])}),[],!1,null,"455fde57",null);e.default=component.exports}}]);