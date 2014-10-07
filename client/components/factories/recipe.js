(function(){
  'use strict';

  angular.module('my-mise')
  .factory('Recipe', ['$http', function($http){

    function show(){
      return $http.get('/recipes');
    }

    function addYum(recipe){
      return $http.post('/recipes/yRecipes', recipe);
    }
    return {show:show, addYum:addYum};
  }]);
})();

