(function(){
  'use strict';

  angular.module('my-mise')
  .controller('HomeCtrl', ['$scope', 'Home', 'Recipeid', function($scope, Home, Recipeid){
    $scope.title = 'My Mise';
    $scope.recipes = [];
    $scope.recipe = {};

    Home.getAll().then(function(response){
      $scope.recipes = response.data.recipes;
    });
  }]);
})();

