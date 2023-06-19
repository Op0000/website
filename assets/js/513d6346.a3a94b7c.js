"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,f=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(f,l(l({ref:t},d),{},{components:a})):r.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2269:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"$createThread",description:"Creates a thread."},l=void 0,o={unversionedId:"functions/createthread",id:"version-5.5.5/functions/createthread",title:"$createThread",description:"Creates a thread.",source:"@site/versioned_docs/version-5.5.5/functions/createthread.md",sourceDirName:"functions",slug:"/functions/createthread",permalink:"/docs/5.5.5/functions/createthread",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147892,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$createThread",description:"Creates a thread."},sidebar:"docs",previous:{title:"$createSticker",permalink:"/docs/5.5.5/functions/createsticker"},next:{title:"$createVar",permalink:"/docs/5.5.5/functions/createvar"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Archive Options",id:"archive-options",level:4},{value:"Type Options",id:"type-options",level:4},{value:"Footnote",id:"footnote",level:6},{value:"Example",id:"example",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function will create a thread for given channel ID."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$createThread[channelID;name;archive;type;start message?;return ID?]\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"channelID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Channel ID of the thread will be created"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The thread channel is name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"archive"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Automatically archiving thread time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"str & num"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Type of the thread"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"start message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Starting message by giving message ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"return ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Returning thread's ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,n.kt)("h4",{id:"archive-options"},"Archive Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"60")," \u2014 This option makes the thread stays active for ",(0,n.kt)("strong",{parentName:"li"},"1 hour"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"1140")," \u2014 This option makes the thread stays active for ",(0,n.kt)("strong",{parentName:"li"},"1 day"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"4320")," \u2014 This option makes the thread stays active for ",(0,n.kt)("strong",{parentName:"li"},"3 days"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"10080")," \u2014 This option makes the thread stays active for ",(0,n.kt)("strong",{parentName:"li"},"1 week"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MAX")," \u2014 This option makes the thread stays active for ",(0,n.kt)("strong",{parentName:"li"},"maximum archive time for the server"),".")),(0,n.kt)("h4",{id:"type-options"},"Type Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PUBLIC")," \u2014 This option makes the thread visible to everyone."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PRIVATE")," \u2014 This option ensures that the threads can only be seen by people ",(0,n.kt)("strong",{parentName:"li"},"who have been added in it."))),(0,n.kt)("h6",{id:"footnote"},"Footnote"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"*",(0,n.kt)("inlineCode",{parentName:"strong"},"type")),' property cannot be settled to "',(0,n.kt)("strong",{parentName:"li"},"private"),'" if the guild is not atleast level 2.*')),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: \"create-thread\",\n  code: `\n  Let's talk about cats!\n  \n  $createThread[channelID;Talking about cats!;MAX;PUBLIC;971437578681212988;yes]\n  `\n//It will create a thread for maximum archive time along on give ID with returning thread's ID.\n});\n")))}m.isMDXComponent=!0}}]);