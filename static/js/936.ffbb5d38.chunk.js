"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{5357:function(e,t,r){r.d(t,{X:function(){return f}});var n=r(7689),a=r(1087),s="MoviesItem_moviesCard__section__f4ICH",c="MoviesItem_moviesCard__link__o0OWp",i="MoviesItem_moviesCard__img__gerAc",o="MoviesItem_moviesCard__info__9t+TG",u="MoviesItem_moviesCard__info_title__klCcO",p="MoviesItem_moviesCard__info_text__znEYC",h=r(184),f=function(e){var t=e.id,r=e.title,f=e.imagePath,v=e.vote,l=(0,n.TH)(),m=l.pathname,d=l.search,_="".concat(m).concat(d);return(0,h.jsx)("li",{className:s,children:(0,h.jsxs)(a.Link,{className:c,to:"/movies/".concat(t),state:{from:_},children:[(0,h.jsx)("img",{className:i,src:f,alt:r}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("h4",{className:u,children:r}),(0,h.jsx)("p",{className:p,children:v})]})]})})}},3524:function(e,t,r){r.d(t,{AG:function(){return s},MH:function(){return n},si:function(){return a}});var n="https://image.tmdb.org/t/p/w500",a="https://via.placeholder.com/100x150",s="https://placehold.jp/200x300.png"},4936:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(5861),a=r(9439),s=r(4687),c=r.n(s),i=r(2791),o=r(4390),u=r(7214),p=r(3524),h=r(5357),f="Home_nameMovies__pojce",v="Home_moviesList__cVzy4",l=r(184),m=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],m=(0,i.useState)(!1),d=(0,a.Z)(m,2),_=d[0],x=d[1];return(0,i.useEffect)((function(){function e(){return(e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.fetchTrendingMovies();case 3:t=e.sent,s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,x(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))).apply(this,arguments)}x(!0),function(){e.apply(this,arguments)}()}),[]),(0,l.jsxs)("main",{children:[(0,l.jsx)("h2",{className:f,children:"Trending today"}),_&&(0,l.jsx)(u.a,{}),(0,l.jsx)("ul",{className:v,children:r.map((function(e){var t=e.id,r=e.title,n=e.poster_path,a=e.vote_average;return(0,l.jsx)(h.X,{id:t,title:r,imagePath:n?p.MH+n:p.si,vote:a?a.toFixed(1):"No Vote"},t)}))})]})}},4390:function(e,t,r){var n=r(5861),a=r(4687),s=r.n(a),c=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"b0e0648964ab116875dee356a1ceb23b",language:"en-US"}});function i(){return(i=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day");case 2:if(t=e.sent,(r=t.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies.");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie?query=".concat(t));case 2:if(r=e.sent,(n=r.data.results).length){e.next=6;break}throw new Error("Sorry, there are no movies matching your search query. Please try again.");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/credits"));case 2:if(r=e.sent,(n=r.data.cast).length){e.next=6;break}throw new Error("Not found cast...");case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={fetchTrendingMovies:function(){return i.apply(this,arguments)},fetchMovieById:function(e){return o.apply(this,arguments)},fetchSearchMovies:function(e){return u.apply(this,arguments)},fetchMovieCredits:function(e){return p.apply(this,arguments)},fetchMovieReviews:function(e){return h.apply(this,arguments)}};t.Z=f}}]);
//# sourceMappingURL=936.ffbb5d38.chunk.js.map