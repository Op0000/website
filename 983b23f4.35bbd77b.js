(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{391:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return i}));var a=n(3),r=(n(0),n(618));const c={title:"$channelSendMessage",description:"Sends a message to given Channel ID"},l={unversionedId:"functions/channelsendmessage",id:"functions/channelsendmessage",isDocsHomePage:!1,title:"$channelSendMessage",description:"Sends a message to given Channel ID",source:"@site/docs/functions/channelsendmessage.md",slug:"/functions/channelsendmessage",permalink:"/docs/functions/channelsendmessage",version:"current",sidebar:"someSidebar",previous:{title:"$channelPermissionsFor",permalink:"/docs/functions/channelpermissionsfor"},next:{title:"$channelTopic",permalink:"/docs/functions/channeltopic"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Examples",id:"examples",children:[]}],s={toc:o};function i(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This function allows you to send a message in the channel you selected previously."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$channelSendMessage[channelID;message;returnMessageID?]\n")),Object(r.b)("h3",{id:"fields"},"Fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Field"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"channel ID"),Object(r.b)("td",{parentName:"tr",align:"left"},"The channel where the message is to be sent"),Object(r.b)("td",{parentName:"tr",align:"left"},"number"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"message"),Object(r.b)("td",{parentName:"tr",align:"left"},"The message that is to be sent"),Object(r.b)("td",{parentName:"tr",align:"left"},"number"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"return ID"),Object(r.b)("td",{parentName:"tr",align:"left"},"Whether the id of the message is to be returned or not"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes/no"),Object(r.b)("td",{parentName:"tr",align:"left"},"no")))),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Without the optional field")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "send",\n  code: `$channelSendMessage[Channel ID;$message]`\n});\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"With the optional field")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "send",\n  code: `$channelSendMessage[Channel ID;$message;yes]`\n});\n')))}i.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(m,o(o({ref:t},i),{},{components:n})):r.a.createElement(m,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);