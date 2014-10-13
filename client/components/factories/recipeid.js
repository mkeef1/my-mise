(function(){
  'use strict';

  angular.module('my-mise')
  .factory('Recipeid', ['$http', function($http){

    function show(recipeId){
      return $http.get('/recipe/' + recipeId);
    }

    return {show:show};
  }]);
})();

