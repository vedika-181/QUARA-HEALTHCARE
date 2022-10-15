var express= require("express");
var bodyParser = require("body-parser");
var router = express.Router();
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
var db = mongoose.connection;

var app=express()
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
	extended: true
}));

//SCHEMA
const Feedback= new mongoose.Schema({
	username:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	msg:{
		type: String,
		required:true
	},
});

//collection creation
const feedback = new mongoose.model("Feedback",Feedback);

router.post('/Feedback', function(req,res){
	var username = req.body.name;
	var email =req.body.email;
	var msg=req.body.msg;
	

	var data = {
		"username":username,
		"email": email,
		"Feedback": msg,
        
	}
db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
	});
		
	return res.redirect('Form/form.html');
})

module.exports = router;
