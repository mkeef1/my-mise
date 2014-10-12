(function(){
  'use strict';

  angular.module('my-mise')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function logout(){
      return $http.delete('/logout');
    }

    function show(){
      return $http.get('/profile');
    }

    function update(client){
      return $http.post('/profile', client);
    }

    return {register:register, login:login, logout:logout, show:show, update:update};
  }]);
})();

