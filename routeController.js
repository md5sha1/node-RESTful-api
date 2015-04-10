
//using this routeController, we can pass any mapObjects here

var express = require('express');
var router = express.Router(); //use the Router middleware

var mapRoute= function(router, mapObj){

var mapObj = '/' + mapObj;
var controllerObj = require('./controllers' + mapObj); //provides access to all routing methods inside controller subdirectory, ie. /controller/profiles 

router.route(mapObj)
//list all
		.get(controllerObj.index)
//create
		.post('/create', controllerObj.create)
//show by id
		.get('/:id', controllerObj.show)
//update
		.put('/:id', controllerObj.update)
//delete
		.delete('/:id', controllerObj.destroy);
};
module.exports.mapRoute = mapRoute;
