(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(92)),i={title:"Javascript Execution Command"},c={unversionedId:"eta-features/execution-command",id:"eta-features/execution-command",isDocsHomePage:!1,title:"Javascript Execution Command",description:"This type of command allows us to execute JavaScript code.",source:"@site/docs/eta-features/execution-command.md",slug:"/eta-features/execution-command",permalink:"/Templater/docs/eta-features/execution-command",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/eta-features/execution-command.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/Templater/docs/eta-features"}},l=[{value:"How to output a value from a JavaScript Execution Command ?",id:"how-to-output-a-value-from-a-javascript-execution-command-",children:[{value:"Examples",id:"examples",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This type of command allows us to execute JavaScript code."),Object(r.b)("p",null,"With a JavaScript Execution command, we can pretty much do everything that JavaScript allows us to do. Some examples are given below."),Object(r.b)("p",null,"We can still access the ",Object(r.b)("inlineCode",{parentName:"p"},"tp")," object and all the internal variables / functions from this type of command."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Some internal functions are asynchronous. When calling such functions inside a JavaScript execution command, don't forget to use the ",Object(r.b)("inlineCode",{parentName:"p"},"await")," keyword if necessary."))),Object(r.b)("h2",{id:"how-to-output-a-value-from-a-javascript-execution-command-"},"How to output a value from a JavaScript Execution Command ?"),Object(r.b)("p",null,"Sometimes, you may want to output something when using a JS execution command. This is possible although a raw display / interpolation command is preferable."),Object(r.b)("p",null,"When the ",Object(r.b)("a",{parentName:"p",href:"https://eta.js.org/"},"Eta")," templating engine generates a replacement string using all of our commands results, it is stored in a variable named ",Object(r.b)("inlineCode",{parentName:"p"},"tR"),". This is the string that will contain the processed file content. You are allowed to access that variable from a JS execution command."),Object(r.b)("p",null,"This means that, to output something from a JS execution command, you just need to append what you want to output to that ",Object(r.b)("inlineCode",{parentName:"p"},"tR")," string variable."),Object(r.b)("p",null,"For example, the following command: ",Object(r.b)("inlineCode",{parentName:"p"},'<%* tR += "test" %>')," will output ",Object(r.b)("inlineCode",{parentName:"p"},"test"),"."),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("p",null,"Here are some examples of things you can do using JavaScript Execution Commands:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'<%* if (tp.file.title.startsWith("Hello")) { %>\nThis is a hello file !\n<%* } else { %>\nThis is a normal file !\n<%* } %>\n    \n<%* if (tp.frontmatter.type === "seedling") { %>\nThis is a seedling file !\n<%* } else { %>\nThis is a normal file !\n<%* } %>\n    \n<%* if (tp.file.tags.contains("#todo")) { %>\nThis is a todo file !\n<%* } else { %>\nThis is a finished file !\n<%* } %>\n\n<%*\nfunction log(msg) {\n    console.log(msg);\n}\n%>\n<%* log("Title: " + tp.file.title) %>\n    \n<%* tR += tp.file.content.replace(/stuff/, "things"); %>\n')))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);