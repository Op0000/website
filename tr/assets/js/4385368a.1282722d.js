"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>j,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"bot.onJoin",description:"An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file."},v=void 0,b={unversionedId:"events/bot.onjoin",id:"version-5.5.5/events/bot.onjoin",title:"bot.onJoin",description:"An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file.",source:"@site/versioned_docs/version-5.5.5/events/bot.onjoin.md",sourceDirName:"events",slug:"/events/bot.onjoin",permalink:"/tr/docs/5.5.5/events/bot.onjoin",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"bot.onJoin",description:"An event that gets executed, if the bot sees a user joining a server. To let the bot listen to the event, add one bot.onJoin() callback inside your main file."},sidebar:"docs",previous:{title:"bot.onInteractionCreate",permalink:"/tr/docs/5.5.5/events/bot.oninteractioncreate"},next:{title:"bot.onLeave",permalink:"/tr/docs/5.5.5/events/bot.onleave"}},h={},y=[{value:"Usage:",id:"usage",level:4},{value:"Example Command:",id:"example-command",level:4}],g={toc:y},O="wrapper";function j(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(O,d(u(u({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Callback that triggers every time a user joins a server."),(0,r.kt)("h4",u({},{id:"usage"}),"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.joinCommand({ //command\nchannel: "channel id", //channel where it will log\ncode: `your code` //Message sent to <channel>\n})\n')),(0,r.kt)("p",null,"Make sure the ","`","channel","`"," is in the server. So recommended to use server variables (if your bot isn't for 1 server)"),(0,r.kt)("h4",u({},{id:"example-command"}),"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.joinCommand({ \nchannel: "782446718704812032", \ncode: `\nWelcome to $serverName, $username!\n`\n/*\nCode Breakdown\n$serverName - The name of the server the user joined\n$username - The user who joined the server\n*/\n}) \n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GUILD_MEMBERS")," intent needed! Information in the ",(0,r.kt)("a",u({parentName:"p"},{href:"/tr/docs/5.5.5/other/gateway-intents"}),"Gateway Intents")," guide."),(0,r.kt)("p",null,"You can use all guild and member based functions like ",(0,r.kt)("a",u({parentName:"p"},{href:"/tr/docs/5.5.5/functions/servername"}),"$serverName")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"/tr/docs/5.5.5/functions/guildid"}),"$guildID")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"/tr/docs/5.5.5/functions/username"}),"$username")," or ",(0,r.kt)("a",u({parentName:"p"},{href:"/tr/docs/5.5.5/functions/authorid"}),"$authorID")," in these commands."))}j.isMDXComponent=!0}}]);