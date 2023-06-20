"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),l=u(t),d=o,f=l["".concat(c,".").concat(d)]||l[d]||p[d]||i;return t?r.createElement(f,s(s({ref:n},m),{},{components:t})):r.createElement(f,s({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[l]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const i={title:"$mentionedUsersCount",description:"Returns amount of mentioned users in the command's message."},s=void 0,a={unversionedId:"functions/mentioneduserscount",id:"version-5.5.5/functions/mentioneduserscount",title:"$mentionedUsersCount",description:"Returns amount of mentioned users in the command's message.",source:"@site/versioned_docs/version-5.5.5/functions/mentioneduserscount.md",sourceDirName:"functions",slug:"/functions/mentioneduserscount",permalink:"/docs/5.5.5/functions/mentioneduserscount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687300492,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$mentionedUsersCount",description:"Returns amount of mentioned users in the command's message."},sidebar:"docs",previous:{title:"$mentionedRolesCount",permalink:"/docs/5.5.5/functions/mentionedrolescount"},next:{title:"$mentionType",permalink:"/docs/5.5.5/functions/mentiontype"}},c={},u=[{value:"Example Commnd:",id:"example-commnd",level:4}],m={toc:u},l="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(l,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With this function you can check how many user mentions in the command's message are."),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$mentionedUsersCount")),(0,o.kt)("h4",{id:"example-commnd"},"Example Commnd:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "channelmentions",\ncode: `\nYou have mentioned $mentionedUsersCount users in your message.`\n});\n')))}p.isMDXComponent=!0}}]);