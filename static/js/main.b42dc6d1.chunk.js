(this["webpackJsonpdata-and-forms"]=this["webpackJsonpdata-and-forms"]||[]).push([[0],{15:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(17),a=n.n(r),i=(n(23),n(9)),o=(n(15),n(2)),j=(n(24),n(1)),l=function(e){return Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),console.log(t);var n={};n.email=t.target[0].value,n.pass=t.target[1].value;var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};"register"==t.nativeEvent.submitter.id?(alert("register"),fetch("https://auth404.herokuapp.com/api/auth/register",s).then((function(e){return e.json().then((function(e){"success"==e.status?alert("Congrats! You registered as well! Please login!"):alert(e.message)}))}))):"login"==t.nativeEvent.submitter.id&&(alert("else"),fetch("https://auth404.herokuapp.com/api/auth/login",s).then((function(t){return t.json().then((function(t){"success"==t.status?(localStorage.setItem("token",t.token),e.setIsLoggedIn(!0)):localStorage.removeItem("token")}))})))},children:[Object(j.jsx)("input",{type:"email"}),Object(j.jsx)("input",{type:"password"}),Object(j.jsx)("input",{id:"register",type:"submit",value:"Register"}),Object(j.jsx)("input",{id:"login",type:"submit",value:"Login"})]})})},u=(n(26),function(e){return Object(j.jsxs)("div",{className:"flag",children:[Object(j.jsx)("img",{src:e.imgSrc}),Object(j.jsx)("h3",{children:e.name})]})});var h=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r={method:"GET"};return Object(s.useEffect)((function(){fetch("https://restcountries.eu/rest/v2/all",r).then((function(e){console.log(e),e.json().then((function(e){console.log(e),c(e.map((function(e){return Object(j.jsx)(u,{imgSrc:e.flag,name:e.name})})))}))}))}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Flags of the World"}),Object(j.jsx)("div",{className:"App",children:n})]})},d=function(e){return 1==e.isLoggedIn?e.children:Object(j.jsx)(l,{setIsLoggedIn:e.setIsLoggedIn})};var g=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(s.useEffect)((function(){var e=localStorage.getItem("token");c(null!=e)}),[]);var r=Object(j.jsx)(l,{setIsLoggedIn:c});n&&(r=Object(j.jsx)(h,{}));var a=[Object(j.jsx)(o.a,{path:"/personal/home",children:Object(j.jsx)("h1",{children:"Test"})}),Object(j.jsx)(o.a,{path:"/personal/emails",children:r}),Object(j.jsx)(o.a,{path:"/personal/dashboard",children:Object(j.jsx)("h1",{children:"Test2"})}),Object(j.jsx)(o.a,{path:"/personal/profile",children:r})];return Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/login",children:Object(j.jsx)(l,{setIsLoggedIn:c})}),Object(j.jsx)(o.a,{path:"/countries",children:Object(j.jsx)(d,{isLoggedIn:n,setIsLoggedIn:c,children:r})}),Object(j.jsx)(o.a,{path:"/personal",children:Object(j.jsx)(d,{isLoggedIn:n,setIsLoggedIn:c,children:a})}),Object(j.jsxs)(o.a,{exact:!0,path:"/",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Welcome on Countries & Login App!"})}),Object(j.jsx)(d,{isLoggedIn:n,setIsLoggedIn:c,children:r})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))},p=n(12);a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p.a,{children:Object(j.jsx)(g,{})})}),document.getElementById("root")),b()}},[[32,1,2]]]);
//# sourceMappingURL=main.b42dc6d1.chunk.js.map