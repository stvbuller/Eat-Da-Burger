var addBurger1 = require("../config/orm.js");
var eatBurger = require("../config/orm.js");
var shwMenu = require("../config/orm.js");


//exports.burger =function() {}


addBurger1.addBurger("swiss");
eatBurger.devourBurger(10);
shwMenu.showMenu();
