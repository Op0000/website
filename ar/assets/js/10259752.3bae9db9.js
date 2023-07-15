"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93887],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},90078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>h,frontMatter:()=>k,metadata:()=>g,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&u(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&u(e,a,t[a]);return e},d=(e,t)=>l(e,i(t)),c=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a};const k={title:"$setFilter",description:"$setFilter will set given filters.",id:"setFilter"},f=void 0,g={unversionedId:"official/aoi.music/functions/setFilter",id:"official/aoi.music/functions/setFilter",title:"$setFilter",description:"$setFilter will set given filters.",source:"@site/extensions/official/aoi.music/functions/setFilter.md",sourceDirName:"official/aoi.music/functions",slug:"/official/aoi.music/functions/setFilter",permalink:"/ar/extensions/official/aoi.music/functions/setFilter",draft:!1,tags:[],version:"current",frontMatter:{title:"$setFilter",description:"$setFilter will set given filters.",id:"setFilter"},sidebar:"docs",previous:{title:"$seek",permalink:"/ar/extensions/official/aoi.music/functions/seek"},next:{title:"$shuffleQueue",permalink:"/ar/extensions/official/aoi.music/functions/shuffleQueue"}},N={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:b},v="wrapper";function h(e){var t=e,{components:a}=t,r=c(t,["components"]);return(0,n.kt)(v,d(m(m({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$setFilter")," will set given filters."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$setFilter[filter]\n")),(0,n.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"filter"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"JSON format"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Filter"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Contains"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"JSON Format"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"nightCore"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"aresample, asetrate"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"nightCore": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bassBoost"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"bass"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"bassBoost": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"8D"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"extrastereo, aecho, apulsator, stereowiden"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"8D: "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"pitch"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"asetrate, atempo, aresample"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"pitch": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"karaoke"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"stereotools"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"karaoke": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"slowed"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"asetrate, aresample"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"slowed": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"deep"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"asetrate, atempo, aresample"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"deep": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"trebleBoost"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"treble"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"trebleBoost": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"gate"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"agate"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"gate": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"vibrato"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"vibrato"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"vibrato": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"flanger"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"flanger"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"flanger": "value"}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"phaser"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"aphaser"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'{"phaser": "value"}'))))),(0,n.kt)("p",null,"aoi.music also supports ",(0,n.kt)("inlineCode",{parentName:"p"},"ffmpeg")," built-in filters in json format."),(0,n.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will set the filter to ",(0,n.kt)("inlineCode",{parentName:"p"},"nightCore")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"bassBoost")," filters:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'setFilter\',\n    code: `\n    $setFilter[{"nightCore": "1", "bassBoost": "0.3"}]\n  `\n});\n')))}h.isMDXComponent=!0}}]);