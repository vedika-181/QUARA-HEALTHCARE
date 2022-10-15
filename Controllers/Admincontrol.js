var express = require('express');
var router = express.Router();
var User = require('../models/User');
var flash = require('express-flash');
var ejs = require('ejs');
var path = require('path');

const patientDetails = require('../models/PatientDetails')

const app = express()
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname + '../views/css')));

router.get('/admin', async function(req, res, next) {
    User.findOne({ unique_id: req.session.userId }, async function(err, data) {

        if (!data) {
            res.redirect('/');
        } else {
            
            const patientArray = await patientDetails.find({})

            return res.render('admin.ejs', { user: data, patients: patientArray});
        }
    });
});

module.exports = router;