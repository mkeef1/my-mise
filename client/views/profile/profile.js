(function(){
  'use strict';

  angular.module('my-mise')
  .controller('ProfileCtrl', ['$scope', 'User', function($scope, User){
    $scope.client = {};

    User.show().then(function(response){
      $scope.client = response.data.client;
    });

    $scope.update = function(){
      User.update($scope.client).then(function(response){
        $scope.client = response.data.client;
      });
    };
  }]);
})();

