"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13823],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>g});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,g=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return t?n.createElement(g,o(o({ref:r},s),{},{components:t})):n.createElement(g,o({ref:r},s))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},29078:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>d,default:()=>T,frontMatter:()=>g,metadata:()=>k,toc:()=>b});var n=t(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&s(e,t,r[t]);if(c)for(var t of c(r))l.call(r,t)&&s(e,t,r[t]);return e},f=(e,r)=>i(e,o(r)),m=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&l.call(e,n)&&(t[n]=e[n]);return t};const g={title:"$getCurrentTrackDuration",description:"$getCurrentTrackDuration will return the current track duration.",id:"getCurrentTrackDuration"},d=void 0,k={unversionedId:"official/aoi.music/functions/getCurrentTrackDuration",id:"official/aoi.music/functions/getCurrentTrackDuration",title:"$getCurrentTrackDuration",description:"$getCurrentTrackDuration will return the current track duration.",source:"@site/extensions/official/aoi.music/functions/getCurrentTrackDuration.md",sourceDirName:"official/aoi.music/functions",slug:"/official/aoi.music/functions/getCurrentTrackDuration",permalink:"/uk/extensions/official/aoi.music/functions/getCurrentTrackDuration",draft:!1,tags:[],version:"current",frontMatter:{title:"$getCurrentTrackDuration",description:"$getCurrentTrackDuration will return the current track duration.",id:"getCurrentTrackDuration"},sidebar:"docs",previous:{title:"$clearQueue",permalink:"/uk/extensions/official/aoi.music/functions/clearQueue"},next:{title:"$getFilters",permalink:"/uk/extensions/official/aoi.music/functions/getFilters"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},O="wrapper";function T(e){var r=e,{components:t}=r,a=m(r,["components"]);return(0,n.kt)(O,f(p(p({},v),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$getCurrentTrackDuration")," will return the current track duration."),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$getCurrentTrackDuration\n")),(0,n.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return the current track duration in ms:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getCurrentTrackDuration',\n    code: `\n    $getCurrentTrackDuration\n  `\n});\n")))}T.isMDXComponent=!0}}]);