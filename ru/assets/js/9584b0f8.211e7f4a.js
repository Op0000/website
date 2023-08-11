"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64083],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(k,i(i({ref:e},u),{},{components:r})):n.createElement(k,i({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21805:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>v,frontMatter:()=>k,metadata:()=>f,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,d=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&u(t,r,e[r]);if(o)for(var r of o(e))c.call(e,r)&&u(t,r,e[r]);return t},s=(t,e)=>l(t,i(e)),m=(t,e)=>{var r={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&c.call(t,n)&&(r[n]=t[n]);return r};const k={title:"$argsCheck",description:"$argsCheck \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u0432\u0435\u043b \u0438 \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435 \u0431\u044b\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b, \u043e\u043d \u0432\u0435\u0440\u043d\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435.",id:"argsCheck"},g=void 0,f={unversionedId:"functions/util-related/argsCheck",id:"version-6.4.0/functions/util-related/argsCheck",title:"$argsCheck",description:"$argsCheck \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u0432\u0435\u043b \u0438 \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435 \u0431\u044b\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b, \u043e\u043d \u0432\u0435\u0440\u043d\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/argsCheck.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/argsCheck",permalink:"/ru/docs/functions/util-related/argsCheck",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691713856,formattedLastUpdatedAt:"11 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$argsCheck",description:"$argsCheck \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0432\u0432\u0435\u043b \u0438 \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e, \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435 \u0431\u044b\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b, \u043e\u043d \u0432\u0435\u0440\u043d\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435.",id:"argsCheck"},sidebar:"docs",previous:{title:"$usersWithRole",permalink:"/ru/docs/functions/user-related/usersWithRole"},next:{title:"$argsSlice",permalink:"/ru/docs/functions/util-related/argsSlice"}},b={},y=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",id:"\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435-\u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],N={toc:y},h="wrapper";function v(t){var e=t,{components:r}=e,a=m(e,["components"]);return(0,n.kt)(h,s(d(d({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$argsCheck")," \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, \u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442, \u0435\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b, \u0431\u0443\u0434\u0435\u0442 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435 ."),(0,n.kt)("h2",d({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$argsCheck[condition;errorMessage]\n")),(0,n.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Nbg"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435, \u0435\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,n.kt)("h4",d({},{id:"\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435-\u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b"}),"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"=="),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u0430\u0432\u043d\u043e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"!="),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043d\u0435 \u0440\u0430\u0432\u043d\u043e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"<="),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),">","="),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),">"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"<"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\\ "),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"|")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"&&"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u043e\u044e\u0437")))),(0,n.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,n.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f: \u0415\u0441\u043b\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e, \u0442\u043e \u043e\u043d\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "argsCheck",\n    code: `\n  \u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0434\u0432\u0443\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u0445\u043e\u0440\u043e\u0448\u043e!\n\n  $argsCheck[>2;You have less than two arguments!]\n  \xab\n});\n')))}v.isMDXComponent=!0}}]);