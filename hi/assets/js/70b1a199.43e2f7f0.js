"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,b=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>b,metadata:()=>v,toc:()=>O});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const b={title:"$isValidObject",description:"Returns true or false if it's an object"},m=void 0,v={unversionedId:"functions/isvalidobject",id:"version-5.5.5/functions/isvalidobject",title:"$isValidObject",description:"Returns true or false if it's an object",source:"@site/versioned_docs/version-5.5.5/functions/isvalidobject.md",sourceDirName:"functions",slug:"/functions/isvalidobject",permalink:"/hi/docs/5.5.5/functions/isvalidobject",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$isValidObject",description:"Returns true or false if it's an object"},sidebar:"docs",previous:{title:"$isValidLink",permalink:"/hi/docs/5.5.5/functions/isvalidlink"},next:{title:"$joinSplitText",permalink:"/hi/docs/5.5.5/functions/joinsplittext"}},y={},O=[{value:"Field",id:"field",level:3},{value:"Footnote",id:"footnote",level:6},{value:"Example",id:"example",level:4}],j={toc:O},g="wrapper";function k(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(g,u(f(f({},j),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function checks if the given string is a valid json object. Returns boolean"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-php"}),"$isValidObject[object]\n")),(0,r.kt)("h3",f({},{id:"field"}),"Field"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",f({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"object"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"The string object"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",f({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h6",f({},{id:"footnote"}),"Footnote"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This function will only work if it's JSON Object ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},'{ "lights":"on" }')," is a  JSON Object",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'{ lights: "off" }')," ",(0,r.kt)("strong",{parentName:"p"},"is not")," a JSON Object")),(0,r.kt)("h4",f({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "is-valid-object",\n  code:`\n  $isValidObject[ { "brain": "exercising" } ]\n  `\n});\n')))}k.isMDXComponent=!0}}]);