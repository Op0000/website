"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31052],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return r?a.createElement(f,i(i({ref:t},d),{},{components:r})):a.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>N,contentTitle:()=>g,default:()=>h,frontMatter:()=>f,metadata:()=>k,toc:()=>v});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&d(e,r,t[r]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$createThread",description:"$createThread cr\xe9era un nouveau fil.",id:"createThread"},g=void 0,k={unversionedId:"functions/guild-related/createThread",id:"version-6.4.0/functions/guild-related/createThread",title:"$createThread",description:"$createThread cr\xe9era un nouveau fil.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createThread.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createThread",permalink:"/fr/docs/functions/guild-related/createThread",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$createThread",description:"$createThread cr\xe9era un nouveau fil.",id:"createThread"},sidebar:"docs",previous:{title:"$createSticker",permalink:"/fr/docs/functions/guild-related/createSticker"},next:{title:"$createWebhook",permalink:"/fr/docs/functions/guild-related/createWebhook"}},N={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:v},y="wrapper";function h(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(y,s(u(u({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createThread")," cr\xe9era un nouveau fil."),(0,a.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$createThread[IDsalon;nom;archive;type;premierMessage;renvoyerID?]\n")),(0,a.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"IDsalon"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"L'ID du salon o\xf9 le fil doit \xeatre cr\xe9\xe9."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Le nom du fil nouvellement cr\xe9\xe9."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"archive"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Apr\xe8s combien de temps le fil de discussion sera archiv\xe9 (ms)."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Type de fil ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"public")," (par d\xe9faut) ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"private")),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"premierMessage"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"L'ID du message o\xf9 le fil sera cr\xe9\xe9."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"renvoyerID?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Si la fonction renvoie l'identifiant du fil apr\xe8s sa cr\xe9ation."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"faux")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"60 \u2014")," Cette option rend le fil actif pendant ",(0,a.kt)("strong",{parentName:"li"},"1 heure"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1440 \u2014")," Cette option rend le fil actif pendant ",(0,a.kt)("strong",{parentName:"li"},"1 jour"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"4320 \u2014")," Cette option rend le fil actif pendant ",(0,a.kt)("strong",{parentName:"li"},"3 jours"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"10080 \u2014")," Cette option rend le fil actif pendant ",(0,a.kt)("strong",{parentName:"li"},"1 semaine"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MAX \u2014")," Cette option rend le fil actif pendant le plus lontemp possible.")),(0,a.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,"Ceci va cr\xe9er un fil dans le salon actuel:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'cr\xe9erFil',\n    code: `\n  $createThread[$channelID;Example!;60;public;$messageID;false]\n  `\n});\n")))}h.isMDXComponent=!0}}]);