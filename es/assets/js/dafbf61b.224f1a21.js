"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[83612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>j,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$isTimeout",description:"$isTimeout comprobar\xe1 si el usuario est\xe1 en tiempo de espera con la funci\xf3n integrada de Discord.",id:"isTimeout"},b=void 0,g={unversionedId:"functions/util-related/isTimeout",id:"version-6.4.0/functions/util-related/isTimeout",title:"$isTimeout",description:"$isTimeout comprobar\xe1 si el usuario est\xe1 en tiempo de espera con la funci\xf3n integrada de Discord.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isTimeout.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isTimeout",permalink:"/es/docs/functions/util-related/isTimeout",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691131617,formattedLastUpdatedAt:"4 ago 2023",frontMatter:{title:"$isTimeout",description:"$isTimeout comprobar\xe1 si el usuario est\xe1 en tiempo de espera con la funci\xf3n integrada de Discord.",id:"isTimeout"},sidebar:"docs",previous:{title:"$isThread",permalink:"/es/docs/functions/util-related/isThread"},next:{title:"$isUnicodeEmoji",permalink:"/es/docs/functions/util-related/isUnicodeEmoji"}},y={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:v},O="wrapper";function j(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(O,d(c(c({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$isTimeout")," comprobar\xe1 si el usuario est\xe1 agotado con la funci\xf3n de tiempo de espera incorporada de Discord."),(0,n.kt)("h2",c({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$isTimeout[guildID?;userID?]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El ID de la hermandad en donde se los deja pasar."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"usarioID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El ID del usuario que est\xe1 agotado."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto comprobar\xe1 si est\xe1s esperado y devuelve ",(0,n.kt)("inlineCode",{parentName:"p"},"verdadero")," o ",(0,n.kt)("inlineCode",{parentName:"p"},"falso"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isTimeout',\n    code: `\n  $isTimeout[$guildID;$authorID]\n  `\n});\n")))}j.isMDXComponent=!0}}]);