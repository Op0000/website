"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),v=a,d=p["".concat(c,".").concat(v)]||p[v]||f[v]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},67198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>g,default:()=>k,frontMatter:()=>d,metadata:()=>b,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),v=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$getVar",description:"Gets a global variable value"},g=void 0,b={unversionedId:"functions/getvar",id:"version-5.5.5/functions/getvar",title:"$getVar",description:"Gets a global variable value",source:"@site/versioned_docs/version-5.5.5/functions/getvar.md",sourceDirName:"functions",slug:"/functions/getvar",permalink:"/tr/docs/5.5.5/functions/getvar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$getVar",description:"Gets a global variable value"},sidebar:"docs",previous:{title:"$getUserVar",permalink:"/tr/docs/5.5.5/functions/getuservar"},next:{title:"$giveRole",permalink:"/tr/docs/5.5.5/functions/giverole"}},m={},y=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:y},h="wrapper";function k(e){var t=e,{components:r}=t,a=v(t,["components"]);return(0,n.kt)(h,f(p(p({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the value of the given variable everyone shares"),(0,n.kt)("h4",p({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 required field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Variable ","(","Required",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$getServerVar[variable]")),(0,n.kt)("h4",p({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Variable - The variable value we're getting for all the users")),(0,n.kt)("h4",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "get", \ncode: `\n$getVar[variable]`\n})\n')))}k.isMDXComponent=!0}}]);