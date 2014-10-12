(function(){
  'use strict';

  angular.module('my-mise')
  .factory('Recipe', ['$http', function($http){

    function show(){
      return $http.get('/recipes');
    }

    function showYum(){
      return $http.get('/recipes/yRecipes');
    }

    function addYum(yRecipe){
      return $http.post('/recipes/yRecipes', yRecipe);
    }

    function addRecipe(Recipe){
      return $http.post('/recipes/recipes', Recipe);
    }

    function getInfo(recipeId){
      return $http.get('/recipes/recipes/' + recipeId);
    }

    return {show:show, addYum:addYum, showYum:showYum, addRecipe:addRecipe, getInfo:getInfo};
  }]);
})();

