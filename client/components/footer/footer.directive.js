'use strict';

angular.module('chapelProject')
  .directive('footer', function ($mdDialog, $http, $mdMedia) {
    return {
      templateUrl: 'components/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
        scope.addDialog = function() {
        $mdDialog.show({
          templateUrl: 'components/footer/contact-form.html',
          controller: function($scope, $mdDialog, Toast) {
              $scope.hide = function() {
                  $mdDialog.hide();
              };
              $scope.cancel = function() {
                  $mdDialog.cancel();
              };
              $scope.send = function(mail) {
            		$http.post('/api/sendmail', {
            			from: 'CodeNx <admin@codenx.com>',
            	    to: 'support@codenx.com',
            	    subject: 'Message from chapelProject',
            	    text: mail.message
            		});
                $mdDialog.hide(mail);
                Toast.show({type:'success', text: 'Thanks for contacting us.'})
              };
          }
      }).then(function(answer) {
          scope.alert = 'You said the information was "' + answer + '".';
      }, function() {
          scope.alert = 'You cancelled the dialog.';
      });
    };
    scope.screenIsBig = $mdMedia('gt-sm'); // Erase the parent reference from md-toast the (md-toast bug)
    }
    };
  });
