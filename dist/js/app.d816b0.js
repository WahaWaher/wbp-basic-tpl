!function(){"use strict";((e=500)=>{let t;t&&clearInterval(t);let n=0;const r=document.querySelector("#counter");r&&(r.innerHTML=n,t=setInterval((()=>{r.innerHTML=`... ${n}`,n+=1}),e))})(500)}();