'use strict';

(function() {

class ProfileController {
  constructor(User, Settings, appConfig, $location, $http, $scope, $stateParams) {


    if(!$stateParams.id)
    $http.get('/api/users/me')
      .then(success1)
      .catch(err1);
    function success1(res) {
      console.log('url is');
      console.log($location.absUrl()+res.data._id);
      $http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAFQq1iEToinfrMf-u0Vi_zI6l4TxTx9XA',{longUrl:$location.absUrl()+res.data._id}).then(function (res) {
        console.log('google response is ');
        console.log(res);
        $scope.link = res.data.id;


      })
        .catch(function (err) {
          console.log('error is ');
          console.log(err);
        });

      console.log(res.data);

    $scope.name = res.data.name;
    $scope.email = res.data.email;

    }
    function err1(err) {
      console.log(err);
    }


    console.log('hiiiiiii');
    console.log($stateParams.id);

    if($stateParams.id != '')

    $http.post('/api/users/'+$stateParams.id)
      .then(success)
      .catch(err);
    function success(res) {
      console.log(res);
      $scope.name = res.data.name;
      $scope.email = res.data.email;
      $http.post('https://www.googleapis.com/urlshortener/v1/url?key=AIzaSyAFQq1iEToinfrMf-u0Vi_zI6l4TxTx9XA',{longUrl:$location.absUrl()}).then(function (res) {
        console.log('google response is ');
        console.log(res);
        $scope.link = res.data.id;


      })
        .catch(function (err) {
          console.log('error is ');
          console.log(err);
        });
    }
    function err(err) {
      console.log(err);
    }

  }

//   delete(user) {
//     user.$remove();
//     this.users.splice(this.users.indexOf(user), 1);
//   }
}

angular.module('chapelProject')
  .controller('ProfileController', ProfileController);

})();
