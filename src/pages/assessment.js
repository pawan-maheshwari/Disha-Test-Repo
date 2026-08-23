import { CONTENT } from '../core/content.js';

export function render(container) {
  let step = 0;
  const questions = CONTENT.interest;

  function renderQuestion() {
    if (step >= questions.length) {
      container.innerHTML = `
        <div class="card" style="text-align:center; padding: 30px;">
          <h2>Assessment Complete</h2>
          <p style="margin: 12px 0;">Your primary recommendations are being calculated based on your 5-D profile.</p>
          <a href="#/colleges" class="btn">View Matching Colleges &rarr;</a>
        </div>
      `;
      return;
    }

    const q = questions[step];
    container.innerHTML = `
      <div class="card">
        <span style="font-size: 12px; font-weight: 800; color: var(--cardinal); text-transform: uppercase;">
          Question ${step + 1} of ${questions.length}
        </span>
        <h3 style="margin: 10px 0 16px; font-size: 18px;">${q.q.en}</h3>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${q.opts.map((opt, i) => `
            <button class="btn btn-ghost opt-btn" data-idx="${i}" style="text-align: left; padding: 12px;">
              ${opt.en}
            </button>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.opt-btn').forEach(btn => {
      btn.onclick = () => {
        step++;
        renderQuestion();
      };
    });
  }

  renderQuestion();
}
