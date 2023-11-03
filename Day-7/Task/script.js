const abc = new XMLHttpRequest();
abc.open("GET", "https://restcountries.com/v3.1/all", true);
abc.send();

abc.onload = function(){
    let data = JSON.parse(this.response);

    console.log(data);

    //  a.	Get all the countries from Asia continent /region using Filter function


    const country = data.filter((i) => i.region === "Asia");
    
    // -----------------------------------------------------------------------
    
    // b.	Get all the countries with a population of less than 2 lakhs using Filter function


    const population = data.filter((i) => i.population < 200000)
    
    // -----------------------------------------------------------------------


    // c.	Print the following details name, capital, flag using forEach function


    let c = [];
    const name = data.forEach((i) =>{
        let cName = i.name.common;
        let capital = i.capital;
        let flag = i.flag;
        
        
        let d = (`Name; ${cName} , country Capital: ${capital}, Flag: ${flag}`)

        c.push(d);
    })

    // -----------------------------------------------------------------------


    // d.	Print the total population of countries using reduce function


    const totalPopulation = data.reduce((a, c) => {
        return a + c.population;
    }, 0)

    // -----------------------------------------------------------------------

    // 
    console.log(country, population, c, totalPopulation)
}