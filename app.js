const express 			= require("express"),
 	  app		    	= express(),
 	  bodyParser 		= require("body-parser"),
 	  mongoose 			= require("mongoose"),
 	  Campground 		= require("./models/campground"),
 	  Comment 			= require("./models/comment"),
 	  seedDB 			= require("./seeds"),
 	  passport 			= require("passport"),
 	  LocalStrategy 	= require("passport-local"),
 	  User 				= require("./models/user"),
 	  methodOverride 	= require("method-override"),
 	  flash 			= require("connect-flash");


//requiring routes
const commentRoutes 	= require("./routes/comments"),
	  campgroundRoutes 	= require("./routes/campgrounds"),
	  indexRoutes 		= require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp_v12");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

//seedDB(); // seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "I have an Android native app to build with Reactnative",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser 	= req.user;
	res.locals.error 		= req.flash("error");
	res.locals.success 		= req.flash("success");
	next();
})

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(8080, function(){
	console.log("YelpCamp server has Started")
})