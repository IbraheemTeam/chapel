'use strict';

angular.module('chapelProject')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        title: 'Shop Dashboard for Admin',
        authenticate: true
      });
  });
