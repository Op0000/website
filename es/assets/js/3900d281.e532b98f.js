"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(r),m=l,g=s["".concat(d,".").concat(m)]||s[m]||c[m]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>j,frontMatter:()=>g,metadata:()=>v,toc:()=>y});var n=r(3905),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&p(e,r,t[r]);return e},c=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const g={title:"$guildAvailable",description:"$guildAvailable volver\xe1 si el gremio dado est\xe1 disponible en Discord.",id:"guildAvailable"},f=void 0,v={unversionedId:"functions/guild-related/guildAvailable",id:"version-6.4.0/functions/guild-related/guildAvailable",title:"$guildAvailable",description:"$guildAvailable volver\xe1 si el gremio dado est\xe1 disponible en Discord.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildAvailable.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildAvailable",permalink:"/es/docs/functions/guild-related/guildAvailable",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$guildAvailable",description:"$guildAvailable volver\xe1 si el gremio dado est\xe1 disponible en Discord.",id:"guildAvailable"},sidebar:"docs",previous:{title:"$guildAFKChannelID",permalink:"/es/docs/functions/guild-related/guildAFKChannelID"},next:{title:"$guildBanner",permalink:"/es/docs/functions/guild-related/guildBanner"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:y},k="wrapper";function j(e){var t=e,{components:r}=t,l=m(t,["components"]);return(0,n.kt)(k,c(s(s({},O),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildAvailable")," volver\xe1 si el gremio dado est\xe1 disponible en Discord."),(0,n.kt)("h2",s({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$guildAvailable[servidorID?]\n")),(0,n.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"La ID del gremio."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," dependiendo de si el gremio est\xe1 disponible:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildAvailable',\n    code: `\n  $guildAvailable[$guildID]\n  `\n});\n")))}j.isMDXComponent=!0}}]);