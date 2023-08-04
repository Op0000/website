"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57552],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74726:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&p(e,t,r[t]);if(s)for(var t of s(r))c.call(r,t)&&p(e,t,r[t]);return e},u=(e,r)=>o(e,l(r)),f=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$respawnAllShards",description:"$respawnAllShards reaparecer\xe1 todos los fragmentos.",id:"respawnAllShards"},y=void 0,b={unversionedId:"functions/interaction-related/respawnAllShards",id:"version-6.4.0/functions/interaction-related/respawnAllShards",title:"$respawnAllShards",description:"$respawnAllShards reaparecer\xe1 todos los fragmentos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/respawnAllShards.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/respawnAllShards",permalink:"/es/docs/functions/interaction-related/respawnAllShards",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691131617,formattedLastUpdatedAt:"4 ago 2023",frontMatter:{title:"$respawnAllShards",description:"$respawnAllShards reaparecer\xe1 todos los fragmentos.",id:"respawnAllShards"},sidebar:"docs",previous:{title:"$reply",permalink:"/es/docs/functions/interaction-related/reply"},next:{title:"$sendDm",permalink:"/es/docs/functions/interaction-related/sendDm"}},v={},g=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:g},w="wrapper";function h(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.kt)(w,u(d(d({},O),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$respawnAllShards")," reaparecer\xe1 todos los fragmentos. (requiere fragmentar)"),(0,n.kt)("h2",d({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$respawnAllShards\n")),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto reaparecer\xe1 todos los fragmentos (requiere fragmentar):"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'respawnAllShards',\n    code: `\n   $respawnAllShards\n  `\n});\n")))}h.isMDXComponent=!0}}]);