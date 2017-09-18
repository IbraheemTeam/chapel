'use strict';

class NavbarController {
  constructor(ToggleComponent, Auth, Settings, $stateParams,$mdMedia) {
    var vm = this;

    /* autocomplete */
    vm.simulateQuery      = true;
    vm.products           = [];
    /**
     * Create filter function for a query string
     */

    vm.isLoggedIn = Auth.isLoggedIn;


    vm.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    vm.toggle = function (item, list) {
    //   console.log(item,list);
      if(angular.isUndefined(list)) list = [];
      var idx = list.indexOf(item);
      if (idx > -1) list.splice(idx, 1);
      else list.push(item);
      vm.filter();
    };

   vm.close = function () {
       ToggleComponent('cart').close();
   }

  }
}

angular.module('chapelProject')
  .controller('NavbarController', NavbarController);
