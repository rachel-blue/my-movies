(this["webpackJsonpmy-movies"]=this["webpackJsonpmy-movies"]||[]).push([[0],{25:function(e,t,a){},29:function(e,t,a){e.exports=a(49)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),m=a(9),s=a(10),i=(a(38),a(39),a(40),a(13)),o=a(6),u=a(14),E=a.n(u),f=(a(42),a(11)),v=a(12),b=function(e){var t=e.movies;return l.a.createElement("div",null,t.length>0?l.a.createElement("h2",null,"The titles below were found related to your search"):l.a.createElement("h2",null,"Sorry, we did not find any movies with that search term. Please try again. "),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center"},t.map((function(e){return l.a.createElement("div",{className:"my-4 mx-3 p-1 m-movielist__card",key:e.imdbID},l.a.createElement("div",{className:"m-movielist__poster-container"},l.a.createElement("img",{src:e.Poster,alt:"Movie Poster",className:"m-movielist__poster"})),l.a.createElement("h4",{className:"m-movielist__title p-2"},e.Title),l.a.createElement("a",{className:"mx-4 my-1",href:"/fav"},l.a.createElement(f.a,{className:"fa-3x fas fa-heart","data-fa-transform":"shrink-10 up-5",icon:v.a,id:"ticket"})))})))))};b.defaultProps={movies:[]};var p=Object(m.b)((function(e){return{movies:e.movies}}))(b);function h(e){return{type:"SET_MOVIES",movies:e}}a(25),a(46);var d=a(28);var _=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(o.f)();return Object(n.useEffect)((function(){})),l.a.createElement("div",null,l.a.createElement("form",{className:"form-inline my-2 my-lg-0",onSubmit:function(e){e.preventDefault(),""!==a&&c.push("/search/".concat(a))}},l.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",minLength:"3",value:a,onChange:function(e){r(e.target.value)}}),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))};var N=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-sm o-nav-bar__filmstrip"},l.a.createElement("a",{className:"o-nav-bar__ticket-logo mx-4 my-1",href:"/"},l.a.createElement(f.a,{className:"fa-4x fas fa-ticket-alt","data-fa-transform":"shrink-10 up-5",icon:v.b,id:"ticket"})),l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"o-nav-bar__nav-item"},l.a.createElement(i.b,{to:"/gallery",className:"nav-link",activeClassName:"chosen"},"Gallery")),l.a.createElement("li",{className:"o-nav-bar__nav-item"},l.a.createElement(i.b,{to:"/fav",className:"nav-link",activeClassName:"chosen"},"Favourites"))),l.a.createElement(_,null))};a(48);var y=function(){return l.a.createElement("div",{className:"card mb-3 bg-dark p-4"},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("a",{className:"navbar-brand",href:"/gallery"},l.a.createElement(f.a,{className:"fas fa-ticket-alt",icon:v.b})),l.a.createElement("div",{className:"card-body mx-4"},l.a.createElement("p",{className:"card-text o-footer__p-text"},"This is a footer, a place for feets."))))},w=Object(m.b)()((function(e){var t=e.dispatch;return Object(n.useEffect)((function(){(function(){var e;return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(fetch("http://www.omdbapi.com/?s=movies&i&apikey=44c3c47e"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}))})().then((function(e){var a=e.Search,n={},l=a.filter((function(e){return!n[e.imdbID]&&(n[e.imdbID]=!0,!0)}));t(h(l))}))}),[t]),l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("h1",null,"Movies"),l.a.createElement(p,null),l.a.createElement(y,null))})),g=Object(m.b)()((function(e){var t=e.dispatch,a=Object(o.g)().id;return Object(n.useEffect)((function(){(function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.awrap(fetch("http://www.omdbapi.com/?s=".concat(e,"&i&apikey=44c3c47e")));case 2:return t=a.sent,a.abrupt("return",t.json());case 4:case"end":return a.stop()}}))})(a).then((function(e){var a=e.Search;if(void 0!==a){var n={},l=a.filter((function(e){return!n[e.imdbID]&&(n[e.imdbID]=!0,!0)}));t(h(l))}else t(h([]))}))}),[t,a]),l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("h1",null,'Search: "',a,'"'),l.a.createElement(p,null),l.a.createElement(y,null))}));var O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,null),l.a.createElement("p",null,"This is the main Favourites page (heart).",l.a.createElement("br",null),"Fill in later with favourite movies list."),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement("p",null,"content"),l.a.createElement("br",null),l.a.createElement(y,null))};var S=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/fav"},l.a.createElement(O,null)),l.a.createElement(o.a,{path:"/search/:id"},l.a.createElement(g,null)),l.a.createElement(o.a,{path:"/"},l.a.createElement(w,null)),l.a.createElement(o.a,{path:"/gallery"},l.a.createElement(w,null)))))};var j=Object(s.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MOVIES":return t.movies;default:return e}}}),k=Object(s.c)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(l.a.createElement(m.a,{store:k},l.a.createElement(S,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7ef68355.chunk.js.map