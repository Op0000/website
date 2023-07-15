"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them."},b=void 0,y={unversionedId:"functions/prunemembers",id:"version-5.5.5/functions/prunemembers",title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them.",source:"@site/versioned_docs/version-5.5.5/functions/prunemembers.md",sourceDirName:"functions",slug:"/functions/prunemembers",permalink:"/docs/5.5.5/functions/prunemembers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them."},sidebar:"docs",previous:{title:"$playTrack",permalink:"/docs/5.5.5/functions/playtrack"},next:{title:"$pruneMusic",permalink:"/docs/5.5.5/functions/prunemusic"}},k={},v=[{value:"Options:",id:"options",level:4},{value:"Example Command:",id:"example-command",level:4}],h={toc:v},g="wrapper";function O(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(g,c(m(m({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function kicks all inactive members without roles and with optional given roles from the given guild, if they were inactive for at least the given amount of days."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$pruneMembers[amount of days(optional);guildID(optional);reason (optional);roleid1:roleid2:roleid3... (optional)]")),(0,r.kt)("h4",m({},{id:"options"}),"Options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount of days")," =",">"," Number of days of inactivity required to kick ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},"must be between 1 and 30"),(0,r.kt)("li",{parentName:"ul"},"defaults to 7"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guildID")," =",">"," the guildID the members should be checked for prune status ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},"defaults to current guildID"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reason")," =",">"," reason that would be shown in the Audit-Log ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},'defaults to "none"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roles")," =",">",' Array of roles to bypass the "...and no roles" constraint when pruning so it includes members with given roles in the prune status ',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},"separated by colons")))),(0,r.kt)("h4",m({},{id:"example-command"}),"Example Command:"),(0,r.kt)("p",null,'This example kicks all inactive members without roles they have been inactive on Discord for at least 30 days and all inactive members with my two given roles with the reason "Too many members".'),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "prunestatus",\ncode: `\nPruning would kick:\n$pruneMembers[30;$guildID;too many members;741266432574357586:820666519331405854] members!\n`\n})\n')))}O.isMDXComponent=!0}}]);