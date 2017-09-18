(function () {
	'use strict';

	angular
		.module('chapelProject')
		.factory('PageOptions', PageOptions);

	function PageOptions() {
    var obj = {};
 	  obj.leftmenu = false;
 	  return obj;
  }
})();
