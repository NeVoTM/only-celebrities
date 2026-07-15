// ===== Sticky nav shadow =====
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 10);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// ===== Mobile menu =====
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('.nav__links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// ===== Animated stat counters =====
const animateCount = (el) => {
  const target = parseFloat(el.dataset.target);
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const dur = 1600;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(target * eased);
    el.textContent = prefix + val.toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

// ===== Reveal on scroll + trigger counters =====
const revealTargets = document.querySelectorAll(
  '.feature-card,.value,.stat,.step,.tile,.quote,.acc,.section-title,.section-sub,.hero__copy,.hero__art'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    const num = entry.target.querySelector?.('.stat__num');
    if (entry.target.classList.contains('stat')) {
      const el = entry.target.querySelector('.stat__num');
      if (el && !el.dataset.done) { el.dataset.done = '1'; animateCount(el); }
    }
    io.unobserve(entry.target);
  });
}, { threshold: 0.18 });
revealTargets.forEach(el => io.observe(el));

// ===== Testimonial carousel =====
const track = document.getElementById('quoteTrack');
const step = () => Math.min(track.clientWidth * 0.85, 440);
document.getElementById('quoteNext').addEventListener('click', () =>
  track.scrollBy({ left: step(), behavior: 'smooth' })
);
document.getElementById('quotePrev').addEventListener('click', () =>
  track.scrollBy({ left: -step(), behavior: 'smooth' })
);
