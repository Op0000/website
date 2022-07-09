(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),a=(r(0),r(618));const o={title:"$getGlobalUserVar",description:"Get The Global User Var"},l={unversionedId:"functions/getglobaluservar",id:"functions/getglobaluservar",isDocsHomePage:!1,title:"$getGlobalUserVar",description:"Get The Global User Var",source:"@site/docs/functions/getglobaluservar.md",slug:"/functions/getglobaluservar",permalink:"/docs/functions/getglobaluservar",version:"current",sidebar:"someSidebar",previous:{title:"$getEmbed",permalink:"/docs/functions/getembed"},next:{title:"$getInviteInfo",permalink:"/docs/functions/getinviteinfo"}},i=[],c={toc:i};function u(e){let{components:t,...r}=e;return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function returns the value of the given value for the given user."),Object(a.b)("h4",{id:"fields"},"Fields"),Object(a.b)("p",null,"This function has 1 required field"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Variable ","(","Required",")"),Object(a.b)("li",{parentName:"ol"},"User ID ","(","Optional",")")),Object(a.b)("p",null,"Raw Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"$getGlobalUserVar[variable;userID (optional)]")),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Variable - The variable value we're getting for the ","<","user",">"),Object(a.b)("li",{parentName:"ul"},"User ID - The user's variable value we're getting")),Object(a.b)("h4",{id:"usage"},"Usage"),Object(a.b)("p",null,"Current User's Variable Value"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "get", \ncode: `\n$getGlobalUserVar[variable]`\n})\n')),Object(a.b)("p",null,"Mentioned User's Variable Value"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "get", \ncode: `\n$getGlobalUserVar[variable;$mentioned[1]]`\n})\n')))}u.isMDXComponent=!0},618:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,d=b["".concat(l,".").concat(f)]||b[f]||p[f]||o;return r?a.a.createElement(d,i(i({ref:t},u),{},{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);