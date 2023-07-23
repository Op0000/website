"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,m=s["".concat(c,".").concat(d)]||s[d]||f[d]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>T,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))p.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>i(e,l(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$clientToken",description:"$clientToken retournera le token du client.",id:"clientToken"},k=void 0,y={unversionedId:"functions/client-related/clientToken",id:"version-6.4.0/functions/client-related/clientToken",title:"$clientToken",description:"$clientToken retournera le token du client.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/clientToken.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientToken",permalink:"/fr/docs/functions/client-related/clientToken",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 juil. 2023",frontMatter:{title:"$clientToken",description:"$clientToken retournera le token du client.",id:"clientToken"},sidebar:"docs",previous:{title:"$clientPrefixes",permalink:"/fr/docs/functions/client-related/clientPrefixes"},next:{title:"$clientTyping",permalink:"/fr/docs/functions/client-related/clientTyping"}},b={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Exemple(s)",id:"exemples",level:2}],O={toc:v},g="wrapper";function T(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(g,f(s(s({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$clientToken")," retournera le token du client."),(0,r.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$clientToken\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"}," \u26a0\ufe0f Vous ne devriez jamais partager votre token de bot Discord avec quiconque."))),(0,r.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Ceci retournera le token du client :"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientToken',\n    code: `\n  $clientToken\n  `\n});\n")))}T.isMDXComponent=!0}}]);