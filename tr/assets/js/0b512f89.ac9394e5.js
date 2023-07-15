"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[72346],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78271:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>w,frontMatter:()=>d,metadata:()=>y,toc:()=>O});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&p(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&p(e,t,r[t]);return e},f=(e,r)=>o(e,i(r)),m=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const d={title:"$serverNames"},v=void 0,y={unversionedId:"functions/servernames",id:"version-5.5.5/functions/servernames",title:"$serverNames",description:"This function returns all the names of the servers the bot is in.",source:"@site/versioned_docs/version-5.5.5/functions/servernames.md",sourceDirName:"functions",slug:"/functions/servernames",permalink:"/tr/docs/5.5.5/functions/servernames",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$serverNames"},sidebar:"docs",previous:{title:"$serverName",permalink:"/tr/docs/5.5.5/functions/servername"},next:{title:"$serverPerferredLocale",permalink:"/tr/docs/5.5.5/functions/serverperferredlocale"}},b={},O=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage without optional field.",id:"usage-without-optional-field",level:4},{value:"Usage with optional field.",id:"usage-with-optional-field",level:4}],g={toc:O},h="wrapper";function w(e){var r=e,{components:t}=r,a=m(r,["components"]);return(0,n.kt)(h,f(u(u({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns all the names of the servers the bot is in."),(0,n.kt)("h4",u({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 1 optional field."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Separator ","(","Optional",")")),(0,n.kt)("p",null,"Raw usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$serverNames[Separator (Optional)]")),(0,n.kt)("h4",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Separator - Separator in between the server names.")),(0,n.kt)("h4",u({},{id:"usage-without-optional-field"}),"Usage without optional field."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "servers",\n    code: `Server names: $serverNames`\n    //will return: serverName,serverName,serveName,etc\n})\n')),(0,n.kt)("h4",u({},{id:"usage-with-optional-field"}),"Usage with optional field."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "servers",\n    code: `Server names: $serverNames[ / ]`\n    // Will return: serverName / serverName / etc\n})\n')))}w.isMDXComponent=!0}}]);