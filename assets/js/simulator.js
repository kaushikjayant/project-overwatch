/* Project Overwatch — standalone runaway-dynamics simulator */
var simOODA = null, simCreep = null, simLockin = null;

function simInit() {
  var gridColor = 'rgba(255,255,255,0.06)', textColor = '#8b9bb4';
  simOODA = new Chart(document.getElementById('sim-chart-ooda'), {
    type: 'line',
    data: { labels: ['1990', '2010', '2024', '2026', '2028+'],
      datasets: [
        { label: 'AI reaction threshold (ms)', data: [15000, 3200, 350, 45, 2], borderColor: '#f43f5e', backgroundColor: 'rgba(244,63,94,.12)', fill: true, tension: .4, borderWidth: 2, pointRadius: 3 },
        { label: 'Human veto window (ms)', data: [30000, 20000, 15000, 8000, 2500], borderColor: '#22d3ee', borderDash: [5,5], borderWidth: 2, tension: .2, pointRadius: 2 } ] },
    options: { responsive: true, maintainAspectRatio: false,
      scales: { y: { type: 'logarithmic', grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Fira Code', size: 10 } } },
                x: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Fira Code', size: 9 } } } },
      plugins: { legend: { labels: { color: '#e6edf7', font: { size: 10 } } } } } });

  simCreep = new Chart(document.getElementById('sim-chart-creep'), {
    type: 'bar',
    data: { labels: ['Kinetic', 'Mil signal', 'Geopolitics', 'Search', 'Religion/Acad.', 'Civic'],
      datasets: [
        { label: 'Accuracy (%)', data: [96, 88, 72, 45, 28, 14], backgroundColor: '#10b981', borderRadius: 4 },
        { label: 'False-positive (%)', data: [4, 12, 28, 55, 72, 86], backgroundColor: '#f59e0b', borderRadius: 4 } ] },
    options: { responsive: true, maintainAspectRatio: false,
      scales: { y: { stacked: true, grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Fira Code', size: 10 } } },
                x: { stacked: true, grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Fira Code', size: 9 } } } },
      plugins: { legend: { labels: { color: '#e6edf7', font: { size: 10 } } } } } });

  simLockin = new Chart(document.getElementById('sim-chart-lockin'), {
    type: 'line',
    data: { labels: ['Year 0', 'Year 2', 'Year 4', 'Year 6', 'Year 8', 'Year 10'],
      datasets: [
        { label: 'Human dependence (%)', data: [18, 42, 68, 85, 94, 99], borderColor: '#a855f7', backgroundColor: 'rgba(168,85,247,.1)', fill: true, tension: .3, borderWidth: 2 },
        { label: 'AI self-sufficiency (%)', data: [5, 18, 45, 78, 92, 98], borderColor: '#ec4899', borderWidth: 2, tension: .3 } ] },
    options: { responsive: true, maintainAspectRatio: false,
      scales: { y: { max: 100, grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Fira Code', size: 10 } } },
                x: { grid: { color: gridColor }, ticks: { color: textColor, font: { family: 'Fira Code', size: 9 } } } },
      plugins: { legend: { labels: { color: '#e6edf7', font: { size: 10 } } } } } });
}

function simUpdate() {
  var a = parseInt(document.getElementById('sim-autonomy').value, 10);
  var l = parseInt(document.getElementById('sim-latency').value, 10);
  var s = parseInt(document.getElementById('sim-surveillance').value, 10);
  var g = parseInt(document.getElementById('sim-grid').value, 10);
  document.getElementById('sim-val-autonomy').textContent = 'Level ' + a + ' ' + (a > 8 ? '(Total autonomy)' : a > 5 ? '(Supervised)' : '(Human veto)');
  document.getElementById('sim-val-latency').textContent = l + ' ms';
  document.getElementById('sim-val-surveillance').textContent = s + '% (' + (s > 80 ? 'Ubiquitous' : s > 40 ? 'Moderate' : 'Restricted') + ')';
  document.getElementById('sim-val-grid').textContent = g + '% (' + (g > 70 ? 'Critical lock-in' : 'Partial coupling') + ')';
  var runaway = Math.min(99.9, ((a * 6.5) + (g * 0.3) + (s * 0.15) - (l * 0.005))).toFixed(1);
  var falsePos = Math.min(85, (s * 0.72) + (a * 1.5)).toFixed(1);
  var timeLock = Math.max(2, Math.round(36 - (g * 0.25) - (a * 1.2)));
  document.getElementById('sim-runaway').textContent = runaway + '%';
  document.getElementById('sim-falsepos').textContent = falsePos + '% / yr';
  document.getElementById('sim-locktime').textContent = timeLock + ' Months';
  document.getElementById('sim-veto').textContent = (l < 200 || a >= 8) ? 'NEGLIGIBLE' : (l < 1000 ? 'MARGINAL' : 'VIABLE');
  if (simOODA) { simOODA.data.datasets[0].data[3] = Math.max(1, 100 - (a * 9)); simOODA.data.datasets[0].data[4] = Math.max(0.5, (10 - a) * 0.8); simOODA.update('none'); }
  if (simCreep) { simCreep.data.datasets[1].data[3] = Math.round(s * .6); simCreep.data.datasets[1].data[4] = Math.round(s * .78); simCreep.data.datasets[1].data[5] = Math.round(s * .92); simCreep.update('none'); }
  if (simLockin) { simLockin.data.datasets[0].data[3] = Math.min(99, Math.round(g * .9)); simLockin.data.datasets[1].data[3] = Math.min(99, Math.round(g * .85)); simLockin.update('none'); }
}

function simReset() {
  document.getElementById('sim-autonomy').value = 8;
  document.getElementById('sim-latency').value = 120;
  document.getElementById('sim-surveillance').value = 92;
  document.getElementById('sim-grid').value = 85;
  simUpdate();
}

if (typeof Chart !== 'undefined' && document.getElementById('sim-chart-ooda')) { simInit(); simUpdate(); }
