"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[62824],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>v,toc:()=>O});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(u)for(var r of u(t))s.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>i(e,a(t)),m=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$muteUser",description:"Allows you to in-voice mute a user."},y=void 0,v={unversionedId:"functions/muteuser",id:"version-5.5.5/functions/muteuser",title:"$muteUser",description:"Allows you to in-voice mute a user.",source:"@site/versioned_docs/version-5.5.5/functions/muteuser.md",sourceDirName:"functions",slug:"/functions/muteuser",permalink:"/hi/docs/5.5.5/functions/muteuser",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$muteUser",description:"Allows you to in-voice mute a user."},sidebar:"docs",previous:{title:"$multi",permalink:"/hi/docs/5.5.5/functions/multi"},next:{title:"$mutualServers",permalink:"/hi/docs/5.5.5/functions/mutualservers"}},b={},O=[],g={toc:O},w="wrapper";function h(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(w,f(p(p({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will make the bot server-mute a user inside voice channels using their User ID."),(0,n.kt)("p",null,"This function has 3 fields:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"User ID ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Mute ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Reason ","(","Optional",")")),(0,n.kt)("p",null,"Raw usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$muteUser[User ID;Mute (yes/no);Reason (Optional)]")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "mute",\n    code: `\n    Now Ch\xefwi is in-voice muted, stop saying Nya!\n    $muteUser[278342221202194434;yes]\n    `\n')))}h.isMDXComponent=!0}}]);