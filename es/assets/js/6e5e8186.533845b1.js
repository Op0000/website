"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,b=l["".concat(s,".").concat(f)]||l[f]||p[f]||a;return r?n.createElement(b,m(m({ref:t},c),{},{components:r})):n.createElement(b,m({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,m=new Array(a);m[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:o,m[1]=i;for(var u=2;u<a;u++)m[u]=r[u];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>h,frontMatter:()=>b,metadata:()=>y,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,m=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e},p=(e,t)=>a(e,m(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$maximumMembers",description:"Return the maximum members can join the server."},d=void 0,y={unversionedId:"functions/maximummembers",id:"version-5.5.5/functions/maximummembers",title:"$maximumMembers",description:"Return the maximum members can join the server.",source:"@site/versioned_docs/version-5.5.5/functions/maximummembers.md",sourceDirName:"functions",slug:"/functions/maximummembers",permalink:"/es/docs/5.5.5/functions/maximummembers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$maximumMembers",description:"Return the maximum members can join the server."},sidebar:"docs",previous:{title:"$math",permalink:"/es/docs/5.5.5/functions/math"},next:{title:"$memberExists",permalink:"/es/docs/5.5.5/functions/memberexists"}},v={},g=[{value:"Usage:",id:"usage",level:4}],O={toc:g},x="wrapper";function h(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(x,p(l(l({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the limit of members the given guild has. This is only for large servers with more than 100,000 members. All guilds below return 100000."),(0,n.kt)("p",null,"Raw usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$maximumMembers[guildID (optional)]")),(0,n.kt)("h4",l({},{id:"usage"}),"Usage:"),(0,n.kt)("p",null,"Example command to return the amount of maximum members of the current guild:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "maxmembers",\ncode: `\nLimit: $maximumMembers\n`\n})\n')),(0,n.kt)("p",null,"Example command to return the amount of maximum members of the another guild:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "maxmembers",\ncode: `\nLimit: $maximumMembers[773352845738115102]\n`\n})\n')))}h.isMDXComponent=!0}}]);