"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38381],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),v=o,d=p["".concat(s,".").concat(v)]||p[v]||f[v]||i;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=v;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},93843:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>m,default:()=>j,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=t(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&l(e,t,r[t]);if(c)for(var t of c(r))u.call(r,t)&&l(e,t,r[t]);return e},f=(e,r)=>i(e,a(r)),v=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$serverCount",description:"Returns the amount of servers the bot is in."},m=void 0,y={unversionedId:"functions/servercount",id:"version-5.5.5/functions/servercount",title:"$serverCount",description:"Returns the amount of servers the bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/servercount.md",sourceDirName:"functions",slug:"/functions/servercount",permalink:"/uk/docs/5.5.5/functions/servercount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$serverCount",description:"Returns the amount of servers the bot is in."},sidebar:"docs",previous:{title:"$serverCooldown",permalink:"/uk/docs/5.5.5/functions/servercooldown"},next:{title:"$serverDescription",permalink:"/uk/docs/5.5.5/functions/serverdescription"}},b={},O=[],g={toc:O},h="wrapper";function j(e){var r=e,{components:t}=r,o=v(r,["components"]);return(0,n.kt)(h,f(p(p({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns how many servers the bot is in"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "count",\ncode: `I am in $serverCount servers!`\n})\n')))}j.isMDXComponent=!0}}]);