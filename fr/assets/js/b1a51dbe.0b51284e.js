"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>O,contentTitle:()=>b,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>i(e,a(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$memberJoinedDate",description:"Returns when the User Joined the Guild."},b=void 0,y={unversionedId:"functions/memberjoineddate",id:"version-5.5.5/functions/memberjoineddate",title:"$memberJoinedDate",description:"Returns when the User Joined the Guild.",source:"@site/versioned_docs/version-5.5.5/functions/memberjoineddate.md",sourceDirName:"functions",slug:"/functions/memberjoineddate",permalink:"/fr/docs/5.5.5/functions/memberjoineddate",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$memberJoinedDate",description:"Returns when the User Joined the Guild."},sidebar:"docs",previous:{title:"$memberExists",permalink:"/fr/docs/5.5.5/functions/memberexists"},next:{title:"$memberJoinPosition",permalink:"/fr/docs/5.5.5/functions/memberjoinposition"}},O={},v=[],h={toc:v},j="wrapper";function g(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(j,m(p(p({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns when the user joined the current guild"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$memberJoinedDate[userID;time/date/ms]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "joinndate",\ncode: `$memberJoinedDate[$authorID;time]`\n/*\ntime - 2 years 1 month 3 weeks 3 days 6 hours 42 minutes and 6 seconds\ndate - Thu Jan 17 2019 21:09:19 GMT+0000 (Greenwich Mean Time)\n*/\n})\n')))}g.isMDXComponent=!0}}]);