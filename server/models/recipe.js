'use strict';

var Mongo  = require('mongodb');

function Recipe(){
}

Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

Recipe.findByUserId = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Recipe.collection.findOne({userId:_id}, function(err, obj){
    var recipe = _.extend(recipe, obj);
    cb(err, recipe);
  });
};


module.exports = Recipe;

