webpackJsonp([1],{"4WSK":function(t,e){},AMpo:function(t,e){},EfNp:function(t,e){},IhWP:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("xd7I"),i={data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)},handleWechat:function(){this.$alert("Hi! My WeChat ID is LEIBINGYE!",{confirmButtonText:"Confirm"})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"nav-area"}},[n("div",{attrs:{id:"my-name"}},[n("router-link",{staticClass:"nav-link",staticStyle:{color:"#00CCFF"},attrs:{to:"/"}},[t._v("BENNY RAY")])],1),t._v(" "),n("el-menu",{attrs:{id:"nav-menu","default-active":t.activeIndex2,mode:"horizontal","background-color":"#282828","text-color":"#FFFFFF","active-text-color":"#FF3300",float:"right"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/Projects"}},[t._v("PROJECTS")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"3"}},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("BLOG")])],1),t._v(" "),n("el-submenu",{attrs:{index:"4"}},[n("template",{slot:"title"},[t._v("CONTACT")]),t._v(" "),n("el-menu-item",{attrs:{index:"4-1"}},[n("i",{staticClass:"el-icon-user"}),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://github.com/Raniac",target:"_blank"}},[t._v("GITHUB")])]),t._v(" "),n("el-menu-item",{attrs:{index:"4-2"}},[n("i",{staticClass:"el-icon-message"}),n("a",{attrs:{href:"mailto:leibingye@outlook.com"}},[t._v("E-MAIL")])]),t._v(" "),n("el-menu-item",{attrs:{index:"4-3"}},[n("i",{staticClass:"el-icon-chat-dot-round"}),n("a",{on:{click:t.handleWechat}},[t._v("WECHAT")])])],2)],1)],1)},staticRenderFns:[]};var o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"con-area"}},[e("iframe",{staticStyle:{float:"right"},attrs:{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"260",height:"50",src:"//music.163.com/outchain/player?type=2&id=1610850&auto=1&height=32"}}),this._v(" "),e("div",{attrs:{id:"content"}},[e("transition",{attrs:{name:"slide-fade"}},[e("router-view")],1)],1)])},staticRenderFns:[]};var s={name:"App",components:{Navigation:n("C7Lr")(i,r,!1,function(t){n("EfNp")},null,null).exports,Container:n("C7Lr")({name:"Container"},o,!1,function(t){n("AMpo")},null,null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navigation"),this._v(" "),e("Container")],1)},staticRenderFns:[]};var l=n("C7Lr")(s,c,!1,function(t){n("IhWP")},null,null).exports,u=n("ZWLj"),d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-area"},[e("div",{staticStyle:{color:"#fff",margin:"auto",height:"1000px",width:"auto"}},[e("h1",[this._v("Hi! I'm Benny!")])])])}]};var m=n("C7Lr")({name:"Home"},d,!1,function(t){n("oPZc")},null,null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-area"},[e("div",{staticStyle:{color:"#fff",margin:"auto",height:"1000px",width:"auto"}},[e("h1",[this._v("Projects will show here!")])])])}]};var v=n("C7Lr")({name:"Home"},h,!1,function(t){n("nQmg")},null,null).exports;a.default.use(u.a);var f=new u.a({routes:[{path:"/",name:"Home",component:m},{path:"/Projects",name:"Projects",component:v}]}),p=n("bzuk"),_=n.n(p);n("4WSK"),n("Xcu2");a.default.config.productionTip=!1,a.default.use(_.a),new a.default({el:"#app",router:f,components:{App:l},template:"<App/>"})},Xcu2:function(t,e){},nQmg:function(t,e){},oPZc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bbb128d7aac15a53e289.js.map