var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{Z:()=>i});var n=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=0);var i=t.getContext("2d");i.fillStyle="#f00",i.fillRect(60*e,35*n,50,25)};const i=function(t){var e=document.querySelector(t);if(e){var i=document.createElement("canvas");i.width=e.clientWidth,i.height=i.width/16*9,e.appendChild(i),function(t){for(var e=0;e<2;e++)for(var i=0;i<10;i++)n(t,i,e)}(i),function(t,e){var n=t.getContext("2d");n.fillStyle="#f00",n.beginPath(),n.arc(e-2.5,t.height-80,5,0,2*Math.PI),n.fill()}(i,i.width/2),function(t,e){var n=t.getContext("2d");n.fillStyle="#f00",n.fillRect(e-50,t.height-40,100,10)}(i,i.width/2)}else alert("Container element not found")};var o=e.Z;export{o as default};