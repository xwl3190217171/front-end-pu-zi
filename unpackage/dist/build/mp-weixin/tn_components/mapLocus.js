(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tn_components/mapLocus"],{"04d8":function(t,e,n){"use strict";n.r(e);var o=n("545e"),i=n("cfa3");for(var l in i)"default"!==l&&function(t){n.d(e,t,(function(){return i[t]}))}(l);n("ab64");var a,u=n("f0c5"),d=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"11dc72fa",null,!1,o["a"],a);e["default"]=d.exports},"0b74":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{map:null,windowHeight:0,mapHeight:0,timer:null,isDisabled:!1,isStart:!1,playIndex:1,id:0,title:"map",latitude:34.263734,longitude:108.934843,covers:[{id:1,width:42,height:47,rotate:270,latitude:34.259428,longitude:108.94704,iconPath:"http://cdn.zhoukaiwen.com/car.png",callout:{content:"陕A·88888",display:"ALWAYS",fontWeight:"bold",color:"#5A7BEE",fontSize:"12px",bgColor:"#ffffff",padding:5,textAlign:"center"},anchor:{x:.5,y:.5}}],polyline:[],coordinate:[{latitude:34.259428,longitude:108.94704,problem:!1},{latitude:34.252918,longitude:108.946963,problem:!1},{latitude:34.252408,longitude:108.94624,problem:!1},{latitude:34.249286,longitude:108.946184,problem:!1},{latitude:34.24867,longitude:108.94664,problem:!1},{latitude:34.248129,longitude:108.946826,problem:!1},{latitude:34.243537,longitude:108.946816,problem:!0},{latitude:34.243478,longitude:108.939003,problem:!0},{latitude:34.241218,longitude:108.939027,problem:!0},{latitude:34.241192,longitude:108.934802,problem:!0},{latitude:34.241182,longitude:108.932235,problem:!0},{latitude:34.247227,longitude:108.932311,problem:!0},{latitude:34.250833,longitude:108.932352,problem:!0},{latitude:34.250877,longitude:108.931756,problem:!0},{latitude:34.250944,longitude:108.931576,problem:!0},{latitude:34.250834,longitude:108.929662,problem:!0},{latitude:34.250924,longitude:108.926015,problem:!0},{latitude:34.250802,longitude:108.910121,problem:!0},{latitude:34.269718,longitude:108.909921,problem:!0},{latitude:34.269221,longitude:108.922366,problem:!1},{latitude:34.274531,longitude:108.922388,problem:!1},{latitude:34.276201,longitude:108.923433,problem:!1},{latitude:34.276559,longitude:108.924004,problem:!1},{latitude:34.276785,longitude:108.945855,problem:!1}],posi:{id:1,width:32,height:32,latitude:0,longitude:0,iconPath:"http://cdn.zhoukaiwen.com/car.png",callout:{content:"陕A·85Q1Q",display:"BYCLICK",fontWeight:"bold",color:"#5A7BEE",fontSize:"12px",bgColor:"#ffffff",padding:5,textAlign:"center"},anchor:{x:.5,y:.5}}}},watch:{},onShareAppMessage:function(t){return{title:"看看这个小程序多好玩～"}},onReady:function(){var e=this;this.map=t.createMapContext("map"),t.getSystemInfo({success:function(t){e.windowHeight=t.windowHeight}})},mounted:function(){this.setNavTop(".navBox"),this.polyline=[{points:this.coordinate,color:"#025ADD",width:4,dottedLine:!1}]},methods:{setNavTop:function(e){var n=this,o=t.createSelectorQuery().select(e);o.boundingClientRect((function(t){console.log("tabInList基本信息 = "+t.height),n.mapHeight=n.windowHeight-t.height,console.log(n.mapHeight)})).exec()},start:function(){this.isStart=!0,this.isDisabled=!0;var e=this.coordinate,n=e.length,o=e[this.playIndex],i=this;i.map.translateMarker({markerId:1,autoRotate:!0,destination:{longitude:o.longitude,latitude:o.latitude},duration:700,complete:function(){i.playIndex++,i.playIndex<n?i.start(i.playIndex,e):(console.log("okokok"),t.showToast({title:"播放完成",duration:1400,icon:"none"}),i.playIndex=0,i.isStart=!1,i.isDisabled=!1)},animationEnd:function(){},fail:function(t){}})}}};e.default=n}).call(this,n("543d")["default"])},3505:function(t,e,n){},"545e":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},l=[]},ab64:function(t,e,n){"use strict";var o=n("3505"),i=n.n(o);i.a},cfa3:function(t,e,n){"use strict";n.r(e);var o=n("0b74"),i=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e["default"]=i.a},fb25:function(t,e,n){"use strict";(function(t){n("a999");o(n("66fd"));var e=o(n("04d8"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["fb25","common/runtime","common/vendor"]]]);