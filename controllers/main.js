var db = require('../models');
var express = require('express');
var router = express.Router();

//GET /
//home page of site
router.get('/',function(req,res){
  console.log('flash',req.flash());
  console.log('flash',req.flash());
    res.render('main/index');
      // ,{currentUser:req.currentUser});
});

//GET /restricted
//an example restricted page
router.get('/restricted',function(req,res){
  if(req.currentUser){
    res.render('main/restricted');
  }else{
    req.fash('danger', 'Access Denied');
    res.redirect('/');
  }
});


module.exports = router;