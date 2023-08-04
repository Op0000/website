"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),p=i,b=d["".concat(a,".").concat(p)]||d[p]||m[p]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=p;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[d]="string"==typeof e?e:i,o[1]=u;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>R,frontMatter:()=>b,metadata:()=>k,toc:()=>y});var n=r(3905),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>l(e,o(t)),p=(e,t)=>{var r={};for(var n in e)a.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const b={title:"Client Intents",description:"This page is covering all Client Intents.",id:"intents"},f=void 0,k={unversionedId:"guides/client/intents",id:"version-6.4.0/guides/client/intents",title:"Client Intents",description:"This page is covering all Client Intents.",source:"@site/versioned_docs/version-6.4.0/guides/client/2intents.md",sourceDirName:"guides/client",slug:"/guides/client/intents",permalink:"/ru/docs/guides/client/intents",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691131617,formattedLastUpdatedAt:"4 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"Client Intents",description:"This page is covering all Client Intents.",id:"intents"},sidebar:"docs",previous:{title:"Client Events",permalink:"/ru/docs/guides/client/events"},next:{title:"Client Permissions",permalink:"/ru/docs/guides/client/permissions"}},g={},y=[],v=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",d({},t))},O=v("Highlight"),h=v("Tooltip"),w={toc:y},j="wrapper";function R(e){var t=e,{components:r}=t,i=p(t,["components"]);return(0,n.kt)(j,m(d(d({},w),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("details",null,(0,n.kt)("summary",null," MessageContent "),"Required to read message content",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(O,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,n.kt)("a",{id:"warn-verify",color:"#fff"},"Requires Verification"))),(0,n.kt)("details",null,(0,n.kt)("summary",null," Guilds "),"Required to retrieve information about guilds",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildMessages "),"Required to read guild messages",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildMembers "),"Required to retrieve information about guild members",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(O,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,n.kt)("a",{id:"warn-verify",color:"#fff"},"Requires Verification"))),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildBans "),"Required to retrieve information about guild bans",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildEmojisAndStickers "),"Required to retrieve information about guild emojis and/or stickers",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildIntegrations "),"Required to retrieve information about guild integrations",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildWebhooks "),"Required to retrieve information about guild webhooks",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildInvites "),"Required to retrieve information about guild invites",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildVoiceStates "),"Required to retrieve information about guild voice states",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildPresences "),"Required to retrieve information about guild member presences",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(O,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,n.kt)("a",{id:"channel-type",color:"#fff"},"Requires Verification"))),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildMessageReactions "),"Required to retrieve information about guild message reactions",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," GuildMessageTyping "),(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," DirectMessages "),"Required to interact with direct messages",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," DirectMessageReactions "),"Required to interact with direct message reactions",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)("details",null,(0,n.kt)("summary",null," DirectMessageTyping "),"Required to interact with direct message typing",(0,n.kt)("br",null),(0,n.kt)("br",null)),(0,n.kt)(h,{anchorSelect:"#warn-verify",color:"#fff","not-clickable":!0,mdxType:"Tooltip"},"Requires Verification upon reaching more than 75 guilds"))}R.isMDXComponent=!0}}]);