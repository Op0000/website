"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,g=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>h,frontMatter:()=>g,metadata:()=>y,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$getBanReason",description:"$getBanReason \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430.",id:"getBanReason"},m=void 0,y={unversionedId:"functions/info-related/getBanReason",id:"version-6.4.0/functions/info-related/getBanReason",title:"$getBanReason",description:"$getBanReason \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getBanReason.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getBanReason",permalink:"/uk/docs/functions/info-related/getBanReason",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982483,formattedLastUpdatedAt:"21 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$getBanReason",description:"$getBanReason \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0440\u0438\u0447\u0438\u043d\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430.",id:"getBanReason"},sidebar:"docs",previous:{title:"$getAuditLogs",permalink:"/uk/docs/functions/info-related/getAuditLogs"},next:{title:"$getChannelSlowmode",permalink:"/uk/docs/functions/info-related/getChannelSlowmode"}},b={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],v={toc:k},O="wrapper";function h(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,d(s(s({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getBanReason")," \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0431\u0430\u043d \u0437 \u043f\u0440\u0438\u0447\u0438\u043d\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430."),(0,r.kt)("h2",s({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$getBanReason[guildID?;userID?]\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0433\u0456\u043b\u044c\u0434\u0456\u044f?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID \u0433\u0456\u043b\u044c\u0434\u0456\u0457."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0406\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430, \u044f\u043a\u043e\u0433\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u043f\u0440\u0438\u0447\u0438\u043d\u0438 \u0431\u043b\u043e\u043a\u0443\u0432\u0430\u043d\u043d\u044f."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,r.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,"\u0426\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 \u0437\u0430\u0431\u043e\u0440\u043e\u043d\u0443 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0457 \u043a\u043e\u0442\u0440\u043e\u0457 \u043a\u043e\u043c\u0443 \u0432\u0438 \u0431\u0430\u0436\u0430\u0454\u0442\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getBanReason',\n    \u043a\u043e\u0434: `\n  $getBanReason[$guildID;userID] \n  ` // \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0437\u0430\u043c\u0456\u043d\u0438\u0442\u0438 \"userID\" \u0444\u0430\u043a\u0442\u0438\u0447\u043d\u0438\u043c \u0456\u0434\u0435\u043d\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u043e\u0440\u043e\u043c \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430\n});\n")))}h.isMDXComponent=!0}}]);