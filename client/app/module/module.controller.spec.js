'use strict';

describe('Controller: ModuleCtrl', function () {

  // load the controller's module
  beforeEach(module('ourSiteApp'));

  var ModuleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModuleCtrl = $controller('ModuleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
