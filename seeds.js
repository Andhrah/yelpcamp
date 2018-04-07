// const mongoose 		= require("mongoose");
// const Campground 	= require("./models/campground")
// const Comment 	 	= require("./models/comment")

// const data = [
// 	{
// 		name: "Andela Nigeria",
// 		image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
// 		description:`This is Andela Nigeria hangout Camp.
// 					  ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// 						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// 						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// 						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// 						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// 	},
// 	{
// 		name: "Andela Kenya",
// 		image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
// 		description: `This is Andela Kenya hangout Camp.
// 					   ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// 						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// 						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// 						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// 						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// 	},
// 	{
// 		name: "Andela Uganda",
// 		image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
// 		description: `This is Andela Uganda hangout Camp.
// 					   ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// 						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// 						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// 						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// 						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// 	},
// 	{
// 		name: "Best Companion",
// 		image: "https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
// 		description: `This Camp is for Best of Friends/Companions.
// 					   ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
// 						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
// 						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
// 						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
// 						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
// 						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// 	}

// ]



// function seedDB(){
// 	//Remove all campgrounds
// 	Campground.remove({}, function(err){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("removed campgrounds!");
// 			// Add a few campgrounds
// 			data.forEach(function(seed){
// 				Campground.create(seed, function(err, campground){
// 					if (err){
// 						console.log(err);
// 					} else {
// 						console.log("Added a campground");
// 						// Create a comment
// 						Comment.create(
// 							{
// 								text: "This Is Andela TIA",
// 								author: "CodeConqueror"
// 							}, function(err, comment){
// 								if (err){
// 									console.log(err);
// 								} else {
// 									campground.comments.push(comment);
// 									campground.save();
// 									console.log("Created Comment")
// 								}
// 							});
// 					}
// 				});
// 			});
// 		}
// 	});
// }

// module.exports = seedDB;