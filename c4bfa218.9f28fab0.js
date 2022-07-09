(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{482:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return s}));var n=t(3),a=(t(0),t(618));const o={title:"$resetVar",description:"Resets global variable value"},c={unversionedId:"functions/resetvar",id:"functions/resetvar",isDocsHomePage:!1,title:"$resetVar",description:"Resets global variable value",source:"@site/docs/functions/resetvar.md",slug:"/functions/resetvar",permalink:"/docs/functions/resetvar",version:"current",sidebar:"someSidebar",previous:{title:"$resetUserVar",permalink:"/docs/functions/resetuservar"},next:{title:"$resolveColor",permalink:"/docs/functions/resolvecolor"}},i=[],l={toc:i};function s(e){let{components:r,...t}=e;return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function resets a global variable"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$resetVar[variable]\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "resetglobalvar",\ncode: `Resetted global XP\n$resetVar[globalXP]`\n})\n')))}s.isMDXComponent=!0},618:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return t?a.a.createElement(d,i(i({ref:r},s),{},{components:t})):a.a.createElement(d,i({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);