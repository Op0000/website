(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{618:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(f,i(i({ref:r},u),{},{components:t})):a.a.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(3),a=(t(0),t(618));const o={title:"$userLeaderboard",description:"Generates a user leader board for the given variable value"},c={unversionedId:"functions/userleaderboard",id:"functions/userleaderboard",isDocsHomePage:!1,title:"$userLeaderboard",description:"Generates a user leader board for the given variable value",source:"@site/docs/functions/userleaderboard.md",slug:"/functions/userleaderboard",permalink:"/docs/functions/userleaderboard",version:"current",sidebar:"someSidebar",previous:{title:"$userID",permalink:"/docs/functions/userid"},next:{title:"$messageID",permalink:"/docs/functions/usermessageid"}},i=[],l={toc:i};function u(e){let{components:r,...t}=e;return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function generates a leaderboard for a variable with a numerical value"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$userLeaderboard[variable;asc/desc (optional);{top} - {username}: {value};list (optional)]\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"asc - The values will be from greatest to least (top to bottom)")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"desc - The values will be from least to greatest (bottom to top)")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"{top} - Their leaderboard position (1/2/3/etc)")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"{username} - The users username")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"{value} - The users value of the given var")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "leaderboard",\ncode: `$userLeaderboard[money;asc;{top} - {username} - {value}]`\n})\n')))}u.isMDXComponent=!0}}]);