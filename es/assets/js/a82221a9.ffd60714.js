"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65269],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),u=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(c.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=n,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||o;return t?a.createElement(m,l(l({ref:r},p),{},{components:t})):a.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58434:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>o(e,l(r)),d=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$arrayShuffle",description:"$arrayShuffle barajar\xe1 los elementos de la matriz dada.",id:"arrayShuffle"},y=void 0,b={unversionedId:"functions/array-related/arrayShuffle",id:"version-6.4.0/functions/array-related/arrayShuffle",title:"$arrayShuffle",description:"$arrayShuffle barajar\xe1 los elementos de la matriz dada.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayShuffle.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayShuffle",permalink:"/es/docs/functions/array-related/arrayShuffle",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$arrayShuffle",description:"$arrayShuffle barajar\xe1 los elementos de la matriz dada.",id:"arrayShuffle"},sidebar:"docs",previous:{title:"$arrayShift",permalink:"/es/docs/functions/array-related/arrayShift"},next:{title:"$arraySome",permalink:"/es/docs/functions/array-related/arraySome"}},h={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:v},O="wrapper";function j(e){var r=e,{components:t}=r,n=d(r,["components"]);return(0,a.kt)(O,f(s(s({},g),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"$arrayShuffle barajar\xe1 los elementos de la matriz dada."),(0,a.kt)("h2",s({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayShuffle[nombre]\n")),(0,a.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nombre de matriz"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")))),(0,a.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-shuffle",\n    code: `\n  $arrayJoin[array;, ]\n  $arrayShuffle[array]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}j.isMDXComponent=!0}}]);