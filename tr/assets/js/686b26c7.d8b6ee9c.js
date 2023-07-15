"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75923],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||l;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},414:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>w,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var n=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))p.call(r,t)&&c(e,t,r[t]);return e},u=(e,r)=>l(e,o(r)),f=(e,r)=>{var t={};for(var n in e)i.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$respawnAllShards",description:"$respawnAllShards will respawn all shards.",id:"respawnAllShards"},w=void 0,y={unversionedId:"functions/interaction-related/respawnAllShards",id:"version-6.4.0/functions/interaction-related/respawnAllShards",title:"$respawnAllShards",description:"$respawnAllShards will respawn all shards.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/respawnAllShards.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/respawnAllShards",permalink:"/tr/docs/functions/interaction-related/respawnAllShards",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 Tem 2023",frontMatter:{title:"$respawnAllShards",description:"$respawnAllShards will respawn all shards.",id:"respawnAllShards"},sidebar:"docs",previous:{title:"$reply",permalink:"/tr/docs/functions/interaction-related/reply"},next:{title:"$sendDm",permalink:"/tr/docs/functions/interaction-related/sendDm"}},h={},b=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},O="wrapper";function g(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.kt)(O,u(d(d({},v),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$respawnAllShards")," will respawn all shards. (requires sharding)"),(0,n.kt)("h2",d({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$respawnAllShards\n")),(0,n.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will respawn all shards (requires sharding):"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'respawnAllShards',\n    code: `\n   $respawnAllShards\n  `\n});\n")))}g.isMDXComponent=!0}}]);