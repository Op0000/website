"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31833],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:r,i[1]=a;for(var d=2;d<l;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>C,frontMatter:()=>f,metadata:()=>y,toc:()=>O});var o=t(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(a)for(var t of a(n))d.call(n,t)&&c(e,t,n[t]);return e},p=(e,n)=>l(e,i(n)),m=(e,n)=>{var t={};for(var o in e)s.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&a)for(var o of a(e))n.indexOf(o)<0&&d.call(e,o)&&(t[o]=e[o]);return t};const f={title:"$mentionedRolesCount",description:"$mentionedRolesCount devolver\xe1 la cantidad de menciones de rol dentro de un mensaje.",id:"mentionedRolesCount"},v=void 0,y={unversionedId:"functions/util-related/mentionedRolesCount",id:"version-6.4.0/functions/util-related/mentionedRolesCount",title:"$mentionedRolesCount",description:"$mentionedRolesCount devolver\xe1 la cantidad de menciones de rol dentro de un mensaje.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/mentionedRolesCount.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedRolesCount",permalink:"/es/docs/functions/util-related/mentionedRolesCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691131617,formattedLastUpdatedAt:"4 ago 2023",frontMatter:{title:"$mentionedRolesCount",description:"$mentionedRolesCount devolver\xe1 la cantidad de menciones de rol dentro de un mensaje.",id:"mentionedRolesCount"},sidebar:"docs",previous:{title:"$mentionedRoles",permalink:"/es/docs/functions/util-related/mentionedRoles"},next:{title:"$mentionedUsersCount",permalink:"/es/docs/functions/util-related/mentionedUsersCount"}},b={},O=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:O},j="wrapper";function C(e){var n=e,{components:t}=n,r=m(n,["components"]);return(0,o.kt)(j,p(u(u({},g),r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$mentionedRolesCount")," devolver\xe1 la cantidad de menciones de rol dentro de un mensaje."),(0,o.kt)("h2",u({},{id:"uso"}),"Uso"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$mentionedRolesCount\n")),(0,o.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,o.kt)("p",null,"Esto devolver\xe1 la cantidad de menciones de rol en el texto dado:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionedRolesCount',\n    code: `\n  T\xfa tienes: \xa1Menciones de rol $mentionedRolesCount en tu mensaje!\n`\n});\n")))}C.isMDXComponent=!0}}]);