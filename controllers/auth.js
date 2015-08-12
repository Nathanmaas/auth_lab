var db = require('../models');
var express = require('express');
var router = express.Router();

//GET /auth/login
//display login form
router.get('/login',function(req,res){
    res.render('auth/login');
});

//POST /login
//process login data and login user
router.post('/login',function(req,res){
  db.user.authenticate(req.body.email,
    req.body.password,function(err,user){
      if(err){
        res.send(err);
      }else if(user){
        req.session.user = user.id;
        res.redirect('/');
      }else{
        res.send('invalid username or password');
      }

    });

});

//GET /auth/signup
//display sign up form
router.get('/signup',function(req,res){
    res.render('auth/signup');
});

//POST /auth/signup
//create new user in database
router.post('/signup',function(req,res){
      if(req.body.password != req.body.password2){
      res.send("passwords must match");
      }else{
        db.user.findOrCreate({
          where:{email: req.body.email
          },
          defaults:{
          email: req.body.email,
          password: req.body.password,
          name: req.body.name
        }
      }).spread(function(user,created){
        if(created){
          res.redirect('/');
        }else{
        res.send('A user with that email address already exists');
      }
      }).catch(function(err){
        res.send(err);
      });
    }

    //do sign up here (add user to database)

    //user is signed up forward them to the home page
    // res.redirect('/');
});

//GET /auth/logout
//logout logged in user
router.get('/logout',function(req,res){
    req.session.user = false;
    res.redirect('/');
});


module.exports = router;