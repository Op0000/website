"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[18106],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>y});var a=t(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(o)for(var t of o(n))s.call(n,t)&&p(e,t,n[t]);return e},d=(e,n)=>l(e,i(n)),f=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$isChannelManageable",description:"$isChannelManageable will check if the channel is manageable or not.",id:"isChannelManageable"},b=void 0,g={unversionedId:"functions/util-related/isChannelManageable",id:"version-6.4.0/functions/util-related/isChannelManageable",title:"$isChannelManageable",description:"$isChannelManageable will check if the channel is manageable or not.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isChannelManageable.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isChannelManageable",permalink:"/uk/docs/functions/util-related/isChannelManageable",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$isChannelManageable",description:"$isChannelManageable will check if the channel is manageable or not.",id:"isChannelManageable"},sidebar:"docs",previous:{title:"$isBot",permalink:"/uk/docs/functions/util-related/isBot"},next:{title:"$isCustomEmoji",permalink:"/uk/docs/functions/util-related/isCustomEmoji"}},h={},y=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],k={toc:y},v="wrapper";function O(e){var n=e,{components:t}=n,r=f(n,["components"]);return(0,a.kt)(v,d(u(u({},k),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$isChannelManageable")," will check if the channel is manageable or not."),(0,a.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$isChannelManageable[channelID?]\n")),(0,a.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"channelID?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ID of the channel to check if the channel is manageable or not."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,a.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," depending on if the channel you're executing the command in is manageable:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isChannelManageable',\n    code: `\n  $isChannelManageable[$channelID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);