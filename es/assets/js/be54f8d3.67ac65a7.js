"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8655],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,f=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,l[1]=c;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&p(e,a,t[a]);return e},m=(e,t)=>o(e,l(t)),u=(e,t)=>{var a={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$forEachChannel",description:"$forEachChannel ejecutar\xe1 comandos esperados en cada canal de cada gremio.",id:"forEachChannel"},h=void 0,g={unversionedId:"functions/misc-related/forEachChannel",id:"version-6.4.0/functions/misc-related/forEachChannel",title:"$forEachChannel",description:"$forEachChannel ejecutar\xe1 comandos esperados en cada canal de cada gremio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/forEachChannel.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/forEachChannel",permalink:"/es/docs/functions/misc-related/forEachChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$forEachChannel",description:"$forEachChannel ejecutar\xe1 comandos esperados en cada canal de cada gremio.",id:"forEachChannel"},sidebar:"docs",previous:{title:"$findTextSplitIndex",permalink:"/es/docs/functions/misc-related/findTextSplitIndex"},next:{title:"$forEachGuild",permalink:"/es/docs/functions/misc-related/forEachGuild"}},b={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:v},k="wrapper";function O(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.kt)(k,m(s(s({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$forEachChannel")," ejecutar\xe1 comandos esperados en cada canal de cada gremio."),(0,n.kt)("h2",s({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$forEachChannel[tiempo;esperar datos;...Cmds esperados;finalizar comando]\n")),(0,n.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"tiempo"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Cu\xe1nto tiempo tarda entre cada canal en ejecutar el siguiente."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"awaitData"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"objeto"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Datos esperados."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"...Cmds esperados"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Comando esperado para ejecutar."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"finalizar comando"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Comando esperado para ejecutar cuando termine el bucle."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")))),(0,n.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,'Esto cambiar\xe1 el valor de variable de cada canal a "test":'),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "forEachChannel",\n    code: `\n  $forEachChannel[2s;{"value": "test"};awaitedCommand;]\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitedCommand",\n    code: `\n  $setChannelVar[varname;$awaitData[value];$channelID]\n  `\n});\n')))}O.isMDXComponent=!0}}]);