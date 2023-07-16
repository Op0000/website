"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>x,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>i(e,l(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$textSlice"},y=void 0,v={unversionedId:"functions/textslice",id:"version-5.5.5/functions/textslice",title:"$textSlice",description:"This function slices the given text to return sliced message from X, or X & Y",source:"@site/versioned_docs/version-5.5.5/functions/textslice.md",sourceDirName:"functions",slug:"/functions/textslice",permalink:"/docs/5.5.5/functions/textslice",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{title:"$textSlice"},sidebar:"docs",previous:{title:"$textInputValue",permalink:"/docs/5.5.5/functions/textinputvalue"},next:{title:"$textSplit",permalink:"/docs/5.5.5/functions/textsplit"}},b={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:g},h="wrapper";function x(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(h,f(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function slices the given text to return sliced message from X, or X & Y"),(0,r.kt)("h4",u({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 2 required fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"X ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Y ","(","Optional",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSlice[text;x;y (optional)]")),(0,r.kt)("h4",u({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Text - The we're slicing"),(0,r.kt)("li",{parentName:"ul"},"X - The first argument of the slice"),(0,r.kt)("li",{parentName:"ul"},"Y - The second argument of the slice")),(0,r.kt)("h4",u({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"Without optional field"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "slice",\ncode: `$textSlice[hello bye goodbye hi;3]`\n})\n')),(0,r.kt)("p",null,"With optional field"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "slice",\ncode: `$textSlice[hello bye goodbye hi;1;3]`\n})\n')))}x.isMDXComponent=!0}}]);