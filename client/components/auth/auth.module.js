'use strict';

angular.module('chapelProject.auth', [
  'chapelProject.constants',
  'chapelProject.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
