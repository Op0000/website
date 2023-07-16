"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,s(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$sendTTS",description:"Send a tts message."},y=void 0,b={unversionedId:"functions/sendtts",id:"version-5.5.5/functions/sendtts",title:"$sendTTS",description:"Send a tts message.",source:"@site/versioned_docs/version-5.5.5/functions/sendtts.md",sourceDirName:"functions",slug:"/functions/sendtts",permalink:"/ar/docs/5.5.5/functions/sendtts",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$sendTTS",description:"Send a tts message."},sidebar:"docs",previous:{title:"$sendMessage",permalink:"/ar/docs/5.5.5/functions/sendmessage"},next:{title:"$sendWebhook",permalink:"/ar/docs/5.5.5/functions/sendwebhook"}},g={},v=[{value:"Example Command:",id:"example-command",level:4}],O={toc:v},h="wrapper";function w(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(h,d(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function lets the bot send a text-to-speech message with the given text in the current or given channel."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$sendTTS[message; channelid ( optional)]")),(0,r.kt)("h4",u({},{id:"example-command"}),"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-text"}),'bot.command({\nname: "tts",\ncode: `\n$sendTTS[Hey guys, how are you?;827730677759082526]\n`\n})\n\n// sends the tts message with given text to to the spam channel\n')))}w.isMDXComponent=!0}}]);