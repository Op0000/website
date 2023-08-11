"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35495],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=s,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79098:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>g,default:()=>E,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var n=t(3905),s=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?s(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))l.call(r,t)&&c(e,t,r[t]);return e},d=(e,r)=>a(e,o(r)),m=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$suppressErrors",description:"$suppressErrors will suppress aoi.js function errors.",id:"suppressErrors"},g=void 0,y={unversionedId:"functions/misc-related/suppressErrors",id:"version-6.4.0/functions/misc-related/suppressErrors",title:"$suppressErrors",description:"$suppressErrors will suppress aoi.js function errors.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/suppressErrors.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/suppressErrors",permalink:"/uk/docs/functions/misc-related/suppressErrors",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$suppressErrors",description:"$suppressErrors will suppress aoi.js function errors.",id:"suppressErrors"},sidebar:"docs",previous:{title:"$stopTimeout",permalink:"/uk/docs/functions/misc-related/stopTimeout"},next:{title:"$timeZone",permalink:"/uk/docs/functions/misc-related/timeZone"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:v},k="wrapper";function E(e){var r=e,{components:t}=r,s=m(r,["components"]);return(0,n.kt)(k,d(u(u({},O),s),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$suppressErrors")," will suppress aoi.js function errors."),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$suppressErrors[errorMsg?]\n")),(0,n.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"errorMsg"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Error message to return."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will suppress all errors of your code and return the pre-defined error message instead:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "suppressErrors",\n    code: `\n    $description\n    $suppressErrors[Something went wrong!]\n    ` // Intentional invalid usage of $description\n});\n')))}E.isMDXComponent=!0}}]);