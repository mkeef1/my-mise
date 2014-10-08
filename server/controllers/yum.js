'use strict';

var Yum = require('../models/yum');

exports.index = function(req, res){
  Yum.findAll(function(err, yums){
    res.send({yums:yums});
  });
};

exports.add = function(req, res){
  Yum.create(req.body, function(err, yum){
    res.send({yum:yum});
  });
};
