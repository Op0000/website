"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>l(e,o(t)),u=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$channelSendMessage",description:"Sends a message to given Channel ID"},g=void 0,h={unversionedId:"functions/channelsendmessage",id:"version-5.5.5/functions/channelsendmessage",title:"$channelSendMessage",description:"Sends a message to given Channel ID",source:"@site/versioned_docs/version-5.5.5/functions/channelsendmessage.md",sourceDirName:"functions",slug:"/functions/channelsendmessage",permalink:"/tr/docs/5.5.5/functions/channelsendmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$channelSendMessage",description:"Sends a message to given Channel ID"},sidebar:"docs",previous:{title:"$channelPermissionsFor",permalink:"/tr/docs/5.5.5/functions/channelpermissionsfor"},next:{title:"$channelTopic",permalink:"/tr/docs/5.5.5/functions/channeltopic"}},y={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],k={toc:b},v="wrapper";function O(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(v,m(d(d({},k),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function allows you to send a message in the channel you selected previously."),(0,a.kt)("h3",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$channelSendMessage[channelID;message;returnMessageID?]\n")),(0,a.kt)("h3",d({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"channel ID"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The channel where the message is to be sent"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"message"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The message that is to be sent"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"return ID"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"Whether the id of the message is to be returned or not"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes/no"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",d({},{id:"examples"}),"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Without the optional field")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "send",\n  code: `$channelSendMessage[Channel ID;$message]`\n});\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With the optional field")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "send",\n  code: `$channelSendMessage[Channel ID;$message;yes]`\n});\n')))}O.isMDXComponent=!0}}]);