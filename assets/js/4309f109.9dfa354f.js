"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,m=s["".concat(p,".").concat(u)]||s[u]||f[u]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$deleteInvite",description:"Used to delete the specified invite."},v=void 0,g={unversionedId:"functions/deleteinvite",id:"version-5.5.5/functions/deleteinvite",title:"$deleteInvite",description:"Used to delete the specified invite.",source:"@site/versioned_docs/version-5.5.5/functions/deleteinvite.md",sourceDirName:"functions",slug:"/functions/deleteinvite",permalink:"/docs/5.5.5/functions/deleteinvite",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$deleteInvite",description:"Used to delete the specified invite."},sidebar:"docs",previous:{title:"$deleteIn",permalink:"/docs/5.5.5/functions/deletein"},next:{title:"$deleteMessage",permalink:"/docs/5.5.5/functions/deletemessage"}},y={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],k={toc:b},O="wrapper";function h(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(O,f(s(s({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$deleteInvite")," allowing you to delete invite of the specified invite code."),(0,r.kt)("h3",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$deleteInvite[code;guildID?;reason]\n")),(0,r.kt)("h3",s({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"code"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The invite code to be deleted"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"guild ID"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The ID of the guild"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"reason"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"The reason why you want to delete the link"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h2",s({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "delete",\n  code: `\n  $deleteInvite[$message;$guildID;I want to delete this invite!]\n  `\n});\n')))}h.isMDXComponent=!0}}]);