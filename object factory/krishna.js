var movies = require('./movies');
var krishnasMovies = movies();
krishnasMovies.favMovie = "Good Will Hunting";
console.log("Krishna's favorite movie is: " + krishnasMovies.favMovie);