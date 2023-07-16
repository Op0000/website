"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65459],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||a;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4466:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>h,toc:()=>b});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&s(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&s(e,t,r[t]);return e},f=(e,r)=>a(e,c(r)),d=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$hour",description:"Returns the current hour."},y=void 0,h={unversionedId:"functions/hour",id:"version-5.5.5/functions/hour",title:"$hour",description:"Returns the current hour.",source:"@site/versioned_docs/version-5.5.5/functions/hour.md",sourceDirName:"functions",slug:"/functions/hour",permalink:"/ar/docs/5.5.5/functions/hour",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$hour",description:"Returns the current hour."},sidebar:"docs",previous:{title:"$hoistedRole",permalink:"/ar/docs/5.5.5/functions/hoistedrole"},next:{title:"$httpRequest",permalink:"/ar/docs/5.5.5/functions/httprequest"}},v={},b=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],O={toc:b},g="wrapper";function j(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(g,f(p(p({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the current hour. This goes off of a 24 hour clock ex: 1-24."),(0,n.kt)("h3",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$hour\n")),(0,n.kt)("h2",p({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "hour",\ncode: `Hour: $hour`\n//Returns: 4\n})\n')))}j.isMDXComponent=!0}}]);