
var mainApp = angular.module("mainApp", ["ui.router", "ngAnimate", "cardsControllers", "cardsServices"]);

mainApp.config(["$stateProvider", function ($stateProvider) {
    $stateProvider
        .state("cardsList", {
            url: '/cards',
            templateUrl: "Views/cards/index.html",
            controller: "cardsListController"
        })
        .state("cardsList.cardDetail", {
            url: '/:cardId',
            views: {
                detail: {
                    templateUrl: "Views/cards/detail.html",
                    controller: "cardDetailController"
                }
            }
        });
}]);