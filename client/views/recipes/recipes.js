(function(){
  'use strict';

  angular.module('my-mise')
  .controller('RecipesCtrl', ['$scope', 'Recipe', function($scope, Recipe){
    $scope.recipes = [];
    $scope.yRecipes = [];
    $scope.recipe = {};
    $scope.yRecipe = {};
    $scope.xRecipes = [];

    console.log('yrecipes', $scope.yRecipes);
    Recipe.show().then(function(response){
      $scope.recipes = response.data.recipes;
    });

    Recipe.showYum().then(function(response){
      $scope.yRecipes = response.data.yums;
    });

    $scope.addYum = function(){
      Recipe.addYum($scope.yRecipe).then(function(response){
        debugger;
        $scope.yRecipes.push(response.data.yum);
        $scope.yRecipe = {};
      });
    };

  }]);
})();

