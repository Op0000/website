"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61024],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=i,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[f]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56043:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var n=t(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?i(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&c(e,t,r[t]);if(l)for(var t of l(r))s.call(r,t)&&c(e,t,r[t]);return e},p=(e,r)=>o(e,a(r)),d=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$findMember",description:"Retrieve the Member ID, with their Username, in the Current Guild."},b=void 0,y={unversionedId:"functions/findmember",id:"version-5.5.5/functions/findmember",title:"$findMember",description:"Retrieve the Member ID, with their Username, in the Current Guild.",source:"@site/versioned_docs/version-5.5.5/functions/findmember.md",sourceDirName:"functions",slug:"/functions/findmember",permalink:"/uk/docs/5.5.5/functions/findmember",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$findMember",description:"Retrieve the Member ID, with their Username, in the Current Guild."},sidebar:"docs",previous:{title:"$findChars",permalink:"/uk/docs/5.5.5/functions/findchars"},next:{title:"$findMembers",permalink:"/uk/docs/5.5.5/functions/findmembers"}},v={},h=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:h},g="wrapper";function k(e){var r=e,{components:t}=r,i=d(r,["components"]);return(0,n.kt)(g,p(f(f({},O),i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the user ID of the specified user. Yes/No will determine if function returns current author id ","(","yes",")"," or undefined ","(","no",")"," if no match was found. Default is yes"),(0,n.kt)("h4",f({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 required field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Member ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Return Current Member ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$findMember[member;returnCurrentMember (yes/no) (optional)]")),(0,n.kt)("h4",f({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Member - The member we're finding"),(0,n.kt)("li",{parentName:"ul"},"Return Current Member - Whether or not the author's id will be returned if member not found")),(0,n.kt)("h4",f({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "find", \ncode: `\n$findMember[Kubaturi]` //Returns author ID if no member found \n})\n')))}k.isMDXComponent=!0}}]);