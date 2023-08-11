"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,g=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>h,frontMatter:()=>g,metadata:()=>b,toc:()=>N});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&m(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),c=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$getEmbed",description:"$getEmbed retournera des propri\xe9t\xe9s \xe0 propos d'un embed donn\xe9.",id:"getEmbed"},k=void 0,b={unversionedId:"functions/info-related/getEmbed",id:"version-6.4.0/functions/info-related/getEmbed",title:"$getEmbed",description:"$getEmbed retournera des propri\xe9t\xe9s \xe0 propos d'un embed donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getEmbed.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getEmbed",permalink:"/fr/docs/functions/info-related/getEmbed",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 ao\xfbt 2023",frontMatter:{title:"$getEmbed",description:"$getEmbed retournera des propri\xe9t\xe9s \xe0 propos d'un embed donn\xe9.",id:"getEmbed"},sidebar:"docs",previous:{title:"$getChannelSlowmode",permalink:"/fr/docs/functions/info-related/getChannelSlowmode"},next:{title:"$getMessage",permalink:"/fr/docs/functions/info-related/getMessage"}},f={},N=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:N},v="wrapper";function h(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,r.kt)(v,s(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getEmbed")," retournera des propri\xe9t\xe9s \xe0 propos d'un embed donn\xe9."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$getEmbed[IDsalon;IDmessage;index;option]\n")),(0,r.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"IDsalon"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID du salon dans lequel se trouve le message."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"IDmessage"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"L'ID du message qui a un embed."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"index"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"L'index de l'embed."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"option"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"L'option \xe0 r\xe9cup\xe9rer."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," Options ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type de texte"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Libell\xe9"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"title"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Titre de l'embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"description"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Description de l'embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"URL"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"L'URL dans le titre.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"color"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Couleur de l'embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"timestamp"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Timestamp situ\xe9 dans le footer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"field<index",">",".name / field1.name"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Titre du champ.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"field<index",">",".value / field1.value"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Description du champ.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"thumbnail"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Miniature (image en haut \xe0 droite).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"image"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Grande image en bas de l'embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"video"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Vid\xe9o/GIF.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"author"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Auteur, au-dessus du titre.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"footer"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Pied de page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"files"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Fichiers joints.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"createdAt"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Date de cr\xe9ation de l'embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"hexColor"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Couleur hexad\xe9cimale de l'embed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"length"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Longueur de l'embed."))))),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera la description d'un embed :"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getEmbed',\n    code: `\n\n$getEmbed[$channelID;IDmessage;1;description] \n  ` // assurez-vous de remplacer \"IDmessage\" par l'ID actuel du message \n});\n")))}h.isMDXComponent=!0}}]);