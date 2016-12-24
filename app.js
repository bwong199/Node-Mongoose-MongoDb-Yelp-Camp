var express		= require("express"),
	app 		= express(),
 	bodyParser 	= require("body-parser"),
 	mongoose 	= require("mongoose"), 
 	flash 		= require("connect-flash"),
 	passport 	= require("passport"),
 	LocalStrategy = require("passport-local"),
 	methodOverride = require("method-override"),
 	Campground 	= require("./models/campground"),
 	Comment 	= require("./models/comment"),
 	User		= require("./models/user"),
 	seedDB		= require("./seeds")


// require routes
var commentRoutes 			= require("./routes/comments"),
	campgroundRoutes 		= require("./routes/campgrounds"),
	indexRoutes 			= require("./routes/index")

 	
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();	

// PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret: "Name of pet", 
	resave: false, 
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Campground.create(
// 	{  name: "Mountain Goat's Site", image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg"},
// 	function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("NEWLY CREATED CAMPGROUND");
// 			console.log(campground);
// 		}
// 	}
// )

app.use(function(req, res, next){
	res.locals.currentUser =  req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);




app.listen(8888, process.env.IP, function(){
	console.log("YelpCamp Server Has Started");
});