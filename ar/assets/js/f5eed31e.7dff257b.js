"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them."},b=void 0,y={unversionedId:"functions/prunemembers",id:"version-5.5.5/functions/prunemembers",title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them.",source:"@site/versioned_docs/version-5.5.5/functions/prunemembers.md",sourceDirName:"functions",slug:"/functions/prunemembers",permalink:"/ar/docs/5.5.5/functions/prunemembers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them."},sidebar:"docs",previous:{title:"$playTrack",permalink:"/ar/docs/5.5.5/functions/playtrack"},next:{title:"$pruneMusic",permalink:"/ar/docs/5.5.5/functions/prunemusic"}},k={},v=[{value:"Options:",id:"options",level:4},{value:"Example Command:",id:"example-command",level:4}],h={toc:v},g="wrapper";function O(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(g,c(m(m({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function kicks all inactive members without roles and with optional given roles from the given guild, if they were inactive for at least the given amount of days."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$pruneMembers[amount of days(optional);guildID(optional);reason (optional);roleid1:roleid2:roleid3... (optional)]")),(0,r.kt)("h4",m({},{id:"options"}),"Options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"amount of days")," =",">"," Number of days of inactivity required to kick ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},"must be between 1 and 30"),(0,r.kt)("li",{parentName:"ul"},"defaults to 7"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guildID")," =",">"," the guildID the members should be checked for prune status ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},"defaults to current guildID"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reason")," =",">"," reason that would be shown in the Audit-Log ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},'defaults to "none"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roles")," =",">",' Array of roles to bypass the "...and no roles" constraint when pruning so it includes members with given roles in the prune status ',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"optional"),(0,r.kt)("li",{parentName:"ul"},"separated by colons")))),(0,r.kt)("h4",m({},{id:"example-command"}),"Example Command:"),(0,r.kt)("p",null,'This example kicks all inactive members without roles they have been inactive on Discord for at least 30 days and all inactive members with my two given roles with the reason "Too many members".'),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "prunestatus",\ncode: `\nPruning would kick:\n$pruneMembers[30;$guildID;too many members;741266432574357586:820666519331405854] members!\n`\n})\n')))}O.isMDXComponent=!0}}]);