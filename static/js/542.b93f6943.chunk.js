"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[542],{3524:function(e,t,r){r.d(t,{AG:function(){return s},MH:function(){return n},si:function(){return a}});var n="https://image.tmdb.org/t/p/w500",a="https://via.placeholder.com/100x150",s="https://placehold.jp/200x300.png"},6542:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(5861),a=r(9439),s=r(4687),i=r.n(s),c=r(2791),o=r(7689),u=r(1087),l=r(4390),h=r(9126),p="BackButton_back__link__jnbhr",d=r(184),v=function(e){var t,r,n=e.children,a=(0,o.TH)(),s=(0,c.useRef)(null!==(t=null===(r=a.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/");return(0,d.jsxs)(u.Link,{className:p,to:s.current,children:[(0,d.jsx)(h.And,{size:16}),n]})},f=r(3524),_="MovieDetails_details__container__BwpdQ",m="MovieDetails_details__img__DphXp",x="MovieDetails_details__info__rYCEi",w="MovieDetails_details__card__OWNbO",j="MovieDetails_details__container_nav__aOnWv",k="MovieDetails_details__nav_title__qqFFR",b="MovieDetails_details__nav_section__n8npK",g="MovieDetails_details__nav_link__K2Dsg",y=function(){var e=(0,o.UO)().movieId,t=(0,c.useState)([]),r=(0,a.Z)(t,2),s=r[0],h=r[1],p=(0,o.TH)(),y=p.pathname,M=p.search,N="".concat(y).concat(M);if((0,c.useEffect)((function(){function t(){return(t=(0,n.Z)(i().mark((function t(){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.fetchMovieById(Number(e));case 3:r=t.sent,h(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),!s)return null;var D=s.poster_path,Z=s.title,S=s.vote_average,B=s.overview,C=s.genres,E=s.release_date,O=D?f.MH+D:f.AG,R=E?E.slice(0,4):"No year";return(0,d.jsxs)("main",{children:[(0,d.jsx)(v,{children:"Go back"}),(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("img",{className:m,src:O,alt:Z,width:"250"}),(0,d.jsxs)("div",{className:x,children:[(0,d.jsxs)("h2",{children:[Z,(0,d.jsxs)("span",{children:["(",R,")"]})]}),(0,d.jsxs)("p",{children:["User Score ",Math.round(10*S),"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:B}),(0,d.jsx)("h4",{children:"Genres"}),(0,d.jsx)("ul",{className:w,children:null===C||void 0===C?void 0:C.map((function(e){var t=e.id,r=e.name;return(0,d.jsx)("li",{children:r},t)}))})]})]}),(0,d.jsxs)("div",{className:j,children:[(0,d.jsx)("h2",{className:k,children:"Additional infomation"}),(0,d.jsxs)("ul",{className:b,children:[(0,d.jsx)("li",{children:(0,d.jsx)(u.NavLink,{className:g,to:"cast",state:{from:N},children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.NavLink,{className:g,to:"reviews",state:{from:N},children:"Reviews"})})]})]}),(0,d.jsx)(c.Suspense,{fallback:null,children:(0,d.jsx)(o.j3,{})})]})}},4390:function(e,t,r){var n=r(5861),a=r(4687),s=r.n(a),i=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"b0e0648964ab116875dee356a1ceb23b",language:"en-US"}});function c(){return(c=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/movie/day");case 2:if(t=e.sent,(r=t.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies.");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie?query=".concat(t));case 2:if(r=e.sent,(n=r.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies matching your search query. Please try again.");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/credits"));case 2:if(r=e.sent,(n=r.data.cast).length){e.next=6;break}throw new Error("Not found cast...");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p={fetchTrendingMovies:function(){return c.apply(this,arguments)},fetchMovieById:function(e){return o.apply(this,arguments)},fetchSearchMovies:function(e){return u.apply(this,arguments)},fetchMovieCredits:function(e){return l.apply(this,arguments)},fetchMovieReviews:function(e){return h.apply(this,arguments)}};t.Z=p}}]);
//# sourceMappingURL=542.b93f6943.chunk.js.map