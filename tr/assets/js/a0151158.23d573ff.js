"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},s=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$mentioned",description:"$mentioned will return the ID of an user of the mention.",id:"mentioned"},y=void 0,g={unversionedId:"functions/util-related/mentioned",id:"version-6.4.0/functions/util-related/mentioned",title:"$mentioned",description:"$mentioned will return the ID of an user of the mention.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/mentioned.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentioned",permalink:"/tr/docs/functions/util-related/mentioned",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 Tem 2023",frontMatter:{title:"$mentioned",description:"$mentioned will return the ID of an user of the mention.",id:"mentioned"},sidebar:"docs",previous:{title:"$mentionType",permalink:"/tr/docs/functions/util-related/mentionType"},next:{title:"$mentionedChannels",permalink:"/tr/docs/functions/util-related/mentionedChannels"}},b={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:h},k="wrapper";function O(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(k,s(m(m({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentioned")," will return the ID of an user of the mention."),(0,r.kt)("h2",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$mentioned[index;returnSelf?]\n")),(0,r.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"index"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The index of the argument."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"returnSelf?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Return the author's ID if user was not found."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the ID of the ",(0,r.kt)("strong",{parentName:"p"},"first")," mention if you attempt to mention someone in this command, or else it will return your ID:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentioned',\n    code: `\n  $mentioned[1;true]\n  `\n});\n")))}O.isMDXComponent=!0}}]);