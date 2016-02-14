var express = require('express');
var router = express.Router();
var thing = require('../models/burger.js');


router.get('/', function(req, res) {
    thing.show(function(data){
        res.render('index', {data : data});
    });
});


module.exports = router;


