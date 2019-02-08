var express = require('express');

var app = express();

app.set('view engine', 'ejs')


var routes = require('./routes')
//routes
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

//home

app.get('/', routes.index);
///create
app.get('/create',(req,res) =>{
    res.render('create');
});

///to make a new page
app.get('/anime/:episode_number?', routes.anime_single);

// app.get('/darth', function(req,res) {
//     res.send("This is a server  darth home");
// });

app.listen(3000, function() {
    console.log("This app is running on localhost:3000");
});


//NOT FOUND