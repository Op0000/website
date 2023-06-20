"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[48658],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,v=p["".concat(c,".").concat(f)]||p[f]||m[f]||s;return t?n.createElement(v,i(i({ref:r},u),{},{components:t})):n.createElement(v,i({ref:r},u))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48858:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const s={title:"$serverEmojis",description:"Returns all the server emojis"},i=void 0,a={unversionedId:"functions/serveremojis",id:"version-5.5.5/functions/serveremojis",title:"$serverEmojis",description:"Returns all the server emojis",source:"@site/versioned_docs/version-5.5.5/functions/serveremojis.md",sourceDirName:"functions",slug:"/functions/serveremojis",permalink:"/docs/5.5.5/functions/serveremojis",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687300492,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$serverEmojis",description:"Returns all the server emojis"},sidebar:"docs",previous:{title:"$serverEmojiExists",permalink:"/docs/5.5.5/functions/serveremojiexists"},next:{title:"$serverExists",permalink:"/docs/5.5.5/functions/serverexists"}},c={},l=[],u={toc:l},p="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns every emoji the current server has"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: serverEmojis",\ncode: `All Server Emojis: $serverEmojis`\n})\n')))}m.isMDXComponent=!0}}]);