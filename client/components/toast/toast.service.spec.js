'use strict';

describe('Service: toast', function () {

  // load the service's module
  beforeEach(module('chapelProject'));

  // instantiate service
  var toast;
  beforeEach(inject(function (_toast_) {
    toast = _toast_;
  }));

  it('should do something', function () {
    expect(!!toast).toBe(true);
  });

});
