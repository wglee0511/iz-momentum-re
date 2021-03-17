import backInit from "./background.js";
import getTimeNow from "./clock.js";
import nameInit from "./name.js";
import resetInit from "./reset.js";
import toDoInit from "./todolist.js";
import weatherInit from "./weather.js";

const totalInit = () => {
  setInterval(getTimeNow, 1000);
  nameInit();
  toDoInit();
  backInit();
  resetInit();
  weatherInit();
};

totalInit();
