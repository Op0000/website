"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[72936],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(m,".").concat(d)]||s[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$removeRole",description:"$removeRole will remove a given role from a given member.",id:"removeRole"},v=void 0,g={unversionedId:"functions/interaction-related/removeRole",id:"version-6.4.0/functions/interaction-related/removeRole",title:"$removeRole",description:"$removeRole will remove a given role from a given member.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/removeRole.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/removeRole",permalink:"/uk/docs/functions/interaction-related/removeRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$removeRole",description:"$removeRole will remove a given role from a given member.",id:"removeRole"},sidebar:"docs",previous:{title:"$removeApplicationCommandPermissions",permalink:"/uk/docs/functions/interaction-related/removeApplicationCommandPermissions"},next:{title:"$removeRoles",permalink:"/uk/docs/functions/interaction-related/removeRoles"}},b={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],k={toc:y},h="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(h,u(s(s({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$removeRole")," will remove a given role from a given member."),(0,n.kt)("h2",s({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$removeRole[guildID;userID;roleID;reason?]\n")),(0,n.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"guildID"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The guild ID of where the user and role is located in."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"userID"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The ID of the user whose role will be removed."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"roleID"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The ID of the role that will be removed."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"reason?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"The reason that will be displayed in the guild's audit logs."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will remove a given role from yourself (the role must be below the bot's highest role):"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'removeRole',\n    code: `\n   $removeRole[$guildID;$authorID;roleID;Some reason.]`\n});\n")))}O.isMDXComponent=!0}}]);