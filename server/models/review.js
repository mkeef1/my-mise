'use strict';

var Mongo  = require('mongodb'),
    _      = require('underscore');

function Review(recipeOwnerId, reviewerId, recipeId, opinion){
  this.recipeOwnerId = recipeOwnerId;
  this.reviewerId = reviewerId;
  this.recipeId = recipeId;
  this.rating = opinion.rating;
  this.comments = opinion.comments;
  this.date = new Date();
}

Object.defineProperty(Review, 'collection', {
  get: function(){return global.mongodb.collection('reviews');}
});

Review.add = function(recipeOwnerId, reviewerId, recipeId, opinion, cb){
  var r = new Review(recipeOwnerId, reviewerId, recipeId, opinion);
  Review.collection.save(r, cb);
};

Review.findByRecipeId = function(recipeId, cb){
  var _id = Mongo.ObjectID(recipeId);
  Review.collection.findOne({_id:_id}, function(err, obj){
    cb(err, _.extend(Review.prototype, obj));
  });
};

/*
Recipe.findAllByUserId = function(userId, cb){
  var id = Mongo.ObjectID(userId);
  Recipe.collection.find({userId:id}).toArray(cb);
};*/
module.exports = Review;

