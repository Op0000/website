"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e},f=(e,t)=>o(e,a(t)),u=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$endif",description:"$endif is used to end an if statement.",id:"endif"},y=void 0,b={unversionedId:"functions/misc-related/endif",id:"version-6.4.0/functions/misc-related/endif",title:"$endif",description:"$endif is used to end an if statement.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/endif.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/endif",permalink:"/ru/docs/functions/misc-related/endif",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690428524,formattedLastUpdatedAt:"27 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$endif",description:"$endif is used to end an if statement.",id:"endif"},sidebar:"docs",previous:{title:"$endelseif",permalink:"/ru/docs/functions/misc-related/endelseif"},next:{title:"$error",permalink:"/ru/docs/functions/misc-related/error"}},v={},O=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],g={toc:O},k="wrapper";function w(e){var t=e,{components:n}=t,i=u(t,["components"]);return(0,r.kt)(k,f(p(p({},g),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$endif")," is used to end an if statement."),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$endif\n")),(0,r.kt)("admonition",p({},{title:"Deprecation",type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},'$if: "old"')," is deprecated and should no longer be used as it will be removed in the future.")),(0,r.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"Example usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"$if: old"),' (will return "Hello" when the condition is true):'),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "endif",\n    $if: "old",\n    code: `\n  $if[1==1]\n  Hello!\n  $endif\n  `\n});\n')))}w.isMDXComponent=!0}}]);