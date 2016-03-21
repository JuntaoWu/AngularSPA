mainApp.controller("cardsListController", function ($scope) {
    $scope.cards = [
        { id: 1 },
        { id: 2 }
    ];
});

//Moving forward, we could define module like this:
//var cardsControllers = angular.module("cardsControllers", []);

//cardsControllers.controller("cardsListController", ['$scope', function ($scope) {
//    $scope.cards = [
//        { id: 1 },
//        { id: 2 }
//    ];
//}]);