var moviesJSON = require('../db.json');


//home
exports.index = function(req, res) {
    
    var anime = moviesJSON.anime;
    var about = moviesJSON.about;

    res.render('index', {
        title : "Anime",
        title2 : "Wars",
        title3 : "Welcome to my blog",
        title4  : "About",
        anime : anime,
        about : about

    });
  };