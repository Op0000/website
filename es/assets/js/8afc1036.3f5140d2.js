"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$interactionFollowUp",description:"$interactionFollowUp se puede usar para solicitudes JSON, informaci\xf3n de canciones o reproducci\xf3n de pistas, ya que estas cosas tardan m\xe1s de 3 segundos.",id:"interactionFollowUp"},g=void 0,y={unversionedId:"functions/event-related/interactionFollowUp",id:"version-6.4.0/functions/event-related/interactionFollowUp",title:"$interactionFollowUp",description:"$interactionFollowUp se puede usar para solicitudes JSON, informaci\xf3n de canciones o reproducci\xf3n de pistas, ya que estas cosas tardan m\xe1s de 3 segundos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/interactionFollowUp.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/interactionFollowUp",permalink:"/es/docs/functions/event-related/interactionFollowUp",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$interactionFollowUp",description:"$interactionFollowUp se puede usar para solicitudes JSON, informaci\xf3n de canciones o reproducci\xf3n de pistas, ya que estas cosas tardan m\xe1s de 3 segundos.",id:"interactionFollowUp"},sidebar:"docs",previous:{title:"$interactionEdit",permalink:"/es/docs/functions/event-related/interactionEdit"},next:{title:"$interactionReply",permalink:"/es/docs/functions/event-related/interactionReply"}},k={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:b},N="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,u(d(d({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionFollowUp")," se puede usar para solicitudes JSON, informaci\xf3n de canciones o reproducci\xf3n de pistas, ya que estas cosas requieren m\xe1s de 3 segundos."),(0,r.kt)("h2",d({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$interactionFollowUp[contenido?;incrusta?;componentes?;archivos?;ef\xedmero?]\n")),(0,r.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"contenido?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Contenido del mensaje."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"incrusta?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Analizador incrustado."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\xbfcomponentes?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Analizador de componentes."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"archivos?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"analizador de archivos."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"ef\xedmero?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"booleano"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\xbfVisible solo para el autor del comando? ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"Verdadero")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"falso")," (por defecto)"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.interactionCommand({\n    name: "interactionFollowUp",\n    prototype: "slash",\n    code: `\n  $interactionFollowUp[Adi\xf3s mundo!]\n  $interactionDefer[true]\n  `\n});\n')))}O.isMDXComponent=!0}}]);