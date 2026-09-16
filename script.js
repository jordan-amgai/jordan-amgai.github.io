const startDate = new Date("2025-09-01T00:00:00");

function updateTimer() {
  const now = new Date();

  let difference = now - startDate;

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  difference %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(
    difference / (1000 * 60 * 60)
  );

  difference %= 1000 * 60 * 60;

  const minutes = Math.floor(
    difference / (1000 * 60)
  );

  difference %= 1000 * 60;

  const seconds = Math.floor(
    difference / 1000
  );

  document.getElementById("timer").textContent =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

updateTimer();

setInterval(updateTimer, 1000);

