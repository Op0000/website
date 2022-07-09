(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{598:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),r=(n(0),n(618));const i={title:"$getAuditLogs",description:"Returns audit log information."},l={unversionedId:"functions/getauditlogs",id:"functions/getauditlogs",isDocsHomePage:!1,title:"$getAuditLogs",description:"Returns audit log information.",source:"@site/docs/functions/getauditlogs.md",slug:"/functions/getauditlogs",permalink:"/docs/functions/getauditlogs",version:"current",sidebar:"someSidebar",previous:{title:"$getAttachments",permalink:"/docs/functions/getattachments"},next:{title:"$getBanReason",permalink:"/docs/functions/getbanreason"}},o=[],c={toc:o};function u(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"With this function you can check Audit Log entries. Every field is optional. Action field defaults to everything, user field to everyone."),Object(r.b)("p",null,"Raw usage: ",Object(r.b)("inlineCode",{parentName:"p"},"$getAuditLogs[limit;userID;action;guildID;format]")," "),Object(r.b)("h4",{id:"format-option"},"Format option:"),Object(r.b)("p",null,"Format is an optional field where you can customize the response of the bot. Here you can use the following options to replace each with it's audit log response:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"{executor.username}")," =",">"," username who triggered the audit log "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"{executor.tag}")," =",">"," username and discriminator of the user that executed the audit log "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"{executor.id}")," =",">"," userID of the user that triggered the audit log entry"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"{executor.mention}")," =",">"," mention of the user that executed the audit log entry "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"{target.id}")," =",">"," the id of the target ","(","can be a channel/message/user id or the guild id",")"," "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"{action}")," =",">"," see list below.")),Object(r.b)("h4",{id:"action-filter"},"Action Filter:"),Object(r.b)("p",null,"You can use the options at the bootom of the page to filter the audit logs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ALL"),Object(r.b)("li",{parentName:"ul"},"GUILD","_","UPDATE "),Object(r.b)("li",{parentName:"ul"},"CHANNEL","_","CREATE"),Object(r.b)("li",{parentName:"ul"},"CHANNEL","_","UPDATE"),Object(r.b)("li",{parentName:"ul"},"CHANNEL","_","DELETE"),Object(r.b)("li",{parentName:"ul"},"CHANNEL","_","OVERWRITE","_","CREATE"),Object(r.b)("li",{parentName:"ul"},"CHANNEL","_","OVERWRITE","_","UPDATE"),Object(r.b)("li",{parentName:"ul"},"CHANNEL","_","OVERWRITE","_","DELETE"),Object(r.b)("li",{parentName:"ul"},"MEMBER","_","KICK"),Object(r.b)("li",{parentName:"ul"},"MEMBER","_","PRUNE"),Object(r.b)("li",{parentName:"ul"},"MEMBER","_","BAN","_","ADD"),Object(r.b)("li",{parentName:"ul"},"MEMBER","_","BAN","_","REMOVE"),Object(r.b)("li",{parentName:"ul"},"MEMBER","_","UPDATE"),Object(r.b)("li",{parentName:"ul"},"MEMBER","_","ROLE","_","UPDATE"),Object(r.b)("li",{parentName:"ul"},"MEMBER","_","MOVE"),Object(r.b)("li",{parentName:"ul"},"MEMBER","_","DISCONNECT"),Object(r.b)("li",{parentName:"ul"},"BOT","_","ADD"),Object(r.b)("li",{parentName:"ul"},"ROLE","_","CREATE"),Object(r.b)("li",{parentName:"ul"},"ROLE","_","UPDATE"),Object(r.b)("li",{parentName:"ul"},"ROLE","_","DELETE"),Object(r.b)("li",{parentName:"ul"},"INVITE","_","CREATE"),Object(r.b)("li",{parentName:"ul"},"INVITE","_","UPDATE"),Object(r.b)("li",{parentName:"ul"},"INVITE","_","DELETE"),Object(r.b)("li",{parentName:"ul"},"WEBHOOK","_","CREATE"),Object(r.b)("li",{parentName:"ul"},"WEBHOOK","_","UPDATE"),Object(r.b)("li",{parentName:"ul"},"WEBHOOK","_","DELETE"),Object(r.b)("li",{parentName:"ul"},"EMOJI","_","CREATE"),Object(r.b)("li",{parentName:"ul"},"EMOJI","_","UPDATE"),Object(r.b)("li",{parentName:"ul"},"EMOJI","_","DELETE"),Object(r.b)("li",{parentName:"ul"},"MESSAGE","_","DELETE"),Object(r.b)("li",{parentName:"ul"},"MESSAGE","_","BULK","_","DELETE"),Object(r.b)("li",{parentName:"ul"},"MESSAGE","_","PIN"),Object(r.b)("li",{parentName:"ul"},"MESSAGE","_","UNPIN"),Object(r.b)("li",{parentName:"ul"},"INTEGRATION","_","CREATE"),Object(r.b)("li",{parentName:"ul"},"INTEGRATION","_","UPDATE"),Object(r.b)("li",{parentName:"ul"},"INTEGRATION","_","DELETE")),Object(r.b)("h4",{id:"example-command"},"Example Command:"),Object(r.b)("p",null,"Simple usage without optional fields:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "audit-logs",\ncode: `\nLast audit log entries:\n$getAuditLogs\n`\n})\n')),Object(r.b)("p",null,"Example command to filter last 5 bans and list their mentions:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "audit-logs",\ncode: `\nLast audit log entries:\n$getAuditLogs[5;everyone;$guildID;MEMBER_BAN_ADD;<@!{target.id}>]\n`\n})\n')))}u.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return E}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=b(n),s=a,E=p["".concat(l,".").concat(s)]||p[s]||m[s]||i;return n?r.a.createElement(E,o(o({ref:t},u),{},{components:n})):r.a.createElement(E,o({ref:t},u))}));function E(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);