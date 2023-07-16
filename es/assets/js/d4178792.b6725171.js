"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37154],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=p(n),f=r,u=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90099:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>g,default:()=>w,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&m(t,n,e[n]);if(l)for(var n of l(e))p.call(e,n)&&m(t,n,e[n]);return t},d=(t,e)=>o(t,i(e)),f=(t,e)=>{var n={};for(var a in t)s.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&l)for(var a of l(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const u={title:"$awaitComponentsUntil",description:"Making the bot reply to user's interacted message."},g=void 0,b={unversionedId:"functions/awaitcomponentsuntil",id:"version-5.5.5/functions/awaitcomponentsuntil",title:"$awaitComponentsUntil",description:"Making the bot reply to user's interacted message.",source:"@site/versioned_docs/version-5.5.5/functions/awaitcomponentsuntil.md",sourceDirName:"functions",slug:"/functions/awaitcomponentsuntil",permalink:"/es/docs/5.5.5/functions/awaitcomponentsuntil",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$awaitComponentsUntil",description:"Making the bot reply to user's interacted message."},sidebar:"docs",previous:{title:"$awaitCmdReactions",permalink:"/es/docs/5.5.5/functions/awaitcmdreactions"},next:{title:"$awaitMessages",permalink:"/es/docs/5.5.5/functions/awaitmessages"}},k={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:2},{value:"Example",id:"example",level:2}],N={toc:y},v="wrapper";function w(t){var e=t,{components:n}=e,r=f(e,["components"]);return(0,a.kt)(v,d(c(c({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function will make the bot respond to user's select menu option or button interaction."),(0,a.kt)("h3",c({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$awaitComponentsUntil[channelID;messageID;filter;time;customIDs;commands;errorMessage?;data?]\n")),(0,a.kt)("h2",c({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"channelID"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"ID of the message's channel"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"messageID"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"ID of the message"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"filter"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"Is it only for given user ID or everyone"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"time"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"Until x time bot will response to message"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"customIDs"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"Interaction ID for button/select menu"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"commands"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"Awaited commands to be triggered"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"errorMessage"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"When x time runs out, the part of bot sending message."),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"data"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"Await command's data"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",c({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "await-components-until",\n  code: `\n  $awaitComponentsUntil[$channelID;$get[buttonMessageID];everyone;20s;buttonCustomID;buttonCommand]\n  \n  $let[buttonMessageID;$sendMessage[{"content" : "Tap to button on below.", "components" : "{actionRow:{button::2:buttonCustomID:false:\ud83d\ude4c\ud83c\udffb}}"};yes]]\n  `\n});\n\nbot.interactionCommand({\n  name: "buttonCommand",\n  code: `\n  $interactionReply[Hello!]\n  `\n});\n')))}w.isMDXComponent=!0}}]);