var express= require("express");
var bodyParser= require("body-parser");
var router = express.Router();
const mongoose = require('mongoose');
const validator = require('validator');
mongoose.set('useCreateIndex', true);

const Patientdetails = require('../models/PatientDetails')


const app=express()



app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
	extended: true
}));

router.post('/Consultation', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var phone=req.body.phone;
	var doctor=req.body.doctor;

	var data = {
		"name":name,
		"email": email,
		"phone": phone,
    "doctor":doctor,
	}

	const patientdetails = new Patientdetails(data)

	patientdetails.save((err, doc) => {
		if(err){
			console.log(err)
		}
		console.log("Appointment booked successfully")
		
	})
        
	return res.redirect('Consultation/confirmation.html');
			
});
		
module.exports = router;
