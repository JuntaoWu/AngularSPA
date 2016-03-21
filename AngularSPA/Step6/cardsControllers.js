
var cardsControllers = angular.module("cardsControllers", []);

cardsControllers
    .controller("cardsListController", ["$scope", "Cards", function ($scope, Cards) {
        $scope.cards = [];

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
    }])
    .controller("cardDetailController", function ($scope, $routeParams) {
        $scope.card = {};
        var cards = $scope.$parent.cards;
        var card = cards.filter(function (i) {
            return i.id === $routeParams.cardId;
        });
        card = card.length ? card[0] : {};
        
        $scope.card = card;
    });