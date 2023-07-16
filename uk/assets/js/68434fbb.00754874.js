"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,y=u["".concat(i,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(y,l(l({ref:t},c),{},{components:r})):n.createElement(y,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>d,default:()=>v,frontMatter:()=>y,metadata:()=>g,toc:()=>E});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={title:"$messageType",description:"Returns the type of this message."},d=void 0,g={unversionedId:"functions/messagetype",id:"version-5.5.5/functions/messagetype",title:"$messageType",description:"Returns the type of this message.",source:"@site/versioned_docs/version-5.5.5/functions/messagetype.md",sourceDirName:"functions",slug:"/functions/messagetype",permalink:"/uk/docs/5.5.5/functions/messagetype",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$messageType",description:"Returns the type of this message."},sidebar:"docs",previous:{title:"$messageSlice",permalink:"/uk/docs/5.5.5/functions/messageslice"},next:{title:"$messageURL",permalink:"/uk/docs/5.5.5/functions/messageurl"}},O={},E=[{value:"Usage:",id:"usage",level:4}],I={toc:E},b="wrapper";function v(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(b,m(u(u({},I),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The type of the current message, e.g. DEFAULT. Here are the available message types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DEFAULT"),(0,n.kt)("li",{parentName:"ul"},"RECIPIENT","_","ADD"),(0,n.kt)("li",{parentName:"ul"},"RECIPIENT","_","REMOVE"),(0,n.kt)("li",{parentName:"ul"},"CALL"),(0,n.kt)("li",{parentName:"ul"},"CHANNEL","_","NAME","_","CHANGE"),(0,n.kt)("li",{parentName:"ul"},"CHANNEL","_","ICON","_","CHANGE"),(0,n.kt)("li",{parentName:"ul"},"PINS","_","ADD"),(0,n.kt)("li",{parentName:"ul"},"GUILD","_","MEMBER","_","JOIN"),(0,n.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION"),(0,n.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION","_","TIER","_","1"),(0,n.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION","_","TIER","_","2"),(0,n.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION","_","TIER","_","3"),(0,n.kt)("li",{parentName:"ul"},"CHANNEL","_","FOLLOW","_","ADD"),(0,n.kt)("li",{parentName:"ul"},"GUILD","_","DISCOVERY","_","DISQUALIFIED"),(0,n.kt)("li",{parentName:"ul"},"GUILD","_","DISCOVERY","_","REQUALIFIED")),(0,n.kt)("h4",u({},{id:"usage"}),"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "$alwaysExecute",\ncode: `\nThe server has reached boost level 3! \ud83c\udf89\n$onlyIf[$messageType==USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3;]\n')))}v.isMDXComponent=!0}}]);