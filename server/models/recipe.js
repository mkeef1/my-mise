'use strict';

var Mongo  = require('mongodb'),
    _      = require('underscore');

function Recipe(o, userId){
  this.name = o.name;
  this.ingredients = o.ingredients;
  this.dateAdded = new Date();
  this.directions = o.directions;
  this.photo = o.photo;
  this.timeNeeded = {prep:o.prep, cook:o.cook};
  this.cookId = Mongo.ObjectID(userId);
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

Recipe.findByUserId = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Recipe.collection.findOne({userId:_id}, function(err, obj){
    var recipe = _.extend(recipe, obj);
    cb(err, recipe);
  });
};

Recipe.create = function(){};

module.exports = Recipe;

