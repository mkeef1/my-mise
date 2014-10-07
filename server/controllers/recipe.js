'use strict';

var Recipe = require('../models/recipe');

exports.index = function(req, res){
  Recipe.findAllByUserId(req.user._id, function(err, recipes){
    res.send({recipes:recipes});
  });
};

exports.browse = function(req, res){
  Recipe.findAll(function(err, recipes){
    res.send({recipes:recipes});
  });
};
