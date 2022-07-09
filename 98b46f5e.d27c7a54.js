(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{392:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(3),o=(t(0),t(618));const a={title:"$error",description:"This function returns the error that the interpreter threw."},c={unversionedId:"functions/error",id:"functions/error",isDocsHomePage:!1,title:"$error",description:"This function returns the error that the interpreter threw.",source:"@site/docs/functions/error.md",slug:"/functions/error",permalink:"/docs/functions/error",version:"current",sidebar:"someSidebar",previous:{title:"$emojisFromMessage",permalink:"/docs/functions/emojisfrommessage"},next:{title:"$eval",permalink:"/docs/functions/eval"}},i=[],s={toc:i};function u(e){let{components:r,...a}=e;return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With this function you can execute a command if a command execution failed becasue of an interpreter error. The bot will execute the error property of the command if the intepreter throws an error. $error returns that error that was sent in the bot's console."),Object(o.b)("h4",{id:"usage"},"Usage"),Object(o.b)("p",null,"Example usage of the ",Object(o.b)("inlineCode",{parentName:"p"},"error")," property with the usage of $error inside to send the console error of the eval command in the given channel ($channelSendMessage). You can use basically all functions in there."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "eval",\nerror: `$channelSendMessage[839061638707019836;$userTag had a problem: $error in $channelName!]`\ncode: `\n$djsEval[message]\n`\n})\n')),Object(o.b)("p",null,Object(o.b)("img",{alt:"Example message of the error log.",src:t(723).default})))}u.isMDXComponent=!0},618:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return t?o.a.createElement(d,i(i({ref:r},u),{},{components:t})):o.a.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},723:function(e,r,t){"use strict";t.r(r),r.default=t.p+"assets/images/image (3)-adbcc08dba095a6d30607c84007e1ef1.png"}}]);