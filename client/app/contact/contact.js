'use strict';

angular.module('chapelProject')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl',
        authenticate: true,
        title: 'Contacts Manager'
      });
  });
