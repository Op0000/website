"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,v=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>v,metadata:()=>y,toc:()=>g});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const v={title:"$vanityURL",description:"Returns vanity URL."},m=void 0,y={unversionedId:"functions/vanityurl",id:"version-5.5.5/functions/vanityurl",title:"$vanityURL",description:"Returns vanity URL.",source:"@site/versioned_docs/version-5.5.5/functions/vanityurl.md",sourceDirName:"functions",slug:"/functions/vanityurl",permalink:"/uk/docs/5.5.5/functions/vanityurl",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$vanityURL",description:"Returns vanity URL."},sidebar:"docs",previous:{title:"$userTag",permalink:"/uk/docs/5.5.5/functions/usertag"},next:{title:"$vanityUses",permalink:"/uk/docs/5.5.5/functions/vanityuses"}},b={},g=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],O={toc:g},k="wrapper";function h(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(k,f(u(u({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the current servers vanity URL, if they have one."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What's Vanity URL?",(0,r.kt)("sup",u({parentName:"p"},{id:"fnref-1"}),(0,r.kt)("a",u({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")))),(0,r.kt)("h3",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$vanityURL\n")),(0,r.kt)("h2",u({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "vanity-url",\n  code: `\n  URL: $vanityURL\n  `\n});\n')),(0,r.kt)("div",u({},{className:"footnotes"}),(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",u({parentName:"ol"},{id:"fn-1"}),"A custom URL Redirects you to a server. This would be a vanity URL\ndiscord.gg/akarui. For example, this is not a vanity URL\n",(0,r.kt)("a",u({parentName:"li"},{href:"https://discord.com/invite/j352EV9ran"}),"https://discord.com/invite/j352EV9ran"),(0,r.kt)("a",u({parentName:"li"},{href:"#fnref-1",className:"footnote-backref"}),"\u21a9")))))}h.isMDXComponent=!0}}]);