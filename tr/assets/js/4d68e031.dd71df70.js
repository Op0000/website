"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24736],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||a;return t?r.createElement(f,c(c({ref:n},s),{},{components:t})):r.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m[p]="string"==typeof e?e:o,c[1]=m;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>O});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&s(e,t,n[t]);if(m)for(var t of m(n))l.call(n,t)&&s(e,t,n[t]);return e},u=(e,n)=>a(e,c(n)),d=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&m)for(var r of m(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$commandName",description:"Returns the command name"},y=void 0,b={unversionedId:"functions/commandname",id:"version-5.5.5/functions/commandname",title:"$commandName",description:"Returns the command name",source:"@site/versioned_docs/version-5.5.5/functions/commandname.md",sourceDirName:"functions",slug:"/functions/commandname",permalink:"/tr/docs/5.5.5/functions/commandname",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$commandName",description:"Returns the command name"},sidebar:"docs",previous:{title:"$commandInfo",permalink:"/tr/docs/5.5.5/functions/commandinfo"},next:{title:"$commandsCount",permalink:"/tr/docs/5.5.5/functions/commandscount"}},v={},O=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],g={toc:O},h="wrapper";function j(e){var n=e,{components:t}=n,o=d(n,["components"]);return(0,r.kt)(h,u(p(p({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the name of the current code."),(0,r.kt)("h3",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$commandName\n")),(0,r.kt)("h2",p({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "myawesomecommand",\ncode: `The command name is $commandName`\n/*\nThe bot would return:\n"myawesomecommand"\n*/\n})\n')))}j.isMDXComponent=!0}}]);