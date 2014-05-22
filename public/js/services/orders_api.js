angular.module('mycrm.services')
  .service("OrdersApi", function($http){
    var service;

    service = {
      fetchData: function() {
        return $http.get("/api/orders");
      }
    };

    return service;
  });
