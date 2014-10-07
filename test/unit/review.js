/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Review    = require('../../server/models/review'),
    dbConnect = require('../../server/lib/mongodb'),
    Mongo     = require('mongodb'),
    cp        = require('child_process'),
    db        = 'my-mise-test';

describe('Review', function(){
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
    it('should create a new Review object', function(){
      var r = new Review('000000000000000000000001', '000000000000000000000002', 'a00000000000000000000001', {rating:10, comments:'Loved it!'});
      console.log('review>>', r);
      expect(r).to.be.instanceof(Review);
    });
  });

  describe('.findByRecipeId', function(){
    it('should find a review by it\'s recipe id', function(done){
      var id = Mongo.ObjectID('b00000000000000000000001');
      Review.findByRecipeId(id, function(err, review){
        console.log('recipeId>>>', review.recipeId);
        expect(review.rating).to.equal(10);
        done();
      });
    });
  });
});

