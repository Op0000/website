(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=(n(0),n(618));const i={title:"$findRoles",description:"Used to find roles in the current guild with advanced searching."},o={unversionedId:"functions/findroles",id:"functions/findroles",isDocsHomePage:!1,title:"$findRoles",description:"Used to find roles in the current guild with advanced searching.",source:"@site/docs/functions/findroles.md",slug:"/functions/findroles",permalink:"/docs/functions/findroles",version:"current",sidebar:"someSidebar",previous:{title:"$findRole",permalink:"/docs/functions/findrole"},next:{title:"$findServerChannel",permalink:"/docs/functions/findserverchannel"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Fields",id:"fields",children:[]},{value:"Examples",id:"examples",children:[]}],c={toc:l};function b(e){let{components:t,...n}=e;return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This function is used to find roles in the current guild with advanced searching."),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$findRoles[query;limit?;type?;res?]\n")),Object(a.b)("h3",{id:"fields"},"Fields"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:"left"},"Field"),Object(a.b)("th",{parentName:"tr",align:"left"},"Description"),Object(a.b)("th",{parentName:"tr",align:"left"},"Type"),Object(a.b)("th",{parentName:"tr",align:"left"},"Required"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"query"),Object(a.b)("td",{parentName:"tr",align:"left"},"The name/query of the role you're searching for"),Object(a.b)("td",{parentName:"tr",align:"left"},"string"),Object(a.b)("td",{parentName:"tr",align:"left"},"yes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"limit"),Object(a.b)("td",{parentName:"tr",align:"left"},"The limit of the query"),Object(a.b)("td",{parentName:"tr",align:"left"},"number"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"type"),Object(a.b)("td",{parentName:"tr",align:"left"},"The type of search you want to do"),Object(a.b)("td",{parentName:"tr",align:"left"},"string"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:"left"},"res"),Object(a.b)("td",{parentName:"tr",align:"left"},"The custom response to be returned"),Object(a.b)("td",{parentName:"tr",align:"left"},"string"),Object(a.b)("td",{parentName:"tr",align:"left"},"no")))),Object(a.b)("h4",{id:"types-of-search"},"Types of Search"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"startsWith - To check if the role starts with query"),Object(a.b)("li",{parentName:"ul"},"endsWith - To check if the role ends with the query"),Object(a.b)("li",{parentName:"ul"},"includes - To check if the role includes the query")),Object(a.b)("h4",{id:"placeholders-of-custom-response"},"Placeholders of custom response"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"{position} - Returns the position of the role"),Object(a.b)("li",{parentName:"ul"},"{mention} - Returns the mention of the role"),Object(a.b)("li",{parentName:"ul"},"{id} - Returns the id of the role"),Object(a.b)("li",{parentName:"ul"},"{name} - Returns the name of the role"),Object(a.b)("li",{parentName:"ul"},"{color} - Returns the color of the role"),Object(a.b)("li",{parentName:"ul"},"{hoisted} - Checks if the role is hoisted"),Object(a.b)("li",{parentName:"ul"},"{mentionable} - Checks if the role is mentionable")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "find",\n  code: `\n  $findRoles[Dev;10;startsWith;The position of {mention} is {position}.]\n  ` \n});\n')))}b.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(f,l(l({ref:t},b),{},{components:n})):a.a.createElement(f,l({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);