const apikey = "8e2ef5472844259722931a4ed576c9e7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`); if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/H";
        document.querySelector(".pressure").innerHTML = data.main.pressure + "hPa";
        document.querySelector(".Feels").innerHTML = Math.round(data.main.feels_like) + "°";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/png-transparent-weather-forecasting-symbol-drizzle-sunny-weather-forecast-blue-cloud-heart-thumbnail.png";
        }
        else if (data.weather[0].main == "clear") {
            weatherIcon.src = "images/realistic-sun-icon-for-weather-design-sunshine-vector-25369777.jpg";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/weather-7159425_1280.webp";
        }
        else if (data.weather[0].main == "drizzle") {
            weatherIcon.src = "images/drizzle-weather-3d-icon-download-in-png-blend-fbx-gltf-file-formats--rain-cloud-pack-icons-5753008.webp";
        }
        else if (data.weather[0].main == "mist") {
            weatherIcon.src = "images/cloud-and-fog-symbols-isolated-on-white-background-3d-illustration-2K2K88W.jpg";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
});

