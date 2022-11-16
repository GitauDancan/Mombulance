const express = require("express");
const app = express();
var path = require("path");
const bodyParser = require('body-parser');
const router = require('./src/router');
const mysql = require('mysql');
const session = require('express-session');
const port = process.env.PORT || 1340;
const dotenv = require('dotenv');

app.set('views', path.join(__dirname, '/src/Views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));



const bot = { "data": "1" }
app.use(bodyParser.json())
app.use(bodyParser.json())
app.use(express.static('src'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/route', router);


app.get('/', (req, res) => {
    // res.status(200).send({ bot: bot });
    // console.log(req
    res.render('login')
})

app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/', (req, res) => {
    // res.status(200).send({ bot: bot });
    // console.log(req
    res.render('book')
})

app.get('/book', (req, res) => {
    res.render('book');
});

// app.post('/login', urlencodedparser, (req, res) => {
//     res.json(req.body);
//     console.log(req.body)
//     res.render('app', { qs: req.body })
// });

console.log(__dirname)
app.use(express.static(__dirname + '/src'));


// app.use(express.static(path.join(__dirname, '/src')));
// app.use('/static', express.static('public'))





// const mysql = require('mysql')
require('dotenv').config();
const connectionLog = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST_LOG,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT

}).on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
});

// db.connect((error) => {
//     if (error) {
//         console.log(error)
//     }
//     else {
//         console.log("connected")
//     }

// })

app.listen(port);





module.exports = app;