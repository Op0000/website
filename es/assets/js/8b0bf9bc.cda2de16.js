"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),g=l,m=p["".concat(d,".").concat(g)]||p[g]||c[g]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=g;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var n=r(3905),l=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>o(e,a(t)),g=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$highestGuildRole",description:"$guildHighestRole devolver\xe1 el rol m\xe1s alto de un gremio espec\xedfico.",id:"highestGuildRole"},f=void 0,v={unversionedId:"functions/guild-related/highestGuildRole",id:"version-6.4.0/functions/guild-related/highestGuildRole",title:"$highestGuildRole",description:"$guildHighestRole devolver\xe1 el rol m\xe1s alto de un gremio espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/highestGuildRole.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/highestGuildRole",permalink:"/es/docs/functions/guild-related/highestGuildRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$highestGuildRole",description:"$guildHighestRole devolver\xe1 el rol m\xe1s alto de un gremio espec\xedfico.",id:"highestGuildRole"},sidebar:"docs",previous:{title:"$guildWidgetChannelID",permalink:"/es/docs/functions/guild-related/guildWidgetChannelID"},next:{title:"$isWidgetEnabled",permalink:"/es/docs/functions/guild-related/isWidgetEnabled"}},b={},h=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:h},k="wrapper";function O(e){var t=e,{components:r}=t,l=g(t,["components"]);return(0,n.kt)(k,c(p(p({},y),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildHighestRole")," devolver\xe1 todos los roles de un gremio espec\xedfico."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildHighestRole[servidorID?;opci\xf3n?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"La ID del gremio."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"opci\xf3n?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"La opci\xf3n sobre c\xf3mo devolver los roles ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"nombre")," (por defecto) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"ids")," ",(0,n.kt)("br",null)," 3. ",(0,n.kt)("strong",{parentName:"td"},"mencionar")),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 la cantidad de roles de tu gremio:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildHighestRole',\n    code: `\n  $guildHighestRole[$guildID;name]\n  `\n});\n")))}O.isMDXComponent=!0}}]);