var moviesJSON = require('../db.json');


//home
exports.home = function(req, res) {
    
    var anime = moviesJSON.anime;

    res.render('home', {
        title : "Anime",
        title2 : "Wars",
        title3 : "Welcome to my blog",
        anime : anime

    });
  };