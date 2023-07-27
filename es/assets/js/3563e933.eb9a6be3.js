"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26139],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>y,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&u(e,t,n[t]);if(s)for(var t of s(n))c.call(n,t)&&u(e,t,n[t]);return e},p=(e,n)=>a(e,l(n)),m=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&s)for(var r of s(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$onlyForChannels",description:"$onlyForChannels comprobar\xe1 si el comando fue ejecutado en uno de los canales listados y devolver\xe1 un mensaje de error en caso contrario.",id:"onlyForChannels"},y=void 0,v={unversionedId:"functions/util-related/onlyForChannels",id:"version-6.4.0/functions/util-related/onlyForChannels",title:"$onlyForChannels",description:"$onlyForChannels comprobar\xe1 si el comando fue ejecutado en uno de los canales listados y devolver\xe1 un mensaje de error en caso contrario.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/onlyForChannels.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/onlyForChannels",permalink:"/es/docs/functions/util-related/onlyForChannels",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$onlyForChannels",description:"$onlyForChannels comprobar\xe1 si el comando fue ejecutado en uno de los canales listados y devolver\xe1 un mensaje de error en caso contrario.",id:"onlyForChannels"},sidebar:"docs",previous:{title:"$onlyForCategories",permalink:"/es/docs/functions/util-related/onlyForCategories"},next:{title:"$onlyForGuilds",permalink:"/es/docs/functions/util-related/onlyForGuilds"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:g},k="wrapper";function O(e){var n=e,{components:t}=n,o=m(n,["components"]);return(0,r.kt)(k,p(d(d({},h),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$onlyForChannels")," comprobar\xe1 si el comando fue ejecutado en uno de los canales listados y devolver\xe1 un mensaje de error si no."),(0,r.kt)("h2",d({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$onlyForChannels[...categoryIds;error]\n")),(0,r.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"...canalIds"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string, integer"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Canales a los que quieres limitar el comando."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"error"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Error a devolver cuando el comando no fue ejecutado en ninguno de los canales listados."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")))),(0,r.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto limitar\xe1 el comando s\xf3lo a los canales listados:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "onlyForChannels",\n    code: `\n    Ok.\n    $onlyForChannels[channelID;channelID;You can\'t use that command here!]\n    `\n});\n')))}O.isMDXComponent=!0}}]);