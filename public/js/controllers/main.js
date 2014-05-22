angular
  .module('mycrm.controllers')
  .controller('MainController', function($scope, $state, AuthService) {
    $scope.logout = function() {
      AuthService.doLogout();
      $state.go('public.home');
    };
  });
