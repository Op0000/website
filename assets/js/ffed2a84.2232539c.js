"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,u=d["".concat(s,".").concat(f)]||d[f]||m[f]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>N,frontMatter:()=>u,metadata:()=>y,toc:()=>k});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const u={title:"$hasAnyPerm",description:"Checks if the user has at least one of the required perms"},h=void 0,y={unversionedId:"functions/hasanyperm",id:"version-5.5.5/functions/hasanyperm",title:"$hasAnyPerm",description:"Checks if the user has at least one of the required perms",source:"@site/versioned_docs/version-5.5.5/functions/hasanyperm.md",sourceDirName:"functions",slug:"/functions/hasanyperm",permalink:"/docs/5.5.5/functions/hasanyperm",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$hasAnyPerm",description:"Checks if the user has at least one of the required perms"},sidebar:"docs",previous:{title:"$handleError",permalink:"/docs/5.5.5/functions/handleerror"},next:{title:"$hasAnyRole",permalink:"/docs/5.5.5/functions/hasanyrole"}},g={},k=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2},{value:"Footnotes",id:"footnotes",level:4}],b={toc:k},v="wrapper";function N(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(v,m(d(d({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will check if the user has at least one of the specified perms inside of the function. Returns boolean."),(0,n.kt)("h3",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$hasAnyPerm[guildID;userID;perm1;perm2?...]\n")),(0,n.kt)("h3",d({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"guild ID"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The id of the guild"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"user ID"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The id of the user whose perms are to be checked"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"perm1"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The permission that is to be checked"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"perm2"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The permission that is to be checked"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",d({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "hasperms",\n    code: `\n$hasAnyPerm[$guildID;$authorID;addreactions;sendmessages;manageserver]\n    `\n})\n')),(0,n.kt)("h4",d({},{id:"footnotes"}),"Footnotes"),(0,n.kt)("p",null,"The bot will reply with ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," if the user has at least one of the 3 perms we requested, in this case ",(0,n.kt)("inlineCode",{parentName:"p"},"addreactions, sendmessages")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"manageserver"),"."))}N.isMDXComponent=!0}}]);