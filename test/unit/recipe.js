/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Recipe    = require('../../server/models/recipe'),
    User      = require('../../server/models/user'),
    dbConnect = require('../../server/lib/mongodb'),
    Mongo     = require('mongodb'),
    cp        = require('child_process'),
    db        = 'my-mise-test';

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
      var r = new Recipe({name:'Toast'});
      expect(r).to.be.instanceof(Recipe);
    });
  });

  describe('.findById', function(){
    it('should find a recipe by it\'s id', function(done){
      Recipe.findById('a00000000000000000000001', function(err, r){
        console.log('r>>>>', r.name)
        expect(r.name).to.equal('Roast Chicken');
        done();
      });
    });
  });

  describe('.create', function(){
    it('should create a new recipe', function(done){
      var t = {
        name:'toast',
        ingredients:['bread', 'butter'],
        dateAdded:'12/12/2014',
        directions:['toast', 'eat'],
        photo:'toast.jpg',
        prepTime:2,
        cookTime:3,
        userId:'000000000000000000000001',
        description:'yummy',
        category:'breakfast',
        tools:['knife', 'toaster'],
        difficulty:'easy',
        numServings:1,
        tags:['bread', 'butter', 'jam'],
        notes:'eat that toast'},
      userId = '000000000000000000000001',
      r = new Recipe(t, userId);
      Recipe.create(r, userId, function(err, recipe){
        console.log('u>>>>', userId);
        console.log('recipeId>>>>', recipe._id);
        console.log('recipeUser>>>>', recipe.userId);
        console.log('timeNeeded>>>>', r.prepTime + r.cookTime + 'mins');
        console.log('timeNeeded.prep>>>>', r.prepTime);
        console.log('timeNeeded>>>>cook', r.cookTime);
        expect(r).to.be.instanceof(Recipe);
        done();
      });
    });
  });

  // working
  /*describe('.deleteById', function(){
    it('should delete one recipe from collection', function(done){
      var userId = Mongo.ObjectID('000000000000000000000001');
      Recipe.deleteById('a00000000000000000000001', userId, function(){
        Recipe.findById('a00000000000000000000001', function(err, recipe){
          console.log('recipe>>>>>>', recipe);
          expect(recipe).to.be.empty;
          done();
        });
      });
    });
  });*/

  describe('.all', function(){
    it('should return all recipes', function(done){
      Recipe.findAll(function(err, recipes){
        console.log('#recipes>>>', recipes.length);
        expect(recipes).to.have.length(2);
        done();
      });
    });
  });

  describe('.findAllByUserId', function(){
    it('should return all a user\'s recipes', function(done){
      var userId = Mongo.ObjectID('000000000000000000000002');
      Recipe.findAllByUserId(userId, function(err, recipes){
        console.log('#recipes for', userId, '>>>>', recipes.length);
        expect(recipes).to.have.length(1);
        done();
      });
    });
  });
});

