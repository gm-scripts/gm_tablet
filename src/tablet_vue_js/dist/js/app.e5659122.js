(function(t){function e(e){for(var a,i,r=e[0],s=e[1],p=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},c={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var p=0;p<r.length;p++)e(r[p]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2527:function(t,e,n){},"30f1":function(t,e,n){"use strict";n("396c")},"396c":function(t,e,n){},"3a5e":function(t,e,n){},"3aa8":function(t,e,n){"use strict";n("fb63")},"3fcb":function(t,e,n){},5275:function(t,e,n){"use strict";n("2527")},"53e2":function(t,e,n){},5546:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(t,e,n,c,o,i){var r=Object(a["u"])("Frame");return Object(a["n"])(),Object(a["d"])(a["a"],null,[Object(a["e"])("button",{onClick:e[1]||(e[1]=function(){return i.openTabletMsg&&i.openTabletMsg.apply(i,arguments)})},"Open"),Object(a["e"])("button",{onClick:e[2]||(e[2]=function(){return i.closeTabletMsg&&i.closeTabletMsg.apply(i,arguments)})},"Close"),Object(a["e"])(r,{displayActivationState:o.display,style:{opacity:o.opacity}},null,8,["displayActivationState","style"])],64)}var o=Object(a["A"])("data-v-74d542fb");Object(a["q"])("data-v-74d542fb");var i={class:"frame"},r=Object(a["e"])("div",{class:"camera-outer"},[Object(a["e"])("div",{class:"camera-inner"})],-1),s=Object(a["e"])("div",{class:"off-overlay"},null,-1);Object(a["o"])();var p=o((function(t,e,n,c,o,p){var l=Object(a["u"])("router-link"),u=Object(a["u"])("Display");return Object(a["n"])(),Object(a["d"])("div",i,[Object(a["e"])(l,{to:"/",class:"home-btn",style:{backgroundColor:o.homeBtnBgColor},onMousedown:p.homeBtnMouseDown,onMouseup:p.homeBtnMouseUp},null,8,["style","onMousedown","onMouseup"]),r,s,Object(a["e"])(u,{activationState:n.displayActivationState},null,8,["activationState"])])}));function l(t,e,n,c,o,i){var r=Object(a["u"])("router-view");return Object(a["n"])(),Object(a["d"])("div",{class:"display",style:{opacity:o.opacity}},[Object(a["e"])(r)],4)}var u={name:"Display",components:{},data:function(){return{opacity:"0%"}},props:{activationState:Boolean},watch:{activationState:function(t){this.activation(t)}},methods:{activation:function(t){this.opacity=t?"100%":"0%"}},created:function(){this.activation(this.activationState)}};n("30f1");u.render=l;var d=u,b={name:"Frame",data:function(){return{homeBtnBgColor:"#111111"}},props:{displayActivationState:Boolean},methods:{homeBtnMouseDown:function(){this.homeBtnBgColor="#0f0f0f"},homeBtnMouseUp:function(){this.homeBtnBgColor="#111111"}},components:{Display:d}};n("a2b9");b.render=p,b.__scopeId="data-v-74d542fb";var f=b,g={name:"App",components:{Frame:f},data:function(){return{opacity:"0%",display:!1}},methods:{openTabletMsg:function(){postMessage({openTablet:!0})},closeTabletMsg:function(){postMessage({openTablet:!1})},openTablet:function(){var t=this;this.opacity="100%",setTimeout((function(){return t.display=!0}),500)},closeTablet:function(){var t=this;this.display=!1,setTimeout((function(){return t.opacity="0%"}),500)}},mounted:function(){var t=this;window.addEventListener("message",(function(e){var n=e.data;1==n.openTablet?t.openTablet():0==n.openTablet&&t.closeTablet()})),setInterval(this.$emit("yeet"),1e3)}};n("ef5e");g.render=c;var j=g,O=n("6c02"),m=n("7396"),y=n.n(m),v={class:"header"},h=Object(a["e"])("div",{class:"internet-symbol"},[Object(a["e"])("div",{class:"bar bar1"}),Object(a["e"])("div",{class:"bar bar2"}),Object(a["e"])("div",{class:"bar bar3"})],-1),S={class:"clock"},A=Object(a["e"])("div",{class:"battery-container"},[Object(a["e"])("img",{src:y.a,alt:"420%",class:"battery-symbol"})],-1),k={class:"desktop"},M={class:"apps"},T={class:"dock-container"},V={class:"dock"};function Z(t,e,n,c,o,i){var r=Object(a["u"])("AppIcon");return Object(a["n"])(),Object(a["d"])("div",null,[Object(a["e"])("div",v,[h,Object(a["e"])("span",S,Object(a["w"])(o.clockHours)+":"+Object(a["w"])(o.clockMinutes),1),A]),Object(a["e"])("div",k,[Object(a["e"])("div",M,[(Object(a["n"])(!0),Object(a["d"])(a["a"],null,Object(a["t"])(o.apps,(function(t){return Object(a["n"])(),Object(a["d"])(r,{key:t.id,title:t.title,iconSrc:t.icon,triggersApp:t.appPath},null,8,["title","iconSrc","triggersApp"])})),128))]),Object(a["e"])("div",T,[Object(a["e"])("div",V,[(Object(a["n"])(!0),Object(a["d"])(a["a"],null,Object(a["t"])(o.importantApps,(function(t){return Object(a["n"])(),Object(a["d"])(r,{class:"important-app",key:t.id,iconSrc:t.icon,triggersApp:t.appPath},null,8,["iconSrc","triggersApp"])})),128))])])])])}n("d3b7"),n("25f0");var N=n("8058"),J={class:"appIcon"},G={class:"title"};function W(t,e,n,c,o,i){var r=Object(a["u"])("router-link");return Object(a["n"])(),Object(a["d"])("div",J,[Object(a["e"])(r,{to:n.triggersApp,class:"icon-container"},{default:Object(a["z"])((function(){return[Object(a["e"])("div",{src:n.iconSrc,class:"icon",style:{backgroundImage:o.iconImg}},null,12,["src"])]})),_:1},8,["to"]),Object(a["e"])("div",G,Object(a["w"])(n.title),1)])}var Y={name:"AppIcon",data:function(){return{iconImg:'url("'.concat(this.iconSrc,'")')}},props:{triggersApp:String,iconSrc:String,title:String}};n("5999");Y.render=W;var B=Y,q={name:"Desktop",data:function(){return{apps:{settings:{id:0,title:N.settings.lang.appName,icon:n("5be1"),appName:"settings",appPath:"/settings"},banking:{id:1,title:"Banking",icon:n("915a"),appName:"banking",appPath:"/banking"}},importantApps:{settings:{id:0,icon:n("5be1"),appName:"settings",appPath:"/settings"},banking:{id:1,icon:n("915a"),appName:"banking",appPath:"/banking"}},clockHours:"00",clockMinutes:"00"}},methods:{updateClock:function(){var t=new Date,e=t.getMinutes();this.clockMinutes=e>=10?e.toString():"0".concat(e);var n=t.getHours();this.clockHours=n>=10?n.toString():"0".concat(n)}},props:{},components:{AppIcon:B},mounted:function(){this.updateClock(),setInterval(this.updateClock,100)}};n("3aa8");q.render=Z;var U=q,x={class:"application"},F=Object(a["e"])("h1",null,"This is the settings app!",-1);function w(t,e,n,c,o,i){return Object(a["n"])(),Object(a["d"])("div",x,[F])}var K={};n("5275");K.render=w;var P=K,E={class:"application"},I=Object(a["e"])("h1",null,"This is a banking app!",-1);function L(t,e,n,c,o,i){return Object(a["n"])(),Object(a["d"])("div",E,[I])}var X={};n("fd1c");X.render=L;var H=X,R=[{path:"/",name:"Desktop",component:U},{path:"/settings",name:"Settings",component:P},{path:"/banking",name:"Banking",component:H}],z=Object(O["a"])({history:Object(O["b"])(),routes:R}),C=z,D=n("5502"),Q=Object(D["a"])({state:{config:null},mutations:{updateConfig:function(){var t=this;fetch("/config.json").then((function(t){return t.json()})).then((function(e){return t.state.config=e})),this.config=5}},actions:{},modules:{},getters:{config:function(t){return t.config}}});Object(a["c"])(j).use(Q).use(C).mount("#app")},5999:function(t,e,n){"use strict";n("3fcb")},"5be1":function(t,e,n){t.exports=n.p+"img/settingsApp.268fdd5f.png"},7396:function(t,e){t.exports="data:image/png;base64,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"},8058:function(t){t.exports=JSON.parse('{"general":{"standardTheme":"dark","standardBackground":""},"settings":{"lang":{"appName":"Einstellungen","personalisationTab":{"themeSetting":"Farbthema","bgSetting":"Hintergrundbild"}}}}')},"915a":function(t,e,n){t.exports=n.p+"img/bankingApp.7d4dbf96.jpg"},a2b9:function(t,e,n){"use strict";n("53e2")},ef5e:function(t,e,n){"use strict";n("5546")},fb63:function(t,e,n){},fd1c:function(t,e,n){"use strict";n("3a5e")}});
//# sourceMappingURL=app.e5659122.js.map