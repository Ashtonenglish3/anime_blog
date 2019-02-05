var express = require('express');

var app = express();




app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
///routes


//home
app.get('/', routes.home);

// app.get('/darth', function(req, res) {
//     res.send("This is a server  response on the darth page");
// })

app.listen(3000, function() {
    console.log("The application is running on localhost:3000");
});