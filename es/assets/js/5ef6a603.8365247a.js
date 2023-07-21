"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67697],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=a,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p[c]="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},30072:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>b,default:()=>N,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&u(e,t,r[t]);if(p)for(var t of p(r))s.call(r,t)&&u(e,t,r[t]);return e},m=(e,r)=>o(e,l(r)),d=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$numberSeperator",description:"$numberSeparator separar\xe1 los n\xfameros y los har\xe1 legibles.",id:"numberSeperator"},b=void 0,y={unversionedId:"functions/util-related/numberSeperator",id:"version-6.4.0/functions/util-related/numberSeperator",title:"$numberSeperator",description:"$numberSeparator separar\xe1 los n\xfameros y los har\xe1 legibles.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/numberSeperator.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/numberSeperator",permalink:"/es/docs/functions/util-related/numberSeperator",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$numberSeperator",description:"$numberSeparator separar\xe1 los n\xfameros y los har\xe1 legibles.",id:"numberSeperator"},sidebar:"docs",previous:{title:"$nonEscape",permalink:"/es/docs/functions/util-related/nonEscape"},next:{title:"$onlyForCategories",permalink:"/es/docs/functions/util-related/onlyForCategories"}},g={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:v},O="wrapper";function N(e){var r=e,{components:t}=r,a=d(r,["components"]);return(0,n.kt)(O,m(c(c({},k),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$numberSeparator")," separar\xe1 los n\xfameros y los har\xe1 legibles."),(0,n.kt)("h2",c({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$numberSeparator[num;sep?]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"num"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"n\xfamero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"N\xfamero que desea separar."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"sep?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Separador que se utilizar\xe1 para separar los n\xfameros, por defecto: ",(0,n.kt)("inlineCode",{parentName:"td"},","),"."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 ",(0,n.kt)("inlineCode",{parentName:"p"},"1.000.000"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'numberSeparator',\n    code: `\n  $numberSeparator[1000000;,]\n  `\n});\n")))}N.isMDXComponent=!0}}]);