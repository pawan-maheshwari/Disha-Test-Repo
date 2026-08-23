const routes = {
  '/': () => import('./pages/home.js'),
  '/assessment': () => import('./pages/assessment.js'),
  '/colleges': () => import('./pages/colleges.js'),
  '/cutoffs': () => import('./pages/cutoffs.js'),
  '/enrolments': () => import('./pages/enrolments.js')
};

export function initRouter(container) {
  const navigate = async () => {
    let path = window.location.hash.slice(1) || '/';
    if (!path.startsWith('/')) path = '/' + path;

    const loadView = routes[path] || routes['/'];

    document.querySelectorAll('header nav a').forEach(el => {
      el.classList.toggle('active', el.getAttribute('href') === `#${path}`);
    });

    try {
      container.innerHTML = `<div style="padding:24px; text-align:center;">Loading…</div>`;
      const viewModule = await loadView();
      container.innerHTML = '';
      viewModule.render(container);
    } catch (err) {
      console.error('Router failed to load path:', path, err);
      container.innerHTML = `<div style="color:var(--cardinal); padding:20px;">Failed to load view: ${path}</div>`;
    }
  };

  window.addEventListener('hashchange', navigate);
  navigate();
}
