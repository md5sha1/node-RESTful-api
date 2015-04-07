/*Required Modules and Dependencies for our REST API and Server Configuration */

var express = require('express'); //express framework
var logger = require ('morgan'); //http req logger middleware
var bodyParser = require('body-parser'); //nodejs body parsing middleware
var app = express();

//app configuration; app.configure() no longer needed
app.use(logger('dev')); //logs to the console in dev format
app.use(bodyParser.urlencoded({extended:false, limit: '200kb'}));//parse application/x-www-form-urlencoded
app.use(bodyParser.json());//parse application/json

//Connect to the DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://md5sha1:pass@novus.modulusmongo.net:27017/Pezib3ug'); //connecting to the mongo DB from modulus

var Profile = require('./models/profile'); //data model

//Initialize the Server
var port = process.env.PORT || 9000;
app.listen(port, function(){console.log('Express server initialized on port: ' +  port)});



