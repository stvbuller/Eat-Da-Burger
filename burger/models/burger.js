var orm = require("../config/orm.js");

var burgerQueries = {
  show: function(cb) {
    orm.showBurgers('things', function(res) {
      cb(res);
    });
  },
  add: function(burgerName, cb) {
    orm.addBurger(burgerName, function(res){
      cb(res);
    });
  },
  eat: function(cb) {
    orm.eatBurger(38, function(res){
      cb(res);
    })
  }
};


module.exports = burgerQueries;
