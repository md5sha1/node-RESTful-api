/*Express router middleware for http method routing */

var express = require('express');
var router = expresss.Router(); //uses the Router middleware

//load the middleware specific to this router for all req/res
router.use(function(req, res, next){
console.log('Router ready: ' + Date.now());
next();
});


