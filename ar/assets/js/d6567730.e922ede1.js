"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>N,frontMatter:()=>d,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$changeNickname",description:"Changes the current nickname of the user"},g=void 0,k={unversionedId:"functions/changenickname",id:"version-5.5.5/functions/changenickname",title:"$changeNickname",description:"Changes the current nickname of the user",source:"@site/versioned_docs/version-5.5.5/functions/changenickname.md",sourceDirName:"functions",slug:"/functions/changenickname",permalink:"/ar/docs/5.5.5/functions/changenickname",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$changeNickname",description:"Changes the current nickname of the user"},sidebar:"docs",previous:{title:"$categoryChannels",permalink:"/ar/docs/5.5.5/functions/categorychannels"},next:{title:"$channel",permalink:"/ar/docs/5.5.5/functions/channel"}},h={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],b={toc:y},v="wrapper";function N(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,u(m(m({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will make the bot change the nickname of the user indicated within the server."),(0,r.kt)("h3",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$changeNickname[userID;nickname;reason]\n")),(0,r.kt)("h3",m({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"user ID"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The id of the user whose nickname is to be changed"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"nickname"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The nickname we're assigning the user"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"reason"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"The reason why the nickname has been assigned"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h2",m({},{id:"examples"}),"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set a nickname")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "nick",\n    code: `$changeNickname[$authorID;Ch\xefwi is \u2661;I like this nickname.]`\n});\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove a nickname")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "reset-nick",\n    code: `$changeNickname[$authorID;;I want to reset it.]`\n});\n')),(0,r.kt)("p",null,"The bot won't be able to change the nickname of the guild's owner."))}N.isMDXComponent=!0}}]);