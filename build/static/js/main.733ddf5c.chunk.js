(this.webpackJsonpstrangers_things=this.webpackJsonpstrangers_things||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var r=n(8),s=n.n(r),c=n(10),a=n(5),o=n(0),i=n(21),l=n.n(i),j=n(9),u=n(11),d="https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT",b=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,r,c,a,o,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,r=t.method,c=t.token,a=t.body,e.prev=1,o={method:r?r.toUpperCase():"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},c&&(o.headers.Authorization="Bearer ".concat(c)),console.log("Call API Request URL: ",d+n),console.log("Call API Options: ",o),e.next=8,fetch(d+n,o);case 8:return i=e.sent,e.next=11,i.json();case 11:if(l=e.sent,console.log("data: ",l),!l.error){e.next=15;break}throw l.error;case 15:return e.abrupt("return",l);case 18:e.prev=18,e.t0=e.catch(1),console.error("ERROR: ",e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),p=n(71),h=n(72),O=n(1),x=function(e){var t=e.action,n=e.setToken,r=Object(o.useState)(""),i=Object(a.a)(r,2),l=i[0],d=i[1],x=Object(o.useState)(""),f=Object(a.a)(x,2),v=f[0],g=f[1],m="login"===t,k=m?"Login":"Register",y=m?"New user?":"Already have an account?",w=m?"register":"login",D=Object(j.f)(),S=function(){var e=Object(c.a)(s.a.mark((function e(r){var c,a,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,b({url:"/users/".concat(t),body:{user:{username:l,password:v}},method:"POST"});case 3:a=e.sent,o=null===a||void 0===a||null===(c=a.data)||void 0===c?void 0:c.token,console.log(o),o&&(localStorage.setItem("token",o),d(""),g(""),n(o),D.push("/"));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(p.a,{style:{padding:"1px"},children:[Object(O.jsx)("h2",{children:k}),Object(O.jsxs)("form",{onSubmit:S,children:[Object(O.jsx)("input",{type:"text",placeholder:"username",value:l,required:!0,onChange:function(e){return d(e.target.value)}}),Object(O.jsx)("input",{type:"password",placeholder:"password",value:v,onChange:function(e){return g(e.target.value)}})," ",Object(O.jsx)("br",{}),Object(O.jsx)(h.a,{variant:"secondary",type:"submit",children:k})]}),Object(O.jsx)(u.b,{to:"/".concat(w),children:y})]})})},f=n(76),v={searchContainer:{display:"flex",justifyContent:"center",padding:0,alignItems:"center"},searchInput:{margin:"0 16px"}},g=function(e){var t=e.posts,n=Object(j.f)(),r=(Object(j.g)().postId,Object(o.useState)("")),s=Object(a.a)(r,2),c=s[0],i=s[1],l=t.filter((function(e){return function(e,t){for(var n=t.toLowerCase(),r=0,s=[e.description,e.location,e.title,e.author.username];r<s.length;r++)if(s[r].toLowerCase().includes(n))return!0}(e,c)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{style:v.searchContainer,children:[Object(O.jsx)("h2",{children:"Posts"}),Object(O.jsx)("input",{style:v.searchInput,type:"text",placeholder:"search for posts",value:c,onChange:function(e){console.log(e.target.value),i(e.target.value)}})]}),l.length?l.map((function(e){return Object(O.jsx)(f.a,{style:{width:"auto"},children:Object(O.jsxs)("div",{style:{width:"auto",padding:"10px"},children:[Object(O.jsx)("h5",{children:e.title}),Object(O.jsxs)("div",{children:["Posted by: ",e.author.username]}),Object(O.jsxs)("div",{children:["Description: ",e.description]}),Object(O.jsxs)("div",{children:["Location: ",e.location]}),Object(O.jsx)(h.a,{variant:"secondary",onClick:function(){return n.push("/posts/".concat(e._id))},children:"View Post"})]},e._id)})})):Object(O.jsx)("div",{children:"No posts to display"})]})},m=function(e){var t=e.posts,n=e.token,r=e.setPosts,s=e.userData,c=Object(j.g)().postId,a=Object(j.f)(),o=t.find((function(e){return c===e._id}));console.log("SINGLE POST",o);var i=s.username===o.author.username;return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)("div",{children:Object(O.jsxs)(p.a,{children:[Object(O.jsx)("h3",{children:o.title}),Object(O.jsxs)("p",{children:["Posted by: ",o.author.username]}),Object(O.jsxs)("p",{children:["Price: ",o.price]}),Object(O.jsxs)("p",{children:["Location: ",o.location]}),Object(O.jsxs)("p",{children:["Delivers: ",o.willDeliver?"Yes":"No"]}),i?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h.a,{variant:"secondary",onClick:function(){return a.push("".concat(c,"/edit"))},children:"Edit"})," ",Object(O.jsx)(L,{token:n,postId:c,setPosts:r})]}):"",n?Object(O.jsx)(O.Fragment,{children:i?"":Object(O.jsx)(F,{token:n,postId:c})}):""]})}):""})},k=n(74),y=n(75),w={display:"flex",margin:"auto",textDecoration:"none",color:"black",alignItems:"flex-end"},D=function(e){var t=e.token,n=Object(j.f)(),r=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("token"),n.push("/"),window.location.reload(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(k.a,{bg:"secondary",variant:"secondary",sticky:"top",children:[Object(O.jsx)(k.a.Brand,{children:"Stranger's Things"}),Object(O.jsxs)(y.a,{className:"me-auto",children:[Object(O.jsx)(y.a.Link,{to:"/",children:Object(O.jsx)(u.b,{to:"/",style:w,children:"Home "})}),Object(O.jsx)("br",{}),t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y.a.Link,{children:Object(O.jsx)(u.b,{to:"/profile",style:w,children:"Profile"})}),Object(O.jsx)("br",{}),Object(O.jsx)(y.a.Link,{children:Object(O.jsx)(u.b,{to:"/posts/new",style:w,children:"Add Post"})}),Object(O.jsx)("br",{}),Object(O.jsx)(y.a.Link,{children:Object(O.jsx)(u.b,{to:"/",style:w,onClick:r,children:"Logout"})})]}):Object(O.jsx)(y.a.Link,{children:Object(O.jsx)(u.b,{to:"/login",style:w,children:"Login"})})]})]})})},S=n(7),C=n(2),P=n(34),I=function(e){var t=e.token,n=e.setPosts,r=e.posts,i=e.action,l=Object(j.g)().postId,u=Object(j.f)(),d=Object(o.useState)({title:"",description:"",price:0,location:"",willDeliver:!1}),x=Object(a.a)(d,2),f=x[0],v=x[1],g="edit"===i,m=g?"Edit this post":"Add a new post",k=g?"PATCH":"POST",y=g?"/posts/".concat(l):"/posts",w=function(){var e=Object(c.a)(s.a.mark((function e(c){var a,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,console.log("submitted"),e.next=5,b({url:y,method:k,body:{post:{title:f.title,description:f.description,price:f.price,location:f.location,willDeliver:f.willDeliver}},token:t});case 5:a=e.sent,o=a.data.post,g?(i=r.filter((function(e){return e._id!==l})),n([].concat(Object(P.a)(i),[o]))):n([].concat(Object(P.a)(r),[o])),u.push("/posts"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("error adding a post: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),D=function(e){return function(t){v("willDeliver"===e?Object(C.a)(Object(C.a)({},f),{},Object(S.a)({},e,t.target.checked)):Object(C.a)(Object(C.a)({},f),{},Object(S.a)({},e,t.target.value)))}};return Object(O.jsx)(p.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:m}),Object(O.jsxs)("form",{onSubmit:w,children:[Object(O.jsx)("input",{type:"text",placeholder:"Title Of Post",value:f.title,onChange:D("title")}),Object(O.jsx)("br",{}),Object(O.jsx)("textarea",{type:"text",rows:"6",placeholder:"Description",value:f.description,onChange:D("description")}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"number",placeholder:"Price of Item",value:f.price,onChange:D("price")}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",placeholder:"Location",value:f.location,onChange:D("location")}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"Deliver?"}),Object(O.jsx)("input",{type:"checkbox",value:f.willDeliver,onChange:D("willDeliver")}),Object(O.jsx)("br",{}),t?Object(O.jsx)(h.a,{variant:"secondary",type:"submit",children:m}):""]})]})})},L=function(e){var t=e.token,n=Object(j.f)(),r=Object(j.g)().postId,a="/posts/".concat(r),o=function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b({url:a,method:"DELETE",token:t});case 3:n.push("/"),window.location.reload(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error deleting a post:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(h.a,{variant:"secondary",onClick:o,children:"Delete Post"})})},T=n(73),F=function(e){var t=e.token,n=Object(o.useState)(""),r=Object(a.a)(n,2),i=r[0],l=r[1],u=Object(j.g)().postId,d=Object(j.f)(),p="/posts/".concat(u,"/messages"),x=function(){var e=Object(c.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,console.log("message sent"),e.next=5,b({url:p,method:"POST",body:{message:{content:"".concat(i)}},token:t});case 5:d.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("error adding a message:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:t?Object(O.jsxs)("form",{onSubmit:x,children:[Object(O.jsx)(T.a,{sm:"2",children:Object(O.jsx)("textarea",{type:"text",rows:"3",placeholder:"Message",value:i,onChange:function(e){return l(e.target.value)}})}),Object(O.jsx)("br",{}),Object(O.jsx)(h.a,{variant:"secondary",children:"Send"})]}):""})},E=n(52),A=function(e){var t=e.token,n=e.userData,r=Object(o.useState)([]),i=Object(a.a)(r,2),l=i[0],j=i[1],u=Object(o.useState)(!1),d=Object(a.a)(u,2),x=d[0],v=d[1],g=function(){var e=Object(c.a)(s.a.mark((function e(n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),v(!x),e.prev=2,e.next=5,b({url:"/users/me",token:t});case 5:r=e.sent,c=r.data.messages,j(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(p.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:["Hello ",n.username,"!"]}),Object(O.jsx)(h.a,{variant:"secondary",onClick:g,"aria-controls":"example-collapse-text","aria-expanded":x,children:"Get Messages"}),l.map((function(e){return Object(O.jsx)(E.a,{in:x,dimension:"width",children:Object(O.jsx)(f.a,{body:!0,style:{width:"90%"},className:"mb-2",children:Object(O.jsxs)("div",{style:{minHeight:"150px"},children:[Object(O.jsxs)("h3",{children:["From: ",e.fromUser.username]}),Object(O.jsxs)("h4",{children:["Post: ",e.post.title]}),Object(O.jsxs)("p",{children:['"',e.content,'"']})]},e._id)})})}))]})})})},N=(n(68),function(){var e=Object(o.useState)(""),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)({}),l=Object(a.a)(i,2),u=l[0],d=l[1],p=Object(o.useState)([]),h=Object(a.a)(p,2),f=h[0],v=h[1],k=Object(o.useState)([]),y=Object(a.a)(k,2),w=y[0],S=y[1],C=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({url:"/users/me",token:t});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b({url:"/posts"});case 2:return t=e.sent,n=t.data.posts,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)(Object(c.a)(s.a.mark((function e(){var t,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:if(t=e.sent,v(t),n){e.next=7;break}return r(localStorage.getItem("token")),e.abrupt("return");case 7:return e.next=9,C(n);case 9:c=e.sent,console.log("data:",c),c&&c.username&&d(c);case 12:case"end":return e.stop()}}),e)}))),[n]),console.log("token:",n),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(D,{token:n,setToken:r,userData:u,setUserData:d}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",children:Object(O.jsx)(g,{posts:f,token:n})}),Object(O.jsx)(j.a,{exact:!0,path:"/profile",children:Object(O.jsx)(A,{messages:w,token:n,userData:u})}),Object(O.jsx)(j.a,{exact:!0,path:"/posts",children:Object(O.jsx)(g,{posts:f,token:n})}),Object(O.jsx)(j.a,{path:"/posts/new",children:n?Object(O.jsx)(I,{token:n,setPosts:v,posts:f,action:"add"}):"You must be logged in to add a post!"}),Object(O.jsx)(j.a,{path:"/posts/:postId/edit",children:n?Object(O.jsx)(I,{token:n,setPosts:v,posts:f,action:"edit"}):""}),Object(O.jsx)(j.a,{path:"/posts/:postId",children:Object(O.jsx)(m,{posts:f,token:n,userData:u})}),Object(O.jsx)(j.a,{path:"/posts/:postId/messages",children:n?Object(O.jsx)(F,{posts:f,token:n,messages:w,setMessages:S}):""}),Object(O.jsx)(j.a,{path:"/register",children:Object(O.jsx)(x,{action:"register",setToken:r,setUserData:d})}),Object(O.jsx)(j.a,{path:"/login",children:n?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:"You are already logged in!"}),Object(O.jsx)("br",{})]}):Object(O.jsx)(x,{action:"login",setToken:r,setUserData:d})})]})]})});l.a.render(Object(O.jsx)(u.a,{children:Object(O.jsx)(N,{})}),document.getElementById("app"))}},[[69,1,2]]]);
//# sourceMappingURL=main.733ddf5c.chunk.js.map