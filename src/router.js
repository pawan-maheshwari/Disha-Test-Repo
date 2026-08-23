const routes = {
  '/': () => import('./pages/home.js'),
  '/assessment': () => import('./pages/assessment.js'),
  '/colleges': () => import('./pages/colleges.js'),
  '/cutoffs': () => import('./pages/cutoffs.js'),
  '/enrolments': () => import('./pages/enrolments.js')
};

export function initRouter(container) {
  async function navigate() {
    let raw = window.location.hash.slice(1) || '/';
    let path = raw.startsWith('/') ? raw : '/' + raw;

    const loader = routes[path] || routes['/'];

    // Update active state in nav
    document.querySelectorAll('header nav a').forEach(a => {
      const href = a.getAttribute('href').replace('#', '');
      const cleanHref = href.startsWith('/') ? href : '/' + href;
      a.classList.toggle('active', cleanHref === path || (path === '/' && cleanHref === '/'));
    });

    try {
      container.innerHTML = '<div style="padding:40px; text-align:center; color:#53565A;">Loading…</div>';
      const page = await loader();
      container.innerHTML = '';
      page.render(container);
    } catch (err) {
      console.error('Page load error:', err);
      container.innerHTML = `
        <div style="padding:30px; text-align:center; color:#8C1515;">
          <h3>Failed to load page</h3>
          <p style="color:#53565A; font-size:13px; margin-top:8px;">
            Error loading <code>${path}</code>. Check browser console for missing file path.
          </p>
        </div>
      `;
    }
  }

  window.addEventListener('hashchange', navigate);
  navigate();
}
