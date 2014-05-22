angular.module('mycrm.services')
  .service("PlacesApi", function($http) {
    var service;

    service = {
      fetchData: function() {
        return $http.get("/api/places");
      }
    };

    return service;
  });
