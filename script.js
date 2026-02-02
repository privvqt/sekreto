function showMenu() {
  switchScreen('opening', 'menu');
}

function showSection(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function back() {
  showSection('menu');
}

function switchScreen(from, to) {
  document.getElementById(from).classList.remove('active');
  document.getElementById(to).classList.add('active');
}
