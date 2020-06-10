'use strict';

describe('Controller: AlumnoCtrl', function () {

  // load the controller's module
  beforeEach(module('myappApp'));

  var AlumnoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlumnoCtrl = $controller('AlumnoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AlumnoCtrl.awesomeThings.length).toBe(3);
  });
});
