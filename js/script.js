// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Header shadow on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// fadeInUp on scroll
const items = document.querySelectorAll('[data-animate]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in-view'));
}

// Close the mobile menu after tapping a link
document.querySelectorAll('#mainNav .nav-link:not(.dropdown-toggle), #mainNav .dropdown-item').forEach((link) => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('mainNav');
    if (nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  });
});