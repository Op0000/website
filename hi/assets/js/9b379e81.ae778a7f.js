"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8449],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,d=m["".concat(c,".").concat(u)]||m[u]||f[u]||i;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26673:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>g,contentTitle:()=>y,default:()=>P,frontMatter:()=>d,metadata:()=>h,toc:()=>b});var t=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,m=(e,n)=>{for(var r in n||(n={}))c.call(n,r)&&p(e,r,n[r]);if(s)for(var r of s(n))l.call(n,r)&&p(e,r,n[r]);return e},f=(e,n)=>i(e,a(n)),u=(e,n)=>{var r={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&s)for(var t of s(e))n.indexOf(t)<0&&l.call(e,t)&&(r[t]=e[t]);return r};const d={title:"$modifyChannelPerms",description:"Modifies a channel's permissions to the given perms"},y=void 0,h={unversionedId:"functions/modifychannelperms",id:"version-5.5.5/functions/modifychannelperms",title:"$modifyChannelPerms",description:"Modifies a channel's permissions to the given perms",source:"@site/versioned_docs/version-5.5.5/functions/modifychannelperms.md",sourceDirName:"functions",slug:"/functions/modifychannelperms",permalink:"/hi/docs/5.5.5/functions/modifychannelperms",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$modifyChannelPerms",description:"Modifies a channel's permissions to the given perms"},sidebar:"docs",previous:{title:"$minute",permalink:"/hi/docs/5.5.5/functions/minute"},next:{title:"$modifyEmoji",permalink:"/hi/docs/5.5.5/functions/modifyemoji"}},g={},b=[],v={toc:b},O="wrapper";function P(e){var n=e,{components:r}=n,o=u(n,["components"]);return(0,t.kt)(O,f(m(m({},v),o),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function edit's the specified channels perms"),(0,t.kt)("pre",null,(0,t.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$modifyChannelPerms[channelID;perm1;perm2;perm3;roleID/userID/$guildID]\n")),(0,t.kt)("pre",null,(0,t.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'/*\nTIP:\n+ = Allow perms\n- = Deny Perms\n/ = Defaults the perm\n*/\nbot.command({\nname: "modifyChannelPerms",\ncode: `Modified the channel permissions!\n$modifyChannelPerms[773365032691040277;+sendmessages;-readmessages;/managemessages;$guildID]`\n})\n/*\nThis:\nAllows send messages\nDenies read messages\nDefaults manage messages\nfor the whole guild\n*/\n')))}P.isMDXComponent=!0}}]);