'use strict';

(function() {

class MainController {

constructor($scope, $state, $stateParams, $location, Settings, socket, $rootScope, $injector, $loading, $timeout,$mdMedia) {
    var vm = this
    // Start query the database for products
    // this.loading = true;
    // if ($stateParams.productSku) { // != null
    //     this.product = this.store.getProduct($stateParams.productSku);
    // }
    this.$timeout = $timeout;
    this.$loading = $loading;
    this.$mdMedia = $mdMedia;
    this.$location = $location;
    this.$state = $state;


}
// for the checkboxs
    exists(item, list) {
      if(angular.isUndefined(list)) list = [];
      return list.indexOf(item) > -1;
      // this.filter(this);
    }
    toggle(item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
        this.filter(this);
    }
    navigate(page,params){
      if(page==='sort'){
        delete params.$$hashKey;
        var paramString = JSON.stringify(params);
        this.$state.go(this.$state.current, {sort: paramString}, {reload: true});
      }
      else if(params){
        this.$location.replace().path(page+'/'+params.slug+'/'+params._id);
      }else{
        this.$location.replace().path('/');
      }
    }
   filter(vm){
        // var q = {};
        var f = [];
        if(vm.fl.features){
            _.forEach(vm.fl.features, function(val, key) {
                if(val.length>0){
                    f.push({'features.key' : key, 'features.val' : { $in: val}});
                }
            });
        }

        if(vm.fl.brands){
            if(vm.fl.brands.length>0){
                var brandIds = [];
                _.forEach(vm.fl.brands,function(brand){
                  brandIds.push(brand._id);
                });
                f.push({'brand' : { $in: brandIds } });
            }

        }
        if(vm.fl.categories){
            if(vm.fl.categories.length>0){
                var categoryIds = [];
                _.forEach(vm.fl.categories,function(category){
                categoryIds.push(category._id);
                });
                f.push({'category' : { $in: categoryIds } });
            }

        }

        f.push({'variants.price' : { $gt: vm.priceSlider.min, $lt:vm.priceSlider.max } });

        // var vm = this;
        if(f.length>0){
            vm.q.where = { $and : f};
        }else{
            vm.q.where = {};
        }

        vm.displayProducts(vm.q,true);
        // vm.resetPriceRange(vm.q);

    }

    sortNow(sort){
        this.q.sort = sort;
        this.displayProducts(this.q, true);
    }

    handleError(error) { // error handler
          this.loading = false;
          if(error.status === 403){
            Toast.show({
              type: 'error',
              text: 'Not authorised to make changes.'
            });
          }
          else{
            Toast.show({
              type: 'error',
              text: error.status
            });
          }
      }

}

angular.module('chapelProject')
  .controller('MainController', MainController);

})();


