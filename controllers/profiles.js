//require the Profile Model for routing operations on db.profiles collection
var Profile = require('../models/profile');

//list all profiles
exports.index = function(req, res){
			Profile.find(function(err, profiles){
					if(err)
					 res.send(err);
					 res.json(profiles);
			});
};
//create a profile
exports.create = function(req,res){
			//create a profile document
			var profile = new Profile({
					name:req.body.name,
					age: req.body.age,
					interest: req.body.interest		
				});
		profile.save(function(err, data){
				if(err)
					res.send(err);
				console.log('new profile: ' + data);
				res.json({msg: 'A profile has been created' });
			});
};
//show a profile
exports.show = function(req, res){
			Profile.findById(req.params.id, function(err, profile){ 
						if(err)
							res.send(err);
						res.json(profile);
				});
};
//update a profile
exports.update = function(req, res){
			Profile.findById(req.params.id, function(err, profile){
						if(err)
							res.send(err);
			profile.name = req.body.name;
			profile.age = req.body.age;
			profile.interest = req.body.interest;
			profile.save(function(err){
					if(err)
						res.send(err);
					res.json({msg:'profile has been updated'});
					});
				});
};
//delete a profile
exports.destroy = function(req, res){
			Profile.findById(req.params.id, function(err, profile){
					if(err)
						res.send(err);
			profile.remove(function(err){
					if(err)
						res.send(err);
					res.json({msg: 'profile destoyed'});
					});			
				});
};

/* --end of route operations-- */

