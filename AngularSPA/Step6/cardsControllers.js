(function () {
    function processResult(d) {
        var cards = [];
        angular.forEach(d, function (block) {
            angular.forEach(block.expansions, function (expansion) {
                angular.forEach(expansion.cards, function (card) {
                    cards.push(card);
                });
            });
        });
        return cards;
    }

    var cardsControllers = angular.module("cardsControllers", []);

    cardsControllers.controller("cardsListController", ["$scope", "Cards", function ($scope, Cards) {
        $scope.cards = [];
        new Promise(function (resolve, reject) {
            Cards.query(function (d) {
                resolve(processResult(d));
            });
        }).then(function (data) {
            $scope.cards = data;
            $scope.$digest();
        });

        $scope.cardsCount = 10;
        $scope.query = "";

        $scope.applyFilter = function () {
            console.log($scope.filterForm.cardsCount.$error);
        };
    }]);

    cardsControllers.controller("cardDetailController", ["$scope", "Cards", "$routeParams",
        function ($scope, Cards, $routeParams) {
            $scope.card = {};
            var cards = $scope.$parent.cards;

            new Promise(function (resolve, reject) {
                if (!cards) {
                    Cards.query(function (d) {
                        resolve(processResult(d));
                    });
                }
                else {
                    resolve(cards);
                }
            }).then(function (data) {
                var card = data.filter(function (i) {
                    return i.id == $routeParams.cardId;
                });
                card = card.length ? card[0] : {};

                $scope.card = card;
                $scope.$digest();
            });
        }]);  //end of cardDetailController

})();
