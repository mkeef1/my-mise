(function(){
  'use strict';

  angular.module('my-mise')
  .controller('HomeCtrl', ['$scope', 'Home', function($scope, Home){
    $scope.title = 'My Mise';
    $scope.recipes = [];

    Home.getAll().then(function(response){
      $scope.recipes = response.data.recipes;
      console.log($scope.recipes);
      debugger;
    });
  }]);
})();

