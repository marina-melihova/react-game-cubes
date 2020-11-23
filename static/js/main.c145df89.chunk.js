(this["webpackJsonpreact-game-cubes"]=this["webpackJsonpreact-game-cubes"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),s=c(10),a=c.n(s),i=c(2),o=c(18),l=c(3),u=c(4),d=c(5),b=c(15),j=c.n(b),m=function(e){return e.game.phase},f=function(e){return e.game.cubes},O=function(e){return e.game.points},h=function(e){return e.game.seconds},x=c(12),p={phase:Object(u.b)({name:"game",initialState:!1,reducers:{toggleStart:function(e){return!e}}}),cubes:Object(u.b)({name:"game",initialState:[],reducers:{initCubes:function(e,t){for(var c=t.payload,n=[];n.length!==c;){var r=Math.floor(100*Math.random());n.includes(r)||e.includes(r)||n.push(r)}return[].concat(Object(x.a)(e),n)},resetGame:function(){return[]},removeCube:function(e,t){var c=t.payload;return e.filter((function(e){return e!==c}))}}}),points:Object(u.b)({name:"game",initialState:0,reducers:{addPoint:function(e,t){return e+t.payload},resetGame:function(){return 0}}}),seconds:Object(u.b)({name:"game",initialState:-1,reducers:{startTimer:function(){return 60},updateTime:function(e){return e-1},resetGame:function(){return-1}}})},g=function(e){return e.stats.score},v={score:Object(u.b)({name:"stats",initialState:[],reducers:{inputName:function(e,t){var c=t.payload;return[].concat(Object(x.a)(e),[c])}}})},N={key:"game",storage:j.a},C=Object(l.c)({phase:p.phase.reducer,cubes:p.cubes.reducer,points:p.points.reducer,seconds:p.seconds.reducer}),y=Object(d.g)(N,C),w={key:"stats",storage:j.a,whitelist:["score"]},F=Object(l.c)({score:v.score.reducer}),S=Object(d.g)(w,F),E=Object(u.a)({reducer:{game:y,stats:S},middleware:Object(u.c)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})}),k=Object(d.h)(E),M=c(6),T=function(e){var t=e.closeModal,c=Object(i.c)((function(e){return O(e)})),s=Object(i.b)(),a=Object(r.useState)(""),o=Object(M.a)(a,2),l=o[0],u=o[1];return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={name:l,score:c};s(v.score.actions.inputName(n)),t()},className:"p-5",children:[Object(n.jsxs)("div",{className:"mb-5",children:["Your score: ",Object(n.jsx)("span",{children:c})]}),Object(n.jsxs)("div",{className:"form-group d-flex",children:[Object(n.jsx)("label",{htmlFor:"username",className:"mr-3 mb-5",children:"Name"}),Object(n.jsx)("input",{id:"username",name:"username",value:l,onChange:function(e){var t=e.target;u(t.value)},type:"text",className:"form-control"})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary mx-auto",children:"Save"})]})},L=c(19),P=c(20);function A(){var e=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgb(128, 128, 128, 0.65);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return A=function(){return e},e}var G=function(e){var t=e.children,c=e.closeModal,s=Object(r.useRef)(),a=Object(r.useCallback)((function(e){var t=e.target;s.current===t&&c()}),[c]),i=Object(r.useCallback)((function(e){"Escape"===e.code&&c()}),[c]);return Object(r.useEffect)((function(){return window.addEventListener("keydown",i),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",i),document.body.style.overflow="auto"}}),[i]),Object(n.jsx)(B,{ref:s,onClick:a,children:Object(n.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(n.jsx)("div",{className:"modal-content",children:t})})})},B=P.a.div(A()),I=function(){var e=Object(i.c)((function(e){return m(e)})),t=Object(i.c)((function(e){return O(e)})),c=Object(i.c)((function(e){return f(e)})),s=Object(i.c)((function(e){return h(e)})),a=Object(i.b)(),o=Object(r.useState)(!1),l=Object(M.a)(o,2),u=l[0],d=l[1],b=function(){d((function(e){return!e}))};return Object(r.useEffect)((function(){var t;return s>0&&e&&(t=setTimeout((function(){a(p.seconds.actions.updateTime())}),1e3)),!s&&e&&(a(p.phase.actions.toggleStart()),d(!0)),function(){clearTimeout(t)}}),[e,s]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("header",{className:"jumbotron jumbotron-fluid px-5 py-3",children:Object(n.jsxs)("div",{className:"row justify-content-between",children:[Object(n.jsxs)("div",{className:"col-12 col-md-8",children:[Object(n.jsx)("h1",{className:"display-6 mb-0",children:"Remove cubes"}),Object(n.jsxs)("div",{className:"d-flex align-items-center justify-content-between text-center",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{type:"button",className:"btn btn-primary mr-2 mr-md-3",onClick:function(){c.length||a(p.cubes.actions.initCubes(35)),-1===s&&a(p.seconds.actions.startTimer()),a(p.phase.actions.toggleStart())},disabled:!s,children:e?"PAUSE":"START"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){a(p.seconds.actions.resetGame()),e&&a(p.phase.actions.toggleStart()),a(p.points.actions.resetGame()),a(p.cubes.actions.resetGame()),a(p.cubes.actions.initCubes(35))},children:"NEW GAME"})]}),Object(n.jsxs)("div",{className:"d-inline-flex flex-column",children:[Object(n.jsx)("span",{className:"mb-2",children:"Points"}),Object(n.jsx)("span",{className:"border border-secondary rounded-lg bg-white p-2",children:t})]}),Object(n.jsxs)("div",{className:"d-inline-flex flex-column",children:[Object(n.jsx)("span",{className:"mb-2",children:"Time left"}),Object(n.jsxs)("span",{className:"border border-secondary rounded-lg bg-white p-2",children:[60===s||-1===s?1:0," :"," ",60===s||-1===s?"00":String(s).padStart(2,"0")]})]})]})]}),Object(n.jsx)("div",{className:"d-none d-md-block col-md-3 pt-2 pt-lg-4",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit"})]})}),u&&Object(n.jsx)(G,{closeModal:b,children:Object(n.jsx)(T,{closeModal:b})})]})},Y=c(41),K=function(e){var t=e.cell,c=Object(i.b)(),s=Object(i.c)((function(e){return m(e)})),a=Object(i.c)((function(e){return f(e)})),o=Object(i.c)((function(e){return h(e)})),l=Object(r.useState)(R.EMPTY),u=Object(M.a)(l,2),d=u[0],b=u[1],j=Object(r.useState)("transparent"),O=Object(M.a)(j,2),x=O[0],g=O[1],v=Object(r.useState)(0),N=Object(M.a)(v,2),C=N[0],y=N[1];Object(r.useEffect)((function(){d===R.CLICKABLE?(g(z[Math.floor(15*Math.random())]),y(Math.floor(2*Math.random()))):(g("transparent"),y(0))}),[d]),Object(r.useEffect)((function(){a.includes(t)&&-1!==o?b(R.CLICKABLE):b(R.EMPTY)}),[o,a]);return Object(n.jsx)("div",{className:"flex-grow-1 d-flex align-items-center justify-content-center",children:Object(n.jsx)("div",{"data-index":t,style:{backgroundColor:x,width:C?"50%":"100%",height:C?"50%":"100%"},onClick:function(e){var t=Number(e.target.dataset.index);if(a.includes(t)){var n=1;if(C&&(n=5),s){switch(x){case"#FF0000":c(p.points.actions.addPoint(n+5));break;case"#00CC00":c(p.points.actions.addPoint(n+3));break;default:c(p.points.actions.addPoint(n))}c(p.cubes.actions.removeCube(t));var r=Math.floor(3*Math.random());c(p.cubes.actions.initCubes(r))}}}})})},R={EMPTY:0,CLICKABLE:1},z=["#FFCC00","#663300","#CC3300","#FF0000","#CC6666","#990033","#9933CC","#660099","#0000FF","#006666","#33CCFF","#FF9900","#00FFFF","#00CC00","#99FF00"],J=function(){var e=[],t=[];return[0,1,2,3,4,5,6,7,8,9].forEach((function(c){[0,1,2,3,4,5,6,7,8,9].forEach((function(e){t[e]=10*c+e})),e.push(function(e,t){var c=e.map((function(e,t){return Object(n.jsx)(K,{cell:e},Object(Y.a)())}));return Object(n.jsx)("div",{className:"flex-grow-1 d-flex ",children:c},t)}(t,c))})),Object(n.jsx)("div",{className:"area d-flex flex-column mx-auto",children:e})},D=function(){var e=Object(i.c)((function(e){return g(e)}));return Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"#"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Score"})]},"header")}),Object(n.jsx)("tbody",{children:e.length>0&&e.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:t+1}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.score})]},Object(Y.a)())}))})]})},U=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12 col-lg-9 mb-5 mb-lg-0",children:Object(n.jsx)(J,{})}),Object(n.jsx)("div",{className:"col-12 col-lg-3",children:Object(n.jsx)(D,{})})]})})]})};c(39);a.a.render(Object(n.jsx)(i.a,{store:E,children:Object(n.jsx)(o.a,{loading:null,persistor:k,children:Object(n.jsx)(U,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c145df89.chunk.js.map