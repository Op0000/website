"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[23493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"Welcome to aoi.js Documentation",description:"The beginning process of how to use aoi.js and all its features.",slug:"/"},g=void 0,b={unversionedId:"introduction/introduction",id:"introduction/introduction",title:"Welcome to aoi.js Documentation",description:"The beginning process of how to use aoi.js and all its features.",source:"@site/docs/introduction/introduction.md",sourceDirName:"introduction",slug:"/",permalink:"/uk/docs/7.0.0/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"Welcome to aoi.js Documentation",description:"The beginning process of how to use aoi.js and all its features.",slug:"/"},sidebar:"docs",next:{title:"Setup",permalink:"/uk/docs/7.0.0/guides/setup"}},k={},y=[{value:"Installation",id:"installation",level:2},{value:"Setup",id:"setup",level:2},{value:"Disclaimer",id:"disclaimer-1",level:2},{value:"Links",id:"links",level:2}],v=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",u({},t))},h=v("Tabs"),j=v("TabItem"),O={toc:y},w="wrapper";function N(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(w,m(u(u({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",u({},{title:"Important",type:"danger"}),(0,r.kt)("p",{parentName:"admonition"},"This is the brand new documentation for v7 development ",(0,r.kt)("strong",{parentName:"p"},"THINGS MAY CHANGE"),"."),(0,r.kt)("h2",u({parentName:"admonition"},{id:"disclaimer"}),"Disclaimer"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This version of ",(0,r.kt)("strong",{parentName:"li"},"aoi.js")," is currently heavily in development, expect bugs and unfinished functions."),(0,r.kt)("li",{parentName:"ul"},"There are currently around ",(0,r.kt)("strong",{parentName:"li"},"80")," functions."),(0,r.kt)("li",{parentName:"ul"},"Everything on here is ",(0,r.kt)("strong",{parentName:"li"},"SUBJECT TO CHANGE"),".  "))),(0,r.kt)("p",null,(0,r.kt)("img",u({parentName:"p"},{src:"https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true",alt:"aoijs"}))),(0,r.kt)("h2",u({},{id:"installation"}),"Installation"),(0,r.kt)(h,{groupId:"pref-install",mdxType:"Tabs"},(0,r.kt)(j,{value:"i-npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"node.js LTS or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npm install aoi.js@dev\n"))),(0,r.kt)(j,{value:"i-yarn",label:"yarn",mdxType:"TabItem"},(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"node.js LTS or newer is required.")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"yarn add aoi.js\n")))),(0,r.kt)("h2",u({},{id:"setup"}),"Setup"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'// imports\nconst { AoiClient, defaultCacheConfig } = require("aoi.js");\nconst { Intents } = require("aoiluna");\n\n// create a new client\nconst bot = new AoiClient({\n  token: "TOKEN",\n  prefixes: "PREFIX",\n  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,\n  events: [\'MessageCreate\',\'Ready\'],\n  caches: defaultCacheConfig(),\n})\n\n// create a command\nbot.command({\n  name: "ping",\n  code: `Pong! $pingms`\n});\n')),(0,r.kt)("h2",u({},{id:"disclaimer-1"}),"Disclaimer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",u({parentName:"strong"},{href:"https://www.npmjs.com/package/aoi.js"}),"Aoi.js"))," is not affiliated or associated with Discord or any other services."),(0,r.kt)("h2",u({},{id:"links"}),"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://aoi.js.org"}),"Website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.npmjs.com/package/aoi.js"}),"NPM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/AkaruiDevelopment/aoi.js"}),"Github")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://aoi.js.org/invite"}),"Discord Support Server"))))}N.isMDXComponent=!0}}]);