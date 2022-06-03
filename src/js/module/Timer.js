import { dataFromServerFunc } from "../../api/api.js";

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const time = document.getElementById("time");

const dataFromServer = await dataFromServerFunc();

const timedata = dataFromServer.timerEndDate.split(".").join(" ").split(" ");

const timerEnd = new Date(
  `${timedata[2]}-${timedata[1]}-${timedata[0]}T${timedata[3]}`
);

const timerInterval = setInterval(CountDown, 1000);
export function CountDown() {
  const currentDay = new Date();

  const diff = timerEnd - currentDay;

  const day = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minute = Math.floor(diff / 1000 / 60) % 24;
  const second = Math.floor(diff / 1000) % 60;

  if (diff > 0) {
    days.innerHTML = day;
    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    minutes.innerHTML = minute < 10 ? "0" + minute : minute;
    seconds.innerHTML = second < 10 ? "0" + second : second;
  } else {
    time.setAttribute("class", "timer__close");
    clearTimeout(timerInterval);
  }
}
