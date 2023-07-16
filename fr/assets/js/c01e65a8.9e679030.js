"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4765],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),b=a,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||o;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=b;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},34044:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>v,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&u(e,t,r[t]);if(s)for(var t of s(r))c.call(r,t)&&u(e,t,r[t]);return e},f=(e,r)=>o(e,l(r)),b=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$setGlobalUserVar",description:"Sets a global user var value"},v=void 0,m={unversionedId:"functions/setglobaluservar",id:"version-5.5.5/functions/setglobaluservar",title:"$setGlobalUserVar",description:"Sets a global user var value",source:"@site/versioned_docs/version-5.5.5/functions/setglobaluservar.md",sourceDirName:"functions",slug:"/functions/setglobaluservar",permalink:"/fr/docs/5.5.5/functions/setglobaluservar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$setGlobalUserVar",description:"Sets a global user var value"},sidebar:"docs",previous:{title:"$setChannelVar",permalink:"/fr/docs/5.5.5/functions/setchannelvar"},next:{title:"$setGuildIcon",permalink:"/fr/docs/5.5.5/functions/setguildicon"}},y={},g=[],O={toc:g},j="wrapper";function h(e){var r=e,{components:t}=r,a=b(r,["components"]);return(0,n.kt)(j,f(p(p({},O),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function sets a value to a user. The value will remain the same throughout all guilds but will remain assigned to 1 user"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$setGlobalUserVar[variable;value;user ID (optional)]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "setGlobalUserVar",\ncode: `Set your variable value to 4\n$setGlobalUserVar[money;4]`\n})\n')))}h.isMDXComponent=!0}}]);