(this.webpackJsonpbugtracker=this.webpackJsonpbugtracker||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n,a=c(1),r=c(0),s=c.n(r),i=c(31),o=c.n(i),u=(c(40),c(14)),l=c(2),b=(c(41),{pending:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u043e",registered:"\u041e\u0447\u0456\u043a\u0443\u0454 \u0440\u0456\u0448\u0435\u043d\u043d\u044f ",fixed:"\u0412\u0438\u0440\u0456\u0448\u0435\u043d\u043e",dropped:"\u0412\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043e"}),d=function(e){var t=e.bug;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card_image",children:Object(a.jsx)("img",{src:"https://elit-bugtracker.tk/uploads/bugs/24.jpg",alt:t.description,className:"card_image-img"})}),Object(a.jsxs)("div",{className:"card-text",children:[Object(a.jsxs)("h2",{children:["\u0411\u0430\u0433 \u2116",t.id]}),Object(a.jsx)("p",{children:t.description}),Object(a.jsx)("div",{className:t.status+" card-status",children:b[t.status]})]})]})},j=(c(42),function(e){var t=e.bugs;return Object(a.jsx)("div",{className:"bug-lis-container",children:Object(a.jsx)("div",{className:"bug-list",children:t.map((function(e){return Object(a.jsx)(d,{bug:e},e.id)}))})})}),g=Object(r.createContext)(),h=function(){return Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("div",{className:"spinner-border",role:"status",children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})})},x=(c(43),function(e){e.categories,e.toggleCategory;return Object(a.jsx)("div",{className:"categories",children:Object(a.jsx)("div",{className:"categories_block",children:Object(a.jsxs)("ul",{className:"categories_list",children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("input",{type:"checkbox",id:"checkboxOne",value:"Rainbow Dash",defaultChecked:!0}),Object(a.jsx)("label",{htmlFor:"checkboxOne",children:"\u0412\u0438\u0440\u0456\u0448\u0435\u043d\u043e"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("input",{type:"checkbox",id:"checkboxTwo",value:"Cotton Candy",defaultChecked:!0}),Object(a.jsx)("label",{htmlFor:"checkboxTwo",children:"\u041e\u0447\u0456\u043a\u0443\u0454 \u0440\u0456\u0448\u0435\u043d\u043d\u044f"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("input",{type:"checkbox",id:"checkboxThree",value:"Rarity",defaultChecked:!0}),Object(a.jsx)("label",{htmlFor:"checkboxThree",children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u043e"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("input",{type:"checkbox",id:"checkboxFour",value:"Moondancer"}),Object(a.jsx)("label",{htmlFor:"checkboxFour",children:"\u0412\u0456\u0434\u0445\u0438\u043b\u0435\u043d\u043e"})]})]})})})}),O=function(){var e=Object(r.useContext)(g),t=e.loading,c=e.bugs,n=e.categories,s=e.fetchBugs,i=e.toggleCategory,o=e.handleScroll;return Object(r.useEffect)((function(){s()}),[]),Object(r.useEffect)((function(){return window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}}),[]),Object(a.jsxs)(r.Fragment,{children:[Object(a.jsx)(x,{categories:n,toggleCategory:i}),Object(a.jsx)(j,{bugs:c}),t?Object(a.jsx)(h,{}):""]})},p=c.p+"static/media/bugtrackerLogo.213106df.png",f=(c(44),function(){return Object(a.jsx)("nav",{className:"navbar_box",children:Object(a.jsxs)(u.b,{to:"/",exact:!0,className:"navbar",children:[Object(a.jsx)("div",{className:"navbar_logo",children:Object(a.jsx)("img",{src:p,alt:"\u0416\u0443\u0447\u043e\u043a",className:"navbar_logo-imgLogo"})}),Object(a.jsx)("div",{className:"nav_title",children:Object(a.jsx)("p",{className:"nav_title-text",children:"SumDU Bug Tracker"})})]})})}),m=c(11),v=c.n(m),k=c(16),y=c(33),N=c(21),w=c.n(N),C=c(9),F=c(34),_=c(8),E="SHOW_LOADER",L="HIDE_LOADER",T="FETCH_BUGS",D="ADD_BUGS",S=(n={},Object(C.a)(n,E,(function(e){return Object(_.a)(Object(_.a)({},e),{},{loading:!0})})),Object(C.a)(n,L,(function(e){return Object(_.a)(Object(_.a)({},e),{},{loading:!1})})),Object(C.a)(n,D,(function(e,t){var c=t.payload;return Object(_.a)(Object(_.a)({},e),{},{bugs:[].concat(Object(F.a)(e.bugs),[c]),loading:!1})})),Object(C.a)(n,T,(function(e,t){var c=t.payload;return Object(_.a)(Object(_.a)({},e),{},{bugs:c,loading:!1})})),Object(C.a)(n,"DEFAULT",(function(e){return e})),n),B=function(e,t){return(S[t.type]||S.DEFAULT)(e,t)},A="https://elit-bugtracker.tk",H=function(e){var t=e.children,c=Object(r.useReducer)(B,{bugs:[],categories:["pending","registered","fixed"],loading:!1,page:1,hasNext:!0}),n=Object(y.a)(c,2),s=n[0],i=n[1],o=function(){return i({type:E})},u=function(){var e=Object(k.a)(v.a.mark((function e(){var t,c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),t=JSON.stringify(s.categories),e.next=4,w.a.get("".concat(A,"/bugs?categories=").concat(t,"&page=").concat(s.page,"&per_page=4"));case 4:c=e.sent,n=c.data.data,i({type:T,payload:n});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(k.a)(v.a.mark((function e(){var t,c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!0===s.hasNext){e.next=2;break}return e.abrupt("return");case 2:if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){e.next=4;break}return e.abrupt("return");case 4:return console.log("Fetch more list items!"),s.page++,o(),t=JSON.stringify(s.categories),e.next=10,w.a.get("".concat(A,"/bugs?categories=").concat(t,"&page=").concat(s.page,"&per_page=4"));case 10:c=e.sent,0===(n=s.bugs.concat(c.data.data)).length?(s.hasNext=!1,i({type:L})):i({type:D,payload:n});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(k.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.categories.includes(t)?s.categories=s.categories.filter((function(e){return t!==e})):s.categories.push(t),s.hasNext=!0,e.next=4,u();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(g.Provider,{value:{showLoader:o,fetchBugs:u,toggleCategory:b,handleScroll:l,loading:s.loading,bugs:s.bugs,categories:s.categories},children:t})};var R=function(){return Object(a.jsx)(H,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(f,{}),Object(a.jsx)("div",{className:"container pt-4",children:Object(a.jsx)(l.c,{children:Object(a.jsx)(l.a,{path:"/",exact:!0,component:O})})})]})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),U()}},[[69,1,2]]]);
//# sourceMappingURL=main.3c0a34f5.chunk.js.map