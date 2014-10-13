(function(){
  'use strict';

  angular.module('my-mise')
  .controller('AllCtrl', ['$scope', 'All', 'Recipeid', '$routeParams', function($scope, All, Recipeid, $routeParams){
    $scope.title = 'All Recipes';
    $scope.recipes = [];
    $scope.recipe = {};

    All.getAll().then(function(response){
      $scope.recipes = response.data.recipes;
      console.log($scope.recipes);
    });

    Recipeid.show($routeParams.id).then(function(response){
      $scope.recipe = response.data.recipe;
    });
  }]);
})();

