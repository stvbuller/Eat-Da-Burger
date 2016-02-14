var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
//app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 8090; 

app.use(bodyParser.urlencoded({extended: false}));
 
// override with the X-HTTP-Method-Override header in the request 
app.use(methodOverride('X-HTTP-Method-Override'))
//setup for handlebars
var expressHandlebars = require('express-handlebars');
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.get('/', function (req, res) {
        res.send('Hello World');
});
 
app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});

//connection.end();