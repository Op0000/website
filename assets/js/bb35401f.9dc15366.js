"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=l,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var r=n(3905),l=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,o(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$setRoleIcon",description:"$setRoleIcon will set the icon of a specific role.",id:"setRoleIcon"},g=void 0,y={unversionedId:"functions/guild-related/setRoleIcon",id:"version-6.4.0/functions/guild-related/setRoleIcon",title:"$setRoleIcon",description:"$setRoleIcon will set the icon of a specific role.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/setRoleIcon.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/setRoleIcon",permalink:"/docs/functions/guild-related/setRoleIcon",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{title:"$setRoleIcon",description:"$setRoleIcon will set the icon of a specific role.",id:"setRoleIcon"},sidebar:"docs",previous:{title:"$setRoleColor",permalink:"/docs/functions/guild-related/setRoleColor"},next:{title:"$setRolePosition",permalink:"/docs/functions/guild-related/setRolePosition"}},b={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:k},h="wrapper";function O(e){var t=e,{components:n}=t,l=f(t,["components"]);return(0,r.kt)(h,d(u(u({},v),l),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setRoleIcon")," will set the icon of a specific role."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$setRoleIcon[guildID;roleID;icon]\n")),(0,r.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"guildID"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The ID of the guild where the role exists."),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"roleID"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The role ID."),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"icon"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"The URL of the icon."),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"false")))),(0,r.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will change the icon of a given role to the specified icon:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'setRoleIcon',\n    code: `\n  $setRoleIcon[$guildID;roleID;iconURL]\n  `\n});\n")))}O.isMDXComponent=!0}}]);