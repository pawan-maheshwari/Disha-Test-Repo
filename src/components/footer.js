export function renderFooter(container, state) {
  container.innerHTML = `
    <footer>
      <p>&copy; ${new Date().getFullYear()} DISHA Career Lab &middot; Active Region: <strong>${state.country}</strong></p>
      <p style="margin-top:4px; font-size:12px;">Standardized 5-Dimensional Student Career Alignment Engine</p>
    </footer>
  `;
}
