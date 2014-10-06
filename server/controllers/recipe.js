'use strict';

var Recipe = require('../models/recipe');

exports.index = function(req, res){
  Recipe.findAllByUserId(req.user._id, function(err, recipes){
    res.send({recipes:recipes});
  });
};

