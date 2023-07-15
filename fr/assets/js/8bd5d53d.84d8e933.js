"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2001],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23348:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>k,default:()=>O,frontMatter:()=>g,metadata:()=>b,toc:()=>y});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&d(t,n,e[n]);if(l)for(var n of l(e))s.call(e,n)&&d(t,n,e[n]);return t},u=(t,e)=>i(t,o(e)),m=(t,e)=>{var n={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&l)for(var a of l(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n};const g={title:"Client Options",description:"This page is covering all aoi.js client options and what they do.",id:"clientoptions"},k=void 0,b={unversionedId:"guides/client/clientoptions",id:"version-6.4.0/guides/client/clientoptions",title:"Client Options",description:"This page is covering all aoi.js client options and what they do.",source:"@site/versioned_docs/version-6.4.0/guides/client/1clientoptions.md",sourceDirName:"guides/client",slug:"/guides/client/clientoptions",permalink:"/fr/docs/guides/client/clientoptions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"Client Options",description:"This page is covering all aoi.js client options and what they do.",id:"clientoptions"},sidebar:"docs",previous:{title:"Welcome to aoi.js Documentation",permalink:"/fr/docs/"},next:{title:"Client Events",permalink:"/fr/docs/guides/client/events"}},N={},y=[],f={toc:y},v="wrapper";function O(t){var e=t,{components:n}=e,r=m(e,["components"]);return(0,a.kt)(v,u(c(c({},f),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This page is about all aoi.js Client Options and what they do.")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="index.js"',title:'"index.js"'}),'const { AoiClient } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token : string,\n    prefix : string,\n    intents : ["MessageContent", "Guilds", "GuildMessages"],\n    events : ["onMessage", "onJoin", "onLeave"],\n    disableFunctions? : ["$function", "$function"],\n    plugins? : "./path/to/directory",\n    respondToBots? : boolean,\n    guildOnly? : boolean,\n    cache? : {\n        users : number,\n        messages : number,\n    },\n    database? : {\n        type : "aoi.db",\n        db : require("@akarui/aoi.db"),\n        tables : ["main"],\n        path : "./database/",\n        extraOptions : {\n            dbType: "KeyValue",\n        }\n    }, // Example refers to @akarui/aoi.db, other databases are not included in this Example.\n    suppressAllErrors? : boolean,\n    errorMessage? : string,\n    aoiAutoUpdate? : boolean,\n    aoiWarning? : boolean,\n    aoiLogs? : boolean,\n    respondOnEdit? : {\n        commands : boolean,\n        alwaysExecute? : boolean,\n        nonPrefixed? : boolean,\n        time : number\n    },\n});\n')),(0,a.kt)("hr",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",c({parentName:"tr"},{align:null}),"OPTION"),(0,a.kt)("th",c({parentName:"tr"},{align:"center"}),"INPUT"),(0,a.kt)("th",c({parentName:"tr"},{align:null}),"EXPLANATION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"token")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Your Discord Bot Token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"prefix")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Your Discord Bot Prefix")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"intents")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Required Intents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"events")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Required Events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"disableFunctions")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"aoi.js functions you want to make unuseable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"plugins")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"aoi.js plugins directory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"respondToBots")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"boolean"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Either give your bot the ability to respond to bots or remove it.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"guildOnly")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"boolean"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Either give your bot the ability to respond in Direct Message or remove it.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"cache")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Client Cache Options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"database")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Client Database Options.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"suppressAllErrors")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"boolean"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Suppress all occuring errors.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"errorMessage")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Send a given error message when ",(0,a.kt)("inlineCode",{parentName:"td"},"suppressAllErrors")," executes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aoiAutoUpdate")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"boolean"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Automatically update aoi.js if a update is available.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aoiWarning")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"boolean"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Disable aoiWarning logs which are sent to your console.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aoiLogs")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"boolean"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Disable aoiLogs which are sent to your console.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",c({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"respondOnEdit")),(0,a.kt)("td",c({parentName:"tr"},{align:"center"}),"string"),(0,a.kt)("td",c({parentName:"tr"},{align:null}),"Give your bot the ability to respond to edited messages and execute the given commands.")))))}O.isMDXComponent=!0}}]);