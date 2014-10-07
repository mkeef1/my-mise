'use strict';

var Yum = require('../models/yum');

exports.index = function(req, res){
  Yum.findAll(function(err, yums){
    res.send({yums:yums});
  });
};

exports.add = function(req, res){
  Yum.create(req.body, req.user._id, function(err, yum){
    res.send({yum:yum});
  });
};
