/*global angular */
angular.module("meanNasdaq", ["ngRoute",'angularUtils.directives.dirPagination', 'angular-jwt']).config(config).run(run);

function config($httpProvider, $routeProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');

   
    $routeProvider
     .when('/', {
      templateUrl: 'angular/main/main.html',
      access: {
        restricted: false
      }
    })
    .when('/companys', {
      templateUrl: 'angular/company-list/companys.html',
      controller: CompanysController,
      controllerAs: 'vm',
      access: {
        restricted: false
      }
    })
        .when("/companys/:id", {
        templateUrl: 'angular/company-display/company.html',
        controller: CompanyController,
        controllerAs: 'vm'
    })
    .when("/register", {
        templateUrl: 'angular/register/register.html',
        controller: RegisterController,
        controllerAs: 'vm'
    })
     .when('/profile', {
      templateUrl: 'angular/profile/profile.html',
      access: {
        restricted: true
      }
    })
    .otherwise({
      redirectTo: '/'
    });
}

function run($rootScope, $location, $window, AuthFactory) {
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
    if (nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
      event.preventDefault();
      $location.path('/');
    }
  });
}