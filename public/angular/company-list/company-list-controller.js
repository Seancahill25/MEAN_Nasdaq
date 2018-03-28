/*global angular */
angular.module('meanNasdaq').controller("CompanysController", CompanysController);

function CompanysController(companyDataFactory) {
    var vm = this;
    vm.title = 'MEAN Nasdaq App';
    companyDataFactory.companyList().then(function(res) {
        console.log(res.data);
        vm.companys = res.data;
    });
}