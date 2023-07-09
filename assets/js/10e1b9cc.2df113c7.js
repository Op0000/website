"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97054],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return o?n.createElement(m,a(a({ref:t},l),{},{components:o})):n.createElement(m,a({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},20007:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const i={title:"$modifyWebhook",description:"Modifies the specified webhooks with the given inputs"},a=void 0,c={unversionedId:"functions/modifywebhook",id:"version-5.5.5/functions/modifywebhook",title:"$modifyWebhook",description:"Modifies the specified webhooks with the given inputs",source:"@site/versioned_docs/version-5.5.5/functions/modifywebhook.md",sourceDirName:"functions",slug:"/functions/modifywebhook",permalink:"/docs/5.5.5/functions/modifywebhook",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688894027,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"$modifyWebhook",description:"Modifies the specified webhooks with the given inputs"},sidebar:"docs",previous:{title:"$modifyRolePerms",permalink:"/docs/5.5.5/functions/modifyroleperms"},next:{title:"$modulo",permalink:"/docs/5.5.5/functions/modulo"}},s={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function allows the bot to modify an existing webhook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$modifyWebhook[webhookID;webhookToken;name;avatar url (optional)]\n")),(0,r.kt)("p",null,"Using this function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "modifyWebhook",\ncode: `$modifyWebhook[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA;Kuba\'s awesome webhook]\n`\n})\n/*\nHow to find your webhookID/Token\nurl: https://ptb.discordapp.com/api/webhooks/793312378162642975/paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA\nYour ID: 793312378162642975\nYour Token: paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA\n*/\n')))}f.isMDXComponent=!0}}]);