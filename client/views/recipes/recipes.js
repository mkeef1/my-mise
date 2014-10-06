(function(){
  'use strict';

  angular.module('my-mise')
  .controller('RecipesCtrl', ['$scope', 'Recipe', function($scope, Recipe){
    $scope.recipes = [];

    Recipe.show().then(function(response){
      $scope.recipes = response.data.recipes;
    });
  }]);
})();

