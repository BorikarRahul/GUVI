function getCities() {
    console.log("Getting cities...");
    let res = fetch("https://restcountries.com/v3.1/all")
    let data = res.json();
    console.log(data);
    console.log("Hello world!");
}

// getCities();

function getCities1() {
    console.log("Getting cities...");
    let res = fetch("https://restcountries.com/v3.1/all")
    // let data = res.json();
    console.log(res);
    console.log("Hello world!");
}

// getCities1();

async function getCities2() {
    console.log("Getting cities...");
    let res = await fetch("https://restcountries.com/v3.1/all")
    let data = res.json();
    console.log(data[0]);
    // console.log("Hello world!");
}

getCities2();

async function getCities3() {
    console.log("Getting cities...");
    let res = await fetch("https://restcountries.com/v3.1/all")
    let data = await res.json();
    console.log(data[0]);
    console.log("Hello world!");
}

// getCities3();