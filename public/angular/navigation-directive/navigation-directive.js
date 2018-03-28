angular.module('meanNasdaq').directive('mhNavigation', mhNavigation);

function mhNavigation() {
  return {
    restrict: 'E',
    templateUrl: 'angular/navigation-directive/navigation-directive.html'
  };
}