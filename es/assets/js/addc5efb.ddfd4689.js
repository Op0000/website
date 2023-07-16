"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,f=p["".concat(d,".").concat(u)]||p[u]||c[u]||l;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>y,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),u=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$modifyChannelPerms",description:"$modifyChannelPerms modificar\xe1 el permiso de un canal determinado.",id:"modifyChannelPerms"},g=void 0,y={unversionedId:"functions/guild-related/modifyChannelPerms",id:"version-6.4.0/functions/guild-related/modifyChannelPerms",title:"$modifyChannelPerms",description:"$modifyChannelPerms modificar\xe1 el permiso de un canal determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/modifyChannelPerms.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/modifyChannelPerms",permalink:"/es/docs/functions/guild-related/modifyChannelPerms",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$modifyChannelPerms",description:"$modifyChannelPerms modificar\xe1 el permiso de un canal determinado.",id:"modifyChannelPerms"},sidebar:"docs",previous:{title:"$messagePublish",permalink:"/es/docs/functions/guild-related/messagePublish"},next:{title:"$modifyEmoji",permalink:"/es/docs/functions/guild-related/modifyEmoji"}},k={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],N={toc:b},h="wrapper";function v(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(h,c(p(p({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$modifyChannelPerms")," modificar\xe1 la anulaci\xf3n de los permisos de un determinado canal."),(0,r.kt)("h2",p({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$modifyChannelPerms[canalID;roruID;...perms]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"canalID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"El ID del canal del que intentas modificar sus permisos."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"roruID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"El ID de un usuario o rol. ( ",(0,r.kt)("inlineCode",{parentName:"td"},"$guildID")," representa el rol ",(0,r.kt)("inlineCode",{parentName:"td"},"@everyone"),". )"),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"...permisos"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Los permisos que se cambiar\xe1n."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null})),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Denegar un permiso espec\xedfico a alguien o algo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"+")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Denegar un permiso espec\xedfico a alguien o algo.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Restablecer un permiso espec\xedfico a su estado predeterminado.")))),(0,r.kt)("p",null,"Encontrar\xe1 todos los permisos ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",p({parentName:"strong"},{href:"../../guides/client/2permissionsintents.md"}),"aqu\xed")),"."),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto permitir\xe1 a ",(0,r.kt)("inlineCode",{parentName:"p"},"@everyone")," enviar mensajes y a\xf1adir reacciones en el canal actual:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'modifyChannelPerms',\n    code: `\n  $modifyChannelPerms[$channelID;$guildID;+sendmessages;+addreactions]\n  `\n});\n")))}v.isMDXComponent=!0}}]);