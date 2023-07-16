"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>v,frontMatter:()=>m,metadata:()=>k,toc:()=>b});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(p)for(var n of p(t))l.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const m={title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function."},h=void 0,k={unversionedId:"other/character-escaping",id:"version-5.5.5/other/character-escaping",title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function.",source:"@site/versioned_docs/version-5.5.5/other/character-escaping.md",sourceDirName:"other",slug:"/other/character-escaping",permalink:"/fr/docs/5.5.5/other/character-escaping",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"Character Escaping",description:"With this character usages you can let the bot return the given caracters without accepting this as a separator or as the end of a function."},sidebar:"docs",previous:{title:"Sharding",permalink:"/fr/docs/5.5.5/other/sharding"},next:{title:"Embed Errors",permalink:"/fr/docs/5.5.5/other/embed-errors"}},g={},b=[{value:"Escaping characters:",id:"escaping-characters",level:2},{value:"more:",id:"more",level:2}],y={toc:b},C="wrapper";function v(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(C,d(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",u({},{id:"escaping-characters"}),"Escaping characters:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#RIGHT#")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"]")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#LEFT#")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},";")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#SEMI#")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},":")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#COLON#")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#CHAR#")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},">")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#RIGHT_CLICK#")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#LEFT_CLICK#")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"=")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#EQUAL#")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"}")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#LEFT_BRACKET#")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"#RIGHT_BRACKET#")),(0,r.kt)("h2",u({},{id:"more"}),"more:"),(0,r.kt)("p",null,"Backspace => ",(0,r.kt)("inlineCode",{parentName:"p"},"\\b"),"\\\nForm Feed => ",(0,r.kt)("inlineCode",{parentName:"p"},"\\f"),"\\\nNew Line =>\\\nCarriage Return =>\\\nHorizontal Tabulator =>\\\nVertical Tabulator => ",(0,r.kt)("inlineCode",{parentName:"p"},"\\v"),"\\\nSingle quote => ",(0,r.kt)("inlineCode",{parentName:"p"},"\\'"),"\\\nDouble quote => ",(0,r.kt)("inlineCode",{parentName:"p"},'\\"'),"\\\nBackslash => ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These character escapes are useful for using special characters inside functions, e.g. in the text field of ",(0,r.kt)("a",u({parentName:"p"},{href:"../functions/sendmessage"}),"$sendMessage"),".")))}v.isMDXComponent=!0}}]);