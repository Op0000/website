"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1402],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},34019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(l)for(var t of l(n))p.call(n,t)&&s(e,t,n[t]);return e},d=(e,n)=>a(e,i(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$ordinal"},y=void 0,b={unversionedId:"functions/ordinal",id:"version-5.5.5/functions/ordinal",title:"$ordinal",description:"This function adds st,nd,rd,th to the end of a number",source:"@site/versioned_docs/version-5.5.5/functions/ordinal.md",sourceDirName:"functions",slug:"/functions/ordinal",permalink:"/tr/docs/5.5.5/functions/ordinal",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$ordinal"},sidebar:"docs",previous:{title:"$onlyPerms",permalink:"/tr/docs/5.5.5/functions/onlyperms"},next:{title:"$ownerID",permalink:"/tr/docs/5.5.5/functions/ownerid"}},v={},O=[{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4}],g={toc:O},h="wrapper";function k(e){var n=e,{components:t}=n,o=f(n,["components"]);return(0,r.kt)(h,d(u(u({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function adds ",(0,r.kt)("inlineCode",{parentName:"p"},"st"),",",(0,r.kt)("inlineCode",{parentName:"p"},"nd"),",",(0,r.kt)("inlineCode",{parentName:"p"},"rd"),",",(0,r.kt)("inlineCode",{parentName:"p"},"th")," to the end of a number"),(0,r.kt)("h4",u({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"This function has 1 field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Content ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$ordinal[content]")),(0,r.kt)("h4",u({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Content - The content the function is adding the suffix to")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "ordinal",\ncode: `\n$ordinal[23]\n`\n})\n//Would return 23rd\n\n//Specified number\n\nbot.command({\nname: "ordinal",\ncode: `\n$ordinal[$message]\n`\n})\n\n//Returns undefined if <content> isn\'t number\n')))}k.isMDXComponent=!0}}]);