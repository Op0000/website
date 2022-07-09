(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{453:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(618));const o={title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them."},i={unversionedId:"functions/prunemembers",id:"functions/prunemembers",isDocsHomePage:!1,title:"$pruneMembers",description:"Prunes members from the guild based on how long they have been inactive, by kicking them.",source:"@site/docs/functions/prunemembers.md",slug:"/functions/prunemembers",permalink:"/docs/functions/prunemembers",version:"current",sidebar:"someSidebar",previous:{title:"$playTrack",permalink:"/docs/functions/playtrack"},next:{title:"$pruneMusic",permalink:"/docs/functions/prunemusic"}},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function kicks all inactive members without roles and with optional given roles from the given guild, if they were inactive for at least the given amount of days."),Object(a.b)("p",null,"Raw usage: ",Object(a.b)("inlineCode",{parentName:"p"},"$pruneMembers[amount of days(optional);guildID(optional);reason (optional);roleid1:roleid2:roleid3... (optional)]")),Object(a.b)("h4",{id:"options"},"Options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"amount of days")," =",">"," Number of days of inactivity required to kick ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"optional"),Object(a.b)("li",{parentName:"ul"},"must be between 1 and 30"),Object(a.b)("li",{parentName:"ul"},"defaults to 7"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"guildID")," =",">"," the guildID the members should be checked for prune status ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"optional"),Object(a.b)("li",{parentName:"ul"},"defaults to current guildID"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"reason")," =",">"," reason that would be shown in the Audit-Log ",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"optional"),Object(a.b)("li",{parentName:"ul"},'defaults to "none"'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"roles")," =",">",' Array of roles to bypass the "...and no roles" constraint when pruning so it includes members with given roles in the prune status ',Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"optional"),Object(a.b)("li",{parentName:"ul"},"separated by colons")))),Object(a.b)("h4",{id:"example-command"},"Example Command:"),Object(a.b)("p",null,'This example kicks all inactive members without roles they have been inactive on Discord for at least 30 days and all inactive members with my two given roles with the reason "Too many members".'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "prunestatus",\ncode: `\nPruning would kick:\n$pruneMembers[30;$guildID;too many members;741266432574357586:820666519331405854] members!\n`\n})\n')))}u.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(d,l(l({ref:t},u),{},{components:n})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);