"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[17590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,u=m["".concat(c,".").concat(d)]||m[d]||f[d]||i;return r?n.createElement(u,o(o({ref:t},p),{},{components:r})):n.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>i(e,o(t)),d=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const u={title:"$clearReaction",description:"Clears the given emoji of the given message"},g=void 0,h={unversionedId:"functions/clearreaction",id:"version-5.5.5/functions/clearreaction",title:"$clearReaction",description:"Clears the given emoji of the given message",source:"@site/versioned_docs/version-5.5.5/functions/clearreaction.md",sourceDirName:"functions",slug:"/functions/clearreaction",permalink:"/hi/docs/5.5.5/functions/clearreaction",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$clearReaction",description:"Clears the given emoji of the given message"},sidebar:"docs",previous:{title:"$clearQueue",permalink:"/hi/docs/5.5.5/functions/clearqueue"},next:{title:"$clearReactions",permalink:"/hi/docs/5.5.5/functions/clearreactions"}},v={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],b={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,f(m(m({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will remove the given emoji for the given message ID of the given user in the given channel."),(0,n.kt)("h3",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$clearReaction[channelID;messageID;userID;emoji]\n")),(0,n.kt)("h3",m({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"channel ID"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The channel ID where the message is present"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"message ID"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The message ID where the reaction is present"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"user ID"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The id of the user whose reaction is to be deleted"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"emoji"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The emoji which is to be deleted"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"emoji"),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h2",m({},{id:"example"}),"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "clear-reaction",\n  code: `The reaction has been removed.\n  $clearReaction[804505335397744650;820290083395469352;535566311942651924;\ud83d\udc4d]\n  `\n});\n\n')))}O.isMDXComponent=!0}}]);