(this.webpackJsonpstrangers_things=this.webpackJsonpstrangers_things||[]).push([[0],{32:function(e,t,n){"use strict";n.r(t);var r=n(3),s=n.n(r),a=n(6),c=n(5),o=n(1),i=n(15),u=n.n(i),l=n(2),j=n(7),p="https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT",b=function(){var e=Object(a.a)(s.a.mark((function e(t){var n,r,a,c,o,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.method,a=t.token,c=t.body,e.prev=1,o={method:r?r.toUpperCase():"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)},a&&(o.headers.Authorization="Bearer ".concat(a)),console.log("Call API Request URL: ",p+n),console.log("Call API Options: ",o),e.next=8,fetch(p+n,o);case 8:return i=e.sent,e.next=11,i.json();case 11:if(u=e.sent,console.log("data: ",u),!u.error){e.next=15;break}throw u.error;case 15:return e.abrupt("return",u);case 18:e.prev=18,e.t0=e.catch(1),console.error("ERROR: ",e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),h=n(0),d=function(e){var t=e.action,n=e.setToken,r=(e.setUserData,Object(o.useState)("")),i=Object(c.a)(r,2),u=i[0],p=i[1],d=Object(o.useState)(""),O=Object(c.a)(d,2),x=O[0],f=O[1],g="login"===t,v=g?"Login":"Register",m=g?"Register":"Login",y=g?"register":"login",w=Object(l.e)(),k=function(){var e=Object(a.a)(s.a.mark((function e(r){var a,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),console.log("clicked"),e.next=4,b({url:"/users/".concat(t),body:{user:{username:u,password:x}},method:"POST"});case 4:c=e.sent,o=null===c||void 0===c||null===(a=c.data)||void 0===a?void 0:a.token,console.log(o),o&&(localStorage.setItem("token",o),p(""),f(""),n(o),w.push("/"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:v}),Object(h.jsxs)("form",{onSubmit:k,children:[Object(h.jsx)("input",{type:"text",placeholder:"username",value:u,required:!0,onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("input",{type:"password",placeholder:"password",value:x,onChange:function(e){return f(e.target.value)}}),Object(h.jsx)("button",{type:"submit",children:v})]}),Object(h.jsx)(j.b,{to:"/".concat(y),children:m})]})},O={searchContainer:{display:"flex",justifyContent:"center",padding:"16px",alignItems:"center"},searchInput:{margin:"0 16px"}},x=function(e){var t=e.posts,n=Object(l.e)(),r=Object(o.useState)(""),s=Object(c.a)(r,2),a=s[0],i=s[1],u=t.filter((function(e){return function(e,t){for(var n=t.toLowerCase(),r=0,s=[e.description,e.location,e.title,e.author.username];r<s.length;r++)if(s[r].toLowerCase().includes(n))return!0}(e,a)}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{style:O.searchContainer,children:[Object(h.jsx)("h2",{children:"Posts"}),Object(h.jsx)("input",{style:O.searchInput,type:"text",placeholder:"search for posts",value:a,onChange:function(e){console.log(e.target.value),i(e.target.value)}})]}),u.length?u.map((function(e){return Object(h.jsxs)("div",{style:{border:"1px solid black"},children:[Object(h.jsx)("h5",{children:e.title}),Object(h.jsxs)("div",{children:["Posted by: ",e.author.username]}),Object(h.jsxs)("div",{children:["Description: ",e.description]}),Object(h.jsxs)("div",{children:["Location: ",e.location]}),Object(h.jsx)("button",{onClick:function(){return n.push("/posts/".concat(e._id))},children:"View Post"})]},e._id)})):Object(h.jsx)("div",{children:"No posts to display"})]})},f=function(e){var t=e.posts,n=Object(l.f)().postId,r=t.find((function(e){return n===e._id}));return console.log("SINGLE POST",r),Object(h.jsx)(h.Fragment,{children:r?Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:r.title}),Object(h.jsxs)("p",{children:["Posted by: ",r.author.username]}),Object(h.jsxs)("p",{children:["Price: ",r.price]}),Object(h.jsxs)("p",{children:["Location: ",r.location]}),Object(h.jsxs)("p",{children:["Delivers: ",r.willDeliver?"Yes":"No"]})]}):""})},g=function(){return Object(h.jsx)("div",{children:"Navbar"})},v=function(e){var t=Object(o.useState)(""),n=Object(c.a)(t,2),r=n[0],i=n[1],u=Object(o.useState)(""),l=Object(c.a)(u,2),j=l[0],p=l[1],b=Object(o.useState)(""),d=Object(c.a)(b,2),O=d[0],x=d[1],f=Object(o.useState)(""),g=Object(c.a)(f,2),v=g[0],m=g[1],y=Object(o.useState)(!1),w=Object(c.a)(y,2),k=w[0],S=w[1],C=function(){var e=Object(a.a)(s.a.mark((function e(t){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=localStorage.getItem("token"),e.next=4,fetch("https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT/posts",{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({post:{title:r,description:j,price:O,location:v,willDeliver:k}})});case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,console.log("This is our post form's data",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:C,children:[Object(h.jsx)("input",{type:"text",placeholder:"Title Of Post",value:r,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",{type:"text",rows:"6",placeholder:"Description",value:j,onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Price of Item",value:O,onChange:function(e){return x(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",placeholder:"Location",value:v,onChange:function(e){return m(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"Will Deliver?"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"willDeliverTrue",children:"True"}),Object(h.jsx)("input",{type:"radio",id:"willDeliverTrue",value:!0,onChange:function(e){return S(e.target.value)}}),Object(h.jsx)("label",{htmlFor:"willDeliverFalse",children:"False"}),Object(h.jsx)("input",{type:"radio",id:"willDeliverFalce",value:!1,onChange:function(e){return S(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",children:"Create New Post"})]})})},m=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)({}),u=Object(c.a)(i,2),j=u[0],p=u[1],O=Object(o.useState)([]),m=Object(c.a)(O,2),y=m[0],w=m[1],k=function(){var e=Object(a.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({url:"/users/me",token:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(a.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({url:"/posts"});case 2:return t=e.sent,n=t.data.posts,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)(Object(a.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:if(t=e.sent,w(t),n){e.next=7;break}return r(localStorage.getItem("token")),e.abrupt("return");case 7:return e.next=9,k(n);case 9:a=e.sent,console.log("data:",a),a&&a.username&&p(a);case 12:case"end":return e.stop()}}),e)}))),[n]),console.log("token:",n),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{}),Object(h.jsx)("h1",{children:"Stranger's Things"}),Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(x,{posts:y})}),Object(h.jsxs)(l.a,{exact:!0,path:"/profile",children:[j.username&&Object(h.jsxs)("div",{children:["Hello ",j.username]}),n?Object(h.jsx)(v,{}):""]}),Object(h.jsx)(l.a,{exact:!0,path:"/posts",children:Object(h.jsx)(x,{posts:y})}),Object(h.jsx)(l.a,{path:"/posts/:postId",children:Object(h.jsx)(f,{posts:y})}),Object(h.jsx)(l.a,{path:"/register",children:Object(h.jsx)(d,{action:"register",setToken:r,setUserData:p})}),Object(h.jsx)(l.a,{path:"/login",children:n?"You are already logged in!":Object(h.jsx)(d,{action:"login",setToken:r,setUserData:p})})]})};u.a.render(Object(h.jsx)(j.a,{children:Object(h.jsx)(m,{})}),document.getElementById("app"))}},[[32,1,2]]]);
//# sourceMappingURL=main.93ae65f9.chunk.js.map