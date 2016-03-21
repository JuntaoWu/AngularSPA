
var mainApp = angular.module("mainApp", ["ngRoute", "cardsControllers", "cardsServices"]);

mainApp.config("$routeProvider", function ($routeProvider) {
    $routeProvider.when("/cards", {
        templateUrl: "Views/cards/list.html",
        controller: "cardsListController"
    }).when("/cards/:cardId", {
        templateUrl: "Views/cards/show.html",
        controller: "cardDetailController"
    }).otherwise({
        redirectTo: "/cards"
    });
});