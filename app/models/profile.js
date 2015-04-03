/*Create a data model using Mongoose object modeling tool for MongoDB */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.types.ObjectId; //auto assigned document id

var ProfileStructure = new Schema({
Name: {type: String, required: true, trim: true},
Age : {type: Number, min: 18, max:180},
Interest: String
}):

module.exports = mongoose.model('Profile', ProfileStructure);


