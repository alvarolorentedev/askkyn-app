(this["webpackJsonptogglee-generator"]=this["webpackJsonptogglee-generator"]||[]).push([[0],{62:function(e,t,n){},68:function(e,t,n){},71:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t){},84:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(22),a=n.n(s),u=(n(62),n(7)),i=n(12),o=n(56),j=n(47),b=n(88),l=n(90),d=n(8),O=n.n(d),f=n(10),h=(n(68),n(92)),p=n(89),x=n(1),v=function(e){var t=e.navigate,n=e.finishedLoading,r=e.create,s=e.join,a=Object(c.useState)(""),u=Object(i.a)(a,2),o=u[0],j=u[1],b=Object(c.useState)(""),l=Object(i.a)(b,2),d=l[0],v=l[1];Object(c.useEffect)(n,[n]);var m=function(){var e=Object(f.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:(n=e.sent).success&&t("/session/".concat(n.identifier,"/questionnaire"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(d,o);case 2:e.sent.success&&t("/session/".concat(d,"/answers/").concat(o));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{id:"container",children:[Object(x.jsx)(h.a,{className:"btn-start",onClick:m,children:" Create New"}),Object(x.jsx)(p.a.Control,{className:"form-control-start",type:"text",placeholder:"Enter Name",value:o,onChange:function(e){return j(e.target.value)}}),Object(x.jsx)(p.a.Control,{className:"form-control-start",type:"text",placeholder:"Enter Identifier",value:d,onChange:function(e){return v(e.target.value)}}),Object(x.jsx)(h.a,{className:"btn-start",onClick:g,children:" Join "})]})},m=function(e){return Object(x.jsx)(v,Object(u.a)({},e))},g=n(30),w=n(23),C=(n(71),n(87)),k=n(25),y=function(e){var t=e.navigate,n=e.sessionId,r=e.finishedLoading,s=e.submit,a=Object(c.useState)([]),o=Object(i.a)(a,2),j=o[0],b=o[1];Object(c.useEffect)(r,[r]);var l=function(){var e=Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n,j);case 2:e.sent.success&&t("/session/".concat(n,"/summary"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(e,t,n){return b(j.map((function(c,r){return e===r?Object(u.a)(Object(u.a)({},c),{},Object(g.a)({},t,n)):c})))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(C.a,{striped:!0,hover:!0,size:"sm","data-testid":"main-table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Question"}),Object(x.jsx)("th",{children:"Answers"}),Object(x.jsx)("th",{children:Object(x.jsxs)("div",{className:"actions",children:["Actions",Object(x.jsx)(h.a,{onClick:function(){return b([].concat(Object(w.a)(j),[{question:"",answers:[]}]))},children:Object(x.jsx)(k.a,{icon:["fas","plus"]})})]})})]})}),Object(x.jsx)("tbody",{children:j.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:Object(x.jsx)(p.a.Control,{type:"text",placeholder:"Enter Question",value:e.question,onChange:function(e){return d(t,"question",e.target.value)}})}),Object(x.jsx)("td",{children:e.answers.map((function(e,n){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.a.Control,{type:"text",placeholder:"Enter Answer",value:e.value,onChange:function(e){return function(e,t,n,c){return d(e,"answers",j[e].answers.map((function(e,r){return t===r?Object(u.a)(Object(u.a)({},e),{},Object(g.a)({},n,c)):e})))}(t,n,"value",e.target.value)}}),Object(x.jsx)(h.a,{onClick:function(){return c=n,d(e=t,"answers",j[e].answers.filter((function(e,t){return t!==c})));var e,c},children:Object(x.jsx)(k.a,{icon:["fas","trash"]})})]})}))}),Object(x.jsx)("td",{children:Object(x.jsxs)("div",{className:"actions",children:[Object(x.jsx)(h.a,{onClick:function(){return d(e=t,"answers",[].concat(Object(w.a)(j[e].answers),[{value:"",votes:[]}]));var e},children:Object(x.jsx)(k.a,{icon:["fas","plus"]})}),Object(x.jsx)(h.a,{onClick:function(){return e=t,b(j.filter((function(t,n){return n!==e})));var e},children:Object(x.jsx)(k.a,{icon:["fas","trash"]})})]})})]},"question_".concat(t))}))})]}),Object(x.jsx)(h.a,{onClick:l,children:Object(x.jsx)(k.a,{icon:["fas","play"]})})]})},q=function(e){return Object(x.jsx)(y,Object(u.a)({},e))},S=(n(74),function(e){var t=e.sessionId,n=e.finishedLoading,r=e.activateQuestion,s=e.subscribeChanges,a=Object(c.useState)([]),u=Object(i.a)(a,2),o=u[0],j=u[1],b=Object(c.useState)(null),l=Object(i.a)(b,2),d=l[0],O=l[1];Object(c.useEffect)(n,[n]),Object(c.useEffect)((function(){s(t,(function(e){var t=e.doc;j(t.questions)}))}),[]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(C.a,{striped:!0,hover:!0,size:"sm","data-testid":"main-table",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Question"}),Object(x.jsx)("th",{children:"Answers"}),Object(x.jsx)("th",{children:"Actions"})]})}),Object(x.jsx)("tbody",{children:o.map((function(e,n){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.question}),Object(x.jsx)("td",{children:e.answers.map((function(e){return Object(x.jsxs)("div",{children:[e.value," (",e.votes.length,"): ",e.votes.toString()]})}))}),Object(x.jsx)("td",{children:Object(x.jsx)("div",{className:"actions",children:Object(x.jsx)(h.a,{onClick:function(){return function(e){r(t,e),O(e)}(n)},disabled:n===d,children:Object(x.jsx)(k.a,{icon:["fas","play"]})})})})]},"question_".concat(n))}))})]})})}),E=function(e){return Object(x.jsx)(S,Object(u.a)({},e))},N=(n(75),n(91)),F=function(e){var t=e.sessionId,n=e.username,r=e.finishedLoading,s=e.answerQuestion,a=e.subscribeChanges;Object(c.useEffect)(r,[r]);var u=Object(c.useState)([]),o=Object(i.a)(u,2),j=o[0],b=o[1],l=Object(c.useState)(null),d=Object(i.a)(l,2),O=d[0],f=d[1];return Object(c.useEffect)(r,[r]),Object(c.useEffect)((function(){a(t,(function(e){var t=e.doc;b(t.questions),f(t.active)}))}),[]),null!=O?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:j[O].question}),j[O].answers.map((function(e,c){return Object(x.jsx)(N.a,{className:"answer-card",onClick:function(){return s(t,n,O,c)},children:Object(x.jsxs)(N.a.Body,{children:[Object(x.jsxs)(N.a.Title,{children:["#",c]}),Object(x.jsx)(N.a.Text,{children:e.value})]})})}))]}):Object(x.jsxs)(x.Fragment,{children:["Welcome ",n," wait for owner to start survey"]})},I=function(e){return Object(x.jsx)(F,Object(u.a)({},e))},L=n(50),Q=(n(76),n(26)),A=n(52),B=n(53),_=n(54),T=n(51),z=function(){return Math.random().toString(36).replace("0.","").substr(1,5)},J=function(){return Date.now()},D=function(){var e=Object(f.a)(O.a.mark((function e(t){var n,c,r,s,a=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:z,c=a.length>2&&void 0!==a[2]?a[2]:J,r=n(),s=c(),e.prev=4,e.next=7,t.put({_id:r,createdOn:s,players:[],questions:[]});case 7:return e.sent,e.abrupt("return",{success:!0,identifier:r});case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",{success:!1});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(f.a)(O.a.mark((function e(t,n,c){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get(n);case 3:return r=e.sent,e.next=6,t.put(Object(u.a)(Object(u.a)({},r),{},{players:[].concat(Object(w.a)(r.players),[c])}));case 6:return e.abrupt("return",{success:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,c){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(O.a.mark((function e(t,n,c){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get(n);case 3:return r=e.sent,e.next=6,t.put(Object(u.a)(Object(u.a)({},r),{},{questions:c}));case 6:return e.abrupt("return",{success:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,c){return e.apply(this,arguments)}}(),G=function(){var e=Object(f.a)(O.a.mark((function e(t,n,c){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get(n);case 3:return r=e.sent,e.next=6,t.put(Object(u.a)(Object(u.a)({},r),{},{active:c}));case 6:return e.abrupt("return",{success:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,c){return e.apply(this,arguments)}}(),W=function(){var e=Object(f.a)(O.a.mark((function e(t,n,c,r,s){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get(n);case 3:return a=e.sent,e.next=6,t.put(Object(u.a)(Object(u.a)({},a),{},{questions:a.questions.map((function(e,t){return t===r?Object(u.a)(Object(u.a)({},e),{},{answers:e.answers.map((function(e,t){return t===s?Object(u.a)(Object(u.a)({},e),{},{votes:Object(w.a)(new Set([].concat(Object(w.a)(e.votes),[c])))}):Object(u.a)(Object(u.a)({},e),{},{votes:e.votes.filter((function(e){return e!==c}))})}))}):e}))}));case 6:return e.abrupt("return",{success:!0});case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",{success:!1});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n,c,r,s){return e.apply(this,arguments)}}(),H=new T.a("".concat("https://askkyn.herokuapp.com","/db/askkyn")),K=function(){return D(H)},R=function(e,t){return M(H,e,t)},U=function(e,t){return P(H,e,t)},V=function(e,t){return function(e,t,n){console.log("here"),e.changes({live:!0,include_docs:!0,doc_ids:[t]}).on("change",n)}(H,e,t)},X=function(e,t){return G(H,e,t)},Y=function(e,t,n,c){return W(H,e,t,n,c)};Q.b.add(A.a,B.a,_.a);var Z=function(e){var t=e.Component,n=Object(o.a)(e,["Component"]),r=Object(c.useState)(!0),s=Object(i.a)(r,2),a=s[0],l=s[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(t,Object(u.a)(Object(u.a)({},n),{},{finishedLoading:function(e){l(!1),e&&Object(j.b)("/error/".concat(e))}})),Object(x.jsx)(b.a,{show:a,keyboard:!1,backdrop:"static",size:"sm",centered:!0,children:Object(x.jsx)(b.a.Body,{children:Object(x.jsx)(L.Grid,{})})})]})},$=function(e){var t=Object.assign({},e);return Object(x.jsx)(Z,Object(u.a)({},t))},ee=function(){return Object(x.jsxs)("div",{id:"main",children:[Object(x.jsx)(l.a,{children:Object(x.jsxs)(l.a.Brand,{href:"/",children:[Object(x.jsx)("img",{alt:"",src:"./logo.webp",width:"42",height:"42",className:"d-inline-block align-top"})," Askkyn"]})}),Object(x.jsxs)(j.a,{children:[Object(x.jsx)($,{default:!0,path:"default",Component:m,create:K,join:R}),Object(x.jsx)($,{path:"session/:sessionId/questionnaire",Component:q,db:H,submit:U}),Object(x.jsx)($,{path:"session/:sessionId/summary",Component:E,db:H,activateQuestion:X,subscribeChanges:V}),Object(x.jsx)($,{path:"session/:sessionId/answers/:username",Component:I,db:H,answerQuestion:Y,subscribeChanges:V})]})]})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(83);a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(ee,{})}),document.getElementById("root")),te()}},[[84,1,2]]]);
//# sourceMappingURL=main.5ff1571a.chunk.js.map