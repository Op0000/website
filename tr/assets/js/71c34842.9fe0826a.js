"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,v=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return r?n.createElement(v,l(l({ref:t},s),{},{components:r})):n.createElement(v,l({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>d,default:()=>j,frontMatter:()=>v,metadata:()=>y,toc:()=>O});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),u=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const v={title:"$removeTextSplitElement",description:"Removes element from given index"},d=void 0,y={unversionedId:"functions/removetextsplitelement",id:"version-5.5.5/functions/removetextsplitelement",title:"$removeTextSplitElement",description:"Removes element from given index",source:"@site/versioned_docs/version-5.5.5/functions/removetextsplitelement.md",sourceDirName:"functions",slug:"/functions/removetextsplitelement",permalink:"/tr/docs/5.5.5/functions/removetextsplitelement",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$removeTextSplitElement",description:"Removes element from given index"},sidebar:"docs",previous:{title:"$removeSplitTextElement",permalink:"/tr/docs/5.5.5/functions/removesplittextelement"},next:{title:"$repeatMessage",permalink:"/tr/docs/5.5.5/functions/repeatmessage"}},b={},O=[],g={toc:O},x="wrapper";function j(e){var t=e,{components:r}=t,o=u(t,["components"]);return(0,n.kt)(x,f(m(m({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function removes values from $textSplit via the given index"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$removeTextSplitElement[index]\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "removing",\ncode: `$removeTextSplitElement[2]\n$textSplit[hi/bye/hello;/]`\n})\n//Removes bye completely from the list of values in $textSplit\n')))}j.isMDXComponent=!0}}]);