// --- Application State ---
const state = {
  country: localStorage.getItem('disha_home_country') || 'India',
  setCountry(c) {
    this.country = c;
    localStorage.setItem('disha_home_country', c);
    renderApp();
  }
};

// --- Extracted Metadata from Monolith ---
const META = {
  "India": { flag: "🇮🇳", pricing: { sym: "₹", full: 999, promo: 199 } },
  "Nepal": { flag: "🇳🇵", pricing: { sym: "NPR ", full: 1499, promo: 299 } },
  "UAE": { flag: "🇦🇪", pricing: { sym: "AED ", full: 649, promo: 129 } },
  "South Africa": { flag: "🇿🇦", pricing: { sym: "R ", full: 849, promo: 169 } }
};

const DATA = {
  "India": {
    colleges: [
      { name: "IIT Bombay", location: "Mumbai, Maharashtra", url: "https://www.iitb.ac.in", entry: "JEE Advanced" },
      { name: "AIIMS New Delhi", location: "New Delhi", url: "https://www.aiims.edu", entry: "NEET-UG" },
      { name: "IIM Ahmedabad", location: "Ahmedabad, Gujarat", url: "https://www.iima.ac.in", entry: "CAT" }
    ],
    cutoffs: [
      { inst: "IIT Bombay · Computer Science", unit: "Closing Rank", series: [65, 62, 60, 61, 63] },
      { inst: "AIIMS Delhi · MBBS", unit: "Closing Rank", series: [55, 52, 50, 53, 50] }
    ]
  },
  "Nepal": {
    colleges: [
      { name: "Tribhuvan University (TU)", location: "Kathmandu", url: "https://tu.edu.np", entry: "TU Entrance" },
      { name: "IOE Pulchowk Campus", location: "Lalitpur", url: "https://pcampus.edu.np", entry: "IOE Rank" }
    ],
    cutoffs: [
      { inst: "IOE Pulchowk · Computer Engg", unit: "Closing Rank", series: [120, 115, 110, 105, 82] }
    ]
  },
  "UAE": {
    colleges: [
      { name: "Khalifa University", location: "Abu Dhabi", url: "https://www.ku.ac.ae", entry: "EmSAT" },
      { name: "UAE University", location: "Al Ain", url: "https://www.uaeu.ac.ae", entry: "High School %" }
    ],
    cutoffs: [
      { inst: "Khalifa University · Engineering", unit: "EmSAT Score", series: [1100, 1150, 1200, 1325] }
    ]
  },
  "South Africa": {
    colleges: [
      { name: "University of Cape Town (UCT)", location: "Cape Town", url: "https://www.uct.ac.za", entry: "APS / NBT" },
      { name: "Wits University", location: "Johannesburg", url: "https://www.wits.ac.za", entry: "APS" }
    ],
    cutoffs: [
      { inst: "UCT · Engineering (EBE)", unit: "Min APS", series: [40, 41, 42, 43, 45] }
    ]
  }
};

// --- Page Views ---
const views = {
  home(el) {
    const p = META[state.country].pricing;
    el.innerHTML = `
      <section style="text-align: center; padding: 36px 0;">
        <h1 style="font-size: 32px; color: var(--cardinal);">DISHA Career Lab — ${state.country}</h1>
        <p style="color: var(--grey); max-width: 600px; margin: 12px auto 24px;">
          Global 5-Dimensional student evaluation mapping interests, aptitudes, personality, values, and institutional pathways.
        </p>
        <div style="margin-bottom: 24px;">
          <span style="font-size: 24px; font-weight: 800;">${p.sym}${p.full}</span>
          <span style="color: var(--grey); font-size: 13px;"> (Introductory: ${p.sym}${p.promo})</span>
        </div>
        <a href="#/assessment" class="btn">Take 5-D Assessment &rarr;</a>
      </section>
    `;
  },

  assessment(el) {
    el.innerHTML = `
      <div class="card" style="max-width: 620px; margin: 0 auto; text-align: center;">
        <h2>5-D Career Assessment</h2>
        <p style="color: var(--grey); margin: 12px 0 20px;">
          Evaluate Interest, Aptitude, Personality, Values, and Socio-Economic context for ${state.country}.
        </p>
        <button class="btn" onclick="alert('Starting assessment engine...')">Start Assessment</button>
      </div>
    `;
  },

  colleges(el) {
    const colleges = (DATA[state.country] || DATA["India"]).colleges;
    el.innerHTML = `
      <div>
        <h2>Top Colleges & Universities — ${state.country}</h2>
        <p style="color: var(--grey); margin-bottom: 20px;">Institutional directories and admission pathways.</p>
        <div class="grid-cards">
          ${colleges.map(c => `
            <div class="card">
              <h3>${c.name}</h3>
              <p style="font-size: 13px; color: var(--grey); margin-top: 2px;">${c.location}</p>
              <div style="margin-top: 10px; font-size: 12.5px;"><strong>Entry:</strong> ${c.entry}</div>
              <a href="${c.url}" target="_blank" rel="noopener" style="display: inline-block; margin-top: 10px; color: var(--cardinal); font-weight: 700;">
                Visit Portal &nearr;
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  cutoffs(el) {
    const cutoffs = (DATA[state.country] || DATA["India"]).cutoffs;
    el.innerHTML = `
      <div>
        <h2>10-Year Cut-Off Trajectories — ${state.country}</h2>
        <p style="color: var(--grey); margin-bottom: 20px;">Closing ranks and admission historical series.</p>
        <div class="grid-cards">
          ${cutoffs.map(track => `
            <div class="card">
              <h3>${track.inst}</h3>
              <p style="font-size: 13px; color: var(--grey);">${track.unit}</p>
              <div style="margin-top: 12px; font-weight: 700;">Latest: ${track.series[track.series.length - 1]}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  enrolments(el) {
    el.innerHTML = `
      <div>
        <h2>Enrolments & Administration Ledger</h2>
        <p style="color: var(--grey); margin-bottom: 16px;">Central verification and session tracker.</p>
        <div class="card">
          <p style="color: var(--grey);">Local device storage active for ${state.country}.</p>
        </div>
      </div>
    `;
  }
};

// --- Shared Shell Renderers ---
function renderHeader() {
  const container = document.getElementById('app-header');
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
          ${Object.keys(META).map(c => `
            <option value="${c}" ${c === state.country ? 'selected' : ''}>
              ${META[c].flag} ${c}
            </option>
          `).join('')}
        </select>
      </div>
    </header>
  `;

  container.querySelector('#country-select').onchange = (e) => {
    state.setCountry(e.target.value);
  };
}

function renderFooter() {
  document.getElementById('app-footer').innerHTML = `
    <footer>
      <p>&copy; 2026 DISHA Career Lab &middot; Active Region: <strong>${state.country}</strong></p>
    </footer>
  `;
}

// --- Direct Route Switcher ---
function route() {
  const hash = window.location.hash.replace('#/', '').replace('#', '') || 'home';
  const renderView = views[hash] || views.home;

  document.querySelectorAll('header nav a').forEach(a => {
    const target = a.getAttribute('href').replace('#/', '').replace('#', '') || 'home';
    a.classList.toggle('active', target === hash);
  });

  const mountPoint = document.getElementById('app-view');
  mountPoint.innerHTML = '';
  renderView(mountPoint);
}

function renderApp() {
  renderHeader();
  renderFooter();
  route();
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  window.addEventListener('hashchange', route);
});
