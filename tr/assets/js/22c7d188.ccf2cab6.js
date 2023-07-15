"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12319],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||s;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45054:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>d,metadata:()=>b,toc:()=>O});var n=t(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&l(e,t,r[t]);if(i)for(var t of i(r))p.call(r,t)&&l(e,t,r[t]);return e},f=(e,r)=>s(e,a(r)),m=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$suppressErrors",description:"Supresses all errors in a command, able to send a custom one"},y=void 0,b={unversionedId:"functions/suppresserrors",id:"version-5.5.5/functions/suppresserrors",title:"$suppressErrors",description:"Supresses all errors in a command, able to send a custom one",source:"@site/versioned_docs/version-5.5.5/functions/suppresserrors.md",sourceDirName:"functions",slug:"/functions/suppresserrors",permalink:"/tr/docs/5.5.5/functions/suppresserrors",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$suppressErrors",description:"Supresses all errors in a command, able to send a custom one"},sidebar:"docs",previous:{title:"$sum",permalink:"/tr/docs/5.5.5/functions/sum"},next:{title:"$systemChannelID",permalink:"/tr/docs/5.5.5/functions/systemchannelid"}},v={},O=[],g={toc:O},h="wrapper";function w(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(h,f(u(u({},g),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function suppresses all errors and sends a custom one."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"$suppressErrors[error message (optional)]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "suppressErrors",\ncode: `Nothing is wrong with this code!\n$suppressErrors[Theres something wrong with this code]`\n})\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"From 1.4.0 update, new subfunction, ",(0,n.kt)("inlineCode",{parentName:"p"},"{error}"),"has been added. This will return any errors with your custom error message")))}w.isMDXComponent=!0}}]);