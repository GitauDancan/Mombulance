const express = require('express');
const path = require('path');
const database = require('../database');

const router = express.Router({ mergeParams: true });

router.post('/login', function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
    query = 'SELECT * FROM users WHERE username = ? AND password = ?';

    database.query(query, function (error, data) {
      if (data.length > 0) {

        for (var count = 0; count < data.length; count++) {
          if (data[count].password == password) {
            request.session.username = data[count].username;
            response.redirect('/home')
          } else {
            response.send('Incorrect Password');
          }
        }
      }

      else {


      }
    })
    // {
    //   if (results.length > 0) {
    //     request.session.loggedin = true;
    //     request.session.username = username;
    //     response.redirect('home');
    //   } else {
    //     response.send('Incorrect Username and/or Password!');
    //   }
    //   response.end();
    // });
  }
  else {
    response.send('Please enter Username and Password!');
    response.end();
  }
});

// GET ROUTES
router.get('/', (req, res) => {

  res.render('home');
});
router.get('/ambulanceregistration', (req, res) => {
  session = req.session;
  if (session.userid) {
    res.render('ambulanceregistration');
  } else
    res.render('home');
});


// //username and password
// const myusername = 'user1'
// const mypassword = 'mypassword'


// router.post('/home', (req, res) => {
//   if (req.body.username == myusername && req.body.password == mypassword) {
//     session = req.session;
//     session.userid = req.body.username;
//     console.log(req.session)
//     res.render('home');
//   }
//   else {
//     res.send('Invalid username or password');
//   }
// })

router.get('/ambulancelogin', (req, res) => {
  res.render('ambulancelogin');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/adminlogin', (req, res) => {
  res.render('adminlogin');
});
router.get('/adminregister', (req, res) => {
  res.render('adminregister');
});
router.get('/home', (req, res) => {
  res.render('home');
});
router.get('/ambulanceregistration', (req, res) => {
  res.render('ambulanceregistration');
});
// LOGOUT ROUTE
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
