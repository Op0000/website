(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=(n(0),n(618));const o={title:"$cooldown",description:"Set a cooldown for a command"},c={unversionedId:"functions/cooldown",id:"functions/cooldown",isDocsHomePage:!1,title:"$cooldown",description:"Set a cooldown for a command",source:"@site/docs/functions/cooldown.md",slug:"/functions/cooldown",permalink:"/docs/functions/cooldown",version:"current",sidebar:"someSidebar",previous:{title:"$concatTextSplit",permalink:"/docs/functions/concattextsplit"},next:{title:"$cpu",permalink:"/docs/functions/cpu"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Example",id:"example",children:[]}],l={toc:i};function u(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function sets a cooldown to the current command."),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$cooldown[time;error]\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Field"),Object(a.b)("th",{parentName:"tr",align:"left"},"Description"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"),Object(a.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"time"),Object(a.b)("td",{parentName:"tr",align:"left"},"The time of cooldown"),Object(a.b)("td",{parentName:"tr",align:"left"},"alphanumeric"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"error"),Object(a.b)("td",{parentName:"tr",align:"left"},"The error to be displayed when cooldown is active"),Object(a.b)("td",{parentName:"tr",align:"left"},"string"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")))),Object(a.b)("h4",{id:"error-options"},"Error Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"%time% - Returns time in human readable duration."),Object(a.b)("li",{parentName:"ul"},"%hour% - Returns time in hour."),Object(a.b)("li",{parentName:"ul"},"%min% - Returns time in minutes."),Object(a.b)("li",{parentName:"ul"},"%sec% - Returns time in seconds."),Object(a.b)("li",{parentName:"ul"},"%ms% - Returns time in milliseconds."),Object(a.b)("li",{parentName:"ul"},"%day% - Returns time in days."),Object(a.b)("li",{parentName:"ul"},"%week% - Returns time in weeks."),Object(a.b)("li",{parentName:"ul"},"%month% - Returns time in months."),Object(a.b)("li",{parentName:"ul"},"%year% - Returns time in years.")),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "hello", \ncode: `\n$description[Hello!]\n$cooldown[1m;Hey, you need to wait %time%!]\n`\n})\n')))}u.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);