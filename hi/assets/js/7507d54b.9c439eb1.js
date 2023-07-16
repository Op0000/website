"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$channelOverwrites"},h=void 0,v={unversionedId:"functions/channeloverwrites",id:"version-5.5.5/functions/channeloverwrites",title:"$channelOverwrites",description:"This function returns the channel permission overwrites",source:"@site/versioned_docs/version-5.5.5/functions/channeloverwrites.md",sourceDirName:"functions",slug:"/functions/channeloverwrites",permalink:"/hi/docs/5.5.5/functions/channeloverwrites",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$channelOverwrites"},sidebar:"docs",previous:{title:"$channelNSFW",permalink:"/hi/docs/5.5.5/functions/channelnsfw"},next:{title:"$channelPermissionsFor",permalink:"/hi/docs/5.5.5/functions/channelpermissionsfor"}},g={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Properties",id:"properties",level:4},{value:"Examples",id:"examples",level:2}],b={toc:y},k="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,u(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the channel permission overwrites"),(0,r.kt)("h3",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$channelOverwrites[channelID?;properties?;separator?]\n")),(0,r.kt)("h3",d({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"channel ID"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The channel we're getting permission from"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"properties"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The properties that will be displayed"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"separator"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"To separate each permission"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h4",d({},{id:"properties"}),"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"{type} - Channel Type"),(0,r.kt)("li",{parentName:"ul"},"{mention} - Mention's the channel"),(0,r.kt)("li",{parentName:"ul"},"{allowed} - The allowed perms"),(0,r.kt)("li",{parentName:"ul"},"{denied} - The denied perms")),(0,r.kt)("h2",d({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'\n//Without the optional fields\nbot.command({\n    name: "channel",\n    code: `\nCurrent Channel Overwrites\n$channelOverwrites\n    `\n});\n\n\n//With the optional fields\nbot.command({\n    name: "channel",\n    code: `\nCurrent Channel Overwrites\n$channelOverwrites[$channelID;{mention}\'s Overwrites:\\nAllowed: {allowed}\\n\nDenied:\\n{denied};,]\n    `\n});\n')))}O.isMDXComponent=!0}}]);