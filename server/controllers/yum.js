'use strict';

var Yum = require('../models/yum'),
    User = require('../models/user');

exports.index = function(req, res){
  Yum.findAllByUser(function(err, yums){
    res.send({yums:yums});
  });
};

exports.add = function(req, res){
  Yum.create(req.body, req.user._id, function(err, yum){
    res.send({yum:yum});
  });
};
