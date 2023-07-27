"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,v=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(v,i(i({ref:t},s),{},{components:n})):a.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5629:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>N,frontMatter:()=>v,metadata:()=>g,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const v={title:"$createChannelInvite",description:"$createChannelInvite cr\xe9e une invitation vers un salon sp\xe9cifique.",id:"createChannelInvite"},f=void 0,g={unversionedId:"functions/guild-related/createChannelInvite",id:"version-6.4.0/functions/guild-related/createChannelInvite",title:"$createChannelInvite",description:"$createChannelInvite cr\xe9e une invitation vers un salon sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createChannelInvite.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createChannelInvite",permalink:"/fr/docs/functions/guild-related/createChannelInvite",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 juil. 2023",frontMatter:{title:"$createChannelInvite",description:"$createChannelInvite cr\xe9e une invitation vers un salon sp\xe9cifique.",id:"createChannelInvite"},sidebar:"docs",previous:{title:"$createChannel",permalink:"/fr/docs/functions/guild-related/createChannel"},next:{title:"$createRole",permalink:"/fr/docs/functions/guild-related/createRole"}},k={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2},{value:"Exemple(s) Avanc\xe9(s)",id:"exemples-avanc\xe9s",level:3}],y={toc:b},h="wrapper";function N(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(h,d(u(u({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createChannelInvite")," cr\xe9e une invitation vers un salon sp\xe9cifique."),(0,a.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$createChannelInvite[IDsalon?;...options]\n")),(0,a.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"IDsalon?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"L'ID du salon o\xf9 l'invitation sera cr\xe9\xe9."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"faux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"...options"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"objet"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Options d'invitation. (visible ci-dessous)"),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"faux")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h3",null," Type d'invitations cibles ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"TYPE"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"VALEUR"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"STREAM"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"EMBEDDED_APPLICATION"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"2"))))),(0,a.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,"Cela cr\xe9era une invitation vers le salon o\xf9 la commande est ex\xe9cut\xe9e:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'cr\xe9erInvitation',\n    code: `\n  $createChannelInvite[$channelID]\n  `\n});\n")),(0,a.kt)("h3",u({},{id:"exemples-avanc\xe9s"}),"Exemple(s) Avanc\xe9(s)"),(0,a.kt)("p",null,"Cr\xe9er des invitations temporaires avec un nombre d'utilisations limit\xe9 :"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'cr\xe9erInvitation\',\n    code: `\n  $createChannelInvite[$channelID;{\n            "temporary": true,\n            "maxAge": 650,\n            "maxUses": 25,\n            "unique": true\n  }]\n  `\n});\n')),(0,a.kt)("p",null,"Cr\xe9er des invitations \xe0 des activit\xe9s:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'cr\xe9erInvitation\',\n    code: `\n  $createChannelInvite[voiceID;{\n            "targetApplication": "application ID",\n            "targetType": 2\n  }]\n  `\n});\n')))}N.isMDXComponent=!0}}]);