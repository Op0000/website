"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64474],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),v=a,d=p["".concat(i,".").concat(v)]||p[v]||f[v]||o;return t?n.createElement(d,s(s({ref:r},u),{},{components:t})):n.createElement(d,s({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=v;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},52882:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={title:"$resetGlobalUserVar",description:"Resets global user variable values"},s=void 0,l={unversionedId:"functions/resetgloaluservar",id:"version-5.5.5/functions/resetgloaluservar",title:"$resetGlobalUserVar",description:"Resets global user variable values",source:"@site/versioned_docs/version-5.5.5/functions/resetgloaluservar.md",sourceDirName:"functions",slug:"/functions/resetgloaluservar",permalink:"/docs/5.5.5/functions/resetgloaluservar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147892,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$resetGlobalUserVar",description:"Resets global user variable values"},sidebar:"docs",previous:{title:"$reply",permalink:"/docs/5.5.5/functions/reply"},next:{title:"$resetServerVar",permalink:"/docs/5.5.5/functions/resetservervar"}},i={},c=[],u={toc:c},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function resets everyones global user variable values to defaut value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$resetGlobalUserVar[variable name]\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "resetglobaluservar",\ncode: `Resetted everyones money\n$resetGlobalUserVar[money]`\n})\n')))}f.isMDXComponent=!0}}]);