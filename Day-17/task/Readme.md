# Restcontries & Weather using fetch API

## webpage display the country and weather data using API

```JavaScript

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
```
