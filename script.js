const clock = document.getElementById('clock');
const date = document.getElementById('date');

function updateClock() {
  const now = new Date();
  clock.textContent = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  }).format(now);

  date.textContent = new Intl.DateTimeFormat('uz-UZ', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).format(now);
}

updateClock();
setInterval(updateClock, 1000);
