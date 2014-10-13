(function(){
  'use strict';

  angular.module('my-mise')
  .controller('HomeCtrl', ['$scope', 'Home', 'Recipeid', '$routeParams', function($scope, Home, Recipeid, $routeParams){
    $scope.title = 'My Mise';
    $scope.recipes = [];
    $scope.recipe = {};

    Home.getAll().then(function(response){
      $scope.recipes = response.data.recipes;
      console.log($scope.recipes);

    });
  }]);
})();

