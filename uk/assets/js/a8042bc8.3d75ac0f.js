"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(o,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$appendFile",description:"$appendFile will add given text to a specific file.",id:"appendFile"},g=void 0,y={unversionedId:"functions/misc-related/appendFile",id:"version-6.4.0/functions/misc-related/appendFile",title:"$appendFile",description:"$appendFile will add given text to a specific file.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/appendFile.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/appendFile",permalink:"/uk/docs/functions/misc-related/appendFile",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691131617,formattedLastUpdatedAt:"4 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$appendFile",description:"$appendFile will add given text to a specific file.",id:"appendFile"},sidebar:"docs",previous:{title:"$advancedTextSplit",permalink:"/uk/docs/functions/misc-related/advancedTextSplit"},next:{title:"$argsCount",permalink:"/uk/docs/functions/misc-related/argsCount"}},b={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:k},O="wrapper";function N(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,u(s(s({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$appendFile")," will add given text to a specific file."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$appendFile[path;content;encode?]\n")),(0,r.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"path"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"File location."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"content"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string, number"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Content to append to the file"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"encode?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Encode type ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"utf8")," (default)"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will add a comment to your main file:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'appendFile',\n    code: `\n  $appendFile[./index.js;// Hello!]\n  `\n});\n")))}N.isMDXComponent=!0}}]);