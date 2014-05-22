angular.module('mycrm.services')
  .service("AuthService", function($q, $window) {
    var service;

    service = {
      token: null,

      isAuthorized: function() {
        return !!$window.sessionStorage.token;
      },

      doLogout: function() {
        $window.sessionStorage.removeItem('token');
      },

      doLogin: function(user, pass) {
        return service.requestToken(user, pass)
          .then(service.authorizeUser);
      },

      requestToken: function(user, pass) {
        var deferred;

        deferred = $q.defer();

        setTimeout(function() {
          deferred.resolve("529ae375d7a6effba5045f7a674326c85a93b27d33209f2508ef4cd944ca4892");
        }, 350);

        return deferred.promise;
      },

      lookupAccessControl: function() {
        return {
          admin: false,
          user: true,
          employee: true
        };
      },

      authorizeUser: function(token) {
        $window.sessionStorage.setItem('token', token);

        service.groups = service.lookupAccessControl();
      },

      setToken: function(token) {
        service.token = token;

        return service;
      },

      getToken: function() {
        return service.token;
      }
    };

    return service;
  });
