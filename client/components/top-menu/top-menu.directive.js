'use strict';

angular.module('chapelProject')
  .directive('topMenu', function () {
    return {
      templateUrl: 'components/top-menu/top-menu.html',
      restrict: 'E',
      controller: 'TopMenuController',
      controllerAs: 'topmenu'
    };
  });
