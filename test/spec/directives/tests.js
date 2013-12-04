'use strict';

describe('Directive: tests', function () {

  // load the directive's module
  beforeEach(module('testTakerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tests></tests>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tests directive');
  }));
});
