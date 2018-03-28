/*global angular*/
angular.module("meanNasdaq").factory("companyDataFactory", companyDataFactory);

function companyDataFactory($http) {
    return {
        companyList: companyList,
        companyDisplay: companyDisplay,
    };
    
    function companyList() {
        return $http.get('/api/companys').then(complete).catch(failed);
    }
    
    function companyDisplay(id) {
        return $http.get('/api/companys/' + id).then(complete).catch(failed);
    }
    
    function complete(res) {
        return res;
    }
    
    function failed(err) {
        console.log(err.statusText);
    }
}
