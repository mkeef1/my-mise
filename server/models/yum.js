'use strict';

function Yum(){
}

Object.defineProperty(Yum, 'collection', {
  get: function(){return global.mongodb.collection('yums');}
});

Yum.create = function(o, userId, cb){
  var b = new Yum(o, userId);
  Yum.collection.save(b, cb);
};

/*Recipe.deleteById = function(recipeId, userId, cb){
  var id = Mongo.ObjectID(recipeId);
  Recipe.collection.remove({_id:id, userId:userId}, cb);
};*/

Yum.findAll = function(cb){
  Yum.collection.find().toArray(cb);
};

module.exports = Yum;

