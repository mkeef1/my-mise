(function(){
  'use strict';

  angular.module('my-mise')
  .controller('RecipesCtrl', ['$scope', 'Recipe', function($scope, Recipe){
    $scope.recipes = [];
    $scope.yRecipes = [];
    $scope.recipe = {};
    $scope.yRecipe = {};

    Recipe.show().then(function(response){
      $scope.recipes = response.data.recipes;
    });

    $scope.addYum = function(){
      $scope.yRecipes.push($scope.yRecipe);
      $scope.yRecipe = null;
    };

  }]);
})();

