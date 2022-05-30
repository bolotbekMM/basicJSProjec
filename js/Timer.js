const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const timerEndDate = "01.07.2022 11:00".split(".").join(" ").split(" ");

const timerEnd = new Date(
  `${timerEndDate[2]}-${timerEndDate[1]}-${timerEndDate[0]}T${timerEndDate[3]}`
);

function countDown() {
  const currentDay = new Date();

  const diff = timerEnd - currentDay;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 24;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(countDown, 1000);
