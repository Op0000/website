"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),g=a,f=c["".concat(u,".").concat(g)]||c[g]||s[g]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},57120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&p(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),g=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$guildChannels",description:"$guildChannels will return all channels of a specific guild.",id:"guildChannels"},m=void 0,h={unversionedId:"functions/guild-related/guildChannels",id:"version-6.4.0/functions/guild-related/guildChannels",title:"$guildChannels",description:"$guildChannels will return all channels of a specific guild.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildChannels.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildChannels",permalink:"/ar/docs/functions/guild-related/guildChannels",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$guildChannels",description:"$guildChannels will return all channels of a specific guild.",id:"guildChannels"},sidebar:"docs",previous:{title:"$guildChannelExists",permalink:"/ar/docs/functions/guild-related/guildChannelExists"},next:{title:"$guildCommunityUpdatesChannelID",permalink:"/ar/docs/functions/guild-related/guildCommunityUpdatesChannelID"}},y={},b=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],k={toc:b},v="wrapper";function O(e){var t=e,{components:n}=t,a=g(t,["components"]);return(0,r.kt)(v,s(c(c({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildChannels")," will return all channels of a specific guild."),(0,r.kt)("h2",c({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$guildChannels[guildID?;option?;sep?]\n")),(0,r.kt)("h2",c({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"guildID?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The ID of the guild."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"option?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The option on how to return the channel ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"name")," (default) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"id")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"mention")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"sep?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Separator to separate multiple returned values."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("h2",c({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,r.kt)("p",null,"This will return all channels of your guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildChannels',\n    code: `\n  $guildChannels[$guildID;mention;, ]\n  `\n});\n")))}O.isMDXComponent=!0}}]);