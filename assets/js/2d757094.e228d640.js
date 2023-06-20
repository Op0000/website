"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},m),{},{components:n})):a.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message)."},o=void 0,l={unversionedId:"functions/awaitcmdreactions",id:"version-5.5.5/functions/awaitcmdreactions",title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message).",source:"@site/versioned_docs/version-5.5.5/functions/awaitcmdreactions.md",sourceDirName:"functions",slug:"/functions/awaitcmdreactions",permalink:"/docs/5.5.5/functions/awaitcmdreactions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687300492,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$awaitCmdReactions",description:"Make bot response the reaction on command (author's message)."},sidebar:"docs",previous:{title:"$authorID",permalink:"/docs/5.5.5/functions/authorid"},next:{title:"$awaitComponentsUntil",permalink:"/docs/5.5.5/functions/awaitcomponentsuntil"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Filter Types",id:"filter-types",level:4},{value:"Suffixes",id:"suffixes",level:4},{value:"Example",id:"example",level:4}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will make the bot reply when a user reacts with the given emoji to the command."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$awaitCmdReactions[filter;time;reactions;awaited commands;error message?;awaited data?]\n//reaction1,reaction2?,...;awaitedCmd1,awaitedCmd2?,...\n")),(0,r.kt)("h4",{id:"filter-types"},"Filter Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"everyone")," \u2014 makes it avaliable to react for everyone"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userID")," \u2014 makes it avaliable to react for specific user id (for example ",(0,r.kt)("inlineCode",{parentName:"li"},"$authorID"),")")),(0,r.kt)("h4",{id:"suffixes"},"Suffixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"s")," - Seconds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"m")," - Minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"h")," - Hours"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"d")," - Days"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"w")," - Weeks")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "await-cmd-reactions",\n  code: `\n  React with 1\ufe0f\u20e3 to command and I\'ll reply in 10 seconds\n\n  $awaitCmdReactions[$authorID;10s;1\ufe0f\u20e3;reactionMessage;Command Timed out!]\n  `\n//This will execute the awaited command if the user reacts\n});\n\nbot.awaitedCommand({\n  name: "reactionMessage",\n  code: `\n  Hi, you reacted to 1\ufe0f\u20e3 and now I, responded!\n  `\n});\n//This will be sending when the user reacted\n')))}u.isMDXComponent=!0}}]);