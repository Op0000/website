"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64195],{17119:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(30143);const o=()=>n.createElement(r.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},53992:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var n=a(67294),r=a(11128),o=a(24305),i=a(10433),c=a(41181),s=a(15861),l=a(53156),m=a(86292),d=a(51933),u=a(17119),p=a(91379),g=a(25449),h=a(99578),v=Object.defineProperty,E=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))Z.call(t,a)&&y(e,a,t[a]);if(E)for(var a of E(t))f.call(t,a)&&y(e,a,t[a]);return e};const _=[{title:"Powerful Discord Bots",description:"Build advanced string-based Discord bots quickly and efficiently."},{title:"Easy to Use",description:"Simplify bot development with a simple and intuitive syntax."},{title:"Community Driven",description:"Join our active community and collaborate on projects."}];function k({title:e,description:t}){return n.createElement(c.ZP,{item:!0,xs:12,md:4},n.createElement(s.Z,{variant:"h6",component:"h3",gutterBottom:!0},e),n.createElement(s.Z,{variant:"body1"},t))}function S(){return n.createElement("section",{className:h.Z.features},n.createElement(l.Z,null,n.createElement(c.ZP,{container:!0,spacing:4},_.map(((e,t)=>n.createElement(k,b({key:t},e)))))))}function w(){const[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),[o,i]=(0,n.useState)(0);(0,n.useEffect)((()=>{c(),m(),d()}),[]);const c=async()=>{try{const e=await fetch("https://api.npmjs.org/downloads/point/last-week/aoi.js"),a=await e.json();t(a.downloads)}catch(e){console.error("Error fetching download count:",e)}},m=async()=>{try{const e=await fetch("https://api.npmjs.org/downloads/range/1000-01-01:2030-12-31/aoi.js"),t=(await e.json()).downloads.reduce(((e,t)=>e+t.downloads),0);r(t)}catch(e){return}},d=async()=>{try{const e=await fetch("https://api.github.com/repos/aoijs/aoi.js"),t=await e.json();i(t.stargazers_count)}catch(e){return}};return n.createElement("section",{className:h.Z.packageStats},n.createElement(l.Z,null,n.createElement("div",{className:h.Z.packageStatsBox},n.createElement(s.Z,{variant:"h2",component:"h2",gutterBottom:!0,className:h.Z.packageStatsTitle},"Package Statistics"),n.createElement("div",{className:h.Z.statsContainer},n.createElement("div",{className:h.Z.stat},n.createElement(s.Z,{variant:"h4",component:"h3"},e.toLocaleString()),n.createElement(s.Z,{variant:"body1"},"Downloads (Last Week)")),n.createElement("div",{className:h.Z.stat},n.createElement(s.Z,{variant:"h4",component:"h3"},a.toLocaleString()),n.createElement(s.Z,{variant:"body1"},"Downloads (All Time)")),n.createElement("div",{className:h.Z.stat},n.createElement(s.Z,{variant:"h4",component:"h3"},o.toLocaleString()),n.createElement(s.Z,{variant:"body1"},"Stars on GitHub"))))))}const B=function(){const e=(0,o.Z)(),{siteConfig:t={}}=e,{title:a}=t;return n.createElement(n.Fragment,null,n.createElement(d.Z,{title:"Akarui Development Team",description:"The official aoi.js documentation | Powered by Akarui Development Team."},n.createElement("header",{className:h.Z.heroBanner},n.createElement(l.Z,null,n.createElement(s.Z,{variant:"h1",component:"h1",gutterBottom:!0,className:h.Z.title},a),n.createElement(s.Z,{variant:"subtitle1",component:"p",gutterBottom:!0},"The most advanced string-based package to create a Discord Bot fast and powerful."),n.createElement("div",{className:h.Z.buttons},n.createElement(m.Z,{variant:"contained",color:"primary",size:"large",component:r.Z,to:(0,i.Z)("/docs/guides/setup"),startIcon:n.createElement(p.Z,null)},"Get Started"),n.createElement(m.Z,{variant:"outlined",color:"primary",size:"large",href:"https://github.com/aoijs/aoi.js",startIcon:n.createElement(g.Z,null)},"GitHub")),n.createElement(u.Z,null))),n.createElement("main",null,n.createElement(S,null),n.createElement(w,null))))}},99578:(e,t,a)=>{a.d(t,{Z:()=>n});const n={privacyContainer:"privacyContainer_t35s",privacyHeaderItem:"privacyHeaderItem_iUQ6",privacyHeaderItemSmall:"privacyHeaderItemSmall_hfP8",privacyItem:"privacyItem_Sgzu",heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG","color-transition":"color-transition_yOxN",placeholderText:"placeholderText_M9S7",active:"active_Iznl",creditContainer:"creditContainer_Kilv",creditItem:"creditItem_GDO6",header:"header_A16n",avatar:"avatar_dBEG",details:"details_kkgo",name:"name_ZL2v",title:"title_VwV3",packageStats:"packageStats_z9Yh",packageStatsBox:"packageStatsBox_t9e4","fade-in":"fade-in_LOUq",packageStatsTitle:"packageStatsTitle_D_OO",statsContainer:"statsContainer_VzT5","slide-in":"slide-in_KFry",stat:"stat_ezPZ",animatedTitle:"animatedTitle_WRAR",animatedText:"animatedText_jRHx",roundedButtons:"roundedButtons_ik7t",roundedButton:"roundedButton_mWzP",githubButton:"githubButton_Bgng"}}}]);