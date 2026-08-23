import { state } from '../app.js';
import { globalData } from '../data/global-data.js';

export function render(container) {
  const countryPacks = globalData[state.country] || globalData['India'];

  container.innerHTML = `
    <div>
      <h2>Top Colleges & Universities — ${state.country}</h2>
      <p style="color:var(--grey); margin-bottom: 20px;">Top-rated institutions with verified admission metrics.</p>
      <div class="grid-cards">
        ${countryPacks.colleges.map(c => `
          <div class="card">
            <h3 style="font-size: 16px;">${c.name}</h3>
            <p style="font-size: 13px; color: var(--grey);">${c.location}</p>
            <div style="margin-top: 10px; font-size: 12px;"><strong>Entry:</strong> ${c.entry}</div>
            <a href="${c.url}" target="_blank" rel="noopener" style="display:inline-block; margin-top:8px; font-size: 13px; color: var(--cardinal); font-weight:700;">Visit Portal &nearr;</a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
