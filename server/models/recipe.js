'use strict';

var Mongo  = require('mongodb'),
    _      = require('underscore');

function Recipe(o){
  this.name = o.name;
  this.ingredients = o.ingredients;
  this.dateAdded = new Date(o.date);
  this.directions = o.directions;
  this.photo = o.photo;
  this.timeNeeded = {prep:o.prep, cook:o.cook};
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
  Recipe.collection.findOne({_id:_id}, cb)
};

Recipe.create = function(o, userId, cb){
  var b = new Recipe(o, userId);
  Recipe.collection.save(b, cb);
};

module.exports = Recipe;

