(function(){
  'use strict';

  angular.module('my-mise')
  .controller('RecipesCtrl', ['$scope', '$routeParams', 'Recipe', function($scope, $routeParams, Recipe){
    $scope.recipeCategories = ['Breakfast', 'Lunch', 'Dinner', 'Side', 'Condiment', 'Beverage'];
    $scope.difficulties = ['Easy', 'Medium', 'Hard'];
    $scope.recipes = [];
    $scope.yRecipes = [];
    $scope.recipe = {};
    $scope.yRecipe = {};
    $scope.recipe.dateAdded = new Date();

    Recipe.show().then(function(response){
      $scope.recipes = response.data.recipes;
    });

    Recipe.showYum().then(function(response){
      $scope.yRecipes = response.data.yums;
    });

    $scope.toggleyRecipe = function(){
      $scope.hideyRecipes = !!!$scope.hideyRecipes;
      $scope.hideRecipes = false;
      $scope.hideRecipeForm = false;
      $scope.hideRecipeInfo = false;
    };

    $scope.toggleRecipe = function(){
      $scope.hideRecipes = !!!$scope.hideRecipes;
      $scope.hideyRecipes = false;
      $scope.hideRecipeForm = false;
      $scope.hideRecipeInfo = false;
    };

    $scope.toggleRecipeForm = function(){
      $scope.hideRecipeForm = !!!$scope.hideRecipeForm;
      $scope.hideyRecipes = false;
      $scope.hideRecipes = false;
      $scope.hideRecipeInfo = false;
    };

    $scope.addYum = function(){
      Recipe.addYum($scope.yRecipe).then(function(response){
        $scope.yRecipes.push(response.data.yum);
        $scope.yRecipe = {};
      });
    };

    $scope.addRecipe = function(){
      Recipe.addRecipe($scope.recipe).then(function(response){
        $scope.recipes.push(response.data.recipe);
        $scope.recipe = {};
        $scope.hideyRecipes = false;
        $scope.hideRecipes = false;
        $scope.hideRecipeInfo = false;
      });
    };

 /*   $scope.showInfo = function(){
      Recipe.getInfo($scope.recipe).then(function(response){
        $scope.recipe = response.data.recipe;
        debugger;
        console.log($scope.recipe);
        $scope.hideRecipeInfo = !!!$scope.hideRecipeInfo;
        $scope.hideyRecipes = false;
        $scope.hideRecipes = false;
        $scope.hideRecipeForm = false;
        $scope.recipe = {};
      });
    };*/
  }]);
})();
