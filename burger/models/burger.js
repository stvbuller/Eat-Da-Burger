var orm = require("../config/orm.js");

var burgerQueries = {
  show: function(cb) {
    orm.showBurgers('things', function(res) {
      cb(res)
    });
  },
  add: function(cb) {
    orm.addBurger('swiss', function(res){
      cd(res)
    });
  }
};


module.exports = burgerQueries;
