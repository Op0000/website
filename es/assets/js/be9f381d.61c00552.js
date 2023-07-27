"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97107],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?t.createElement(f,l(l({ref:r},p),{},{components:n})):t.createElement(f,l({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94136:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var t=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))s.call(r,n)&&p(e,n,r[n]);if(i)for(var n of i(r))c.call(r,n)&&p(e,n,r[n]);return e},d=(e,r)=>o(e,l(r)),m=(e,r)=>{var n={};for(var t in e)s.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n};const f={title:"$channelPermissionsFor",description:"$channelPermissionsFor devolver\xe1 los permisos de canal de un usuario o rol espec\xedfico.",id:"channelPermissionsFor"},v=void 0,g={unversionedId:"functions/guild-related/channelPermissionsFor",id:"version-6.4.0/functions/guild-related/channelPermissionsFor",title:"$channelPermissionsFor",description:"$channelPermissionsFor devolver\xe1 los permisos de canal de un usuario o rol espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/channelPermissionsFor.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/channelPermissionsFor",permalink:"/es/docs/functions/guild-related/channelPermissionsFor",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$channelPermissionsFor",description:"$channelPermissionsFor devolver\xe1 los permisos de canal de un usuario o rol espec\xedfico.",id:"channelPermissionsFor"},sidebar:"docs",previous:{title:"$ban",permalink:"/es/docs/functions/guild-related/ban"},next:{title:"$cloneChannel",permalink:"/es/docs/functions/guild-related/cloneChannel"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:y},k="wrapper";function O(e){var r=e,{components:n}=r,a=m(r,["components"]);return(0,t.kt)(k,d(u(u({},h),a),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"$channelPermissionsFor")," devolver\xe1 los permisos de un canal espec\xedfico de un usuario o rol."),(0,t.kt)("h2",u({},{id:"uso"}),"Uso"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$channelPermissionsFor[ID de usuario o rol?;canalID?;sep?]\n")),(0,t.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,t.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,t.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,t.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",u({parentName:"tr"},{align:null}),"ID de usuario o rol?"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"El usuario o el identificador de rol cuyos permisos ser\xe1n devueltos."),(0,t.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",u({parentName:"tr"},{align:null}),"canalID"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"El ID del canal del que deben devolverse los permisos."),(0,t.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",u({parentName:"tr"},{align:null}),"sep?"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,t.kt)("td",u({parentName:"tr"},{align:null}),'El separador que se utilizar\xe1 para separar los permisos, por defecto ",".'),(0,t.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,t.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,t.kt)("p",null,"Esto devolver\xe1 el modo pausado del canal en el que se ejecuta el comando:"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelPermissionsFor',\n    code: `\n  $channelPermissionsFor[$authorID;$channelID;, ]\n  `\n});\n")))}O.isMDXComponent=!0}}]);