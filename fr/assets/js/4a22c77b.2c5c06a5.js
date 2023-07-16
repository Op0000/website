"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75084],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61776:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(o)for(var t of o(n))p.call(n,t)&&s(e,t,n[t]);return e},d=(e,n)=>l(e,i(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&o)for(var r of o(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$findChannel",description:"$findChannel will search a given channel by its name.",id:"findChannel"},h=void 0,g={unversionedId:"functions/util-related/findChannel",id:"version-6.4.0/functions/util-related/findChannel",title:"$findChannel",description:"$findChannel will search a given channel by its name.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/findChannel.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/findChannel",permalink:"/fr/docs/functions/util-related/findChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$findChannel",description:"$findChannel will search a given channel by its name.",id:"findChannel"},sidebar:"docs",previous:{title:"$filterMessage",permalink:"/fr/docs/functions/util-related/filterMessage"},next:{title:"$findGuildChannel",permalink:"/fr/docs/functions/util-related/findGuildChannel"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},k="wrapper";function O(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(k,d(u(u({},v),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$findChannel")," will search a given channel by its name."),(0,r.kt)("h2",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$findChannel[channelResolver;returnSelf?]\n")),(0,r.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"channelResolver"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Name of the channel you want to search for."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"returnSelf?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Will return the channel where the command is executed in by default if the given channel was not found."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"882360051640193054")," as it was able to find the ",(0,r.kt)("inlineCode",{parentName:"p"},"#\u2282\u30fb\u2283\ufe50aoi_v5")," channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findChannel',\n    code: `\n  $findChannel[\u2282\u30fb\u2283\ufe50aoi_v5;false]\n  `\n});\n")))}O.isMDXComponent=!0}}]);