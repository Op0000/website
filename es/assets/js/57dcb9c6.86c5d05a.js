"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[9169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>b,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))m.call(t,r)&&s(e,r,t[r]);return e},p=(e,t)=>o(e,l(t)),u=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$forEachMember",description:"$forEachMember will execute awaited commands for user within the current guild.",id:"forEachMember"},b=void 0,g={unversionedId:"functions/misc-related/forEachMember",id:"version-6.4.0/functions/misc-related/forEachMember",title:"$forEachMember",description:"$forEachMember will execute awaited commands for user within the current guild.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/forEachMember.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/forEachMember",permalink:"/es/docs/functions/misc-related/forEachMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$forEachMember",description:"$forEachMember will execute awaited commands for user within the current guild.",id:"forEachMember"},sidebar:"docs",previous:{title:"$forEachGuildChannel",permalink:"/es/docs/functions/misc-related/forEachGuildChannel"},next:{title:"$forEachRole",permalink:"/es/docs/functions/misc-related/forEachRole"}},h={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},v="wrapper";function w(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(v,p(d(d({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$forEachMember")," will execute awaited commands for user within the current guild."),(0,n.kt)("h2",d({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$forEachMember[time;awaitData;...awaitedCmds;endCmd]\n")),(0,n.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"tiempo"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"How long it takes between each member to execute the next."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"awaitData"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Datos esperados."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"...awaitedCmds"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Awaited Commands to execute."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"s\xed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"endCmd"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Awaited command to execute when loop ends."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"s\xed")))),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "awaitData",\n  code: `\n  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]\n  `\n});\n\nbot.awaitedCommand({\n  name: "returnMembers",\n  code: `\n  $log[ $authorID , es uno de los miembros de $awaitData[members]]\n  `\n});\n')))}w.isMDXComponent=!0}}]);