/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Recipe    = require('../../models/recipe'),
    dbConnect = require('../../lib/mongodb'),
    cp        = require('child_process'),
    db        = 'my-mise-test',
    o         = {name:'toast',
  ingredients:['bread', 'butter'],
  dateAdded:'12/12/1212',
  directions:['toast', 'eat'],
  photo:'toast.jpg',
  timeNeeded:{prep:2, cook:3},
  cookId:'000000000000000000000001',
  description:'yummy',
  category:'breakfast',
  tools:['knife', 'toaster'],
  difficulty:'easy',
  numServings:1,
  tags:['bread', 'butter', 'jam'],
  notes:'eat that toast'
};

describe('Recipe', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Recipe object', function(){
      var r = new Recipe(o);
      expect(r).to.be.instanceof(Recipe);
    });
  });

  describe('findByUserId', function(){
    it('should find a recipe by user by id', function(done){
      Recipe.findByUserId('000000000000000000000001', function(err, recipe){
        var r = new Recipe(o);
        expect(r.name).to.equal('toast');
        done();
      });
    });
  });

});

