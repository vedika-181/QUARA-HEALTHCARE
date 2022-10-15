var express = require('express');
var router = express.Router();
var User = require('../models/User');
var flash = require('express-flash');



router.get('/', function(req, res, next) {
    return res.redirect('/home');
});


router.post('/register', function(req, res, next) {
    console.log(req.body);
    var personInfo = req.body;


    if (!personInfo.RegisterEmail || !personInfo.Name || !personInfo.PhoneNumber || !personInfo.RegisterPassword) {
        res.send();
    } else {
            User.findOne({ email: personInfo.RegisterEmail }, function(err, data) {
                if (!data) {
                    var c;
                    User.findOne({}, function(err, data) {

                        if (data) {
                            c = data.unique_id + 1;
                        } else {
                            c = 1;
                        }

                        var newPerson = new User({
                            unique_id: c,
                            email: personInfo.RegisterEmail,
                            name: personInfo.Name,
                            phone: personInfo.PhoneNumber,
                            password: personInfo.RegisterPassword
                        });

                        newPerson.save(function(err, Person) {
                            if (err)
                                console.log(err);
                            else
                                console.log('Success');
                        });

                    }).sort({ _id: -1 }).limit(1);
                    res.redirect('/login')
                    console.log('User added Successfully,Please Login')
                } else {
                    res.redirect('/login')
                    console.log('User already exists,please Login')
                }

            });
        
    }
});



router.post('/login', function(req, res, next) {
    
    User.findOne({ email: req.body.LoginEmail }, function(err, data) {
        if (data) {

            if (data.password == req.body.LoginPassword) {
                req.session.userId = data.unique_id;
                res.redirect('/home')
                console.log('Login Succesful')

            } else {
                res.redirect('/login')
                console.log('Incorrect Password')
            }
        } else {
            res.redirect('/login')
            console.log('User does not exist')
        }
    });
});



router.get('/logout', function(req, res, next) {
    console.log("logout")
    if (req.session) {
        
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/');
            }
        });
    }
});
 

module.exports = router;