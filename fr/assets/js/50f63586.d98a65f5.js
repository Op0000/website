"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37426],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,m=s["".concat(p,".").concat(u)]||s[u]||f[u]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>i(e,l(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const m={title:"$appendFile",description:"Used to add new data to the specified file without replacing the data present in the file."},h=void 0,y={unversionedId:"functions/appendfile",id:"version-5.5.5/functions/appendfile",title:"$appendFile",description:"Used to add new data to the specified file without replacing the data present in the file.",source:"@site/versioned_docs/version-5.5.5/functions/appendfile.md",sourceDirName:"functions",slug:"/functions/appendfile",permalink:"/fr/docs/5.5.5/functions/appendfile",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$appendFile",description:"Used to add new data to the specified file without replacing the data present in the file."},sidebar:"docs",previous:{title:"$alwaysExecute",permalink:"/fr/docs/5.5.5/functions/alwaysexecute"},next:{title:"$archiveThread",permalink:"/fr/docs/5.5.5/functions/archivethread"}},g={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Encode Types",id:"encode-types",level:6},{value:"Examples",id:"examples",level:2}],k={toc:b},v="wrapper";function O(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(v,f(s(s({},k),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$appendFile")," allowing you to add new data to the specified file without replacing the data present in the file."),(0,a.kt)("h3",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$appendFile[file;text;encode?]\n")),(0,a.kt)("h3",s({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"file"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The path to the file in which the data is to be added"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"text"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The text to be added in the file"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"encode"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"The encoding style to be implemented on the text being added"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,a.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h6",s({},{id:"encode-types"}),"Encode Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ascii")," \u2014 ASCII Code Characterization"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"latin")," \u2014 Latin Characterization"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"utf8")," - Unicode Characterization")),(0,a.kt)("h2",s({},{id:"examples"}),"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add",\n  code: `\n  $appendFile[./src/data.txt;This is a new text;ascii]\n  `\n// Adds "This is a new text" to the data.txt file present in src folder with ASCII code characterization.\n});\n')))}O.isMDXComponent=!0}}]);