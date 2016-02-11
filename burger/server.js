var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 8090;


 
// override with the X-HTTP-Method-Override header in the request 
app.use(methodOverride('X-HTTP-Method-Override'))
//setup for handlebars
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));


 
//connection.end();

app.get('/', function (req, res) {
        //res.render('index', lineage);
        res.send('Hello World');
});
 
app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});