(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{339:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},349:function(t,e,n){"use strict";n(350)},350:function(t,e,n){"use strict";var l=n(2),o=n(8),r=n(4),c=n(26),m=n(6),d=n(48),f=n(145),v=n(13),h=n(55),x=n(144),_=n(228),M=n(7),w=n(17),I=M("replace"),y=TypeError,C=r("".indexOf),A=r("".replace),k=r("".slice),$=Math.max,j=function(t,e,n){return n>t.length?-1:""===e?n:C(t,e,n)};l({target:"String",proto:!0},{replaceAll:function(t,e){var n,l,r,M,J,O,T,D,E,H=c(this),L=0,P=0,Q="";if(!d(t)){if((n=f(t))&&(l=v(c(x(t))),!~C(l,"g")))throw new y("`.replaceAll` does not allow non-global regexes");if(r=h(t,I))return o(r,t,H,e);if(w&&n)return A(v(H),t,e)}for(M=v(H),J=v(t),(O=m(e))||(e=v(e)),T=J.length,D=$(1,T),L=j(M,J,0);-1!==L;)E=O?v(e(J,L,M)):_(J,M,L,[],void 0,e),Q+=k(M,P,L)+E,P=L+T,L=j(M,J,L+D);return P<M.length&&(Q+=k(M,P)),Q}})},353:function(t,e,n){t.exports=n.p+"img/banner.fc32726.png"},389:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("01e6255a",content,!0,{sourceMap:!1})},442:function(t,e,n){"use strict";n(389)},443:function(t,e,n){var l=n(28),o=n(339),r=n(353),c=l((function(i){return i[1]})),m=o(r);c.push([t.i,".banner[data-v-3bc55519]{background-image:url("+m+")}",""]),c.locals={},t.exports=c},456:function(t,e,n){"use strict";n.r(e);n(46),n(30),n(72),n(349);var l={name:"multimediaDetail-id",data:function(){return{multiMediasInfo:{}}},mounted:function(){this.getMultiMedias()},methods:{getMultiMedias:function(){var t=this;this.$http.get("https://admin.meimai.com.tw/api/multimedia/"+this.$route.query.id).then((function(e){var n=e.data.result;n&&(t.multiMediasInfo=n,t.multiMediasInfo.content=t.multiMediasInfo.content.replaceAll("<img",'<img class="mx-auto" style="hight: auto"'),t.multiMediasInfo.content=t.multiMediasInfo.content.replaceAll("<table",'<table class="mx-auto"'))}))}}},o=(n(442),n(22)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"hidden img_box banner md:flex justify-center items-center"},[e("p",{staticClass:"text-white text-2xl font-semibold"},[e("span",{staticClass:"hover:text-yellow-400 transition-all duration-300"}),t._v(" "),e("span",[t._v("首頁 / ")]),t._v(" "),e("span",[t._v("安卓多媒體機")]),t._v(" "),e("span",[t._v(" / ")]),t._v(" "),e("span",[t._v(t._s(t.multiMediasInfo.name))])])]),t._v(" "),e("div",{staticClass:"container mx-auto px-5 py-20"},[e("div",{staticClass:"max-w-5xl mx-auto text-center"},[e("h2",{staticClass:"text-center text-2xl lg:text-3xl font-semibold mb-5"},[t._v("\n        "+t._s(t.multiMediasInfo.name)+"\n      ")]),t._v(" "),e("p",{staticClass:"mb-5"},[t._v(t._s(t.multiMediasInfo.memo_in))]),t._v(" "),e("img",{staticClass:"w-full mb-10",attrs:{src:t.multiMediasInfo.img,alt:t.multiMediasInfo.name}})]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.multiMediasInfo.content)}})])])}),[],!1,null,"3bc55519",null);e.default=component.exports}}]);