"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$author",description:"Sets the author in an embed message and authorIcon if it's specified."},h=void 0,g={unversionedId:"functions/author",id:"version-5.5.5/functions/author",title:"$author",description:"Sets the author in an embed message and authorIcon if it's specified.",source:"@site/versioned_docs/version-5.5.5/functions/author.md",sourceDirName:"functions",slug:"/functions/author",permalink:"/ar/docs/5.5.5/functions/author",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$author",description:"Sets the author in an embed message and authorIcon if it's specified."},sidebar:"docs",previous:{title:"$attachment",permalink:"/ar/docs/5.5.5/functions/attachment"},next:{title:"$authorAccentColor",permalink:"/ar/docs/5.5.5/functions/authoraccentcolor"}},k={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Examples",id:"examples",level:2}],b={toc:y},v="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,d(s(s({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function allows you to add an 'author' to the embed message and an icon to the author if a URL is specified. "),(0,n.kt)("h3",s({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$author[index;text;icon url?;redirecting url?]\n")),(0,n.kt)("h3",s({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"index"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"The author embed's index"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"number"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"text"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"The text will show up on the author property"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"icon url?"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"The icon will show up next to author property"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"url"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"redirecting url?"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"The URL of the redirect link"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"url"),(0,n.kt)("td",s({parentName:"tr"},{align:"left"}),"no")))),(0,n.kt)("h6",s({},{id:"footnote"}),"Footnote"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The icon url must end with ",(0,n.kt)("inlineCode",{parentName:"em"},".png"),", ",(0,n.kt)("inlineCode",{parentName:"em"},".jpg")," or ",(0,n.kt)("inlineCode",{parentName:"em"},".gif"),"!")),(0,n.kt)("h2",s({},{id:"examples"}),"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Without hyperlink and icon:")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "author",\n  code: `\n  $author[1;$username]\n  `\n//Returns the user\'s username\n});\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"With hyperlink and icon:")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n  name: \"author\",\n  code: `\n  $author[1;$username;$authorAvatar;https://aoi.js.org]\n  `\n//Returns user's username along with their icon and if clicked, will redirect to aoi.js' website\n});\n")))}N.isMDXComponent=!0}}]);