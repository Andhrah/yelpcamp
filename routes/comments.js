const express 	= require("express"),
	  router 	= express.Router({mergeParams: true}),
	  Campground = require("../models/campground"),
	  Comment 	= require("../models/comment"),
	  middleware = require("../middleware");

//NEW ROUTE - Shows form to create a new comment
router.get("/new", middleware.isLoggedIn, function(req, res){
	//find campground by ID
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new", {campground});
		}
	})
});

//CREATE - Add new comment to the DB
router.post("/", middleware.isLoggedIn, function(req, res){
	//look up campground using ID
	Campground.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
			res.redirect("/campgrounds");
		} else {
			//create new comment
			Comment.create(req.body.comment, function(err, comment){
				if (err) {
					req.flash("error", "Something went wrong!");
					console.log(err);
				} else {
					//add username and id to comment
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					//save comment
					comment.save();
					//connect new comment to campground
					campground.comments.push(comment);
					campground.save();
					req.flash("success", "Successfully added comment");
					//redirect
					res.redirect("/campgrounds/" + campground._id);
				}
			})
		}
	})	
});

//EDIT ROUTE - Edit a particular comment
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
	Comment.findById(req.params.comment_id, function(err, foundComment){
		if(err){
			res.redirect("back");
		} else {
			res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
		}
	});
});

//UPDATE ROUTE - Update a particular comment
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
		if(err) {
			res.redirect("back");
		} else {
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

//DESTROY/DELETE ROUTE - Delete a particular comment
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
	//findByIdAndRemove
	Comment.findByIdAndRemove(req.params.comment_id, function(err){
		if(err){
			res.redirect("back");
		} else {
			req.flash("success", "Comment Deleted!");
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

module.exports = router;