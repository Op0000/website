(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=(n(0),n(618));const a={title:"$allEmojiCount"},i={unversionedId:"functions/allemojicount",id:"functions/allemojicount",isDocsHomePage:!1,title:"$allEmojiCount",description:"This function returns the total amount of emojis the servers the bot is in have. This is the sum of all custom emojis of all servers the bot is member of.",source:"@site/docs/functions/allemojicount.md",slug:"/functions/allemojicount",permalink:"/docs/functions/allemojicount",version:"current",sidebar:"someSidebar",previous:{title:"$allChannelsCount",permalink:"/docs/functions/allchannelscount"},next:{title:"$allMembersCount",permalink:"/docs/functions/allmemberscount"}},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This function returns the total amount of emojis the servers the bot is in have. This is the sum of all custom emojis of all servers the bot is member of."),Object(r.b)("p",null,"Raw usage: ",Object(r.b)("inlineCode",{parentName:"p"},"$allEmojiCount[type (optional)]")),Object(r.b)("h4",{id:"types"},"Types:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"all")," or empty field => returns total amount of custom emojis the bot has access to (animated and normal)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"animated")," => returns amount of non-animated custom emojis emojis"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"normal")," => returns amount of non-animated custom emojis emojis")),Object(r.b)("h4",{id:"total-emoji-count"},"Total emoji count:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount emojis`\n})\n')),Object(r.b)("h4",{id:"animated-emojis"},"Animated Emojis:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount[animated] emojis`\n})\n')),Object(r.b)("h4",{id:"normal-emojis"},"normal Emojis:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "emojiCount",\ncode: `$allEmojiCount[animated] emojis`\n})\n')))}u.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),m=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(n),b=o,j=s["".concat(i,".").concat(b)]||s[b]||p[b]||a;return n?r.a.createElement(j,c(c({ref:t},u),{},{components:n})):r.a.createElement(j,c({ref:t},u))}));function j(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);