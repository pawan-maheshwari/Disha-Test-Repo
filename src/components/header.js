export function renderHeader(container, state) {
  const countries = ['India', 'Nepal', 'UAE', 'South Africa'];
  const flags = { 'India': '🇮🇳', 'Nepal': '🇳🇵', 'UAE': '🇦🇪', 'South Africa': '🇿🇦' };

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
        <select id="country-picker" class="pill-select">
          ${countries.map(c => `
            <option value="${c}" ${state.country === c ? 'selected' : ''}>
              ${flags[c]} ${c}
            </option>
          `).join('')}
        </select>
      </div>
    </header>
  `;

  container.querySelector('#country-picker').addEventListener('change', (e) => {
    state.setCountry(e.target.value);
  });
}
