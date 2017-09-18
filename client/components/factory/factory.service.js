'use strict';

angular.module('chapelProject')

.factory('Mail', ['$resource', function($resource) {
  return $resource('/api/sendmail/:id');
}]);
