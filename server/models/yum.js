'use strict';

var Mongo = require('mongodb');

function Yum(){
}

Object.defineProperty(Yum, 'collection', {
  get: function(){return global.mongodb.collection('yums');}
});

Yum.create = function(yum, userId, cb){
  var yumId  = Mongo.ObjectID(yumId),
      userId = Mongo.ObjectID(userId);
  Yum.collection.save({_id:yumId, userId:userId}, cb);
};

/*Recipe.deleteById = function(recipeId, userId, cb){
  var id = Mongo.ObjectID(recipeId);
  Recipe.collection.remove({_id:id, userId:userId}, cb);
};*/

Yum.findAllByUser = function(userId, cb){
  Yum.collection.find({userId:userId}).toArray(cb);
};

module.exports = Yum;

