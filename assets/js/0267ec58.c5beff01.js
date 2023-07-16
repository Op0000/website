"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25349],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=l,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var r=t(3905),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?l(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&p(e,t,n[t]);return e},u=(e,n)=>a(e,o(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$deleteChannels",description:"Delete a channel or channels by using their IDs."},h=void 0,y={unversionedId:"functions/deletechannels",id:"version-5.5.5/functions/deletechannels",title:"$deleteChannels",description:"Delete a channel or channels by using their IDs.",source:"@site/versioned_docs/version-5.5.5/functions/deletechannels.md",sourceDirName:"functions",slug:"/functions/deletechannels",permalink:"/docs/5.5.5/functions/deletechannels",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$deleteChannels",description:"Delete a channel or channels by using their IDs."},sidebar:"docs",previous:{title:"$deleteApplicationCommand",permalink:"/docs/5.5.5/functions/deleteapplicationcommand"},next:{title:"$deleteChannelVar",permalink:"/docs/5.5.5/functions/deletechannelvar"}},v={},b=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],g={toc:b},O="wrapper";function k(e){var n=e,{components:t}=n,l=f(n,["components"]);return(0,r.kt)(O,u(d(d({},g),l),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function deletes the specified channel","(","s",")"),(0,r.kt)("h4",d({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 1 required field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Channel ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Channel ID 2 ","(","Optional",")"),(0,r.kt)("li",{parentName:"ol"},"Etc")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"deleteChannels[channel id;channel id;etc]")),(0,r.kt)("h4",d({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel ID","(","s",")"," - The channels the bot is deleting")),(0,r.kt)("h4",d({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"Deleting the mentioned channel"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deletechannels", \ncode: `\nI\'ve deleted the mentioned channels!\n$deleteChannels[$mentionedChannels[1]]\n` \n})\n')),(0,r.kt)("p",null,"Deleting multiple mentioned channels"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deletechannels", \ncode: `\nI\'ve deleted all the mentioned channels!\n$deleteChannels[$mentionedChannels[1];$mentionedChannels[2];$mentionedChannels[3]]\n` \n})\n')))}k.isMDXComponent=!0}}]);