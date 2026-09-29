const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open);menu.textContent=open?'✕':'☰';});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.textContent='☰';}));
const sections=[...document.querySelectorAll('main section[id]')];
const navItems=[...document.querySelectorAll('.nav-links a')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navItems.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>io.observe(s));
