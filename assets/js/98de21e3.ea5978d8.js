"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31690],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},54866:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(87462),l=(t(67294),t(3905));const r={title:"$allChannelsCount",description:"Returns the amount of all the channels of all the guilds your bot is in."},o=void 0,i={unversionedId:"functions/allchannelscount",id:"version-5.5.5/functions/allchannelscount",title:"$allChannelsCount",description:"Returns the amount of all the channels of all the guilds your bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/allchannelscount.md",sourceDirName:"functions",slug:"/functions/allchannelscount",permalink:"/docs/5.5.5/functions/allchannelscount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686802283,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$allChannelsCount",description:"Returns the amount of all the channels of all the guilds your bot is in."},sidebar:"docs",previous:{title:"$advanceCooldown",permalink:"/docs/5.5.5/functions/advancecooldown"},next:{title:"$allEmojiCount",permalink:"/docs/5.5.5/functions/allemojicount"}},s={},u=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Types",id:"types",level:4},{value:"Example",id:"example",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This function returns the amount of channels the bot has access to globally. You can optionally pass types of channels to count."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$allChannelsCount[type?]\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"type"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The channel types of specific one to get"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,l.kt)("h4",{id:"types"},"Types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Category")," \u2014 Shows Amount of Categories"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"News")," \u2014 Shows Amount of Announcement Type Channels"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PublicThread")," \u2014 Shows Amount of Public Threads"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PrivateThread")," \u2014 Shows Amount of Private Threads"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Stage")," \u2014 Shows Amount of Stage Channels"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Text")," \u2014 Shows Amount of Text Channels"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Voice")," \u2014 Shows Amount of Voice Channels")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "all-channel-count",\n  code: `\n  $allChannelsCount Channels\n    \u2192 $allChannelsCount[Category] Categories\n    \u2192 $allChannelsCount[Text] Text Channels\n    \u2192 $allChannelsCount[Voice] Voice Channels\n    \u2192 $allChannelsCount[News] Announcement Channels\n    \u2192 $allChannelsCount[PublicThread] Public Thread Channels\n    \u2192 $allChannelsCount[PrivateThread] Private Thread Channels\n    \u2192 $allChannelsCount[Stage] Stage Channels\n  `\n});\n')))}p.isMDXComponent=!0}}]);