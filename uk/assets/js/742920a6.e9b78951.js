"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,y=p["".concat(u,".").concat(f)]||p[f]||s[f]||o;return r?a.createElement(y,l(l({ref:t},d),{},{components:r})):a.createElement(y,l({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>y,metadata:()=>O,toc:()=>k});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&d(e,r,t[r]);return e},s=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const y={title:"$arrayLastIndexOf",description:"$arrayLastIndexOf will return the index of the last found item of the query.",id:"arrayLastIndexOf"},m=void 0,O={unversionedId:"functions/array-related/arrayLastIndexOf",id:"version-6.4.0/functions/array-related/arrayLastIndexOf",title:"$arrayLastIndexOf",description:"$arrayLastIndexOf will return the index of the last found item of the query.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayLastIndexOf.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayLastIndexOf",permalink:"/uk/docs/functions/array-related/arrayLastIndexOf",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$arrayLastIndexOf",description:"$arrayLastIndexOf will return the index of the last found item of the query.",id:"arrayLastIndexOf"},sidebar:"docs",previous:{title:"$arrayJoin",permalink:"/uk/docs/functions/array-related/arrayJoin"},next:{title:"$arrayLength",permalink:"/uk/docs/functions/array-related/arrayLength"}},b={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],g={toc:k},v="wrapper";function h(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,a.kt)(v,s(p(p({},g),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayLastIndexOf")," will return the index of the last found item of the query."),(0,a.kt)("h2",p({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$arrayLastIndexOf[name;query]\n")),(0,a.kt)("h2",p({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0441\u0438\u0432\u0443."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0437\u0430\u043f\u0438\u0442"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u0415\u043b\u0435\u043c\u0435\u043d\u0442, \u044f\u043a\u0438\u0439 \u043c\u0438 \u0431\u0443\u0434\u0435\u043c\u043e \u0448\u0443\u043a\u0430\u0442\u0438 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u043c\u0430\u0441\u0438\u0432\u0443."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,a.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-indexof",\n    code: `\n  $arrayLastIndexOf[array;akarui]\n  $createArray[array;aoi.js;akarui;akarui;documents;bot]\n  `\n    // It will return "3" as the word "akarui" is in the 3rd position of the array.\n});\n')))}h.isMDXComponent=!0}}]);