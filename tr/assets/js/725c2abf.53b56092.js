"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),u=a,m=p["".concat(s,".").concat(u)]||p[u]||f[u]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>i(e,l(t)),u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$addFilter",description:"Adds filter(s) to playing track(s).",id:"addfilter"},k=void 0,g={unversionedId:"functions/addfilter",id:"version-5.5.5/functions/addfilter",title:"$addFilter",description:"Adds filter(s) to playing track(s).",source:"@site/versioned_docs/version-5.5.5/functions/addfilter.md",sourceDirName:"functions",slug:"/functions/addfilter",permalink:"/tr/docs/5.5.5/functions/addfilter",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$addFilter",description:"Adds filter(s) to playing track(s).",id:"addfilter"},sidebar:"docs",previous:{title:"$addFields",permalink:"/tr/docs/5.5.5/functions/addfields"},next:{title:"$addMessageReactions",permalink:"/tr/docs/5.5.5/functions/addmessagereactions"}},y={},v=[{value:"Usage",id:"usage",level:2},{value:"Fields",id:"fields",level:2},{value:"Notice",id:"notice",level:2},{value:"Examples",id:"examples",level:2},{value:"Custom Filter",id:"custom-filter",level:2},{value:"Information",id:"information",level:2}],b={toc:v},h="wrapper";function O(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(h,f(p(p({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$addFilter")," adds the given filter(s) to track, removes the settled filters."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Requires ",(0,n.kt)("inlineCode",{parentName:"p"},"@akarui/aoi.music")," package.")),(0,n.kt)("h2",p({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addFilter[filters]\n\n")),(0,n.kt)("h2",p({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"filters"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"The filters will be added to track"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h2",p({},{id:"notice"}),"Notice"),(0,n.kt)("p",null,"To know other filters as well, please check ",(0,n.kt)("a",p({parentName:"p"},{href:"https://ffmpeg.org/ffmpeg-filters.html"}),"FFmpeg filters"),"."),(0,n.kt)("h2",p({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"We already made a ",(0,n.kt)("inlineCode",{parentName:"p"},"nightcore")," filter for you, so you can use it like this."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "filter-nightcore",\n  code: `\n  $let[filter;$addFilter[{"nightcore": 1.10}]]\n  `\n});\n')),(0,n.kt)("h2",p({},{id:"custom-filter"}),"Custom Filter"),(0,n.kt)("p",null,"For a custom filter from ffmpeg."),(0,n.kt)("p",null,"This will make the track like 8D."),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "filter-custom",\n  code: `\n  8D audio: on!\n  $let[filter;$addFilter[{"aecho": "1.0:0.8:50:0.5"}]]\n  `\n});\n')),(0,n.kt)("h2",p({},{id:"information"}),"Information"),(0,n.kt)("p",null,"We used ",(0,n.kt)("inlineCode",{parentName:"p"},"$let")," function on there, due to ",(0,n.kt)("inlineCode",{parentName:"p"},"$addFilter")," function returns as a message of the song."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$let")," function can be used as a trick in those circumstances."))}O.isMDXComponent=!0}}]);