"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>w,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$webhook",description:"Get the webhook's informations."},k=void 0,b={unversionedId:"functions/webhook",id:"version-5.5.5/functions/webhook",title:"$webhook",description:"Get the webhook's informations.",source:"@site/versioned_docs/version-5.5.5/functions/webhook.md",sourceDirName:"functions",slug:"/functions/webhook",permalink:"/ar/docs/5.5.5/functions/webhook",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$webhook",description:"Get the webhook's informations."},sidebar:"docs",previous:{title:"$wait",permalink:"/ar/docs/5.5.5/functions/wait"},next:{title:"$webhookExists",permalink:"/ar/docs/5.5.5/functions/webhookexists"}},h={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Available Properties",id:"available-properties",level:4},{value:"Example",id:"example",level:2}],y={toc:g},v="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(v,u(d(d({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the given webhook's specified property."),(0,r.kt)("h3",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$webhook[id;property]\n")),(0,r.kt)("h3",d({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"id"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"ID of the webhook"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"number"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"property"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The property we're looking for"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h4",d({},{id:"available-properties"}),"Available Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," \u2014 Webhook's name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")," \u2014 Webhook's id"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token")," \u2014 Webhook's token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"avatar")," \u2014 Webhook's avatar URL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"created")," \u2014 Webhook's date and time of creation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," \u2014 How long ago the webhook was created"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")," \u2014 Webhook's URL"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u2014 Webhook's Type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"exists")," \u2014 Whether or not the webhook exists, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guild")," \u2014 Webhook's guild of origin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channelid")," \u2014 Channel of which the webhook is assigned to")),(0,r.kt)("h2",d({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "webhook",\n  code: `\n  $webhook[786316949738094642;name]\n  `\n// Returns: Minesa Logger\n});\n')))}w.isMDXComponent=!0}}]);