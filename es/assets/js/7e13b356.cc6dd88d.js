"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58963],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,v=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(v,c(c({ref:r},p),{},{components:t})):n.createElement(v,c({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66069:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>v,metadata:()=>y,toc:()=>O});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>a(e,c(r)),d=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const v={title:"$serverIcon",description:"Returns the server Icon"},m=void 0,y={unversionedId:"functions/servericon",id:"version-5.5.5/functions/servericon",title:"$serverIcon",description:"Returns the server Icon",source:"@site/versioned_docs/version-5.5.5/functions/servericon.md",sourceDirName:"functions",slug:"/functions/servericon",permalink:"/es/docs/5.5.5/functions/servericon",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$serverIcon",description:"Returns the server Icon"},sidebar:"docs",previous:{title:"$serverFeatures",permalink:"/es/docs/5.5.5/functions/serverfeatures"},next:{title:"$serverIDs",permalink:"/es/docs/5.5.5/functions/serverids"}},b={},O=[],g={toc:O},j="wrapper";function h(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(j,f(u(u({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the current guild's icon"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$serverIcon[guild ID (optional);size (optional);dynamic (optional)]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "serverIcon",\ncode: `$thumbnail[$serverIcon]`\n})\n')))}h.isMDXComponent=!0}}]);