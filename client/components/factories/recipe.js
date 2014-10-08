(function(){
  'use strict';

  angular.module('my-mise')
  .factory('Recipe', ['$http', function($http){

    function show(){
      return $http.get('/recipes');
    }

    function addYum(yRecipe){
      return $http.post('/recipes/yRecipes', yRecipe);
    }
    return {show:show, addYum:addYum};
  }]);
})();

