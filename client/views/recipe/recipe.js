(function(){
  'use strict';

  angular.module('my-mise')
  .controller('RecipeCtrl', ['$scope', '$routeParams', 'Recipeid', function($scope, $routeParams, Recipeid){
    $scope.recipe = {};
    $scope.title = 'RecipeId';

    Recipeid.show($routeParams.id).then(function(response){
      $scope.recipe = response.data.recipe;
      debugger;
    });

  }]);
})();
