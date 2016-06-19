"use strict";

let Countered = angular.module('NotDolls', [
		'ngRoute'
	]);

Countered.config(['$routeProvider',
	function ($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl : 'partials/main.html',
				controller: 'MainController'
			})
			// .when('/create', {
			// 	templateUrl : 'partials/newFigurine.html',
			// 	controller: 'NewFigurineController'
			// })
			// .when('/register', {
			// 	templateUrl : 'partials/register.html',
			// 	controller: 'RegistrationController'
			// })
			.otherwise('/');
	}])