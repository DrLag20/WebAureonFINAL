const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => io.observe(el));

  document.querySelectorAll('.obj-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('is-open');
    });
  });

  function togglePopup() {
    const over = document.getElementById('overlay');
    const dlg  = document.getElementById('popupDialog');
    const isVisible = dlg.style.display === 'block';
    if (isVisible) {
      dlg.style.opacity = '0';
      setTimeout(() => { dlg.style.display = 'none'; over.style.display = 'none'; }, 300);
    } else {
      over.style.display = 'block';
      dlg.style.display  = 'block';
      requestAnimationFrame(() => { dlg.style.opacity = '1'; });
    }
  }
  document.getElementById('btnEnviar').addEventListener('click', togglePopup);
  document.getElementById('btnCerrar').addEventListener('click', togglePopup);
  document.getElementById('overlay').addEventListener('click', togglePopup);