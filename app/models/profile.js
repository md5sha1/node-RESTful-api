/*Create a data model using Mongoose object modeling tool for MongoDB */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.types.ObjectId; //auto assigned unique id

var ProfileStructure = new Schema({
ProfileId: ObjectId,
Name: {type: String, required: true, trim: true},
Age : {type: Number, min: 18, max:180},
Interest: String
}):

module.exports = mongoose.model('Profile', ProfileStructure);


