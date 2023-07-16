"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79021],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?t.createElement(d,i(i({ref:r},l),{},{components:n})):t.createElement(d,i({ref:r},l))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96470:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>O,contentTitle:()=>y,default:()=>k,frontMatter:()=>d,metadata:()=>b,toc:()=>v});var t=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))c.call(r,n)&&l(e,n,r[n]);if(s)for(var n of s(r))p.call(r,n)&&l(e,n,r[n]);return e},f=(e,r)=>a(e,i(r)),m=(e,r)=>{var n={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&s)for(var t of s(e))r.indexOf(t)<0&&p.call(e,t)&&(n[t]=e[t]);return n};const d={title:"$onlyPerms",description:"Checks if user has specified perms"},y=void 0,b={unversionedId:"functions/onlyperms",id:"version-5.5.5/functions/onlyperms",title:"$onlyPerms",description:"Checks if user has specified perms",source:"@site/versioned_docs/version-5.5.5/functions/onlyperms.md",sourceDirName:"functions",slug:"/functions/onlyperms",permalink:"/docs/5.5.5/functions/onlyperms",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$onlyPerms",description:"Checks if user has specified perms"},sidebar:"docs",previous:{title:"$onlyNSFW",permalink:"/docs/5.5.5/functions/onlynsfw"},next:{title:"$ordinal",permalink:"/docs/5.5.5/functions/ordinal"}},O={},v=[],g={toc:v},h="wrapper";function k(e){var r=e,{components:n}=r,o=m(r,["components"]);return(0,t.kt)(h,f(u(u({},g),o),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function only allows the command to be ran when a user has the specified ",(0,t.kt)("a",u({parentName:"p"},{href:"/docs/5.5.5/other/permissions"}),"permissions")),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$onlyPerms[perm1;perm2;...;error when user has no perms]\n")),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "special",\ncode: `Special Command\n$onlyPerms[ban;kick;:x: You need ban and kick permissions]`\n})\n')))}k.isMDXComponent=!0}}]);