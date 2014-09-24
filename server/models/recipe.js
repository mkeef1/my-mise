'use strict';

var Mongo  = require('mongodb'),
    _      = require('underscore');

function Recipe(o){
  this.name = o.name;
  this.ingredients = o.ingredients;
  this.dateAdded = new Date(o.date);
  this.directions = o.directions;
  this.photo = o.photo;
  this.prepTime = o.prepTime;
  this.cookTime = o.cookTime;
  this.userId = Mongo.ObjectID(o.userId);
  this.description = o.description;
  this.category = o.category;
  this.tools = o.tools;
  this.difficulty = o.difficulty;
  this.numServings = o.numServings;
  this.tags = o.tags;
  this.tags = _.compact(this.tags);
  this.notes = o.notes;
}

Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

Recipe.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Recipe.collection.findOne({_id:_id}, function(err, obj){
    var recipe = Object.create(Recipe.prototype);
    recipe = _.extend(recipe, obj);
    cb(err, recipe);
  });
};

Recipe.create = function(o, userId, cb){
  var b = new Recipe(o, userId);
  Recipe.collection.save(b, cb);
};

Recipe.deleteById = function(recipeId, cb){
  var id = Mongo.ObjectID(recipeId);
  Recipe.collection.findOne({_id:id}, cb);
};
module.exports = Recipe;

