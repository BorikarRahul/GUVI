
const abc = new XMLHttpRequest();
abc.open("GET", "https://restcountries.com/v3.1/all", true);
abc.send();

abc.onload = function () {
    var data = JSON.parse(this.response);
    console.log(data);
    
    console.log(`JSON Data : ${loopforEach(data)}, TimeZone: ${loopfor(data)} `);
};

let loopfor = (key) => {
    for (let i = 0; i < 1; i++) {
        console.log(key[i].timezones);
    }
};

let loopforin = (key) => {
    for (let key in data) {
        console.log(data[1].name.common);
    }
};

let loopforof = (key) => {
    for (let value of key) {
        console.log(value.name.common);
    }
};

let loopforEach = (key) => {
    key.forEach(function (value, key) {
        console.log(key + ": " + value.name.common);
    });
};
