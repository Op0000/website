"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,k=p["".concat(o,".").concat(c)]||p[c]||u[c]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>P,frontMatter:()=>k,metadata:()=>N,toc:()=>v});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),c=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const k={title:"$getClientInvite",description:"$getClientInvite retournera l'invitation de votre bot avec les permissions sp\xe9cifi\xe9es.",id:"getClientInvite"},g=void 0,N={unversionedId:"functions/client-related/getClientInvite",id:"version-6.4.0/functions/client-related/getClientInvite",title:"$getClientInvite",description:"$getClientInvite retournera l'invitation de votre bot avec les permissions sp\xe9cifi\xe9es.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/getClientInvite.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/getClientInvite",permalink:"/fr/docs/functions/client-related/getClientInvite",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691051160,formattedLastUpdatedAt:"3 ao\xfbt 2023",frontMatter:{title:"$getClientInvite",description:"$getClientInvite retournera l'invitation de votre bot avec les permissions sp\xe9cifi\xe9es.",id:"getClientInvite"},sidebar:"docs",previous:{title:"$fetchClientValues",permalink:"/fr/docs/functions/client-related/fetchClientValues"},next:{title:"$killClient",permalink:"/fr/docs/functions/client-related/killClient"}},b={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:v},f="wrapper";function P(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,r.kt)(f,u(p(p({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getClientInvite")," retournera l'invitation de votre bot avec les permissions sp\xe9cifi\xe9es."),(0,r.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$getClientInvite[...permissions?]\n")),(0,r.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"permissions?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8re"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permissions que vous voulez inclure dans l'invitation."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," Autorisations de l'API Discord ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Permissions"),(0,r.kt)("th",p({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"createinvite"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de cr\xe9er des invitations de serveur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"kickmembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'expulser les membres du serveur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"banmembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de bannir les membres du serveur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"administrator"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Autorisations d'administrateur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managechannel"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de g\xe9rer les salons du serveur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"manageserver"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permissions de modifier les param\xe8tres du serveur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"addreactions"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permissions d'ajouter des r\xe9actions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"viewauditlog"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de voir les logs du serveur")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"priorityspeaker"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Voix prioritaire")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"stream"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de diffuser dans les salons vocaux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"viewchannel"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de voir un certain salon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sendmessages"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'envoyer des messages dans un certain salon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sendttsmessages"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Autorisation d'envoyer des messages de synth\xe8se vocale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managemessages"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de g\xe9rer les messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"embedlinks"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'int\xe9grer des liens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"attachfiles"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de joindre des fichiers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"readmessagehistory"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de lire l'historique des messages dans un certain salon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"mentioneveryone"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de mentionner ",(0,r.kt)("inlineCode",{parentName:"td"},"@everyone"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"@here")," et tous les r\xf4les")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"externalemojis"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'utiliser des \xe9mojis externes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"viewguildinsights"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de voir les aper\xe7us de la guilde")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"connect"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de se connecter aux salons vocaux et aux conf\xe9rences")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"mutemembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de rendre muet les membres dans les salons vocaux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"deafenmembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de rendre sourds les membres dans les salons vocaux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"movemembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de d\xe9placer les membres entre les salons vocaux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"usevad"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'utiliser la d\xe9tection des activit\xe9s vocales")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"changenickname"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de changer votre propre pseudo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managenicknames"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Autorisation de g\xe9rer les pseudos des autres membres")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"manageroles"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de g\xe9rer les r\xf4les")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managewebhooks"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de g\xe9rer les webhooks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"manageemojisandstickers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de g\xe9rer les \xe9mojis et les autocollants")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"useappcmds"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'utiliser les commandes d'application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"requesttospeak"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de demander la parole lors des conf\xe9rences")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"manageevents"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de g\xe9rer les \xe9v\xe9nements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"managethreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de g\xe9rer les fils")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"usepublicthreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'utiliser des fils publics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"useprivatethreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'utiliser des fils priv\xe9s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"createpublicthreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de cr\xe9er des fils de discussion publics")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"createprivatethreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de cr\xe9er des fils de discussion priv\xe9s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"externalstickers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'utiliser des autocollants externes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sendmessageinthreads"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'envoyer des messages dans les fils")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"startembeddedactivities"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission de d\xe9marrer des activit\xe9s dans les salons vocaux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"moderatemembers"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Permission d'exclure temporairement et d'arr\xeater l'exclusion des membres du serveur"))))),(0,r.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera l'invitation de votre bot avec les permissions d'administrateur :"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getClientInvite',\n    code: `\n  Invitez-moi ici: $getClientInvite[administrator]\n  `\n});\n")))}P.isMDXComponent=!0}}]);