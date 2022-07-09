(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{518:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(618));const o={title:"$loop",description:"Repeat events / commands"},c={unversionedId:"functions/loop",id:"functions/loop",isDocsHomePage:!1,title:"$loop",description:"Repeat events / commands",source:"@site/docs/functions/loop.md",slug:"/functions/loop",permalink:"/docs/functions/loop",version:"current",sidebar:"someSidebar",previous:{title:"$log",permalink:"/docs/functions/log"},next:{title:"$loopMode",permalink:"/docs/functions/loopmode"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Example",id:"example",children:[]}],l={toc:i};function p(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This function creates a loop and executes an awaited command X amount of times."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$loop[time;awaitedData;awaitedCommand]\n")),Object(r.b)("p",null,'{% hint style="danger" %}\nbot.awaitedCommand is needed.\n{% endhint %}'),Object(r.b)("h3",{id:"fields"},"Fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Field"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"time"),Object(r.b)("td",{parentName:"tr",align:"left"},"The number of times the awaited command will be executed"),Object(r.b)("td",{parentName:"tr",align:"left"},"alphanumeric"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"awaitedData"),Object(r.b)("td",{parentName:"tr",align:"left"},"The data to be used in the awaited command"),Object(r.b)("td",{parentName:"tr",align:"left"},"alphanumeric"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"awaitedCommand"),Object(r.b)("td",{parentName:"tr",align:"left"},"The name of awaited command"),Object(r.b)("td",{parentName:"tr",align:"left"},"alphanumeric"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")))),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n        name: "Say Hello 3 times",\n        code: `$loop[3;{};hello]`\n})\n\nbot.awaitedCommand({\n       name: "hello",\n       code: `hi user!`\n})\n//The bot would return \'hi user!\' 3 times\n')))}p.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,s=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.a.createElement(s,i(i({ref:t},p),{},{components:n})):r.a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);