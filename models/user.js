const mongoose 					= require("mongoose");
	  passportLocalMongoose 	= require("passport-local-mongoose");


// Schema setup and modelling
const userSchema = new mongoose.Schema({
	username: String,
	password: String
});

userSchema.plugin(passportLocalMongoose);

// create a model for user and pass in the userSchema to it
const User = mongoose.model("User", userSchema);
// then export
module.exports = User;