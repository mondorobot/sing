angular
  .module('mycrm')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      // Public facing
      .state('public', {
        templateUrl: 'templates/layouts/public.html',
        controller: 'LayoutController'
      })
      .state('public.home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })
      .state('public.login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
      })

      // Logged in only
      .state('auth', {
        templateUrl: 'templates/layouts/application.html',
        controller: 'LayoutController',
        data: {
          restricted: true
        }
      })
      .state('auth.dashboard', {
        url: '/dashboard',
        templateUrl: 'templates/dashboard.html',
      })
      .state('auth.employees', {
        url: '/employees',
        templateUrl: 'templates/employees/list.html',
        controller: 'EmployeesController',
        resolve: {
          data: function($q, $stateParams, EmployeesApi, LocationsApi) {
            var deferred, allData, params;

            allData = {};
            params = $stateParams;
            deferred = $q.defer();

            EmployeesApi.fetchData()
              .then(function(response) {
                allData.employees = response.data;

                return LocationsApi.fetchData();
              })
              .then(function(response) {
                allData.locations = response.data;

                deferred.resolve(allData);
              });

            return deferred.promise;
          }
        }
      })
      .state('auth.employees_new', {
        url: '/employees/new',
        templateUrl: 'templates/employees/new.html',
        controller: 'EmployeesNewController'
      })
      .state('auth.locations', {
        url: '/locations',
        templateUrl: 'templates/locations.html',
        controller: 'LocationsController',
        data: {
          restricted: true
        },
        resolve: {
          data: function($q, $stateParams, EmployeesApi, LocationsApi) {
            var deferred, allData, params,
            p1, p2;

            allData = {};
            params = $stateParams;
            deferred = $q.defer();

            p1 = EmployeesApi.fetchData()
              .then(function(response) {
                allData.employees = response.data;
              });

            p2 = LocationsApi.fetchData()
              .then(function(response) {
                allData.locations = response.data;
              });

            $q.all([p1, p2])
              .then(function() {
                deferred.resolve(allData);
              });

            return deferred.promise;
          }
        }
      })
      .state('auth.places', {
        url: '/places',
        templateUrl: 'templates/places.html',
        controller: 'PlacesController',
        data: {
          restricted: true
        },
        resolve: {
          data: function($q, $stateParams, PlacesApi) {
            var deferred, allData,
              p1, p2;

            allData = {};
            params = $stateParams;
            deferred = $q.defer();

            p1 = PlacesApi.fetchData()
              .then(function(response) {
                allData.places = response.data;
                deferred.resolve(allData);
              });

            return deferred.promise;
          }
        }
      })
      ;
  })
  .run(function($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams) { 
        if (toState.data && toState.data.restricted && !AuthService.isAuthorized()) {
          event.preventDefault(); 
          $state.go('public.login');
        }
      });
  });
