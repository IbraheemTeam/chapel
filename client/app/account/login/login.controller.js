'use strict';

class LoginController {
  constructor(Auth, $state) {
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.loading = true;
      this.Auth.login({
        email: this.user.email,
        password: this.user.password
      })
      .then(() => {
        if(!angular.isUndefined(this.$state.params.referrer)){
          this.$state.go(this.$state.params.referrer);
        }else{
          this.$state.go('/');
        }
      })
      .catch(err => {
        this.errors.other = err.message;
        this.loading = false;
      });
    }
  }
}

angular.module('chapelProject')
  .controller('LoginController', LoginController);
