// Scroll reveal
const els = document.querySelectorAll(
  '.flow-step,.half-card,.fam,.sbc,.rc-side,.plat,.card'
);
els.forEach(el => el.classList.add('reveal'));

const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'),
        (Array.from(els).indexOf(e.target) % 6) * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
els.forEach(el => obs.observe(el));

// Animate bar fills
const bars = document.querySelectorAll('.bar-fill,.sb-fill,.bit-fill');
bars.forEach(b => {
  const w = b.style.width;
  b.style.width = '0';
  const bo = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setTimeout(() => b.style.width = w, 200);
      bo.unobserve(b);
    }
  }, { threshold: 0.5 });
  bo.observe(b);
});

// Active pill highlight
const secs = document.querySelectorAll('section[id]');
const pills = document.querySelectorAll('.pill');
window.addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(s => { if (scrollY >= s.offsetTop - 200) cur = s.id; });
  pills.forEach(p => {
    const a = p.getAttribute('href') === `#${cur}`;
    p.style.background = a ? '#2d2d3a' : '';
    p.style.color = a ? '#fff' : '';
  });
});
