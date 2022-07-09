(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{261:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=(t(0),t(618));const i={title:"$findChannel",description:"Retrieve the Channel ID, when writing the name of the Channel. (Global)"},o={unversionedId:"functions/findchannel",id:"functions/findchannel",isDocsHomePage:!1,title:"$findChannel",description:"Retrieve the Channel ID, when writing the name of the Channel. (Global)",source:"@site/docs/functions/findchannel.md",slug:"/functions/findchannel",permalink:"/docs/functions/findchannel",version:"current",sidebar:"someSidebar",previous:{title:"$filterMessage",permalink:"/docs/functions/filtermessage"},next:{title:"$findChars",permalink:"/docs/functions/findchars"}},c=[],l={toc:c};function u(e){let{components:n,...t}=e;return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function returns the channel ID of the specified channel. Yes/No will determine if function returns current channel id ","(","yes",")"," or undefined ","(","no",")"," if no match was found. Default is yes"),Object(a.b)("h4",{id:"fields"},"Fields"),Object(a.b)("p",null,"This function has 1 required field"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Channel ","(","Required",")"),Object(a.b)("li",{parentName:"ol"},"Return Current Channel ID ","(","Optional",")")),Object(a.b)("p",null,"Raw Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"$findChannel[channel;returnCurrentChannel (yes/no) (optional)]")),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Channel - The channel we're finding. You can use name/id/mention"),Object(a.b)("li",{parentName:"ul"},"Return Current Channel ID - Returns current channel id if no channel found")),Object(a.b)("h4",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "channel",\ncode: `$findChannel[rubens-basement]`\n})\n')))}u.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=r,b=f["".concat(o,".").concat(d)]||f[d]||p[d]||i;return t?a.a.createElement(b,c(c({ref:n},u),{},{components:t})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);