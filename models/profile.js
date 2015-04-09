/*Create a data model using Mongoose object modeling tool for MongoDB */

var mongoose = require('mongoose');
var db = mongoose.connection;

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId; //auto assigned document id

var ProfileStructure = new Schema({
name: {type: String, required: true, trim: true},
age : {type: Number, min: 18, max:180},
interest: String
});

module.exports = mongoose.model('Profile', ProfileStructure);


