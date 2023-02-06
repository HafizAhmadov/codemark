(this["webpackJsonpredux-ts"]=this["webpackJsonpredux-ts"]||[]).push([[0],{105:function(e,t,n){},130:function(e,t,n){},137:function(e,t,n){"use strict";n.r(t);n(63);var r,a=n(18),c=n(2),i=n(5),o=n(7),s=n(0),u=(n(68),n(28)),d=n.n(u),l=n(58),p=n.n(l),f=n(59),h=n.n(f),b=n(1),j=function(e){var t=e.initialValue,n=e.onChange,r=Object(s.useRef)();return Object(b.jsxs)("div",{className:"editor-wrapper",children:[Object(b.jsx)("button",{className:"button button-format is-primary",onClick:function(){var e=r.current.getModel().getValue(),t=p.a.format(e,{parser:"babel",plugins:[h.a],semi:!0,singleQuote:!1});r.current.setValue(t)},children:"Format"}),Object(b.jsx)(d.a,{editorDidMount:function(e,t){r.current=t,t.onDidChangeModelContent((function(){n(e())}))},value:t,theme:"dark",options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:16,scrollBeyondLastLine:!1,automaticLayout:!0},language:"javascript",height:"100%"})]})},w=(n(105),'\n<html>\n   <head>\n   </head>\n   <body>\n      <div id="root"></div>\n      <script>\n         function showError(err) {\n         console.error(err);\n         const root = document.querySelector("#root");\n         root.innerHTML =\n         \'<div style="color: #b80000;"><h4>Runtime Error</h4>\' + err + "</div>";\n         }\n         \n         window.addEventListener("error", (event) => {\n         event.preventDefault();\n         showError(event.error);\n         });\n         \n         window.addEventListener("message", (event) => {\n         try {\n         eval(event.data);\n         } catch (err) {\n         showError(event.error);\n         }\n         });\n      <\/script>\n   </body>\n</html>\n    '),m=function(e){var t=e.code,n=e.err,r=Object(s.useRef)();return Object(s.useEffect)((function(){r.current.srcdoc=w,setTimeout((function(){r.current.contentWindow.postMessage(t,"*")}),10)}),[t]),Object(b.jsxs)("div",{className:"preview-wrapper",children:[Object(b.jsx)("iframe",{title:"codePreview",srcDoc:w,ref:r,sandbox:"allow-scripts"}),n&&Object(b.jsx)("span",{className:"preview-error",children:n})]})},v=n(60),O=n(61),x=n.n(O),g=n(29),y=n.n(g),k=x.a.createInstance({name:"filecache"}),L=function(e){return{name:"fetch-plugin",setup:function(t){t.onLoad({filter:/(^index\.js$)/},(function(){return{loader:"jsx",contents:e}})),t.onLoad({filter:/.*/},function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getItem(t.path);case 2:if(!(n=e.sent)){e.next=5;break}return e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.css$/},function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,r,a,i,o,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(t.path);case 2:return n=e.sent,r=n.data,a=n.request,k.setItem(t.path,r),i=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),o="\n          const style = document.createElement('style');\n          style.innerText = '".concat(i,"';\n          document.head.appendChild(style);\n          "),s={loader:"jsx",contents:o,resolveDir:new URL("./",a.responseURL).pathname},k.setItem(t.path,s),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.onLoad({filter:/.*/},function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,r,a,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(t.path);case 2:return n=e.sent,r=n.data,a=n.request,k.setItem(t.path,r),i={loader:"jsx",contents:r,resolveDir:new URL("./",a.responseURL).pathname},k.setItem(t.path,i),e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},E=function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=4;break}return e.next=3,v.startService({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm"});case 3:r=e.sent;case 4:return e.prev=4,e.next=7,r.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[L(t),{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(t.path)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}],define:{"process.env.NODE_ENV":'"production"',global:"window"}});case 7:return n=e.sent,e.abrupt("return",{code:n.outputFiles[0].text,err:""});case 11:if(e.prev=11,e.t0=e.catch(4),!(e.t0 instanceof Error)){e.next=17;break}return e.abrupt("return",{code:"",err:e.t0.message});case 17:throw e.t0;case 18:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),R=E,z=n(30),C=(n(130),n(62)),S=function(e){var t,n=e.direction,r=e.children,a=Object(s.useState)(window.innerHeight),c=Object(o.a)(a,2),i=c[0],u=c[1],d=Object(s.useState)(window.innerWidth),l=Object(o.a)(d,2),p=l[0],f=l[1],h=Object(s.useState)(.75*window.innerWidth),j=Object(o.a)(h,2),w=j[0],m=j[1];return Object(s.useEffect)((function(){var e,t=function(){e&&clearTimeout(e),e=setTimeout((function(){u(window.innerHeight),f(window.innerWidth),.75*window.innerWidth<w&&m(.75*window.innerWidth)}),100)};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[w]),t="horizontal"===n?{className:"resize-horizontal",minConstraints:[.2*p,1/0],maxConstraints:[.8*p,1/0],height:1/0,width:w,resizeHandles:["e"],onResizeStop:function(e,t){m(t.size.width)}}:{minConstraints:[1/0,24],maxConstraints:[1/0,.9*i],height:300,width:1/0,resizeHandles:["s"]},Object(b.jsx)(C.ResizableBox,Object(z.a)(Object(z.a)({},t),{},{children:r}))},D=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),u=Object(o.a)(a,2),d=u[0],l=u[1],p=Object(s.useState)(""),f=Object(o.a)(p,2),h=f[0],w=f[1];Object(s.useEffect)((function(){var e=setTimeout(Object(i.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(n);case 2:t=e.sent,l(t.code),w(t.err);case 5:case"end":return e.stop()}}),e)}))),1500);return function(){clearTimeout(e)}}),[n]);return Object(b.jsx)(S,{direction:"vertical",children:Object(b.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"row"},children:[Object(b.jsx)(S,{direction:"horizontal",children:Object(b.jsx)(j,{onChange:function(e){r(e)},initialValue:"//start writing your code!"})}),Object(b.jsx)(m,{code:d,err:h})]})})},N=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(D,{})})};a.render(Object(b.jsx)(N,{}),document.getElementById("root"))},68:function(e,t,n){}},[[137,1,2]]]);
//# sourceMappingURL=main.8a283119.chunk.js.map