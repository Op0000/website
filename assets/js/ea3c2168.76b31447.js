"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=l,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:l,o[1]=a;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const i={title:"$killClient",description:"$killClient will forcefully shutdown your bot.",id:"killClient"},o=void 0,a={unversionedId:"functions/client-related/killClient",id:"version-6.2.6/functions/client-related/killClient",title:"$killClient",description:"$killClient will forcefully shutdown your bot.",source:"@site/versioned_docs/version-6.2.6/functions/client-related/killClient.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/killClient",permalink:"/docs/functions/client-related/killClient",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Leref",lastUpdatedAt:1687675592,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{title:"$killClient",description:"$killClient will forcefully shutdown your bot.",id:"killClient"},sidebar:"docs",previous:{title:"$getClientInvite",permalink:"/docs/functions/client-related/getClientInvite"},next:{title:"$onlyClientPerms",permalink:"/docs/functions/client-related/onlyClientPerms"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$killClient")," will forcefully shutdown your bot."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$killClient\n")),(0,l.kt)("h2",{id:"examples"},"Example(s)"),(0,l.kt)("p",null,"This will forcefully shutdown your bot:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "killClient",\n    code: `\n    $killClient\n    `\n});\n')))}d.isMDXComponent=!0}}]);