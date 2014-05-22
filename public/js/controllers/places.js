angular
  .module('mycrm.controllers')
  .controller('PlacesController', function($scope, data) {
    $scope.places = data.places;
  });
