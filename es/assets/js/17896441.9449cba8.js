"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27918],{17119:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(67294),i=a(30143);const n=()=>o.createElement(i.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},53989:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(67294),i=a(99861);const n={"cookies-banner":"cookies-banner_YsRc",container:"container_H2za",avatar:"avatar_qL_g",content:"content_j2XQ",tagContainer:"tagContainer_hVSL",tag:"tag_Utpt",tagCircle:"tagCircle_gDjY"};var s=a(55692);function r(){const{colorMode:e}=(0,s.I)(),[t,a]=(0,o.useState)(!1);(0,o.useEffect)((()=>{r()||a(!0)}),[]);const r=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}};return o.createElement("div",null,t&&o.createElement("div",{className:n["cookies-banner"]},o.createElement("p",null,"You need to allow cookies to comment on Wikis!")),o.createElement(i.Z,{repo:"aoijs/website",repoId:"MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY=",category:"General",categoryId:"DIC_kwDOFa8DhM4CXVEw",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0}))}},42060:(e,t,a)=>{a.d(t,{Z:()=>h});var o=a(67294),i=a(86010),n=a(11128);const s={tag:"tag_U0uN",booster:"booster_MDO7",staff:"staff_nctV",mod:"mod_BJV7",creator:"creator_hdXK",contributor:"contributor_Fooe"};var r=Object.defineProperty,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&m(e,a,t[a]);return e};function u(e){return e.href?o.createElement(n.Z,p({},e)):o.createElement(o.Fragment,null,e.children)}function h({author:e,className:t}){const{name:a,title:n,url:r,imageURL:c,email:l}=e,d=r||l&&`mailto:${l}`||void 0,m=a.toLowerCase(),p=["@leref"].map((e=>e.toLowerCase())).includes(m),h=["@dodogames","@supremesupreme","@faf4a","@usersatoshi"].map((e=>e.toLowerCase())).includes(m),g=["@dodogames","@supremesupreme","@faf4a","@usersatoshi","@ahoemi","@snowytealatte","@wansie","@jollyjolli","@manu_1025"].map((e=>e.toLowerCase())).includes(m),f=["@faf4a","@dodogames"].map((e=>e.toLowerCase())).includes(m),y=["@.kuray.","@Alien Abd","@Zeke \u2661","@artemcurious","@creitingameplays","@eduard.irm","@kzzzakz","@leref","@neussdev","@valentineu0","@wansie"].map((e=>e.toLowerCase())).includes(m);return o.createElement("div",{className:(0,i.Z)("avatar margin-bottom--sm",t)},c&&o.createElement(u,{href:d,className:"avatar__photo-link"},o.createElement("img",{className:"avatar__photo",src:c,alt:a})),a&&o.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},o.createElement("div",{className:"avatar__name"},o.createElement(u,{href:d,itemProp:"url"},o.createElement("span",{itemProp:"name"},a)),f&&o.createElement("span",{className:(0,i.Z)(s.tag,s.contributor)},"Contributor"),y&&o.createElement("span",{className:(0,i.Z)(s.tag,s.booster)},"Server Booster"),g&&o.createElement("span",{className:(0,i.Z)(s.tag,s.staff)},"Staff"),h&&o.createElement("span",{className:(0,i.Z)(s.tag,s.mod)},"Moderator"),p&&o.createElement("span",{className:(0,i.Z)(s.tag,s.creator)},"Creator")),n&&o.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}},6758:(e,t,a)=>{a.d(t,{Z:()=>G});var o=a(63997),i=a(67294);const n=({children:e,color:t,radius:a,padding:o})=>i.createElement("span",{style:{backgroundColor:t,borderRadius:a||"2px",color:"#fff",padding:o||"0.2rem"}},e);var s=a(54023),r=a(49247),c=a(17119),l=a(53989),d=a(17891),m=a(86010),p=a(25365),u=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,w=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&b(e,a,t[a]);if(f)for(var a of f(t))v.call(t,a)&&b(e,a,t[a]);return e},k=(e,t)=>h(e,g(t));const j=({name:e,id:t,value:a,onChange:o,type:n,error:s,charCount:r})=>{const c={width:"100%",padding:"8px",borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.1)",border:"1px solid "+(s?"red":"#3f51b5"),transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"},l=e=>{o(e)};let d=null;switch(n){case"textarea-description":d=i.createElement("div",null,i.createElement("textarea",{name:e,id:t,value:a,onChange:l,style:k(w({},c),{minHeight:"155px",resize:"none"}),required:!0}),i.createElement("div",{style:{fontSize:"12px",color:r>=500?"red":"#3f51b5"}},void 0===r?"0":r,"/",500));break;case"textarea-code":d=i.createElement("textarea",{name:e,id:t,value:a,onChange:l,style:k(w({},c),{minHeight:"155px",resize:"none"}),required:!0});break;case"number":const n=t=>{const{value:a}=t.target,i=a.replace(/[^0-9]/g,"");i.length>20||o({target:{name:e,value:i}})};d=i.createElement("div",{style:{position:"relative"}},i.createElement("input",{type:"text",name:e,id:t,value:a,onChange:n,style:c,inputMode:"numeric",pattern:"[0-9]*",required:!0}));break;case"small":d=i.createElement("input",{type:"text",name:e,id:t,value:a,onChange:l,style:k(w({},c),{width:"50%",fontSize:"12px"}),required:!0});break;default:d=i.createElement("div",null,i.createElement("input",{type:"text",name:e,id:t,value:a,onChange:l,style:k(w({},c),{resize:"none"}),required:!0}),i.createElement("div",{style:{fontSize:"12px",color:r>=50?"red":"#3f51b5",marginTop:"5px"}},void 0===r?"0":r,"/",50))}return i.createElement("div",null,d)};var E=a(99578),x=a(11128),_=a(42060),C=Object.defineProperty,S=Object.defineProperties,O=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,z=(e,t)=>{for(var a in t||(t={}))Z.call(t,a)&&N(e,a,t[a]);if(I)for(var a of I(t))T.call(t,a)&&N(e,a,t[a]);return e},D=(e,t)=>S(e,O(t));const A=()=>{const[e,t]=(0,i.useState)(0),[a,o]=(0,i.useState)(0),[n,s]=(0,i.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[r,c]=(0,i.useState)({title:!1,discordUID:!1,description:!1,code:!1,tags:!1}),{title:l,description:d,discordUID:u,code:h,tags:g,isUIDValid:f}=n,[y,v]=(0,i.useState)({avatar:`https://cdn.discordapp.com/embed/avatars/${Math.floor(5*Math.random())}.png`,username:"Guest User",id:""}),b=async e=>{const{name:a,value:o}=e.target;let i=o;if("title"===a)i=o.replace(/[^a-zA-Z0-9 ]/g,""),t((e=>D(z({},e),{title:o.length}))),i.length>49&&(i=i.substring(0,50));else if("description"===a)t((e=>D(z({},e),{description:o.length}))),o.length>=500&&(i=o.substring(0,499));else if("discordUID"===a&&(s((e=>D(z({},e),{isUIDValid:!0}))),o.length>=17)){const{avatar:e,username:t,bot:a,id:i}=await w(o);void 0!==a&&s((e=>D(z({},e),{isUIDValid:!1}))),v((a=>D(z({},a),{avatar:e,username:t,id:"- "+i})))}s((e=>D(z({},e),{[a]:i})))},w=async e=>{const t=Math.floor(5*Math.random());try{const a=await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vdWluZm8v")+e+"?key="+atob("bGVyZWZzdWNrc2xvbDEyMw==")),o=await a.json();return o&&o.avatar?{bot:o.bot,avatar:o.avatar,username:o.username,id:o.id}:{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}catch(a){return{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}},k=async e=>{e.preventDefault();const t=Date.now();if(t-a<15e3)return void alert("Don't spam the submit button!");o(t);const i={title:!1,discordUID:!1,description:!1,code:!1};["title","discordUID","description","code"].forEach((e=>{""===n[e].trim()&&(i[e]=!0)})),0===n.tags.length&&(i.tags=!0);const{avatar:s,username:r,bot:m}=await w(u);if("Guest User"===r&&(i.discordUID=!0),void 0!==m&&(i.discordUID=!0),c(i),Object.values(i).some((e=>!0===e)))return;const p=Math.random().toString(36).substring(7),f=`${u}/${p}.md`,y=`---\ntitle: "${l}"\ndescription: "${d}"\nauthors:\n  name: "@${r}"\n  title: Member - ${u}\n  userid: "${u}"\n  url: https://discord.com/users/${u}\n  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/${u}.png\ntags: ${JSON.stringify(g)}\nhide_table_of_contents: true\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n\n${h}`;try{async function b(e){try{(await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vYXZhdGFycy8=")+e+"?key="+atob("bGVyZWZzdWNrc2xvbDEyMw=="))).ok||await alert("Something went wrong while handling your request. (Try resubmitting later again, or notify aoi.js staff about this if it occurs again)")}catch(t){return void await alert("Something went wrong while handling your request. (Failed to upload your avatar, you can savely ignore this error)")}}if(!(await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vZ2l0aHVi")+"?key="+atob("bGVyZWZzdWNrc2xvbDEyMw=="),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({commitMessage:`New Wiki created by: ${r}`,content:y,fileName:f})})).ok)return void await alert("Something went wrong while handling your request.");await b(u),alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}catch(v){return}};return i.createElement("form",{onSubmit:k},i.createElement("br",null),i.createElement("br",null),i.createElement("h3",null,"Title of Wiki",i.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short and fitting title for your Wiki)")),i.createElement(j,{name:"title",id:"title",value:l,onChange:b,type:"text",placeholder:"Title",required:!0,pattern:"[a-zA-Z0-9]*",error:r.title,charCount:void 0===e.title?"0":e.title}),i.createElement("br",null),i.createElement("h3",null,"Description",i.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short description about the purpose of your Wiki, will NOT be displayed to the user on the website)")),i.createElement(j,{name:"description",id:"description",value:d,onChange:b,type:"textarea-description",placeholder:"Description",required:!0,error:r.description,charCount:void 0===e.description?"0":e.description}),i.createElement("br",null),i.createElement("h3",null,"Discord User ID",i.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Your Discord User ID, so you get the full credit of YOUR work)")),i.createElement(j,{name:"discordUID",id:"discordUID",value:u,onChange:b,type:"number",placeholder:"Discord UID",required:!0,error:!f||r.discordUID}),!f&&i.createElement("p",{style:{color:"red"}},"Invalid user"),i.createElement("br",null),i.createElement("h3",null,"Content of Wiki",i.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(The content of your Wiki, including how it works, what it does and more)")),i.createElement(j,{name:"code",id:"code",value:h,onChange:b,type:"textarea-code",placeholder:"Code",required:!0,error:r.code}),i.createElement("h5",{style:{marginBottom:"0.5rem"}},i.createElement("span",{style:{verticalAlign:"middle"}},"Preview",i.createElement("small",{style:{fontSize:"8px",color:"gray",verticalAlign:"middle"}}," ","(How your Wiki will look on the website)"))),i.createElement("div",{style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #3f51b5",backgroundColor:"rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"}},i.createElement("div",{style:{overflow:"hidden"}},i.createElement("div",{style:{background:"transparent",borderRadius:"4px",padding:"12px"}},i.createElement(_.Z,{author:{name:`@${y.username}`,title:`Member ${y.id}`,url:`https://discord.com/users/${u}`,imageURL:`${y.avatar}`}}),i.createElement("br",null),!h&&i.createElement("div",{className:E.Z.placeholderText},"Some text of your awesome Wiki!",i.createElement("br",null),i.createElement("br",null),"Did you know that you can use markdown to make your Wiki look even better? ",i.createElement("br",null)," ",i.createElement("br",null),i.createElement("div",{style:{fontSize:"18px",color:"gray",border:"1px solid #3f51b5",borderRadius:"3px",margin:"4px",padding:"10px"}},"![Alt Text](Image Link) for images! ",i.createElement("br",null),"## For Headers! ",i.createElement("br",null),"- For Lists! ",i.createElement("br",null))),i.createElement(p.D,null,h)))),i.createElement("br",null),i.createElement("h3",null,"Tags",i.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Select Tags that fit your Wiki)")),i.createElement("div",{className:E.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>i.createElement("span",{key:e,className:(0,m.Z)(E.Z.tag,{[E.Z.active]:g.includes(e)}),onClick:()=>(e=>{const t=[...g];t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),s((e=>D(z({},e),{tags:t})))})(e)},e)))),r.tags&&i.createElement("p",{style:{color:"red",marginTop:"10px",fontFamily:"var(--ifm-font-family-base)"}},"At least one tag is required"),i.createElement("div",{className:E.Z.buttons,style:{width:"100%",display:"flex",justifyContent:"flex-end",marginTop:"15px"}},i.createElement(x.Z,{className:(0,m.Z)("button button--outline button--secondary"),onClick:k,style:{width:"100%"}},"Submit")))},P=({children:e})=>{const[t,a]=(0,i.useState)(!1),o={display:"inline-block",padding:"0px 3px",fontWeight:"500",marginTop:"-5px",backgroundColor:t?"#4d5291":"#3b406e",cursor:t?"pointer":"default",color:"#c9cdfb",borderRadius:"3px",transition:"background-color 0.15s ease"};return i.createElement("div",{style:o,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1)},e)};const W="undefined"!=typeof document&&document.createElement("style");W&&(W.appendChild(document.createTextNode("\n.card-wrapper {\n  margin-bottom: 20px;\n}\n.pills {\n    list-style-type: none;\n    padding: 0;\n    display: flex;\n    margin-bottom: 10px;\n  }\n  \n  .pills__item {\n    background-color: #e9e9e9;\n    padding: 8px 16px;\n    border-radius: 20px;\n    margin-right: 8px;\n    cursor: pointer;\n    color: #555;\n  }\n  \n  .pills__item--active {\n    background-color: #0d6efd;\n    color: #fff;\n  }\n  \n")),document.head.appendChild(W));var U=Object.defineProperty,M=Object.defineProperties,B=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,H=(e,t,a)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const G=(q=((e,t)=>{for(var a in t||(t={}))L.call(t,a)&&H(e,a,t[a]);if($)for(var a of $(t))R.call(t,a)&&H(e,a,t[a]);return e})({},o.Z),F={Highlight:n,GiscusComponent:l.Z,InputField:j,SubmitForm:A,Cookies:c.Z,Tabs:s.Z,Slash:P,Showcase:function(){const[e,t]=(0,i.useState)([]),a=[{title:"Random memes",description:"They are funny images of trending memes totally in Spanish.",tags:["aoi.js","v6"],path:"/wikis/posts/1029818509364047933/ryko5y"},{title:"Bot Guild Create Log Command",description:"This command depicts or gets executed when a bot joins a guild, it logs the message with full guild Information in a particular pvt or open channel!",tags:["v6","Other","aoi.js"],path:"/wikis/posts/1034802804964995142/kphbt"},{title:"Prefix custom function",description:"Returns the prefix you used to call the command.",tags:["aoi.js","v6"],path:"/wikis/posts/1077733015846932530/iitgox"},{title:"Translate custom function",description:"Function that will translate something.",tags:["aoi.js","v6"],path:"/wikis/posts/1096717977304453160/8djazp"},{title:"Simple Welcome Card",description:"just simple welcome card using aoi.canvas",tags:["v6","Other"],path:"/wikis/posts/1096717977304453160/nhjf7f"},{title:"msgAfter function",description:"This will help people to get arguments ($msgAfter[2] --\x3e arg3 arg4 ...)",tags:["aoi.js","v6"],path:"/wikis/posts/1096717977304453160/v71q0o"},{title:"Cat Command",description:"Cat command nothing interesting.",tags:["aoi.js","v6"],path:"/wikis/posts/1096717977304453160/vwxtre"},{title:"Guess the country game",description:"a guess the country game using $awaitMessages the user gets a country flag and he has to guess it if the user guesses it right the bot mentions him and says Gg ",tags:["v6","aoi.js","Other"],path:"/wikis/posts/1121808241974837308/txlnl"},{title:"Voice Channel Count",description:"\xa1Hey! With this command you will know in how many Voice Channels is your bot connected to.\n**Variables needed**:  `vcCount: 0`\n\xbfFor what I need this code? I dont know, but the reason why I use it is in case I want to restart the host and I do not want some user that's listening to music stop listening suddenly",tags:["v6","aoi.js","aoi.music"],path:"/wikis/posts/166181471369953280/0ggsc"},{title:"File Names Custom Function",description:"Is a comprehensive resource dedicated to providing information and documentation on a custom function for obtaining file names. ",tags:["v6","aoi.js"],path:"/wikis/posts/166181471369953280/eff65g"},{title:"Get Weather",description:"A simple custom function for getting the weather of someplace.\nKinda useless :)",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/i1psxm"},{title:"Random Car Image",description:"Very simple code",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/nji73d"},{title:"Country Information Custom Function",description:"The $country function provides detailed information about a specific country. By specifying the country name and desired format, you can retrieve various details such as the country's name in English or Spanish, continent information, capital city, dialing code, country codes, top-level domain, area measurement, flag in emoji format, and high-resolution flag image.",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/ny063"},{title:"Random Country",description:"A code for get information about a random code.",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/p2o9s"},{title:"Google Search",description:"Inspired on $search of Fafa, but this is on google!",tags:["aoi.js","v6"],path:"/wikis/posts/166181471369953280/sjmifn"},{title:"8ball command",description:"8ball command",tags:["v6","aoi.js"],path:"/wikis/posts/405070001356275712/2pf8fb"},{title:"Serverinfo command",description:"Requires GuildPresences in intents",tags:["v6","aoi.js"],path:"/wikis/posts/405070001356275712/6bdeo"},{title:"Botinfo command",description:"simple botinfo command",tags:["v6","aoi.js"],path:"/wikis/posts/405070001356275712/sr2wtw"},{title:"fetchInvite function",description:"Easily fetch the information of Invites using custom functions!",tags:["aoi.js","v6","Other"],path:"/wikis/posts/428188716641812481/6ftrh8"},{title:"RPS game",description:"Simple RPS game.",tags:["aoi.js","v6"],path:"/wikis/posts/428188716641812481/gm5x4"},{title:"Transcript Custom Function",description:"$transcript custom function which saves messages of a channel and formats them to a .html file.",tags:["aoi.js","Other","v6"],path:"/wikis/posts/428188716641812481/nw36qo"},{title:"search function",description:"$search custom function for aoi.music which returns search results of either youtube or soundcloud.",tags:["aoi.js","aoi.music","v6","Other"],path:"/wikis/posts/428188716641812481/wvkxjp"},{title:"callAwaited Custom Function",description:"Calls an awaited command.",tags:["v6","aoi.js"],path:"/wikis/posts/590267498192961540/0mi2zp"},{title:"commandExists Custom Function",description:"Check if a command exists through its type and name.",tags:["aoi.js","v6"],path:"/wikis/posts/590267498192961540/jqpcsp"},{title:"Unicode character unescape",description:"This custom function allows you to unescape unicode characters. For example, if you had this string (which is escaped): `Hey there, wassup?`, then by using this function, you would get `Hey there, wassup?`.",tags:["v6","aoi.js"],path:"/wikis/posts/591690683509768223/0k0txb"},{title:"New if in old if commands",description:"This code allows you to use the new `$if` in old `$if` commands",tags:["v6","aoi.js"],path:"/wikis/posts/591690683509768223/82om08"},{title:"Is file empty function",description:"This function will return `true` or `false` based on whether the file specified is empty or not.",tags:["aoi.js","v6"],path:"/wikis/posts/591690683509768223/d0m8v5"},{title:"Download function",description:"This is a custom function for downloading files accessible through https.",tags:["aoi.js","v6"],path:"/wikis/posts/591690683509768223/h3mscp"},{title:"Yes or no command",description:"Yes or no command",tags:["aoi.js","v6"],path:"/wikis/posts/632607624742961153/0s8eh9"},{title:"HowGamer command",description:"Checks how gamer you're for no reason, It's just for fun so.",tags:["v6","aoi.js"],path:"/wikis/posts/632607624742961153/ic9vu7"},{title:"Long Serverinfo command",description:"A long serverinfo command just for you. Nothing fancy about it.",tags:["v6","aoi.js"],path:"/wikis/posts/632607624742961153/iiwq2"},{title:"Author button",description:"A tutorial on how to setup author button with explanation on how it works!",tags:["v6","aoi.js"],path:"/wikis/posts/632607624742961153/mnfe6"},{title:"Kick command",description:"The Kick command is triggered through a slash command interaction. Nothing special, it's just a kick command.",tags:["v6","aoi.js"],path:"/wikis/posts/689364013297041409/3rabq"},{title:"Clear command",description:"The clear command allows the user (with permission) to delete fewer than 100 messages. It also provides two additional optional options: filter and channel.",tags:["aoi.js","v6"],path:"/wikis/posts/689364013297041409/psfe2c"},{title:"Reloading the Commands ",description:"Before restarting your bot, you can reinstall the commands folder that you have already set and run your commands.",tags:["v6","aoi.js","Other"],path:"/wikis/posts/693451182617657394/30bbab"},{title:"Some thread functions",description:"This wiki is about 3 custom functions for threads: lock, unlock and rename.",tags:["v6","aoi.js","Other"],path:"/wikis/posts/713132410153205802/34unj"},{title:"Progression bar",description:"A function that makes progression bar to save time and help people who can't do basic maths",tags:["v6","aoi.js","Other"],path:"/wikis/posts/713132410153205802/c6h1efa"},{title:"Member count with image",description:"A custom function to show the data of server members.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/5sg6ej"},{title:"Slot Command",description:"A simple, easy slot command",tags:["aoi.js","v6"],path:"/wikis/posts/715852000096419900/7y0d4k"},{title:"commands list",description:"A djs code to filter and get your commands list",tags:["Other","v6"],path:"/wikis/posts/715852000096419900/aswziy"},{title:"anti swear command",description:"A djs code to check if any message contains swear words or not.",tags:["v6","Other","aoi.js"],path:"/wikis/posts/715852000096419900/cy1ltq"},{title:"toToggleCase",description:"A custom d.js function for text modification.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/dmrmlh"},{title:"Hack command",description:"A advanced hack command\u2026 Made for fun check it out.",tags:["aoi.js","Other","v6"],path:"/wikis/posts/715852000096419900/icaljl"},{title:"Colored and styled console logging",description:"List of codes for colored and styled console logging.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/sof89f"},{title:"Emoji Progress Bar",description:"A js function to make a progression bar using emojis.",tags:["aoi.js","v6","Other"],path:"/wikis/posts/715852000096419900/szskh"},{title:"Server captcha verification",description:"A command to make a verification system.",tags:["v6","aoi.js","Other"],path:"/wikis/posts/715852000096419900/vr5jfn"},{title:"reverseText",description:"A fun command to modify text and reverse them.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/w2htzj"},{title:"randomText advanced",description:"A custom function to get random/specified number of words.",tags:["v6","Other"],path:"/wikis/posts/715852000096419900/xzyzwx"},{title:"Currency Command Balance",description:"A Simple Currency Balance Command",tags:["v6","aoi.js"],path:"/wikis/posts/730782268175679528/c0xpn"},{title:"Simple Moderations Clear",description:"This is a simple moderations clear command.",tags:["aoi.js","v6"],path:"/wikis/posts/730782268175679528/j991sn"},{title:"Simple avatar command",description:"Simple avatar command for aoi.js v6",tags:["aoi.js","v6"],path:"/wikis/posts/894309600029999104/jh5tdp"},{title:"Ticketing system",description:"This is a ticketing system whose most of the codes are aoi.js while some, like the transcript is made with discord.js. I thought of making this wiki as many people are having doubts or want to make a ticketing system. ",tags:["aoi.js","v6"],path:"/wikis/posts/949588732498018324/r4uv0q"},{title:"Roblox group info command",description:"Displays info about a roblox group",tags:["v6","aoi.js"],path:"/wikis/posts/964024743172915220/ebigj"}],o=a=>{e.includes(a)?t(e.filter((e=>e!==a))):t([...e,a])},n=0===e.length?a:a.filter((t=>e.every((e=>t.tags.includes(e)))));return i.createElement("div",null,i.createElement("ul",{className:"pills"},i.createElement("li",{className:(0,m.Z)("pills__item",{"pills__item--active":0===e.length}),onClick:()=>{t([])}},"All"),i.createElement("li",{className:(0,m.Z)("pills__item",{"pills__item--active":e.includes("v6")}),onClick:()=>o("v6")},"v6"),i.createElement("li",{className:(0,m.Z)("pills__item",{"pills__item--active":e.includes("Other")}),onClick:()=>o("Other")},"Other"),i.createElement("li",{className:(0,m.Z)("pills__item",{"pills__item--active":e.includes("aoi.js")}),onClick:()=>o("aoi.js")},"aoi.js")),i.createElement("div",{className:"card-demo"},n.map(((e,t)=>i.createElement("div",{className:(0,m.Z)("card","card-wrapper"),key:t},i.createElement("div",{className:(0,m.Z)("card__header","my-card-header")},i.createElement("h3",null,e.title)),i.createElement("div",{className:(0,m.Z)("card__body","my-card-body")},i.createElement("p",null,e.description)),i.createElement("div",{className:(0,m.Z)("card__image","my-card-image")},i.createElement("img",{src:"https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true",alt:"Image"})),i.createElement("div",{className:(0,m.Z)("card__footer","my-card-footer")},i.createElement(x.Z,{className:(0,m.Z)("button","button--secondary","button--block"),href:e.path},"Go to Wiki")))))))},Tooltip:d.u,TabItem:r.Z},M(q,B(F)));var q,F},99578:(e,t,a)=>{a.d(t,{Z:()=>o});const o={privacyContainer:"privacyContainer_t35s",privacyHeaderItem:"privacyHeaderItem_iUQ6",privacyHeaderItemSmall:"privacyHeaderItemSmall_hfP8",privacyItem:"privacyItem_Sgzu",heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG","color-transition":"color-transition_yOxN",placeholderText:"placeholderText_M9S7",active:"active_Iznl",creditContainer:"creditContainer_Kilv",creditItem:"creditItem_GDO6",header:"header_A16n",avatar:"avatar_dBEG",details:"details_kkgo",name:"name_ZL2v",title:"title_VwV3",packageStats:"packageStats_z9Yh",packageStatsBox:"packageStatsBox_t9e4","fade-in":"fade-in_LOUq",packageStatsTitle:"packageStatsTitle_D_OO",statsContainer:"statsContainer_VzT5","slide-in":"slide-in_KFry",stat:"stat_ezPZ",animatedTitle:"animatedTitle_WRAR",animatedText:"animatedText_jRHx",roundedButtons:"roundedButtons_ik7t",roundedButton:"roundedButton_mWzP",githubButton:"githubButton_Bgng",copyButtonWrapper:"copyButtonWrapper_uKA6",copyContent:"copyContent_jOkt",copyIconButton:"copyIconButton_SUcq",copyIconWrapper:"copyIconWrapper_KfKX",copyIcon:"copyIcon_gf9d",checkmarkIcon:"checkmarkIcon_Jfyd",copied:"copied_VSYr"}}}]);