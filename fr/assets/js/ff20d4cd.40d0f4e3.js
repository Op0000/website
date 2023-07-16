"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52734],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||l;return t?r.createElement(d,o(o({ref:n},s),{},{components:t})):r.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[f]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>h,default:()=>k,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&s(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&s(e,t,n[t]);return e},u=(e,n)=>l(e,o(n)),m=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const d={title:"$channelID",description:"Gives the Channel ID of the Channel Name. Will return current in if no channel name given"},h=void 0,g={unversionedId:"functions/channelid",id:"version-5.5.5/functions/channelid",title:"$channelID",description:"Gives the Channel ID of the Channel Name. Will return current in if no channel name given",source:"@site/versioned_docs/version-5.5.5/functions/channelid.md",sourceDirName:"functions",slug:"/functions/channelid",permalink:"/fr/docs/5.5.5/functions/channelid",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$channelID",description:"Gives the Channel ID of the Channel Name. Will return current in if no channel name given"},sidebar:"docs",previous:{title:"$channelExists",permalink:"/fr/docs/5.5.5/functions/channelexists"},next:{title:"$createApplicationCommand",permalink:"/fr/docs/5.5.5/functions/createapplicationcommand"}},v={},y=[{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],b={toc:y},O="wrapper";function k(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(O,u(f(f({},b),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This channel returns the current channel or the specified channel's ID"),(0,r.kt)("h3",f({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$channelID[channel name?]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"channel name"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"The name of the channel"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h2",f({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "channelID", \ncode: `$channelID[$message]` //Gets the channel ID via message\n})\n\nbot.command({\nname: "channelID", \ncode: `$channelID` //Gets the channel ID where the comamnd was ran in\n})\n')))}k.isMDXComponent=!0}}]);