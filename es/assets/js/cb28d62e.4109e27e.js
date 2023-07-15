"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[92639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),f=i,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(a)for(var r of a(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$findMembers"},b=void 0,y={unversionedId:"functions/findmembers",id:"version-5.5.5/functions/findmembers",title:"$findMembers",description:"This function will find multiple members from the current guild through a given query",source:"@site/versioned_docs/version-5.5.5/functions/findmembers.md",sourceDirName:"functions",slug:"/functions/findmembers",permalink:"/es/docs/5.5.5/functions/findmembers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$findMembers"},sidebar:"docs",previous:{title:"$findMember",permalink:"/es/docs/5.5.5/functions/findmember"},next:{title:"$findNumbers",permalink:"/es/docs/5.5.5/functions/findnumbers"}},v={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Properties",id:"properties",level:4},{value:"Usage",id:"usage",level:4}],h={toc:g},O="wrapper";function k(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(O,m(c(c({},h),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will find multiple members from the current guild through a given query"),(0,n.kt)("h4",c({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 required field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Query ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Limit ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Properties ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Get ID ","(","optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$findMembers[query;limit (optional);properties (optional);getID (optional)]")),(0,n.kt)("h4",c({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Query - The query to list possible members"),(0,n.kt)("li",{parentName:"ul"},"Limit - The limit of the member list"),(0,n.kt)("li",{parentName:"ul"},"Properties - The properties showing the list"),(0,n.kt)("li",{parentName:"ul"},"Get ID -")),(0,n.kt)("h4",c({},{id:"properties"}),"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"position - The ","#"," position of the member "),(0,n.kt)("li",{parentName:"ul"},"username - The user's username"),(0,n.kt)("li",{parentName:"ul"},"id - The user's id")),(0,n.kt)("h4",c({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"Without optional fields"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "fetchMembers",\ncode: `Heres a list:\n$findMembers[$message]\n`\n})\n')),(0,n.kt)("p",null,"With optional fields"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "fetchMembers",\ncode: `Heres a list:\n$findMembers[$message;10;{position} - {username}:{id};no]\n`\n})\n')))}k.isMDXComponent=!0}}]);