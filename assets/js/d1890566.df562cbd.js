"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[80093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:i,o[1]=a;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=r(3905),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(a)for(var r of a(t))s.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>l(e,o(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$clientPrefixes",description:"$clientPrefixes will return the client prefix(es).",id:"clientPrefixes"},y=void 0,b={unversionedId:"functions/client-related/clientPrefixes",id:"version-6.4.0/functions/client-related/clientPrefixes",title:"$clientPrefixes",description:"$clientPrefixes will return the client prefix(es).",source:"@site/versioned_docs/version-6.4.0/functions/client-related/clientPrefixes.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientPrefixes",permalink:"/docs/functions/client-related/clientPrefixes",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"Jul 21, 2023",frontMatter:{title:"$clientPrefixes",description:"$clientPrefixes will return the client prefix(es).",id:"clientPrefixes"},sidebar:"docs",previous:{title:"$clientOwnerIDs",permalink:"/docs/functions/client-related/clientOwnerIDs"},next:{title:"$clientToken",permalink:"/docs/functions/client-related/clientToken"}},v={},O=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],x={toc:O},P="wrapper";function g(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(P,u(f(f({},x),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$clientPrefixes")," will return the client prefix(es)."),(0,n.kt)("h2",f({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$clientPrefixes\n")),(0,n.kt)("h2",f({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return all your prefixes separated by a comma (",(0,n.kt)("inlineCode",{parentName:"p"},", "),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientPrefixes',\n    code: `\n  $clientPrefixes\n  `\n});\n")))}g.isMDXComponent=!0}}]);