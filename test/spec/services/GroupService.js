'use strict';

describe('Service: Groupservice', function () {

  // load the service's module
  beforeEach(module('testTakerApp'));

  // instantiate service
  var Groupservice;
  beforeEach(inject(function (_Groupservice_) {
    Groupservice = _Groupservice_;
  }));

  it('should do something', function () {
    expect(!!Groupservice).toBe(true);
  });

});
