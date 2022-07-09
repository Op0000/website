(window.webpackJsonp=window.webpackJsonp||[]).push([[308],{379:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=(n(0),n(618));const i={title:"$createApplicationCommand",description:"Creates an application command."},c={unversionedId:"functions/createapplicationcommand",id:"functions/createapplicationcommand",isDocsHomePage:!1,title:"$createApplicationCommand",description:"Creates an application command.",source:"@site/docs/functions/createapplicationcommand.md",slug:"/functions/createapplicationcommand",permalink:"/docs/functions/createapplicationcommand",version:"current",sidebar:"someSidebar",previous:{title:"$channelID",permalink:"/docs/functions/channelid"},next:{title:"$channelName",permalink:"/docs/functions/channelname"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:o};function p(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Create an application command which is can be:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Slash type"),Object(r.b)("li",{parentName:"ul"},"Message type"),Object(r.b)("li",{parentName:"ul"},"User type")),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"$createApplicationCommand[guildID/global;application name;application description?;default permission;type;options?]\n")),Object(r.b)("h3",{id:"fields"},"Fields"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Field"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"),Object(r.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"guildID/global"),Object(r.b)("td",{parentName:"tr",align:"left"},"Creates the application command, for guild or global"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"application name"),Object(r.b)("td",{parentName:"tr",align:"left"},"The name of application command"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"application description"),Object(r.b)("td",{parentName:"tr",align:"left"},"Description of application command, ",Object(r.b)("strong",{parentName:"td"},"only required on slash type")),Object(r.b)("td",{parentName:"tr",align:"left"},"no")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"default permission"),Object(r.b)("td",{parentName:"tr",align:"left"},"The permission whom has authorize to use"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"type"),Object(r.b)("td",{parentName:"tr",align:"left"},"The type of application command"),Object(r.b)("td",{parentName:"tr",align:"left"},"yes")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"options"),Object(r.b)("td",{parentName:"tr",align:"left"},"The options of the ",Object(r.b)("strong",{parentName:"td"},"slash")," type"),Object(r.b)("td",{parentName:"tr",align:"left"},"no")))),Object(r.b)("h4",{id:"application-permissions"},"Application Permissions"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"true")," \u2014 Anyone has permission to execute it."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"false")," \u2014 No one will able to execute the application command (can be changed with application permission functions)"))),Object(r.b)("h4",{id:"application-types"},"Application Types"),Object(r.b)("blockquote",null,Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"message")," \u2014 Creates the application command can be executed on the message."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"slash")," \u2014 Creates an application command for slash message."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"user")," \u2014 Creates an application command that can be executed on the user."))),Object(r.b)("h4",{id:"slash-options"},"Slash Options"),Object(r.b)("p",null,"There are 3 types of creating a slash options:"),Object(r.b)("p",null,"  Firstly"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-php"},"name:description:require:type\n//choices, subcommand & sub groups don't work on this.\n")),Object(r.b)("p",null,"  Secondly"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"// {subCommand:name:description:\n{type:name:description:require}\n// :{choice:name:value}\n")),Object(r.b)("p",null,"  And the last one"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "name",\n  "description": "description",\n  "required": boolean,\n  "type": "STRING" // or a number of type\n}\n')),Object(r.b)("h6",{id:"footnotes"},"Footnotes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You don't need to use application description on apps since it won't show up."),Object(r.b)("li",{parentName:"ul"},"Slash command is name or option, ",Object(r.b)("strong",{parentName:"li"},"cannot")," contain uppercase. But apps interaction commands can have."),Object(r.b)("li",{parentName:"ul"},"You can create up to 25 choices. For more information you can check Discord Documentary."),Object(r.b)("li",{parentName:"ul"},"All application types can be called with ",Object(r.b)("inlineCode",{parentName:"li"},"slash")," prototype.")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Message Application")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "create-message-apps",\n  code: `\n  Created the message application successfully.\n\n  $createApplicationCommand[$guildID;Warn;;true;message]\n  `\n});\n\n// $interactionData[targetId] gets the target\'s id. Which is a message ID.\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User Application")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "create-user-apps",\n  code: `\n  Created the user application successfully.\n\n  $createApplicationCommand[$guildID;Ban;;admin;user]\n  `\n});\n\n// $interactionData[targetId] gets the target\'s id. Which is an user ID.\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Special Slash Command from contributor \u2764")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "create-slash-cmd",\n  code: `\n  Created the sub-slash command successfully.\n  \n  $createApplicationCommand[$guildID;ban;.;true;slash;[\n    {\n      "name": "mention", \n      "description": "Find user and ban them on the current server.", \n      "type": "SUB_COMMANDS", \n      "options": [\n        { \n          "name": "user", \n          "description": "Mention an user.", \n          "required": true, \n          "type": "USER"\n        },\n        {\n          "name": "reason", \n          "description": "Explain it with a few words.", \n          "required": false, \n          "type": "STRING"\n        }\n      ]\n    }, \n    {\n      "name": "id", \n      "description": "Type an user ID to ban them on the current server.", \n      "type": "SUB_COMMANDS", \n      "options": [\n        {\n          "name": "user", \n          "description": "Type the user ID.", \n          "required": true, \n          "type": "STRING"\n        }, \n        {\n          "name": "reason", \n          "description": "Explain it with a few words.", \n          "required": false, \n          "type": "STRING"\n        }\n      ] \n    }\n  ]]\n  `\n});\n')))}p.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||i;return n?r.a.createElement(d,o(o({ref:t},p),{},{components:n})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);