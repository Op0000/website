"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89471],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),E=r,d=c["".concat(u,".").concat(E)]||c[E]||m[E]||i;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=E;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},30308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>A,frontMatter:()=>d,metadata:()=>g,toc:()=>k});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&s(e,n,t[n]);return e},m=(e,t)=>i(e,l(t)),E=(e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const d={title:"$getAuditLogs",description:"Returns audit log information."},f=void 0,g={unversionedId:"functions/getauditlogs",id:"version-5.5.5/functions/getauditlogs",title:"$getAuditLogs",description:"Returns audit log information.",source:"@site/versioned_docs/version-5.5.5/functions/getauditlogs.md",sourceDirName:"functions",slug:"/functions/getauditlogs",permalink:"/docs/5.5.5/functions/getauditlogs",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$getAuditLogs",description:"Returns audit log information."},sidebar:"docs",previous:{title:"$getAttachments",permalink:"/docs/5.5.5/functions/getattachments"},next:{title:"$getBanReason",permalink:"/docs/5.5.5/functions/getbanreason"}},N={},k=[{value:"Format option:",id:"format-option",level:4},{value:"Action Filter:",id:"action-filter",level:4},{value:"Example Command:",id:"example-command",level:4}],O={toc:k},y="wrapper";function A(e){var t=e,{components:n}=t,r=E(t,["components"]);return(0,a.kt)(y,m(c(c({},O),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With this function you can check Audit Log entries. Every field is optional. Action field defaults to everything, user field to everyone."),(0,a.kt)("p",null,"Raw usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$getAuditLogs[limit;userID;action;guildID;format]")," "),(0,a.kt)("h4",c({},{id:"format-option"}),"Format option:"),(0,a.kt)("p",null,"Format is an optional field where you can customize the response of the bot. Here you can use the following options to replace each with it's audit log response:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{executor.username}")," =",">"," username who triggered the audit log "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{executor.tag}")," =",">"," username and discriminator of the user that executed the audit log "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{executor.id}")," =",">"," userID of the user that triggered the audit log entry"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{executor.mention}")," =",">"," mention of the user that executed the audit log entry "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{target.id}")," =",">"," the id of the target ","(","can be a channel/message/user id or the guild id",")"," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{action}")," =",">"," see list below.")),(0,a.kt)("h4",c({},{id:"action-filter"}),"Action Filter:"),(0,a.kt)("p",null,"You can use the options at the bootom of the page to filter the audit logs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ALL"),(0,a.kt)("li",{parentName:"ul"},"GUILD","_","UPDATE "),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","CREATE"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","UPDATE"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","DELETE"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","OVERWRITE","_","CREATE"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","OVERWRITE","_","UPDATE"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","OVERWRITE","_","DELETE"),(0,a.kt)("li",{parentName:"ul"},"MEMBER","_","KICK"),(0,a.kt)("li",{parentName:"ul"},"MEMBER","_","PRUNE"),(0,a.kt)("li",{parentName:"ul"},"MEMBER","_","BAN","_","ADD"),(0,a.kt)("li",{parentName:"ul"},"MEMBER","_","BAN","_","REMOVE"),(0,a.kt)("li",{parentName:"ul"},"MEMBER","_","UPDATE"),(0,a.kt)("li",{parentName:"ul"},"MEMBER","_","ROLE","_","UPDATE"),(0,a.kt)("li",{parentName:"ul"},"MEMBER","_","MOVE"),(0,a.kt)("li",{parentName:"ul"},"MEMBER","_","DISCONNECT"),(0,a.kt)("li",{parentName:"ul"},"BOT","_","ADD"),(0,a.kt)("li",{parentName:"ul"},"ROLE","_","CREATE"),(0,a.kt)("li",{parentName:"ul"},"ROLE","_","UPDATE"),(0,a.kt)("li",{parentName:"ul"},"ROLE","_","DELETE"),(0,a.kt)("li",{parentName:"ul"},"INVITE","_","CREATE"),(0,a.kt)("li",{parentName:"ul"},"INVITE","_","UPDATE"),(0,a.kt)("li",{parentName:"ul"},"INVITE","_","DELETE"),(0,a.kt)("li",{parentName:"ul"},"WEBHOOK","_","CREATE"),(0,a.kt)("li",{parentName:"ul"},"WEBHOOK","_","UPDATE"),(0,a.kt)("li",{parentName:"ul"},"WEBHOOK","_","DELETE"),(0,a.kt)("li",{parentName:"ul"},"EMOJI","_","CREATE"),(0,a.kt)("li",{parentName:"ul"},"EMOJI","_","UPDATE"),(0,a.kt)("li",{parentName:"ul"},"EMOJI","_","DELETE"),(0,a.kt)("li",{parentName:"ul"},"MESSAGE","_","DELETE"),(0,a.kt)("li",{parentName:"ul"},"MESSAGE","_","BULK","_","DELETE"),(0,a.kt)("li",{parentName:"ul"},"MESSAGE","_","PIN"),(0,a.kt)("li",{parentName:"ul"},"MESSAGE","_","UNPIN"),(0,a.kt)("li",{parentName:"ul"},"INTEGRATION","_","CREATE"),(0,a.kt)("li",{parentName:"ul"},"INTEGRATION","_","UPDATE"),(0,a.kt)("li",{parentName:"ul"},"INTEGRATION","_","DELETE")),(0,a.kt)("h4",c({},{id:"example-command"}),"Example Command:"),(0,a.kt)("p",null,"Simple usage without optional fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "audit-logs",\ncode: `\nLast audit log entries:\n$getAuditLogs\n`\n})\n')),(0,a.kt)("p",null,"Example command to filter last 5 bans and list their mentions:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "audit-logs",\ncode: `\nLast audit log entries:\n$getAuditLogs[5;everyone;$guildID;MEMBER_BAN_ADD;<@!{target.id}>]\n`\n})\n')))}A.isMDXComponent=!0}}]);