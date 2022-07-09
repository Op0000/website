(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{171:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(3),r=(t(0),t(618));const c={title:"$cloneChannel",description:"Clones the current channel"},l={unversionedId:"functions/clonechannel",id:"functions/clonechannel",isDocsHomePage:!1,title:"$cloneChannel",description:"Clones the current channel",source:"@site/docs/functions/clonechannel.md",slug:"/functions/clonechannel",permalink:"/docs/functions/clonechannel",version:"current",sidebar:"someSidebar",previous:{title:"$clientToken",permalink:"/docs/functions/clienttoken"},next:{title:"$closeTicket",permalink:"/docs/functions/closeticket"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Example",id:"example",children:[]}],i={toc:o};function b(e){let{components:n,...t}=e;return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This function allows the bot to clone the name, topic and channel position of the current or given channel."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$cloneChannel[channelID?;return_new_channelID?]\n")),Object(r.b)("h3",{id:"fields"},"Fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Field"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"channel ID"),Object(r.b)("td",{parentName:"tr",align:"left"},"The id of the channel that is to be cloned"),Object(r.b)("td",{parentName:"tr",align:"left"},"number"),Object(r.b)("td",{parentName:"tr",align:"left"},"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"return ID"),Object(r.b)("td",{parentName:"tr",align:"left"},"Whether to return the id of the channel created"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes/no"),Object(r.b)("td",{parentName:"tr",align:"left"},"no")))),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Without optional field:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "clonechannel",\ncode: `I have cloned this channel!\n$cloneChannel`\n})\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"With optional field")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "clonechannel",\ncode: `I have cloned this channel!\n$cloneChannel[$mentionedChannels[1]]`\n})\n\n')),Object(r.b)("p",null,"With optional field to clone current channel, save the new channel's ID inside ",Object(r.b)("a",{parentName:"p",href:"/docs/functions/let"},"$let","[","]"," "),"and return the ID of the new channel as a channel mention with ",Object(r.b)("a",{parentName:"p",href:"/docs/functions/get"},"$get","[","]"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "clonechannel",\ncode: `$channelSendMessage[$get[new];This is the clone!]\n$let[channel;$cloneChannel[$channelID;yes]]\n`\n})\n')))}b.isMDXComponent=!0},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,h=u["".concat(l,".").concat(d)]||u[d]||s[d]||c;return t?r.a.createElement(h,o(o({ref:n},b),{},{components:t})):r.a.createElement(h,o({ref:n},b))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<c;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);