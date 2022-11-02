const express = require('express');
const path = require('path');


const router = express.Router({ mergeParams: true });

// GET ROUTES
router.get('/', (req, res) => {

  res.render('home');
});

router.get('/ambulanceregistration', (req, res) => {
  session=req.session;
  if(session.userid){
    res.render('ambulanceregistration');
  }else
  res.render('home');
});

//username and password
const myusername = 'user1'
const mypassword = 'mypassword'
  

router.post('/home',(req,res) => {
  if(req.body.username == myusername && req.body.password == mypassword){
      session=req.session;
      session.userid=req.body.username;
      console.log(req.session)
      res.render('home');
      }
  else{
      res.send('Invalid username or password');
  }
})

router.get('/ambulancelogin', (req, res) => {
  res.render('ambulancelogin');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
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
