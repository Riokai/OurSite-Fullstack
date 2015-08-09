'use strict';

describe('Controller: RootCtrl', function () {

  // load the controller's module
  beforeEach(module('ourSiteApp'));

  var RootCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RootCtrl = $controller('RootCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
