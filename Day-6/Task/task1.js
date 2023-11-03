class Movie{
    constructor(title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

function getPG(movieArray){
    return movieArray.filter((movie) => movie.rating === "PG");
}

const casino = new Movie("Casino Royale", "Eon Productions", "PG13");

const Movies = [
    new Movie("Casino", "EoN", "PG"),
    new Movie("hero-6", "Disney", "PG13"),
    new Movie("Ana", "fox Studio", "R"),
    casino,
];

const pgMovies = getPG(Movies);
console.log(pgMovies);


