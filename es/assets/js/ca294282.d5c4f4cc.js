"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28235],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>y});var t=a(67294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=t.createContext({}),d=function(e){var r=t.useContext(c),a=r;return e&&(a="function"==typeof e?e(r):o(o({},r),e)),a},p=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,y=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return a?t.createElement(y,o(o({ref:r},p),{},{components:a})):t.createElement(y,o({ref:r},p))}));function y(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2967:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>k,toc:()=>b});var t=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,r,a)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,s=(e,r)=>{for(var a in r||(r={}))c.call(r,a)&&p(e,a,r[a]);if(i)for(var a of i(r))d.call(r,a)&&p(e,a,r[a]);return e},u=(e,r)=>l(e,o(r)),m=(e,r)=>{var a={};for(var t in e)c.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&i)for(var t of i(e))r.indexOf(t)<0&&d.call(e,t)&&(a[t]=e[t]);return a};const y={title:"$arrayFilter",description:"$arrayFilter va a revisar si un elemento del array cumple con la condici\xf3n y lo regresar\xe1.",id:"arrayFilter"},f=void 0,k={unversionedId:"functions/array-related/arrayFilter",id:"version-6.4.0/functions/array-related/arrayFilter",title:"$arrayFilter",description:"$arrayFilter va a revisar si un elemento del array cumple con la condici\xf3n y lo regresar\xe1.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayFilter.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayFilter",permalink:"/es/docs/functions/array-related/arrayFilter",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$arrayFilter",description:"$arrayFilter va a revisar si un elemento del array cumple con la condici\xf3n y lo regresar\xe1.",id:"arrayFilter"},sidebar:"docs",previous:{title:"$arrayEvery",permalink:"/es/docs/functions/array-related/arrayEvery"},next:{title:"$arrayFind",permalink:"/es/docs/functions/array-related/arrayFind"}},v={},b=[{value:"Uso",id:"uso",level:2},{value:"Parametros",id:"parametros",level:2},{value:"Operadores de comparaci\xf3n",id:"operadores-de-comparaci\xf3n",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:b},N="wrapper";function O(e){var r=e,{components:a}=r,n=m(r,["components"]);return(0,t.kt)(N,u(s(s({},g),n),{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"$arrayFilter")," va a revisar si un elemento del array cumple con la condici\xf3n y lo regresar\xe1."),(0,t.kt)("h2",s({},{id:"uso"}),"Uso"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayFilter[nombre;consulta;tipo de consulta?;separador?]\n")),(0,t.kt)("h2",s({},{id:"parametros"}),"Parametros"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,t.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,t.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,t.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",s({parentName:"tr"},{align:null}),"nombre"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"nombre de matriz"),(0,t.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadera")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"tipo de consulta"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"El elemento que estaremos consultando para cada elemento dentro de la matriz."),(0,t.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadera")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",s({parentName:"tr"},{align:null}),"tipo de consulta"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"El operador de comparaci\xf3n"),(0,t.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",s({parentName:"tr"},{align:null}),"separador?"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,t.kt)("td",s({parentName:"tr"},{align:null}),"Separador"),(0,t.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))),(0,t.kt)("h2",s({},{id:"operadores-de-comparaci\xf3n"}),"Operadores de comparaci\xf3n"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Cada elemento que coincida con la consulta."),(0,t.kt)("li",{parentName:"ul"},"!= \u2014 Cada elemento que no coincide con la consulta."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("blockquote",{parentName:"li"},(0,t.kt)("p",{parentName:"blockquote"},'\u2014 Todos los elementos a la "izquierda" del elemento encontrado, excepto \xe9l mismo.'))),(0,t.kt)("li",{parentName:"ul"},'< \u2014Todos los elementos a la "derecha" del elemento encontrado, excluy\xe9ndose a s\xed mismo.'),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("blockquote",{parentName:"li"},(0,t.kt)("p",{parentName:"blockquote"},'= \u2014 Todos los elementos a la "izquierda" del elemento encontrado, incluido \xe9l mismo.'))),(0,t.kt)("li",{parentName:"ul"},'<= \u2014 Todos los elementos a la "derecha" del elemento encontrado, incluido \xe9l mismo.')),(0,t.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-filter",\n    code: `\n  $arrayFilter[array;akarui;==;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n// Devolver\xe1 "akarui" ya que coincide con la consulta.\n});\n')),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-filter",\n    code: `\n  $arrayFilter[array;akarui;<=;, ]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n// Devolver\xe1 "documents, bot" ya que est\xe1 a la derecha del elemento encontrado.\n\n});\n')))}O.isMDXComponent=!0}}]);