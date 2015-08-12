var db = require('./models');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');

//configure express
var app = express();
app.set('view engine','ejs');

//load middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret:'hfladhlksfhalkdhsflkhdlkflkdhf',
  resave: false,
  saveOnUnintialized: true
}));
app.use(function(req,res,next){
  if(req.session.user){
    db.user.findById(req.session.user).then(function(user){
      req.currentUser = user;
      next();
    });
  }else{
    req.currentUser = false;
    next();
  }
});

//load routes
app.use('/',require('./controllers/main.js'));
app.use('/auth',require('./controllers/auth.js'));

//listen for connections
app.listen(3000);