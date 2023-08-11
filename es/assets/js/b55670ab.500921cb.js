"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2326:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&u(e,a,t[a]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a};const f={title:"$parseDate",description:"$parseDate devolver\xe1 la fecha/hora para los milisegundos dados",id:"parseDate"},g=void 0,y={unversionedId:"functions/util-related/parseDate",id:"version-6.4.0/functions/util-related/parseDate",title:"$parseDate",description:"$parseDate devolver\xe1 la fecha/hora para los milisegundos dados",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/parseDate.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/parseDate",permalink:"/es/docs/functions/util-related/parseDate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$parseDate",description:"$parseDate devolver\xe1 la fecha/hora para los milisegundos dados",id:"parseDate"},sidebar:"docs",previous:{title:"$onlyPerms",permalink:"/es/docs/functions/util-related/onlyPerms"},next:{title:"$parseTime",permalink:"/es/docs/functions/util-related/parseTime"}},k={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Tipos",id:"tipos",level:3},{value:"Ejemplo(s)",id:"ejemplos",level:2}],b={toc:v},h="wrapper";function N(e){var t=e,{components:a}=t,n=m(t,["components"]);return(0,r.kt)(h,d(c(c({},b),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$parseDate")," $parseDate retornar\xe1 la fecha/hora para los milisegundos dados"),(0,r.kt)("h2",c({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$parseDate[ms;type?]\n")),(0,r.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"m"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Tiempo en ms que desea analizar."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"tipo?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"El tipo en el que se devolver\xe1 la fecha analizada."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("h3",c({},{id:"tipos"}),"Tipos"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Formatear"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"tiempo"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1 a\xf1o, 1 semana, 6 d\xedas, 8 horas, 16 minutos, 20 segundos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"fecha"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1/1/2023, 8:16:20 AM")))),(0,r.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 su fecha actual en la ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," ",(0,r.kt)("a",c({parentName:"p"},{href:"#types"}),"format"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'parseDate',\n    code: `\n  $parseDate[$dateStamp;date]\n  `\n});\n")))}N.isMDXComponent=!0}}]);