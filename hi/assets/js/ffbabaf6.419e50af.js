"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,b=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},31447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>h,frontMatter:()=>b,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const b={title:"$banCount",description:"$banCount \u0926\u093f\u0916\u093e\u0924\u093e \u0939\u0948 \u0915\u093f\u0938\u0940 \u0938\u0930\u094d\u0935\u0930 \u092e\u0947\u0902 \u092a\u094d\u0930\u0924\u093f\u092c\u0902\u0927\u093f\u0924 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0926\u0930\u094d\u0936\u093e\u0924\u093e \u0939\u0948",id:"banCount"},m=void 0,y={unversionedId:"functions/info-related/banCount",id:"version-6.4.0/functions/info-related/banCount",title:"$banCount",description:"$banCount \u0926\u093f\u0916\u093e\u0924\u093e \u0939\u0948 \u0915\u093f\u0938\u0940 \u0938\u0930\u094d\u0935\u0930 \u092e\u0947\u0902 \u092a\u094d\u0930\u0924\u093f\u092c\u0902\u0927\u093f\u0924 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0926\u0930\u094d\u0936\u093e\u0924\u093e \u0939\u0948",source:"@site/i18n/hi/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/banCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/banCount",permalink:"/hi/docs/functions/info-related/banCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$banCount",description:"$banCount \u0926\u093f\u0916\u093e\u0924\u093e \u0939\u0948 \u0915\u093f\u0938\u0940 \u0938\u0930\u094d\u0935\u0930 \u092e\u0947\u0902 \u092a\u094d\u0930\u0924\u093f\u092c\u0902\u0927\u093f\u0924 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0926\u0930\u094d\u0936\u093e\u0924\u093e \u0939\u0948",id:"banCount"},sidebar:"docs",previous:{title:"$allMembersCount",permalink:"/hi/docs/functions/info-related/allMembersCount"},next:{title:"$boostingSince",permalink:"/hi/docs/functions/info-related/boostingSince"}},g={},v=[{value:"\u092a\u094d\u0930\u092f\u094b\u0917",id:"\u092a\u094d\u0930\u092f\u094b\u0917",level:2},{value:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938",level:2},{value:"\u0909\u0926\u093e\u0939\u0930\u0923",id:"\u0909\u0926\u093e\u0939\u0930\u0923",level:2}],O={toc:v},k="wrapper";function h(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,d(s(s({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"$banCount \u0926\u093f\u0916\u093e\u0924\u093e \u0939\u0948 \u0915\u093f\u0938\u0940 \u0938\u0930\u094d\u0935\u0930 \u092e\u0947\u0902 \u092a\u094d\u0930\u0924\u093f\u092c\u0902\u0927\u093f\u0924 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0926\u0930\u094d\u0936\u093e\u0924\u093e \u0939\u0948"),(0,r.kt)("h2",s({},{id:"\u092a\u094d\u0930\u092f\u094b\u0917"}),"\u092a\u094d\u0930\u092f\u094b\u0917"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$banCount[guildID?]\n")),(0,r.kt)("h2",s({},{id:"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"}),"\u092a\u0948\u0930\u093e\u092e\u0940\u091f\u0930\u094d\u0938"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u092b\u0940\u0932\u094d\u0921"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u091f\u093e\u0907\u092a"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0921\u093f\u0938\u094d\u0915\u094d\u0930\u093f\u092a\u094d\u0936\u0928"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0906\u0935\u0936\u094d\u092f\u0915\u0924\u093e \u0939\u0948"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"guildID?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u091c\u093f\u0938 \u0917\u093f\u0932\u094d\u0921 \u0938\u0947 \u0906\u092a \u092a\u094d\u0930\u0924\u093f\u092c\u0902\u0927\u093f\u0924 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u092a\u0941\u0928\u0903 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902 \u0909\u0938\u0915\u0940 \u0917\u093f\u0932\u094d\u0921 \u0906\u0908\u0921\u0940\u0964"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0905\u0938\u0924\u094d\u092f (\u0928\u0939\u0940\u0902)")))),(0,r.kt)("p",null,"\u0906\u092a \u0915\u0947 \u092c\u0949\u091f \u0915\u094b ",(0,r.kt)("inlineCode",{parentName:"p"},"VIEW_AUDIT_LOG")," \u0915\u093e \u092a\u0930\u092e\u093f\u0936\u0928 \u091a\u093e\u0939\u093f\u090f"),(0,r.kt)("h2",s({},{id:"\u0909\u0926\u093e\u0939\u0930\u0923"}),"\u0909\u0926\u093e\u0939\u0930\u0923"),(0,r.kt)("p",null,"\u0926\u093f\u0916\u093e\u0924\u093e \u0939\u0948 \u0915\u093f\u0938\u0940 \u0938\u0930\u094d\u0935\u0930 \u092e\u0947\u0902 \u092a\u094d\u0930\u0924\u093f\u092c\u0902\u0927\u093f\u0924 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e\u0913\u0902 \u0915\u0940 \u0938\u0902\u0916\u094d\u092f\u093e \u0926\u0930\u094d\u0936\u093e\u0924\u093e \u0939\u0948"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-js"}),"bot.command({\n    name: 'banCount',\n    code: `\n  $banCount\n  `\n});\n``\n")))}h.isMDXComponent=!0}}]);