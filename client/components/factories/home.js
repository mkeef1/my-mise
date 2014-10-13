(function(){
  'use strict';

  angular.module('my-mise')
  .factory('Home', ['$http', function($http){

    function getAll(){
      return $http.get('/home');
    }

    return {getAll:getAll};
  }]);
})();

