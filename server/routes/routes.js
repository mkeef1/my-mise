'use strict';

var morgan         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('express-method-override'),
    session        = require('express-session'),
    RedisStore     = require('connect-redis')(session),
    debug          = require('../lib/debug'),
    security       = require('../lib/security'),
    home           = require('../controllers/home'),
    recipe         = require('../controllers/recipe'),
    yum            = require('../controllers/yum'),
    users          = require('../controllers/users');

module.exports = function(app, express){
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../public'));
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({store:new RedisStore(), secret:'my super secret key', resave:true, saveUninitialized:true, cookie:{maxAge:null}}));

  app.use(security.authenticate);
  app.use(debug.info);

  app.get('/home', home.index);
  app.post('/register', users.register);
  app.post('/login', users.login);

  app.use(security.bounce);
  app.get('/profile', users.show);
  app.post('/profile', users.update);
  app.get('/recipes', recipe.index);
  app.get('/recipes/yRecipes', yum.index);
  app.post('/recipes/yRecipes', yum.add);
  app.post('/recipes/recipes', recipe.add);
  app.get('/recipes/recipes/:recipeId', recipe.info);
  app.delete('/logout', users.logout);

  console.log('Express: Routes Loaded');
};

