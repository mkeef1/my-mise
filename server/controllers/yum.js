'use strict';

var Yum = require('../models/yum'),
    User = require('../models/user');

exports.index = function(req, res){
  Yum.findAllByUser(req.user._id, function(err, yums){
    res.send({yums:yums});
  });
};

exports.add = function(req, res){
  User.findById(req.user._id, function(err, user){
    Yum.create(req.body, req.user._id, function(err, yum){
      res.send({yum:yum});
    });
  });
};
