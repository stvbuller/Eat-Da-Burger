var express = require('express');
//var app = express()
var router = express.Router();
var thing = require('../models/burger.js';)


router.get('/', function(req, res) {
    thing.show(function(data){
        res.render('index', {data : data});
    });
});





// app.get('/',function(req,res){
//   //show home page
//     var results = shwMenu.showMenu();
//     var data = {
//       burgerData: results

//     }
//     //res.send(results);
//     res.render('index', data);
// });

// app.post('/create', function(req, res) {
//     //add a burger
//     res.redirect('/');
// });

// app.post('/update/:id', function(req, res) {
//     //devour a burger, change the devoured field to 1 (true)
//     res.redirect('/');
// });
