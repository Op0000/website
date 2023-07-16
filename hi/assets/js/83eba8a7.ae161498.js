"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[f]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>j,frontMatter:()=>d,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&u(e,n,t[n]);return e},p=(e,t)=>o(e,s(t)),m=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$messageAttachment",description:"Returns first attachment url of author message (If any)"},y=void 0,g={unversionedId:"functions/messageattachment",id:"version-5.5.5/functions/messageattachment",title:"$messageAttachment",description:"Returns first attachment url of author message (If any)",source:"@site/versioned_docs/version-5.5.5/functions/messageattachment.md",sourceDirName:"functions",slug:"/functions/messageattachment",permalink:"/hi/docs/5.5.5/functions/messageattachment",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$messageAttachment",description:"Returns first attachment url of author message (If any)"},sidebar:"docs",previous:{title:"$message",permalink:"/hi/docs/5.5.5/functions/message"},next:{title:"$messageExists",permalink:"/hi/docs/5.5.5/functions/messageexists"}},h={},b=[],O={toc:b},v="wrapper";function j(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(v,p(f(f({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the url the first attachment the author sends, if they send any"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "getAttachment",\ncode: `URL of author attachment: $messageAttachment`\n})\n')))}j.isMDXComponent=!0}}]);