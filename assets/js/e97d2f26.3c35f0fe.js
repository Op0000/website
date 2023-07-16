"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[10200],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>j,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&d(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$addReactions",description:"Add reactions to bot's message.",id:"addreactions"},b=void 0,y={unversionedId:"functions/addreactions",id:"version-5.5.5/functions/addreactions",title:"$addReactions",description:"Add reactions to bot's message.",source:"@site/versioned_docs/version-5.5.5/functions/addreactions.md",sourceDirName:"functions",slug:"/functions/addreactions",permalink:"/docs/5.5.5/functions/addreactions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$addReactions",description:"Add reactions to bot's message.",id:"addreactions"},sidebar:"docs",previous:{title:"$addObjectProperty",permalink:"/docs/5.5.5/functions/addobjectproperty"},next:{title:"$addSelectMenu",permalink:"/docs/5.5.5/functions/addselectmenu"}},g={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],O={toc:v},k="wrapper";function j(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(k,u(p(p({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$addReactions")," allows to add reactions to bot's response."),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addReactions[emoji;...]\n")),(0,n.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"emoji"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"The emoji going to be reacted on bot's response"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"string")))),(0,n.kt)("h2",p({},{id:"example"}),"Example"),(0,n.kt)("p",null,"This will add a reaction to bot's response."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-reactions",\n  code: `\n  $addReactions[\ud83c\udf38;\ud83c\udf3a]\n  \n  Hi, take a flower.\n  `\n});\n')))}j.isMDXComponent=!0}}]);