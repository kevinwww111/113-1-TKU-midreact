(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,a){e.exports=a(17)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r);a(12),a(13);var c=()=>l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"Movie Info"),l.a.createElement("nav",null,l.a.createElement("a",{href:"#movies"},"Movies"),l.a.createElement("a",{href:"#about"},"About")));var i=e=>{let{movies:t,onMovieSelect:a}=e;return l.a.createElement("div",{className:"movie-list"},0===t.length?l.a.createElement("p",null,"No movie available"):t.map(e=>l.a.createElement("div",{key:e.id,className:"movie-item"},l.a.createElement("img",{src:`https://image.tmdb.org/t/p/w500${e.posterPath}`,alt:e.title,style:{width:200},onClick:()=>a(e)}),l.a.createElement("h3",null,e.title))))};a(14);var s=e=>{let{title:t,releaseDate:a,overview:n,posterPath:r,onClose:o}=e;return l.a.createElement("div",{className:"movie-detail"},l.a.createElement("button",{className:"close-btn",onClick:o},"X"),l.a.createElement("h2",null,t),l.a.createElement("img",{src:`https://image.tmdb.org/t/p/w500/${r}`,alt:t,className:"movie-poster"}),l.a.createElement("p",null,l.a.createElement("strong",null,"Release Date:")," ",a),l.a.createElement("p",null,n))};a(15);var m=()=>l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," Movie Info. All rights reserved."),l.a.createElement("p",null,"Powered by ",l.a.createElement("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noopener noreferrer"},"TMDB")));a(16);var u=()=>{const[e,t]=Object(n.useState)([]),[a,r]=Object(n.useState)(null),[o,u]=Object(n.useState)(!1);return l.a.createElement("div",{className:"App"},l.a.createElement(c,null),l.a.createElement("button",{className:"upcoming-button",onClick:async()=>{console.log("Fetching upcoming movies...");const e=await(async()=>{try{const t=await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=a1b4e5017eaecc98bb96575c12d1c4d3&language=en-US&page=1");return(await t.json()).results.map(e=>({id:e.id,title:e.title,releaseDate:e.release_date,overview:e.overview,posterPath:e.poster_path}))}catch(e){return console.error("Error fetching upcoming movies:",e),[]}})();t(e),u(!0)}},"Show Upcoming Movies"),a?l.a.createElement(s,{title:a.title,releaseDate:a.releaseDate,overview:a.overview,posterPath:a.posterPath,onClose:()=>r(null)}):l.a.createElement(i,{movies:e,onMovieSelect:e=>r(e)}),l.a.createElement(m,null))};var v=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=t;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),v()}],[[3,1,2]]]);
//# sourceMappingURL=main.33b86a8f.chunk.js.map