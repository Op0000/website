"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7846],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4033:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const m={title:"$broadcastEval",description:"Manage your shards with broadcast eval."},b=void 0,v={unversionedId:"functions/broadcasteval",id:"version-5.5.5/functions/broadcasteval",title:"$broadcastEval",description:"Manage your shards with broadcast eval.",source:"@site/versioned_docs/version-5.5.5/functions/broadcasteval.md",sourceDirName:"functions",slug:"/functions/broadcasteval",permalink:"/uk/docs/5.5.5/functions/broadcasteval",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$broadcastEval",description:"Manage your shards with broadcast eval."},sidebar:"docs",previous:{title:"$botTyping",permalink:"/uk/docs/5.5.5/functions/bottyping"},next:{title:"$cacheMembers",permalink:"/uk/docs/5.5.5/functions/cachemembers"}},y={},g=[{value:"Usage",id:"usage",level:3},{value:"Field",id:"field",level:3},{value:"Example",id:"example",level:2}],h={toc:g},O="wrapper";function k(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(O,d(u(u({},h),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function makes all of the shards evaluate a given method."),(0,a.kt)("h3",u({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),"$broadcastEval[function]\n")),(0,a.kt)("h3",u({},{id:"field"}),"Field"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"function"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"function that will evaluate on all shards"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h2",u({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-js"}),'bot.command({\n  name: "broadcast-eval",\n  code: `\n  $broadcastEval[client.guilds.cache.size]\n  `\n//Returns how your shards\' guilds seperated as; 649, 861 for example.\n});\n')))}k.isMDXComponent=!0}}]);