
const API_KEY = "645d07a50eac0337382013807bf44832";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in",lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}8&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data.name, data.weather[0].main)
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;

    }); //fetch = default GET방식, request 래핑한 promise 객체 반환
}
function onGeoErr(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr); 