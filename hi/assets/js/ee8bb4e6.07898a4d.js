"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39716],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,a(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$discriminator",description:"Retrieve the discriminator of the User."},v=void 0,y={unversionedId:"functions/discriminator",id:"version-5.5.5/functions/discriminator",title:"$discriminator",description:"Retrieve the discriminator of the User.",source:"@site/versioned_docs/version-5.5.5/functions/discriminator.md",sourceDirName:"functions",slug:"/functions/discriminator",permalink:"/hi/docs/5.5.5/functions/discriminator",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$discriminator",description:"Retrieve the discriminator of the User."},sidebar:"docs",previous:{title:"$disableMentions",permalink:"/hi/docs/5.5.5/functions/disablementions"},next:{title:"$divide",permalink:"/hi/docs/5.5.5/functions/divide"}},b={},O=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],g={toc:O},h="wrapper";function k(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(h,d(u(u({},g),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the users discriminator"),(0,n.kt)("h4",u({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 optional field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User ID ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$discriminator[userID (optional)]")),(0,n.kt)("h4",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User ID - The user we're getting the discriminator from")),(0,n.kt)("h4",u({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Getting the author's discrim"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "user", \ncode: `$username\'s is $discriminator`\n})\n')),(0,n.kt)("p",null,"Getting the mentioned user's discrim"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "user", \ncode: `$username[$mentioned[1]]\'s is $discriminator[$mentioned[1]]`\n})\n')))}k.isMDXComponent=!0}}]);