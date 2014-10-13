(function(){
  'use strict';

  angular.module('my-mise')
  .factory('All', ['$http', function($http){

    function getAll(){
      return $http.get('/all');
    }

    return {getAll:getAll};
  }]);
})();

