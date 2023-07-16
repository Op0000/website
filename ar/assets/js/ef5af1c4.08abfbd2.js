"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66365],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||s[f]||o;return t?n.createElement(m,l(l({ref:r},d),{},{components:t})):n.createElement(m,l({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1569:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>b,toc:()=>y});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&d(e,t,r[t]);return e},s=(e,r)=>o(e,l(r)),f=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$handleError",description:"$handleError will return information about an occurred error.",id:"handleError"},h=void 0,b={unversionedId:"functions/event-related/handleError",id:"version-6.4.0/functions/event-related/handleError",title:"$handleError",description:"$handleError will return information about an occurred error.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/handleError.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/handleError",permalink:"/ar/docs/functions/event-related/handleError",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$handleError",description:"$handleError will return information about an occurred error.",id:"handleError"},sidebar:"docs",previous:{title:"$channelUsed",permalink:"/ar/docs/functions/event-related/channelUsed"},next:{title:"$interactionData",permalink:"/ar/docs/functions/event-related/interactionData"}},v={},y=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],g={toc:y},k="wrapper";function O(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.kt)(k,s(p(p({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$handleError")," will return information about an occurred error."),(0,n.kt)("h2",p({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$handleError[option]\n")),(0,n.kt)("h2",p({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"What to return the data of. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"function")," - function name ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"command")," - command name ",(0,n.kt)("br",null)," 3. ",(0,n.kt)("strong",{parentName:"td"},"error")," - error that occurred"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",p({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You require ",(0,n.kt)("inlineCode",{parentName:"strong"},'events: ["onFunctionError"]')," in your main file in order to use this function!")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.functionErrorCommand({\n    channel: "channelID (optional)",\n    code: `Something went wrong in your "$handleError[command]" command! The function "$handleError[function]" returned the error "$handleError[error]"!`\n});\n')))}O.isMDXComponent=!0}}]);