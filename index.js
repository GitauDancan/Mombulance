const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 1338;
var path = require("path");

const bot = { "data": "1" }
app.get('/', (req, res) => {
    // res.status(200).send({ bot: bot });
    // console.log(req
    res.render('app')
})

console.log(__dirname)
app.use(express.static(__dirname + '/src'));
// app.use(express.static(path.join(__dirname, '/src')));
// app.use('/static', express.static('public'))
app.set('views', path.join(__dirname, '/src/Views'));
app.set('view engine', 'ejs');

app.listen(port);

module.exports = app;