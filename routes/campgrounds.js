const express 			= require("express"),
	  router 			= express.Router(),
	  Campground 		= require("../models/campground"),
	  middleware 		= require("../middleware");

//INDEX - displays a list of campgrounds
router.get("/", function(req, res){
	//Get all the campgrounds from DB
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
		}
	});
});

//CREATE - add new campground to DB
router.post("/", middleware.isLoggedIn, function(req, res){
	// get data from form and add to campgrounds array
	const name 			= req.body.name,
		  image 		= req.body.image,
		  description 	= req.body.description,
		  price 		= req.body.price,
		  author 		= {
		  	id: req.user._id,
		  	username: req.user.username
		  }
		  newCampground = {name, image, description, price, author}

		  //Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
    	if(err){
    		console.log(err);
    	} else {
    		//redirect back to the campgrounds page
    		res.redirect("/campgrounds");
    	}
    });
});

//NEW - show form to create new campground
router.get("/new", middleware.isLoggedIn, function(req, res){
	res.render("campgrounds/new")
});

//SHOW - displays more information about one campground
router.get("/:id", function(req, res){
	//find the campground with provided ID
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err) {
			console.log(err);
		} else {
			//render SHOW template with that campground
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
}); 

//EDIT ROUTE - shows a form for editing a particular campground
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err) {
			res.redirect("/campgrounds");
		} else {
			res.render("campgrounds/edit", {campground: foundCampground});
		}
	})
});

//UPDATE ROUTE 
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		}
		else {
			req.flash("success", "Campground has been Updated")
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

//DESTROY/DELETE ROUTE
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndRemove(req.params.id, function(err, deletedBlog){
		if(err){
			res.send("Oops!!! An Error Occured, can't delete campground")
		} else {
			req.flash("success", "Campground Deleted!")
			// then redirect to index
			res.redirect("/campgrounds")
		}
	});
});

module.exports = router;