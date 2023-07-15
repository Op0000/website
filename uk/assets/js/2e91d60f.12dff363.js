"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},73363:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const y={title:"Gateway Intents",description:"Discord API Intents, This is needed to Access Discord API"},m=void 0,b={unversionedId:"other/gateway-intents",id:"version-5.5.5/other/gateway-intents",title:"Gateway Intents",description:"Discord API Intents, This is needed to Access Discord API",source:"@site/versioned_docs/version-5.5.5/other/gateway-intents.md",sourceDirName:"other",slug:"/other/gateway-intents",permalink:"/uk/docs/5.5.5/other/gateway-intents",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"Gateway Intents",description:"Discord API Intents, This is needed to Access Discord API"},sidebar:"docs",previous:{title:"Permissions",permalink:"/uk/docs/5.5.5/other/permissions"}},h={},v=[],w={toc:v},O="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,d(u(u({},w),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Gateways are Discord's form of real-time communication over secure WebSockets. Clients will receive events and data over the gateway they are connected to and send data over the REST API."),(0,n.kt)("p",null,"This will be needed for us to interact with the Discord API and the functions that are prepared to build your bot."),(0,n.kt)("p",null,"You can enable this in the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://discord.com/developers/applications"}),"Discord Developer Portal through your Bot Application")),(0,n.kt)("p",null,"And there we go, You're now able to access their API and you shouldn't have any errors or bugs ",(0,n.kt)("em",{parentName:"p"},"besides the errors in your own code")),(0,n.kt)("p",null,"If your bot is verified and you don't have the intents but you want to enable them you will need to ",(0,n.kt)("a",u({parentName:"p"},{href:"https://support.discord.com/hc/en-us/requests/new?ticket_form_id=360005592534"}),"Submit a request")," and explain what intents you want to use in your bot and for what."))}g.isMDXComponent=!0}}]);