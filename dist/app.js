(()=>{var w=Object.create;var d=Object.defineProperty;var $=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty;var H=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var k=(t,e,i,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of v(e))!M.call(t,n)&&n!==i&&d(t,n,{get:()=>e[n],enumerable:!(l=$(e,n))||l.enumerable});return t};var C=(t,e,i)=>(i=t!=null?w(E(t)):{},k(e||!t||!t.__esModule?d(i,"default",{value:t,enumerable:!0}):i,t));var b=H(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.PowerGlitch=void 0;var u=()=>({backgroundColor:"transparent",hideOverflow:!1,timing:{duration:2*1e3,iterations:1/0},glitchTimeSpan:{start:.5,end:.7},shake:{velocity:15,amplitudeX:.4,amplitudeY:.4},slice:{count:6,velocity:15,minHeight:.02,maxHeight:.15,hueRotate:!0}}),c=(t,e)=>{let i=0;if(t.glitchTimeSpan){let n=t.glitchTimeSpan.start,r=t.glitchTimeSpan.end;if(e<n||e>r)return 0;let a=n+(r-n)/2;e<a?i=(e-n)/(a-n):i=(r-e)/(r-a)}else i=1;return(Math.random()-.5)*2*i},R=({minHeight:t,maxHeight:e,minWidth:i,maxWidth:l})=>{let n=Math.floor(Math.random()*((e-t)*100+1))+t*100,r=Math.floor(Math.random()*((l-i)*100+1))+i*100,a=Math.floor(Math.random()*(100-n)),o=Math.floor(Math.random()*(100-r));return{top:a,left:o,height:n,width:r}},x=({top:t,left:e,height:i,width:l})=>{let n=`${e+l}% ${t}%`,r=`${e+l}% ${t+i}%`,a=`${e}% ${t+i}%`,o=`${e}% ${t}%`;return`polygon(${n}, ${r}, ${a}, ${o})`},m=t=>Object.assign(Object.assign({},u().timing),{easing:`steps(${t}, jump-start)`}),O=t=>{if(!t.slice)throw new Error("Slice are not enabled");let e=Math.floor(t.slice.velocity*t.timing.duration/1e3)+1,i=[];for(let l=0;l<e;++l){let n=R({minHeight:t.slice.minHeight,maxHeight:t.slice.maxHeight,minWidth:1,maxWidth:1}),r=c(t,l/e)*30,a={};a.transform=`translate3d(${r}%, 0, 0)`,a.clipPath=x(n),t.slice.hueRotate&&(a.filter=`hue-rotate(${Math.floor(c(t,l/e)*360)}deg)`),i.push(a)}return{steps:i,timing:Object.assign(Object.assign({},m(e)),t.timing)}},T=t=>{if(!t.shake)return{steps:[],timing:m(1)};let e=Math.floor(t.shake.velocity*t.timing.duration/1e3)+1,i=[];for(let l=0;l<e;++l){let n=c(t,l/e)*t.shake.amplitudeX*100,r=c(t,l/e)*t.shake.amplitudeY*100,a={};a.transform=`translate3d(${n}%, ${r}%, 0)`,i.push(a)}return{steps:i,timing:Object.assign(Object.assign({},m(e)),t.timing)}},y=t=>{let e=[];if(e.push(T(t)),t.slice)for(let i=0;i<t.slice.count;++i)e.push(O(t));return e},f=(t,e,i,l)=>{let n=document.createElement("div");for(n.classList.add("layer"),n.style.backgroundColor=i.backgroundColor,n.style.backgroundRepeat="no-repeat",n.style.backgroundPosition="center",n.style.backgroundSize="contain",n.style.width="100%",n.style.height="100%",n.style.top="0",n.style.left="0",n.style.position="absolute",t.style.position="relative",i.hideOverflow?t.style.overflow="hidden":t.style.overflow="visible";t.firstChild;)t.removeChild(t.firstChild);for(let r of e){let a=n.cloneNode(!1);a.style.backgroundImage=`url(${l})`,a.animate(r.steps,r.timing),t.appendChild(a)}};function p(...t){let e=i=>i&&typeof i=="object";return t.reduce((i,l)=>(Object.keys(l).forEach(n=>{let r=i[n],a=l[n];if(Array.isArray(r)&&Array.isArray(a)){i[n]=r.concat(...a);return}if(e(r)&&e(a)){i[n]=p(r,a);return}a!==void 0&&(i[n]=a)}),i),{})}var j=(t=".powerglitch",e={})=>{let i=p(u(),e),l=[];if(typeof t=="string"){let o=document.querySelectorAll(t);if(!o.length)throw new Error(`Could not find any element with selector ${t}`);l=Array.from(o)}else l=[t];let n=l.filter(o=>o instanceof HTMLImageElement),r=l.filter(o=>o instanceof HTMLDivElement),a=y(i);for(let o of n){let s=document.createElement("div");if(s.style.width=o.clientWidth+"px",s.style.height=o.clientHeight+"px",!o.parentElement)throw new Error("Unable to glitch image, it is not attached to a parent element");o.parentElement.insertBefore(s,o),o.style.display="none",f(s,a,i,i.imageUrl||o.src)}for(let o of r){if(!i.imageUrl)throw new Error("Options.imageUrl must be set if there are div elements to glitch");f(o,a,i,i.imageUrl)}};h.PowerGlitch={glitch:j,generateLayers:y,getDefaultOptions:u}});var g=C(b());g.PowerGlitch.glitch(".glitch-1",{timing:{duration:1500,iterations:15},glitchTimeSpan:{start:.4,end:.7},shake:{velocity:10,amplitudeX:.4,amplitudeY:.4},slice:{count:4,velocity:10,minHeight:.02,maxHeight:.4,hueRotate:!0}});g.PowerGlitch.glitch(".glitch-2",{timing:{duration:1500,iterations:15},glitchTimeSpan:{start:.4,end:.7},shake:{velocity:10,amplitudeX:.4,amplitudeY:.4},slice:{count:4,velocity:10,minHeight:.02,maxHeight:.4,hueRotate:!0}});g.PowerGlitch.glitch(".glitch-3",{timing:{duration:2e3,iterations:15},glitchTimeSpan:{start:.4,end:.7},shake:{velocity:10,amplitudeX:.4,amplitudeY:.4},slice:{count:4,velocity:10,minHeight:.02,maxHeight:.4,hueRotate:!0}});console.log("hello hello");})();
//# sourceMappingURL=app.js.map