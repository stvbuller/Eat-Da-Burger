var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user:'root',
  password: '',
  database:'burgers_db'
});
 
 
// connection.connect(function(err) {
//   if(err) {
//     console.log("Error", err.stack);
//   }
  
//   console.log("Connected as id: %s", connection.threadId)
// });


//used to test the database connection
// connection.query('SELECT * FROM burgers', function(err, rows, fields) {                                                   
//     if (err) throw err;
//     console.log("The burger test :" + rows[0].burger_name);                 
// });