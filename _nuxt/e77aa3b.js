(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{352:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},362:function(t,e,n){"use strict";n(363)},363:function(t,e,n){"use strict";var l=n(2),o=n(9),r=n(4),d=n(23),c=n(6),f=n(35),m=n(151),h=n(14),v=n(57),x=n(150),_=n(233),w=n(7),M=n(18),k=w("replace"),y=TypeError,I=r("".indexOf),C=r("".replace),A=r("".slice),$=Math.max;l({target:"String",proto:!0},{replaceAll:function(t,e){var n,l,r,w,j,J,O,T,D,E=d(this),H=0,L=0,P="";if(!f(t)){if((n=m(t))&&(l=h(d(x(t))),!~I(l,"g")))throw new y("`.replaceAll` does not allow non-global regexes");if(r=v(t,k))return o(r,t,E,e);if(M&&n)return C(h(E),t,e)}for(w=h(E),j=h(t),(J=c(e))||(e=h(e)),O=j.length,T=$(1,O),H=I(w,j);-1!==H;)D=J?h(e(j,H,w)):_(j,w,H,[],void 0,e),P+=A(w,L,H)+D,L=H+O,H=H+T>w.length?-1:I(w,j,H+T);return L<w.length&&(P+=A(w,L)),P}})},366:function(t,e,n){t.exports=n.p+"img/banner.fc32726.png"},403:function(t,e,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("2a93e683",content,!0,{sourceMap:!1})},404:function(t,e,n){var content=n(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("60c7fc9c",content,!0,{sourceMap:!1})},457:function(t,e,n){"use strict";n(403)},458:function(t,e,n){var l=n(27)((function(i){return i[1]}));l.push([t.i,"@media(max-width:768px){.ck-table[data-v-562999de]{width:100%!important}}.ck-table tr[data-v-562999de]{border:3px solid #fff}.ck-table tr[data-v-562999de]:nth-child(2n){background-color:#f9f9f9}.ck-table tr[data-v-562999de]:nth-child(odd){background-color:#dedede}.ck-table tr td[data-v-562999de]{padding:5px 15px;vertical-align:middle}.ck-table tr td[data-v-562999de]:first-child{border-right:5px solid #fff;font-weight:700;text-align:center;width:30%}@media(max-width:768px){.ck-icon-table[data-v-562999de]{width:100%!important}}.ck-icon-table img[data-v-562999de]{display:inline}.ck-icon-table tr td[data-v-562999de]{width:33%}",""]),l.locals={},t.exports=l},459:function(t,e,n){"use strict";n(404)},460:function(t,e,n){var l=n(27),o=n(352),r=n(366),d=l((function(i){return i[1]})),c=o(r);d.push([t.i,".banner[data-v-562999de]{background-image:url("+c+")}",""]),d.locals={},t.exports=d},473:function(t,e,n){"use strict";n.r(e);n(46),n(30),n(75),n(362);var l={name:"multimediaDetail-id",data:function(){return{multiMediasInfo:{}}},mounted:function(){this.getMultiMedias()},methods:{getMultiMedias:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/multimedia/"+this.$route.query.id).then((function(e){var n=e.data.result;n&&(t.multiMediasInfo=n,t.multiMediasInfo.content=t.multiMediasInfo.content.replaceAll("<img",'<img class="mx-auto" style="hight: auto"'))}))}}},o=(n(457),n(459),n(22)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"hidden img_box banner md:flex justify-center items-center"},[e("p",{staticClass:"text-white text-2xl font-semibold"},[e("span",{staticClass:"hover:text-yellow-400 transition-all duration-300"}),t._v(" "),e("span",[t._v("首頁 / ")]),t._v(" "),e("span",[t._v("安卓多媒體機")]),t._v(" "),e("span",[t._v(" / ")]),t._v(" "),e("span",[t._v(t._s(t.multiMediasInfo.name))])])]),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-20"},[e("div",{staticClass:"max-w-5xl mx-auto text-center"},[e("h2",{staticClass:"text-center text-2xl lg:text-3xl font-semibold mb-5"},[t._v("\n        "+t._s(t.multiMediasInfo.name)+"\n      ")]),t._v(" "),e("p",{staticClass:"mb-5"},[t._v(t._s(t.multiMediasInfo.memo_in))]),t._v(" "),e("img",{staticClass:"w-full mb-10",attrs:{src:t.multiMediasInfo.img,alt:t.multiMediasInfo.name}})]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.multiMediasInfo.content)}})])])}),[],!1,null,"562999de",null);e.default=component.exports}}]);