"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40201],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=n,m=p["".concat(u,".").concat(f)]||p[f]||s[f]||l;return t?a.createElement(m,o(o({ref:r},d),{},{components:t})):a.createElement(m,o({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},11625:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>y,default:()=>x,frontMatter:()=>m,metadata:()=>O,toc:()=>v});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&d(e,t,r[t]);return e},s=(e,r)=>l(e,o(r)),f=(e,r)=>{var t={};for(var a in e)u.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$arrayLastIndexOf",description:"$arrayLastIndexOf retournera l'index du dernier \xe9l\xe9ment trouv\xe9 de la requ\xeate.",id:"arrayLastIndexOf"},y=void 0,O={unversionedId:"functions/array-related/arrayLastIndexOf",id:"version-6.4.0/functions/array-related/arrayLastIndexOf",title:"$arrayLastIndexOf",description:"$arrayLastIndexOf retournera l'index du dernier \xe9l\xe9ment trouv\xe9 de la requ\xeate.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayLastIndexOf.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayLastIndexOf",permalink:"/fr/docs/functions/array-related/arrayLastIndexOf",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$arrayLastIndexOf",description:"$arrayLastIndexOf retournera l'index du dernier \xe9l\xe9ment trouv\xe9 de la requ\xeate.",id:"arrayLastIndexOf"},sidebar:"docs",previous:{title:"$arrayJoin",permalink:"/fr/docs/functions/array-related/arrayJoin"},next:{title:"$arrayLength",permalink:"/fr/docs/functions/array-related/arrayLength"}},b={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:v},k="wrapper";function x(e){var r=e,{components:t}=r,n=f(r,["components"]);return(0,a.kt)(k,s(p(p({},g),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayLastIndexOf")," retournera l'index du dernier \xe9l\xe9ment trouv\xe9 de la requ\xeate."),(0,a.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$arrayLastIndexOf[nom;requ\xeate]\n")),(0,a.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"requ\xeate"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"L'\xe9l\xe9ment que nous allons rechercher pour chaque \xe9l\xe9ment du tableau."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-lastindexof",\n    code: `\n  $arrayIndexOf[tableau;akarui]\n  $createArray[tableau;aoi.js;akarui;akarui;documents;bot]\n  `\n    // Ceci renverra "3" car le dernier mot "akarui" se trouve en troisi\xe8me position dans le tableau.\n});\n')))}x.isMDXComponent=!0}}]);