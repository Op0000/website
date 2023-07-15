"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40279],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),m=p(n),c=a,k=m["".concat(o,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(k,i(i({ref:e},d),{},{components:n})):r.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[m]="string"==typeof t?t:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88542:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>g,default:()=>v,frontMatter:()=>k,metadata:()=>N,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&d(t,n,e[n]);if(u)for(var n of u(e))p.call(e,n)&&d(t,n,e[n]);return t},s=(t,e)=>l(t,i(e)),c=(t,e)=>{var n={};for(var r in t)o.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n};const k={title:"$queue",description:"$queue will return the current song queue.",id:"queue"},g=void 0,N={unversionedId:"official/aoi.music/functions/queue",id:"official/aoi.music/functions/queue",title:"$queue",description:"$queue will return the current song queue.",source:"@site/extensions/official/aoi.music/functions/queue.md",sourceDirName:"official/aoi.music/functions",slug:"/official/aoi.music/functions/queue",permalink:"/ar/extensions/official/aoi.music/functions/queue",draft:!1,tags:[],version:"current",frontMatter:{title:"$queue",description:"$queue will return the current song queue.",id:"queue"},sidebar:"docs",previous:{title:"$playerStatus",permalink:"/ar/extensions/official/aoi.music/functions/playerStatus"},next:{title:"$queueLength",permalink:"/ar/extensions/official/aoi.music/functions/queueLength"}},f={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],y={toc:b},h="wrapper";function v(t){var e=t,{components:n}=e,a=c(e,["components"]);return(0,r.kt)(h,s(m(m({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$queue")," will return the current song queue."),(0,r.kt)("h2",m({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$queue[page?;limit?;format?]\n")),(0,r.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"page?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"queue page"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"limit?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"maximum of songs to display"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"format?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"format to display information about the songs"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," Types ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Property"),(0,r.kt)("th",m({parentName:"tr"},{align:null})),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Returns"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Supports"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{title}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the video/song title"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{channelId}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the channel id"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{artist}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the Artist"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{artistURL}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the Artist URL"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, SoundCloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{artistAvatar}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the Artist Avatar"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"SoundCloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{duration}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the track/video duration in ms"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{identifier}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"soundcloud, youtube, localfile, url, spotify"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{views}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the amount of Views/Plays of the video/song"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{likes}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the amount of likes of the video/song"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{thumbnail}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the song/video thumbnail"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{id}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the song/video ID"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{description}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the video/song description"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{createdAt}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the Creation Date of the video/song"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{platformType}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the platform Type"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{rawData}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns song information as object"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"object"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{formatedPlatforms}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"SoundCloud, YouTube, Localfile, Url, Spotify"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{requester}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the Song Requester (user object, .user.id, .user.name etc)"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"string"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"{position}")),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Returns the Song Position in the current Queue"),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"number"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"YouTube, Spotify, SoundCloud, Url, LocalFile"))))),(0,r.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the current queue in the ",(0,r.kt)("inlineCode",{parentName:"p"},"{position}) {title} - {requester.user.name}")," format:"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'queue',\n    code: `\n    $queue[1;10;{position}) {title} - {requester.user.name}]\n  `\n});\n")))}v.isMDXComponent=!0}}]);