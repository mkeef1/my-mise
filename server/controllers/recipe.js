'use strict';

var Recipe = require('../models/recipe');

exports.index = function(req, res){
  Recipe.findAllByUserId(req.user._id, function(err, recipes){
    res.send({recipes:recipes});
  });
};

exports.info = function(req, res){
  Recipe.findById(req.params.recipeId, function(err, recipe){
    res.send({recipe:recipe});
  });
};

exports.add = function(req, res){
  Recipe.create(req.body, req.user._id, function(err, recipe){
    res.send({recipe:recipe});
  });
};

exports.all = function(req, res){
  Recipe.findAll(function(err, recipes){
    res.send({recipes:recipes});
  });
};
