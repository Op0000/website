"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>k,frontMatter:()=>g,metadata:()=>y,toc:()=>b});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&c(e,n,t[n]);return e},p=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const g={title:"$guildDefaultMessageNotifications",description:"$guildDefaultMessageNotifications will return given guild's default message notification type.",id:"guildDefaultMessageNotifications"},m=void 0,y={unversionedId:"functions/guild-related/guildDefaultMessageNotifications",id:"version-6.4.0/functions/guild-related/guildDefaultMessageNotifications",title:"$guildDefaultMessageNotifications",description:"$guildDefaultMessageNotifications will return given guild's default message notification type.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/guildDefaultMessageNotifications.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildDefaultMessageNotifications",permalink:"/docs/functions/guild-related/guildDefaultMessageNotifications",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{title:"$guildDefaultMessageNotifications",description:"$guildDefaultMessageNotifications will return given guild's default message notification type.",id:"guildDefaultMessageNotifications"},sidebar:"docs",previous:{title:"$guildCount",permalink:"/docs/functions/guild-related/guildCount"},next:{title:"$guildDescription",permalink:"/docs/functions/guild-related/guildDescription"}},v={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],N={toc:b},O="wrapper";function k(e){var t=e,{components:n}=t,r=f(t,["components"]);return(0,a.kt)(O,p(d(d({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$guildDefaultMessageNotifications ")," will return given guild's default message notification type."),(0,a.kt)("h2",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$guildDefaultMessageNotifications[guildID?]\n")),(0,a.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"guildID?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The ID of the guild."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return the guild's default message notification type:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildDefaultMessageNotifications',\n    code: `\n  $guildDefaultMessageNotifications\n  `\n});\n")))}k.isMDXComponent=!0}}]);