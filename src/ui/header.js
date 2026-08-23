import { META, getHomeCountry, setHomeCountry } from '../core/global.js';

export function renderHeader(container) {
  const current = getHomeCountry();
  const countries = Object.keys(META);

  container.innerHTML = `
    <header>
      <a href="#/" class="brand">DISHA Career Lab</a>
      <nav>
        <a href="#/">Home</a>
        <a href="#/assessment">5-D Assessment</a>
        <a href="#/colleges">Top Colleges</a>
        <a href="#/cutoffs">Cut-Offs</a>
        <a href="#/enrolments">Dashboard</a>
      </nav>
      <div>
        <select id="country-select" class="pill-select">
          ${countries.map(c => `
            <option value="${c}" ${c === current ? 'selected' : ''}>
              ${META[c].flag} ${c}
            </option>
          `).join('')}
        </select>
      </div>
    </header>
  `;

  container.querySelector('#country-select').addEventListener('change', (e) => {
    setHomeCountry(e.target.value);
  });
}
