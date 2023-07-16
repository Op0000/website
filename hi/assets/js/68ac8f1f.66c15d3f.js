"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20732],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>s});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(r),f=n,s=u["".concat(d,".").concat(f)]||u[f]||c[f]||l;return r?a.createElement(s,i(i({ref:e},m),{},{components:r})):a.createElement(s,i({ref:e},m))}));function s(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93555:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>v,frontMatter:()=>s,metadata:()=>k,toc:()=>N});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,u=(t,e)=>{for(var r in e||(e={}))d.call(e,r)&&m(t,r,e[r]);if(o)for(var r of o(e))p.call(e,r)&&m(t,r,e[r]);return t},c=(t,e)=>l(t,i(e)),f=(t,e)=>{var r={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&p.call(t,a)&&(r[a]=t[a]);return r};const s={title:"$formatDate",description:"$formatDate will format a given date.",id:"formatDate"},g=void 0,k={unversionedId:"functions/util-related/formatDate",id:"version-6.4.0/functions/util-related/formatDate",title:"$formatDate",description:"$formatDate will format a given date.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/formatDate.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/formatDate",permalink:"/hi/docs/functions/util-related/formatDate",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$formatDate",description:"$formatDate will format a given date.",id:"formatDate"},sidebar:"docs",previous:{title:"$findSpecialChars",permalink:"/hi/docs/functions/util-related/findSpecialChars"},next:{title:"$get",permalink:"/hi/docs/functions/util-related/get"}},y={},N=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2}],b={toc:N},h="wrapper";function v(t){var e=t,{components:r}=e,n=f(e,["components"]);return(0,a.kt)(h,c(u(u({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$formatDate")," will format a given date."),(0,a.kt)("h2",u({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$formatDate[date;format?]\n")),(0,a.kt)("h2",u({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"\u091a\u093e\u0939\u093f\u090f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"date"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"The date you want to format."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"format?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"The format that will be used to display the date (listed below)."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null," ",(0,a.kt)("h2",null," Possible formatting ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Format"),(0,a.kt)("th",u({parentName:"tr"},{align:null})),(0,a.kt)("th",u({parentName:"tr"},{align:"right"}),"Returns"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dddd"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns the weekday, Monday, Tuesday, Wednesday ..."),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"dd"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns the abbreviation of the weekday, Mon, Tue, Wed ..."),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"D"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns the day of the month"),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"Number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"DD"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns the day of the month"),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"DDD"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns the day of the year, 256, 257 ..."),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"Number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"M / MM"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns the month of the year, 10, 11 ..."),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"Number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"MMM"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns the abbreviation of the month, Jan, Feb ..."),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"MMMM"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns the month fully January, February ..."),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"String")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"YYYY"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns year fully, 2020, 2021 ..."),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"Number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"YY"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Returns the last two digits of the year, 20, 21 ..."),(0,a.kt)("td",u({parentName:"tr"},{align:"right"}),"Number"))))),(0,a.kt)("h2",u({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,a.kt)("p",null,"This will return your current date in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dddd, DD MMMM YYYY")," format:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'formatDate',\n    code: `\n  $formatDate[$dateStamp;dddd, DD MMMM YYYY]\n  `\n});\n")))}v.isMDXComponent=!0}}]);