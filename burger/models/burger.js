var orm = require("../config/orm.js");

var things = {
  show: function(cb) {
    orm.showBurgers('things', function(res) {
      cb(res)
    });
  }
};


module.exports = things;
