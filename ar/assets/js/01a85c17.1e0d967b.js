"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64013],{55061:(e,t,a)=>{a.d(t,{Z:()=>p});var i=a(67294),r=a(86010),l=a(51933),s=a(77886),n=Object.defineProperty,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&u(e,a,t[a]);if(c)for(var a of c(t))o.call(t,a)&&u(e,a,t[a]);return e},d=(e,t)=>{var a={};for(var i in e)m.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&c)for(var i of c(e))t.indexOf(i)<0&&o.call(e,i)&&(a[i]=e[i]);return a};function p(e){const t=e,{sidebar:a,toc:n,children:c}=t,m=d(t,["sidebar","toc","children"]),o=a&&a.items.length>0;return i.createElement(l.Z,b({},m),i.createElement("div",{className:"container margin-vert--lg"},i.createElement("div",{className:"row"},i.createElement(s.Z,{sidebar:a}),i.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&i.createElement("div",{className:"col col--2"},n))))}},77701:(e,t,a)=>{a.d(t,{Z:()=>n});var i=a(67294),r=a(86010),l=a(11128);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function n({permalink:e,label:t,count:a}){return i.createElement(l.Z,{href:e,className:(0,r.Z)(s.tag,a?s.tagWithCount:s.tagRegular)},t,a&&i.createElement("span",null,a))}},17119:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(67294),r=a(30143);const l=()=>i.createElement(r.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},77886:(e,t,a)=>{a.d(t,{Z:()=>_});var i=a(67294),r=a(13044),l=a(86010),s=a(11128),n=a(14699);const c={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",newItem:"newItem_b9o7",newTag:"newTag_fGI0",activeButton:"activeButton_HxF9",searchContainer:"searchContainer_GE6j",searchInput:"searchInput_nz1m",mobileSearchContainer:"mobileSearchContainer_i5LO",mobileSearchInput:"mobileSearchInput_ULu5",searchIcon:"searchIcon_X7sx",searchClose:"searchClose_K_EJ"};function m({sidebar:e}){const t=["/wikis/submit","/wikis/guidelines","/wikis/tags"],[a,r]=(0,i.useState)(!1),[m,o]=(0,i.useState)("");(0,i.useEffect)((()=>{const e=u("sortingState");e&&r(JSON.parse(e))}),[]),(0,i.useEffect)((()=>{d()&&b("sortingState",JSON.stringify(a))}),[a]);const u=e=>d()?localStorage.getItem(e):null,b=(e,t)=>{d()&&localStorage.setItem(e,t)},d=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}},p=e.items.filter((e=>!t.includes(e.permalink))).filter((e=>e.title.toLowerCase().includes(m.toLowerCase()))).sort(((e,t)=>a?e.title.localeCompare(t.title):t.date-e.date));return i.createElement("aside",{className:"col col--3"},i.createElement("nav",{className:(0,l.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,n.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},i.createElement("div",{className:(0,l.Z)(c.sidebarItemTitle,"margin-bottom--md")},i.createElement("span",null,"Introduction")),i.createElement("ul",{className:(0,l.Z)(c.sidebarItemList,"clean-list")},i.createElement("li",{key:"/wikis/guidelines",className:c.sidebarItem},i.createElement(s.Z,{isNavLink:!0,to:"/wikis/guidelines",className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},"Wiki Guidelines")),i.createElement("li",{key:"/wikis/submit",className:c.sidebarItem},i.createElement(s.Z,{isNavLink:!0,to:"/wikis/submit",className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},"Submit Wiki")),i.createElement("li",{key:"/wikis/tags",className:c.sidebarItem},i.createElement(s.Z,{isNavLink:!0,to:"/wikis/tags",className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},"Tags"))),i.createElement("div",{className:(0,l.Z)(c.sidebarItemTitle,"margin-bottom--md")},"Wikis",i.createElement("button",{className:(0,l.Z)(c.activeButton,{[c.activeButton]:a}),onClick:()=>{r((e=>!e))}},a?"A-Z":"Newest First")),i.createElement("div",{className:c.searchContainer},i.createElement("input",{type:"text",className:c.searchInput,placeholder:"Search Wikis...",value:m,onChange:e=>{o(e.target.value)}})),i.createElement("ul",{className:(0,l.Z)(c.sidebarItemList,"clean-list")},p.map(((e,t)=>{return i.createElement("li",{key:e.permalink,className:c.sidebarItem},i.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},(a=e.title).charAt(0).toUpperCase()+a.slice(1)));var a})))))}var o=a(56981),u=Object.defineProperty,b=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,E=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&v(e,a,t[a]);if(p)for(var a of p(t))k.call(t,a)&&v(e,a,t[a]);return e},h=(e,t)=>b(e,d(t));function N({sidebar:e,onSearch:t}){const[a,r]=(0,i.useState)(""),l=["/wikis/submit","/wikis/guidelines","/wikis/tags"],n=null==e?void 0:e.items.filter((e=>!l.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title))),[m,o]=(0,i.useState)(n);return i.createElement("ul",{className:"menu__list"},i.createElement("div",{className:"menu__title"},"Introduction"),i.createElement("li",{key:"/wikis/guidelines",className:"menu__list-item"},i.createElement(s.Z,{isNavLink:!0,to:"/wikis/guidelines",className:"menu__link",activeClassName:"menu__link--active"},"Wiki Guidelines")),i.createElement("li",{key:"/wikis/submit",className:"menu__list-item"},i.createElement(s.Z,{isNavLink:!0,to:"/wikis/submit",className:"menu__link",activeClassName:"menu__link--active"},"Submit Wiki")),i.createElement("li",{key:"/wikis/tags",className:"menu__list-item"},i.createElement(s.Z,{isNavLink:!0,to:"/wikis/tags",className:"menu__link",activeClassName:"menu__link--active"},"Tags")),i.createElement("div",{className:"menu__title",style:{marginTop:"25px",marginBottom:"15px"}},"Wikis"),i.createElement("div",{className:c.searchContainer},i.createElement("input",{type:"text",className:c.searchInput,placeholder:"Search Wikis...",value:a,onChange:e=>{const t=e.target.value.toLowerCase(),a=n.filter((e=>e.title.toLowerCase().includes(t)));o(a),r(t)}})),m.map((e=>{return i.createElement("li",{key:e.permalink,className:"menu__list-item"},i.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},(t=e.title).charAt(0).toUpperCase()+t.slice(1)));var t})))}function f({sidebar:e,onSearch:t}){const a=["/wikis/submit","/wikis/guidelines","/wikis/tags"],r=null==e?void 0:e.items.filter((e=>!a.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title)));return i.createElement(o.Zo,{component:N,props:{sidebar:h(E({},e),{items:r.map((e=>{return h(E({},e),{title:(t=e.title,t.charAt(0).toUpperCase()+t.slice(1))});var t}))})}})}function _({sidebar:e}){const t=(0,r.i)();return(null==e?void 0:e.items.length)?"mobile"===t?i.createElement(f,{sidebar:e}):i.createElement(m,{sidebar:e}):null}},25030:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var i=a(67294),r=a(86010),l=a(14699);const s=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=a(17766),c=a(55116),m=a(17119),o=a(55061),u=a(77701);const b={tag:"tag_Nnez"};var d=Object.defineProperty,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,E=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&v(e,a,t[a]);if(p)for(var a of p(t))k.call(t,a)&&v(e,a,t[a]);return e};function h({letterEntry:e}){return i.createElement("article",null,i.createElement("h2",null,e.letter),i.createElement("ul",{className:"padding--none"},e.tags.map((e=>i.createElement("li",{key:e.permalink,className:b.tag},i.createElement(u.Z,E({},e)))))),i.createElement("hr",null))}function N({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return i.createElement("section",{className:"margin-vert--lg"},t.map((e=>i.createElement(h,{key:e.letter,letterEntry:e}))))}var f=a(68190);function _({tags:e,sidebar:t}){const a=s();return i.createElement(n.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},i.createElement("div",null,i.createElement(m.Z,null)),i.createElement(n.d,{title:a}),i.createElement(f.Z,{tag:"blog_tags_list"}),i.createElement(o.Z,{sidebar:t},i.createElement("h2",null,a),i.createElement(N,{tags:e})))}}}]);