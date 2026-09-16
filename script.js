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

function yesAnswer(){
	document.getElementById("answer").textConten="I love you more :)))"}
function noAnswer(){
	document.getElementById("answer").textConten="I will love you even if you don't love me :(("}


document.getElementById("love_yes").onclick = yesAnswer;
document.getElementById("hate_no").onclick = noAnswer;


updateTimer();

setInterval(updateTimer, 1000);

