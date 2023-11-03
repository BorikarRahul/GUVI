// https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid={API key}
// https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json

// var card = document.querySelector('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card')
// var cardHeader = document.querySelector('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card div.card-header');
// var cardBody = document.querySelector('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card div.card-body');
// var cardImg = document.querySelector('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card img.card-img-top');
// var cardText = document.querySelector('div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4 div.card-body div.card-text');
// var col = document.querySelector('body div.container div.row div.col-sm-6.col-md-4.col-lg-4.col-xl-4');

var apikey = 'c0669b0dd6717ffafb1030a695d5b96b';

async function getdata() {
    // let res = await fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
    let res = await fetch('https://restcountries.com/v3.1/all')
    let data = await res.json();

    data.map(value => {
        var spreadOperator = {
            capital: value.capital,
            region: value.region,
            latitude: value.latlng[0],
            longitude: value.latlng[1],
            countryName: value.name.common,
            flag: value.flags.png,
            countryCode: value.cioc,
            population: value.population,
        }
        createcountry(spreadOperator)
    })
    // console.log(data);
}
getdata();




function createcountry({ capital, region, latitude, longitude, countryName, flag, countryCode, population }) {
    // console.log(latitude, longitude, countryName);
    let columns = document.querySelector('.row');

    columns.innerHTML +=
        `
        <div class="col col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card h-100">
                <div class="card-header">
                <h4 class="my-0 fw-normal">${countryName}</h4>
                </div>
                <div class="card-body">
                    <img src="${flag}"
                    class="card-img-top" alt="${countryName}">
                    <div class="card-text">'
                        <p class="text-center">Region: ${region}<p>
                        <p class="text-center">Native Name: ${capital}<p>
                        <p class="text-center">Population: ${population}<p>
                    </div>
                   
                    <a type="button" class="btn btn-primary" id="myBtn" onclick= getWeather(${latitude},${longitude},${countryName})>Click to Weather</a>
                </div>
            </div> 
        </div>
            `
}

async function getWeather(countryName) {
    const apiKey = 'c0669b0dd6717ffafb1030a695d5b96b'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    alert("Hello World!");
}
// document.addEventListener("click", (event) => event.getWeather())

document.getElementById("myBtn").addEventListener("click", function () {

});






















// var row = document.querySelector('.row');
// // row.setAttribute('class', 'row col-lg-4 col-sm-12');
// var col = document.querySelector('.col');
// // col.setAttribute('class', 'col-sm-6.col-md-4.col-lg-4.col-xl-4');
// var div = document.createElement('div');
// // row.append(div);
// div = `<div class="card m-5 rounded-3 shadow-sm">
// <div class="card-header py-3">
//     <h1 class="my-0 fw-normal">${countryName}</h1>
// </div>
// <div class="card-body">
//     <img src="https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d"
//         class="card-img-top" alt="...">
//     <ul class="list-unstyled mt-3 mb-4">
//         <li>Capital : ${Capital}</li>
//         <li>Region : ${Region}</li>
//         <li>Contry Code : ${countryCode}</li>

//     </ul>
//     <button type="button" class="w-100 btn btn-lg btn-primary">Click to Weather</button>
// </div>
// </div> `
// // row.append(div);
// // div.setAttribute('class', 'col-lg-8 col-md-6 col-sm-12');
// // row.appendChild(div.setAttribute('class', 'col-lg-8 col-md-6 col-sm-12'));
// // row.appendChild(div.setAttribute('class', 'col-lg-8 col-md-6 col-sm-12'));

// var card = document.querySelector('')
