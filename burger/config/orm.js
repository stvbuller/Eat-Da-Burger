var connection = require("./connection.js");
//var connection = connectMysql.connectDb();

connection.connect(function(err) {
  if(err) {
    console.log("Error", err.stack);
  }
  console.log("Connected as id: %s", connection.threadId)
});


exports.addBurger = function(burger){
  var burgerName = burger;
  var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + burgerName + "')";
  connection.query(mySQLQuery, function(err) {
    if (err) {
      throw err
    }
  });
}

exports.devourBurger = function(id) {
  var id = id;
  connection.query("UPDATE burgers SET devoured=1 WHERE id=?", [id], function(err, rows, fields) {                                                   
    if (err) {
      throw err;                
    }
  }); 
}

exports.showMenu = function() {
  connection.query('SELECT * FROM burgers', function(err, results) {                                                   
      if (err) {
        throw err
      };
      console.log("The burger connection test :" + results[0].burger_name); 
      return results;                
  });
 } 

