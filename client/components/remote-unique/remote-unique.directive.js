'use strict';

angular.module('chapelProject')
  .directive('remoteUnique', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the remoteUnique directive');
      }
    };
  });
