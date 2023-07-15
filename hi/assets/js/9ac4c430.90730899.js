"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46822],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},87186:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>h,frontMatter:()=>k,metadata:()=>f,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))s.call(t,a)&&c(e,a,t[a]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a};const k={title:"$playTrack",description:"Plays an audio by given text/URL."},y=void 0,f={unversionedId:"functions/playtrack",id:"version-5.5.5/functions/playtrack",title:"$playTrack",description:"Plays an audio by given text/URL.",source:"@site/versioned_docs/version-5.5.5/functions/playtrack.md",sourceDirName:"functions",slug:"/functions/playtrack",permalink:"/hi/docs/5.5.5/functions/playtrack",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$playTrack",description:"Plays an audio by given text/URL."},sidebar:"docs",previous:{title:"$platform",permalink:"/hi/docs/5.5.5/functions/platform"},next:{title:"$pruneMembers",permalink:"/hi/docs/5.5.5/functions/prunemembers"}},g={},b=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Type Options",id:"type-options",level:3},{value:"Footnotes",id:"footnotes",level:6},{value:"Examples",id:"examples",level:2},{value:"Local file:",id:"local-file",level:4},{value:"Soundcloud tracks:",id:"soundcloud-tracks",level:4},{value:"Spotify tracks:",id:"spotify-tracks",level:4},{value:"Youtube tracks:",id:"youtube-tracks",level:4},{value:"Audio URLs:",id:"audio-urls",level:4}],v={toc:b},N="wrapper";function h(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(N,d(u(u({},v),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"When bot is in a ",(0,n.kt)("strong",{parentName:"p"},"Stage Channel")," or ",(0,n.kt)("strong",{parentName:"p"},"Voice Channel"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"$playTrack")," allows you to listen to audio ( Discord audios, songs and musics )."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Requires ",(0,n.kt)("inlineCode",{parentName:"p"},"@akarui/aoi.music")," package.")),(0,n.kt)("h3",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$playTrack[type;track]\n")),(0,n.kt)("h3",u({},{id:"fields"}),"Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"type"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"Type of the track"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"track"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"Track's name or URL"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"string"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"yes")))),(0,n.kt)("h3",u({},{id:"type-options"}),"Type Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"left"}),"Usage"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"localfile"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"It will make you play local files."),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"path")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"soundcloud"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"It allows you play tracks on Soundcloud platform."),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"text & URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"spotify"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"This type allows Spotify playlists or tracks player."),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"youtube"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"Play songs & musics or videos via Youtube"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"text & URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"url"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"This type allowed for specific links, works well for all attachment on Discord that contains audio"),(0,n.kt)("td",u({parentName:"tr"},{align:"left"}),"URL")))),(0,n.kt)("h6",u({},{id:"footnotes"}),"Footnotes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"If you have low resources about your client (server), we recommend to you use ",(0,n.kt)("inlineCode",{parentName:"em"},"youtube")," type than ",(0,n.kt)("inlineCode",{parentName:"em"},"spotify")," type."))),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("h4",u({},{id:"local-file"}),"Local file:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "play-local",\n  code: `\n  $playTrack[localfile;./local-musics/ne0a1ch4n.mp3]\n  `\n//It will play ne0a1ch4n.mp3 file on your bot\'s handler.\n});\n')),(0,n.kt)("h4",u({},{id:"soundcloud-tracks"}),"Soundcloud tracks:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "play-soundcloud",\n  code: `\n  $playTrack[soundcloud;Never Gonna Give You Up]\n  `\n//It will play Rick Astley\'s "Never Gonna Give You Up" album.\n});\n')),(0,n.kt)("h4",u({},{id:"spotify-tracks"}),"Spotify tracks:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "play-spotify",\n  code: `\n  $playTrack[spotify;https://open.spotify.com/album/1RLLD6srXDVDHkRKd8HfaM?si=h51ooGfFRryIelumMIaI9w&utm_source=native-share-menu]\n  `\n//It will play "Carrion (Original Game Soundtrack)" playlist.\n});\n')),(0,n.kt)("h4",u({},{id:"youtube-tracks"}),"Youtube tracks:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "play-youtube",\n  code: `\n  $playTrack[youtube;https://www.youtube.com/watch?v=GRATNtOC-rs]\n  `\n//It will play "[Arknights OST] Main Theme BGM (1Hour Loop)" playlist. You can also text instead inserting link :)\n});\n')),(0,n.kt)("h4",u({},{id:"audio-urls"}),"Audio URLs:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "play-url",\n  code: `\n  $playTrack[url;https://cdn.discordapp.com/attachments/877857304911953930/969282303887028264/9F004493-A7F6-4B3B-8FC1-CC9812DC6621.mov]\n  `\n//In this video file you will be hearing sounds.\n});\n')),(0,n.kt)("p",null,"And that's how we play songs or musics with aoi.js :) Pretty easy right? \u2665"))}h.isMDXComponent=!0}}]);