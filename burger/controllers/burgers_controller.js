var express = require('express');
var router = express.Router();
var queries = require('../models/burger.js');


router.get('/', function(req, res) {
    queries.show(function(data){
        //console.log(data);
        var data1 = {
            burgerData: data
        }
        //res.render('index', {data : data});
        res.render('index', data1);

    });
});

// router.post('/create', function(req, res) {
//     queries.add(function(data) {
//         res.redirect('/');
//     })
// })


module.exports = router;


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
