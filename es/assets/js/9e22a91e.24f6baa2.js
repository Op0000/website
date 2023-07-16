"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[19026],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(s,".").concat(m)]||c[m]||k[m]||o;return n?r.createElement(d,i(i({ref:t},f),{},{components:n})):r.createElement(d,i({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>w,frontMatter:()=>d,metadata:()=>b,toc:()=>N});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&f(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&f(e,n,t[n]);return e},k=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$webhookExists",description:"Checks if a webhook exists."},u=void 0,b={unversionedId:"functions/webhookexists",id:"version-5.5.5/functions/webhookexists",title:"$webhookExists",description:"Checks if a webhook exists.",source:"@site/versioned_docs/version-5.5.5/functions/webhookexists.md",sourceDirName:"functions",slug:"/functions/webhookexists",permalink:"/es/docs/5.5.5/functions/webhookexists",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$webhookExists",description:"Checks if a webhook exists."},sidebar:"docs",previous:{title:"$webhook",permalink:"/es/docs/5.5.5/functions/webhook"},next:{title:"$year",permalink:"/es/docs/5.5.5/functions/year"}},h={},N=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2}],y={toc:N},g="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(g,k(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function checks if the given credentials lead to an existing webhook."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"How to find webhook's id & token?"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"url",(0,r.kt)("sup",c({parentName:"li"},{id:"fnref-1"}),(0,r.kt)("a",c({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))),(0,r.kt)("li",{parentName:"ul"},"id",(0,r.kt)("sup",c({parentName:"li"},{id:"fnref-2"}),(0,r.kt)("a",c({parentName:"sup"},{href:"#fn-2",className:"footnote-ref"}),"2"))),(0,r.kt)("li",{parentName:"ul"},"token",(0,r.kt)("sup",c({parentName:"li"},{id:"fnref-3"}),(0,r.kt)("a",c({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3"))))),(0,r.kt)("h3",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$webhookExists[webhook id;webhook token]\n")),(0,r.kt)("h3",c({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"webhook id"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The webhook's id"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"webhook token"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"The webhook's token"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "webhook-exists",\n  code: `\n  $webhookExists[793312378162642975;paNWUYLC22oL-t2hbYeu3zrwWXNfVxjn4TmDDVTISNVRbytCbptYM4DETJDTPzG-1JcA] \n  ` \n//This returns true\n});\n\nbot.command({\n  name: "webhook-exists",\n  code: `\n  $webhookExists[7934564363642975;paNWUYLC22oL-t2hnkldrneKLNFeklnUOknefwmOI34Ahgf] \n  ` \n//This returns false\n});\n')),(0,r.kt)("div",c({},{className:"footnotes"}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",c({parentName:"ol"},{id:"fn-1"}),(0,r.kt)("a",c({parentName:"li"},{href:"https://discord.com/api/webhooks/9bNapddEOy832Oba8SWAS_9k2lpf5l9mHzEhj4a6ylREvSugbgkkiEfwg91Xmi8zb"}),"https://discord.com/api/webhooks/9bNapddEOy832Oba8SWAS_9k2lpf5l9mHzEhj4a6ylREvSugbgkkiEfwg91Xmi8zb"),"_",(0,r.kt)("a",c({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")),(0,r.kt)("li",c({parentName:"ol"},{id:"fn-2"}),"793312378162642975",(0,r.kt)("a",c({parentName:"li"},{href:"#fnref-2",className:"footnote-backref"}),"\u21a9")),(0,r.kt)("li",c({parentName:"ol"},{id:"fn-3"}),"9bNapddEOy832Oba8SWAS",(0,r.kt)("em",{parentName:"li"},"9k2lpf5l9mHzEhj4a6ylREvSugbgkkiEfwg91Xmi8zb"),(0,r.kt)("a",c({parentName:"li"},{href:"#fnref-3",className:"footnote-backref"}),"\u21a9")))))}w.isMDXComponent=!0}}]);