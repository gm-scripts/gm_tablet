(function(t){function e(e){for(var c,o,r=e[0],s=e[1],l=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],c=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(c=!1)}c&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var c={},a={app:0},i=[];function o(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=c,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/production-sub-path/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0bd2":function(t,e,n){},"159f":function(t,e,n){},4384:function(t,e,n){"use strict";n("a555")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(t,e,n,a,i,o){var r=Object(c["j"])("Frame");return Object(c["f"])(),Object(c["c"])("div",{class:"container",style:{opacity:t.opacity}},[Object(c["d"])(r,{displayActivationState:t.display},null,8,["displayActivationState"])],4)}var i=Object(c["l"])("data-v-42a54618");Object(c["h"])("data-v-42a54618");var o=Object(c["d"])("div",{class:"home-btn"},null,-1),r=Object(c["d"])("div",{class:"camera-outer"},[Object(c["d"])("div",{class:"camera-inner"})],-1),s=Object(c["d"])("div",{class:"off-overlay"},null,-1);Object(c["g"])();var l=i((function(t,e,n,a,i,l){var p=Object(c["j"])("Display");return Object(c["f"])(),Object(c["c"])("div",{class:"frame",onTestEvent:e[1]||(e[1]=function(){return t.testMethod&&t.testMethod.apply(t,arguments)})},[o,r,s,Object(c["d"])(p,{activationState:n.displayActivationState},null,8,["activationState"])],32)})),p=n("7396"),u=n.n(p),d={class:"header"},b=Object(c["d"])("div",{class:"internet-symbol"},[Object(c["d"])("div",{class:"bar bar1"}),Object(c["d"])("div",{class:"bar bar2"}),Object(c["d"])("div",{class:"bar bar3"})],-1),f={class:"clock"},y=Object(c["d"])("div",{class:"battery-container"},[Object(c["d"])("img",{src:u.a,alt:"420%",class:"battery-symbol"})],-1);function j(t,e,n,a,i,o){var r=Object(c["j"])("Desktop");return Object(c["f"])(),Object(c["c"])("div",{class:"display",style:{opacity:i.opacity}},[Object(c["d"])("div",d,[b,Object(c["d"])("span",f,Object(c["k"])(i.clockHours)+":"+Object(c["k"])(i.clockMinutes),1),y]),Object(c["d"])(r)],4)}n("d3b7"),n("25f0");var v={class:"desktop"},O={class:"apps"},m={class:"dock-container"},S={class:"dock"};function g(t,e,n,a,i,o){var r=Object(c["j"])("AppIcon");return Object(c["f"])(),Object(c["c"])("div",null,[Object(c["d"])("div",v,[Object(c["d"])("div",O,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(i.apps,(function(t){return Object(c["f"])(),Object(c["c"])(r,{key:t.id,title:t.title,iconSrc:t.icon},null,8,["title","iconSrc"])})),128))]),Object(c["d"])("div",m,[Object(c["d"])("div",S,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(i.importantApps,(function(t){return Object(c["f"])(),Object(c["c"])(r,{class:"important-app",key:t.id,iconSrc:t.icon},null,8,["iconSrc"])})),128))])])])])}var A={class:"appIcon"},V={class:"icon-container"},Z={class:"title"};function k(t,e,n,a,i,o){return Object(c["f"])(),Object(c["c"])("div",A,[Object(c["d"])("div",V,[Object(c["d"])("div",{src:n.iconSrc,class:"icon",style:{backgroundImage:i.iconImg}},null,12,["src"])]),Object(c["d"])("div",Z,Object(c["k"])(n.title),1)])}var N={name:"AppIcon",data:function(){return{iconImg:'url("'.concat(this.iconSrc,'")')}},props:{triggersApp:String,iconSrc:String,title:String}};n("f742");N.render=k;var J=N,G={name:"Desktop",data:function(){return{apps:{settings:{id:0,title:"Settings",icon:n("5be1"),appName:"settings"},banking:{id:1,title:"Banking",icon:n("915a"),appName:"banking"}},importantApps:{settings:{id:0,icon:n("5be1"),appName:"settings"},banking:{id:1,icon:n("915a"),appName:"banking"}}}},props:{},components:{AppIcon:J}};n("cfd9");G.render=g;var W=G,Y={name:"Display",components:{Desktop:W},data:function(){return{opacity:"0%",clockHours:"00",clockMinutes:"00"}},props:{activationState:Boolean},watch:{activationState:function(t){this.activation(t)}},methods:{updateClock:function(){var t=new Date,e=t.getMinutes();this.clockMinutes=e>=10?e.toString():"0".concat(e);var n=t.getHours();this.clockHours=n>=10?n.toString():"0".concat(n)},activation:function(t){this.opacity=t?"100%":"0%"}},created:function(){var t=this;setInterval((function(){t.updateClock()}),100),this.activation(this.activationState)}};n("4384");Y.render=j;var h=Y,M={name:"Frame",props:{displayActivationState:Boolean},methods:{},components:{Display:h}};n("8046");M.render=l,M.__scopeId="data-v-42a54618";var q=M,T=Object(c["e"])({name:"App",data:function(){return{opacity:"100%",display:!0}},components:{Frame:q},methods:{tabletOpen:function(){var t=this;this.opacity="100%",setTimeout((function(){return t.display=!0}),500)},tabletClose:function(){var t=this;this.display=!1,setTimeout((function(){return t.opacity="0%"}),500)}},mounted:function(){window.addEventListener("message",(function(t){var e=t.data;console.log("Event: ".concat(JSON.stringify(t,null,"  "))),console.log("Event data: ".concat(JSON.stringify(t.data,null,"  "))),1==e.openTablet&&this.tabletOpen(),0==e.openTablet&&this.tabletClose()})),setInterval(this.$emit("yeet"),1e3)}});n("5e0f");T.render=a;var U=T;Object(c["b"])(U).mount("#app")},"5be1":function(t,e,n){t.exports=n.p+"img/settingsApp.268fdd5f.png"},"5e0f":function(t,e,n){"use strict";n("0bd2")},7396:function(t,e){t.exports="data:image/png;base64,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"},8046:function(t,e,n){"use strict";n("ecb7")},"915a":function(t,e,n){t.exports=n.p+"img/bankingApp.7d4dbf96.jpg"},a555:function(t,e,n){},cfd9:function(t,e,n){"use strict";n("ff5f")},ecb7:function(t,e,n){},f742:function(t,e,n){"use strict";n("159f")},ff5f:function(t,e,n){}});
//# sourceMappingURL=app.b74702c9.js.map