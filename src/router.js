const routes = {
  '/': () => import('./pages/home.js'),
  '/assessment': () => import('./pages/assessment.js'),
  '/colleges': () => import('./pages/colleges.js'),
  '/cutoffs': () => import('./pages/cutoffs.js'),
  '/enrolments': () => import('./pages/enrolments.js')
};

export function initRouter(container) {
  const navigate = async () => {
    const path = window.location.hash.slice(1) || '/';
    const loadView = routes[path] || routes['/'];
    
    // Update active navbar state
    document.querySelectorAll('header nav a').forEach(el => {
      el.classList.toggle('active', el.getAttribute('href') === `#${path}`);
    });

    try {
      container.innerHTML = `<div style="padding:20px; text-align:center;">Loading…</div>`;
      const viewModule = await loadView();
      container.innerHTML = '';
      viewModule.render(container);
    } catch (err) {
      container.innerHTML = `<div style="color:var(--cardinal);">Failed to load page.</div>`;
      console.error(err);
    }
  };

  window.addEventListener('hashchange', navigate);
  navigate(); // Initial view render
}
