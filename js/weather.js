const API_KEY = "2867b6f436f9d268f424ddbfe3d177e9";

const onGeoSuccess = (geoPosition) => {
    const lat = geoPosition.coords.latitude;
    const lon = geoPosition.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
        });
}

const onGeoError = () => {

}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);