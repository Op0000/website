"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,m=d["".concat(s,".").concat(u)]||d[u]||f[u]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>N,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>o(e,l(t)),u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$findRoles",description:"Used to find roles in the current guild with advanced searching."},h=void 0,y={unversionedId:"functions/findroles",id:"version-5.5.5/functions/findroles",title:"$findRoles",description:"Used to find roles in the current guild with advanced searching.",source:"@site/versioned_docs/version-5.5.5/functions/findroles.md",sourceDirName:"functions",slug:"/functions/findroles",permalink:"/docs/5.5.5/functions/findroles",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$findRoles",description:"Used to find roles in the current guild with advanced searching."},sidebar:"docs",previous:{title:"$findRole",permalink:"/docs/5.5.5/functions/findrole"},next:{title:"$findServerChannel",permalink:"/docs/5.5.5/functions/findserverchannel"}},g={},k=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Types of Search",id:"types-of-search",level:4},{value:"Placeholders of custom response",id:"placeholders-of-custom-response",level:4},{value:"Examples",id:"examples",level:2}],v={toc:k},b="wrapper";function N(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(b,f(d(d({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function is used to find roles in the current guild with advanced searching."),(0,n.kt)("h3",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$findRoles[query;limit?;type?;res?]\n")),(0,n.kt)("h3",d({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"query"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The name/query of the role you're searching for"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"limit"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The limit of the query"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"type"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The type of search you want to do"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"res"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The custom response to be returned"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h4",d({},{id:"types-of-search"}),"Types of Search"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"startsWith - To check if the role starts with query"),(0,n.kt)("li",{parentName:"ul"},"endsWith - To check if the role ends with the query"),(0,n.kt)("li",{parentName:"ul"},"includes - To check if the role includes the query")),(0,n.kt)("h4",d({},{id:"placeholders-of-custom-response"}),"Placeholders of custom response"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"{position} - Returns the position of the role"),(0,n.kt)("li",{parentName:"ul"},"{mention} - Returns the mention of the role"),(0,n.kt)("li",{parentName:"ul"},"{id} - Returns the id of the role"),(0,n.kt)("li",{parentName:"ul"},"{name} - Returns the name of the role"),(0,n.kt)("li",{parentName:"ul"},"{color} - Returns the color of the role"),(0,n.kt)("li",{parentName:"ul"},"{hoisted} - Checks if the role is hoisted"),(0,n.kt)("li",{parentName:"ul"},"{mentionable} - Checks if the role is mentionable")),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "find",\n  code: `\n  $findRoles[Dev;10;startsWith;The position of {mention} is {position}.]\n  ` \n});\n')))}N.isMDXComponent=!0}}]);