var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 8090;

var connect        = require('connect')
var methodOverride = require('method-override')
 
// override with the X-HTTP-Method-Override header in the request 
app.use(methodOverride('X-HTTP-Method-Override'))



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'burgers_db'
});
 
connection.connect();
 
connection.connect(function(err) {
  if(err) {
    console.log("Error", err.stack);
  }

  console.log("Connected as id: %s", connection.threadId)
})
 
//connection.end();

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});