(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f327052","chunk-4f4ec1d3"],{"0879":function(t,e,c){"use strict";c("31d4")},"08c9":function(t,e,c){},"0d1f":function(t,e,c){"use strict";c("3c12")},1423:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o=Object(n["A"])("data-v-6bba618c");Object(n["r"])("data-v-6bba618c");var r={class:"element"},a={class:"img-container"};Object(n["p"])();var s=o((function(t,e,c,o,s,i){var l=Object(n["v"])("BgSelect");return Object(n["o"])(),Object(n["d"])("div",r,[Object(n["f"])("h1",null,Object(n["x"])(i.backgroundTitle),1),Object(n["f"])("div",a,[Object(n["f"])(l,{label:"Sunrise",color:"orange",icon:s.bgSelectSunrisePath},null,8,["icon"]),Object(n["f"])(l,{label:"Blue Flower",color:"darkblue",icon:s.bgSelectFlowerPath},null,8,["icon"]),Object(n["f"])(l,{label:"Green",color:"green"}),Object(n["f"])(l,{label:"Blue",color:"blue"})])])})),i={class:"img-container"},l={class:"bg-sel-label"},b=Object(n["f"])("div",{class:"hover-overlay"},null,-1);function u(t,e,c,o,r,a){return Object(n["o"])(),Object(n["d"])("div",{class:"bg-sel-outer",onClick:e[1]||(e[1]=function(){return a.select&&a.select.apply(a,arguments)}),style:{"--color":c.color}},[Object(n["f"])("div",i,[Object(n["f"])("span",l,Object(n["x"])(c.label),1),Object(n["f"])("div",{class:"bg-sel-inner",style:{backgroundImage:r.selectorIcon}},null,4),b])],4)}var g={name:"bgSelectorIcon",data:function(){return{selectorIcon:'url("'.concat(this.icon,'")')}},props:{label:String,icon:String,color:String},methods:{select:function(){this.$store.commit("backgroundImage",this.icon),this.$store.commit("backgroundColor",this.color)}}};c("0d1f");g.render=u;var f=g,d={name:"Settings",components:{BgSelect:f},data:function(){return{bgSelectSunrisePath:c("b554"),bgSelectFlowerPath:c("9185")}},computed:{backgroundTitle:function(){return this.$store.getters.settingsLang.backgroundSwitchHeader}},methods:{}};c("6de4");d.render=s,d.__scopeId="data-v-6bba618c";e["default"]=d},"2bd0":function(t,e,c){"use strict";c("08c9")},"2e66":function(t,e,c){"use strict";var n=c("7a23"),o=Object(n["A"])("data-v-0d28512e");Object(n["r"])("data-v-0d28512e");var r={class:"sidebar"},a={class:"navbar"};Object(n["p"])();var s=o((function(t,e,c,s,i,l){var b=Object(n["v"])("router-link");return Object(n["o"])(),Object(n["d"])("div",r,[Object(n["f"])("ul",a,[(Object(n["o"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(i.tabs,(function(t){return Object(n["o"])(),Object(n["d"])("li",{key:t.id,class:"nav-item"},[Object(n["f"])(b,{to:t.path,class:"nav-link"},{default:o((function(){return[Object(n["e"])(Object(n["x"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])})),i={name:"sidebar",data:function(){var t=this;return{tabs:{theme:{title:t.getConfigData("lang").appearanceTitle,path:"/settings/appearance",id:"theme"},background:{title:t.getConfigData("lang").backgroundTitle,path:"/settings/background",id:"background"}}}},props:{selectedItem:String},methods:{getConfigData:function(t){var e=Object.assign({},this.$store.getters.config),c=Object.assign({},e.apps),n=Object.assign({},c.settings),o=Object.assign({},n[t]);return o}}};c("bf83");i.render=s,i.__scopeId="data-v-0d28512e";e["a"]=i},"31d4":function(t,e,c){},"3c12":function(t,e,c){},"6de4":function(t,e,c){"use strict";c("c2a3")},9185:function(t,e,c){t.exports=c.p+"img/tablet-bg-flower.472cc8c6.jpg"},"97f8":function(t,e,c){},b554:function(t,e,c){t.exports=c.p+"img/tablet-bg.aa3a9f92.png"},bf83:function(t,e,c){"use strict";c("97f8")},c2a3:function(t,e,c){},e5cf:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o=Object(n["A"])("data-v-57728b76");Object(n["r"])("data-v-57728b76");var r={class:"application"},a={class:"content"},s={class:"element"},i=Object(n["f"])("span",{class:"label"},"Color Theme",-1),l=Object(n["f"])("hr",{class:"divider"},null,-1);Object(n["p"])();var b=o((function(t,e,c,o,b,u){var g=Object(n["v"])("Sidebar"),f=Object(n["v"])("ToggleSwitch"),d=Object(n["v"])("BgSwitcher");return Object(n["o"])(),Object(n["d"])("div",r,[Object(n["f"])(g,{selected:"appearance"}),Object(n["f"])("div",a,[Object(n["f"])("div",s,[Object(n["f"])("span",null,[Object(n["f"])(f,{colorOff:"#1f1133",colorOn:"#bbbbbb",knobColorOn:"#ffffff",knobColorOff:"#eeeeee",sourceSize:"1.75vh",toggler:"toggleTheme",toggleState:t.$store.getters.themeState,class:"toggleswitch"},null,8,["toggleState"]),i])]),l,Object(n["f"])(d)])])})),u=c("2e66"),g=Object(n["A"])("data-v-9e049288"),f=g((function(t,e,c,o,r,a){return Object(n["o"])(),Object(n["d"])("div",{class:"switch-outer",onClick:e[1]||(e[1]=function(){return a.toggle&&a.toggle.apply(a,arguments)}),style:{backgroundColor:r.css.bg,"--source-size":c.sourceSize}},[Object(n["f"])("div",{class:"switch-inner",style:{left:r.css.left,right:r.css.right,backgroundColor:r.css.fg}},null,4)],4)})),d={name:"ToggleSwitch",data:function(){return{state:function(){var t=localStorage.getItem("theme");return"light"!==t&&("dark"===t||void console.error("Error: Unknown themeState."))}(),css:{left:"calc(var(--source-size) * 0.25)",right:"calc(var(--source-size) * 1.75)",bg:this.colorOff,fg:this.knobColor}}},props:{colorOff:String,colorOn:String,knobColorOff:String,knobColorOn:String,sourceSize:String,toggler:String,toggleState:Boolean},methods:{toggle:function(){this.$store.commit(this.toggler),!1===this.state?(this.state=!0,this.update()):(this.state=!1,this.update())},update:function(){!1===this.state?this.css={left:"calc(var(--source-size) * 1.75)",right:"calc(var(--source-size) * 0.25)",bg:this.colorOn,fg:this.knobColorOn}:this.css={left:"calc(var(--source-size) * 0.25)",right:"calc(var(--source-size) * 1.75)",bg:this.colorOff,fg:this.knobColorOff}}},watch:{state:function(){}},mounted:function(){this.root=document.documentElement,this.update()}};c("0879");d.render=f,d.__scopeId="data-v-9e049288";var O=d,h=c("1423"),j={name:"SettingsTheme",components:{Sidebar:u["a"],ToggleSwitch:O,BgSwitcher:h["default"]}};c("2bd0");j.render=b,j.__scopeId="data-v-57728b76";e["default"]=j}}]);
//# sourceMappingURL=chunk-3f327052.77ff76af.js.map