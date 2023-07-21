"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$newRole",description:"$newRole contiene datos de un rol que se cre\xf3, actualiz\xf3 o elimin\xf3.\n Se utiliza en eventos de actualizaci\xf3n/eliminaci\xf3n/creaci\xf3n de roles, o de lo contrario no proporcionar\xe1 ning\xfan dato.",id:"newRole"},v=void 0,y={unversionedId:"functions/event-related/newRole",id:"version-6.4.0/functions/event-related/newRole",title:"$newRole",description:"$newRole contiene datos de un rol que se cre\xf3, actualiz\xf3 o elimin\xf3.\n Se utiliza en eventos de actualizaci\xf3n/eliminaci\xf3n/creaci\xf3n de roles, o de lo contrario no proporcionar\xe1 ning\xfan dato.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/newRole.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/newRole",permalink:"/es/docs/functions/event-related/newRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$newRole",description:"$newRole contiene datos de un rol que se cre\xf3, actualiz\xf3 o elimin\xf3.\n Se utiliza en eventos de actualizaci\xf3n/eliminaci\xf3n/creaci\xf3n de roles, o de lo contrario no proporcionar\xe1 ning\xfan dato.",id:"newRole"},sidebar:"docs",previous:{title:"$newPresence",permalink:"/es/docs/functions/event-related/newPresence"},next:{title:"$newState",permalink:"/es/docs/functions/event-related/newState"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}],w={toc:g},O="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,d(s(s({},w),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$newRole")," contiene datos de un rol que se cre\xf3, actualiz\xf3 o elimin\xf3. Se utiliza en eventos de actualizaci\xf3n/eliminaci\xf3n/creaci\xf3n de roles, o de lo contrario no dar\xe1 ning\xfan dato."),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$newRole[opci\xf3n]\n")),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"opci\xf3n"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Opci\xf3n a recuperar."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")))))}k.isMDXComponent=!0}}]);