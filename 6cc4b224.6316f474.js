(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{297:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),o=(t(0),t(618));const a={title:"$removeContains"},c={unversionedId:"functions/removecontains",id:"functions/removecontains",isDocsHomePage:!1,title:"$removeContains",description:"This function will allow you to delete the amount of messages you specify which contain the word you request.",source:"@site/docs/functions/removecontains.md",slug:"/functions/removecontains",permalink:"/docs/functions/removecontains",version:"current",sidebar:"someSidebar",previous:{title:"$referenceMessageID",permalink:"/docs/functions/referencemessageid"},next:{title:"$removeSplitTextElement",permalink:"/docs/functions/removesplittextelement"}},i=[],s={toc:i};function u(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function will allow you to delete the amount of messages you specify which contain the word you request."),Object(o.b)("p",null,"Raw usage: ",Object(o.b)("inlineCode",{parentName:"p"},"$removeContains[channelID;limit;word1;word2;...]")),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "purge-words",\n    code: `Done!\n    $removeContains[$channelID;$message[1];bald]\n    `\n});\n')),Object(o.b)("p",null,'This will delete the amount of messages specified in the message which contain the word "bald"'))}u.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return t?o.a.createElement(d,i(i({ref:n},u),{},{components:t})):o.a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);