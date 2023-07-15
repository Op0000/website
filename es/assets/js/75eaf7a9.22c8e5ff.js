"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7117],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),s=r,g=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return n?a.createElement(g,o(o({ref:e},u),{},{components:n})):a.createElement(g,o({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},80655:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>k,default:()=>v,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&u(t,n,e[n]);return t},c=(t,e)=>l(t,o(e)),s=(t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const g={title:"$randomChannelID",description:"$randomChannelID will return a random channel ID of all guilds or of a specific guild.",id:"randomChannelID"},k=void 0,f={unversionedId:"functions/util-related/randomChannelID",id:"version-6.4.0/functions/util-related/randomChannelID",title:"$randomChannelID",description:"$randomChannelID will return a random channel ID of all guilds or of a specific guild.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/randomChannelID.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/randomChannelID",permalink:"/es/docs/functions/util-related/randomChannelID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$randomChannelID",description:"$randomChannelID will return a random channel ID of all guilds or of a specific guild.",id:"randomChannelID"},sidebar:"docs",previous:{title:"$random",permalink:"/es/docs/functions/util-related/random"},next:{title:"$randomEmoji",permalink:"/es/docs/functions/util-related/randomEmoji"}},N={},b=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:b},h="wrapper";function v(t){var e=t,{components:n}=e,r=s(e,["components"]);return(0,a.kt)(h,c(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$randomChannelID")," will return a random channel ID of all guilds or of a specific guild."),(0,a.kt)("h2",m({},{id:"modo-de-uso"}),"Modo de uso"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$randomChannelID[guildID/global?;type?]\n")),(0,a.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"guildID/global?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Guild ID or global search."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"tipo?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Channel type."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,"Tipos de canales"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Tipo de canal"),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Canal de texto"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Text")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Canal de voz"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Voice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Categor\xeda"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Category")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Canal de escenario"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Stage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Hilo privado"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PrivateThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Hilo p\xfablico"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"PublicThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Forum"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Forum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Hilo de anuncio"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"AnnouncementThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Canal de anuncio"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Announcement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Home"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"GuildDirectory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Canal NSFW"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"NSFW")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Mensaje directo"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"DM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Todos los tipos de canal"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"all"))))),(0,a.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"This will return a random channel ID of your guild:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'randomChannelID',\n    code: `\n  <#$randomChannelID[$guildID;all]>\n  `\n});\n")))}v.isMDXComponent=!0}}]);