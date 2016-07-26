var cardsServices = angular.module("cardsServices", ["ngResource"]);

cardsServices.factory("cardsServices", ["$resource", function ($resource) {
    return $resource("all.json", {}, {
        query: { method: "Get", params: {}, isArray: true }
    });
}]);
//(function () {
//    'use strict';

//    cardsServices.factory('Cards', cards);

//    Cards.$inject = ['$http'];

//    function cards($http) {
//        var service = {
//            getData: getData
//        };

//        return service;

//        function getData() {
//            return $resource("all.json", {}, {
//                query: { method: "Get", params: {}, isArray: true }
//            });
//        }
//    }
//})();