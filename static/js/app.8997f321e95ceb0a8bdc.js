webpackJsonp([1],Array(56).concat([function(t,e,n){"use strict";var o,i,s,a,r,u;Object.defineProperty(e,"__esModule",{value:!0}),o=n(13),i=n(57),n.n(i),n(58),n(137),n(140),n(142),s=n(143),a=n(146),r=n(166),u=n.n(r),i.sync(s.a,a.a),new o.default({router:a.a,store:s.a,el:"#app",template:"<App/>",components:{App:u.a}}).$mount()},,function(t,e,n){"use strict";var o=n(13),i=n(39),s=n(59),a=n.n(s),r=n(40),u=n(60),l=n(41),c=n.n(l),d=n(62),p=(n.n(d),n(128));o.default.use(i.a),o.default.use(a.a),o.default.use(r.a),o.default.use(c.a),o.default.use(u.a),o.default.use(p.a),o.default.use(d,{load:{key:"AIzaSyAzDCg1d-pXblLwlmI4Rj7EYIDZAvdfpFs"}})},,,function(t,e){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var o=n(6)(n(111),n(112),null,null,null);t.exports=o.exports},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"flyaway"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2)])},staticRenderFns:[]}},function(t,e,n){function o(t){n(114)}var i=n(6)(n(116),n(117),o,null,null);t.exports=i.exports},function(t,e){},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-map-container"},[n("div",{ref:"vue-map",staticClass:"vue-map"}),t._v(" "),n("div",{staticClass:"vue-map-hidden"},[t._t("default")],2),t._v(" "),t._t("visible")],2)},staticRenderFns:[]}},function(t,e,n){function o(t){n(119)}var i=n(6)(n(120),n(121),o,null,null);t.exports=i.exports},function(t,e){},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-street-view-pano-container"},[n("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},function(t,e,n){var o=n(6)(n(123),n(124),null,null,null);t.exports=o.exports},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("span",{domProps:{textContent:t._s(t.label)}}),t._v(" "),n("input",{ref:"input",class:t.className,attrs:{type:"text",placeholder:t.placeholder}})])},staticRenderFns:[]}},function(t,e,n){var o=n(6)(n(126),n(127),null,null,null);t.exports=o.exports},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value}})},staticRenderFns:[]}},function(t,e,n){"use strict";function o(t){t.prototype.$toast=new c}var i=n(129),s=n.n(i),a=n(133),r=n.n(a),u=n(134),l=n.n(u),c=function(){function t(){r.a(this,t),this.queue=[]}return l.a(t,[{key:"toast",value:function(t){var e=document.createElement("div");return e.classList.add("toast"),e.classList.add("toast--"+t),document.body.appendChild(e),e}},{key:"checkQueue",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(){e&&e();var n=t.queue.shift();n&&n.length&&t.launchToast.apply(t,s.a(n))}}},{key:"addOnQueue",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=this,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=[t,e,n,this.checkQueue(o),a,r];this.queue.push(u),1===this.queue.length&&setTimeout(function(){i.launchToast.apply(i,s.a(i.queue.shift()))},500)}},{key:"launchToast",value:function(t){var e,n,o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"right",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,l=document.querySelector(".toast--"+i);l||(l=this.toast(i)),e=document.createElement("div"),e.classList.add("toast__content"),"snack"===i?(n=document.createElement("span"),n.classList.add("toast__message"),n.innerHTML=t,e.appendChild(n),r&&u&&(o=document.createElement("button"),o.classList.add("md-button"),o.classList.add("md-accent"),o.classList.add("md-theme-default"),o.innerHTML=r,o.addEventListener("click",u),e.appendChild(o))):e.innerHTML=t,l.appendChild(e),setTimeout(function(){return e.classList.add("toast__content--active")},10),setTimeout(function(){e.classList.remove("toast__content--active"),e.classList.add("toast__content--remove"),setTimeout(function(){e.remove(),a&&a()},300)},s)}},{key:"create",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"right",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;if("snack"===e)return void this.addOnQueue(t,e,n,o,i,s);this.launchToast(t,e,n,o,i,s)}}]),t}();"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.a=o},,,,,,,,,function(t,e,n){"use strict";var o=n(13),i=n(138);o.default.directive("cnpj",i.a)},function(t,e,n){"use strict";var o,i,s;n.d(e,"a",function(){return s}),o=n(139),i=n.n(o),s={bind:function(t){i.a(t).maskPattern("99.999.999/9999-99")}}},,function(t,e,n){"use strict";var o=n(41),i=(n.n(o),n(141));o.Validator.extend("cnpj",i.a)},function(t,e,n){"use strict";var o;n.d(e,"a",function(){return o}),o={getMessage:function(){return"CNPJ inválido"},validate:function(t){var e,n,o,i,s,a,r,u=t.replace(/[^\d]+/g,"");if(""==u)return!1;if(14!=u.length)return!1;if("00000000000000"==u||"11111111111111"==u||"22222222222222"==u||"33333333333333"==u||"44444444444444"==u||"55555555555555"==u||"66666666666666"==u||"77777777777777"==u||"88888888888888"==u||"99999999999999"==u)return!1;for(e=u.length-2,n=u.substring(0,e),o=u.substring(e),i=0,s=e-7,a=e;a>=1;a--)i+=n.charAt(e-a)*s--,s<2&&(s=9);if((i%11<2?0:11-i%11)!=o.charAt(0))return!1;for(e+=1,n=u.substring(0,e),i=0,s=e-7,r=e;r>=1;r--)i+=n.charAt(e-r)*s--,s<2&&(s=9);return(i%11<2?0:11-i%11)==o.charAt(1)}}},function(t,e,n){"use strict";var o=n(13),i={primary:{color:"blue",hue:500},accent:{color:"red",hue:800},warn:{color:"red",hue:400},background:"white"};o.default.material.registerTheme("default",i)},function(t,e,n){"use strict";var o=n(39),i=n(144),s=new o.a.Store(i.a);e.a=s},function(t,e,n){"use strict";var o=n(145);e.a={modules:{channel:o.a},strict:!0}},function(t,e,n){"use strict";var o=n(44),i=n.n(o),s={adicionarCanal:function(t,e){e&&"object"===(void 0===e?"undefined":i.a(e))&&!e.hasOwnProperty("length")&&t.canais.unshift(e)}},a={adicionarCanal:function(t,e){(0,t.commit)("adicionarCanal",e)}},r={getCanais:function(t){return t.canais},getCabecalhoCanais:function(t){return t.cabecalhoCanais}},u={cabecalhoCanais:[],canais:[]};e.a={namespaced:!0,actions:a,getters:r,state:u,mutations:s}},function(t,e,n){"use strict";function o(t){return function(){return n(165)(t+".vue")}}var i,s,a,r,u,l;n.d(e,"a",function(){return l}),i=n(40),s=n(147),a=n.n(s),r=[{path:"/",component:a.a,children:[{path:"map",name:"map",component:o("../spa/map/Map")},{path:"form",name:"form",component:o("../spa/route/Form")}]}],u={routes:r,saveScrollPosition:!0},l=new i.a(u)},function(t,e,n){function o(t){n(148)}var i=n(6)(n(149),n(164),o,null,null);t.exports=i.exports},function(t,e){},function(t,e,n){"use strict";var o,i,s,a,r,u;Object.defineProperty(e,"__esModule",{value:!0}),o=n(150),i=n.n(o),s=n(154),a=n.n(s),r=n(158),u=n.n(r),e.default={name:"Home",data:function(){return{showDialog:!1,showMap:!1,search:""}},computed:{pageName:function(){return this.$route.name}},components:{MapG:u.a,Sidebar:i.a,Toolbar:a.a},methods:{toggleSidenav:function(){this.$refs.sidenav.toggle()},openDialog:function(t){this.$refs[t].open()},closeDialog:function(t){this.$refs[t].close(),window.localStorage.setItem("showDialog",!0)},onOpen:function(){console.log("Opened")},onClose:function(t){console.log("Closed",t)},shouldShowDialog:function(){window.localStorage.getItem("showDialog")||this.openDialog("dialog1")},shouldOpenMap:function(t){this.search=t,this.showMap||(this.showMap=!0)},showErrorDialog:function(){this.$refs.dialog2.open()}},mounted:function(){var t=this;setTimeout(function(){t.shouldShowDialog()},1e3)}}},function(t,e,n){function o(t){n(151)}var i=n(6)(n(152),n(153),o,null,null);t.exports=i.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{menuList:{type:Array,default:function(){return[{text:"Favoritos",icon:"favorite",url:""},{text:"Configs",icon:"settings",url:"",sub:[{text:"Rowing",icon:"rowing",url:""},{text:"Ethernet",icon:"settings_ethernet",url:""}]},{text:"delta",icon:"change_history",url:""}]}}},methods:{toggle:function(){this.$refs.leftSidenav.toggle()},lockBodyScroll:function(){document.body.style.overflowY="hidden"},unlockBodyScroll:function(){document.body.style.overflowY="auto"}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-sidenav",{ref:"leftSidenav",staticClass:"md-left Sidebar__Wrapper",on:{open:t.lockBodyScroll,close:t.unlockBodyScroll}},[n("md-toolbar",{staticClass:"md-account-header"},[n("md-list",{staticClass:"md-transparent"},[n("md-list-item",{staticClass:"md-avatar-list"},[n("md-avatar",{staticClass:"md-large"},[n("img",{attrs:{src:"https://placeimg.com/64/64/people/8",alt:"People"}})]),t._v(" "),n("span",{staticStyle:{flex:"1"}}),t._v(" "),n("md-avatar",[n("img",{attrs:{src:"https://placeimg.com/40/40/people/3",alt:"People"}})]),t._v(" "),n("md-avatar",[n("img",{attrs:{src:"https://placeimg.com/40/40/people/4",alt:"People"}})])],1),t._v(" "),n("md-list-item",[n("div",{staticClass:"md-list-text-container"},[n("span",[t._v("John Doe")]),t._v(" "),n("span",[t._v("johndoe@email.com")])]),t._v(" "),n("md-button",{staticClass:"md-icon-button md-list-action"},[n("md-icon",[t._v("arrow_drop_down")])],1)],1)],1)],1),t._v(" "),n("md-list",t._l(t.menuList,function(e){return n("md-list-item",{key:e},[n("md-icon",[t._v(t._s(e.icon))]),t._v(" "),n("span",[t._v(t._s(e.text))]),t._v(" "),e.sub?n("md-list-expand",[n("md-list",t._l(e.sub,function(e){return n("md-list-item",{key:e,staticClass:"md-inset"},[e.icon?n("md-icon",[t._v(t._s(e.icon))]):t._e(),t._v(" "),e.text?n("span",[t._v(t._s(e.text))]):t._e()],1)}))],1):t._e()],1)}))],1)},staticRenderFns:[]}},function(t,e,n){function o(t){n(155)}var i=n(6)(n(156),n(157),o,null,null);t.exports=i.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{hideMenu:{type:Boolean,default:function(){return!1}},title:{type:String,default:function(){return""}},options:{type:Array,default:function(){return[]}}},data:function(){return{progress:0,progressInterval:null,done:!1,transition:!0,query:""}},components:{},methods:{toggleSidenav:function(){this.$emit("TOGGLE_SIDEBAR")},emitSearch:function(){var t=this.query;if(t)return void this.$emit("search",t.trim().toUpperCase());this.$emit("error")}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-toolbar",[n("md-input-container",{nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.emitSearch(e)}}},[n("label",[t._v("Type 'T131' and press Enter")]),t._v(" "),n("md-input",{model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1)},staticRenderFns:[]}},function(t,e,n){function o(t){n(159)}var i=n(6)(n(160),n(163),o,null,null);t.exports=i.exports},function(t,e){},function(t,e,n){"use strict";var o,i,s,a;Object.defineProperty(e,"__esModule",{value:!0}),o=n(42),i=n.n(o),s=n(161),a=n(162),e.default={name:"Map",props:{showMap:{type:Boolean,default:function(){return!1}},search:{type:String,default:"T131"}},data:function(){return{orionBusResources:s.a(this.$resource),orionStopResources:a.a(this.$resource),globalIndex:0,center:{lat:-18.9176744,lng:-48.2604986},entities:[],buses:[],busPosition:[],busStops:[],intervals:{},intervalTime:2e3,hasError:null}},computed:{},watch:{search:function(){this.resetAll()},hasError:function(){this.hasError||this.startRequestEventLoop()}},methods:{clearIntervals:function(){var t=this,e=i.a(this.intervals);e.length&&e.forEach(function(e){return window.clearInterval(t.intervals[e])}),this.intervals={}},closeDialog:function(t){this.$refs[t].close()},createEventLoop:function(t){var e,n,o=this;t.currentIndex=0,e=t._id,n=window.setInterval(function(){var e=t.currentIndex+1;e>=t.location.length&&(t.currentIndex=0),t.currentIndex=e,o.extractBusPosition(t.location[e])},this.intervalTime),this.registerInterval(e,n)},extractBusPosition:function(t){this.busPosition.length+1>5&&(this.busPosition=[]),this.busPosition.push(t)},openDialog:function(t){this.$refs[t].open()},onClose:function(t){console.log("Closed",t)},onOpen:function(){console.log("Opened")},registerInterval:function(t,e){this.intervals.hasOwnProperty(t)||(this.intervals[t]=e)},requestPopulateMap:function(){this.search&&(this.requestPopulateBus(),this.requestPopulateStop())},requestPopulateBus:function(){var t=this;this.orionBusResources.get({id:this.search}).then(function(e){t.buses=e.body,t.buses.forEach(function(e){return t.createEventLoop(e)}),t.hasError=null}).catch(function(e){t.hasError=e,t.$emit("error",t.hasError)})},requestPopulateStop:function(){var t=this;this.orionStopResources.get({id:this.search}).then(function(e){t.busStops=e.body,t.hasError=null}).catch(function(e){t.hasError=e,t.$emit("error",t.hasError)})},resetAll:function(){this.clearIntervals(),this.busPosition=[],this.requestPopulateMap()},startRequestEventLoop:function(){this.resetAll()}},mounted:function(){this.resetAll()}}},function(t,e,n){"use strict";(function(t){var o,i,s;n.d(e,"a",function(){return s}),t&&Object({NODE_ENV:"production"}),o="http://buzapp.com.br:1337",i={get:{method:"GET",url:o+"{/id}"}},s=function(t){return t("",{},i)}}).call(e,n(37))},function(t,e,n){"use strict";(function(t){var o,i,s;n.d(e,"a",function(){return s}),t&&Object({NODE_ENV:"production"}),o="http://buzapp.com.br:1337",i={get:{method:"GET",url:o+"{/id}"}},s=function(t){return t(""+o,{},i)}}).call(e,n(37))},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("gmap-map",{attrs:{center:t.center,zoom:14}},[t._l(t.busPosition,function(e){return t.showMap&&t.busPosition&&t.busPosition.length?n("gmap-marker",{key:e,attrs:{icon:"https://github.com/pablohpsilva/busapp-pwa/blob/master/src/assets/img/bus.png?raw=true",position:e.position,clickable:!0,draggable:!1},on:{click:function(n){t.center=e.position}}}):t._e()}),t._v(" "),t._l(t.busStops,function(e){return t.showMap&&t.busStops&&t.busStops.length?n("gmap-marker",{key:e,attrs:{icon:"https://github.com/pablohpsilva/busapp-pwa/blob/master/src/assets/img/"+(-1!==e.stationName.indexOf("Terminal")?"busstation":"busstop")+".png?raw=true",position:e.position,clickable:!0,draggable:!1,title:e.stationName,label:e.stationName,animation:2}}):t._e()})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("toolbar",{staticClass:"Home__PageTeller",attrs:{id:"toolbar",title:t.pageName},on:{search:t.shouldOpenMap,error:t.showErrorDialog,TOGGLE_SIDEBAR:t.toggleSidenav}}),t._v(" "),n("map-g",{attrs:{"show-map":t.showMap,search:t.search},on:{error:t.showErrorDialog}}),t._v(" "),n("md-dialog",{ref:"dialog2"},[n("md-dialog-title",[t._v("Ops...")]),t._v(" "),n("md-dialog-content",[t._v("Sorry, but we don't have that route yet.")]),t._v(" "),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",nativeOn:{click:function(e){t.closeDialog("dialog2")}}},[t._v("Ok")])],1)],1),t._v(" "),n("md-dialog",{ref:"dialog1",attrs:{"md-open-from":"#custom","md-close-to":"#custom"}},[n("md-dialog-title",[t._v("Hello! :D")]),t._v(" "),n("md-dialog-content",[t._v("\n      This is the Busapp PWA. There's only one route working so far: T131."),n("br"),t._v("\n      This message will be shown once.\n    ")]),t._v(" "),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",nativeOn:{click:function(e){t.closeDialog("dialog1")}}},[t._v("OK, Goodbye")])],1)],1),t._v(" "),n("md-button",{staticClass:"md-fab md-fab-bottom-center",attrs:{id:"custom"},nativeOn:{click:function(e){t.openDialog("dialog1")}}},[n("md-icon",[t._v("help_outline")])],1)],1)},staticRenderFns:[]}},function(t,e){function n(t){return new Promise(function(e,n){n(new Error("Cannot find module '"+t+"'."))})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=165},function(t,e,n){function o(t){n(167)}var i=n(6)(n(168),n(169),o,null,null);t.exports=i.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}}]),[56]);
//# sourceMappingURL=app.8997f321e95ceb0a8bdc.js.map