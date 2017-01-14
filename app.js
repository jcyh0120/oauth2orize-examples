/**
 * Module dependencies.
 */
var express = require('express')
  , passport = require('passport')
  , site = require('./site')
  , oauth2 = require('./oauth2')
  , user = require('./user')
  , client = require('./client')
  , util = require('util');

// Express Upgrade packages
var morgan = require('morgan')
, cookieParser = require('cookie-parser')
, bodyParser = require('body-parser')
, session = require('express-session')
, connect = require('connect')
, errorHandler = require('errorhandler');
  
// Express configuration
  
var app = express();
app.set('view engine', 'pug');
app.use(morgan('combined'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
/*
app.use(function(req, res, next) {
  console.log('-- session --');
  console.dir(req.session);
  //console.log(util.inspect(req.session, true, 3));
  console.log('-------------');
  next()
});
*/
app.use(passport.initialize());
app.use(passport.session());
// app.use(app.router);


// Passport configuration

require('./auth');


app.get('/', site.index);
app.get('/login', site.loginForm);
app.post('/login', site.login);
app.get('/logout', site.logout);
app.get('/account', site.account);

// app.get('/dialog/authorize', oauth2.authorization);
// app.post('/dialog/authorize/decision', oauth2.decision);
// app.post('/oauth/token', oauth2.token);

// app.get('/api/userinfo', user.info);
// app.get('/api/clientinfo', client.info);

if ('development' == app.get('env')) {
  app.use(errorHandler());
}

app.listen(3000);
