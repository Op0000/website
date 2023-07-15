"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[84891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e},p=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"Custom Functions",description:"Custom functions are used to create special functions with custom code that can only be used by the specific client."},g=void 0,y={unversionedId:"advanced-guides/custom-functions",id:"version-5.5.5/advanced-guides/custom-functions",title:"Custom Functions",description:"Custom functions are used to create special functions with custom code that can only be used by the specific client.",source:"@site/versioned_docs/version-5.5.5/advanced-guides/custom-functions.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/custom-functions",permalink:"/es/docs/5.5.5/advanced-guides/custom-functions",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689445723,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"Custom Functions",description:"Custom functions are used to create special functions with custom code that can only be used by the specific client."},sidebar:"docs",previous:{title:"Command Handler",permalink:"/es/docs/5.5.5/guides/command-handler"},next:{title:"Interaction Commands",permalink:"/es/docs/5.5.5/advanced-guides/interaction-commands"}},h={},k=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Examples",id:"examples",level:2},{value:"Example with aoi.js function",id:"example-with-aoijs-function",level:3},{value:"Example with discord.js function",id:"example-with-discordjs-function",level:3}],N={toc:k},b="wrapper";function v(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(b,p(d(d({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.functionManager.createCustomFunction({\nname : '$name', //FUNCTION NAME \nparams : ['params',...],//THE TYPE OF PARAMS. Use {param} to get the values of the parameters.\ntype : 'aoi.js/djs', //TYPE METHOD\ncode : `The code to be returned` //THE ACTUAL CODE IT WILL BE RETURN\n})\n")),(0,a.kt)("h3",d({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"name"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The name of the custom function"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"string with $ sign"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"params"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The parameters of the function"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"type"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The type of function to be used"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"aoi.js or djs"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"code"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"The code to be returned"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,a.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("p",null," To get the values of the parameters provided in the function, use {} around the parameter name i.e. {param}   "),(0,a.kt)("h2",d({},{id:"examples"}),"Examples"),(0,a.kt)("h3",d({},{id:"example-with-aoijs-function"}),"Example with aoi.js function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating the custom function")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.functionManager.createCustomFunction({\nname : '$say', //FUNCTION NAME \nparams : ['authorid','message'],//THE TYPE OF PARAMS\ntype : 'aoi.js', //TYPE METHOD\ncode : ` \n**$userTag[{authorid}]** says: **{message}**\n` //THE ACTUAL CODE IT WILL BE RETURN\n})\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the custom function")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname:"say",\ncode:`\n$say[$authorID;$message]\n`})\n')),(0,a.kt)("h3",d({},{id:"example-with-discordjs-function"}),"Example with discord.js function"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Creating the custom function")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'client.functionManager.createCustomFunction({\n      name: "$sendDMtoUser",//FUNCTION NAME\n      type: "djs",//TYPE OF THE FUNCTION\n      code: async d => {//FETCHING DATA AS D\n        \n        const data = d.util.openFunc(d);\n        const [userid,message] = data.inside.splits;//GETTING THE PARAMETERS\n        \n        const user = await d.util.getUser(d, userid);// THIS IS THE CODE INSIDE\n        user.send(message);//YOU CAN CHANGE THIS AS PER YOUR REQUIREMENTS\n        \n        return {\n          code: d.util.setCode(data);\n        }}\n    });\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using the custom function")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname:"dm",\ncode:`\n$sendDMtoUser[$authorID;$message]\n`})\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can create a function without parameters by omitting the params field as it is optional.\nOnly Experienced Developers with proper understanding of aoi.js should use this!\nBy using custom function we aren't obliged of what happens to your client!")))}v.isMDXComponent=!0}}]);