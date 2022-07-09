(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(3),r=(n(0),n(618));const b={title:"DatabaseOptions"},l={unversionedId:"options/databaseOptions",id:"options/databaseOptions",isDocsHomePage:!1,title:"DatabaseOptions",description:"Available Options Are:",source:"@site/docs/options/databaseOptions.md",slug:"/options/databaseOptions",permalink:"/docs/options/databaseOptions",version:"current"},o=[],i={toc:o};function c(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Available Options Are:")),Object(r.b)("table",{parentName:"blockquote"},Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"options"),Object(r.b)("th",{parentName:"tr",align:null},"type"),Object(r.b)("th",{parentName:"tr",align:null},"optional"),Object(r.b)("th",{parentName:"tr",align:null},"description"),Object(r.b)("th",{parentName:"tr",align:null},"usage"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"type"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},'"default"')," ","|"," ",Object(r.b)("strong",{parentName:"td"},'"dbdts.db"')," ","|"," ",Object(r.b)("strong",{parentName:"td"},'"dbdjs-api"')," ","|"," ",Object(r.b)("strong",{parentName:"td"},'"custom"')),Object(r.b)("td",{parentName:"tr",align:null},"false"),Object(r.b)("td",{parentName:"tr",align:null},"Defines The Type Of Database"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'type:"default"'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"db"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"module")),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Defines The Database To Be Used"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"db: require('dbdts.db')")," // ",Object(r.b)("inlineCode",{parentName:"td"},"db: require('quick.db')")," ",Object(r.b)("strong",{parentName:"td"},"(quickdb is taken as example)"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"path"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"string")),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Defines The Path Database Will Store The Data //(note:Not all Database Supports Path)"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'path:"./database/"')," ",Object(r.b)("strong",{parentName:"td"},"(quick.db doesn't support path)"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"tables"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Array\\<string",">")),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Creates The Tables"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'tables:["main"]'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"promisify"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"boolean")),Object(r.b)("td",{parentName:"tr",align:null},"true"),Object(r.b)("td",{parentName:"tr",align:null},"Promisifies A Non Promised Database"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"promisify:false")," ",Object(r.b)("strong",{parentName:"td"},'for "quick.db"')," , ",Object(r.b)("inlineCode",{parentName:"td"},"promisify:true"))))),Object(r.b)("hr",{parentName:"blockquote"})))}c.isMDXComponent=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(l,".").concat(s)]||d[s]||u[s]||b;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<b;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);