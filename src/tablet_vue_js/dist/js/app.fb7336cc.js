(function(e){function t(t){for(var o,a,i=t[0],u=t[1],s=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var i=n[a];0!==r[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={app:0},r={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-00f05a80":"a67a72ae","chunk-0590bbca":"7f72b9ea","chunk-aca7d884":"881c523f"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-00f05a80":1,"chunk-0590bbca":1,"chunk-aca7d884":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-00f05a80":"bac8d2cf","chunk-0590bbca":"bac8d2cf","chunk-aca7d884":"e6c4060e"}[e]+".css",r=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===r))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],l=s.getAttribute("data-href");if(l===o||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/production-sub-path/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05d1":function(e,t,n){},"0def":function(e,t,n){"use strict";n("f5e9")},"37a2":function(e,t,n){"use strict";n("05d1")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function a(e,t,n,a,r,c){var i=Object(o["u"])("Frame");return Object(o["n"])(),Object(o["d"])(o["a"],null,[Object(o["e"])("button",{onClick:t[1]||(t[1]=function(){return c.openTabletMsg&&c.openTabletMsg.apply(c,arguments)})},"Open"),Object(o["e"])("button",{onClick:t[2]||(t[2]=function(){return c.closeTabletMsg&&c.closeTabletMsg.apply(c,arguments)})},"Close"),Object(o["e"])(i,{displayActivationState:r.display,style:{opacity:r.opacity}},null,8,["displayActivationState","style"])],64)}var r=Object(o["A"])("data-v-db65d25a");Object(o["q"])("data-v-db65d25a");var c={class:"frame"},i=Object(o["e"])("div",{class:"camera-outer"},[Object(o["e"])("div",{class:"camera-inner"})],-1),u=Object(o["e"])("div",{class:"off-overlay"},null,-1);Object(o["o"])();var s=r((function(e,t,n,a,r,s){var l=Object(o["u"])("router-link"),p=Object(o["u"])("Display");return Object(o["n"])(),Object(o["d"])("div",c,[Object(o["e"])(l,{to:"/",class:"home-btn",style:{backgroundColor:r.homeBtnBgColor},onMousedown:s.homeBtnMouseDown,onMouseup:s.homeBtnMouseUp},null,8,["style","onMousedown","onMouseup"]),i,u,Object(o["e"])(p,{activationState:n.displayActivationState},null,8,["activationState"])])}));function l(e,t,n,a,r,c){var i=Object(o["u"])("router-view");return Object(o["n"])(),Object(o["d"])("div",{class:"display",style:{opacity:r.opacity}},[Object(o["e"])(i)],4)}var p={name:"Display",components:{},data:function(){return{opacity:"0%"}},props:{activationState:Boolean},watch:{activationState:function(e){this.activation(e)}},methods:{activation:function(e){this.opacity=e?"100%":"0%"}},created:function(){this.activation(this.activationState)}};n("37a2");p.render=l;var d=p,f={name:"Frame",data:function(){return{homeBtnBgColor:"#111111"}},props:{displayActivationState:Boolean},methods:{homeBtnMouseDown:function(){this.homeBtnBgColor="#0f0f0f"},homeBtnMouseUp:function(){this.homeBtnBgColor="#111111"}},components:{Display:d}};n("0def");f.render=s,f.__scopeId="data-v-db65d25a";var b=f,h={name:"App",components:{Frame:b},data:function(){return{opacity:"0%",display:!1}},methods:{openTabletMsg:function(){postMessage({openTablet:!0})},closeTabletMsg:function(){postMessage({openTablet:!1})},openTablet:function(){var e=this;this.opacity="100%",setTimeout((function(){return e.display=!0}),500)},closeTablet:function(){var e=this;this.display=!1,setTimeout((function(){return e.opacity="0%"}),500)}},mounted:function(){var e=this;window.addEventListener("message",(function(t){var n=t.data;1==n.openTablet?e.openTablet():0==n.openTablet&&e.closeTablet()})),setInterval(this.$emit("yeet"),1e3)}};n("a64e");h.render=a;var v=h,m=(n("d3b7"),n("6c02")),y=[{path:"/",name:"Desktop",component:function(){return n.e("chunk-aca7d884").then(n.bind(null,"d14f"))}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-0590bbca").then(n.bind(null,"8a21"))}},{path:"/banking",name:"Banking",component:function(){return n.e("chunk-00f05a80").then(n.bind(null,"b93e"))}}],g=Object(m["a"])({history:Object(m["b"])(),routes:y}),O=g;Object(o["c"])(v).use(O).mount("#app")},a64e:function(e,t,n){"use strict";n("ebb5")},ebb5:function(e,t,n){},f5e9:function(e,t,n){}});
//# sourceMappingURL=app.fb7336cc.js.map