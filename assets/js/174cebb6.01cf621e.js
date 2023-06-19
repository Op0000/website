"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53568],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=o,d=c["".concat(s,".").concat(g)]||c[g]||f[g]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},43865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={title:"$songInfo",description:"Returns of info of the current playing song."},i=void 0,l={unversionedId:"functions/songinfo",id:"version-5.5.5/functions/songinfo",title:"$songInfo",description:"Returns of info of the current playing song.",source:"@site/versioned_docs/version-5.5.5/functions/songinfo.md",sourceDirName:"functions",slug:"/functions/songinfo",permalink:"/docs/5.5.5/functions/songinfo",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687147892,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{title:"$songInfo",description:"Returns of info of the current playing song."},sidebar:"docs",previous:{title:"$songFilter",permalink:"/docs/5.5.5/functions/songfilter"},next:{title:"$splitText",permalink:"/docs/5.5.5/functions/splittext"}},s={},p=[{value:"Exapmple for current playing song:",id:"exapmple-for-current-playing-song",level:4},{value:"Example for next playing song:",id:"example-for-next-playing-song",level:4},{value:"Properties:",id:"properties",level:3}],u={toc:p},c="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns the ","<","property",">"," of the currently playing song."),(0,o.kt)("p",null,"Raw usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$songInfo[property;position]")),(0,o.kt)("h4",{id:"exapmple-for-current-playing-song"},"Exapmple for current playing song:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "songInfo",\ncode: `\nCurrrently Playing: $songInfo[title]\n`\n})\n')),(0,o.kt)("h4",{id:"example-for-next-playing-song"},"Example for next playing song:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "next-song",\ncode: `\nNext Playing: $songInfo[title;1]\n`\n})\n')),(0,o.kt)("h3",{id:"properties"},"Properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"title - Song Title"),(0,o.kt)("li",{parentName:"ul"},"description - Description of the song's YouTube video."),(0,o.kt)("li",{parentName:"ul"},"duration - Duration of the song"),(0,o.kt)("li",{parentName:"ul"},"duration","_","left - Duration left for the song to end."),(0,o.kt)("li",{parentName:"ul"},"current","_","duration - The current duration of the song."),(0,o.kt)("li",{parentName:"ul"},"url - URL to the youtube video of the current song."),(0,o.kt)("li",{parentName:"ul"},"userID - ID of the sser that added the song."),(0,o.kt)("li",{parentName:"ul"},"thumbnail - The thumbnail of the song."),(0,o.kt)("li",{parentName:"ul"},"publisher - Channel that uploaded the song."),(0,o.kt)("li",{parentName:"ul"},"publisher","_","url - Link of the channel that uploaded the song.")),(0,o.kt)("p",null,"The cuurent song's position is ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"- so next one's is ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," and so on..."))}f.isMDXComponent=!0}}]);