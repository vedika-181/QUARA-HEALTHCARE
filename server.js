const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('express-flash')
var env = require('dotenv').config()
var path = require('path');
var session = require('express-session');
var MongoStore = require('connect-mongo');

mongoose.connect('mongodb://localhost:27017/Data' , {useNewUrlParser: true , useUnifiedTopology: true ,}) 
const db = mongoose.connection
const app = express()
db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})

app.use(session({
    secret: 'story book',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/Data' })
}));


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(flash())



var index = require('./controllers/AuthControl');
app.use(index);
var index1 = require('./controllers/edit')
app.use(index1)
var index2 = require('./controllers/consultationserver')
app.use(index2)
var index3 = require('./controllers/Formserver')
app.use(index3)
var index4 = require('./controllers/Admincontrol')
app.use(index4)
var index5 =require('./controllers/paymentcontrol')
app.use(index5)
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/Login/Login-SignUp.html')
})


app.get('/home', (req,res) => {
    res.sendFile(__dirname + '/public/Home/Home.html')
})


app.get('/confirm', (req, res) => {
    res.sendFile(__dirname + '/public/Payment/confirmation1.html')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})

