const monthDayYear = document.querySelector(".clock_ymd");
const week = document.querySelector(".clock_week");
const timer = document.querySelector(".clock_time");

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const weekNames = ["Sun", "Mon", "Wed", "Tue", "Thu", "Fri", "Sat"];

const getTimeNow = () => {
  const date = new Date();
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  const weekDay = weekNames[date.getDay()];

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  monthDayYear.innerText = `${month}. ${day}. ${year}`;
  week.innerText = `${weekDay}`;
  if (hours >= 12) {
    timer.innerText = `${hours > 12 ? `${hours - 12}` : `0${hours}`} : ${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    } : ${seconds < 10 ? `0${seconds}` : `${seconds}`}_PM`;
  } else if (hours < 12) {
    timer.innerText = `${hours > 12 ? `0${hours - 12}` : `${hours}`} : ${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    } : ${seconds < 10 ? `0${seconds}` : `${seconds}`}_AM`;
  }
};
export default getTimeNow;
