"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$channelPermissionsFor",description:"Returns list of perms the specified user or role has in the channel"},h=void 0,g={unversionedId:"functions/channelpermissionsfor",id:"version-5.5.5/functions/channelpermissionsfor",title:"$channelPermissionsFor",description:"Returns list of perms the specified user or role has in the channel",source:"@site/versioned_docs/version-5.5.5/functions/channelpermissionsfor.md",sourceDirName:"functions",slug:"/functions/channelpermissionsfor",permalink:"/hi/docs/5.5.5/functions/channelpermissionsfor",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$channelPermissionsFor",description:"Returns list of perms the specified user or role has in the channel"},sidebar:"docs",previous:{title:"$channelOverwrites",permalink:"/hi/docs/5.5.5/functions/channeloverwrites"},next:{title:"$channelSendMessage",permalink:"/hi/docs/5.5.5/functions/channelsendmessage"}},b={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],k={toc:y},v="wrapper";function O(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(v,f(m(m({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns a list of permissions the specified user has for the current or specified channel ID"),(0,r.kt)("h3",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$channelPermissionsFor[uorrID;channelID?;sep]\n")),(0,r.kt)("h3",m({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"user ID/ role ID"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The user or role the permissions are based off of"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"channel ID"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The channel the permissions are based off of"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"separator"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"To seperate the permissions with the provided seperator"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example with user id")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "channelPermissions",\ncode: `$username\'s channel perms:\n$channelPermissionsFor[$authorID;$channelID;|]\n`\n})\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example with role id")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "channelPermissions",\ncode: `$username\'s channel perms:\n$channelPermissionsFor[$roleID[hello];$channelID;|]\n`\n})\n')))}O.isMDXComponent=!0}}]);