'use strict';

angular.module('chapelProject')
  .directive('navbarPublic', function () {
    return {
      templateUrl: 'components/navbar-public/navbar-public.html',
      restrict: 'E',
      controller: 'NavbarPublicController',
      controllerAs: 'vm'
    };
  });
