"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,N=s["".concat(p,".").concat(u)]||s[u]||k[u]||l;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>y,frontMatter:()=>N,metadata:()=>g,toc:()=>C});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&m(e,n,t[n]);return e},k=(e,t)=>l(e,i(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const N={title:"The Panel Class",description:"All about aoi.panel's Panel class.",id:"aoipanel-panel-class",pagination_next:null},c="The Panel Class",g={unversionedId:"official/aoi.panel/aoipanel-panel-class",id:"official/aoi.panel/aoipanel-panel-class",title:"The Panel Class",description:"All about aoi.panel's Panel class.",source:"@site/extensions/official/aoi.panel/panel.md",sourceDirName:"official/aoi.panel",slug:"/official/aoi.panel/aoipanel-panel-class",permalink:"/ar/extensions/official/aoi.panel/aoipanel-panel-class",draft:!1,tags:[],version:"current",frontMatter:{title:"The Panel Class",description:"All about aoi.panel's Panel class.",id:"aoipanel-panel-class",pagination_next:null},sidebar:"docs",previous:{title:"Events",permalink:"/ar/extensions/official/aoi.panel/aoipanel-events"}},f={},C=[{value:"Parameters",id:"parameters",level:2},{value:"Colour Themes",id:"colour-themes",level:3},{value:"Code Themes",id:"code-themes",level:3}],h={toc:C},b="wrapper";function y(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(b,k(s(s({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"the-panel-class"}),"The Panel Class"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'const { Panel } = require("@akarui/aoi.panel")\n\nconst panel = new Panel({\n    username: string, array;\n    password: string, array;\n    secret: string;\n    port: number;\n    bot: string;\n    mainFile: pathLike;\n    commands: pathLike;\n    interaction: pathLike;\n    version: string;\n    type: string;\n    theme: string;\n    codetheme: string;\n});\n')),(0,a.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Required"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"username")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"user name for logging into the panel (can be an Array)."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String, Array"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'["Leref","Blurr","Ayaka"]')," or ",(0,a.kt)("inlineCode",{parentName:"td"},'"Blurr1447"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"password")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"password for logging into the panel (can be an Array)."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String, Array"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'["HelloHell123","abcd","123"]')," or ",(0,a.kt)("inlineCode",{parentName:"td"},'"HelloHell"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"secret")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Session Secret For Express."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"SomeRandomSessionSecret"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"port")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Port on which the panel is hosted."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Integer"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"),". Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"3000")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"8000"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bot")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Your aoi.js or discord.js client."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"bot"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"mainFile")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Name of the main file where the code is running."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"index.js"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"commands")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Commands Folder Where all message commands are handled."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"./commands/"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"interaction")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Interactitons Folder Where all slash commands are handled."),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"./interactions/"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"version")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Your version of aoi.js: ",(0,a.kt)("inlineCode",{parentName:"td"},"v5")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"v6")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"),"; Default:",(0,a.kt)("inlineCode",{parentName:"td"},"v6")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"v6"')," or ",(0,a.kt)("inlineCode",{parentName:"td"},'"v5"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Type of panel, aoi.js or discord.js"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"),"; Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"aoi.js")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'"djs"')," or ",(0,a.kt)("inlineCode",{parentName:"td"},'"aoi"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"theme")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The colour theme of the panel"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"),"; Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"indigo")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"All colour themes are listed below.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"codetheme")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"The code highlighting Scheme of the panel"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"false"),"; Default: ",(0,a.kt)("inlineCode",{parentName:"td"},"night")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"All code themes are listed below.")))),(0,a.kt)("h3",s({},{id:"colour-themes"}),"Colour Themes"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"red"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pink"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"purple"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deep-purple"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"indigo")," ",(0,a.kt)("strong",{parentName:"p"},"[default]"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"blue"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"light-blue"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cyan"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"teal"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"green"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"light-green"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lime"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"khaki"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"yellow"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"amber"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"orange"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deep-orange"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"blue-grey"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"brown"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"grey"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"dark-grey")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"black"),"."),(0,a.kt)("h3",s({},{id:"code-themes"}),"Code Themes"),(0,a.kt)("p",null,"The panel uses Codemirror for the code editor. The list of themes Code"),(0,a.kt)("p",null,"Mirror supports are listed ",(0,a.kt)("a",s({parentName:"p"},{href:"https://codemirror.net/5/demo/theme.html#default"}),"here"),"."))}y.isMDXComponent=!0}}]);