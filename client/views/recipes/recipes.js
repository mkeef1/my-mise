(function(){
  'use strict';

  angular.module('my-mise')
  .controller('RecipesCtrl', ['$scope', 'Recipe', function($scope, Recipe){
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
    };

    $scope.toggleRecipe = function(){
      $scope.hideRecipes = !!!$scope.hideRecipes;
    };

    $scope.toggleRecipeForm = function(){
      $scope.hideRecipeForm = !!!$scope.hideRecipeForm;
    };

    $scope.addYum = function(){
      Recipe.addYum($scope.yRecipe).then(function(response){
        //debugger;
        $scope.yRecipes.push(response.data.yum);
        $scope.yRecipe = {};
      });
    };

    $scope.addRecipe = function(){
      Recipe.addRecipe($scope.recipe).then(function(response){
        $scope.recipes.push(response.data.recipe);
        $scope.recipe = {};
      });
    };
  }]);
})();

