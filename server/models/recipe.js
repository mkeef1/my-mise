'use strict';

var Mongo  = require('mongodb'),
    _      = require('underscore');

function Recipe(o, userId){
  this.name = o.name;
  this.ingredients = o.ingredients;
  this.dateAdded = new Date();
  this.directions = o.directions;
  this.photo = o.photo;
  this.prepTime = o.prepTime;
  this.cookTime = o.cookTime;
  this.userId = Mongo.ObjectID(userId);
  this.description = o.description;
  this.category = o.category;
  this.tools = o.tools;
  this.difficulty = o.difficulty;
  this.numServings = o.numServings;
  this.tags = o.tags;
  this.tags = _.compact(this.tags);
  this.notes = o.notes;
  this.reviews = [];
}

Object.defineProperty(Recipe, 'collection', {
  get: function(){return global.mongodb.collection('recipes');}
});

Recipe.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Recipe.collection.findOne({_id:_id}, cb);
};

Recipe.create = function(o, userId, cb){
  var b = new Recipe(o, userId);
  Recipe.collection.save(b, cb);
};

Recipe.deleteById = function(recipeId, userId, cb){
  var id = Mongo.ObjectID(recipeId);
  Recipe.collection.remove({_id:id, userId:userId}, cb);
};

Recipe.findAll = function(cb){
  Recipe.collection.find().toArray(cb);
};

Recipe.findAllByUserId = function(userId, cb){
  var id = Mongo.ObjectID(userId);
  Recipe.collection.find({userId:id}).toArray(cb);
};


module.exports = Recipe;

