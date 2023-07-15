"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20349],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),s=c(n),d=a,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||o;return n?r.createElement(f,i(i({ref:e},m),{},{components:n})):r.createElement(f,i({ref:e},m))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[s]="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47377:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>N,frontMatter:()=>f,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&m(t,n,e[n]);if(l)for(var n of l(e))c.call(e,n)&&m(t,n,e[n]);return t},p=(t,e)=>o(t,i(e)),d=(t,e)=>{var n={};for(var r in t)u.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&l)for(var r of l(t))e.indexOf(r)<0&&c.call(t,r)&&(n[r]=t[r]);return n};const f={title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",id:"setTimeout"},g=void 0,k={unversionedId:"functions/misc-related/setTimeout",id:"version-6.4.0/functions/misc-related/setTimeout",title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/setTimeout.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/setTimeout",permalink:"/ar/docs/functions/misc-related/setTimeout",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",id:"setTimeout"},sidebar:"docs",previous:{title:"$setCacheData",permalink:"/ar/docs/functions/misc-related/setCacheData"},next:{title:"$shutdown",permalink:"/ar/docs/functions/misc-related/shutdown"}},b={},y=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],v={toc:y},h="wrapper";function N(t){var e=t,{components:n}=e,a=d(e,["components"]);return(0,r.kt)(h,p(s(s({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setTimeout")," will set a timeout for a given action (which will even continue to run after bot restart)."),(0,r.kt)("h2",s({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]\n")),(0,r.kt)("h2",s({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"awaitedCmd"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Awaited command to execute after duration ends."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"duration"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string, number"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"After how much time it will execute / this cannot go over ",(0,r.kt)("strong",{parentName:"td"},"21 days"),"."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"timeoutData"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"object"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Timeout data."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"returnId?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Return timeout ID."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"pulse?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Pulse."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can retrieve timeout data using ",(0,r.kt)("inlineCode",{parentName:"li"},"$timeoutData[name]"),"."),(0,r.kt)("li",{parentName:"ul"},"Note that the duration may not go over ",(0,r.kt)("strong",{parentName:"li"},"21 days"),".")),(0,r.kt)("h2",s({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,r.kt)("p",null,'This will send "Hello!" after 10 seconds in the command execution channel:'),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "setTimeout",\n    code: `\n    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]\n    `\n});\n\nbot.timeoutCommand({\n    name: "timeoutCommand",\n    code: `\n    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]\n    `\n});\n')))}N.isMDXComponent=!0}}]);