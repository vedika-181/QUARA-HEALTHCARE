const mongoose = require('mongoose');

//SCHEMA
const consultationSchema= new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true,
		unique: true
	},
	phone:{
		type: Number,
		required:true
	},
	doctor:String
});

//collection creation
const Patientdetails =new mongoose.model("Patientdetails",consultationSchema);



module.exports = Patientdetails