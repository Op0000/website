(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),o=(t(0),t(618));const c={title:"$nickname",description:"Returns the nickname, using a userID."},a={unversionedId:"functions/nickname",id:"functions/nickname",isDocsHomePage:!1,title:"$nickname",description:"Returns the nickname, using a userID.",source:"@site/docs/functions/nickname.md",slug:"/functions/nickname",permalink:"/docs/functions/nickname",version:"current",sidebar:"someSidebar",previous:{title:"$newTicket",permalink:"/docs/functions/newticket"},next:{title:"$nodeVersion",permalink:"/docs/functions/nodeversion"}},i=[],u={toc:i};function s(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function returns the user's server nickname"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$nickname[User]\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "nickname",\ncode: `Your nickname is: $nickname[$authorID]`\n})\n')))}s.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,d=l["".concat(a,".").concat(m)]||l[m]||f[m]||c;return t?o.a.createElement(d,i(i({ref:n},s),{},{components:t})):o.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);