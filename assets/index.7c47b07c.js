var t,e,n,r,o,i;t=function(t,e,n){var r,o;return o=(r=document.createElement("canvas")).getContext("2d"),r.setAttribute("width",e),r.setAttribute("height",n),o.fillStyle="#FFFFFF",o.fillRect(0,0,e,n),t.appendChild(r),r},e=function(t,e,n,r,o=90){var i,l,a,u,f,c;for(i=2*Math.PI/10,c=[n,r],u=new Path2D,l=11;0!==l;)f=o*(l%2+1)/2,a=i*l,u.lineTo(f*Math.sin(a)+c[0],f*Math.cos(a)+c[1]),l--;return t.fillStyle=e,t.fill(u),u.closePath(),{path:u,color:e}},i=function(t,e,n){return t.addEventListener("mousemove",(r=>{var o,i;for(o=n.length-1,i=!1;o>=0;){if(e.isPointInPath(n[o].path,r.offsetX,r.offsetY)){i=!0;break}o--}return t.style.cursor=i?"pointer":"default"}))},r=function(t,e){var n,r,o;return r=t.getContext("2d"),o=t.getAttribute("width"),n=t.getAttribute("height"),r.fillStyle=e,r.fillRect(0,0,o,n)},o=function(t,e,n,o){return t.addEventListener("mousedown",(t=>{var i,l,a;for(a=o.length-1,i=-1;a>=0;){if(n.isPointInPath(o[a].path,t.offsetX,t.offsetY)){i=a;break}a--}return l="#FFFFFF",i>=0&&(l=o[i].color),r(e,l)}))},n=function(t,n){var r,l,a,u,f;return document.getElementById("app"),a=t.getContext("2d"),l=["red","blue","green","yellow","black"],f=function(){var t,n,o;for(o=[],u=t=0,n=l.length;t<n;u=++t)r=l[u],o.push(e(a,r,100+u%3*198,u>2?370:180));return o}(),i(t,a,f),o(t,n,a,f)},function(){var e,r,o;r=document.getElementById("app"),e=t(r,600,600),o=t(r,600,50),n(e,o)}();
