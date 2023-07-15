"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),v=a,d=u["".concat(s,".").concat(v)]||u[v]||f[v]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},24919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),v=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$serverAvailable"},b=void 0,m={unversionedId:"functions/serveravailable",id:"version-5.5.5/functions/serveravailable",title:"$serverAvailable",description:"This function returns whether or not the specified server is available",source:"@site/versioned_docs/version-5.5.5/functions/serveravailable.md",sourceDirName:"functions",slug:"/functions/serveravailable",permalink:"/tr/docs/5.5.5/functions/serveravailable",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$serverAvailable"},sidebar:"docs",previous:{title:"$sendWebhook",permalink:"/tr/docs/5.5.5/functions/sendwebhook"},next:{title:"$serverBanner",permalink:"/tr/docs/5.5.5/functions/serverbanner"}},y={},O=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],g={toc:O},h="wrapper";function k(e){var t=e,{components:r}=t,a=v(t,["components"]);return(0,n.kt)(h,f(u(u({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns whether or not the specified server is available"),(0,n.kt)("h4",u({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 optional field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Guild ID ","(","Required",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$serverAvailable[guildID (optional)]")),(0,n.kt)("h4",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Guild ID - The guild we're getting the info from")),(0,n.kt)("h4",u({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Without the optional field"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "serverAvailable",\ncode: `$serverAvailable`\n})\n')),(0,n.kt)("p",null,"With optional field"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "serverAvailable",\ncode: `$serverAvailable[773352845738115102]`\n})\n')))}k.isMDXComponent=!0}}]);