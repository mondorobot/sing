angular
  .module('mycrm.controllers')
  .controller('LoginController',
    function($scope, $state, AuthService) {
      $scope.model = {
        username: '',
        password: ''
      };

      $scope.login = function() {
        var user, pass;

        isValid = true;

        if (!isValid) {
          return;
        }

        user = $scope.model.username;
        pass = $scope.model.password;

        isAuth = AuthService.isAuthorized();
        if (!isAuth) {
          AuthService.doLogin(user, pass)
            .then(function() {
              $state.go('auth.dashboard');
            });
        }
      };
    });
