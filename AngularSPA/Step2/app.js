
//The first way: register the controller directly to the app module.
var mainApp = angular.module("mainApp", []);

//Second way: register the dependency to the app module.
//var mainApp = angular.module("mainApp", ["cardsControllers"]);