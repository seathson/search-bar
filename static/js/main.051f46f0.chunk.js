(this["webpackJsonprt-app"]=this["webpackJsonprt-app"]||[]).push([[0],{48:function(e,t,n){},53:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),i=n(22),s=n.n(i),a=(n(48),n(9));n(53);var o=function(){for(var e=[],t=0;t<50;t++){var n=Math.floor(4+4*Math.random()),r=Math.floor(1+2*Math.random()),i={left:Math.floor(1+98*Math.random())+"%",animationDuration:Math.floor(10+5*Math.random())+"s",animationDelay:Math.floor(0+10*Math.random())+"s",filter:"blur(".concat(r,"px)")},s={width:n+"px",height:n+"px"};e.push(Object(c.jsx)("div",{className:"snow_container",style:i,children:Object(c.jsx)("div",{className:"snow",style:s})},t))}return e},u=n(5),l=n(10),h=n(29),j=n(30);var _=function(e){return Object(c.jsx)("div",{className:"burgerMenuItem__container",children:e.menuItems.map((function(e){return Object(c.jsxs)("div",{className:"burgerMenuItem__item",children:[Object(c.jsx)("div",{className:"burgerMenuItem__text",children:e.text}),Object(c.jsx)("div",{className:"burgerMenuItem__change",children:e.change})]},e.id)}))})},b=n(42),d=n.n(b);var m=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),i=n[0],s=n[1],a=Object(r.useState)(null),o=Object(l.a)(a,2),u=o[0],h=o[1];function j(e){var t=(new Date).getTime();u+500<t&&!1!==e?(h(t),s(!i)):u+500<t&&!1===e&&s(e)}return Object(c.jsx)("div",{className:"burgerMenu",children:Object(c.jsxs)(d.a,{onOutsideClick:function(){return j(!1)},children:[Object(c.jsx)("div",{className:"burgerMenu__container",onClick:j,children:Object(c.jsx)("div",{className:i?e.mode?"burgerMenu__switcher burgerMenu__switcher_open":"burgerMenu__switcher burgerMenu__switcher_night burgerMenu__switcher_open":e.mode?"burgerMenu__switcher":"burgerMenu__switcher burgerMenu__switcher_night",children:Object(c.jsx)("i",{})})}),Object(c.jsx)("div",{style:i?{visibility:"visible"}:{visibility:"hidden"},className:i?e.mode?"burgerMenu__content burgerMenu__content_open":"burgerMenu__content burgerMenu__content_night burgerMenu__content_open":e.mode?"burgerMenu__content":"burgerMenu__content burgerMenu__content_night",children:Object(c.jsx)(_,{menuItems:e.menuItems})})]})})},O="APP/CHANGE_THEME",f="APP/CHANGE_EFFECT";function g(){return{type:f}}var v=n(19);var x=function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),i=n[0],s=n[1],o=Object(a.b)(),u=Object(v.b)({d:e.mode?"M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z":"M3.5 6C3.5 9.31371 6 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C6 0 3.5 2.68629 3.5 6Z",fill:e.mode?"#ffdd00":"#663ecf"}),h=Object(v.b)({delay:e.mode?700:300,transform:e.mode?"rotate(0deg)":"rotate(320deg)"});function j(){var e=(new Date).getTime();i+1e3<e&&(s(e),o({type:O}))}return Object(c.jsx)("div",{className:"iconMode",children:Object(c.jsx)(v.a.svg,{className:"iconMode",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"200px",height:"200px",viewBox:"-0.5 -0.5 13 13",fill:"none",onClick:function(){return j()},style:h,children:Object(c.jsx)(v.a.path,{d:u.d,fill:u.fill})})})};var p=function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),i=n[0],s=n[1],o=Object(a.b)();return Object(r.useEffect)((function(){window.visualViewport.width<1030&&setTimeout((function(){return o(g())}))}),[]),Object(c.jsx)("div",{className:"iconEffect",children:Object(c.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 12 12",onClick:function(){var e=(new Date).getTime();i+500<e&&(s(e),o(g()))},children:[Object(c.jsx)("path",{className:"st1",fill:e.effect?"#4CD964":"#a3a3a3",style:{transition:".5s",transitionProperty:"fill"},d:"M9.06,8.74H2.94C1.43,8.74,0.2,7.51,0.2,6v0c0-1.51,1.23-2.74,2.74-2.74h6.12c1.51,0,2.74,1.23,2.74,2.74v0\r C11.8,7.51,10.57,8.74,9.06,8.74z"}),Object(c.jsx)("circle",{className:"st0",cx:e.effect?"9.06":"2.94",cy:"6",r:"2.35",fill:"white",style:{transition:".5s",transitionProperty:"cx"}})]})})};var w=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),i=n[0],s=n[1],a=Object(r.useState)(!1),o=Object(l.a)(a,2),u=o[0],_=o[1],b=[{id:1,text:"Theme",change:Object(c.jsx)(x,{mode:e.mode})},{id:2,text:"Effects",change:Object(c.jsx)(p,{effect:e.effect})}];function d(e){"Enter"!==e.code&&"click"!==e.type||(""!==i?window.location.href="https://www.google.com/search?q="+i:_(!0))}return Object(c.jsxs)("div",{className:e.mode?"search__container":"search__container search__container_night",children:[Object(c.jsx)("div",{className:"search__icon",onClick:d,children:Object(c.jsx)(h.a,{icon:j.a})}),Object(c.jsx)("input",{placeholder:"Enter your request",className:u?e.mode?"search__input search__input_empty":"search__input search__input_night search__input_empty":e.mode?"search__input":"search__input search__input_night",type:"text",name:"bar",value:i,onChange:function(e){s(e.target.value),_(!1)},onKeyPress:d}),Object(c.jsx)("div",{className:""===i?"search__cross search__cross_invisible":"search__cross",onClick:function(){return s("")},children:Object(c.jsx)(h.a,{icon:j.b})}),Object(c.jsx)(m,{menuItems:b,mode:e.mode})]})};var M=function(){var e=Object(a.c)((function(e){return e.theme.light})),t=Object(a.c)((function(e){return e.effect.snow}));return Object(c.jsx)("div",{className:e?"container":"container container_night",children:Object(c.jsxs)("div",{className:"search",children:[Object(c.jsx)("h1",{className:e?"search__title":"search__title search__title_night",children:"Search"}),Object(c.jsx)(w,{mode:e,effect:t})]})})};var N=function(){return Object(c.jsx)(u.c,{children:Object(c.jsx)(u.a,{path:"/",exact:!0,component:M})})};var y=function(){var e=Object(a.c)((function(e){return e.effect.snow}));return Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(N,{}),e?Object(c.jsx)(o,{}):""]})},C=(n(74),n(27)),E=n(11),I=n(15),S={snow:!0},T={light:!0},D=Object(E.b)({theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(I.a)(Object(I.a)({},e),{},{light:!e.light});default:return e}},effect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(I.a)(Object(I.a)({},e),{},{snow:!e.snow});default:return e}}}),k=Object(E.d)(D,Object(E.c)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));s.a.render(Object(c.jsx)(a.a,{store:k,children:Object(c.jsx)(C.a,{basename:"/search-bar",children:Object(c.jsx)(y,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.051f46f0.chunk.js.map