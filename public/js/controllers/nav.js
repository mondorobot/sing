angular
  .module('mycrm.controllers')
  .controller('NavController', function($scope, $state, AuthService) {
    $scope.loggedIn = function() {
      return AuthService.isAuthorized();
    };
  });
