"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>N,frontMatter:()=>d,metadata:()=>g,toc:()=>h});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$boostingSince",description:"Returns the amount of time the user has been boosting for."},b=void 0,g={unversionedId:"functions/boostingsince",id:"version-5.5.5/functions/boostingsince",title:"$boostingSince",description:"Returns the amount of time the user has been boosting for.",source:"@site/versioned_docs/version-5.5.5/functions/boostingsince.md",sourceDirName:"functions",slug:"/functions/boostingsince",permalink:"/uk/docs/5.5.5/functions/boostingsince",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$boostingSince",description:"Returns the amount of time the user has been boosting for."},sidebar:"docs",previous:{title:"$blacklistOnlyCommands",permalink:"/uk/docs/5.5.5/functions/blacklistonlycommands"},next:{title:"$botCount",permalink:"/uk/docs/5.5.5/functions/botcount"}},k={},h=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Format Options",id:"format-options",level:4},{value:"Examples",id:"examples",level:2}],y={toc:h},v="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,m(u(u({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will return the amount of time the user has been boosting for. if the user isn't boosting it will return nothing."),(0,r.kt)("h3",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$boostingSince[guildId?;userId?;format?]\n")),(0,r.kt)("h3",u({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"guild ID"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The id of the guild"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"user ID"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The id of the user"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"format"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"The format on how you want the date to be returned"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"str & num"),(0,r.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h4",u({},{id:"format-options"}),"Format Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Blank ","(","No format provided",")"," - Example: Friday, 12 March 2021"),(0,r.kt)("li",{parentName:"ul"},"LT - Time - Example: 4:01 AM"),(0,r.kt)("li",{parentName:"ul"},"LTS - Time w/ seconds - Example: 3:58:5 AM"),(0,r.kt)("li",{parentName:"ul"},"L - Date - Example: 3/12/2021"),(0,r.kt)("li",{parentName:"ul"},"LLL - Specified Date - Example: March 12 2021 4:02 AM"),(0,r.kt)("li",{parentName:"ul"},"LLLL - - Specified Date w/ Day - Example: Friday, March 12 2021 4:02 AM"),(0,r.kt)("li",{parentName:"ul"},"dddd - Day - Example: Friday"),(0,r.kt)("li",{parentName:"ul"},"HH - Hour - Example: 15"),(0,r.kt)("li",{parentName:"ul"},"For more formats, check ",(0,r.kt)("a",u({parentName:"li"},{href:"https://thecodebarbarian.com/formatting-javascript-dates-with-moment-js.html"}),"here"))),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "boosting",\n    code: `\nLeref has been boosting since $boostingSince[773352845738115102;608358453580136499;L] // Checking when Leref boosted Akarui Development server.\n    `\n}); // Returns: 5/6/2022\n')))}N.isMDXComponent=!0}}]);