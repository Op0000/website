"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87914],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},61100:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>f,default:()=>h,frontMatter:()=>k,metadata:()=>g,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,m=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&u(t,a,e[a]);if(o)for(var a of o(e))d.call(e,a)&&u(t,a,e[a]);return t},s=(t,e)=>l(t,i(e)),c=(t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&d.call(t,n)&&(a[n]=t[n]);return a};const k={title:"$addFilter",description:"$addFilter will add given filters.",id:"addFilter"},f=void 0,g={unversionedId:"official/aoi.music/functions/addFilter",id:"official/aoi.music/functions/addFilter",title:"$addFilter",description:"$addFilter will add given filters.",source:"@site/extensions/official/aoi.music/functions/addFilter.md",sourceDirName:"official/aoi.music/functions",slug:"/official/aoi.music/functions/addFilter",permalink:"/ar/extensions/official/aoi.music/functions/addFilter",draft:!1,tags:[],version:"current",frontMatter:{title:"$addFilter",description:"$addFilter will add given filters.",id:"addFilter"},sidebar:"docs",previous:{title:"Introduction",permalink:"/ar/extensions/official/aoi.music/aoimusic-introduction"},next:{title:"$autoPlay",permalink:"/ar/extensions/official/aoi.music/functions/autoPlay"}},N={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:b},v="wrapper";function h(t){var e=t,{components:a}=e,r=c(e,["components"]);return(0,n.kt)(v,s(m(m({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$addFilter")," will add given filters."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$addFilter[filter]\n")),(0,n.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"filter"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"JSON format"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Filter"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Contains"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"JSON Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"nightCore"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"aresample, asetrate"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"nightCore": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bassBoost"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bass"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"bassBoost": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8D"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"extrastereo, aecho, apulsator, stereowiden"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"8D: "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"pitch"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"asetrate, atempo, aresample"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"pitch": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"karaoke"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"stereotools"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"karaoke": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"slowed"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"asetrate, aresample"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"slowed": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"deep"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"asetrate, atempo, aresample"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"deep": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"trebleBoost"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"treble"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"trebleBoost": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"gate"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"agate"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"gate": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"vibrato"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"vibrato"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"vibrato": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"flanger"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"flanger"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"flanger": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"phaser"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"aphaser"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"phaser": "value"}'))))),(0,n.kt)("p",null,"aoi.music also supports ",(0,n.kt)("inlineCode",{parentName:"p"},"ffmpeg")," built-in filters in json format."),(0,n.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will add ",(0,n.kt)("inlineCode",{parentName:"p"},"nightCore")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"bassBoost")," filters:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'addFilter\',\n    code: `\n    $addFilter[{"nightCore": "1", "bassBoost": "0.3"}]\n  `\n});\n')))}h.isMDXComponent=!0}}]);