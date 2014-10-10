'use strict';

var bcrypt = require('bcrypt'),
    Mongo  = require('mongodb');

function User(){
}

Object.defineProperty(User, 'collection', {
  get: function(){return global.mongodb.collection('users');}
});

User.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  User.collection.findOne({_id:_id}, cb);
};

User.register = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(user || o.password.length < 3){return cb();}
    o.password = bcrypt.hashSync(o.password, 10);
    User.collection.save(o, cb);
  });
};

User.login = function(o, cb){
  User.collection.findOne({email:o.email}, function(err, user){
    if(!user){return cb();}
    var isOk = bcrypt.compareSync(o.password, user.password);
    if(!isOk){return cb();}
    cb(null, user);
  });
};

User.prototype.update = function(o, cb){
  var properties = Object.keys(o),
      self       = this;


  properties.forEach(function(property){
    switch(property){
      case 'username' :
        if(o.username){self[property] = o[property];}
        break;
      case 'photo' :
        if(o.photo){self[property] = o[property];}
        break;
      default:
    if(o[property]){self[property] = o[property];}
    }
  });

  User.collection.save(this, function(){
    cb(null, self);
  });
};

module.exports = User;

