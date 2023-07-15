"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[90613],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&u(e,t,n[t]);return e},d=(e,n)=>o(e,i(n)),f=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$deafenUser",description:"Used to deaf a user."},y=void 0,b={unversionedId:"functions/deafenuser",id:"version-5.5.5/functions/deafenuser",title:"$deafenUser",description:"Used to deaf a user.",source:"@site/versioned_docs/version-5.5.5/functions/deafenuser.md",sourceDirName:"functions",slug:"/functions/deafenuser",permalink:"/docs/5.5.5/functions/deafenuser",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"Jul 15, 2023",frontMatter:{title:"$deafenUser",description:"Used to deaf a user."},sidebar:"docs",previous:{title:"$dbPing",permalink:"/docs/5.5.5/functions/dbping"},next:{title:"$defaultMessageNotifications",permalink:"/docs/5.5.5/functions/defaultmessagenotifications"}},v={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:g},h="wrapper";function k(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(h,d(p(p({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this function you will be able to deaf the selected user with the bot."),(0,r.kt)("h4",p({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 3 fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Deafen ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Reason ","(","Optional",")")),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$deafenUser[User ID;Deafen (yes/no);Reason (Optional)]")),(0,r.kt)("h4",p({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User ID - The user being defeaned"),(0,r.kt)("li",{parentName:"ul"},"Deafen - Whether or not the defean the ","<","user",">"),(0,r.kt)("li",{parentName:"ul"},"Reason - The reason will appear in the audit logs")),(0,r.kt)("h4",p({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"Deafening the mentioned user"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "deaf",\n    code: `\n    Now $username[$mentioned[1]] can\'t hear\n    $deafenUser[$mentiond[1];yes]\n    `\n})\n')),(0,r.kt)("p",null,"Un-deafening the mentioned user"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "undeaf",\n    code: `\n    Now $username[$mentioned[1]] can hear\n    $deafenUser[$mentiond[1];no]\n    `\n})\n')))}k.isMDXComponent=!0}}]);