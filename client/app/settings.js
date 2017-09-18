'use strict';
(function() {
angular.module('chapelProject')
.constant('Settings', {
  demo: false,
  menu: {
    user : [ // Separate panel for user management tasks for both admin and user
      {text:'Users', url: 'admin', authenticate: true, role: 'admin', icon: 'perm_identity'},
      {text:'Change Password', authenticate: true, url: 'cp', icon: 'settings_applications'},
      {text:'profile', authenticate: false, url: 'profile', icon: 'account'},
      {text:'logout', authenticate: true, url: 'logout', icon: 'logout'}
    ]
  }
});
})();
