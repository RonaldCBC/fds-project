import"./db-modulepreload-polyfill.js";/* empty css    */import{D as r,T as d}from"./db-bootstrap.esm.js";const o=document.getElementById("awards-tabs"),s=o.querySelectorAll(".nav-link"),c=document.querySelector('.dropdown-menu[data-name="awards"]'),e=document.querySelector('.dropdown-toggle[data-bs-toggle="dropdown"]'),i=()=>{new r(e),c.addEventListener("click",function(t){const n=t.target.dataset.value;e.textContent=t.target.textContent,document.querySelector(".dropdown-item.active").classList.remove("active"),t.target.classList.add("active"),Array.from(s).find(a=>a.href.includes(n)).click()})};i();const l=()=>{new d(o)};l();
