(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"/tfA":function(t,s,n){"use strict";var a=n("EXsS"),i=n.n(a);i.a},"6A56":function(t,s,n){"use strict";n.r(s);var a=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"playlist"},[n("myScroll",{staticClass:"scroll"},[n("div",[n("div",{staticClass:"header"},[n("div",{staticClass:"logo",on:{click:t.back}},[n("i",{staticClass:"iconfont icon-back"})]),n("div",{staticClass:"tab",style:"background:url("+t.playlist.coverImgUrl+")"},[n("div",[n("img",{attrs:{width:"126px",height:"126px",src:t.playlist.coverImgUrl,alt:""}})]),n("div",{staticClass:"right"},[n("span",[t._v(t._s(t.playlist.name))]),n("div",{staticClass:"author"},[n("span",{staticClass:"author-name"})])])]),n("div",{staticClass:"tags"},[t._v("\n                    标签:\n                    "),t._l(t.playlist.tags,function(s,a){return n("span",{key:a,staticClass:"tag"},[t._v("\n                        "+t._s(s)+"\n                    ")])})],2)]),n("div",{staticClass:"content"},[n("span",[t._v("简介："+t._s(t.playlist.description))])]),n("p",[t._v("歌曲列表")]),n("ul",{staticClass:"list"},t._l(t.playlist.tracks,function(s,a){return n("li",{key:a,staticClass:"item",on:{click:function(n){t.play(s.id)}}},[n("div",[n("div",{staticClass:"name"},[n("span",[t._v(t._s(s.name.slice(0,15)))])]),n("div",{staticClass:"author"},[n("span",[t._v(t._s(s.al.name))]),t._v(" -\n                            "),n("span",[t._v(t._s(s.ar[0].name))])]),n("i",{staticClass:"iconfont icon-iconset0481"})])])}))])])],1)},i=[],e=(n("yt8O"),n("VRzm"),n("6fzR")),r=n("Qrqp"),c={data:function(){return{playlist:[]}},methods:{play:function(t){this.$router.push({path:"song",query:{id:t}})},back:function(){this.$router.back()}},computed:{id:function(){return this.$route.query.id}},created:function(){var t=this;console.log(this.$route.query.id),Object(r["c"])(this.id).then(function(s){t.playlist=s,console.log(t.playlist)})},components:{myScroll:e["a"]}},l=c,o=(n("/tfA"),n("KHd+")),u=Object(o["a"])(l,a,i,!1,null,"2dcd520d",null);s["default"]=u.exports},EXsS:function(t,s,n){},Qrqp:function(t,s,n){"use strict";n.d(s,"a",function(){return e}),n.d(s,"d",function(){return r}),n.d(s,"c",function(){return c}),n.d(s,"b",function(){return l});var a=n("vDqi"),i=n.n(a);i.a.defaults.baseURL="http://summerboy.cn:3000/";var e=function(){return i.a.get("/banner").then(function(t){return Promise.resolve(t.data.banners)})},r=function(){return i.a.get("/personalized").then(function(t){return Promise.resolve(t.data.result)})},c=function(t){return i.a.get("/playlist/detail?id=".concat(t)).then(function(t){return Promise.resolve(t.data.playlist)})},l=function(){return i.a.get("/personalized/newsong").then(function(t){return Promise.resolve(t.data.result)})}}}]);
//# sourceMappingURL=5.248a9245.js.map