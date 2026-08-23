import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { initRouter } from './router.js';

// Global application state
export const state = {
  country: localStorage.getItem('disha_home_country') || 'India',
  user: JSON.parse(localStorage.getItem('disha_user') || 'null'),
  setCountry(c) {
    this.country = c;
    localStorage.setItem('disha_home_country', c);
    window.location.reload();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderHeader(document.getElementById('app-header'), state);
  renderFooter(document.getElementById('app-footer'), state);
  initRouter(document.getElementById('app-view'));
});
