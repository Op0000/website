"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46822],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(k,o(o({ref:e},c),{},{components:a})):n.createElement(k,o({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57264:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"$playTrack",description:"Plays an audio by given text/URL."},o=void 0,i={unversionedId:"functions/playtrack",id:"version-5.5.5/functions/playtrack",title:"$playTrack",description:"Plays an audio by given text/URL.",source:"@site/versioned_docs/version-5.5.5/functions/playtrack.md",sourceDirName:"functions",slug:"/functions/playtrack",permalink:"/docs/5.5.5/functions/playtrack",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1687675592,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{title:"$playTrack",description:"Plays an audio by given text/URL."},sidebar:"docs",previous:{title:"$platform",permalink:"/docs/5.5.5/functions/platform"},next:{title:"$pruneMembers",permalink:"/docs/5.5.5/functions/prunemembers"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Type Options",id:"type-options",level:3},{value:"Footnotes",id:"footnotes",level:6},{value:"Examples",id:"examples",level:2},{value:"Local file:",id:"local-file",level:4},{value:"Soundcloud tracks:",id:"soundcloud-tracks",level:4},{value:"Spotify tracks:",id:"spotify-tracks",level:4},{value:"Youtube tracks:",id:"youtube-tracks",level:4},{value:"Audio URLs:",id:"audio-urls",level:4}],c={toc:s},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When bot is in a ",(0,r.kt)("strong",{parentName:"p"},"Stage Channel")," or ",(0,r.kt)("strong",{parentName:"p"},"Voice Channel"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$playTrack")," allows you to listen to audio ( Discord audios, songs and musics )."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requires ",(0,r.kt)("inlineCode",{parentName:"p"},"@akarui/aoi.music")," package.")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$playTrack[type;track]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of the track"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"track"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Track's name or URL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("h3",{id:"type-options"},"Type Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Usage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"localfile"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It will make you play local files."),(0,r.kt)("td",{parentName:"tr",align:"left"},"path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"soundcloud"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It allows you play tracks on Soundcloud platform."),(0,r.kt)("td",{parentName:"tr",align:"left"},"text & URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"spotify"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This type allows Spotify playlists or tracks player."),(0,r.kt)("td",{parentName:"tr",align:"left"},"URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"youtube"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Play songs & musics or videos via Youtube"),(0,r.kt)("td",{parentName:"tr",align:"left"},"text & URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"This type allowed for specific links, works well for all attachment on Discord that contains audio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"URL")))),(0,r.kt)("h6",{id:"footnotes"},"Footnotes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"If you have low resources about your client (server), we recommend to you use ",(0,r.kt)("inlineCode",{parentName:"em"},"youtube")," type than ",(0,r.kt)("inlineCode",{parentName:"em"},"spotify")," type."))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h4",{id:"local-file"},"Local file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "play-local",\n  code: `\n  $playTrack[localfile;./local-musics/ne0a1ch4n.mp3]\n  `\n//It will play ne0a1ch4n.mp3 file on your bot\'s handler.\n});\n')),(0,r.kt)("h4",{id:"soundcloud-tracks"},"Soundcloud tracks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "play-soundcloud",\n  code: `\n  $playTrack[soundcloud;Never Gonna Give You Up]\n  `\n//It will play Rick Astley\'s "Never Gonna Give You Up" album.\n});\n')),(0,r.kt)("h4",{id:"spotify-tracks"},"Spotify tracks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "play-spotify",\n  code: `\n  $playTrack[spotify;https://open.spotify.com/album/1RLLD6srXDVDHkRKd8HfaM?si=h51ooGfFRryIelumMIaI9w&utm_source=native-share-menu]\n  `\n//It will play "Carrion (Original Game Soundtrack)" playlist.\n});\n')),(0,r.kt)("h4",{id:"youtube-tracks"},"Youtube tracks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "play-youtube",\n  code: `\n  $playTrack[youtube;https://www.youtube.com/watch?v=GRATNtOC-rs]\n  `\n//It will play "[Arknights OST] Main Theme BGM (1Hour Loop)" playlist. You can also text instead inserting link :)\n});\n')),(0,r.kt)("h4",{id:"audio-urls"},"Audio URLs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "play-url",\n  code: `\n  $playTrack[url;https://cdn.discordapp.com/attachments/877857304911953930/969282303887028264/9F004493-A7F6-4B3B-8FC1-CC9812DC6621.mov]\n  `\n//In this video file you will be hearing sounds.\n});\n')),(0,r.kt)("p",null,"And that's how we play songs or musics with aoi.js :) Pretty easy right? \u2665"))}d.isMDXComponent=!0}}]);