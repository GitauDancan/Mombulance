var express = require("express");

var router = express.Router();

const credentials = {
    username: "test",
    password: "test"
}


//login user

router.post('/login', (req, res) => {
    if (req.body.username == credentials.username && req.body.password == credentials.password) {
        req.session.user = req.body.username;

        // res.redirect('/app');
        res.end("Login succesful");
    }
    else {
        res.end("Invalid");
    }
})

module.export = routes;