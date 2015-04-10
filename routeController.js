//using this routeController, we can pass any mapObjects here for routing rasks

var express = require('express');
var router = express.Router(); //use the Router middleware

var mapRoute= function(router, mapObj){

var mapObj = '/' + mapObj;
var controllerObj = require('./controllers' + mapObj); //provides access to all routing methods inside controller subdirectory, ie. /controller/profiles 

//list all
router.route(mapObj).get(controllerObj.index);
//create
router.route(mapObj+'/create').post(controllerObj.create);
//routes end with id
router.route(mapObj+'/:id')
//show
			.get(controllerObj.show)
//update
			.put(controllerObj.update)
//delete
			.delete(controllerObj.destroy);
};
module.exports.mapRoute = mapRoute;
