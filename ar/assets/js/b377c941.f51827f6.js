"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[29287],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$hasAnyRole",description:"checks if the user has at least one of the required roles"},h=void 0,y={unversionedId:"functions/hasanyrole",id:"version-5.5.5/functions/hasanyrole",title:"$hasAnyRole",description:"checks if the user has at least one of the required roles",source:"@site/versioned_docs/version-5.5.5/functions/hasanyrole.md",sourceDirName:"functions",slug:"/functions/hasanyrole",permalink:"/ar/docs/5.5.5/functions/hasanyrole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$hasAnyRole",description:"checks if the user has at least one of the required roles"},sidebar:"docs",previous:{title:"$hasAnyPerm",permalink:"/ar/docs/5.5.5/functions/hasanyperm"},next:{title:"$hasEmbeds",permalink:"/ar/docs/5.5.5/functions/hasembeds"}},b={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2},{value:"Footnotes",id:"footnotes",level:4}],k={toc:g},v="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(v,f(u(u({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function checks if the user has at least one of the specified roles. Returns boolean."),(0,n.kt)("h3",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$hasAnyRole[guildID;userID;roleID...]\n")),(0,n.kt)("h3",u({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"guild ID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The id of the guild"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"user ID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The id of the user whose roles are to be checked"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"role ID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The id of the role which is to be checked"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h2",u({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "hasrole",\n    code: `\n    $hasAnyRole[$guildID;$userID[Ayaka];$roleID[Developer];$roleID[Support]]\n    `\n})\n')),(0,n.kt)("h4",u({},{id:"footnotes"}),"Footnotes"),(0,n.kt)("p",null,"The command will return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the author of the command has either ",(0,n.kt)("inlineCode",{parentName:"p"},"Developer")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Support")," in Official DBD.JS Team Discord Server."))}O.isMDXComponent=!0}}]);