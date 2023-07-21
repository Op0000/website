"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12606],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),m=l,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51870:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>j,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var n=r(3905),l=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,a(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$deleteRoles",description:"$deleteRoles eliminar\xe1 uno o varios roles.",id:"deleteRoles"},g=void 0,v={unversionedId:"functions/guild-related/deleteRoles",id:"version-6.4.0/functions/guild-related/deleteRoles",title:"$deleteRoles",description:"$deleteRoles eliminar\xe1 uno o varios roles.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/deleteRoles.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/deleteRoles",permalink:"/es/docs/functions/guild-related/deleteRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$deleteRoles",description:"$deleteRoles eliminar\xe1 uno o varios roles.",id:"deleteRoles"},sidebar:"docs",previous:{title:"$deleteInvite",permalink:"/es/docs/functions/guild-related/deleteInvite"},next:{title:"$deleteSticker",permalink:"/es/docs/functions/guild-related/deleteSticker"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:b},O="wrapper";function j(e){var t=e,{components:r}=t,l=m(t,["components"]);return(0,n.kt)(O,u(p(p({},k),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"$deleteRoles eliminar\xe1 uno o varios roles."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$deleteRoles[servidorID;...roles]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"servidorID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID de la hermandad de donde est\xe1n ubicados los roles."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"...roles"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero, cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Los Ids de los roles."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto eliminar\xe1 los roles de tus gremios (aseg\xfarate de agregar identificadores reales):"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'deleteRoles',\n    code: `\n  Elimin\xf3 tres roles!\n  $deleteRoles[$guildID;roleID1;roleID2;roleID3]\n  `\n});\n")))}j.isMDXComponent=!0}}]);