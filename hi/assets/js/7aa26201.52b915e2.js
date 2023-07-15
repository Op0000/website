"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16395],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>f});var o=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function m(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),u=c(r),p=t,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return r?o.createElement(f,i(i({ref:n},s),{},{components:r})):o.createElement(f,i({ref:n},s))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=p;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m[u]="string"==typeof e?e:t,i[1]=m;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},82731:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>j,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var o=r(3905),t=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))l.call(n,r)&&s(e,r,n[r]);if(m)for(var r of m(n))c.call(n,r)&&s(e,r,n[r]);return e},d=(e,n)=>a(e,i(n)),p=(e,n)=>{var r={};for(var o in e)l.call(e,o)&&n.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&m)for(var o of m(e))n.indexOf(o)<0&&c.call(e,o)&&(r[o]=e[o]);return r};const f={title:"$randomEmoji",description:"Returns a random custom emoji from a Guild or a Global custom emoji."},j=void 0,b={unversionedId:"functions/randomemoji",id:"version-5.5.5/functions/randomemoji",title:"$randomEmoji",description:"Returns a random custom emoji from a Guild or a Global custom emoji.",source:"@site/versioned_docs/version-5.5.5/functions/randomemoji.md",sourceDirName:"functions",slug:"/functions/randomemoji",permalink:"/hi/docs/5.5.5/functions/randomemoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$randomEmoji",description:"Returns a random custom emoji from a Guild or a Global custom emoji."},sidebar:"docs",previous:{title:"$randomChannelID",permalink:"/hi/docs/5.5.5/functions/randomchannelid"},next:{title:"$randomGuildID",permalink:"/hi/docs/5.5.5/functions/randomguildid"}},g={},y=[{value:"Example Commands:",id:"example-commands",level:4}],v={toc:y},O="wrapper";function h(e){var n=e,{components:r}=n,t=p(n,["components"]);return(0,o.kt)(O,d(u(u({},v),t),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns a random custom emoji from from current/provided guild or a custom emoji from one random guild the bot is in depending on given options."),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$randomEmoji[guildID/global (optional)]")," "),(0,o.kt)("h4",u({},{id:"example-commands"}),"Example Commands:"),(0,o.kt)("p",null,"Using a random emoji from the current guild:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "randomemoji",\ncode: `\nhere a custom emoji from this server: $randomEmoji\n`\n})\n')),(0,o.kt)("p",null,"Using a random emoji from a specific guild:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "randomemoji",\ncode: `\nhere a custom emoji from a specific guild: $randomEmoji[837748010317250641]\n`\n})\n')),(0,o.kt)("p",null,"Using a random emoji from a random guild the bot is in:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "globalemoji",\ncode: `\nhere a custom emoji from a random server: $randomEmoji[global]\n`\n})\n')))}h.isMDXComponent=!0}}]);