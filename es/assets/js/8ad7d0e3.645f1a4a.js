"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[9100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),u=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(m.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(m,".").concat(d)]||c[d]||p[d]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>j,default:()=>h,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var o=n(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e},p=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var o in e)m.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&u.call(e,o)&&(n[o]=e[o]);return n};const f={title:"$emojiCount",description:"Returns the amount of emojis in a guild where the bot is in."},j=void 0,v={unversionedId:"functions/emojicount",id:"version-5.5.5/functions/emojicount",title:"$emojiCount",description:"Returns the amount of emojis in a guild where the bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/emojicount.md",sourceDirName:"functions",slug:"/functions/emojicount",permalink:"/es/docs/5.5.5/functions/emojicount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$emojiCount",description:"Returns the amount of emojis in a guild where the bot is in."},sidebar:"docs",previous:{title:"$emoji",permalink:"/es/docs/5.5.5/functions/emoji"},next:{title:"$emojiExists",permalink:"/es/docs/5.5.5/functions/emojiexists"}},y={},b=[{value:"Types:",id:"types",level:2},{value:"Total emoji count:",id:"total-emoji-count",level:2},{value:"Animated Emojis:",id:"animated-emojis",level:2},{value:"normal Emojis:",id:"normal-emojis",level:2},{value:"Emoji count of another server:",id:"emoji-count-of-another-server",level:2}],g={toc:b},O="wrapper";function h(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,o.kt)(O,p(c(c({},g),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the amount of emojis in a guild"),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$emojiCount[type (optional);guildID (optional)]")),(0,o.kt)("h2",c({},{id:"types"}),"Types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"all")," or empty field =",">"," returns total amount of custom emojis the bot has access to ","(","animated and normal",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"animated")," =",">"," returns amount of animated custom emojis"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"normal")," =",">"," returns amount of non-animated custom emojis")),(0,o.kt)("h2",c({},{id:"total-emoji-count"}),"Total emoji count:"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$emojiCount emojis`\n})\n')),(0,o.kt)("h2",c({},{id:"animated-emojis"}),"Animated Emojis:"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$emojiCount[animated] emojis`\n})\n')),(0,o.kt)("h2",c({},{id:"normal-emojis"}),"normal Emojis:"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$emojiCount[normal] emojis`\n})\n')),(0,o.kt)("h2",c({},{id:"emoji-count-of-another-server"}),"Emoji count of another server:"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emojiCount",\ncode: `$emojiCount[all;740866341040291840] emojis`\n})\n')))}h.isMDXComponent=!0}}]);