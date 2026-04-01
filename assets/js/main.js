(function() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const links = Array.from(document.querySelectorAll('.nav .links a'));
  function onScroll() {
    const y = window.scrollY + 100;
    let id = null;
    for (const s of sections) { if (y >= s.offsetTop) id = s.id; }
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();