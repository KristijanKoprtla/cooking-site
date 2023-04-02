(this["webpackJsonpcooking-site"]=this["webpackJsonpcooking-site"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(30),s=c.n(a),i=(c(38),c(13)),o=c(14),j=c(4),l=c(11),u=c(1),d=Object(n.createContext)(),b=function(e,t){switch(t.type){case"CHANGE_COLOR":return Object(l.a)(Object(l.a)({},e),{},{color:t.payload});case"CHANGE_MODE":return Object(l.a)(Object(l.a)({},e),{},{mode:t.payload});default:return e}};function O(e){var t=e.children,c=Object(n.useReducer)(b,{color:"#58249c",mode:"dark"}),r=Object(j.a)(c,2),a=r[0],s=r[1];return Object(u.jsx)(d.Provider,{value:Object(l.a)(Object(l.a)({},a),{},{changeColor:function(e){s({type:"CHANGE_COLOR",payload:e})},changeMode:function(e){s({type:"CHANGE_MODE",payload:e})}}),children:t})}var h=function(){var e=Object(n.useContext)(d);if(void 0===e)throw new Error("useTheme() must be used inside a ThemeProvider");return e};c(40),c(41);function p(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(o.f)();return Object(u.jsx)("div",{className:"searchbar",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("/search?q=".concat(c))},children:[Object(u.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(u.jsx)("input",{type:"text",id:"search",onChange:function(e){return r(e.target.value)},required:!0})]})})}function x(){var e=h().color;return Object(u.jsx)("div",{className:"navbar",style:{background:e},children:Object(u.jsxs)("nav",{children:[Object(u.jsx)(i.b,{to:"/",className:"brand",children:Object(u.jsx)("h1",{children:"Cooking site"})}),Object(u.jsx)(p,{}),Object(u.jsx)(i.b,{to:"/create",children:"Create Recipe"})]})})}var f=c(27);c(56);f.a.initializeApp({apiKey:"AIzaSyAYDib4BJ-Zp2mvkumrxaEEymeUKvmtHII",authDomain:"cooking-site-bd23f.firebaseapp.com",projectId:"cooking-site-bd23f",storageBucket:"cooking-site-bd23f.appspot.com",messagingSenderId:"127554358523",appId:"1:127554358523:web:88a7ad61d11246b047745e"});var m=f.a.firestore(),v=(c(47),c.p+"static/media/trashcan.24315ab3.svg");c(48);function g(e){var t=e.recipes,c=h().mode;if(0===t.length)return Object(u.jsx)("div",{className:"error",children:"No recipes to load..."});return Object(u.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(u.jsxs)("div",{className:"card ".concat(c),children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsxs)("p",{children:[e.cookingTime," to make"]}),Object(u.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(u.jsx)(i.b,{to:"/recipes/".concat(e.id),children:"Cook this"}),Object(u.jsx)("img",{className:"delete",src:v,alt:"trashcan",onClick:function(){return t=e.id,void m.collection("recipes").doc(t).delete();var t}})]},e.id)}))})}function k(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(!1),s=Object(j.a)(a,2),i=s[0],o=s[1],d=Object(n.useState)(!1),b=Object(j.a)(d,2),O=b[0],h=b[1];return Object(n.useEffect)((function(){o(!0);var e=m.collection("recipes").onSnapshot((function(e){if(e.empty)h("No recipes to load"),o(!1);else{var t=[];e.docs.forEach((function(e){t.push(Object(l.a)({id:e.id},e.data()))})),r(t),o(!1)}}),(function(e){h(e.message),o(!1)}));return function(){return e()}}),[]),Object(u.jsxs)("div",{className:"home",children:[O&&Object(u.jsx)("p",{className:"error",children:O}),i&&Object(u.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(u.jsx)(g,{recipes:c})]})}var N=c(33),C=c(18),S=c.n(C),y=c(22);c(50);function E(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(j.a)(a,2),i=s[0],l=s[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),O=b[0],p=b[1],x=Object(n.useState)(""),f=Object(j.a)(x,2),v=f[0],g=f[1],k=Object(n.useState)([]),C=Object(j.a)(k,2),E=C[0],w=C[1],A=Object(n.useRef)(null),R=Object(o.f)(),T=h().mode,D=function(){var e=Object(y.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:c,ingredients:E,method:i,cookingTime:O+" minutes"},e.prev=2,e.next=5,m.collection("recipes").add(n);case 5:R.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"create ".concat(T),children:[Object(u.jsx)("h2",{className:"page-title",children:"Add a New Recipe"}),Object(u.jsxs)("form",{onSubmit:D,children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Recipe title:"}),Object(u.jsx)("input",{type:"text",onChange:function(e){return r(e.target.value)},value:c,required:!0})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Recipe ingredients:"}),Object(u.jsxs)("div",{className:"ingredients",children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return g(e.target.value)},value:v,ref:A}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault();var t=v.trim();t&&!E.includes(t)&&w((function(e){return[].concat(Object(N.a)(e),[t])})),g(""),A.current.focus()},className:"btn",children:"add"})]})]}),Object(u.jsxs)("p",{children:["Current ingredients: ",E.map((function(e){return Object(u.jsxs)("em",{children:[e,", "]},e)}))]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Recipe method:"}),Object(u.jsx)("textarea",{onChange:function(e){return l(e.target.value)},value:i,required:!0})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Cooking time (minutes):"}),Object(u.jsx)("input",{type:"number",onChange:function(e){return p(e.target.value)},value:O,required:!0})]}),Object(u.jsx)("button",{className:"btn",children:"submit"})]})]})}c(51);function w(){var e=Object(o.g)().search,t=new URLSearchParams(e).get("q"),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=Object(n.useState)(null),r=Object(j.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),u=o[0],d=o[1],b=Object(n.useState)(null),O=Object(j.a)(b,2),h=O[0],p=O[1],x=Object(n.useState)(null),f=Object(j.a)(x,2),m=f[0],v=f[1],g=function(e){v({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};return Object(n.useEffect)((function(){var c=new AbortController,n=function(){var t=Object(y.a)(S.a.mark((function t(n){var r,a;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.prev=1,t.next=4,fetch(e,Object(l.a)(Object(l.a)({},n),{},{signal:c.signal}));case 4:if((r=t.sent).ok){t.next=7;break}throw new Error(r.statusText);case 7:return t.next=9,r.json();case 9:a=t.sent,d(!1),s(a),p(null),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),"AbortError"===t.t0.name?console.log("the fetch was aborted"):(d(!1),p("Could not fetch the data"));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return"GET"===t&&n(),"POST"===t&&m&&n(m),function(){c.abort()}}),[e,m,t]),{data:a,isPending:u,error:h,postData:g}}("http://localhost:3000/recipes?q="+t),r=c.error,a=c.isPending,s=c.data;return Object(u.jsxs)("div",{className:"page-title",children:[Object(u.jsxs)("h2",{children:['Recipes including "',t,'"']}),r&&Object(u.jsx)("p",{className:"error",children:r}),a&&Object(u.jsx)("p",{className:"loading",children:"Loading ..."}),s&&Object(u.jsx)(g,{recipes:s})]})}c(52);function A(){var e=Object(o.h)().id,t=h().mode,c=Object(n.useState)(null),r=Object(j.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)(!1),l=Object(j.a)(i,2),d=l[0],b=l[1],O=Object(n.useState)(!1),p=Object(j.a)(O,2),x=p[0],f=p[1];Object(n.useEffect)((function(){b(!0);var t=m.collection("recipes").doc(e).onSnapshot((function(e){e.exists?(b(!1),s(e.data())):(b(!1),f("Could not find that recipe"))}));return function(){return t()}}),[e]);return Object(u.jsxs)("div",{className:"recipe ".concat(t),children:[x&&Object(u.jsx)("p",{className:"error",children:x}),d&&Object(u.jsx)("p",{className:"loading",children:"Loading ..."}),a&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"page-title",children:a.title}),Object(u.jsxs)("p",{children:[a.cookingTime," to cook."]}),Object(u.jsx)("ul",{children:a.ingredients.map((function(e){return Object(u.jsx)("li",{children:e},e)}))}),Object(u.jsx)("p",{className:"method",children:a.method}),Object(u.jsx)("button",{onClick:function(){m.collection("recipes").doc(e).update({title:"Di su pare???"})},children:"Update me"})]})]})}var R=c.p+"static/media/mode-icon.42451c62.svg",T=(c(53),["#58249c","#249c6b","#b70233"]);function D(){var e=h(),t=e.changeColor,c=e.changeMode,n=e.mode;return Object(u.jsxs)("div",{className:"theme-selectors",children:[Object(u.jsx)("div",{className:"mode-toggle",children:Object(u.jsx)("img",{onClick:function(){c("dark"===n?"light":"dark")},src:R,alt:"dark/light toggle icon",style:{filter:"dark"===n?"invert(100%)":"invert(20%)"}})}),Object(u.jsx)("div",{className:"theme-buttons",children:T.map((function(e){return Object(u.jsx)("div",{onClick:function(){return t(e)},style:{background:e}},e)}))})]})}c(54);var q=function(){var e=h().mode;return Object(u.jsx)("div",{className:"App ".concat(e),children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(x,{}),Object(u.jsx)(D,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(k,{})}),Object(u.jsx)(o.a,{path:"/create",children:Object(u.jsx)(E,{})}),Object(u.jsx)(o.a,{path:"/search",children:Object(u.jsx)(w,{})}),Object(u.jsx)(o.a,{path:"/recipes/:id",children:Object(u.jsx)(A,{})})]})]})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(O,{children:Object(u.jsx)(q,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.8993a653.chunk.js.map