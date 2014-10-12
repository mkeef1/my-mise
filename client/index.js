(function(){
  'use strict';

  angular.module('my-mise', ['ngRoute', 'LocalForageModule', 'mkRecipeModule'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login',    {templateUrl:'/views/login/login.html',       controller:'LoginCtrl'})
    .when('/logout',   {templateUrl:'/views/logout/logout.html',     controller:'LogoutCtrl'})
    .when('/profile',  {templateUrl:'/views/profile/profile.html',   controller:'ProfileCtrl'})
    .when('/recipes',  {templateUrl:'/views/recipes/recipes.html',   controller:'RecipesCtrl'})
    .when('/recipes/recipes/:id',  {templateUrl:'/views/recipes/recipes.html',   controller:'RecipesCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'my-mise', storeName:'cache', version:1.0});
  }]);
})();

