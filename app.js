const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const IndexRoutes = require('./src/routes/index');
const path = require('path');
const app = express();


const oneDay = 1000 * 60 * 60 * 24;

// cookie parser middleware
app.use(cookieParser());
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));
// parsing the incoming data
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, useNewUrlParser: true }));

//serving public file
app.use(express.static("src"));

// a variable to save a session
// var session;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(IndexRoutes);
module.exports = app;
