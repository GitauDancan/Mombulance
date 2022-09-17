const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const session = require('express-session');
const port = process.env.PORT || 1340;
var path = require("path");
const dotenv = require('dotenv');
const router = require('')



const bot = { "data": "1" }
app.use(bodyparser.json())
const urlencodedParser = bodyParser.urlencoded({ extended: true })
app.get('/', (req, res) => {
    // res.status(200).send({ bot: bot });
    // console.log(req
    res.render('app')
})

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', urlencodedParser, (req, res) => {
    res.json(req.body);
    console.log(req.body)
    res.render('app', { qs: req.body })
});

console.log(__dirname)
app.use(express.static(__dirname + '/src'));
// app.use(express.static(path.join(__dirname, '/src')));
// app.use('/static', express.static('public'))
app.set('views', path.join(__dirname, '/src/Views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);


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