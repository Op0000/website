"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[11938],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>o(e,a(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$filterMessage",description:"Removes specified value from specified text"},v=void 0,g={unversionedId:"functions/filtermessage",id:"version-5.5.5/functions/filtermessage",title:"$filterMessage",description:"Removes specified value from specified text",source:"@site/versioned_docs/version-5.5.5/functions/filtermessage.md",sourceDirName:"functions",slug:"/functions/filtermessage",permalink:"/uk/docs/5.5.5/functions/filtermessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$filterMessage",description:"Removes specified value from specified text"},sidebar:"docs",previous:{title:"$fileSize",permalink:"/uk/docs/5.5.5/functions/filesize"},next:{title:"$findChannel",permalink:"/uk/docs/5.5.5/functions/findchannel"}},b={},y=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:y},k="wrapper";function h(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(k,f(p(p({},O),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function filters and removes the given value from the given text"),(0,n.kt)("h4",p({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 2 required fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Value ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Value 2 ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$filterMessage[text;value1,value2,...]")),(0,n.kt)("h4",p({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Text - The text we're filtering from"),(0,n.kt)("li",{parentName:"ul"},"Value","(","s",")"," - The value","(","s",")"," we're removing the text from")),(0,n.kt)("h4",p({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Filtering 1 word"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: \"filterMessage\",\ncode: `$filterMessage[Aoi.JS Ruben Leref Kubaturi Spesh Kino Azus;Aoi.JS]` \n//Removes 'Aoi.JS' from text\n})\n")),(0,n.kt)("p",null,"Filtering multiple words"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: \"filterMessage\",\ncode: `$filterMessage[Aoi.JS Ruben Leref Kubaturi Spesh Kino Azus Chiwi ElTuna;Chiwi,ElTuna,Aoi.JS]` \n//Removes 'Kubaturi' and 'Aoi.JS' from text\n})\n")))}h.isMDXComponent=!0}}]);