// const cityName = document.getElementById('city');
const mainContainer = document.getElementById('mainContainer');
// const submitbtn = document.getElementById('submitBtn');
const weatherContainer = document.getElementById('wetherContainer');

var apiKey = 'c0669b0dd6717ffafb1030a695d5b96b';

async function getWetherData() {
    let cityName = document.getElementById('city').innerText;
    console.log(cityName);
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    let res = await data.json();
    console.log(res);
    console.log(res.main.temp_max, res.name, res.weather[0].description)
}


weatherContainer.innerHTML = ``