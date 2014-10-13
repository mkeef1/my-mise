'use strict';

var Mongo  = require('mongodb');

function Review(recipeId, opinion){
  this.recipeId = Mongo.ObjectID(recipeId);
  this.rating = opinion.rating;
  this.comments = opinion.comments;
  this.date = new Date();
}

Object.defineProperty(Review, 'collection', {
  get: function(){return global.mongodb.collection('reviews');}
});

Review.add = function(recipeId, opinion, cb){
  var rid = Mongo.ObjectID(recipeId),
      r = new Review(rid, opinion);
  Review.collection.save(r, cb);
};

Review.findAll = function(recipeId, cb){
  Review.collection.find({recipeId:recipeId}).toArray(cb);
};


module.exports = Review;

