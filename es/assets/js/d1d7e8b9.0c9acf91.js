"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[85770],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},43402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>h,frontMatter:()=>d,metadata:()=>v,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const d={title:"$ram",description:"returns the memory usage in MB"},y=void 0,v={unversionedId:"functions/ram",id:"version-5.5.5/functions/ram",title:"$ram",description:"returns the memory usage in MB",source:"@site/versioned_docs/version-5.5.5/functions/ram.md",sourceDirName:"functions",slug:"/functions/ram",permalink:"/es/docs/5.5.5/functions/ram",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$ram",description:"returns the memory usage in MB"},sidebar:"docs",previous:{title:"$queueStatus",permalink:"/es/docs/5.5.5/functions/queuestatus"},next:{title:"$random",permalink:"/es/docs/5.5.5/functions/random"}},b={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Types",id:"types",level:4},{value:"Usage",id:"usage",level:4}],O={toc:g},k="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(k,m(c(c({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the memory usage in Megabyte. "),(0,n.kt)("h4",c({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 field"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Type ","(","Optional",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$ram[type (optional)]")),(0,n.kt)("h4",c({},{id:"options"}),"Options"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Type - The ram usage type")),(0,n.kt)("h4",c({},{id:"types"}),"Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"rss - Process memory usage (default)"),(0,n.kt)("li",{parentName:"ul"},"heapTotal - Memory allocated to javascript"),(0,n.kt)("li",{parentName:"ul"},"heapUsed - Amount of memory used by javascript"),(0,n.kt)("li",{parentName:"ul"},"external - Amount of memory used by nodejs (only) including arrayBuffers"),(0,n.kt)("li",{parentName:"ul"},"arrayBuffers - Amount of memory used by ArrayBuffer, TypedArray, and Buffer")),(0,n.kt)("h4",c({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "memory", \ncode: `\nMemory usage: $ram` //Ex: Returns 64.83941650390625\n})\n')))}h.isMDXComponent=!0}}]);