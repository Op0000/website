"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[69654],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=c(r),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||l;return r?n.createElement(m,i(i({ref:e},u),{},{components:r})):n.createElement(m,i({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62158:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>g});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&u(t,r,e[r]);if(o)for(var r of o(e))c.call(e,r)&&u(t,r,e[r]);return t},d=(t,e)=>l(t,i(e)),f=(t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&c.call(t,n)&&(r[n]=t[n]);return r};const m={title:"$textSplitMap",description:"$textSplitMap will create a loop over all values that are stored within $textSplit",id:"textSplitMap"},v=void 0,y={unversionedId:"functions/util-related/textSplitMap",id:"version-6.4.0/functions/util-related/textSplitMap",title:"$textSplitMap",description:"$textSplitMap will create a loop over all values that are stored within $textSplit",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/textSplitMap.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/textSplitMap",permalink:"/ar/docs/functions/util-related/textSplitMap",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$textSplitMap",description:"$textSplitMap will create a loop over all values that are stored within $textSplit",id:"textSplitMap"},sidebar:"docs",previous:{title:"$textSplit",permalink:"/ar/docs/functions/util-related/textSplit"},next:{title:"$textTrim",permalink:"/ar/docs/functions/util-related/textTrim"}},b={},g=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],x={toc:g},O="wrapper";function h(t){var e=t,{components:r}=e,a=f(e,["components"]);return(0,n.kt)(O,d(s(s({},x),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$textSplitMap")," will create a loop over all values that are stored within $textSplit."),(0,n.kt)("h2",s({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$textSplit[awaited]\n")),(0,n.kt)("h2",s({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"awaited"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Name of the awaited command."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",s({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,n.kt)("p",null,"This will return the arguments within ",(0,n.kt)("inlineCode",{parentName:"p"},"$textSplit")," and send all of them separately:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "textSplitMap",\n    code: `\n    $textSplitMap[devs]\n    $textSplit[Ayaka,Leref,Ferel,Blurr;,]\n    `\n});\n\nbot.awaitedCommand({\n    name: "devs",\n    code: `\n    $message[1]\n    `\n});\n')))}h.isMDXComponent=!0}}]);