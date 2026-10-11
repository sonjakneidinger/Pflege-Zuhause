
const menuButton=document.querySelector('.menu');
const nav=document.querySelector('#nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'✕ Schließen':'☰ Menü';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰ Menü';}));}
