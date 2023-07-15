"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>d,metadata:()=>k,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&m(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$rolePerms",description:"Returns Moderation Role Permissions if the given Role ID has the permissions"},g=void 0,k={unversionedId:"functions/roleperms",id:"version-5.5.5/functions/roleperms",title:"$rolePerms",description:"Returns Moderation Role Permissions if the given Role ID has the permissions",source:"@site/versioned_docs/version-5.5.5/functions/roleperms.md",sourceDirName:"functions",slug:"/functions/roleperms",permalink:"/tr/docs/5.5.5/functions/roleperms",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$rolePerms",description:"Returns Moderation Role Permissions if the given Role ID has the permissions"},sidebar:"docs",previous:{title:"$roleName",permalink:"/tr/docs/5.5.5/functions/rolename"},next:{title:"$rolePosition",permalink:"/tr/docs/5.5.5/functions/roleposition"}},b={},v=[{value:"List of Moderation Permissions:",id:"list-of-moderation-permissions",level:3}],y={toc:v},h="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(h,u(c(c({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the permissions of the specified role"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$rolePerms[roleID;seperator (optional)] \n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname:'rolePerms',\ncode:`$rolePerms[739933888784367637;, ]` // Manage Messages, Manage Webhook, ...\n})\n")),(0,n.kt)("p",null,"This will only return Moderation Permissions, If the role has Manage Messages, the bot will return Manage Messages, If it has Send Messages, the bot will not return Send Messages."),(0,n.kt)("h3",c({},{id:"list-of-moderation-permissions"}),"List of Moderation Permissions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"manageserver"),(0,n.kt)("li",{parentName:"ul"},"admin"),(0,n.kt)("li",{parentName:"ul"},"kick "),(0,n.kt)("li",{parentName:"ul"},"ban "),(0,n.kt)("li",{parentName:"ul"},"manageroles "),(0,n.kt)("li",{parentName:"ul"},"managechannels "),(0,n.kt)("li",{parentName:"ul"},"managewebhooks "),(0,n.kt)("li",{parentName:"ul"},"managemessages "),(0,n.kt)("li",{parentName:"ul"},"viewauditlog "),(0,n.kt)("li",{parentName:"ul"},"managenicknames "),(0,n.kt)("li",{parentName:"ul"},"sendmessages "),(0,n.kt)("li",{parentName:"ul"},"readmessages "),(0,n.kt)("li",{parentName:"ul"},"movemembers"),(0,n.kt)("li",{parentName:"ul"},"manageemojis "),(0,n.kt)("li",{parentName:"ul"},"viewguildinsights "),(0,n.kt)("li",{parentName:"ul"},"mentioneveryone "),(0,n.kt)("li",{parentName:"ul"},"embedlinks "),(0,n.kt)("li",{parentName:"ul"},"viewchannel "),(0,n.kt)("li",{parentName:"ul"},"createinvite "),(0,n.kt)("li",{parentName:"ul"},"mutemembers "),(0,n.kt)("li",{parentName:"ul"},"speak "),(0,n.kt)("li",{parentName:"ul"},"deafenmembers "),(0,n.kt)("li",{parentName:"ul"},"attachfiles "),(0,n.kt)("li",{parentName:"ul"},"connect")))}O.isMDXComponent=!0}}]);