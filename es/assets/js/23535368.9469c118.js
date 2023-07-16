"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31437],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,d=m["".concat(c,".").concat(u)]||m[u]||f[u]||l;return t?a.createElement(d,i(i({ref:n},s),{},{components:t})):a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},56183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>w,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var a=t(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(o)for(var t of o(n))p.call(n,t)&&s(e,t,n[t]);return e},f=(e,n)=>l(e,i(n)),u=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const d={title:"$channelName",description:"Retrieves the Channel Name by Channel ID, if no channel is specified it will return the name of the channel where the command was executed."},h=void 0,y={unversionedId:"functions/channelname",id:"version-5.5.5/functions/channelname",title:"$channelName",description:"Retrieves the Channel Name by Channel ID, if no channel is specified it will return the name of the channel where the command was executed.",source:"@site/versioned_docs/version-5.5.5/functions/channelname.md",sourceDirName:"functions",slug:"/functions/channelname",permalink:"/es/docs/5.5.5/functions/channelname",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$channelName",description:"Retrieves the Channel Name by Channel ID, if no channel is specified it will return the name of the channel where the command was executed."},sidebar:"docs",previous:{title:"$createApplicationCommand",permalink:"/es/docs/5.5.5/functions/createapplicationcommand"},next:{title:"$channelNSFW",permalink:"/es/docs/5.5.5/functions/channelnsfw"}},b={},v=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],g={toc:v},O="wrapper";function w(e){var n=e,{components:t}=n,r=u(n,["components"]);return(0,a.kt)(O,f(m(m({},g),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function allows you to obtain the name of a specific channel indicated by its channel ID, if neither a channel ID is given, the function will return as a product the name of the channel in which the command was executed"),(0,a.kt)("h3",m({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$channelName[channelID?]\n")),(0,a.kt)("h3",m({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"channel ID"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The id of the channel whose name is to be returned"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",m({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "name",\n    code: `$channelName[$mentionedChannels[1;yes]]`\n});\n')))}w.isMDXComponent=!0}}]);