"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50652],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>y,default:()=>w,frontMatter:()=>d,metadata:()=>g,toc:()=>v});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&u(e,t,n[t]);if(s)for(var t of s(n))l.call(n,t)&&u(e,t,n[t]);return e},f=(e,n)=>a(e,i(n)),m=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$noMentionMessage",description:"Returns user message without any mentions"},y=void 0,g={unversionedId:"functions/nomentionmessage",id:"version-5.5.5/functions/nomentionmessage",title:"$noMentionMessage",description:"Returns user message without any mentions",source:"@site/versioned_docs/version-5.5.5/functions/nomentionmessage.md",sourceDirName:"functions",slug:"/functions/nomentionmessage",permalink:"/hi/docs/5.5.5/functions/nomentionmessage",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$noMentionMessage",description:"Returns user message without any mentions"},sidebar:"docs",previous:{title:"$noEscapingMessage",permalink:"/hi/docs/5.5.5/functions/noescapingmessage"},next:{title:"$numberSeparator",permalink:"/hi/docs/5.5.5/functions/numberseparator"}},b={},v=[],O={toc:v},h="wrapper";function w(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(h,f(p(p({},O),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the author's message while removing any mentions"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "noMentionMessage",\ncode: `Your Message: $noMentionMessage`\n})\n/*\nIf i say "Hello @kubaturi"\nthe bot responds with "Hello"\n\n*/\n')))}w.isMDXComponent=!0}}]);