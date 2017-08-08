var espress = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var app = express();
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride('_method'));
app.engine('hamdlebars', exphbs({
	defaultLayout: "main"
}));
app.set('view engone','handlebars')

var port = 3000;
app.listen(port);