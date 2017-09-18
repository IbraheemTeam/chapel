'use strict';

angular.module('chapelProject')
  .config(function ($stateProvider) {
    $stateProvider
      .state('media', {
        url: '/media',
        templateUrl: 'app/media/media.html',
        controller: 'MediaCtrl',
        authenticate: true
      });
  });
