import LOCALSTORAGEKEY from "./localstorageKey.js";

const weatherDiv = document.querySelector(".js-weather");

const WEATHERAPIKEY = "2579f41f861e7c06960815b01bc638db";
const KELVIN = 273.15;

let COORDS = [];

const saveGeoInfoForLocalStorage = (COORDSOBJ) => {
  localStorage.setItem(LOCALSTORAGEKEY.geoInfo, JSON.stringify(COORDSOBJ));
};

const getWeatherInfo = (weatherObj) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${weatherObj.lati}&lon=${weatherObj.long}&appid=${WEATHERAPIKEY}`
  )
    .then((reponse) => reponse.json())
    .then((weatherData) => {
      const city = weatherData.name;
      const temp = Math.floor(parseInt(weatherData.main.temp, 10) - KELVIN);
      const humi = weatherData.main.humidity;
      const description = weatherData.weather[0].description;
      weatherDiv.innerText = `@_${city}
      Temp:_${temp} ℃
      Humi: ${humi}%
      Today:_${description}`;
    });
};

const handleGetPosition = (position) => {
  COORDS = [];
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const COORDSOBJ = {
    lati: latitude,
    long: longitude,
  };
  COORDS.push(COORDSOBJ);
  saveGeoInfoForLocalStorage(COORDSOBJ);
  getWeatherInfo(COORDSOBJ);
};

const handleGeoError = () => {
  alert("Sorry, no position available.");
};

const loadCoord = () => {
  const currrentGeo = navigator.geolocation;
  if (currrentGeo === undefined) {
    alert("Not suppor weather infomation!");
    return;
  }
  //console.log(currrentGeo);
  currrentGeo.watchPosition(handleGetPosition, handleGeoError);
};

const weatherInit = () => {
  loadCoord();
};

export default weatherInit;
