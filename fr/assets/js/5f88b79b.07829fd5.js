"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37032],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,h=u["".concat(i,".").concat(d)]||u[d]||f[d]||l;return t?r.createElement(h,o(o({ref:n},s),{},{components:t})):r.createElement(h,o({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>m,default:()=>O,frontMatter:()=>h,metadata:()=>g,toc:()=>b});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&s(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&s(e,t,n[t]);return e},f=(e,n)=>l(e,o(n)),d=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const h={title:"$cloneChannel",description:"Clones the current channel"},m=void 0,g={unversionedId:"functions/clonechannel",id:"version-5.5.5/functions/clonechannel",title:"$cloneChannel",description:"Clones the current channel",source:"@site/versioned_docs/version-5.5.5/functions/clonechannel.md",sourceDirName:"functions",slug:"/functions/clonechannel",permalink:"/fr/docs/5.5.5/functions/clonechannel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$cloneChannel",description:"Clones the current channel"},sidebar:"docs",previous:{title:"$clientToken",permalink:"/fr/docs/5.5.5/functions/clienttoken"},next:{title:"$closeTicket",permalink:"/fr/docs/5.5.5/functions/closeticket"}},k={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],y={toc:b},v="wrapper";function O(e){var n=e,{components:t}=n,a=d(n,["components"]);return(0,r.kt)(v,f(u(u({},y),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows the bot to clone the name, topic and channel position of the current or given channel."),(0,r.kt)("h3",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$cloneChannel[channelID?;return_new_channelID?]\n")),(0,r.kt)("h3",u({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"channel ID"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The id of the channel that is to be cloned"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"return ID"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"Whether to return the id of the channel created"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"yes/no"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h2",u({},{id:"example"}),"Example"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Without optional field:")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "clonechannel",\ncode: `I have cloned this channel!\n$cloneChannel`\n})\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With optional field")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "clonechannel",\ncode: `I have cloned this channel!\n$cloneChannel[$mentionedChannels[1]]`\n})\n\n')),(0,r.kt)("p",null,"With optional field to clone current channel, save the new channel's ID inside ",(0,r.kt)("a",u({parentName:"p"},{href:"/fr/docs/5.5.5/functions/let"}),"$let","[","]"," "),"and return the ID of the new channel as a channel mention with ",(0,r.kt)("a",u({parentName:"p"},{href:"/fr/docs/5.5.5/functions/get"}),"$get","[","]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "clonechannel",\ncode: `$channelSendMessage[$get[new];This is the clone!]\n$let[channel;$cloneChannel[$channelID;yes]]\n`\n})\n')))}O.isMDXComponent=!0}}]);