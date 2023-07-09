"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56465],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(t),p=r,f=c["".concat(s,".").concat(p)]||c[p]||u[p]||o;return t?a.createElement(f,i(i({ref:n},m),{},{components:t})):a.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={title:"$updateCommands",description:"$updateCommands will reload your commands of your command folder / will make changes effective.",id:"updateCommands"},i=void 0,l={unversionedId:"functions/misc-related/updateCommands",id:"version-6.3.0/functions/misc-related/updateCommands",title:"$updateCommands",description:"$updateCommands will reload your commands of your command folder / will make changes effective.",source:"@site/versioned_docs/version-6.3.0/functions/misc-related/updateCommands.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/updateCommands",permalink:"/docs/functions/misc-related/updateCommands",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688894027,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"$updateCommands",description:"$updateCommands will reload your commands of your command folder / will make changes effective.",id:"updateCommands"},sidebar:"docs",previous:{title:"$timeZone",permalink:"/docs/functions/misc-related/timeZone"},next:{title:"$useChannel",permalink:"/docs/functions/misc-related/useChannel"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],m={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$updateCommands")," will reload your commands of your command folder / will make changes effective."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$updateCommands\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Will only work if you use a command handler, example below:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { AoiClient, LoadCommands } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["GuildMessages", "MessageContent", "Guilds"],\n    events: ["onMessage", "onInteractionCreate"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\nconst loader = new LoadCommands(bot);\nloader.load(bot.cmd, "./commands/"); // your command directory.\n')),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will update the commands of your bot without restarting it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "updateCommands",\n    code: `\n    $updateCommands\n    `\n});\n')))}u.isMDXComponent=!0}}]);