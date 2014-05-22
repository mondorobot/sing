angular
  .module('mycrm.controllers')
  .controller('LocationsController', function($scope, data) {
    $scope.employees = data.employees;
    $scope.locations = data.locations;
  });
