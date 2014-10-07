(function(){
  'use strict';

  angular.module('my-mise')
  .factory('Recipe', ['$http', function($http){

    function show(){
      return $http.get('/recipes');
    }

    function browse(recipes){
      return $http.get('/recipes', {recipes:recipes});
    }
    return {show:show, browse:browse};
  }]);
})();

