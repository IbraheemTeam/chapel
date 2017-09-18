'use strict';

angular.module('chapelProject')
  .config(function($stateProvider) {
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as main',
        title: 'User Mangement by Chapel'
      })
      .state('/Category', {
        url: '/Category',
        templateUrl: 'app/main/test.html',
        controller: 'MainController as main',
        title: 'Categories'
      })
      .state('main', {
        title: 'user management',
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as main',
        params: {
          sort: null
        }
      })
      // When a category selected from the navbar megamenu
  });
