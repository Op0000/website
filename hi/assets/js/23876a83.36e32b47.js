"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33631],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),s=n,y=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},61178:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>N,frontMatter:()=>y,metadata:()=>h,toc:()=>g});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>l(e,i(t)),s=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r};const y={title:"$arrayFilter",description:"$arrayFilter will check whether a element in the array equals the query and return it.",id:"arrayFilter"},f=void 0,h={unversionedId:"functions/array-related/arrayFilter",id:"version-6.4.0/functions/array-related/arrayFilter",title:"$arrayFilter",description:"$arrayFilter will check whether a element in the array equals the query and return it.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayFilter.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayFilter",permalink:"/hi/docs/functions/array-related/arrayFilter",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$arrayFilter",description:"$arrayFilter will check whether a element in the array equals the query and return it.",id:"arrayFilter"},sidebar:"docs",previous:{title:"$arrayEvery",permalink:"/hi/docs/functions/array-related/arrayEvery"},next:{title:"$arrayFind",permalink:"/hi/docs/functions/array-related/arrayFind"}},k={},g=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"Comparison Operators",id:"comparison-operators",level:2},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2}],b={toc:g},v="wrapper";function N(e){var t=e,{components:r}=t,n=s(t,["components"]);return(0,a.kt)(v,d(m(m({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayFilter")," will check whether a element in the array equals the query and return it."),(0,a.kt)("h2",m({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$arrayFilter[name;query;queryType?;separator?]\n")),(0,a.kt)("h2",m({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Array name."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"query"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The element we will be queering for every element inside the array."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"queryType?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"The comparison operator."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"separator?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Separator."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")))),(0,a.kt)("h2",m({},{id:"comparison-operators"}),"Comparison Operators"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Every item that matches the query."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!=")," \u2014 Every item that doesn't match the query."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">"),'  \u2014 All items on the "left" of the found item, excluding itself.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<"),'  \u2014 All items on the "right" of the found item, excluding itself.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">="),' \u2014 All items on the "left" of the found item, including itself.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<="),' \u2014 All items on the "right" of the found item, including itself.')),(0,a.kt)("h2",m({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-filter",\n    code: `\n  $arrayFilter[array;akarui;==;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // It will return "akarui" as it matches the query.\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-filter",\n    code: `\n  $arrayFilter[array;akarui;<=;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n    // It will return "documents, bot" as its on the right of the found item.\n});\n')))}N.isMDXComponent=!0}}]);