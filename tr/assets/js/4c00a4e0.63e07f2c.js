"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||c[d]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[f]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>N,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>o(e,s(t)),d=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$usersBanned",description:"Returns a list of users that are banned from current guild."},b=void 0,g={unversionedId:"functions/usersbanned",id:"version-5.5.5/functions/usersbanned",title:"$usersBanned",description:"Returns a list of users that are banned from current guild.",source:"@site/versioned_docs/version-5.5.5/functions/usersbanned.md",sourceDirName:"functions",slug:"/functions/usersbanned",permalink:"/tr/docs/5.5.5/functions/usersbanned",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$usersBanned",description:"Returns a list of users that are banned from current guild."},sidebar:"docs",previous:{title:"$userRoles",permalink:"/tr/docs/5.5.5/functions/userroles"},next:{title:"$usersInChannel",permalink:"/tr/docs/5.5.5/functions/usersinchannel"}},k={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Option Types",id:"option-types",level:4},{value:"Example",id:"example",level:2}],h={toc:y},v="wrapper";function N(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(v,c(f(f({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the list of banned users from the current server with optional seperator sorted by userID/mention or usernames. Default return are usernames of the banned users",(0,n.kt)("sup",f({parentName:"p"},{id:"fnref-1"}),(0,n.kt)("a",f({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),"."),(0,n.kt)("h3",f({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$usersBanned[guildID?;force?;options?;separator?]\n")),(0,n.kt)("h3",f({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"guildID?"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The ID of the server"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"force?"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Forcing to fetch banned users"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"boolean"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"option?"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"The option of the returning user's"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"seperator?"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"Seperator of userIDs"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",f({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h4",f({},{id:"option-types"}),"Option Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," \u2014 Returns ID of the users"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"username")," \u2014 Returns name of the users")),(0,n.kt)("h2",f({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "users-banened",\n  code: `\n  List of banned users:\n  $usersBanned[$guildID;yes;username;, ]\n  `\n// Returns all banned users sorted by their username separated by a comma.\n});\n')),(0,n.kt)("div",f({},{className:"footnotes"}),(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",f({parentName:"ol"},{id:"fn-1"}),"If your server has many bans, use functions like ",(0,n.kt)("a",f({parentName:"li"},{href:"/tr/docs/5.5.5/functions/croptext"}),"$cropText")," to stop after 2,000 chars or ",(0,n.kt)("a",f({parentName:"li"},{href:"/tr/docs/5.5.5/functions/createfile"}),"$createFile")," to send the full list in a text file.",(0,n.kt)("a",f({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}N.isMDXComponent=!0}}]);