(function(){
  'use strict';

  angular.module('my-mise')
  .factory('Home', ['$http', function($http){

    function getMessage(){
      return $http.get('/home');
    }

    return {getMessage:getMessage};
  }]);
})();

