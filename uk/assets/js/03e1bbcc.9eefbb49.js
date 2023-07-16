"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40427],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&l(e,r,t[r]);return e},f=(e,t)=>a(e,c(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$toLocaleUppercase",description:"Uppercases the first letter of each word in the given text"},y=void 0,b={unversionedId:"functions/tolocaleuppercase",id:"version-5.5.5/functions/tolocaleuppercase",title:"$toLocaleUppercase",description:"Uppercases the first letter of each word in the given text",source:"@site/versioned_docs/version-5.5.5/functions/tolocaleuppercase.md",sourceDirName:"functions",slug:"/functions/tolocaleuppercase",permalink:"/uk/docs/5.5.5/functions/tolocaleuppercase",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$toLocaleUppercase",description:"Uppercases the first letter of each word in the given text"},sidebar:"docs",previous:{title:"$title",permalink:"/uk/docs/5.5.5/functions/title"},next:{title:"$toLowercase",permalink:"/uk/docs/5.5.5/functions/tolowercase"}},v={},O=[],g={toc:O},h="wrapper";function w(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(h,f(u(u({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function uppercases the first character in each argument/word in ","<","text",">"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$toLocaleUppercase[text]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "toLocaleUppercase",\ncode: `$toLocaleUppercase[aoijs is awesome]` //Returns: Aoijs Is Awesome\n})\n')))}w.isMDXComponent=!0}}]);