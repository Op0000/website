(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{449:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return a})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return s}));var t=r(3),o=(r(0),r(618));const c={title:"$resumeSong",description:"Resume the song from being paused"},a={unversionedId:"functions/resumesong",id:"functions/resumesong",isDocsHomePage:!1,title:"$resumeSong",description:"Resume the song from being paused",source:"@site/docs/functions/resumesong.md",slug:"/functions/resumesong",permalink:"/docs/functions/resumesong",version:"current",sidebar:"someSidebar",previous:{title:"$resolveEmojiID",permalink:"/docs/functions/resolveemojiid"},next:{title:"$role",permalink:"/docs/functions/role"}},i=[],u={toc:i};function s(e){let{components:n,...r}=e;return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function resumes a song after being paused"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname:"resume",\ncode: `$resumeSong`\n})\n')))}s.isMDXComponent=!0},618:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function c(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){c(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),m=t,d=l["".concat(a,".").concat(m)]||l[m]||f[m]||c;return r?o.a.createElement(d,i(i({ref:n},s),{},{components:r})):o.a.createElement(d,i({ref:n},s))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);