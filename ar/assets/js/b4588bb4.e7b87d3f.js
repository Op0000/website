"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36415],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},12624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>l(e,i(t)),u=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$deleteFile",description:"Used to delete the specified file."},y=void 0,b={unversionedId:"functions/deletefile",id:"version-5.5.5/functions/deletefile",title:"$deleteFile",description:"Used to delete the specified file.",source:"@site/versioned_docs/version-5.5.5/functions/deletefile.md",sourceDirName:"functions",slug:"/functions/deletefile",permalink:"/ar/docs/5.5.5/functions/deletefile",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$deleteFile",description:"Used to delete the specified file."},sidebar:"docs",previous:{title:"$deleteEmojis",permalink:"/ar/docs/5.5.5/functions/deleteemojis"},next:{title:"$deleteGlobalUserVar",permalink:"/ar/docs/5.5.5/functions/deleteglobaluservar"}},g={},v=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],O={toc:v},h="wrapper";function k(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(h,f(d(d({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$deleteFile")," allowing you to delete the specified file."),(0,n.kt)("h3",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$deleteFile[file]\n")),(0,n.kt)("h3",d({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"file"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The path to the file which is to be deleted"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add",\n  code: `\n  $deleteFile[./src/data.txt]\n  `\n}); // Deletes the data.txt file present in src folder\n')))}k.isMDXComponent=!0}}]);