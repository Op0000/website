"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$mutualServers"},v=void 0,y={unversionedId:"functions/mutualservers",id:"version-5.5.5/functions/mutualservers",title:"$mutualServers",description:"This function returns the mutual servers the bot and the specified user have",source:"@site/versioned_docs/version-5.5.5/functions/mutualservers.md",sourceDirName:"functions",slug:"/functions/mutualservers",permalink:"/fr/docs/5.5.5/functions/mutualservers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$mutualServers"},sidebar:"docs",previous:{title:"$muteUser",permalink:"/fr/docs/5.5.5/functions/muteuser"},next:{title:"$newChannel",permalink:"/fr/docs/5.5.5/functions/newchannel"}},b={},O=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],g={toc:O},h="wrapper";function k(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(h,f(p(p({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the mutual servers the bot and the specified user have"),(0,n.kt)("h4",p({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 2 optional fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User ID ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Separator ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$mutualServers[userID;separator (optional)]")),(0,n.kt)("h4",p({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User ID - The user we're getting mutual servers from"),(0,n.kt)("li",{parentName:"ul"},"Separator - The symbol separating each server")),(0,n.kt)("h4",p({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Without optional fields"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: 'mutual',\ncode: `$mutualServers`\n})\n")),(0,n.kt)("p",null,"With optional fields"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: 'mutual',\ncode: `$mutualServers[$mentioned[1];|]`\n})\n")))}k.isMDXComponent=!0}}]);