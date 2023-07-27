"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>a(e,l(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$oldPresence",description:"$oldPresence conserve les anciennes donn\xe9es de la pr\xe9sence de l'utilisateur, utilis\xe9es dans l'\xe9v\xe9nement de pr\xe9sence mise \xe0 jour, sinon toutes les donn\xe9es seront vides.",id:"oldPresence"},v=void 0,y={unversionedId:"functions/event-related/oldPresence",id:"version-6.4.0/functions/event-related/oldPresence",title:"$oldPresence",description:"$oldPresence conserve les anciennes donn\xe9es de la pr\xe9sence de l'utilisateur, utilis\xe9es dans l'\xe9v\xe9nement de pr\xe9sence mise \xe0 jour, sinon toutes les donn\xe9es seront vides.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/oldPresence.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/oldPresence",permalink:"/fr/docs/functions/event-related/oldPresence",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$oldPresence",description:"$oldPresence conserve les anciennes donn\xe9es de la pr\xe9sence de l'utilisateur, utilis\xe9es dans l'\xe9v\xe9nement de pr\xe9sence mise \xe0 jour, sinon toutes les donn\xe9es seront vides.",id:"oldPresence"},sidebar:"docs",previous:{title:"$oldMsgData",permalink:"/fr/docs/functions/event-related/oldMsgData"},next:{title:"$oldRole",permalink:"/fr/docs/functions/event-related/oldRole"}},b={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2}],O={toc:g},P="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(P,u(p(p({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$oldPresence")," conserve les anciennes donn\xe9es de la pr\xe9sence de l'utilisateur, utilis\xe9es dans l'\xe9v\xe9nement de pr\xe9sence mise \xe0 jour, sinon toutes les donn\xe9es seront vides."),(0,r.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$oldPresence[option]\n")),(0,r.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Option \xe0 r\xe9cup\xe9rer."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")))))}k.isMDXComponent=!0}}]);