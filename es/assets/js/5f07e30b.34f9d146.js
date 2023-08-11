"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=o,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>x,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>a(e,i(t)),g=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$getTextSplitLength",description:"$getTextSplitLength devolver\xe1 la cantidad de argumentos dados.",id:"getTextSplitLength"},m=void 0,v={unversionedId:"functions/util-related/getTextSplitLength",id:"version-6.4.0/functions/util-related/getTextSplitLength",title:"$getTextSplitLength",description:"$getTextSplitLength devolver\xe1 la cantidad de argumentos dados.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/getTextSplitLength.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/getTextSplitLength",permalink:"/es/docs/functions/util-related/getTextSplitLength",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$getTextSplitLength",description:"$getTextSplitLength devolver\xe1 la cantidad de argumentos dados.",id:"getTextSplitLength"},sidebar:"docs",previous:{title:"$get",permalink:"/es/docs/functions/util-related/get"},next:{title:"$guildRoleIconURL",permalink:"/es/docs/functions/util-related/guildRoleIconURL"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:b},h="wrapper";function x(e){var t=e,{components:n}=t,o=g(t,["components"]);return(0,r.kt)(h,u(d(d({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getTextSplitLength")," devolver\xe1 la cantidad de argumentos divididos en ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSplit"),"."),(0,r.kt)("h2",d({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$getTextSplitLength\n")),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," ya que hay cinco argumentos separados por comas dadas en ",(0,r.kt)("inlineCode",{parentName:"p"},"$textSplit")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getTextSplitLength',\n    code: `\n  $getTextSplitLength\n  $textSplit[Hello, my, name, is, Leref;, ]\n  `\n});\n")))}x.isMDXComponent=!0}}]);