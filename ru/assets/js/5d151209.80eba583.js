"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$shutdown",description:"$shutdown \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u043e\u0442\u0430.",id:"shutdown"},y=void 0,b={unversionedId:"functions/misc-related/shutdown",id:"version-6.4.0/functions/misc-related/shutdown",title:"$shutdown",description:"$shutdown \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u043e\u0442\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/shutdown.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/shutdown",permalink:"/ru/docs/functions/misc-related/shutdown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$shutdown",description:"$shutdown \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u043e\u0442\u0430.",id:"shutdown"},sidebar:"docs",previous:{title:"$setTimeout",permalink:"/ru/docs/functions/misc-related/setTimeout"},next:{title:"$stopTimeout",permalink:"/ru/docs/functions/misc-related/stopTimeout"}},v={},O=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],w={toc:O},h="wrapper";function g(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(h,d(p(p({},w),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$shutdown")," \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u0442 / \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u043e\u0442\u0430."),(0,r.kt)("h2",p({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$shutdown\n")),(0,r.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u0431\u043e\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "shutdown",\n    code: `\n    $shutdown\n    `\n});\n')))}g.isMDXComponent=!0}}]);