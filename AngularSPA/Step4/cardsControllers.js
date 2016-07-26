
var cardsControllers = angular.module("cardsControllers", ["cardsServices"]);

cardsControllers.controller("cardsListController", ["$scope", "cardsServices", function ($scope, cardsServices) {
    cardsServices.query(function (d) {
        var cards = [];
        /*angular.forEach(d, function (block) {
            angular.forEach(block.expansions, function (expansion) {
                angular.forEach(expansion.cards, function (card) {
                    cards.push(card);
                });
            });
        });*/
        d.forEach(function (data) {
            data.expansions.forEach(function (obj) {
                obj.cards.forEach(function (o) {
                    cards.push(o);
                })
            })
        })

        $scope.cards = cards;
    });
}]);