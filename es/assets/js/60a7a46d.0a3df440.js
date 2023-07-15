"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>b,toc:()=>O});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&l(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&l(e,n,t[n]);return e},f=(e,t)=>i(e,c(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$executionTime"},y=void 0,b={unversionedId:"functions/executiontime",id:"version-5.5.5/functions/executiontime",title:"$executionTime",description:"This function returns how long it took to execute ALL the functions in the current code in ms",source:"@site/versioned_docs/version-5.5.5/functions/executiontime.md",sourceDirName:"functions",slug:"/functions/executiontime",permalink:"/es/docs/5.5.5/functions/executiontime",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$executionTime"},sidebar:"docs",previous:{title:"$exec",permalink:"/es/docs/5.5.5/functions/exec"},next:{title:"$fileExists",permalink:"/es/docs/5.5.5/functions/fileexists"}},v={},O=[{value:"Usage",id:"usage",level:4}],g={toc:O},x="wrapper";function h(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(x,f(p(p({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns how long it took to execute ALL the functions in the current code in ms"),(0,r.kt)("h4",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "test",\ncode: `$title[Hello]\nTook me $executionTime ms to run this command`\n})\n')))}h.isMDXComponent=!0}}]);