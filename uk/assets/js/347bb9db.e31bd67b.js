"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[28469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>k,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>h});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&c(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$if",description:"$if will check a condition and return either true or false depending on the condition being true or false.",id:"if"},k=void 0,g={unversionedId:"functions/misc-related/if",id:"version-6.4.0/functions/misc-related/if",title:"$if",description:"$if will check a condition and return either true or false depending on the condition being true or false.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/if.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/if",permalink:"/uk/docs/functions/misc-related/if",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$if",description:"$if will check a condition and return either true or false depending on the condition being true or false.",id:"if"},sidebar:"docs",previous:{title:"$humanizeMs",permalink:"/uk/docs/functions/misc-related/humanizeMs"},next:{title:"$ifAwaited",permalink:"/uk/docs/functions/misc-related/ifAwaited"}},N={},h=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"Valid Mathematical Operators",id:"valid-mathematical-operators",level:4},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],b={toc:h},y="wrapper";function v(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(y,s(u(u({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$if")," will check a condition and return either true or false depending on the condition being true or false."),(0,a.kt)("h2",u({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$if[condition;true;false?]\n")),(0,a.kt)("admonition",u({},{title:"Deprecation",type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},'$if: "old"')," is deprecated and should no longer be used as it will be removed in the future.")),(0,a.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"condition"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Condition to check."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0442\u0430\u043a"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"What to return when the condition is true."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"false?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"What to return when the condition is false."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,a.kt)("h4",u({},{id:"valid-mathematical-operators"}),"Valid Mathematical Operators"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Operator"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Mathematical Expression"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"=="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"!="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"not equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"<="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"less than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),">","="),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"greater than or equal to")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),">"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"greater than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"<"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"less than")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\\ "),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"&&"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"logical AND")))),(0,a.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"That's false!")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," doesn't equal ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: \"if\",\n    code: `\n    $if[1==2;That's true!;That's false!]\n    `\n});\n")),(0,a.kt)("p",null,"This will do the exact same just different usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"$if")," by using ",(0,a.kt)("inlineCode",{parentName:"p"},'$if: "old"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "if",\n    $if: "old",\n    code: `\n    $if[1==2]\n    That\'s true!\n    $else\n    That\'s false!\n    $endif\n    `\n});\n')))}v.isMDXComponent=!0}}]);