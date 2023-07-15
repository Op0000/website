"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,f=s["".concat(m,".").concat(u)]||s[u]||d[u]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>k,default:()=>N,frontMatter:()=>f,metadata:()=>h,toc:()=>b});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),u=(e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$commandInfo"},k=void 0,h={unversionedId:"functions/commandinfo",id:"version-5.5.5/functions/commandinfo",title:"$commandInfo",description:"This function allows the bot to return any property a command has",source:"@site/versioned_docs/version-5.5.5/functions/commandinfo.md",sourceDirName:"functions",slug:"/functions/commandinfo",permalink:"/hi/docs/5.5.5/functions/commandinfo",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$commandInfo"},sidebar:"docs",previous:{title:"$commandCode",permalink:"/hi/docs/5.5.5/functions/commandcode"},next:{title:"$commandName",permalink:"/hi/docs/5.5.5/functions/commandname"}},g={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Properties",id:"properties",level:4},{value:"Examples",id:"examples",level:2}],y={toc:b},v="wrapper";function N(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(v,d(s(s({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function allows the bot to return any property a command has"),(0,a.kt)("h3",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$commandInfo[command_name;property]\n")),(0,a.kt)("h3",s({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"command name"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The name of command"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"property"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The property to be used"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h4",s({},{id:"properties"}),"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name - The name of the command"),(0,a.kt)("li",{parentName:"ul"},"code - The code of the command"),(0,a.kt)("li",{parentName:"ul"},"aliases - The aliases of the command"),(0,a.kt)("li",{parentName:"ul"},"executeAt - Returns both if command can be used in ",(0,a.kt)("inlineCode",{parentName:"li"},"both")," dm and guild, ",(0,a.kt)("inlineCode",{parentName:"li"},"guild")," if in guild and ",(0,a.kt)("inlineCode",{parentName:"li"},"dm")," if in dm."),(0,a.kt)("li",{parentName:"ul"},"whitelist - Returns boolean whether or not the command is whitelisted for blacklisted users."),(0,a.kt)("li",{parentName:"ul"},"nonPrefixed - Returns boolean whether or not if the author message starts with command name."),(0,a.kt)("li",{parentName:"ul"},"[custom property]"," - Value added in command. Example- usage,info etc.")),(0,a.kt)("h2",s({},{id:"examples"}),"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Here's our example code we're basing off of")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: 'help',\naliases: ['h','commands'],\ncode: `\n$color[RANDOM]\n$description[Aoi.js is an awesome package]\n$title[MasterBot]\n`\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With name")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: 'commandInfo',\ncode: `$commandInfo[help;name]` //Returns 'help'\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With Code")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: 'commandInfo',\ncode: `$commandInfo[help;code]` \n/*\nReturns '$color[RANDOM]\n$description[Aoi.js is an awesome package]\n$title[MasterBot]'\n*/\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With aliases")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: 'commandInfo',\ncode: `$commandInfo[help;aliases]` //Returns 'h,commands'\n})\n")))}N.isMDXComponent=!0}}]);