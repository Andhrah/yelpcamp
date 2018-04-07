const mongoose = require("mongoose");

//SCHEMA SETUP

const campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	price: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String	
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

// Create a model and pass the schema to it 
const Campground = mongoose.model("Campground", campgroundSchema);
// and then export
module.exports = Campground;