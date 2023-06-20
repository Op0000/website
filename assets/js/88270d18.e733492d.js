"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"$uri",description:"Decodes or Encodes an URL."},i=void 0,c={unversionedId:"functions/uri",id:"version-5.5.5/functions/uri",title:"$uri",description:"Decodes or Encodes an URL.",source:"@site/versioned_docs/version-5.5.5/functions/uri.md",sourceDirName:"functions",slug:"/functions/uri",permalink:"/docs/5.5.5/functions/uri",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687300492,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$uri",description:"Decodes or Encodes an URL."},sidebar:"docs",previous:{title:"$uptime",permalink:"/docs/5.5.5/functions/uptime"},next:{title:"$useChannel",permalink:"/docs/5.5.5/functions/usechannel"}},l={},s=[{value:"Example usage to encode:",id:"example-usage-to-encode",level:2},{value:"Example usage to decode:",id:"example-usage-to-decode",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function decodes or encodes an URL."),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$uri[encode/decode;text]")),(0,o.kt)("h2",{id:"example-usage-to-encode"},"Example usage to encode:"),(0,o.kt)("p",null,"The following example returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello%20ElTuna%230001!%20(this%20is%20a%20test)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "encode",\ncode: `\n$uri[encode;Hello ElTuna#0001! (this is a test)]\n`})\n')),(0,o.kt)("h2",{id:"example-usage-to-decode"},"Example usage to decode:"),(0,o.kt)("p",null,"The following example returns ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello ElTuna#0001! (this is a test)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "decode",\ncode: `\n$uri[decode;Hello%20ElTuna%230001!%20(this%20is%20a%20test)]\n`})\n')),(0,o.kt)("p",null,"You find a full list of encode characters ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3schools.com/tags/ref_urlencode.ASP"},"here"),"."))}d.isMDXComponent=!0}}]);