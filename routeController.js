//using this routeController, we can pass any collection from the DB to route data for appropriate request

var express = require('express');
var router = express.Router(); //use the Router middleware

var mapRoute= function(router, collection){

var collection = '/' + collection;
var collectionObj = require('./controllers' + collection); //provides access to all collection router methods inside controller subdirectory, ie. /controller/profiles 

router.route(collection)
//list all
		.get(collectionObj.index)
//create
		.post('/create', collectionObj.create)
//show by id
		.get('/:id', collectionObj.show)
//update
		.put('/:id', collectionObj.update)
//delete
		.delete('/:id', collectionObj.destroy);
};
module.exports.mapRoute = mapRoute;
