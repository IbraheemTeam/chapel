/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';
import Setting from '../api/setting/setting.model';

User.find(function (err, data) {
  if(data.length < 1){
    User.create({
      _id: '57c087895c0f110799b4c82d',
      provider: 'local',
      name: 'Test User',
      email: 'user@chapel.com',
      password: 'codenx'
    }, {
      _id: '57c087895c0f110799b4c82e',
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@chapel.com',
      password: 'codenx'
    }, function() {
        console.log('finished populating users');
    });
  }
});


Setting.find(function (err, data) {
  if(data.length < 1){
    Setting.create({
      "minOrderValue" : 20,
      "shippingCharge" : 15
    });
  }
});

