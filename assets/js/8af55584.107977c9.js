"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>x,contentTitle:()=>g,default:()=>h,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>a(e,c(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$replaceTextWithRegex"},g=void 0,y={unversionedId:"functions/replacetextwithregex",id:"version-5.5.5/functions/replacetextwithregex",title:"$replaceTextWithRegex",description:"This function replaces text with regex flags",source:"@site/versioned_docs/version-5.5.5/functions/replacetextwithregex.md",sourceDirName:"functions",slug:"/functions/replacetextwithregex",permalink:"/docs/5.5.5/functions/replacetextwithregex",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$replaceTextWithRegex"},sidebar:"docs",previous:{title:"$replaceText",permalink:"/docs/5.5.5/functions/replacetext"},next:{title:"$reply",permalink:"/docs/5.5.5/functions/reply"}},x={},b=[],O={toc:b},v="wrapper";function h(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(v,f(u(u({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function replaces text with ",(0,n.kt)("a",u({parentName:"p"},{href:"https://www.w3schools.com/jsref/jsref_obj_regexp.asp"}),"regex flags")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$replaceTextWithRegex[text;regex;flags;new text]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: \"regex\",\ncode: `\n$replaceTextWithRegex[hello aoi.js;aoi.js;g;community]\n`\n/*\nReplaces 'aoi.js' to 'community'\n*/\n})\n")))}h.isMDXComponent=!0}}]);