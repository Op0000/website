"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$author",description:"$author agregar\xe1 un campo de autor a un incrustado.",id:"author"},g=void 0,y={unversionedId:"functions/interaction-related/author",id:"version-6.4.0/functions/interaction-related/author",title:"$author",description:"$author agregar\xe1 un campo de autor a un incrustado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/author.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/author",permalink:"/es/docs/functions/interaction-related/author",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$author",description:"$author agregar\xe1 un campo de autor a un incrustado.",id:"author"},sidebar:"docs",previous:{title:"$attachment",permalink:"/es/docs/functions/interaction-related/attachment"},next:{title:"$autoCompleteRespond",permalink:"/es/docs/functions/interaction-related/autoCompleteRespond"}},b={},h=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:h},v="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,d(s(s({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$author")," a\xf1adir\xe1 un campo de autor a un incrustado."),(0,n.kt)("h2",s({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$author[\xedndice?;nombre;URL del icono?]\n")),(0,n.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\xedndice?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Incorporar \xedndice."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"T\xedtulo del autor que se mostrar\xe1."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"URL del icono?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Icono URL que se mostrar\xe1 al lado del t\xedtulo del autor."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto crear\xe1 un incrustado con descripci\xf3n y t\xedtulo del autor:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'author',\n    code: `\n  $author[Hola!;$userAvatar[$authorID]]\n  $description[Insertar con el autor!]\n  `\n});\n")))}O.isMDXComponent=!0}}]);