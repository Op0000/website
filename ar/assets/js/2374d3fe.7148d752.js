"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82085],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,k=d["".concat(i,".").concat(f)]||d[f]||c[f]||l;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=f;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},45255:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>m,default:()=>y,frontMatter:()=>k,metadata:()=>g,toc:()=>C});var a=t(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&u(e,t,n[t]);if(p)for(var t of p(n))s.call(n,t)&&u(e,t,n[t]);return e},c=(e,n)=>l(e,o(n)),f=(e,n)=>{var t={};for(var a in e)i.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const k={title:"$songFilter"},m=void 0,g={unversionedId:"functions/songfilter",id:"version-5.5.5/functions/songfilter",title:"$songFilter",description:"This function can change the music's filter such as bassboost and many more.",source:"@site/versioned_docs/version-5.5.5/functions/songfilter.md",sourceDirName:"functions",slug:"/functions/songfilter",permalink:"/ar/docs/5.5.5/functions/songfilter",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689518734,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$songFilter"},sidebar:"docs",previous:{title:"$slowmode",permalink:"/ar/docs/5.5.5/functions/slowmode"},next:{title:"$songInfo",permalink:"/ar/docs/5.5.5/functions/songinfo"}},b={},C=[{value:"Available Types",id:"available-types",level:3}],h={toc:C},N="wrapper";function y(e){var n=e,{components:t}=n,r=f(n,["components"]);return(0,a.kt)(N,c(d(d({},h),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function can change the music's filter such as bassboost and many more."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$songFilter[type:value;type:value;...]\n")),(0,a.kt)("h3",d({},{id:"available-types"}),"Available Types"),(0,a.kt)("p",null,"Changes the pitch of the audio"),(0,a.kt)("p",null,"Raw usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"pitch:number")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"pitch:1.5")),(0,a.kt)("p",null,"Min: ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,a.kt)("inlineCode",{parentName:"p"},"1.9")),(0,a.kt)("p",null,"Changes the bass for the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"bass:number")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"bass:5")),(0,a.kt)("p",null,"Min: ",(0,a.kt)("inlineCode",{parentName:"p"},"-20")," Max: ",(0,a.kt)("inlineCode",{parentName:"p"},"20")),(0,a.kt)("p",null,"Sets an echo for the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"echo:number")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"echo:100")),(0,a.kt)("p",null,"Min: ",(0,a.kt)("inlineCode",{parentName:"p"},"0.9")," Max: ",(0,a.kt)("inlineCode",{parentName:"p"},"90000")),(0,a.kt)("p",null,"Sets a speed for the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"speed:number")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"speed:1.5")),(0,a.kt)("p",null,"Min: ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,a.kt)("inlineCode",{parentName:"p"},"1.9")),(0,a.kt)("p",null,"Sets a vibrato for the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"vibrato:number")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"vibrato:0.5")),(0,a.kt)("p",null,"Min: ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,a.kt)("inlineCode",{parentName:"p"},"0.9")),(0,a.kt)("p",null,"Set a pulsator to the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsator:number")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsator:5")),(0,a.kt)("p",null,"Min: ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,a.kt)("inlineCode",{parentName:"p"},"99.9")),(0,a.kt)("p",null,"Sets a contrast for the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"contrast:number")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"contrast:1")),(0,a.kt)("p",null,"Min: ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1")," Max: ",(0,a.kt)("inlineCode",{parentName:"p"},"99.9")),(0,a.kt)("p",null,"Reduces the noise of the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"gate:on/off")),(0,a.kt)("p",null,"On: ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"gate:1")),(0,a.kt)("p",null,"Applies a flanging effect for the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"flanger:on/off")),(0,a.kt)("p",null,"On: ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"flanger:1")),(0,a.kt)("p",null,"Add a phasing effect for the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"phaser:on/off")),(0,a.kt)("p",null,"On: ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"phaser:1")),(0,a.kt)("p",null,"Applies surround sound filter for the audio"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"surround:on/off")),(0,a.kt)("p",null,"On: ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"surround:1")),(0,a.kt)("p",null,"Makes the audio easier to listen on headphones"),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"earwax:on/off")),(0,a.kt)("p",null,"On: ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," Off: ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("p",null,"Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"earwax:1")),(0,a.kt)("p",null,"If you want to reset the filter, put the value ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\nname: \"songFilter\",\ncode: `\n$songFilter[bass:10;speed:2]\n`\n/*\nThis sets the bass to '50' and sets the speed to '2x' speed\n*/\n})\n")))}y.isMDXComponent=!0}}]);