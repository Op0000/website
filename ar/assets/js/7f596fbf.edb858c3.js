"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75374],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,g=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>O,frontMatter:()=>g,metadata:()=>v,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const g={title:"$giveRole",description:"Give a role to an user."},m=void 0,v={unversionedId:"functions/giverole",id:"version-5.5.5/functions/giverole",title:"$giveRole",description:"Give a role to an user.",source:"@site/versioned_docs/version-5.5.5/functions/giverole.md",sourceDirName:"functions",slug:"/functions/giverole",permalink:"/ar/docs/5.5.5/functions/giverole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$giveRole",description:"Give a role to an user."},sidebar:"docs",previous:{title:"$getVar",permalink:"/ar/docs/5.5.5/functions/getvar"},next:{title:"$giveRoles",permalink:"/ar/docs/5.5.5/functions/giveroles"}},y={},b=[{value:"Fields",id:"fields",level:4},{value:"Footnote",id:"footnote",level:6}],k={toc:b},h="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(h,u(f(f({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function gives a role to the specified user. This is generally faster than ",(0,n.kt)("a",f({parentName:"p"},{href:"/ar/docs/5.5.5/functions/giveroles"}),"$giveRoles"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$giveRole[guildID;userID;roleID]\n")),(0,n.kt)("h4",f({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"guildID"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The server ID of the role"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"integer"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"userID"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The user ID, which will be taking the role"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"integer"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"roleID"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The ID of the role will be given to user"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"integer"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h6",f({},{id:"footnote"}),"Footnote"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Be sure bot's role higher than the role it will give!")),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "give-role",\n  code: `\n  $giveRole[$guildID;$authorID;797332449314734141]\n  `\n});\n')))}O.isMDXComponent=!0}}]);