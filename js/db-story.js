import"./db-modulepreload-polyfill.js";import"./db-mdb.min.js";const c=document.querySelectorAll(".story__nav-link"),e=document.querySelector(".story__content"),u=()=>{function l(){const t=document.querySelectorAll(".story__content > div");for(let o=0;o<t.length;o++){const n=t[o],s=n.getBoundingClientRect();if(s.x+s.width>=s.width*.15)return n}return null}c.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const n=t.getAttribute("href"),a=document.querySelector(n).querySelector(".story__content-part:first-child"),d=a.offsetLeft-e.offsetLeft-(e.offsetWidth-a.offsetWidth)/2-10;e.scrollTo({left:d,behavior:"smooth"})})});let r=!1,i,f;e.addEventListener("mousedown",t=>{r=!0,i=t.pageX-e.offsetLeft,f=e.scrollLeft}),e.addEventListener("mousemove",t=>{if(!r)return;t.preventDefault();const n=(t.pageX-e.offsetLeft-i)*3;e.scrollLeft=f-n}),e.addEventListener("mouseup",()=>{r=!1}),e.addEventListener("mouseleave",()=>{r=!1}),e.addEventListener("scroll",()=>{const t=l();t&&c.forEach(o=>{o.getAttribute("href")===`#${t.id}`?o.classList.add("active"):o.classList.remove("active")})}),window.addEventListener("load",()=>{const t=l();t&&t!==null&&document.querySelector(`.story__nav-link[href="#${t.id}"]`).classList.add("active")}),e.addEventListener("wheel",t=>{const o=t.deltaY>0,n=t.deltaY<0;!(o&&e.scrollLeft+e.clientWidth===e.scrollWidth)&&!(n&&e.scrollLeft===0)&&(t.preventDefault(),e.scrollLeft+=t.deltaY)})};u();const L=document.querySelector(".story__skip");L.onclick=()=>{[...c].at(-1).click()};
