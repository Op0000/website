"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5906],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(n),s=r,g=d["".concat(u,".").concat(s)]||d[s]||m[s]||l;return n?a.createElement(g,o(o({ref:e},c),{},{components:n})):a.createElement(g,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7436:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>g,metadata:()=>k,toc:()=>h});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&c(t,n,e[n]);if(i)for(var n of i(e))p.call(e,n)&&c(t,n,e[n]);return t},m=(t,e)=>l(t,o(e)),s=(t,e)=>{var n={};for(var a in t)u.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const g={title:"$channelCount",description:"$channelCount will return the amount of channels of a given type.",id:"channelCount"},f=void 0,k={unversionedId:"functions/info-related/channelCount",id:"version-6.4.0/functions/info-related/channelCount",title:"$channelCount",description:"$channelCount will return the amount of channels of a given type.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/channelCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/channelCount",permalink:"/tr/docs/functions/info-related/channelCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$channelCount",description:"$channelCount will return the amount of channels of a given type.",id:"channelCount"},sidebar:"docs",previous:{title:"$channelCategoryID",permalink:"/tr/docs/functions/info-related/channelCategoryID"},next:{title:"$channelID",permalink:"/tr/docs/functions/info-related/channelID"}},y={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],N={toc:h},b="wrapper";function v(t){var e=t,{components:n}=e,r=s(e,["components"]);return(0,a.kt)(b,m(d(d({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$channelCount")," will return the amount of channels of a given type."),(0,a.kt)("h2",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$channelCount[guildID?;type?]\n")),(0,a.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"guildID?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ID of the guild where the channels will be counted from."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"type?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Type you want the amount of to be returned, listed below."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("h3",null," Channel Types ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Channel Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Text Channel"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Text")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Voice Channel"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Voice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Category"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Category")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Stage Channel"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Stage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Private Thread"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"PrivateThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Public Thread"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"PublicThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Forum"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Forum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Announcement Thread"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"AnnouncementThread")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Announcement Channel"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Announcement")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Home"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"GuildDirectory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"NSFW Channel"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"NSFW")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Direct Message"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"DM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"All Channel Types"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"all"))))),(0,a.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will return the amount of Voice Channels in your guild:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelCount',\n    code: `\n  $channelCount[$guildID;Voice]\n  `\n});\n")))}v.isMDXComponent=!0}}]);