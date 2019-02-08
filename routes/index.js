var animeJSON = require('../db.json')


//home

exports.index = function(req, res) {

    var anime = animeJSON.anime;
    var about = animeJSON.about;

    res.render('index', {
        title : "anime",
        anime :anime,
        title2 : "Wars",
        title3 : "Welcome to my blog",
        title4  : "About",
        anime : anime,
        about :about,
    });
};

///to make a new page
exports.anime_single = function(req, res){

    var episode_number = req.params.episode_number;

    var anime = animeJSON.anime;

    var animes = anime[episode_number - 1];

    var title =  animes.title;

    res.render('anime_single', {
         anime : anime,
         title : title,
         animes : animes
    });
    };