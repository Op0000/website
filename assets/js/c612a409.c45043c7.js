"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96171],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67335:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>h});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&c(e,a,t[a]);return e},d=(e,t)=>l(e,i(t)),m=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$setChannelVar",description:"$setChannelVar will change the value of a given channel variable.",id:"setChannelVar"},v=void 0,b={unversionedId:"functions/variables-related/setChannelVar",id:"version-6.4.0/functions/variables-related/setChannelVar",title:"$setChannelVar",description:"$setChannelVar will change the value of a given channel variable.",source:"@site/versioned_docs/version-6.4.0/functions/variables-related/setChannelVar.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/setChannelVar",permalink:"/docs/functions/variables-related/setChannelVar",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{title:"$setChannelVar",description:"$setChannelVar will change the value of a given channel variable.",id:"setChannelVar"},sidebar:"docs",previous:{title:"$resetUserVar",permalink:"/docs/functions/variables-related/resetUserVar"},next:{title:"$setGlobalUserVar",permalink:"/docs/functions/variables-related/setGlobalUserVar"}},g={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:h},k="wrapper";function O(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(k,d(u(u({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$setChannelVar")," will change the value of a given channel variable."),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$setChannelVar[varname;value;channelID?;table?]\n")),(0,n.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"varname"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Variable name."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"value"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"New Variable value."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"channelID?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Channel ID."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"table?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Variable table."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,'This will change the value of "Example" to "This is a value":'),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "setChannelVar",\n    code: `\n    $setChannelVar[Example;This is a value;$channelID;main]\n    `\n});\n')))}O.isMDXComponent=!0}}]);