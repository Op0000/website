"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e},p=(e,t)=>i(e,l(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$memberExists",description:"$memberExists check if a given user is member of the given guild.",id:"memberExists"},b=void 0,g={unversionedId:"functions/user-related/memberExists",id:"version-6.4.0/functions/user-related/memberExists",title:"$memberExists",description:"$memberExists check if a given user is member of the given guild.",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/memberExists.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/memberExists",permalink:"/hi/docs/functions/user-related/memberExists",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$memberExists",description:"$memberExists check if a given user is member of the given guild.",id:"memberExists"},sidebar:"docs",previous:{title:"$memberAvatar",permalink:"/hi/docs/functions/user-related/memberAvatar"},next:{title:"$memberJoinPosition",permalink:"/hi/docs/functions/user-related/memberJoinPosition"}},v={},y=[{value:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"\u091f\u094d\u0930\u0942 (\u0939\u093e)",id:"\u091f\u094d\u0930\u0942-\u0939\u093e",level:2}],h={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(k,p(m(m({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$memberExists")," check if a given user is member of the given guild."),(0,n.kt)("h2",m({},{id:"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u094b\u092f\u094b\u0917"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$memberExists[userID;guildID?]\n")),(0,n.kt)("h2",m({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u091a\u093e\u0939\u093f\u090f"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"userID"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"id of the user you want to check if they're currently a member of the given server"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"guildID?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"the server where the user is present in"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")))),(0,n.kt)("h2",m({},{id:"\u091f\u094d\u0930\u0942-\u0939\u093e"}),"\u091f\u094d\u0930\u0942 (\u0939\u093e)"),(0,n.kt)("p",null,"This will return ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," as you're currently in this guild:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'memberExists',\n    code: `\n  $memberExists[$authorid;$guildID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);