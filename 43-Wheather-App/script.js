
/*
 * Created by Lucas Chapman
 *
 * This project was based on:
 * https://codepen.io/freeCodeCamp/full/bELRjV
 * for the purposes of earning a certificate
 * and it uses this API:
 * https://weather-proxy.freecodecamp.rocks/
 */

// Elements
const overlay = document.querySelector("#overlay");
const loader = document.querySelector("#loader");
const f = document.querySelector("#f");
const c = document.querySelector("#c");
const temp = document.querySelector("#temp");
const high = document.querySelector("#high");
const feel = document.querySelector("#feel");
const low = document.querySelector("#low");
const reload = document.querySelector("#reload");

// Get date and time
var d = new Date();
var time = Math.floor(d.getTime() / 1000); // removes milliseconds

window.addEventListener("load", accessLocation, true);
document.querySelector("#reload").addEventListener(
  "click",
  () => {
    loader.classList.remove("hide");
    overlay.classList.add("hide");
    accessLocation();
  },
  true
);

// Attempts to get the current location of the user
function accessLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position);
  } else {
    alert(
      "Unable to access your location, please make sure you have allowed CodePen and your browser to access your location"
    );

    loader.classList.add("hide");
    overlay.classList.remove("hide");
    document.body.style.backgroundColor = "#00b4ff";
    overlay.style.backgroundColor = "rgba(0, 129, 230, 0.4)";
  }
}

/* Gets the position */
function position(pos) {
  const LAT = pos.coords.latitude;
  const LON = pos.coords.longitude;

  // URL that points to the API
  let url = "https://weather-proxy.freecodecamp.rocks/api/current";

  // Adds the currrent location to the URL of the API
  url += "?lat=" + LAT + "&lon=" + LON;

  // Calls the URL and gets the results as JSON
  fetch(url)
    .then((res) => res.json())
    .then(weather);

  setTimeout(() => {
    loader.classList.add("hide");
    overlay.classList.remove("hide");
  }, 2025);
}

/* Gets the local weather */
function weather(data) {
  const icon = document.querySelector("img#icon");

  // Location
  const LOC = data.name + ", " + data.sys.country;

  // Sunset and Sunrise
  const RISE = data.sys.sunrise;
  const SET = data.sys.sunset;

  // Temperature info
  const TEMP = Math.round(data.main.temp);
  const FEEL = Math.round(data.main.feels_like) + " °C";
  const LOW = Math.round(data.main.temp_min) + " °C";
  const HIGH = Math.round(data.main.temp_max) + " °C";

  // Weather
  const MAIN = data.weather[0].main;
  const ICON = data.weather[0].icon;
  const DESC = data.weather[0].description;
  const WIND = Math.round(data.wind.speed) + " mph";
  const HUMIDITY = data.main.humidity + "%";

  // Sets the background based on if it's day or night
  if (time >= RISE && time < SET) {
    document.body.style.backgroundColor = "#00b4ff";
    overlay.style.backgroundColor = "rgba(0, 129, 230, 0.4)";
    reload.classList.remove("night");
  } else {
    document.body.style.backgroundColor = "#2a2a35";
    overlay.style.backgroundColor = "rgba(51, 51, 51, 0.7)";
    reload.classList.add("night");
  }

  // Display temperature
  document.querySelector("#loc").innerHTML = LOC;
  temp.innerHTML = TEMP;
  low.innerHTML = LOW;
  feel.innerHTML = FEEL;
  high.innerHTML = HIGH;

  // Display weather
  icon.src = ICON;
  icon.alt = MAIN;
  document.querySelector("#main").innerHTML = MAIN;
  document.querySelector("#humidity").innerHTML = HUMIDITY;
  document.querySelector("#desc").innerHTML = DESC;
  document.querySelector("#wind").innerHTML = WIND;

  f.classList.remove("cur");
  c.classList.add("cur");
}

/* Converts celsius to fahrenheit and vice-versa */
function convert(deg) {
  let tempValue = temp.innerHTML;
  let highValue = high.innerHTML.match(/-?\d+/)[0];
  let feelValue = feel.innerHTML.match(/-?\d+/)[0];
  let lowValue = low.innerHTML.match(/-?\d+/)[0];

  // Determines what to convert the temperatures to
  if (deg == "C") {
    if (!c.classList.contains("cur")) {
      tempValue = celsius(tempValue);
      highValue = celsius(highValue);
      feelValue = celsius(feelValue);
      lowValue = celsius(lowValue);

      f.classList.remove("cur");
      c.classList.add("cur");
    }
  } else {
    if (!f.classList.contains("cur")) {
      tempValue = fahrenheit(tempValue);
      highValue = fahrenheit(highValue);
      feelValue = fahrenheit(feelValue);
      lowValue = fahrenheit(lowValue);

      c.classList.remove("cur");
      f.classList.add("cur");
    }
  }

  // Updates temperatures
  temp.innerHTML = Math.round(tempValue);
  high.innerHTML = Math.round(highValue) + " °" + deg;
  feel.innerHTML = Math.round(feelValue) + " °" + deg;
  low.innerHTML = Math.round(lowValue) + " °" + deg;
}

/* Returns the temperature in fahrenheit */
function fahrenheit(cel) {
  return (cel * 9) / 5 + 32;
}

/* Returns the temperature in celisus */
function celsius(far) {
  return ((far - 32) * 5) / 9;
}


