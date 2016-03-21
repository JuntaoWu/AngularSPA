
var cardsControllers = angular.module("cardsControllers", []);

cardsControllers.controller("cardsListController", ["$scope", "Cards", function ($scope, Cards) {
    Cards.query(function (d) {
        var cards = [];
        angular.forEach(d, function (block) {
            angular.forEach(block.expansions, function (expansion) {
                angular.forEach(expansion.cards, function (card) {
                    cards.push(card);
                });
            });
        });

        $scope.cards = cards;
    });

    $scope.cardsCount = 10;
    $scope.query = "";

    $scope.applyFilter = function () {
        console.log($scope.filterForm.cardsCount.$error);
    };
}]).controller("cardDetailController", ["$scope", "Cards", function ($scope, Cards) {
    Cards.query(function (d) {

    });


}]);