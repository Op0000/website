"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||l;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>l(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$fetchActiveThreads",description:"$fetchActiveThreads renverra tous les fils actifs d'un salon donn\xe9.",id:"fetchActiveThreads"},h=void 0,v={unversionedId:"functions/guild-related/fetchActiveThreads",id:"version-6.4.0/functions/guild-related/fetchActiveThreads",title:"$fetchActiveThreads",description:"$fetchActiveThreads renverra tous les fils actifs d'un salon donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/fetchActiveThreads.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/fetchActiveThreads",permalink:"/fr/docs/functions/guild-related/fetchActiveThreads",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$fetchActiveThreads",description:"$fetchActiveThreads renverra tous les fils actifs d'un salon donn\xe9.",id:"fetchActiveThreads"},sidebar:"docs",previous:{title:"$editChannel",permalink:"/fr/docs/functions/guild-related/editChannel"},next:{title:"$fetchArchivedThreads",permalink:"/fr/docs/functions/guild-related/fetchArchivedThreads"}},g={},y=[{value:"Usage",id:"usage",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(k,u(p(p({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$fetchActiveThreads")," renverra tous les fils actifs d'un salon donn\xe9."),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$fetchActiveThreads[IDsalon;option?]\n")),(0,n.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"IDsalon"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ID du salon don vous souhaitez r\xe9cup\xe9rer tous les files actifs de celui-ci."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"option?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Comment renvoyer les fils actifs. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"name")," (par d\xe9faut) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"id")),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela retournera tous les fils actifs, s'il y en a:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'afficherFilActif',\n    code: `\n  $fetchActiveThreads[$channelID;name]\n  `\n});\n")))}O.isMDXComponent=!0}}]);