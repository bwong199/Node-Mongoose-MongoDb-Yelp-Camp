var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
{name: "Cloud's Rest", image: "http://www.rbc.com/uos/_assets/images/logos/web/rbc.gif", description: "bloh blah blah"},
{name: "Desert Masa", image: "http://www.rbc.com/uos/_assets/images/logos/web/rbc.gif", description: "bloh blah blah"},
{name: "Canyon Floor", image: "http://www.rbc.com/uos/_assets/images/logos/web/rbc.gif", description: "bloh blah blah"},	
]

function seedDB(){
	//Remove all campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds!");

		// data.forEach(function(seed){
		// 	Campground.create(seed, function(err, campground){
		// 		if(err){
		// 			console.log(err);
		// 		} else {
		// 			console.log("added a campground");
		// 			// create a comment
		// 			Comment.create(
		// 				{text: "This place is great, but I wish there was internet",
		// 					author: "homer"
		// 				}, function(err, comment){
		// 					if(err){
		// 						console.log(err);
		// 					} else {
		// 						campground.comments.push(comment);
		// 						campground.save();
		// 						console.log("Created new comment");
		// 					}
		// 				}
		// 			)
		// 		}
		// 	})
		// });
	});
}

module.exports = seedDB;