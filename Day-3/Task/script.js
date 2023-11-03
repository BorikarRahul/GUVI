// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/all", true)

// xhr.send()
// xhr.onload = function () {
//     var data = JSON.parse(this.response)
//     console.log("data", data)
//     console.log(data[10].name.common)
//     console.log(data[0].cca3)
//     console.log(data[0].coatOfArms.svg)
//     //object => for in loop
//     // for (var i in data) {
//     //     const res = data[i].name.common
//     //     console.log(res)
//     // }
// }   


const abc = new XMLHttpRequest();

abc.open("GET", "https://restcountries.com/v3.1/all", true);

abc.send();

abc.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data);
    for(var i in data){
        const flag = data[i].flag;
        const cName = data[i].name.common;
        const region = data[i].region;
        const subregion = data[i].subregion;
        const population = data[i].population;
        // console.log("Country Name : " + cName +"," + " Flag : " + flag);
        console.log(`Country Name :- ${cName}, Flag :- ${flag}, Region :- ${region}, SubRegion :- ${subregion}, Population :- ${population}`);
    }
}

