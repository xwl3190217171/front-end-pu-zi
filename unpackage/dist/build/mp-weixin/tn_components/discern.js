(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tn_components/discern"],{"0d3f":function(n,t,e){"use strict";(function(n){e("a999");u(e("66fd"));var t=u(e("dd58"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"12b1":function(n,t,e){"use strict";var u=e("65c3"),o=e.n(u);o.a},"65c3":function(n,t,e){},"78e3":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return u}));var u={uNoticeBar:function(){return e.e("uview-ui/components/u-notice-bar/u-notice-bar").then(e.bind(null,"9c6a"))}},o=function(){var n=this,t=n.$createElement;n._self._c},c=[]},dd58:function(n,t,e){"use strict";e.r(t);var u=e("78e3"),o=e("fb42");for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);e("12b1");var i,r=e("f0c5"),a=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,"2b470cac",null,!1,u["a"],i);t["default"]=a.exports},fb42:function(n,t,e){"use strict";e.r(t);var u=e("ff04"),o=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);t["default"]=o.a},ff04:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{list:["隐私说明：请按要求上传真实的证件照片，您所上传的行驶证仅用于平台账户绑定，请放心上传"],imgUrl1:"",imgUrl2:""}},watch:{},onReady:function(){n.getSystemInfo({success:function(n){console.log(n.windowHeight)}})},mounted:function(){},methods:{uploadImg1:function(){n.chooseImage({count:1,success:function(t){t.tempFilePaths;return console.log(t),n.showToast({icon:"none",title:"上传成功，暂无接口预览",duration:2e3}),!1}})}}};t.default=e}).call(this,e("543d")["default"])}},[["0d3f","common/runtime","common/vendor"]]]);