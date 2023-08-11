"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,l(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$deleteInvite",description:"$deleteInvite eliminar\xe1 una invitaci\xf3n espec\xedfica al gremio.",id:"deleteInvite"},v=void 0,g={unversionedId:"functions/guild-related/deleteInvite",id:"version-6.4.0/functions/guild-related/deleteInvite",title:"$deleteInvite",description:"$deleteInvite eliminar\xe1 una invitaci\xf3n espec\xedfica al gremio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/deleteInvite.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/deleteInvite",permalink:"/es/docs/functions/guild-related/deleteInvite",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$deleteInvite",description:"$deleteInvite eliminar\xe1 una invitaci\xf3n espec\xedfica al gremio.",id:"deleteInvite"},sidebar:"docs",previous:{title:"$deleteEmojis",permalink:"/es/docs/functions/guild-related/deleteEmojis"},next:{title:"$deleteRoles",permalink:"/es/docs/functions/guild-related/deleteRoles"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:b},O="wrapper";function N(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,u(s(s({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$deleteInvite")," eliminar\xe1 una invitaci\xf3n espec\xedfica al gremio."),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$deleteInvite[servidorID;codigo de invitacion;razon?]\n")),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"servidorID"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"El ID de la guild cuya invitaci\xf3n debe ser eliminada."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"c\xf3digo de invitaci\xf3n"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"El c\xf3digo de invitaci\xf3n espec\xedfico."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto eliminar\xe1 una invitaci\xf3n (no funcionar\xe1 porque el c\xf3digo de invitaci\xf3n no existe):"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'deleteInvite',\n    code: `\n  $deleteInvite[$guildID;ifawd9a;Testing!]\n  `\n});\n")))}N.isMDXComponent=!0}}]);