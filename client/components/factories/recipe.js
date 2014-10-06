(function(){
  'use strict';

  angular.module('my-mise')
  .factory('Recipe', ['$http', function($http){

    function show(){
      return $http.get('/recipes');
    }

    return {show:show};
  }]);
})();

