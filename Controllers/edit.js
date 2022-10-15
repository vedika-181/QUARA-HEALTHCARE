var express = require('express');
var router = express.Router();
var User = require('../models/User');
var flash = require('express-flash');
var ejs = require('ejs');
var path = require('path');


const app = express()
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname + '../views/css')));

router.get('/edit', function(req, res, next) {
    User.findOne({ unique_id: req.session.userId }, function(err, data) {

        if (!data) {
            res.redirect('/');
        } else {
            return res.render('edit.ejs', { "name": data.name, "email": data.email,"phone":data.phone });
        }
    });
});

router.get('/adminLogin', function(req, res, next) {
    return res.render('adminLogin.ejs');
});



router.post('/adminLogin', function(req, res, next) {
    User.findOne({ email: req.body.email }, function(err, data) {
        if (data) {

            if (data.password == req.body.password) {
                req.session.userId = data.unique_id;
                 res.redirect('/admin')
                console.log("Success")

            } else {
                res.render('adminlogin.ejs');
                console.log("Incorrect Password")
            }
        } else {
            res.render('adminLogin.ejs')
            console.log("Email not registered")
        }
    });
});



router.post('/changepass', function(req, res, next) {
    
    User.findOne({ email: req.body.email }, function(err, data) {
        if (!data) {
            res.send({ "Success": "This Email Is not regestered!" });
        } else {
            
            if (req.body.password == req.body.passwordConf) {
                data.password = req.body.password;
                

                data.save(function(err, Person) {
                    if (err)
                        console.log(err);
                    else
                        console.log('Success');
                    res.send({ "Success": "Password changed!" });
                });
            } else {
                res.send({ "Success": "Password does not matched! Both Password should be same." });
            }
        }
    });

});

module.exports = router;