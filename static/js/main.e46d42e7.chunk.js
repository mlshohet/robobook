(this.webpackJsonprobobook=this.webpackJsonprobobook||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),c=n.n(r),i=n(7),a=n.n(i),s=n(8),l=n(2),u=n(16),h=n(17),d=(n(28),n(3)),b=n(4),j=n(6),f=n(5),p=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"tc f1",children:"ROBOBOOK"})})}}]),n}(r.Component),O=function(e){var t=e.name,n=e.email;return Object(o.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(o.jsx)("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?size=200x200")}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:t}),Object(o.jsx)("p",{children:n})]})]})},v=function(e){var t=e.robots;return Object(o.jsxs)("div",{children:[" ",t.map((function(e,n){return Object(o.jsx)(O,{name:t[n].name,email:t[n].email},n)}))]})},g=function(e){e.searchBox;var t=e.searchChange;return Object(o.jsx)("div",{children:Object(o.jsx)("input",{"aria-label":"Search Robots",className:"pa3 mb2",type:"search",placeholder:"search robots",onChange:t})})},m=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",height:"500px"},children:e.children})},w=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(b.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"Oops, there was an error"}):this.props.children}}]),n}(r.Component),x=function(e){var t=e.clock;return Object(o.jsx)("div",{className:"tc ma2",children:Object(o.jsx)("h1",{children:t})})},y=(n(29),"CHANGE_SEARCH_FIELD"),k="REQUEST_ROBOTS_PENDING",R="REQUEST_ROBOTS_SUCCESS",S="REQUEST_ROBOTS_FAILED",C=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={clock:""},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;return this.props.onRequestRobots(),fetch("https://worldtimeapi.org/api/ip").then((function(e){return e.json()})).then((function(t){var n=t.datetime;e.setState({clock:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.isPending,c=e.robots.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r?Object(o.jsx)("h1",{className:"tc",children:"LOADING..."}):Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)(p,{}),Object(o.jsx)(g,{searchChange:n}),Object(o.jsx)(w,{children:Object(o.jsx)(m,{children:Object(o.jsx)(v,{robots:c})})}),Object(o.jsx)(x,{clock:this.state.clock})]})}}]),n}(c.a.Component),E=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,ispending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:y,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:k}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:R,payload:t})})).catch((function(t){return e({type:S,payload:t})}))}))}}}))(C),N=n(13),A={searchField:""},P={isPending:!1,robots:[],error:""},B=(n(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(u.createLogger)();var T=Object(l.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(N.a)(Object(N.a)({},e),{},{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case k:return Object.assign({},e,{isPending:!0});case R:return Object.assign({},e,{robots:t.payload,isPending:!0});case S:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),U=Object(l.d)(T,Object(l.a)(h.a));a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(s.a,{store:U,children:Object(o.jsx)(E,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robobook",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robobook","/service-worker.js");B?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.e46d42e7.chunk.js.map