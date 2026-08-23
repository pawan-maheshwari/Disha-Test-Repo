import { state } from '../app.js';
import { globalData } from '../data/global-data.js';

export function render(container) {
  const cutoffs = (globalData[state.country] && globalData[state.country].cutoffs) || [];

  container.innerHTML = `
    <div>
      <h2>10-Year Cut-Off Trajectory</h2>
      <p style="color:var(--grey); margin-bottom: 16px;">Exam score cut-offs for target institutions in ${state.country}.</p>
      <div class="grid-cards">
        ${cutoffs.map(track => `
          <div class="card">
            <h3>${track.inst}</h3>
            <p style="font-size: 13px; color: var(--grey);">${track.unit}</p>
            <div style="margin-top: 12px; font-weight: 700;">Recent: ${track.series[track.series.length - 1]}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
