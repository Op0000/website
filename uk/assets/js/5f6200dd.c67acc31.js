"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[33830],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>k,contentTitle:()=>v,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var a=t(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(e,t,n[t]);if(l)for(var t of l(n))u.call(n,t)&&c(e,t,n[t]);return e},d=(e,n)=>r(e,o(n)),m=(e,n)=>{var t={};for(var a in e)s.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t};const f={title:"Introduction",description:"Setting up aoi.music with ease.",id:"aoimusic-introduction",pagination_prev:null},v=void 0,g={unversionedId:"official/aoi.music/aoimusic-introduction",id:"official/aoi.music/aoimusic-introduction",title:"Introduction",description:"Setting up aoi.music with ease.",source:"@site/extensions/official/aoi.music/1introduction.md",sourceDirName:"official/aoi.music",slug:"/official/aoi.music/aoimusic-introduction",permalink:"/uk/extensions/official/aoi.music/aoimusic-introduction",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",description:"Setting up aoi.music with ease.",id:"aoimusic-introduction",pagination_prev:null},sidebar:"docs",next:{title:"$addFilter",permalink:"/uk/extensions/official/aoi.music/functions/addFilter"}},k={},b=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Installation",id:"installation",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Events",id:"events",level:3},{value:"Adding Events",id:"adding-events",level:4},{value:"List of Events",id:"list-of-events",level:4},{value:"Using Events",id:"using-events",level:3}],y=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",p({},n))},N=y("Tabs"),h=y("TabItem"),E={toc:b},O="wrapper";function w(e){var n=e,{components:t}=n,i=m(n,["components"]);return(0,a.kt)(O,d(p(p({},E),i),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",p({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"#installation"}),"Installation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"#example-usage"}),"Setup"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"#events"}),"Events")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"#adding-events"}),"Adding Events"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"#list-of-events"}),"List of Events"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",p({parentName:"strong"},{href:"#using-events"}),"Using Events")))))),(0,a.kt)("hr",null),(0,a.kt)("h3",p({},{id:"installation"}),"Installation"),(0,a.kt)(N,{groupId:"pref-install",mdxType:"Tabs"},(0,a.kt)(h,{value:"i-npm",label:"Stable",mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"npm install @akarui/aoi.music\n"))),(0,a.kt)(h,{value:"i-yarn",label:"Pre-Release",mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"npm install https://github.com/akaruidevelopment/music#main\n")))),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js",metastring:'title="index.js"',title:'"index.js"'}),'const voice = new AoiVoice(bot, {\n    searchOptions?: {\n        soundcloudClientId?: string,\n        youtubeCookie?: string,\n        youtubeAuth?: PathLike,\n        youtubegl?: string,\n        youtubeClient?: "WEB" | "ANDROID" | "YTMUSIC",\n    },\n    requestOptions?: {\n        offsetTimeout?: number,\n        soundcloudLikeTrackLimit?: number,\n        youtubePlaylistLimit?: number,\n        spotifyPlaylistLimit?: number,\n    },\n    devOptions?: {\n        debug: boolean,\n    },\n});\n')),(0,a.kt)("h3",p({},{id:"example-usage"}),"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'const { AoiClient } = require("aoi.js");\nconst { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");\n\nconst bot = new AoiClient({\n    token: "Discord Bot Token",\n    prefix: "Discord Bot Prefix",\n    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],\n    events: ["onMessage", "onInteractionCreate"],\n    database: {\n        type: "aoi.db",\n        db: require("@akarui/aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\nconst voice = new AoiVoice(bot, {\n    searchOptions: {\n        soundcloudClientId: "Soundcloud ID",\n        youtubegl: "US",\n    },\n    requestOptions: {\n        offsetTimeout: 0,\n        soundcloudLikeTrackLimit: 200,\n    },\n});\n\n// Command Example (ping)\nbot.command({\n    name: "ping",\n    code: `Pong! $pingms`,\n});\n\n// optional (cacher / filter)\nvoice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));\nvoice.addPlugin(PluginName.Filter, new Filter({\n    filterFromStart: false,\n}));\n\nvoice.bindExecutor(bot.functionManager.interpreter);\n')),(0,a.kt)("h3",p({},{id:"events"}),"Events"),(0,a.kt)("h4",p({},{id:"adding-events"}),"Adding Events"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"voice.addEvent(PlayerEvents.EVENT_NAME);\n")),(0,a.kt)("h4",p({},{id:"list-of-events"}),"List of Events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TRACK_START")," ","\u2192"," Emitted whenever a track starts. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TRACK_END")," ","\u2192"," Emitted whenever a track ends."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"QUEUE_START")," ","\u2192"," Emitted whenever a queue starts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"QUEUE_END")," ","\u2192"," Emitted whenever a queue ends."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AUDIO_ERROR")," ","\u2192"," Emitted whenever a audio error occurs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TRACK_PAUSE")," ","\u2192"," Emitted whenever a track pauses."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TRACK_RESUME")," ","\u2192"," Emitted whenever a track resumes.")),(0,a.kt)("h3",p({},{id:"using-events"}),"Using Events"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'/* Ensure you have loader defined using the LoadCommands class\nconst { AoiClient, LoadCommands } = require("aoi.js");\nconst loader = new LoadCommands(bot); */\n\nloader.load(voice.cmds,"./voice/");\n')),(0,a.kt)("p",null,"This should be the content of your ",(0,a.kt)("inlineCode",{parentName:"p"},"./voice/somefile.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'module.exports = [{\n    channel: "$channelID",\n    type: "eventName",\n    code: `code to execute here`\n}]\n')),(0,a.kt)("p",null,"If you don't want to use handlers, you can use this instead in your main file:"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'voice.cmds["eventName"].set("name of the command", {\n    channel: "$channelID",\n    code: `code to execute here`\n});\n')))}w.isMDXComponent=!0}}]);