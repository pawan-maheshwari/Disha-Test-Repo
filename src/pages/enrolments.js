export function render(container) {
  container.innerHTML = `
    <div>
      <h2>Student Enrolments & Ledger</h2>
      <p style="color:var(--grey); margin-bottom: 16px;">Central verification and session tracker.</p>
      <div class="card">
        <p>No external database records active on this local instance.</p>
      </div>
    </div>
  `;
}
