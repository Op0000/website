"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94878],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,u=m["".concat(o,".").concat(f)]||m[f]||c[f]||i;return r?n.createElement(u,l(l({ref:t},p),{},{components:r})):n.createElement(u,l({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:a,l[1]=d;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>O,frontMatter:()=>u,metadata:()=>g,toc:()=>k});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))s.call(t,r)&&p(e,r,t[r]);return e},c=(e,t)=>i(e,l(t)),f=(e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const u={title:"$addFields",description:"Adds fields to embed message.",id:"addfields"},b=void 0,g={unversionedId:"functions/addfields",id:"version-5.5.5/functions/addfields",title:"$addFields",description:"Adds fields to embed message.",source:"@site/versioned_docs/version-5.5.5/functions/addfields.md",sourceDirName:"functions",slug:"/functions/addfields",permalink:"/hi/docs/5.5.5/functions/addfields",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$addFields",description:"Adds fields to embed message.",id:"addfields"},sidebar:"docs",previous:{title:"$addField",permalink:"/hi/docs/5.5.5/functions/addfield"},next:{title:"$addFilter",permalink:"/hi/docs/5.5.5/functions/addfilter"}},y={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Embed Limits",id:"embed-limits",level:2},{value:"Example",id:"example",level:2}],v={toc:k},N="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(N,c(m(m({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$addFields")," allows you to add a field to in embed message."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$addFields[index:name:text:inline?;...]\n")),(0,n.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"index"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The embed's index"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"name"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The field's title"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"text"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The field's description"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"inline"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"For the field be in line or not"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"boolean"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",m({},{id:"embed-limits"}),"Embed Limits"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Field Limit: 25 Fields"),(0,n.kt)("li",{parentName:"ul"},"Field Name Limit: 256 Characters"),(0,n.kt)("li",{parentName:"ul"},"Field Text Limit: 1024 Characters"))),(0,n.kt)("h2",m({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-fields",\n  code: `\n  $addFields[1;My name:My name is Neo.:yes;My Age:I\'m 20 years old.;My Gender:Male.:yes]\n  `\n});\n')))}O.isMDXComponent=!0}}]);