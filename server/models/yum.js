'use strict';

var Mongo = require('mongodb');

function Yum(o, user){
  this.name = o.name;
  this.ownerId = Mongo.ObjectID(user);
  this.photo = o.photo;
}

Object.defineProperty(Yum, 'collection', {
  get: function(){return global.mongodb.collection('yums');}
});

Yum.create = function(o, id, cb){
  var y  = new Yum(o, id);
  Yum.collection.save(y, cb);
};

/*Recipe.deleteById = function(recipeId, userId, cb){
  var id = Mongo.ObjectID(recipeId);
  Recipe.collection.remove({_id:id, userId:userId}, cb);
};*/

Yum.findAllByUser = function(userId, cb){
  Yum.collection.find({_id:userId}).toArray(cb);
};

module.exports = Yum;

