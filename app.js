/*Required Modules and Dependencies for our REST API and Server Configuration */

var express = require('express'); //express framework
var routeController = require('./routeController');
var logger = require ('morgan'); //http req logger middleware
var bodyParser = require('body-parser'); //nodejs body parsing middleware
var app = express();

//app configuration; app.configure() no longer needed
app.use(logger('dev')); //logs to the console in dev format
app.use(bodyParser.urlencoded({extended:false, limit: '200kb'}));//parse application/x-www-form-urlencoded
app.use(bodyParser.json());//parse application/json

//Connect to the DB
var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error);
db.on('open', function(){
console.log('Connected to the remote DB: ' + Date.now());
var Profile = require('./models/profile');
//use the Profile constructor to create instances of profiles documents in MongoDB 
});
mongoose.connect('mongodb://md5sha1:pass@novus.modulusmongo.net:27017/Pezib3ug'); //connecting to the mongo DB from modulus

var router = express.Router(); //uses the Router middleware object

//load the middleware specific to this router for all req/res
router.use(function(req, res, next){
console.log('Router ready to take client requests: ' + Date.now());
next();
});
app.use('/api', router); // use the router prefixed with /api/* for all requests
//test the router; top level view page can also be accessed from here
router.get('/', function(req, res){res.json({msg: 'Router functional: use /api/objName/ path for http operations'});
});

var mapObjects = ['profiles']; //we can add more object files to this array in future if needed for routing
//map the controller object to appropriate route 
mapObjects.forEach(function(mapObj){
routeController.mapRoute(router, mapObj);
});

//Initialize the Server
var port = process.env.PORT || 9000;
app.listen(port, function(){console.log('Express server initialized on port: ' +  port);
			    console.log('http access url: localhost:'+port+'/api');
			});



