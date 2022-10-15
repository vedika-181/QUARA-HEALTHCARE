var express= require("express");
var bodyParser= require("body-parser");
var router = express.Router();
const mongoose = require('mongoose');

var db = mongoose.connection;
mongoose.set('useCreateIndex', true);



var app=express()

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({
	extended: true
}));
router.post('/payment', function(req,res){
	var fullname= req.body.Fullname;
	var address = req.body.Address;
	var zip =req.body.zip;
	var card_holders_name=req.body.Card_holders_name;
	var card_number=req.body.Card_number;
	var exp_month=req.body.Expiry_month;
	var exp_year=req.body.Expiry_year;
	var cvv=req.body.CVC_number;

	const paymentSchema = new mongoose.Schema({
		name: String,
		address: String,
		zip: Number,
		Card_Holders_name: String,
		Card_Holders_number: String,
		Expiry_Month: String,
		Expiry_year: String,
		CVV_Number: Number
	})
	
	const Payment = new mongoose.model("PaymentDetail", paymentSchema)

	var data = {
		"name":fullname,
		"address":address,
		"Zip": zip,
		"Card_Holders_name": card_holders_name,
		"Card_Holders_number":card_number,
		"Expiry_Month":exp_month,
		"Expiry_Year":exp_year,
		"CVV_Number":cvv,
        
	}

	const payment = new Payment(data)
	payment.save((err, doc) => {
		if(err) throw err
		console.log("Payement done successfully")
	})
		
	return res.redirect('/confirm');
})

module.exports = router;