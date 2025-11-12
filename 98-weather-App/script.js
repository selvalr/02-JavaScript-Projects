const apikeys="a025fe809a1a7212de33f68af26241ff";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWheather(city) {

   

    const response = await fetch(apiUrl + city + `&appid=${apikeys}`);
    
    if(response.status==404){


    }
    else{
var data = await response.json();
 document.querySelector(".weather").style.display = "block";
 document.querySelector(".error").style.display = "none";

document.querySelector(".city").innerHTML = data.name;
 document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "*C";
      document.querySelector(".humidity").innerHTML = data.wind.speed + " km/h";

      console.log(data.weather[0].main);
      if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
    }
    }
}

searchBtn.addEventListener("click", () => {
  checkWheather(searchBox.value);
});






function getCurrentCity() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // 🔁 Use OpenWeather reverse geocoding API to get city name
      const geoUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apikeys}`;

      const response = await fetch(geoUrl);
      const data = await response.json();

      if (data.length > 0) {
        const city = data[0].name;
        console.log("Your current city is:", city);

        // ✅ You can call your weather function here
       checkWheather(city);
      } else {
        console.log("City not found for current location.");
      }
    });
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

getCurrentCity();