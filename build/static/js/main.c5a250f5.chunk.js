(this.webpackJsonphackernews_clone=this.webpackJsonphackernews_clone||[]).push([[0],{180:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(54),o=a.n(r),l=(a(63),a(27)),i=a(26),s=a(25),u=a.n(s),m=a(55),d=a(15),p=(a(29),a(56)),f=a.n(p),g=function(e){var t=e.data,a=e.action,n=e.hide;return c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",{style:{backgroundColor:"#ff6600",color:"#F4F4ED",textAlign:"left"}},c.a.createElement("th",null,"Comments"),c.a.createElement("th",null,"Vote Count"),c.a.createElement("th",null,"UpVote"),c.a.createElement("th",null,"News Detalis"))),c.a.createElement("tbody",null,t.map((function(e,t){var r=null!=e.url?e.url.indexOf("/",8):0,o=new Date;return c.a.createElement("tr",{key:t,className:"items"},c.a.createElement("td",{style:{color:"#292E30",fontWeight:800}},void 0===e.num_comments?0:e.num_comments),c.a.createElement("td",{style:{color:e.points<70?"#292E30":e.points>100?"#FE6723":"#AC4B22",fontWeight:800}},e.points),c.a.createElement("td",null,c.a.createElement("a",{onClick:function(t){return a(e.id)},value:"vote"},c.a.createElement("div",{className:"votearrow"}))),c.a.createElement("td",{className:"title",style:{textAlign:"left"}},c.a.createElement("a",{className:"head"},e.title),c.a.createElement("a",{href:"".concat(e.url),className:"k"},"(",null!=e.url?e.url.slice(8,r):null,")"),c.a.createElement("span",{className:"k"},"by")," ",c.a.createElement("a",{className:"auth"},e.author),c.a.createElement("span",{className:"k"},Math.round((o.getTime()-new Date(e.created_at).getTime())/36e5)," ","hours ago"),c.a.createElement("a",{style:{color:"#000000"},value:"hide",onClick:function(){return n(e.id)}},c.a.createElement("span",{className:"s"},"["),"hide",c.a.createElement("span",{className:"s"},"]"))))}))))},E=a(57),h=function(e){var t=e.info,a=[],n=[];t.map((function(e){a.push(e.id)})),t.map((function(e){n.push(e.points)}));var r={labels:a,datasets:[{data:n,fill:!1,borderColor:"#24669A",pointBackgroundColor:"#24669A"}]};return c.a.createElement("div",{className:"chart"},c.a.createElement(E.Line,{data:r,height:300,width:500,options:{maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{gridLines:{drawOnChartArea:!1},type:"category"}]},legend:{display:!1}}}))},v=function(e){var t=e.next,a=e.prev;return c.a.createElement("div",{className:"action"},c.a.createElement("div",null,c.a.createElement("a",{onClick:a},"Previous")),c.a.createElement("div",{id:"sep"}),c.a.createElement("div",null,c.a.createElement("a",{onClick:t},"Next")))};var b=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),s=Object(d.a)(o,2),p=s[0],E=s[1],b=Object(n.useState)(0),N=Object(d.a)(b,2),y=N[0],O=N[1];Object(n.useEffect)((function(){k(0)}),[]);var S=function(e,t){var a=[];e.map((function(e){a.push({id:e.objectID,points:e.points,url:e.url,num_comments:e.num_comments,created_at:e.created_at,author:e.author,title:e.title})})),"undefined"!==typeof Storage&&localStorage.setItem("page-".concat(t),JSON.stringify(a))},w=function(e){var t=localStorage.getItem("page-".concat(e));t=JSON.parse(t),r(t)},k=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat("http://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=10","&page=").concat(t)).then((function(e){E(e.data.nbPages),null===localStorage.getItem("page-".concat(t))?(S(e.data.hits,t),w(t)):w(t)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"base"},c.a.createElement(g,{data:a,action:function(e){var t=localStorage.getItem("page-".concat(y)),a=(t=t?JSON.parse(t):[]).findIndex((function(t){return t.id==e})),n=Object(i.a)(t);n[a]=Object(l.a)(Object(l.a)({},n[a]),{},{points:n[a].points+1}),"undefined"!==typeof Storage&&localStorage.setItem("page-".concat(y),JSON.stringify(n)),r(n)},hide:function(e){var t=localStorage.getItem("page-".concat(y)),a=((t=t?JSON.parse(t):[]).findIndex((function(t){return t.id==e})),Object(i.a)(t));a=a.filter((function(t){return t.id!==e})),"undefined"!==typeof Storage&&localStorage.setItem("page-".concat(y),JSON.stringify(a)),r(a)}}),c.a.createElement(v,{next:function(){y+1<p&&(k(y+1),O(y+1))},prev:function(){y-1>=0&&(O(y-1),k(y-1))}}),c.a.createElement("div",{id:"bar"}),c.a.createElement("div",{id:"container"},c.a.createElement("div",{id:"vote"},"Votes"),c.a.createElement(h,{info:a})),c.a.createElement("div",{id:"id"},"ID"),c.a.createElement("div",{id:"bar"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){},58:function(e,t,a){e.exports=a(180)},63:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.c5a250f5.chunk.js.map