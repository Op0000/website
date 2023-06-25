"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50087],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,f=s["".concat(d,".").concat(u)]||s[u]||c[u]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"$addEmoji",description:"$addEmoji allows you to add custom emoji to your server.",id:"addemoji"},i=void 0,l={unversionedId:"functions/addemoji",id:"version-5.5.5/functions/addemoji",title:"$addEmoji",description:"$addEmoji allows you to add custom emoji to your server.",source:"@site/versioned_docs/version-5.5.5/functions/addemoji.md",sourceDirName:"functions",slug:"/functions/addemoji",permalink:"/docs/5.5.5/functions/addemoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687675592,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{title:"$addEmoji",description:"$addEmoji allows you to add custom emoji to your server.",id:"addemoji"},sidebar:"docs",previous:{title:"$addCmdReactions",permalink:"/docs/5.5.5/functions/addcmdreactions"},next:{title:"$addField",permalink:"/docs/5.5.5/functions/addfield"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notice",id:"notice",level:2},{value:"Example",id:"example",level:2}],m={toc:p},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$addEmoji")," adds an emoji to given guild's ID, via URL for roles or letting everyone access to added emoji."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$addEmoji[guildID;URL;name;return emoji?;reason?;roleID?;roleID?;...]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"guildID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The guild's ID where the emoji will be added"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"URL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The image URL that will be added as emoji"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The emoji's name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"return emoji"),(0,r.kt)("td",{parentName:"tr",align:"left"},"When added, shows emoji"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"reason"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The reason of adding the emoji"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"roleID","(","s",")"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The roles, that will accessible to use the emoji"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h2",{id:"notice"},"Notice"),(0,r.kt)("p",null,"Emoji's size ",(0,r.kt)("strong",{parentName:"p"},"should not")," be higher than 256kB."),(0,r.kt)("p",null,"URL has to end with ",(0,r.kt)("inlineCode",{parentName:"p"},".gif"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".png")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".jpg"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Adds an emoji that named ",(0,r.kt)("inlineCode",{parentName:"p"},"partner"),". "),(0,r.kt)("p",null,"You can see details in audit logs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "add-emoji",\n  code: `\n  $addEmoji[$guildID;https://media.discordapp.net/attachments/861208192121569280/970996440971223090/Baslksz51_20220429193009.png;partner;yes;Because, why not?;849217373214474253]\n  `\n});\n')))}c.isMDXComponent=!0}}]);