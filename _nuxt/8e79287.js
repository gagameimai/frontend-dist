(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{341:function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},351:function(t,n,e){"use strict";e(352)},352:function(t,n,e){"use strict";var o=e(2),r=e(8),l=e(4),c=e(28),d=e(6),f=e(48),h=e(145),v=e(13),m=e(55),x=e(144),_=e(228),w=e(7),k=e(17),y=w("replace"),I=TypeError,C=l("".indexOf),M=l("".replace),A=l("".slice),$=Math.max,j=function(t,n,e){return e>t.length?-1:""===n?e:C(t,n,e)};o({target:"String",proto:!0},{replaceAll:function(t,n){var e,o,l,w,F,J,O,T,D,E=c(this),H=0,L=0,P="";if(!f(t)){if((e=h(t))&&(o=v(c(x(t))),!~C(o,"g")))throw new I("`.replaceAll` does not allow non-global regexes");if(l=m(t,y))return r(l,t,E,n);if(k&&e)return M(v(E),t,n)}for(w=v(E),F=v(t),(J=d(n))||(n=v(n)),O=F.length,T=$(1,O),H=j(w,F,0);-1!==H;)D=J?v(n(F,H,w)):_(F,w,H,[],void 0,n),P+=A(w,L,H)+D,L=H+O,H=j(w,F,H+T);return L<w.length&&(P+=A(w,L)),P}})},354:function(t,n,e){t.exports=e.p+"img/banner.4fffefa.png"},391:function(t,n,e){var content=e(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("71785079",content,!0,{sourceMap:!1})},392:function(t,n,e){var content=e(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(27).default)("119fe0ac",content,!0,{sourceMap:!1})},447:function(t,n,e){"use strict";e(391)},448:function(t,n,e){var o=e(26)((function(i){return i[1]}));o.push([t.i,"@media(max-width:768px){.ck-table[data-v-012203d3]{width:100%!important}}.ck-table tr[data-v-012203d3]{border:3px solid #fff}.ck-table tr[data-v-012203d3]:nth-child(2n){background-color:#f9f9f9}.ck-table tr[data-v-012203d3]:nth-child(odd){background-color:#dedede}.ck-table tr td[data-v-012203d3]{padding:5px 15px;vertical-align:middle}.ck-table tr td[data-v-012203d3]:first-child{border-right:5px solid #fff;font-weight:700;text-align:center;width:30%}@media(max-width:768px){.ck-icon-table[data-v-012203d3]{width:100%!important}}.ck-icon-table img[data-v-012203d3]{display:inline}.ck-icon-table tr td[data-v-012203d3]{width:33%}",""]),o.locals={},t.exports=o},449:function(t,n,e){"use strict";e(392)},450:function(t,n,e){var o=e(26),r=e(341),l=e(354),c=o((function(i){return i[1]})),d=r(l);c.push([t.i,".banner[data-v-012203d3]{background-image:url("+d+")}",""]),c.locals={},t.exports=c},466:function(t,n,e){"use strict";e.r(n);e(46),e(30),e(72),e(351);var o={name:"fittingDetail-id",data:function(){return{fittingInfo:{}}},mounted:function(){this.getFitting()},methods:{getFitting:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/fitting/"+this.$route.query.id).then((function(n){var e=n.data.result;e&&(t.fittingInfo=e,t.fittingInfo.content=t.fittingInfo.content.replaceAll("<img",'<img class="mx-auto" style="hight: auto"'))}))}}},r=(e(447),e(449),e(22)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("section",[n("div",{staticClass:"hidden img_box banner md:flex justify-center items-center"},[n("p",{staticClass:"text-white text-2xl font-semibold"},[n("span",{staticClass:"hover:text-yellow-400 transition-all duration-300"}),t._v(" "),n("span",[t._v("首頁 / ")]),t._v(" "),n("span",[t._v("車用配件")]),t._v(" "),n("span",[t._v(" / ")]),t._v(" "),n("span",[t._v(t._s(t.fittingInfo.name))])])]),t._v(" "),n("div",{staticClass:"container mx-auto px-5 py-20"},[n("div",{staticClass:"max-w-5xl mx-auto text-center"},[n("h2",{staticClass:"text-center text-2xl lg:text-3xl font-semibold mb-5"},[t._v("\n        "+t._s(t.fittingInfo.name)+"\n      ")]),t._v(" "),n("p",{staticClass:"mb-5"},[t._v(t._s(t.fittingInfo.memo_in))]),t._v(" "),n("img",{staticClass:"w-full mb-10",attrs:{src:t.fittingInfo.img,alt:t.fittingInfo.name}})]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.fittingInfo.content)}})])])}),[],!1,null,"012203d3",null);n.default=component.exports}}]);