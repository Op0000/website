"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[86881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||u[f]||s;return r?n.createElement(d,a(a({ref:t},m),{},{components:r})):n.createElement(d,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={title:"$emojisFromMessage"},a=void 0,i={unversionedId:"functions/emojisfrommessage",id:"version-5.5.5/functions/emojisfrommessage",title:"$emojisFromMessage",description:"This function filters out all emojis from the provided message and returns",source:"@site/versioned_docs/version-5.5.5/functions/emojisfrommessage.md",sourceDirName:"functions",slug:"/functions/emojisfrommessage",permalink:"/docs/5.5.5/functions/emojisfrommessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687675592,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{title:"$emojisFromMessage"},sidebar:"docs",previous:{title:"$emojiExists",permalink:"/docs/5.5.5/functions/emojiexists"},next:{title:"$error",permalink:"/docs/5.5.5/functions/error"}},c={},l=[],m={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function filters out all emojis from the provided message and returns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$emojisFromMessage[message;separator (optional)]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojis", \ncode: `\nEmojis:\n$emojisFromMessage[Hello\ud83d\ude00, Made with \u2764\ufe0f]\n`\n//Will return: \ud83d\ude00,\u2764\ufe0f\n})\n')))}u.isMDXComponent=!0}}]);