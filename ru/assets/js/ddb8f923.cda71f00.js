"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[9797],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=p(t),s=n,f=y["".concat(i,".").concat(s)]||y[s]||d[s]||o;return t?a.createElement(f,l(l({ref:r},u),{},{components:t})):a.createElement(f,l({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=s;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[y]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},76980:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))p.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>o(e,l(r)),s=(e,r)=>{var t={};for(var a in e)i.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const f={title:"$arrayConcat",description:"$arrayConcat \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c (\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c) \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432.",id:"arrayConcat"},m=void 0,b={unversionedId:"functions/array-related/arrayConcat",id:"version-6.4.0/functions/array-related/arrayConcat",title:"$arrayConcat",description:"$arrayConcat \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c (\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c) \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayConcat.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayConcat",permalink:"/ru/docs/functions/array-related/arrayConcat",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"21 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$arrayConcat",description:"$arrayConcat \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c (\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c) \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432.",id:"arrayConcat"},sidebar:"docs",previous:{title:"$arrayAt",permalink:"/ru/docs/functions/array-related/arrayAt"},next:{title:"$arrayEvery",permalink:"/ru/docs/functions/array-related/arrayEvery"}},v={},g=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],k={toc:g},O="wrapper";function N(e){var r=e,{components:t}=r,n=s(r,["components"]);return(0,a.kt)(O,d(y(y({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayConcat")," \u0431\u0443\u0434\u0435\u0442 \u043a\u043e\u043d\u043a\u0430\u0442\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c (\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c) \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432."),(0,a.kt)("h2",y({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-php"}),"$arrayConcat[\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c;...\u043c\u0430\u0441\u0441\u0438\u0432\u044b]\n")),(0,a.kt)("h2",y({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",y({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("th",y({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",y({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,a.kt)("th",y({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),"\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c"),(0,a.kt)("td",y({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",y({parentName:"tr"},{align:null}),"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c."),(0,a.kt)("td",y({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),"...\u043c\u0430\u0441\u0441\u0438\u0432\u044b"),(0,a.kt)("td",y({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,a.kt)("td",y({parentName:"tr"},{align:null}),"\u041c\u0430\u0441\u0441\u0438\u0432\u044b."),(0,a.kt)("td",y({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,a.kt)("h2",y({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,a.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u042d\u0442\u043e \u0442\u0435\u0441\u0442"),", \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u044b 1 \u0438 2 \u0432\u043c\u0435\u0441\u0442\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'arrayConcat',\n    code: `\n  $arrayConcat[ ;array1;array2]\n  $createArray[array1;\u042d\u0442\u043e]\n  $createArray[array2;\u0422\u0435\u0441\u0442]\n  `\n});\n")))}N.isMDXComponent=!0}}]);