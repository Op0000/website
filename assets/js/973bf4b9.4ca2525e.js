"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52064],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={title:"$mentionedChannelsCount",description:"$mentionedChannelsCount will return the amount of channel mentions within a message.",id:"mentionedChannelsCount"},i=void 0,l={unversionedId:"functions/util-related/mentionedChannelsCount",id:"version-6.2.6/functions/util-related/mentionedChannelsCount",title:"$mentionedChannelsCount",description:"$mentionedChannelsCount will return the amount of channel mentions within a message.",source:"@site/versioned_docs/version-6.2.6/functions/util-related/mentionedChannelsCount.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedChannelsCount",permalink:"/docs/functions/util-related/mentionedChannelsCount",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1686793015,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$mentionedChannelsCount",description:"$mentionedChannelsCount will return the amount of channel mentions within a message.",id:"mentionedChannelsCount"},sidebar:"docs",previous:{title:"$mentionedChannels",permalink:"/docs/functions/util-related/mentionedChannels"},next:{title:"$mentionedRoles",permalink:"/docs/functions/util-related/mentionedRoles"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$mentionedChannelsCount")," will return the amount of channel mentions within a message."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$mentionedChannelsCount\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will return the amount of channel mentions in the given text:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'mentionedChannelsCount',\n    code: `\n  $mentionedChannelsCount\n  <#837531672341381190> <#869210515065426012> <#805852932938661900>\n  `\n});\n")))}d.isMDXComponent=!0}}]);