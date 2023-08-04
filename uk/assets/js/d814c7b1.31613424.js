"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63614],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=d(n),k=r,c=s["".concat(m,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,o(o({ref:e},p),{},{components:n})):a.createElement(c,o({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},53329:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>N,default:()=>v,frontMatter:()=>c,metadata:()=>g,toc:()=>y});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&p(t,n,e[n]);if(i)for(var n of i(e))d.call(e,n)&&p(t,n,e[n]);return t},u=(t,e)=>l(t,o(e)),k=(t,e)=>{var n={};for(var a in t)m.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&d.call(t,a)&&(n[a]=t[a]);return n};const c={title:"Command Options",description:"This page is covering all command options and what they do.",id:"commandoptions"},N=void 0,g={unversionedId:"guides/other/commandoptions",id:"version-6.4.0/guides/other/commandoptions",title:"Command Options",description:"This page is covering all command options and what they do.",source:"@site/versioned_docs/version-6.4.0/guides/other/2commandoptions.md",sourceDirName:"guides/other",slug:"/guides/other/commandoptions",permalink:"/uk/docs/guides/other/commandoptions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691131617,formattedLastUpdatedAt:"4 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"Command Options",description:"This page is covering all command options and what they do.",id:"commandoptions"},sidebar:"docs",previous:{title:"Custom Functions",permalink:"/uk/docs/guides/other/customfunctions"},next:{title:"Parser",permalink:"/uk/docs/guides/other/parser"}},b={},y=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Base Commands",id:"base-commands",level:3},{value:"Event Commands",id:"event-commands",level:3},{value:"Interaction Commands",id:"interaction-commands",level:3},{value:"Loop Commands",id:"loop-commands",level:3}],h={toc:y},f="wrapper";function v(t){var e=t,{components:n}=e,r=k(e,["components"]);return(0,a.kt)(f,u(s(s({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This page is about command options and what they do.")),(0,a.kt)("h2",s({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"#base-commands"}),"Base Commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"#event-commands"}),"Event Commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"#interaction-commands"}),"Interaction Commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"#loop-commands"}),"Loop Commands"))),(0,a.kt)("h3",s({},{id:"base-commands"}),"Base Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),"module.exports = [{\n    name: string,\n    aliases? : string,\n    nonPrefixed? : boolean,\n    executeAt? : string,\n    code: string\n}]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"OPTION"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"INPUT"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"EXPLANATION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Command Name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"aliases")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Aliases, work the same way as ",(0,a.kt)("inlineCode",{parentName:"td"},"name"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"nonPrefixed")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Set your command as non prefixed, meaning it can be executed without the actual prefix.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"executeAt")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Define where it may can get executed in. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"guild")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"dm")," ",(0,a.kt)("br",null)," 3. ",(0,a.kt)("strong",{parentName:"td"},"groupDM")," ",(0,a.kt)("br",null)," 4. ",(0,a.kt)("strong",{parentName:"td"},"both"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"code")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Your command code.")))),(0,a.kt)("h3",s({},{id:"event-commands"}),"Event Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),"module.exports = [{\n    name?: string,\n    type: string,\n    channel?: string,\n    code: string,\n}]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"OPTION"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"INPUT"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"EXPLANATION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Command Name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Defines the command type, any event, for example: ",(0,a.kt)("inlineCode",{parentName:"td"},"interaction")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"loop"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"channel")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Where the output may go.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"code")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Your command code.")))),(0,a.kt)("h3",s({},{id:"interaction-commands"}),"Interaction Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),"module.exports = [{\n    name: string,\n    type: string,\n    prototype: string,\n    code: string,\n}]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"OPTION"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"INPUT"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"EXPLANATION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Command Name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Defines the command type.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"prototype")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Defines what the command will be triggered by. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"button")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"selectMenu")," ",(0,a.kt)("br",null)," 4. ",(0,a.kt)("strong",{parentName:"td"},"slash")," ",(0,a.kt)("br",null)," 5. ",(0,a.kt)("strong",{parentName:"td"},"modal"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"code")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Your command code.")))),(0,a.kt)("h3",s({},{id:"loop-commands"}),"Loop Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),"module.exports = [{\n    name: string,\n    type: string,\n    channel?: integer,\n    executeOnStartup?: boolean,\n    every: number,\n    code: string\n}]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"OPTION"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"INPUT"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"EXPLANATION"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Command Name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Defines the command type, any event, ",(0,a.kt)("inlineCode",{parentName:"td"},"interaction")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"loop"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"channel")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Where the output may go.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"executeOnStartup")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"If the command will be executed after the bot restarted.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"every")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Interval of the loop command.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"code")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Your command code.")))))}v.isMDXComponent=!0}}]);