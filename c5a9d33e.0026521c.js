(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{485:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),r=(n(0),n(618));const o={title:"$ban",description:"Bans an user from the guild using their ID."},i={unversionedId:"functions/ban",id:"functions/ban",isDocsHomePage:!1,title:"$ban",description:"Bans an user from the guild using their ID.",source:"@site/docs/functions/ban.md",slug:"/functions/ban",permalink:"/docs/functions/ban",version:"current",sidebar:"someSidebar",previous:{title:"$awaitMessageReactions",permalink:"/docs/functions/awaitmessagereactions"},next:{title:"$banCount",permalink:"/docs/functions/bancount"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:b};function c(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"$ban")," allows you to ban someone from the server using their user ID. "),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$ban[guildID;userID;days?;reason]\n")),Object(r.b)("h3",{id:"fields"},"Fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Field"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"guild id"),Object(r.b)("td",{parentName:"tr",align:"left"},"The server ID where the user will get ban"),Object(r.b)("td",{parentName:"tr",align:"left"},"number"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"user id"),Object(r.b)("td",{parentName:"tr",align:"left"},"The user the bot is banning"),Object(r.b)("td",{parentName:"tr",align:"left"},"number"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"days"),Object(r.b)("td",{parentName:"tr",align:"left"},"How many of the messages over x days to delete of the banned user"),Object(r.b)("td",{parentName:"tr",align:"left"},"number"),Object(r.b)("td",{parentName:"tr",align:"left"},"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"reason"),Object(r.b)("td",{parentName:"tr",align:"left"},"The reason in the audit logs"),Object(r.b)("td",{parentName:"tr",align:"left"},"string"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")))),Object(r.b)("h6",{id:"footnote"},"Footnote"),Object(r.b)("p",null,"*Do not forget to use ",Object(r.b)("inlineCode",{parentName:"p"},"$onlyBotPerms")," and ",Object(r.b)("inlineCode",{parentName:"p"},"$onlyPerms")," to detect user has permission for this action, either bot!"),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "ban",\n  code: `\n  $username[$mentioned] has been banned from the guild.\n  \n  $ban[$guildID;$mentioned;7;$noMentionMessage]\n  `\n// Deleted 7 days of messages the user\n// \ud83d\udca1 That\'s also called as "soft-ban"\n});\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Without deleting user's messages on the guild:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "ban",\n  code: `\n  $username[$message] has been banned from the guild.\n  \n  $ban[$guildID;$message;0;$noMentionMessage]\n  `\n// Didn\'t delete any messages of the user, but banned\n});\n')))}c.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,b(b({ref:t},c),{},{components:n})):r.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);