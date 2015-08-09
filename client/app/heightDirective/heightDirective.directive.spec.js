'use strict';

describe('Directive: heightDirective', function () {

  // load the directive's module
  beforeEach(module('ourSiteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<height-directive></height-directive>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the heightDirective directive');
  }));
});