const currentDay = document.getElementById("dayOfWeek");
const setHours = document.getElementById("hours");
const setMinutes = document.getElementById("minutes");
const setSeconds = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function getDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}

const dayOfWeek = getDayOfWeek();
currentDay.innerText = getDayOfWeek();

function utcDate() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  h = h + " :";
  m = m + " :";

  setHours.innerText = h;
  setMinutes.innerText = m;
  setSeconds.innerText = s;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    utcDate();
  }, 1000);
}

utcDate();
