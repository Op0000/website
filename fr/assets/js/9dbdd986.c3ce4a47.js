"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>j,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$moveUser",description:"Moves a user to selected channel"},v=void 0,y={unversionedId:"functions/moveuser",id:"version-5.5.5/functions/moveuser",title:"$moveUser",description:"Moves a user to selected channel",source:"@site/versioned_docs/version-5.5.5/functions/moveuser.md",sourceDirName:"functions",slug:"/functions/moveuser",permalink:"/fr/docs/5.5.5/functions/moveuser",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$moveUser",description:"Moves a user to selected channel"},sidebar:"docs",previous:{title:"$moveSong",permalink:"/fr/docs/5.5.5/functions/movesong"},next:{title:"$msg",permalink:"/fr/docs/5.5.5/functions/msg"}},b={},O=[],g={toc:O},h="wrapper";function j(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(h,f(u(u({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will make the bot move a user from the current voice channel to the selected voice chat using the channel ID."),(0,r.kt)("p",null,"This function has 3 fields:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Channel ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Reason ","(","Optional",")")),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$moveUser[User ID;Channel ID;Reason (Optional)]")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "move",\n    code: `\n    Moved!\n    $moveUser[278342221202194434;778626945209991170]\n    `\n})\n')))}j.isMDXComponent=!0}}]);