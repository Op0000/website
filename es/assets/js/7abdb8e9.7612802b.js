"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(a),c=n,b=s["".concat(i,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(b,o(o({ref:t},u),{},{components:a})):r.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[s]="string"==typeof e?e:n,o[1]=d;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},10151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>O,frontMatter:()=>b,metadata:()=>g,toc:()=>v});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&u(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&u(e,a,t[a]);return e},m=(e,t)=>l(e,o(t)),c=(e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a};const b={title:"$rawLeaderboard",description:"$rawLeaderboard devolver\xe1 una tabla de clasificaci\xf3n del tipo dado.",id:"rawLeaderboard"},k=void 0,g={unversionedId:"functions/variables-related/rawLeaderboard",id:"version-6.4.0/functions/variables-related/rawLeaderboard",title:"$rawLeaderboard",description:"$rawLeaderboard devolver\xe1 una tabla de clasificaci\xf3n del tipo dado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/rawLeaderboard.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/rawLeaderboard",permalink:"/es/docs/functions/variables-related/rawLeaderboard",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$rawLeaderboard",description:"$rawLeaderboard devolver\xe1 una tabla de clasificaci\xf3n del tipo dado.",id:"rawLeaderboard"},sidebar:"docs",previous:{title:"$guildLeaderBoard",permalink:"/es/docs/functions/variables-related/guildLeaderBoard"},next:{title:"$resetGlobalUserVar",permalink:"/es/docs/functions/variables-related/resetGlobalUserVar"}},N={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],f={toc:v},y="wrapper";function O(e){var t=e,{components:a}=t,n=c(t,["components"]);return(0,r.kt)(y,m(s(s({},f),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$rawLeaderboard")," devolver\xe1 una tabla de clasificaci\xf3n del tipo dado."),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$rawLeaderboard[variable;order?;type?;custom?;list?;page?;table?]\n")),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"variable"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Nombre variable."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Tipo variable ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"globalUser")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"usuario")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"servidor")," ",(0,r.kt)("br",null)," 4. ",(0,r.kt)("strong",{parentName:"td"},"canal")),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"pedido"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"En qu\xe9 orden ser\xe1 devuelto ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"ascender")," (ascendente / predeterminado) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"dsc")," (descendiendo)"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\xbfpersonalizado?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Formateando."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"lista?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Cu\xe1ntos listar."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\xbfp\xe1gina?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Qu\xe9 p\xe1gina listar."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"tabla?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Tabla variable."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Opciones"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Devuelve"),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{top}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve la posici\xf3n del usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{name}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve el nombre de usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{tag}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve el nombre de usuario y el discriminador.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{id}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve el ID de usuario.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"{value}")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero, entero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Devuelve el valor de la variable.")))),(0,r.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,'Esto devolver\xe1 una tabla de clasificaci\xf3n de la variable "Ejemplo":'),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "rawLeaderboard",\n    code: `\n    $rawLeaderboard[Example;asc;globalUser;{top} - {username} - {value};10;1;main]\n    `\n});\n')))}O.isMDXComponent=!0}}]);