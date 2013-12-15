'use strict';

describe('Service: Templateservice', function () {

  // load the service's module
  beforeEach(module('testTakerApp'));

  // instantiate service
  var Templateservice;
  beforeEach(inject(function (_Templateservice_) {
    Templateservice = _Templateservice_;
  }));

  it('should do something', function () {
    expect(!!Templateservice).toBe(true);
  });

});
