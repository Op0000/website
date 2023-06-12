"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,v=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(v,i(i({ref:t},c),{},{components:n})):o.createElement(v,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"$eval",description:"Eval your Code, useful for debugging."},i=void 0,l={unversionedId:"functions/eval",id:"version-5.5.5/functions/eval",title:"$eval",description:"Eval your Code, useful for debugging.",source:"@site/versioned_docs/version-5.5.5/functions/eval.md",sourceDirName:"functions",slug:"/functions/eval",permalink:"/docs/5.5.5/functions/eval",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686576749,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"$eval",description:"Eval your Code, useful for debugging."},sidebar:"docs",previous:{title:"$error",permalink:"/docs/5.5.5/functions/error"},next:{title:"$exec",permalink:"/docs/5.5.5/functions/exec"}},u={},s=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4},{value:"Without the optional fiels",id:"without-the-optional-fiels",level:4},{value:"With the optional field:",id:"with-the-optional-field",level:4}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function evals the given Aoi.js code so you can use functions manually inside a command without creating a new command for it."),(0,r.kt)("p",null,"You should restrict the use of this function to yourself"),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("p",null,"This function has 1 required field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Code ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Return Code ","(","Optional",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$eval[code;return code (yes/no)(optional)]")),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code - The Aoi.js code we're evaling"),(0,r.kt)("li",{parentName:"ul"},"Return Code - Returns the output of the code")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("h4",{id:"without-the-optional-fiels"},"Without the optional fiels"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "eval",\ncode: `\n$eval[$message]\n`\n})\n')),(0,r.kt)("h4",{id:"with-the-optional-field"},"With the optional field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "eval",\ncode: `\n$eval[$message;yes]\n`\n})\n')))}p.isMDXComponent=!0}}]);