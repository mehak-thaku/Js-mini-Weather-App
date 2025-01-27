const apikey = "a095c3751f06aa23480b7f16a49aef40";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "clouds"){
    weatherIcon.src = "images/clouds.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
}
else if(data.weather[0].main == "clear"){
    weatherIcon.src = "images/clear.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
}

}

let searchbox = document.querySelector("input");
let searchbtn = document.querySelector(".btn");
let weather = document.querySelector(".weather-Icon");

searchbtn.addEventListener("click" , () => {
    checkWeather(searchbox.value);
    console.log("hello");
})