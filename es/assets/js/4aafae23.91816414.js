"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14175],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(g,o(o({ref:t},s),{},{components:a})):r.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>h,frontMatter:()=>g,metadata:()=>k,toc:()=>b});var r=a(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&s(e,a,t[a]);return e},d=(e,t)=>l(e,o(t)),u=(e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a};const g={title:"$replaceTextWithRegex",description:"$replaceTextWithRegex reemplazar\xe1 expresiones regulares espec\xedficas en un texto. Esto funciona de forma similar a $replaceText.",id:"replaceTextWithRegex"},f=void 0,k={unversionedId:"functions/util-related/replaceTextWithRegex",id:"version-6.4.0/functions/util-related/replaceTextWithRegex",title:"$replaceTextWithRegex",description:"$replaceTextWithRegex reemplazar\xe1 expresiones regulares espec\xedficas en un texto. Esto funciona de forma similar a $replaceText.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/replaceTextWithRegex.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/replaceTextWithRegex",permalink:"/es/docs/functions/util-related/replaceTextWithRegex",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 ago 2023",frontMatter:{title:"$replaceTextWithRegex",description:"$replaceTextWithRegex reemplazar\xe1 expresiones regulares espec\xedficas en un texto. Esto funciona de forma similar a $replaceText.",id:"replaceTextWithRegex"},sidebar:"docs",previous:{title:"$replaceText",permalink:"/es/docs/functions/util-related/replaceText"},next:{title:"$resolveColor",permalink:"/es/docs/functions/util-related/resolveColor"}},x={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2},{value:"Ejemplo avanzado",id:"ejemplo-avanzado",level:3}],y={toc:b},N="wrapper";function h(e){var t=e,{components:a}=t,n=u(t,["components"]);return(0,r.kt)(N,d(m(m({},y),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$replaceTextWithRegex")," reemplazar\xe1 segmentos espec\xedficos de texto."),(0,r.kt)("h2",m({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$replaceTextWithRegex[text;reg;flags;newText]\n")),(0,r.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"text"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Texto que desea modificar."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"reg"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"El regex que ser\xe1 reemplazado."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"banderas"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("a",m({parentName:"td"},{href:"#flags"}),"banderas"),"."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"newText"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"El texto que reemplazar\xe1 ",(0,r.kt)("inlineCode",{parentName:"td"},"reg"),"."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("h2",null," banderas ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Banderas"),(0,r.kt)("th",m({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"g"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Reemplazar todas las coincidencias (may\xfasculas y min\xfasculas)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"m"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Coincidencia m\xfaltiple")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"i"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Reemplazar todas las coincidencias (may\xfasculas y min\xfasculas)"))))),(0,r.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto reemplazar\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"m\xe1s")," por ",(0,r.kt)("inlineCode",{parentName:"p"},"menos"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;more;g;less]\n  `\n});  \n")),(0,r.kt)("h3",m({},{id:"ejemplo-avanzado"}),"Ejemplo avanzado"),(0,r.kt)("p",null,"Esto reemplazar\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"menos")," con ",(0,r.kt)("inlineCode",{parentName:"p"},"m\xe1s"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'replaceTextWithRegex',\n    code: `\n  $replaceTextWithRegex[This function is more complicated than it looks.;lESs;i;more]\n  `\n});  \n")))}h.isMDXComponent=!0}}]);