(() => {
  document.querySelectorAll('.brand').forEach((brand) => {
    if (brand.classList.contains('footer-brand')) {
      brand.innerHTML = '<img src="favicon.svg" alt="" class="footer-mark"><span>Snow Learning Solutions</span>';
      brand.setAttribute('aria-label', 'Snow Learning Solutions home');
      return;
    }
    if (!brand.querySelector('img')) {
      brand.innerHTML = '<img src="assets/images/logo.png" alt="Snow Learning Solutions" class="brand-logo">';
      brand.setAttribute('aria-label', 'Snow Learning Solutions home');
    }
  });
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!button || !nav) return;

  nav.id = 'site-navigation';
  nav.setAttribute('aria-label', 'Primary navigation');
  button.innerHTML = '<span></span>';
  button.setAttribute('type', 'button');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'site-navigation');

  if (!nav.querySelector('.linkedin-nav')) {
    const linkedin = document.createElement('a');
    linkedin.className = 'linkedin-nav';
    linkedin.href = 'https://www.linkedin.com/in/maximillian-waluk-916715115/';
    linkedin.target = '_blank';
    linkedin.rel = 'noopener';
    linkedin.textContent = 'LinkedIn';
    nav.insertBefore(linkedin, nav.querySelector('.nav-cta'));
  }

  const closeMenu = () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open navigation');
  };

  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); });
})();
