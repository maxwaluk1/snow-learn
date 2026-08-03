(() => {
  document.querySelectorAll('.brand').forEach((brand) => {
    if (brand.classList.contains('footer-brand')) {
      brand.innerHTML = '<img src="favicon.svg" alt="" class="footer-mark"><span>Snow Learning Solutions</span>';
      brand.setAttribute('aria-label', 'Snow Learning Solutions home');
      return;
    }
    if (!brand.querySelector('img')) {
      brand.innerHTML = '<img src="assets/images/logo.svg" alt="Snow Learning Solutions" class="brand-logo">';
      brand.setAttribute('aria-label', 'Snow Learning Solutions home');
    }
  });
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!button || !nav) return;

  const hero = document.querySelector('.hero-content');
  if (hero && !hero.querySelector('.hero-system')) {
    const visual = document.createElement('div');
    visual.className = 'hero-system';
    visual.setAttribute('aria-hidden', 'true');
    visual.innerHTML = '<div class="hero-system-head"><span></span><span></span><span></span><b>Learning ecosystem</b></div><div class="hero-system-body"><div class="system-node node-one"><i></i><strong>Strategy</strong><small>Plan with purpose</small></div><div class="system-node node-two"><i></i><strong>Content</strong><small>Build for use</small></div><div class="system-node node-three"><i></i><strong>Platform</strong><small>Scale with confidence</small></div><div class="system-connector connector-one"></div><div class="system-connector connector-two"></div></div>';
    hero.appendChild(visual);
  }

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
