var moviesJSON = require('../movies.json');


//home
exports.home = function(req, res) {
    
    var movies = moviesJSON.movies;

    res.render('home', {
        title : "Anime",
        title2 : "Wars",
        movies : movies
    });
  };