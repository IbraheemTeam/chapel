'use strict';

angular.module('chapelProject.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile/:id',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController as admin'
      });
  });
