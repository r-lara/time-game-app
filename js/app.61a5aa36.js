(function(e){function t(t){for(var r,n,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({"Game Page~Settings Page":"Game Page~Settings Page","Game Page":"Game Page","Settings Page":"Settings Page"}[e]||e)+"."+{"Game Page~Settings Page":"29452e52","Game Page":"857f98e6","Settings Page":"877eb679"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"Game Page~Settings Page":1,"Game Page":1,"Settings Page":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({"Game Page~Settings Page":"Game Page~Settings Page","Game Page":"Game Page","Settings Page":"Settings Page"}[e]||e)+"."+{"Game Page~Settings Page":"2cedbac6","Game Page":"a6f65e0b","Settings Page":"bf5a989d"}[e]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],f.parentNode.removeChild(f),a(i)},f.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/time-game-app/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1493:function(e,t,a){"use strict";var r=a("d4ec"),n=a("bee2"),s=a("c1df"),i=a.n(s),o=function(){function e(){Object(r["a"])(this,e),this.duration=0,this.started_at=0,this.stopped_at=0,this.is_running=!1}return Object(n["a"])(e,[{key:"start",value:function(){this.is_running||(this.is_running=!0,this.started_at=i()())}},{key:"stop",value:function(){this.is_running&&(this.stopped_at=i()(),this.duration+=this.stopped_at.diff(this.started_at),this.is_running=!1)}},{key:"reset",value:function(){this.duration=0,this.is_running=!1}},{key:"current",get:function(){return this.is_running?this.duration+i()().diff(this.started_at):this.duration}}]),e}();t["a"]=o},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{app:"",color:"primary"}},[a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),a("router-link",{attrs:{to:{name:"Settings"}}},[e._v("Settings")]),e._v(" | "),a("router-link",{attrs:{to:{name:"Game"}}},[e._v("Game")])],1),a("router-view")],1)])},s=[],i=(a("034f"),a("2877")),o=a("6544"),c=a.n(o),l=a("7496"),u={},d=Object(i["a"])(u,n,s,!1,null,null,null),f=d.exports;c()(d,{VApp:l["a"]});a("d3b7");var m=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("b-alert",{attrs:{show:e.reachedShiftTimeLimit,variant:"danger"}},[e._v("Time is up")]),a("p",[e._v("shiftTimeLimit "+e._s(e.shiftTimeLimit)+" ms")]),a("PlayersForm"),a("router-link",{attrs:{to:{name:"Settings"}}},[a("v-btn",{attrs:{color:"primary",rounded:"",outlined:"",elevation:"2"}},[e._v(" Continue "),a("v-icon",{attrs:{right:"",dark:""}},[e._v(" mdi-arrow-right-circle-outline ")])],1)],1)],1)},b=[],j=a("5530"),p=a("2f62"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"players-form-wrap"},[a("div",[a("ul",{staticClass:"list-unstyled d-inline-flex flex-wrap mb-2 w-100",attrs:{id:"my-custom-tags-list","aria-live":"polite","aria-atomic":"false","aria-relevant":"additions removals"}},e._l(e.players,(function(t,r){return a("v-chip",{key:r,staticClass:"ma-2",attrs:{close:"",color:t.color,"text-color":"white"},on:{"click:close":function(t){return e.handleRemovePlayer(r)}}},[e._v(" "+e._s(t.name)+" ")])})),1),a("div",{staticClass:"d-flex flex-row"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.playerForm.name,expression:"playerForm.name"}],staticClass:"form-control m-0 p-0 mr-2",attrs:{placeholder:"Add player ..."},domProps:{value:e.playerForm.name},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleAddPlayer(t)},input:function(t){t.target.composing||e.$set(e.playerForm,"name",t.target.value)}}}),a("VSwatches",{staticClass:"mr-2",model:{value:e.playerForm.color,callback:function(t){e.$set(e.playerForm,"color",t)},expression:"playerForm.color"}}),a("b-button",{staticClass:"btn-sm",attrs:{variant:"primary"},on:{click:e.handleAddPlayer}},[a("b-icon",{attrs:{icon:"plus"}})],1)],1)])])},y=[],v=(a("b0c0"),a("25f0"),a("498a"),a("7f75")),P=a.n(v),k={name:"PlayersForm",components:{VSwatches:P.a},data:function(){return{playerForm:{name:"",color:"#1CA085"}}},methods:Object(j["a"])({handleAddPlayer:function(){var e={name:this.playerForm.name.trim(),color:this.playerForm.color};this.playerForm.name?(this.addPlayer(e),this.playerForm.name="",this.playerForm.color="#".concat(Math.floor(16777215*Math.random()).toString(16))):alert("Player name is required")},handleRemovePlayer:function(e){this.removePlayer({index:e})}},Object(p["c"])(["addPlayer","removePlayer"])),watch:{},computed:Object(j["a"])({},Object(p["d"])(["limitOfPlayers","players"]))},w=k,_=(a("9aa8"),a("cc20")),S=Object(i["a"])(w,g,y,!1,null,null,null),O=S.exports;c()(S,{VChip:_["a"]});var x=a("1493"),T={name:"Home",components:{PlayersForm:O},data:function(){return{playerForm:{name:"",color:"#1CA085"},currentDuration:0,reachedShiftTimeLimit:!1,sw:new x["a"],timerInterval:null}},methods:Object(j["a"])(Object(j["a"])({},Object(p["c"])(["addPlayer","removePlayer"])),{},{handleStart:function(){var e=this,t=100;this.sw.start(),this.timerInterval=setInterval((function(){e.currentDuration=e.sw.current,e.reachedShiftTimeLimit=e.currentDuration>e.shiftTimeLimit}),t)},handlePause:function(){this.sw.stop(),clearInterval(this.timerInterval)},handleReset:function(){this.sw.reset(),this.currentDuration=0,this.reachedShiftTimeLimit=!1,clearInterval(this.timerInterval)},handleNextPlayer:function(){this.sw.is_running?(this.sw.reset(),this.currentDuration=0,this.reachedShiftTimeLimit=!1,this.handleStart()):alert("must start the game first")}}),watch:{},computed:Object(j["a"])(Object(j["a"])({},Object(p["d"])(["limitOfPlayers","players","shiftTimeLimit"])),{},{percentageOfTimeLeft:function(){var e=100*this.currentDuration/this.shiftTimeLimit;return console.log("perc .. ",e),e=e>100?100:e,e}})},z=T,C=a("8336"),L=a("132d"),F=Object(i["a"])(z,h,b,!1,null,null,null),G=F.exports;c()(F,{VBtn:C["a"],VIcon:L["a"]}),r["default"].use(m["a"]);var E=[{path:"/",name:"Home",component:G},{path:"/settings",name:"Settings",component:function(){return Promise.all([a.e("Game Page~Settings Page"),a.e("Settings Page")]).then(a.bind(null,"26d3"))}},{path:"/game",name:"Game",component:function(){return Promise.all([a.e("Game Page~Settings Page"),a.e("Game Page")]).then(a.bind(null,"7d36"))}}],A=new m["a"]({mode:"history",base:"/time-game-app/",routes:E}),D=A,I=(a("99af"),a("4de4"),a("2909")),M=a("c1df"),N=a.n(M);r["default"].use(p["a"]);var V=new p["a"].Store({state:{count:0,players:[{name:"Player 1",color:"#F39C19"},{name:"Player 2",color:"#2980B9"},{name:"Player 3",color:"#e8375a"}],limitOfPlayers:16,currentPlayer:0,shiftTimeLimit:N.a.duration(60,"seconds").asMilliseconds(),INTERVAL_MS:100},mutations:{increment:function(e,t){e.count+=t.amount},addPlayer:function(e,t){var a=t.name,r=t.color,n={name:a,color:r};e.players=[].concat(Object(I["a"])(e.players),[n])},removePlayer:function(e,t){var a=t.index;e.players=e.players.filter((function(e,t){return t!==a}))},setShiftTimeLimit:function(e,t){var a=t.duration;e.shiftTimeLimit=N.a.duration(a).asMilliseconds()},setCurrentPlayer:function(e,t){var a=t.currentPlayer;e.currentPlayer=a},nextPlayer:function(e){var t=e.currentPlayer+1;e.currentPlayer=t<e.players.length?t:0}},actions:{incrementBy:function(e,t){var a=e.commit,r=t.amount,n=void 0===r?1:r;a("increment",{amount:n})}},getters:{activePlayer:function(e){return e.players[e.currentPlayer]||null}}}),B=a("f309");r["default"].use(B["a"]);var $=new B["a"]({}),q=a("5f5b"),H=a("b1e0");a("f9e3"),a("2dd8"),a("b3a4"),a("bf40");r["default"].config.productionTip=!1,r["default"].use(q["a"]),r["default"].use(H["a"]),new r["default"]({router:D,vuetify:$,store:V,render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,a){},"9aa8":function(e,t,a){"use strict";a("cae4")},cae4:function(e,t,a){}});
//# sourceMappingURL=app.61a5aa36.js.map