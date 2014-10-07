/* jshint camelcase:false */

(function(){
  'use strict';

  angular.module('mkRecipeModule', [])
  .factory('RecipeApi', ['$http', function($http){
    function info(title){
      return $http.jsonp('http://api.yummly.com/v1/api/recipes?_app_id=775c537c&_app_key=fbfaee01075cb992942ec045bbb93e43&q=' + title + '&callback=JSON_CALLBACK');
    }

    return {info:info};
  }])
  .directive('mkRecipe', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/mk-recipe/mk-recipe.html';
    o.scope       = {title:'@', remove:'&'};
    o.link        = function(scope, element, attrs){
                    };

    o.controller  = ['$scope', 'RecipeApi', function($scope, RecipeApi){
                        RecipeApi.info($scope.title).then(function(response){
                          debugger;
                          $scope.yumRecipe = response.data.matches[0];
                          $scope.yumPic    = $scope.yumRecipe.smallImageUrls[0];
                          $scope.yumName   = $scope.yumRecipe.recipeName;
                        });
                      }];

    return o;
  }]);
})();
