(function(){
  'use strict';

  angular.module('my-mise')
  .controller('LogoutCtrl', ['$location', 'User', function($location, User){
    User.logout().then(function(){
      toastr.success('Successful logout.');
      $location.path('/');
    });
  }]);
})();

