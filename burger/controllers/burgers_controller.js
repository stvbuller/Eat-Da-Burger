var express = require('express');
var app = express()
//var burger = require('../models/burger.js');
var shwMenu = require("../config/orm.js");

var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//app.use("/views", express.static("/views"));
//app.set('views', __dirname + '../views');
// app.engine('handlebars', expressHandlebars({
//             defaultLayout:'main', 
//             layoutsDir: '/Users/steven/RCB _Class/GitRepository/Homework/Eat-Da-Burger/burger/views/layouts'
//         }));

// app.engine('.hbs', exphbs({
//         defaultLayout: 'main', 
//         extname: '.hbs',
//         layoutsDir:'server/views/layouts',
//         partialsDir:'server/views/partials'
// }));

var PORT = process.env.PORT || 8090;


app.get('/',function(req,res){
  //show home page
    var results = shwMenu.showMenu();
    var data = {
      burgerData: results

    }
    //res.send(results);
    res.render('index', data);
});

app.post('/create', function(req, res) {
    //add a burger
    res.redirect('/');
});

app.post('/update/:id', function(req, res) {
    //devour a burger, change the devoured field to 1 (true)
    res.redirect('/');
});

app.listen(PORT, function(){
  console.log('Listening on %s', PORT)
})