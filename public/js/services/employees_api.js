angular.module('mycrm.services')
  .service("EmployeesApi", function($http){
    var service;

    service = {
      fetchData: function() {
        return $http.get("/api/employees");
      }
    };

    return service;
  });
