const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

const style = document.createElement('style');
style.textContent = '@keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.3} }';
document.head.appendChild(style);