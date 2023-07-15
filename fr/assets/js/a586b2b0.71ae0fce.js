"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82946],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(a),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return a?n.createElement(m,o(o({ref:e},p),{},{components:a})):n.createElement(m,o({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4243:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>y,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,u=(t,e)=>{for(var a in e||(e={}))c.call(e,a)&&p(t,a,e[a]);if(l)for(var a of l(e))s.call(e,a)&&p(t,a,e[a]);return t},d=(t,e)=>i(t,o(e)),f=(t,e)=>{var a={};for(var n in t)c.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&l)for(var n of l(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a};const m={title:"$activity",description:"$activity allows you to get the activity of a user.",id:"activity"},y=void 0,v={unversionedId:"functions/activity",id:"version-5.5.5/functions/activity",title:"$activity",description:"$activity allows you to get the activity of a user.",source:"@site/versioned_docs/version-5.5.5/functions/activity.md",sourceDirName:"functions",slug:"/functions/activity",permalink:"/fr/docs/5.5.5/functions/activity",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 juil. 2023",frontMatter:{title:"$activity",description:"$activity allows you to get the activity of a user.",id:"activity"},sidebar:"docs",previous:{title:"$abbreviate",permalink:"/fr/docs/5.5.5/functions/abbreviate"},next:{title:"$addButton",permalink:"/fr/docs/5.5.5/functions/addbutton"}},g={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Activity Types",id:"activity-types",level:2},{value:"Examples",id:"examples",level:2},{value:"Without optional fields:",id:"without-optional-fields",level:3},{value:"With optional fields:",id:"with-optional-fields",level:3}],b={toc:h},k="wrapper";function O(t){var e=t,{components:a}=e,r=f(e,["components"]);return(0,n.kt)(k,d(u(u({},b),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function shows the current activity of the indicated user ","(","Only if it detects any activity",")",", if the indicated user does not have an activity such as a 'custom status' it will show 'none'."),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$activity[guildID;userID?]\n")),(0,n.kt)("h2",u({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"guildID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"To see, user's activity for specific guild"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"userID"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"The ID of the user to see activity"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h2",u({},{id:"activity-types"}),"Activity Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Custom Status"),(0,n.kt)("li",{parentName:"ul"},"Spotify ",(0,n.kt)("em",{parentName:"li"},"(","Listening to Spotify",")")),(0,n.kt)("li",{parentName:"ul"},"Game Name ",(0,n.kt)("em",{parentName:"li"},"(","Playing ...",")")),(0,n.kt)("li",{parentName:"ul"},"Streaming")),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("h3",u({},{id:"without-optional-fields"}),"Without optional fields:"),(0,n.kt)("p",null,"This returns the activity of the user who executed the command."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "activity",\n  code: `\n  $activity[$guildID]\n  `\n});\n')),(0,n.kt)("h3",u({},{id:"with-optional-fields"}),"With optional fields:"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"$userID")," parameter is optional, if it is not provided, the activity of the user who executed the command will be shown."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "activity",\n  code: `\n  $activity[$guildID;$userID]\n  `\n});\n')))}O.isMDXComponent=!0}}]);