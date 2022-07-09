(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{553:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),o=(t(0),t(618));const i={title:"$indexOf",description:"Returns the position of <char> in <text>. Returns 0 if there's no char in text."},a={unversionedId:"functions/indexof",id:"functions/indexof",isDocsHomePage:!1,title:"$indexOf",description:"Returns the position of <char> in <text>. Returns 0 if there's no char in text.",source:"@site/docs/functions/indexof.md",slug:"/functions/indexof",permalink:"/docs/functions/indexof",version:"current",sidebar:"someSidebar",previous:{title:"$image",permalink:"/docs/functions/image"},next:{title:"$interactionDefer",permalink:"/docs/functions/interactiondefer"}},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function returns the first matching position of the given character in the given text."),Object(o.b)("p",null,"Raw usage: ",Object(o.b)("inlineCode",{parentName:"p"},"$indexOf[text;character]")," "),Object(o.b)("h4",{id:"example-command"},"Example Command:"),Object(o.b)("p",null,"The example below returns ",Object(o.b)("inlineCode",{parentName:"p"},"3")," because the first ",Object(o.b)("inlineCode",{parentName:"p"},"l")," in ",Object(o.b)("inlineCode",{parentName:"p"},"Hello")," is at position 3."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "index",\ncode: `\n$indexOf[Hello;l]\n`\n})\n')))}p.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),d=r,b=s["".concat(a,".").concat(d)]||s[d]||f[d]||i;return t?o.a.createElement(b,c(c({ref:n},p),{},{components:t})):o.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);