(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{479:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),o=(t(0),t(618));const i={title:"$skipTo",description:"Skips to a certain number in queue"},a={unversionedId:"functions/skipto",id:"functions/skipto",isDocsHomePage:!1,title:"$skipTo",description:"Skips to a certain number in queue",source:"@site/docs/functions/skipto.md",slug:"/functions/skipto",permalink:"/docs/functions/skipto",version:"current",sidebar:"someSidebar",previous:{title:"$skipSong",permalink:"/docs/functions/skipsong"},next:{title:"$slashOption",permalink:"/docs/functions/slashoption"}},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function allows you to skip to a certain position in the queue"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"$skipTo[number]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "skipTo",\ncode: `$skipTo[3]` //Skips to the 3rd song\n})\n')))}u.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),b=r,m=l["".concat(a,".").concat(b)]||l[b]||f[b]||i;return t?o.a.createElement(m,c(c({ref:n},u),{},{components:t})):o.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);