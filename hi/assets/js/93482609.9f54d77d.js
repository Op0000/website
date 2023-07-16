"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>o(e,a(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$getInviteInfo",description:"Gets the info of the specified invite code"},v=void 0,h={unversionedId:"functions/getinviteinfo",id:"version-5.5.5/functions/getinviteinfo",title:"$getInviteInfo",description:"Gets the info of the specified invite code",source:"@site/versioned_docs/version-5.5.5/functions/getinviteinfo.md",sourceDirName:"functions",slug:"/functions/getinviteinfo",permalink:"/hi/docs/5.5.5/functions/getinviteinfo",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$getInviteInfo",description:"Gets the info of the specified invite code"},sidebar:"docs",previous:{title:"$getGlobalUserVar",permalink:"/hi/docs/5.5.5/functions/getglobaluservar"},next:{title:"$getLeaderboardInfo",permalink:"/hi/docs/5.5.5/functions/getleaderboardinfo"}},y={},g=[],b={toc:g},O="wrapper";function k(e){var t=e,{components:n}=t,i=d(t,["components"]);return(0,r.kt)(O,f(u(u({},b),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows the bot to get info from any invite code/url"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$getInviteInfo[code/url;guildID/channelID/userID/isTemporary/expiresAt/createdAt/url/code/uses/maxUses]\n")),(0,r.kt)("p",null,"Propety Explanations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"guildID - the guild where the invite is towards"),(0,r.kt)("li",{parentName:"ul"},"channelID - the channel where the invite is towards"),(0,r.kt)("li",{parentName:"ul"},"userID - the user who made the invite"),(0,r.kt)("li",{parentName:"ul"},"isTemporary - checks if invite is temporary or not"),(0,r.kt)("li",{parentName:"ul"},"expiresAt - Checks when the invite expires ","(","if it expires",")"),(0,r.kt)("li",{parentName:"ul"},"createdAt - Checks when the invite was created"),(0,r.kt)("li",{parentName:"ul"},"url - Returns the invite url"),(0,r.kt)("li",{parentName:"ul"},"code - Returns the invite code"),(0,r.kt)("li",{parentName:"ul"},"uses - Returns how many uses the invite has"),(0,r.kt)("li",{parentName:"ul"},"maxUses - Returns the max amount of  uses the invite can have ","(","If it has a max amount",")")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "inviteInfo".\ncode: `$getInviteInfo[dbdjs;uses]` //Gets how many people joined through the <invite_code>\n}) \n')))}k.isMDXComponent=!0}}]);