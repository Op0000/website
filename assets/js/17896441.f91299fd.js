"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27918],{17119:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(30143);const o=()=>r.createElement(n.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},99231:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(99861),o=a(13875),i=a(55692);function l(){const{colorMode:e}=(0,i.I)(),[t,a]=(0,r.useState)(!1);(0,r.useEffect)((()=>{l()||a(!0)}),[]);const l=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}};return r.createElement("div",null,t&&r.createElement("div",{className:o.Z["cookies-banner"]},r.createElement("p",null,"You need to allow cookies to comment on Wikis!")),r.createElement(n.Z,{repo:"aoijs/website",repoId:"MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY=",category:"General",categoryId:"DIC_kwDOFa8DhM4CXVEw",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0}))}},42060:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(67294),n=a(86010),o=a(11128);const i={tag:"tag_U0uN",booster:"booster_MDO7",staff:"staff_nctV",mod:"mod_BJV7",creator:"creator_hdXK",contributor:"contributor_Fooe"};var l=Object.defineProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(c)for(var a of c(t))d.call(t,a)&&m(e,a,t[a]);return e};function u(e){return e.href?r.createElement(o.Z,p({},e)):r.createElement(r.Fragment,null,e.children)}function b({author:e,className:t}){const{name:a,title:o,url:l,imageURL:c,email:s}=e,d=l||s&&`mailto:${s}`||void 0,m=a.toLowerCase(),p=["@leref"].map((e=>e.toLowerCase())).includes(m),b=["@dodogames","@supremesupreme","@faf4a","@usersatoshi"].map((e=>e.toLowerCase())).includes(m),g=["@dodogames","@supremesupreme","@faf4a","@usersatoshi","@ahoemi","@snowytealatte","@wansie","@jollyjolli","@manu_1025"].map((e=>e.toLowerCase())).includes(m),y=["@faf4a","@dodogames"].map((e=>e.toLowerCase())).includes(m),v=["@.kuray.","@Alien Abd","@Zeke \u2661","@artemcurious","@creitingameplays","@eduard.irm","@kzzzakz","@leref","@neussdev","@valentineu0","@wansie"].map((e=>e.toLowerCase())).includes(m);return r.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",t)},c&&r.createElement(u,{href:d,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:c,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(u,{href:d,itemProp:"url"},r.createElement("span",{itemProp:"name"},a)),y&&r.createElement("span",{className:(0,n.Z)(i.tag,i.contributor)},"Contributor"),v&&r.createElement("span",{className:(0,n.Z)(i.tag,i.booster)},"Server Booster"),g&&r.createElement("span",{className:(0,n.Z)(i.tag,i.staff)},"Staff"),b&&r.createElement("span",{className:(0,n.Z)(i.tag,i.mod)},"Moderator"),p&&r.createElement("span",{className:(0,n.Z)(i.tag,i.creator)},"Creator")),o&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}},6758:(e,t,a)=>{a.d(t,{Z:()=>R});var r=a(63997),n=a(67294);const o=({children:e,color:t,radius:a,padding:r})=>n.createElement("span",{style:{backgroundColor:t,borderRadius:a||"2px",color:"#fff",padding:r||"0.2rem"}},e);var i=a(54023),l=a(49247),c=a(17119),s=a(99231),d=a(17891),m=a(86010),p=a(25365),u=Object.defineProperty,b=Object.defineProperties,g=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,E=(e,t)=>{for(var a in t||(t={}))v.call(t,a)&&f(e,a,t[a]);if(y)for(var a of y(t))h.call(t,a)&&f(e,a,t[a]);return e},_=(e,t)=>b(e,g(t));const w=({name:e,id:t,value:a,onChange:r,type:o,error:i,charCount:l})=>{const c={width:"100%",padding:"8px",borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.1)",border:"1px solid "+(i?"red":"#3f51b5"),transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"},s=e=>{r(e)};let d=null;switch(o){case"textarea-description":d=n.createElement("div",null,n.createElement("textarea",{name:e,id:t,value:a,onChange:s,style:_(E({},c),{minHeight:"155px",resize:"none"}),required:!0}),n.createElement("div",{style:{fontSize:"12px",color:l>=500?"red":"#3f51b5"}},void 0===l?"0":l,"/",500));break;case"textarea-code":d=n.createElement("textarea",{name:e,id:t,value:a,onChange:s,style:_(E({},c),{minHeight:"155px",resize:"none"}),required:!0});break;case"number":const o=t=>{const{value:a}=t.target,n=a.replace(/[^0-9]/g,"");n.length>20||r({target:{name:e,value:n}})};d=n.createElement("div",{style:{position:"relative"}},n.createElement("input",{type:"text",name:e,id:t,value:a,onChange:o,style:c,inputMode:"numeric",pattern:"[0-9]*",required:!0}));break;case"small":d=n.createElement("input",{type:"text",name:e,id:t,value:a,onChange:s,style:_(E({},c),{width:"50%",fontSize:"12px"}),required:!0});break;default:d=n.createElement("div",null,n.createElement("input",{type:"text",name:e,id:t,value:a,onChange:s,style:_(E({},c),{resize:"none"}),required:!0}),n.createElement("div",{style:{fontSize:"12px",color:l>=50?"red":"#3f51b5",marginTop:"5px"}},void 0===l?"0":l,"/",50))}return n.createElement("div",null,d)};var k=a(99578),x=a(11128),Z=a(42060),S=Object.defineProperty,C=Object.defineProperties,O=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,j=(e,t,a)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,z=(e,t)=>{for(var a in t||(t={}))D.call(t,a)&&j(e,a,t[a]);if(I)for(var a of I(t))N.call(t,a)&&j(e,a,t[a]);return e},L=(e,t)=>C(e,O(t));const T=()=>{const[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),[o,i]=(0,n.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[l,c]=(0,n.useState)({title:!1,discordUID:!1,description:!1,code:!1,tags:!1}),{title:s,description:d,discordUID:u,code:b,tags:g,isUIDValid:y}=o,[v,h]=(0,n.useState)({avatar:`https://cdn.discordapp.com/embed/avatars/${Math.floor(5*Math.random())}.png`,username:"Guest User",id:""}),f=async e=>{const{name:a,value:r}=e.target;let n=r;if("title"===a)n=r.replace(/[^a-zA-Z0-9 ]/g,""),t((e=>L(z({},e),{title:r.length}))),n.length>49&&(n=n.substring(0,50));else if("description"===a)t((e=>L(z({},e),{description:r.length}))),r.length>=500&&(n=r.substring(0,499));else if("discordUID"===a&&(i((e=>L(z({},e),{isUIDValid:!0}))),r.length>=17)){const{avatar:e,username:t,bot:a,id:n}=await E(r);void 0!==a&&i((e=>L(z({},e),{isUIDValid:!1}))),h((a=>L(z({},a),{avatar:e,username:t,id:"- "+n})))}i((e=>L(z({},e),{[a]:n})))},E=async e=>{const t=Math.floor(5*Math.random());try{const a=await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vdWluZm8v")+e+"?key="+atob("bGVyZWZzdWNrc2xvbDEyMw==")),r=await a.json();return r&&r.avatar?{bot:r.bot,avatar:r.avatar,username:r.username,id:r.id}:{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}catch(a){return{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}},_=async e=>{e.preventDefault();const t=Date.now();if(t-a<15e3)return void alert("Don't spam the submit button!");r(t);const n={title:!1,discordUID:!1,description:!1,code:!1};["title","discordUID","description","code"].forEach((e=>{""===o[e].trim()&&(n[e]=!0)})),0===o.tags.length&&(n.tags=!0);const{avatar:i,username:l,bot:m}=await E(u);if("Guest User"===l&&(n.discordUID=!0),void 0!==m&&(n.discordUID=!0),c(n),Object.values(n).some((e=>!0===e)))return;const p=Math.random().toString(36).substring(7),y=`${u}/${p}.md`,v=`---\ntitle: "${s}"\ndescription: "${d}"\nauthors:\n  name: "@${l}"\n  title: Member - ${u}\n  userid: "${u}"\n  url: https://discord.com/users/${u}\n  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/${u}.png\ntags: ${JSON.stringify(g)}\nhide_table_of_contents: true\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n\n${b}`;try{async function f(e){try{(await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vYXZhdGFycy8=")+e+"?key="+atob("bGVyZWZzdWNrc2xvbDEyMw=="))).ok||await alert("Something went wrong while handling your request. (Try resubmitting later again, or notify aoi.js staff about this if it occurs again)")}catch(t){return void await alert("Something went wrong while handling your request. (Failed to upload your avatar, you can savely ignore this error)")}}if(!(await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vZ2l0aHVi")+"?key="+atob("bGVyZWZzdWNrc2xvbDEyMw=="),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({commitMessage:`New Wiki created by: ${l}`,content:v,fileName:y})})).ok)return void await alert("Something went wrong while handling your request.");await f(u),alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}catch(h){return}};return n.createElement("form",{onSubmit:_},n.createElement("br",null),n.createElement("br",null),n.createElement("h3",null,"Title of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short and fitting title for your Wiki)")),n.createElement(w,{name:"title",id:"title",value:s,onChange:f,type:"text",placeholder:"Title",required:!0,pattern:"[a-zA-Z0-9]*",error:l.title,charCount:void 0===e.title?"0":e.title}),n.createElement("br",null),n.createElement("h3",null,"Description",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short description about the purpose of your Wiki, will NOT be displayed to the user on the website)")),n.createElement(w,{name:"description",id:"description",value:d,onChange:f,type:"textarea-description",placeholder:"Description",required:!0,error:l.description,charCount:void 0===e.description?"0":e.description}),n.createElement("br",null),n.createElement("h3",null,"Discord User ID",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Your Discord User ID, so you get the full credit of YOUR work)")),n.createElement(w,{name:"discordUID",id:"discordUID",value:u,onChange:f,type:"number",placeholder:"Discord UID",required:!0,error:!y||l.discordUID}),!y&&n.createElement("p",{style:{color:"red"}},"Invalid user"),n.createElement("br",null),n.createElement("h3",null,"Content of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(The content of your Wiki, including how it works, what it does and more)")),n.createElement(w,{name:"code",id:"code",value:b,onChange:f,type:"textarea-code",placeholder:"Code",required:!0,error:l.code}),n.createElement("h5",{style:{marginBottom:"0.5rem"}},n.createElement("span",{style:{verticalAlign:"middle"}},"Preview",n.createElement("small",{style:{fontSize:"8px",color:"gray",verticalAlign:"middle"}}," ","(How your Wiki will look on the website)"))),n.createElement("div",{style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #3f51b5",backgroundColor:"rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"}},n.createElement("div",{style:{overflow:"hidden"}},n.createElement("div",{style:{background:"transparent",borderRadius:"4px",padding:"12px"}},n.createElement(Z.Z,{author:{name:`@${v.username}`,title:`Member ${v.id}`,url:`https://discord.com/users/${u}`,imageURL:`${v.avatar}`}}),n.createElement("br",null),!b&&n.createElement("div",{className:k.Z.placeholderText},"Some text of your awesome Wiki!",n.createElement("br",null),n.createElement("br",null),"Did you know that you can use markdown to make your Wiki look even better? ",n.createElement("br",null)," ",n.createElement("br",null),n.createElement("div",{style:{fontSize:"18px",color:"gray",border:"1px solid #3f51b5",borderRadius:"3px",margin:"4px",padding:"10px"}},"![Alt Text](Image Link) for images! ",n.createElement("br",null),"## For Headers! ",n.createElement("br",null),"- For Lists! ",n.createElement("br",null))),n.createElement(p.D,null,b)))),n.createElement("br",null),n.createElement("h3",null,"Tags",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Select Tags that fit your Wiki)")),n.createElement("div",{className:k.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>n.createElement("span",{key:e,className:(0,m.Z)(k.Z.tag,{[k.Z.active]:g.includes(e)}),onClick:()=>(e=>{const t=[...g];t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),i((e=>L(z({},e),{tags:t})))})(e)},e)))),l.tags&&n.createElement("p",{style:{color:"red",marginTop:"10px",fontFamily:"var(--ifm-font-family-base)"}},"At least one tag is required"),n.createElement("div",{className:k.Z.buttons,style:{width:"100%",display:"flex",justifyContent:"flex-end",marginTop:"15px"}},n.createElement(x.Z,{className:(0,m.Z)("button button--outline button--secondary"),onClick:_,style:{width:"100%"}},"Submit")))},U=({children:e})=>{const[t,a]=(0,n.useState)(!1),r={display:"inline-block",padding:"0px 3px",fontWeight:"500",marginTop:"-5px",backgroundColor:t?"#4d5291":"#3b406e",cursor:t?"pointer":"default",color:"#c9cdfb",borderRadius:"3px",transition:"background-color 0.15s ease"};return n.createElement("div",{style:r,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1)},e)};var W=a(13875);const P=({color:e,text:t})=>n.createElement("span",{className:W.Z.tag},n.createElement("span",{className:W.Z.tagCircle,style:{"--tag-color":e}}),t),F=()=>{const[e,t]=(0,n.useState)([]),[a,r]=(0,n.useState)([]);(0,n.useEffect)((()=>{o()}),[]);const o=async()=>{r([{title:"Item 1",description:"Description L1<br />Description L2<br />Description L3<br />Description L4<br />Description L5<br />Description L6",tags:[{color:"#FF0000",text:"v7"},{color:"#00FF00",text:"v6"},{color:"#0000FF",text:"Tag 3"}],path:"/path/"},{title:"Item 2",description:"Description L1\n        Description L2\n        Description L3",tags:[{color:"#FF0000",text:"v7"},{color:"#00FF00",text:"v6"},{color:"#0000FF",text:"Tag 3"}],path:"/path/"}])},i=a=>{e.includes(a)?t(e.filter((e=>e!==a))):t([...e,a])},l=0===e.length?a:a.filter((t=>e.some((e=>t.tags.includes(e)))));return n.createElement("div",null,n.createElement("ul",{className:(0,m.Z)("pills",W.Z.pills)},n.createElement("li",{className:(0,m.Z)("pills__item",{"pills__item--active":0===e.length}),onClick:()=>{t([])}},"All"),n.createElement("li",{className:(0,m.Z)("pills__item",{"pills__item--active":e.includes("v7")}),onClick:()=>i("v7")},"v6"),n.createElement("li",{className:(0,m.Z)("pills__item",{"pills__item--active":e.includes("v6")}),onClick:()=>i("v6")},"v7"),n.createElement("li",{className:(0,m.Z)("pills__item",{"pills__item--active":e.includes("other")}),onClick:()=>i("other")},"Other")),n.createElement("div",{className:(0,m.Z)("card-demo",W.Z.cardDemo)},l.map(((e,t)=>n.createElement("div",{className:(0,m.Z)("card","card-wrapper",W.Z.cardWrapper),key:t},n.createElement("div",{className:(0,m.Z)("card__header","my-card-header",W.Z.cardHeader)},n.createElement("h3",null,e.title)),n.createElement("div",{className:(0,m.Z)("card__body","my-card-body",W.Z.cardBody)},n.createElement("p",{dangerouslySetInnerHTML:{__html:e.description}})),n.createElement("div",{className:W.Z.tagContainer},e.tags.map(((e,t)=>n.createElement(P,{key:t,color:e.color,text:e.text})))),n.createElement("div",{className:(0,m.Z)("card__footer","my-card-footer",W.Z.cardFooter)},n.createElement(x.Z,{className:(0,m.Z)("button","button--secondary","button--block"),to:e.path},"Go to Wiki")))))))};var M=Object.defineProperty,B=Object.defineProperties,H=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,G=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const R=(q=((e,t)=>{for(var a in t||(t={}))V.call(t,a)&&G(e,a,t[a]);if($)for(var a of $(t))A.call(t,a)&&G(e,a,t[a]);return e})({},r.Z),Y={Highlight:o,GiscusComponent:s.Z,InputField:w,SubmitForm:T,Cookies:c.Z,Tabs:i.Z,Slash:U,Showcase:F,Tooltip:d.u,TabItem:l.Z},B(q,H(Y)));var q,Y},13875:(e,t,a)=>{a.d(t,{Z:()=>r});const r={"cookies-banner":"cookies-banner_YsRc",container:"container_H2za",avatar:"avatar_qL_g",content:"content_j2XQ",tagContainer:"tagContainer_hVSL",tag:"tag_Utpt",tagCircle:"tagCircle_gDjY"}},99578:(e,t,a)=>{a.d(t,{Z:()=>r});const r={privacyContainer:"privacyContainer_t35s",privacyHeaderItem:"privacyHeaderItem_iUQ6",privacyHeaderItemSmall:"privacyHeaderItemSmall_hfP8",privacyItem:"privacyItem_Sgzu",heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG","color-transition":"color-transition_yOxN",placeholderText:"placeholderText_M9S7",active:"active_Iznl",creditContainer:"creditContainer_Kilv",creditItem:"creditItem_GDO6",header:"header_A16n",avatar:"avatar_dBEG",details:"details_kkgo",name:"name_ZL2v",title:"title_VwV3",packageStats:"packageStats_z9Yh",packageStatsBox:"packageStatsBox_t9e4","fade-in":"fade-in_LOUq",packageStatsTitle:"packageStatsTitle_D_OO",statsContainer:"statsContainer_VzT5","slide-in":"slide-in_KFry",stat:"stat_ezPZ",animatedTitle:"animatedTitle_WRAR",animatedText:"animatedText_jRHx",roundedButtons:"roundedButtons_ik7t",roundedButton:"roundedButton_mWzP",githubButton:"githubButton_Bgng",copyButtonWrapper:"copyButtonWrapper_uKA6",copyContent:"copyContent_jOkt",copyIconButton:"copyIconButton_SUcq",copyIconWrapper:"copyIconWrapper_KfKX",copyIcon:"copyIcon_gf9d",checkmarkIcon:"checkmarkIcon_Jfyd",copied:"copied_VSYr"}}}]);