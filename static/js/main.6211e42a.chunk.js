(this["webpackJsonpwhaler-ui"]=this["webpackJsonpwhaler-ui"]||[]).push([[0],{95:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),i=n(35),u=n.n(i),l=n(5),o=n.n(l),d=n(36),s=n(7),f=n(37),h=n.n(f),v=n(15),b=n(42),j=n(38),x=n.n(j),O=n(22),p=n(39),g=function(e,t,n){var a=v.a().id((function(e){return e.id})).parentId((function(e){return e.id.substring(0,e.id.lastIndexOf("/"))}))(e);a.each((function(e){e.children&&(e.data.value=0)}));var r=a.sum((function(e){return 1e3*e.value})).sort((function(e,t){return t.value-e.value}));return v.b().size([t,n]).round(!0)(r)},y=function(e,t){return"(".concat(x()(e.value),") ").concat(t?Object(O.basename)(e.data.id):e.data.id)},m=new(n.n(p).a),w=function(e){return m.hex(Object(O.extname)(e))},k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgba(0,0,0,0.2)",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.3,r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];t.save(),t.beginPath(),t.rect(e.x0+a,e.y0+a,e.x1-e.x0-2*a,e.y1-e.y0-2*a),r&&(t.fillStyle=w(e.data.id),t.fill()),t.lineWidth=a,t.strokeStyle=n,t.stroke(),t.restore()},S=function(e,t){e.leaves().forEach((function(e){k(e,t)}))},C=function(e){var t=e.leaves(),n=Object(b.a)(new Array(e.x1-e.x0)).map((function(t){return new Array(e.y1-e.y0)}));return t.forEach((function(e){for(var t=e.y0;t<e.y1;t++)for(var a=e.x0;a<e.x1;a++)n[t][a]=e})),n};var L=function(e){var t=e.data,n=e.pixelLookup,i=(e.hovered,e.setHovered),u=e.selected,l=e.setSelected,o=e.height,d=e.width,f=Object(r.useRef)(null),h=c.a.useState(null),v=Object(s.a)(h,2),b=v[0],j=v[1],x=function(e){var t=Object(r.useRef)(null);return Object(r.useEffect)((function(){t.current=e})),t.current}(u);Object(r.useEffect)((function(){b&&(x&&S(x,b),u&&k(u,b,"yellow",2,!1))}),[x,u,b]),Object(r.useEffect)((function(){if(f.current){var e=f.current.getContext("2d");e&&j(e)}b&&t&&S(t,b)}),[b,t,o,d]);var O=function(e){var t=f.current,a=t.getBoundingClientRect(),r=t.width/a.width,c=t.height/a.height,i=Math.round((e.clientX-a.left)*r),u=Math.round((e.clientY-a.top)*c),l=n[u];if(l)return l[i]};return Object(a.jsx)("div",{style:{textAlign:"center"},children:Object(a.jsx)("canvas",{onClick:function(e){l(O(e)||null)},onMouseMove:function(e){i(O(e)||null)},id:"canvas",ref:f,width:d,height:o,style:{border:"2px solid #000",cursor:"pointer"}})})},E=c.a.memo(L),F=n(4),I=n(23),M=n(6),T=n(41),W={fontFamily:"Courier New"},B=function(e){var t=o.a.mark(f),n=e.data,c=e.height,i=e.width,u=e.selected,l=e.setSelected,d=Object(r.useRef)(null);Object(r.useEffect)((function(){var e;d.current&&u&&(null===(e=d.current)||void 0===e||e.recomputeTree(Object(M.a)({},n.data.id,{open:!0,subtreeCallback:function(e,t){e.isOpen=u.data.id.startsWith(e.data.id)&&u.data.id!==e.data.id}})),d.current.scrollToItem(u.data.id))}),[u,n]);var s=function(e){return{data:{id:e.data.id,isLeaf:void 0===e.children,isOpenByDefault:null===e.parent,name:y(e,!0),nestingLevel:e.depth,isSelected:!!u&&u.data.id===e.data.id,node:e},node:e}};function f(){var e,a,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(n);case 2:return void(t.next=5);case 5:e=t.sent,a=Object(F.a)(e.node.children||[]),t.prev=7,a.s();case 9:if((r=a.n()).done){t.next=15;break}return c=r.value,t.next=13,s(c);case 13:t.next=9;break;case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(7),a.e(t.t0);case 20:return t.prev=20,a.f(),t.finish(20);case 23:t.next=2;break;case 25:case"end":return t.stop()}}),t,null,[[7,17,20,23]])}return Object(a.jsx)(T.a,{treeWalker:f,itemSize:20,height:c,width:i,ref:d,children:function(e){var t=e.data,n=t.isLeaf,r=t.name,c=t.nestingLevel,i=t.isSelected,u=t.node,o=e.isOpen,s=e.style;e.setOpen;return Object(a.jsxs)("div",{style:Object(I.a)(Object(I.a)({},s),{},{alignItems:"center",display:"flex",marginLeft:30*c+(n?48:0),fontWeight:i?"bold":"normal",backgroundColor:i?"yellow":"white"}),children:[!n&&Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"button",onClick:function(){var e;null===(e=d.current)||void 0===e||e.recomputeTree(Object(M.a)({},u.data.id,{open:!o,subtreeCallback:function(e,t){e!==t&&(e.isOpen=!1)}}))},style:W,children:o?"V":">"})}),Object(a.jsx)("div",{onClick:function(){return l(u)},style:{marginLeft:10,cursor:"pointer",color:"blue",textDecoration:"underline"},children:r})]})}})},D=c.a.memo(B),R=n(40),A="du.txt",P=function(){var e=c.a.useState(null),t=Object(s.a)(e,2),n=t[0],i=t[1],u=c.a.useState(null),l=Object(s.a)(u,2),f=l[0],b=l[1],j=c.a.useState(null),x=Object(s.a)(j,2),O=x[0],p=x[1],m=c.a.useState(null),w=Object(s.a)(m,2),k=w[0],S=w[1],L=c.a.useState(null),F=Object(s.a)(L,2),I=F[0],M=F[1];return Object(r.useEffect)((function(){console.log(I)}),[I]),Object(r.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(A);case 2:if(200===(t=e.sent).status){e.next=6;break}return p("Failed to get ".concat(A," with status ").concat(t.status)),e.abrupt("return");case 6:n=t.data,(!(null===(a=v.c("value\tid\n".concat(n)))||void 0===a?void 0:a.length)||a.length<2)&&p("failed to find tsv formatted data in ".concat(A)),r=g(a,700,700),b(C(r)),i(r);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),O?Object(a.jsx)(a.Fragment,{children:O}):n&&f?Object(a.jsx)(R.a,{style:{height:"calc(100vh - 20px)",width:"calc(100vw - 20px)"},children:function(e){e.height;var t=e.width;return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(a.jsxs)("div",{style:{display:"flex"},children:[Object(a.jsx)(D,{data:n,height:700,width:t-50,selected:I,setSelected:M}),Object(a.jsx)(E,{data:n,pixelLookup:f,selected:I,setSelected:M,hovered:null,setHovered:S,height:700,width:700})]}),Object(a.jsx)("div",{style:{fontWeight:"bold"},children:I&&y(I)}),Object(a.jsx)("div",{children:k&&y(k)})]})}}):Object(a.jsx)(a.Fragment,{children:"Loading"})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};u.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),z()}},[[95,1,2]]]);
//# sourceMappingURL=main.6211e42a.chunk.js.map