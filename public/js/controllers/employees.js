angular
  .module('mycrm.controllers')
  .controller('EmployeesController', function($scope, data) {
    $scope.employees = angular.copy(data.employees);
    $scope.locations = angular.copy(data.locations);
  })
  .controller('EmployeesNewController', function($scope) {
    $scope.model = {
      first_name: '',
      last_name: ''
    };

    $scope.doSave = function() {
      console.log("ok we're saving now");
      console.log("$scope.model");
      console.log($scope.model);

      return false;
    };
  })
  ;
