/*global angular*/
angular.module('meanNasdaq').controller('CompanyController', CompanyController);

function CompanyController($route, $routeParams, $window, companyDataFactory, AuthFactory, jwtHelper) {
  var vm = this;
  var id = $routeParams.id;
  vm.isSubmitted = false;
  companyDataFactory.companyDisplay(id).then(function(res) {
    console.log(res.data);
    vm.company = res.data;
  });

  vm.isLoggedIn = function() {
    if (AuthFactory.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  };

}