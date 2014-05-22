angular.module('mycrm.services')
  .service("LocationsApi", function($http, $q) {
    var service;

    service = {
      fetchData: function() {
        return $http.get("/api/locations");
      }
    };

    return service;
  });
