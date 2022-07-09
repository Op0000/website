(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{348:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return m})),t.d(n,"default",(function(){return u}));var r=t(3),o=(t(0),t(618));const a={title:"$commandName",description:"Returns the command name"},c={unversionedId:"functions/commandname",id:"functions/commandname",isDocsHomePage:!1,title:"$commandName",description:"Returns the command name",source:"@site/docs/functions/commandname.md",slug:"/functions/commandname",permalink:"/docs/functions/commandname",version:"current",sidebar:"someSidebar",previous:{title:"$commandInfo",permalink:"/docs/functions/commandinfo"},next:{title:"$commandsCount",permalink:"/docs/functions/commandscount"}},m=[{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],i={toc:m};function u(e){let{components:n,...t}=e;return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This function returns the name of the current code."),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$commandName\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "myawesomecommand",\ncode: `The command name is $commandName`\n/*\nThe bot would return:\n"myawesomecommand"\n*/\n})\n')))}u.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),p=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},l=function(e){var n=p(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),d=r,f=l["".concat(c,".").concat(d)]||l[d]||s[d]||a;return t?o.a.createElement(f,m(m({ref:n},u),{},{components:t})):o.a.createElement(f,m({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=d;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,c[1]=m;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);