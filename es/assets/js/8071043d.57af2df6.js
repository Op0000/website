"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[51680],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},59995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>j,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&l(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&l(e,t,n[t]);return e},u=(e,n)=>o(e,c(n)),f=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$packageDependencies",description:"$packageDependencies devolver\xe1 las dependencias del paquete de aoi.js.",id:"packageDependencies"},g=void 0,v={unversionedId:"functions/misc-related/packageDependencies",id:"version-6.4.0/functions/misc-related/packageDependencies",title:"$packageDependencies",description:"$packageDependencies devolver\xe1 las dependencias del paquete de aoi.js.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/packageDependencies.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/packageDependencies",permalink:"/es/docs/functions/misc-related/packageDependencies",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$packageDependencies",description:"$packageDependencies devolver\xe1 las dependencias del paquete de aoi.js.",id:"packageDependencies"},sidebar:"docs",previous:{title:"$nodeVersion",permalink:"/es/docs/functions/misc-related/nodeVersion"},next:{title:"$packageVersion",permalink:"/es/docs/functions/misc-related/packageVersion"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:b},O="wrapper";function j(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(O,u(d(d({},k),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$packageDependencies")," retornar\xe1 las dependencias del paquete de aoi.js."),(0,r.kt)("h2",d({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$packageDependencies\n")),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 las dependencias del paquete de aoi.js:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "packageDependencies",\n    code: `\n    $packageDependencies\n    ` // Debe devolver "@akarui/aoi.db, axios, discord-api-types, discord.js, undici"\n});\n')))}j.isMDXComponent=!0}}]);